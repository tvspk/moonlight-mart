/* reads_L23.js — Staff Group Chat + Neighborhood Notice Board for Lesson 23 (Word Builder 학).
   {form|lemma} marks a word outside the lesson; tapping it shows gloss[lemma].
   App-written texts (NOT yet checked by a native speaker). */
MM.reads[23] = [
  {
    id: 'l23.chat', kind: 'chat', title: 'Staff group chat', titleKo: '달빛마트 직원방',
    reward: { id: 'l23.sticker', ko: '학생증 스티커', en: 'Student-ID sticker', desc: 'Name: 라면. Major: sleeping. Year: forever.' },
    lines: [
      { who: 'boss', ko: '현우가 오늘 학교에 갔어요. {복학|복학} 첫날이에요!', en: 'Hyunwoo went to school today. It’s his first day back!' },
      { who: 'minji', ko: '와! 현우 씨는 몇 학년이에요?', en: 'Wow! What year is Hyunwoo in?' },
      { who: 'boss', ko: '3학년이에요. 경제학을 공부해요.', en: 'He’s in third year. He studies economics.' },
      { who: 'minji', ko: '경제학이요? 어려울 것 같아요.', en: 'Economics? Sounds difficult.' },
      { who: 'boss', ko: '그래서 이번 방학에 학원에도 {다녔어요|다니다}.', en: 'That’s why he also went to an academy this vacation.' },
      { who: 'minji', ko: 'ㅋㅋ 그럼 이번 학기에 장학금 받을 수도 있어요!', en: 'lol, then he might get a scholarship this semester!' },
      { who: 'boss', ko: '장학금 받으면 저한테 커피 사야 돼요.', en: 'If he gets a scholarship, he has to buy me a coffee.' },
    ],
    gloss: { '복학': 'returning to school (복 return + 학); 복학생 = a returning student', '다니다': 'to go (regularly), to attend' },
    qs: [
      { id: 'r23c.q1', type: 'enOpts', prompt: 'What does Hyunwoo study?', opts: ['Economics.', 'Mathematics.', 'Physics.', 'Linguistics.'], explain: '경제학을 공부해요.' },
      { id: 'r23c.q2', type: 'enOpts', prompt: 'What did Hyunwoo do during the vacation?', opts: ['He went to a private academy.', 'He studied abroad.', 'He changed schools.', 'He went on a school trip.'], explain: '이번 방학에 학원에도 다녔어요.' },
      { id: 'r23c.q3', type: 'enOpts', prompt: 'What does Minji think might happen?', opts: ['Hyunwoo might get a scholarship.', 'Hyunwoo might change schools.', 'Hyunwoo might become a professor.', 'Hyunwoo might stop studying.'], explain: '장학금 받을 수도 있어요 (might, Lesson 22).' },
    ],
  },
  {
    id: 'l23.board', kind: 'board', title: 'Neighborhood notice board', titleKo: '동네 게시판',
    reward: { id: 'l23.notice', ko: '한국어 학습 모임 이름표', en: 'Study-group name tag', desc: 'Hello, my name is ___. (Fill in your name. In Korean, please.)' },
    heading: '한국어 학습 {모임|모임}',
    lines: [
      { ko: '우리 동네에는 대학교가 있어요. 그래서 유학생이 많아요.', en: 'There is a university in our neighborhood. So there are a lot of international students.' },
      { ko: '매주 토요일 오후 세 시에 도서관에서 만나요.', en: 'We meet every Saturday at 3 p.m. at the library.' },
      { ko: '독학은 어려워요. 같이 공부하면 더 재미있어요!', en: 'Self-study is difficult. If we study together, it’s more fun!' },
      { ko: '유학생, 대학원생, 대학교수… 다 괜찮아요.', en: 'International students, graduate students, professors… everyone is welcome.' },
      { ko: '학원은 비싸요? 여기는 {무료|무료}예요!', en: 'Academies are expensive? Here it’s free!' },
    ],
    gloss: { '모임': 'a meeting, a group (that meets)', '무료': 'free (of charge)' },
    qs: [
      { id: 'r23b.q1', type: 'enOpts', prompt: 'Why are there many international students in the neighborhood?', opts: ['There is a university.', 'There is a private academy.', 'There is a high school.', 'The library is free.'], explain: '대학교가 있어요. 그래서 유학생이 많아요.' },
      { id: 'r23b.q2', type: 'enOpts', prompt: 'What does the notice say about self-study?', opts: ['It’s difficult; studying together is more fun.', 'It’s the best way to learn.', 'It’s free.', 'It’s only for professors.'], explain: '독학은 어려워요. 같이 공부하면 더 재미있어요!' },
      { id: 'r23b.q3', type: 'enOpts', prompt: 'How much does the group cost?', opts: ['Nothing — it’s free.', 'The same as an academy.', 'A little, every Saturday.', 'It isn’t written.'], explain: '여기는 무료예요!' },
    ],
  },
];
