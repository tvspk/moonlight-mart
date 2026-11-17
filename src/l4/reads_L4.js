/* reads_L4.js — Staff Group Chat + Neighborhood Notice Board for Lesson 4.
   {form|lemma} marks a word outside the lesson; tapping it shows gloss[lemma].
   ⚠ App-written texts: please have them checked by a native speaker. */
MM.reads[4] = [
  {
    id: 'l4.chat', kind: 'chat', title: 'Staff group chat', titleKo: '달빛마트 직원방',
    reward: { id: 'l4.sticker', ko: '회식 스티커', en: 'Staff-dinner sticker', desc: 'A tiny grill. It smells like pork belly if you scratch it. It does not.' },
    lines: [
      { who: 'boss', ko: '여러분, {이번 주|이번 주} {금요일|금요일}에 같이 저녁 먹을까요?', en: 'Everyone, shall we have dinner together this Friday?' },
      { who: 'minji', ko: '좋아요! 뭐 먹을까요?', en: 'Great! What shall we eat?' },
      { who: 'boss', ko: '삼겹살 먹을까요? {치킨|치킨} 먹을까요?', en: 'Shall we have pork belly? Or chicken?' },
      { who: 'minji', ko: '삼겹살이요! {그런데|그런데} 김 기사님도 올까요?', en: 'Pork belly! But I wonder if Mr. Kim will come too?' },
      { who: 'boss', ko: '{글쎄요|글쎄요}. 제가 전화할까요?', en: 'Hmm, I don’t know. Shall I call him?' },
      { who: 'minji', ko: '네! 그리고 라면은요? 라면도 갈까요? ㅋㅋ', en: 'Yes! And Ramyeon? Shall Ramyeon come too? lol' },
      { who: 'boss', ko: '라면은 가게에 있을 거예요. ㅋㅋ', en: 'Ramyeon will stay at the store. lol' },
    ],
    gloss: { '이번 주': 'this week', '금요일': 'Friday', '치킨': '(fried) chicken', '그런데': 'but, by the way', '글쎄요': 'hmm, well… I’m not sure' },
    qs: [
      { id: 'r4c.q1', type: 'enOpts', prompt: 'When does Mr. Park suggest having dinner?', opts: ['This Friday.', 'Tonight.', 'Tomorrow morning.', 'Next week.'], explain: '이번 주 금요일에 같이 저녁 먹을까요?' },
      { id: 'r4c.q2', type: 'enOpts', prompt: 'Which two options does he give?', opts: ['Pork belly or chicken.', 'Kimbap or ramen.', 'Coffee or tea.', 'Milk or juice.'], explain: '삼겹살 먹을까요? 치킨 먹을까요?' },
      { id: 'r4c.q3', type: 'enOpts', prompt: 'Who offers to call Mr. Kim?', opts: ['Mr. Park.', 'Minji.', 'You.', 'Nobody.'], explain: '제가 전화할까요? = Shall I call (him)?' },
    ],
  },
  {
    id: 'l4.board', kind: 'board', title: 'Neighborhood notice board', titleKo: '동네 게시판',
    reward: { id: 'l4.notice', ko: '등산 모임 전단지', en: 'Hiking-club flyer', desc: 'Mr. Lee took one. He will not go. He will think about it all week.' },
    heading: '같이 산에 갈까요?',
    lines: [
      { ko: '안녕하세요! 달빛 {등산|등산} {모임|모임}이에요.', en: 'Hello! We are the Moonlight hiking group.' },
      { ko: '이번 {토요일|토요일}에 같이 산에 갈까요?', en: 'Shall we go to the mountain together this Saturday?' },
      { ko: '아침 7시에 은행 앞에서 만나요.', en: 'We meet at 7 a.m. in front of the bank.' },
      { ko: '비가 올까요? {걱정하지 마세요|걱정하다}. 우산 있어요!', en: 'Will it rain? Don’t worry. We have umbrellas!' },
      { ko: '산 위에서 김밥 먹고, 사진 찍어요.', en: 'At the top of the mountain we eat kimbap and take pictures.' },
      { ko: '{참가비|참가비}: 없어요!', en: 'Participation fee: none!' },
    ],
    gloss: { '등산': 'hiking (mountain climbing)', '모임': 'group, club, meeting', '토요일': 'Saturday', '걱정하다': 'to worry; -지 마세요 = please don’t', '참가비': 'participation fee' },
    qs: [
      { id: 'r4b.q1', type: 'enOpts', prompt: 'What is the group inviting people to do?', opts: ['Go to the mountain together this Saturday.', 'Buy umbrellas.', 'Eat at Moonlight Mart.', 'Take a photo class.'], explain: '이번 토요일에 같이 산에 갈까요?' },
      { id: 'r4b.q2', type: 'enOpts', prompt: 'Where and when do they meet?', opts: ['In front of the bank at 7 a.m.', 'Behind the bank at 7 p.m.', 'At the top of the mountain at noon.', 'In front of Moonlight Mart at 6 a.m.'], explain: '아침 7시에 은행 앞에서 만나요 (Lesson 3: 앞에서 + action).' },
      { id: 'r4b.q3', type: 'enOpts', prompt: 'What if it rains?', opts: ['Don’t worry: they have umbrellas.', 'The hike is cancelled.', 'They meet at the store instead.', 'They go on Sunday.'], explain: '비가 올까요? 걱정하지 마세요. 우산 있어요!' },
    ],
  },
];
