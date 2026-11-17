/* workbook_L19.js — Korean 3 Workbook, Lesson 19 (p.76–79, answer key p.133–134).
   Section I 'chart': meaning of the phrase (not graded, kept) + V + 다음(or 후/뒤)에; row 1 (집에 가다) is the book's example.
   The cell accepts the phrase with or without the object, and any of 다음에 / 후에 / 뒤에; wrong verb forms come from forms_L19.js.
   Section II translation into Korean (write, givenEn). Section III rewrite a -기 전에 sentence with 다음(or 후/뒤)에 (the order of the
   two actions flips). Section IV dictation = WB Track 45, 46, 47 (whole sentences; ASR matches the key). lenient off: 간 / 갈. */
(() => {
  const F = MM.forms[19], row = d => F.find(f => f.dict === d);
  const N = '(다음에|후에|뒤에)';
  const fin = ch => (ch.charCodeAt(0) - 0xAC00) % 28; /* final consonant index: 0 none, 8 ㄹ */
  const why = (d, w, a) => {
    const f = row(d), stem = d.slice(0, -1);
    if (/는$/.test(w)) return `${w} is the present (-는). “After -ing” uses the past -(으)ㄴ: ${a}.`;
    if (/[았었했였]은$/.test(w)) return `No 았/었 before 은: the -(으)ㄴ itself shows the past → ${a}.`;
    if (/기$/.test(w)) return `-기 goes with 전에 (before, Lesson 10). After = ${a} 다음에.`;
    if (f.irr === 'ㄹ') return `ㄹ-stem: the ㄹ drops before ㄴ → ${a}.`;
    if (/을$/.test(w) || (w !== stem && fin(w.slice(-1)) === 8)) return `${w} is the future (-(으)ㄹ). After -ing = ${a}.`;
    return `Pronounced like that, but written ${a}.`;
  };
  /* Section I row: obj = the object part of the phrase ('커피를'), d = verb */
  const chartRow = (n, phrase, d, en, obj) => {
    const f = row(d), a = f.adn, o = obj ? `(${obj} |${obj.slice(0, -1)} |)` : '';
    const diag = f.wrong.map(w => ({ p: `${o}${w} ${N}`, note: why(d, w, a) })).concat([{ p: `${o}${a} (다음|후|뒤)`, note: `Add 에: ${a} 다음에 / 후에 / 뒤에.` }]);
    return { n, dict: phrase, en, cells: [{ ans: [`${obj ? obj + ' ' : ''}${a} 다음에`], soft: [{ p: `${o}${a} ${N}`, note: '' }], lenient: false, diag }] };
  };
  MM.workbook[19] = {
    sections: [
      {
        id: 'I', title: 'Section I – Vocabulary and Conjugation',
        task: 'Fill in the chart: the meaning of the phrase (infinitive form), then the phrase + 다음(or 후/뒤)에. The first one has been done for you as an example. Any of 다음에, 후에 and 뒤에 is right.',
        example: { given: '집에 가다 (to go home)', ko: '집에 간 다음에', en: 'after going home' },
        type: 'chart', skill: 'l19.form', cellPh: '… 다음에',
        cols: ['V + 다음(or 후/뒤)에'],
        items: [
          chartRow(2, '커피를 마시다', '마시다', 'to drink coffee → after drinking coffee', '커피를'),
          chartRow(3, '학교에 가다', '가다', 'to go to school → after going to school', '학교에'),
          (() => { const r = chartRow(4, '운동하다', '운동하다', 'to do exercise → after doing exercise'); r.cells[0].ans = ['운동을 한 다음에']; r.cells[0].soft.push({ p: `운동(을|) 한 ${N}`, note: 'The key writes 운동을 한 다음에; 운동한 다음에 is the same.' }, { p: `운동한 ${N}`, note: '' }); return r; })(),
          chartRow(5, '지하철을 타다', '타다', 'to take/ride on the subway → after taking/riding on the subway', '지하철을'),
          chartRow(6, '점심을 먹다', '먹다', 'to have lunch → after having lunch', '점심을'),
          chartRow(7, '피아노를 치다', '치다', 'to play the piano → after playing the piano', '피아노를'),
          chartRow(8, '책을 읽다', '읽다', 'to read a book → after reading a book', '책을'),
          chartRow(9, '한국어를 공부하다', '공부하다', 'to study Korean → after studying Korean', '한국어를'),
          chartRow(10, '편지를 쓰다', '쓰다', 'to write a letter → after writing a letter', '편지를'),
        ],
      },
      {
        id: 'II', title: 'Section II – Translation practice',
        task: 'Translate each sentence to Korean using 다음(or 후/뒤)에.',
        type: 'write', givenEn: true, skill: 'l19.form', placeholder: '… 다음에 …',
        items: [
          { n: 11, given: 'After doing exercise, I ate cake.', ans: ['운동한 다음에 케이크를 먹었어요.'],
            soft: [{ p: `(저는 |)운동(을 |)한 ${N} 케이크(를|) 먹었어요`, note: 'Accepted.' }],
            diag: [{ p: `(저는 |)운동(을 |)(하는|할|했은) ${N} 케이크(를|) 먹었어요`, note: 'After -ing = -(으)ㄴ: 운동한 다음에.' }, { p: `(저는 |)운동(을 |)한 ${N} 케이크(를|) 먹어요`, note: 'I ate = past: 먹었어요 (the tense goes on the last verb).' }, { p: `(저는 |)케이크(를|) 먹은 ${N} 운동(을 |)했어요`, note: 'Swapped: that means you exercised after the cake. Exercise first: 운동한 다음에 케이크를 먹었어요.' }],
            en: 'After doing exercise, I ate cake.' },
          { n: 12, given: 'After having lunch, where are we going?', ans: ['점심 먹은 다음에 우리 어디 갈 거예요?'],
            soft: [{ p: `점심(을|) 먹은 ${N} (우리 |)어디(에|) 갈 거예요`, note: 'Accepted.' }, { p: `점심(을|) 먹은 ${N} (우리 |)어디(에|) 가요`, note: 'Accepted: the present can talk about the near future. The key: 갈 거예요?' }],
            diag: [{ p: `점심(을|) (먹는|먹을|먹었은|머근) ${N} (우리 |)어디(에|) 갈 거예요`, note: 'After -ing = -(으)ㄴ: 먹은 다음에.' }, { p: `점심(을|) 먹기 ${N} (우리 |)어디(에|) 갈 거예요`, note: '-기 goes with 전에. After = 먹은 다음에.' }],
            en: 'After having lunch, where are we going?' },
          { n: 13, given: 'Let’s go to “noraebang” after doing this.', ans: ['이거 한 다음에 노래방 가요.'],
            soft: [{ p: `(이거|이것을|이걸|이것) 한 ${N} (우리 |같이 |)노래방(에|) 가요`, note: 'Accepted (가요 = let’s go, Lesson 16).' }, { p: `(이거|이것을|이걸) 한 ${N} (우리 |같이 |)노래방(에|) (갈래요|갈까요)`, note: 'Accepted as a suggestion. The key: 가요.' }],
            diag: [{ p: `(이거|이것을) (하는|할|했은|하은) ${N} (우리 |)노래방(에|) 가요`, note: 'After -ing = -(으)ㄴ: 하다 → 한 다음에.' }, { p: `(우리 |)노래방(에|) 간 ${N} (이거|이것을) 해요`, note: 'Swapped: that means do this after noraebang. This first: 이거 한 다음에 노래방 가요.' }],
            en: 'Let’s go to noraebang after doing this.' },
          { n: 14, given: 'Shall we go home after drinking coffee?', ans: ['커피 마신 다음에 집에 갈까요?'],
            soft: [{ p: `(우리 |)커피(를|) 마신 ${N} (우리 |)집에 갈까요`, note: 'Accepted.' }],
            diag: [{ p: `(우리 |)커피(를|) (마시는|마실|마셨은|마시은) ${N} (우리 |)집에 갈까요`, note: 'After -ing = -(으)ㄴ: 마시다 → 마신 다음에.' }, { p: `(우리 |)커피(를|) 마신 ${N} (우리 |)집에 (가요|갈 거예요)`, note: 'Shall we …? = -(으)ㄹ까요 (Lesson 4): 갈까요?' }, { p: `(우리 |)커피(를|) 마시기 전에 (우리 |)집에 갈까요`, note: 'That is “before drinking coffee”. After = 마신 다음에.' }],
            en: 'Shall we go home after drinking coffee?' },
          { n: 15, given: 'Please close the window (for me) after you clean up.', ans: ['청소한 다음에 창문 닫아 주세요.'],
            soft: [{ p: `청소(를 |)한 ${N} 창문(을|) 닫아 주세요`, note: 'Accepted.' }, { p: `청소(를 |)한 ${N} 창문(을|) 닫으세요`, note: 'Accepted: 닫으세요 = please close. “For me” = 닫아 주세요 (the key).' }],
            diag: [{ p: `청소(를 |)(하는|할|했은|하은) ${N} 창문(을|) 닫아 주세요`, note: 'After -ing = -(으)ㄴ: 청소한 다음에.' }, { p: `창문(을|) 닫은 ${N} 청소(를 |)해 주세요`, note: 'Swapped: that means clean after closing the window. Cleaning first: 청소한 다음에 창문 닫아 주세요.' }],
            en: 'Please close the window (for me) after you clean up.' },
        ],
      },
      {
        id: 'III', title: 'Section III – Comprehension',
        task: 'Rewrite each sentence to include 다음(or 후/뒤)에. The meaning stays the same, so the two actions swap places: what happened first now comes first.',
        type: 'write', skill: 'l19.order', placeholder: '… 다음에 …',
        items: [
          { n: 16, given: '주문하기 전에 얼마인지 보세요.', ans: ['얼마인지 본 다음에 주문하세요.'],
            soft: [{ p: `얼마인지 (먼저 |)본 ${N} 주문하세요`, note: 'Accepted.' }],
            diag: [{ p: `주문한 ${N} 얼마인지 보세요`, note: 'That changes the meaning: look at the price AFTER ordering. Looking comes first: 얼마인지 본 다음에 주문하세요.' }, { p: `얼마인지 (보는|볼|봤은|보은) ${N} 주문하세요`, note: '보다 → 본 다음에.' }],
            en: 'Order after you see how much it is.', keyNote: 'English is ours' },
          { n: 17, given: '학교 가기 전에 아침 일찍 만나요.', ans: ['아침 일찍 만난 다음에 학교 가요.'],
            soft: [{ p: `(우리 |)아침 일찍 만난 ${N} (같이 |)학교(에|) 가요`, note: 'Accepted.' }],
            diag: [{ p: `학교(에|) 간 ${N} 아침 일찍 만나요`, note: 'That changes the meaning: meet after going to school. Meeting comes first: 아침 일찍 만난 다음에 학교 가요.' }, { p: `아침 일찍 (만나는|만날|만났은|만나은) ${N} 학교(에|) 가요`, note: '만나다 → 만난 다음에.' }],
            en: 'Let’s meet early in the morning, and then go to school.', keyNote: 'English is ours' },
          { n: 18, given: '게임 하기 전에 숙제 먼저 해야 돼요. (먼저 = first)', ans: ['숙제 먼저 한 다음에 게임 해야 돼요.'],
            soft: [{ p: `숙제(를|) 먼저 한 ${N} 게임(을|)( |)해야 돼요`, note: 'Accepted.' }, { p: `먼저 숙제(를|) 한 ${N} 게임(을|)( |)해야 돼요`, note: 'Accepted.' }, { p: `숙제(를|) (먼저 |)한 ${N} 게임(을|)( |)해요`, note: 'Accepted: the key keeps 해야 돼요 (have to).' }],
            diag: [{ p: `게임(을|)( |)한 ${N} 숙제(를|) (먼저 |)해야 돼요`, note: 'That changes the meaning: homework after the game. Homework first: 숙제 먼저 한 다음에 게임 해야 돼요.' }, { p: `숙제(를|) 먼저 (하는|할|했은|하은) ${N} 게임(을|)( |)해야 돼요`, note: '하다 → 한 다음에.' }],
            en: 'You have to do your homework first, and then play games.', keyNote: 'English is ours' },
          { n: 19, given: '책 읽기 전에 영화로 먼저 볼 거예요.', ans: ['영화로 먼저 본 다음에 책 읽을 거예요.'],
            soft: [{ p: `(먼저 |)영화로 (먼저 |)본 ${N} 책(을|) 읽을 거예요`, note: 'Accepted.' }],
            diag: [{ p: `책(을|) 읽은 ${N} 영화로 (먼저 |)볼 거예요`, note: 'That changes the meaning: the movie after the book. The movie comes first: 영화로 먼저 본 다음에 책 읽을 거예요.' }, { p: `영화로 먼저 (보는|볼|봤은|보은) ${N} 책(을|) 읽을 거예요`, note: '보다 → 본 다음에 (the future is on the last verb: 읽을 거예요).' }],
            en: 'I will watch it as a movie first, and then read the book.', keyNote: 'English is ours' },
          { n: 20, given: '친구가 사기 전에 제가 먼저 샀어요.', ans: ['제가 먼저 산 다음에 친구가 샀어요.'],
            soft: [{ p: `제가 (먼저 |)산 ${N} 친구가 샀어요`, note: 'Accepted.' }],
            diag: [{ p: `친구가 산 ${N} 제가 (먼저 |)샀어요`, note: 'That changes the meaning: you bought after your friend. You were first: 제가 먼저 산 다음에 친구가 샀어요.' }, { p: `제가 먼저 (사는|살|샀은|사은) ${N} 친구가 샀어요`, note: '사다 → 산 다음에.' }],
            en: 'I bought it first, and then my friend bought it.', keyNote: 'English is ours' },
        ],
      },
      {
        id: 'IV', title: 'Section IV – Dictation',
        task: 'Listen to the MP3. Repeat what you hear out loud, then write it down. Each word/phrase is said twice.',
        type: 'dictation',
        items: [
          { n: 21, track: 'wb45', label: 'Track 45', ans: ['결정한 후에 연락 주세요.'], lenient: false, en: 'Contact me after you decide.' },
          { n: 22, track: 'wb46', label: 'Track 46', ans: ['그 책 다 읽은 다음에 저 주세요.'], lenient: false, en: 'After you finish reading the book, please give it to me.' },
          { n: 23, track: 'wb47', label: 'Track 47', ans: ['다 집에 간 뒤에 제가 도착했어요.'], lenient: false, en: 'After everyone had [already] gone home, I arrived.' },
        ],
      },
    ],
  };
  /* the order of the two actions IS the meaning: no “other word order” acceptance */
  MM.workbook[19].sections.forEach(sec => sec.items.forEach(it => { if (it.ans) it.order = false; (it.cells || []).forEach(c => { c.order = false; }); }));
})();
