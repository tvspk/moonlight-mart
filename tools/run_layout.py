import time
from playwright.sync_api import sync_playwright
CHECK = """(where) => {
  const out = [], vw = document.documentElement.clientWidth;
  if (document.documentElement.scrollWidth > vw + 1) out.push(where + ': page scrolls sideways (' + document.documentElement.scrollWidth + ' > ' + vw + ')');
  for (const el of document.querySelectorAll('#main input:not([type=range]):not([type=hidden]), #main textarea, #main select')) {
    const r = el.getBoundingClientRect(); if (r.width === 0 && r.height === 0) continue;
    if (r.width < 70 && !el.classList.contains('gap')) out.push(where + ': narrow field ' + Math.round(r.width) + 'px ' + (el.className || el.tagName));
  }
  for (const el of document.querySelectorAll('#main *')) {
    const r = el.getBoundingClientRect(); if (!r.width) continue;
    if (r.right > vw + 1 && getComputedStyle(el).position !== 'fixed') { out.push(where + ': sticks out ' + Math.round(r.right - vw) + 'px: ' + el.tagName + '.' + String(el.className).split(' ')[0] + ' "' + (el.textContent || '').trim().slice(0, 30) + '"'); break; }
  }
  return out;
}"""
with sync_playwright() as p:
    b = p.chromium.launch(); pg = b.new_page(viewport={'width': 360, 'height': 740})
    errs = []; pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.goto('http://127.0.0.1:8765/moonlight-mart.html'); time.sleep(1.5)
    probs = []
    ns = pg.evaluate('Object.keys(MM.lessons).map(Number).sort((a,b)=>a-b)')
    for n in ns:
        for tab in ('tb', 'wb', 'game'):
            pg.evaluate(f"MM.G.screen='home'; MM.S.cur.lesson={n}; MM.S.cur.closed=false; MM.S.cur.tab='{tab}'; MM.app.render()"); time.sleep(0.15)
            probs += pg.evaluate(CHECK, f'L{n} {tab}')
        for scr in ['cards', 'map'] + [f"read:{r}" for r in pg.evaluate(f"(MM.reads[{n}]||[]).map(r=>r.id)")] + (['cert'] if pg.evaluate(f"!!(MM.game[{n}]||{{}}).finale") else []):
            pg.evaluate(f"MM.G.screen='{scr}'; MM.app.render()"); time.sleep(0.1)
            probs += pg.evaluate(CHECK, f'L{n} {scr}')
        # one text question of each lesson in type mode
        q = pg.evaluate(f"(() => {{ const q = MM.Q.allQs({n}).concat(...Object.values(MM.game[{n}].shifts).map(s => s.scenes.map(x => x.q))).find(q => ['fill','write','tiles'].includes(q.type)); return !!q; }})()")
        if q:
            pg.evaluate(f"""() => {{ const m=document.querySelector('#main'); const q = MM.Q.allQs({n}).concat(...Object.values(MM.game[{n}].shifts).map(s => s.scenes.map(x => x.q))).find(q => ['fill','write','tiles'].includes(q.type)); MM.Q.mount(m, Object.assign({{lesson:{n},id:'t'}}, q), {{lesson:{n}, tilesDefault:true, onResult(){{}}, onNext(){{}}}}); }}""")
            probs += pg.evaluate(CHECK, f'L{n} question tiles')
            pg.click('.q-mode'); probs += pg.evaluate(CHECK, f'L{n} question typed')
    pg.evaluate("document.documentElement.dataset.theme='dark'")
    print('\n'.join(probs) if probs else 'no layout problems', '| screens:', len(ns), 'lessons | errors:', errs)
