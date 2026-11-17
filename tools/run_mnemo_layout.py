"""Layout scan of every Mnemo Hooks screen (2026-11-15, after the stripe bug seen on a phone): 360 and 412 px, light + dark.
Checks: no text inside a flash card starts on the yellow stripe (left 16–22 px), nothing wider than the viewport,
rating / option buttons ≥ 44 px high, no page errors. Usage: python3 tools/run_mnemo_layout.py  (rangeserver on 8765)"""
from playwright.sync_api import sync_playwright
URL = 'http://127.0.0.1:8765/moonlight-mart.html'
CHECK = """() => {
  const out = [], vw = document.documentElement.clientWidth;
  if (document.documentElement.scrollWidth > vw + 1) out.push('page wider than viewport: ' + document.documentElement.scrollWidth);
  const f = document.querySelector('.mh-flash');
  if (f) { const L = f.getBoundingClientRect().left;
    const w = document.createTreeWalker(f, NodeFilter.SHOW_TEXT);
    while (w.nextNode()) { const t = w.currentNode; if (!t.textContent.trim()) continue; const p = t.parentElement; if (p.closest('[hidden]')) continue;
      const r = document.createRange(); r.selectNodeContents(t); for (const b of r.getClientRects()) if (b.width && b.left < L + 24) out.push('on stripe: ' + t.textContent.trim().slice(0, 30) + ' @' + Math.round(b.left - L)); } }
  document.querySelectorAll('#main *').forEach(e => { const r = e.getBoundingClientRect(); if (r.width && r.right > vw + 1 && !e.closest('[hidden]') && getComputedStyle(e).overflowX !== 'hidden') out.push('sticks out: ' + e.className + ' ' + Math.round(r.right)); });
  document.querySelectorAll('.mh-rb, .mh-opt, #mhGo, #mhOk, .mh-w summary').forEach(e => { const r = e.getBoundingClientRect(); if (r.height && r.height < 44 && !e.closest('[hidden]')) out.push('small target: ' + e.className + ' ' + Math.round(r.height)); });
  return [...new Set(out)].slice(0, 12);
}"""
errs = []
with sync_playwright() as p:
    b = p.chromium.launch()
    for W in (360, 412):
        for theme in ('light', 'dark'):
            pg = b.new_page(viewport={'width': W, 'height': 800}); pg.on('pageerror', lambda e: errs.append(str(e)))
            pg.goto(URL); pg.wait_for_selector('.lrow')
            if theme == 'dark': pg.click('#themeBtn')
            probs = {}
            for n in (1, 12, 23, 30, 'all'):
                pg.evaluate(f"()=>{{localStorage.clear(); MM.S.mh={{c:{{}}}}; MM.S.cur={{lesson:{12 if n == 'all' else n},tab:'game',closed:false}}; MM.MN.pick({repr(n) if n == 'all' else n}); MM.G.screen='cards'; MM.app.render();}}")
                pg.wait_for_selector('.mh-list'); pg.evaluate("()=>[...document.querySelectorAll('details')].slice(0,60).forEach(d=>d.open=true)"); pg.wait_for_timeout(200)
                probs[f'L{n} list'] = pg.evaluate(CHECK)
                if pg.locator('#mhRoots').count(): pg.click('#mhRoots'); probs[f'L{n} roots'] = pg.evaluate(CHECK); pg.click('#mhBk')
                pg.click('#mhGo'); pg.wait_for_selector('#mhF')
                probs[f'L{n} flash front'] = pg.evaluate(CHECK); pg.click('#mhF .eyebrow'); probs[f'L{n} flash back'] = pg.evaluate(CHECK)
                if n == 12: pg.locator('#mhF').screenshot(path=f'/home/claude/test/shots/lay_{W}_{theme}_flash.png')
                for _ in range(12):
                    if not pg.locator('#mhRate').count(): break
                    if pg.locator('#mhF').count() and pg.locator('#mhRate').is_hidden(): pg.click('#mhF .eyebrow')
                    pg.locator('#mhRate .mh-rb[data-g="2"]').click()
                probs[f'L{n} end'] = pg.evaluate(CHECK)
                pg.evaluate("()=>{for(const v of Object.values(MM.S.mh.c)) v[0]='2000-01-01';}"); pg.click('#mhLs'); pg.click('#mhGo')
                seen = set()
                for _ in range(25):
                    if not pg.locator('#mhRate').count(): break
                    lab = pg.locator('.round-p').inner_text().split(' · ')[0]
                    if pg.locator('#mhIn').count():
                        probs[f'L{n} {lab}'] = pg.evaluate(CHECK); pg.click('#mhGive'); probs[f'L{n} {lab} answered'] = pg.evaluate(CHECK)
                    elif pg.locator('.mh-opt').count():
                        probs[f'L{n} {lab}'] = pg.evaluate(CHECK); pg.locator('.mh-opt').first.click(); probs[f'L{n} {lab} answered'] = pg.evaluate(CHECK)
                    else:
                        pg.click('#mhF .eyebrow'); probs[f'L{n} {lab}'] = pg.evaluate(CHECK)
                    seen.add(lab); pg.locator('#mhRate .mh-rb:not([disabled])').last.click()
                probs[f'L{n} modes'] = [] if {'produkce', 'poslech', 'rozpoznání'} <= seen else ['modes seen: ' + str(seen)]
            bad = {k: v for k, v in probs.items() if v}
            print(W, theme, 'screens checked:', len(probs), '| problems:', bad or 'none')
            pg.close()
    b.close()
print('page errors:', errs or 'none')
