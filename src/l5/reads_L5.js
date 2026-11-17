/* reads_L5.js — Staff Group Chat + Neighborhood Notice Board for Lesson 5.
   {form|lemma} marks a word outside the lesson; tapping it shows gloss[lemma].
   ⚠ App-written texts: please have them checked by a native speaker. */
MM.reads[5] = [
  {
    id: 'l5.chat', kind: 'chat', title: 'Staff group chat', titleKo: '달빛마트 직원방',
    reward: { id: 'l5.sticker', ko: '고기 3킬로그램 스티커', en: 'Three-kilos-of-meat sticker', desc: 'For Friday. Approximately three kilos. Approximately.' },
    lines: [
      { who: 'minji', ko: '사장님, {금요일|금요일} {회식|회식}, 몇 시쯤 만날까요?', en: 'Mr. Park, around what time shall we meet for Friday’s staff dinner?' },
      { who: 'boss', ko: '일곱 시쯤 어때요?', en: 'How about around seven?' },
      { who: 'minji', ko: '좋아요! 몇 명쯤 와요?', en: 'Good! About how many people are coming?' },
      { who: 'boss', ko: '약 열 명이요. 김 기사님도 올 거예요.', en: 'About ten. Mr. Kim is going to come too.' },
      { who: 'minji', ko: '그럼 삼겹살은 3킬로그램 정도?', en: 'Then about 3 kilograms of pork belly?' },
      { who: 'boss', ko: '네. 그리고 {가게|가게}에서 {식당|식당}까지 4킬로미터쯤 {걸어요|걷다}. ㅋㅋ', en: 'Yes. And it’s about a 4-kilometer walk from the store. lol' },
      { who: 'minji', ko: '네? 택시 탈까요? ㅋㅋ', en: 'What? Shall we take a taxi? lol' },
    ],
    gloss: { '금요일': 'Friday', '회식': 'staff dinner (eating out together with coworkers)', '가게': 'store, shop', '걷다': 'to walk (걸어요: ㄷ-irregular, Lesson 26)' },
    qs: [
      { id: 'r5c.q1', type: 'enOpts', prompt: 'Around what time will they meet?', opts: ['Around 7.', 'At exactly 7.', 'Around 10.', 'Around 4.'], explain: '일곱 시쯤 어때요? = How about around seven?' },
      { id: 'r5c.q2', type: 'enOpts', prompt: 'How many people are coming?', opts: ['About ten.', 'About three.', 'About four.', 'Exactly ten.'], explain: '약 열 명 = about ten people (약 before the noun).' },
      { id: 'r5c.q3', type: 'enOpts', prompt: 'Why does Minji suggest a taxi?', opts: ['The restaurant is about 4 km from the store.', 'It will rain.', 'Mr. Kim is a taxi driver and needs money.', 'They will buy 3 kg of meat.'], explain: '4킬로미터쯤 걸어요 = it is about a 4 km walk. 탈까요? = shall we take (a taxi)?' },
    ],
  },
  {
    id: 'l5.board', kind: 'board', title: 'Neighborhood notice board', titleKo: '동네 게시판',
    reward: { id: 'l5.notice', ko: '달빛 마라톤 번호표', en: 'Moonlight Marathon bib', desc: 'Number 100. About.' },
    heading: '달빛 {마라톤|마라톤}',
    lines: [
      { ko: '이번 {토요일|토요일} 아침 일곱 시쯤 {시작해요|시작하다}.', en: 'It starts around 7 a.m. this Saturday.' },
      { ko: '공원에서 약 4킬로미터 달려요.', en: 'We run about 4 kilometers from the park.' },
      { ko: '{작년|작년}에 100명쯤 왔어요!', en: 'About 100 people came last year!' },
      { ko: '{참가비|참가비}: 천 원 정도? 아니요, 없어요!', en: 'Participation fee: about 1,000 won? No, there isn’t one!' },
      { ko: '달리고, 같이 밥 먹을까요?', en: 'Shall we run, and then eat together?' },
    ],
    gloss: { '마라톤': 'marathon, running event', '토요일': 'Saturday', '시작하다': 'to start (Lesson 4)', '참가비': 'participation fee', '작년': 'last year' },
    qs: [
      { id: 'r5b.q1', type: 'enOpts', prompt: 'When does it start?', opts: ['Around 7 a.m. on Saturday.', 'At exactly 7 p.m.', 'Around 4 a.m.', 'About a month from now.'], explain: '아침 일곱 시쯤 시작해요.' },
      { id: 'r5b.q2', type: 'enOpts', prompt: 'How far do they run?', opts: ['About 4 km.', 'About 100 m.', 'Exactly 4 km.', 'About 7 km.'], explain: '약 4킬로미터 = about 4 km.' },
      { id: 'r5b.q3', type: 'enOpts', prompt: 'How much does it cost?', opts: ['Nothing.', 'About 1,000 won.', 'About 100 won.', 'About 4,000 won.'], explain: '천 원 정도? 아니요, 없어요! The fee is free.' },
    ],
  },
];
