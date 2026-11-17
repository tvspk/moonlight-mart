/* workbook_L13.js — Korean 3 Workbook, Lesson 13 (p.57–59, answer key p.129–130).
   Section I 'chart': meaning (English, compared loosely) + the -(으)ㄴ form; row 1 (예쁘다 → 예쁜) is the book's example.
   Section II translation (write, givenEn): wrong adjective forms come from forms_L13.js as diag.
   Section III dictation = WB Track 30, 31, 32 (whole sentences). lenient (one-jamo typo) is off: 크은 / 큰, 작인 / 작은. */
(() => {
  const F = MM.forms[13], row = d => F.find(f => f.dict === d);
  const why = (d, w, a) => {
    const f = row(d);
    if (w === f.hae) return `${w} ends a sentence (해요 form). Before a noun: ${a}.`;
    if (f.irr === 'ex') return `${d} ends in 있다/없다: + 는 → ${a}.`;
    if (f.irr === 'ㅂ') return `ㅂ verb (Lesson 11): before -은 the ㅂ becomes 우 → ${a}.`;
    if (f.irr === 'ㅎ') return `Exception: the ㅎ drops → ${a}.`;
    if (f.irr === 'ㄹ') return `Exception: the ㄹ drops → ${a}.`;
    if (/는$/.test(w)) return `-는 is for action verbs (and 있다/없다). ${d} is descriptive: ${a}.`;
    if (/인$/.test(w)) return `Consonant stem + 은 (not 인): ${a}.`;
    if (/은$/.test(w)) return `The stem ends in a vowel: just add ㄴ → ${a}.`;
    return `${d} → ${a}.`;
  };
  /* Section I row: meaning + one cell */
  const chartRow = (n, d, en, enAlt) => {
    const f = row(d);
    return { n, dict: d, en, enAlt: enAlt || [], cells: [{ ans: [f.adn], lenient: false, diag: f.wrong.concat([f.hae]).map(w => ({ p: w, note: why(d, w, f.adn) })) }] };
  };
  /* Section II item: phrase with one adjective; wrong adjective forms → diag on the same phrase */
  const tr = (n, given, ans, d, soft, keyNote) => {
    const f = row(d), a = f.adn;
    const diag = f.wrong.concat([f.hae]).map(w => ({ p: ans[0].replace(a, w), note: why(d, w, a) }));
    return { n, given, ans, soft: soft || [], diag, en: given, lenient: false, keyNote };
  };
  MM.workbook[13] = {
    sections: [
      {
        id: 'I', title: 'Section I – Vocabulary and Comprehension',
        task: 'Fill in the chart: the meaning of the adjective in infinitive form, then its -(으)ㄴ form. The first one has been done for you as an example.',
        example: { given: '예쁘다 (to be pretty)', ko: '예쁜', en: 'pretty' },
        type: 'chart', skill: 'l13.form', cellPh: '…ㄴ',
        cols: ['+ -(으)ㄴ'],
        items: [
          chartRow(2, '크다', 'to be big · big', ['to be big', 'big', 'to be tall', 'tall']),
          chartRow(3, '작다', 'to be small · small', ['to be small', 'small', 'little']),
          chartRow(4, '행복하다', 'to be happy · happy', ['to be happy', 'happy']),
          chartRow(5, '슬프다', 'to be sad · sad', ['to be sad', 'sad']),
          chartRow(6, '피곤하다', 'to be tired · tired', ['to be tired', 'tired']),
          chartRow(7, '졸리다', 'to be sleepy · sleepy', ['to be sleepy', 'sleepy']),
          chartRow(8, '좋다', 'to be good · good', ['to be good', 'good']),
          chartRow(9, '귀엽다', 'to be cute · cute', ['to be cute', 'cute']),
          chartRow(10, '덥다', 'to be hot (weather) · hot', ['to be hot', 'hot']),
        ],
      },
      {
        id: 'II', title: 'Section II – Translation practice',
        task: 'Translate the following phrases/sentences to Korean.',
        type: 'write', givenEn: true, skill: 'l13.form', placeholder: '…',
        items: [
          tr(11, 'Pretty woman', ['예쁜 여자'], '예쁘다', [{ p: '예쁜 여성', note: 'Accepted: 여성 = woman (more formal). The key: 예쁜 여자.' }]),
          tr(12, 'Big bag', ['큰 가방'], '크다'),
          tr(13, 'Good idea', ['좋은 아이디어', '좋은 생각'], '좋다', [], 'key: 좋은 아이디어 or 좋은 생각'),
          tr(14, 'Bad person', ['나쁜 사람'], '나쁘다'),
          tr(15, 'Cute dog', ['귀여운 개'], '귀엽다', [{ p: '귀여운 강아지', note: 'Accepted: 강아지 = puppy (also used for any dog). The key: 귀여운 개.' }]),
          tr(16, 'Hot weather', ['더운 날씨'], '덥다'),
          tr(17, 'Happy cat', ['행복한 고양이'], '행복하다'),
          tr(18, 'Do you have a smaller bag?', ['더 작은 가방 있어요?'], '작다', [{ p: '더 작은 가방(이|) (있어요|있으세요)', note: 'Accepted.' }]),
          tr(19, 'I want to eat something delicious.', ['맛있는 것 먹고 싶어요.', '맛있는 거 먹고 싶어요.'], '맛있다', [{ p: '(저는 |)맛있는 (것을|걸|거를|것|거) 먹고 싶어요', note: 'Accepted.' }], 'key: 맛있는 것/거'),
          tr(20, 'There are many people here.', ['여기 많은 사람들이 있어요.', '여기 사람들이 많아요.'], '많다', [{ p: '여기(에|) (많은 사람(들|)이 있어요|사람(들|)이 많아요)', note: 'Accepted.' }, { p: '여기(에|) 사람(들|)이 많이 있어요', note: 'Accepted: 많이 있어요 = there are a lot.' }], 'key: both versions'),
        ],
      },
      {
        id: 'III', title: 'Section III – Dictation',
        task: 'Listen to the MP3. Repeat what you hear out loud, then write it down. Each word/phrase is said twice.',
        type: 'dictation',
        items: [
          { n: 21, track: 'wb30', label: 'Track 30', ans: ['하얀 피아노가 너무 예뻐요.'], lenient: false, en: 'The white piano is so pretty.', keyNote: 'English not printed in the key' },
          { n: 22, track: 'wb31', label: 'Track 31', ans: ['단 거 좋아해요?'], lenient: false, en: 'Do you like sweets? / Do you like sweet things?' },
          { n: 23, track: 'wb32', label: 'Track 32', ans: ['그런 이야기 많이 들었어요.'], lenient: false, en: 'I have heard of such things a lot. / People have said that a lot.' },
        ],
      },
    ],
  };
  /* WB 16: “hot” to the touch is a different word; tell the learner instead of just failing them */
  const w16 = MM.workbook[13].sections[1].items.find(i => i.n === 16);
  w16.diag.push({ p: '뜨거운 날씨', note: 'Not quite: 뜨겁다 is hot to the touch (coffee, water). For weather: 덥다 → 더운 날씨.' });
})();
