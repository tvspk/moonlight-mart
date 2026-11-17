"""Playwright check of the game-part voices. Usage: python3 tools/run_voice.py N [N…]  (needs rangeserver on dist 8765)
Per lesson: shift A story (▶ count per scene, play one, after-lines get ▶), voice setting switches the player's line id,
Loyalty Cards (▶ word / example), each reading (▶ per line). Rush Hour must have no ▶. Prints console errors."""
import sys, time
from playwright.sync_api import sync_playwright
sys.path.insert(0, __file__.rsplit('/', 1)[0])
import types
_src = open(__file__.rsplit('/', 1)[0] + '/run_l34.py').read(); _src = _src[_src.index('URL ='):_src.index('def tiles_check')]
run_l34 = types.ModuleType('run_l34'); run_l34.N = 1; run_l34.time = time; exec(_src, run_l34.__dict__)
answer_current, click_next = run_l34.answer_current, run_l34.click_next
URL = 'http://127.0.0.1:8765/moonlight-mart.html'
errors = []
with sync_playwright() as p:
    b = p.chromium.launch(); page = b.new_page(viewport={'width': 390, 'height': 800})
    page.on('console', lambda m: m.type == 'error' and 'audio/l' not in m.text and errors.append(m.text))
    page.on('pageerror', lambda e: errors.append(str(e)))
    page.goto(URL); page.wait_for_selector('.lrow')
    def go(n):
        page.evaluate(f"() => {{ MM.S.cur = {{ lesson: {n}, tab: 'game' }}; MM.app.render(); }}"); page.wait_for_selector('.shift-card')
    print('voice ids', page.evaluate('MM.voiceIds.size'))
    for N in map(int, sys.argv[1:]):
        run_l34.N = N
        go(N)
        # voice setting
        page.locator('.shift-card').first.click(); page.locator('#phaseGo').click()
        played = False; counts = []; after_btns = 0; rush_btns = 0
        for i in range(10):
            page.wait_for_selector('.scene')
            nl = page.locator('.scene .lines .line').count(); nb = page.locator('.scene .lines .vtrk').count(); counts.append(f'{nb}/{nl}')
            if nb and not played:
                page.locator('.scene .lines .vtrk').first.click(); time.sleep(1.0)
                t = page.evaluate('MM.AM.track.currentTime'); src = page.evaluate('MM.AM.track.src')
                print(f'  L{N} play {src.rsplit("/",1)[-1]} t={t:.2f}s'); played = t > 0.2
                page.evaluate('MM.AM.track.pause()')
            ok, _ = answer_current(page)
            after_btns += page.locator('.scene .after .vtrk').count()
            if i < 9: click_next(page)
        print(f'  L{N} shift A ▶ per scene {counts}, after ▶ {after_btns}')
        click_next(page)
        # CCTV + rush: count ▶ in rush only
        for _ in range(40):
            if page.locator('#phaseGo').count():
                t = page.locator('#phaseGo').inner_text()
                if 'register' in t:
                    page.locator('#phaseGo').click(); time.sleep(0.3); rush_btns = page.locator('.vtrk').count(); break
                page.locator('#phaseGo').click(); continue
            try: answer_current(page); click_next(page)
            except Exception: break
        print(f'  L{N} rush ▶ {rush_btns} (must be 0)')
        page.goto(URL); page.wait_for_selector('.lrow'); go(N)
        # player's voice switch: same 'you' line, two ids
        ids = page.evaluate("""() => { const out = {}; for (const v of ['M','F']) { MM.S.voice = v; out[v] = MM.voiceId(v, '네, 할머니! 죄송해요.'); } MM.S.voice = 'M'; return out; }""")
        print('  you-line ids M/F', ids, 'both exist:', page.evaluate(f"MM.voiceIds.has('{ids['M']}') && MM.voiceIds.has('{ids['F']}')"))
        # cards
        page.click('.act[data-act="cards"]'); page.wait_for_selector('.mh-list')
        print('  Mnemo Hooks ▶ in list', page.locator('.mh-list .vic').count(), 'of', page.locator('.mh-w').count(), 'words')
        page.click('#mhBack'); page.wait_for_selector('.shift-card')
        for rid in page.evaluate(f"(MM.reads[{N}]||[]).map(r => r.id)"):
            page.click(f'.act[data-act="read:{rid}"]')
            while page.locator('#rNext').count(): page.click('#rNext')
            print(f'  read {rid}: lines {page.locator(".rline").count()}, play-all button {page.locator("#rAll").count()}')
            page.goto(URL); page.wait_for_selector('.lrow'); go(N)
    page.screenshot(path='/home/claude/work/voice_home.png')
    b.close()
print('console errors:', errors[:10] or 'none')
