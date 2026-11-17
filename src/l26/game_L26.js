/* game_L26.js — Moonlight Mart, Lesson 26 (ㄷ irregular: ㄷ → ㄹ before a vowel: 듣다 → 들어요, 걸었어요, 물으면, 실을 거예요,
   깨달았어요; ㄷ stays before a consonant: 듣고 있어요, 걷는 것; regular verbs keep ㄷ: 받아서, 묻어요 (bury), 닫으면, 믿어요).
   Lines: [castId, korean, english]. q.opts: correct option first (engine shuffles). odd: opts[0] is the WRONG sentence.
   Forms come from forms_L26.js (generated, checked against the book). Rows are found by id (묻다 has two rows: 묻다.ask, 묻다.bury).
   Game words not in the book: 환풍기, 귀신, 조용하다, 박스 싣다, 트럭, 화분, 열쇠, 라면이 불다 (붇다 = noodles go soggy) — glossed
   where they appear. Grammar in the lines only from L1–25. App-written sentences are NOT yet checked by a native speaker (⚠ list in
   HANDOFF.md). lenient off at the end: 들어요 / 듣어요 differ by one jamo. */

/* explains any wrong form w of the ㄷ verb with row id `id` (used by textbook, workbook and the questions below; this file loads before them) */
MM.l26why = (id, w) => {
  const f = (MM.forms[26] || []).find(r => r.id === id); if (!f) return '';
  const cols = { wrong: 'hae', wrongPast: 'past', wrongFut: 'fut', wrongSeo: 'seo', wrongMyeon: 'myeon', wrongDo: 'do', wrongGo: 'go', wrongProg: 'prog', wrongNeun: 'neun', wrongPastNde: 'pastNde' };
  const k = Object.keys(cols).find(c => (f[c] || []).includes(w)); if (!k) return '';
  const col = cols[k], right = f[col], stem = f.dict.slice(0, -1);
  const lStem = stem.slice(0, -1) + String.fromCharCode(stem.charCodeAt(stem.length - 1) + 1); /* 듣 → 들 (ㄷ → ㄹ is +1 in the final-consonant table) */
  const other = { '듣다': '들다 (to lift, to hold)', '걷다': '걸다 (to hang; to call)', '묻다.ask': '물다 (to bite)', '붇다': '불다 (to blow)', '받다': '', '믿다': '밀다 (to push)', '닫다': '달다 (to be sweet; to hang)', '묻다.bury': '묻다 = to ask' }[id] || '';
  const vowelCol = ['hae', 'past', 'fut', 'seo', 'myeon', 'do', 'pastNde'].includes(col);
  if (col === 'pastNde' && w.endsWith('은데')) return `After the past suffix -았/었 use -는데 (Lesson 21): ${right}.`;
  if (f.irr === 'ㄷ') {
    if (vowelCol && w.startsWith(stem)) return `${f.dict}${id === '묻다.ask' ? ' (to ask)' : ''} is a ㄷ irregular: before a vowel ㄷ changes to ㄹ → ${right}.${id === '묻다.ask' ? ` (${w.split(' ')[0]} keeps ㄷ: that is 묻다 = to bury.)` : ''}`;
    if ((col === 'fut' || col === 'myeon') && w.startsWith(lStem)) return `ㄷ → ㄹ, but the ending still begins with 으 (the stem ends in a consonant): ${right}.${other ? ` (${w.replace(' 거예요', '')} would be a form of ${other}.)` : ''}`;
    if (vowelCol) return `아 after ㅏ/ㅗ, otherwise 어: ${right}.`;
    const w1 = w.split(' ')[0];
    if (w1.startsWith(lStem)) return `-고 / -는 begin with a consonant, so ㄷ does not change: ${right}.${other && col !== 'neun' ? ` (${w1} is a form of ${other}.)` : ''}`;
    return `Keep the ㄷ before a consonant: ${right}.${other ? ` (${w1} is a form of ${other}.)` : ''}`;
  }
  if (vowelCol && w.startsWith(lStem)) return `${f.dict}${id === '묻다.bury' ? ' (to bury)' : ''} is a regular verb: ㄷ stays even before a vowel → ${right}.${other ? ` (${id === '묻다.bury' ? '물어요 etc. come from ' + other : w.split(' ')[0] + ' looks like a form of ' + other}.)` : ''}`;
  if (vowelCol) return `아 after ㅏ/ㅗ, otherwise 어: ${right}.`;
  return `${f.dict} is regular: the stem stays as it is → ${right}.`;
};

MM.game[26] = {
  skills: {
    'l26.form':  { en: 'ㄷ → ㄹ before a vowel', desc: 'ㄷ irregular verbs (듣다, 걷다, 묻다 “to ask”, 싣다, 깨닫다, 붇다): ㄷ changes to ㄹ before a vowel: 들어요, 걸었어요, 물으면, 실을 거예요, 깨달았어요, 불었어요.' },
    'l26.keep':  { en: 'ㄷ stays before a consonant', desc: 'Before -고, -는, -지… the ㄷ does not change: 듣고 있어요, 걷는 것, 싣고 있어요.' },
    'l26.reg':   { en: 'Regular ㄷ verbs', desc: '받다, 묻다 (to bury), 닫다, 믿다 keep ㄷ even before a vowel: 받아서, 묻어요, 닫으면, 믿어요.' },
    'l26.usage': { en: 'The ㄷ verbs in use', desc: '듣다 listen, hear · 걷다 walk · 묻다 ask (물어요) / bury (묻어요) · 싣다 load · 깨닫다 realize · 붇다 swell · 받다 receive · 닫다 close · 믿다 believe.' },
    'l26.vocab': { en: 'Lesson 26 vocabulary', desc: 'The words of the lesson.' },
  },
  fixSkills: { vent: 'l26.form', loadramp: 'l26.keep', doorcloser: 'l26.reg' },
  formTpl: {
    key: 'hae', prompt: '{dict} ({en}) → polite present', ko: '___', explain: '{dict} → {form}', skill: 'l26.form',
    skillBy: { 'ㄷ': 'l26.form', keep: 'l26.reg' }, irrNotes: {},
    variants: [
      { key: 'hae', wrongKey: 'wrong', prompt: '{dict} ({en}) → polite present (해요)', explain: '{dict} → {form}' },
      { key: 'past', wrongKey: 'wrongPast', prompt: '{dict} ({en}) → past (-았/었어요)', explain: '{dict} → {form}' },
      { key: 'fut', wrongKey: 'wrongFut', prompt: '{dict} ({en}) → future (-(으)ㄹ 거예요)', explain: '{dict} → {form}' },
      { key: 'myeon', wrongKey: 'wrongMyeon', prompt: '{dict} ({en}) → -(으)면 (if)', explain: '{dict} → {form}' },
      { key: 'prog', wrongKey: 'wrongProg', prompt: '{dict} ({en}) → present progressive (-고 있어요)', explain: '{dict} → {form}: -고 begins with a consonant, the stem stays', skill: 'l26.keep' },
    ],
  },
  intro: 'When ㄷ is the final consonant of some verb stems and a vowel follows, ㄷ changes to ㄹ: 듣다 → 들어요, 들었어요; 걷다 → 걸어요; 묻다 (to ask) → 물으면. Before a consonant it stays: 듣고 있어요, 걷는 것. Some verbs never change: 받다 → 받아서, 닫다 → 닫으면, 믿다 → 믿어요, and 묻다 (to bury) → 묻어요. Tonight there is a strange noise in the stockroom, a truck to load, and a bowl of ramen nobody finished.',

  shifts: {
    A: {
      title: 'Did You Hear That?', sub: 'Recognize · choose', kind: 'recognize', fix: 'vent',
      snack: { id: 'l26.snackA', ko: '무슨 소리 팝콘', en: 'What-Was-That Popcorn', desc: 'Pops so loudly that the whole stockroom asks “무슨 소리요?”' },
      scenes: [
        { id: 'A1', time: '22:00', place: 'Stockroom', narr: 'Twenty-sixth night. Minji stops in the middle of the stockroom and listens.',
          lines: [['minji', '방금 소리 들었어요?', 'Did you hear that noise?']],
          q: { type: 'enOpts', prompt: 'What does Minji ask?', opts: ['Did you hear that noise (just now)?', 'Are you listening to music?', 'Will you listen to me?', 'Did you walk here?'], skill: 'l26.form',
            explain: 'Textbook dialogue: 방금 소리 들었어요? 듣 + 었어요 → 들었어요 (ㄷ → ㄹ before a vowel).', en: 'Did you hear that noise?' } },
        { id: 'A2', time: '22:10', place: 'Stockroom', narr: 'You heard nothing.',
          lines: [['minji', '이상한 소리 못 들었어요?', 'You didn’t hear the weird noise?']],
          q: { type: 'mc', prompt: 'Answer: “No, I did not.” (agreeing with her negative question)', opts: ['네, 못 들었어요.', '네, 못 듣었어요.', '네, 못 들았어요.', '네, 못 듣고 있어요.'], skill: 'l26.form',
            explain: 'Textbook dialogue: 네, 못 들었어요. (네 agrees with “you didn’t hear?”; 듣 → 들 + 었어요.)', en: 'No, I did not.' } },
        { id: 'A3', time: '22:30', place: 'Eat-in table', narr: 'Sua sits down with big headphones on. (음악 = music)',
          lines: [['sua', '지금 음악 듣고 있어요. 시험 공부할 때 항상 들어요.', 'I’m listening to music now. I always listen when I study for exams.']],
          q: { type: 'enOpts', prompt: 'Why is it 듣고 있어요, not 들고 있어요?', opts: ['-고 begins with a consonant, so ㄷ stays.', 'Because it is the past tense.', 'Because 듣다 is a regular verb.', 'Both mean exactly the same.'], skill: 'l26.keep',
            explain: 'Textbook: 듣고 있어요 — ㄷ does not change because -고 begins with a consonant. (들고 있어요 = I am holding it: 들다.)', en: 'I’m listening to music now.' } },
        { id: 'A4', time: '23:00', place: 'Front door', narr: 'Mr. Lee arrives, red-faced, out of breath.',
          lines: [['manager', '오늘 회사에서 여기까지 걸어왔어요. 한 시간 걸었어요!', 'Today I walked here from the office. I walked for an hour!']],
          q: { type: 'enOpts', prompt: 'What did Mr. Lee do?', opts: ['He walked from his office — for an hour.', 'He took a taxi for an hour.', 'He listened to the radio for an hour.', 'He asked the way for an hour.'], skill: 'l26.form',
            explain: 'Textbook: 한 시간 걸었어요 = I walked for an hour. 걷 + 었어요 → 걸었어요.', en: 'I walked for an hour!' } },
        { id: 'A5', time: '23:30', place: 'Memo board', narr: 'Minji copied the sample sentences onto the memo board. One is wrong.',
          q: { type: 'odd', prompt: 'Which sentence is WRONG?', opts: ['어디에서 듣었어요?', '어디에서 들었어요?', '많이 걸었는데, 안 피곤해요.', '물어도 대답이 없어요.'], skill: 'l26.form',
            explain: '듣다 is a ㄷ irregular: before -었어요 (a vowel) ㄷ → ㄹ: 들었어요.', en: '' } },
        { id: 'A6', time: '00:30', place: 'Stockroom', narr: 'There it is again: a long, low noise from the ceiling. You call Mr. Park.',
          q: { type: 'mc', prompt: 'Ask Mr. Park: “Did you hear it too?”', opts: ['사장님도 들었어요?', '사장님도 듣었어요?', '사장님도 들았어요?', '사장님도 들 거예요?'], skill: 'l26.form',
            explain: '듣다 → 들었어요 (past).', en: 'Did you hear it too?' },
          after: [['boss', '네, 저도 들었어요. 환풍기 소리예요. 걱정하지 마세요.', 'Yes, I heard it too. It’s the ventilation fan. Don’t worry.']] },
        { id: 'A7', time: '02:00', place: 'Coffee machine', narr: 'Mr. Kim stretches his legs before the next fare.',
          lines: [['taxi', '저는 운전 안 할 때는 많이 걸어요. 걷는 거 정말 좋아해요.', 'When I’m not driving, I walk a lot. I really like walking.']],
          q: { type: 'enOpts', prompt: 'What does Mr. Kim like?', opts: ['Walking.', 'Driving at night.', 'Listening to the radio.', 'Asking questions.'], skill: 'l26.keep',
            explain: 'Textbook: 걷는 것 좋아해요 = I like walking. ㄷ stays before -는 (a consonant).', en: 'I really like walking.' } },
        { id: 'A8', time: '03:00', place: 'Front door', narr: 'The officer lowers his voice. (귀신 = ghost, 마다 = every)',
          lines: [['police', '이 이야기를 믿어요? 밤마다 이 건물에서 귀신이 걸어 다녀요.', 'Do you believe this story? Every night a ghost walks around in this building.']],
          q: { type: 'enOpts', prompt: 'What does the officer ask first?', opts: ['Do you believe this story?', 'Did you hear this story?', 'Do you want to hear a story?', 'Did you close the door?'], skill: 'l26.reg',
            explain: '믿다 (to believe) is regular: 믿 + 어요 = 믿어요 (Textbook: 그 이야기를 믿어요?).', en: 'Do you believe this story?' } },
        { id: 'A9', time: '04:00', place: 'Stockroom', narr: 'You climb the ladder and open the fan cover. A loose blade. And… orange fur.',
          q: { type: 'mc', prompt: '“Now I realized it.”', ko: '이제 ___.', opts: ['깨달았어요', '깨닫았어요', '깨달었어요', '깨닫고 있어요'], skill: 'l26.form',
            explain: 'Textbook: 깨닫 + 았어요 → 깨달았어요 (ㄷ → ㄹ before a vowel; ㅏ → 았).', en: 'Now I realized it.' } },
        { id: 'A10', time: '05:30', place: 'Stockroom', narr: 'Mr. Park comes down. The fan is quiet.',
          lines: [['boss', '환풍기 고쳤네요! 고마워요. 근데 그 소리는 뭐였어요?', 'You fixed the fan! Thank you. But what was that noise?']],
          q: { type: 'enOpts', prompt: 'What does Mr. Park want to know?', opts: ['What the noise was.', 'Who fixed the fan.', 'Where the ladder is.', 'If you heard music.'], skill: 'l26.usage',
            explain: '그 소리는 뭐였어요? = What was that noise? (고쳤네요: Lesson 25.)', en: 'But what was that noise?' },
          afterNarr: 'It was not only the fan. Ramyeon had been walking on top of the ceiling all night. He walks a lot. He likes walking.' },
      ],
      cctv: [
        { id: 'A.c1', type: 'enOpts', prompt: 'When does ㄷ change to ㄹ (the book)?', opts: ['When ㄷ is the 받침 of a verb stem and a vowel follows (for some verbs).', 'Before every ending, for every verb.', 'Only before -고.', 'Only in the future tense.'], skill: 'l26.form', explain: 'Textbook p.161. Some verbs follow this rule, and some do not.', en: '' },
        { id: 'A.c2', type: 'mc', prompt: '듣 + 어서', opts: ['들어서', '듣어서', '들아서', '드러서'], skill: 'l26.form', explain: 'Textbook exercise 1: 들어서.', en: '' },
        { id: 'A.c3', type: 'enOpts', prompt: '“그 이야기를 믿어요?”', opts: ['Do you believe that story?', 'Did you hear that story?', 'Do you push that story?', 'Will you ask about that story?'], skill: 'l26.reg', explain: 'Textbook sample sentence. 믿다 is regular.', en: 'Do you believe that story?' },
        { id: 'A.c4', type: 'mc', prompt: '걷 + 어요', opts: ['걸어요', '걷어요', '걸아요', '거러요'], skill: 'l26.form', explain: 'Textbook exercise 2: 걸어요.', en: '' },
        { id: 'A.c5', type: 'enOpts', prompt: 'Which verbs keep ㄷ before a vowel (the book)?', opts: ['받다, 묻다 (to bury), 닫다, 믿다', '듣다, 걷다, 싣다', '깨닫다, 붇다, 묻다 (to ask)', 'All verbs with ㄷ'], skill: 'l26.reg', explain: 'Textbook p.162: these keep the 받침 as ㄷ.', en: '' },
        { id: 'A.c6', type: 'enOpts', prompt: '“걷는 것 좋아해요”: why does ㄷ not change?', opts: ['-는 starts with a consonant.', '걷다 is regular.', 'It is the past tense.', 'Because of 좋아해요.'], skill: 'l26.keep', explain: 'Textbook usage example 2.', en: 'I like walking.' },
      ],
    },

    B: {
      title: 'Load It Up', sub: 'Build · write', kind: 'produce', fix: 'loadramp',
      note: { by: 'boss', text: 'Night shift rule #26: the delivery truck comes at 3. We load (싣다) the empty boxes onto it. Ask the driver before you load anything. And please check every box for cats. — Park' },
      snack: { id: 'l26.snackB', ko: '실을 거예요 사탕', en: 'Load-It-Up Candy', desc: 'Comes in a tiny cardboard box. Delivered by a tiny truck.' },
      scenes: [
        { id: 'B1', time: '22:00', place: 'Stockroom', narr: 'Minji whispers some news before she goes home.',
          lines: [['minji', '사장님이 가게를 팔 수도 있어요!', 'Mr. Park might sell the store!']],
          q: { type: 'write', prompt: 'Ask her: “Where did you hear that?”', ans: ['어디에서 들었어요?'], soft: [{ p: '(그거 |그 이야기 |그 이야기를 |)(어디에서|어디서) 들었어요', note: 'Accepted.' }], skill: 'l26.form',
            diag: MM.forms[26].find(f => f.id === '듣다').wrongPast.map(w => ({ p: '(그거 |그 이야기 |)(어디에서|어디서) ' + w, note: MM.l26why('듣다', w) })),
            explain: 'Textbook: 어디에서 들었어요? 듣 + 었어요 → 들었어요.', en: 'Where did you hear that?' },
          after: [['minji', '과장님한테서 들었어요… 근데 농담일 수도 있어요.', 'I heard it from Mr. Lee… but it might be a joke.']] },
        { id: 'B2', time: '22:30', place: 'Counter', narr: 'Sua doesn’t understand a word in her textbook. (뜻 = meaning)',
          lines: [['sua', '이 단어 뜻을 몰라요. 누구한테 물어요?', 'I don’t know what this word means. Who do I ask?']],
          q: { type: 'write', prompt: 'Answer: “If you ask Mr. Park, he will know.” (묻다, -(으)면, 알다)', ans: ['사장님한테 물으면 알 거예요.'], soft: [{ p: '사장님(한테|께|에게) 물으면 (사장님이 |)(아마 |)알 거예요', note: 'Accepted.' }, { p: '사장님(한테|께|에게) 물어보면 (사장님이 |)(아마 |)알 거예요', note: 'Accepted (물어보다 = to try asking). The lesson’s form: 물으면.' }], skill: 'l26.form',
            diag: [{ p: '사장님(한테|께|에게) 묻으면 (사장님이 |)알 거예요', note: MM.l26why('묻다.ask', '묻으면') }, { p: '사장님(한테|께|에게) 물면 (사장님이 |)알 거예요', note: MM.l26why('묻다.ask', '물면') }],
            explain: 'Textbook: 묻 + 으면 → 물으면 (the 으 stays: 물면 would mean “if you bite”).', en: 'If you ask Mr. Park, he will know.' } },
        { id: 'B3', time: '23:30', place: 'Front door', narr: 'Cold wind blows in. Grandma pulls her scarf tight.',
          lines: [['grandma', '학생, 문 좀 닫아 주세요.', 'Dear, please close the door.']],
          q: { type: 'write', prompt: 'Answer: “Yes, I’ll close it now.” (-(으)ㄹ게요)', ans: ['네, 지금 닫을게요.'], soft: [{ p: '(네 |)(지금 |)(문(을|) |)(바로 |)닫을게요', note: 'Accepted.' }], skill: 'l26.reg',
            diag: [{ p: '(네 |)(지금 |)(문(을|) |)달을게요', note: '닫다 is a regular verb: ㄷ stays → 닫을게요.' }, { p: '(네 |)(지금 |)(문(을|) |)닫을 거예요', note: 'Correct form, but a promise to the listener is -(으)ㄹ게요 (Lesson 6): 닫을게요.' }],
            explain: '닫다 (to close) is regular: 닫 + 을게요 = 닫을게요 (like 닫으면 in the book).', en: 'Yes, I’ll close it now.' } },
        { id: 'B4', time: '00:30', place: 'Counter', narr: 'Mr. Lee had a package delivered to the store.',
          lines: [['manager', '제 택배 받았어요?', 'Did you get my package?']],
          q: { type: 'write', prompt: 'Answer: “Yes, I received it.”', ans: ['네, 받았어요.'], soft: [{ p: '(네 |)(어제 |오늘 |)(과장님 택배(를|) |)(제가 |)받았어요', note: 'Accepted.' }], skill: 'l26.reg',
            diag: MM.forms[26].find(f => f.id === '받다').wrongPast.map(w => ({ p: '(네 |)(어제 |오늘 |)(과장님 택배(를|) |)' + w, note: MM.l26why('받다', w) })),
            explain: '받다 is regular: 받 + 았어요 = 받았어요.', en: 'Yes, I received it.' } },
        { id: 'B5', time: '01:00', place: 'Counter', narr: 'Grandma is buying new walking shoes.',
          lines: [['grandma', '학생, 걷는 거 좋아해요?', 'Dear, do you like walking?']],
          q: { type: 'write', prompt: 'Answer: “Yes, I like walking.”', ans: ['네, 걷는 거 좋아해요.'], soft: [{ p: '(네 |)(저는 |저도 |)걷는 (거|것)(를|을|) (정말 |)좋아해요', note: 'Accepted.' }], skill: 'l26.keep',
            diag: MM.forms[26].find(f => f.id === '걷다').wrongNeun.map(w => ({ p: '(네 |)(저는 |저도 |)' + w + ' (거|것)(를|을|) (정말 |)좋아해요', note: MM.l26why('걷다', w) })),
            explain: 'Textbook: 걷는 것 좋아해요. -는 begins with a consonant: ㄷ stays.', en: 'Yes, I like walking.' },
          after: [['grandma', '그럼 내일 아침에 같이 공원에서 걸어요!', 'Then let’s walk in the park together tomorrow morning!']] },
        { id: 'B6', time: '02:00', place: 'Coffee machine', narr: 'Mr. Kim hums a song.',
          lines: [['taxi', '아까 라디오에서 이 노래 들었어요?', 'Did you hear this song on the radio earlier?']],
          q: { type: 'write', prompt: 'Answer: “No, I didn’t hear it.” (못)', ans: ['아니요, 못 들었어요.'], soft: [{ p: '(아니요 |)(그 노래(는|) |)(저는 |)못 들었어요', note: 'Accepted.' }, { p: '(아니요 |)(그 노래(는|) |)(저는 |)안 들었어요', note: 'Accepted (안 = I didn’t listen to it, by choice). Didn’t get to hear = 못 들었어요.' }], skill: 'l26.form',
            diag: MM.forms[26].find(f => f.id === '듣다').wrongPast.map(w => ({ p: '(아니요 |)(그 노래(는|) |)(저는 |)못 ' + w, note: MM.l26why('듣다', w) })),
            explain: 'Textbook dialogue: 못 들었어요.', en: 'No, I didn’t hear it.' } },
        { id: 'B7', time: '03:00', place: 'Loading ramp', narr: 'The truck backs up to the stockroom. The courier jumps out.',
          lines: [['courier', '이 박스들 다 실을 거예요?', 'Are you going to load all these boxes?']],
          q: { type: 'write', prompt: 'Answer: “Yes, I will load all of them.”', ans: ['네, 다 실을 거예요.'], soft: [{ p: '(네 |)(이 박스들(을|) |)(제가 |)다 실을 거예요', note: 'Accepted.' }, { p: '(네 |)(이 박스들(을|) |)(제가 |)다 실을게요', note: 'Accepted (-(으)ㄹ게요: I’ll do it for you).' }], skill: 'l26.form',
            diag: MM.forms[26].find(f => f.id === '싣다').wrongFut.map(w => ({ p: '(네 |)(이 박스들(을|) |)(제가 |)다 ' + w, note: MM.l26why('싣다', w) })).concat([{ p: '(네 |)(제가 |)다 싣을게요', note: '싣다 is a ㄷ irregular: before a vowel ㄷ → ㄹ → 실을게요.' }]),
            explain: 'Textbook: 싣 + 을 거예요 → 실을 거예요.', en: 'Yes, I will load all of them.' } },
        { id: 'B8', time: '03:30', place: 'Loading ramp', narr: 'Ten minutes later. The courier looks at his watch.',
          lines: [['courier', '지금 뭐 해요? 빨리요!', 'What are you doing now? Hurry!']],
          q: { type: 'tiles', prompt: 'Answer: “I’m loading the boxes.” (-고 있어요)', ans: ['박스를 싣고 있어요.'], soft: [{ p: '(지금 |)(박스(를|) |)싣고 있어요', note: 'Accepted.' }], extra: ['실고', '실어', '박스가'], skill: 'l26.keep',
            diag: [{ p: '(지금 |)(박스(를|) |)실고 있어요', note: MM.l26why('싣다', '실고 있어요') }],
            explain: '-고 있어요 begins with a consonant: ㄷ stays → 싣고 있어요 (Workbook 20).', en: 'I’m loading the boxes.' } },
        { id: 'B9', time: '05:00', place: 'Loading ramp', narr: 'The courier is asleep in the cab with his headphones on. You knock, and ask where the last box goes. Nothing. You text Mr. Park.',
          q: { type: 'write', prompt: 'Write: “Even if I ask, there is no answer.”', ans: ['물어도 대답이 없어요.'], soft: [{ p: '(기사님(한테|께|에게) |)물어도 대답(이|) 없어요', note: 'Accepted.' }], skill: 'l26.form',
            diag: MM.forms[26].find(f => f.id === '묻다.ask').wrongDo.map(w => ({ p: '(기사님(한테|께|에게) |)' + w + ' 대답(이|) 없어요', note: MM.l26why('묻다.ask', w) })).concat([{ p: '(기사님(한테|께|에게) |)물어서 대답(이|) 없어요', note: '-아/어서 = so, because. Even if = -아/어도 (Lesson 20): 물어도.' }]),
            explain: 'Textbook: 물어도 대답이 없어요. 묻 (to ask) + 어도 → 물어도.', en: 'Even if I ask, there is no answer.' } },
        { id: 'B10', time: '05:40', place: 'Counter', narr: 'The truck has gone. Mr. Park comes down.',
          lines: [['boss', '오늘 많이 걸었어요? 피곤해요?', 'Did you walk a lot today? Are you tired?']],
          q: { type: 'write', prompt: 'Answer: “I walked a lot, but I am not tired.”', ans: ['많이 걸었는데, 안 피곤해요.'], soft: [{ p: '(네 |)(오늘 |)많이 걸었는데(,|) (별로 |)안 피곤해요', note: 'Accepted.' }], skill: 'l26.form',
            diag: MM.forms[26].find(f => f.id === '걷다').wrongPastNde.map(w => ({ p: '(네 |)(오늘 |)많이 ' + w + '(,|) (별로 |)안 피곤해요', note: MM.l26why('걷다', w) })).concat([{ p: '(네 |)(오늘 |)많이 걸어서(,|) 안 피곤해요', note: '-아서 = because: “because I walked, I’m not tired”. But / although here = -는데 (Lesson 21): 걸었는데.' }]),
            explain: 'Textbook: 많이 걸었는데, 안 피곤해요.', en: 'I walked a lot, but I am not tired.' },
          after: [['boss', '다행이에요. 근데… 라면 봤어요?', 'That’s a relief. But… have you seen Ramyeon?']],
          afterNarr: 'Far down the street, the truck stops. The driver gets out, opens the back, and a small orange cat walks out of the last box. Ten minutes later Ramyeon walks back in. He walked a lot. He is not tired.' },
      ],
      cctv: [
        { id: 'B.c1', type: 'write', prompt: 'Translate: Where did you hear that? (듣다)', ans: ['어디에서 들었어요?'], soft: [{ p: '(그거 |)(어디에서|어디서) 들었어요', note: 'Accepted.' }], skill: 'l26.form', diag: MM.forms[26].find(f => f.id === '듣다').wrongPast.map(w => ({ p: '(어디에서|어디서) ' + w, note: MM.l26why('듣다', w) })), explain: 'Textbook exercise 6.', en: 'Where did you hear that?' },
        { id: 'B.c2', type: 'write', prompt: 'Translate: I walked a lot, but I am not tired.', ans: ['많이 걸었는데, 안 피곤해요.'], soft: [{ p: '많이 걸었는데(,|) 안 피곤해요', note: 'Accepted.' }], skill: 'l26.form', diag: MM.forms[26].find(f => f.id === '걷다').wrongPastNde.map(w => ({ p: '많이 ' + w + '(,|) 안 피곤해요', note: MM.l26why('걷다', w) })), explain: 'Textbook sample sentence.', en: 'I walked a lot, but I am not tired.' },
        { id: 'B.c3', type: 'write', prompt: 'Translate: Do you believe that story?', ans: ['그 이야기를 믿어요?'], soft: [{ p: '그 이야기(를|) 믿어요', note: 'Accepted.' }], skill: 'l26.reg', diag: MM.forms[26].find(f => f.id === '믿다').wrong.map(w => ({ p: '그 이야기(를|) ' + w, note: MM.l26why('믿다', w) })), explain: 'Textbook sample sentence.', en: 'Do you believe that story?' },
        { id: 'B.c4', type: 'write', prompt: 'Translate: Even if I ask, there is no answer.', ans: ['물어도 대답이 없어요.'], soft: [{ p: '물어도 대답(이|) 없어요', note: 'Accepted.' }], skill: 'l26.form', diag: MM.forms[26].find(f => f.id === '묻다.ask').wrongDo.map(w => ({ p: w + ' 대답(이|) 없어요', note: MM.l26why('묻다.ask', w) })), explain: 'Textbook sample sentence.', en: 'Even if I ask, there is no answer.' },
        { id: 'B.c5', type: 'write', prompt: 'Translate: You didn’t hear the weird noise?', ans: ['이상한 소리 못 들었어요?'], soft: [{ p: '이상한 소리(를|) 못 들었어요', note: 'Accepted.' }, { p: '이상한 소리(를|) 안 들었어요', note: 'Accepted (the book: 못 들었어요).' }], skill: 'l26.form', diag: MM.forms[26].find(f => f.id === '듣다').wrongPast.map(w => ({ p: '이상한 소리(를|) 못 ' + w, note: MM.l26why('듣다', w) })), explain: 'Textbook dialogue.', en: 'You didn’t hear the weird noise?' },
        { id: 'B.c6', type: 'write', prompt: 'Translate: I am listening. (-고 있어요)', ans: ['듣고 있어요.'], soft: [{ p: '(저는 |지금 |)듣고 있어요', note: 'Accepted.' }], skill: 'l26.keep', diag: MM.forms[26].find(f => f.id === '듣다').wrongProg.map(w => ({ p: '(저는 |지금 |)' + w, note: MM.l26why('듣다', w) })), explain: 'Textbook usage example 1.', en: 'I am listening.' },
      ],
    },

    C: {
      title: 'Soggy Ramen', sub: 'Mixed · optional', kind: 'mixed', fix: 'doorcloser', optional: true,
      snack: { id: 'l26.snackC', ko: '안 붇는 컵라면', en: 'Never-Soggy Cup Ramen', desc: 'Stays firm for three hours. Engineered for students who forget.' },
      scenes: [
        { id: 'C1', time: '22:30', place: 'Stockroom', narr: 'Minji points at the back door. It swings open by itself.',
          lines: [['minji', '뒷문이 고장 났어요. 나갈 때 문을 꼭 닫으세요!', 'The back door is broken. When you go out, make sure you close it!']],
          q: { type: 'enOpts', prompt: 'What does Minji ask you to do?', opts: ['Make sure you close the back door.', 'Open the back door.', 'Listen at the back door.', 'Walk out through the back door.'], skill: 'l26.reg',
            explain: '닫다 is regular: 닫 + 으세요 = 닫으세요 (like 닫으면 in the book).', en: 'Make sure you close it!' } },
        { id: 'C2', time: '23:00', place: 'Eat-in table', narr: 'Sua made a cup ramen, then opened her textbook. Forty minutes later… (라면이 붇다 = the noodles swell and go soggy)',
          lines: [['sua', '아! 라면이 다 불었어요!', 'Oh no! The ramen has gone all soggy!']],
          q: { type: 'enOpts', prompt: 'What happened to Sua’s ramen?', opts: ['The noodles swelled and went soggy.', 'Somebody blew on it.', 'It got cold and hard.', 'The cat ate it.'], skill: 'l26.usage',
            explain: '붇다 (to swell, to be bloated) is a ㄷ irregular: 붇 + 었어요 → 불었어요 (Workbook 18).', en: 'The ramen has gone all soggy!' } },
        { id: 'C3', time: '23:30', place: 'Counter', narr: 'Grandma is back from her evening walk.',
          lines: [['grandma', '학생, 오늘 공원에서 몇 시간 걸었어요? 저는 두 시간 걸었어요!', 'Dear, how many hours did you walk in the park today? I walked for two hours!']],
          q: { type: 'tiles', prompt: 'Answer: “I walked for an hour.”', ans: ['한 시간 걸었어요.'], soft: [{ p: '(저는 |)한 시간 (동안 |)걸었어요', note: 'Accepted.' }], extra: ['걷었어요.', '걸았어요.', '두'], skill: 'l26.form',
            diag: MM.forms[26].find(f => f.id === '걷다').wrongPast.map(w => ({ p: '(저는 |)한 시간 (동안 |)' + w, note: MM.l26why('걷다', w) })),
            explain: 'Textbook: 한 시간 걸었어요 = I walked for an hour.', en: 'I walked for an hour.' },
          after: [['grandma', '젊은 사람이 더 많이 걸어야 돼요!', 'Young people should walk more!']] },
        { id: 'C4', time: '00:30', place: 'Memo board', narr: 'Four sentences under “Back door: please read”. One is wrong.',
          q: { type: 'odd', prompt: 'Which sentence is WRONG?', opts: ['문을 달으면 따뜻해요.', '문을 닫으면 따뜻해요.', '택배를 받아서 기뻐요.', '저는 그 이야기를 믿어요.'], skill: 'l26.reg',
            explain: '닫다 is regular: 닫으면 (Textbook exercise 4). 달으면 is one of the book’s wrong choices.', en: '' } },
        { id: 'C5', time: '01:00', place: 'Stockroom', narr: 'Ramyeon is digging in the potted plant. He drops something in the hole and pushes soil over it. (화분 = flower pot)',
          q: { type: 'mc', prompt: '“Ramyeon is burying something.”', ko: '라면이 뭘 ___.', opts: ['묻고 있어요', '물고 있어요', '물어 있어요', '물을 거예요'], skill: 'l26.keep',
            explain: '묻다 (to bury) + -고 있어요 = 묻고 있어요. (물고 있어요 = he is holding it in his mouth: 물다.)', en: 'Ramyeon is burying something.' } },
        { id: 'C6', time: '02:00', place: 'Coffee machine', narr: 'Mr. Kim watches the cat.',
          lines: [['taxi', '고양이가 뭘 묻었어요?', 'What did the cat bury?']],
          q: { type: 'enOpts', prompt: 'What does Mr. Kim ask?', opts: ['What did the cat bury?', 'What did the cat ask?', 'What did the cat bite?', 'What did the cat hear?'], skill: 'l26.usage',
            explain: '묻다 (to bury) is regular → 묻었어요. 묻다 (to ask) changes → 물었어요. The book: same spelling, the context decides.', en: 'What did the cat bury?' } },
        { id: 'C7', time: '03:00', place: 'Front door', narr: 'The officer is back. He is pale.',
          lines: [['police', '어제 진짜 귀신을 봤어요! 하얀 옷을 입었어요!', 'Yesterday I really saw a ghost! It was wearing white clothes!']],
          q: { type: 'write', prompt: 'Answer: “Really? I don’t believe it.”', ans: ['진짜요? 저는 안 믿어요.'], soft: [{ p: '(진짜요 |정말요 |)(저는 |)(그 이야기(를|) |)(안|못) 믿어요', note: 'Accepted.' }], skill: 'l26.reg',
            diag: MM.forms[26].find(f => f.id === '믿다').wrong.map(w => ({ p: '(진짜요 |정말요 |)(저는 |)(안|못) ' + w, note: MM.l26why('믿다', w) })),
            explain: '믿다 (to believe) is regular: 믿어요.', en: 'Really? I don’t believe it.' },
          after: [['police', '흠… 그 귀신이 바나나 우유를 들고 있었어요.', 'Hmm… the ghost was holding a banana milk.']] },
        { id: 'C8', time: '04:00', place: 'Stockroom', narr: 'You dig in the flower pot. Minji’s locker key — the one she lost last week. You text her a photo. (열쇠 = key, 물건 = things)',
          lines: [['minji', '와, 제 열쇠예요! 이제 깨달았어요. 라면이 제 물건을 매일 가져갔어요!', 'Wow, it’s my key! Now I realize it. Ramyeon took my things every day!']],
          q: { type: 'enOpts', prompt: 'What did Minji realize?', opts: ['Ramyeon had been taking her things.', 'She had buried the key herself.', 'The key was in her bag.', 'The back door was open.'], skill: 'l26.usage',
            explain: '깨닫다 → 깨달았어요 (I realized). 물건 = things.', en: 'Now I realize it. Ramyeon took my things every day!' } },
        { id: 'C9', time: '05:00', place: 'Stockroom', narr: 'You fix the back-door closer. Now the door closes slowly and quietly.',
          q: { type: 'mc', prompt: '“If you close it slowly, it’s quiet.”', ko: '천천히 ___ 조용해요.', opts: ['닫으면', '달으면', '닫면', '달면'], skill: 'l26.reg',
            explain: 'Textbook: 닫 + 으면 = 닫으면 (regular: ㄷ stays).', en: 'If you close it slowly, it’s quiet.' } },
        { id: 'C10', time: '05:40', place: 'Eat-in table', narr: 'Mr. Park finds Sua’s forgotten cup on the table.',
          lines: [['boss', '이거 누구 라면이에요? 먹어도 돼요?', 'Whose ramen is this? Can I eat it?']],
          q: { type: 'write', prompt: 'Answer: “The ramen has all gone soggy.” (붇다)', ans: ['라면이 다 불었어요.'], soft: [{ p: '(사장님 |)(그 |)(라면(이|은) |)(벌써 |)(다 |)불었어요', note: 'Accepted.' }], skill: 'l26.form',
            diag: MM.forms[26].find(f => f.id === '붇다').wrongPast.map(w => ({ p: '(사장님 |)(그 |)(라면(이|은) |)(벌써 |)(다 |)' + w, note: MM.l26why('붇다', w) })),
            explain: 'Workbook 18: 붇다 → 불었어요.', en: 'The ramen has all gone soggy.' },
          after: [['boss', '괜찮아요. 저는 불은 라면도 좋아해요.', 'That’s fine. I like soggy ramen too.']],
          afterNarr: 'Ramyeon sniffs the soggy noodles, looks at Mr. Park with deep disappointment, and goes back to sleep on the ramen shelf.' },
      ],
      cctv: [
        { id: 'C.c1', type: 'enOpts', prompt: '물어요 or 묻어요: which one means “I ask”?', opts: ['물어요 (묻다 “to ask” is irregular)', '묻어요 (묻다 “to ask” is regular)', 'Both mean “I ask”.', 'Neither.'], skill: 'l26.usage', explain: 'Textbook: I ask = 물어요. I bury = 묻어요.', en: '' },
        { id: 'C.c2', type: 'mc', prompt: '닫 + 으면', opts: ['닫으면', '달으면', '닫면', '달면'], skill: 'l26.reg', explain: 'Textbook exercise 4: 닫으면.', en: '' },
        { id: 'C.c3', type: 'enOpts', prompt: '“방금 소리 들었어요?”', opts: ['Did you hear that noise (just now)?', 'Are you listening to the noise?', 'Did you make that noise?', 'Will you hear the noise?'], skill: 'l26.form', explain: 'Textbook dialogue.', en: 'Did you hear that noise?' },
        { id: 'C.c4', type: 'enOpts', prompt: '“라면이 불었어요.” (붇다)', opts: ['The noodles have swollen (gone soggy).', 'Somebody blew on the ramen.', 'The ramen was delicious.', 'The ramen is cold.'], skill: 'l26.usage', explain: '붇다 = to swell (up), to be bloated → 불었어요 (Workbook 18).', en: 'The noodles have gone soggy.' },
        { id: 'C.c5', type: 'mc', prompt: '받 + 아서', opts: ['받아서', '발아서', '받어서', '바다서'], skill: 'l26.reg', explain: 'Textbook exercise 3: 받아서 (발아서 is the book’s wrong choice).', en: '' },
        { id: 'C.c6', type: 'mc', prompt: '깨닫다 → past', opts: ['깨달았어요', '깨닫았어요', '깨달었어요', '깨다랐어요'], skill: 'l26.form', explain: 'Textbook exercise 5: 깨달았어요.', en: '' },
      ],
    },
  },

  /* extra questions by skill: returned mistakes, Dawn Restock, store repairs, Rush Hour */
  pool: [
    { id: 'p26.u1', type: 'enOpts', prompt: '싣다', opts: ['to load', 'to realize', 'to walk', 'to receive'], skill: 'l26.usage', explain: 'Workbook 8: 싣다 = to load.', en: '' },
    { id: 'p26.u2', type: 'enOpts', prompt: '깨닫다', opts: ['to realize', 'to close', 'to believe', 'to swell (up)'], skill: 'l26.usage', explain: 'Workbook 5.', en: '' },
    { id: 'p26.u3', type: 'enOpts', prompt: '붇다', opts: ['to swell (up), to be bloated', 'to blow', 'to load', 'to bury'], skill: 'l26.usage', explain: 'Workbook 6. (불다 = to blow is a different verb, but both give 불어요!)', en: '' },
    { id: 'p26.u4', type: 'mc', prompt: '“to believe, to trust”', opts: ['믿다', '묻다', '받다', '닫다'], skill: 'l26.usage', explain: 'Workbook 9: 믿다.', en: '' },
    { id: 'p26.u5', type: 'enOpts', prompt: '묻다 has two meanings. Which one conjugates in an irregular way?', opts: ['to ask (물어요)', 'to bury (물어요)', 'both', 'neither'], skill: 'l26.usage', explain: 'Workbook 11: 묻다 meaning “to ask”.', en: '' },
    { id: 'p26.u6', type: 'enOpts', prompt: '“어디에서 들었어요?”', opts: ['Where did you hear that?', 'Where are you listening?', 'Where did you walk?', 'Where did you ask?'], skill: 'l26.usage', explain: 'Textbook sample sentence.', en: 'Where did you hear that?' },
    { id: 'p26.r1', type: 'enOpts', prompt: 'Besides 묻다 (to bury), which three workbook verbs are regular?', opts: ['받다, 닫다, 믿다', '듣다, 걷다, 싣다', '깨닫다, 붇다, 걷다', '듣다, 받다, 믿다'], skill: 'l26.reg', explain: 'Workbook 12: 받다, 닫다, 믿다.', en: '' },
    { id: 'p26.r2', type: 'odd', prompt: 'Which sentence is WRONG?', opts: ['어제 선물을 발았어요.', '어제 선물을 받았어요.', '문을 닫으면 조용해요.', '저는 그 이야기를 믿어요.'], skill: 'l26.reg', explain: '받다 is regular: 받았어요.', en: '' },
    { id: 'p26.r3', type: 'mc', prompt: '믿다 → future', opts: ['믿을 거예요', '밀을 거예요', '믿 거예요', '밀 거예요'], skill: 'l26.reg', explain: 'Workbook 21: 믿을 거예요 (regular).', en: '' },
    { id: 'p26.k1', type: 'mc', prompt: '걷다 + -는 것 (walking)', opts: ['걷는 것', '걸는 것', '거는 것', '걸은 것'], skill: 'l26.keep', explain: 'Textbook: 걷는 것 좋아해요. (거는 = hanging: 걸다.)', en: '' },
    { id: 'p26.k2', type: 'enOpts', prompt: 'Why 듣고 있어요, not 들고 있어요?', opts: ['-고 starts with a consonant, so ㄷ stays (들고 있어요 = I am holding it).', '듣다 is regular.', '들고 있어요 is the past tense.', 'Both are fine.'], skill: 'l26.keep', explain: 'Textbook usage example 1.', en: '' },
    { id: 'p26.k3', type: 'mc', prompt: '싣다 → present progressive', opts: ['싣고 있어요', '실고 있어요', '실어 있어요', '싣어 있어요'], skill: 'l26.keep', explain: 'Workbook 20: 싣고 있어요.', en: '' },
    { id: 'p26.k4', type: 'odd', prompt: 'Which sentence is WRONG?', opts: ['지금 음악을 들고 있어요.', '지금 음악을 듣고 있어요.', '걷는 것 좋아해요.', '박스를 싣고 있어요.'], skill: 'l26.keep', explain: 'Listening = 듣고 있어요 (ㄷ stays before -고). 들고 있어요 = holding.', en: '' },
    { id: 'p26.f1', type: 'odd', prompt: 'Which sentence is WRONG?', opts: ['많이 걷었는데, 안 피곤해요.', '많이 걸었는데, 안 피곤해요.', '어디에서 들었어요?', '물어도 대답이 없어요.'], skill: 'l26.form', explain: '걷다 → 걸었는데 (ㄷ → ㄹ before a vowel).', en: '' },
    { id: 'p26.f2', type: 'enOpts', prompt: 'How is 물으면 built?', opts: ['묻 (to ask) + 으면: ㄷ → ㄹ before the vowel 으', '물다 + 면', '묻 + 면', '물 + 어면'], skill: 'l26.form', explain: 'Textbook: 묻 + 으면 → 물으면.', en: '' },
  ],

  vocab: [
    { ko: '소리', en: 'sound, noise' }, { ko: '방금', en: 'just now' }, { ko: '이야기', en: 'story' }, { ko: '피곤하다', en: 'to be tired' },
  ],
  grp: {},
  examples: {
    '듣다': ['어디에서 들었어요?', 'Where did you hear that?'],
    '걷다': ['많이 걸었는데, 안 피곤해요.', 'I walked a lot, but I am not tired.'],
    '묻다': ['물어도 대답이 없어요.', 'Even if I ask, there is no answer. (to ask → 물어요 · to bury → 묻어요)'],
    '싣다': ['싣 + 을 거예요 → 실을 거예요', '(I) will load (Textbook)'],
    '깨닫다': ['깨닫 + 았어요 → 깨달았어요', '(I) realized (Textbook)'],
    '붇다': ['붇다 → 불어요 · 불었어요 · 불을 거예요', 'to swell (up), to be bloated (WB 18)'],
    '받다': ['받 + 아서 → 받아서', 'receive and then; because (I) receive (Textbook; regular)'],
    '닫다': ['닫 + 으면 → 닫으면', 'if (you) close (Textbook; regular)'],
    '믿다': ['그 이야기를 믿어요?', 'Do you believe that story?'],
    '소리': ['방금 소리 들었어요?', 'Did you hear that noise?'],
    '방금': ['방금 소리 들었어요?', 'Did you hear that noise?'],
    '이야기': ['그 이야기를 믿어요?', 'Do you believe that story?'],
    '피곤하다': ['많이 걸었는데, 안 피곤해요.', 'I walked a lot, but I am not tired.'],
  },
};
/* 들어요 / 듣어요, 받아서 / 발아서 differ by one jamo: no “typo” leniency */
(() => {
  const G = MM.game[26], off = q => { if (q && q.ans && q.lenient === undefined) q.lenient = false; };
  Object.values(G.shifts).forEach(sh => { sh.scenes.forEach(s => off(s.q)); sh.cctv.forEach(off); });
  G.pool.forEach(off);
})();
