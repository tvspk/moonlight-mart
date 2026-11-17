/* reads_L15.js — Staff Group Chat + Neighborhood Notice Board for Lesson 15.
   {form|lemma} marks a word outside the lesson; tapping it shows gloss[lemma].
   App-written texts (NOT yet checked by a native speaker). */
MM.reads[15] = [
  {
    id: 'l15.chat', kind: 'chat', title: 'Staff group chat', titleKo: '달빛마트 직원방',
    reward: { id: 'l15.sticker', ko: '고양이 영수증', en: 'Cat receipt', desc: 'The first receipt from the fixed printer. A blurry orange tail. Framed.' },
    lines: [
      { who: 'boss', ko: '{프린터|프린터} 고쳤어요? 정말 고마워요!', en: 'You fixed the printer? Thank you so much!' },
      { who: 'minji', ko: '사장님, 내일 비가 많이 올 거예요.', en: 'Mr. Park, it’s going to rain a lot tomorrow.' },
      { who: 'boss', ko: '그래요? 그럼 우산을 문 앞에 놓으세요. 많이 팔 거예요.', en: 'Really? Then put the umbrellas in front of the door. We’ll sell a lot.' },
      { who: 'minji', ko: '그런데 저 내일 {병원|병원}에 가요. 그래서 조금 늦게 와요. 괜찮아요?', en: 'By the way, I’m going to the hospital tomorrow. So I’ll come a little late. Is that okay?' },
      { who: 'boss', ko: '그럼요! 천천히 오세요.', en: 'Of course! Come slowly (take your time).' },
      { who: 'minji', ko: '그럼 라면 밥은 누가 줘요?', en: 'Then who feeds Ramyeon?' },
      { who: 'boss', ko: '라면은 걱정하지 마세요. 할머니가 줄 거예요. ㅋㅋ', en: 'Don’t worry about Ramyeon. Grandma will feed him. lol' },
    ],
    gloss: { '프린터': 'printer', '병원': 'hospital' },
    qs: [
      { id: 'r15c.q1', type: 'enOpts', prompt: 'Why does Mr. Park want the umbrellas by the door?', opts: ['Because it will rain a lot tomorrow.', 'Because the umbrella stand is broken.', 'Because Minji is late.', 'Because Grandma wants one.'], explain: '내일 비가 많이 올 거예요. — 그럼 우산을 문 앞에 놓으세요.' },
      { id: 'r15c.q2', type: 'enOpts', prompt: 'What does Mr. Park answer when Minji asks to come late?', opts: ['Of course, take your time.', 'No, come early.', 'Then don’t come.', 'Then go to the hospital at night.'], explain: '그럼요! = of course! 천천히 오세요 = take your time.' },
      { id: 'r15c.q3', type: 'enOpts', prompt: 'Who will feed Ramyeon?', opts: ['Grandma.', 'Minji.', 'Mr. Park.', 'Nobody.'], explain: '할머니가 줄 거예요.' },
    ],
  },
  {
    id: 'l15.board', kind: 'board', title: 'Neighborhood notice board', titleKo: '동네 게시판',
    reward: { id: 'l15.notice', ko: '냉면 쿠폰', en: 'Cold noodle coupon', desc: 'One free bowl. Expires before you will have a free lunch.' },
    heading: '우체국 옆 냉면 집',
    lines: [
      { ko: '우체국 옆에 새 냉면 집이 {생겼어요|생기다}!', en: 'A new cold noodle restaurant opened next to the post office!' },
      { ko: '더워요? 그럼 차가운 냉면 어때요?', en: 'Is it hot? Then how about cold noodles?' },
      { ko: '점심 시간에 바빠요? 그러면 {배달|배달}도 해요.', en: 'Busy at lunchtime? Then we also deliver.' },
      { ko: '혼자 오는 손님도 괜찮아요.', en: 'Customers who come alone are welcome too.' },
      { ko: '이 종이를 가져오세요. 그럼 천 원 {할인|할인}해 드려요!', en: 'Bring this paper. Then we’ll give you a 1,000-won discount!' },
    ],
    gloss: { '생기다': 'to come into being, to open (a new place)', '배달': 'delivery', '할인': 'discount; 할인해 드려요 = we give (you) a discount (humble)' },
    qs: [
      { id: 'r15b.q1', type: 'enOpts', prompt: 'Where is the new restaurant?', opts: ['Next to the post office.', 'Behind Moonlight Mart.', 'Upstairs from Grandma.', 'At the university.'], explain: '우체국 옆에 새 냉면 집이 생겼어요.' },
      { id: 'r15b.q2', type: 'enOpts', prompt: 'What if you are busy at lunchtime?', opts: ['They deliver.', 'They open early.', 'You can come alone.', 'You get a discount.'], explain: '점심 시간에 바빠요? 그러면 배달도 해요.' },
      { id: 'r15b.q3', type: 'enOpts', prompt: 'How do you get a discount?', opts: ['Bring the notice (this paper).', 'Come alone.', 'Come at lunchtime.', 'Order delivery.'], explain: '이 종이를 가져오세요. 그럼 천 원 할인해 드려요!' },
    ],
  },
];
