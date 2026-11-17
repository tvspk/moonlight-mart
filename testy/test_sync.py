#!/usr/bin/env python3
"""Sync between devices through a FAKE GitHub (no real network). Each device = its own browser context (own localStorage).
Real time (no fake clock), so "last changed wins" is tested with real, different times. The page is served over http with
its real CSP (index.html from scripts/build_web.py), so nothing here may rely on eval.
Checks: first device (new code), next devices (code by its first 4 letters, wrong code, public repository, bad token),
encryption (only ciphertext on "GitHub", decrypted here with the same HKDF/AES-GCM), ₩ earned AND spent and correct answers
per day summed over devices (also when changed at the same time), shifts (done = OR, best = max, runs summed), sync again
changes nothing and uploads nothing, last changed wins per skill / Mnemo card / weak spot / lesson entry / theme, keyboard
stays on its device, join with own progress (take / add), upload by itself after a change and on leaving the app (quick:
no downloads), new token after 401, damaged data of another device, transfer code and erase turn sync off on that device
only, QR text, new-version bar (fake MMAndroid), no Czech, no sideways scroll at 375 px, no script errors.
Run:  python3 testy/test_sync.py   (needs index.html: python3 -I scripts/build_web.py)"""
import os, sys, asyncio, json, base64, hashlib, gzip, datetime as dt, threading, functools, http.server, re
from playwright.async_api import async_playwright
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.kdf.hkdf import HKDF
from cryptography.hazmat.primitives.ciphers.aead import AESGCM

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
fails = []
def ok(n, c, x=''):
    print(('OK  ' if c else 'FAIL') + ' ' + n + (' | ' + str(x)[:300] if x != '' else ''), flush=True)
    if not c: fails.append(n)

class GH:
    """Just enough of the GitHub REST API (as used by src/sync.js)."""
    REPO = 'tvspk/moonlight-mart-sync'
    def __init__(s):
        s.tokens = {'github_pat_' + x * 30 for x in 'abcd'}
        s.private = True; s.n = 0; s.log = []; s.latest = 'v1.27'
        s.contents = {'README.md': b'# sync'}; s.blobs = {}; s.trees = {}; s.commits = {}; s.refs = {'main': 'f' * 40}
    def sha(s, b=b''):
        s.n += 1; return hashlib.sha1(b + str(s.n).encode()).hexdigest()
    async def handle(s, r):
        req = r.request; u = req.url.split('api.github.com', 1)[1]; m = req.method
        H = {'access-control-allow-origin': '*', 'content-type': 'application/json'}
        def J(o, st=200): return r.fulfill(status=st, headers=H, body=json.dumps(o))
        if m == 'OPTIONS': return await r.fulfill(status=204, headers={**H, 'access-control-allow-headers': '*', 'access-control-allow-methods': '*'})
        if u == '/repos/tvspk/moonlight-mart/releases/latest': return await J({'tag_name': s.latest})
        auth = (await req.all_headers()).get('authorization', '')
        if auth.replace('Bearer ', '') not in s.tokens: return await J({'message': 'Bad credentials'}, 401)
        s.log.append((m, u))
        body = json.loads(req.post_data) if req.post_data else None
        P = '/repos/' + s.REPO
        if u == '/user': return await J({'login': 'tvspk'})
        if u == P: return await J({'full_name': s.REPO, 'private': s.private})
        if not u.startswith(P): return await J({'message': 'Not Found'}, 404)
        u = u[len(P):]
        if u.startswith('/contents/'):
            f = u[len('/contents/'):]
            if m == 'GET': return await (J({'content': base64.b64encode(s.contents[f]).decode()}) if f in s.contents else J({'message': 'Not Found'}, 404))
            if m == 'PUT':
                if f in s.contents: return await J({'message': 'sha wasn’t supplied'}, 422)
                s.contents[f] = base64.b64decode(body['content']); return await J({'content': {}}, 201)
        if u.startswith('/git/matching-refs/heads/'):
            pre = u.split('/heads/', 1)[1]
            return await J([{'ref': 'refs/heads/' + k, 'object': {'sha': v}} for k, v in s.refs.items() if k.startswith(pre)])
        if u.startswith('/git/commits/') and m == 'GET':
            c = s.commits.get(u.split('/')[-1]); return await (J(c) if c else J({'message': 'Not Found'}, 404))
        if u.startswith('/git/trees/') and m == 'GET': return await J({'tree': s.trees[u.split('/')[-1]]})
        if u.startswith('/git/blobs/') and m == 'GET':
            return await r.fulfill(status=200, headers={**H, 'content-type': 'application/octet-stream'}, body=s.blobs[u.split('/')[-1]])
        if u == '/git/blobs' and m == 'POST':
            b = base64.b64decode(body['content']); h = s.sha(b); s.blobs[h] = b; return await J({'sha': h}, 201)
        if u == '/git/trees' and m == 'POST':
            h = s.sha(); s.trees[h] = [{**e, 'type': 'blob'} for e in body['tree']]; return await J({'sha': h}, 201)
        if u == '/git/commits' and m == 'POST':
            h = s.sha(); c = {'sha': h, 'tree': {'sha': body['tree']}, 'parents': body['parents'],
                              'committer': {'date': dt.datetime.now(dt.timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')}}
            s.commits[h] = c; return await J(c, 201)
        if u == '/git/refs' and m == 'POST':
            k = body['ref'].replace('refs/heads/', '')
            if k in s.refs: return await J({'message': 'Reference already exists'}, 422)
            s.refs[k] = body['sha']; return await J({}, 201)
        if u.startswith('/git/refs/heads/') and m == 'PATCH':
            k = u.split('/heads/', 1)[1]
            if k not in s.refs: return await J({'message': 'Not Found'}, 422)
            s.refs[k] = body['sha']; return await J({})
        return await J({'message': 'Not Found ' + u}, 404)
    def state_of(s, br, code):
        c = s.commits[s.refs[br]]; e = [x for x in s.trees[c['tree']['sha']] if x['path'] == 'state'][0]; raw = s.blobs[e['sha']]
        key = HKDF(algorithm=hashes.SHA256(), length=32, salt=b'Moonlight Mart sync v1', info=b'state').derive(code.encode())
        return json.loads(gzip.decompress(AESGCM(key).decrypt(raw[:12], raw[12:], b'state')))
    def uploads(s): return sum(1 for m, u in s.log if m == 'POST' and u.endswith('/git/blobs'))

G = GH()
TOK = ['github_pat_' + x * 30 for x in 'abcd']

def serve():
    class Q(http.server.SimpleHTTPRequestHandler):
        def log_message(self, *a): pass
    h = functools.partial(Q, directory=ROOT)
    srv = http.server.ThreadingHTTPServer(('127.0.0.1', 0), h)
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    return f'http://127.0.0.1:{srv.server_port}/index.html'

async def no_fonts(r):
    await r.fulfill(status=200, headers={'content-type': 'text/css', 'access-control-allow-origin': '*'}, body='')

async def device(browser, url, name, android=None):
    ctx = await browser.new_context(viewport={'width': 375, 'height': 800}, service_workers='block')
    p = await ctx.new_page(); p.errs = []; p.name = name
    p.on('pageerror', lambda e: p.errs.append(str(e)))
    p.on('console', lambda m: p.errs.append(m.text) if m.type == 'error' and 'Failed to load resource' not in m.text else None)
    await ctx.route('https://api.github.com/**', G.handle)
    await ctx.route(re.compile(r'https://fonts\.(googleapis|gstatic)\.com/.*'), no_fonts)
    if android:
        await ctx.add_init_script("window.MMAndroid={version:()=>%s,open:u=>{window.__opened=u},copy:()=>{}}" % json.dumps(android))
    await p.goto(url)
    await wait(p, "!!(window.MM&&MM.sync&&document.querySelector('#hdr .hdr-in'))")
    return p

E = lambda p, js: p.evaluate(js)
async def wait(p, js, timeout=15000):
    # polls with evaluate (wait_for_function evaluates a string, which the page's CSP forbids: no 'unsafe-eval')
    t = 0
    while not await p.evaluate(js):
        await asyncio.sleep(0.1); t += 100
        if t > timeout: raise TimeoutError(p.name + ': ' + js)
SYS = 'MM.sync.SY'
async def state(p):
    return await E(p, """(()=>{const S=MM.S,Y=MM.sync.SY;return{w:S.won,days:S.days,sk:S.skills,mh:S.mh.c,L:S.L,coll:S.coll.slice().sort(),fixed:S.fixed.slice().sort(),
      mis:S.mistakes.map(m=>m.qid+':'+m.n).sort(),theme:S.theme,kbd:S.kbd,on:!!Y,err:Y&&Y.lastError,dev:Y?Object.keys(Y.dev).length:0}})()""")
async def mut(p, js): await E(p, '(()=>{const S=MM.S;' + js + ';MM.saveNow()})()')

async def open_sync(p):
    await E(p, 'MM.sync.open()'); await p.wait_for_selector('#sysheet .sy-card')

async def setup_first(p, tok):
    await open_sync(p); await p.click('#sy-setup')
    await p.fill('#sy-tok', tok); await p.click('#sy-connect')
    await p.wait_for_selector('ol.sy-words')
    words = await p.eval_on_selector_all('ol.sy-words li', 'l=>l.map(x=>x.textContent)')
    await p.click('#sy-saved')
    await wait(p, SYS + '&&' + SYS + '.joined')
    return ' '.join(words)

async def join(p, tok, code, choice=None):
    await open_sync(p); await p.click('#sy-setup')
    await p.fill('#sy-tok', tok); await p.click('#sy-connect')
    await p.wait_for_selector('#sy-code'); await p.fill('#sy-code', code); await p.click('#sy-codego')
    if choice:
        await p.wait_for_selector('#sy-' + choice); await p.click('#sy-' + choice)
    await wait(p, SYS + '&&' + SYS + '.joined')

async def sync(p):
    for _ in range(50):
        await wait(p, '!MM.sync.busy', 20000)
        r = await E(p, 'MM.sync.now(true)')
        if r or not await E(p, 'MM.sync.busy'): return r
    return False

async def nosideways(p, what):
    w = await E(p, 'document.documentElement.scrollWidth')
    ok(f'{p.name}: no sideways scroll ({what})', w <= 376, w)

D1, D2 = '2026-11-16', '2026-11-17'
async def main():
    url = serve()
    async with async_playwright() as pw:
        b = await pw.chromium.launch()
        A = await device(b, url, 'A')
        # Mnemo Hooks progress saved with the card ids before 2026-11-17 is kept (ids renamed, same numbers)
        old = "'ko-tt'+'mik3-0004'"
        await E(A, f"localStorage.setItem('moonlight-mart-v1',JSON.stringify(Object.assign(MM.defaultState(),{{t:1,mh:{{c:{{[{old}+':r']:[100,3,250,2,0]}}}}}})))")
        await A.reload(); await wait(A, "!!(window.MM&&MM.sync&&document.querySelector('#hdr .hdr-in'))")
        ok('old card ids: progress moved to the new ids', await E(A, "JSON.stringify(MM.S.mh.c)") == '{"ko-k3-0004:r":[100,3,250,2,0]}', await E(A, "JSON.stringify(MM.S.mh.c)"))
        ok('the renamed card exists in the data', await E(A, "MM.mnemo[1].cards.some(c=>c.id==='ko-k3-0004')"))
        await E(A, "localStorage.clear()"); await A.reload(); await wait(A, "!!(window.MM&&MM.sync&&document.querySelector('#hdr .hdr-in'))")
        # the link in Extras (game tab, home screen)
        await E(A, "MM.S.cur.closed=false;MM.S.cur.lesson=3;MM.app.go('game')")
        await wait(A, "!!document.querySelector('[data-act=sync]')")
        await E(A, "document.getElementById('extras').open=true")
        await A.click('[data-act=sync]'); await A.wait_for_selector('#sysheet .sy-card')
        ok('Extras: Sync between devices opens the sheet', True)
        await nosideways(A, 'sync sheet')
        ok('no Czech on the sync sheet', not re.search('[ěščřžůťďň]', await E(A, "document.getElementById('sysheet').innerText")))
        await A.click('#sy-close'); ok('Close', not await E(A, "!!document.getElementById('sysheet')"))

        # progress on A before sync
        await mut(A, f"""S.won=1000;S.days={{'{D1}':12}};S.skills={{'s1':{{lvl:2,due:'2026-12-01'}},'s2':{{lvl:1,due:'2026-11-20'}}}};
          S.mh.c['k1:r']=[100,3,250,2,0];const L=MM.LS(3);L.tb.ex['e1']=true;L.tb.mode='fill';L.wb.i['w1']='ok';
          L.game.shifts.A={{done:true,best:80,runs:2}};L.game.reads['r1']=true;S.coll.push('l3.snackA');S.fixed.push('sign');
          S.mistakes.push({{skill:'s9',qid:'q1',lesson:3,n:2}},{{skill:'s8',qid:'q2',lesson:3,n:1}});S.theme='dark';S.kbd='system'""")
        # errors while setting up
        await open_sync(A); await A.click('#sy-setup'); await A.fill('#sy-tok', 'github_pat_' + 'x' * 30); await A.click('#sy-connect')
        await A.wait_for_selector('#sy-err:not([hidden])'); ok('bad token: message', 'invalid' in await A.inner_text('#sy-err'))
        G.private = False; await A.fill('#sy-tok', TOK[0]); await A.click('#sy-connect')
        await wait(A, "document.getElementById('sy-err').textContent.includes('public')"); ok('public repository refused', True)
        G.private = True
        code = await setup_first(A, TOK[0])
        ok('8 words', len(code.split()) == 8, code)
        ok('meta file in main', 'moonlight-mart-sync.json' in G.contents)
        meta = json.loads(G.contents['moonlight-mart-sync.json']); ok('meta: app + check, no code inside', meta['app'] == 'MoonlightMart' and code.split()[0] not in json.dumps(meta))
        brA = [k for k in G.refs if k.startswith('mm-')]; ok('A has its branch', len(brA) == 1, brA)
        raw = b''.join(G.blobs.values()); ok('only ciphertext on GitHub', b'won' not in raw and b'snack' not in raw and b'MoonlightMart' not in raw)
        st = G.state_of(brA[0], code); ok('decrypts with the code; own ₩ 1000, day 12', st['app'] == 'MoonlightMart' and st['own'].get('w') == 1000 and st['own'].get('d.' + D1) == 12, st['own'])
        ok('kbd and cur are not uploaded', 'kbd' not in json.dumps(st) and 'system' not in json.dumps(st), [k for k in st['it']][:20])
        ok('commit without parents', all(c['parents'] == [] for c in G.commits.values()))
        ok('token/code not in the saved progress', TOK[0] not in await E(A, "localStorage.getItem('moonlight-mart-v1')") and code.split()[0] not in await E(A, "localStorage.getItem('moonlight-mart-v1')"))
        tc = await E(A, 'MM.exportCode()'); ok('transfer code has no token nor words', TOK[0] not in json.dumps(await E(A, f'MM.importCode({json.dumps(tc)})')))

        # B: empty device, joins with a wrong code first, then with the first 4 letters of each word
        B = await device(b, url, 'B')
        await open_sync(B); await B.click('#sy-setup'); await B.fill('#sy-tok', TOK[1]); await B.click('#sy-connect')
        await B.wait_for_selector('#sy-code'); await B.fill('#sy-code', 'abandon ' * 8); await B.click('#sy-codego')
        await B.wait_for_selector('#sy-err:not([hidden])'); ok('wrong code refused', 'match' in await B.inner_text('#sy-err'))
        short = ' '.join(w[:4] for w in code.split()).upper()
        await B.fill('#sy-code', short); await B.click('#sy-codego'); await wait(B, SYS + '&&' + SYS + '.joined', timeout=15000)
        sa, sb = await state(A), await state(B)
        ok('B took ₩, days, skills, Mnemo', sb['w'] == 1000 and sb['days'] == {D1: 12} and sb['sk'] == sa['sk'] and sb['mh'] == {'k1:r': [100, 3, 250, 2, 0]}, sb)
        ok('B took the lesson entries and the shift', sb['L'].get('3') == sa['L'].get('3'), (sb['L'], sa['L']))
        ok('B took snacks, repairs, weak spots, theme', sb['coll'] == ['l3.snackA'] and sb['fixed'] == ['sign'] and sb['mis'] == ['q1:2', 'q2:1'] and sb['theme'] == 'dark', sb)
        ok('B keeps its own keyboard', sb['kbd'] == 'screen')
        ok('B: streak from the synced days', await E(B, 'MM.streak()') == await E(A, 'MM.streak()'))
        await nosideways(B, 'after join')

        # at the same time: A earns 50 and 3 answers today, B earns 30, spends 20 (hint), 4 answers today, one more shift run
        # with a worse score; both change skill s1, B later
        await mut(A, f"S.won+=50;S.days['{D2}']=(S.days['{D2}']||0)+3;S.skills.s1={{lvl:3,due:'2027-01-01'}}")
        await asyncio.sleep(2.5)   # GitHub's clock (skew) is known to about a second: changes closer than that may go either way
        await mut(B, f"""S.won+=30;S.won-=20;S.days['{D2}']=(S.days['{D2}']||0)+4;const s=MM.LS(3).game.shifts.A;s.runs++;s.best=Math.max(s.best,60);
          MM.LS(3).game.shifts.B={{done:true,best:55,runs:1}};S.coll.push('l3.snackB');S.skills.s1={{lvl:0,due:'2026-11-18'}};S.mh.c['k2:p']=[5,1,250,1,0]""")
        for p in (A, B, A): ok(f'{p.name}: sync ok', await sync(p))
        sa, sb = await state(A), await state(B)
        ok('₩ summed (1000+50+30-20 = 1060) on both', sa['w'] == sb['w'] == 1060, (sa['w'], sb['w']))
        ok('answers per day summed (3+4 = 7)', sa['days'] == sb['days'] == {D1: 12, D2: 7}, (sa['days'], sb['days']))
        shA = sa['L']['3']['game']['shifts']
        ok('shift A: runs 3, best 80 kept', shA['A'] == {'done': True, 'best': 80, 'runs': 3} and sb['L']['3']['game']['shifts']['A'] == shA['A'], shA)
        ok('shift B from B on A', shA.get('B') == {'done': True, 'best': 55, 'runs': 1}, shA)
        ok('snacks union', sa['coll'] == sb['coll'] == ['l3.snackA', 'l3.snackB'])
        ok('skill changed later on B wins on both', sa['sk']['s1'] == sb['sk']['s1'] == {'lvl': 0, 'due': '2026-11-18'}, sa['sk']['s1'])
        ok('Mnemo card from B on A', sa['mh'].get('k2:p') == [5, 1, 250, 1, 0])
        n = G.uploads()
        for p in (A, B, A, B): await sync(p)
        sa2 = await state(A)
        ok('sync again: nothing changes', sa2['w'] == 1060 and sa2['sk'] == sa['sk'] and sa2['days'] == sa['days'])
        ok('sync again: nothing uploaded', G.uploads() == n, (n, G.uploads()))

        # per item: a weak spot fixed on A, a workbook entry changed on B, the theme switched on B, a lesson entry removed on A
        await mut(A, "S.mistakes=S.mistakes.filter(m=>m.qid!=='q1');delete MM.LS(3).tb.ex.e1;MM.LS(4).tb.g['g7']='x'")
        await mut(B, "MM.LS(3).wb.i.w1='late';MM.LS(3).wb.i.w2='ok';S.theme='light'")
        for p in (A, B, A): await sync(p)
        sa, sb = await state(A), await state(B)
        ok('weak spot removed everywhere', sa['mis'] == sb['mis'] == ['q2:1'], (sa['mis'], sb['mis']))
        ok('workbook entries from B on A', sa['L']['3']['wb']['i'] == {'w1': 'late', 'w2': 'ok'}, sa['L']['3']['wb'])
        ok('removed textbook entry gone on B, new lesson 4 entry there', 'e1' not in sb['L']['3']['tb']['ex'] and sb['L']['4']['tb']['g'] == {'g7': 'x'}, sb['L'].get('4'))
        ok('theme: later change wins', sa['theme'] == sb['theme'] == 'light' and await E(A, "document.documentElement.dataset.theme") == 'light')
        ok('keyboards stay apart', sa['kbd'] == 'system' and sb['kbd'] == 'screen')

        # C with its own progress: "Take the progress from my other devices"
        C = await device(b, url, 'C')
        await mut(C, f"S.won=999;S.days['{D1}']=30;MM.LS(5).game.shifts.A={{done:true,best:90,runs:4}};S.kbd='system'")
        await join(C, TOK[2], code, 'adopt')
        sc = await state(C); ok('C took (no 999, no own lesson 5)', sc['w'] == 1060 and '5' not in sc['L'] and sc['days'] == {D1: 12, D2: 7}, (sc['w'], list(sc['L'])))
        ok('C keeps its keyboard after taking', sc['kbd'] == 'system')
        await sync(A); ok('A unchanged by C', (await state(A))['w'] == 1060)
        # D with its own progress: "Add this device’s progress"
        D = await device(b, url, 'D')
        await mut(D, f"S.won=40;S.days['{D2}']=2;MM.LS(6).game.shifts.A={{done:true,best:70,runs:1}};S.skills.s5={{lvl:1,due:'2027-02-02'}}")
        await join(D, TOK[3], code, 'add')
        for p in (A, B, C, D): await sync(p)
        al = [await state(p) for p in (A, B, C, D)]
        ok('D added: ₩ 1100 on all four', all(s['w'] == 1100 for s in al), [s['w'] for s in al])
        ok('D added: day 9 answers, its shift and skill everywhere', all(s['days'][D2] == 9 and s['L']['6']['game']['shifts']['A']['runs'] == 1 and 's5' in s['sk'] for s in al), [s['days'] for s in al])
        ok('paired devices: 4', (await state(A))['dev'] == 3)
        await open_sync(A); ok('sheet shows 4 devices', 'Paired devices: 4' in await A.text_content('#sysheet'))
        await A.click('#sy-close')

        # by itself: B changes outside a round → uploads in ~3 s; A picks it up within a minute
        t0 = await E(B, 'Date.now()')
        await mut(B, "S.won+=5")
        await wait(B, f'{SYS}.lastSync>{t0}&&!MM.sync.busy', 9000)
        ok('B uploaded within ~3 s', (await E(B, SYS + '.lastSync')) - t0 < 7000, (await E(B, SYS + '.lastSync')) - t0)
        await wait(A, 'MM.S.won===1105', timeout=80000)
        ok('A picked it up by itself within a minute', True)
        # leaving the app: quick upload (no downloads, no branch list)
        await sync(A); await sync(B); n0 = len(G.log)
        await mut(A, "S.won+=7")   # A changed: B must not download it while leaving
        await E(A, 'void 0')
        await wait(A, '!MM.sync.busy', 9000)
        await A.wait_for_timeout(4000); await wait(A, '!MM.sync.busy', 9000)
        n0 = len(G.log)
        await E(B, "MM.S.won+=3;MM.saveNow();Object.defineProperty(document,'hidden',{configurable:true,get:()=>true});Object.defineProperty(document,'visibilityState',{configurable:true,get:()=>'hidden'});document.dispatchEvent(new Event('visibilitychange'))")
        await wait(B, f'!MM.sync.busy&&{SYS}.lastSync>Date.now()-4000', 8000)
        log = G.log[n0:]; bl = [x for x in log if x[1].endswith('/blobs') and x[0] == 'POST']
        ok('leaving: uploaded', len(bl) >= 1, log)
        ok('leaving: no downloads, no branch list', not any(m == 'GET' and ('/git/blobs/' in u or 'matching-refs' in u) for m, u in log), log)
        await E(B, "delete document.hidden;delete document.visibilityState")
        await sync(A); await sync(B); sa, sb = await state(A), await state(B)
        ok('after leaving: both 1115', sa['w'] == sb['w'] == 1115, (sa['w'], sb['w']))

        # bad token on A → message, new token
        G.tokens.discard(TOK[0]); await sync(A)
        await open_sync(A); ok('expired token shown', 'expired' in await A.inner_text('#sy-st'))
        ok('Enter a new token button', await E(A, "!document.getElementById('sy-tok-btn').hidden"))
        G.tokens.add(TOK[0] + 'z'); await A.click('#sy-tok-btn'); await A.fill('#sy-tok', TOK[0] + 'z'); await A.click('text=Continue')
        await wait(A, f"{SYS}.token.endsWith('z')&&!{SYS}.lastError&&!MM.sync.busy", timeout=10000); ok('new token works', True)
        await E(A, 'document.getElementById("sy-close").click()')

        # damaged data from another device: the rest syncs
        bad = G.sha(); G.blobs[bad] = b'\x00' * 40; t = G.sha(); G.trees[t] = [{'path': 'state', 'type': 'blob', 'sha': bad, 'mode': '100644'}]
        cm = G.sha(); G.commits[cm] = {'sha': cm, 'tree': {'sha': t}}; G.refs['mm-0000000000bb'] = cm
        await sync(B); sb = await state(B); ok('damaged branch: rest synced, message', sb['err'] == 'damaged' and sb['w'] == 1115, sb['err'])
        del G.refs['mm-0000000000bb']; await sync(B)

        # transfer code loaded on C: only C changes, sync off there; erase on D: only D wiped, sync off there
        tc = await E(A, 'MM.exportCode()')
        for p in (C, D): await E(p, "document.getElementById('sy-close')&&document.getElementById('sy-close').click()")
        await E(C, "MM.S.cur.closed=false;MM.app.go('game')"); await wait(C, "!!document.getElementById('extras')")
        await E(C, "document.getElementById('extras').open=true"); await C.click('[data-act=import]')
        await C.fill('#codeIn', tc); await C.click('#prevCode'); await C.click('#doImport')
        sc = await state(C); ok('transfer code on C: sync off there', not sc['on'])
        await E(D, "MM.S.cur.closed=false;MM.app.go('game')"); await wait(D, "!!document.getElementById('extras')")
        await E(D, "document.getElementById('extras').open=true"); await D.click('[data-act=reset]')
        ok('erase warns: this device only', 'this device only' in await D.inner_text('#dataPanel'))
        await D.click('#doReset'); sd = await state(D); ok('erase on D: wiped, sync off', sd['w'] == 0 and not sd['on'])
        await E(D, "MM.sync.open()"); ok('note on D’s sync sheet', 'turned off' in await D.inner_text('#sysheet'))
        await sync(A); await sync(B); ok('A and B keep their ₩ after C and D', (await state(A))['w'] == (await state(B))['w'] == 1115)
        # turn off on B
        await open_sync(B); await B.click('#sy-off'); await B.click('#sy-offyes')
        ok('turn off on B', not (await state(B))['on'] and 'off' in await B.inner_text('#sysheet'))

        # pairing code + QR (shown on request; content = MOONLIGHT: + words)
        await open_sync(A); await A.click('#sy-code-btn'); await A.click('#sy-qr-btn')
        ok('QR shown', await E(A, "!!document.querySelector('.sy-qrimg svg')"))
        ok('QR text', await E(A, f"MM.sync.qrCode('MOONLIGHT:'+{SYS}.code.toUpperCase())==={SYS}.code"))
        ok('foreign QR refused', await E(A, f"MM.sync.qrCode('GORSAF:'+{SYS}.code)===null"))
        await nosideways(A, 'QR')

        # new-version bar (APK only)
        Z = await device(b, url, 'Z', android='1.26')
        await Z.wait_for_selector('#upbar', timeout=10000); ok('new version bar', '1.27' in await Z.inner_text('#upbar'))
        await Z.click('#up-get'); ok('download opens the release', await E(Z, 'window.__opened') == 'https://github.com/tvspk/moonlight-mart/releases/latest/download/moonlight-mart.apk')
        G.latest = 'v1.26'; await E(Z, "localStorage.removeItem('moonlight-mart-update');MM.sync.upCheck()"); await Z.wait_for_timeout(800)
        ok('same version: no bar', not await E(Z, "!!document.getElementById('upbar')"))
        W = await device(b, url, 'W')
        await W.wait_for_timeout(4500); ok('web (no app): no bar', not await E(W, "!!document.getElementById('upbar')"))

        for p in (A, B, C, D, Z, W):
            ok(f'{p.name}: no script errors', not p.errs, p.errs[:3])
        await b.close()
    print('\n' + ('ALL SYNC TESTS PASSED' if not fails else f'{len(fails)} FAILED: ' + ', '.join(fails)))
    sys.exit(1 if fails else 0)

if __name__ == '__main__':
    asyncio.run(main())
