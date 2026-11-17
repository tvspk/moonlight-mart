/* textbook_L24.js — Korean 3, Lesson 24 (textbook p.151–155, answers p.199). Irregulars: 르. Romanization removed.
   Track 47: the five example verbs with their 해요 forms (고르다 골라요, 모르다 몰라요, 빠르다 빨라요, 자르다 잘라요, 기르다 길러요,
   each twice; block 5.2–23.2 s, ASR unclear), then the 5 sample sentences, each twice (clipped 26.6–42.47 s by silence detection + ASR).
   The -아서 / past forms of p.152 are not read. Track 48 = dialogue. Forms come from forms_L24.js (generated, book-checked). */
(() => {
  const F = MM.forms[24], row = d => F.find(f => f.dict === d);
  /* diag for every wrong form of verb d (column k) inside a sentence; MM.l24why is defined in game_L24.js (loads before this file) */
  const dg = (ans, d, k, wk) => { const f = row(d); return f[wk].map(w => ({ p: ans.replace(f[k], w), note: MM.l24why(d, w) })); };
  MM.lessons[24] = {
    n: 24, ko: '르 불규칙', en: 'Irregulars: 르',
    pages: { tb: '151–155', tbKey: '199', wb: '95–97', wbKey: '137–138' },
  };
  MM.textbook[24] = {
    blocks: [
      { t: 'h', text: 'Lesson 24 · Irregulars: 르', ko: '르 불규칙' },
      { t: 'p', text: 'Welcome to another lesson on irregularities. Yay! You will learn about irregular 르 in this lesson, which occurs more often than you think. Are you ready? 시작!' },
      { t: 'p', text: 'Irregular 르 is applied only on the following three occasions as follows.' },
      { t: 'p', text: 'Verb stems ending with -르 followed by:' },
      { t: 'meaning', label: '1.', ko: '-아/어/여요', text: 'the present tense ending' },
      { t: 'meaning', label: '2.', ko: '-아/어/여서', text: 'the linking ending (Lesson 7)' },
      { t: 'meaning', label: '3.', ko: '-았/었/였어요', text: 'the past tense ending' },
      { t: 'p', text: 'In these cases, 르 is changed to ㄹ and placed at the end of the previous vowel. ONE MORE ㄹ is needed before adding the verb ending.' },
      { t: 'p', text: 'Even if the verb stem ends with -르, if it is then followed by other endings, such as -고, -는데, etc., -르 will still stay the same.' },
      { t: 'note', label: 'App note (not from the book)', text: 'Step by step: 고르 + 아요 → 르 becomes ㄹ under 고 → 골 → add one more ㄹ: 골 + 라요 = 골라요. 라 or 러 follows the vowel before 르, as always (ㅏ/ㅗ → 라: 골라요, 몰라요, 빨라요, 잘라요; others → 러: 길러요, 불러요, 눌러요, 서둘러요). -아/어도 (Lesson 20) is built the same way: 불러도. Before -고, -는데, -기, -(으)면, -세요, -지 the stem stays: 고르고, 모르는데, 고르세요.' },
      { t: 'p', text: 'Ex)' },
      { t: 'track', id: '47', from: 5.2, to: 23.2, label: 'Track 47 · the five verbs (해요 forms)' },
      { t: 'meaning', label: '고르다 = to choose; to pick; to select', ko: '고르다 → 골라요. · 골라서 · 골랐어요.', text: 'I pick. · I pick and then; because I pick · I picked.' },
      { t: 'meaning', label: '모르다 = to not know', ko: '모르다 → 몰라요. · 몰라서 · 몰랐어요.', text: 'I do not know. · because I do not know · I did not know.' },
      { t: 'meaning', label: '빠르다 = to be fast', ko: '빠르다 → 빨라요. · 빨라서 · 빨랐어요.', text: 'It is fast. · because it is fast · It was fast.' },
      { t: 'meaning', label: '자르다 = to cut', ko: '자르다 → 잘라요. · 잘라서 · 잘랐어요.', text: 'I cut. · I cut and then; because I cut · I cut.' },
      { t: 'meaning', label: '기르다 = to grow, to raise', ko: '기르다 → 길러요. · 길러서 · 길렀어요.', text: 'I raise. · I raise and then; because I raise · I raised.' },

      { t: 'h2', text: 'Sample Sentences' },
      { t: 'track', id: '47', from: 26.6, to: 42.47, label: 'Track 47 · these 5 sentences' },
      { t: 'sent', id: 's1', clip: ['47', 26.6, 29.2], ko: '뭐 골랐어요?', en: ['What did you choose?'] },
      { t: 'sent', id: 's2', clip: ['47', 29.2, 31.55], ko: '저도 몰라요.', en: ['I don’t know, either.'] },
      { t: 'sent', id: 's3', clip: ['47', 31.55, 34.95], ko: '비행기는 빨라서 좋아요.', en: ['Planes are good because they are fast. / I like airplanes because they are fast.'] },
      { t: 'sent', id: 's4', clip: ['47', 34.95, 37.98], ko: '누가 케이크 잘랐어요?', en: ['Who cut the cake?'] },
      { t: 'sent', id: 's5', clip: ['47', 37.98, 42.47], ko: '토끼를 5년 동안 길렀어요.', en: ['I had a rabbit as a pet for five years. / I raised a rabbit for five years.'] },
      { t: 'note', label: 'App note (not from the book)', text: '5년 동안 = for five years (동안 = during, for). 토끼 = rabbit. 케이크 = cake. 비행기 = airplane.' },

      { t: 'h2', text: 'Sample Dialogue' },
      { t: 'dialogue', track: '48', lines: [
        { id: 'd1', sp: 'A', ko: '주연 씨, 마시고 싶은 거 골랐어요?', en: 'Jooyeon, have you chosen what you would like to drink?' },
        { id: 'd2', sp: 'B', ko: '아니요, 아직 안 골랐어요.', en: 'No. I have not chosen yet.' },
        { id: 'd3', sp: 'A', ko: '빨리 고르세요.', en: 'Please hurry up. (Please choose quickly.)' },
      ] },
      { t: 'note', label: 'App note (not from the book)', text: '고르세요: -세요 is not one of the three endings, so 르 stays (고르 + 세요). 마시고 싶은 거 = the thing (you) want to drink (Lesson 13 form of 싶다 + 거).' },

      { t: 'exercises', title: 'Exercises for Lesson 24', items: [
        { id: 'x1', q: 'Translate to Korean: [Past tense] I picked (it).', hint: '고르다 = to pick; to select',
          ans: ['골랐어요.'], full: '골랐어요.', skill: 'l24.form', lenient: false,
          soft: [{ p: '(저는 |제가 |)(그거 |그걸 |그것을 |)골랐어요', note: 'Accepted. The key: 골랐어요.' }],
          diag: dg('골랐어요', '고르다', 'past', 'wrongPast').concat([{ p: '골라요', note: 'That is the present (I pick). Past: 골랐어요.' }]) },
        { id: 'x2', q: 'Translate to Korean: What did you choose?',
          ans: ['뭐 골랐어요?'], full: '뭐 골랐어요?', skill: 'l24.form', lenient: false,
          soft: [{ p: '(뭘|무엇을|뭐를) 골랐어요', note: 'Accepted. The key: 뭐 골랐어요?' }],
          diag: dg('뭐 골랐어요', '고르다', 'past', 'wrongPast').concat([{ p: '뭐 골라요', note: 'Present (what do you choose?). The question is in the past: 골랐어요.' }]) },
        { id: 'x3', q: 'Translate to Korean: [Past tense] I cut (it).', hint: '자르다 = to cut',
          ans: ['잘랐어요.'], full: '잘랐어요.', skill: 'l24.form', lenient: false,
          soft: [{ p: '(저는 |제가 |)(그거 |그걸 |그것을 |)잘랐어요', note: 'Accepted. The key: 잘랐어요.' }],
          diag: dg('잘랐어요', '자르다', 'past', 'wrongPast').concat([{ p: '잘라요', note: 'Present. Past: 잘랐어요.' }]) },
        { id: 'x4', q: 'Translate to Korean: Who cut the cake?',
          ans: ['누가 케이크 잘랐어요?'], full: '누가 케이크 잘랐어요?', skill: 'l24.form', lenient: false,
          soft: [{ p: '누가 케이크(를|) 잘랐어요', note: 'Accepted.' }],
          diag: dg('누가 케이크 잘랐어요', '자르다', 'past', 'wrongPast').concat([{ p: '누구(가|) 케이크(를|) 잘랐어요', note: 'Who as the subject: 누구 + 가 → 누가.' }]) },
        { id: 'x5', q: 'Translate to Korean: Planes are good because they are fast.', hint: '빠르다 = to be fast',
          ans: ['비행기는 빨라서 좋아요.'], full: '비행기는 빨라서 좋아요.', skill: 'l24.form', lenient: false,
          soft: [{ p: '비행기(는|가) 빨라서 좋아요', note: 'Accepted.' }],
          diag: dg('비행기는 빨라서 좋아요', '빠르다', 'seo', 'wrongSeo').concat([{ p: '비행기(는|가) 빨라서 (좋았어요|좋아했어요)', note: 'Keep the present: 좋아요.' }, { p: '비행기(는|가) 빠르고 좋아요', note: '빠르고 좋아요 = fast and good. Because = -아서: 빨라서.' }]) },
      ] },
    ],
  };
})();
