/* workbook_L6.js — Korean 3 Workbook, Lesson 6 (p.31–33, answer key p.124).
   Section I 'explain' (answer in English / own language, compare with the key, judge yourself).
   Section II 'write' with English given (givenEn): translate with -(으)ㄹ 거예요 or -(으)ㄹ게요.
   Section III 'pick': underline the correct answer in each {a|b} pair; both may be right (ans = list per pair).
   The key prints “거에요” in Section I; corrected to 거예요. English for Section III is ours (marked). */
MM.workbook[6] = {
  sections: [
    {
      id: 'I', title: 'Section I – Comprehension',
      task: 'Answer the following questions in English and your preferred language (if not English). Then compare with the key.',
      type: 'explain',
      items: [
        { n: 1, q: 'What is the main difference between -(으)ㄹ 거예요 and -(으)ㄹ게요?',
          key: 'With -(으)ㄹ 거예요, you are expressing your intention or plan for a future action or your expectation for a future state which is not related to or affected by the reaction or request of the person you’re talking to. However, -(으)ㄹ게요 expresses the future but pertains to your actions or decisions as a reaction to or as a result of what the other person says or thinks.' },
        { n: 2, q: 'List the 3 situations in which you can use -(으)ㄹ게요 instead of -(으)ㄹ 거예요.',
          key: 'a. When you are changing your plan according to what the other person said. b. When you want to check what the other person thinks by saying something and seeing their reaction. c. When you decide to do something because of something the other person said.' },
      ],
    },
    {
      id: 'II', title: 'Section II – Translation practice',
      task: 'Translate the following sentences to Korean using either -(으)ㄹ 거예요 or -(으)ㄹ게요.',
      type: 'write', givenEn: true, skill: 'l6.usage', placeholder: '… 거예요 / …게요',
      items: [
        { n: 3, given: 'I am going to the park (no matter what you say).',
          ans: ['공원에 갈 거예요.'], soft: [{ p: '저는 공원에 갈 거예요', note: 'Accepted.' }, { p: '(저는 |)공원에 갈 거에요', note: 'Accepted, but it is spelled 거예요.' }],
          diag: [{ p: '(저는 |)공원에 갈게요', note: '“No matter what you say” = your own plan: 갈 거예요.' }, { p: '(저는 |)공원에 가요', note: 'Use a future ending: 갈 거예요.' }, { p: '(저는 |)공원에서 갈 거예요', note: 'Going TO a place: 공원에.' }],
          en: 'I am going to the park.' },
        { n: 4, given: '(If you don’t mind) I will come along, too.',
          ans: ['저도 갈게요.'], soft: [{ p: '저도 같이 갈게요', note: 'Accepted: 같이 = together.' }],
          diag: [{ p: '저도 갈 거예요', note: '“If you don’t mind” = you react to the other person: 갈게요.' }, { p: '저도 갈께요', note: 'Written 게요: 갈게요.' }, { p: '저도 올게요', note: 'Korean uses 가다 here (you go to where they are going): 갈게요.' }],
          en: '(If you don’t mind) I will come along, too.' },
        { n: 5, given: 'I will call you tomorrow (for your sake/because of what you said).',
          ans: ['내일 전화할게요.'], soft: [{ p: '내일 다시 전화할게요', note: 'Accepted: 다시 = again.' }, { p: '(제가 |)내일 (제가 |)전화할게요', note: 'Accepted.' }],
          diag: [{ p: '내일 전화할 거예요', note: '“Because of what you said” = a reaction: 전화할게요.' }, { p: '내일 전화할께요', note: 'Written 게요: 전화할게요.' }, { p: '내일 전화하을게요', note: '하 ends in a vowel: 할게요.' }],
          en: 'I will call you tomorrow.' },
        { n: 6, given: 'Kyung-hwa is going out (no matter what).',
          ans: ['경화 씨는 나갈 거예요.'], soft: [{ p: '경화 씨(가|는) 나갈 거예요', note: 'Accepted.' }, { p: '경화(는|가) 나갈 거예요', note: 'Accepted. Adding 씨 is more polite when you talk about someone.' }],
          diag: [{ p: '경화 씨(는|가) 나갈게요', note: '-(으)ㄹ게요 is about YOUR own reaction (I will…). About Kyung-hwa’s fixed plan: 나갈 거예요.' }],
          en: 'Kyung-hwa is going out.' },
        { n: 7, given: 'I will go out now (unless you don’t want me to).',
          ans: ['지금 나갈게요.'], soft: [{ p: '(저 |)지금 나갈게요', note: 'Accepted.' }],
          diag: [{ p: '지금 나갈 거예요', note: 'The textbook: 나갈 거예요 means you were going out anyway, maybe somewhere else. Reacting: 나갈게요.' }, { p: '지금 나갈께요', note: 'Written 게요: 나갈게요.' }, { p: '지금 나가을게요', note: '나가 ends in a vowel: 나갈게요.' }],
          en: 'I will go out now.' },
      ],
    },
    {
      id: 'III', title: 'Section III – Reading Comprehension',
      task: 'Underline (tap) the correct or most likely answer in each pair. If both answers are possible, tap both.',
      type: 'pick', skill: 'l6.usage',
      items: [
        { n: 8, lines: [['A', '내일 뭐 {할 거예요|할게요}?'], ['B', '친구 생일 파티에 {갈 거예요|갈게요}.']], ans: [['할 거예요'], ['갈 거예요']],
          en: 'A: What are you going to do tomorrow? B: I’m going to my friend’s birthday party.', why: 'Asking about and stating a plan: 거예요 both times.', keyNote: 'English is ours' },
        { n: 9, note: '(You are handing the person the book as you say this.)', lines: [['A', '이 책 {줄 거예요|줄게요}.'], ['B', '저한테요? 감사합니다.']], ans: [['줄게요']],
          en: 'A: I’ll give you this book. B: To me? Thank you.', why: 'You are giving it right now, for the other person: 줄게요.', keyNote: 'English is ours' },
        { n: 10, lines: [['A', '저는 내년에 한국어 {공부할 거예요|공부할게요}.'], ['B', '그래요? 제가 {도와줄 거예요|도와줄게요}.']], ans: [['공부할 거예요'], ['도와줄게요']],
          en: 'A: I’m going to study Korean next year. B: Really? I’ll help you.', why: 'A states a plan (거예요); B decides because of what A said (게요). 내년 = next year.', keyNote: 'English is ours' },
      ],
    },
    {
      id: 'IV', title: 'Section IV – Dictation',
      task: 'Listen to the MP3. Repeat what you hear out loud, then write it down. Each word/phrase is said twice.',
      type: 'dictation',
      items: [
        { n: 11, track: 'wb13', label: 'Track 13', ans: ['청소는 제가 할게요.'], en: 'I will do the cleaning. / As for the cleaning, I will do it.' },
        { n: 12, track: 'wb14', label: 'Track 14', ans: ['지금 주문할게요.'], en: 'I will order now.' },
        { n: 13, track: 'wb15', label: 'Track 15', ans: ['제가 다 먹을게요.'], en: 'I will eat them all.' },
      ],
    },
  ],
};
