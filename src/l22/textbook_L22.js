/* textbook_L22.js — Korean 3, Lesson 22 (textbook p.141–145, answers p.198). Romanization removed.
   The PDF text layer garbles the expression in the first line (“-(ਵ)Ů بࣻ ׮”); restored as -(으)ㄹ 수도 있다 from the page image.
   Track 43: intro (0–4.6 s), the three expressions at the top of p.141 (block 5.0–10.0 s: -(으)ㄹ 수 있다, -(으)ㄹ 수도 있다, -도; ASR
   unclear), then the 5 sample sentences (each twice, clipped by silence detection + ASR 11.0–29.78 s; the last one is short, both
   readings fit in 26.6–29.78). The Ex) sentences (알다 / 만나다 / 작다) are not on it. Track 44 = dialogue. */
(() => {
  const F = MM.forms[22], row = d => F.find(f => f.dict === d);
  const why = MM.l22why; /* defined in game_L22.js (loads before this file) */
  const dg = (ans, d) => { const f = row(d); return f.wrongL.map(w => ({ p: ans.replace(f.l + ' ', w + ' '), note: why(d, w) })); };
  MM.lessons[22] = {
    n: 22, ko: '-(으)ㄹ 수도 있어요', en: 'Maybe I might…',
    pages: { tb: '141–145', tbKey: '198', wb: '88–90', wbKey: '135–136' },
  };
  MM.textbook[22] = {
    blocks: [
      { t: 'h', text: 'Lesson 22 · Maybe I might…', ko: '-(으)ㄹ 수도 있어요' },
      { t: 'p', text: 'In this lesson, you will learn about the expression -(으)ㄹ 수도 있다. This is a combination of two grammar points which were covered in previous lessons:' },
      { t: 'track', id: '43', from: 5.0, to: 10.0, label: 'Track 43 · -(으)ㄹ 수 있다 · -(으)ㄹ 수도 있다 · -도' },
      { t: 'meaning', label: '1.', ko: '-(으)ㄹ 수 있다', text: 'was introduced in Level 2, Lesson 17, and it means “can, to be able to”.' },
      { t: 'meaning', label: '2.', ko: '-도', text: 'was introduced in Level 2, Lesson 13, and it means “also, too”.' },
      { t: 'p', text: 'When these two expressions are combined into -(으)ㄹ 수도 있다, it means “it could…”, “it is possible that…”, or “it might…”. In order to understand why -(으)ㄹ 수도 있다 has such meanings, you first need to take a closer look at the expression -(으)ㄹ 수 있다.' },
      { t: 'p', text: 'Basically, the word 수 is a noun which, in this particular structure, means “way”, “method”, or “idea”. Therefore, -(으)ㄹ 수 있다 means “there is a way to do…”, “there is an idea for doing…”, or “there is a possibility for doing…”.' },
      { t: 'p', text: 'When the meaning of -도, which is “also” or “too”, is added to -(으)ㄹ 수 있다, the sentence takes the meaning of “there is also the possibility of…”.' },
      { t: 'p', text: 'Although -(으)ㄹ 수도 있다 COULD mean “to also be able to do something”, it usually means “it might”, “it could”, or “perhaps”.' },
      { t: 'note', label: 'App note (not from the book)', text: 'The -(으)ㄹ before 수 is the same form as in -(으)ㄹ 것 같아요 (Lesson 9): vowel stem + ㄹ (올, 만날), consonant stem + 을 (작을, 먹을), ㄹ-stem stays (알), noun + 이다 → 일 (가짜일). 그렇다 → 그럴. Compare: 갈 수 있어요 = I can go · 갈 수도 있어요 = I might go.' },
      { t: 'p', text: 'Ex)' },
      { t: 'ex', items: [
        { id: 'e1', ko: '알다 → 알 수도 있다', en: ['to know (something/someone) → might know (something/someone)'] },
        { id: 'e1s', ko: '제 친구가 알 수도 있어요.', en: ['My friend might know (the person/the thing).'] },
        { id: 'e2', ko: '만나다 → 만날 수도 있다', en: ['to meet → might meet'] },
        { id: 'e2s', ko: '내일 다시 만날 수도 있어요.', en: ['We might meet again tomorrow.'] },
        { id: 'e3', ko: '작다 → 작을 수도 있다', en: ['to be small → might be small'] },
        { id: 'e3s', ko: '모자가 작을 수도 있어요.', en: ['The hat could be small.'] },
      ] },

      { t: 'h2', text: 'Sample Sentences' },
      { t: 'track', id: '43', from: 11.0, to: 29.78, label: 'Track 43 · these 5 sentences' },
      { t: 'sent', id: 's1', clip: ['43', 11.0, 14.95], ko: '저 내일 올 수도 있어요.', en: ['I might come here tomorrow.'] },
      { t: 'sent', id: 's2', clip: ['43', 14.95, 18.95], ko: '저 내일 안 올 수도 있어요.', en: ['I might not come here tomorrow.'] },
      { t: 'sent', id: 's3', clip: ['43', 18.95, 22.9], ko: '저 내일 못 올 수도 있어요.', en: ['I might not be able to come here tomorrow.'] },
      { t: 'sent', id: 's4', clip: ['43', 22.9, 26.6], ko: '이거 가짜일 수도 있어요.', en: ['This might be fake.'] },
      { t: 'sent', id: 's5', clip: ['43', 26.6, 29.78], ko: '정말 그럴 수도 있어요.', en: ['It might really be so.'] },
      { t: 'note', label: 'App note (not from the book)', text: '안 올 수도 = might not come (by choice), 못 올 수도 = might not be able to come. 안 / 못 go right before the verb. 가짜 = fake (가짜이다 → 가짜일). 그렇다 = to be so → 그럴 수도 있어요 = that could be (true).' },

      { t: 'h2', text: 'Sample Dialogue' },
      { t: 'dialogue', track: '44', lines: [
        { id: 'd1', sp: 'A', ko: '저 다음 달에 일본 갈 수도 있어요.', en: 'I might go to Japan next month.' },
        { id: 'd2', sp: 'B', ko: '아, 진짜요? 오세요. 오세요.', en: 'Oh, really? Come! Come!' },
        { id: 'd3', sp: 'A', ko: '그런데 확실한 것은 아니에요. 안 갈 수도 있어요.', en: 'But, I am not sure yet. I might not go.' },
      ] },
      { t: 'note', label: 'App note (not from the book)', text: '확실하다 = to be certain → 확실한 것은 아니에요 = it’s not a sure thing (확실한 = Lesson 13 form). B says 오세요 (come!): B lives in Japan.' },

      { t: 'exercises', title: 'Exercises for Lesson 22', items: [
        { id: 'x1', q: 'Write in Korean: might know (something or someone)', hint: 'To know = 알다',
          ans: ['알 수도 있다'], full: '알 수도 있다', skill: 'l22.form', lenient: false,
          soft: [{ p: '알 수도 있어요', note: 'Accepted. The key gives the dictionary form: 알 수도 있다.' }],
          diag: dg('알 수도 있다', '알다').concat([{ p: '알 수 (있다|있어요)', note: '알 수 있다 = can know. Might = add 도: 알 수도 있다.' }, { p: '아는 것 같(다|아요)', note: 'That is “seems to know” (Lesson 9). Might = 알 수도 있다.' }]) },
        { id: 'x2', q: 'Write in Korean: might meet', hint: 'To meet = 만나다',
          ans: ['만날 수도 있다'], full: '만날 수도 있다', skill: 'l22.form', lenient: false,
          soft: [{ p: '만날 수도 있어요', note: 'Accepted. The key: 만날 수도 있다.' }],
          diag: dg('만날 수도 있다', '만나다').concat([{ p: '만날 수 (있다|있어요)', note: '만날 수 있다 = can meet. Might = 만날 수도 있다.' }]) },
        { id: 'x3', q: 'Write in Korean: might be small', hint: 'To be small = 작다',
          ans: ['작을 수도 있다'], full: '작을 수도 있다', skill: 'l22.form', lenient: false,
          soft: [{ p: '작을 수도 있어요', note: 'Accepted. The key: 작을 수도 있다.' }],
          diag: dg('작을 수도 있다', '작다').concat([{ p: '작을 수 (있다|있어요)', note: 'Without 도 it sounds like “can be small”. Might = 작을 수도 있다.' }]) },
        { id: 'x4', q: 'Write in Korean: I might come here tomorrow.', hint: 'To come = 오다',
          ans: ['저 내일 올 수도 있어요.'], full: '저 내일 올 수도 있어요.', skill: 'l22.form', lenient: false,
          soft: [{ p: '(저|저는|제가|) (내일 |)(여기 |여기에 |)(내일 |)올 수도 있어요', note: 'Accepted.' }],
          diag: dg('저 내일 올 수도 있어요', '오다').concat([{ p: '(저|저는|제가|) (내일 |)(여기 |여기에 |)올 수 있어요', note: '올 수 있어요 = I can come. I might come = 올 수도 있어요.' }, { p: '(저|저는|제가|) (내일 |)(여기 |여기에 |)올 거예요', note: '올 거예요 = I will come (sure). Might = 올 수도 있어요.' }]) },
        { id: 'x5', q: 'Write in Korean: This might be fake.', hint: 'To be fake = 가짜이다',
          ans: ['이거 가짜일 수도 있어요.'], full: '이거 가짜일 수도 있어요.', skill: 'l22.form', lenient: false,
          soft: [{ p: '(이거|이것|이건|이게|이것은|이것이) 가짜일 수도 있어요', note: 'Accepted.' }],
          diag: dg('이거 가짜일 수도 있어요', '가짜').concat([{ p: '(이거|이건|이게) 가짜 수도 있어요', note: 'Keep 이다: 가짜 + 이다 → 가짜일 수도 있어요.' }, { p: '(이거|이건|이게) 가짜일 수 있어요', note: 'Without 도 it sounds like “this is able to be fake”. Might = 가짜일 수도 있어요.' }]) },
      ] },
    ],
  };
})();
