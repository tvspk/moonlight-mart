/* workbook_L26.js — Korean 3 Workbook, Lesson 26 (p.101–103, answer key p.139–140).
   Section I = match (9). Section II = explain (short answers → compare with the key → self-judge).
   Section III = conjugation chart (Present / Past / Future / Present Progressive; the book has no meaning column → noMean).
   The PDF garbles row 20 (the verb is printed at the bottom of the page: 싣다). Row 15 (묻다) is split into 15a “to ask” and 15b
   “to bury”, because the key gives both (물어요 / 묻어요). Forms come from forms_L26.js (generated, checked against the key).
   Section IV dictation = WB Track 62, 63 (sentence, then in parts; ASR matches the key). lenient off: 들어요 / 듣어요. */
(() => {
  const F = MM.forms[26], row = id => F.find(f => f.id === id), why = MM.l26why;
  const C4 = ['Present', 'Past', 'Future', 'Present Progressive'];
  const cell = (id, k, wk) => { const f = row(id); return { ans: [f[k]], lenient: false, diag: f[wk].map(w => ({ p: w, note: why(id, w) })) }; };
  const cross = r => { r.cells.forEach((c, i) => r.cells.forEach((o, j) => { if (i !== j && o.ans[0] !== c.ans[0]) c.diag.push({ p: o.ans[0], note: `${o.ans[0]} is the ${C4[j]} form. This column wants the ${C4[i]}.` }); })); return r; };
  const chartRow = (n, id, label) => { const f = row(id);
    return cross({ n, dict: label || f.dict, en: f.en, skill: f.irr === 'ㄷ' ? 'l26.form' : 'l26.reg',
      cells: [cell(id, 'hae', 'wrong'), cell(id, 'past', 'wrongPast'), cell(id, 'fut', 'wrongFut'), cell(id, 'prog', 'wrongProg')] }); };
  MM.workbook[26] = {
    sections: [
      {
        id: 'I', title: 'Section I – Vocabulary',
        task: 'Translate / define each word to English. (Here: match each word with its meaning.)',
        type: 'match', skill: 'l26.vocab',
        items: [
          { n: 1, ko: '듣다', en: 'to hear, to listen' },
          { n: 2, ko: '받다', en: 'to get, to receive, to accept, to take' },
          { n: 3, ko: '묻다', en: 'to ask, to bury' },
          { n: 4, ko: '닫다', en: 'to close' },
          { n: 5, ko: '깨닫다', en: 'to realize' },
          { n: 6, ko: '붇다', en: 'to swell (up), to be bloated' },
          { n: 7, ko: '걷다', en: 'to walk' },
          { n: 8, ko: '싣다', en: 'to load' },
          { n: 9, ko: '믿다', en: 'to believe, to trust' },
        ],
      },
      {
        id: 'II', title: 'Section II – Comprehension',
        task: 'Short answer. Answer the following questions in English (or your own language), then compare with the key.',
        type: 'explain', skill: 'l26.form',
        items: [
          { n: 10, q: 'How does ㄷ irregular work?',
            key: 'When the Korean letter ㄷ is the 받침 (the final consonant at the end of a syllable) of a verb stem and is followed by a vowel, ㄷ is changed to ㄹ.' },
          { n: 11, q: '“묻다” has two meanings. Which meaning conjugates in an irregular way?', skill: 'l26.usage',
            key: '묻다 meaning “to ask”.' },
          { n: 12, q: 'Except for 묻다, there were 3 words introduced in Section I which conjugate in a regular way. What are they?', skill: 'l26.reg',
            key: '받다, 닫다, 믿다' },
        ],
      },
      {
        id: 'III', title: 'Section III – Conjugation Chart',
        task: 'Conjugate the following verbs into each tense.',
        type: 'chart', skill: 'l26.form', noMean: true, cellPh: '…',
        cols: C4,
        items: [
          chartRow(13, '듣다'),
          chartRow(14, '받다'),
          chartRow('15a', '묻다.ask', '묻다 (= to ask)'),
          chartRow('15b', '묻다.bury', '묻다 (= to bury)'),
          chartRow(16, '닫다'),
          chartRow(17, '깨닫다'),
          chartRow(18, '붇다'),
          chartRow(19, '걷다'),
          chartRow(20, '싣다'),
          chartRow(21, '믿다'),
        ],
      },
      {
        id: 'IV', title: 'Section IV – Dictation',
        task: 'Listen to the MP3. Repeat what you hear out loud, then write it down. Each word/phrase is said twice.',
        type: 'dictation',
        items: [
          { n: 22, track: 'wb62', label: 'Track 62', ans: ['걷는 것을 좋아해서 한 시간 동안 걸었어요.'], lenient: false, en: 'I like walking, so I walked for one hour.' },
          { n: 23, track: 'wb63', label: 'Track 63', ans: ['많이 걸었는데, 안 피곤해요.'], lenient: false, en: 'I walked a lot, but I am not tired.' },
        ],
      },
    ],
  };
})();
