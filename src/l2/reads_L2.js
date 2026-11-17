/* reads_L2.js — Staff Group Chat + Neighborhood Notice Board for Lesson 2.
   {form|lemma} marks a word outside the lesson; tapping it shows gloss[lemma].
   ⚠ App-written texts: please have them checked by a native speaker. */
MM.reads[2] = [
  {
    id: 'l2.chat', kind: 'chat', title: 'Staff group chat', titleKo: '달빛마트 직원방',
    reward: { id: 'l2.sticker', ko: '냉장고 수리 완료 스티커', en: '“Fridge fixed” sticker', desc: 'Mr. Park printed fifty of them. There is one fridge.' },
    lines: [
      { who: 'boss', ko: '여러분, 내일 냉장고 {기사님|기사님}이 와요.', en: 'Everyone, the fridge repairman is coming tomorrow.' },
      { who: 'minji', ko: '네! 오늘 우유 {정리하고|정리하다}, 냉장고 청소했어요.', en: 'OK! Today I sorted the milk and cleaned the fridge.' },
      { who: 'boss', ko: '고마워요. 바나나 우유는요?', en: 'Thank you. What about the banana milk?' },
      { who: 'minji', ko: '{다|다} {팔았어요|팔다}. 경찰관님이 다섯 개 사고, 할머니가 세 개 샀어요.', en: 'All sold. The officer bought five, and Grandma bought three.' },
      { who: 'boss', ko: '와… 내일 바나나 우유 사고, 김밥도 살 거예요.', en: 'Wow… tomorrow I’ll buy banana milk, and kimbap too.' },
      { who: 'minji', ko: '사장님, 라면 {사료|사료}도 사요!', en: 'Boss, buy cat food for Ramyeon too!' },
      { who: 'boss', ko: '네네. 라면은 매일 먹고 자요. {부러워요|부럽다}.', en: 'Yes, yes. Ramyeon eats and sleeps every day. I’m jealous.' },
    ],
    gloss: { '기사님': 'repairman, technician (also: driver) + 님', '정리하다': 'to sort, to tidy up', '다': 'all, everything', '팔다': 'to sell (팔았어요 = sold)', '사료': 'pet food', '부럽다': 'to be jealous, envious (부러워요)' },
    qs: [
      { id: 'r2c.q1', type: 'enOpts', prompt: 'What did Minji do today?', opts: ['She sorted the milk and cleaned the fridge.', 'She fixed the fridge.', 'She bought banana milk.', 'She drank all the banana milk.'], explain: '우유 정리하고, 냉장고 청소했어요.' },
      { id: 'r2c.q2', type: 'enOpts', prompt: 'Who bought the banana milk?', opts: ['The officer (5) and Grandma (3).', 'Mr. Park and Minji.', 'Only the officer.', 'Sua and Mr. Lee.'], explain: '경찰관님이 다섯 개 사고, 할머니가 세 개 샀어요.' },
      { id: 'r2c.q3', type: 'enOpts', prompt: 'What will Mr. Park buy tomorrow?', opts: ['Banana milk and kimbap (and cat food).', 'A new fridge.', 'Only cat food.', 'Coffee and donuts.'], explain: '바나나 우유 사고, 김밥도 살 거예요.' },
    ],
  },
  {
    id: 'l2.board', kind: 'board', title: 'Neighborhood notice board', titleKo: '동네 게시판',
    reward: { id: 'l2.notice', ko: '서점 책갈피', en: 'Bookstore bookmark', desc: 'Free with any book. Smells faintly of banana milk.' },
    heading: '서점 {세일|세일}!',
    lines: [
      { ko: '안녕하세요. 달빛마트 옆 서점이에요.', en: 'Hello. We are the bookstore next to Moonlight Mart.' },
      { ko: '{이번 주|이번 주}에 책이 싸고 좋아요!', en: 'This week our books are cheap and good!' },
      { ko: '책 사고, 달빛마트에서 커피 마시고, 공부하세요!', en: 'Buy a book, have a coffee at Moonlight Mart, and study!' },
      { ko: '한국어 책도 있어요. 재미있고 쉬워요.', en: 'We have Korean books too. They are fun and easy.' },
      { ko: '{영업시간|영업시간}: 오전 10시 – 오후 9시', en: 'Opening hours: 10 a.m. – 9 p.m.' },
      { ko: 'P.S. 라면 씨, 책 위에서 {자지 마세요|자다}!', en: 'P.S. Mr. Ramyeon, please don’t sleep on the books!' },
    ],
    gloss: { '세일': 'sale', '이번 주': 'this week', '영업시간': 'opening hours', '자다': 'to sleep; -지 마세요 = please don’t' },
    qs: [
      { id: 'r2b.q1', type: 'enOpts', prompt: 'Who wrote this notice?', opts: ['The bookstore next to Moonlight Mart.', 'Mr. Park.', 'Sua.', 'The library.'], explain: '달빛마트 옆 서점이에요.' },
      { id: 'r2b.q2', type: 'enOpts', prompt: 'What do they say about their Korean books?', opts: ['They are fun and easy.', 'They are cheap but difficult.', 'They are sold out.', 'They are only for students.'], explain: '재미있고 쉬워요.' },
      { id: 'r2b.q3', type: 'enOpts', prompt: 'What do they ask Ramyeon?', opts: ['Not to sleep on the books.', 'To come and buy a book.', 'Not to drink the coffee.', 'To go home and sleep.'], explain: '책 위에서 자지 마세요 = please don’t sleep on the books.' },
    ],
  },
];
