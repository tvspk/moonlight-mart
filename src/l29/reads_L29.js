/* reads_L29.js — Staff Group Chat + Neighborhood Notice Board for Lesson 29 (ㅅ irregular).
   {form|lemma} marks a word outside the lesson; tapping it shows gloss[lemma].
   App-written texts (read through in the 2026-10-16 native-speaker review). In the staff group chat the boss is present, so Minji uses
   존댓말 (as in Lesson 27). */
MM.reads[29] = [
  {
    id: 'l29.chat', kind: 'chat', title: 'Staff group chat', titleKo: '달빛마트 직원방',
    reward: { id: 'l29.sticker', ko: '“빨리 나아요!” 스티커', en: '“Get well soon!” sticker', desc: 'A cat with a thermometer in its mouth.' },
    lines: [
      { who: 'boss', ko: '민지 씨, 감기 다 나았어요?', en: 'Minji, did you get over your cold completely?' },
      { who: 'minji', ko: '네, 다 나았어요! 사장님이 지어 주신 약이 정말 좋았어요.', en: 'Yes, I’m completely better! The medicine you got made up for me was really good.' },
      { who: 'boss', ko: '다행이에요. 그리고 새 도시락 이름 {정했어요|정하다}. “달빛 도시락”이에요!', en: 'That’s a relief. And I decided on the name for the new lunch box. It’s “Moonlight Lunch Box”!' },
      { who: 'you', ko: '제가 지었어요! ㅋㅋ', en: 'I made that name! lol' },
      { who: 'minji', ko: '좋네요! 근데 사진에 라면이 웃고 있어요. 라면도 {모델|모델}이에요?', en: 'Nice! But Ramyeon is smiling in the photo. Is Ramyeon a model too?' },
      { who: 'boss', ko: '네. {월급|월급}은 {참치|참치}로 줄 거예요.', en: 'Yes. I’m going to pay his salary in tuna.' },
    ],
    gloss: { '정하다': 'to decide, to set', '모델': 'model', '월급': 'monthly salary', '참치': 'tuna' },
    qs: [
      { id: 'r29c.q1', type: 'enOpts', prompt: 'How is Minji?', opts: ['She has got over her cold.', 'She still has a cold.', 'She caught a new cold.', 'She is at the pharmacy.'], explain: '네, 다 나았어요! (낫 + 았어요 → 나았어요)' },
      { id: 'r29c.q2', type: 'enOpts', prompt: 'Who made the name “달빛 도시락”?', opts: ['You (the player).', 'Mr. Park.', 'Minji.', 'Ramyeon.'], explain: '제가 지었어요! = I made it (the name). 짓 + 었어요 → 지었어요.' },
      { id: 'r29c.q3', type: 'enOpts', prompt: 'What is in the lunch-box photo?', opts: ['Ramyeon, smiling.', 'Mr. Park, smiling.', 'Only the lunch box.', 'Coco the puppy.'], explain: '사진에 라면이 웃고 있어요. (웃다 is regular: 웃고 있어요.)' },
    ],
  },
  {
    id: 'l29.board', kind: 'board', title: 'Neighborhood notice board', titleKo: '동네 게시판',
    reward: { id: 'l29.notice', ko: '새 도서관 이름 응모권', en: 'New-library naming entry slip', desc: 'Someone has already written “라면 도서관” on it.' },
    heading: '{공사|공사} 안내: 새 도서관을 짓고 있어요',
    lines: [
      { ko: '안녕하세요. 달빛마트 옆에 새 도서관을 짓고 있어요.', en: 'Hello. We are building a new library next to Moonlight Mart.' },
      { ko: '다음 달까지 아침 아홉 시부터 저녁 여섯 시까지 조금 {시끄러울|시끄럽다} 수도 있어요.', en: 'Until next month it might be a little noisy from 9 a.m. to 6 p.m.' },
      { ko: '도서관 뒤에는 작은 공원도 만들 거예요. 그리고 도서관과 공원을 {산책길|산책길}로 이을 거예요.', en: 'Behind the library we will also make a small park. And we will connect the library and the park with a walking path.' },
      { ko: '도서관 이름은 동네 {주민|주민}들이 같이 지을 거예요.', en: 'The residents of the neighborhood will name the library together.' },
      { ko: '좋은 이름이 있으면 관리실에 알려 주세요.', en: 'If you have a good name, please let the management office know.' },
      { ko: '조금 {불편해도|불편하다} 기다려 주세요. 감사합니다!', en: 'Even if it is a little inconvenient, please wait for us. Thank you!' },
    ],
    gloss: { '공사': 'construction work', '시끄럽다': 'to be noisy', '산책길': 'walking path', '주민': 'resident(s)', '불편하다': 'to be inconvenient, uncomfortable' },
    qs: [
      { id: 'r29b.q1', type: 'enOpts', prompt: 'What is being built?', opts: ['A new library (and a small park behind it).', 'A new Moonlight Mart.', 'An apartment building.', 'A school.'], explain: '새 도서관을 짓고 있어요. (짓고: -고 begins with a consonant, so the ㅅ stays.)' },
      { id: 'r29b.q2', type: 'enOpts', prompt: 'What will connect the library and the park?', opts: ['A walking path.', 'A bridge.', 'A bus line.', 'Nothing.'], explain: '도서관과 공원을 산책길로 이을 거예요. (잇 + 을 거예요 → 이을 거예요.)' },
      { id: 'r29b.q3', type: 'enOpts', prompt: 'Who will name the library?', opts: ['The residents of the neighborhood, together.', 'The mayor.', 'The construction company.', 'Mr. Park.'], explain: '도서관 이름은 동네 주민들이 같이 지을 거예요.' },
    ],
  },
];
