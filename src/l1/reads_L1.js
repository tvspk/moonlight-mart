/* reads_L1.js — Staff Group Chat + Neighborhood Notice Board for Lesson 1.
   {form|lemma} marks a word outside the lesson; tapping it shows gloss[lemma]. */
MM.reads[1] = [
  {
    id: 'l1.chat', kind: 'chat', title: 'Staff group chat', titleKo: '달빛마트 직원방',
    reward: { id: 'l1.sticker', ko: '수고했어요 스티커', en: '“Good work” sticker', desc: 'Mr. Park sends it after every message. Every single one.' },
    lines: [
      { who: 'boss', ko: '민지 씨, 오늘 어땠어요?', en: 'Minji, how was today?' },
      { who: 'minji', ko: '{바빴어요|바쁘다}! 너무 바빴어요!', en: 'Busy! Really, really busy!' },
      { who: 'minji', ko: '그리고 라면이 {또|또} {선반|선반}에서 자요.', en: 'And Ramyeon is sleeping on the shelf again.' },
      { who: 'boss', ko: '아이고… 라면은 너무 커요.', en: 'Oh dear… Ramyeon is too big.' },
      { who: 'minji', ko: '네. 그런데 손님들이 라면을 너무 {좋아해요|좋아하다}.', en: 'Yes. But customers really love Ramyeon.' },
      { who: 'boss', ko: '새 직원은 오늘 밤 {처음|처음} 와요.', en: 'The new staff member comes for the first time tonight.' },
      { who: 'minji', ko: '사장님, 커피 머신이 너무 시끄러워요.', en: 'Boss, the coffee machine is too noisy.' },
      { who: 'boss', ko: '네, 내일 {고쳐요|고치다}.', en: 'OK, I’ll fix it tomorrow.' },
    ],
    gloss: { '바쁘다': 'to be busy (바빴어요 = was busy)', '또': 'again', '선반': 'shelf', '좋아하다': 'to like, to love', '처음': 'for the first time', '고치다': 'to fix, to repair' },
    qs: [
      { id: 'r1.q1', type: 'enOpts', prompt: 'How was Minji’s day?', opts: ['Really busy.', 'Too quiet.', 'Too hot.', 'Really easy.'], explain: '너무 바빴어요 = it was really busy.' },
      { id: 'r1.q2', type: 'enOpts', prompt: 'Where is the cat sleeping?', opts: ['On the shelf, again.', 'At the counter.', 'In Mr. Park’s car.', 'Upstairs at Grandma’s.'], explain: '또 선반에서 자요 = sleeps on the shelf again.' },
      { id: 'r1.q3', type: 'enOpts', prompt: 'What is wrong with the coffee machine?', opts: ['It’s too noisy. Mr. Park will fix it tomorrow.', 'The coffee is too bitter.', 'It’s too expensive.', 'It’s too slow. Minji fixed it.'], explain: '커피 머신이 너무 시끄러워요. 내일 고쳐요.' },
    ],
  },
  {
    id: 'l1.board', kind: 'board', title: 'Neighborhood notice board', titleKo: '동네 게시판',
    reward: { id: 'l1.notice', ko: '고양이 주의 스티커', en: '“Beware of cat” sticker', desc: 'Handwritten by Grandma. Laminated by Mr. Park.' },
    heading: '고양이 {주의|주의}!',
    lines: [
      { ko: '안녕하세요. 2{층|층} 할머니예요.', en: 'Hello. I’m the grandma from the 2nd floor.' },
      { ko: '달빛마트 고양이 이름은 라면이에요.', en: 'The Moonlight Mart cat’s name is Ramyeon.' },
      { ko: '라면은 너무 커요. 그리고 {항상|항상} 자요.', en: 'Ramyeon is very big. And he is always asleep.' },
      { ko: '라면은 컵라면 {선반|선반}에서 자요.', en: 'Ramyeon sleeps on the cup-ramen shelf.' },
      { ko: '라면을 {깨우지 마세요|깨우다}.', en: 'Please don’t wake Ramyeon.' },
      { ko: '그리고 밤에 음악 소리가 너무 커요!', en: 'And at night, the music is too loud!' },
      { ko: '그런데… 커피는 너무 맛있어요.', en: 'But… the coffee is really good.' },
    ],
    gloss: { '주의': 'caution, beware', '층': 'floor (of a building)', '항상': 'always', '선반': 'shelf', '깨우다': 'to wake (someone) up; -지 마세요 = please don’t' },
    qs: [
      { id: 'r2.q1', type: 'enOpts', prompt: 'Who wrote the notice?', opts: ['The grandma from the 2nd floor.', 'Mr. Park.', 'The inspector.', 'Minji.'], explain: '2층 할머니예요.' },
      { id: 'r2.q2', type: 'enOpts', prompt: 'What does she ask customers not to do?', opts: ['Wake the cat.', 'Buy cup ramen.', 'Drink the coffee.', 'Play music.'], explain: '라면을 깨우지 마세요.' },
      { id: 'r2.q3', type: 'enOpts', prompt: 'What does she think of the coffee?', opts: ['It’s really good.', 'It’s too bitter.', 'It’s too expensive.', 'It’s too loud.'], explain: '커피는 너무 맛있어요: positive 너무 = really.' },
    ],
  },
];
