/* reads_L25.js — Staff Group Chat + Neighborhood Notice Board for Lesson 25 (-네요).
   {form|lemma} marks a word outside the lesson; tapping it shows gloss[lemma].
   App-written texts (NOT yet checked by a native speaker). */
MM.reads[25] = [
  {
    id: 'l25.chat', kind: 'chat', title: 'Staff group chat', titleKo: '달빛마트 직원방',
    reward: { id: 'l25.sticker', ko: '첫눈 스티커', en: 'First-snow sticker', desc: 'A tiny orange cat looking at a snowflake. Unimpressed.' },
    lines: [
      { who: 'minji', ko: '여러분, 밖을 보세요! {첫눈|첫눈}이 와요!', en: 'Everyone, look outside! The first snow is falling!' },
      { who: 'boss', ko: '와, 진짜 눈이 오네요. 벌써 11월이네요.', en: 'Wow, it really is snowing. It’s already November!' },
      { who: 'minji', ko: '사장님, 오늘 밤에 많이 추울 수도 있어요. 따뜻한 옷 입으세요!', en: 'Mr. Park, it might get very cold tonight. Wear warm clothes!' },
      { who: 'boss', ko: '고마워요. 근데 가게 안은 별로 안 춥네요. 어제 히터를 고쳤어요.', en: 'Thanks. But inside the store it’s not that cold. I fixed the heater yesterday.' },
      { who: 'minji', ko: '라면은요? 라면도 괜찮아요?', en: 'What about Ramyeon? Is he okay too?' },
      { who: 'boss', ko: '라면은 히터 앞에서 자고 있어요. 제일 따뜻한 {자리|자리}를 잘 아네요. ㅋㅋ', en: 'Ramyeon is sleeping in front of the heater. He really knows the warmest spot. lol' },
    ],
    gloss: { '첫눈': 'the first snow (of the year)', '자리': 'spot, place, seat' },
    qs: [
      { id: 'r25c.q1', type: 'enOpts', prompt: 'What is happening outside?', opts: ['The first snow is falling.', 'It is raining.', 'It is very hot.', 'Somebody is at the door.'], explain: '첫눈이 와요! — 진짜 눈이 오네요.' },
      { id: 'r25c.q2', type: 'enOpts', prompt: 'How is it inside the store?', opts: ['Not that cold: the heater was fixed yesterday.', 'Very cold: the heater is broken.', 'Too hot.', 'Mr. Park doesn’t know.'], explain: '가게 안은 별로 안 춥네요. 어제 히터를 고쳤어요.' },
      { id: 'r25c.q3', type: 'enOpts', prompt: 'Where is Ramyeon?', opts: ['Sleeping in front of the heater.', 'Outside in the snow.', 'On the ramen shelf.', 'At Minji’s house.'], explain: '라면은 히터 앞에서 자고 있어요. (아네요 = 알다 + 네요: ㄹ drops)' },
    ],
  },
  {
    id: 'l25.board', kind: 'board', title: 'Neighborhood notice board', titleKo: '동네 게시판',
    reward: { id: 'l25.notice', ko: '마지막 빵 봉투', en: 'The last bread bag', desc: 'Still smells of butter. Ramyeon sleeps on it.' },
    heading: '달빛 {빵집|빵집}이 문을 닫아요',
    lines: [
      { ko: '안녕하세요, 달빛마트 옆 빵집이에요.', en: 'Hello, this is the bakery next to Moonlight Mart.' },
      { ko: '이 동네에서 벌써 20년 동안 빵을 만들었네요.', en: 'We have already been making bread in this neighborhood for 20 years.' },
      { ko: '시간이 정말 빠르네요.', en: 'Time really flies.' },
      { ko: '다음 달에 부산으로 이사 가요.', en: 'Next month we are moving to Busan.' },
      { ko: '이번 주에는 {모든|모든} 빵이 {반값|반값}이에요.', en: 'This week all bread is half price.' },
      { ko: '{그동안|그동안} 정말 고마웠어요!', en: 'Thank you so much for everything all this time!' },
    ],
    gloss: { '빵집': 'bakery', '모든': 'all, every', '반값': 'half price', '그동안': 'all this time, meanwhile' },
    qs: [
      { id: 'r25b.q1', type: 'enOpts', prompt: 'How long has the bakery been in the neighborhood?', opts: ['20 years.', '2 years.', '20 months.', 'Since last month.'], explain: '벌써 20년 동안 빵을 만들었네요.' },
      { id: 'r25b.q2', type: 'enOpts', prompt: 'What is special this week?', opts: ['All bread is half price.', 'Free bread for cats.', 'The bakery opens a new shop.', 'Bread is twice as expensive.'], explain: '이번 주에는 모든 빵이 반값이에요.' },
      { id: 'r25b.q3', type: 'enOpts', prompt: 'Why is the bakery closing?', opts: ['They are moving to Busan next month.', 'The bread was not good.', 'The baker is sick.', 'Moonlight Mart bought it.'], explain: '다음 달에 부산으로 이사 가요.' },
    ],
  },
];
