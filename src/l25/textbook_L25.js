/* textbook_L25.js — Korean 3, Lesson 25 (textbook p.156–160, answers p.199). Verb ending -네요. Romanization removed.
   The PDF text layer garbles “-네요” in the text and the conjugation lines (“-֎ਃ”, “-঻/ও/৓”); restored from the page image.
   Track 49: intro (0–4.3 s), the ending sounds at the top (block 4.8–9.3 s: -네요 / 맛있어요 / 맛있네요; ASR unclear), then the
   5 sample sentences, each twice (clipped 9.3–24.11 s by silence detection + ASR). The Ex) lines (크다, 잘 어울리다, 맞다) are not on
   it. Track 50 = dialogue. Forms come from forms_L25.js (generated, book-checked). */
(() => {
  const F = MM.forms[25], row = d => F.find(f => f.dict === d);
  /* diag for every wrong -네요 form of word d inside a sentence; MM.l25why is defined in game_L25.js (loads before this file) */
  const dg = (ans, d) => { const f = row(d); return f.wrong.map(w => ({ p: ans.replace(f.ne, w), note: MM.l25why(d, w) })); };
  MM.lessons[25] = {
    n: 25, ko: '-네요', en: 'Verb ending -네요',
    pages: { tb: '156–160', tbKey: '199', wb: '98–100', wbKey: '138–139' },
  };
  MM.textbook[25] = {
    blocks: [
      { t: 'h', text: 'Lesson 25 · Verb ending -네요', ko: '-네요' },
      { t: 'p', text: 'As you have learned so far, there are many different types of verb endings in Korean, each of which have very specific rules. This one is no exception. Changing a plain sentence to end with -네요 expresses that you are impressed, surprised, or your own personal thought. This ending is used quite frequently in everyday Korean conversation as well as in Korean dramas.' },
      { t: 'p', text: 'For example, saying “맛있어요” just means “it is delicious”. Saying “맛있네요”, on the other hand, expresses that you are impressed or surprised by the taste. While “맛있어요” can mean the same thing when said with the right intonation, it cannot convey the same message when it is written.' },
      { t: 'track', id: '49', from: 4.8, to: 9.3, label: 'Track 49 · -네요 · 맛있어요 · 맛있네요' },
      { t: 'h2', text: 'Conjugation' },
      { t: 'meaning', label: '1.', ko: 'Verb stem + -네요', text: 'present' },
      { t: 'meaning', label: '2.', ko: '-았/었/였 (past tense suffix) + -네요', text: 'past' },
      { t: 'note', label: 'App note (not from the book)', text: '-네요 starts with a consonant, so it goes straight onto the stem and irregular stems do not change: 춥다 → 춥네요, 어렵다 → 어렵네요, 빠르다 → 빠르네요 (not 추워네요). Past: take only the past suffix: 왔어요 → 왔 + 네요 = 왔네요. Noun + 이다: 11월이네요. Pronunciation: before ㄴ the final consonant is heard as ㄴ, ㅁ or ㅇ — 맞네요 [만네요], 있네요 [인네요], 춥네요 [춤네요], 밝네요 [방네요] — but you write the stem as it is. ㄹ-stems drop ㄹ before ㄴ, like 열다 → 여는 (Lesson 14): 멀다 → 머네요.' },
      { t: 'p', text: 'Ex)' },
      { t: 'ex', items: [
        { id: 'e0', ko: '크다 = to be big (verb stem = 크)', en: ['to be big'] },
        { id: 'e1', ko: '크 + 어요 → 커요.', en: ['It’s big. (Fact)'] },
        { id: 'e2', ko: '크 + 네요 → 크네요.', en: ['(I see that) it is big. / (Oh, I didn’t know it was big, but) it is big. (Expressing surprise)'] },
        { id: 'e3', ko: '잘 어울리 + 어요 → 잘 어울려요.', en: ['It looks good on you. (Fact) — 잘 어울리다 = to suit someone well; to go well with someone'] },
        { id: 'e4', ko: '잘 어울리 + 네요 → 잘 어울리네요.', en: ['Oh! I find that it looks good on you. (Expressing your impression)'] },
        { id: 'e5', ko: '맞 + 아요 → 맞아요.', en: ['It’s correct. (Fact) — 맞다 = to be correct'] },
        { id: 'e6', ko: '맞 + 네요 → 맞네요.', en: ['I see that it’s correct! (Finding out a fact for the first time.)'] },
      ] },

      { t: 'h2', text: 'Sample Sentences' },
      { t: 'track', id: '49', from: 9.3, to: 24.11, label: 'Track 49 · these 5 sentences' },
      { t: 'sent', id: 's1', clip: ['49', 9.3, 11.64], ko: '여기 있네요!', en: ['Oh, here it is!'] },
      { t: 'sent', id: 's2', clip: ['49', 11.64, 14.62], ko: '이 드라마 재미있네요.', en: ['I find this drama fun to watch.'] },
      { t: 'p', text: '* If you already know that this drama is fun and you are telling someone else that as a fact, you need to say “이 드라마 재미있어요.”' },
      { t: 'sent', id: 's3', clip: ['49', 14.62, 17.69], ko: '별로 안 춥네요.', en: ['Well, it’s not that cold.'] },
      { t: 'sent', id: 's4', clip: ['49', 17.69, 20.42], ko: '아무도 안 왔네요.', en: ['Oh, look. Nobody is here yet.'] },
      { t: 'sent', id: 's5', clip: ['49', 20.42, 24.11], ko: '벌써 11월이네요.', en: ['Wow, it’s already November!'] },
      { t: 'note', label: 'App note (not from the book)', text: '별로 + negative = not that…, not really. 아무도 + negative = nobody. 왔네요 = 오 + 았 (past) + 네요. 벌써 = already. 11월이네요 = 11월 + 이다 + 네요.' },

      { t: 'h2', text: 'Sample Dialogue' },
      { t: 'dialogue', track: '50', lines: [
        { id: 'd1', sp: 'A', ko: '집안일 하는 거 힘들지 않아요?', en: 'Isn’t it hard to do housework?' },
        { id: 'd2', sp: 'B', ko: '힘들어요. 그래도 남편이 많이 도와줘요.', en: 'It is hard, but my husband helps me a lot.' },
        { id: 'd3', sp: 'A', ko: '오, 그래요? 좋은 남편이네요.', en: 'Oh, does he? He is a good husband!' },
      ] },
      { t: 'note', label: 'App note (not from the book)', text: '집안일 = housework; 집안일 하는 거 = doing housework (Lesson 14 form + 거). 힘들지 않아요? = isn’t it hard? 그래도 = but still (Lesson 12). 좋은 남편이네요 = noun + 이네요: A has just heard it and is impressed.' },

      { t: 'exercises', title: 'Exercises for Lesson 25', items: [
        { id: 'x1', q: 'Write in Korean: Oh! It looks good on you. (Expressing that you are impressed.)', hint: 'to suit someone well = 잘 어울리다',
          ans: ['잘 어울리네요.'], full: '잘 어울리네요.', skill: 'l25.form', lenient: false,
          soft: [{ p: '(오 |와 |)(정말 |)잘 어울리네요', note: 'Accepted. The key: 잘 어울리네요.' }],
          diag: dg('잘 어울리네요', '어울리다').concat([{ p: '(오 |와 |)잘 어울려요', note: 'That is the plain fact (It looks good on you). Impressed: 잘 어울리네요.' }]) },
        { id: 'x2', q: 'Write in Korean: I see that it’s correct! (Finding out a fact for the first time.)', hint: 'To be correct = 맞다',
          ans: ['맞네요.'], full: '맞네요.', skill: 'l25.form', lenient: false,
          soft: [{ p: '(아 |오 |와 |)(정말 |)맞네요', note: 'Accepted. The key: 맞네요.' }],
          diag: dg('맞네요', '맞다').concat([{ p: '(아 |오 |)맞아요', note: 'That is the plain fact (It’s correct). Finding out: 맞네요.' }]) },
        { id: 'x3', q: 'Write in Korean: Oh, here it is.', hint: 'Here = 여기',
          ans: ['여기 있네요.'], full: '여기 있네요.', skill: 'l25.form', lenient: false,
          soft: [{ p: '(아 |오 |)여기 있네요', note: 'Accepted.' }, { p: '(아 |오 |)여기 있었네요', note: 'Accepted (oh, it was here!). The key: 여기 있네요.' }],
          diag: dg('여기 있네요', '있다').concat([{ p: '(아 |오 |)여기 있어요', note: 'That just says “it’s here”. Surprise: 여기 있네요.' }]) },
        { id: 'x4', q: 'Write in Korean: Well, it’s not that cold.', hint: 'To be cold = 춥다',
          ans: ['별로 안 춥네요.'], full: '별로 안 춥네요.', skill: 'l25.form', lenient: false,
          diag: dg('별로 안 춥네요', '춥다').concat([{ p: '별로 춥네요', note: '별로 needs a negative: 별로 안 춥네요.' }, { p: '별로 안 추워요', note: 'The plain fact. The key: 별로 안 춥네요.' }]) },
        { id: 'x5', q: 'Write in Korean: Wow, it’s already November.', hint: 'November = 11월',
          ans: ['벌써 11월이네요.'], full: '벌써 11월이네요.', skill: 'l25.noun', lenient: false,
          soft: [{ p: '(와 |)벌써 (11월|십일월)이네요', note: 'Accepted.' }],
          diag: dg('벌써 11월이네요', '11월').concat([{ p: '(와 |)벌써 11월이에요', note: 'The plain fact. Wow → 11월이네요.' }]) },
      ] },
    ],
  };
})();
