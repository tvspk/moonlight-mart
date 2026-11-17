#!/usr/bin/env python3
"""Pairing by QR code with a FAKE camera (Chromium plays a video made from a picture of the QR code).
Device A shows its code as QR; a picture of it becomes a y4m video (ffmpeg); device B scans it and joins.
Also: a foreign QR code (another app) is refused and scanning goes on; Cancel turns the camera off.
Run:  python3 testy/test_qr.py   (needs index.html from scripts/build_web.py, ffmpeg)"""
import os, sys, asyncio, subprocess, tempfile
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
src = open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'test_sync.py'), encoding='utf-8').read().replace("if __name__ == '__main__':\n    asyncio.run(main())", '')
T = {'__file__': os.path.join(os.path.dirname(os.path.abspath(__file__)), 'test_sync.py')}; exec(compile(src, 'test_sync', 'exec'), T)
ok, wait, device, open_sync, setup_first, TOK = T['ok'], T['wait'], T['device'], T['open_sync'], T['setup_first'], T['TOK']
from playwright.async_api import async_playwright

async def qr_video(page, text, path):
    """Renders text as a QR code (the app's own encoder) on white, screenshots it, makes a 640x480 y4m video."""
    png = path + '.png'
    await page.evaluate("t=>{const d=document.createElement('div');d.id='qrshot';d.style='position:fixed;inset:0;background:#fff;z-index:99999;display:flex;align-items:center;justify-content:center';"
                        "d.innerHTML='<div style=\"width:300px\">'+MMQR.svg(t,'M')+'</div>';document.body.append(d)}", text)
    await page.screenshot(path=png, clip={'x': 0, 'y': 100, 'width': 375, 'height': 600})
    await page.evaluate("document.getElementById('qrshot').remove()")
    subprocess.run(['ffmpeg', '-loglevel', 'error', '-y', '-loop', '1', '-i', png, '-t', '3', '-r', '10',
                    '-vf', 'scale=640:480:force_original_aspect_ratio=decrease,pad=640:480:(ow-iw)/2:(oh-ih)/2:white,format=yuv420p', path], check=True)

async def main():
    url = T['serve']()
    tmp = tempfile.mkdtemp()
    async with async_playwright() as pw:
        b = await pw.chromium.launch()
        A = await device(b, url, 'A')
        code = await setup_first(A, TOK[0])
        await qr_video(A, 'MOONLIGHT:' + code.upper(), tmp + '/good.y4m')
        await qr_video(A, 'MEMOCHAT:' + code.upper(), tmp + '/foreign.y4m')
        await b.close()
        cam = ['--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream']
        # foreign code: refused, keeps looking; Cancel stops the camera
        b2 = await pw.chromium.launch(args=cam + ['--use-file-for-fake-video-capture=' + tmp + '/foreign.y4m'])
        C = await device(b2, url, 'C')
        await open_sync(C); await C.click('#sy-setup'); await C.fill('#sy-tok', TOK[2]); await C.click('#sy-connect')
        await C.wait_for_selector('#sy-code'); await C.click('#sy-scan')
        await wait(C, "(document.getElementById('sy-cst')||{}).textContent==='That isn’t a Moonlight Mart pairing code.'", 20000)
        ok('foreign QR refused, still scanning', await C.evaluate('!!MM.sync.cam&&!MM.sync.cam.done'))
        await C.click('#sy-scanback'); await C.wait_for_selector('#sy-code')
        ok('Cancel turns the camera off', await C.evaluate('MM.sync.cam===null'))
        ok('C: no script errors', not C.errs, C.errs[:3])
        await b2.close()
        # the right code: B joins by scanning
        b3 = await pw.chromium.launch(args=cam + ['--use-file-for-fake-video-capture=' + tmp + '/good.y4m'])
        B = await device(b3, url, 'B')
        await open_sync(B); await B.click('#sy-setup'); await B.fill('#sy-tok', TOK[1]); await B.click('#sy-connect')
        await B.wait_for_selector('#sy-code'); await B.click('#sy-scan')
        ok('camera screen at 375 px without sideways scroll', await B.evaluate('document.documentElement.scrollWidth') <= 376)
        await wait(B, 'MM.sync.SY&&MM.sync.SY.joined', 25000)
        ok('B joined by QR with the same code', await B.evaluate('MM.sync.SY.code') == code)
        ok('camera off after scanning', await B.evaluate('MM.sync.cam===null'))
        ok('B: no script errors', not B.errs, B.errs[:3])
        await b3.close()
    print('\n' + ('ALL QR TESTS PASSED' if not T['fails'] else f"{len(T['fails'])} FAILED: " + ', '.join(T['fails'])))
    sys.exit(1 if T['fails'] else 0)

asyncio.run(main())
