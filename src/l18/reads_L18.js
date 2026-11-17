/* reads_L18.js — Staff Group Chat + Neighborhood Notice Board for Lesson 18.
   {form|lemma} marks a word outside the lesson; tapping it shows gloss[lemma].
   App-written texts (NOT yet checked by a native speaker). */
MM.reads[18] = [
  {
    id: 'l18.chat', kind: 'chat', title: 'Staff group chat', titleKo: '달빛마트 직원방',
    reward: { id: 'l18.sticker', ko: '참치캔 스티커', en: 'Tuna-can sticker', desc: 'A can of tuna with a crown. Ramyeon’s only true love.' },
    lines: [
      { who: 'boss', ko: '오늘 {창고|창고}에 뭐 있어요?', en: 'What is in the stockroom today?' },
      { who: 'minji', ko: '라면하고 콜라밖에 없어요. 택배가 안 왔어요.', en: 'Nothing but ramen and cola. The delivery didn’t come.' },
      { who: 'boss', ko: '아… 그럼 김밥은요?', en: 'Ah… then what about kimbap?' },
      { who: 'minji', ko: '김밥은 두 개밖에 안 남았어요.', en: 'There are only two kimbap left.' },
      { who: 'boss', ko: '고양이 밥은 있어요?', en: 'Is there cat food?' },
      { who: 'minji', ko: '고양이 밥은 많아요. 근데 라면이 참치밖에 안 먹어요. ㅋㅋ', en: 'There’s lots of cat food. But Ramyeon eats nothing but tuna. lol' },
      { who: 'boss', ko: '그 고양이는 자기밖에 몰라요.', en: 'That cat only cares about himself.' },
    ],
    gloss: { '창고': 'stockroom, storeroom', '남다': 'to be left (over)', '자기': 'oneself, himself' },
    qs: [
      { id: 'r18c.q1', type: 'enOpts', prompt: 'What is in the stockroom?', opts: ['Only ramen and cola.', 'Everything except ramen and cola.', 'Nothing at all.', 'Lots of kimbap.'], explain: '라면하고 콜라밖에 없어요.' },
      { id: 'r18c.q2', type: 'enOpts', prompt: 'How many kimbap are left?', opts: ['Only two.', 'None.', 'More than two.', 'Twelve.'], explain: '김밥은 두 개밖에 안 남았어요.' },
      { id: 'r18c.q3', type: 'enOpts', prompt: 'What does Mr. Park say about Ramyeon?', opts: ['He only cares about himself.', 'He doesn’t know himself.', 'He only eats cat food.', 'He knows everything.'], explain: '자기밖에 몰라요 = knows nothing but himself (like 일밖에 모르는 사람, Workbook 23).' },
    ],
  },
  {
    id: 'l18.board', kind: 'board', title: 'Neighborhood notice board', titleKo: '동네 게시판',
    reward: { id: 'l18.notice', ko: '마지막 붕어빵', en: 'The last fish-shaped bun', desc: 'There was only one left. Now there are none.' },
    heading: '{붕어빵|붕어빵} 아저씨가 왔어요!',
    lines: [
      { ko: '이번 주부터 공원 앞에서 붕어빵을 팔아요.', en: 'Starting this week, we sell fish-shaped buns in front of the park.' },
      { ko: '밤 열 시까지 해요. 근데 하루에 백 개밖에 안 만들어요.', en: 'We’re open until 10 p.m. But we only make 100 a day.' },
      { ko: '그래서 빨리 오세요!', en: 'So come quickly!' },
      { ko: '그리고 죄송해요. 현금밖에 안 받아요.', en: 'And sorry. We only take cash.' },
      { ko: '카드는 다음 달부터 받을 거예요.', en: 'We will take cards from next month.' },
    ],
    gloss: { '붕어빵': 'fish-shaped bun (a winter street snack with red-bean filling)' },
    qs: [
      { id: 'r18b.q1', type: 'enOpts', prompt: 'How many buns are made each day?', opts: ['Only 100.', 'More than 100.', 'None.', '10.'], explain: '하루에 백 개밖에 안 만들어요.' },
      { id: 'r18b.q2', type: 'enOpts', prompt: 'How can you pay?', opts: ['Only in cash.', 'Only by card.', 'Cash or card.', 'It’s free.'], explain: '현금밖에 안 받아요.' },
      { id: 'r18b.q3', type: 'enOpts', prompt: 'Where is the bun stand?', opts: ['In front of the park.', 'Behind the park.', 'Next to Moonlight Mart.', 'Outside the station.'], explain: '공원 앞에서 붕어빵을 팔아요.' },
    ],
  },
];
