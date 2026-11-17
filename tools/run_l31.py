"""Playwright run through the final chapter (L31): Review tab (player switcher, dialogue gate, vocabulary, grammar ladder, clips),
Final Exam (one exam section answered right, one with mistakes, dictation), the three shifts, readings, cards, certificate,
Endless Night, floor plan, dark mode. Usage: python3 run_l31.py [outdir]. Needs: tools/rangeserver.py dist 8765 running."""
import sys, time, os
src = open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'run_l34.py')).read().split('with sync_playwright() as p:')[0]
sys.argv = [sys.argv[0], '31'] + sys.argv[1:]
exec(src)
from playwright.sync_api import sync_playwright

def exam_answer(page, box, wrong=False):
    page.wait_for_selector(f'{box} .q-prompt', timeout=5000)
    prompt = page.locator(f'{box} .q .q-prompt').first.inner_text().replace('Find the mistake', '').strip()
    if page.locator(f'{box} .q-opts .opt').count():
        page.locator(f'{box} .q-opts .opt[data-i="0"]' if not wrong else f'{box} .q-opts .opt:not([data-i="0"])').first.click()
    else:
        info = page.evaluate(FIND_Q, [31, prompt])
        page.fill(f'{box} .q-input', 'ㅋㅋ' if wrong or not info else info['ans']); page.locator(f'{box} .q-check').click()
    page.wait_for_selector(f'{box} .q-fb .rcpt', timeout=4000)
    ok = 'ok' in page.locator(f'{box} .q-fb .rcpt').get_attribute('class').split()
    page.locator(f'{box} .q-fb .q-next').click(); time.sleep(0.05)
    return ok, prompt

with sync_playwright() as p:
    b = p.chromium.launch()
    ctx = b.new_context(viewport={'width': 390, 'height': 844}, device_scale_factor=2)
    page = ctx.new_page()
    page.on('console', lambda m: m.type == 'error' and errors.append(m.text))
    page.on('pageerror', lambda e: errors.append(str(e)))
    page.goto(URL); page.wait_for_selector('.lrow')
    page.click('.lrow[data-ln="31"]'); page.wait_for_selector('.tb-text')
    print('row:', page.locator('.lrow[data-ln="31"]').inner_text().replace('\n', ' '), '| tabs:', page.locator('.tab').all_inner_texts())
    page.screenshot(path=OUT + 'tb_top.png')
    print('locked dialogue:', page.locator('.dlg-locked').count(), '| lines visible:', page.locator('.dialogue .sent').count())
    # player switcher
    page.click('#lp [data-pl="1"]'); time.sleep(0.2)
    print('player title after switch:', page.locator('.pl-title').inner_text(), '| src', page.evaluate('MM.AM.lesson.src.split("/").pop()'))
    page.click('#plPlay'); time.sleep(1.0); print('long audio playing:', not page.evaluate('MM.AM.lesson.paused'), round(page.evaluate('MM.AM.lesson.currentTime'), 2))
    page.click('#plPlay'); page.click('#lp [data-pl="0"]'); time.sleep(0.2)
    # dialogue questions (first one wrong once)
    xs = page.evaluate("MM.textbook[31].blocks.find(b => b.id === 'dq').items")
    for i, x in enumerate(xs):
        if i == 0:
            wrongc = [c for c in x['choices'] if c != x['right']][0]
            page.click(f'.ex-ch[data-xid="{x["id"]}"][data-v="{wrongc}"]'); print('choice wrong ->', page.locator(f'.exq[data-xid="{x["id"]}"] .ex-fb').inner_text())
        page.click(f'.ex-ch[data-xid="{x["id"]}"][data-v="{x["right"]}"]'); time.sleep(0.15)
    print('after questions: locked', page.locator('.dlg-locked').count(), '| dialogue lines', page.locator('.dialogue .sent').count(), '| directions', page.locator('.dlg-dir').count())
    page.locator('.dialogue').screenshot(path=OUT + 'tb_dialogue.png')
    # a dialogue clip
    btn = page.locator('.dialogue .trk-mini').nth(4); f = float(btn.get_attribute('data-from')); t = float(btn.get_attribute('data-to'))
    btn.click(); time.sleep(3.2)
    print(f'dialogue clip 5 ({f}-{t}) time after 3.2 s:', round(page.evaluate('MM.AM.track.currentTime'), 2), 'paused', page.evaluate('MM.AM.track.paused'))
    # vocabulary + grammar: type everything; diag / wrong / reveal on a few
    total = 0
    for bid in ['vn', 'vv', 'vd', 'va', 'vp', 'vw', 'gr']:
        items = page.evaluate(f"MM.textbook[31].blocks.find(b => b.id === '{bid}').items")
        for i, x in enumerate(items):
            if bid == 'vd' and i == 0:
                page.fill(f'#x-{x["id"]}', '귀여워요'); page.click(f'.ex-check[data-xid="{x["id"]}"]'); print('vocab 해요 form ->', page.locator(f'.exq[data-xid="{x["id"]}"] .ex-fb').inner_text()[:90])
            if bid == 'gr' and x.get('diag') and i in (13, 26, 31):
                d = page.evaluate('a => MM.expand(a)[0]', x['diag'][0]['p']) if x['diag'][0].get('p') else '육 시쯤'
                page.fill(f'#x-{x["id"]}', d); page.click(f'.ex-check[data-xid="{x["id"]}"]'); print(f'grammar diag {x["id"]} ->', page.locator(f'.exq[data-xid="{x["id"]}"] .ex-fb').inner_text()[:110])
            if bid == 'va' and i == 5:
                page.click(f'.ex-rev[data-xid="{x["id"]}"]'); total += 1; continue
            ans = page.evaluate('a => MM.expand(a)[0]', x['ans'][0])
            page.fill(f'#x-{x["id"]}', ans); page.click(f'.ex-check[data-xid="{x["id"]}"]'); time.sleep(0.03); total += 1
        if bid == 'vn': page.locator('#exs-vn').screenshot(path=OUT + 'tb_vocab.png')
    page.locator('#exs-gr .exq').nth(9).screenshot(path=OUT + 'tb_grammar_item.png')
    btn = page.locator('#exs-gr .trk-mini').nth(9); f = float(btn.get_attribute('data-from'))
    btn.click(); time.sleep(1.2); print('grammar clip 10 from', f, '-> t after 1.2 s', round(page.evaluate('MM.AM.track.currentTime'), 2), page.evaluate('MM.AM.track.src.split("/").pop()'))
    page.evaluate('MM.AM.track.pause()')
    print('typed/revealed', total, '| TB summary:', page.locator('.summary .rcpt-rows').inner_text().replace('\n', ' | '), '| status', page.evaluate('MM.TB.status(31)'))
    page.screenshot(path=OUT + 'tb_full.png', full_page=True)
    # Final Exam
    page.click('#toWb'); page.wait_for_selector('.wb')
    print('WB header:', page.locator('.wb .eyebrow').first.inner_text(), '| tab', page.locator('.tab.on').inner_text())
    page.locator('#sec-I').screenshot(path=OUT + 'wb_exam_start.png')
    for sid, wrong in [('I', False), ('II', True)]:
        box = f'.wbq[data-key="{sid}.1"]'
        page.click(f'{box} .exam-go'); res = []
        for i in range(10):
            if i == 0 and sid == 'I': page.locator(box).screenshot(path=OUT + 'wb_exam_q.png')
            ok, pr = exam_answer(page, box, wrong=(wrong and i < 4)); res.append(ok)
            if not ok and not (wrong and i < 4): print('   EXAM FAIL', sid, i, pr)
        print(f'exam {sid}:', sum(res), '/ 10 ->', page.locator(box).inner_text().replace('\n', ' ')[:200])
    page.locator('#sec-I').screenshot(path=OUT + 'wb_exam_done.png')
    for sid in ['III', 'IV', 'V', 'VI']:
        box = f'.wbq[data-key="{sid}.1"]'; page.click(f'{box} .exam-go'); res = []
        for i in range(10): ok, pr = exam_answer(page, box); res.append(ok); (not ok) and print('   EXAM FAIL', sid, i, pr)
        print(f'exam {sid}:', sum(res), '/ 10')
    its = page.evaluate("MM.workbook[31].sections.find(s => s.id === 'VII').items")
    for it in its:
        box = f'.wbq[data-key="VII.{it["n"]}"]'
        if it['n'] == 2:
            page.locator(f'{box} .trk').first.click(); time.sleep(1.0); print('dictation clip t', round(page.evaluate('MM.AM.track.currentTime'), 2), '(from', it['clip'][0], ')')
            page.fill(f'{box} input.wb-in', '제 사무실 앞에 공원 있어요'); page.click(f'{box} .wb-check'); print('dictation diff ->', page.locator(f'{box} .ex-fb').inner_text()[:100].replace('\n', ' '))
            page.locator(box).screenshot(path=OUT + 'wb_dict.png'); page.click(f'{box} .wb-retry')
        page.fill(f'{box} input.wb-in', page.evaluate('a => MM.expand(a)[0]', it['ans'][0])); page.click(f'{box} .wb-check'); time.sleep(0.05)
    print('WB summary:', page.locator('.summary .rcpt-rows').inner_text().replace('\n', ' | '), '| status', page.evaluate('MM.WB.status(31)'))
    page.click('#toGame'); page.wait_for_selector('.home')
    page.screenshot(path=OUT + 'game_home.png', full_page=True)
    for key in ['A', 'B', 'C']:
        res, n, served, snack, tiles_ok = run_shift(page, key, wrong_first=(key == 'A'))
        print(f'shift {key}: {sum(res)}/{len(res)} ok, cctv {n}, rush {served}, snack {snack}')
    print('fixed L31:', page.evaluate("MM.S.fixed.filter(x => ['invscanner','hqframe','roofmoon'].includes(x))"))
    for rid in ['l31.chat', 'l31.board']:
        page.click(f'.act[data-act="read:{rid}"]'); page.click('#rQs')
        for _ in range(3): answer_current(page); click_next(page)
        page.wait_for_selector('#rBack'); page.locator('.gl').first.click(); print(rid, 'gloss ->', page.locator('.gl-pop').inner_text())
        page.screenshot(path=OUT + f'read_{rid}.png', full_page=True); page.click('#rBack')
    page.click('.act[data-act="cards"]'); page.wait_for_selector('.mh-list'); page.click('#mhGo'); page.click('#mhF .eyebrow'); page.locator('#mhRate .mh-rb[data-g="2"]').click(); (page.click('#mhStop') if page.locator('#mhStop').count() else None); page.click('#mhBack')
    page.click('.act[data-act="shelf"]')
    for _ in range(10): answer_current(page); click_next(page)
    page.click('#sumBack')
    page.click('.act[data-act="endless"]')
    for i in range(12): ok, pr = answer_current(page); click_next(page)
    print('endless summary:', page.locator('.rcpt-head').first.inner_text().replace('\n', ' '), '| again button', page.locator('#enAgain').count())
    page.click('#enAgain'); print('round 2 title:', page.locator('.round-t').inner_text()); page.click('#hdrBack'); page.click('#hdrBack')
    page.wait_for_selector('.home'); page.click('.act[data-act="cert"]'); page.wait_for_selector('.cert')
    print('cert:', page.locator('.cert').inner_text().replace('\n', ' | ')[:500])
    page.screenshot(path=OUT + 'cert.png', full_page=True)
    page.click('#certBack'); page.click('.act[data-act="map"]'); page.locator('.floor').screenshot(path=OUT + 'map.png'); page.click('#mapBack')
    page.click('.act[data-act="restock"]')
    for _ in range(12): answer_current(page); click_next(page)
    page.click('#sumBack')
    page.evaluate("MM.S.theme='dark'; MM.ui.applyTheme(); MM.app.go('tb')"); time.sleep(0.3); page.screenshot(path=OUT + 'dark_tb.png')
    page.evaluate("MM.app.go('game'); MM.G.screen='cert'; MM.app.render()"); time.sleep(0.2); page.screenshot(path=OUT + 'dark_cert.png', full_page=True)
    sw = page.evaluate('document.documentElement.scrollWidth'); print('scrollWidth', sw)
    print('lesson 31 status dots:', page.evaluate("['tb','wb'].map(t => (t==='tb'?MM.TB:MM.WB).status(31))"))
    b.close()
print('ERRORS:', errors if errors else 'none')
