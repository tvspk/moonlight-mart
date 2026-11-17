"""Touch test (mobile emulation): fast taps on the on-screen keyboard and on tiles must all register.
Needs tools/rangeserver.py dist 8765."""
import time
from playwright.sync_api import sync_playwright
URL = 'http://127.0.0.1:8765/moonlight-mart.html'
OUT = '/home/claude/test/shots/'
with sync_playwright() as p:
    b = p.chromium.launch()
    ctx = b.new_context(viewport={'width': 390, 'height': 844}, device_scale_factor=2, is_mobile=True, has_touch=True)
    page = ctx.new_page(); errs = []
    page.on('pageerror', lambda e: errs.append(str(e)))
    page.goto(URL); page.wait_for_selector('.lrow')
    page.screenshot(path=OUT + 'acc_top.png')
    page.tap('.lrow[data-ln="4"]'); page.wait_for_selector('.tb-text')
    page.screenshot(path=OUT + 'acc_l4.png')
    # keyboard: type 앉을까요 with fast taps (25 ms apart) into exercise 1
    page.tap('#x-x1'); page.wait_for_selector('.kbd:not([hidden])')
    def key(k):
        box = page.locator(f'.kbd .key[data-k="{k}"]').bounding_box()
        page.touchscreen.tap(box['x'] + box['width'] / 2, box['y'] + box['height'] / 2); time.sleep(0.025)
    for k in ['ㅂ', 'ㅗ', 'ㄹ', '⇧', 'ㄲ', 'ㅏ', 'ㅇ', 'ㅛ']: key(k)
    v = page.input_value('#x-x1'); print('fast keys → 볼까요 :', v, 'OK' if v == '볼까요' else 'BAD')
    for k in ['⌫', '⌫', '⌫']: key(k)
    print('after 3× ⌫:', page.input_value('#x-x1'))
    # hold backspace
    box = page.locator('.kbd .key[data-k="⌫"]').bounding_box()
    page.mouse.move(box['x'] + 5, box['y'] + 5); page.mouse.down(); time.sleep(0.8); page.mouse.up()
    print('after holding ⌫:', repr(page.input_value('#x-x1')))
    page.screenshot(path=OUT + 'kbd.png')
    # tiles: go to game shift B scene 1 (tiles), tap tiles quickly
    page.tap('.tab[data-tab="game"]'); page.wait_for_selector('.shift-card')
    page.tap('.shift-card[data-act="shift:B"]'); page.tap('#phaseGo'); page.wait_for_selector('.bank .tile')
    ans = page.evaluate("MM.game[4].shifts.B.scenes[0].q.ans[0]").split(' ')
    t0 = time.time()
    for w in ans:
        el = [x for x in page.locator('.bank .tile:not([disabled])').all() if x.inner_text() == w][0]
        bb = el.bounding_box(); page.touchscreen.tap(bb['x'] + bb['width'] / 2, bb['y'] + bb['height'] / 2); time.sleep(0.03)
    tray = ' '.join(page.locator('.tray .tile').all_inner_texts())
    print('fast tiles:', tray, 'OK' if tray == ' '.join(ans) else 'BAD')
    page.tap('.tray .tile >> nth=0'); print('tray after removing first:', page.locator('.tray .tile').all_inner_texts())
    b.close()
    print('errors:', errs or 'none')
