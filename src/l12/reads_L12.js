/* reads_L12.js — Staff Group Chat + Neighborhood Notice Board for Lesson 12.
   {form|lemma} marks a word outside the lesson; tapping it shows gloss[lemma].
   App-written texts (reviewed for natural Korean in the native-speaker pass, 2026-10-15). */
MM.reads[12] = [
  {
    id: 'l12.chat', kind: 'chat', title: 'Staff group chat', titleKo: '달빛마트 직원방',
    reward: { id: 'l12.sticker', ko: '마이크 스티커', en: 'Microphone sticker', desc: 'For the person who said they would not sing. And then sang four songs.' },
    lines: [
      { who: 'boss', ko: '여러분, 내일 {회식|회식}하고 노래방에 갈까요?', en: 'Everyone, shall we have the staff dinner tomorrow and then go to a noraebang?' },
      { who: 'minji', ko: '좋아요! 그런데 저는 노래 {못해요|못하다}. ㅋㅋ', en: 'Sounds good! But I’m bad at singing. lol' },
      { who: 'boss', ko: '괜찮아요. 저도 노래 못해요. 그래도 노래방은 재미있어요.', en: 'That’s okay. I’m bad at singing too. But still, noraebang is fun.' },
      { who: 'minji', ko: '현우 씨는요? 요즘 바빠요?', en: 'What about Hyunwoo? Is he busy these days?' },
      { who: 'boss', ko: '네, 요즘 정말 바빠요. 그래도 올 거예요.', en: 'Yes, he’s really busy these days. But he’s still coming.' },
      { who: 'minji', ko: '그럼 저도 갈게요. 그래도 노래는 안 할 거예요!', en: 'Then I’ll come too. But I’m still not going to sing!' },
    ],
    gloss: { '회식': 'staff dinner; 회식하다 = to have a staff dinner', '못하다': 'to be bad at (something); 노래 못해요 = I can’t sing well' },
    qs: [
      { id: 'r12c.q1', type: 'enOpts', prompt: 'What does Mr. Park suggest?', opts: ['Going to a noraebang after the staff dinner.', 'Cancelling the staff dinner.', 'Singing at the store.', 'Going home early.'], explain: '회식하고 노래방에 갈까요? (-고 = and then, Lesson 2; -(으)ㄹ까요 = shall we, Lesson 4).' },
      { id: 'r12c.q2', type: 'enOpts', prompt: 'Why does Mr. Park like noraebang?', opts: ['It’s fun, even though he is bad at singing.', 'Because he is a great singer.', 'Because it is cheap.', 'He doesn’t like it.'], explain: '저도 노래 못해요. 그래도 노래방은 재미있어요.' },
      { id: 'r12c.q3', type: 'enOpts', prompt: 'What does Minji decide?', opts: ['She will come, but she won’t sing.', 'She won’t come because she is busy.', 'She will come and sing a lot.', 'She will sing, but not come to the dinner.'], explain: '저도 갈게요. 그래도 노래는 안 할 거예요! — just like the textbook sentence.' },
    ],
  },
  {
    id: 'l12.board', kind: 'board', title: 'Neighborhood notice board', titleKo: '동네 게시판',
    reward: { id: 'l12.notice', ko: '축구공 배지', en: 'Soccer-ball badge', desc: 'Team “Moonlight”. Undefeated in the rain (they have played once).' },
    heading: '달빛 {축구|축구} {모임|모임}',
    lines: [
      { ko: '{매주|매주} 일요일 아침 일곱 시에 공원에서 축구를 해요.', en: 'Every Sunday at seven in the morning, we play soccer in the park.' },
      { ko: '지난주에는 비가 많이 왔어요. 그래도 축구를 했어요!', en: 'Last week it rained a lot. Nevertheless, we played soccer!' },
      { ko: '축구를 잘 못해요? 그래도 괜찮아요.', en: 'Not good at soccer? That’s still okay.' },
      { ko: '공원이 좀 멀어요? 그래도 꼭 오세요!', en: 'Is the park a bit far? Please come anyway!' },
      { ko: '축구가 끝나고 같이 {아침|아침}을 먹어요.', en: 'When soccer is over, we have breakfast together.' },
      { ko: '{궁금해요|궁금하다}? 달빛마트 계산대에 물어보세요.', en: 'Any questions? Ask at the Moonlight Mart counter.' },
    ],
    gloss: { '축구': 'soccer', '모임': 'club, group, meeting', '아침': 'morning; breakfast', '궁금하다': 'to be curious, to wonder; 궁금해요? = (do you) want to know more?', '매주': 'every week' },
    qs: [
      { id: 'r12b.q1', type: 'enOpts', prompt: 'What happened last week?', opts: ['It rained a lot, but they still played.', 'It rained, so they didn’t play.', 'Nobody came.', 'They played in the store.'], explain: '비가 많이 왔어요. 그래도 축구를 했어요!' },
      { id: 'r12b.q2', type: 'enOpts', prompt: 'You are not good at soccer. Can you join?', opts: ['Yes, that is still okay.', 'No, only good players.', 'Only if the park is near.', 'Only on rainy days.'], explain: '축구를 잘 못해요? 그래도 괜찮아요.' },
      { id: 'r12b.q3', type: 'enOpts', prompt: 'What do they do after soccer?', opts: ['They have breakfast together.', 'They go to a noraebang.', 'They go home and sleep.', 'They go to the store to work.'], explain: '축구가 끝나고 같이 아침을 먹어요.' },
    ],
  },
];
