/* workbook_L2.js — Korean 3 Workbook, Lesson 2 (p.16–18, answer key p.121–122).
   The key gives no English for Section III; those translations are ours (marked).
   Section II is answered in English (or the learner's own language) and self-checked against the key. */
MM.workbook[2] = {
  sections: [
    {
      id: 'I', title: 'Section I – Vocabulary',
      task: 'Match each Korean word to its common English translation.',
      type: 'match',
      items: [
        { n: 1, ko: '영화', en: 'movie' },
        { n: 2, ko: '서점', en: 'bookstore' },
        { n: 3, ko: '운동', en: 'exercise' },
        { n: 4, ko: '9월', en: 'September' },
        { n: 5, ko: '일본', en: 'Japan' },
        { n: 6, ko: '배부르다', en: 'to be full' },
        { n: 7, ko: '도너츠', en: 'donut' },
        { n: 8, ko: '배', en: 'stomach' },
        { n: 9, ko: '친구', en: 'friend' },
        { n: 10, ko: '싸다', en: 'to be cheap' },
      ],
    },
    {
      id: 'II', title: 'Section II – Comprehension',
      task: 'Answer the following questions in English and your preferred language (if not English). Then compare with the key.',
      type: 'explain',
      items: [
        { n: 11, q: 'Explain what -고 does.',
          key: 'If you use -고 after a verb stem, it has the same meaning as 그리고. By using the verb ending -고 instead of ending the sentence with just one verb and then starting the next one with 그리고, you can save a lot of time and make your sentence structure more practical.' },
        { n: 12, q: 'What makes -고 different from the English conjunction “and”?',
          key: 'When you make a compound sentence in English using the conjunction “and” to connect smaller sentences, you need to make the tenses of the verbs agree. However, in Korean, that’s not absolutely necessary, and sometimes it sounds unnatural to try to use the same tenses for every verb, especially the future tense and the past tense. Most native Korean speakers just use the past tense or the future tense in only the final verb.' },
        { n: 13, q: 'Why does using -고 work when you are talking about things that happened in a sequence?',
          key: 'Because -고 has the meaning of “and after that” or “and then”.' },
      ],
    },
    {
      id: 'III', title: 'Section III – Writing practice',
      task: 'Connect the sentences by using -고 and rewrite each sentence on the given line.',
      example: { given: '내일 쇼핑몰에 갈 거예요. 서점에 갈 거예요.', ko: '내일 쇼핑몰에 가고, 서점에 갈 거예요.', en: 'Tomorrow I will go to the shopping mall and (then) to the bookstore. (our translation)' },
      type: 'write', placeholder: '… -고, …',
      items: [
        { n: 14, given: '10월에는 일본에 갈 거예요. 11월에는 미국에 갈 거예요.',
          ans: ['10월에는 일본에 가고, 11월에는 미국에 갈 거예요'],
          soft: [{ p: '10월에는 일본에 갈 거고 11월에는 미국에 갈 거예요', note: 'Accepted. 갈 거고 is correct too; the key has the shorter 가고.' }],
          diag: [{ p: '10월에는 일본에 가구 11월에는 미국에 갈 거예요', note: 'Written 가고, even if it sounds like 가구.' }, { p: '10월에는 일본에 갔고 11월에는 미국에 갈 거예요', note: '갔고 is past. October is still ahead: 가고.' }],
          en: 'I will go to Japan in October, and to the US in November.', keyNote: 'English is ours; the key has none' },
        { n: 15, given: '오늘은 커피숍에서 친구를 만났어요. 한국어 공부했어요.',
          ans: ['오늘은 커피숍에서 친구를 만나고, 한국어 공부했어요'],
          soft: [{ p: '오늘은 커피숍에서 친구를 만났고 한국어(|를) 공부했어요', note: 'Accepted. 만났고 is correct too; the key has 만나고.' }, { p: '오늘은 커피숍에서 친구를 만나고 한국어를 공부했어요', note: 'Accepted with 를; the key leaves it out.' }],
          diag: [{ p: '오늘은 커피숍에서 친구를 만나요고 한국어 공부했어요', note: '-고 goes on the stem: 만나 + 고.' }],
          en: 'Today I met a friend at a coffee shop and studied Korean.', keyNote: 'English is ours; the key has none' },
        { n: 16, given: '삼겹살 먹었어요. 김치 먹었어요. 마늘 먹었어요. 고추 먹었어요. 밥 먹었어요. 지금 배가 너무 불러요.',
          ans: ['삼겹살 먹고, 김치 먹고, 마늘 먹고, 고추 먹고, 밥 먹었어요. 지금 배가 너무 불러요', '삼겹살 먹고, 김치 먹고, 마늘 먹고, 고추 먹고, 밥 먹었어요'],
          soft: [{ p: '삼겹살 먹었고 김치 먹었고 마늘 먹었고 고추 먹었고 밥 먹었어요(| 지금 배가 너무 불러요)', note: 'Accepted: it is grammatical. But past on every verb sounds childish; the key puts it on the last verb only.' }],
          diag: [{ p: '삼겹살 먹어고 김치 먹어고 마늘 먹어고 고추 먹어고 밥 먹었어요(| 지금 배가 너무 불러요)', note: '-고 goes on the stem 먹: 먹고.' }, { p: '삼겹살 먹꼬 김치 먹꼬 마늘 먹꼬 고추 먹꼬 밥 먹었어요(| 지금 배가 너무 불러요)', note: 'It sounds like 먹꼬, but it is written 먹고.' }],
          en: 'I ate pork belly, kimchi, garlic, chili peppers and rice. I’m really full now.', keyNote: 'English is ours; the key has none' },
        { n: 17, given: '수영했어요. 영어 공부했어요. 점심 먹었어요.',
          ans: ['수영하고, 영어 공부하고, 점심 먹었어요'],
          soft: [{ p: '수영했고 영어 공부했고 점심 먹었어요', note: 'Accepted: grammatical, but natives put the past on the last verb only.' }, { p: '수영하고 영어를 공부하고 점심을 먹었어요', note: 'Accepted with the particles; the key leaves them out.' }],
          diag: [{ p: '수영해고 영어 공부해고 점심 먹었어요', note: '하다 verbs: 하 + 고 = 수영하고, 공부하고.' }],
          en: 'I swam, studied English, and ate lunch.', keyNote: 'English is ours; the key has none' },
      ],
    },
    {
      id: 'IV', title: 'Section IV – Dictation',
      task: 'Listen to the MP3. Repeat what you hear out loud, then write it down. Each word/phrase is said twice.',
      type: 'dictation',
      items: [
        { n: 18, track: 'wb03', label: 'Track 3', ans: ['이 책은 재미있고 싸요'], en: 'This book is interesting and cheap.' },
        { n: 19, track: 'wb04', label: 'Track 4', ans: ['집에 가서 씻고 잤어요'], en: 'After I got home, I took a shower and slept.' },
      ],
    },
  ],
};
