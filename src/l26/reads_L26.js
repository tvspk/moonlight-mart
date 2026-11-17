/* reads_L26.js — Staff Group Chat + Neighborhood Notice Board for Lesson 26 (ㄷ irregular).
   {form|lemma} marks a word outside the lesson; tapping it shows gloss[lemma].
   App-written texts (NOT yet checked by a native speaker). */
MM.reads[26] = [
  {
    id: 'l26.chat', kind: 'chat', title: 'Staff group chat', titleKo: '달빛마트 직원방',
    reward: { id: 'l26.sticker', ko: '귀신 고양이 스티커', en: 'Ghost-cat sticker', desc: 'A white sheet with two orange ears sticking out.' },
    lines: [
      { who: 'boss', ko: '어젯밤에 이상한 소리 들었어요?', en: 'Did you hear a strange noise last night?' },
      { who: 'minji', ko: '네! 저도 들었어요. 뒷문에서 소리가 {났어요|나다}.', en: 'Yes! I heard it too. The noise came from the back door.' },
      { who: 'boss', ko: '그래서 오늘 아침에 뒷문을 고쳤어요. 이제 문을 닫으면 {조용해요|조용하다}.', en: 'So I fixed the back door this morning. Now when you close the door, it’s quiet.' },
      { who: 'minji', ko: '그럼 그 소리는 뭐였어요?', en: 'Then what was that noise?' },
      { who: 'boss', ko: '라면이었어요. 밤{마다|마다} 창고에서 걸어 다니고, 박스 위에서 울어요.', en: 'It was Ramyeon. Every night he walks around the stockroom and meows on top of the boxes.' },
      { who: 'minji', ko: 'ㅋㅋㅋ 저는 경찰관님의 {귀신|귀신} 이야기를 믿었어요!', en: 'lol I believed the officer’s ghost story!' },
    ],
    gloss: { '나다': 'to come out, to happen (소리가 나다 = a sound is made)', '조용하다': 'to be quiet', '마다': 'every (밤마다 = every night)', '귀신': 'ghost' },
    qs: [
      { id: 'r26c.q1', type: 'enOpts', prompt: 'Who heard the noise?', opts: ['Both Mr. Park and Minji.', 'Only Mr. Park.', 'Nobody.', 'Only the officer.'], explain: '이상한 소리 들었어요? — 네! 저도 들었어요.' },
      { id: 'r26c.q2', type: 'enOpts', prompt: 'What did Mr. Park fix?', opts: ['The back door: now it closes quietly.', 'The ventilation fan.', 'The radio.', 'Ramyeon’s bed.'], explain: '뒷문을 고쳤어요. 이제 문을 닫으면 조용해요.' },
      { id: 'r26c.q3', type: 'enOpts', prompt: 'What was the noise?', opts: ['Ramyeon walking and meowing in the stockroom at night.', 'A ghost.', 'The delivery truck.', 'Mr. Kim’s taxi.'], explain: '라면이었어요. 밤마다 창고에서 걸어 다니고, 박스 위에서 울어요.' },
    ],
  },
  {
    id: 'l26.board', kind: 'board', title: 'Neighborhood notice board', titleKo: '동네 게시판',
    reward: { id: 'l26.notice', ko: '걷기 모임 배지', en: 'Walking-club badge', desc: '“10,000 steps.” Ramyeon has one too. Nobody knows how.' },
    heading: '같이 걸어요! 아침 걷기 {모임|모임}',
    lines: [
      { ko: '매주 토요일 아침 7시에 공원 앞에서 만나요.', en: 'We meet every Saturday at 7 a.m. in front of the park.' },
      { ko: '한 시간 동안 같이 걸어요. 천천히 걸어요.', en: 'We walk together for an hour. We walk slowly.' },
      { ko: '다 걸은 다음에 같이 커피를 마셔요.', en: 'After we finish walking, we drink coffee together.' },
      { ko: '걷는 것을 좋아하는 사람은 {누구나|누구나} 오세요.', en: 'Anyone who likes walking, please come.' },
      { ko: '{궁금한|궁금하다} 것이 있으면 {관리실|관리실}에 {물어보세요|물어보다}.', en: 'If you have questions, ask at the management office.' },
    ],
    gloss: { '모임': 'meeting, club, group', '궁금하다': 'to be curious, to wonder', '누구나': 'anyone', '관리실': 'management office (of a building)', '물어보다': 'to ask (묻다 + 보다: to try asking)' },
    qs: [
      { id: 'r26b.q1', type: 'enOpts', prompt: 'When and where does the group meet?', opts: ['Every Saturday at 7 a.m. in front of the park.', 'Every day at 7 p.m. in the park.', 'Every Sunday at the management office.', 'Every Saturday at 7 p.m. at Moonlight Mart.'], explain: '매주 토요일 아침 7시에 공원 앞에서 만나요.' },
      { id: 'r26b.q2', type: 'enOpts', prompt: 'What do they do after walking?', opts: ['They drink coffee together.', 'They eat breakfast at home.', 'They walk another hour.', 'They clean the park.'], explain: '다 걸은 다음에 같이 커피를 마셔요. (걷 + 은 → 걸은: ㄷ → ㄹ before a vowel)' },
      { id: 'r26b.q3', type: 'enOpts', prompt: 'Who can join?', opts: ['Anyone who likes walking.', 'Only students.', 'Only people who walk fast.', 'Only people from the building.'], explain: '걷는 것을 좋아하는 사람은 누구나 오세요.' },
    ],
  },
];
