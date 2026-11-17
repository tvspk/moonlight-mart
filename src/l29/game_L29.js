/* game_L29.js — Moonlight Mart, Lesson 29 (ㅅ irregular: when ㅅ is the 받침 of a verb stem and a vowel follows, the ㅅ drops:
   낫다 → 나아요, 젓다 → 저어요 / 저으세요, 잇다 → 이었어요, 짓다 → 지었어요 / 지을 거예요, 긋다 → 그었어요, 붓다 → 부으세요; before a consonant it
   stays: 짓고 있어요, 짓는; regular: 웃다, 씻다, 벗다).
   Who speaks how (from Lesson 27): Minji ↔ player 반말; Mr. Kim and Grandma → player 반말, player → them 존댓말; Sua → player 존댓말, player →
   Sua 반말 (allowed); everybody else 존댓말 both ways; Mr. Park → Minji 존댓말 + 민지 씨; to the boss the player says 민지 씨.
   Lines: [castId, korean, english]. q.opts: correct option first (engine shuffles). odd: opts[0] is the WRONG sentence.
   Forms come from forms_L29.js (generated, checked against the book). Game words not in the book: 감기 (book), 약 (medicine; 약을 짓다 = to
   have medicine made up), 선 (cable), 도시락 (lunch box), 줄 (line), 밥솥 / 쌀 / 밥 (WB 19), 표정 (face, expression) — glossed where they
   appear. Native-speaker check: written and read through in the 2026-10-16 review (see HANDOFF.md). lenient off at the end: 나아요 / 나요. */

/* explains any wrong form w of the ㅅ verb d (used by textbook, workbook and the questions below; this file loads before them) */
MM.l29why = (d, w) => {
  const f = (MM.forms[29] || []).find(r => r.dict === d); if (!f) return '';
  const cols = { wrong: 'hae', wrongPast: 'past', wrongFut: 'fut', wrongProg: 'prog', wrongMyeon: 'myeon', wrongSeyo: 'seyo', wrongAju: 'aju', wrongNeun: 'neun', wrongEun: 'eun', wrongSeo: 'seo', wrongGo: 'go', wrongGi: 'gi' };
  const k = Object.keys(cols).find(c => (f[c] || []).includes(w)); if (!k) return '';
  const col = cols[k], right = f[col], stem = d.slice(0, -1);
  const other = { '나요': '나다 (to come out)', '났어요': '나다 (to come out; to happen)', '날 거예요': '날다 (to fly) or 나다', '나면': '나다 (to come out)', '난': '나다', '나는': '나 (I) + 는',
    '져요': '지다 (to lose)', '졌어요': '지다 (to lose)', '질 거예요': '지다 (to lose)', '지면': '지다 (to lose)', '진': '지다 (to lose)', '지는': '지다 (to lose)',
    '여요': '이다 (to be)', '였어요': '이다 (to be)', '일 거예요': '이다 (to be)', '이면': '이다 (to be)', '인': '이다 (to be)',
    '불 거예요': '불다 (to blow)', '분': '불다 (to blow)', '부는': '불다 (to blow)', '저는': '저 (I) + 는', '그는': '그 (he) + 는',
    '울 거예요': '울다 (to cry)', '운': '울다 (to cry)', '우는': '울다 (to cry)', '우면': '울다 (to cry)', '벌 거예요': '벌다 (to earn)', '버는': '벌다 (to earn)' }[w] || '';
  const tail = other ? ` (${w} is a form of ${other}.)` : '';
  const vowelCol = !['prog', 'neun', 'go', 'gi'].includes(col);
  if (f.irr === 'ㅅ') {
    if (vowelCol && w.startsWith(stem)) return `${d} is a ㅅ irregular: before a vowel the ㅅ drops → ${right}.`;
    if (!vowelCol) return `-고 / -는 / -기 begin with a consonant, so the ㅅ stays: ${right}.${tail}`;
    if (['fut', 'myeon', 'seyo', 'eun'].includes(col)) return `The ㅅ drops, but the 으 of the ending stays: ${right}.${tail}`;
    if (col === 'hae' && /[아어]요$/.test(w) && w.length === right.length) return `아 after ㅏ/ㅗ, otherwise 어: ${right}.`;
    return `After the ㅅ drops, the two vowels stay apart — no contraction: ${right}.${tail}`;
  }
  if (vowelCol) return `${d} is regular (one of the book’s exceptions): the ㅅ stays → ${right}.${tail}`;
  return `${d} is regular: the stem stays as it is → ${right}.${tail}`;
};

(() => {
const F29 = d => MM.forms[29].find(f => f.dict === d);
const dg = (frame, d, k, wk) => { const f = F29(d); return f[wk].map(w => ({ p: frame.replace(f[k], w), note: MM.l29why(d, w) })); };

MM.game[29] = {
  skills: {
    'l29.form':  { en: 'ㅅ drops before a vowel', desc: 'ㅅ irregular verbs (낫다, 젓다, 잇다, 짓다, 긋다, 붓다): the ㅅ drops before a vowel, and the vowels stay apart: 나아요, 저으세요, 이었어요, 지었어요, 그었어요, 부을 거예요.' },
    'l29.keep':  { en: 'ㅅ stays before a consonant', desc: 'Before -고, -는, -기, -자… the ㅅ does not change: 짓고 있어요, 밥 짓는 것, 긋고 있어요, 짓자.' },
    'l29.reg':   { en: 'Regular ㅅ verbs', desc: '웃다, 씻다, 벗다 keep the ㅅ even before a vowel: 웃어요, 씻을 거예요, 벗어 주세요.' },
    'l29.usage': { en: 'The ㅅ verbs in use', desc: '낫다 heal, be better · 젓다 stir · 잇다 connect · 짓다 make, build, compose (집 · 이름 · 밥 · 약을 짓다) · 긋다 draw a line · 붓다 pour · 웃다 laugh · 씻다 wash · 벗다 take off.' },
    'l29.vocab': { en: 'Lesson 29 vocabulary', desc: 'The words of the lesson.' },
  },
  fixSkills: { cable: 'l29.form', floorline: 'l29.keep', ricepot: 'l29.reg' },
  formTpl: {
    key: 'hae', prompt: '{dict} ({en}) → polite present', ko: '___', explain: '{dict} → {form}', skill: 'l29.form',
    skillBy: { 'ㅅ': 'l29.form', keep: 'l29.reg' }, irrNotes: {},
    variants: [
      { key: 'hae', wrongKey: 'wrong', prompt: '{dict} ({en}) → polite present (해요)', explain: '{dict} → {form}' },
      { key: 'past', wrongKey: 'wrongPast', prompt: '{dict} ({en}) → past (-았/었어요)', explain: '{dict} → {form}' },
      { key: 'fut', wrongKey: 'wrongFut', prompt: '{dict} ({en}) → future (-(으)ㄹ 거예요)', explain: '{dict} → {form}' },
      { key: 'seyo', wrongKey: 'wrongSeyo', prompt: '{dict} ({en}) → please … (-(으)세요)', explain: '{dict} → {form}' },
      { key: 'prog', wrongKey: 'wrongProg', prompt: '{dict} ({en}) → present progressive (-고 있어요)', explain: '{dict} → {form}: -고 begins with a consonant, the stem stays', skill: 'l29.keep' },
    ],
  },
  intro: 'When ㅅ is the final consonant of a verb stem and a vowel follows, the ㅅ is dropped: 낫다 → 나아요, 젓다 → 저어요, 잇다 → 이었어요, 짓다 → 지었어요. The two vowels stay side by side (나아요, not 나요). Before a consonant nothing changes: 짓고 있어요. And three verbs never drop it: 웃다 → 웃어요, 씻다 → 씻을 거예요, 벗다 → 벗어 주세요. Tonight: a cold, a chewed cable, a puppy with a name, and rice for everyone.',

  shifts: {
    A: {
      title: 'Feel Better Soon', sub: 'Recognize · choose', kind: 'recognize', fix: 'cable',
      snack: { id: 'l29.snackA', ko: '나아요 생강차', en: 'Feel-Better Ginger Tea', desc: 'Stir well. Recovery not guaranteed, but the cup is very warm.' },
      scenes: [
        { id: 'A1', time: '22:00', place: 'Counter', narr: 'Twenty-ninth night. Minji is wearing a mask and coughing. Mr. Park comes down from upstairs. (감기 = a cold)',
          lines: [['boss', '민지 씨, 감기 다 나았어요?', 'Minji, did you recover completely from your cold?'], ['minji', '아니요, 아직이요…', 'No, not yet…']],
          q: { type: 'enOpts', prompt: 'What does Mr. Park ask?', opts: ['Did you get over your cold completely?', 'Did you catch a cold?', 'Did you take your medicine?', 'Are you feeling cold?'], skill: 'l29.form',
            explain: 'Textbook: 감기 다 나았어요? 낫 + 았어요 → 나았어요 (the ㅅ drops before a vowel).', en: 'Did you recover completely from your cold?' } },
        { id: 'A2', time: '22:10', place: 'Counter', narr: 'He hands her a paper bag from the pharmacy. (약 = medicine, 약국 = pharmacy)',
          lines: [['boss', '약국에서 약을 지었어요. 이거 먹고 푹 쉬세요.', 'I had some medicine made up at the pharmacy. Take this and get some good rest.']],
          q: { type: 'enOpts', prompt: 'What did Mr. Park do at the pharmacy?', opts: ['He had medicine made up for Minji.', 'He built a pharmacy.', 'He named the medicine.', 'He poured the medicine out.'], skill: 'l29.usage',
            explain: '짓다 = to make, to build, to compose — and with 약: to make up medicine (from a prescription). 짓 + 었어요 → 지었어요.', en: 'I had some medicine made up at the pharmacy.' } },
        { id: 'A3', time: '22:20', place: 'Front door', narr: 'Minji goes home early. You speak 반말 with her (Lesson 27).',
          q: { type: 'mc', prompt: 'Say goodbye to Minji in 반말: “Get better soon!”', opts: ['빨리 나아!', '빨리 낫아!', '빨리 나!', '빨리 나아요, 민지 씨!'], skill: 'l29.form',
            explain: '낫다 → 나아요 → 반말 나아 (Lesson 27: drop 요). The ㅅ drops and 아 stays separate: 나아. (Minji and you use 반말 now, so not 나아요, 민지 씨.)', en: 'Get better soon!' },
          after: [['minji', '고마워. 내일 봐!', 'Thanks. See you tomorrow!']] },
        { id: 'A4', time: '23:00', place: 'Stockroom', narr: 'The stockroom radio is silent. Its speaker cable lies on the floor in two pieces — with tooth marks. Ramyeon is asleep on the ramen shelf, looking very innocent. (선 = cable, wire)',
          q: { type: 'mc', prompt: 'Text Mr. Park: “I will connect the two (pieces).”', ko: '제가 두 개를 ___.', opts: ['이을게요', '잇을게요', '일게요', '이을께요'], skill: 'l29.form',
            explain: '잇 + 을게요 → 이을게요: the ㅅ drops before a vowel, the 으 stays. (일게요 would come from 이다; 께요 is a spelling mistake, Lesson 6.)', en: 'I will connect the two (pieces).' } },
        { id: 'A5', time: '23:30', place: 'Memo board', narr: 'Minji copied the sample sentences onto the memo board before she left. She had a fever. One is wrong.',
          q: { type: 'odd', prompt: 'Which sentence is WRONG?', opts: ['두 개를 잇었어요.', '두 개를 이었어요.', '잘 저으세요.', '이 집을 누가 지었어요?'], skill: 'l29.form',
            explain: '잇다 is a ㅅ irregular: 잇 + 었어요 → 이었어요.', en: '' } },
        { id: 'A6', time: '00:30', place: 'Eat-in table', narr: 'Sua is watching a comedy show on her phone and laughing so hard she cries. (웃기다 = to be funny)',
          lines: [['sua', '이거 정말 웃겨요! 저 아까부터 계속 웃고 있어요.', 'This is so funny! I’ve been laughing since a while ago.']],
          q: { type: 'enOpts', prompt: '웃다 (to laugh) ends in ㅅ. What happens to it before a vowel (웃어요)?', opts: ['Nothing: 웃다 is regular, the ㅅ stays.', 'The ㅅ drops: 우어요.', 'The ㅅ becomes ㄹ: 울어요.', 'It contracts: 워요.'], skill: 'l29.reg',
            explain: 'Textbook exceptions: 웃다 → 웃어요. 씻다 and 벗다 are regular too. (울어요 = I cry: 울다.)', en: 'I’ve been laughing since a while ago.' } },
        { id: 'A7', time: '02:00', place: 'Coffee machine', narr: 'Mr. Kim stirs his instant coffee with a wooden stick. (설탕 = sugar)',
          lines: [['taxi', '이 커피는 잘 저어야 돼. 설탕이 다 밑에 있어.', 'You have to stir this coffee well. All the sugar is at the bottom.']],
          q: { type: 'mc', prompt: 'Answer him politely: “Then stir it well.”', opts: ['그럼 잘 저으세요.', '그럼 잘 젓으세요.', '그럼 잘 저세요.', '그럼 잘 저어.'], skill: 'l29.form',
            explain: 'Textbook: 잘 저으세요. 젓 + 으세요 → 저으세요 (the ㅅ drops, the 으 stays). Mr. Kim speaks 반말 to you, but you keep 존댓말 (Lesson 27), so not 저어.', en: 'Then stir it well.' } },
        { id: 'A8', time: '03:00', place: 'Front door', narr: 'The officer looks up at the old building. Grandma is on her way down the stairs. (오래되다 = to be old)',
          lines: [['police', '이 건물 정말 오래됐네요. 누가 지었어요?', 'This building is really old. Who built it?'], ['grandma', '우리 남편이 지었어요. 사십 년 전에요.', 'My husband built it. Forty years ago.']],
          q: { type: 'enOpts', prompt: 'What did Grandma’s husband do?', opts: ['He built the building.', 'He named the building.', 'He bought the building.', 'He painted the building.'], skill: 'l29.usage',
            explain: 'Textbook: 이 집을 누가 지었어요? = Who built this house? 짓 + 었어요 → 지었어요.', en: 'My husband built it. Forty years ago.' } },
        { id: 'A9', time: '04:00', place: 'Counter', narr: 'Mr. Lee comes in, coughing as well.',
          lines: [['manager', '저도 감기에 걸렸어요. 언제 나을까요?', 'I caught a cold too. I wonder when I’ll get better?']],
          q: { type: 'enOpts', prompt: 'What does Mr. Lee wonder?', opts: ['When he will get better.', 'Where the pharmacy is.', 'Who gave him the cold.', 'If the medicine is expensive.'], skill: 'l29.form',
            explain: '낫 + 을까요 → 나을까요 (Lesson 4: -(으)ㄹ까요 = I wonder…). The ㅅ drops, the 으 stays.', en: 'I wonder when I’ll get better?' } },
        { id: 'A10', time: '05:30', place: 'Counter', narr: 'Music from the stockroom. Mr. Park comes down.',
          lines: [['boss', '라디오가 다시 나오네요! 어떻게 고쳤어요?', 'The radio is playing again! How did you fix it?']],
          q: { type: 'mc', prompt: 'Answer: “I connected the two cables.”', opts: ['선 두 개를 이었어요.', '선 두 개를 잇었어요.', '선 두 개를 였어요.', '선 두 개를 이어요.'], skill: 'l29.form',
            explain: 'Textbook: 두 개를 이었어요. 잇 + 었어요 → 이었어요 (the vowels stay apart; 였어요 is 이다). 이어요 is the present tense.', en: 'I connected the two cables.' },
          afterNarr: 'Mr. Park looks at the tooth marks on the cable. Then at Ramyeon. Ramyeon yawns, stretches, and turns his back on both of you.' },
      ],
      cctv: [
        { id: 'A.c1', type: 'enOpts', prompt: 'What happens to ㅅ (the book)?', opts: ['When ㅅ is the 받침 of a verb stem and a vowel follows, the ㅅ is dropped.', 'ㅅ changes to ㄹ before a vowel.', 'ㅅ is always dropped.', 'ㅅ changes to ㄷ before a consonant.'], skill: 'l29.form', explain: 'Textbook p.180. Some verbs do not follow it (웃다, 씻다, 벗다).', en: '' },
        { id: 'A.c2', type: 'mc', prompt: '낫 + 아요', opts: ['나아요', '나요', '낫아요', '나와요'], skill: 'l29.form', explain: 'Textbook: 낫 + 아요 → 나아요 = It’s better. / Please feel better. (나와요 = it comes out: 나오다.)', en: '' },
        { id: 'A.c3', type: 'enOpts', prompt: '“이 집을 누가 지었어요?”', opts: ['Who built this house?', 'Who named this house?', 'Who sold this house?', 'Who is in this house?'], skill: 'l29.usage', explain: 'Textbook sample sentence.', en: 'Who built this house?' },
        { id: 'A.c4', type: 'mc', prompt: '젓 + 어요', opts: ['저어요', '저요', '젓어요', '져요'], skill: 'l29.form', explain: 'Textbook: 젓 + 어요 → 저어요 = I stir. / Please stir it.', en: '' },
        { id: 'A.c5', type: 'enOpts', prompt: 'Which three verbs are the book’s exceptions (the ㅅ stays)?', opts: ['웃다, 씻다, 벗다', '낫다, 젓다, 잇다', '짓다, 긋다, 붓다', '웃다, 짓다, 낫다'], skill: 'l29.reg', explain: 'Textbook p.182: 웃어요, 씻을 거예요, 벗어 주세요.', en: '' },
        { id: 'A.c6', type: 'mc', prompt: '잇 + 었어요', opts: ['이었어요', '였어요', '잇었어요', '이었서요'], skill: 'l29.form', explain: 'Textbook: 잇 + 었어요 → 이었어요 = I connected (it).', en: '' },
      ],
    },

    B: {
      title: 'Who Named It?', sub: 'Build · write', kind: 'produce', fix: 'floorline',
      note: { by: 'boss', text: 'Night shift rule #29: from Monday we sell my new lunch box (도시락). It still has no name — please think of one (이름을 짓다). Also, customers stand everywhere: draw a line (줄) on the floor where the queue starts. — Park' },
      snack: { id: 'l29.snackB', ko: '달빛 도시락', en: 'Moonlight Lunch Box', desc: 'Rice, egg, kimchi. The name took longer to make than the lunch box.' },
      scenes: [
        { id: 'B1', time: '22:00', place: 'Counter', narr: 'Mr. Park shows you a photo of the new lunch box.',
          lines: [['boss', '새 도시락 이름이 아직 없어요. 좋은 이름 있어요?', 'The new lunch box still has no name. Do you have a good name?']],
          q: { type: 'write', prompt: 'Answer: “I’m going to create a good name.”', ans: ['좋은 이름을 지을 거예요.'], soft: [{ p: '(네 |)(제가 |)(오늘 |)좋은 이름(을|) 지을 거예요', note: 'Accepted.' }, { p: '(네 |)(제가 |)(오늘 |)좋은 이름(을|) 지을게요', note: 'Accepted (-(으)ㄹ게요: a promise to Mr. Park, Lesson 6). The book: 지을 거예요.' }], skill: 'l29.form',
            diag: dg('좋은 이름을 지을 거예요', '짓다', 'fut', 'wrongFut').concat([{ p: '(네 |)(제가 |)좋은 이름(을|) 짓을게요', note: MM.l29why('짓다', '짓을 거예요') }]),
            explain: 'Textbook: 좋은 이름을 지을 거예요. 짓 + 을 거예요 → 지을 거예요.', en: 'I’m going to create a good name.' },
          after: [['boss', '고마워요! 기대할게요.', 'Thank you! I’m looking forward to it.']] },
        { id: 'B2', time: '22:30', place: 'Front door', narr: 'Grandma comes in with a tiny white puppy on a leash. (강아지 = puppy)',
          lines: [['grandma', '학생, 우리 새 강아지야! 정말 귀여워.', 'Look, our new puppy! She’s so cute.']],
          q: { type: 'write', prompt: 'Ask Grandma: “What is the name of your dog?”', ans: ['강아지 이름이 뭐예요?'], soft: [{ p: '(할머니 |)(강아지 |)(이름이|이름은) 뭐예요', note: 'Accepted.' }], skill: 'l29.usage',
            diag: [{ p: '(할머니 |)(강아지 |)(이름이|이름은) 뭐야', note: 'Grandma speaks 반말 to you, but you keep 존댓말 with her (Lesson 27): 뭐예요?' }, { p: '(강아지 |)(이름이|이름은) 뭐에요', note: 'Spelling: after a vowel it is 예요 → 뭐예요.' }],
            explain: 'Textbook dialogue: 강아지 이름이 뭐예요?', en: 'What is the name of your dog?' },
          after: [['grandma', '코코야.', 'It’s Coco.']] },
        { id: 'B3', time: '22:35', place: 'Front door', narr: 'Coco wags her whole body.',
          q: { type: 'write', prompt: 'Ask: “Who named her?” (짓다)', ans: ['누가 지었어요?'], soft: [{ p: '(이름(은|) |)누가 (이름(을|) |)지었어요', note: 'Accepted.' }], skill: 'l29.form',
            diag: dg('누가 지었어요', '짓다', 'past', 'wrongPast').concat([{ p: '(이름(은|) |)누가 지었어', note: 'Right form, but to Grandma you keep 존댓말 (Lesson 27): 지었어요?' }]),
            explain: 'Textbook dialogue: 누가 지었어요? 짓 + 었어요 → 지었어요. 이름을 짓다 = to make a name, to name.', en: 'Who named her?' },
          after: [['grandma', '내가 지었어! 예쁜 이름이야.', 'I named her! It’s a pretty name.']] },
        { id: 'B4', time: '23:30', place: 'Eat-in table', narr: 'On the top shelf, Ramyeon stares down at Coco. His face says everything. Sua bursts out laughing. (표정 = facial expression)',
          lines: [['sua', '라면 표정 좀 보세요! 하하하!', 'Look at Ramyeon’s face! Hahaha!']],
          q: { type: 'write', prompt: 'Tell Sua in 반말: “Don’t laugh!” (웃다 + -지 마)', ans: ['웃지 마!'], soft: [{ p: '(수아야 |)(그만 |)웃지 마', note: 'Accepted.' }], skill: 'l29.reg',
            diag: [{ p: '(수아야 |)우지 마', note: '웃다 is regular — and -지 begins with a consonant anyway: 웃지 마.' }, { p: '(수아야 |)웃지 마세요', note: 'Correct Korean, but you speak 반말 with Sua (she said 말 놓으셔도 돼요, Lesson 27): 웃지 마.' }, { p: '(수아야 |)웃지 말자', note: '웃지 말자 = let’s not laugh (Lesson 28). Don’t laugh = 웃지 마.' }],
            explain: '웃다 is regular: 웃지 마 (Lesson 27: -지 마세요 → -지 마).', en: 'Don’t laugh!' },
          after: [['sua', '네, 안 웃을게요… 하하하!', 'Okay, I won’t laugh… hahaha!']] },
        { id: 'B5', time: '00:30', place: 'By the counter', narr: 'Mr. Park’s note: a line on the floor where the queue starts. You kneel with a white paint marker. Mr. Lee walks in.',
          lines: [['manager', '바닥에서 지금 뭐 해요?', 'What are you doing on the floor?']],
          q: { type: 'write', prompt: 'Answer: “I’m drawing a line.” (줄 = line, 긋다, -고 있어요)', ans: ['줄을 긋고 있어요.'], soft: [{ p: '(지금 |)(바닥에 |)줄(을|) 긋고 있어요', note: 'Accepted.' }], skill: 'l29.keep',
            diag: dg('줄을 긋고 있어요', '긋다', 'prog', 'wrongProg').concat([{ p: '(지금 |)(바닥에 |)줄(을|) 그어고 있어요', note: '-고 goes straight onto the stem 긋: 긋고 있어요.' }, { p: '(지금 |)(바닥에 |)줄(을|) 긋어 있어요', note: 'Present progressive = stem + -고 있어요: 긋고 있어요.' }]),
            explain: '-고 begins with a consonant, so the ㅅ stays: 긋고 있어요 (Workbook 14).', en: 'I’m drawing a line.' } },
        { id: 'B6', time: '01:00', place: 'By the counter', narr: 'The courier nearly trips over your fresh line.',
          lines: [['courier', '어? 이 줄은 뭐예요? 누가 그었어요?', 'Huh? What is this line? Who drew it?']],
          q: { type: 'write', prompt: 'Answer: “I drew it.”', ans: ['제가 그었어요.'], soft: [{ p: '(그거 |그 줄(은|) |이 줄(은|) |)(제가|저) 그었어요', note: 'Accepted.' }], skill: 'l29.form',
            diag: dg('제가 그었어요', '긋다', 'past', 'wrongPast').concat([{ p: '(그거 |이 줄(은|) |)내가 그었어', note: 'That is 반말. With the courier you use 존댓말: 제가 그었어요.' }]),
            explain: '긋 + 었어요 → 그었어요 (Workbook 14; the vowels stay apart).', en: 'I drew it.' },
          after: [['courier', '아, 손님들 줄이요? 좋네요! 저는 바빠서 이만!', 'Ah, a line for the customers? Nice! I’m busy, so — bye!']] },
        { id: 'B7', time: '02:00', place: 'Coffee machine', narr: 'Mr. Kim reads the poster on the wall: “새 도시락 이름을 지어 주세요!” (Please name the new lunch box!)',
          lines: [['taxi', '학생은 이름 지었어? 나도 하나 지을까?', 'Did you come up with a name? Shall I make one too?']],
          q: { type: 'write', prompt: 'Answer politely: “I’m making one now.” (짓다, -고 있어요)', ans: ['지금 짓고 있어요.'], soft: [{ p: '(아니요 |)(지금 |)(이름(을|) |)짓고 있어요', note: 'Accepted.' }], skill: 'l29.keep',
            diag: dg('지금 짓고 있어요', '짓다', 'prog', 'wrongProg').concat([{ p: '(아니요 |)(지금 |)(이름(을|) |)짓고 있어', note: 'Right form, but Mr. Kim gets 존댓말 from you (Lesson 27): 짓고 있어요.' }]),
            explain: '-고 begins with a consonant: 짓고 있어요 (Workbook 13).', en: 'I’m making one now.' },
          after: [['taxi', '좋아. 내 이름은 “기사님 도시락”이야. 하하!', 'Good. My name is “Taxi Driver’s Lunch Box”. Haha!']] },
        { id: 'B8', time: '03:00', place: 'Front door', narr: 'The officer has seen the poster too.',
          lines: [['police', '새 도시락 이름 지었어요?', 'Did you name the new lunch box?']],
          q: { type: 'write', prompt: 'Answer: “Not yet. I will make it tomorrow.” (아직, 내일, 짓다, -(으)ㄹ 거예요)', ans: ['아직이요. 내일 지을 거예요.'], soft: [{ p: '(아니요 |)(아직(이요|요)|아직 안 지었어요|아직 못 지었어요) (이름(은|) |)내일 지을 거예요', note: 'Accepted.' }, { p: '(아니요 |)(아직(이요|요)|아직 안 지었어요|아직 못 지었어요) (이름(은|) |)내일 지을게요', note: 'Accepted (-(으)ㄹ게요).' }], skill: 'l29.form',
            diag: dg('아직이요 내일 지을 거예요', '짓다', 'fut', 'wrongFut'),
            explain: '짓 + 을 거예요 → 지을 거예요.', en: 'Not yet. I will make it tomorrow.' } },
        { id: 'B9', time: '04:30', place: 'Counter', narr: 'Grandma is back, with Coco in her arms. Coco has a runny nose and sneezes.',
          lines: [['grandma', '코코가 감기에 걸렸어. 빨리 나아야 돼.', 'Coco caught a cold. She has to get better soon.']],
          q: { type: 'write', prompt: 'Say to Grandma: “She will get better soon.” (빨리 / 곧, 낫다, -(으)ㄹ 거예요)', ans: ['빨리 나을 거예요.'], soft: [{ p: '(코코(는|) |)(곧 |빨리 |금방 |)나을 거예요', note: 'Accepted.' }], skill: 'l29.form',
            diag: dg('빨리 나을 거예요', '낫다', 'fut', 'wrongFut').concat([{ p: '(코코(는|) |)(곧 |빨리 |)나을 거야', note: 'Right form, but to Grandma you keep 존댓말 (Lesson 27): 나을 거예요.' }]),
            explain: '낫 + 을 거예요 → 나을 거예요 (날 거예요 would be “will fly”: 날다).', en: 'She will get better soon.' },
          after: [['grandma', '고마워, 학생.', 'Thank you, dear.']] },
        { id: 'B10', time: '05:40', place: 'Counter', narr: 'Mr. Park comes down for the morning shift.',
          lines: [['boss', '도시락 이름 지었어요? 뭐예요?', 'Did you name the lunch box? What is it?']],
          q: { type: 'tiles', prompt: 'Answer: “I named it ‘Moonlight Lunch Box’.” (이름을 … (으)로 짓다)', ans: ['이름을 달빛 도시락으로 지었어요.'], soft: [{ p: '(이름(을|은) |)달빛 도시락(으로|이라고) 지었어요', note: 'Accepted.' }], extra: ['짓었어요.', '졌어요.', '이름이'], skill: 'l29.form',
            diag: dg('이름을 달빛 도시락으로 지었어요', '짓다', 'past', 'wrongPast'),
            explain: '이름을 X(으)로 짓다 = to name it X. 짓 + 었어요 → 지었어요.', en: 'I named it “Moonlight Lunch Box”.' },
          after: [['boss', '“달빛 도시락”! 좋은 이름이네요.', '“Moonlight Lunch Box”! That’s a good name.']],
          afterNarr: 'Mr. Park writes the name on the poster himself. Underneath, in small letters, Mr. Kim has added: “기사님 도시락 (also good).”' },
      ],
      cctv: [
        { id: 'B.c1', type: 'write', prompt: 'Translate: Stir it well.', ans: ['잘 저으세요.'], soft: [{ p: '잘 저어 주세요', note: 'Accepted (-아/어 주세요). The book: 잘 저으세요.' }], skill: 'l29.form', diag: dg('잘 저으세요', '젓다', 'seyo', 'wrongSeyo'), explain: 'Textbook sample sentence.', en: 'Stir it well.' },
        { id: 'B.c2', type: 'write', prompt: 'Translate: I connected the two (objects).', ans: ['두 개를 이었어요.'], soft: [{ p: '(제가 |)두 개(를|) 이었어요', note: 'Accepted.' }], skill: 'l29.form', diag: dg('두 개를 이었어요', '잇다', 'past', 'wrongPast'), explain: 'Textbook sample sentence.', en: 'I connected the two (objects).' },
        { id: 'B.c3', type: 'write', prompt: 'Translate: Who built this house?', ans: ['이 집을 누가 지었어요?'], soft: [{ p: '이 집(을|은) 누가 지었어요', note: 'Accepted.' }, { p: '누가 이 집(을|) 지었어요', note: 'Accepted.' }], skill: 'l29.form', diag: dg('이 집을 누가 지었어요', '짓다', 'past', 'wrongPast'), explain: 'Textbook sample sentence.', en: 'Who built this house?' },
        { id: 'B.c4', type: 'write', prompt: 'Translate: Please take your shoes off.', ans: ['신발을 벗어 주세요.'], soft: [{ p: '신발(을|) 벗어 주세요', note: 'Accepted.' }, { p: '신발(을|) 벗으세요', note: 'Accepted (-(으)세요). The book: 벗어 주세요.' }], skill: 'l29.reg', diag: dg('신발을 벗어 주세요', '벗다', 'aju', 'wrongAju'), explain: 'Textbook: 벗다 is regular.', en: 'Please take your shoes off.' },
        { id: 'B.c5', type: 'write', prompt: 'Translate: Did you recover (completely) from the cold?', ans: ['감기 다 나았어요?'], soft: [{ p: '감기(는|가|) 다 나았어요', note: 'Accepted.' }], skill: 'l29.form', diag: dg('감기 다 나았어요', '낫다', 'past', 'wrongPast'), explain: 'Textbook sample sentence.', en: 'Did you recover completely from the cold?' },
        { id: 'B.c6', type: 'write', prompt: 'Translate: I’m going to create a good name.', ans: ['좋은 이름을 지을 거예요.'], soft: [{ p: '좋은 이름(을|) 지을 거예요', note: 'Accepted.' }], skill: 'l29.form', diag: dg('좋은 이름을 지을 거예요', '짓다', 'fut', 'wrongFut'), explain: 'Textbook sample sentence.', en: 'I’m going to create a good name.' },
      ],
    },

    C: {
      title: 'Rice for Everyone', sub: 'Mixed · optional', kind: 'mixed', fix: 'ricepot', optional: true,
      snack: { id: 'l29.snackC', ko: '갓 지은 밥 주먹밥', en: 'Freshly-Cooked Rice Ball', desc: 'Made from rice that was washed, poured, stirred and cooked by the night shift. Mostly correctly.' },
      scenes: [
        { id: 'C1', time: '22:00', place: 'Stockroom', narr: 'Next night. Minji is back, healthy and very hungry. Mr. Park bought a rice cooker (밥솥) for the staff corner, but nobody has used it yet. (밥 = steamed rice)',
          lines: [['minji', '나 감기 다 나았어! 근데 배고파. 우리 밥 짓자!', 'I got over my cold! But I’m hungry. Let’s cook some rice!']],
          q: { type: 'enOpts', prompt: 'Why 짓자, not 지자?', opts: ['-자 begins with a consonant, so the ㅅ stays.', '짓다 is a regular verb.', '지자 is the polite form.', 'Both are correct.'], skill: 'l29.keep',
            explain: '-자 (Lesson 28) begins with a consonant: 짓자. The ㅅ only drops before a vowel (지어요, 지었어요). 밥(을) 짓다 = to cook rice (Workbook 19).', en: 'Let’s cook some rice!' } },
        { id: 'C2', time: '22:10', place: 'Stockroom', narr: 'You read the instructions on the box. (쌀 = uncooked rice)',
          q: { type: 'mc', prompt: '“First you have to wash the rice.”', ko: '먼저 쌀을 ___ 돼요.', opts: ['씻어야', '씨어야', '쎠야', '씻야'], skill: 'l29.reg',
            explain: 'Workbook 19: 먼저 쌀을 씻어야 돼요. 씻다 is regular: the ㅅ stays.', en: 'First you have to wash the rice.' } },
        { id: 'C3', time: '22:20', place: 'Stockroom', narr: 'Minji holds the bowl of rice under the tap.',
          lines: [['minji', '그다음엔 뭐 해?', 'What do I do after that?']],
          q: { type: 'mc', prompt: 'Read her the next step: “Pour in water.”', opts: ['물을 부으세요.', '물을 붓으세요.', '물을 부세요.', '물을 붜세요.'], skill: 'l29.form',
            explain: 'Workbook 19 (key): 물을 부으세요. 붓 + 으세요 → 부으세요 — the ㅅ drops, the 으 stays.', en: 'Pour in water.' } },
        { id: 'C4', time: '22:30', place: 'Stockroom', narr: 'The instruction leaflet has a misprint. Which line?',
          q: { type: 'odd', prompt: 'Which line is WRONG?', opts: ['물을 붓은 다음에 손으로 저으세요.', '물을 부은 다음에 손으로 저으세요.', '쌀을 씻기 위해서 물을 부으세요.', '그리고 취사 버튼을 누르세요.'], skill: 'l29.form',
            explain: 'Workbook 19: 붓 + 은 다음에 → 부은 다음에 (Lesson 19: -(으)ㄴ 다음에).', en: '' } },
        { id: 'C5', time: '23:00', place: 'Staff corner', narr: 'The staff corner has a heated floor and a small mat. Mr. Lee walks onto it with his shoes on.',
          q: { type: 'write', prompt: 'Say to Mr. Lee: “Please take your shoes off.”', ans: ['신발을 벗어 주세요.'], soft: [{ p: '(과장님 |)신발(을|) 벗어 주세요', note: 'Accepted.' }, { p: '(과장님 |)신발(을|) 벗으세요', note: 'Accepted (-(으)세요). The book: 벗어 주세요.' }], skill: 'l29.reg',
            diag: dg('신발을 벗어 주세요', '벗다', 'aju', 'wrongAju'),
            explain: 'Textbook: 신발을 벗어 주세요. 벗다 is regular: the ㅅ stays.', en: 'Please take your shoes off.' },
          after: [['manager', '아, 죄송해요! 근데 무슨 냄새예요? 밥 지어요?', 'Oh, sorry! But what’s that smell? Are you cooking rice?']] },
        { id: 'C6', time: '23:30', place: 'Staff corner', narr: 'Mr. Lee sniffs the air hopefully.',
          q: { type: 'enOpts', prompt: 'What does 밥(을) 짓다 mean?', opts: ['to cook rice', 'to buy rice', 'to wash rice', 'to name the rice'], skill: 'l29.usage',
            explain: '짓다 = to make: 집을 짓다 (build a house), 이름을 짓다 (name), 밥을 짓다 (cook rice, Workbook 19), 약을 짓다 (make up medicine).', en: 'Are you cooking rice?' } },
        { id: 'C7', time: '02:00', place: 'Staff corner', narr: 'Mr. Kim smells the rice from the coffee machine.',
          lines: [['taxi', '밥 냄새 좋네! 나도 한 그릇 줘.', 'The rice smells good! Give me a bowl too.']],
          q: { type: 'mc', prompt: 'Answer him politely: “Please wash your hands first.”', opts: ['먼저 손을 씻으세요.', '먼저 손을 씨으세요.', '먼저 손을 씻어.', '먼저 손을 씨세요.'], skill: 'l29.reg',
            explain: '씻다 is regular: 씻으세요. (씻어 is 반말 — Mr. Kim speaks 반말 to you, but you keep 존댓말.)', en: 'Please wash your hands first.' } },
        { id: 'C8', time: '03:00', place: 'Staff corner', narr: 'The rice cooker beeps “ERROR”. Water is bubbling out of the lid. You open it: far too much water.',
          q: { type: 'tiles', prompt: 'Write in the work log: “I poured too much water.”', ans: ['물을 너무 많이 부었어요.'], soft: [{ p: '(제가 |)물(을|) 너무 많이 부었어요', note: 'Accepted.' }], extra: ['붓었어요.', '불었어요.', '물이'], skill: 'l29.form',
            diag: dg('물을 너무 많이 부었어요', '붓다', 'past', 'wrongPast').concat([{ p: '(제가 |)물(을|) 너무 많이 불었어요', note: '불었어요 comes from 불다 (to blow) or 붇다 (to swell, Lesson 26). Pour = 붓다 → 부었어요.' }]),
            explain: '붓 + 었어요 → 부었어요 (Workbook 17).', en: 'I poured too much water.' } },
        { id: 'C9', time: '04:00', place: 'Staff corner', narr: 'Second try: the right amount of water. The officer comes in for his banana milk and sees the steaming rice.',
          lines: [['police', '와, 밥 정말 잘 지었네요!', 'Wow, you cooked the rice really well!']],
          q: { type: 'enOpts', prompt: 'What does the officer say?', opts: ['You cooked the rice really well!', 'You built it really well!', 'The rice is really expensive!', 'You named it well!'], skill: 'l29.usage',
            explain: '밥을 짓다 = to cook rice → 지었네요 (Lesson 25: -네요, surprise).', en: 'Wow, you cooked the rice really well!' } },
        { id: 'C10', time: '05:40', place: 'Staff corner', narr: 'Mr. Park comes down and finds everybody eating.',
          lines: [['boss', '이 밥 누가 지었어요?', 'Who cooked this rice?']],
          q: { type: 'write', prompt: 'Answer: “Minji and I cooked it together.”', ans: ['민지 씨하고 같이 지었어요.'], soft: [{ p: '(제가 |)민지 씨(하고|랑|와) (같이 |함께 |)지었어요', note: 'Accepted.' }, { p: '민지 씨(하고|랑|와) 제가 (같이 |)지었어요', note: 'Accepted.' }], skill: 'l29.form',
            diag: [{ p: '(제가 |)민지(하고|랑|와) (같이 |)지었어요', note: 'To your boss, say 민지 씨 (Lesson 27): 민지 씨하고 같이 지었어요.' }].concat(dg('민지 씨하고 같이 지었어요', '짓다', 'past', 'wrongPast')),
            explain: '짓 + 었어요 → 지었어요. To Mr. Park: 민지 씨 (Lesson 27).', en: 'Minji and I cooked it together.' },
          after: [['boss', '고마워요! 근데… 왜 다들 웃고 있어요?', 'Thank you! But… why is everybody laughing?']],
          afterNarr: 'Behind him, Ramyeon is sitting in the empty rice-cooker box with a single grain of rice on his nose, looking extremely proud of himself.' },
      ],
      cctv: [
        { id: 'C.c1', type: 'enOpts', prompt: '“신발을 벗어 주세요.”', opts: ['Please take your shoes off.', 'Please wash your shoes.', 'Please put your shoes on.', 'Please buy shoes.'], skill: 'l29.reg', explain: 'Textbook: 벗다 = to take (clothes) off; regular.', en: 'Please take your shoes off.' },
        { id: 'C.c2', type: 'mc', prompt: '붓다 → past', opts: ['부었어요', '붓었어요', '붰어요', '불었어요'], skill: 'l29.form', explain: 'Workbook 17: 부었어요. (불었어요 = 불다 / 붇다.)', en: '' },
        { id: 'C.c3', type: 'mc', prompt: '긋다 → present progressive', opts: ['긋고 있어요', '그고 있어요', '그어고 있어요', '긋어 있어요'], skill: 'l29.keep', explain: 'Workbook 14: 긋고 있어요.', en: '' },
        { id: 'C.c4', type: 'enOpts', prompt: '“밥 짓는 것은 전혀 어렵지 않아요.”', opts: ['Cooking rice is not difficult at all.', 'Buying rice is not difficult at all.', 'Naming rice is not difficult at all.', 'Eating rice is not difficult at all.'], skill: 'l29.usage', explain: 'Workbook 19. 짓는: -는 begins with a consonant, so the ㅅ stays.', en: 'Cooking rice is not difficult at all.' },
        { id: 'C.c5', type: 'mc', prompt: '씻다 → future', opts: ['씻을 거예요', '씨을 거예요', '씰 거예요', '씻 거예요'], skill: 'l29.reg', explain: 'Textbook: 씻을 거예요 (regular).', en: '' },
        { id: 'C.c6', type: 'enOpts', prompt: 'Why 나아요, not 나요?', opts: ['After the ㅅ drops, the two vowels stay apart — no contraction.', '나요 is the past tense.', '낫다 is regular.', 'Both are correct.'], skill: 'l29.form', explain: 'App note: compare 가다 → 가요. The ㅅ verbs keep both vowels: 나아요, 저어요, 지어요, 부어요 (Workbook chart).', en: '' },
      ],
    },
  },

  /* extra questions by skill: returned mistakes, Dawn Restock, store repairs, Rush Hour */
  pool: [
    { id: 'p29.u1', type: 'enOpts', prompt: '긋다', opts: ['to draw (a line)', 'to pour', 'to stir (liquid)', 'to connect'], skill: 'l29.usage', explain: 'Workbook 5: 긋다 = to draw (a line).', en: '' },
    { id: 'p29.u2', type: 'enOpts', prompt: '붓다', opts: ['to pour', 'to draw (a line)', 'to heal', 'to take (clothes) off'], skill: 'l29.usage', explain: 'Workbook 8: 붓다 = to pour.', en: '' },
    { id: 'p29.u3', type: 'enOpts', prompt: '잇다', opts: ['to connect, to link', 'to build', 'to wash', 'to smile'], skill: 'l29.usage', explain: 'Workbook 6.', en: '' },
    { id: 'p29.u4', type: 'mc', prompt: '“to stir (liquid)”', opts: ['젓다', '짓다', '잇다', '긋다'], skill: 'l29.usage', explain: 'Workbook 9: 젓다.', en: '' },
    { id: 'p29.u5', type: 'enOpts', prompt: '“그 문장에 밑줄 그었어요.”', opts: ['I underlined the sentence.', 'I wrote the sentence.', 'I connected the sentences.', 'I read the sentence aloud.'], skill: 'l29.usage', explain: 'Workbook dictation 22. 밑줄 = underline; 긋 + 었어요 → 그었어요.', en: 'I underlined the sentence.' },
    { id: 'p29.u6', type: 'enOpts', prompt: '“좋은 이름을 지을 거예요.”', opts: ['I’m going to create a good name.', 'I’m going to build a good house.', 'I’m going to find a good name.', 'I’m going to call a good name.'], skill: 'l29.usage', explain: 'Textbook sample sentence.', en: '' },
    { id: 'p29.k1', type: 'mc', prompt: '짓다 → present progressive', opts: ['짓고 있어요', '지고 있어요', '지어 있어요', '짓어 있어요'], skill: 'l29.keep', explain: 'Workbook 13: 짓고 있어요.', en: '' },
    { id: 'p29.k2', type: 'mc', prompt: '젓다 → present progressive', opts: ['젓고 있어요', '저고 있어요', '저어 있어요', '저어고 있어요'], skill: 'l29.keep', explain: 'Workbook 18: 젓고 있어요.', en: '' },
    { id: 'p29.k3', type: 'enOpts', prompt: 'Why 밥 짓는 것, not 밥 지는 것?', opts: ['-는 begins with a consonant, so the ㅅ stays.', '짓다 is regular.', '지는 is the past tense.', 'Both are fine.'], skill: 'l29.keep', explain: 'Workbook 19: 밥 짓는 것은 전혀 어렵지 않아요. (지는 = losing: 지다.)', en: '' },
    { id: 'p29.k4', type: 'odd', prompt: 'Which sentence is WRONG?', opts: ['지금 밥을 지고 있어요.', '지금 밥을 짓고 있어요.', '줄을 긋고 있어요.', '감기가 낫고 있어요.'], skill: 'l29.keep', explain: '-고 begins with a consonant: 짓고 있어요.', en: '' },
    { id: 'p29.k5', type: 'mc', prompt: '잇다 → present progressive', opts: ['잇고 있어요', '이고 있어요', '이어 있어요', '있고 있어요'], skill: 'l29.keep', explain: 'Workbook 15: 잇고 있어요.', en: '' },
    { id: 'p29.k6', type: 'mc', prompt: '“Pour in water and stir.”', ko: '물을 ___ 저으세요.', opts: ['붓고', '부고', '부어고', '붓으고'], skill: 'l29.keep', explain: '-고 (Lesson 2) begins with a consonant: 붓고.', en: 'Pour in water and stir.' },
    { id: 'p29.r1', type: 'mc', prompt: '웃다 → polite present', opts: ['웃어요', '우어요', '워요', '웃아요'], skill: 'l29.reg', explain: 'Textbook: 웃어요 (regular).', en: '' },
    { id: 'p29.r2', type: 'mc', prompt: '벗다 → past', opts: ['벗었어요', '버었어요', '벘어요', '벗았어요'], skill: 'l29.reg', explain: 'Workbook 12: 벗었어요 (regular).', en: '' },
    { id: 'p29.r3', type: 'odd', prompt: 'Which sentence is WRONG?', opts: ['신발을 버어 주세요.', '신발을 벗어 주세요.', '많이 웃었어요.', '손을 씻을 거예요.'], skill: 'l29.reg', explain: '벗다 is regular: 벗어 주세요.', en: '' },
    { id: 'p29.r4', type: 'enOpts', prompt: 'Which verb is NOT a ㅅ irregular?', opts: ['씻다', '짓다', '낫다', '붓다'], skill: 'l29.reg', explain: 'Textbook exceptions: 웃다, 씻다, 벗다.', en: '' },
    { id: 'p29.r5', type: 'mc', prompt: '씻다 + -(으)면', opts: ['씻으면', '씨으면', '씨면', '씻면'], skill: 'l29.reg', explain: '씻다 is regular: 씻 + 으면 = 씻으면 (WB 19: 씻었으면).', en: '' },
    { id: 'p29.r6', type: 'mc', prompt: '“a smiling face”', ko: '___ 얼굴', opts: ['웃는', '우는', '운', '웃은는'], skill: 'l29.reg', explain: '웃다 + -는 (Lesson 14) = 웃는. (우는 얼굴 = a crying face: 울다.)', en: 'a smiling face' },
    { id: 'p29.f1', type: 'mc', prompt: '짓다 → polite present', opts: ['지어요', '져요', '짓어요', '지아요'], skill: 'l29.form', explain: 'Workbook 13: 지어요.', en: '' },
    { id: 'p29.f2', type: 'mc', prompt: '긋다 → past', opts: ['그었어요', '긋었어요', '겄어요', '그엇어요'], skill: 'l29.form', explain: 'Workbook 14: 그었어요.', en: '' },
    { id: 'p29.f3', type: 'odd', prompt: 'Which sentence is WRONG?', opts: ['물을 붓으세요.', '물을 부으세요.', '잘 저으세요.', '감기 다 나았어요?'], skill: 'l29.form', explain: 'Workbook 19: 붓 + 으세요 → 부으세요.', en: '' },
    { id: 'p29.f4', type: 'mc', prompt: '낫다 + -(으)면', opts: ['나으면', '나면', '낫으면', '나아면'], skill: 'l29.form', explain: '낫 + 으면 → 나으면 (the 으 stays; 나면 = if it comes out: 나다).', en: '' },
    { id: 'p29.f5', type: 'enOpts', prompt: 'How is 저으세요 built?', opts: ['젓 + 으세요: the ㅅ drops before the vowel 으, and 으 stays', '저 + 세요', '젓 + 세요', '저어 + 세요'], skill: 'l29.form', explain: 'Textbook: 잘 저으세요.', en: '' },
    { id: 'p29.f6', type: 'mc', prompt: '잇다 → future', opts: ['이을 거예요', '일 거예요', '잇을 거예요', '이어 거예요'], skill: 'l29.form', explain: 'Workbook 15: 이을 거예요.', en: '' },
  ],

  vocab: [
    { ko: '감기', en: '(a) cold' }, { ko: '이름', en: 'name' }, { ko: '신발', en: 'shoes' }, { ko: '밥', en: 'steamed rice; meal' }, { ko: '쌀', en: '(uncooked) rice' }, { ko: '밑줄', en: 'underline' },
  ],
  grp: {},
  examples: {
    '낫다': ['감기 다 나았어요?', 'Did you recover (completely) from the cold?'],
    '젓다': ['잘 저으세요.', 'Stir it well.'],
    '잇다': ['두 개를 이었어요.', 'I connected the two (objects).'],
    '짓다': ['이 집을 누가 지었어요?', 'Who built this house?'],
    '긋다': ['그 문장에 밑줄 그었어요.', 'I underlined the sentence. (WB dictation)'],
    '붓다': ['쌀을 씻기 위해서 물을 부으세요.', 'To wash the rice, pour in water. (WB 19)'],
    '웃다': ['웃어요.', 'Smile. / I smile. / He laughs. (Textbook; regular)'],
    '씻다': ['씻을 거예요.', 'I’m going to wash up. (Textbook; regular)'],
    '벗다': ['신발을 벗어 주세요.', 'Please take your shoes off. (Textbook; regular)'],
    '감기': ['감기 다 나았어요?', 'Did you recover (completely) from the cold?'],
    '이름': ['좋은 이름을 지을 거예요.', 'I’m going to create a good name.'],
    '신발': ['신발을 벗어 주세요.', 'Please take your shoes off.'],
    '밥': ['밥 짓는 것은 전혀 어렵지 않아요.', 'Cooking rice is not difficult at all. (WB 19)'],
    '쌀': ['먼저 쌀을 씻어야 돼요.', 'First you have to wash the rice. (WB 19)'],
    '밑줄': ['그 문장에 밑줄 그었어요.', 'I underlined the sentence. (WB dictation)'],
  },
};
})();
/* 나아요 / 나요, 지어요 / 져요 differ by one jamo or syllable: no “typo” leniency */
(() => {
  const G = MM.game[29], off = q => { if (q && q.ans && q.lenient === undefined) q.lenient = false; };
  Object.values(G.shifts).forEach(sh => { sh.scenes.forEach(s => off(s.q)); sh.cctv.forEach(off); });
  G.pool.forEach(off);
})();
