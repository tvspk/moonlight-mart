/* workbook_L16.js — Korean 3 Workbook, Lesson 16 (p.67–69, answer key p.131–132).
   Section I match: sentence endings → type of language (5 items, one round). Section II conjugation chart (6 verbs × 5 endings;
   the book has no meaning column → noMean). Section III comprehension: L (let’s) or P (plain present) for the underlined line
   (mc with dialogue lines). Section IV dictation = WB Track 38, 39 (whole sentences).
   Chart forms come from forms_L16.js (tools/gen_forms.py 16 checks them against the key). lenient off: 눕자 / 누우자. */
(() => {
  const F = MM.forms[16], row = d => F.find(f => f.dict === d);
  const COLS = ['-아/어/여요.', '-(으)시죠.', '-자.', '-(으)ㄹ래요?', '-(으)실래요?'];
  const KEYS = ['hae', 'sijyo', 'ja', 'lae', 'sillae'], WK = ['wrong', 'wrongSijyo', 'wrongJa', 'wrongLae', 'wrongSillae'];
  const why = (f, k, w) => {
    const d = f.dict, a = f[k], stem = d.slice(0, -1);
    if (f.irr === 'ㅂ') {
      if (k === 'ja') return `-자 starts with a consonant, so the ㅂ stays: ${a} (the key prints 눕자).`;
      return `The ending starts with a vowel (아/어, 으): ㅂ → 우 → ${a} (Lesson 11).`;
    }
    if (f.irr === 'ㄹ' && (k === 'sijyo' || k === 'sillae')) return `ㄹ-stem: the ㄹ drops before -시, and there is no 으: ${a}.`;
    if (f.irr === 'ㄹ' && k === 'lae') return `ㄹ-stem: the stem already ends in ㄹ, just add 래요: ${a}.`;
    if (k === 'ja') return `-자 goes straight onto the stem (${stem}): ${a}.`;
    if (k === 'lae') return /레요$/.test(w) ? `Spelling: 래요 (ㅐ), not 레요: ${a}.` : `${a}: vowel stem + ㄹ래요, consonant stem + 을래요.`;
    if (k === 'sijyo' || k === 'sillae') return /시조|실레요/.test(w) ? `Spelling: ${a}.` : `${a}: vowel stem + 시…, consonant stem + 으시… (never on the 해요 form).`;
    return `The polite “let’s” is the 해요 form: ${a}.`;
  };
  const chartRow = (n, d) => {
    const f = row(d);
    const cells = KEYS.map((k, i) => ({ ans: [f[k]], lenient: false, diag: (f[WK[i]] || []).map(w => ({ p: w, note: why(f, k, w) })) }));
    cells.forEach((c, i) => cells.forEach((o, j) => { if (i !== j) c.diag.push({ p: o.ans[0], note: `${o.ans[0]} is the ${COLS[j]} form. This column wants ${COLS[i]}` }); }));
    return { n, dict: d, en: f.en, cells };
  };
  const LP = ['L – “let’s”', 'P – plain present tense'];
  MM.workbook[16] = {
    sections: [
      {
        id: 'I', title: 'Section I – Vocabulary',
        task: 'Match each sentence ending to the type of language in which it is most commonly used.',
        type: 'match', skill: 'l16.endings',
        items: [
          { n: 1, ko: '-아/어/여요', en: 'polite/plain' },
          { n: 2, ko: '-(으)시죠', en: 'honorific' },
          { n: 3, ko: '-자', en: 'informal' },
          { n: 4, ko: '-(으)ㄹ래요?', en: 'polite/casual' },
          { n: 5, ko: '-(으)실래요?', en: 'polite/formal' },
        ],
      },
      {
        id: 'II', title: 'Section II – Conjugation chart',
        task: 'Conjugate the verbs in the infinitive with the sentence endings introduced in Section I to express “let’s” in Korean.',
        type: 'chart', skill: 'l16.endings', noMean: true, cellPh: '…',
        cols: COLS.map(c => '+ ' + c),
        items: [[6, '시작하다'], [7, '가다'], [8, '공부하다'], [9, '달리다'], [10, '눕다'], [11, '보다']].map(([n, d]) => {
          const r = chartRow(n, d); if (d === '눕다') r.skill = 'l16.irr'; return r;
        }),
      },
      {
        id: 'III', title: 'Section III – Comprehension',
        task: 'Identify the underlined part of the dialogue (here: the marked line) as being a form of “let’s” or the “plain present tense”. L = “let’s”, P = “plain present tense”.',
        type: 'mc', skill: 'l16.ctx',
        items: [
          { n: 12, lines: [['A ▸', '우리 점심 먹어요.'], ['B', '뭐 먹을까요?']], q: 'A’s line is…', opts: LP, right: 0,
            note: '우리 … 먹어요 + B answers “what shall we eat?” → let’s eat lunch.', wrongNote: 'Look at B’s answer: 뭐 먹을까요? (what shall we eat?). A suggested something.' },
          { n: 13, lines: [['A', '둘이 뭐 해요?'], ['B ▸', '같이 공부해요.']], q: 'B’s line is…', opts: LP, right: 1,
            note: 'A asks what the two of them are doing → B describes it: we are studying together.', wrongNote: 'A asks “what are you two doing?”. B answers with what they ARE doing.' },
          { n: 14, lines: [['A', '내일 몇 시에 만날까요?'], ['B ▸', '세 시에 만나요.']], q: 'B’s line is…', opts: LP, right: 0,
            note: 'A asks “what time shall we meet?” → B proposes: let’s meet at three.', wrongNote: 'A asked “shall we…?” (-(으)ㄹ까요). B proposes a time.' },
          { n: 15, lines: [['A', '오늘도 일해요?'], ['B ▸', '네. 오늘도 일해요.']], q: 'B’s line is…', opts: LP, right: 1,
            note: 'A asks “do you work today too?” → B: yes, I work today too.', wrongNote: 'It answers a yes/no question about B’s day.' },
          { n: 16, lines: [['A', '편의점에 갔다 올게요.'], ['B ▸', '같이 가요!']], q: 'B’s line is…', opts: LP, right: 0,
            note: 'A: I’ll go to the convenience store and come back. B: let’s go together!', wrongNote: '같이 + ! after someone says they are going → a suggestion.' },
        ],
      },
      {
        id: 'IV', title: 'Section IV – Dictation',
        task: 'Listen to the MP3. Repeat what you hear out loud, then write it down. Each word/phrase is said twice.',
        type: 'dictation',
        items: [
          { n: 17, track: 'wb38', label: 'Track 38', ans: ['우리 내일부터 같이 운동해요.'], lenient: false, en: 'Let’s exercise together [starting] from tomorrow.' },
          { n: 18, track: 'wb39', label: 'Track 39', ans: ['이거 너무 무거워요. 같이 들어요.'], lenient: false, en: 'This is too heavy. Let’s carry it together.' },
        ],
      },
    ],
  };
})();
