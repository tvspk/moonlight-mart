/* reads_L11.js — Staff Group Chat + Neighborhood Notice Board for Lesson 11.
   {form|lemma} marks a word outside the lesson; tapping it shows gloss[lemma].
   ⚠ App-written texts: please have them checked by a native speaker. */
MM.reads[11] = [
  {
    id: 'l11.chat', kind: 'chat', title: 'Staff group chat', titleKo: '달빛마트 직원방',
    reward: { id: 'l11.sticker', ko: '손난로 스티커', en: 'Hand-warmer sticker', desc: 'A sticker of a hand warmer. It does not warm anything. Minji tried.' },
    lines: [
      { who: 'boss', ko: '히터 {고쳤어요|고치다}? 어제 정말 추웠어요.', en: 'Did you fix the heater? It was really cold yesterday.' },
      { who: 'minji', ko: '네! 라면이 히터 위에 누웠어요. ㅋㅋ', en: 'Yes! Ramyeon had lain down on the heater. lol' },
      { who: 'boss', ko: '라면은 추운 것을 {싫어해요|싫어하다}.', en: 'Ramyeon hates the cold.' },
      { who: 'minji', ko: '현우 씨는 더운 것을 싫어해요. 겨울을 좋아해요.', en: 'Hyunwoo hates the heat. He likes winter.' },
      { who: 'boss', ko: '저는 매운 것을 좋아해요. 오늘 저녁에 떡볶이 먹을까요?', en: 'I like spicy food. Shall we eat tteokbokki this evening?' },
      { who: 'minji', ko: '좋아요! 근데 너무 매우면 저는 못 먹어요.', en: 'Sounds good! But if it’s too spicy, I can’t eat it.' },
    ],
    gloss: { '고치다': 'to fix, to repair: 고쳤어요 = (you) fixed', '싫어하다': 'to dislike, to hate (a thing)' },
    qs: [
      { id: 'r11c.q1', type: 'enOpts', prompt: 'What was wrong with the heater?', opts: ['Ramyeon had lain down on it.', 'It was too hot.', 'Mr. Park turned it off.', 'Hyunwoo broke it.'], explain: '라면이 히터 위에 누웠어요 (눕다 → 누웠어요; 위에, Lesson 3).' },
      { id: 'r11c.q2', type: 'enOpts', prompt: 'Who likes winter?', opts: ['Hyunwoo', 'Ramyeon', 'Mr. Park', 'Minji'], explain: '현우 씨는 더운 것을 싫어해요. 겨울을 좋아해요. (더운 것 = hot things, the heat)' },
      { id: 'r11c.q3', type: 'enOpts', prompt: 'What is Minji worried about?', opts: ['The tteokbokki might be too spicy.', 'The store is too cold.', 'She has no money.', 'She has to work tonight.'], explain: '너무 매우면 저는 못 먹어요 = if it’s too spicy, I can’t eat it (맵다 + -(으)면 → 매우면).' },
    ],
  },
  {
    id: 'l11.board', kind: 'board', title: 'Neighborhood notice board', titleKo: '동네 게시판',
    reward: { id: 'l11.notice', ko: '김장 고무장갑', en: 'Kimchi-making rubber gloves', desc: 'Bright red. Smell faintly of garlic forever.' },
    heading: '김장 같이 해요!',
    lines: [
      { ko: '이번 주 토요일에 {김장|김장}을 해요.', en: 'This Saturday I’m making kimchi for the winter.' },
      { ko: '{혼자|혼자} 하면 너무 어려워요. 좀 도와 주세요.', en: 'It’s too difficult if I do it alone. Please help me a little.' },
      { ko: '같이 김장하고, {군고구마|군고구마}도 먹어요!', en: 'Let’s make kimchi together and eat baked sweet potatoes too!' },
      { ko: '날씨가 추울 거예요. 따뜻한 옷을 입고 오세요.', en: 'The weather will be cold. Wear warm clothes when you come.' },
      { ko: '– {2층|2층} 할머니', en: '– Grandma, 2nd floor' },
    ],
    gloss: { '김장': 'making a big batch of kimchi for the winter', '혼자': 'alone, by oneself', '군고구마': 'baked (roasted) sweet potato (굽다 → 군)', '2층': '2nd floor (층 = floor)' },
    qs: [
      { id: 'r11b.q1', type: 'enOpts', prompt: 'What is happening on Saturday?', opts: ['Grandma is making kimchi for the winter.', 'Grandma is moving.', 'Grandma is selling sweet potatoes.', 'Grandma is going on a trip.'], explain: '이번 주 토요일에 김장을 해요.' },
      { id: 'r11b.q2', type: 'enOpts', prompt: 'Why does Grandma want help?', opts: ['Doing it alone is too difficult.', 'She is sick.', 'She doesn’t know how.', 'It is too cold to go out.'], explain: '혼자 하면 너무 어려워요 (어렵다 → 어려워요).' },
      { id: 'r11b.q3', type: 'enOpts', prompt: 'What should you wear?', opts: ['Warm clothes.', 'A vest from the store.', 'Rubber gloves.', 'Nothing special.'], explain: '따뜻한 옷을 입고 오세요 = come wearing warm clothes (입다 keeps its ㅂ: 입고).' },
    ],
  },
];
