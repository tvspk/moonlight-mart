"""Playwright run through a lesson (3–6): textbook, workbook (all section types), all three shifts,
readings, cards, shelf, restock, floor plan. Usage: python3 run_l34.py 3 [outdir]
Needs: tools/rangeserver.py dist 8765 running."""
import sys, time, os
from playwright.sync_api import sync_playwright

N = int(sys.argv[1]) if len(sys.argv) > 1 else 3
OUT = (sys.argv[2] if len(sys.argv) > 2 else '/home/claude/test/shots') + f'/l{N}_'
os.makedirs(os.path.dirname(OUT), exist_ok=True)
URL = 'http://127.0.0.1:8765/moonlight-mart.html'
errors = []

FIND_Q = """([n, prompt]) => {
  const all = [];
  for (let k = 1; k <= n; k++) { const G = MM.game[k]; if (!G) continue;
    for (const sh of Object.values(G.shifts)) { sh.scenes.forEach(s => all.push(s.q)); sh.cctv.forEach(q => all.push(q)); }
    G.pool.forEach(q => all.push(q)); (MM.reads[k] || []).forEach(r => r.qs.forEach(q => all.push(q))); MM.Q.allQs(k).forEach(q => all.push(q)); }
  const q = all.find(q => q.prompt === prompt);
  return q ? { type: q.type, ans: q.ans ? MM.expand(q.ans[0])[0] : null } : null;
}"""

def answer_current(page, wrong=False):
    page.wait_for_selector('.q-prompt', timeout=5000)
    prompt = page.locator('.q .q-prompt').first.inner_text().replace('Find the mistake', '').strip()
    if page.locator('.q-opts .opt').count():
        page.locator('.q-opts .opt[data-i="0"]' if not wrong else '.q-opts .opt:not([data-i="0"])').first.click()
    else:
        info = page.evaluate(FIND_Q, [N, prompt])
        if not info or not info['ans']: raise RuntimeError('question not found: ' + prompt)
        if page.locator('.q-mode').inner_text().startswith('Type'): page.locator('.q-mode').click()
        page.fill('.q-input', 'ㅋㅋ' if wrong else info['ans']); page.locator('.q-check').click()
    page.wait_for_selector('.q-fb .rcpt', timeout=4000)
    return 'ok' in page.locator('.q-fb .rcpt').get_attribute('class').split(), prompt

def click_next(page):
    page.locator('.q-fb .q-next').click(); time.sleep(0.05)

def tiles_check(page, ans):
    """solve a tiles question by tapping tiles (checks the tile bank can build the answer)"""
    words = ans.split(' ')
    for w in words:
        t = page.locator('.bank .tile:not([disabled])', has_text=w)
        cands = [x for x in t.all() if x.inner_text() == w]
        if not cands: return False
        cands[0].click()
    page.locator('.q-check').click(); page.wait_for_selector('.q-fb .rcpt', timeout=4000)
    return 'ok' in page.locator('.q-fb .rcpt').get_attribute('class').split()

def run_shift(page, key, wrong_first=False):
    page.locator(f'.shift-card[data-act="shift:{key}"]').click()
    page.locator('#phaseGo').click()
    res, tiles_ok = [], 0
    for i in range(10):
        if page.locator('.bank .tile').count() and not wrong_first:
            sc = page.evaluate(f"MM.game[{N}].shifts['{key}'].scenes[{i}]")
            if sc['q']['type'] == 'tiles':
                ok = tiles_check(page, page.evaluate('a => MM.expand(a)[0]', sc['q']['ans'][0])); tiles_ok += ok; res.append(ok)
                if not ok: print('   TILES FAIL', sc['id'], page.locator('.q-fb').inner_text()[:120])
                click_next(page); continue
        ok, p = answer_current(page, wrong=(wrong_first and i == 0)); res.append(ok)
        if not ok and not (wrong_first and i == 0): print('   FAIL', key, i, p, page.locator('.q-fb').inner_text()[:160])
        if i == 2 and key == 'B': page.screenshot(path=OUT + f'shift_{key}_scene.png', full_page=True)
        click_next(page)
    page.locator('#phaseGo').click()
    n = 0
    while page.locator('.round-head .round-t').count() and page.locator('.round-head .round-t').inner_text().startswith('CCTV'):
        ok, p = answer_current(page); res.append(ok); n += 1
        if not ok: print('   CCTV FAIL', p, page.locator('.q-fb').inner_text()[:160])
        click_next(page)
        if n > 12: break
    page.locator('#phaseGo').click()
    served = 0
    while page.locator('.rush .opt').count():
        if served == 3: page.screenshot(path=OUT + f'rush_{key}.png')
        page.locator('.rush .opt[data-k="0"]').first.click(); served += 1; time.sleep(0.45)
        if served > 20: break
    page.locator('#rushNext').click()
    if page.locator('#phaseGo').count():
        page.locator('#phaseGo').click()
        for _ in range(4): answer_current(page); click_next(page)
    page.wait_for_selector('.snack-box', timeout=5000)
    snack = page.locator('.snack-ko').inner_text()
    page.screenshot(path=OUT + f'shift_{key}_summary.png', full_page=True)
    page.locator('#sumBack').click()
    return res, n, served, snack, tiles_ok

with sync_playwright() as p:
    b = p.chromium.launch()
    ctx = b.new_context(viewport={'width': 390, 'height': 844}, device_scale_factor=2)
    page = ctx.new_page()
    page.on('console', lambda m: m.type == 'error' and errors.append(m.text))
    page.on('pageerror', lambda e: errors.append(str(e)))
    page.goto(URL); page.wait_for_selector('.lrow')
    page.click(f'.lrow[data-ln="{N}"]'); page.wait_for_selector('.tb-text')
    print('lessons:', page.locator('.lrow .lrow-n').all_inner_texts())
    print('TB sentences', page.locator('.sent').count(), 'clips', page.locator('.trk-mini').count(), 'tracks', page.locator('.trk').count())
    page.screenshot(path=OUT + 'tb_top.png')
    clip = page.evaluate("[...document.querySelectorAll('.trk-mini')].map(b => +b.dataset.from)")
    page.locator('.trk-mini').nth(1).click(); time.sleep(1.2)
    print('clip 2 time after 1.2s:', round(page.evaluate('MM.AM.track.currentTime'), 2), '(starts', clip[1], ')')
    page.evaluate('MM.AM.track.pause()')
    # exercises: first one wrong, then all right
    xs = page.evaluate(f"MM.textbook[{N}].blocks.find(b => b.t === 'exercises').items")
    for i, x in enumerate(xs):
        if x.get('choices'):
            if i == 0:
                wrongc = [c for c in x['choices'] if c != x['right']][0]
                page.click(f'.ex-ch[data-xid="{x["id"]}"][data-v="{wrongc}"]')
                print('choice wrong ->', page.locator(f'.exq[data-xid="{x["id"]}"] .ex-fb').inner_text())
            page.click(f'.ex-ch[data-xid="{x["id"]}"][data-v="{x["right"]}"]'); time.sleep(0.1)
        else:
            if i == len(xs) - 1 and x.get('diag'):
                page.fill(f'#x-{x["id"]}', x['diag'][0]['p']); page.click(f'.ex-check[data-xid="{x["id"]}"]')
                print('diag ->', page.locator(f'.exq[data-xid="{x["id"]}"] .ex-fb').inner_text()[:100])
            ans = page.evaluate('a => MM.expand(a)[0]', x['ans'][0])
            page.fill(f'#x-{x["id"]}', ans); page.click(f'.ex-check[data-xid="{x["id"]}"]'); time.sleep(0.1)
    print('TB summary:', page.locator('.summary .rcpt-rows').inner_text().replace('\n', ' | '))
    page.locator('#exs').screenshot(path=OUT + 'tb_ex.png')
    # workbook
    page.click('#toWb'); page.wait_for_selector('.wb')
    secs = page.evaluate(f'MM.workbook[{N}].sections')
    for sec in secs:
        t = sec['type']
        if t == 'match':
            page.locator('#wbMatch').screenshot(path=OUT + 'wb_match.png')
            for _ in range(6):
                if not page.locator('#wbMatch .mt').count(): break
                ns = [x.get_attribute('data-n') for x in page.locator('#wbMatch .mt[data-s="L"]').all()]
                for nn in ns:
                    page.click(f'#wbMatch .mt[data-s="L"][data-n="{nn}"]'); page.click(f'#wbMatch .mt[data-s="R"][data-n="{nn}"]')
                time.sleep(0.8)
            print('match done', page.locator('.vocab-done li').count())
        for it in sec['items']:
            key = f"{sec['id']}.{it['n']}"
            box = f'.wbq[data-key="{key}"]'
            if t == 'bank':
                sels = page.locator(f'{box} .bank-sel')
                if it['n'] == sec['items'][-1]['n']:  # one wrong try first
                    for i in range(sels.count()): sels.nth(i).select_option('앞에')
                    page.click(f'{box} .bank-check'); print('bank wrong ->', page.locator(f'{box} .ex-fb').inner_text()[:90])
                for i, a in enumerate(it['ans']): sels.nth(i).select_option(a)
                if it['n'] == sec['items'][0]['n']: page.locator(box).screenshot(path=OUT + 'wb_bank.png')
                page.click(f'{box} .bank-check')
            elif t == 'tf':
                if not it['truth']:
                    page.click(f'{box} .tf-b[data-v="1"]'); print('tf wrong ->', page.locator(f'{box} .tf-fb').inner_text())
                    page.click(f'{box} .tf-b[data-v="0"]')
                    page.locator(box).screenshot(path=OUT + 'wb_tf.png')
                    if it.get('fixOpts'):  # L22: choose the correction
                        bad = 1 if it.get('fixRight', 0) == 0 else 0
                        page.click(f'{box} .tf-o[data-i="{bad}"]'); print('tf fixOpts wrong ->', page.locator(f'{box} .tf-fb').inner_text()[:90])
                        page.click(f'{box} .tf-o[data-i="{it.get("fixRight", 0)}"]'); print('tf fixOpts done ->', page.locator(box).inner_text()[:120].replace(chr(10), ' '))
                    else:
                        page.fill(f'{box} input.wb-in', '오을까요'); page.click(f'{box} .wb-check'); print('tf fix diag ->', page.locator(f'{box} .ex-fb').first.inner_text()[:90])
                        page.fill(f'{box} input.wb-in', page.evaluate('a => MM.expand(a)[0]', it['ans'][0])); page.click(f'{box} .wb-check')
                else:
                    page.click(f'{box} .tf-b[data-v="1"]')
            elif t == 'conj':
                page.fill(f'{box} .en-in', it['en'] if it['n'] % 2 else 'to put down')
                page.fill(f'{box} input.wb-in', page.evaluate('a => MM.expand(a)[0]', it['ans'][0])); page.click(f'{box} .wb-check')
            elif t == 'chart':
                if not sec.get('noMean'): page.fill(f'{box} .en-in', it['en'])
                cells = [page.evaluate('a => MM.expand(a)[0]', c['ans'][0]) for c in it['cells']]
                if it['n'] == sec['items'][0]['n']:
                    if len(cells) >= 3: page.fill(f'{box} .wb-cin[data-c="0"]', cells[1]); page.fill(f'{box} .wb-cin[data-c="1"]', cells[1]); page.fill(f'{box} .wb-cin[data-c="2"]', cells[2])
                    else: page.fill(f'{box} .wb-cin[data-c="0"]', it['cells'][0]['diag'][0]['p'])
                    page.click(f'{box} .chart-check'); print('chart wrong ->', page.locator(f'{box} .ex-fb').inner_text()[:120].replace(chr(10), ' | '))
                    page.locator(box).screenshot(path=OUT + 'wb_chart.png')
                for ci, c in enumerate(cells): page.fill(f'{box} .wb-cin[data-c="{ci}"]', c)
                page.click(f'{box} .chart-check')
                if it['n'] == sec['items'][0]['n']: page.locator(box).screenshot(path=OUT + 'wb_chart_done.png')
            elif t == 'sentence':
                page.fill(f'{box} input.wb-in', page.evaluate('a => MM.expand(a)[0]', it['ans'][0])); page.click(f'{box} .wb-check')
                if it['n'] == sec['items'][0]['n']:
                    page.fill(f'{box} .tr-in', 'Where should I put the book?'); page.locator(box).screenshot(path=OUT + 'wb_sent_tr.png')
                    page.click(f'{box} .tr-show'); page.locator(box).screenshot(path=OUT + 'wb_sent_done.png')
            elif t == 'mc':
                if it['n'] == sec['items'][0]['n']:
                    wr = (it['right'] + 1) % len(it['opts']); page.click(f'{box} .mc-b[data-v="{wr}"]')
                    print('mc wrong ->', page.locator(f'{box} .ex-fb').inner_text()[:90]); page.locator(box).screenshot(path=OUT + 'wb_mc.png')
                page.click(f'{box} .mc-b[data-v="{it["right"]}"]')
            elif t == 'pick':
                if it['n'] == sec['items'][0]['n']:
                    g0 = page.locator(f'{box} .pk-grp').first.locator('.pk-b'); wrong = [b for b in g0.all() if b.get_attribute('data-v') not in it['ans'][0]]
                    (wrong[0] if wrong else g0.nth(1)).click(); page.locator(f'{box} .pk-grp').nth(1).locator('.pk-b').nth(0).click() if page.locator(f'{box} .pk-grp').count() > 1 else None
                    page.click(f'{box} .pick-check'); print('pick wrong ->', page.locator(f'{box} .ex-fb').inner_text()[:90])
                    page.locator(box).screenshot(path=OUT + 'wb_pick.png')
                    while page.locator(f'{box} .pk-b[aria-pressed="true"]').count(): page.locator(f'{box} .pk-b[aria-pressed="true"]').first.click()
                for gi, a in enumerate(it['ans']):
                    for o in a: page.locator(f'{box} .pk-grp').nth(gi).locator(f'.pk-b[data-v="{o}"]').click()
                page.click(f'{box} .pick-check')
            elif t == 'explain':
                page.fill(f'{box} .xp-in', 'my own explanation'); page.click(f'{box} .xp-show'); page.click(f'{box} .xp-judge[data-v="self"]')
            elif t == 'write':
                if it['n'] == sec['items'][0]['n'] and it.get('diag'):
                    page.fill(f'{box} input.wb-in', page.evaluate('a => MM.expand(a)[0]', it['diag'][0]['p'])); page.click(f'{box} .wb-check')
                    print('write diag ->', page.locator(f'{box} .ex-fb').inner_text()[:110]); page.locator(box).screenshot(path=OUT + 'wb_write.png')
                page.fill(f'{box} input.wb-in', page.evaluate('a => MM.expand(a)[0]', it['ans'][0])); page.click(f'{box} .wb-check')
            elif t == 'pyramid':  # L23: fill every free block; the first pyramid gets one wrong try (words swapped between levels)
                giv = set(it.get('given') or [])
                free = [(li, w) for li, lv in enumerate(it['levels']) for w in lv if w not in giv]
                ins = page.locator(f'{box} .pyr-in')
                if it['n'] == sec['items'][0]['n']:
                    for i in range(ins.count()): ins.nth(i).fill(free[-1 - i][1])
                    page.click(f'{box} .pyr-check'); print('pyramid wrong ->', page.locator(f'{box} .ex-fb').inner_text()[:160].replace(chr(10), ' | '))
                    page.locator(box).screenshot(path=OUT + 'wb_pyr_wrong.png')
                for i in range(ins.count()): ins.nth(i).fill(free[i][1])
                page.click(f'{box} .pyr-check')
                if it['n'] == sec['items'][0]['n']: page.locator(box).screenshot(path=OUT + 'wb_pyr_done.png')
            elif t == 'web':  # L30: send every bank word to a hub; one wrong try first (everything to hub 0)
                rows = page.locator(f'{box} .web-row')
                for i in range(rows.count()): rows.nth(i).locator('.web-b[data-c="0"]').click()
                page.click(f'{box} .web-check'); print('web wrong ->', page.locator(f'{box} .ex-fb').inner_text()[:160].replace(chr(10), ' | '))
                page.locator(box).screenshot(path=OUT + 'wb_web_wrong.png')
                for i in range(rows.count()):
                    w = rows.nth(i).get_attribute('data-w'); ci = next(j for j, c in enumerate(it['cats']) if w in c['words'])
                    rows.nth(i).locator(f'.web-b[data-c="{ci}"]').click()
                page.click(f'{box} .web-check'); page.locator(box).screenshot(path=OUT + 'wb_web_done.png')
            elif t == 'dictation':
                ans = page.evaluate('a => MM.expand(a)[0]', it['ans'][0])
                page.fill(f'{box} input.wb-in', ans); page.click(f'{box} .wb-check')
            time.sleep(0.1)
    print('WB summary:', page.locator('.summary .rcpt-rows').inner_text().replace('\n', ' | '))
    page.screenshot(path=OUT + 'wb_full.png', full_page=True)
    # game
    page.click('#toGame'); page.wait_for_selector('.shift-card')
    for key in 'ABC':
        res, n, served, snack, tok = run_shift(page, key, wrong_first=(key == 'A'))
        print(f'shift {key}: story+cctv ok {sum(res)}/{len(res)}, cctv items {n}, rush served {served}, tiles solved {tok}, snack {snack}')
    print('fixed:', page.evaluate('MM.S.fixed'))
    for rid in [f'l{N}.chat', f'l{N}.board']:
        page.click(f'.act[data-act="read:{rid}"]')
        while page.locator('#rNext').count(): page.click('#rNext')
        page.locator('.gl').first.click(); print(rid, 'gloss:', page.locator('.gl-pop').inner_text())
        page.screenshot(path=OUT + f'read_{rid}.png', full_page=True)
        page.click('#rQs')
        for _ in range(3): answer_current(page); click_next(page)
        page.click('#rBack')
    won0 = page.evaluate('MM.S.won')
    page.click('.act[data-act="cards"]'); page.wait_for_selector('.mh-list')
    page.click('#mhGo'); page.click('#mhF .eyebrow'); page.locator('#mhRate .mh-rb[data-g="2"]').click()
    (page.click('#mhStop') if page.locator('#mhStop').count() else None); page.click('#mhBack')
    page.click('.act[data-act="shelf"]')
    for _ in range(10): answer_current(page); click_next(page)
    page.click('#sumBack')
    page.click('.act[data-act="restock"]')
    for _ in range(12): answer_current(page); click_next(page)
    page.click('#sumBack')
    page.click('.act[data-act="map"]'); page.screenshot(path=OUT + 'map.png', full_page=True); page.click('#mapBack')
    print('tab status:', page.locator('.tab .st').evaluate_all('els => els.map(e => e.className)'), 'won:', page.evaluate('MM.S.won'))
    print('state bytes:', page.evaluate('JSON.stringify(MM.S).length'), 'lesson part:', page.evaluate(f'JSON.stringify(MM.S.L[{N}]).length'), 'utf8:', page.evaluate('new TextEncoder().encode(JSON.stringify(MM.S)).length'))
    page.click('#themeBtn'); page.click('.tab[data-tab="wb"]'); page.screenshot(path=OUT + 'wb_dark.png', full_page=True)
    page.click('.tab[data-tab="tb"]'); page.screenshot(path=OUT + 'tb_dark.png')
    for k in range(1, N):
        page.click(f'.lrow[data-ln="{k}"]'); time.sleep(0.5)
        page.click('.tab[data-tab="game"]'); page.wait_for_selector('.shift-card'); print(f'L{k} shifts', page.locator('.shift-card').count())
    b.close()
real = [e for e in errors if 'Failed to load resource' not in e]
print('console errors:', real if real else 'none', '| ignored (missing local audio of other lessons):', len(errors) - len(real))
