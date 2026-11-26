/* app.js — shell: header, lesson tabs, audio manager, shared UI helpers, boot. */
'use strict';
(function () {
  const { esc, $, $$ } = MM.U;

  /* ---------- audio: only one thing plays at a time ---------- */
  const players = new Set();
  MM.AM = {
    make() { const a = new Audio(); a.preload = 'none'; players.add(a); a.addEventListener('play', () => players.forEach(p => { if (p !== a && !p.paused) p.pause(); })); return a; },
    /* voice speed for every clip (words, sentences, dialogue lines, Mnemo Hooks, dictation): one setting per device in
       localStorage (not in MM.S, so it is not synced); multiplies the clip's own rate (dictation 0.75× stays slower). The
       long lesson recording keeps its own 0.75 / 1 / 1.25 buttons. Pitch stays. */
    RATES: [1, 0.9, 0.8, 0.7],
    rate: (() => { try { const r = +localStorage.getItem('moonlight-mart-voice-rate'); return [1, 0.9, 0.8, 0.7].includes(r) ? r : 1; } catch (e) { return 1; } })(),
    setRate(r) { MM.AM.rate = r; try { localStorage.setItem('moonlight-mart-voice-rate', String(r)); } catch (e) { } },
    lesson: null, track: null, trackSrc: null, trackBtn: null,
    clipEnd: null, trackKey: null,
    /* play a track, or only the clip [from, to] of it (seconds) */
    playTrack(src, btn, rate = 1, from = null, to = null) {
      const a = MM.AM.track, key = src + '#' + (from ?? '') + '-' + (to ?? '');
      if (MM.AM.trackKey === key && !a.paused) { a.pause(); return; }
      const start = () => {
        if (from != null) a.currentTime = from;
        else if (MM.AM.trackKey !== key || a.ended) a.currentTime = 0;
        MM.AM.clipEnd = to; MM.AM.trackKey = key; MM.AM.trackBtn = btn;
        try { a.preservesPitch = a.webkitPreservesPitch = true; } catch (e) { }
        a.defaultPlaybackRate = a.playbackRate = rate * MM.AM.rate;
        a.play().catch(err => { if (err && err.name === 'AbortError') return; /* interrupted by pause / another clip: not an error */ MM.ui.toast('Audio could not play: ' + (err && err.name || 'error')); });
      };
      if (MM.AM.trackSrc !== src) {
        a.src = src; MM.AM.trackSrc = src; a.preload = 'auto';
        if (from != null) { a.addEventListener('loadedmetadata', start, { once: true }); a.load(); return; }
      }
      start();
    },
  };
  MM.AM.lesson = MM.AM.make(); MM.AM.track = MM.AM.make();
  // stop exactly at the clip end (timeupdate alone can overshoot by ~0.25 s)
  MM.AM.track.addEventListener('play', () => {
    const a = MM.AM.track;
    const tick = () => { if (a.paused || MM.AM.clipEnd == null) return; if (a.currentTime >= MM.AM.clipEnd) { a.pause(); return; } requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  });
  // backup for when animation frames are paused (screen off, app in the background): timeupdate still fires
  MM.AM.track.addEventListener('timeupdate', () => { const a = MM.AM.track; if (!a.paused && MM.AM.clipEnd != null && a.currentTime >= MM.AM.clipEnd) a.pause(); });
  MM.AM.keyOf = b => b.dataset.trk + '#' + (b.dataset.from ?? '') + '-' + (b.dataset.to ?? '');
  ['play', 'pause', 'ended'].forEach(ev => MM.AM.track.addEventListener(ev, () => {
    $$('[data-trk]').forEach(b => b.classList.toggle('playing', !MM.AM.track.paused && MM.AM.keyOf(b) === MM.AM.trackKey));
  }));

  /* ---------- small shared UI ---------- */
  let actx = null;
  MM.ui = {
    toast(msg) {
      let t = $('#toast'); if (!t) { t = document.createElement('div'); t.id = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
      t.textContent = msg; t.classList.add('on'); clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('on'), 2600);
    },
    refreshWon() {
      const w = $('#won'); if (w) w.textContent = MM.U.won(MM.S.won);
      const st = $('#streak'); if (!st) return;
      const n = MM.streak(), t = Math.min(MM.S.days[MM.U.today()] || 0, MM.DAILY_GOAL), done = t >= MM.DAILY_GOAL;
      st.title = `Streak: ${n} day(s) in a row. Today: ${t} of ${MM.DAILY_GOAL} answers or Mnemo Hooks cards` + (done ? ' (day stamped).' : '.');
      st.setAttribute('aria-label', st.title);
      st.innerHTML = `<span class="stk-stamp ${n ? '' : 'zero'}"><span class="stk-ko">${MM.U.esc(MM.world.stampKo)}</span><span class="stk-n">${n}</span></span><span class="stk-day ${done ? 'done' : ''}">${done ? '✓' : t + '/' + MM.DAILY_GOAL}</span>`;
    },
    barcodes(root) {
      $$('.barcode', root).forEach(b => {
        if (b.dataset.done) return; b.dataset.done = 1;
        let x = 0, r = ''; let seed = (Date.now() % 997) + 7;
        while (x < 180) { seed = (seed * 9301 + 49297) % 233280; const w = 1 + (seed % 3); r += `<rect x="${x}" y="0" width="${w}" height="26"/>`; x += w + 1 + ((seed >> 3) % 3); }
        b.innerHTML = `<svg viewBox="0 0 180 26" preserveAspectRatio="none" width="100%" height="26">${r}</svg>`;
      });
    },
    sound(ok) {
      try {
        actx = actx || new (window.AudioContext || window.webkitAudioContext)();
        const o = actx.createOscillator(), g = actx.createGain();
        o.type = ok ? 'square' : 'sawtooth'; o.frequency.value = ok ? 1760 : 160;
        g.gain.setValueAtTime(0.0001, actx.currentTime);
        g.gain.exponentialRampToValueAtTime(ok ? 0.05 : 0.06, actx.currentTime + 0.01);
        g.gain.exponentialRampToValueAtTime(0.0001, actx.currentTime + (ok ? 0.12 : 0.3));
        o.connect(g).connect(actx.destination); o.start(); o.stop(actx.currentTime + 0.32);
      } catch (e) { }
    },
    tagStatus(st) { return `<span class="st st-${st}" aria-label="${st === 'done' ? 'done' : st === 'wip' ? 'in progress' : 'not started'}"></span>`; },
  };

  /* ---------- tally for spaced repetition (flushed when a part/round ends) ---------- */
  MM.tally = {};
  MM.tallyAdd = (skill, ok) => { if (!skill) return; const t = MM.tally[skill] = MM.tally[skill] || { c: 0, w: 0 }; ok ? t.c++ : t.w++; };
  MM.tallyFlush = () => { if (Object.keys(MM.tally).length) { MM.srsUpdate(MM.tally); MM.tally = {}; } };

  /* ---------- header, clock, theme ---------- */
  function header() {
    const h = $('#hdr');
    h.innerHTML = `<div class="hdr-in">
      <button type="button" class="hdr-back" id="hdrBack" hidden>◂ Counter</button>
      <div class="sign" aria-label="${esc(MM.world.signEn)}"><span class="sign-ko">${esc(MM.world.signKo)}</span><span class="sign-date ko" id="hdrDate"></span></div>
      <div class="hdr-right">
        <span class="streak" id="streak"></span>
        <span class="won tag-price" id="won" title="Your earnings">${MM.U.won(MM.S.won)}</span>
        <button type="button" class="theme-btn" id="themeBtn" aria-label="Switch light/dark">◐</button>
      </div></div>`;
    /* date under the sign: short form; a tap (not advertised) shows the full date in words; updates itself after midnight */
    const dt = $('#hdrDate');
    MM.ui.refreshDate = (d = new Date()) => {
      const k = MM.koDate(d); dt.dataset.day = MM.U.today(d); dt.dataset.full = k.full; dt.textContent = k.short;
      const pop = $('#hdrDatePop'); if (pop) pop.textContent = k.full;
    };
    MM.ui.refreshDate();
    /* a new day: the date AND today's x/10 + streak in the header */
    const newDay = () => { if (dt.dataset.day !== MM.U.today()) { MM.ui.refreshDate(); MM.ui.refreshWon(); } };
    setInterval(newDay, 30000);
    document.addEventListener('visibilitychange', () => { if (!document.hidden) newDay(); });
    document.addEventListener('click', e => {
      const pop = $('#hdrDatePop'), onDate = e.target.closest('#hdrDate');
      if (pop) { pop.remove(); if (onDate) return; }
      if (!onDate) return;
      const p = document.createElement('span'); p.id = 'hdrDatePop'; p.className = 'date-pop ko'; p.setAttribute('role', 'status');
      p.textContent = dt.dataset.full; $('.sign').appendChild(p);
    });
    $('#themeBtn').addEventListener('click', () => {
      const cur = document.documentElement.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      MM.S.theme = cur === 'dark' ? 'light' : 'dark'; applyTheme(); MM.save();
    });
    let armed = false;
    $('#hdrBack').addEventListener('click', e => {
      const b = e.currentTarget;
      /* Mnemo Hooks saves every rated card at once, so leaving needs no confirmation there */
      if (!armed && MM.G.screen !== 'cards') { armed = true; b.textContent = 'Leave this round?'; b.classList.add('armed'); setTimeout(() => { armed = false; b.textContent = '◂ Counter'; b.classList.remove('armed'); }, 3000); return; }
      armed = false; b.textContent = '◂ Counter'; b.classList.remove('armed');
      MM.G.leave();
    });
  }
  function applyTheme() {
    if (MM.S.theme) document.documentElement.dataset.theme = MM.S.theme; else delete document.documentElement.dataset.theme;
  }
  MM.ui.applyTheme = applyTheme;
  MM.ui.setBack = (on) => { const b = $('#hdrBack'); if (b) b.hidden = !on; document.body.classList.toggle('in-round', !!on); };

  /* ---------- lesson bar + tabs ---------- */
  function status(n, tab) {
    const L = MM.LS(n);
    if (tab === 'tb') return MM.TB.status(n);
    if (tab === 'wb') return MM.WB.status(n);
    const sh = L.game.shifts;
    return sh.A && sh.A.done && sh.B && sh.B.done ? 'done' : (Object.keys(sh).length ? 'wip' : 'none');
  }
  MM.app = {
    render() {
      const n = MM.S.cur.lesson, tab = MM.S.cur.tab, L = MM.lessons[n];
      const bar = $('#lbar'), tail = $('#ltail');
      const lessons = Object.values(MM.lessons).sort((a, b) => a.n - b.n);
      const open = !MM.S.cur.closed;
      /* lessons as an accordion: the open lesson shows its tabs, the page content follows,
         and the lessons after it are listed below the content (#ltail). */
      const row = l => {
        const on = open && l.n === n;
        const dots = ['tb', 'wb', 'game'].map(k => MM.ui.tagStatus(status(l.n, k))).join('');
        return `<button type="button" class="lrow ${on ? 'on' : ''}" data-ln="${l.n}" aria-expanded="${on}">
          <span class="lrow-n">${l.review ? '★' : 'L' + l.n}</span><span class="lrow-t"><span class="ko lrow-ko">${esc(l.ko)}</span><span class="lrow-en">${esc(l.en)}</span></span>
          <span class="lrow-st" aria-hidden="true">${dots}</span><span class="lrow-chev" aria-hidden="true">${on ? '▾' : '▸'}</span></button>`;
      };
      const before = lessons.filter(l => !open || l.n <= n), after = open ? lessons.filter(l => l.n > n) : [];
      bar.innerHTML = `<p class="eyebrow lhead">Lessons</p><div class="lacc">${before.map(row).join('')}</div>` + (open ? `
        <nav class="tabs" role="tablist" aria-label="Lesson ${n}">
          ${[['tb', 'Textbook'], ['wb', 'Workbook'], ['game', 'Moonlight Mart']].map(([k, t], i) => [k, (L.tabs || [])[i] || t]).map(([k, t]) =>
            `<button type="button" role="tab" class="tab ${tab === k ? 'on' : ''}" data-tab="${k}" aria-selected="${tab === k}">${MM.ui.tagStatus(status(n, k))}${t}</button>`).join('')}
        </nav>` : '');
      tail.innerHTML = after.length ? `<div class="lacc">${after.map(row).join('')}</div>` : '';
      MM.G.renderExtras($('#xtail'));
      [bar, tail].forEach(el => $$('.lrow', el).forEach(b => b.addEventListener('click', () => {
        const ln = +b.dataset.ln;
        if (open && ln === n) MM.S.cur.closed = true;
        else { if (MM.G.inRound) MM.G.abort(); MM.G.screen = 'home'; MM.S.cur.lesson = ln; MM.S.cur.closed = false; }
        MM.tallyFlush(); MM.save(); MM.app.render();
        const r = document.querySelector(`.lrow[data-ln="${ln}"]`); if (r) r.scrollIntoView({ block: 'start' });
      })));
      $$('.tab', bar).forEach(b => b.addEventListener('click', () => MM.app.go(b.dataset.tab)));
      $('#main').hidden = !open;
      if (!open) { MM.kbd.hide(); MM.ui.refreshWon(); return; }
      const main = $('#main');
      MM.kbd.hide();
      if (tab === 'tb') MM.TB.render(main, n);
      else if (tab === 'wb') MM.WB.render(main, n);
      else MM.G.render(main, n);
      MM.kbd.applyMode();
      MM.ui.refreshWon();
    },
    go(tab, opts = {}) {
      MM.tallyFlush();
      if (MM.G.inRound && tab !== 'game') MM.G.abort();
      MM.S.cur.tab = tab; MM.S.cur.closed = false; MM.save();
      if (tab === 'game' && opts.screen) MM.G.screen = opts.screen;
      MM.app.render();
      MM.app.toTop();
    },
    /* scroll to the open lesson's row (its tabs follow), not to the page top: above it are all the earlier lessons
       (in ★ L31 that is 30 rows). During a round the lesson bar is hidden, so the page top is right. */
    /* an activity opened from the counter (cards, reading, floor plan, certificate): its first line right under the header */
    toMain() {
      const m = $('#main'), h = $('#hdr'); if (!m) return;
      window.scrollTo(0, Math.max(0, m.getBoundingClientRect().top + window.scrollY - (h ? h.offsetHeight : 0) - 8));
    },
    toTop() {
      const r = document.body.classList.contains('in-round') ? null : document.querySelector('#lbar .lrow.on');
      if (r) r.scrollIntoView({ block: 'start' }); else window.scrollTo(0, 0);
    },
    refreshTabs() {
      const n = MM.S.cur.lesson;
      $$('.tab').forEach(b => { const s = b.querySelector('.st'); if (s) s.outerHTML = MM.ui.tagStatus(status(n, b.dataset.tab)); });
      $$(`.lrow[data-ln="${n}"] .lrow-st`).forEach(el => { el.innerHTML = ['tb', 'wb', 'game'].map(k => MM.ui.tagStatus(status(n, k))).join(''); });
    },
  };

  /* ---------- boot ---------- */
  function boot() {
    if (!document.documentElement.lang) document.documentElement.lang = 'en';   // the UI is English; Korean text is marked by .ko
    MM.loadLocal();
    if (!MM.lessons[MM.S.cur.lesson]) MM.S.cur.lesson = 1;
    applyTheme();
    header();
    MM.app.render();
    if (MM.sync) MM.sync.boot();
    MM.connectDb(() => { applyTheme(); MM.app.render(); MM.ui.toast('Progress loaded from your account.'); });
    window.addEventListener('pagehide', () => { MM.tallyFlush(); if (MM.savePending()) MM.saveNow(); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
