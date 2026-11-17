#!/usr/bin/env python3
"""The page INSIDE the APK (assets/www, opened over file:// like the WebView does) with a fake window.MMAndroid:
it starts without errors, plays from .ogg paths, pairs with the web version through the fake GitHub, both sync the same ₩,
Back closes the sync sheet (the JS that MainActivity.onBackPressed runs), onPause JS uploads at once, new-version bar.
Also checks the APK itself: package, versionCode = android/verze.txt, permissions, certificate = the original key.
Run:  python3 testy/test_apk.py dist/MoonlightMart-1.26.apk   (needs index.html from scripts/build_web.py)"""
import os, sys, asyncio, json, re, subprocess, tempfile, zipfile
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
HERE = os.path.dirname(os.path.abspath(__file__))
src = open(os.path.join(HERE, 'test_sync.py'), encoding='utf-8').read().replace("if __name__ == '__main__':\n    asyncio.run(main())", '')
T = {'__file__': os.path.join(HERE, 'test_sync.py')}; exec(compile(src, 'test_sync', 'exec'), T)
ok, wait, device, setup_first, join, sync, state, mut, G, TOK, E = (T[k] for k in ('ok', 'wait', 'device', 'setup_first', 'join', 'sync', 'state', 'mut', 'G', 'TOK', 'E'))
from playwright.async_api import async_playwright

CERT = '8e9fbcd43ce24a6a9b05710e8943c162fdb93a36a912dd19a03f99ba4585286a'
BACK = ("(function(){try{if(document.getElementById('sysheet')&&MM.sync){MM.sync.close();return 1}"
        "if(MM.G&&MM.G.inRound){MM.G.leave();return 1}if(MM.G&&MM.G.screen!=='home'&&MM.S.cur.tab==='game'){MM.G.screen='home';MM.app.render();return 1}}catch(e){}return 0})()")
PAUSE = "try{MM.tallyFlush();MM.saveNow();MM.AM.lesson.pause();MM.AM.track.pause()}catch(e){}try{if(MM.sync)MM.sync.leave()}catch(e){}"

async def main():
    apk = sys.argv[1]
    root = os.path.dirname(HERE)
    vc, vn = open(os.path.join(root, 'android/verze.txt')).read().split()
    # the APK itself
    java = subprocess.run(['java', '-jar', os.path.join(root, 'tools/android-sdk/apksigner.jar'), 'verify', '--print-certs', apk], capture_output=True, text=True).stdout
    ok('certificate = the original key (8E:9F:BC:D4 … 85:28:6A)', CERT in java, java[-300:])
    badge = subprocess.run([os.path.join(root, 'tools/android-sdk/aapt2'), 'dump', 'badging', apk], capture_output=True, text=True).stdout
    ok('package and version', f"package: name='cz.moonlightmart.app' versionCode='{vc}' versionName='{vn}'" in badge, badge.splitlines()[0])
    perms = sorted(re.findall(r"uses-permission: name='([^']+)'", badge))
    ok('permissions: INTERNET + CAMERA only', perms == ['android.permission.CAMERA', 'android.permission.INTERNET'], perms)
    ok('camera not required', "uses-feature-not-required: name='android.hardware.camera'" in badge)
    z = zipfile.ZipFile(apk); names = z.namelist()
    ok('page at assets/www/index.html (same address as before: progress stays)', 'assets/www/index.html' in names)
    ok('no keys or tokens inside', not any(re.search(r'\.(jks|keystore|pem)$', n) for n in names) and not re.search(rb'github_pat_[A-Za-z0-9_]{20,}', z.read('assets/www/index.html')))
    tmp = tempfile.mkdtemp(); z.extractall(tmp, [n for n in names if n.startswith('assets/www/') and not n.startswith('assets/www/audio/')])
    page = 'file://' + os.path.join(tmp, 'assets/www/index.html')
    ok('audio paths are .ogg', ".ogg'" in open(os.path.join(tmp, 'assets/www/index.html'), encoding='utf-8').read())

    url = T['serve']()
    async with async_playwright() as pw:
        b = await pw.chromium.launch()
        P = await device(b, page, 'APK', android=vn)
        ok('APK page starts without errors', not P.errs, P.errs[:3])
        await mut(P, "S.won=500;S.days['2026-11-17']=10;MM.LS(2).game.shifts.A={done:true,best:90,runs:1}")
        code = await setup_first(P, TOK[0])
        ok('APK: first device set up', len(code.split()) == 8)
        ok('Back closes the sync sheet', await E(P, BACK) == 1 and not await E(P, "!!document.getElementById('sysheet')"))
        W = await device(b, url, 'WEB')
        await join(W, TOK[1], code)
        ok('web took the APK’s progress', (await state(W))['w'] == 500)
        await mut(W, "S.won+=25"); await sync(W)
        await sync(P); ok('APK got the web’s ₩', (await state(P))['w'] == 525)
        await wait(P, '!MM.sync.busy'); n0 = len(G.log)
        await E(P, "MM.S.won+=5;MM.save()")   # pending save (900 ms) when the app is left
        await E(P, PAUSE)
        await wait(P, '!MM.sync.busy&&MM.sync.SY.lastSync>Date.now()-3000', 8000)
        log = G.log[n0:]
        ok('onPause: saved and uploaded at once, no downloads', any(m == 'POST' and u.endswith('/git/blobs') for m, u in log) and not any('matching-refs' in u for m, u in log), log)
        await sync(W); ok('web has it', (await state(W))['w'] == 530)
        G.latest = 'v' + vn.split('.')[0] + '.' + str(int(vn.split('.')[1]) + 1)
        await E(P, "localStorage.removeItem('moonlight-mart-update');MM.sync.upCheck()")
        await P.wait_for_selector('#upbar', timeout=8000); ok('new version bar in the APK', G.latest[1:] in await P.inner_text('#upbar'))
        ok('no script errors', not P.errs and not W.errs, (P.errs + W.errs)[:3])
        await b.close()
    print('\n' + ('ALL APK TESTS PASSED' if not T['fails'] else f"{len(T['fails'])} FAILED: " + ', '.join(T['fails'])))
    sys.exit(1 if T['fails'] else 0)

asyncio.run(main())
