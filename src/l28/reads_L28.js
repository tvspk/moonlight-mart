/* reads_L28.js — Staff Group Chat + Neighborhood Notice Board for Lesson 28 (-자, “let’s” in 반말).
   {form|lemma} marks a word outside the lesson; tapping it shows gloss[lemma].
   App-written texts (NOT yet checked by a native speaker). This chat is the private one between Minji and the player: 반말 both ways. */
MM.reads[28] = [
  {
    id: 'l28.chat', kind: 'chat', title: 'Chat with Minji', titleKo: '민지',
    reward: { id: 'l28.sticker', ko: '“먹자!” 스티커', en: '“Let’s eat!” sticker', desc: 'Two chopsticks high-fiving.' },
    lines: [
      { who: 'minji', ko: '너 모레 저녁에 시간 있어?', en: 'Do you have time the evening after tomorrow?' },
      { who: 'you', ko: '응, 있어. 왜?', en: 'Yes, I do. Why?' },
      { who: 'minji', ko: '현우가 {첫|첫} 월급 받았어! 같이 밥 먹자. 현우가 살 거야 ㅋㅋ', en: 'Hyunwoo got his first salary! Let’s eat together. Hyunwoo is going to pay lol' },
      { who: 'you', ko: '좋아! 뭐 먹을까? 중국 음식 먹을까?', en: 'Great! What shall we eat? Shall we have Chinese food?' },
      { who: 'minji', ko: '아니, 중국 음식은 어제 먹었어. 고기 먹자!', en: 'No, I had Chinese food yesterday. Let’s eat meat!' },
      { who: 'you', ko: '그래. 근데 비싼 데는 가지 말자. 현우 돈 없어.', en: 'Okay. But let’s not go to an expensive place. Hyunwoo has no money.' },
      { who: 'minji', ko: 'ㅋㅋ 알았어. 일곱 시에 가게 앞에서 보자!', en: 'lol Got it. See you in front of the store at seven!' },
    ],
    gloss: { '첫': 'first (첫 월급 = first salary)', '월급': 'monthly salary', '데': 'place (비싼 데 = an expensive place)' },
    qs: [
      { id: 'r28c.q1', type: 'enOpts', prompt: 'Why are they going to eat together?', opts: ['Hyunwoo got his first salary.', 'It is Minji’s birthday.', 'The store is closed.', 'Mr. Park is paying.'], explain: '현우가 첫 월급 받았어! 같이 밥 먹자.' },
      { id: 'r28c.q2', type: 'enOpts', prompt: 'Why not Chinese food?', opts: ['Minji ate Chinese food yesterday.', 'It is too expensive.', 'Hyunwoo doesn’t like it.', 'The restaurant is closed.'], explain: '중국 음식은 어제 먹었어. 고기 먹자!' },
      { id: 'r28c.q3', type: 'enOpts', prompt: 'What do they decide about the place?', opts: ['Let’s not go somewhere expensive — Hyunwoo has no money.', 'Let’s go to the most expensive place.', 'Let’s eat at the store.', 'Let’s meet at Hyunwoo’s house.'], explain: '비싼 데는 가지 말자 = let’s not go to an expensive place. (월급 is not much yet.)' },
    ],
  },
  {
    id: 'l28.board', kind: 'board', title: 'Neighborhood notice board', titleKo: '동네 게시판',
    reward: { id: 'l28.notice', ko: '동네 청소 장갑', en: 'Neighborhood clean-up gloves', desc: 'Bright yellow, child-sized. Pinned under the notice: a drawing of an orange cat holding a broom.' },
    heading: '3학년 2{반|반} 친구들아, 우리 동네 청소하자!',
    lines: [
      { ko: '이번 주 일요일 아침 아홉 시, 학교 앞에서 만나자!', en: 'This Sunday at 9 a.m., let’s meet in front of the school!' },
      { ko: '같이 길을 청소하고, 같이 산책하자.', en: 'Let’s clean the streets together and take a walk together.' },
      { ko: '쓰레기는 길에 {버리지|버리다} 말자.', en: 'Let’s not throw trash on the street.' },
      { ko: '{장갑|장갑}은 학교에서 줄 거야. 물만 가지고 와.', en: 'The school will give us gloves. Just bring water.' },
      { ko: '청소 다음에 다 같이 김밥 먹자!', en: 'After cleaning, let’s all eat kimbap together!' },
    ],
    gloss: { '버리다': 'to throw away', '장갑': 'gloves', '반': 'class (3학년 2반 = 3rd grade, class 2)' },
    qs: [
      { id: 'r28b.q1', type: 'enOpts', prompt: 'When and where do they meet?', opts: ['Sunday 9 a.m., in front of the school.', 'Saturday 9 p.m., at the store.', 'Every day at 9 a.m.', 'Sunday at noon, at the park.'], explain: '이번 주 일요일 아침 아홉 시, 학교 앞에서 만나자!' },
      { id: 'r28b.q2', type: 'enOpts', prompt: 'What should you bring?', opts: ['Only water — gloves are provided.', 'Gloves and kimbap.', 'A broom.', 'Nothing at all.'], explain: '장갑은 학교에서 줄 거야. 물만 가지고 와. (만 = only, Lesson 18)' },
      { id: 'r28b.q3', type: 'enOpts', prompt: 'Why is this notice written in 반말?', opts: ['Schoolchildren wrote it for their own classmates (same age).', 'Notices to the whole neighborhood are always in 반말.', 'The writer is angry.', 'It is not in 반말.'], explain: '3학년 2반 친구들아 = Hey, friends of class 3-2. Classmates of the same age use 반말 (Lesson 27, case 4). A notice to a big group of strangers would be 존댓말 (case 9).' },
    ],
  },
];
