"""Playwright run through Mnemo Hooks (2026-11-15): list, grammar note, roots, a round with every mode
(recognition, production typed, listening, root), ratings, ₩ perk, time card, transfer-code round trip.
Usage: python3 tools/run_mnemo.py [lesson] [outdir]   (needs: python3 tools/rangeserver.py dist 8765)"""
import sys, os, time
from playwright.sync_api import sync_playwright
N = int(sys.argv[1]) if len(sys.argv) > 1 else 12
OUT = (sys.argv[2] if len(sys.argv) > 2 else '/home/claude/test/shots') + f'/mn{N}_'
os.makedirs(os.path.dirname(OUT), exist_ok=True)
URL = 'http://127.0.0.1:8765/moonlight-mart.html'
errors = []
with sync_playwright() as p:
    b = p.chromium.launch(); page = b.new_page(viewport={'width': 390, 'height': 844})
    page.on('pageerror', lambda e: errors.append(str(e)))
    page.on('console', lambda m: m.type == 'error' and 'fonts.g' not in m.text and 'Failed to load resource' not in m.text and errors.append(m.text))
    page.goto(URL); page.wait_for_selector('.lrow')
    page.evaluate(f'''() => {{ MM.S.cur = {{ lesson: {N}, tab: 'game', closed: false }}; MM.S.fixed = MM.upgrades.filter(u => u.bonus === 'cards20').slice(0, 2).map(u => u.id); MM.app.render(); }}''')
    page.click('.tab[data-tab="game"]'); page.wait_for_selector('.act[data-act="cards"]')
    print('counter:', page.locator('.act[data-act="cards"]').inner_text().replace('\n', ' | '))
    page.click('.act[data-act="cards"]'); page.wait_for_selector('.mh-list')
    print('list rows:', page.locator('.mh-w').count(), '| boxes:', page.locator('.mh-boxes').inner_text().replace('\n', ' '))
    page.click('.mh-gram summary'); page.locator('.mh-w summary').first.click()
    page.locator('#main').screenshot(path=OUT + 'list.png')
    if page.locator('#mhRoots').count():
        page.click('#mhRoots'); page.wait_for_selector('.mh-root.big'); print('roots:', page.locator('.mh-root.big').count())
        page.locator('#main').screenshot(path=OUT + 'roots.png'); page.click('#mhBk')
    won0, days0 = page.evaluate('MM.S.won'), page.evaluate('MM.S.days[MM.U.today()] || 0')
    page.click('#mhGo'); seen = set(); k = 0
    while page.locator('#mhRate').count() and k < 25:
        lab = page.locator('.round-p').inner_text(); seen.add(lab.split(' · ')[0])
        if page.locator('#mhF').count():
            page.click('#mhF .eyebrow'); assert page.locator('#mhA').is_visible()
            if k == 0: page.locator('#main').screenshot(path=OUT + 'flash.png')
        page.locator('#mhRate .mh-rb[data-g="2"]').click(); k += 1
    print('round 1 answered', k, 'modes', seen)
    page.locator('#main').screenshot(path=OUT + 'end.png')
    print('₩ gained', page.evaluate('MM.S.won') - won0, '| time card +', page.evaluate('MM.S.days[MM.U.today()]') - days0)
    # time travel: everything due → production, listening, roots
    page.evaluate('''() => { for (const v of Object.values(MM.S.mh.c)) v[0] = '2000-01-01'; MM.save(); }''')
    page.click('#mhLs'); page.click('#mhGo'); modes = {}; k = 0
    while page.locator('#mhRate').count() and k < 30:
        lab = page.locator('.round-p').inner_text().split(' · ')[0]; modes[lab] = modes.get(lab, 0) + 1
        if page.locator('#mhIn').count():
            w = page.evaluate('''() => { const cs = document.querySelector('.mh-q').textContent; return Object.values(MM.mnemo).flatMap(d => d.cards).find(c => c.cs === cs).w; }''')
            page.evaluate('w => { const i = document.querySelector("#mhIn"); i.value = w; }', w); page.click('#mhOk')
            assert 'ok' in page.locator('.mh-res').get_attribute('class'), page.locator('.mh-res').inner_text()
            if modes[lab] == 1: page.locator('#main').screenshot(path=OUT + 'prod.png')
        elif page.locator('.mh-opt').count():
            page.locator('.mh-opt').first.click(); assert page.locator('#mhRate').is_visible()
            if modes[lab] == 1: page.locator('#main').screenshot(path=OUT + 'listen.png')
        else:
            page.click('#mhF .eyebrow')
        en = page.locator('#mhRate .mh-rb:not([disabled])'); en.last.click(); k += 1
    print('round 2 modes', modes)
    code = page.evaluate('MM.exportCode()'); st = page.evaluate('JSON.stringify(MM.S.mh.c).length')
    back = page.evaluate('async c => JSON.stringify((await MM.importCode(c)).mh.c).length', code)
    print('transfer code mh bytes', st, '→', back)
    if page.locator('#mhStop').count(): page.click('#mhStop')   # round longer than the loop (“Znovu” re-queues cards)
    page.click('#mhBack'); page.wait_for_selector('.act[data-act="cards"]')
    print('counter after:', page.locator('.act[data-act="cards"] .act-s').inner_text())
    page.click('#themeBtn'); page.click('.act[data-act="cards"]'); page.locator('.mh-w summary').nth(1).click(); page.locator('#main').screenshot(path=OUT + 'list_dark.png')
    b.close()
print('ERRORS:', errors or 'none')
