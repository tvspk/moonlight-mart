/* workbook_L1.js — Korean 3 Workbook, Lesson 1 (p.13–15, answer key p.121).
   The key leaves out the English for 6 (어렵다) and 9 (쓰다) and two sentence translations;
   they are filled in from the textbook (어렵다) and the standard meaning (쓰다 adj. = bitter). */
MM.workbook[1] = {
  sections: [
    {
      id: 'I', title: 'Section I – Vocabulary',
      task: 'Match each word with its English meaning.',
      bookTask: 'Please define/translate each word to English.',
      type: 'match',
      items: [
        { n: 1, ko: '비싸다', en: 'to be expensive' },
        { n: 2, ko: '크다', en: 'to be big' },
        { n: 3, ko: '시끄럽다', en: 'to be noisy' },
        { n: 4, ko: '덥다', en: 'to be hot' },
        { n: 5, ko: '빠르다', en: 'to be fast' },
        { n: 6, ko: '어렵다', en: 'to be difficult', keyNote: 'not printed in the key' },
        { n: 7, ko: '슬프다', en: 'to be sad' },
        { n: 8, ko: '쉽다', en: 'to be easy' },
        { n: 9, ko: '쓰다 (adj)', en: 'to be bitter', keyNote: 'not printed in the key' },
        { n: 10, ko: '짜다', en: 'to be salty' },
        { n: 11, ko: '맵다', en: 'to be spicy' },
        { n: 12, ko: '맛있다', en: 'to be tasty; to be delicious' },
      ],
    },
    {
      id: 'II', title: 'Section II – Writing practice',
      task: 'Using the adjectives from Section I and the adverb 너무, write a statement in 존댓말.',
      example: { given: '아름답다', ko: '너무 아름다워요.', en: 'It’s very beautiful.' },
      type: 'write', placeholder: '너무 …',
      items: [
        { n: '1a', given: '비싸다', ans: ['너무 비싸요'], en: 'It’s too expensive.' },
        { n: '2a', given: '크다', ans: ['너무 커요'], en: 'It’s too big.', diag: [{ p: '너무 크어요', note: '크 + 어요 → the ㅡ drops: 커요.' }, { p: '너무 크요', note: '크다 drops ㅡ and takes 어요: 커요.' }] },
        { n: '3a', given: '시끄럽다', ans: ['너무 시끄러워요'], en: 'It’s too noisy.', diag: [{ p: '너무 시끄럽어요', note: '시끄럽다 is a ㅂ-irregular: the ㅂ becomes 우 → 시끄러워요.' }] },
        { n: '4a', given: '덥다', ans: ['너무 더워요'], en: 'It’s too hot.', diag: [{ p: '너무 덥어요', note: '덥다 is a ㅂ-irregular: 더 + 워요 → 더워요.' }] },
        { n: '5a', given: '빠르다', ans: ['너무 빨라요'], en: 'It’s too fast.', diag: [{ p: '너무 빠라요', note: '빠르다 is a 르-irregular: 빠르 → 빨라요 (extra ㄹ).' }, { p: '너무 빠르어요', note: '르-irregular: 빠르다 → 빨라요.' }] },
        { n: '6a', given: '어렵다', ans: ['너무 어려워요'], en: 'It’s too difficult.', keyNote: 'English not printed in the key', diag: [{ p: '너무 어렵어요', note: '어렵다 is a ㅂ-irregular: 어려워요.' }] },
        { n: '7a', given: '슬프다', ans: ['너무 슬퍼요'], en: 'It’s too sad.', diag: [{ p: '너무 슬파요', note: 'The syllable before 프 has ㅡ, so it takes 어: 슬퍼요.' }, { p: '너무 슬프어요', note: 'ㅡ drops: 슬퍼요.' }] },
        { n: '8a', given: '쉽다', ans: ['너무 쉬워요'], en: 'It’s too easy.', diag: [{ p: '너무 쉽어요', note: '쉽다 is a ㅂ-irregular: 쉬워요.' }] },
        { n: '9a', given: '쓰다 (adj)', ans: ['너무 써요'], en: 'It’s too bitter.', keyNote: 'English not printed in the key', diag: [{ p: '너무 쓰어요', note: '쓰 + 어요 → 써요.' }] },
        { n: '10a', given: '짜다', ans: ['너무 짜요'], en: 'It’s too salty.' },
        { n: '11a', given: '맵다', ans: ['너무 매워요'], en: 'It’s too spicy.', diag: [{ p: '너무 맵어요', note: '맵다 is a ㅂ-irregular: 매워요.' }] },
        { n: '12a', given: '맛있다', ans: ['너무 맛있어요'], en: 'It’s really delicious.', diag: [{ p: '너무 맛이써요', note: 'Spelled 맛있어요, even though it sounds like 마시써요.' }] },
      ],
    },
    {
      id: 'III', title: 'Section III – Dictation',
      task: 'Listen to the MP3. Repeat what you hear out loud, then write it down. Each word/phrase is said twice.',
      type: 'dictation',
      items: [
        { n: 13, track: 'wb01', label: 'Track 1', ans: ['음악 소리가 너무 커요'], en: 'The music is too loud.' },
        { n: 14, track: 'wb02', label: 'Track 2_ver2', ans: ['신발이 너무 작아요'], en: 'The shoes are too small.' },
      ],
    },
  ],
};
