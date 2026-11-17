/* reads_L7.js — Staff Group Chat + Neighborhood Notice Board for Lesson 7.
   {form|lemma} marks a word outside the lesson; tapping it shows gloss[lemma].
   ⚠ App-written texts: please have them checked by a native speaker. */
MM.reads[7] = [
  {
    id: 'l7.chat', kind: 'chat', title: 'Staff group chat', titleKo: '달빛마트 직원방',
    reward: { id: 'l7.sticker', ko: '감기약 스티커', en: 'Cold-medicine sticker', desc: 'A cartoon pill giving a thumbs-up. Minji sent it twelve times.' },
    lines: [
      { who: 'minji', ko: '사장님, 저 내일 {늦게|늦다} 가요. 미안해요.', en: 'Mr. Park, I’ll come in late tomorrow. Sorry.' },
      { who: 'boss', ko: '왜요? {무슨 일|무슨 일} 있어요?', en: 'Why? Is something wrong?' },
      { who: 'minji', ko: '요즘 머리가 아파서 내일 아침에 {병원|병원}에 가요.', en: 'My head hurts these days, so I’m going to the hospital tomorrow morning.' },
      { who: 'boss', ko: '아이고, 병원에 가서 {약|약} 꼭 먹어요.', en: 'Oh dear. Go to the hospital and be sure to take medicine.' },
      { who: 'minji', ko: '네! 병원에 가서 약 먹고, 오후에 갈게요.', en: 'Yes! I’ll go to the hospital, take medicine, and come in the afternoon.' },
      { who: 'boss', ko: '알았어요. 내일은 제가 {일찍|일찍} 가서 가게 {열게요|열다}.', en: 'Okay. Tomorrow I’ll go early and open the store.' },
      { who: 'minji', ko: '사장님 {최고|최고}! ㅋㅋ', en: 'You’re the best, Mr. Park! lol' },
    ],
    gloss: { '늦다': 'to be late; 늦게 = late (adverb)', '무슨 일': 'what matter; 무슨 일 있어요? = is something wrong?', '병원': 'hospital, clinic', '약': 'medicine (and also “about” from Lesson 5!)', '일찍': 'early', '열다': 'to open: 열게요 = I’ll open (ㄹ-stem + 게요)', '최고': 'the best' },
    qs: [
      { id: 'r7c.q1', type: 'enOpts', prompt: 'Why is Minji going to the hospital?', opts: ['Her head hurts these days.', 'She is busy.', 'It is raining.', 'Mr. Park is sick.'], explain: '요즘 머리가 아파서 = my head hurts these days, so… (reason).' },
      { id: 'r7c.q2', type: 'enOpts', prompt: 'What will Minji do tomorrow, in order?', opts: ['Go to the hospital, take medicine, then come to work in the afternoon.', 'Come to work, then go to the hospital.', 'Stay at home all day.', 'Take medicine at the store.'], explain: '병원에 가서 약 먹고, 오후에 갈게요: -아서 (go there, then) and -고 (and).' },
      { id: 'r7c.q3', type: 'enOpts', prompt: 'What will Mr. Park do?', opts: ['Go early and open the store.', 'Go to the hospital with Minji.', 'Close the store tomorrow.', 'Buy medicine for Minji.'], explain: '제가 일찍 가서 가게 열게요 = I’ll go early and open the store (sequence + Lesson 6 게요).' },
    ],
  },
  {
    id: 'l7.board', kind: 'board', title: 'Neighborhood notice board', titleKo: '동네 게시판',
    reward: { id: 'l7.notice', ko: '달빛 우산', en: 'Moonlight umbrella', desc: 'Navy blue with a mint handle. You will return it. Probably.' },
    heading: '비가 와서 우산이 없어요?',
    lines: [
      { ko: '지난주에 비가 많이 와서 우산이 다 {팔렸어요|팔리다}.', en: 'It rained a lot last week, so all the umbrellas sold out.' },
      { ko: '그래서 사장님이 우산 50개를 사서 가게 앞에 놓았어요.', en: 'So the owner bought 50 umbrellas and put them in front of the store.' },
      { ko: '우산이 없어요? 하나 {가져가서|가져가다} 쓰세요.', en: 'No umbrella? Take one and use it.' },
      { ko: '다음에 와서 {돌려주세요|돌려주다}.', en: 'Next time, come and give it back.' },
      { ko: '라면(고양이)은 {빌려줄|빌려주다} 수 없어요. – 달빛마트', en: 'Ramyeon (the cat) cannot be lent out. – Moonlight Mart' },
    ],
    gloss: { '팔리다': 'to be sold: 다 팔렸어요 = all sold out', '가져가다': 'to take (with you)', '돌려주다': 'to give back, to return', '빌려주다': 'to lend' },
    qs: [
      { id: 'r7b.q1', type: 'enOpts', prompt: 'Why were all the umbrellas sold out?', opts: ['It rained a lot last week.', 'They were very cheap.', 'Ramyeon broke them.', 'The delivery was late.'], explain: '비가 많이 와서 = it rained a lot, so… (reason).' },
      { id: 'r7b.q2', type: 'enOpts', prompt: 'What should you do after you take an umbrella?', opts: ['Come back next time and return it.', 'Keep it.', 'Buy a new one for the store.', 'Give it to the cat.'], explain: '다음에 와서 돌려주세요 = come next time and give it back (sequence).' },
      { id: 'r7b.q3', type: 'enOpts', prompt: 'What can’t you borrow?', opts: ['Ramyeon the cat.', 'An umbrella.', 'Instant ramen.', 'A bag.'], explain: '라면(고양이)은 빌려줄 수 없어요: 라면 here is the cat, not the noodles.' },
    ],
  },
];
