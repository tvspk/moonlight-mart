/* workbook_L15.js — Korean 3 Workbook, Lesson 15 (p.63–65, answer key p.130–131).
   Section I multiple choice (4). Section II complete the dialogue with 그러면 + the prompts (write with dialogue lines; the null line is
   the one to write); the book also asks to translate the dialogue: the key's translation is shown after the answer (5 has no English
   for the last line in the key: ours, marked). Section III dictation = WB Track 35, 36, 37 (whole sentences).
   Every 그러면 answer also accepts 그럼 (the lesson’s short form). */
(() => {
  const G = '(그러면|그럼)';
  const wrongWord = ans => [
    { p: ans.replace(/^\(그러면\|그럼\)/, '(그래도|그래서)'), note: '그래도 = but still, 그래서 = so. “Then / in that case” = 그러면 (or 그럼).' },
    { p: ans.replace(/^\(그러면\|그럼\)/, '그런'), note: '그런 = such (before a noun). “Then” = 그러면 or 그럼.' },
  ];
  const item = (n, lines, cue, ans, soft, diag, en, keyNote, skill) => ({ n, lines, cue, ans: [ans], soft, diag: wrongWord(soft[0].p).concat(diag || []), en, keyNote, skill, lenient: false });
  MM.workbook[15] = {
    sections: [
      {
        id: 'I', title: 'Section I – Comprehension',
        task: 'Multiple choice. Choose the best answer.',
        type: 'mc', skill: 'l15.form',
        items: [
          { n: 1, q: '그러면 is a _________, which links words, phrases, and clauses together.', opts: ['pronoun', 'conjunction', 'predicate noun', 'antecedent'], right: 1, note: '그러면 (like 그래도, 그래서, 그리고) is a conjunction.' },
          { n: 2, q: 'Using 그럼 instead of 그러면 is used most often when:', opts: ['speaking casually', 'writing', 'dancing', 'none of these'], right: 0, skill: 'l15.short', note: 'Textbook: 그럼 is used in spoken Korean (and often in casual written Korean).' },
          { n: 3, q: 'The word 그러면 is a combination of:', opts: ['그런 and -면', '그럼 and -면', '그렇다 and -면', '그래도 and -면'], right: 2, note: '그렇다 (to be so) + -면 (if) → 그러면.' },
          { n: 4, q: '그럼 means:', opts: ['the same thing as 그러면', 'the name of a character on the children’s TV show “뽀로로”', '“in that case”, “well then”, or “if so”', 'both A and C'], right: 3, skill: 'l15.short', note: '그럼 = the short form of 그러면 = in that case, well then, if so.' },
        ],
      },
      {
        id: 'II', title: 'Section II – Complete the dialogue',
        task: 'Fill in the blank using 그러면 and the prompts in parentheses. Use the correct sentence endings/conjugations. Then translate the whole conversation in your head and compare with the key’s translation.',
        type: 'write', skill: 'l15.usage', placeholder: '그러면 …',
        items: [
          item(5, [['A', '오늘 시간 있어요?'], ['B', '미안해요. 오늘은 바빠요.'], ['A', null]], '시간, 있다, 언제', '그러면 언제 시간 있어요?',
            [{ p: `${G} 언제 시간(이|) 있어요`, note: 'Accepted.' }, { p: `${G} 언제 시간(이|) 있으세요`, note: 'Accepted: 있으세요 is more polite.' }],
            [{ p: `${G} 언제 시간(이|) 없어요`, note: 'B is busy today; A asks when B HAS time: 시간 있어요.' }],
            'A: Do you have time today? B: Sorry. I’m busy today. A: Then when do you have time?', 'English of the last line not printed in the key'),
          item(6, [['A', '저 늦었어요!'], ['B', null]], '*imperative (타다, 택시)', '그러면 택시 타세요.',
            [{ p: `${G} 택시(를|) 타세요`, note: 'Accepted.' }],
            [{ p: `${G} 택시(를|) 타요`, note: '타요 is a statement (or a casual suggestion). The book asks for the imperative: 타세요.' }, { p: `${G} 택시(를|) 탈게요`, note: '탈게요 = I will take one. The book asks for the imperative (you take one): 타세요.' }, { p: `${G} 택시(를|) 타으세요`, note: '타 ends in a vowel: + 세요 → 타세요.' }],
            'A: I’m late! B: Then take a taxi.'),
          item(7, [['A', '너무 더워요.'], ['B', null]], '*imperative (창문, 열다)', '그러면 창문(을) 여세요.',
            [{ p: `${G} 창문(을|) 여세요`, note: 'Accepted.' }],
            [{ p: `${G} 창문(을|) 열으세요`, note: 'ㄹ-stem: the ㄹ drops before -세요 and there is no 으: 여세요.' }, { p: `${G} 창문(을|) 열세요`, note: 'ㄹ-stem: the ㄹ drops before -세요: 여세요.' }, { p: `${G} 창문(을|) 열어요`, note: '열어요 is a statement. The book asks for the imperative: 여세요.' }],
            'A: It’s too hot. B: Then open the window.'),
          item(8, [['A', '같이 나가서 밥 먹을까요?'], ['B', '아, 저는 밥 먹고 왔어요.'], ['A', null]], '먹고 오다, 혼자', '그러면 혼자 먹고 올게요.',
            [{ p: `${G} (저 |제가 |저는 |)혼자 (밥 |)먹고 올게요`, note: 'Accepted.' }],
            [{ p: `${G} (저 |제가 |저는 |)혼자 (밥 |)먹고 올 거예요`, note: 'Correct Korean. The key uses 올게요 (I’ll do it, reacting to your answer, Lesson 6).' }, { p: `${G} (저 |제가 |저는 |)혼자 (밥 |)먹고 왔어요`, note: '왔어요 = came (past). A hasn’t eaten yet: 먹고 올게요.' }, { p: `${G} (저 |제가 |저는 |)혼자 (밥 |)먹고 올께요`, note: 'Spelling: 올게요 (pronounced 올께요).' }],
            'A: Shall we go out together and have a meal? B: Oh, I [already] had a meal and came [here]. A: Then I will eat alone and come.'),
          item(9, [['A', '저 이 가방 살까요?'], ['B', '가방이 너무 큰 것 같아요.'], ['A', null]], '이거, 사다', '그러면 이거 살까요?',
            [{ p: `${G} (이거|이것|이걸|이거를|이것을) 살까요`, note: 'Accepted.' }],
            [{ p: `${G} (이거|이것|이걸|이거를|이것을) 사을까요`, note: '사 ends in a vowel: + ㄹ까요 → 살까요.' }, { p: `${G} (이거|이것|이걸|이거를|이것을) 살게요`, note: 'Correct Korean (then I’ll buy this one), but the key keeps asking: 살까요?' }],
            'A: Shall I buy this bag? B: I think the bag is too big. A: Then shall I buy this one?'),
        ],
      },
      {
        id: 'III', title: 'Section III – Dictation',
        task: 'Listen to the MP3. Repeat what you hear out loud, then write it down. Each word/phrase is said twice.',
        type: 'dictation',
        items: [
          { n: 10, track: 'wb35', label: 'Track 35', ans: ['그럼 저는 이제 갈게요.'], lenient: false, en: 'Well then, I will get going now. / Well then, I will leave now.' },
          { n: 11, track: 'wb36', label: 'Track 36', ans: ['그럼 이제 어떻게 해요?'], lenient: false, en: 'If so, what do we do now?' },
          { n: 12, track: 'wb37', label: 'Track 37', ans: ['그러면 저 주세요.'], lenient: false, en: 'If so, please give it to me.' },
        ],
      },
    ],
  };
})();
