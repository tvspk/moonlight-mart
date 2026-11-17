/* workbook_L9.js — Korean 3 Workbook, Lesson 9 (p.41–44, answer key p.125–126).
   Section I match (7 words: 2 rounds of 4 + 3). The key leaves out 5 (예쁘다); our English, marked.
   Section II 'chart' (new type): meaning + three cells (-(으)ㄴ / -는 / -(으)ㄹ 것 같아요), checked per row.
   Section III 'mc' with dialogue lines. Section IV dictation: WB Track 20, 21, 22 (fill in the missing part).
   lenient (one-jamo typo) is off for every graded item: in this lesson one jamo is the tense (간 / 갈). */
(() => {
  const P = x => x + ' 것 같아요';
  /* one row of the chart: dict, meaning (key), forms from the key, extra accepted meanings */
  const row = (n, dict, en, enAlt, forms, notes) => ({
    n, dict, en, enAlt,
    cells: forms.map((f, i) => ({ ans: [P(f)], lenient: false, soft: [{ p: f, note: `Accepted. The full form: ${P(f)}.` }],
      diag: (notes && notes[i]) || [] })),
  });
  /* typical slips per column, worded for the receipt */
  const d = (stem, past, kind) => [
    [{ p: P(past), note: `No 았/었 before 것: past = stem + ㄴ → ${kind[0]}.` }, { p: P(kind[1]), note: `${kind[1]} is the present (-는). Past for an action verb = stem + ㄴ.` }],
    [{ p: P(kind[0]), note: `${kind[0]} is the past. Present for an action verb = stem + 는.` }],
    [{ p: P(kind[1]), note: `${kind[1]} is the present. Future = stem + ㄹ → ${kind[2]}.` }],
  ];
  MM.workbook[9] = {
    sections: [
      {
        id: 'I', title: 'Section I – Vocabulary',
        task: 'Translate each word to English, then write it in your preferred language (if not English). Here: match each word to its meaning.',
        type: 'match',
        items: [
          { n: 1, ko: '이야기하다', en: 'to tell; to talk' },
          { n: 2, ko: '비싸다', en: 'to be expensive' },
          { n: 3, ko: '그렇다', en: 'to be so; to be that way' },
          { n: 4, ko: '멀다', en: 'to be far' },
          { n: 5, ko: '예쁘다', en: 'to be pretty', keyNote: 'English is ours (textbook p.61); the key has none' },
          { n: 6, ko: '눈', en: 'eyes; snow' },
          { n: 7, ko: '이상하다', en: 'to be strange' },
        ],
      },
      {
        id: 'II', title: 'Section II – Conjugation chart',
        task: 'Fill in the chart by writing the meaning for the given verb/phrase, then conjugate it with the given sentence endings.',
        type: 'chart', skill: 'l9.form',
        cols: ['+ (으)ㄴ 것 같아요', '+ 는 것 같아요', '+ (으)ㄹ 것 같아요'],
        items: [
          row(8, '말하다', 'to talk, to speak, to say', ['to talk', 'to speak', 'to say'], ['말한', '말하는', '말할'], d('말하', '말했', ['말한', '말하는', '말할'])),
          row(9, '일어나다', 'to get up; to wake up', ['to get up', 'to wake up'], ['일어난', '일어나는', '일어날'], d('일어나', '일어났', ['일어난', '일어나는', '일어날'])),
          row(10, '자다', 'to sleep', ['sleep'], ['잔', '자는', '잘'], d('자', '잤', ['잔', '자는', '잘'])),
          row(11, '공부하다', 'to study', ['study'], ['공부한', '공부하는', '공부할'], d('공부하', '공부했', ['공부한', '공부하는', '공부할'])),
          row(12, '사다', 'to buy, to purchase', ['to buy', 'to purchase', 'buy'], ['산', '사는', '살'], d('사', '샀', ['산', '사는', '살'])),
          row(13, '연습하다', 'to practice', ['to practise', 'practice'], ['연습한', '연습하는', '연습할'], d('연습하', '연습했', ['연습한', '연습하는', '연습할'])),
          row(14, '숙제를 하다', 'to do one’s homework', ['to do homework', 'do homework'], ['숙제를 한', '숙제를 하는', '숙제를 할'], d('숙제를 하', '숙제를 했', ['숙제를 한', '숙제를 하는', '숙제를 할'])),
          row(15, '돈을 모으다', 'to save up money', ['to save money', 'save money'], ['돈을 모은', '돈을 모으는', '돈을 모을'],
            [[{ p: P('돈을 모았'), note: 'No 았/었 before 것: 모으 + ㄴ → 모은.' }, { p: P('돈을 모으은'), note: '모으 ends in a vowel: just add ㄴ → 모은.' }], [{ p: P('돈을 모은'), note: '모은 is the past. Present = 모으는.' }], [{ p: P('돈을 모으을'), note: '모으 ends in a vowel: add ㄹ → 모을.' }]]),
          row(16, '눈이 오다', 'to snow', ['snow', 'to be snowing'], ['눈이 온', '눈이 오는', '눈이 올'], d('눈이 오', '눈이 왔', ['눈이 온', '눈이 오는', '눈이 올'])),
        ],
      },
      {
        id: 'III', title: 'Section III – Comprehension',
        task: 'Choose the most suitable word or phrase to complete the dialogue.',
        type: 'mc', skill: 'l9.tense',
        items: [
          { n: 17, lines: [['A', '이 청바지 예뻐요?'], ['B', '네. 그런데 조금 (___).']], opts: ['작인 것 같아요', '작은 것 같아요', '작는 것 같아요', '잘은 것 같아요'], right: 1, skill: 'l9.form',
            note: '작다 is descriptive: 작 + 은 → 작은 것 같아요 (= I think they are a little small).', wrongNote: 'Not that one. Descriptive verb, present: consonant stem + 은.' },
          { n: 18, lines: [['A', '이 참외 진짜 맛있어요!'], ['B', '그렇지만 너무 (___).']], opts: ['비쌌 것 같아요', '쌀 것 같아요', '비싼 것 같아요', '비싸는 것 같아요'], right: 2, skill: 'l9.form',
            note: '비싸다 is descriptive: 비싸 + ㄴ → 비싼 것 같아요 (= but I think it is too expensive).', wrongNote: 'Not that one. Descriptive verb, present: vowel stem + ㄴ.' },
          { n: 19, lines: [['A', '석진 씨 어디 갔어요?'], ['B', '벌써 집에 (___).']], opts: ['가는 것 같아요', '갈 것 같아요', '갔 것 같아요', '간 것 같아요'], right: 3,
            note: '벌써 (already) → it happened: action verb, past = 가 + ㄴ → 간 것 같아요.', wrongNote: 'Not that one. 벌써 = already, so it is in the past. No 았/었 before 것.' },
          { n: 20, lines: [['A', '저 케이크 보세요. (___).'], ['B', '저거 살까요?']], opts: ['맛있은 것 같아요', '맛있는 것 같아요', '맛있을 것 같아요', '맛있었 것 같아요'], right: 2,
            note: 'You haven’t tasted it yet: 맛있을 것 같아요 (= I think it will be delicious), like the textbook dialogue.', wrongNote: 'Not that one. You only see the cake; you haven’t eaten it yet.' },
          { n: 21, lines: [['A', '이 영화 볼까요?'], ['B', '그 영화 별로 (___).']], opts: ['재밌는 것 같아요', '재밌을 것 같아요', '재미없는 것 같아요', '재미없을 것 같아요'], right: 3,
            note: '별로 goes with a negative word: 별로 재미없을 것 같아요 = I don’t think it will be much fun (you haven’t seen it yet). App note: 재밌다 is the short form of 재미있다.', wrongNote: 'Not that one. 별로 needs a negative meaning, and you haven’t seen the film yet.' },
          { n: 22, lines: [['A', '주원 씨가 학교 선생님이에요?'], ['B', '네. 영어 (___).']], opts: ['선생님인 것 같아요', '선생님 것 같아요', '선생님는 것 같아요', '선생님이는 것 같아요'], right: 0,
            note: 'Noun + 이다 → 인 것 같아요: 선생님인 것 같아요 (= I think she/he is an English teacher). Plain 선생님 같아요 would mean “seems like a teacher”.', wrongNote: 'Not that one. 선생님이다: 이 + ㄴ → 인.' },
        ],
      },
      {
        id: 'IV', title: 'Section IV – Dictation',
        task: 'Listen to the MP3. Repeat what you hear out loud, then fill in the blank with the missing part. Each phrase is said twice.',
        type: 'dictation',
        items: [
          { n: 23, track: 'wb20', label: 'Track 20', ko: '혜미 씨는 (___).', ans: ['아직 모르는 것 같아요'], full: '혜미 씨는 아직 모르는 것 같아요.', lenient: false, en: 'It seems that Hyemi doesn’t know yet. / I think Hyemi doesn’t know yet.' },
          { n: 24, track: 'wb21', label: 'Track 21', ko: '그 사람은 요즘 (___).', ans: ['바쁜 것 같아요'], full: '그 사람은 요즘 바쁜 것 같아요.', lenient: false, en: 'That person seems busy these days. / I think that person is busy these days.' },
          { n: 25, track: 'wb22', label: 'Track 22', ko: '그것도 (___).', ans: ['괜찮을 것 같아요'], full: '그것도 괜찮을 것 같아요.', lenient: false, en: 'It seems that it will also be okay. / I think it will also be okay.' },
        ],
      },
    ],
  };
})();
