/* textbook_L28.js — Korean 3, Lesson 28 (textbook p.175–179, answers p.199). “Let’s” in casual language: -자 (반말, 청유형). Romanization removed.
   The PDF text layer garbles “-자” in the conjugation line (-੗) and “반말” in the heading “More Phrases in 반말” (݈߈); restored.
   Track 55 (21 s): intro, a short block (5.3–8.6 s, ASR unclear), then the 5 sample sentences, each twice (clipped 9.7–20.98 s by silence
   detection + ASR). The conjugation examples (하자, 공부하자, 하지 말자, 먹자) and the phrase list are not on it. Track 56 = dialogue.
   Forms come from forms_L28.js (generated, book-checked). */
(() => {
  const F = MM.forms[28], row = d => F.find(f => f.dict === d);
  const why = MM.l28why;
  const dg = (frame, d, k, wk) => { const f = row(d); return f[wk].map(w => ({ p: frame.replace(f[k], w), note: why(d, w) })); };
  MM.lessons[28] = {
    n: 28, ko: '-자 (반말, 청유형)', en: '“Let’s” in casual language',
    pages: { tb: '175–179', tbKey: '199', wb: '108–111', wbKey: '140–141' },
  };
  MM.textbook[28] = {
    blocks: [
      { t: 'h', text: 'Lesson 28 · “Let’s” in Casual Language', ko: '-자 (반말, 청유형)' },
      { t: 'p', text: 'Since you now know how and when to use 반말 (casual language), you are now well-equipped to learn how to make imperative “let us” or “let’s” sentences in 반말.' },
      { t: 'p', text: 'Normally, for sentences in present and past tense, the suffix -요 would be dropped in order to change it from 존댓말 to 반말. When saying “let’s” in 반말 however, a completely different ending is needed.' },
      { t: 'track', id: '55', from: 5.3, to: 8.6, label: 'Track 55 · opening words' },
      { t: 'h2', text: 'Conjugation' },
      { t: 'meaning', label: 'Verb stem +', ko: '-자', text: 'let’s (반말)' },
      { t: 'p', text: 'Ex)' },
      { t: 'meaning', label: '-', ko: '하다', text: 'to do' },
      { t: 'meaning', label: '-', ko: '하 + 자 = 하자', text: 'Let’s do it.' },
      { t: 'meaning', label: '-', ko: '공부하다', text: 'to study' },
      { t: 'meaning', label: '-', ko: '공부하 + 자 = 공부하자', text: 'Let’s study.' },
      { t: 'meaning', label: '-', ko: '하지 말다', text: 'to not do it' },
      { t: 'meaning', label: '-', ko: '하지 말 + 자 = 하지 말자', text: 'Let’s not do it.' },
      { t: 'meaning', label: '-', ko: '먹다', text: 'to eat' },
      { t: 'meaning', label: '-', ko: '먹 + 자 = 먹자', text: 'Let’s eat.' },
      { t: 'note', label: 'App note (not from the book)', text: '-자 begins with a consonant, so it goes straight onto the stem and irregular verbs do not change: 걷자, 고르자, 눕자 (the Lesson 16 chart has 눕자). In 존댓말 the same “let’s” is the -아/어요 form (같이 가요, Lesson 16) — so 가요 ↔ 가자. “Let’s not” always uses 말다: 하지 말자 (not 안 하자).' },

      { t: 'h2', text: 'Sample Sentences' },
      { t: 'track', id: '55', from: 9.7, to: 20.98, label: 'Track 55 · these 5 sentences' },
      { t: 'sent', id: 's1', clip: ['55', 9.7, 11.5], ko: '내일 보자.', en: ['Let’s meet tomorrow.', 'See you tomorrow.'] },
      { t: 'sent', id: 's2', clip: ['55', 11.5, 13.3], ko: '이거 사자.', en: ['Let’s buy this.'] },
      { t: 'sent', id: 's3', clip: ['55', 13.3, 15.85], ko: '우리 내일은 쉬자.', en: ['Let’s take a day off tomorrow.'] },
      { t: 'sent', id: 's4', clip: ['55', 15.85, 17.85], ko: '같이 가자.', en: ['Let’s go together.'] },
      { t: 'sent', id: 's5', clip: ['55', 17.85, 20.98], ko: '조금만 더 기다리자.', en: ['Let’s wait a little longer.'] },

      { t: 'h2', text: 'More Phrases in 반말' },
      { t: 'meaning', label: '1.', ko: '안녕하세요 → 안녕', text: 'hello' },
      { t: 'meaning', label: '2.', ko: '안녕히 가세요 → 안녕 / 잘 가', text: 'goodbye (to someone who leaves)' },
      { t: 'meaning', label: '3.', ko: '안녕히 계세요 → 안녕 / 잘 있어', text: 'goodbye (to someone who stays)' },
      { t: 'meaning', label: '4.', ko: '저 → 나', text: 'I, me' },
      { t: 'meaning', label: '5.', ko: '~ 씨 / You → 너', text: 'you' },
      { t: 'meaning', label: '6.', ko: '네 / 예 → 응 / 어', text: 'yes' },
      { t: 'meaning', label: '7.', ko: '아니요 → 아니 / 아니야', text: 'no' },
      { t: 'note', label: 'App note (not from the book)', text: 'The English glosses are ours (the book prints only the pairs). 잘 가 = “go well”, 잘 있어 = “stay well” — like 안녕히 가세요 / 계세요. With a subject particle, 나 + 가 = 내가 and 너 + 가 = 네가 (Workbook 27: 그거는 내가 할게). In 존댓말 there is no everyday word for “you”: use the name + 씨 or a title.' },

      { t: 'h2', text: 'Sample Dialogue' },
      { t: 'dialogue', track: '56', lines: [
        { id: 'd1', sp: 'A', ko: '밥 먹자. 배고파.', en: 'Let’s eat! I am hungry.' },
        { id: 'd2', sp: 'B', ko: '뭐 먹을까?', en: 'What shall we eat?' },
        { id: 'd3', sp: 'A', ko: '중국 음식 먹을까?', en: 'Shall we have Chinese food?' },
        { id: 'd4', sp: 'B', ko: '그래.', en: 'Sure.' },
      ] },
      { t: 'note', label: 'App note (not from the book)', text: '배고파 = 배고파요 without -요. 먹을까? = 먹을까요? in 반말 (Lesson 27). 그래 = sure, okay (casual; polite: 그래요 / 좋아요).' },

      { t: 'exercises', title: 'Exercises for Lesson 28', items: [
        { id: 'x1', q: 'Write in Korean using 반말 (casual language): Let’s do it.', hint: 'To do = 하다', ans: ['하자'], full: '하자.', skill: 'l28.form', lenient: false,
          diag: dg('하자', '하다', 'ja', 'wrong').concat([{ p: '해요', note: 'That is the polite “let’s” (Lesson 16). In 반말: 하자.' }]) },
        { id: 'x2', q: 'Write in Korean using 반말 (casual language): Let’s not do it.', hint: 'To not do (something) = 하지 말다', ans: ['하지 말자'], full: '하지 말자.', skill: 'l28.neg', lenient: false,
          soft: [{ p: '그거 하지 말자', note: 'Accepted.' }],
          diag: dg('하지 말자', '하다', 'jiMalja', 'wrongJiMalja').concat([{ p: '하지 마', note: '하지 마 = don’t do it (an order to the other person). Let’s not = 하지 말 + 자 → 하지 말자.' }]) },
        { id: 'x3', q: 'Write in Korean using 반말 (casual language): Let’s buy this.', hint: 'To buy = 사다', ans: ['이거 사자'], full: '이거 사자.', skill: 'l28.form', lenient: false,
          soft: [{ p: '(우리 |)이것(을|) 사자', note: 'Accepted.' }, { p: '우리 이거 사자', note: 'Accepted.' }],
          diag: [{ p: '이거 사요', note: 'That is the polite “let’s” (Lesson 16). In 반말: 이거 사자.' }, { p: '이거 사자요', note: '-자 is 반말 — no -요 after it. 이거 사자.' }, { p: '이거 살까', note: 'Shall we buy this? — close, but the exercise wants “let’s”: 이거 사자.' }] },
        { id: 'x4', q: 'Write in Korean using 반말 (casual language): Let’s wait a little longer.', hint: 'To wait = 기다리다', ans: ['조금만 더 기다리자'], full: '조금만 더 기다리자.', skill: 'l28.form', lenient: false,
          soft: [{ p: '(우리 |)(조금 |좀 |)더 기다리자', note: 'Accepted. The key: 조금만 더 기다리자.' }],
          diag: dg('조금만 더 기다리자', '기다리다', 'ja', 'wrong').concat([{ p: '조금만 더 기다려', note: '기다려 = wait (an order). Let’s wait = 기다리 + 자 → 기다리자.' }]) },
        { id: 'x5', q: 'Write in Korean using 반말 (casual language): Let’s go together.', hint: 'To go = 가다', ans: ['같이 가자'], full: '같이 가자.', skill: 'l28.form', lenient: false,
          soft: [{ p: '우리 같이 가자', note: 'Accepted.' }],
          diag: dg('같이 가자', '가다', 'ja', 'wrong').concat([{ p: '같이 가요', note: 'That is the polite “let’s” (Lesson 16). In 반말: 같이 가자.' }, { p: '같이 가', note: '같이 가 can be “let’s go together” in speech, but the lesson’s 반말 “let’s” is -자: 같이 가자.' }]) },
      ] },
    ],
  };
})();
