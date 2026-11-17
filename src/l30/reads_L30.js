/* reads_L30.js — Staff Group Chat + Neighborhood Notice Board for Lesson 30 (Word Builder 실).
   {form|lemma} marks a word outside the lesson; tapping it shows gloss[lemma].
   App-written texts (read through in the 2026-10-16 native-speaker review). Staff group chat: the boss is present → Minji uses 존댓말. */
MM.reads[30] = [
  {
    id: 'l30.chat', kind: 'chat', title: 'Staff group chat', titleKo: '달빛마트 직원방',
    reward: { id: 'l30.sticker', ko: '“환영해요!” 스티커', en: '“Welcome!” sticker', desc: 'A sofa with a cat on it and the word 대기실.' },
    lines: [
      { who: 'boss', ko: '여러분, 새 직원이 와요. 수아 씨예요! 다음 주부터 일해요.', en: 'Everyone, a new staff member is coming. It’s Sua! She starts next week.' },
      { who: 'minji', ko: '와! 면접 어땠어요? 회의실이 창고였어요? ㅋㅋ', en: 'Wow! How was the interview? Was the meeting room the stockroom? lol' },
      { who: 'sua', ko: '네 ㅋㅋ 대기실은 소파였어요. 라면이 {저보다|보다} 먼저 기다리고 있었어요.', en: 'Yes lol. The waiting room was a sofa. Ramyeon was waiting there before me.' },
      { who: 'boss', ko: '수아 씨는 낮에 일하고, 저녁에는 강의실에서 공부할 거예요.', en: 'Sua will work during the day, and study in the lecture room in the evening.' },
      { who: 'minji', ko: '그럼 휴게실에서 같이 {점심|점심} 먹어요!', en: 'Then let’s have lunch together in the break room!' },
      { who: 'you', ko: '휴게실 소파는 라면 거예요. 조심하세요! ㅋㅋ', en: 'The break-room sofa belongs to Ramyeon. Be careful! lol' },
    ],
    gloss: { '보다': 'than (저보다 = than me)', '점심': 'lunch' },
    qs: [
      { id: 'r30c.q1', type: 'enOpts', prompt: 'Who is the new staff member?', opts: ['Sua.', 'Hyunwoo.', 'Mr. Lee.', 'Grandma.'], explain: '새 직원이 와요. 수아 씨예요!' },
      { id: 'r30c.q2', type: 'enOpts', prompt: 'What was the waiting room at the interview?', opts: ['A sofa.', 'The stockroom.', 'The restroom.', 'Mr. Park’s office.'], explain: '대기실은 소파였어요. (The meeting room was the stockroom.)' },
      { id: 'r30c.q3', type: 'enOpts', prompt: 'Where will Sua study in the evening?', opts: ['In a lecture room (at university).', 'In the break room.', 'In the stockroom.', 'In a hospital room.'], explain: '저녁에는 강의실에서 공부할 거예요.' },
    ],
  },
  {
    id: 'l30.board', kind: 'board', title: 'Neighborhood notice board', titleKo: '동네 게시판',
    reward: { id: 'l30.notice', ko: '새 도서관 안내도', en: 'New-library floor plan', desc: 'Every room ends in 실. Someone has drawn a cat in the 휴게실.' },
    heading: '새 도서관이 문을 열어요!',
    lines: [
      { ko: '다음 주 월요일에 달빛마트 옆 새 도서관이 문을 열어요.', en: 'Next Monday the new library next to Moonlight Mart opens.' },
      { ko: '1층에는 큰 {열람실|열람실}과 화장실이 있어요.', en: 'On the first floor there is a big reading room and restrooms.' },
      { ko: '2층에는 회의실과 연습실이 있어요. 회의실은 동네 주민들이 {무료|무료}로 쓸 수 있어요.', en: 'On the second floor there are a meeting room and a practice room. Residents can use the meeting room for free.' },
      { ko: '3층에는 아이들을 {위한|위한} 작은 교실과 휴게실이 있어요.', en: 'On the third floor there are a small classroom for children and a lounge.' },
      { ko: '도서관 실내에서는 음식을 먹지 마세요. 실외 {테이블|테이블}은 괜찮아요.', en: 'Please don’t eat food inside the library. The outdoor tables are fine.' },
      { ko: '도서관 이름은 “달빛 도서관”이에요. 동네 주민들이 지었어요. 감사합니다!', en: 'The library’s name is “Moonlight Library”. The residents named it. Thank you!' },
    ],
    gloss: { '위한': 'for (위하다 + -(으)ㄴ: the noun form of 위해, Lesson 17)', '열람실': 'reading room (열람 = reading, browsing + 실)', '무료': 'free (of charge)', '테이블': 'table' },
    qs: [
      { id: 'r30b.q1', type: 'enOpts', prompt: 'What is on the second floor?', opts: ['A meeting room and a practice room.', 'A reading room and restrooms.', 'A classroom and a lounge.', 'An office and a waiting room.'], explain: '2층에는 회의실과 연습실이 있어요.' },
      { id: 'r30b.q2', type: 'enOpts', prompt: 'Where can you eat?', opts: ['At the outdoor tables.', 'Anywhere inside.', 'In the reading room.', 'In the meeting room.'], explain: '실내에서는 음식을 먹지 마세요. 실외 테이블은 괜찮아요.' },
      { id: 'r30b.q3', type: 'enOpts', prompt: 'What is the library called?', opts: ['Moonlight Library (달빛 도서관).', 'Ramyeon Library.', 'Neighborhood Library.', 'It has no name yet.'], explain: '도서관 이름은 “달빛 도서관”이에요. (Lesson 29: the residents named it.)' },
    ],
  },
];
