/* reads_L8.js — Staff Group Chat + Neighborhood Notice Board for Lesson 8.
   {form|lemma} marks a word outside the lesson; tapping it shows gloss[lemma].
   ⚠ App-written texts: please have them checked by a native speaker. */
MM.reads[8] = [
  {
    id: 'l8.chat', kind: 'chat', title: 'Staff group chat', titleKo: '달빛마트 직원방',
    reward: { id: 'l8.sticker', ko: '쌍둥이 고양이 스티커', en: 'Twin-cat sticker', desc: 'Two identical cats. One of them is Ramyeon. Nobody knows which.' },
    lines: [
      { who: 'minji', ko: '내일 새 직원이 와요! {사진|사진} 보세요.', en: 'A new staff member comes tomorrow! Look at the photo.' },
      { who: 'boss', ko: '아, 현우 씨! 제 {조카|조카}예요.', en: 'Ah, Hyunwoo! He’s my nephew.' },
      { who: 'minji', ko: '와, 사장님하고 정말 비슷해요!', en: 'Wow, he really looks similar to you, Mr. Park!' },
      { who: 'boss', ko: '그래요? 사람들이 다 그렇게 말해요.', en: 'Really? Everyone says that.' },
      { who: 'minji', ko: '현우 씨는 몇 살이에요?', en: 'How old is Hyunwoo?' },
      { who: 'boss', ko: '스물다섯 살이에요. 민지 씨랑 나이가 같아요.', en: 'He’s twenty-five. He’s the same age as you, Minji.' },
      { who: 'minji', ko: '진짜요? 그럼 벌써 친구 같아요! ㅋㅋ', en: 'Really? Then he already feels like a friend! lol' },
    ],
    gloss: { '사진': 'photo', '조카': 'nephew, niece' },
    qs: [
      { id: 'r8c.q1', type: 'enOpts', prompt: 'Who is Hyunwoo?', opts: ['Mr. Park’s nephew, the new staff member.', 'Minji’s brother.', 'A regular customer.', 'The inspector from head office.'], explain: '제 조카예요 = he is my nephew. 새 직원 = new staff member.' },
      { id: 'r8c.q2', type: 'enOpts', prompt: 'What does Minji say about Hyunwoo’s photo?', opts: ['He looks similar to Mr. Park.', 'He looks like a robot.', 'He is the same person as Mr. Park.', 'He looks older than Mr. Park.'], explain: '사장님하고 정말 비슷해요 = really similar to Mr. Park.' },
      { id: 'r8c.q3', type: 'enOpts', prompt: 'What do Minji and Hyunwoo have in common?', opts: ['They are the same age (25).', 'They are both Mr. Park’s nephews.', 'They both work the night shift.', 'They have the same name.'], explain: '민지 씨랑 나이가 같아요 = the same age as Minji.' },
    ],
  },
  {
    id: 'l8.board', kind: 'board', title: 'Neighborhood notice board', titleKo: '동네 게시판',
    reward: { id: 'l8.notice', ko: '나비 전단지', en: 'Lost-cat flyer', desc: 'Nabi was found asleep on the ramen shelf, next to Ramyeon. Identical.' },
    heading: '고양이를 찾아요!',
    lines: [
      { ko: '우리 고양이 {나비|나비}를 찾아요.', en: 'We are looking for our cat, Nabi.' },
      { ko: '{노란색|노란색} 고양이예요. 조금 커요.', en: 'It’s a yellow cat. A little big.' },
      { ko: '{얼굴|얼굴}은 호랑이 같아요.', en: 'Its face looks like a tiger’s.' },
      { ko: '그렇지만 {성격|성격}은 강아지 같아요.', en: 'But its personality is like a puppy’s.' },
      { ko: '달빛마트 고양이 라면하고 정말 비슷해요. 그렇지만 라면이 아니에요!', en: 'It is really similar to Ramyeon, the Moonlight Mart cat. But it is not Ramyeon!' },
      { ko: '나비를 봤어요? 달빛마트에 전화해 주세요.', en: 'Have you seen Nabi? Please call Moonlight Mart.' },
    ],
    gloss: { '나비': 'Nabi: a common cat name (나비 = butterfly)', '노란색': 'yellow', '얼굴': 'face', '성격': 'personality, character' },
    qs: [
      { id: 'r8b.q1', type: 'enOpts', prompt: 'What does Nabi’s face look like?', opts: ['A tiger’s.', 'A puppy’s.', 'A robot’s.', 'Ramyeon’s.'], explain: '얼굴은 호랑이 같아요 = the face looks like a tiger.' },
      { id: 'r8b.q2', type: 'enOpts', prompt: 'What is Nabi’s personality like?', opts: ['Like a puppy’s.', 'Like a tiger’s.', 'Like an angel’s.', 'The same as Ramyeon’s.'], explain: '성격은 강아지 같아요.' },
      { id: 'r8b.q3', type: 'enOpts', prompt: 'Why does the notice mention Ramyeon?', opts: ['Nabi is very similar to Ramyeon, but is a different cat.', 'Ramyeon is Nabi.', 'Ramyeon found Nabi.', 'Ramyeon is also lost.'], explain: '라면하고 정말 비슷해요. 그렇지만 라면이 아니에요!' },
    ],
  },
];
