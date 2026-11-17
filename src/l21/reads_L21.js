/* reads_L21.js — Staff Group Chat + Neighborhood Notice Board for Lesson 21.
   {form|lemma} marks a word outside the lesson; tapping it shows gloss[lemma].
   App-written texts (NOT yet checked by a native speaker). */
MM.reads[21] = [
  {
    id: 'l21.chat', kind: 'chat', title: 'Staff group chat', titleKo: '달빛마트 직원방',
    reward: { id: 'l21.sticker', ko: '케이크 스티커', en: 'Cake sticker', desc: 'A slice of strawberry cake. Zero calories. Zero taste.' },
    lines: [
      { who: 'minji', ko: '사장님, 내일 현우 씨 생일인데, 알아요?', en: 'Mr. Park, tomorrow is Hyunwoo’s birthday — did you know?' },
      { who: 'boss', ko: '아, 그래요? 몰랐어요. 선물 사야 돼요!', en: 'Oh, really? I didn’t know. We have to buy a present!' },
      { who: 'minji', ko: '제가 어제 {케이크|케이크}를 샀는데, 조금 작아요.', en: 'I bought a cake yesterday, but it’s a little small.' },
      { who: 'boss', ko: '작아도 괜찮아요. 근데 현우 씨는 내일 몇 시에 오는데요?', en: 'It’s okay even if it’s small. But what time is Hyunwoo coming tomorrow?' },
      { who: 'minji', ko: '열 시에 오는데, 저는 아홉 시에 갈게요. 같이 준비해요!', en: 'He comes at ten, so I’ll come at nine. Let’s prepare together!' },
      { who: 'boss', ko: '좋은데요! 라면한테는 말하지 마세요. 케이크 먹어요.', en: 'Sounds good! Don’t tell Ramyeon. He eats cake.' },
    ],
    gloss: { '케이크': 'cake' },
    qs: [
      { id: 'r21c.q1', type: 'enOpts', prompt: 'Why does Minji write to Mr. Park?', opts: ['Tomorrow is Hyunwoo’s birthday.', 'She can’t come tomorrow.', 'The cake is too expensive.', 'Hyunwoo is sick.'], explain: '내일 현우 씨 생일인데, 알아요?' },
      { id: 'r21c.q2', type: 'enOpts', prompt: 'What is the problem with the cake?', opts: ['It’s a little small.', 'It’s too big.', 'Ramyeon ate it.', 'She didn’t buy it.'], explain: '케이크를 샀는데, 조금 작아요.' },
      { id: 'r21c.q3', type: 'enOpts', prompt: 'When will Minji come?', opts: ['At nine, before Hyunwoo comes at ten.', 'At ten, with Hyunwoo.', 'At eleven.', 'She won’t come.'], explain: '열 시에 오는데, 저는 아홉 시에 갈게요.' },
    ],
  },
  {
    id: 'l21.board', kind: 'board', title: 'Neighborhood notice board', titleKo: '동네 게시판',
    reward: { id: 'l21.notice', ko: '열쇠고리', en: 'Lost key ring', desc: 'A key ring with a tiny cat. The key is still missing. The cat looks guilty.' },
    heading: '{열쇠|열쇠}를 찾아요',
    lines: [
      { ko: '어제 저녁에 공원에서 운동하고 있었는데, {열쇠|열쇠}가 {없어졌어요|없어지다}.', en: 'Yesterday evening I was exercising in the park, and my key disappeared.' },
      { ko: '작은데 무거운 열쇠예요. 고양이 {열쇠고리|열쇠고리}가 있어요.', en: 'It’s a small but heavy key. It has a cat key ring.' },
      { ko: '{벤치|벤치} 옆에 있었는데… 지금은 없어요.', en: 'It was next to the bench… but now it’s gone.' },
      { ko: '이 열쇠가 없으면 집에 못 {들어가요|들어가다}. 오늘 밤에 추운데, 도와 주세요!', en: 'Without this key I can’t get into my house. It’s cold tonight — please help!' },
      { ko: '찾으면 달빛마트에 {맡겨|맡기다} 주세요. 301호', en: 'If you find it, please leave it at Moonlight Mart. Room 301' },
    ],
    gloss: { '열쇠': 'key', '열쇠고리': 'key ring', '없어지다': 'to disappear, go missing', '벤치': 'bench', '들어가다': 'to go in', '맡기다': 'to leave (something) with someone' },
    qs: [
      { id: 'r21b.q1', type: 'enOpts', prompt: 'What was the person doing when the key disappeared?', opts: ['Exercising in the park.', 'Shopping at Moonlight Mart.', 'Sleeping at home.', 'Walking a cat.'], explain: '공원에서 운동하고 있었는데, 열쇠가 없어졌어요.' },
      { id: 'r21b.q2', type: 'enOpts', prompt: 'What does the key look like?', opts: ['Small but heavy, with a cat key ring.', 'Big and light.', 'Small and light, with a dog key ring.', 'It has no key ring.'], explain: '작은데 무거운 열쇠예요. 고양이 열쇠고리가 있어요.' },
      { id: 'r21b.q3', type: 'enOpts', prompt: 'Where should you take the key?', opts: ['To Moonlight Mart.', 'To the police.', 'To the park.', 'To room 103.'], explain: '찾으면 달빛마트에 맡겨 주세요.' },
    ],
  },
];
