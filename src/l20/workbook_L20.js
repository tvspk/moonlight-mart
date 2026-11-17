/* workbook_L20.js — Korean 3 Workbook, Lesson 20 (p.80–83, answer key p.134–135).
   Section I 'chart': meaning (not graded, kept) + V/Adj + -아/어/여도; the key's meaning of the form is shown after the row.
   Wrong forms come from forms_L20.js. Section II 'sentence' with the book's phrase box (the phrase per item is hidden until answered).
   Section III 'write': combine two sentences (그래도 → -아/어/여도). Section IV dictation = WB Track 48, 49 (whole sentences; ASR matches
   the key). lenient off: 울어도 / 울아도, 봐도 / 보도 differ by one jamo. */
(() => {
  const F = MM.forms[20], row = d => F.find(f => f.dict === d);
  const why = (d, w) => {
    const f = row(d), a = f.do;
    if (/하도$|하아도$/.test(w)) return `하 + 여도 = 해도: ${a}.`;
    if (f.irr === '으') return `ㅡ-verb: the ㅡ drops and the vowel before decides 아/어 (as in ${f.hae}): ${a}.`;
    if (f.irr === 'ㅂ') return `ㅂ-irregular (Lesson 11): ㅂ → 우 + 어도, as in ${f.hae}: ${a}.`;
    if (/[아어]도$/.test(w) && w.length === a.length + 1) return `The vowels contract, as in ${f.hae}: ${a}.`;
    if (w === d.slice(0, -1) + '도') return `Add 아/어 first (the 해요 form ${f.hae} minus 요, plus 도): ${a}.`;
    if (/[아어]도$/.test(w)) return `아 or 어? Look at the last vowel of the stem (as in ${f.hae}): ${a}.`;
    return `Pronounced like that, but written ${a}.`;
  };
  const chartRow = (n, d, mean, en) => {
    const f = row(d), a = f.do;
    return { n, dict: d, en: `${mean} → ${en}`, cells: [{ ans: [a], lenient: false,
      soft: a === '공부해도' ? [{ p: '공부하여도', note: 'Accepted: the full form. Everyday Korean: 공부해도.' }] : a === '좋아해도' ? [{ p: '좋아하여도', note: 'Accepted: the full form. Everyday Korean: 좋아해도.' }] : a === '봐도' ? [{ p: '보아도', note: 'Accepted: the full form (the textbook prints it).' }] : [],
      diag: f.wrong.map(w => ({ p: w, note: why(d, w) })).concat([{ p: f.hae.slice(0, -1) + '서', note: `-아/어서 = so (Lesson 7). Even if = ${a}.` }]) }] };
  };
  MM.workbook[20] = {
    sections: [
      {
        id: 'I', title: 'Section I – Vocabulary and Conjugation',
        task: 'Fill in the chart: the meaning of the verb or adjective (infinitive form), then V/Adj + -아/어/여도. The meaning of the new form is shown when the row is done.',
        example: { given: '하다 (to do)', ko: '해도', en: 'even if you do; even though you do' },
        type: 'chart', skill: 'l20.form', cellPh: '…도',
        cols: ['+ -아/어/여도'],
        items: [
          chartRow(1, '울다', 'to cry', 'even if you cry; even though you cry'),
          chartRow(2, '좋다', 'to be good', 'even if it is good; even though it is good'),
          chartRow(3, '보다', 'to see', 'even if you see; even though you see'),
          chartRow(4, '예쁘다', 'to be pretty', 'even if you are pretty; even though you are pretty'),
          chartRow(5, '바쁘다', 'to be busy', 'even if you are busy; even though you are busy'),
          chartRow(6, '공부하다', 'to study', 'even if you study; even though you study'),
          chartRow(7, '쉽다', 'to be easy', 'even if it is easy; even though it is easy'),
          chartRow(8, '달리다', 'to run', 'even if you run; even though you run'),
          chartRow(9, '비싸다', 'to be expensive', 'even if it is expensive; even though it is expensive'),
          chartRow(10, '좋아하다', 'to like', 'even if you like it; even though you like it'),
        ],
      },
      {
        id: 'II', title: 'Section II – Comprehension',
        task: 'Complete the sentences using -아/어/여도 together with one of the phrases from the box.',
        type: 'sentence', skill: 'l20.usage', placeholder: '…도',
        box: ['배가 안 고프다', '지금 가다', '전화하다', '조금 비싸다', '불을 켜다'],
        items: [
          { n: 11, ko: '(___) 사무실이 어두워요.', verb: '불을 켜다', ans: ['불을 켜도'], full: '불을 켜도 사무실이 어두워요.', en: 'Even if I turn on the light, the office is dark. (English is ours: the key gives none)',
            soft: [{ p: '불(을|) 켜도', note: 'Accepted.' }],
            diag: [{ p: '불(을|) (켜아도|키어도|켜서)', note: '켜다 → 켜요 → 켜도. (켜서 = so.)' }, { p: '(지금 가도|전화해도|조금 비싸도|배가 안 고파도)', note: 'That phrase doesn’t fit. The office is still dark even though…?' }] },
          { n: 12, ko: '(___) 안 받아요.', verb: '전화하다', ans: ['전화해도'], full: '전화해도 안 받아요.', en: 'Even if I call, (he/she) doesn’t answer. (English is ours: the key gives none)',
            soft: [{ p: '전화(를|) 해도', note: 'Accepted: 전화를 해도 (like the textbook: 제가 전화를 해도 안 받아요).' }, { p: '전화하여도', note: 'Accepted: the full form. Everyday Korean: 전화해도.' }],
            diag: [{ p: '전화(하도|하아도)', note: '하 + 여도 = 해도: 전화해도.' }, { p: '전화해서', note: '전화해서 = I call, so… Even if = 전화해도.' }, { p: '(불을 켜도|지금 가도|조금 비싸도|배가 안 고파도)', note: 'That phrase doesn’t fit with 안 받아요 (doesn’t answer).' }] },
          { n: 13, ko: '(___) 이미 늦었어요.', verb: '지금 가다', ans: ['지금 가도'], full: '지금 가도 이미 늦었어요.', en: 'Even if I go now, it’s already too late. (English is ours: the key gives none)',
            diag: [{ p: '지금 가아도', note: '가 + 아도 contracts: 가도.' }, { p: '지금 가서', note: '가서 = go and… Even if = 가도.' }, { p: '(불을 켜도|전화해도|조금 비싸도|배가 안 고파도)', note: 'That phrase doesn’t fit with 이미 늦었어요 (it’s already late).' }] },
          { n: 14, ko: '(___) 먹어야 돼요.', verb: '배가 안 고프다', ans: ['배가 안 고파도'], full: '배가 안 고파도 먹어야 돼요.', en: 'Even if you’re not hungry, you have to eat. (English is ours: the key gives none)',
            soft: [{ p: '배(가|) 안 고파도', note: 'Accepted.' }, { p: '배(가|) 고프지 않아도', note: 'Accepted: -지 않아도 = 안 … -아도.' }],
            diag: [{ p: '배(가|) 안 (고퍼도|고프어도|고프도)', note: '고프다: the ㅡ drops; the vowel before is ㅗ → 아: 고파도 (like 고파요).' }, { p: '배(가|) 안 고파서', note: '고파서 = so. Even if = 고파도.' }, { p: '배(가|) 고파도', note: 'The box says 배가 안 고프다 (not hungry): 배가 안 고파도.' }] },
          { n: 15, ko: '이 차가 (___) 튼튼해요.', verb: '조금 비싸다', ans: ['조금 비싸도'], full: '이 차가 조금 비싸도 튼튼해요.', en: 'Even though this car is a bit expensive, it’s sturdy. (English is ours: the key gives none)',
            soft: [{ p: '좀 비싸도', note: 'Accepted: 좀 = 조금.' }],
            diag: [{ p: '조금 (비싸아도|비싸어도)', note: '비싸 + 아도 contracts: 비싸도.' }, { p: '조금 비싸서', note: '비싸서 = it is expensive, so… Even though = 비싸도.' }] },
        ],
      },
      {
        id: 'III', title: 'Section III – Writing practice',
        task: 'Combine the two given sentences using -아/어/여도.',
        type: 'write', skill: 'l20.usage', placeholder: '…도 …',
        items: [
          { n: 16, given: '이 사과는 예쁘지 않아요. 그래도 맛은 있어요.', ans: ['이 사과는 예쁘지 않아도 맛은 있어요.'],
            soft: [{ p: '이 사과는 예쁘지 않아도 맛(은|이) 있어요', note: 'Accepted.' }, { p: '이 사과는 안 예뻐도 맛(은|이) 있어요', note: 'Accepted: 안 예뻐도 = 예쁘지 않아도.' }, { p: '이 사과는 예쁘지 않아도 맛있어요', note: 'Accepted (맛있어요 written together).' }],
            diag: [{ p: '이 사과는 예쁘지 (않어도|않도) 맛(은|이) 있어요', note: '않다: 않아요 → 않아도.' }, { p: '이 사과는 예쁘지 않아서 맛(은|이) 있어요', note: '않아서 = so: “it isn’t pretty, so it is tasty”. 그래도 → 않아도.' }, { p: '이 사과는 예쁘지 않아요 그래도 맛(은|이) 있어요', note: 'Make it one sentence: 그래도 becomes -아도 on the first verb: 예쁘지 않아도.' }],
            en: 'Even though this apple is not pretty, it tastes good.', keyNote: 'English is ours' },
          { n: 17, given: '책이 커요. 그래도 이 가방에 넣을 수 있어요.', ans: ['책이 커도 이 가방에 넣을 수 있어요.'],
            soft: [{ p: '책이 커도 (이 가방에|가방에) 넣을 수 있어요', note: 'Accepted.' }],
            diag: [{ p: '책이 (크어도|크도|카도) (이 |)가방에 넣을 수 있어요', note: '크다: the ㅡ drops → 커요 → 커도.' }, { p: '책이 커서 (이 |)가방에 넣을 수 있어요', note: '커서 = it is big, SO I can put it in. 그래도 → 커도.' }],
            en: 'Even though the book is big, I can put it in this bag.', keyNote: 'English is ours' },
          { n: 18, given: '바빠요. 그래도 건강을 위해서 운동은 해야 돼요.', ans: ['바빠도 건강을 위해서 운동은 해야 돼요.'],
            soft: [{ p: '바빠도 건강을 위해(서|) 운동(은|을) 해야 돼요', note: 'Accepted.' }],
            diag: [{ p: '(바뻐도|바쁘어도|바쁘도) 건강을 위해(서|) 운동(은|을) 해야 돼요', note: '바쁘다: the ㅡ drops; the vowel before is ㅏ → 바빠요 → 바빠도.' }, { p: '바빠서 건강을 위해(서|) 운동(은|을) 해야 돼요', note: '바빠서 = I’m busy, so… 그래도 → 바빠도.' }],
            en: 'Even though I’m busy, I have to exercise for my health.', keyNote: 'English is ours' },
          { n: 19, given: '제 친구는 영어는 못해요. 그래도 중국어는 잘해요.', ans: ['제 친구는 영어는 못해도 중국어는 잘해요.'],
            soft: [{ p: '제 친구는 영어(는|를) 못해도 중국어(는|를) 잘해요', note: 'Accepted.' }, { p: '제 친구는 영어(는|를) 잘 못해도 중국어(는|를) 잘해요', note: 'Accepted.' }],
            diag: [{ p: '제 친구는 영어(는|를) (못하도|못하아도) 중국어(는|를) 잘해요', note: '하 + 여도 = 해도: 못해도.' }, { p: '제 친구는 영어(는|를) 못해서 중국어(는|를) 잘해요', note: '못해서 = so. 그래도 → 못해도.' }],
            en: 'Even though my friend can’t speak English, he speaks Chinese well.', keyNote: 'English is ours' },
          { n: 20, given: '책이 없어요. 그래도 핸드폰으로 공부할 수 있어요.', ans: ['책이 없어도 핸드폰으로 공부할 수 있어요.'],
            soft: [{ p: '책이 없어도 (핸드폰으로|휴대폰으로) 공부할 수 있어요', note: 'Accepted.' }],
            diag: [{ p: '책이 (없아도|없도) 핸드폰으로 공부할 수 있어요', note: '없다: 없어요 → 없어도.' }, { p: '책이 없어서 핸드폰으로 공부할 수 있어요', note: '없어서 = so. 그래도 → 없어도.' }],
            en: 'Even if I don’t have a book, I can study with my phone.', keyNote: 'English is ours' },
        ],
      },
      {
        id: 'IV', title: 'Section IV – Dictation',
        task: 'Listen to the MP3. Repeat what you hear out loud, then write it down. Each word/phrase is said twice.',
        type: 'dictation',
        items: [
          { n: 21, track: 'wb48', label: 'Track 48', ans: ['냄새는 이상해도 맛있어요.'], lenient: false, en: 'Even though it smells weird, it’s tasty.' },
          { n: 22, track: 'wb49', label: 'Track 49', ans: ['침대에 누워도 잠이 안 와요.'], lenient: false, en: 'Even though I lie down on my bed, I can’t fall asleep.' },
        ],
      },
    ],
  };
})();
