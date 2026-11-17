/* workbook_L18.js — Korean 3 Workbook, Lesson 18 (p.73–75, answer key p.132–133).
   Section I vocabulary match (11, rounds 6 + 5). Section II translation into English (explain: compare with the key, judge yourself).
   Section III reading comprehension = pick (underline 밖에, 만, or both; key p.133). The PDF prints item 18 as “8.” — restored.
   Section IV dictation = WB Track 43, 44 (whole sentences; ASR matches the key). lenient off: 밖에 / 만 decide the meaning. */
MM.workbook[18] = {
  sections: [
    {
      id: 'I', title: 'Section I – Vocabulary',
      task: 'Match each Korean word to its English translation.',
      type: 'match',
      items: [
        { n: 1, ko: '참치', en: 'tuna' },
        { n: 2, ko: '한국인', en: 'Korean [person]' },
        { n: 3, ko: '고양이', en: 'cat' },
        { n: 4, ko: '밖', en: 'outside' },
        { n: 5, ko: '밖에', en: 'outside something; other than something' },
        { n: 6, ko: '있다', en: 'to be, to exist' },
        { n: 7, ko: '없다', en: 'to not exist, to not be' },
        { n: 8, ko: '못하다', en: 'to be poor at' },
        { n: 9, ko: '조금', en: 'a little bit; some' },
        { n: 10, ko: '돈', en: 'money' },
        { n: 11, ko: '콜라', en: 'cola' },
      ],
    },
    {
      id: 'II', title: 'Section II – Translation practice',
      task: 'Translate the following statements to English and your preferred language (if not English). Then compare with the key.',
      type: 'explain',
      items: [
        { n: 12, ko: '지금 4,000원밖에 없어요.', key: 'I only have 4,000 won now.' },
        { n: 13, ko: '미안해요. 저는 영어밖에 못 해요.', key: 'Sorry. I only speak English.' },
        { n: 14, ko: '지금 집에 동생밖에 없어요.', key: 'Only my younger brother/sister is at home now.' },
        { n: 15, ko: '우리 고양이는 참치밖에 안 먹어요.', key: 'My cat only eats tuna.' },
        { n: 16, ko: '왜 공부밖에 안 해요?', key: 'Why do you only study?' },
      ],
    },
    {
      id: 'III', title: 'Section III – Reading Comprehension',
      task: 'Of the two options in parentheses, choose the most correct or likely answer. If both answers are possible, choose both.',
      type: 'pick', skill: 'l18.vs',
      items: [
        { n: 17, note: '(돼지고기 = pork)', lines: [['', '저는 다 잘 먹어요. 그런데 돼지고기{밖에|만} 못 먹어요.']], ans: [['만']],
          en: 'I eat everything well. But I just can’t eat pork.', why: '돼지고기밖에 못 먹어요 would mean “I can eat nothing but pork” — the opposite of 다 잘 먹어요. The only thing you can’t eat = 만 + 못.', keyNote: 'English is ours' },
        { n: 18, lines: [['A', 'TTMIK Level 3 워크북 몇 권 있어요?'], ['B', '한 권{밖에|만} 없어요.']], ans: [['밖에']],
          en: 'A: How many TTMIK Level 3 workbooks do you have? B: I only have one.', why: 'Only one = 한 권밖에 없어요. (한 권만 없어요 would mean “just one book is missing”.)', keyNote: 'English is ours' },
        { n: 19, note: '(아침 = breakfast)', lines: [['', '오늘 아침{밖에|만} 못 먹어서 너무 배고파요.']], ans: [['밖에']],
          en: 'I could only eat breakfast today, so I’m really hungry.', why: 'Nothing but breakfast = 아침밖에 못 먹어서. (아침만 못 먹어서 = “I only missed breakfast”, which would not make you very hungry.)', keyNote: 'English is ours' },
        { n: 20, note: '(받다 = to accept, to take)', lines: [['', '저희는 현금{밖에|만} 받아요. 카드는 안 받아요.']], ans: [['만']],
          en: 'We only accept cash. We don’t accept cards.', why: '받아요 is positive, so 밖에 can’t be used: 현금만 받아요. (With a negative verb: 현금밖에 안 받아요.)', keyNote: 'English is ours' },
        { n: 21, lines: [['', '지금 집에 저{밖에|만} 없어요.']], ans: [['밖에', '만']],
          en: 'Only I am at home now.', why: 'The key accepts both here. 저밖에 없어요 = there is nobody but me.', keyNote: 'English is ours' },
        { n: 22, lines: [['', '오늘 저녁에 파티 가는 사람 저{밖에|만} 없어요?']], ans: [['밖에']],
          en: 'Am I the only one going to the party this evening?', why: 'Nobody but me = 저밖에 없어요? (파티 가는 사람 = people who are going to the party, Lesson 14.)', keyNote: 'English is ours' },
      ],
    },
    {
      id: 'IV', title: 'Section IV – Dictation',
      task: 'Listen to the MP3. Repeat what you hear out loud, then write it down. Each word/phrase is said twice.',
      type: 'dictation',
      items: [
        { n: 23, track: 'wb43', label: 'Track 43', ans: ['현우 씨는 일밖에 모르는 사람이에요.'], lenient: false, en: 'Hyunwoo is the person who only thinks/cares/knows about work.' },
        { n: 24, track: 'wb44', label: 'Track 44', ans: ['그거 저밖에 몰라요.'], lenient: false, en: 'Only I know that.' },
      ],
    },
  ],
};
