/* workbook_L4.js — Korean 3 Workbook, Lesson 4 (p.22–25, answer key p.122–123).
   Section I 'tf': true/false; a false statement asks for the corrected term (ans).
   Section II 'conj': write the English meaning (compared loosely with en/enAlt, never failed) and the -(으)ㄹ까요 form (graded).
   Section III 'sentence': fill the conjugated verb, then translate the sentence and compare with the key.
   The key has no English for 17; that translation is ours (marked). */
MM.workbook[4] = {
  sections: [
    {
      id: 'I', title: 'Section I – Comprehension',
      task: 'True/False: decide if the statement is true or false. If it is false, correct the underlined term so that the sentence is true.',
      type: 'tf',
      items: [
        { n: 1, s: 'You can use the ending -(으)ㄹ까요? when you want to invite others to do something with you and ask “shall we do this together?” and when you ask yourself or others “I wonder what it is?”', truth: true },
        { n: 2, s: 'When using -(으)ㄹ까요? in the past tense, you can add the past tense suffix -았/었/였 right after the verb stem and before -(으)ㄹ까요? to make an assumption about a past event.', truth: true },
        { n: 3, s: 'If a verb stem ends in a vowel, such as 오다, when conjugated with -(으)ㄹ까요?, it becomes [오을까요?]', u: '오을까요?', truth: false,
          ans: ['올까요'], diag: [{ p: '오을까요', note: 'That is the false version. A vowel stem takes ㄹ까요: 오 + ㄹ까요.' }, { p: '와을까요', note: '오 + ㄹ까요 = 올까요.' }, { p: '올가요', note: 'Written with ㄲ: 올까요.' }] },
      ],
    },
    {
      id: 'II', title: 'Section II – Vocabulary and Conjugation',
      task: 'Write the English definition of each verb, then conjugate it with -(으)ㄹ까요?.',
      example: { given: '하다', ko: '할까요?', en: 'to do' },
      type: 'conj',
      items: [
        { n: 4, dict: '마시다', en: 'to drink', enAlt: ['drink'], ans: ['마실까요'], diag: [{ p: '마시을까요', note: 'Vowel stem: 마시 + ㄹ까요 = 마실까요.' }, { p: '마셜까요', note: 'No vowel change: 마시 + ㄹ까요 = 마실까요.' }] },
        { n: 5, dict: '시작하다', en: 'to start', enAlt: ['start', 'begin', 'to begin'], ans: ['시작할까요'], diag: [{ p: '시작핼까요', note: '하다 → 할까요: 시작할까요.' }, { p: '시작하을까요', note: '하 ends in a vowel: 시작할까요.' }] },
        { n: 6, dict: '놓다', en: 'to put, to place', enAlt: ['put', 'place', 'to put', 'to place', 'to put down', 'put down', 'to set', 'set'], ans: ['놓을까요'], diag: [{ p: '놀까요', note: '놓 ends in a consonant (ㅎ): 놓 + 을까요 = 놓을까요. (놀까요 = shall we play?)' }, { p: '노을까요', note: 'Keep the ㅎ: 놓을까요.' }, { p: '놓까요', note: 'Consonant stem: add 을 → 놓을까요.' }] },
        { n: 7, dict: '달리다', en: 'to run', enAlt: ['run'], ans: ['달릴까요'], diag: [{ p: '달리을까요', note: 'Vowel stem: 달리 + ㄹ까요 = 달릴까요.' }, { p: '달까요', note: 'Keep the whole stem 달리: 달릴까요.' }] },
        { n: 8, dict: '만들다', en: 'to make', enAlt: ['make', 'to create', 'create', 'to build'], ans: ['만들까요'], diag: [{ p: '만들을까요', note: 'ㄹ-stem: just add 까요 → 만들까요.' }, { p: '만드를까요', note: 'ㄹ-stem: 만들 + 까요 = 만들까요.' }] },
        { n: 9, dict: '앉다', en: 'to sit', enAlt: ['sit', 'to sit down', 'sit down', 'to take a seat'], ans: ['앉을까요'], diag: [{ p: '앉까요', note: 'Consonant stem (ㄵ): add 을 → 앉을까요.' }, { p: '안즐까요', note: 'That is how it sounds; it is written 앉을까요.' }, { p: '앉일까요', note: '앉 + 을까요 = 앉을까요.' }] },
      ],
    },
    {
      id: 'III', title: 'Section III – Complete the sentence',
      task: 'Complete the sentence by conjugating the given verb with the -(으)ㄹ까요 ending. Then translate each sentence to English and your preferred language (if not English).',
      type: 'sentence',
      items: [
        { n: 10, ko: '책을 어디에 (___)?', verb: '놓다', ans: ['놓을까요'], full: '책을 어디에 놓을까요?', en: 'Where shall I put the book?', diag: [{ p: '놀까요', note: '놓다 keeps its ㅎ: 놓을까요. (놀까요 = shall we play?)' }, { p: '놓까요', note: 'Consonant stem: 놓 + 을까요.' }] },
        { n: 11, ko: '언제 다시 (___)?', verb: '전화하다', ans: ['전화할까요'], full: '언제 다시 전화할까요?', en: 'When shall I call you again?', diag: [{ p: '전화하을까요', note: '하 ends in a vowel: 전화할까요.' }, { p: '전화해요', note: 'Use the lesson ending: 전화할까요?' }] },
        { n: 12, ko: '산에 (___)?', verb: '가다', ans: ['갈까요'], full: '산에 갈까요?', en: 'Shall we go to the mountain?', diag: [{ p: '가을까요', note: 'Vowel stem: 가 + ㄹ까요 = 갈까요.' }, { p: '갈가요', note: 'Written with ㄲ: 갈까요.' }] },
        { n: 13, ko: '내일 비가 (___)?', verb: '오다', ans: ['올까요'], full: '내일 비가 올까요?', en: 'Do you think it will rain tomorrow? / I wonder if it will rain tomorrow.', diag: [{ p: '오을까요', note: 'Vowel stem: 오 + ㄹ까요 = 올까요.' }, { p: '왔을까요', note: '왔을까요 is about the past; this is tomorrow.' }] },
        { n: 14, ko: '여기에서 사진 (___)?', verb: '찍다', ans: ['찍을까요'], full: '여기에서 사진 찍을까요?', en: 'Shall we take a picture here?', diag: [{ p: '찍까요', note: 'Consonant stem: 찍 + 을까요 = 찍을까요.' }, { p: '찌글까요', note: 'That is how it sounds; it is written 찍을까요.' }] },
      ],
    },
    {
      id: 'IV', title: 'Section IV – Dictation',
      task: 'Listen to the MP3. Repeat what you hear out loud, then write it down. Each word/phrase is said twice.',
      type: 'dictation',
      items: [
        { n: 15, track: 'wb08', label: 'Track 8', ans: ['이 사람은 누구일까요?'], en: 'Who do you think this person is? / I wonder who this person is.' },
        { n: 16, track: 'wb09', label: 'Track 9', ans: ['내일 우리 영화 볼까요?'], en: 'Shall we see a movie tomorrow? / Do you want to see a movie together tomorrow?' },
        { n: 17, track: 'wb10', label: 'Track 10', ans: ['커피 마실까요? 차 마실까요?'], en: 'Shall we drink coffee? Shall we drink tea? (Do you want coffee or tea?)', keyNote: 'English is ours; the key has none' },
      ],
    },
  ],
};
