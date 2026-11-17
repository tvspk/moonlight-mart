/* reads_L17.js — Staff Group Chat + Neighborhood Notice Board for Lesson 17.
   {form|lemma} marks a word outside the lesson; tapping it shows gloss[lemma].
   App-written texts (NOT yet checked by a native speaker). */
MM.reads[17] = [
  {
    id: 'l17.chat', kind: 'chat', title: 'Staff group chat', titleKo: '달빛마트 직원방',
    reward: { id: 'l17.sticker', ko: '저금통 스티커', en: 'Piggy-bank sticker', desc: 'A pig with a coin slot. It says “미래를 위해서”. Very formal pig.' },
    lines: [
      { who: 'minji', ko: '사장님, 현우 씨는 요즘 왜 매일 일해요?', en: 'Mr. Park, why does Hyunwoo work every day these days?' },
      { who: 'boss', ko: '새 {컴퓨터|컴퓨터}를 사기 위해서 돈을 모으고 있어요.', en: 'He’s saving up money to buy a new computer.' },
      { who: 'minji', ko: '게임을 하기 위해서요? ㅋㅋ', en: 'In order to play games? lol' },
      { who: 'boss', ko: '아니요, 공부하기 위해서요. …그렇게 말했어요. ㅋㅋ', en: 'No, in order to study. …That’s what he said. lol' },
      { who: 'minji', ko: '저는 건강을 위해서 이번 달부터 커피를 안 마셔요.', en: 'Starting this month, I don’t drink coffee, for my health.' },
      { who: 'boss', ko: '진짜요? 그럼 커피 머신은 누구를 위해서 고쳤어요?', en: 'Really? Then who did we fix the coffee machine for?' },
      { who: 'minji', ko: '김 기사님을 위해서요!', en: 'For Mr. Kim!' },
    ],
    gloss: { '컴퓨터': 'computer' },
    qs: [
      { id: 'r17c.q1', type: 'enOpts', prompt: 'Why is Hyunwoo working every day?', opts: ['To save up money for a new computer.', 'To buy a present for Minji.', 'For his health.', 'To go to Europe.'], explain: '새 컴퓨터를 사기 위해서 돈을 모으고 있어요.' },
      { id: 'r17c.q2', type: 'enOpts', prompt: 'Why did Minji stop drinking coffee?', opts: ['For her health.', 'To save money.', 'The coffee machine is broken.', 'Mr. Kim drinks it all.'], explain: '건강을 위해서 이번 달부터 커피를 안 마셔요.' },
      { id: 'r17c.q3', type: 'enOpts', prompt: 'According to Minji, who was the coffee machine fixed for?', opts: ['Mr. Kim.', 'Minji.', 'Hyunwoo.', 'Ramyeon.'], explain: '김 기사님을 위해서요!' },
    ],
  },
  {
    id: 'l17.board', kind: 'board', title: 'Neighborhood notice board', titleKo: '동네 게시판',
    reward: { id: 'l17.notice', ko: '바자회 떡', en: 'Bazaar rice cake', desc: 'Bought for the children of the neighborhood. Eaten for yourself.' },
    heading: '동네 도서관 {바자회|바자회}',
    lines: [
      { ko: '우리 동네 아이들을 위해서 {도서관|도서관}에 새 책을 사요.', en: 'We are buying new books for the library, for the children of our neighborhood.' },
      { ko: '그래서 이번 토요일에 바자회를 해요.', en: 'So we are holding a bazaar this Saturday.' },
      { ko: '집에 안 읽는 책이 있어요? 그럼 가져오세요.', en: 'Do you have books at home that you don’t read? Then bring them.' },
      { ko: '그 돈은 다 아이들을 위해서 쓸 거예요.', en: 'All of that money will be used for the children.' },
      { ko: '맛있는 떡도 팔아요. 가족이랑 같이 오세요!', en: 'We’re selling delicious rice cakes, too. Come with your family!' },
    ],
    gloss: { '바자회': 'bazaar (charity sale)', '도서관': 'library' },
    qs: [
      { id: 'r17b.q1', type: 'enOpts', prompt: 'Who is the bazaar for?', opts: ['The children of the neighborhood.', 'The library staff.', 'Moonlight Mart.', 'The rice cake shop.'], explain: '우리 동네 아이들을 위해서 … 그 돈은 다 아이들을 위해서 쓸 거예요.' },
      { id: 'r17b.q2', type: 'enOpts', prompt: 'What should you bring?', opts: ['Books you don’t read.', 'Money.', 'Rice cakes.', 'Your children.'], explain: '집에 안 읽는 책이 있어요? 그럼 가져오세요.' },
      { id: 'r17b.q3', type: 'enOpts', prompt: 'When is the bazaar?', opts: ['This Saturday.', 'This Sunday.', 'Every day.', 'Next month.'], explain: '이번 토요일에 바자회를 해요.' },
    ],
  },
];
