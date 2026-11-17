/* game.js — Moonlight Mart: counter (home), shifts (Story → CCTV Review → Rush Hour → Store Upgrades → summary),
   Dawn Restock, Shelf Stocking, Mnemo Hooks, group chat & notice board, floor plan, time card, transfer. */
'use strict';
MM.G = (() => {
  const { esc, $, $$, shuffle, pick } = MM.U;
  const G = {
    screen: 'home', inRound: false,
    render, renderExtras: el => renderExtras(el), leave() { abortRun(); G.screen = 'home'; MM.app.render(); MM.app.toTop(); }, abort: abortRun,
  };
  let run = null, rushTimer = null;
  function abortRun() { clearInterval(rushTimer); run = null; G.inRound = false; MM.ui.setBack(false); MM.tallyFlush(); }

  const lessonsWithGame = () => Object.keys(MM.game).map(Number).sort((a, b) => a - b);
  const allSkills = () => Object.assign({}, ...lessonsWithGame().map(k => MM.game[k].skills));
  const skillName = id => (allSkills()[id] || {}).en || 'Comprehension';
  const shiftDone = (n, k) => { const s = MM.LS(n).game.shifts[k]; return !!(s && s.done); };
  const unlockedLessons = () => lessonsWithGame().filter(k => Object.values(MM.LS(k).game.shifts).some(s => s.done));

  /* ---------- home: the counter ---------- */
  function nextTask(n) {
    if (MM.TB.status(n) !== 'done') return { t: 'Read and fill in the textbook lesson', b: 'Open Textbook', act: 'tab:tb' };
    if (MM.WB.status(n) !== 'done') return { t: 'Finish the workbook exercises', b: 'Open Workbook', act: 'tab:wb' };
    for (const k of ['A', 'B']) if (!shiftDone(n, k)) return { t: `Shift ${k}: ${MM.game[n].shifts[k].title}`, b: 'Clock in', act: 'shift:' + k };
    if (MM.dueSkills().length) return { t: `${MM.dueSkills().length} skill(s) past their expiry date`, b: 'Dawn Restock', act: 'restock' };
    const r = (MM.reads[n] || []).find(r => !MM.LS(n).game.reads[r.id]);
    if (r) return { t: `Read: ${r.title}`, b: 'Read it', act: 'read:' + r.id };
    if (!shiftDone(n, 'C')) return { t: `Optional: Shift C, ${MM.game[n].shifts.C.title}`, b: 'Clock in', act: 'shift:C' };
    return { t: 'All done for this lesson. Keep the shelves stocked.', b: 'Shelf Stocking', act: 'shelf' };
  }
  function timeCardHtml() {
    const days = []; for (let i = 13; i >= 0; i--) days.push(MM.U.addDays(MM.U.today(), -i));
    const t = MM.S.days[MM.U.today()] || 0;
    return `<div class="timecard"><div class="tc-head"><span>TIME CARD</span><span>${t >= MM.DAILY_GOAL ? 'Today: clocked in' : `Today: ${t} / ${MM.DAILY_GOAL} correct`}</span><span>Streak ${MM.streak()} d</span></div>
      <div class="tc-grid">${days.map(d => { const c = MM.S.days[d] || 0, ok = c >= MM.DAILY_GOAL; return `<div class="tc-cell ${ok ? 'stamped' : ''} ${d === MM.U.today() ? 'today' : ''}" title="${d}: ${c} correct"><span class="tc-d">${+d.slice(8)}</span>${ok ? `<span class="stamp">${esc(MM.world.stampKo)}</span>` : ''}</div>`; }).join('')}</div></div>`;
  }
  function expiryHtml() {
    const S = MM.S.skills, due = MM.dueSkills(), all = Object.entries(S).filter(([id]) => allSkills()[id]);
    if (!all.length) return `<p class="muted small">Nothing here yet. Finish a shift and your skills appear with their dates.</p>`;
    return `<ul class="expiry">${all.sort((a, b) => (a[1].due || '').localeCompare(b[1].due || '')).map(([id, s]) => {
      const d = s.due ? MM.U.daysBetween(MM.U.today(), s.due) : 0;
      return `<li class="${due.includes(id) ? 'due' : ''}"><span class="ex-name">${esc(skillName(id))}${MM.isWeak(id) ? ' <span class="chip chip-weak">weak · 2× ₩</span>' : ''}</span><span class="ex-date">${due.includes(id) ? 'EXPIRED' : `best before +${d} d`}</span></li>`;
    }).join('')}</ul>`;
  }
  function shelfHtml() {
    const items = [];
    for (const k of lessonsWithGame()) {
      for (const sh of Object.values(MM.game[k].shifts)) items.push(sh.snack);
      for (const r of (MM.reads[k] || [])) items.push(r.reward);
    }
    return `<div class="coll">${items.map(it => { const has = MM.S.coll.includes(it.id); return `<div class="prod ${has ? '' : 'missing'}" title="${esc(has ? it.desc : 'Not collected yet')}"><span class="prod-ltd">${has ? 'LIMITED' : '?'}</span><span class="ko prod-ko">${has ? esc(it.ko) : '— — —'}</span><span class="prod-en">${has ? esc(it.en) : 'empty slot'}</span></div>`; }).join('')}</div>`;
  }
  function actCard(act, kind, title, desc, status, disabled) {
    return `<button type="button" class="act" data-act="${act}" ${disabled ? 'disabled' : ''}><span class="act-k">${esc(kind)}</span><span class="act-t">${esc(title)}</span><span class="act-d">${esc(desc)}</span><span class="act-s">${esc(status)}</span></button>`;
  }
  function home(main, n) {
    const G0 = MM.game[n];
    if (!G0) { main.innerHTML = '<p class="muted">This lesson has no game yet.</p>'; return; }
    const due = MM.dueSkills().length, canRestock = unlockedLessons().length > 0;
    main.innerHTML = `<section class="home">
      <h2 class="sec-h">Shifts</h2>
      <p class="sec-help">Each shift is a short story at the store, then a review of what people said, a 60-second quiz at the register, and one repair in the store.</p>
      <div class="shifts">${Object.entries(G0.shifts).map(([k, s]) => {
        const st = MM.LS(n).game.shifts[k];
        return `<button type="button" class="shift-card ${st && st.done ? 'done' : ''}" data-act="shift:${k}">
          <span class="shift-k">${k}</span><span class="shift-t">${esc(s.title)}</span><span class="shift-s">${esc(s.sub)}</span>
          <span class="shift-st">${st && st.done ? `✓ best ${st.best}%` : s.optional ? 'optional' : 'not started'}</span></button>`;
      }).join('')}</div>
      <h2 class="sec-h">Around the store</h2>
      <div class="acts">
        ${actCard('restock', 'Review', 'Dawn Restock', '12 mixed questions from the shifts you finished. Expired skills and your past mistakes come first.', canRestock ? (due ? `${due} skill(s) expired` : 'nothing expired') : 'unlocks after your first shift', !canRestock)}
        ${actCard('shelf', 'Vocabulary quiz', 'Shelf Stocking', '10 words from this lesson, Korean ↔ English.', '10 per round')}
        ${actCard('cards', 'Vocabulary · česky', 'Mnemo Hooks', 'Czech memory hooks for this lesson’s words and grammar, with spaced repetition.', MM.MN.status(n))}
        ${(MM.reads[n] || []).map(r => actCard('read:' + r.id, 'Reading', r.title, r.kind === 'chat' ? 'Short staff messages in Korean, then 3 questions.' : 'A notice from the neighborhood, then 3 questions.', MM.LS(n).game.reads[r.id] ? '✓ read' : 'new')).join('')}
        ${G0.finale ? actCard('cert', 'Level 3', G0.finale.certTitle, 'Your whole Level 3 on one receipt: lessons, shifts, repairs, accuracy by lesson group and your three weakest skills.', certDone() ? '✓ complete' : 'see your progress') : ''}
        ${G0.finale ? actCard('endless', 'Review · all lessons', 'Endless Night', '12 mixed questions from all 30 lessons, as many rounds as you like. Your mistakes and expired skills come back first.', 'no end') : ''}
        ${actCard('map', 'Bonuses', 'Store repairs', 'Fix things in the store for permanent bonuses: more ₩, a longer Rush Hour, free hints, better pay for practice.', `${MM.S.fixed.length} fixed`)}
      </div>
</section>`;
    main.firstElementChild.addEventListener('click', e => { const b = e.target.closest('[data-act]'); if (b && !b.disabled) act(b.dataset.act, n); });
  }
  /* Extras (not lessons): time card, expiry dates, collection, saving/transfer/keyboard — rendered at the very bottom of the
     page (#xtail, below the last lesson row) on every tab; hidden during a round */
  function renderExtras(el) {
    const n = MM.S.cur.lesson;
    const ma = MM.MN.allStatus();
    el.innerHTML = `
      <div class="acts mh-allbox">${actCard('mnall', 'Mnemo Hooks · všechny lekce', 'Všechna slovíčka', `Všech ${ma.n} karet ze všech lekcí najednou: hledání, filtr podle lekce a druhu, procvičování napříč lekcemi.`, `${ma.known} umím · ${ma.due} k opakování`)}</div>
      <details class="extras" id="extras"${MM.S.extrasOpen ? ' open' : ''}>
        <summary class="extras-sum"><span class="extras-t">Extras <span class="extras-tag">not part of the lessons</span></span>
          <span class="extras-d">Your streak and time card, when skills need review, the snacks you collected, and saving / transfer / keyboard settings.</span></summary>
      <h2 class="sec-h">Time card</h2>
      <p class="sec-help">10 correct answers (Mnemo Hooks cards count too) in one day stamp the card. Stamped days in a row make your streak.</p>
      ${timeCardHtml()}
      <h2 class="sec-h">Expiry dates</h2>
      <p class="sec-help">Every skill has a best-before date. When it expires, review it in Dawn Restock. The better you know it, the longer it keeps (1, 2, 4, 7, 14, 30, 60 days).</p>${expiryHtml()}
      <h2 class="sec-h">Limited-edition shelf</h2>
      <p class="sec-help">Snacks and stickers you collect by finishing shifts and readings.</p>${shelfHtml()}
      <h2 class="sec-h">Your progress</h2>
      <div class="data-box">
        <p class="muted">${MM.dbOk ? 'Saved to your account automatically.' : 'Saved in this browser.'} Use a transfer code to move progress to another device.</p>
        ${MM.sync && MM.sync.avail ? MM.sync.line() : ''}
        <div class="data-btns"><button type="button" class="btn btn-ghost" data-act="export">Get transfer code</button><button type="button" class="btn btn-ghost" data-act="import">Enter a code</button><button type="button" class="btn btn-ghost danger" data-act="reset">Erase progress</button></div>
        <div id="dataPanel"></div>
        <p class="muted small">On-screen Korean keyboard: ${MM.S.kbd === 'system' ? 'off (using your system keyboard)' : 'on'}. <button type="button" class="link" data-act="kbd">${MM.S.kbd === 'system' ? 'Turn it on' : 'Use system keyboard'}</button></p>
      </div></details>`;
    $('#extras', el).addEventListener('toggle', e => { MM.S.extrasOpen = e.target.open; MM.save(); });
    el.onclick = e => { const b = e.target.closest('[data-act]'); if (b && !b.disabled) act(b.dataset.act, n); };   // the whole bottom block: all-words card + Extras
  }
  function act(a, n) {
    const [k, v] = a.split(':');
    if (k === 'tab') return MM.app.go(v);
    if (k === 'shift') return startShift(n, v);
    if (k === 'restock') return startRestock(n);
    if (k === 'shelf') return startShelf(n);
    if (k === 'cards') { MM.MN.pick(n); G.screen = 'cards'; MM.app.render(); return MM.app.toMain(); }
    if (k === 'mnall') { MM.MN.pick('all'); return MM.app.go('game', { screen: 'cards' }); }
    if (k === 'read') { G.screen = 'read:' + v; MM.app.render(); return MM.app.toMain(); }
    if (k === 'map') { G.screen = 'map'; MM.app.render(); return MM.app.toMain(); }
    if (k === 'cert') { G.screen = 'cert'; MM.app.render(); return MM.app.toMain(); }
    if (k === 'endless') return startEndless(n);
    if (k === 'kbd') { if (MM.S.kbd === 'system') MM.kbd.useScreen(); else { MM.S.kbd = 'system'; MM.save(); MM.kbd.applyMode(); } return MM.app.render(); }
    if (k === 'export' || k === 'import' || k === 'reset') return dataPanel(k);
    if (k === 'sync') return MM.sync.open();
  }

  /* ---------- transfer / reset ---------- */
  async function dataPanel(k) {
    const p = $('#dataPanel');
    if (k === 'export') {
      const code = await MM.exportCode();
      p.innerHTML = `<label class="lbl" for="codeOut">Your transfer code</label><textarea id="codeOut" class="code" readonly rows="4">${esc(code)}</textarea><button type="button" class="btn btn-sm" id="copyCode">Copy</button>`;
      $('#copyCode').addEventListener('click', () => {
        const t = $('#codeOut');
        navigator.clipboard.writeText(t.value).then(() => MM.ui.toast('Code copied.')).catch(() => { t.focus(); t.select(); MM.ui.toast('Select the text and copy it.'); });
      });
    } else if (k === 'import') {
      p.innerHTML = `<label class="lbl" for="codeIn">Paste a code (starts with MM3-)</label><textarea id="codeIn" class="code" rows="4"></textarea><button type="button" class="btn btn-sm" id="prevCode">Preview</button><div id="prevOut"></div>`;
      $('#prevCode').addEventListener('click', async () => {
        const out = $('#prevOut');
        try {
          const st = await MM.importCode($('#codeIn').value);
          const shifts = Object.entries(st.L).map(([n, l]) => `L${n}: ${Object.keys((l.game || {}).shifts || {}).filter(k => l.game.shifts[k].done).join(', ') || 'no shifts'}`).join(' · ');
          out.innerHTML = `<div class="rcpt"><div class="rcpt-rows"><p><span>Earnings</span><b>${MM.U.won(st.won)}</b></p><p><span>Shifts done</span><b>${esc(shifts || '—')}</b></p><p><span>Items collected</span><b>${st.coll.length}</b></p><p><span>Theme</span><b>${esc(st.theme || 'system')}</b></p></div></div>
            <button type="button" class="btn btn-go danger" id="doImport">Replace my progress with this</button>`;
          $('#doImport').addEventListener('click', () => { const off = MM.sync && MM.sync.reset(); MM.S = st; MM.ui.applyTheme(); MM.saveNow(); MM.ui.toast(off ? 'Progress imported. Sync is now off on this device.' : 'Progress imported.'); MM.app.render(); });
        } catch (e) { out.innerHTML = `<p class="err">That code could not be read. ${esc(e.message || '')}</p>`; }
      });
    } else {
      p.innerHTML = `<p class="err">${MM.sync && MM.sync.on() ? 'This erases all lessons, earnings and the collection on this device only, and turns sync off here. Your other devices keep their progress.' : 'This erases all lessons, earnings and the collection on this device and in your account.'}</p><button type="button" class="btn danger" id="doReset">Yes, erase everything</button>`;
      $('#doReset').addEventListener('click', () => { const off = MM.sync && MM.sync.reset(); const th = MM.S.theme; MM.S = MM.defaultState(); MM.S.theme = th; MM.saveNow(); MM.ui.toast(off ? 'Progress erased on this device. Sync is now off here.' : 'Progress erased.'); MM.app.render(); });
    }
  }

  /* ---------- generic round of questions ---------- */
  function runQueue(main, n, cfg) {
    G.inRound = true; MM.ui.setBack(true);
    let i = 0; const items = cfg.items, local = { ok: 0, total: 0, earned: 0, tally: {} };
    const draw = () => {
      const q = items[i];
      main.innerHTML = `<section class="round">
        <div class="round-head"><span class="round-t">${esc(cfg.title)}</span><span class="round-p">${i + 1} / ${items.length}</span></div>
        <div class="round-bar"><span style="width:${(i / items.length) * 100}%"></span></div>
        ${cfg.sub ? `<p class="round-sub">${esc(typeof cfg.sub === 'function' ? cfg.sub(q, i) : cfg.sub)}</p>` : ''}
        <div class="qhost"></div></section>`;
      MM.Q.mount($('.qhost', main), Object.assign({ lesson: n }, q), {
        lesson: n, review: q._review, base: cfg.base, tilesDefault: cfg.tilesDefault,
        nextLabel: i + 1 < items.length ? 'Next ▸' : 'Finish ▸',
        onResult(res) { local.total++; if (res.ok) local.ok++; local.earned += res.earned || 0; const sk = q.skill || '_'; const t = local.tally[sk] = local.tally[sk] || { c: 0, w: 0 }; res.ok ? t.c++ : t.w++; if (cfg.onResult) cfg.onResult(q, res); },
        onNext() { i++; if (i < items.length) { draw(); MM.app.toTop(); } else cfg.onEnd(local); },
      });
    };
    draw();
  }
  function roundSummary(main, title, local, extraHtml, back = 'Back to the counter') {
    MM.tallyFlush();
    G.inRound = false; MM.ui.setBack(false);
    const pct = Math.round(local.ok / Math.max(1, local.total) * 100);
    main.innerHTML = `<section class="round"><div class="rcpt summary"><div class="rcpt-head"><span class="rcpt-mark">${esc(title)}</span><span>${pct}%</span></div>
      <div class="rcpt-rows">
        ${Object.entries(local.tally).map(([sk, t]) => `<p><span>${esc(sk === '_' ? 'Comprehension' : skillName(sk))}</span><b>${t.c} / ${t.c + t.w}</b></p>`).join('')}
        <p class="total"><span>Earned</span><b>${MM.U.won(local.earned)}</b></p></div>
      <div class="barcode" aria-hidden="true"></div></div>${extraHtml || ''}
      <button type="button" class="btn btn-go" id="sumBack">${esc(back)} ▸</button></section>`;
    MM.ui.barcodes(main);
    $('#sumBack').addEventListener('click', () => { G.screen = 'home'; MM.app.render(); MM.app.toTop(); });
    MM.app.refreshTabs(); MM.ui.refreshWon(); MM.app.toTop();
  }

  /* ---------- variants for returned mistakes ---------- */
  function variant(n, skill, excludeIds) {
    if (!skill) return null;
    const pool = unlockedLessons().concat([n]).flatMap(k => MM.Q.allQs(k)).filter(q => q.skill === skill && !excludeIds.has(q.id));
    return pool.length ? Object.assign({}, pick(pool), { _review: true }) : null;
  }

  /* ---------- shift ---------- */
  function startShift(n, key) {
    const sh = MM.game[n].shifts[key];
    run = { n, key, sh, phase: 'story', i: 0, ok: 0, total: 0, earned: 0, tally: {}, extra: [], added: 0, used: new Set() };
    G.inRound = true; G.screen = 'run'; MM.ui.setBack(true);
    phaseCard('story');
  }
  function track(q, res) {
    run.total++; if (res.ok) run.ok++; run.earned += res.earned || 0;
    const sk = q.skill || '_'; const t = run.tally[sk] = run.tally[sk] || { c: 0, w: 0 }; res.ok ? t.c++ : t.w++;
    run.used.add(q.id);
    if (!res.ok && run.added < 2) { const v = variant(run.n, q.skill, new Set([...run.used, q.id])); if (v) { run.extra.push(v); run.added++; run.used.add(v.id); } }
  }
  const PHASES = {
    story: { t: 'Story', d: 'Work the shift. Read what people say, then answer.' },
    cctv: { t: 'CCTV Review', d: 'Re-watch the tape. What exactly did they say, and why?' },
    rush: { t: 'Rush Hour', d: 'A queue at the register. 15 quick questions against the clock.' },
    fix: { t: 'Store Upgrades', d: 'Something in the store needs fixing. Four questions and it’s repaired for good.' },
  };
  function phaseCard(ph) {
    const main = $('#main'), sh = run.sh;
    run.phase = ph;
    if (ph === 'fix') {
      const up = MM.upgrades.find(u => u.id === sh.fix);
      if (!up || MM.S.fixed.includes(up.id)) return finishShift();
    }
    const order = ['story', 'cctv', 'rush', 'fix'];
    const up = MM.upgrades.find(u => u.id === sh.fix);
    main.innerHTML = `<section class="round phase">
      <p class="eyebrow">Shift ${run.key} · ${esc(sh.title)}</p>
      <ol class="phases">${order.map(p => `<li class="${p === ph ? 'on' : order.indexOf(p) < order.indexOf(ph) ? 'past' : ''}">${PHASES[p].t}</li>`).join('')}</ol>
      <h1 class="phase-t">${PHASES[ph].t}</h1><p class="phase-d">${esc(PHASES[ph].d)}</p>
      ${ph === 'story' && sh.note ? `<aside class="sticky-note boss">${esc(sh.note.text)}</aside>` : ''}
      ${ph === 'fix' ? `${mapSvg(up.id)}<p class="phase-d"><b>${esc(up.en)}</b>. Fixing it gives: ${esc(up.perk)}.</p>` : ''}
      ${ph === 'rush' ? `<p class="phase-d">You have <b>${rushTime()} seconds</b>. Unused seconds pay ₩10 each if you serve the whole queue.</p>` : ''}
      <button type="button" class="btn btn-go" id="phaseGo">${ph === 'story' ? 'Clock in' : ph === 'rush' ? 'Open the register' : ph === 'fix' ? 'Start the repair' : 'Roll the tape'} ▸</button></section>`;
    $('#phaseGo').addEventListener('click', () => { MM.app.toTop(); if (ph === 'story') { run.i = 0; drawScene(); } else if (ph === 'cctv') runCctv(); else if (ph === 'rush') runRush(); else runFix(); });
    MM.app.toTop();
  }

  /* ▶ for a game line: shown only when its id is in MM.voiceMap (lessons/voice_ids.js, GENERATED by tools/voice_pack.py):
     id → [lesson, from, to] = a clip of the per-lesson sprite audio/voice/l<lesson>.mp3 (one file per lesson, not per line:
     an artifact version holds at most 511 files) */
  /* yk = [lesson, story key] for the player's lines (MM.youVoice); scenes use the running shift */
  function clipOf(who, ko, yk) {
    const v = who === 'you' ? MM.youVoice(...(yk || (run ? [run.n, run.key] : [0, 'A']))) : MM.VOICE_OF[who];
    return v && MM.voiceMap && ko ? MM.voiceMap[MM.voiceId(v, ko)] : null;
  }
  function vbtn(who, ko, label, yk) {
    const c = clipOf(who, ko, yk);
    return c ? `<button type="button" class="trk trk-mini vtrk" data-trk="audio/voice/l${c[0]}.mp3" data-from="${c[1]}" data-to="${c[2]}" aria-label="${esc(label || 'Play this line')}"><span class="trk-ic">▶</span></button>` : '';
  }
  /* Mnemo Hooks cards: a small speaker icon ON the card (a span, because the card itself is a button) */
  const SPK = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';
  /* text + speaker icon: the icon is glued to the last word, so it never wraps onto a line of its own (it used to land
     right in the middle of a sentence card, where people tap to flip) */
  function withIcon(text, icon) {
    const t = esc(text); if (!icon) return t;
    const m = /(\S+)$/.exec(t); return m ? t.slice(0, m.index) + `<span class="nw">${m[1]}${icon}</span>` : t + icon;
  }
  function vicon(ko, label) {
    const c = clipOf('card', ko);
    return c ? `<span class="vtrk vic" role="button" tabindex="0" data-trk="audio/voice/l${c[0]}.mp3" data-from="${c[1]}" data-to="${c[2]}" aria-label="${esc(label)}">${SPK}</span>` : '';
  }
  /* readings: one button plays the heading + every line in order (MM.AM.track; the next clip starts when one stops at its end) */
  let seq = null;
  function stopSeq() { if (!seq) return; const s0 = seq; seq = null; s0.btn.classList.remove('playing'); s0.btn.querySelector('.trk-ic').textContent = '▶'; $$('.speaking').forEach(x => x.classList.remove('speaking')); if (!MM.AM.track.paused) MM.AM.track.pause(); }
  function stepSeq() {
    if (!seq) return; const it = seq.items[seq.i];
    $$('.speaking').forEach(x => x.classList.remove('speaking')); if (it.el) it.el.classList.add('speaking');
    seq.key = it.src + '#' + it.from + '-' + it.to; MM.AM.playTrack(it.src, null, 1, it.from, it.to);
  }
  function playSeq(items, btn) {
    if (seq && seq.btn === btn) return stopSeq();
    stopSeq(); if (!items.length) return; bindSeq();
    seq = { items, i: 0, btn }; btn.classList.add('playing'); btn.querySelector('.trk-ic').textContent = '■'; stepSeq();
  }
  let seqBound = false;
  function bindSeq() { if (seqBound) return; seqBound = true; MM.AM.track.addEventListener('pause', () => {
    if (!seq) return;
    const a = MM.AM.track, atEnd = MM.AM.clipEnd != null && a.currentTime >= MM.AM.clipEnd - 0.1;
    if (MM.AM.trackKey !== seq.key || !atEnd) return stopSeq();   // another ▶ or a manual stop
    seq.i++; if (seq.i < seq.items.length) setTimeout(stepSeq, 350); else stopSeq();
  }); }
  document.addEventListener('keydown', e => { if ((e.key === 'Enter' || e.key === ' ') && e.target.matches && e.target.matches('.vic')) { e.preventDefault(); e.target.click(); } }, true);
  if (!MM.vtrkBound) { MM.vtrkBound = true; document.addEventListener('click', e => { const b = e.target.closest('.vtrk'); if (!b) return; e.preventDefault(); e.stopPropagation(); MM.AM.playTrack(b.dataset.trk, b, 1, +b.dataset.from, +b.dataset.to); }, true); }
  function lineHtml(l, locked) {
    const c = MM.cast[l[0]] || { ko: l[0] };
    const you = l[0] === 'you';
    return `<div class="line ${you ? 'me' : ''} who-${esc(l[0])}"><span class="who ${you ? '' : 'ko'}">${you ? 'You' : esc(c.ko)}</span>
      <div class="bubble"><p class="ko">${esc(l[1]).replace('___', '<span class="blank">　　</span>')}${vbtn(l[0], l[1])}</p>
      <button type="button" class="link trb" ${locked ? 'disabled' : ''}>${locked ? '🔒 translation after you answer' : 'Translate'}</button><p class="en" hidden>${esc(l[2])}</p></div></div>`;
  }
  function drawScene() {
    const main = $('#main'), sc = run.sh.scenes[run.i], tot = run.sh.scenes.length;
    const locked = sc.q.type === 'enOpts';
    main.innerHTML = `<section class="round"><article class="scene">
      <div class="scene-top"><span class="sc-time">${esc(sc.time)}</span><span class="sc-place">${esc(sc.place)}</span><span class="sc-prog">${run.i + 1}/${tot}</span></div>
      <div class="round-bar"><span style="width:${run.i / tot * 100}%"></span></div>
      <p class="narr">${esc(sc.narr)}</p>
      ${sc.lines ? `<div class="lines">${sc.lines.map(l => lineHtml(l, locked)).join('')}</div>` : ''}
      <div class="qhost"></div>
      <div class="after" hidden>${(sc.after || []).map(l => lineHtml(l, false)).join('')}${sc.afterNarr ? `<p class="narr">${esc(sc.afterNarr)}</p>` : ''}</div>
      </article></section>`;
    const art = $('.scene', main);
    art.addEventListener('click', e => { const b = e.target.closest('.trb'); if (b && !b.disabled) { const p = b.nextElementSibling; p.hidden = !p.hidden; b.textContent = p.hidden ? 'Translate' : 'Hide'; } });
    MM.Q.mount($('.qhost', main), Object.assign({ lesson: run.n, id: sc.id }, sc.q), {
      lesson: run.n, tilesDefault: true, nextLabel: run.i + 1 < tot ? 'Next scene ▸' : 'End of story ▸',
      onResult(res) {
        track(Object.assign({ id: sc.id }, sc.q), res);
        $$('.trb', art).forEach(b => { b.disabled = false; if (b.textContent.startsWith('🔒')) b.textContent = 'Translate'; });
        const af = $('.after', art); if (af.innerHTML.trim()) { af.hidden = false; }
      },
      onNext() { run.i++; if (run.i < tot) { drawScene(); MM.app.toTop(); } else phaseCard('cctv'); },
    });
  }
  function runCctv() {
    const items = run.sh.cctv.concat(run.extra);
    runQueue($('#main'), run.n, {
      title: `CCTV REVIEW · SHIFT ${run.key}`, items, tilesDefault: true,
      sub: q => q._review ? 'Returned mistake: same rule, different sentence.' : 'Tape ' + String(Math.floor(Math.random() * 6) + 22).padStart(2, '0') + ':' + String(Math.floor(Math.random() * 60)).padStart(2, '0'),
      onResult: (q, res) => track(q, res),
      onEnd: () => phaseCard('rush'),
    });
  }
  function rushTime() { return 60 + (MM.hasPerk('rush10') ? 10 : 0) + 5 * MM.perkCount('rush5'); }
  function rushItems(n) {
    const G0 = MM.game[n], extra = G0.rushPool ? G0.pool.filter(q => q.type === 'mc' || q.type === 'enOpts').map(q => Object.assign({ lesson: n }, q)) : [];
    const pool = shuffle(MM.Q.genForms(n).concat(MM.Q.vocabList(n).map((v, i) => MM.Q.genVocab(n, v, i % 2 ? 'en' : 'ko')), extra));
    return pool.slice(0, 15);
  }
  function runRush() {
    const main = $('#main'), n = run.n, items = rushItems(n);
    let left = rushTime(), i = 0, served = 0, ended = false;
    const draw = () => {
      const q = items[i];
      const opts = shuffle(q.opts.map((t, k) => ({ t, k })));
      main.innerHTML = `<section class="round rush">
        <div class="rush-head"><span class="rush-clock" id="rushClock">${left}</span><span class="rush-lbl">sec</span>
          <div class="queue" aria-label="Customers left">${items.map((_, k) => `<span class="cust ${k < i ? 'gone' : k === i ? 'now' : ''}"></span>`).join('')}</div></div>
        <p class="q-prompt">${esc(q.prompt)}</p>${q.ko ? `<p class="q-ko ko">${esc(q.ko).replace('___', '<span class="blank">　　</span>')}</p>` : ''}
        <div class="q-opts ${q.type === 'enOpts' ? 'en-opts' : 'ko-opts'}">${opts.map(o => `<button type="button" class="opt ${q.type === 'enOpts' ? '' : 'ko'}" data-k="${o.k}">${esc(o.t)}</button>`).join('')}</div></section>`;
      $$('.opt', main).forEach(b => b.addEventListener('click', () => {
        if (b.disabled) return;
        const ok = b.dataset.k === '0';
        $$('.opt', main).forEach(x => x.disabled = true);
        b.classList.add(ok ? 'is-ok' : 'is-bad'); $('.opt[data-k="0"]', main).classList.add('is-ok');
        const earned = MM.record(Object.assign({ lesson: n }, q), ok, { base: 30 });
        track(q, { ok, earned }); if (ok) served++;
        MM.ui.sound(ok); MM.ui.refreshWon();
        const me = run; setTimeout(() => { if (run !== me || ended) return; /* the round was left or the time ran out meanwhile */ i++; if (i < items.length && left > 0) draw(); else endRush(); }, ok ? 350 : 900);
      }));
    };
    const endRush = () => {
      if (ended) return; ended = true;
      clearInterval(rushTimer);
      let bonus = 0;
      if (i >= items.length && left > 0) { bonus = left * 10; MM.S.won += bonus; run.earned += bonus; MM.save(); MM.ui.refreshWon(); }
      main.innerHTML = `<section class="round"><div class="rcpt"><div class="rcpt-head"><span class="rcpt-mark">RUSH HOUR</span><span>${left > 0 ? 'queue cleared' : 'time up'}</span></div>
        <div class="rcpt-rows"><p><span>Customers served</span><b>${i} / ${items.length}</b></p><p><span>Correct</span><b>${served}</b></p><p><span>Seconds left</span><b>${left}</b></p><p class="total"><span>Time bonus</span><b>${MM.U.won(bonus)}</b></p></div>
        <div class="barcode" aria-hidden="true"></div></div><button type="button" class="btn btn-go" id="rushNext">Continue ▸</button></section>`;
      MM.ui.barcodes(main);
      $('#rushNext').addEventListener('click', () => phaseCard('fix'));
    };
    draw();
    clearInterval(rushTimer);
    const me0 = run; rushTimer = setInterval(() => { if (run !== me0) return clearInterval(rushTimer); left--; const c = $('#rushClock'); if (c) { c.textContent = left; c.classList.toggle('low', left <= 10); } if (left <= 0) endRush(); }, 1000);
  }
  function fixItems(n, upId) {
    const skill = (MM.game[n].fixSkills || {})[upId];
    const pool = MM.Q.allQs(n).filter(q => q.skill === skill && (q.type === 'mc' || q.type === 'enOpts' || q.type === 'odd'));
    return shuffle(pool).slice(0, 4);
  }
  function runFix(standalone) {
    const r = run, up = MM.upgrades.find(u => u.id === r.sh.fix);
    runQueue($('#main'), r.n, {
      title: `REPAIR · ${up.en.toUpperCase()}`, items: fixItems(r.n, up.id),
      onResult: (q, res) => track(q, res),
      onEnd: local => {
        if (local.ok >= 3) { if (!MM.S.fixed.includes(up.id)) MM.S.fixed.push(up.id); MM.save(); MM.ui.toast(`${up.en} fixed: ${up.perk}`); }
        else MM.ui.toast('The repair didn’t hold (fewer than 3 correct). Try again from the floor plan.');
        if (standalone) { roundSummary($('#main'), 'REPAIR', local, mapSvg(), 'Back to the counter'); run = null; } else finishShift();
      },
    });
  }
  function finishShift() {
    const r = run, n = r.n, L = MM.LS(n), pct = Math.round(r.ok / Math.max(1, r.total) * 100);
    const prev = L.game.shifts[r.key] || {};
    L.game.shifts[r.key] = { done: true, best: Math.max(prev.best || 0, pct), runs: (prev.runs || 0) + 1 };
    const pay = 300 * MM.perkCount('shift300'); if (pay) { MM.S.won += pay; r.earned += pay; MM.ui.toast(`ATM bonus: ${MM.U.won(pay)}`); }
    const sn = r.sh.snack, isNew = !MM.S.coll.includes(sn.id);
    if (isNew) MM.S.coll.push(sn.id);
    MM.save();
    run = null;
    const snackHtml = `<div class="snack"><div class="snack-box"><span class="prod-ltd">LIMITED${isNew ? ' · NEW' : ''}</span><span class="ko snack-ko">${esc(sn.ko)}</span><span class="snack-en">${esc(sn.en)}</span></div><p class="snack-desc">${esc(sn.desc)}</p></div>`;
    roundSummary($('#main'), `SHIFT ${r.key} · ${r.sh.title.toUpperCase()}`, { ok: r.ok, total: r.total, earned: r.earned, tally: r.tally }, snackHtml);
  }

  /* ---------- Dawn Restock ---------- */
  function startRestock(n) {
    const ls = unlockedLessons(); if (!ls.length) return;
    const src = ls.flatMap(k => MM.Q.allQs(k)), used = new Set(), out = [];
    const due = MM.dueSkills(); let di = 0;
    const mist = MM.S.mistakes.slice().sort((a, b) => b.n - a.n);
    let mi = 0;
    for (let i = 0; i < 12; i++) {
      let q = null;
      if ((i + 1) % 3 === 0 && mi < mist.length) {
        const m = mist[mi++];
        const c = src.filter(x => x.skill === m.skill && x.id !== m.qid && !used.has(x.id));
        q = c.length ? Object.assign({}, pick(c), { _review: true }) : null;
      }
      if (!q && due.length) { for (let t = 0; t < due.length && !q; t++) { const sk = due[(di++) % due.length]; const c = src.filter(x => x.skill === sk && !used.has(x.id)); if (c.length) q = pick(c); } }
      if (!q) { const c = src.filter(x => !used.has(x.id)); q = pick(c); }
      used.add(q.id); out.push(q);
    }
    G.screen = 'run';
    runQueue($('#main'), n, {
      title: 'DAWN RESTOCK · 05:00', items: out, tilesDefault: true, base: MM.perkCount('restock25') ? 100 + 25 * MM.perkCount('restock25') : undefined,
      sub: q => q._review ? 'Returned mistake: same rule, different sentence. Correct = it leaves your mistake pile.' : (MM.isWeak(q.skill) ? 'Weak skill: double ₩.' : 'Restocking: ' + skillName(q.skill)),
      onEnd: local => roundSummary($('#main'), 'DAWN RESTOCK', local),
    });
  }

  /* ---------- L31 finale: Endless Night + Level 3 certificate ---------- */
  function startEndless(n, round = 1) {
    const ls = lessonsWithGame().filter(k => k !== n), src = ls.flatMap(k => MM.Q.allQs(k)).filter(q => q.type !== 'match');
    const due = MM.dueSkills(), mist = MM.S.mistakes.slice().sort((a, b) => b.n - a.n), used = new Set(), out = [];
    let mi = 0, di = 0;
    for (let i = 0; i < 12; i++) {
      let q = null;
      if (i % 3 === 2 && mi < mist.length) { const m = mist[mi++]; const c = src.filter(x => x.skill === m.skill && x.id !== m.qid && !used.has(x.id)); if (c.length) q = Object.assign({}, pick(c), { _review: true }); }
      if (!q && i % 3 === 1 && due.length) { for (let t = 0; t < due.length && !q; t++) { const sk = due[(di++) % due.length]; const c = src.filter(x => x.skill === sk && !used.has(x.id)); if (c.length) q = pick(c); } }
      if (!q) { const c = src.filter(x => !used.has(x.id)); q = pick(c); }
      used.add(q.id); out.push(q);
    }
    G.screen = 'run';
    runQueue($('#main'), n, {
      title: `ENDLESS NIGHT · ROUND ${round}`, items: out, tilesDefault: true, base: MM.perkCount('restock25') ? 100 + 25 * MM.perkCount('restock25') : undefined,
      sub: q => (q._review ? 'Returned mistake: same rule, different sentence. · ' : '') + `Lesson ${q.lesson} · ${skillName(q.skill)}`,
      onEnd: local => {
        roundSummary($('#main'), `ENDLESS NIGHT · ROUND ${round}`, local, `<button type="button" class="btn btn-go" id="enAgain">Another round ▸</button>`, 'Back to the counter');
        $('#enAgain').addEventListener('click', () => startEndless(n, round + 1));
      },
    });
  }
  const certDone = () => lessonsWithGame().every(k => MM.TB.status(k) === 'done' && MM.WB.status(k) === 'done' && ['A', 'B'].every(s => shiftDone(k, s)));
  function certificate(main, n) {
    const F = MM.game[n].finale, ls = lessonsWithGame(), base = ls.filter(k => k !== n);
    const cnt = f => ls.filter(f).length;
    const shifts = ls.reduce((a, k) => a + Object.keys(MM.game[k].shifts).filter(s => shiftDone(k, s)).length, 0), allShifts = ls.reduce((a, k) => a + Object.keys(MM.game[k].shifts).length, 0);
    const items = ls.flatMap(k => Object.values(MM.game[k].shifts).map(s => s.snack.id).concat((MM.reads[k] || []).map(r => r.reward.id)));
    const lessonOf = id => { const m = /^l(\d+)\./.exec(id); return m ? +m[1] : 0; };
    const groups = []; for (let a = 1; a <= Math.max(...base); a += 5) groups.push([a, Math.min(a + 4, Math.max(...base))]);
    const sk = Object.entries(MM.S.skills).filter(([id]) => allSkills()[id]);
    const accOf = (lo, hi) => { let c = 0, w = 0; sk.forEach(([id, s]) => { const l = lessonOf(id); if (l >= lo && l <= hi) { c += s.c; w += s.w; } }); return c + w ? Math.round(c / (c + w) * 100) : null; };
    const weak = sk.filter(([, s]) => s.c + s.w >= 3).map(([id, s]) => [id, s.c / (s.c + s.w)]).sort((a, b) => a[1] - b[1]).slice(0, 3);
    const complete = certDone(), allFixed = MM.upgrades.every(u => MM.S.fixed.includes(u.id));
    main.innerHTML = `<section class="round"><div class="rcpt summary cert ${complete ? 'is-complete' : ''}">
      <div class="rcpt-head"><span class="rcpt-mark">${esc(F.certTitle.toUpperCase())}</span><span>${complete ? 'COMPLETE' : 'IN PROGRESS'}</span></div>
      <p class="cert-name ko">${esc(F.rank)}</p><p class="cert-sub">${esc(F.rankEn)}</p>
      ${complete ? `<span class="cert-stamp ko" aria-label="${esc(F.stampEn)}">${esc(F.stampKo)}</span>` : ''}
      <div class="rcpt-rows">
        <p><span>Textbook / Review done</span><b>${cnt(k => MM.TB.status(k) === 'done')} / ${ls.length}</b></p>
        <p><span>Workbook / Exam done</span><b>${cnt(k => MM.WB.status(k) === 'done')} / ${ls.length}</b></p>
        <p><span>Shifts worked</span><b>${shifts} / ${allShifts}</b></p>
        <p><span>Store repairs</span><b>${MM.S.fixed.length} / ${MM.upgrades.length}${allFixed ? ' · all lit' : ''}</b></p>
        <p><span>Limited editions</span><b>${items.filter(id => MM.S.coll.includes(id)).length} / ${items.length}</b></p>
        <p><span>Days stamped · streak</span><b>${Object.values(MM.S.days).filter(d => d >= MM.DAILY_GOAL).length} · ${MM.streak()} d</b></p>
        <p class="total"><span>Earnings</span><b>${MM.U.won(MM.S.won)}</b></p>
      </div>
      <p class="cert-h">Accuracy by lessons</p>
      <div class="rcpt-rows">${groups.map(([a, b]) => { const v = accOf(a, b); return `<p><span>L${a}–${b}</span><b>${v == null ? '—' : v + '%'}</b></p>`; }).join('')}</div>
      <p class="cert-h">Your three weakest skills</p>
      <div class="rcpt-rows">${weak.length ? weak.map(([id, a]) => `<p><span>L${lessonOf(id)} · ${esc(skillName(id))}</span><b>${Math.round(a * 100)}%</b></p>`).join('') : '<p><span>Not enough answers yet.</span><b></b></p>'}</div>
      <div class="cert-letter">${F.letter.map(l => `<p class="ko">${esc(l[0])}</p><p class="cert-en">${esc(l[1])}</p>`).join('')}<p class="cert-sig ko">${esc(F.sig)}</p></div>
      <div class="barcode" aria-hidden="true"></div></div>
      ${weak.length ? `<p class="sec-help">Practise the weak ones in Endless Night or Dawn Restock: they come back first.</p>` : ''}
      <button type="button" class="btn btn-go" id="certBack">Back to the counter ▸</button></section>`;
    MM.ui.barcodes(main);
    $('#certBack').addEventListener('click', () => { G.screen = 'home'; MM.app.render(); MM.app.toTop(); });
  }

  /* ---------- Shelf Stocking ---------- */
  function startShelf(n) {
    const list = MM.Q.vocabList(n);
    let q = (MM.S.vq[n] || []).filter(ko => list.some(v => v.ko === ko));
    const take = [];
    while (take.length < 10) {
      if (!q.length) q = shuffle(list.map(v => v.ko)).filter(ko => !take.includes(ko));
      if (!q.length) break;
      take.push(q.shift());
    }
    MM.S.vq[n] = q; MM.save();
    const items = take.map(ko => MM.Q.genVocab(n, list.find(v => v.ko === ko), Math.random() < 0.5 ? 'en' : 'ko'));
    G.screen = 'run';
    runQueue($('#main'), n, { title: 'SHELF STOCKING', items, base: 50 + 25 * MM.perkCount('shelf50'), sub: 'Put each item on the right shelf.', onEnd: local => roundSummary($('#main'), 'SHELF STOCKING', local) });
  }

  /* ---------- Mnemo Hooks (replaced the Loyalty Cards on 2026-11-15): src/mnemo.js ---------- */
  function cards(main, n) { return MM.MN.screen(main, n); }

  /* ---------- group chat & notice board ---------- */
  function richKo(s, gloss) {
    return esc(s).replace(/\{([^|}]+)\|([^}]+)\}/g, (m, form, lemma) => `<button type="button" class="gl" data-g="${esc(gloss[lemma] ? lemma : form)}">${form}</button>`);
  }
  function reader(main, n, id) {
    const R = (MM.reads[n] || []).find(r => r.id === id); if (!R) { G.screen = 'home'; return MM.app.render(); }
    const L = MM.LS(n).game;
    let shown = R.lines.length, stage = L.reads[id] ? 'done' : 'read';
    /* clips in reading order: heading (board), then every shown line; el = the element to highlight */
    const clips = () => {
      const chat = R.kind === 'chat', out = [];
      const add = (c, el) => { if (c) out.push({ src: `audio/voice/l${c[0]}.mp3`, from: c[1], to: c[2], el }); };
      if (R.heading) add(clipOf('board', R.heading), () => $('.board-h'));
      R.lines.slice(0, shown).forEach((l, k) => add(clipOf(chat ? l.who : 'board', l.ko, [n, 'chat']), () => $$('.rlines .rline')[k]));
      return out;
    };
    const draw = () => {
      stopSeq();
      if (stage === 'qs') return quiz();
      const chat = R.kind === 'chat';
      main.innerHTML = `<section class="reader ${chat ? 'chat' : 'board'}">
        <p class="eyebrow">${esc(R.title)}</p><h1 class="reader-t ko">${esc(R.titleKo)}</h1>
        ${clips().length ? `<button type="button" class="trk r-all" id="rAll"><span class="trk-ic">▶</span> Listen to the whole ${chat ? 'chat' : 'notice'}</button>` : ''}
        ${R.heading ? `<h2 class="board-h ko">${richKo(R.heading, R.gloss)}</h2>` : ''}
        <div class="rlines">${R.lines.slice(0, shown).map((l, k) => {
          const c = l.who ? MM.cast[l.who] : null;
          return `<div class="rline ${l.who === 'boss' ? 'from-boss' : ''}">${c ? `<span class="who ko">${esc(c.ko)}</span>` : ''}<p class="ko">${richKo(l.ko, R.gloss)}</p>${stage === 'done' ? `<p class="en">${esc(l.en)}</p>` : ''}</div>`;
        }).join('')}</div>
        ${stage === 'read' ? (shown < R.lines.length ? `<button type="button" class="btn btn-go" id="rNext">Next line ▸</button>` : `<button type="button" class="btn btn-go" id="rQs">Answer 3 questions ▸</button>`) : ''}
        ${stage === 'done' ? `<div class="snack"><div class="snack-box"><span class="prod-ltd">LIMITED</span><span class="ko snack-ko">${esc(R.reward.ko)}</span><span class="snack-en">${esc(R.reward.en)}</span></div><p class="snack-desc">${esc(R.reward.desc)}</p></div>
          <button type="button" class="btn btn-ghost" id="rAgain">Read it again without translation</button><button type="button" class="btn btn-go" id="rBack">Back to the counter ▸</button>` : ''}
        <p class="muted small">Underlined words are outside this lesson: tap one to see what it means.</p></section>`;
      /* gloss bubble: shown right under the tapped word; tap the word again or anywhere else to close */
      const sec = main.firstElementChild;
      sec.addEventListener('click', e => {
        const g = e.target.closest('.gl'), old = sec.querySelector('.gl-pop'), was = old && old._for;
        if (old) { old.remove(); was.classList.remove('gl-on'); }
        if (!g || g === was) return;
        const pop = document.createElement('span'); pop._for = g; pop.className = 'gl-pop'; pop.setAttribute('role', 'status');
        pop.innerHTML = `${g.dataset.g !== g.textContent ? `<span class="ko gl-lemma">${esc(g.dataset.g)}</span> ` : ''}${esc(R.gloss[g.dataset.g] || '')}`;
        sec.appendChild(pop); g.classList.add('gl-on');
        const sr = sec.getBoundingClientRect(), wr = g.getBoundingClientRect(), pw = pop.offsetWidth;
        const cx = wr.left + wr.width / 2 - sr.left, left = Math.max(0, Math.min(sr.width - pw, cx - pw / 2));
        pop.style.left = left + 'px'; pop.style.top = (wr.bottom - sr.top + 8) + 'px';
        pop.style.setProperty('--ax', Math.max(10, Math.min(pw - 10, cx - left)) + 'px');
      });
      const ra = $('#rAll'); if (ra) ra.addEventListener('click', () => playSeq(clips().map(x => Object.assign({}, x, { el: x.el() })), ra));
      const nx = $('#rNext'); if (nx) nx.addEventListener('click', () => { shown++; draw(); });
      const qs = $('#rQs'); if (qs) qs.addEventListener('click', () => { stage = 'qs'; draw(); });
      const ag = $('#rAgain'); if (ag) ag.addEventListener('click', () => { stage = 'read'; draw(); MM.app.toTop(); });
      const bk = $('#rBack'); if (bk) bk.addEventListener('click', () => { G.screen = 'home'; MM.app.render(); MM.app.toTop(); });
    };
    const quiz = () => {
      runQueue(main, n, {
        title: R.title.toUpperCase(), items: R.qs.map(q => Object.assign({ en: '' }, q)), sub: 'About the text you just read.', base: MM.perkCount('read50') ? 100 + 50 * MM.perkCount('read50') : undefined,
        onEnd: local => {
          G.inRound = false; MM.ui.setBack(false); MM.tallyFlush();
          L.reads[id] = true; if (!MM.S.coll.includes(R.reward.id)) MM.S.coll.push(R.reward.id); MM.save();
          stage = 'done'; shown = R.lines.length; draw(); MM.app.toTop(); MM.ui.toast(`${local.ok} / ${local.total} correct`);
        },
      });
    };
    draw();
  }

  /* ---------- floor plan ---------- */
  function mapSvg(highlight) {
    const maxL = Math.max(...lessonsWithGame());
    const items = MM.upgrades.map(u => {
      const st = MM.S.fixed.includes(u.id) ? 'fixed' : u.lesson <= maxL ? 'broken' : 'locked';
      return `<g class="up up-${st} ${highlight === u.id ? 'hl' : ''}" data-up="${u.id}" tabindex="0" role="button" aria-label="${esc(u.en)}: ${st}">
        <rect x="${u.x}" y="${u.y}" width="${u.w}" height="${u.h}" rx="3"/>
        <text x="${u.x + u.w / 2}" y="${u.y + u.h / 2 + 3}" text-anchor="middle">${st === 'locked' ? 'L' + u.lesson : st === 'fixed' ? '✓' : '!'}</text></g>`;
    }).join('');
    /* L18: the stockroom (y 282–388) below the shop holds the repairs from Lesson 18 on: rows at y 300 / 322 / 344 / 366 (4th row from L28), columns every 28 px from x 22 */
    const lit = MM.upgrades.every(u => MM.S.fixed.includes(u.id));
    return `<svg class="floor ${lit ? 'all-lit' : ''}" viewBox="0 0 360 394" role="img" aria-label="Store floor plan">
      <rect class="fl-wall" x="10" y="30" width="340" height="226" rx="6"/>
      <rect class="fl-wall fl-back" x="10" y="282" width="340" height="106" rx="6"/><text class="fl-lbl" x="16" y="294">stockroom (back)</text>
      <rect class="fl-shelf" x="70" y="80" width="200" height="14" rx="2"/><rect class="fl-shelf" x="70" y="140" width="200" height="14" rx="2"/>
      <rect class="fl-shelf ramen" x="70" y="80" width="56" height="14" rx="2"/>
      <circle class="fl-cat" cx="92" cy="87" r="6"/><text class="fl-lbl" x="98" y="76">ramen shelf · cat</text>
      <rect class="fl-counter" x="230" y="190" width="64" height="40" rx="3"/><text class="fl-lbl" x="234" y="244">counter</text>
      <rect class="fl-door" x="160" y="250" width="34" height="8"/><text class="fl-lbl" x="164" y="268">door</text>
      ${items}</svg>
      <ul class="legend"><li><span class="lg lg-broken"></span>needs fixing</li><li><span class="lg lg-fixed"></span>fixed</li><li><span class="lg lg-locked"></span>later lesson</li></ul>`;
  }
  function mapScreen(main, n) {
    const allFixed = MM.upgrades.every(u => MM.S.fixed.includes(u.id));
    main.innerHTML = `<section class="round"><p class="eyebrow">Store repairs</p><h1 class="phase-t">Floor plan</h1><p class="phase-d">Red things are broken. Repair one with 4 questions (3 correct fixes it) and its bonus stays for good.</p>
      ${allFixed ? `<aside class="sticky-note boss">Every single thing in the store works. The sign is lit, the fridge hums, Ramyeon's cushion is fluffed. — Mr. Park</aside>` : ''}
      ${mapSvg()}<div id="upInfo" class="up-info">Tap something in the store.</div>
      <button type="button" class="btn btn-ghost" id="mapBack">Back to the counter</button></section>`;
    $('#mapBack').addEventListener('click', () => { G.screen = 'home'; MM.app.render(); });
    const info = $('#upInfo');
    const show = id => {
      const u = MM.upgrades.find(x => x.id === id), fixed = MM.S.fixed.includes(id), avail = MM.game[u.lesson];
      const shiftKey = avail ? Object.keys(MM.game[u.lesson].shifts).find(k => MM.game[u.lesson].shifts[k].fix === id) : null;
      info.innerHTML = `<b>${esc(u.en)}</b> · ${fixed ? 'fixed' : avail ? 'needs fixing' : 'unlocks in Lesson ' + u.lesson}<br><span class="muted">${esc(fixed || avail ? 'Bonus: ' + u.perk : 'Coming later.')}</span>
        ${!fixed && avail ? `<br><button type="button" class="btn btn-sm" id="doFix">Repair now (4 questions)</button>` : ''}`;
      const b = $('#doFix'); if (b) b.addEventListener('click', () => {
        run = { n: u.lesson, key: shiftKey, sh: MM.game[u.lesson].shifts[shiftKey], ok: 0, total: 0, earned: 0, tally: {}, extra: [], added: 2, used: new Set() };
        G.screen = 'run'; runFix(true);
      });
    };
    $$('.floor .up', main).forEach(g => { g.addEventListener('click', () => show(g.dataset.up)); g.addEventListener('keydown', e => { if (e.key === 'Enter') show(g.dataset.up); }); });
  }

  /* ---------- router ---------- */
  function render(main, n) {
    if (G.screen === 'run' && !G.inRound) G.screen = 'home';
    if (G.screen === 'run') return; // a round is drawing itself
    MM.ui.setBack(false);
    if (G.screen === 'cards') { G.inRound = false; return cards(main, n); }
    if (G.screen === 'map') return mapScreen(main, n);
    if (G.screen === 'cert') return certificate(main, n);
    if (G.screen.startsWith('read:')) return reader(main, n, G.screen.slice(5));
    home(main, n);
  }
  G.clipOf = clipOf; G.vicon = vicon; G.withIcon = withIcon;
  return G;
})();
