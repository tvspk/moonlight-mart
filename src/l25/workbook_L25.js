/* workbook_L25.js — Korean 3 Workbook, Lesson 25 (p.98–100, answer key p.138–139).
   Section I = match (10). Section II = explain (short answers in English → compare with the key → self-judge).
   Section III = write: change the plain sentence to -네요 (the key gives no English → ours, marked). Wrong forms get MM.l25why.
   Section IV dictation = WB Track 60, 61 (sentence, then in parts; ASR matches the key). lenient off: 맞네요 / 만네요. */
(() => {
  const F = MM.forms[25], row = d => F.find(f => f.dict === d), why = MM.l25why;
  const dg = (s, d) => { const f = row(d); return f.wrong.map(w => ({ p: s.replace(f.ne, w), note: why(d, w) })); };
  const fact = (s, h) => ({ p: s, note: `${h} is the plain sentence. The task: change it to -네요.` });
  MM.workbook[25] = {
    sections: [
      {
        id: 'I', title: 'Section I – Vocabulary',
        task: 'Define / translate each word to English. (Here: match each word with its meaning.)',
        type: 'match', skill: 'l25.vocab',
        items: [
          { n: 1, ko: '말', en: 'language; what one says, expression; word, term' },
          { n: 2, ko: '맞다', en: 'to be correct, to be right' },
          { n: 3, ko: '무겁다', en: 'to be heavy' },
          { n: 4, ko: '물', en: 'water' },
          { n: 5, ko: '깊다', en: 'to be deep' },
          { n: 6, ko: '방', en: 'room' },
          { n: 7, ko: '항상', en: 'always, all the time' },
          { n: 8, ko: '더럽다', en: 'to be dirty' },
          { n: 9, ko: '밤', en: 'night' },
          { n: 10, ko: '밝다', en: 'to be bright' },
        ],
      },
      {
        id: 'II', title: 'Section II – Comprehension',
        task: 'Short answer. Answer the following questions in English (or your own language), then compare with the key.',
        type: 'explain', skill: 'l25.usage',
        items: [
          { n: 11, q: 'If you change a plain sentence to the -네요 form, what are you implying / indicating?',
            key: 'You indicate that you are expressing your impression, thought, or surprise.' },
          { n: 12, q: 'How do you conjugate -네요?', skill: 'l25.form',
            key: 'You add -네요 after the verb stem or the past tense suffix.' },
          { n: 13, q: 'Can a plain sentence mean the same thing as a sentence ending in -네요?',
            key: 'Yes. A plain sentence can mean the same thing when said with the right intonation, but it cannot convey the same message when it is written.' },
        ],
      },
      {
        id: 'III', title: 'Section III – Writing practice',
        task: 'Change the plain sentence to the -네요 form.',
        type: 'write', skill: 'l25.form',
        items: [
          { n: 14, given: '시험이 너무 어려워요.', ans: ['시험이 너무 어렵네요.'], lenient: false,
            diag: dg('시험이 너무 어렵네요', '어렵다').concat([fact('시험이 너무 어려워요', '어려워요')]), en: 'The exam is so difficult!', keyNote: 'English ours: the key prints none' },
          { n: 15, given: '친구 말이 정말 맞아요.', ans: ['친구 말이 정말 맞네요.'], lenient: false,
            diag: dg('친구 말이 정말 맞네요', '맞다').concat([fact('친구 말이 정말 맞아요', '맞아요')]), en: 'What my friend said is really right!', keyNote: 'English ours' },
          { n: 16, given: '가방이 진짜 무거워요.', ans: ['가방이 진짜 무겁네요.'], lenient: false,
            diag: dg('가방이 진짜 무겁네요', '무겁다').concat([fact('가방이 진짜 무거워요', '무거워요')]), en: 'The bag is really heavy!', keyNote: 'English ours' },
          { n: 17, given: '물이 생각보다 깊어요.', ans: ['물이 생각보다 깊네요.'], lenient: false,
            diag: dg('물이 생각보다 깊네요', '깊다').concat([fact('물이 생각보다 깊어요', '깊어요')]), en: 'The water is deeper than I thought!', keyNote: 'English ours' },
          { n: 18, given: '제 방은 항상 더러워요.', ans: ['제 방은 항상 더럽네요.'], lenient: false,
            diag: dg('제 방은 항상 더럽네요', '더럽다').concat([fact('제 방은 항상 더러워요', '더러워요')]), en: 'My room is always dirty!', keyNote: 'English ours' },
          { n: 19, given: '지금 밤 10시인데 아직도 밝아요.', ans: ['지금 밤 10시인데 아직도 밝네요.'], lenient: false,
            diag: dg('지금 밤 10시인데 아직도 밝네요', '밝다').concat([fact('지금 밤 10시인데 아직도 밝아요', '밝아요'), { p: '지금 밤 10시네요 아직도 밝네요', note: 'Only the end of the sentence changes: keep 10시인데 (Lesson 21).' }]), en: 'It’s 10 p.m. now, but it’s still bright!', keyNote: 'English ours' },
        ],
      },
      {
        id: 'IV', title: 'Section IV – Dictation',
        task: 'Listen to the MP3. Repeat what you hear out loud, then write it down. Each word/phrase is said twice.',
        type: 'dictation',
        items: [
          { n: 20, track: 'wb60', label: 'Track 60', ans: ['석진 씨, 빨리 왔네요.'], lenient: false, en: 'Oh, Seokjin, you got here early.' },
          { n: 21, track: 'wb61', label: 'Track 61', ans: ['벌써 11월이네요.'], lenient: false, en: 'Wow, it’s already November!' },
        ],
      },
    ],
  };
})();
