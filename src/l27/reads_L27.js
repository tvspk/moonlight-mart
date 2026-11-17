/* reads_L27.js — Staff Group Chat + Neighborhood Notice Board for Lesson 27 (반말 and 존댓말).
   {form|lemma} marks a word outside the lesson; tapping it shows gloss[lemma].
   App-written texts (NOT yet checked by a native speaker). In the group chat Minji uses 존댓말 (her boss is in it) — and slips once. */
MM.reads[27] = [
  {
    id: 'l27.chat', kind: 'chat', title: 'Staff group chat', titleKo: '달빛마트 직원방',
    reward: { id: 'l27.sticker', ko: '“죄송해요” 스티커', en: '“Sorry!” sticker', desc: 'A cat bowing so low that its nose touches the floor.' },
    lines: [
      { who: 'boss', ko: '내일 아침에 현우가 가게에 와요. 민지 씨가 가게 일 좀 {가르쳐|가르치다} 주세요.', en: 'Hyunwoo is coming to the store tomorrow morning. Minji, please teach him the store work.' },
      { who: 'minji', ko: '네, 사장님! 걱정하지 마세요.', en: 'Yes, Mr. Park! Don’t worry.' },
      { who: 'minji', ko: '야, 내일 늦지 마! 일곱 시에 와.', en: 'Hey, don’t be late tomorrow! Come at seven.' },
      { who: 'boss', ko: '…민지 씨? 저한테 반말 했어요?', en: '…Minji? Did you just speak 반말 to me?' },
      { who: 'minji', ko: '아니요!! {죄송해요|죄송하다}, 사장님! 그거 {동갑|동갑} 친구한테 쓴 거예요…', en: 'No!! I’m sorry, Mr. Park! I wrote that to my friend who is the same age…' },
      { who: 'boss', ko: 'ㅋㅋ 괜찮아요. 저도 일곱 시에 갈게요.', en: 'lol It’s fine. I’ll come at seven too.' },
    ],
    gloss: { '가르치다': 'to teach (가르쳐 주세요 = please teach)', '죄송하다': 'to be sorry (very polite)', '동갑': 'the same age' },
    qs: [
      { id: 'r27c.q1', type: 'enOpts', prompt: 'Who was “야, 내일 늦지 마!” meant for?', opts: ['Minji’s friend of the same age (in the wrong chat).', 'Mr. Park.', 'Hyunwoo.', 'Ramyeon.'], explain: '그거 동갑 친구한테 쓴 거예요 = I wrote that to my same-age friend.' },
      { id: 'r27c.q2', type: 'enOpts', prompt: 'Why is Mr. Park surprised?', opts: ['Minji wrote 반말 in a chat with her boss.', 'Minji will be late.', 'Hyunwoo is not coming.', 'Minji used Type 1 endings.'], explain: '늦지 마 / 와 = 반말 (no -요). To her boss she always uses 존댓말: 걱정하지 마세요.' },
      { id: 'r27c.q3', type: 'enOpts', prompt: 'What time will Mr. Park come?', opts: ['At seven.', 'At eleven.', 'At two.', 'He won’t come.'], explain: '저도 일곱 시에 갈게요.' },
    ],
  },
  {
    id: 'l27.board', kind: 'board', title: 'Neighborhood notice board', titleKo: '동네 게시판',
    reward: { id: 'l27.notice', ko: '동갑 모임 이름표', en: 'Same-age club name badge', desc: 'It says only a first name. No 씨.' },
    heading: '스물네 살 {동갑|동갑} 친구 {모임|모임}',
    lines: [
      { ko: '우리 동네에 사는 스물네 살 친구들을 찾아요.', en: 'We are looking for twenty-four-year-olds who live in our neighborhood.' },
      { ko: '{처음|처음} 만나면 존댓말을 써요.', en: 'When we first meet, we use 존댓말.' },
      { ko: '그리고 다 같이 말을 놓아요!', en: 'And then let’s all switch to 반말 together!' },
      { ko: '매주 금요일 저녁 일곱 시, 학교 앞 카페에서 만나요.', en: 'Every Friday at 7 p.m., we meet at the cafe in front of the school.' },
      { ko: '나이가 달라도 괜찮아요. 와서 같이 이야기해요.', en: 'It’s okay even if your age is different. Come and let’s talk together.' },
    ],
    gloss: { '동갑': 'the same age', '모임': 'meeting, club, group', '처음': 'the first time' },
    qs: [
      { id: 'r27b.q1', type: 'enOpts', prompt: 'Who is the club looking for?', opts: ['Twenty-four-year-olds who live in the neighborhood.', 'Students from Seoul University.', 'Only people who speak 반말.', 'Cat owners.'], explain: '우리 동네에 사는 스물네 살 친구들을 찾아요.' },
      { id: 'r27b.q2', type: 'enOpts', prompt: 'What do they do at the first meeting?', opts: ['They start with 존댓말, then switch to 반말 together.', 'They speak 반말 from the first word.', 'They only write.', 'They ask for each other’s address.'], explain: '처음 만나면 존댓말을 써요. 그리고 다 같이 말을 놓아요! (놓아요 = let’s put down: Lesson 16)' },
      { id: 'r27b.q3', type: 'enOpts', prompt: 'What if your age is different?', opts: ['That’s okay — come anyway.', 'You cannot come.', 'You must pay more.', 'You must use Type 1.'], explain: '나이가 달라도 괜찮아요. (다르다 → 달라도: 르 irregular + -아도.)' },
    ],
  },
];
