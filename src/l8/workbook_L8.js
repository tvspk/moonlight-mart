/* workbook_L8.js — Korean 3 Workbook, Lesson 8 (p.37–40, answer key p.125).
   Section I match (2 rounds). Section II 'explain' with it.ko: translate Korean → English (or own language), compare
   with the key, judge yourself. Section III reading (sec.passage) + questions answered in Korean ('write', givenEn).
   Section IV dictation: WB Track 18, 19. */
MM.workbook[8] = {
  sections: [
    {
      id: 'I', title: 'Section I – Vocabulary',
      task: 'Match each English word to its common Korean equivalent.',
      type: 'match',
      items: [
        { n: 1, ko: '도쿄', en: 'Tokyo' },
        { n: 2, ko: '서울', en: 'Seoul' },
        { n: 3, ko: '참외', en: 'Korean melon' },
        { n: 4, ko: '로봇', en: 'robot' },
        { n: 5, ko: '천사', en: 'angel' },
        { n: 6, ko: '천재', en: 'genius' },
        { n: 7, ko: '거짓말', en: 'lie' },
        { n: 8, ko: '강아지', en: 'puppy' },
        { n: 9, ko: '고양이', en: 'cat' },
        { n: 10, ko: '나이', en: 'age' },
      ],
    },
    {
      id: 'II', title: 'Section II – Translation practice',
      task: 'Translate the following sentences to English and your preferred language (if not English). Then compare with the key.',
      type: 'explain',
      items: [
        { n: 11, ko: '현우 씨는 로봇 같아요.', key: 'Hyunwoo is like a robot.' },
        { n: 12, ko: '비올라는 바이올린하고 비슷해요.', key: 'The viola is similar to the violin.' },
        { n: 13, ko: '효진 씨는 천재 같아요.', key: 'Hyojin seems to be a genius.' },
        { n: 14, ko: '이 가방하고 저 가방은 같아요.', key: 'This bag and that bag over there are the same.' },
      ],
    },
    {
      id: 'III', title: 'Section III – Reading comprehension',
      task: 'Read the following journal entry. Based on what you read, answer the questions below in Korean.',
      passage: ['오늘 서울에 도착했어요. 서울 날씨는 도쿄 날씨하고 비슷해요. 그렇지만 서울이 도쿄보다 조금 더 추워요. 그래서 옷을 따뜻하게 입었어요. 저녁에는 효진 씨를 만나서 같이 밥을 먹었어요. 효진 씨는 저랑 나이가 같아요. 그렇지만 서로 존댓말로 말해요.'],
      passageNote: 'Book: *도착하다 = to arrive, *따뜻하다 = to be warm. App note: 서로 = each other, 존댓말 = polite language (Lesson 27).',
      type: 'write', givenEn: true, skill: 'l8.usage', placeholder: 'answer in Korean',
      items: [
        { n: 15, given: 'Where is the writer?', ans: ['서울'],
          soft: [{ p: '서울(이요|이에요|에 있어요|에요)', note: 'Accepted.' }, { p: '(저는 |)서울에 있어요', note: 'Accepted.' }],
          diag: [{ p: '도쿄', note: 'Tokyo is only compared. 오늘 서울에 도착했어요 = I arrived in Seoul today.' }],
          en: 'Seoul' },
        { n: 16, given: 'What place has weather similar to Seoul?', ans: ['(서울 날씨는 |)도쿄 날씨하고 비슷해요.'],
          soft: [{ p: '도쿄(요|)', note: 'Accepted. The key: (서울 날씨는) 도쿄 날씨하고 비슷해요.' }, { p: '(서울 날씨는 |)도쿄 날씨(랑|하고|와) 비슷해요', note: 'Accepted.' }, { p: '도쿄(랑|하고) 비슷해요', note: 'Accepted.' }],
          diag: [{ p: '(서울 날씨는 |)도쿄 날씨(랑|하고) 같아요', note: 'The text says 비슷해요 (similar), not 같아요 (the same).' }, { p: '서울', note: 'Which OTHER place? 도쿄 날씨하고 비슷해요.' }],
          en: '(The weather in Seoul) is similar to the weather in Tokyo.' },
        { n: 17, given: 'Where is it colder, Seoul or Tokyo?', ans: ['서울'],
          soft: [{ p: '서울(이요|이에요)', note: 'Accepted.' }, { p: '서울이 (도쿄보다 |)(조금 |)(더 |)추워요', note: 'Accepted.' }],
          diag: [{ p: '도쿄', note: '서울이 도쿄보다 조금 더 추워요 = Seoul is a little colder than Tokyo.' }],
          en: 'Seoul' },
        { n: 18, given: 'Who did the writer meet today?', ans: ['효진 씨'],
          soft: [{ p: '효진(씨|)(요|)', note: 'Accepted.' }, { p: '효진 씨(를|) 만났어요', note: 'Accepted.' }, { p: '효진', note: 'Accepted. The key adds 씨 (효진 씨), which is more polite.' }],
          en: 'Hyojin' },
        { n: 19, given: 'What did the writer do with Hyojin?', ans: ['밥을 먹었어요.'],
          soft: [{ p: '(같이 |)밥(을|) (같이 |)먹었어요', note: 'Accepted.' }, { p: '효진 씨(랑|하고) (같이 |)밥(을|) 먹었어요', note: 'Accepted.' }, { p: '(효진 씨를 |)만나서 (같이 |)밥(을|) 먹었어요', note: 'Accepted: 만나서 … 먹었어요, Lesson 7.' }],
          diag: [{ p: '(같이 |)밥(을|) 먹어요', note: 'It happened this evening (past): 먹었어요.' }],
          en: 'They ate (a meal) together.' },
        { n: 20, given: 'What do Hyojin and the writer have in common?', ans: ['나이가 같아요.'],
          soft: [{ p: '나이(요|)', note: 'Accepted. The key: 나이가 같아요.' }, { p: '(효진 씨(는|랑|하고) 저는 |)나이(가|) 같아요', note: 'Accepted.' }, { p: '(우리는|저희는) 나이(가|) 같아요', note: 'Accepted.' }],
          diag: [{ p: '나이가 비슷해요', note: 'The text says 같아요 (the same), not 비슷해요 (similar).' }],
          en: 'They are the same age.' },
      ],
    },
    {
      id: 'IV', title: 'Section IV – Dictation',
      task: 'Listen to the MP3. Repeat what you hear out loud, then write it down. Each word/phrase is said twice.',
      type: 'dictation',
      items: [
        { n: 21, track: 'wb18', label: 'Track 18', ans: ['이 강아지는 고양이 같아요.'], en: 'This puppy is like a cat.' },
        { n: 22, track: 'wb19', label: 'Track 19', ans: ['그 이야기는 거짓말 같아요.'], en: 'That story sounds like a lie.' },
      ],
    },
  ],
};
