"""Mnemo Hooks is a screen of its own (2026-11-15): lesson rows hidden, “◂ Counter” in the header (one tap, no
confirmation), back to the counter; shifts still ask before leaving. Usage: python3 tools/run_mnemo_screen.py (rangeserver on 8765)"""
from playwright.sync_api import sync_playwright
errs = []
with sync_playwright() as p:
    b = p.chromium.launch(); pg = b.new_page(viewport={'width': 360, 'height': 800}, device_scale_factor=2); pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.goto('http://127.0.0.1:8765/moonlight-mart.html'); pg.wait_for_selector('.lrow'); pg.click('#themeBtn')
    pg.evaluate("()=>{MM.S.mh={c:{}};MM.S.cur={lesson:12,tab:'game',closed:false};MM.G.screen='home';MM.app.render();}")
    pg.click('.tab[data-tab="game"]'); pg.click('.act[data-act="cards"]'); pg.wait_for_selector('.mh-list')
    vis = lambda s: pg.locator(s).count() > 0 and pg.locator(s).first.is_visible()
    print('list: lesson rows visible', vis('#lbar .lrow'), '| later lessons visible', vis('#ltail .lrow'), '| tabs visible', vis('.tab'), '| ◂ Counter', vis('#hdrBack'), '| scrollY', pg.evaluate('scrollY'))
    pg.screenshot(path='/home/claude/test/shots/own_list.png')
    pg.click('#mhGo'); pg.click('#mhF .eyebrow'); pg.screenshot(path='/home/claude/test/shots/own_card.png')
    print('round: lesson rows visible', vis('#lbar .lrow'), '| ◂ Counter', vis('#hdrBack'))
    pg.locator('#mhRate .mh-rb[data-g="2"]').click(); n = len(pg.evaluate('Object.keys(MM.S.mh.c)'))
    pg.click('#hdrBack'); pg.wait_for_selector('.act[data-act="cards"]')
    print('◂ Counter (one tap): counter shown, lesson rows visible', vis('#lbar .lrow'), '| ◂ Counter hidden', not vis('#hdrBack'), '| rated card kept', n > 0)
    pg.click('.act[data-act="cards"]'); pg.click('#mhBack'); pg.wait_for_selector('.act[data-act="cards"]'); print('“Back to the counter” ok, lesson rows visible', vis('#lbar .lrow'))
    pg.click('.shift-card[data-act="shift:A"]'); pg.wait_for_selector('#hdrBack:not([hidden])'); pg.click('#hdrBack'); print('shift: ◂ Counter still asks:', pg.locator('#hdrBack').inner_text())
    b.close()
print('errors', errs or 'none')
