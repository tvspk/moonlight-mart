"""Playwright run through Lesson 2: textbook, workbook, all three shifts, readings, cards, shelf, floor plan."""
import sys, json, time
from playwright.sync_api import sync_playwright

URL = 'http://127.0.0.1:8765/moonlight-mart.html'
OUT = '/home/claude/test/shots/'
errors = []

# find the question object currently shown, by its prompt, then answer it correctly (or with a given wrong answer)
FIND_Q = """(prompt) => {
  const G = MM.game[2], all = [];
  for (const sh of Object.values(G.shifts)) { sh.scenes.forEach(s => all.push(s.q)); sh.cctv.forEach(q => all.push(q)); }
  G.pool.forEach(q => all.push(q));
  (MM.reads[2] || []).forEach(r => r.qs.forEach(q => all.push(q)));
  MM.Q.allQs(2).forEach(q => all.push(q));
  MM.Q.allQs(1).forEach(q => all.push(q));
  const q = all.find(q => q.prompt === prompt);
  if (!q) return null;
  return { type: q.type, ans: q.ans ? MM.expand(q.ans[0])[0] : null };
}"""

def answer_current(page, wrong=False):
    """answer whatever question is on screen; returns 'ok'/'bad' text of receipt"""
    page.wait_for_selector('.q-prompt', timeout=5000)
    prompt = page.locator('.q .q-prompt').first.inner_text()
    prompt = prompt.replace('Find the mistake', '').strip()
    if page.locator('.q-opts .opt').count():
        sel = '.q-opts .opt[data-i="0"]' if not wrong else '.q-opts .opt:not([data-i="0"])'
        page.locator(sel).first.click()
    else:
        info = page.evaluate(FIND_Q, prompt)
        if not info:
            raise RuntimeError('question not found: ' + prompt)
        mode = page.locator('.q-mode')
        if mode.inner_text().startswith('Type'):
            mode.click()
        page.fill('.q-input', 'ㅋㅋ' if wrong else info['ans'])
        page.locator('.q-check').click()
    page.wait_for_selector('.q-fb .rcpt', timeout=4000)
    ok = 'ok' in page.locator('.q-fb .rcpt').get_attribute('class').split()
    return ok, prompt

def click_next(page):
    page.locator('.q-fb .q-next').click()
    time.sleep(0.05)

def run_shift(page, key, wrong_first=False):
    page.locator(f'.shift-card[data-act="shift:{key}"]').click()
    page.locator('#phaseGo').click()  # story
    res = []
    for i in range(10):
        ok, p = answer_current(page, wrong=(wrong_first and i == 0))
        res.append(ok)
        if page.locator('.after').count() and not page.locator('.after').is_hidden():
            pass
        click_next(page)
    page.locator('#phaseGo').click()  # cctv
    n = 0
    while page.locator('.round-head .round-t').count() and page.locator('.round-head .round-t').inner_text().startswith('CCTV'):
        ok, p = answer_current(page); res.append(ok); n += 1
        click_next(page)
        if n > 12: break
    # rush
    page.locator('#phaseGo').click()
    served = 0
    while page.locator('.rush .opt').count():
        page.locator('.rush .opt[data-k="0"]').first.click(); served += 1
        time.sleep(0.45)
        if served > 20: break
    page.locator('#rushNext').click()
    # fix (if shown)
    if page.locator('#phaseGo').count():
        page.locator('#phaseGo').click()
        for _ in range(4):
            ok, p = answer_current(page); click_next(page)
    page.wait_for_selector('.snack-box', timeout=5000)
    snack = page.locator('.snack-ko').inner_text()
    page.screenshot(path=OUT + f'shift_{key}_summary.png', full_page=True)
    page.locator('#sumBack').click()
    return res, n, served, snack

with sync_playwright() as p:
    b = p.chromium.launch()
    ctx = b.new_context(viewport={'width': 390, 'height': 844}, device_scale_factor=2)
    page = ctx.new_page()
    page.on('console', lambda m: m.type == 'error' and errors.append(m.text))
    page.on('pageerror', lambda e: errors.append(str(e)))
    page.goto(URL); page.wait_for_selector('.lrow')
    page.click('.lrow[data-ln="2"]')
    page.wait_for_selector('.tb-text')
    print('lessons:', page.locator('.lrow .lrow-n').all_inner_texts())
    print('TB sentences', page.locator('.sent').count(), 'arrows', page.locator('.arrow').count(), 'clips', page.locator('.trk-mini').count(), 'hints', page.locator('.exq-hint').count(), 'ko lines', page.locator('.exq-ko').count())
    page.screenshot(path=OUT + 'tb_top.png')
    # sentence clip playback (range request)
    page.locator('.trk-mini').nth(1).click(); time.sleep(1.5)
    t = page.evaluate('MM.AM.track.currentTime'); print('clip 2 time after 1.5s:', round(t, 2), '(starts 25.5)')
    page.evaluate('MM.AM.track.pause()')
    # exercises
    page.fill('#x-x2', '내일 영화를 봐고, 쇼핑하러 갈 거예요'); page.click('.ex-check[data-xid="x2"]')
    print('x2 wrong ->', page.locator('.exq[data-xid="x2"] .ex-fb').inner_text()[:90])
    answers = {'x1': '어제 친구를 만났고, 영화를 봤어요', 'x2': '내일 영화를 보고, 쇼핑하러 갈 거예요', 'x3': '만날 거고', 'x4': '먹고', 'x5': '책 읽었고, 공부했고, 운동했어요'}
    for k, v in answers.items():
        page.fill(f'#x-{k}', v); page.click(f'.ex-check[data-xid="{k}"]'); time.sleep(0.1)
    print('TB summary:', page.locator('.summary .rcpt-rows').inner_text().replace('\n', ' | '))
    page.locator('#exs').screenshot(path=OUT + 'tb_ex.png')
    # workbook
    page.click('#toWb'); page.wait_for_selector('#wbMatch')
    for rnd in range(2):
        page.wait_for_selector('#wbMatch .mt')
        ns = [x.get_attribute('data-n') for x in page.locator('#wbMatch .mt[data-s="L"]').all()]
        for nn in ns:
            page.click(f'#wbMatch .mt[data-s="L"][data-n="{nn}"]'); page.click(f'#wbMatch .mt[data-s="R"][data-n="{nn}"]')
        time.sleep(0.8)
    print('match done', page.locator('.vocab-done li').count())
    # explain
    page.fill('textarea[data-key="II.11"]', 'It links two verbs, like 그리고.')
    page.click('.xp-show[data-key="II.11"]'); page.click('.xp-judge[data-key="II.11"][data-v="self"]')
    page.click('.xp-show[data-key="II.12"]'); page.click('.xp-judge[data-key="II.12"]')
    page.fill('textarea[data-key="II.13"]', 'Because it means and then.'); page.click('.xp-show[data-key="II.13"]')
    page.locator('.wb-explain[data-key="II.13"]').screenshot(path=OUT + 'wb_explain.png')
    page.click('.xp-judge[data-key="II.13"][data-v="self"]')
    wb = {'III.14': '10월에는 일본에 가고, 11월에는 미국에 갈 거예요', 'III.15': '오늘은 커피숍에서 친구를 만났고, 한국어 공부했어요',
          'III.16': '삼겹살 먹고, 김치 먹고, 마늘 먹고, 고추 먹고, 밥 먹었어요', 'III.17': '수영해고, 영어 공부해고, 점심 먹었어요',
          'IV.18': '이 책은 재미있고 싸요', 'IV.19': '집에 가서 씻고 잤어요'}
    for k, v in wb.items():
        page.fill(f'input[data-key="{k}"]', v); page.click(f'.wb-check[data-key="{k}"]'); time.sleep(0.1)
    print('III.17 diag ->', page.locator('.wbq[data-key="III.17"] .ex-fb').inner_text()[:80])
    page.fill('input[data-key="III.17"]', '수영하고, 영어 공부하고, 점심 먹었어요'); page.click('.wb-check[data-key="III.17"]')
    print('WB summary:', page.locator('.summary .rcpt-rows').inner_text().replace('\n', ' | '))
    page.screenshot(path=OUT + 'wb_full.png', full_page=True)
    # game
    page.click('#toGame'); page.wait_for_selector('.shift-card')
    page.screenshot(path=OUT + 'game_home.png', full_page=True)
    for key in 'ABC':
        res, n, served, snack = run_shift(page, key, wrong_first=(key == 'A'))
        print(f'shift {key}: story+cctv ok {sum(res)}/{len(res)}, cctv items {n}, rush served {served}, snack {snack}')
    print('fixed:', page.evaluate('MM.S.fixed'))
    # readings
    for rid in ['l2.chat', 'l2.board']:
        page.click(f'.act[data-act="read:{rid}"]')
        while page.locator('#rNext').count(): page.click('#rNext')
        page.locator('.gl').first.click(); print(rid, 'gloss:', page.locator('.gl-pop').inner_text())
        page.screenshot(path=OUT + f'read_{rid}.png', full_page=True)
        page.click('#rQs')
        for _ in range(3): answer_current(page); click_next(page)
        page.click('#rBack')
    # cards
    page.click('.act[data-act="cards"]'); page.wait_for_selector('.mh-list'); page.click('#mhGo'); page.click('#mhF .eyebrow'); page.locator('#mhRate .mh-rb[data-g="2"]').click(); (page.click('#mhStop') if page.locator('#mhStop').count() else None); page.click('#mhBack')
    # shelf stocking
    page.click('.act[data-act="shelf"]')
    for _ in range(10): answer_current(page); click_next(page)
    page.click('#sumBack')
    # restock
    page.click('.act[data-act="restock"]')
    for _ in range(12): answer_current(page); click_next(page)
    page.click('#sumBack')
    page.click('.act[data-act="map"]'); page.screenshot(path=OUT + 'map.png', full_page=True); page.click('#mapBack')
    page.screenshot(path=OUT + 'game_home_after.png', full_page=True)
    tabs = page.locator('.tab .st').evaluate_all('els => els.map(e => e.className)')
    print('tab status:', tabs, 'won:', page.evaluate('MM.S.won'), 'collected:', page.evaluate('MM.S.coll'))
    # dark mode screenshot of textbook
    page.click('#themeBtn'); page.click('.tab[data-tab="tb"]'); page.screenshot(path=OUT + 'tb_dark.png')
    # L1 still works
    page.click('.lrow[data-ln="1"]'); page.wait_for_selector('.tb-text'); print('L1 sentences', page.locator('.sent').count())
    page.click('.tab[data-tab="game"]'); page.wait_for_selector('.shift-card'); print('L1 shifts', page.locator('.shift-card').count())
    b.close()
real = [e for e in errors if 'audio/l1' not in e and 'Failed to load resource' not in e]
print('console errors:', real if real else 'none', '| ignored (missing local L1 audio):', len(errors) - len(real))
