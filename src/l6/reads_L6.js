/* reads_L6.js — Staff Group Chat + Neighborhood Notice Board for Lesson 6.
   {form|lemma} marks a word outside the lesson; tapping it shows gloss[lemma].
   ⚠ App-written texts: please have them checked by a native speaker. */
MM.reads[6] = [
  {
    id: 'l6.chat', kind: 'chat', title: 'Staff group chat', titleKo: '달빛마트 직원방',
    reward: { id: 'l6.sticker', ko: '등산화 스티커', en: 'Hiking-boot sticker', desc: 'Mr. Park bought real ones. Size: about 270.' },
    lines: [
      { who: 'minji', ko: '저는 {토요일|토요일}에 {등산|등산} 갈 거예요. 달빛 등산 {모임|모임}이에요!', en: 'I’m going hiking on Saturday. It’s the Moonlight hiking group!' },
      { who: 'boss', ko: '아, 그 {게시판|게시판} 모임? 몇 시에 만나요?', en: 'Oh, that group from the notice board? What time do you meet?' },
      { who: 'minji', ko: '아침 7시쯤이요. 사장님도 같이 가요!', en: 'Around 7 a.m. Come along too, Mr. Park!' },
      { who: 'boss', ko: '음… 저는 토요일에 잘 거예요. ㅋㅋ', en: 'Hmm… I’m going to sleep on Saturday. lol' },
      { who: 'minji', ko: '김밥 있어요! 제가 만들 거예요.', en: 'There’s kimbap! I’m going to make it.' },
      { who: 'boss', ko: '김밥이요? 그럼 저도 갈게요!', en: 'Kimbap? Then I’ll come too!' },
      { who: 'minji', ko: 'ㅋㅋ 알았어요. 사장님 김밥도 만들게요.', en: 'lol Okay. I’ll make kimbap for you too, Mr. Park.' },
    ],
    gloss: { '토요일': 'Saturday', '등산': 'hiking (mountain climbing)', '모임': 'group, club, meeting', '게시판': 'notice board' },
    qs: [
      { id: 'r6c.q1', type: 'enOpts', prompt: 'What was Mr. Park’s first plan for Saturday?', opts: ['To sleep.', 'To go hiking.', 'To make kimbap.', 'To work at the store.'], explain: '저는 토요일에 잘 거예요 = my plan: sleep.' },
      { id: 'r6c.q2', type: 'enOpts', prompt: 'Why does he change his mind?', opts: ['Because Minji will bring kimbap.', 'Because it will rain.', 'Because Mr. Kim is going.', 'Because the store is closed.'], explain: '김밥이요? 그럼 저도 갈게요! He changes his plan because of what Minji said: -(으)ㄹ게요.' },
      { id: 'r6c.q3', type: 'enOpts', prompt: 'Why does Minji say 만들 거예요 first, but 만들게요 at the end?', opts: ['First it is her plan; at the end she reacts to Mr. Park.', 'First is past, then future.', 'She is more polite the first time.', 'There is no difference.'], explain: '만들 거예요 = her plan. 사장님 김밥도 만들게요 = okay, since you’re coming, I’ll make yours too.' },
    ],
  },
  {
    id: 'l6.board', kind: 'board', title: 'Neighborhood notice board', titleKo: '동네 게시판',
    reward: { id: 'l6.notice', ko: '공원 청소 장갑', en: 'Park clean-up gloves', desc: 'One pair. Ramyeon has claimed the left glove.' },
    heading: '공원 청소, 누가 도와줄 거예요?',
    lines: [
      { ko: '이번 {일요일|일요일}에 공원 청소할 거예요.', en: 'We are going to clean the park this Sunday.' },
      { ko: '아침 9시쯤 공원 앞에서 만나요.', en: 'We meet in front of the park around 9 a.m.' },
      { ko: '{봉투|봉투}는 저희가 줄 거예요.', en: 'We will give out the bags.' },
      { ko: '달빛마트: “물은 저희가 {드릴게요|드리다}!”', en: 'Moonlight Mart: “We’ll provide the water!”' },
      { ko: '할머니: “떡은 제가 만들게요!”', en: 'Grandma: “I’ll make the rice cakes!”' },
      { ko: '여러분도 같이 할까요?', en: 'Everyone, shall we do it together?' },
    ],
    gloss: { '일요일': 'Sunday', '봉투': '(plastic) bag', '드리다': 'to give (humble form of 주다): 드릴게요 = we’ll give you' },
    qs: [
      { id: 'r6b.q1', type: 'enOpts', prompt: 'What is going to happen on Sunday?', opts: ['A park clean-up.', 'A marathon.', 'Grandma’s birthday.', 'A hiking trip.'], explain: '이번 일요일에 공원 청소할 거예요.' },
      { id: 'r6b.q2', type: 'enOpts', prompt: 'What will Moonlight Mart bring?', opts: ['Water.', 'Bags.', 'Rice cakes.', 'Kimbap.'], explain: '물은 저희가 드릴게요 (offering, as a reaction to the notice).' },
      { id: 'r6b.q3', type: 'enOpts', prompt: 'Why do the store and Grandma use -(으)ㄹ게요?', opts: ['They are volunteering in reaction to the notice.', 'They had planned it for years.', 'It is the past tense.', 'They are asking a question.'], explain: '드릴게요, 만들게요 = deciding to help because of the request.' },
    ],
  },
];
