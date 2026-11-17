"""“Všechna slovíčka” (Mnemo Hooks from every lesson, 2026-11-15, as in Gorsaf): card above Extras, own screen,
search, lesson / type filters, lazy card details, a round across lessons, roots, back; Extras buttons still work.
Usage: python3 tools/run_mnemo_all.py  (rangeserver on 8765)"""
from playwright.sync_api import sync_playwright
errs = []
with sync_playwright() as p:
    b = p.chromium.launch(); pg = b.new_page(viewport={'width': 360, 'height': 800}, device_scale_factor=2); pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.goto('http://127.0.0.1:8765/moonlight-mart.html'); pg.wait_for_selector('.lrow')
    print('card on the page:', pg.locator('#xtail .act[data-act="mnall"]').inner_text().replace('\n', ' | '))
    pg.locator('#xtail .act[data-act="mnall"]').click(); pg.wait_for_selector('.mh-list')
    vis = lambda s: pg.locator(s).count() > 0 and pg.locator(s).first.is_visible()
    print('own screen:', not vis('#lbar .lrow'), vis('#hdrBack'), '| rows', pg.locator('.mh-w').count(), '|', pg.locator('#mhCnt').inner_text(), '|', pg.locator('#mhGo').inner_text())
    pg.screenshot(path='/home/claude/test/shots/all_list.png')
    pg.fill('#mhQ', '학'); print('search 학:', pg.locator('#mhCnt').inner_text(), '| focus kept', pg.evaluate('document.activeElement.id'))
    pg.fill('#mhQ', 'kočka'); print('search kočka:', pg.locator('#mhCnt').inner_text(), [t for t in pg.locator('.mh-w:not([hidden]) summary').all_inner_texts()][:3])
    pg.fill('#mhQ', ''); pg.select_option('#mhFl', '23'); print('lesson 23:', pg.locator('#mhCnt').inner_text()); pg.select_option('#mhFp', 'v'); print('L23 + verbs:', pg.locator('#mhCnt').inner_text())
    pg.select_option('#mhFl', ''); pg.select_option('#mhFp', '')
    d = pg.locator('.mh-w').nth(100); print('lazy card empty before open:', d.locator('.mh-card').inner_html() == ''); d.locator('summary').click(); pg.wait_for_timeout(300); print('after open:', d.locator('.mh-hook, .mh-ex').count() > 0, d.locator('.mh-head .ko').inner_text())
    # round across lessons: make a few cards from different lessons due
    pg.evaluate("()=>{const A=MM.S.mh.c; for (const n of [3,15,27]) A[MM.mnemo[n].cards[0].id+':r']=['2000-01-01',3,250,2,0];}")
    pg.click('#mhRoots'); print('all roots:', pg.locator('.mh-root.big').count()); pg.click('#mhBk')
    print(pg.locator('#mhGo').inner_text()); pg.click('#mhGo'); words = []
    for _ in range(25):
        if not pg.locator('#mhRate').count(): break
        if pg.locator('#mhF').count(): words.append(pg.locator('#mhF .mh-head .ko').first.inner_text()); pg.click('#mhF .eyebrow')
        pg.locator('#mhRate .mh-rb:not([disabled])').nth(2).click()
    print('round words:', len(words), words[:4], '| end:', pg.locator('.rcpt-head').inner_text().replace('\n', ' '))
    lesson_cards = pg.evaluate("()=>{const L=MM.mnemo[3].cards[0].id; return !!MM.S.mh.c[L+':p']}"); print('progress shared with the lessons:', lesson_cards)
    pg.click('#mhBack'); pg.wait_for_selector('#xtail .act[data-act="mnall"]'); print('back: rows visible', vis('#lbar .lrow'), '| card status:', pg.locator('#xtail .act[data-act="mnall"] .act-s').inner_text())
    pg.click('#extras summary'); pg.click('[data-act="export"]'); pg.wait_for_timeout(300); pg.wait_for_timeout(700); print('Extras still work (transfer code shown):', pg.locator('#codeOut').input_value().startswith('MM3-'))
    # lesson Mnemo Hooks still opens its own lesson, not “all”
    pg.evaluate("()=>{MM.S.cur={lesson:12,tab:'game',closed:false};MM.G.screen='home';MM.app.render();}"); pg.click('.act[data-act="cards"]'); print('lesson button →', pg.locator('.round-p').first.inner_text())
    b.close()
print('errors', errs or 'none')
