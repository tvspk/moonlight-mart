/* game_L24.js — Moonlight Mart, Lesson 24 (르 irregular: 고르다 → 골라요, 골라서, 골랐어요; 르 stays before -고, -는데, -기, -세요…).
   Lines: [castId, korean, english]. q.opts: correct option first (engine shuffles). odd: opts[0] is the WRONG sentence.
   Forms come from forms_L24.js (generated, checked against the book): hae, past, seo, do (irregular) · go, gi, ji, myeon, nde, seyo (르 stays).
   Game words not in the book: 앞치마, 건조대, 비다, 잘못, 호출 버튼, 크림, 테이프, 자라다, 생신, 돈을 내다, 조각, 발자국 — glossed
   where they appear. 배부르다 (Lesson 1) is a 르 verb too. Grammar in the lines only from L1–23.
   App-written sentences are NOT yet checked by a native speaker (⚠ list in HANDOFF.md). lenient off at the end: 골라요 / 고라요. */

/* explains any wrong form w of the 르 verb d (used by textbook, workbook and the questions below; this file loads before them) */
MM.l24why = (d, w) => {
  const f = (MM.forms[24] || []).find(r => r.dict === d); if (!f) return '';
  const cols = { wrong: 'hae', wrongPast: 'past', wrongSeo: 'seo', wrongDo: 'do', wrongGo: 'go', wrongGi: 'gi', wrongJi: 'ji', wrongMyeon: 'myeon', wrongNde: 'nde', wrongSeyo: 'seyo' };
  const k = Object.keys(cols).find(c => (f[c] || []).includes(w)); if (!k) return '';
  const col = cols[k], right = f[col], stem = d.slice(0, -1);
  const end = { go: '-고', gi: '-기', ji: '-지', myeon: '-(으)면', nde: f.kind === 'desc' ? '-(으)ㄴ데' : '-는데', seyo: '-세요' }[col];
  if (['hae', 'past', 'seo', 'do'].includes(col)) {
    if (w.startsWith(stem)) return `르 cannot stay before -아/어: 르 → ㄹ under the syllable before, plus one more ㄹ → ${right}.`;
    const withL = right.slice(0, stem.length - 1);
    if (!w.startsWith(withL)) return `Don’t forget the extra ㄹ: 르 → ㄹ under the syllable before (${withL}), then 라/러 → ${right}.`;
    return `라 or 러 follows the vowel before 르 (ㅏ/ㅗ → 라, others → 러): ${right}.`;
  }
  if (col === 'nde' && f.kind === 'desc' && w.startsWith(stem) && w.endsWith('는데')) return `${d} is a descriptive verb: stem + -(으)ㄴ데 (Lesson 21) → ${right}.`;
  if (col === 'myeon' && w.startsWith(stem)) return `The stem ends in a vowel: just add -면 → ${right}.`;
  if (!w.includes('르') && !w.includes('른')) return `르 only changes before -아/어요, -아/어서, -았/었어요 (and -아/어도). Before ${end} it stays: ${right}.`;
  return `Before ${end} the stem stays exactly as it is (no extra ㄹ): ${right}.`;
};

MM.game[24] = {
  skills: {
    'l24.form':  { en: '르 + -아/어 endings', desc: 'Before -아/어요, -아/어서, -았/었어요 (and -아/어도): 르 → ㄹ under the syllable before + one more ㄹ: 고르다 → 골라요, 골라서, 골랐어요; 기르다 → 길러요; 부르다 → 불러도.' },
    'l24.keep':  { en: '르 stays', desc: 'Other endings go straight onto the stem: 고르고, 모르는데, 고르세요, 마르기 전에, 고르기 위해서, 서두르지 마세요, 부를까요.' },
    'l24.usage': { en: 'The 르 verbs in use', desc: '고르다 choose · 모르다 not know · 빠르다 fast · 자르다 cut · 기르다 raise · 다르다 different · 누르다 press · 마르다 dry, skinny · 바르다 put on · 부르다 call, sing · 서두르다 hurry · 찌르다 stab · 배부르다 full.' },
    'l24.vocab': { en: 'Lesson 24 vocabulary', desc: 'The words of the lesson.' },
  },
  fixSkills: { dryrack: 'l24.form', callbtn: 'l24.keep', cutter: 'l24.usage' },
  formTpl: {
    key: 'hae', prompt: '{dict} ({en}) → polite present (해요)', ko: '___', explain: '{dict} → {form}', skill: 'l24.form', irrNotes: {},
    variants: [
      { key: 'hae', wrongKey: 'wrong', prompt: '{dict} ({en}) → polite present (해요)', explain: '{dict} → {form}: 르 → ㄹ + 라/러', skill: 'l24.form' },
      { key: 'past', wrongKey: 'wrongPast', prompt: '{dict} ({en}) → past (-았/었어요)', explain: '{dict} → {form}: 르 → ㄹ + 랐/렀어요', skill: 'l24.form' },
      { key: 'seo', wrongKey: 'wrongSeo', prompt: '{dict} ({en}) → -아/어서 (so; and then)', explain: '{dict} → {form}: 르 → ㄹ + 라서/러서', skill: 'l24.form' },
      { key: 'go', wrongKey: 'wrongGo', prompt: '{dict} ({en}) → -고 (and)', explain: '{dict} → {form}: -고 is not one of the three endings, so 르 stays', skill: 'l24.keep' },
      { key: 'nde', wrongKey: 'wrongNde', prompt: '{dict} ({en}) → -는데 / -(으)ㄴ데 (Lesson 21)', explain: '{dict} → {form}: 르 stays before -는데 / -ㄴ데', skill: 'l24.keep' },
    ],
  },
  intro: 'Verbs whose stem ends in 르 change before three endings: -아/어요, -아/어서 and -았/었어요. The 르 becomes ㄹ under the syllable before, and one more ㄹ comes in: 고르다 → 골라요, 골라서, 골랐어요; 기르다 → 길러요. Before anything else (-고, -는데, -세요…) 르 stays: 고르고, 고르세요. Tonight the aprons won’t dry, the call button won’t stop ringing, and somebody has a birthday.',

  shifts: {
    A: {
      title: 'Pick One', sub: 'Recognize · choose', kind: 'recognize', fix: 'dryrack',
      snack: { id: 'l24.snackA', ko: '골라요 사탕', en: 'Pick-a-Flavor Candy', desc: 'Forty flavors in one bag. Nobody has ever finished choosing.' },
      scenes: [
        { id: 'A1', time: '22:00', place: 'Stockroom', narr: 'Twenty-fourth night. It rained all day. Minji holds up a wet apron. (앞치마 = apron, 건조대 = drying rack)',
          lines: [['minji', '앞치마가 아직 안 말랐어요. 건조대가 고장 났어요.', 'The aprons haven’t dried yet. The drying rack is broken.']],
          q: { type: 'enOpts', prompt: 'What is the problem?', opts: ['The aprons haven’t dried: the drying rack is broken.', 'The aprons got too skinny.', 'Nobody knows where the aprons are.', 'Somebody cut the aprons.'], skill: 'l24.form',
            explain: '마르다 (to dry) → 말라요 → 말랐어요. 안 말랐어요 = has not dried.', en: 'The aprons haven’t dried yet.' } },
        { id: 'A2', time: '22:30', place: 'Drinks fridge', narr: 'Sua has been standing in front of the fridge for five minutes.',
          lines: [['sua', '바나나 우유, 딸기 우유… 아직 못 골랐어요.', 'Banana milk, strawberry milk… I couldn’t choose yet.']],
          q: { type: 'enOpts', prompt: 'What is Sua’s problem?', opts: ['She can’t choose yet.', 'She doesn’t like milk.', 'She has already chosen.', 'She doesn’t know the prices.'], skill: 'l24.form',
            explain: '고르다 → 골라요 → 골랐어요. 못 골랐어요 = couldn’t choose.', en: 'I couldn’t choose yet.' } },
        { id: 'A3', time: '23:00', place: 'Counter', narr: 'Finally she brings a bottle to the counter. It is hidden in her hand.',
          q: { type: 'mc', prompt: 'Ask her: “What did you choose?”', opts: ['뭐 골랐어요?', '뭐 고랐어요?', '뭐 골렀어요?', '뭐 고르었어요?'], skill: 'l24.form',
            explain: 'Textbook: 뭐 골랐어요? 고르 + 았어요 → 골 + 랐어요 (ㅗ before 르 → 라).', en: 'What did you choose?' },
          after: [['sua', '둘 다요! 하하.', 'Both! Haha.']] },
        { id: 'A4', time: '23:30', place: 'Coffee machine', narr: 'Mr. Lee taps the new coffee machine.',
          lines: [['manager', '이 커피 머신은 빨라서 좋아요. 저는 기다리는 거 정말 싫어요.', 'I like this coffee machine because it’s fast. I really hate waiting.']],
          q: { type: 'enOpts', prompt: 'Why does Mr. Lee like the coffee machine?', opts: ['Because it is fast.', 'Because it is different.', 'Because it is cheap.', 'Because it is slow and quiet.'], skill: 'l24.usage',
            explain: '빠르다 → 빨라서 = because it is fast (like 비행기는 빨라서 좋아요).', en: 'I like this coffee machine because it’s fast.' } },
        { id: 'A5', time: '00:30', place: 'Memo board', narr: 'Hyunwoo practised the lesson on the memo board. One sentence is wrong.',
          q: { type: 'odd', prompt: 'Which sentence is WRONG?', opts: ['저도 모라요.', '저도 몰라요.', '뭐 골랐어요?', '누가 케이크 잘랐어요?'], skill: 'l24.form',
            explain: '모르다 → 몰라요: 르 becomes ㄹ under 모 (몰) and one more ㄹ comes in (라). 모라요 forgets the extra ㄹ.', en: '' } },
        { id: 'A6', time: '02:00', place: 'Coffee machine', narr: 'Mr. Kim, the taxi driver. (비다 = to be empty)',
          lines: [['taxi', '밤에는 길이 비어서 택시가 정말 빨라요.', 'At night the roads are empty, so the taxi is really fast.']],
          q: { type: 'enOpts', prompt: 'What does Mr. Kim say?', opts: ['At night his taxi is really fast.', 'At night taxis are slow.', 'Taxis are different at night.', 'He doesn’t know the roads at night.'], skill: 'l24.usage',
            explain: '빠르다 → 빨라요 (it is fast).', en: 'At night the taxi is really fast.' } },
        { id: 'A7', time: '02:30', place: 'Front door', narr: 'The courier runs in, out of breath. (잘못 = wrongly, by mistake)',
          lines: [['courier', '죄송해요! 너무 서둘러서 박스를 잘못 가져왔어요.', 'Sorry! I hurried too much, so I brought the wrong box.']],
          q: { type: 'enOpts', prompt: 'What happened?', opts: ['He hurried too much and brought the wrong box.', 'He came too slowly.', 'He didn’t know the address.', 'He cut the box.'], skill: 'l24.form',
            explain: '서두르다 (to hurry) → 서둘러서 (because I hurried). ㅜ before 르 → 러.', en: 'I hurried too much, so I brought the wrong box.' } },
        { id: 'A8', time: '03:30', place: 'Drinks fridge', narr: 'The officer shows you a photo on his phone.',
          lines: [['police', '저는 강아지를 길러요. 이름이 바나나예요.', 'I have a puppy. Its name is Banana.']],
          q: { type: 'enOpts', prompt: 'What does the officer tell you?', opts: ['He has (raises) a puppy called Banana.', 'He grows bananas.', 'He doesn’t know the puppy’s name.', 'He called his puppy Banana Milk.'], skill: 'l24.usage',
            explain: '기르다 (to grow, to raise) → 길러요. ㅣ before 르 → 러.', en: 'I have (raise) a puppy.' } },
        { id: 'A9', time: '04:30', place: 'Stockroom', narr: 'You fix the drying rack with a coat hanger. An hour later you write a note for Minji.',
          q: { type: 'mc', prompt: '“The aprons are all dry now.”', ko: '앞치마가 다 ___.', opts: ['말랐어요', '마랐어요', '말렀어요', '마르었어요'], skill: 'l24.form',
            explain: '마르다 → 말라요 → 말랐어요 (ㅏ before 르 → 라).', en: 'The aprons are all dry now.' } },
        { id: 'A10', time: '05:30', place: 'Counter', narr: 'Mr. Park picks up an apron. It is covered in orange cat hair. (털 = fur, hair)',
          lines: [['boss', '앞치마 다 말랐어요? 고마워요! 근데 왜 고양이 털이 이렇게 많을까요?', 'The aprons are all dry? Thank you! But I wonder why there’s so much cat hair on them?']],
          q: { type: 'enOpts', prompt: 'You answer: “저도 몰라요.” What did you say?', opts: ['I don’t know, either.', 'I know it, too.', 'I don’t know him.', 'I didn’t choose it.'], skill: 'l24.form',
            explain: 'Textbook sample sentence: 저도 몰라요. (모르다 → 몰라요.)', en: 'I don’t know, either.' },
          afterNarr: 'You do know. Ramyeon slept on the drying rack all night. It was the warmest bed in the stockroom.' },
      ],
      cctv: [
        { id: 'A.c1', type: 'enOpts', prompt: 'When does the 르 of a verb stem change (the book)?', opts: ['Before -아/어/여요, -아/어/여서 and -았/었/였어요.', 'Before every ending.', 'Only in the past tense.', 'Before -고 and -는데.'], skill: 'l24.form', explain: 'Textbook: irregular 르 is applied only on these three occasions.', en: '' },
        { id: 'A.c2', type: 'mc', prompt: '고르다 → polite present', opts: ['골라요', '고라요', '골러요', '고르어요'], skill: 'l24.form', explain: 'Textbook: 고르다 → 골라요.', en: '' },
        { id: 'A.c3', type: 'enOpts', prompt: '“비행기는 빨라서 좋아요.”', opts: ['Planes are good because they are fast.', 'Planes are fast and good.', 'The plane was fast.', 'I want a fast plane.'], skill: 'l24.usage', explain: 'Textbook sample sentence.', en: 'Planes are good because they are fast.' },
        { id: 'A.c4', type: 'mc', prompt: '기르다 → past', opts: ['길렀어요', '길랐어요', '기렀어요', '기르었어요'], skill: 'l24.form', explain: 'Textbook: 기르다 → 길렀어요 (ㅣ before 르 → 러).', en: '' },
        { id: 'A.c5', type: 'enOpts', prompt: '“토끼를 5년 동안 길렀어요.”', opts: ['I raised a rabbit for five years.', 'I cut a rabbit for five years.', 'I didn’t know the rabbit for five years.', 'I chose a rabbit five years ago.'], skill: 'l24.usage', explain: 'Textbook sample sentence.', en: 'I raised a rabbit for five years.' },
        { id: 'A.c6', type: 'enOpts', prompt: 'In 골라요, the 르 of 고르다…', opts: ['became ㄹ under 고, and one more ㄹ was added', 'just disappeared', 'stayed the same', 'became 러'], skill: 'l24.form', explain: 'Textbook: 르 is changed to ㄹ and placed at the end of the previous vowel. ONE MORE ㄹ is needed.', en: '' },
      ],
    },

    B: {
      title: 'Press the Button', sub: 'Build · write', kind: 'produce', fix: 'callbtn',
      note: { by: 'boss', text: 'Night shift rule #24: the call button in the stockroom (호출 버튼) rings in my house upstairs. It is broken and rings by itself. If you need me, press it ONCE. Not one hundred times. — Park' },
      snack: { id: 'l24.snackB', ko: '누르면 터지는 젤리', en: 'Press-and-Pop Jelly', desc: 'Press once: a burst of grape. Press twice: the boss comes downstairs.' },
      scenes: [
        { id: 'B1', time: '22:00', place: 'Stockroom', narr: 'You write a sign for the call button.',
          q: { type: 'tiles', prompt: 'Write the sign: “Press it and wait.” (누르다 + -고)', ans: ['누르고 기다리세요.'], soft: [{ p: '(버튼(을|) |)누르고 (좀 |)기다리세요', note: 'Accepted.' }, { p: '(버튼(을|) |)누르고 기다려 주세요', note: 'Accepted.' }], extra: ['눌러고', '눌러서', '기다려요.'], skill: 'l24.keep',
            diag: [{ p: '눌러고 기다리세요', note: MM.l24why('누르다', '눌러고') }, { p: '눌르고 기다리세요', note: MM.l24why('누르다', '눌르고') }, { p: '눌러서 기다리세요', note: '-고 (and then) is what the sign needs here; and -고 keeps 르: 누르고.' }],
            explain: 'Workbook 11: 벨을 누르고 기다리세요. -고 is not one of the three endings, so 르 stays.', en: 'Press it and wait.' } },
        { id: 'B2', time: '22:30', place: 'Counter', narr: 'Sua puts a mystery bag on the counter. You can’t see inside.',
          q: { type: 'write', prompt: 'Ask Sua: “What did you choose?”', ans: ['뭐 골랐어요?'], soft: [{ p: '(손님 |)(뭐|뭘|뭐를|무엇을) 골랐어요', note: 'Accepted.' }], skill: 'l24.form',
            diag: MM.forms[24].find(f => f.dict === '고르다').wrongPast.map(w => ({ p: '(손님 |)(뭐|뭘) ' + w, note: MM.l24why('고르다', w) })),
            explain: 'Textbook: 뭐 골랐어요?', en: 'What did you choose?' },
          after: [['sua', '비밀이에요! 아직 다 안 골랐어요.', 'It’s a secret! I haven’t finished choosing yet.']] },
        { id: 'B3', time: '23:00', place: 'Counter', narr: 'There is a queue behind her. You smile anyway.',
          q: { type: 'write', prompt: 'Say kindly: “Please choose slowly.” (천천히 = slowly)', ans: ['천천히 고르세요.'], soft: [{ p: '(손님 |)천천히 고르세요', note: 'Accepted.' }, { p: '(손님 |)천천히 골라 주세요', note: 'Correct too: 골라 주세요 is built on the 해요 form (골라요), so it changes. The lesson’s -세요 form: 고르세요.' }], skill: 'l24.keep',
            diag: [{ p: '(손님 |)천천히 골라세요', note: MM.l24why('고르다', '골라세요') }, { p: '(손님 |)천천히 골르세요', note: MM.l24why('고르다', '골르세요') }],
            explain: 'Textbook dialogue: 빨리 고르세요. -세요 is not one of the three endings: 고르 + 세요.', en: 'Please choose slowly.' } },
        { id: 'B4', time: '23:30', place: 'Coffee machine', narr: 'Mr. Lee hums a song from the 90s.',
          lines: [['manager', '이 노래 알아요? 저는 노래방에서 이 노래 자주 불러요.', 'Do you know this song? I often sing it at karaoke.']],
          q: { type: 'write', prompt: 'Answer: “No, I don’t know it.”', ans: ['아니요, 몰라요.'], soft: [{ p: '(아니요 |)(저는 |)(그 노래(는|) |)(잘 |)몰라요', note: 'Accepted.' }], skill: 'l24.form',
            diag: MM.forms[24].find(f => f.dict === '모르다').wrong.map(w => ({ p: '(아니요 |)' + w, note: MM.l24why('모르다', w) })).concat([{ p: '(아니요 |)안 알아요', note: 'Korean says 몰라요 (모르다 = to not know), not 안 알아요.' }]),
            explain: '모르다 → 몰라요.', en: 'No, I don’t know it.' },
          after: [['manager', '진짜요? 그럼 제가 불러 줄게요!', 'Really? Then I’ll sing it for you!']] },
        { id: 'B5', time: '00:30', place: 'Counter', narr: 'Grandma buys hand cream. (크림 = cream)',
          lines: [['grandma', '학생, 이 크림 언제 발라요?', 'Dear, when do I put this cream on?']],
          q: { type: 'write', prompt: 'Answer: “Put it on after you wash your hands.” (-(으)ㄴ 다음에, -세요)', ans: ['손을 씻은 다음에 바르세요.'], soft: [{ p: '(할머니 |)손(을|) 씻은 (다음에|후에|뒤에) (이거 |이 크림 |)바르세요', note: 'Accepted.' }, { p: '(할머니 |)손(을|) 씻고 (이거 |)바르세요', note: 'Accepted (씻고 = wash and then).' }], skill: 'l24.keep',
            diag: [{ p: '(할머니 |)손(을|) 씻은 (다음에|후에|뒤에) 발라세요', note: MM.l24why('바르다', '발라세요') }, { p: '(할머니 |)손(을|) 씻은 (다음에|후에|뒤에) 발르세요', note: MM.l24why('바르다', '발르세요') }, { p: '(할머니 |)손(을|) 씻기 전에 바르세요', note: '-기 전에 = before. After washing = 씻은 다음에 (Lesson 19).' }],
            explain: '바르다 (to rub, to put on) + -세요 → 바르세요 (르 stays). 씻은 다음에 = after washing (Lesson 19).', en: 'Put it on after you wash your hands.' } },
        { id: 'B6', time: '02:00', place: 'Stockroom door', narr: 'Mr. Kim needs change. Mr. Park is in the stockroom with headphones on. You call his name twice.',
          q: { type: 'write', prompt: 'Tell Mr. Kim: “Even though I call (him), there is no answer.”', ans: ['불러도 대답이 없어요.'], soft: [{ p: '(사장님을 |)(두 번 |)불러도 대답(이|) 없어요', note: 'Accepted.' }], skill: 'l24.form',
            diag: MM.forms[24].find(f => f.dict === '부르다').wrongDo.map(w => ({ p: '(사장님을 |)' + w + ' 대답(이|) 없어요', note: MM.l24why('부르다', w) })).concat([{ p: '(사장님을 |)불러서 대답(이|) 없어요', note: '-아서 = so, because. Even though = -아도 (Lesson 20): 불러도.' }, { p: '(사장님을 |)부르도 대답(이|) 없어요', note: '-아/어도 is built like -아/어서: 부르 → 불러 → 불러도.' }]),
            explain: 'Workbook 13: 불러도 대답이 없어요. -아/어도 is built on the 해요 form (불러요), so 르 changes.', en: 'Even though I call, there is no answer.' },
          after: [['taxi', '괜찮아요. 천천히 하세요. 저 커피 마시고 있을게요.', 'That’s okay. Take your time. I’ll be drinking my coffee.']] },
        { id: 'B7', time: '02:30', place: 'Front door', narr: 'The courier is running again. He nearly trips over a box.',
          lines: [['courier', '빨리요, 빨리! 시간이 없어요!', 'Quick, quick! There’s no time!']],
          q: { type: 'write', prompt: 'Say: “Don’t rush too much.”', ans: ['너무 서두르지 마세요.'], soft: [{ p: '(기사님 |)(너무 |)서두르지 마세요', note: 'Accepted.' }], skill: 'l24.keep',
            diag: [{ p: '(기사님 |)(너무 |)서둘러지 마세요', note: MM.l24why('서두르다', '서둘러지') }, { p: '(기사님 |)(너무 |)서둘르지 마세요', note: MM.l24why('서두르다', '서둘르지') }],
            explain: 'Workbook dictation 18: 너무 서두르지 마세요. -지 마세요 goes on the stem: 르 stays.', en: 'Don’t rush too much.' },
          after: [['courier', '네, 네… 근데 정말 바빠요!', 'Yes, yes… but I’m really busy!']] },
        { id: 'B8', time: '03:00', place: 'Front door', narr: 'His box is wrapped in ten layers of tape. You cut it open. (테이프 = tape)',
          q: { type: 'tiles', prompt: 'Say: “I cut the tape.” (past)', ans: ['테이프를 잘랐어요.'], soft: [{ p: '(제가 |)테이프(를|) (다 |)잘랐어요', note: 'Accepted.' }], extra: ['잘라요.', '자랐어요.', '테이프가'], skill: 'l24.form',
            diag: [{ p: '테이프(를|) 자랐어요', note: '자랐어요 is a different verb: 자라다 = to grow. 자르다 → 잘랐어요 (with the extra ㄹ).' }, { p: '테이프(를|) 잘렀어요', note: MM.l24why('자르다', '잘렀어요') }, { p: '테이프(를|) 자르었어요', note: MM.l24why('자르다', '자르었어요') }],
            explain: 'Textbook exercise 3: 잘랐어요.', en: 'I cut the tape.' } },
        { id: 'B9', time: '04:00', place: 'Counter', narr: 'The officer shows you more puppy photos. You remember your childhood rabbit. (토끼 = rabbit)',
          q: { type: 'write', prompt: 'Say: “I raised a rabbit, too.” (past)', ans: ['저도 토끼를 길렀어요.'], soft: [{ p: '저도 (옛날에 |)토끼(를|) (5년 동안 |오 년 동안 |)길렀어요', note: 'Accepted.' }], skill: 'l24.form',
            diag: MM.forms[24].find(f => f.dict === '기르다').wrongPast.map(w => ({ p: '저도 토끼(를|) ' + w, note: MM.l24why('기르다', w) })),
            explain: 'Like the textbook: 토끼를 5년 동안 길렀어요.', en: 'I raised a rabbit, too.' },
          after: [['police', '진짜요? 토끼 귀여워요!', 'Really? Rabbits are cute!']] },
        { id: 'B10', time: '05:40', place: 'Counter', narr: 'You fixed the call button: a loose wire. Mr. Park comes down in his pyjamas.',
          lines: [['boss', '호출 버튼 고쳤어요? 와! 근데… 몇 번 눌렀어요?', 'You fixed the call button? Wow! But… how many times did you press it?']],
          q: { type: 'write', prompt: 'Answer: “I only pressed it once.” (-밖에 + negative)', ans: ['한 번밖에 안 눌렀어요.'], soft: [{ p: '(사장님 |)(딱 |)한 번밖에 안 눌렀어요', note: 'Accepted.' }, { p: '(사장님 |)(딱 |)한 번(만|) 눌렀어요', note: 'Correct Korean too (만 + positive verb, Lesson 18).' }], skill: 'l24.form',
            diag: MM.forms[24].find(f => f.dict === '누르다').wrongPast.map(w => ({ p: '(사장님 |)한 번밖에 안 ' + w, note: MM.l24why('누르다', w) })).concat([{ p: '(사장님 |)한 번밖에 눌렀어요', note: '밖에 needs a negative (Lesson 18): 한 번밖에 안 눌렀어요.' }]),
            explain: '누르다 → 눌러요 → 눌렀어요. 한 번밖에 안 = only once (Lesson 18).', en: 'I only pressed it once.' },
          after: [['boss', '한 번이요? 저는 백 번 들었어요…', 'Once? I heard it a hundred times…']],
          afterNarr: 'Ramyeon was sleeping on the call button. He pressed it ninety-nine times. He regrets nothing.' },
      ],
      cctv: [
        { id: 'B.c1', type: 'write', prompt: 'Translate: [Past tense] I picked (it). (고르다)', ans: ['골랐어요.'], soft: [{ p: '(저는 |제가 |)(그거 |)골랐어요', note: 'Accepted.' }], skill: 'l24.form', diag: MM.forms[24].find(f => f.dict === '고르다').wrongPast.map(w => ({ p: w, note: MM.l24why('고르다', w) })), explain: 'Textbook exercise 1.', en: 'I picked (it).' },
        { id: 'B.c2', type: 'write', prompt: 'Translate: Who cut the cake?', ans: ['누가 케이크 잘랐어요?'], soft: [{ p: '누가 케이크(를|) 잘랐어요', note: 'Accepted.' }], skill: 'l24.form', diag: MM.forms[24].find(f => f.dict === '자르다').wrongPast.map(w => ({ p: '누가 케이크(를|) ' + w, note: MM.l24why('자르다', w) })), explain: 'Textbook exercise 4.', en: 'Who cut the cake?' },
        { id: 'B.c3', type: 'write', prompt: 'Translate: I don’t know, either.', ans: ['저도 몰라요.'], skill: 'l24.form', diag: MM.forms[24].find(f => f.dict === '모르다').wrong.map(w => ({ p: '저도 ' + w, note: MM.l24why('모르다', w) })), explain: 'Textbook sample sentence.', en: 'I don’t know, either.' },
        { id: 'B.c4', type: 'write', prompt: 'Translate: Planes are good because they are fast.', ans: ['비행기는 빨라서 좋아요.'], soft: [{ p: '비행기(는|가) 빨라서 좋아요', note: 'Accepted.' }], skill: 'l24.form', diag: MM.forms[24].find(f => f.dict === '빠르다').wrongSeo.map(w => ({ p: '비행기(는|가) ' + w + ' 좋아요', note: MM.l24why('빠르다', w) })), explain: 'Textbook exercise 5.', en: 'Planes are good because they are fast.' },
        { id: 'B.c5', type: 'write', prompt: 'Translate: Please hurry up. (= Choose quickly.)', ans: ['빨리 고르세요.'], skill: 'l24.keep', diag: [{ p: '빨리 골라세요', note: MM.l24why('고르다', '골라세요') }, { p: '빨리 골르세요', note: MM.l24why('고르다', '골르세요') }], explain: 'Textbook dialogue.', en: 'Please hurry up.' },
        { id: 'B.c6', type: 'write', prompt: 'Translate: I don’t know (about it) well, but why?', ans: ['저는 잘 모르는데, 왜요?'], soft: [{ p: '(저는 |저도 |)잘 모르는데 왜요', note: 'Accepted.' }], skill: 'l24.keep', diag: [{ p: '(저는 |)잘 몰라는데 왜요', note: MM.l24why('모르다', '몰라는데') }, { p: '(저는 |)잘 몰르는데 왜요', note: MM.l24why('모르다', '몰르는데') }, { p: '(저는 |)잘 모른데 왜요', note: '모르다 is an action verb: -는데 → 모르는데.' }], explain: 'Workbook 15.', en: 'I don’t know (about it) well, but why?' },
      ],
    },

    C: {
      title: 'Who Cut the Cake?', sub: 'Mixed · optional', kind: 'mixed', fix: 'cutter', optional: true,
      snack: { id: 'l24.snackC', ko: '케이크 한 조각 젤리', en: 'Slice-of-Cake Jelly', desc: 'Pre-cut. Nobody has to decide who cuts it.' },
      scenes: [
        { id: 'C1', time: '22:30', place: 'Stockroom', narr: 'Minji whispers before she leaves. (생신 = birthday, honorific)',
          lines: [['minji', '오늘 사장님 생신이에요! 케이크는 창고 냉장고에 있어요. 아침에 같이 잘라요!', 'It’s Mr. Park’s birthday today! The cake is in the stockroom fridge. Let’s cut it together in the morning!']],
          q: { type: 'enOpts', prompt: 'What is the plan?', opts: ['Cut the cake together in the morning.', 'Buy a cake in the morning.', 'Hide the cake from Mr. Park forever.', 'Cut open the boxes in the morning.'], skill: 'l24.usage',
            explain: '자르다 → 잘라요; 같이 잘라요 = let’s cut (it) together (Lesson 16).', en: 'Let’s cut it together in the morning!' } },
        { id: 'C2', time: '23:00', place: 'Stockroom', narr: 'The box cutter in the stockroom is blunt. You need a new blade for the morning.',
          q: { type: 'mc', prompt: 'Which verb means “to cut”?', opts: ['자르다', '찌르다', '바르다', '마르다'], skill: 'l24.usage',
            explain: '자르다 = to cut. 찌르다 = to stab; to stick, 바르다 = to rub, to put on, 마르다 = to dry (up); to be skinny.', en: '' } },
        { id: 'C3', time: '23:30', place: 'Counter', narr: 'Sua hears about the birthday. (돈을 내다 = to pay)',
          lines: [['sua', '그럼 선물도 같이 골라요! 저도 돈 낼게요.', 'Then let’s choose a present together, too! I’ll pay as well.']],
          q: { type: 'enOpts', prompt: 'What does Sua suggest?', opts: ['Let’s choose a present together.', 'Let’s cut the cake now.', 'Let’s call Mr. Park.', 'Let’s hurry home.'], skill: 'l24.usage',
            explain: '고르다 → 골라요; 같이 골라요 = let’s choose together.', en: 'Let’s choose a present together, too!' } },
        { id: 'C4', time: '00:00', place: 'Counter', narr: 'Midnight. Grandma comes down. She wants to practise for the morning.',
          q: { type: 'tiles', prompt: 'Ask her: “Shall we sing the birthday song?”', ans: ['생일 노래 부를까요?'], soft: [{ p: '(할머니 |)(같이 |)생일 노래(를|) 부를까요', note: 'Accepted.' }], extra: ['불를까요?', '불러까요?', '노래가'], skill: 'l24.keep',
            diag: [{ p: '생일 노래(를|) 불를까요', note: '-(으)ㄹ까요 is not one of the three endings: 르 stays → 부 + 를까요 = 부를까요.' }, { p: '생일 노래(를|) 불러까요', note: '르 changes only before -아/어 endings. -(으)ㄹ까요 goes on the stem: 부를까요.' }],
            explain: '부르다 (to sing) + -ㄹ까요 (Lesson 4) → 부를까요. 르 stays.', en: 'Shall we sing the birthday song?' },
          after: [['grandma', '좋아요! 저는 노래 잘 불러요.', 'Good! I sing well.']] },
        { id: 'C5', time: '01:00', place: 'Memo board', narr: 'Minji left four sentences for the birthday card. One has a mistake.',
          q: { type: 'odd', prompt: 'Which sentence is WRONG?', opts: ['케이크를 잘라고 먹어요.', '케이크를 자르고 먹어요.', '케이크를 잘라서 먹어요.', '누가 케이크 잘랐어요?'], skill: 'l24.keep',
            explain: '-고 is not one of the three endings, so 르 stays: 자르고. (잘라서 is right: -아서 is one of the three.)', en: '' } },
        { id: 'C6', time: '02:00', place: 'Coffee machine', narr: 'Mr. Kim hears about the birthday.',
          lines: [['taxi', '사장님 생신이에요? 그럼 저도 아침에 와서 노래 부를게요!', 'It’s Mr. Park’s birthday? Then I’ll come in the morning and sing, too!']],
          q: { type: 'enOpts', prompt: 'What will Mr. Kim do?', opts: ['Come in the morning and sing too.', 'Call Mr. Park now.', 'Choose a present.', 'Cut the cake.'], skill: 'l24.usage',
            explain: '부르다 = to sing (a song) → 부를게요 (Lesson 6; 르 stays).', en: 'I’ll come in the morning and sing, too!' } },
        { id: 'C7', time: '02:30', place: 'Front door', narr: 'You offer the courier a piece of the test cake Grandma baked. (조각 = piece, slice)',
          lines: [['courier', '아, 저 지금 너무 배불러요… 그래도 한 조각 주세요!', 'Ah, I’m really full now… but give me one piece anyway!']],
          q: { type: 'enOpts', prompt: 'What does the courier say first?', opts: ['That he is too full.', 'That he is in a hurry.', 'That he doesn’t know Mr. Park.', 'That he got skinny.'], skill: 'l24.usage',
            explain: '배부르다 (to be full, Lesson 1) is a 르 verb too: 배불러요.', en: 'I’m really full now…' } },
        { id: 'C8', time: '03:30', place: 'Drinks fridge', narr: 'The officer looks at the birthday card.',
          lines: [['police', '사장님이 요즘 좀 말랐어요. 케이크 많이 드셔야 돼요!', 'Mr. Park has gotten a bit thin lately. He should eat lots of cake!']],
          q: { type: 'enOpts', prompt: 'What does the officer say about Mr. Park?', opts: ['He has become a bit thin lately.', 'His clothes are dry.', 'He is very fast lately.', 'He is different lately.'], skill: 'l24.usage',
            explain: '마르다 = to dry (up); to be skinny → 말랐어요 = has become thin (Workbook 4).', en: 'Mr. Park has gotten a bit thin lately.' } },
        { id: 'C9', time: '04:30', place: 'Stockroom', narr: 'You open the fridge. One corner of the cake is missing. There are small paw prints on the plate.',
          q: { type: 'write', prompt: 'Text Minji: “Who cut the cake?”', ans: ['누가 케이크 잘랐어요?'], soft: [{ p: '누가 케이크(를|) 잘랐어요', note: 'Accepted.' }, { p: '누가 케이크(를|) 먹었어요', note: 'Fair question! The lesson’s line: 누가 케이크 잘랐어요?' }], skill: 'l24.form',
            diag: MM.forms[24].find(f => f.dict === '자르다').wrongPast.map(w => ({ p: '누가 케이크(를|) ' + w, note: MM.l24why('자르다', w) })).concat([{ p: '누가 케이크(를|) 자랐어요', note: '자랐어요 = grew (자라다). Cut = 잘랐어요.' }]),
            explain: 'Textbook sample sentence: 누가 케이크 잘랐어요?', en: 'Who cut the cake?' },
          after: [['minji', 'ㅋㅋㅋ 저도 몰라요… 라면?', 'lol, I don’t know either… Ramyeon?']] },
        { id: 'C10', time: '05:30', place: 'Counter', narr: 'Everyone is here. Grandma, Mr. Kim, Sua. Mr. Park comes down and stops.',
          lines: [['boss', '이게 뭐예요? 케이크? 선물? 누가 골랐어요?', 'What is this? A cake? A present? Who chose it?']],
          q: { type: 'write', prompt: 'Answer: “Sua and I chose it together.”', ans: ['수아 씨하고 같이 골랐어요.'], soft: [{ p: '(수아 씨(하고|랑|와) |수아 씨(하고|랑) 제가 |저하고 수아 씨가 |)같이 골랐어요', note: 'Accepted.' }], skill: 'l24.form',
            diag: MM.forms[24].find(f => f.dict === '고르다').wrongPast.map(w => ({ p: '(수아 씨(하고|랑) |)같이 ' + w, note: MM.l24why('고르다', w) })),
            explain: '고르다 → 골랐어요.', en: 'Sua and I chose it together.' },
          after: [['boss', '고마워요… 정말 고마워요. 근데 케이크에 왜 고양이 발자국이 있어요?', 'Thank you… really, thank you. But why are there cat paw prints on the cake?']],
          afterNarr: 'Ramyeon also chose. He chose the corner with the most cream.' },
      ],
      cctv: [
        { id: 'C.c1', type: 'mc', prompt: '모르다 + -는데', opts: ['모르는데', '몰라는데', '몰르는데', '모른데'], skill: 'l24.keep', explain: 'Workbook 15: 저는 잘 모르는데, 왜요? 르 stays before -는데.', en: '' },
        { id: 'C.c2', type: 'enOpts', prompt: '“저희 가족은 강아지 두 마리를 기르고 있어요.”', opts: ['My family is raising two puppies.', 'My family is choosing two puppies.', 'My family doesn’t know two puppies.', 'My family called two puppies.'], skill: 'l24.usage', explain: 'Workbook dictation 17. 기르고 있어요: -고 있다 keeps 르.', en: 'My family is raising two puppies.' },
        { id: 'C.c3', type: 'mc', prompt: '부르다 + -아/어도 (even though I call)', opts: ['불러도', '부러도', '불라도', '부르도'], skill: 'l24.form', explain: 'Workbook 13: 불러도 대답이 없어요.', en: '' },
        { id: 'C.c4', type: 'enOpts', prompt: '“너무 서두르지 마세요.”', opts: ['Don’t rush too much.', 'Don’t cut too much.', 'Don’t press it too much.', 'Don’t sing too much.'], skill: 'l24.usage', explain: 'Workbook dictation 18. 서두르다 = to hurry.', en: 'Don’t rush too much.' },
        { id: 'C.c5', type: 'enOpts', prompt: 'Why is it 고르세요, not 골라세요?', opts: ['-세요 is not one of the three endings, so 르 stays.', '고르다 is a regular verb.', '-세요 is a past-tense ending.', 'Both are correct.'], skill: 'l24.keep', explain: 'Textbook: only -아/어/여요, -아/어/여서, -았/었/였어요 change 르.', en: '' },
        { id: 'C.c6', type: 'mc', prompt: '다르다 (to be different) → polite present', opts: ['달라요', '다라요', '달러요', '다르어요'], skill: 'l24.form', explain: 'Workbook example: 다르다 → 달라요, 달라서, 달랐어요.', en: '' },
      ],
    },
  },

  /* extra questions by skill: returned mistakes, Dawn Restock, store repairs, Rush Hour */
  pool: [
    { id: 'p24.u1', type: 'enOpts', prompt: '부르다', opts: ['to call, to address; to sing', 'to press, to push', 'to rub, to put on', 'to hurry'], skill: 'l24.usage', explain: 'Workbook 7.', en: '' },
    { id: 'p24.u2', type: 'enOpts', prompt: '바르다', opts: ['to rub, to put on', 'to dry (up); to be skinny', 'to stab; to stick', 'to be different'], skill: 'l24.usage', explain: 'Workbook 6.', en: '' },
    { id: 'p24.u3', type: 'mc', prompt: '“to press, to push”', opts: ['누르다', '부르다', '바르다', '마르다'], skill: 'l24.usage', explain: 'Workbook 3: 누르다.', en: '' },
    { id: 'p24.u4', type: 'enOpts', prompt: '“빨리 고르세요.”', opts: ['Please hurry up (choose quickly).', 'Please cut it quickly.', 'Please call quickly.', 'You chose quickly.'], skill: 'l24.usage', explain: 'Textbook dialogue.', en: 'Please hurry up.' },
    { id: 'p24.u5', type: 'enOpts', prompt: '찌르다', opts: ['to stab; to stick', 'to cut', 'to raise', 'to choose'], skill: 'l24.usage', explain: 'Workbook 10.', en: '' },
    { id: 'p24.u6', type: 'enOpts', prompt: '“너무 빨라서 못 봤어요.”', opts: ['It was too fast, so I couldn’t see it.', 'It was fast, but I saw it.', 'I didn’t look because it was fast.', 'It will be too fast to see.'], skill: 'l24.usage', explain: 'Workbook 12.', en: 'It was too fast so I couldn’t see it.' },
    { id: 'p24.k1', type: 'odd', prompt: 'Which sentence is WRONG?', opts: ['빨리 골라세요.', '빨리 고르세요.', '뭐 골랐어요?', '아직 안 골랐어요.'], skill: 'l24.keep', explain: '-세요 keeps 르: 고르세요.', en: '' },
    { id: 'p24.k2', type: 'enOpts', prompt: 'Before which endings does 르 stay the same?', opts: ['-고, -는데, -기, -(으)면, -세요, -지 …', '-아/어요, -아/어서, -았/었어요', 'Only before -고', 'Before no ending at all'], skill: 'l24.keep', explain: 'Textbook: if the stem is followed by other endings, such as -고, -는데, etc., -르 will still stay the same.', en: '' },
    { id: 'p24.k3', type: 'mc', prompt: '“before (my hair) dries” (마르다 + -기 전에)', opts: ['마르기 전에', '말라기 전에', '말르기 전에', '말랐기 전에'], skill: 'l24.keep', explain: 'Workbook 14: 머리가 마르기 전에.', en: '' },
    { id: 'p24.k4', type: 'mc', prompt: '“in order to choose” (고르다 + -기 위해서)', opts: ['고르기 위해서', '골라기 위해서', '골르기 위해서', '골랐기 위해서'], skill: 'l24.keep', explain: 'Workbook 16: 좋은 차를 고르기 위해서.', en: '' },
    { id: 'p24.f1', type: 'enOpts', prompt: 'Why 길러요 but 골라요?', opts: ['라 or 러 follows the vowel before 르: 고 (ㅗ) → 라, 기 (ㅣ) → 러.', '기르다 is regular.', '골라요 is the past tense.', 'Both endings are free choices.'], skill: 'l24.form', explain: 'ㅏ/ㅗ before 르 → 라 (골라요, 몰라요, 빨라요, 잘라요, 달라요); otherwise → 러 (길러요, 불러요, 눌러요, 서둘러요, 찔러요).', en: '' },
    { id: 'p24.f2', type: 'odd', prompt: 'Which sentence is WRONG?', opts: ['토끼를 5년 동안 기렀어요.', '토끼를 5년 동안 길렀어요.', '비행기는 빨라서 좋아요.', '저도 몰라요.'], skill: 'l24.form', explain: '기르다 → 길렀어요: one more ㄹ (길 + 렀어요).', en: '' },
  ],

  vocab: [
    { ko: '비행기', en: 'airplane' }, { ko: '케이크', en: 'cake' }, { ko: '토끼', en: 'rabbit' },
    { ko: '동안', en: 'during, for (a period)' }, { ko: '벨', en: 'bell (doorbell)' }, { ko: '대답', en: 'answer, reply' },
    { ko: '머리', en: 'hair; head' }, { ko: '강아지', en: 'puppy' },
  ],
  grp: {},
  examples: {
    '고르다': ['뭐 골랐어요?', 'What did you choose?'],
    '모르다': ['저도 몰라요.', 'I don’t know, either.'],
    '빠르다': ['비행기는 빨라서 좋아요.', 'Planes are good because they are fast.'],
    '자르다': ['누가 케이크 잘랐어요?', 'Who cut the cake?'],
    '기르다': ['토끼를 5년 동안 길렀어요.', 'I raised a rabbit for five years.'],
    '다르다': ['다르다 → 달라요 · 달라서 · 달랐어요', 'to be different (WB example)'],
    '누르다': ['벨을 누르고 기다리세요.', 'Push the bell and wait. (WB 11)'],
    '마르다': ['머리가 마르기 전에 집을 나왔어요.', 'I went out of my house before my hair was dry. (WB 14)'],
    '바르다': ['바르다 → 발라요 · 발라서 · 발랐어요', 'to rub, to put on (WB 6)'],
    '부르다': ['불러도 대답이 없어요.', 'Even though I call (him), there is no answer. (WB 13)'],
    '서두르다': ['너무 서두르지 마세요.', 'Don’t rush too much. (WB dictation)'],
    '찌르다': ['찌르다 → 찔러요 · 찔러서 · 찔렀어요', 'to stab; to stick (WB 10)'],
    '배부르다': ['배불러요.', 'I’m full. (Lesson 1)'],
    '비행기': ['비행기는 빨라서 좋아요.', 'Planes are good because they are fast.'],
    '케이크': ['누가 케이크 잘랐어요?', 'Who cut the cake?'],
    '토끼': ['토끼를 5년 동안 길렀어요.', 'I raised a rabbit for five years.'],
    '동안': ['토끼를 5년 동안 길렀어요.', 'I raised a rabbit for five years.'],
    '벨': ['벨을 누르고 기다리세요.', 'Push the bell and wait. (WB 11)'],
    '대답': ['불러도 대답이 없어요.', 'Even though I call (him), there is no answer. (WB 13)'],
    '머리': ['머리가 마르기 전에 집을 나왔어요.', 'I went out before my hair was dry. (WB 14)'],
    '강아지': ['저희 가족은 강아지 두 마리를 기르고 있어요.', 'My family is raising two puppies. (WB dictation)'],
  },
};
/* 골라요 / 고라요 differ by one jamo: no “typo” leniency */
(() => {
  const G = MM.game[24], off = q => { if (q && q.ans && q.lenient === undefined) q.lenient = false; };
  Object.values(G.shifts).forEach(sh => { sh.scenes.forEach(s => off(s.q)); sh.cctv.forEach(off); });
  G.pool.forEach(off);
})();
