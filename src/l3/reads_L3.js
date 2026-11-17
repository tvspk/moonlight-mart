/* reads_L3.js — Staff Group Chat + Neighborhood Notice Board for Lesson 3.
   {form|lemma} marks a word outside the lesson; tapping it shows gloss[lemma].
   ⚠ App-written texts: please have them checked by a native speaker. */
MM.reads[3] = [
  {
    id: 'l3.chat', kind: 'chat', title: 'Staff group chat', titleKo: '달빛마트 직원방',
    reward: { id: 'l3.sticker', ko: '라면 침대 스티커', en: '“Ramyeon’s bed” sticker', desc: 'For the box. Ramyeon prefers the lid.' },
    lines: [
      { who: 'boss', ko: '여러분, 오늘 가게를 {정리했어요|정리하다}.', en: 'Everyone, I rearranged the store today.' },
      { who: 'minji', ko: '우산은 어디에 있어요?', en: 'Where are the umbrellas?' },
      { who: 'boss', ko: '우산은 문 앞에 있고, 컵라면은 냉장고 옆에 있어요.', en: 'The umbrellas are in front of the door, and the cup noodles are next to the fridge.' },
      { who: 'minji', ko: 'ATM 옆에 {상자|상자}가 있어요. 그거 뭐예요?', en: 'There’s a box next to the ATM. What is it?' },
      { who: 'boss', ko: '아, 그거 라면 {침대|침대}예요.', en: 'Oh, that’s Ramyeon’s bed.' },
      { who: 'minji', ko: '{그런데|그런데} 라면은 지금 상자 위에서 자고 있어요. ㅋㅋ', en: 'But Ramyeon is sleeping on top of the box right now. lol' },
      { who: 'boss', ko: '하하. 고양이는 {다|다} 그래요.', en: 'Ha ha. All cats are like that.' },
    ],
    gloss: { '정리하다': 'to tidy up, to rearrange', '상자': 'box', '침대': 'bed', '그런데': 'but, by the way', '다': 'all' },
    qs: [
      { id: 'r3c.q1', type: 'enOpts', prompt: 'Where are the umbrellas now?', opts: ['In front of the door.', 'Next to the fridge.', 'Next to the ATM.', 'Behind the counter.'], explain: '우산은 문 앞에 있고…' },
      { id: 'r3c.q2', type: 'enOpts', prompt: 'What is the box next to the ATM?', opts: ['A bed for Ramyeon.', 'A delivery.', 'Cup noodles.', 'Umbrellas.'], explain: '그거 라면 침대예요.' },
      { id: 'r3c.q3', type: 'enOpts', prompt: 'Where is Ramyeon sleeping?', opts: ['On top of the box.', 'Inside the box.', 'Under the box.', 'Next to the fridge.'], explain: '상자 위에서 자고 있어요: on top of it, not in it.' },
    ],
  },
  {
    id: 'l3.board', kind: 'board', title: 'Neighborhood notice board', titleKo: '동네 게시판',
    reward: { id: 'l3.notice', ko: '분실물 쪽지', en: 'Lost-and-found note', desc: 'Sua got her ring back. Ramyeon was sitting on it.' },
    heading: '{반지를 찾아요|찾다}!',
    lines: [
      { ko: '안녕하세요. 은행 옆 {아파트|아파트}에 살아요.', en: 'Hello. I live in the apartment next to the bank.' },
      { ko: '어제 저녁에 {공원|공원}에서 반지를 잃어버렸어요.', en: 'Yesterday evening I lost my ring in the park.' },
      { ko: '공원 나무 밑에서 책을 읽었어요.', en: 'I read a book under a tree in the park.' },
      { ko: '반지는 {그때|그때} {벤치|벤치} 위에 있었어요.', en: 'At that time the ring was on the bench.' },
      { ko: '{작은|작다} {은색|은색} 반지예요. {연락|연락} 주세요!', en: 'It’s a small silver ring. Please contact me!' },
      { ko: '달빛마트 계산대에 {전화번호|전화번호} 있어요. — 수아', en: 'My phone number is at the Moonlight Mart counter. — Sua' },
    ],
    gloss: { '찾다': 'to look for, to find (반지를 찾아요 = looking for a ring)', '아파트': 'apartment', '공원': 'park', '그때': 'at that time, then', '벤치': 'bench', '작다': 'to be small (작은 = small …)', '은색': 'silver (color)', '연락': 'contact (연락 주세요 = please contact me)', '전화번호': 'phone number' },
    qs: [
      { id: 'r3b.q1', type: 'enOpts', prompt: 'Where does the writer live?', opts: ['In the apartment next to the bank.', 'Above Moonlight Mart.', 'Behind the park.', 'In front of the school.'], explain: '은행 옆 아파트에 살아요.' },
      { id: 'r3b.q2', type: 'enOpts', prompt: 'What was she doing under the tree?', opts: ['Reading a book.', 'Sleeping.', 'Talking on the phone.', 'Looking for her ring.'], explain: '나무 밑에서 책을 읽었어요.' },
      { id: 'r3b.q3', type: 'enOpts', prompt: 'Where was the ring?', opts: ['On the bench.', 'Under the bench.', 'Under the tree.', 'In her bag.'], explain: '반지는 그때 벤치 위에 있었어요.' },
    ],
  },
];
