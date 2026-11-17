/* keyboard.js — on-screen 2-beolsik Korean keyboard with syllable composition.
   Any <input class="kin"> or <textarea class="kin"> gets it. Backspace removes one jamo
   while a syllable is being composed. "System keyboard" switches the fields back to the
   device's own keyboard (S.kbd = 'system'). */
'use strict';
(function () {
  const { L, V, T } = MM.HG;
  const CV = { 'ㅗㅏ': 'ㅘ', 'ㅗㅐ': 'ㅙ', 'ㅗㅣ': 'ㅚ', 'ㅜㅓ': 'ㅝ', 'ㅜㅔ': 'ㅞ', 'ㅜㅣ': 'ㅟ', 'ㅡㅣ': 'ㅢ' };
  const CT = { 'ㄱㅅ': 'ㄳ', 'ㄴㅈ': 'ㄵ', 'ㄴㅎ': 'ㄶ', 'ㄹㄱ': 'ㄺ', 'ㄹㅁ': 'ㄻ', 'ㄹㅂ': 'ㄼ', 'ㄹㅅ': 'ㄽ', 'ㄹㅌ': 'ㄾ', 'ㄹㅍ': 'ㄿ', 'ㄹㅎ': 'ㅀ', 'ㅂㅅ': 'ㅄ' };
  const isV = j => V.includes(j);
  const syl = (l, v, t) => String.fromCharCode(0xAC00 + (L.indexOf(l) * 21 + V.indexOf(v)) * 28 + T.indexOf(t || ''));

  /* compose a keystroke sequence into text */
  function compose(keys) {
    let out = '', l = null, v = null, v1 = null, t1 = null, t2 = null;
    const flush = () => {
      if (l && v) out += syl(l, v, t2 ? CT[t1 + t2] : t1);
      else if (l) out += l;
      else if (v) out += v;
      l = v = v1 = t1 = t2 = null;
    };
    for (const k of keys) {
      if (isV(k)) {
        if (l && !v) { v = k; v1 = k; }
        else if (v && !t1 && CV[v1 + k] && v === v1) { v = CV[v1 + k]; }
        else if (t1) {
          // final consonant jumps to the next syllable
          let move;
          if (t2) { move = t2; t2 = null; } else { move = t1; t1 = null; }
          flush(); l = move; v = k; v1 = k;
        } else { flush(); v = k; v1 = k; }
      } else {
        if (l && v && !t1 && T.includes(k)) t1 = k;
        else if (l && v && t1 && !t2 && CT[t1 + k]) t2 = k;
        else { flush(); l = k; }
      }
    }
    flush();
    return out;
  }
  MM.compose = compose;

  const ROWS = [
    ['ㅂ', 'ㅈ', 'ㄷ', 'ㄱ', 'ㅅ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅐ', 'ㅔ'],
    ['ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ', 'ㅗ', 'ㅓ', 'ㅏ', 'ㅣ'],
    ['⇧', 'ㅋ', 'ㅌ', 'ㅊ', 'ㅍ', 'ㅠ', 'ㅜ', 'ㅡ', '⌫'],
  ];
  const SHIFT = { 'ㅂ': 'ㅃ', 'ㅈ': 'ㅉ', 'ㄷ': 'ㄸ', 'ㄱ': 'ㄲ', 'ㅅ': 'ㅆ', 'ㅐ': 'ㅒ', 'ㅔ': 'ㅖ' };

  /* the text is split at the caret: base (before, committed) + compose(buf) (the syllable being typed) + tail (after the caret) */
  let panel, target = null, base = '', tail = '', buf = [], lastSet = null, lastCaret = null, shift = false;

  function build() {
    panel = document.createElement('div');
    panel.className = 'kbd'; panel.hidden = true; panel.setAttribute('aria-label', 'Korean keyboard');
    panel.innerHTML = `<div class="kbd-top"><span class="kbd-title">한글 · 2-set</span>
      <button type="button" class="kbd-sys" data-k="sys">Use system keyboard</button>
      <button type="button" class="kbd-hide" data-k="hide" aria-label="Hide keyboard">▾</button></div>` +
      ROWS.map(r => `<div class="kbd-row">${r.map(k => `<button type="button" class="key${k === '⇧' || k === '⌫' ? ' key-fn' : ''}" data-k="${k}">${k}</button>`).join('')}</div>`).join('') +
      `<div class="kbd-row"><button type="button" class="key key-fn" data-k=",">,</button><button type="button" class="key key-fn" data-k="?">?</button>
       <button type="button" class="key key-space" data-k=" ">space</button><button type="button" class="key key-fn" data-k=".">.</button>
       <button type="button" class="key key-enter" data-k="enter">check ↵</button></div>`;
    document.body.appendChild(panel);
    /* keys fire on pointerdown: no waiting for the click (which iOS can drop or delay when the
       finger moves a little, or when the next key is touched before the previous one is released).
       Holding ⌫ repeats. Keyboard-only users still get click (pointerType '' / detail 0). */
    let repeat = null, lastDown = 0;
    const stopRepeat = () => { clearTimeout(repeat); clearInterval(repeat); repeat = null; };
    panel.addEventListener('pointerdown', e => {
      const b = e.target.closest('button'); if (!b) return;
      e.preventDefault(); lastDown = Date.now();
      b.classList.add('down'); setTimeout(() => b.classList.remove('down'), 120);
      press(b.dataset.k);
      if (b.dataset.k === '⌫') { stopRepeat(); repeat = setTimeout(() => { repeat = setInterval(() => press('⌫'), 70); }, 420); }
    });
    ['pointerup', 'pointercancel', 'pointerleave'].forEach(ev => panel.addEventListener(ev, stopRepeat));
    panel.addEventListener('click', e => { const b = e.target.closest('button'); if (b && Date.now() - lastDown > 600) press(b.dataset.k); });
  }
  function relabel() {
    U.$$('.key', panel).forEach(b => { const k = b.dataset.k; if (SHIFT[k] || Object.values(SHIFT).includes(k)) { const base0 = Object.keys(SHIFT).find(x => SHIFT[x] === k) || k; b.dataset.k = shift ? SHIFT[base0] : base0; b.textContent = b.dataset.k; } });
    const s = U.$('[data-k="⇧"]', panel); if (s) s.classList.toggle('on', shift);
  }
  function setVal(mid) {
    const v = mid + tail; target.value = v; lastSet = v; lastCaret = mid.length;
    try { target.setSelectionRange(mid.length, mid.length); } catch (e) { }
    target.dispatchEvent(new Event('input', { bubbles: true }));
  }
  /* the field changed outside this keyboard (paste, system keyboard) or the caret was moved: start again at the caret */
  function fromCaret() {
    const v = target.value, a = target.selectionStart ?? v.length, b = target.selectionEnd ?? a;
    base = v.slice(0, a); tail = v.slice(b); buf = []; lastSet = v; lastCaret = a;
  }
  function syncBase() { if (target.value !== lastSet || (target.selectionStart != null && target.selectionStart !== lastCaret)) fromCaret(); }
  function press(k) {
    if (k === 'hide') { hide(); return; }
    if (k === 'sys') { const t = target; MM.S.kbd = 'system'; MM.save(); applyMode(); hide(); if (t) { t.blur(); setTimeout(() => t.focus(), 0); } return; }
    if (!target) return;
    syncBase();
    if (k === '⇧') { shift = !shift; relabel(); return; }
    if (k === 'enter') { base += compose(buf); buf = []; target.dispatchEvent(new CustomEvent('kb-enter', { bubbles: true })); return; }
    if (k === '⌫') {
      if (buf.length) { buf.pop(); setVal(base + compose(buf)); }
      else { base = Array.from(base).slice(0, -1).join(''); setVal(base); }
      return;
    }
    if (k === ' ' || k === '.' || k === ',' || k === '?') { base = base + compose(buf) + k; buf = []; setVal(base); return; }
    buf.push(k);
    let text = compose(buf);
    // keep only the syllable still being composed in the buffer
    const chars = Array.from(text);
    if (chars.length > 1) {
      // re-derive buffer for the last syllable by trial: drop leading keys until compose gives one char
      let i = 0; while (i < buf.length && Array.from(compose(buf.slice(i))).length > 1) i++;
      const committed = compose(buf.slice(0, i));
      if (committed + compose(buf.slice(i)) === text) { base += committed; buf = buf.slice(i); }
    }
    setVal(base + compose(buf));
    if (shift) { shift = false; relabel(); }
  }
  function show(el) {
    if (MM.S.kbd === 'system') return;
    target = el; fromCaret();
    panel.hidden = false; document.body.classList.add('kbd-open');
    setTimeout(() => { const r = el.getBoundingClientRect(); const kh = panel.offsetHeight; if (r.bottom > window.innerHeight - kh - 12) window.scrollBy({ top: r.bottom - (window.innerHeight - kh - 24), behavior: 'smooth' }); }, 30);
  }
  function hide() { panel.hidden = true; document.body.classList.remove('kbd-open'); target = null; }
  function applyMode() {
    U.$$('input.kin, textarea.kin').forEach(el => el.setAttribute('inputmode', MM.S.kbd === 'system' ? 'text' : 'none'));
  }
  MM.kbd = {
    applyMode,
    useScreen() { MM.S.kbd = 'screen'; MM.save(); applyMode(); },
    hide,
  };
  document.addEventListener('focusin', e => {
    const el = e.target;
    if (el.matches && el.matches('input.kin, textarea.kin')) show(el);
  });
  document.addEventListener('pointerdown', e => {
    if (!panel || panel.hidden) return;
    if (e.target.closest('.kbd') || e.target.closest('input.kin, textarea.kin')) return;
    // hide after the click has landed, so the layout does not jump under the finger
    setTimeout(() => { const a = document.activeElement; if (!(a && a.matches && a.matches('input.kin, textarea.kin'))) hide(); }, 250);
  });
  document.addEventListener('DOMContentLoaded', build);
  if (document.readyState !== 'loading') build();
})();
