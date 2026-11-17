/* textbook_L26.js — Korean 3, Lesson 26 (textbook p.161–166, answers p.199). Irregulars: ㄷ. Romanization removed.
   The PDF text layer garbles “ㄷ” in two headings (“How Irregular Ŭ works”, “Examples of Irregular Ŭ verbs”); restored.
   Track 51: intro (0–4.3 s), 듣다 · 걷다 · 묻다 · 싣다 · 깨닫다 (block 4.6–12.95 s; ASR unclear), the five conversions 들어서 · 걸어요 ·
   물으면 · 실을 거예요 · 깨달았어요 (block 13.0–22.4 s; ASR clear), “Sample sentences”, then the 4 sample sentences, each twice
   (clipped 25.9–40.67 s by silence detection + ASR). The regular verbs and the usage examples are not on it. Track 52 = dialogue.
   Forms come from forms_L26.js (generated, book-checked). Rows are found by id (묻다.ask / 묻다.bury). */
(() => {
  const F = MM.forms[26], row = id => F.find(f => f.id === id);
  /* diag for every wrong form (column k) of verb id inside a sentence; MM.l26why is defined in game_L26.js (loads before this file) */
  const dg = (ans, id, k, wk) => { const f = row(id); return f[wk].map(w => ({ p: ans.replace(f[k], w), note: MM.l26why(id, w) })); };
  const pair = (id, q, a, b, right, why, wrongNote) => ({ id, q, choices: [a, b], right, choicesKo: true, ans: [right], skill: id === 'x3' || id === 'x4' ? 'l26.reg' : 'l26.form', why, wrongNote });
  MM.lessons[26] = {
    n: 26, ko: 'ㄷ 불규칙', en: 'Irregulars: ㄷ',
    pages: { tb: '161–166', tbKey: '199', wb: '101–103', wbKey: '139–140' },
  };
  MM.textbook[26] = {
    blocks: [
      { t: 'h', text: 'Lesson 26 · Irregulars: ㄷ', ko: 'ㄷ 불규칙' },
      { t: 'p', text: 'You are not finished learning about irregulars yet, so get ready for a lesson on irregularities that happen with ㄷ!' },
      { t: 'h2', text: 'How Irregular ㄷ works' },
      { t: 'p', text: 'When the Korean letter ㄷ is the 받침 (the final consonant at the end of a syllable) of a verb stem and is followed by a vowel, ㄷ is changed to ㄹ. Some verbs follow this rule, and some do not.' },
      { t: 'h2', text: 'Examples of Irregular ㄷ verbs' },
      { t: 'track', id: '51', from: 4.6, to: 12.95, label: 'Track 51 · 듣다 · 걷다 · 묻다 · 싣다 · 깨닫다' },
      { t: 'meaning', label: '-', ko: '듣다', text: 'to listen' },
      { t: 'meaning', label: '-', ko: '걷다', text: 'to walk' },
      { t: 'meaning', label: '-', ko: '묻다', text: 'to ask' },
      { t: 'meaning', label: '-', ko: '싣다', text: 'to load' },
      { t: 'meaning', label: '-', ko: '깨닫다', text: 'to realize' },
      { t: 'p', text: 'For these verbs, ㄷ changes to ㄹ when followed by a vowel:' },
      { t: 'track', id: '51', from: 13.0, to: 22.4, label: 'Track 51 · 들어서 · 걸어요 · 물으면 · 실을 거예요 · 깨달았어요' },
      { t: 'meaning', label: '-', ko: '듣 + 어서 → 들어서', text: 'listen and then; because (I) listen' },
      { t: 'meaning', label: '-', ko: '걷 + 어요 → 걸어요', text: '(I) walk' },
      { t: 'meaning', label: '-', ko: '묻 + 으면 → 물으면', text: 'if (you) ask' },
      { t: 'meaning', label: '-', ko: '싣 + 을 거예요 → 실을 거예요', text: '(I) will load' },
      { t: 'meaning', label: '-', ko: '깨닫 + 았어요 → 깨달았어요', text: '(I) realized' },
      { t: 'note', label: 'App note (not from the book)', text: 'The English glosses under the conversions are ours (the book prints only the forms). Compare ㅂ (Lesson 11): only endings that start with a vowel (-아/어, -았/었, -(으)…) change the stem. The 으 stays after the new ㄹ: 물으면, 실을 거예요 — not 물면 (= if it bites, 물다) or 실 거예요.' },
      { t: 'h2', text: 'Examples of verbs which do NOT follow this rule' },
      { t: 'meaning', label: '-', ko: '받다', text: 'to receive' },
      { t: 'meaning', label: '-', ko: '묻다', text: 'to bury' },
      { t: 'meaning', label: '-', ko: '닫다', text: 'to close' },
      { t: 'meaning', label: '-', ko: '믿다', text: 'to believe' },
      { t: 'p', text: 'For these verbs, keep the 받침 as ㄷ, even when it is followed by a vowel:' },
      { t: 'meaning', label: '-', ko: '받 + 아서 = 받아서', text: 'receive and then; because (I) receive' },
      { t: 'meaning', label: '-', ko: '묻 + 어요 = 묻어요', text: '(I) bury' },
      { t: 'meaning', label: '-', ko: '닫 + 으면 = 닫으면', text: 'if (you) close' },
      { t: 'meaning', label: '-', ko: '믿 + 어요 = 믿어요', text: '(I) believe' },
      { t: 'p', text: '* Although 묻다 (to ask) and 묻다 (to bury) are spelled the same way, they are conjugated differently and the meaning can only be determined from the context of the sentence.' },
      { t: 'p', text: 'Ex)' },
      { t: 'ex', items: [
        { id: 'e1', ko: '물어요.', en: ['I ask.'] },
        { id: 'e2', ko: '묻어요.', en: ['I bury.'] },
      ] },

      { t: 'h2', text: 'Usage examples of irregular ㄷ verbs' },
      { t: 'p', text: '1. 듣다 = to listen' },
      { t: 'ex', items: [
        { id: 'u1', ko: '→ 듣고 있어요', en: ['I am listening. (ㄷ does not change because -고 begins with a consonant.)'] },
        { id: 'u2', ko: '→ 들었어요', en: ['I heard. (ㄷ changes to ㄹ because -었 starts with a vowel.)'] },
      ] },
      { t: 'p', text: '2. 걷다 = to walk' },
      { t: 'ex', items: [
        { id: 'u3', ko: '→ 걷는 것 좋아해요', en: ['I like walking. (ㄷ does not change because -는 starts with a consonant.)'] },
        { id: 'u4', ko: '→ 한 시간 걸었어요', en: ['I walked for an hour. (ㄷ changes to ㄹ because -었 starts with a vowel.)'] },
      ] },

      { t: 'h2', text: 'Sample Sentences' },
      { t: 'track', id: '51', from: 25.9, to: 40.67, label: 'Track 51 · these 4 sentences' },
      { t: 'sent', id: 's1', clip: ['51', 25.9, 29.1], ko: '어디에서 들었어요?', en: ['Where did you hear that?'] },
      { t: 'sent', id: 's2', clip: ['51', 29.1, 33.75], ko: '많이 걸었는데, 안 피곤해요.', en: ['I walked a lot, but I am not tired.'] },
      { t: 'sent', id: 's3', clip: ['51', 33.75, 36.83], ko: '그 이야기를 믿어요?', en: ['Do you believe that story?'] },
      { t: 'sent', id: 's4', clip: ['51', 36.83, 40.67], ko: '물어도 대답이 없어요.', en: ['Even if I ask, there is no answer.'] },
      { t: 'note', label: 'App note (not from the book)', text: '걸었는데 = 걸었 (past) + 는데 (Lesson 21). 믿어요: 믿다 is regular. 물어도 = 묻 (to ask) + 어도 (Lesson 20). 피곤하다 = to be tired.' },

      { t: 'h2', text: 'Sample Dialogue' },
      { t: 'dialogue', track: '52', lines: [
        { id: 'd1', sp: 'A', ko: '방금 소리 들었어요?', en: 'Did you hear that noise?' },
        { id: 'd2', sp: 'B', ko: '무슨 소리요?', en: 'What noise?' },
        { id: 'd3', sp: 'A', ko: '이상한 소리 못 들었어요?', en: 'You didn’t hear the weird noise?' },
        { id: 'd4', sp: 'B', ko: '네, 못 들었어요.', en: 'No, I did not.' },
      ] },
      { t: 'note', label: 'App note (not from the book)', text: '방금 = just now. 소리 = sound, noise. B answers 네 to a negative question (“you didn’t hear?” — “right, I didn’t”); English says “No”.' },

      { t: 'note', label: 'Book layout', text: 'The book lists the choices a–j together (a. 발아서 b. 받아서 c. 달으면 d. 닫으면 e. 걷어요 f. 걸어요 g. 깨닫았어요 h. 깨달았어요 i. 들어서 j. 듣어서); here each item shows its own pair. Key: 1 i, 2 f, 3 b, 4 d, 5 h.' },

      { t: 'exercises', title: 'Exercises for Lesson 26', items: [
        pair('x1', 'Match the Korean word with the proper conjugation: 듣다 = to listen → 듣 + 어서', '들어서', '듣어서', '들어서', 'ㄷ → ㄹ before a vowel.', '듣다 is irregular: before -어서 the ㄷ becomes ㄹ.'),
        pair('x2', 'Match the Korean word with the proper conjugation: 걷다 = to walk → 걷 + 어요', '걷어요', '걸어요', '걸어요', 'ㄷ → ㄹ before a vowel.', '걷다 is irregular: 걸어요.'),
        pair('x3', 'Match the Korean word with the proper conjugation: 받다 = to receive → 받 + 아서', '발아서', '받아서', '받아서', '받다 is regular: ㄷ stays.', '받다 does NOT follow the rule: keep ㄷ.'),
        pair('x4', 'Match the Korean word with the proper conjugation: 닫다 = to close → 닫 + 으면', '달으면', '닫으면', '닫으면', '닫다 is regular: ㄷ stays.', '닫다 does NOT follow the rule: keep ㄷ.'),
        pair('x5', 'Match the Korean word with the proper conjugation: 깨닫다 = to realize → 깨닫 + 았어요', '깨닫았어요', '깨달았어요', '깨달았어요', 'ㄷ → ㄹ before a vowel.', '깨닫다 is irregular: 깨달았어요.'),
        { id: 'x6', q: 'Write the following sentence in Korean: “Where did you hear that?”', hint: '듣다 = to hear',
          ans: ['어디에서 들었어요?'], full: '어디에서 들었어요?', skill: 'l26.form', lenient: false,
          soft: [{ p: '(그거 |그 이야기 |)(어디에서|어디서) 들었어요', note: 'Accepted. The key: 어디에서 들었어요?' }],
          diag: dg('어디에서 들었어요', '듣다', 'past', 'wrongPast').concat([{ p: '어디서 듣었어요', note: MM.l26why('듣다', '듣었어요') }, { p: '(어디에서|어디서) 들어요', note: 'Present (where do you hear it?). The question is in the past: 들었어요.' }]) },
      ] },
    ],
  };
})();
