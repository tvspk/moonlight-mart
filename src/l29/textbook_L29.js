/* textbook_L29.js — Korean 3, Lesson 29 (textbook p.180–184, answers p.199). Irregulars: ㅅ. Romanization removed.
   Track 57: intro (0–4.9 s), 낫다 · 나아요 · 젓다 · 저어요 · 잇다 · 이었어요 · 짓다 · 지었어요 (block 5.4–19.25 s; ASR unclear), “Sample
   sentences”, then the 5 sample sentences, each twice (clipped 24.0–40.41 s by silence detection + ASR). The exceptions (웃어요, 씻을 거예요,
   벗어 주세요) are marked Track 57 in the book but are not on the recording. Track 58 = dialogue.
   Forms come from forms_L29.js (generated, book-checked). */
(() => {
  const F = MM.forms[29], row = d => F.find(f => f.dict === d);
  /* diag for every wrong form (column k) of verb d inside a sentence; MM.l29why is defined in game_L29.js (loads before this file) */
  const dg = (ans, d, k, wk) => { const f = row(d); return f[wk].map(w => ({ p: ans.replace(f[k], w), note: MM.l29why(d, w) })); };
  MM.lessons[29] = {
    n: 29, ko: 'ㅅ 불규칙', en: 'Irregulars: ㅅ',
    pages: { tb: '180–184', tbKey: '199', wb: '112–115', wbKey: '141–142' },
  };
  MM.textbook[29] = {
    blocks: [
      { t: 'h', text: 'Lesson 29 · Irregulars: ㅅ', ko: 'ㅅ 불규칙' },
      { t: 'p', text: 'Do you remember the previous lessons in this book over irregularities with ㅂ, 르, and ㄷ? Of course you do! Now that you have become a master of irregularities, learning “Irregular ㅅ” will be no match for you!' },
      { t: 'p', text: 'When ㅅ is the 받침 of a verb stem and it is followed by a vowel, the ㅅ is dropped.' },
      { t: 'p', text: 'Ex)' },
      { t: 'track', id: '57', from: 5.4, to: 19.25, label: 'Track 57 · 낫다 · 나아요 · 젓다 · 저어요 · 잇다 · 이었어요 · 짓다 · 지었어요' },
      { t: 'meaning', label: '-', ko: '낫다', text: 'to heal; to recover; to be better (in comparison)' },
      { t: 'meaning', label: '-', ko: '낫 + 아요 (present tense) → 나아요', text: 'It’s better. / Please feel better.' },
      { t: 'meaning', label: '-', ko: '젓다', text: 'to stir (liquid)' },
      { t: 'meaning', label: '-', ko: '젓 + 어요 (present tense) → 저어요', text: 'I stir. / Please stir it.' },
      { t: 'meaning', label: '-', ko: '잇다', text: 'to connect; to link' },
      { t: 'meaning', label: '-', ko: '잇 + 었어요 (past tense) → 이었어요', text: 'I connected (it). / I linked (it).' },
      { t: 'meaning', label: '-', ko: '짓다', text: 'to build; to compose' },
      { t: 'meaning', label: '-', ko: '짓 + 었어요 (past tense) → 지었어요', text: 'I built it. / I composed it.' },
      { t: 'note', label: 'App note (not from the book)', text: 'After the ㅅ drops, the two vowels stay side by side — they do not contract the way 가 + 아요 → 가요 does: 나아요 (not 나요), 저어요 (not 저요), 지어요 (not 져요). Endings that begin with 으 keep it: 저으세요, 지을 거예요, 나으면. Before a consonant the ㅅ stays: 짓고 있어요, 밥 짓는 것 (Workbook). Compare ㅂ (Lesson 11), 르 (Lesson 24) and ㄷ (Lesson 26): again only endings beginning with a vowel change the stem.' },

      { t: 'h2', text: 'Sample Sentences' },
      { t: 'track', id: '57', from: 24.0, to: 40.41, label: 'Track 57 · these 5 sentences' },
      { t: 'sent', id: 's1', clip: ['57', 24.0, 27.0], ko: '잘 저으세요.', en: ['Stir it well.'] },
      { t: 'sent', id: 's2', clip: ['57', 27.0, 29.95], ko: '두 개를 이었어요.', en: ['I connected the two (objects).'] },
      { t: 'sent', id: 's3', clip: ['57', 29.95, 33.5], ko: '이 집을 누가 지었어요?', en: ['Who built this house?'] },
      { t: 'sent', id: 's4', clip: ['57', 33.5, 37.3], ko: '좋은 이름을 지을 거예요.', en: ['I’m going to create a good name.'] },
      { t: 'sent', id: 's5', clip: ['57', 37.3, 40.41], ko: '감기 다 나았어요?', en: ['Did you recover (completely) from the cold?'] },
      { t: 'note', label: 'App note (not from the book)', text: '저으세요 = 젓 + 으세요. 지을 거예요 = 짓 + 을 거예요. 나았어요 = 낫 + 았어요. 이름을 짓다 = to make a name, to name. 감기 = a cold.' },

      { t: 'h2', text: 'Exceptions' },
      { t: 'p', text: 'There are some verb stems in which the “ㅅ” 받침 is regular, meaning that the ㅅ is not dropped and it stays the same.' },
      { t: 'p', text: 'Ex)' },
      { t: 'meaning', label: '-', ko: '웃다', text: 'to smile; to laugh' },
      { t: 'ex', items: [{ id: 'e1', ko: '웃어요.', en: ['Smile. / I smile. / He laughs. / They laugh.'] }] },
      { t: 'meaning', label: '-', ko: '씻다', text: 'to wash' },
      { t: 'ex', items: [{ id: 'e2', ko: '씻을 거예요.', en: ['I’m going to wash up. / I’m going to wash it.'] }] },
      { t: 'meaning', label: '-', ko: '벗다', text: 'to take (clothes) off' },
      { t: 'ex', items: [{ id: 'e3', ko: '신발을 벗어 주세요.', en: ['Please take your shoes off.'] }] },
      { t: 'note', label: 'Audio', text: 'The book marks these examples Track 57, but they are not on the recording (it ends with the sample sentences).' },

      { t: 'h2', text: 'Sample Dialogue' },
      { t: 'dialogue', track: '58', lines: [
        { id: 'd1', sp: 'A', ko: '강아지 이름이 뭐예요?', en: 'What is the name of your dog?' },
        { id: 'd2', sp: 'B', ko: '코코예요.', en: 'It is Coco.' },
        { id: 'd3', sp: 'A', ko: '누가 지었어요?', en: 'Who named him/her?' },
        { id: 'd4', sp: 'B', ko: '제가 지었어요.', en: 'I named him/her.' },
      ] },
      { t: 'note', label: 'App note (not from the book)', text: '강아지 = puppy, dog. 누가 지었어요? = Who made (the name)? → Who named him/her? 짓 + 었어요 → 지었어요.' },

      { t: 'exercises', title: 'Exercises for Lesson 29', items: [
        { id: 'x1', q: 'Translate the following phrase to Korean: “It’s better / Please feel better.”', hint: '낫다 = to heal; to recover; to feel better',
          ans: ['나아요'], full: '나아요', skill: 'l29.form', lenient: false,
          soft: [{ p: '(빨리 |)나아요', note: 'Accepted. The key: 나아요.' }, { p: '(빨리 |)나으세요', note: 'Accepted (-(으)세요 = please). The key: 나아요.' }],
          diag: dg('나아요', '낫다', 'hae', 'wrong').concat([{ p: '나았어요', note: 'That is the past (it got better). Present: 나아요.' }]) },
        { id: 'x2', q: 'Translate the following phrase to Korean: “Who built this house?”', hint: '짓다 = to build; to compose',
          ans: ['이 집을 누가 지었어요?'], full: '이 집을 누가 지었어요?', skill: 'l29.form', lenient: false,
          soft: [{ p: '이 집(을|은) 누가 지었어요', note: 'Accepted.' }, { p: '누가 이 집(을|) 지었어요', note: 'Accepted. The key: 이 집을 누가 지었어요?' }],
          diag: dg('이 집을 누가 지었어요', '짓다', 'past', 'wrongPast') },
        { id: 'x3', q: 'Translate the following phrase to Korean: “Stir it well.”', hint: '젓다 = to stir',
          ans: ['잘 저으세요.'], full: '잘 저으세요.', skill: 'l29.form', lenient: false,
          soft: [{ p: '잘 저어 주세요', note: 'Accepted (-아/어 주세요). The key: 잘 저으세요.' }],
          diag: dg('잘 저으세요', '젓다', 'seyo', 'wrongSeyo').concat([{ p: '잘 저어요', note: 'Correct form, but as a request the key uses -(으)세요: 잘 저으세요.' }]) },
        { id: 'x4', q: 'Translate the following phrase to Korean: “I connected the two (objects).”', hint: '잇다 = to connect',
          ans: ['두 개를 이었어요.'], full: '두 개를 이었어요.', skill: 'l29.form', lenient: false,
          soft: [{ p: '(제가 |)두 개(를|) 이었어요', note: 'Accepted.' }],
          diag: dg('두 개를 이었어요', '잇다', 'past', 'wrongPast') },
        { id: 'x5', q: 'Translate the following phrase to Korean: “Please take your shoes off.”', hint: '벗다 = to take off',
          ans: ['신발을 벗어 주세요.'], full: '신발을 벗어 주세요.', skill: 'l29.reg', lenient: false,
          soft: [{ p: '신발(을|) 벗어 주세요', note: 'Accepted.' }, { p: '신발(을|) 벗으세요', note: 'Accepted (-(으)세요). The key: 신발을 벗어 주세요.' }],
          diag: dg('신발을 벗어 주세요', '벗다', 'aju', 'wrongAju') },
      ] },
    ],
  };
})();
