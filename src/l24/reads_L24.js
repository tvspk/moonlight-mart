/* reads_L24.js — Staff Group Chat + Neighborhood Notice Board for Lesson 24 (르 irregular).
   {form|lemma} marks a word outside the lesson; tapping it shows gloss[lemma].
   App-written texts (NOT yet checked by a native speaker). */
MM.reads[24] = [
  {
    id: 'l24.chat', kind: 'chat', title: 'Staff group chat', titleKo: '달빛마트 직원방',
    reward: { id: 'l24.sticker', ko: '케이크 발자국 스티커', en: 'Paw-print-on-cake sticker', desc: 'Evidence. Nobody has been charged.' },
    lines: [
      { who: 'minji', ko: '사장님, {생신|생신} {축하드려요|축하드리다}! 케이크 맛있었어요?', en: 'Mr. Park, happy birthday! Was the cake good?' },
      { who: 'boss', ko: '네, 정말 고마워요. 근데 누가 케이크 골랐어요?', en: 'Yes, thank you so much. But who chose the cake?' },
      { who: 'minji', ko: '제가 골랐어요! 초콜릿 케이크하고 딸기 케이크… 고르기 정말 어려웠어요.', en: 'I chose it! Chocolate cake and strawberry cake… it was really hard to choose.' },
      { who: 'boss', ko: '그리고 김 기사님이 노래를 정말 크게 불렀어요. ㅋㅋ', en: 'And Mr. Kim sang really loudly. lol' },
      { who: 'minji', ko: '할머니도 같이 불렀어요? 할머니 노래 잘 부르는데!', en: 'Did Grandma sing along too? She sings well!' },
      { who: 'boss', ko: '네. 근데 라면은 노래 안 불렀어요. 케이크만 먹었어요.', en: 'Yes. But Ramyeon didn’t sing. He just ate cake.' },
    ],
    gloss: { '생신': 'birthday (honorific of 생일)', '축하드리다': 'to congratulate (humble form of 축하하다)' },
    qs: [
      { id: 'r24c.q1', type: 'enOpts', prompt: 'Who chose the cake?', opts: ['Minji.', 'Mr. Park.', 'Mr. Kim.', 'Ramyeon.'], explain: '제가 골랐어요! (고르다 → 골랐어요)' },
      { id: 'r24c.q2', type: 'enOpts', prompt: 'Why was it hard for Minji?', opts: ['She had to choose between two cakes.', 'She didn’t know the shop.', 'The cake was too fast.', 'She had to cut the cake.'], explain: '초콜릿 케이크하고 딸기 케이크… 고르기 정말 어려웠어요.' },
      { id: 'r24c.q3', type: 'enOpts', prompt: 'What did Mr. Kim do?', opts: ['He sang really loudly.', 'He cut the cake.', 'He chose the present.', 'He called Mr. Park.'], explain: '김 기사님이 노래를 정말 크게 불렀어요. (부르다 → 불렀어요)' },
    ],
  },
  {
    id: 'l24.board', kind: 'board', title: 'Neighborhood notice board', titleKo: '동네 게시판',
    reward: { id: 'l24.notice', ko: '머리 자르기 쿠폰', en: 'Haircut coupon', desc: '50% off. Valid for humans only. (Ramyeon was turned away.)' },
    heading: '{미용실|미용실} 새로 열었어요!',
    lines: [
      { ko: '머리를 짧게 자르고 싶어요? 아직 잘 몰라요? 괜찮아요!', en: 'Do you want to cut your hair short? You don’t know yet? That’s okay!' },
      { ko: '사진을 보고 같이 골라요.', en: 'Let’s look at photos and choose together.' },
      { ko: '저희 미용실은 빨라요. 그래도 서두르지 않아요.', en: 'Our salon is fast. Still, we don’t rush.' },
      { ko: '이번 주에 오면 머리를 반값에 잘라 드려요.', en: 'If you come this week, we cut your hair for half price.' },
      { ko: '문 앞에 있는 벨을 누르고 들어오세요.', en: 'Press the bell in front of the door and come in.' },
    ],
    gloss: { '미용실': 'hair salon', '짧게': 'short (짧다 = to be short)', '반값': 'half price' },
    qs: [
      { id: 'r24b.q1', type: 'enOpts', prompt: 'What happens if you don’t know what haircut you want?', opts: ['You look at photos and choose together.', 'You can’t come in.', 'They cut it short.', 'You pay half price.'], explain: '사진을 보고 같이 골라요.' },
      { id: 'r24b.q2', type: 'enOpts', prompt: 'What is the offer this week?', opts: ['A haircut for half price.', 'A free haircut.', 'A free photo.', 'A fast haircut for cats.'], explain: '이번 주에 오면 머리를 반값에 잘라 드려요.' },
      { id: 'r24b.q3', type: 'enOpts', prompt: 'How do you enter the salon?', opts: ['Press the bell in front of the door and come in.', 'Call the salon first.', 'Wait outside until they call you.', 'Hurry in through the back door.'], explain: '벨을 누르고 들어오세요. (누르다 + -고: 르 stays)' },
    ],
  },
];
