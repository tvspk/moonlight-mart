/* game_L25.js — Moonlight Mart, Lesson 25 (-네요: verb stem + 네요, past -았/었 + 네요, noun + 이네요; impressed / surprised /
   finding out, vs the plain fact with -아/어요).
   Lines: [castId, korean, english]. q.opts: correct option first (engine shuffles). odd: opts[0] is the WRONG sentence.
   Forms come from forms_L25.js (generated, checked against the book): ne (present), pastNe (past), hae (plain fact).
   ㄹ-stems (멀다 → 머네요) are an app extension (the rule of 여는, Lesson 14), not in the L25 book text.
   Game words not in the book: 조명, 열쇠, 바닥, 안경, 온도계, 귤, 유니폼, 설거지, 깨지다, 조심하다, 눈이 오다 — glossed where they
   appear. Grammar in the lines only from L1–24. App-written sentences are NOT yet checked by a native speaker (⚠ list in HANDOFF.md).
   lenient off at the end: 맞네요 / 만네요 differ by one jamo. */

/* explains any wrong -네요 form w of the word d (used by textbook, workbook and the questions below; this file loads before them) */
MM.l25why = (d, w) => {
  const f = (MM.forms[25] || []).find(r => r.dict === d); if (!f) return '';
  const stem = d.slice(0, -1);
  if (f.kind === 'noun') {
    if (w.endsWith('이에요네요')) return `-네요 takes the place of -에요: ${d} + 이네요 → ${f.ne}.`;
    if (w.endsWith('내요')) return `The ending is spelled 네요 (ㅔ), not 내요: ${f.ne}.`;
    return `After a final consonant the noun needs 이(다): ${d} + 이네요 → ${f.ne}.`;
  }
  if ((f.wrongPast || []).includes(w)) {
    const p = f.pastNe;
    if (w === f.hae.slice(0, -1) + '네요') return `That is not past. Past: the past suffix -았/었 + 네요 → ${p}.`;
    if (w.endsWith('어네요')) return `Take only the past suffix (${p.slice(0, -2)}), not the whole past form (${f.past}), and add 네요 → ${p}.`;
    if (w.endsWith('내요')) return `The ending is spelled 네요 (ㅔ), not 내요: ${p}.`;
    return `That is how it sounds (ㅆ before ㄴ is heard as ㄴ), but it is written ${p}.`;
  }
  if (!(f.wrong || []).includes(w)) return '';
  const r = f.ne;
  if (w === f.hae.slice(0, -1) + '네요') return `-네요 goes on the verb stem (${d} → ${stem}), not on the 해요 form (${f.hae}): ${r}.`;
  if (w.endsWith('내요')) return `The ending is spelled 네요 (ㅔ), not 내요: ${r}.`;
  if (f.irr === 'ㄹ' && w === stem + '네요') return `ㄹ drops before ㄴ, just like 열다 → 여는 (Lesson 14): ${r}.`;
  if (w.endsWith('으네요')) return `-네요 is added straight onto the stem, with no 으 (even after a consonant): ${r}.`;
  return `That is how it sounds (the final consonant before ㄴ), but write the stem as it is: ${r}.`;
};

MM.game[25] = {
  skills: {
    'l25.form':  { en: 'Stem + -네요', desc: 'Verb stem + 네요: 크네요, 맞네요, 있네요. -네요 starts with a consonant, so irregular stems do not change: 춥네요, 어렵네요, 빠르네요. (ㄹ-stems drop ㄹ: 멀다 → 머네요.)' },
    'l25.past':  { en: 'Past + -네요', desc: 'Past suffix -았/었/였 + 네요: 왔네요, 안 왔네요, 고쳤네요.' },
    'l25.noun':  { en: 'Noun + 이네요', desc: 'Noun + 이다 + 네요: 11월이네요, 좋은 남편이네요.' },
    'l25.usage': { en: 'When to use -네요', desc: '-네요 shows that you are impressed, surprised, or giving your own impression, often because you just found it out. A fact you already know is told with -아/어요: 이 드라마 재미있어요.' },
    'l25.vocab': { en: 'Lesson 25 vocabulary', desc: 'The words of the lesson.' },
  },
  fixSkills: { floodlamp: 'l25.form', thermo: 'l25.past', staffmirror: 'l25.usage' },
  formTpl: {
    key: 'ne', prompt: '{dict} ({en}) → -네요', ko: '___', explain: '{dict} → {form}', skill: 'l25.form',
    skillBy: { noun: 'l25.noun' }, irrNotes: { 'ㄹ': 'ㄹ drops before ㄴ, like 여는 in Lesson 14' },
    variants: [
      { key: 'ne', wrongKey: 'wrong', prompt: '{dict} ({en}) → -네요 (I see that… / wow!)', explain: '{dict} → {form}' },
      { key: 'pastNe', wrongKey: 'wrongPast', prompt: '{dict} ({en}) → past + -네요', explain: '{dict} → {form}: past suffix + 네요', skill: 'l25.past' },
    ],
  },
  intro: 'Change the end of a plain sentence to -네요 and you show that you are impressed, surprised, or giving your own impression: 맛있어요 = it is delicious (a fact), 맛있네요 = oh, it is delicious! Verb stem + 네요 (크네요, 맞네요), past suffix + 네요 (왔네요), noun + 이네요 (11월이네요). Tonight the new light is bright, the box is heavy, and it is suddenly November.',

  shifts: {
    A: {
      title: 'Oh, Here It Is!', sub: 'Recognize · choose', kind: 'recognize', fix: 'floodlamp',
      snack: { id: 'l25.snackA', ko: '와! 맛있네요 칩', en: 'Oh-Wow Chips', desc: 'The bag says “맛있네요!” before you even open it.' },
      scenes: [
        { id: 'A1', time: '22:00', place: 'Stockroom', narr: 'Twenty-fifth night. Mr. Park has hung a big new light in the stockroom. (조명 = light, lamp)',
          lines: [['minji', '새 조명이에요? 와, 정말 밝네요!', 'Is that a new light? Wow, it’s really bright!']],
          q: { type: 'enOpts', prompt: 'What does 밝네요 show here?', opts: ['Minji is surprised by how bright it is.', 'Minji says the light is broken.', 'Minji asks if it is bright.', 'Minji already knew it was bright and states a fact.'], skill: 'l25.usage',
            explain: '밝다 (to be bright) → 밝네요: -네요 shows that you are impressed or surprised.', en: 'Wow, it’s really bright!' } },
        { id: 'A2', time: '22:20', place: 'Counter', narr: 'Minji is looking for her locker key. She checks her pockets. (열쇠 = key)',
          lines: [['minji', '제 열쇠가 어디 있어요? …아, 여기 있네요!', 'Where is my key? …Oh, here it is!']],
          q: { type: 'enOpts', prompt: 'What does “여기 있네요!” mean here?', opts: ['Oh, here it is!', 'It is here, I told you.', 'Is it here?', 'It was here yesterday.'], skill: 'l25.form',
            explain: 'Textbook sample sentence: 여기 있네요! = Oh, here it is! (있다 → 있네요)', en: 'Oh, here it is!' } },
        { id: 'A3', time: '23:00', place: 'Eat-in table', narr: 'Sua is watching a drama on her phone instead of studying. She started it ten minutes ago.',
          lines: [['sua', '이 드라마 재미있네요.', 'I find this drama fun to watch.']],
          q: { type: 'enOpts', prompt: 'Why does Sua say 재미있네요, not 재미있어요?', opts: ['She has just found out that it is fun: her impression.', 'She has known it for years and states a fact.', 'She is asking you a question.', 'She thinks it was fun in the past.'], skill: 'l25.usage',
            explain: 'Textbook: if you already know that this drama is fun and tell someone as a fact, say 이 드라마 재미있어요.', en: 'I find this drama fun to watch.' } },
        { id: 'A4', time: '23:30', place: 'Front door', narr: 'Mr. Lee comes in without a coat. It is November.',
          lines: [['manager', '어? 오늘은 별로 안 춥네요.', 'Huh? Well, it’s not that cold today.']],
          q: { type: 'enOpts', prompt: 'What does Mr. Lee notice?', opts: ['It’s not that cold today.', 'It’s very cold today.', 'He has no coat.', 'It will be cold tomorrow.'], skill: 'l25.form',
            explain: 'Textbook: 별로 안 춥네요 = Well, it’s not that cold. 별로 + negative = not that…; 춥다 → 춥네요 (the ㅂ does not change before a consonant).', en: 'Well, it’s not that cold today.' } },
        { id: 'A5', time: '00:30', place: 'Memo board', narr: 'Minji practised the lesson on the memo board. One sentence is wrong.',
          q: { type: 'odd', prompt: 'Which sentence is WRONG?', opts: ['날씨가 추워네요.', '날씨가 춥네요.', '여기 있네요!', '벌써 11월이네요.'], skill: 'l25.form',
            explain: '-네요 goes on the stem: 춥다 → 춥 + 네요 = 춥네요. 추워네요 puts it on the 해요 form (추워요).', en: '' } },
        { id: 'A6', time: '01:00', place: 'Stockroom', narr: 'Mr. Park asks you to move a box of bottled water. You lift it.',
          q: { type: 'mc', prompt: '“Wow, this is heavy!”', ko: '와, 이거 ___!', opts: ['무겁네요', '무거워네요', '무검네요', '무겁으네요'], skill: 'l25.form',
            explain: '무겁다 → 무겁 + 네요 = 무겁네요 (Workbook 16). It sounds like [무검네요], but the stem is written as it is.', en: 'Wow, this is heavy!' } },
        { id: 'A7', time: '02:00', place: 'Coffee machine', narr: 'Mr. Kim tries the coffee from the new beans.',
          lines: [['taxi', '오, 커피 맛있네요!', 'Oh, the coffee is good!']],
          q: { type: 'enOpts', prompt: 'Why 맛있네요?', opts: ['He has just tasted it and is impressed.', 'He tells you a fact he has known for years.', 'He wants another coffee.', 'He thinks it was good yesterday.'], skill: 'l25.usage',
            explain: 'Textbook: 맛있어요 just means “it is delicious”; 맛있네요 expresses that you are impressed or surprised by the taste.', en: 'Oh, the coffee is good!' } },
        { id: 'A8', time: '03:00', place: 'Front door', narr: 'The officer comes in. His shoes are wet. (조심하다 = to be careful)',
          lines: [['police', '밖에 물이 생각보다 깊네요. 조심하세요.', 'The water outside is deeper than I thought. Be careful.']],
          q: { type: 'enOpts', prompt: 'What does the officer warn you about?', opts: ['The water outside is deeper than he thought.', 'The water outside is dirty.', 'There is no water outside.', 'The night is darker than he thought.'], skill: 'l25.form',
            explain: 'Workbook 17: 물이 생각보다 깊네요. 깊다 → 깊네요 (sounds like [김네요]).', en: 'The water outside is deeper than I thought.' } },
        { id: 'A9', time: '04:30', place: 'Stockroom', narr: 'The new light went out at four. A loose wire. You fix it and switch it on again.',
          q: { type: 'mc', prompt: '“Wow, it’s bright!”', ko: '와, ___!', opts: ['밝네요', '방네요', '밝아네요', '밝으네요'], skill: 'l25.form',
            explain: '밝다 → 밝 + 네요 = 밝네요 (Workbook 19). It sounds like [방네요], but you write the stem 밝.', en: 'Wow, it’s bright!' } },
        { id: 'A10', time: '05:30', place: 'Stockroom', narr: 'Mr. Park comes down and sees the light on.',
          lines: [['boss', '어, 조명 고쳤네요! 고마워요.', 'Oh, you fixed the light! Thank you.']],
          q: { type: 'enOpts', prompt: 'What does Mr. Park say?', opts: ['Oh, (I see) you fixed the light!', 'Please fix the light.', 'Will you fix the light?', 'I fixed the light.'], skill: 'l25.past',
            explain: '고치다 → past 고쳤 + 네요 = 고쳤네요: he has just found out that you fixed it.', en: 'Oh, you fixed the light!' },
          afterNarr: 'Ramyeon has already moved under the new light. It is warm. It is his light now.' },
      ],
      cctv: [
        { id: 'A.c1', type: 'enOpts', prompt: 'Changing a plain sentence to end with -네요 expresses…', opts: ['that you are impressed, surprised, or your own personal thought', 'that you ask a question', 'that something happened in the past', 'that you will do something'], skill: 'l25.usage', explain: 'Textbook p.156.', en: '' },
        { id: 'A.c2', type: 'mc', prompt: '크다 + -네요', opts: ['크네요', '커네요', '크내요', '커요'], skill: 'l25.form', explain: 'Textbook: 크 + 네요 → 크네요 = (I see that) it is big.', en: '' },
        { id: 'A.c3', type: 'enOpts', prompt: '“이 드라마 재미있네요.”', opts: ['I find this drama fun to watch.', 'This drama was fun.', 'Is this drama fun?', 'This drama will be fun.'], skill: 'l25.usage', explain: 'Textbook sample sentence.', en: 'I find this drama fun to watch.' },
        { id: 'A.c4', type: 'mc', prompt: '“Oh, look. Nobody is here yet.”', ko: '아무도 안 ___.', opts: ['왔네요', '왔어네요', '와네요', '완네요'], skill: 'l25.past', explain: 'Textbook: 아무도 안 왔네요. Past suffix 았 (오 + 았 → 왔) + 네요.', en: 'Oh, look. Nobody is here yet.' },
        { id: 'A.c5', type: 'enOpts', prompt: '“벌써 11월이네요.”', opts: ['Wow, it’s already November!', 'It will be November soon.', 'Is it already November?', 'It was November last week.'], skill: 'l25.noun', explain: 'Textbook sample sentence: noun + 이네요.', en: 'Wow, it’s already November!' },
        { id: 'A.c6', type: 'mc', prompt: 'You have known for a long time that this drama is fun. You tell a friend as a fact:', opts: ['이 드라마 재미있어요.', '이 드라마 재미있네요.', '이 드라마 재미있어네요.', '이 드라마 재미있내요.'], skill: 'l25.usage', explain: 'Textbook note: a fact you already know → 이 드라마 재미있어요.', en: 'This drama is fun.' },
      ],
    },

    B: {
      title: 'Already November', sub: 'Build · write', kind: 'produce', fix: 'thermo',
      note: { by: 'boss', text: 'Night shift rule #25: the stockroom thermometer (온도계) says −10°. It is lying. Please don’t believe it, and please don’t call me about it. — Park' },
      snack: { id: 'l25.snackB', ko: '벌써 11월이네요 호빵', en: 'Already-November Steamed Bun', desc: 'Appears on the counter the very first cold night. Nobody knows who orders them.' },
      scenes: [
        { id: 'B1', time: '22:00', place: 'Counter', narr: 'Minji turns the calendar page before she leaves. November.',
          q: { type: 'tiles', prompt: 'Say: “Wow, it’s already November!”', ans: ['벌써 11월이네요.'], soft: [{ p: '(와 |)벌써 11월이네요', note: 'Accepted.' }], extra: ['11월네요.', '11월이에요.', '아직'], skill: 'l25.noun',
            diag: [{ p: '(와 |)벌써 11월네요', note: MM.l25why('11월', '11월네요') }, { p: '(와 |)벌써 11월이에요', note: '11월이에요 just states the fact. To show surprise: 11월이네요.' }, { p: '(와 |)벌써 11월이에요네요', note: MM.l25why('11월', '11월이에요네요') }],
            explain: 'Textbook: 벌써 11월이네요. Noun + 이네요.', en: 'Wow, it’s already November!' },
          after: [['minji', '그러니까요! 시간이 정말 빠르네요.', 'I know! Time really flies.']] },
        { id: 'B2', time: '22:30', place: 'Counter', narr: 'Sua comes in with new glasses. (안경 = glasses)',
          q: { type: 'write', prompt: 'Tell Sua you are impressed: “Oh! They look good on you.” (잘 어울리다)', ans: ['잘 어울리네요!'], soft: [{ p: '(와 |오 |)(손님 |)(안경(이|) |)(정말 |진짜 |)잘 어울리네요', note: 'Accepted.' }], skill: 'l25.form',
            diag: [{ p: '(와 |오 |)(손님 |)(안경(이|) |)(정말 |진짜 |)잘 어울려네요', note: MM.l25why('어울리다', '어울려네요') }, { p: '(와 |오 |)(손님 |)(안경(이|) |)(정말 |진짜 |)잘 어울리내요', note: MM.l25why('어울리다', '어울리내요') }, { p: '(와 |오 |)(손님 |)(안경(이|) |)(정말 |진짜 |)잘 어울려요', note: 'Correct Korean, but it states a fact. To show you are impressed: 잘 어울리네요.' }],
            explain: 'Textbook: 잘 어울리 + 네요 → 잘 어울리네요 = Oh! I find that it looks good on you.', en: 'Oh! They look good on you.' },
          after: [['sua', '진짜요? 고마워요!', 'Really? Thank you!']] },
        { id: 'B3', time: '23:30', place: 'Stockroom', narr: 'It rained all day. The stockroom floor is covered in muddy boot prints. (바닥 = floor)',
          q: { type: 'write', prompt: 'Say: “Wow, the floor is really dirty.”', ans: ['와, 바닥이 정말 더럽네요.'], soft: [{ p: '(와 |)바닥(이|) (정말 |진짜 |너무 |)더럽네요', note: 'Accepted.' }], skill: 'l25.form',
            diag: MM.forms[25].find(f => f.dict === '더럽다').wrong.map(w => ({ p: '(와 |)바닥(이|) (정말 |진짜 |너무 |)' + w, note: MM.l25why('더럽다', w) })),
            explain: '더럽다 → 더럽네요 (Workbook 18). The ㅂ stays: -네요 starts with a consonant.', en: 'Wow, the floor is really dirty.' } },
        { id: 'B4', time: '00:30', place: 'Stockroom', narr: 'The stockroom thermometer says −10°. You are wearing a T-shirt. (온도계 = thermometer)',
          q: { type: 'write', prompt: 'Say: “Well, it’s not that cold.”', ans: ['별로 안 춥네요.'], soft: [{ p: '(음 |)(근데 |)별로 안 춥네요', note: 'Accepted.' }], skill: 'l25.form',
            diag: MM.forms[25].find(f => f.dict === '춥다').wrong.map(w => ({ p: '(음 |)(근데 |)별로 안 ' + w, note: MM.l25why('춥다', w) })).concat([{ p: '(음 |)(근데 |)별로 춥네요', note: '별로 needs a negative: 별로 안 춥네요 = it’s not that cold.' }, { p: '(음 |)(근데 |)별로 안 추워요', note: 'Correct Korean, but a plain fact. You just noticed it: 별로 안 춥네요.' }]),
            explain: 'Textbook: 별로 안 춥네요 = Well, it’s not that cold.', en: 'Well, it’s not that cold.' } },
        { id: 'B5', time: '01:00', place: 'Counter', narr: 'Grandma brings a crossword. She shows you her answer and the answer page.',
          lines: [['grandma', '학생, 이거 맞아요?', 'Dear, is this right?']],
          q: { type: 'write', prompt: 'You check and find out: “I see that it’s correct!”', ans: ['맞네요!'], soft: [{ p: '(와 |오 |할머니 |)(이거 |)(정말 |다 |)맞네요', note: 'Accepted.' }], skill: 'l25.form',
            diag: MM.forms[25].find(f => f.dict === '맞다').wrong.map(w => ({ p: '(와 |오 |할머니 |)(이거 |)(정말 |다 |)' + w, note: MM.l25why('맞다', w) })).concat([{ p: '(와 |오 |할머니 |)(이거 |)(정말 |다 |)맞아요', note: 'Correct Korean, but you are finding it out for the first time: 맞네요!' }]),
            explain: 'Textbook: 맞 + 네요 → 맞네요 = I see that it’s correct! (Finding out a fact for the first time.)', en: 'I see that it’s correct!' },
          after: [['grandma', '그럼요! 저는 이거 매일 해요.', 'Of course! I do this every day.']] },
        { id: 'B6', time: '02:00', place: 'Coffee machine', narr: 'You try the coffee from the new beans for the first time.',
          q: { type: 'write', prompt: 'Say: “Oh, this coffee is good!”', ans: ['오, 이 커피 맛있네요!'], soft: [{ p: '(와 |오 |)(이 |)커피(가|) (정말 |진짜 |)맛있네요', note: 'Accepted.' }], skill: 'l25.form',
            diag: MM.forms[25].find(f => f.dict === '맛있다').wrong.map(w => ({ p: '(와 |오 |)(이 |)커피(가|) (정말 |진짜 |)' + w, note: MM.l25why('맛있다', w) })),
            explain: '맛있다 → 맛있네요 (Textbook p.156). It sounds like [마신네요]; write 맛있네요.', en: 'Oh, this coffee is good!' },
          after: [['taxi', '네! 그래서 제가 매일 와요.', 'Yes! That’s why I come every day.']] },
        { id: 'B7', time: '03:00', place: 'Coffee machine', narr: 'Mr. Kim waits for two taxi-driver friends. “They’ll be here at three,” he said. It is half past three.',
          q: { type: 'write', prompt: 'Say: “Oh, look. Nobody is here yet.”', ans: ['아무도 안 왔네요.'], soft: [{ p: '(기사님 |)(아직 |)아무도 안 왔네요', note: 'Accepted.' }], skill: 'l25.past',
            diag: MM.forms[25].find(f => f.dict === '오다').wrongPast.map(w => ({ p: '(기사님 |)(아직 |)아무도 안 ' + w, note: MM.l25why('오다', w) })).concat([{ p: '(기사님 |)(아직 |)아무도 왔네요', note: '아무도 (nobody) needs a negative: 아무도 안 왔네요.' }]),
            explain: 'Textbook: 아무도 안 왔네요. 오 + 았 → 왔 + 네요.', en: 'Oh, look. Nobody is here yet.' },
          after: [['taxi', '하하, 다 자고 있을 거예요.', 'Haha, they’re probably all asleep.']] },
        { id: 'B8', time: '04:30', place: 'Stockroom', narr: 'You put a new battery in the thermometer. Now it says 18°. You hold your hand near the heater.',
          q: { type: 'mc', prompt: '“Hm, it’s warm.” (따뜻하다)', ko: '음, ___.', opts: ['따뜻하네요', '따뜻해네요', '따뜻하내요', '따뜻했어네요'], skill: 'l25.form',
            explain: '따뜻하다 → 따뜻하 + 네요 = 따뜻하네요 (on the stem, not on 따뜻해요).', en: 'Hm, it’s warm.' } },
        { id: 'B9', time: '05:30', place: 'Front door', narr: 'Minji arrives for the day shift. Half an hour early.',
          q: { type: 'write', prompt: 'Say: “Minji, you got here early!”', ans: ['민지 씨, 빨리 왔네요!'], soft: [{ p: '(와 |오 |)(민지 씨 |)(오늘 |)(빨리|일찍) 왔네요', note: 'Accepted.' }], skill: 'l25.past',
            diag: MM.forms[25].find(f => f.dict === '오다').wrongPast.map(w => ({ p: '(와 |오 |)(민지 씨 |)(오늘 |)(빨리|일찍) ' + w, note: MM.l25why('오다', w) })),
            explain: 'Like the workbook dictation: 석진 씨, 빨리 왔네요. 오 + 았 → 왔 + 네요.', en: 'Minji, you got here early!' },
          after: [['minji', '네. 오늘 버스가 빨리 왔어요.', 'Yes. The bus came quickly today.']] },
        { id: 'B10', time: '05:40', place: 'Counter', narr: 'Mr. Park comes down with a huge box of tangerines. (귤 = tangerine)',
          lines: [['boss', '할머니가 주셨어요. 다 같이 먹어요!', 'Grandma gave them to us. Let’s all eat them!']],
          q: { type: 'write', prompt: 'Say: “Wow, there are really a lot!” (많다)', ans: ['와, 정말 많네요!'], soft: [{ p: '(와 |)(귤이 |)(정말 |진짜 |너무 |)많네요', note: 'Accepted.' }], skill: 'l25.form',
            diag: [{ p: '(와 |)(귤이 |)(정말 |진짜 |너무 |)많아네요', note: MM.l25why('많다', '많아네요') }, { p: '(와 |)(귤이 |)(정말 |진짜 |너무 |)많으네요', note: MM.l25why('많다', '많으네요') }, { p: '(와 |)(귤이 |)(정말 |진짜 |너무 |)만네요', note: 'That is how it sounds ([만네요]), but write the stem 많: 많네요.' }],
            explain: '많다 → 많네요 (sounds like [만네요]).', en: 'Wow, there are really a lot!' },
          afterNarr: 'Ramyeon has climbed into the empty tangerine box. It fits. It always fits.' },
      ],
      cctv: [
        { id: 'B.c1', type: 'write', prompt: 'Translate: Oh! It looks good on you. (impressed)', ans: ['잘 어울리네요.'], soft: [{ p: '(오 |와 |)(정말 |)잘 어울리네요', note: 'Accepted.' }], skill: 'l25.form', diag: MM.forms[25].find(f => f.dict === '어울리다').wrong.map(w => ({ p: '(오 |와 |)잘 ' + w, note: MM.l25why('어울리다', w) })), explain: 'Textbook exercise 1.', en: 'Oh! It looks good on you.' },
        { id: 'B.c2', type: 'write', prompt: 'Translate: I see that it’s correct! (finding out)', ans: ['맞네요.'], soft: [{ p: '(오 |와 |)(정말 |)맞네요', note: 'Accepted.' }], skill: 'l25.form', diag: MM.forms[25].find(f => f.dict === '맞다').wrong.map(w => ({ p: w, note: MM.l25why('맞다', w) })), explain: 'Textbook exercise 2.', en: 'I see that it’s correct!' },
        { id: 'B.c3', type: 'write', prompt: 'Translate: Oh, here it is. (여기)', ans: ['여기 있네요.'], soft: [{ p: '(아 |)여기 있(었|)네요', note: 'Accepted.' }], skill: 'l25.form', diag: MM.forms[25].find(f => f.dict === '있다').wrong.map(w => ({ p: '(아 |)여기 ' + w, note: MM.l25why('있다', w) })), explain: 'Textbook exercise 3.', en: 'Oh, here it is.' },
        { id: 'B.c4', type: 'write', prompt: 'Translate: Well, it’s not that cold.', ans: ['별로 안 춥네요.'], skill: 'l25.form', diag: MM.forms[25].find(f => f.dict === '춥다').wrong.map(w => ({ p: '별로 안 ' + w, note: MM.l25why('춥다', w) })).concat([{ p: '별로 춥네요', note: '별로 needs a negative: 별로 안 춥네요.' }]), explain: 'Textbook exercise 4.', en: 'Well, it’s not that cold.' },
        { id: 'B.c5', type: 'write', prompt: 'Translate: Wow, it’s already November.', ans: ['벌써 11월이네요.'], soft: [{ p: '(와 |)벌써 (11월|십일월)이네요', note: 'Accepted.' }], skill: 'l25.noun', diag: MM.forms[25].find(f => f.dict === '11월').wrong.map(w => ({ p: '(와 |)벌써 ' + w, note: MM.l25why('11월', w) })), explain: 'Textbook exercise 5.', en: 'Wow, it’s already November.' },
        { id: 'B.c6', type: 'write', prompt: 'Change to -네요: 시험이 너무 어려워요.', ans: ['시험이 너무 어렵네요.'], skill: 'l25.form', diag: MM.forms[25].find(f => f.dict === '어렵다').wrong.map(w => ({ p: '시험이 너무 ' + w, note: MM.l25why('어렵다', w) })), explain: 'Workbook 14.', en: 'The exam is so difficult!' },
      ],
    },

    C: {
      title: 'Looks Good on You', sub: 'Mixed · optional', kind: 'mixed', fix: 'staffmirror', optional: true,
      snack: { id: 'l25.snackC', ko: '잘 어울리네요 젤리', en: 'Looks-Good-on-You Jelly', desc: 'Every colour suits everyone. The mirror agrees.' },
      scenes: [
        { id: 'C1', time: '22:30', place: 'Stockroom', narr: 'Mr. Park bought new winter uniforms. Minji tries hers on in front of the cracked stockroom mirror. (유니폼 = uniform)',
          lines: [['minji', '새 유니폼이에요! 어때요?', 'It’s the new uniform! How is it?']],
          q: { type: 'mc', prompt: '“Oh! It looks good on you.”', opts: ['잘 어울리네요!', '잘 어울려네요!', '잘 어울리내요!', '잘 어울렸어네요!'], skill: 'l25.form',
            explain: '어울리다 → 어울리 + 네요 (on the stem, not on 어울려요).', en: 'Oh! It looks good on you.' } },
        { id: 'C2', time: '23:00', place: 'Eat-in table', narr: 'Sua is back on her exam book. She frowns.',
          lines: [['sua', '이 문제 정말 어렵네요…', 'This question is really difficult…']],
          q: { type: 'enOpts', prompt: 'What does Sua say?', opts: ['This question is really difficult (she is finding out now).', 'This question was easy.', 'She asks if the question is difficult.', 'She already knew the question was difficult and tells you.'], skill: 'l25.usage',
            explain: '어렵다 → 어렵네요: her own impression, just now.', en: 'This question is really difficult…' } },
        { id: 'C3', time: '23:30', place: 'Counter', narr: 'Grandma talks about her husband while she pays. (설거지 = washing the dishes)',
          lines: [['grandma', '우리 남편은 매일 저녁 설거지를 해요. 요리도 해요.', 'My husband does the dishes every evening. He cooks, too.']],
          q: { type: 'tiles', prompt: 'Say: “He is a good husband!”', ans: ['좋은 남편이네요!'], soft: [{ p: '(와 |오 |)(정말 |)좋은 남편이네요', note: 'Accepted.' }], extra: ['남편네요!', '좋는', '남편이에요!'], skill: 'l25.noun',
            diag: [{ p: '(와 |)좋은 남편네요', note: MM.l25why('남편', '남편네요') }, { p: '(와 |)좋은 남편이에요', note: 'Correct Korean, but a plain fact. Your impression: 좋은 남편이네요.' }, { p: '(와 |)좋는 남편이네요', note: '좋다 is a descriptive verb: 좋은 + noun (Lesson 13).' }],
            explain: 'Textbook dialogue: 좋은 남편이네요.', en: 'He is a good husband!' },
          after: [['grandma', '그럼요. 근데 노래는 정말 못해요. 하하.', 'Of course. But he really can’t sing. Haha.']] },
        { id: 'C4', time: '00:30', place: 'Memo board', narr: 'Four sentences for the new staff notice. One has a mistake.',
          q: { type: 'odd', prompt: 'Which sentence is WRONG?', opts: ['이 가방 진짜 무거워네요.', '이 가방 진짜 무겁네요.', '물이 생각보다 깊네요.', '지금 밤 10시인데 아직도 밝네요.'], skill: 'l25.form',
            explain: '-네요 goes on the stem: 무겁다 → 무겁네요 (Workbook 16). 무거워네요 uses the 해요 form.', en: '' } },
        { id: 'C5', time: '01:00', place: 'Stockroom', narr: 'Ramyeon is asleep at the bottom of a tall box. You can only see his ears.',
          q: { type: 'mc', prompt: '“Wow, this box is really deep.”', ko: '와, 이 박스 정말 ___.', opts: ['깊네요', '김네요', '깊어네요', '깊으네요'], skill: 'l25.form',
            explain: '깊다 → 깊네요 (Workbook 17). Sounds like [김네요].', en: 'Wow, this box is really deep.' } },
        { id: 'C6', time: '02:00', place: 'Stockroom door', narr: 'Mr. Kim looks into the stockroom mirror. (깨지다 = to break, to crack)',
          lines: [['taxi', '어, 거울이 깨졌네요.', 'Oh, the mirror is cracked.']],
          q: { type: 'enOpts', prompt: 'What does Mr. Kim say?', opts: ['Oh, (I see) the mirror is cracked.', 'He will break the mirror.', 'He asks if the mirror is new.', 'The mirror was cracked a long time ago, as everybody knows.'], skill: 'l25.past',
            explain: '깨졌 (past) + 네요 = 깨졌네요: he has just noticed it.', en: 'Oh, the mirror is cracked.' } },
        { id: 'C7', time: '03:00', place: 'Front door', narr: 'The officer comes in. There is something white on his cap. You look outside. (눈이 오다 = to snow)',
          q: { type: 'write', prompt: 'Say: “Oh, it’s snowing!”', ans: ['와, 눈이 오네요!'], soft: [{ p: '(와 |오 |)(벌써 |)눈이 오네요', note: 'Accepted.' }], skill: 'l25.form',
            diag: [{ p: '(와 |오 |)(벌써 |)눈이 와요', note: 'Correct Korean, but a plain fact. You have just seen it: 눈이 오네요!' }, { p: '(와 |오 |)(벌써 |)눈이 와네요', note: MM.l25why('오다', '와네요') }, { p: '(와 |오 |)(벌써 |)눈이 오내요', note: MM.l25why('오다', '오내요') }],
            explain: '오다 → 오 + 네요 = 오네요.', en: 'Oh, it’s snowing!' },
          after: [['police', '네, 첫눈이에요! 바나나 우유는 차가운 거 주세요.', 'Yes, it’s the first snow! Give me a cold banana milk, please.']] },
        { id: 'C8', time: '04:00', place: 'Stockroom', narr: 'You put new glass in the staff mirror and wipe it clean.',
          q: { type: 'enOpts', prompt: 'You look in the new mirror and say: “와, 깨끗하네요!” Why -네요?', opts: ['You are impressed by what you see right now.', 'You are giving an order.', 'You state a fact you have always known.', 'You are talking about yesterday.'], skill: 'l25.usage',
            explain: 'Your own impression of something you see now: -네요.', en: 'Wow, it’s clean!' } },
        { id: 'C9', time: '05:00', place: 'Counter', narr: 'A new customer asks about the kimbap. You have sold it here for months.',
          q: { type: 'mc', prompt: 'Tell her as a fact you already know: “The kimbap here is delicious.”', opts: ['여기 김밥 맛있어요.', '여기 김밥 맛있네요.', '여기 김밥 맛있어네요.', '여기 김밥 맛인네요.'], skill: 'l25.usage',
            explain: 'Textbook note: a fact you already know and tell someone → -아/어요. -네요 would sound like you are tasting it for the first time.', en: 'The kimbap here is delicious.' } },
        { id: 'C10', time: '05:40', place: 'Stockroom', narr: 'Mr. Park comes in. Ramyeon is wearing a tiny uniform vest. Minji made it.',
          lines: [['boss', '라면도 유니폼 입었어요?', 'Ramyeon is wearing a uniform too?']],
          q: { type: 'write', prompt: 'Say: “It really looks good on him!”', ans: ['정말 잘 어울리네요!'], soft: [{ p: '(와 |)(라면(도|이|) |)(정말 |진짜 |)잘 어울리네요', note: 'Accepted.' }], skill: 'l25.usage',
            diag: [{ p: '(와 |)(라면(도|이|) |)(정말 |진짜 |)잘 어울려네요', note: MM.l25why('어울리다', '어울려네요') }, { p: '(와 |)(라면(도|이|) |)(정말 |진짜 |)잘 어울려요', note: 'Correct Korean, but you are seeing it for the first time and are impressed: 잘 어울리네요!' }],
            explain: 'Textbook: 잘 어울리네요 = Oh! I find that it looks good on you.', en: 'It really looks good on him!' },
          after: [['boss', '하하, 정말 잘 어울리네요. 근데 일은 안 해요.', 'Haha, it really suits him. But he doesn’t work.']],
          afterNarr: 'Ramyeon looks at himself in the new mirror for a long time. He approves.' },
      ],
      cctv: [
        { id: 'C.c1', type: 'mc', prompt: '좋다 + -네요', opts: ['좋네요', '좋아네요', '존네요', '좋으네요'], skill: 'l25.form', explain: '좋 + 네요 = 좋네요 (sounds like [존네요]).', en: '' },
        { id: 'C.c2', type: 'enOpts', prompt: '“석진 씨, 빨리 왔네요.”', opts: ['Oh, Seokjin, you got here early.', 'Seokjin, come quickly.', 'Seokjin, will you come early?', 'Seokjin always comes early.'], skill: 'l25.past', explain: 'Workbook dictation 20.', en: 'Oh, Seokjin, you got here early.' },
        { id: 'C.c3', type: 'enOpts', prompt: 'Can a plain sentence (맛있어요) mean the same as 맛있네요?', opts: ['Yes, said with the right intonation — but not when it is written.', 'Never.', 'Yes, always, also in writing.', 'Only in the past tense.'], skill: 'l25.usage', explain: 'Workbook 13 / Textbook p.156.', en: '' },
        { id: 'C.c4', type: 'mc', prompt: '“The exam is so difficult!”', ko: '시험이 너무 ___.', opts: ['어렵네요', '어려워네요', '어렴네요', '어렵으네요'], skill: 'l25.form', explain: 'Workbook 14: 시험이 너무 어렵네요.', en: 'The exam is so difficult!' },
        { id: 'C.c5', type: 'mc', prompt: '“He is a good husband!”', opts: ['좋은 남편이네요.', '좋은 남편네요.', '좋은 남편이내요.', '좋은 남편이에요네요.'], skill: 'l25.noun', explain: 'Textbook dialogue: 좋은 남편이네요.', en: 'He is a good husband!' },
        { id: 'C.c6', type: 'enOpts', prompt: '“물이 생각보다 깊네요.”', opts: ['The water is deeper than I thought!', 'The water is not deep.', 'I think the water is cold.', 'Is the water deep?'], skill: 'l25.usage', explain: 'Workbook 17. 생각보다 = than I thought.', en: 'The water is deeper than I thought!' },
      ],
    },
  },

  /* extra questions by skill: returned mistakes, Dawn Restock, store repairs, Rush Hour */
  pool: [
    { id: 'p25.u1', type: 'enOpts', prompt: 'What does 맛있네요 add to 맛있어요?', opts: ['That you are impressed or surprised by the taste.', 'That it was delicious yesterday.', 'That you ask if it is delicious.', 'That it will be delicious.'], skill: 'l25.usage', explain: 'Textbook p.156.', en: '' },
    { id: 'p25.u2', type: 'enOpts', prompt: '“맞네요!”', opts: ['I see that it’s correct! (finding it out for the first time)', 'It’s correct, as I always said.', 'Is it correct?', 'It was correct.'], skill: 'l25.usage', explain: 'Textbook: 맞네요 = I see that it’s correct!', en: 'I see that it’s correct!' },
    { id: 'p25.u3', type: 'mc', prompt: 'Your friend’s mother is a famous cook; you have known it for years. Tell someone as a fact:', opts: ['그분은 요리를 잘해요.', '그분은 요리를 잘하네요.', '그분은 요리를 잘해네요.', '그분은 요리를 잘하내요.'], skill: 'l25.usage', explain: 'A fact you already know → -아/어/여요.', en: 'She cooks well.' },
    { id: 'p25.u4', type: 'enOpts', prompt: 'Why can 맛있네요 say more than 맛있어요 in a text message?', opts: ['Written down, 맛있어요 cannot show surprise; -네요 can.', '맛있어요 is rude.', '맛있네요 is the past tense.', 'There is no difference.'], skill: 'l25.usage', explain: 'Textbook: 맛있어요 can mean the same with the right intonation, but not when it is written.', en: '' },
    { id: 'p25.u5', type: 'enOpts', prompt: '“지금 밤 10시인데 아직도 밝네요.”', opts: ['It’s 10 p.m. now, but it’s still bright!', 'It’s 10 p.m., so it’s dark.', 'It will be bright at 10.', 'Is it bright at 10 p.m.?'], skill: 'l25.usage', explain: 'Workbook 19 (translation ours).', en: 'It’s 10 p.m. now, but it’s still bright!' },
    { id: 'p25.u6', type: 'enOpts', prompt: '“아무도 안 왔네요.”', opts: ['Oh, look. Nobody is here yet.', 'Nobody will come.', 'Everybody came.', 'Did nobody come?'], skill: 'l25.usage', explain: 'Textbook sample sentence.', en: 'Oh, look. Nobody is here yet.' },
    { id: 'p25.p1', type: 'mc', prompt: '“You got here early!” (오다)', ko: '빨리 ___!', opts: ['왔네요', '왔어네요', '와네요', '왔내요'], skill: 'l25.past', explain: 'Workbook dictation: 빨리 왔네요. 왔 + 네요.', en: 'You got here early!' },
    { id: 'p25.p2', type: 'odd', prompt: 'Which sentence is WRONG?', opts: ['아무도 안 왔어네요.', '아무도 안 왔네요.', '빨리 왔네요.', '여기 있네요!'], skill: 'l25.past', explain: 'Past + 네요: only the past suffix — 왔 + 네요 = 왔네요, not 왔어 + 네요.', en: '' },
    { id: 'p25.p3', type: 'enOpts', prompt: 'How is the past with -네요 built?', opts: ['-았/었/였 (past tense suffix) + 네요: 왔네요', 'Past form 왔어요 + 네요: 왔어요네요', '네요 + 었: 네었요', 'There is no past with -네요.'], skill: 'l25.past', explain: 'Textbook conjugation: -았/었/였 (past tense suffix) + -네요.', en: '' },
    { id: 'p25.n1', type: 'mc', prompt: '“Wow, it’s already November!”', opts: ['벌써 11월이네요.', '벌써 11월네요.', '벌써 11월이에요네요.', '벌써 11월이내요.'], skill: 'l25.noun', explain: 'Workbook dictation 21: 벌써 11월이네요.', en: 'Wow, it’s already November!' },
    { id: 'p25.n2', type: 'odd', prompt: 'Which sentence is WRONG?', opts: ['좋은 남편네요.', '좋은 남편이네요.', '벌써 11월이네요.', '여기 있네요.'], skill: 'l25.noun', explain: 'After a final consonant the noun needs 이: 남편이네요.', en: '' },
    { id: 'p25.f1', type: 'enOpts', prompt: 'Why 춥네요, not 추워네요?', opts: ['-네요 goes on the stem (춥), and before a consonant the ㅂ does not change.', '춥다 is not irregular.', '추워네요 is the past tense.', 'Both are correct.'], skill: 'l25.form', explain: 'Verb stem + 네요. The ㅂ irregular (Lesson 11) only changes before a vowel.', en: '' },
    { id: 'p25.f2', type: 'odd', prompt: 'Which sentence is WRONG?', opts: ['가방이 진짜 무겁으네요.', '가방이 진짜 무겁네요.', '물이 생각보다 깊네요.', '제 방은 항상 더럽네요.'], skill: 'l25.form', explain: 'No 으 before 네요: 무겁네요 (Workbook 16).', en: '' },
    { id: 'p25.f3', type: 'enOpts', prompt: 'How is 있네요 pronounced?', opts: ['[인네요]', '[이쓰네요]', '[이네요]', '[읻네요]'], skill: 'l25.form', explain: 'Before ㄴ, the final ㅆ is heard as ㄴ: [인네요]. Written: 있네요.', en: '' },
  ],

  vocab: [
    { ko: '말', en: 'language; what one says, expression; word' }, { ko: '물', en: 'water' }, { ko: '방', en: 'room' },
    { ko: '항상', en: 'always, all the time' }, { ko: '밤', en: 'night' }, { ko: '별로', en: 'not really, not that (+ negative)' },
    { ko: '아무도', en: 'nobody (+ negative)' }, { ko: '벌써', en: 'already' }, { ko: '드라마', en: 'drama (TV series)' },
    { ko: '집안일', en: 'housework' }, { ko: '생각보다', en: 'than I thought' },
  ],
  grp: {},
  examples: {
    '맛있다': ['맛있네요.', '(Oh,) it’s delicious! (Textbook)'],
    '크다': ['크네요.', '(I see that) it is big.'],
    '어울리다': ['잘 어울리네요.', 'Oh! I find that it looks good on you.'],
    '맞다': ['맞네요.', 'I see that it’s correct!'],
    '있다': ['여기 있네요!', 'Oh, here it is!'],
    '재미있다': ['이 드라마 재미있네요.', 'I find this drama fun to watch.'],
    '춥다': ['별로 안 춥네요.', 'Well, it’s not that cold.'],
    '오다': ['아무도 안 왔네요.', 'Oh, look. Nobody is here yet.'],
    '어렵다': ['시험이 너무 어렵네요.', 'The exam is so difficult! (WB 14; translation ours)'],
    '무겁다': ['가방이 진짜 무겁네요.', 'The bag is really heavy! (WB 16; translation ours)'],
    '깊다': ['물이 생각보다 깊네요.', 'The water is deeper than I thought! (WB 17; translation ours)'],
    '더럽다': ['제 방은 항상 더럽네요.', 'My room is always dirty! (WB 18; translation ours)'],
    '밝다': ['지금 밤 10시인데 아직도 밝네요.', 'It’s 10 p.m. now, but it’s still bright! (WB 19; translation ours)'],
    '남편': ['좋은 남편이네요.', 'He is a good husband!'],
    '말': ['친구 말이 정말 맞네요.', 'What my friend said is really right! (WB 15; translation ours)'],
    '물': ['물이 생각보다 깊네요.', 'The water is deeper than I thought! (WB 17)'],
    '방': ['제 방은 항상 더럽네요.', 'My room is always dirty! (WB 18)'],
    '항상': ['제 방은 항상 더럽네요.', 'My room is always dirty! (WB 18)'],
    '밤': ['지금 밤 10시인데 아직도 밝네요.', 'It’s 10 p.m. now, but it’s still bright! (WB 19)'],
    '별로': ['별로 안 춥네요.', 'Well, it’s not that cold.'],
    '아무도': ['아무도 안 왔네요.', 'Oh, look. Nobody is here yet.'],
    '벌써': ['벌써 11월이네요.', 'Wow, it’s already November!'],
    '드라마': ['이 드라마 재미있네요.', 'I find this drama fun to watch.'],
    '집안일': ['집안일 하는 거 힘들지 않아요?', 'Isn’t it hard to do housework?'],
    '생각보다': ['물이 생각보다 깊네요.', 'The water is deeper than I thought! (WB 17)'],
  },
};
/* 맞네요 / 만네요, 왔네요 / 완네요 differ by one jamo: no “typo” leniency */
(() => {
  const G = MM.game[25], off = q => { if (q && q.ans && q.lenient === undefined) q.lenient = false; };
  Object.values(G.shifts).forEach(sh => { sh.scenes.forEach(s => off(s.q)); sh.cctv.forEach(off); });
  G.pool.forEach(off);
})();
