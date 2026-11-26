/* ---- src/l23/cards_L23.js ---- */
/* cards_L23.js — Loyalty Cards for Lesson 23 (Word Builder 학). Vocabulary cards come from the game vocab automatically;
   these are the building-block and sentence cards (front Korean, back English). All from the book. */
MM.cards[23] = [
  { id: 'k1', ko: '학 (學)', en: 'related to “learning”, “studying”, and “school”', src: 'Textbook' },
  { id: 'k2', ko: '학 + 생 = 학생', en: 'learning + person (member, participant) = student', src: 'Textbook' },
  { id: 'k3', ko: '학 + 교 = 학교', en: 'learning + school = school', src: 'Textbook' },
  { id: 'k4', ko: '학 + 자 = 학자', en: 'learning + person = scholar', src: 'Textbook' },
  { id: 'k5', ko: '유 + 학 = 유학', en: 'to stay + learning = studying abroad', src: 'Textbook' },
  { id: 'k6', ko: '전 + 학 = 전학', en: 'to roll, move + learning = to change schools', src: 'Textbook' },
  { id: 'k7', ko: '방 + 학 = 방학', en: 'to release, let go + learning = school vacation', src: 'Textbook' },
  { id: 'k8', ko: '장 + 학 + 금 = 장학금', en: 'recommending + learning + money = scholarship', src: 'Textbook' },
  { id: 'k9', ko: '복 + 학 + 생 = 복학생', en: 'return + learning + person = student back at school after a long break', src: 'Textbook' },
  { id: 'k10', ko: '독 + 학 = 독학', en: 'alone + learning = self-study', src: 'Textbook' },
  { id: 'k11', ko: '저 드라마 저희 학교에서 찍고 있어요.', en: 'That drama is set in my school. (They are filming it at my school.)', src: 'Textbook dialogue' },
  { id: 'k12', ko: '학생들 없는 일요일에 찍어요.', en: 'They film on Sundays when there are no students.', src: 'Textbook dialogue' },
  { id: 'k13', ko: '오늘 학교에 전학생이 왔어요.', en: 'Today a new student came (from another school) to our school.', src: 'Workbook dictation' },
  { id: 'k14', ko: '수학여행은 언제 가요?', en: 'When do you go on a school trip?', src: 'Workbook dictation' },
  { id: 'k15', ko: '수학 (數學) · 수학여행 (修學旅行)', en: 'mathematics · school trip — two different 수', src: 'Workbook (hanja)' },
];

/* ---- src/l23/game_L23.js ---- */
/* game_L23.js — Moonlight Mart, Lesson 23 (Word Builder 1: 학 (學) = learning, studying, school). Lines: [castId, korean, english].
   q.opts: correct option first (engine shuffles). odd: opts[0] is the WRONG / odd one the player must find.
   No conjugation in this lesson (gen_forms.py 23 exits on purpose): Rush Hour mixes vocabulary with the pool (rushPool).
   Skills: l23.root (학 + the building blocks: 생 person, 자 person, 교 school, 원 house, 금 money, 년 year, 기 period…),
   l23.people (학생, 학자, 유학생, 전학생, 장학생, 복학생, 대학원생, 대학교수), l23.places (학교, 학원, 초/중/고등학교, 대학교),
   l23.study (subjects + school time: 수학, 과학, 어학, 경제학, 물리학, 학년, 학기, 방학, 장학금, 유학, 전학, 독학, 학습, 수학여행, 학용품).
   Grammar in the lines only from L1–22. Game words not in the book: 조카, 손자 (earlier lessons), 가르치다, 순찰, 군대, 다녀오다,
   과자, 경주, 부산 — glossed where they appear. Hyunwoo (Mr. Park’s nephew, from the L8 chat) returns to university as a 복학생.
   App-written sentences are NOT yet checked by a native speaker (⚠ list in HANDOFF.md). */
MM.game[23] = {
  skills: {
    'l23.root':   { en: '학 and its building blocks', desc: '학 (學) = learning, studying, school. Words are built from parts: 학 + 생 (person) = 학생, 장 (recommend) + 학 + 금 (money) = 장학금, 학 + 년 (year) = 학년.' },
    'l23.people': { en: 'People with 학', desc: '학생 student, 학자 scholar, 유학생 student abroad, 전학생 transfer student, 장학생 scholarship student, 복학생 returning student, 대학원생 graduate student, 대학교수 university professor.' },
    'l23.places': { en: 'Places with 학', desc: '학교 school, 학원 private academy, 초등학교 elementary, 중학교 middle, 고등학교 high school, 대학교 university.' },
    'l23.study':  { en: 'Subjects and school life', desc: '수학, 과학, 어학, 언어학, 경제학, 물리학 · 학년 school year, 학기 semester, 방학 vacation, 장학금 scholarship · 유학, 전학, 독학, 학습, 수학여행, 학용품.' },
    'l23.vocab':  { en: 'Lesson 23 vocabulary', desc: 'The words of the lesson.' },
  },
  fixSkills: { studydesk: 'l23.people', whiteboard: 'l23.study', bookbox: 'l23.places' },
  rushPool: true,
  intro: 'Word Builder: one syllable, many words. 학 (學) is about learning, studying and school. Add 생 (person) and you get 학생, add 교 (school) and you get 학교, put 장 (recommend) in front and 금 (money) behind and you get 장학금, a scholarship. Tonight a new semester begins: Mr. Park’s nephew goes back to university, Sua dreams of a scholarship, and at 1 a.m. a whole bus of high-school students on a school trip stops at the store.',

  shifts: {
    A: {
      title: 'Back to School', sub: 'Recognize · choose', kind: 'recognize', fix: 'studydesk',
      snack: { id: 'l23.snackA', ko: '복학생 젤리', en: 'Back-to-School Jelly', desc: 'Has been away for two years. Still chewy. Slightly confused by the new packaging.' },
      scenes: [
        { id: 'A1', time: '22:00', place: 'Counter', narr: 'Twenty-third night. The new semester starts on Monday, and Mr. Park is in a very good mood. (조카 = nephew)',
          lines: [['boss', '제 조카 현우가 다음 주에 학교에 다시 가요. 이제 복학생이에요.', 'My nephew Hyunwoo goes back to school next week. Now he’s a returning student.']],
          q: { type: 'enOpts', prompt: 'What is Hyunwoo now?', opts: ['A student returning to school after a long break.', 'A student who moved to another school.', 'A student studying abroad.', 'A university professor.'], skill: 'l23.people',
            explain: '복학생 = 복 (return) + 학 + 생 (person): a student who has returned to school, usually after a long break.', en: 'Now he’s a returning student.' },
          after: [['boss', '그래서 오늘부터 창고에서 공부할 거예요. 근데 책상이 좀 이상해요.', 'So from today he’ll study in the stockroom. But the desk is a bit strange.']] },
        { id: 'A2', time: '22:30', place: 'Window seats', narr: 'Sua is reading a thick brochure from the university office.',
          lines: [['sua', '저 내년에 유학 갈 수도 있어요. 독일에서 공부하고 싶어요.', 'I might go to study abroad next year. I want to study in Germany.']],
          q: { type: 'enOpts', prompt: 'What might Sua do next year?', opts: ['Study abroad.', 'Change schools.', 'Study by herself at home.', 'Go on a school trip.'], skill: 'l23.study',
            explain: '유학 = 유 (to stay) + 학: studying abroad, staying abroad to study. 유학 가다 = to go and study abroad. (-(으)ㄹ 수도 있어요 = might, Lesson 22.)', en: 'I might go to study abroad next year.' } },
        { id: 'A3', time: '23:00', place: 'Coffee machine', narr: 'Mr. Lee, third coffee, stares at a spreadsheet on his phone.',
          lines: [['manager', '저는 대학교에서 경제학을 공부했어요. 근데 지금은 매일 엑셀밖에 안 해요.', 'I studied economics at university. But now I do nothing but Excel every day.']],
          q: { type: 'enOpts', prompt: 'What did Mr. Lee study?', opts: ['Economics.', 'Mathematics.', 'Science.', 'Linguistics.'], skill: 'l23.study',
            explain: '경제 (economy) + 학 = 경제학, economics. (-밖에 안 해요 = does nothing but, Lesson 18.)', en: 'I studied economics at university.' } },
        { id: 'A4', time: '23:30', place: 'Counter', narr: 'Grandma buys a notebook for her grandson. (손자 = grandson)',
          lines: [['grandma', '우리 손자가 이번 주에 전학했어요. 새 학교에서는 ___이에요.', 'My grandson changed schools this week. At the new school, he’s a transfer student.']],
          q: { type: 'mc', prompt: '“A student who moved to another school.” Which word goes in the blank?', ko: '새 학교에서는 ___이에요.', opts: ['전학생', '복학생', '유학생', '장학생'], skill: 'l23.people',
            explain: '전 (to move) + 학 = 전학 (changing schools) → + 생 (person) = 전학생.', en: 'At the new school, he’s a transfer student.' } },
        { id: 'A5', time: '00:30', place: 'Memo board', narr: 'Minji left four word cards on the memo board: “people words”. One of them is not a person.',
          q: { type: 'odd', prompt: 'Which word is NOT a person?', opts: ['학원', '학생', '학자', '유학생'], skill: 'l23.people',
            explain: '학원 = 학 + 원 (house; garden): a private academy, a place. 생 (person, member) and 자 (person) make people: 학생, 학자, 유학생.', en: '' } },
        { id: 'A6', time: '02:00', place: 'Coffee machine', narr: 'Mr. Kim, the taxi driver, shows you a photo of his daughter in a lab coat. (가르치다 = to teach)',
          lines: [['taxi', '제 딸은 대학교수예요. 대학교에서 물리학을 가르쳐요.', 'My daughter is a university professor. She teaches physics at a university.']],
          q: { type: 'enOpts', prompt: 'What does Mr. Kim’s daughter do?', opts: ['She teaches physics at a university.', 'She studies physics abroad.', 'She is a high-school student.', 'She runs a private academy.'], skill: 'l23.people',
            explain: '대학교수 = 대학교 (university) + 교수 (professor). 물리학 = physics.', en: 'My daughter is a university professor.' },
          after: [['taxi', '저는 수학을 정말 못했는데… 딸은 정말 잘해요.', 'I was really bad at math, but… my daughter is really good.']] },
        { id: 'A7', time: '02:30', place: 'Front door', narr: 'The courier, with a tower of boxes.',
          lines: [['courier', '학용품이에요! 요즘 새 학기예요. 그래서 정말 바빠요!', 'School supplies! It’s the new semester these days. So I’m really busy!']],
          q: { type: 'enOpts', prompt: 'What is in the boxes, and why is he so busy?', opts: ['School supplies — the new semester is starting.', 'Textbooks — it’s the school vacation.', 'Scholarship letters — it’s exam time.', 'Snacks — it’s a school trip.'], skill: 'l23.study',
            explain: '학용품 = school supplies, stationery. 학기 = 학 + 기 (period): semester.', en: 'School supplies! It’s the new semester these days.' } },
        { id: 'A8', time: '03:30', place: 'Drinks fridge', narr: 'The officer takes his banana milk. (순찰하다 = to patrol)',
          lines: [['police', '저는 매일 밤 학교 앞에서 순찰해요. 학원 앞에도 가요. 밤 열 시에 학생들이 많이 나와요.', 'I patrol in front of the school every night. I go in front of the academies too. At 10 p.m. a lot of students come out.']],
          q: { type: 'enOpts', prompt: 'Where else does the officer go?', opts: ['In front of the private academies.', 'Inside the school.', 'To the university library.', 'To the school-trip bus.'], skill: 'l23.places',
            explain: '학원 = 학 + 원 (house): a private academy for after-school classes. Students often leave them late at night.', en: 'I go in front of the academies too.' } },
        { id: 'A9', time: '04:30', place: 'Stockroom', narr: 'You fix the wobbly desk with a folded flyer from a 학원. Then you sort Minji’s next set of cards: “places”.',
          q: { type: 'odd', prompt: 'Which word is NOT a place?', opts: ['학자', '학교', '학원', '대학교'], skill: 'l23.places',
            explain: '학자 = 학 + 자 (person): a scholar. 학교, 학원 and 대학교 are places.', en: '' } },
        { id: 'A10', time: '05:30', place: 'Counter', narr: 'Mr. Park comes in early and sees the desk.',
          lines: [['boss', '책상 고쳤어요? 고마워요! 현우가 여기에서 영어를 독학할 거예요… 아마.', 'You fixed the desk? Thank you! Hyunwoo will teach himself English here… probably.']],
          q: { type: 'enOpts', prompt: 'What does 독학 mean?', opts: ['self-study, studying by oneself', 'studying abroad', 'changing schools', 'school vacation'], skill: 'l23.study',
            explain: '독 (alone) + 학 = 독학: self-study, studying by oneself. 독학하다 = to study by oneself.', en: 'Hyunwoo will teach himself English here… probably.' },
          afterNarr: 'Ramyeon tests the desk first. It holds exactly one cat. It is now a cat desk with a study problem.' },
      ],
      cctv: [
        { id: 'A.c1', type: 'enOpts', prompt: 'The word 학 (學) is related to…', opts: ['learning, studying, and school', 'money and prices', 'people and families', 'years and periods'], skill: 'l23.root', explain: 'Textbook: 학 is related to “learning”, “studying”, and “school”.', en: '' },
        { id: 'A.c2', type: 'mc', prompt: '“student studying abroad”', opts: ['유학생', '전학생', '복학생', '장학생'], skill: 'l23.people', explain: '유학 (studying abroad) + 생 = 유학생.', en: '' },
        { id: 'A.c3', type: 'enOpts', prompt: 'In 학생, 유학생 and 복학생, 생 means…', opts: ['person, member, participant', 'life', 'school', 'money'], skill: 'l23.root', explain: 'Textbook: 생 (person, member, participant).', en: '' },
        { id: 'A.c4', type: 'mc', prompt: '“private academy”', opts: ['학원', '학교', '학자', '학년'], skill: 'l23.places', explain: '학 + 원 (house; garden) = 학원.', en: '' },
        { id: 'A.c5', type: 'enOpts', prompt: '대학원생', opts: ['graduate student', 'university professor', 'high-school student', 'returning student'], skill: 'l23.people', explain: 'Workbook 20: 대학원생 = graduate student.', en: '' },
        { id: 'A.c6', type: 'enOpts', prompt: 'In 학자 (scholar), 자 means…', opts: ['person', 'alone', 'money', 'year'], skill: 'l23.root', explain: 'Textbook: 학 + 자 (person) = 학자.', en: '' },
      ],
    },

    B: {
      title: 'Scholarship Night', sub: 'Build · write', kind: 'produce', fix: 'whiteboard',
      note: { by: 'boss', text: 'Night shift rule #23: Hyunwoo wrote his plan for the semester on the stockroom whiteboard, and half of the words fell off. Please write them back — and help Sua, she is studying for a scholarship. — Park' },
      snack: { id: 'l23.snackB', ko: '장학금 초콜릿', en: 'Scholarship Chocolate', desc: 'Gold foil, like a coin. Awarded to anyone who finishes a whole page of notes.' },
      scenes: [
        { id: 'B1', time: '22:00', place: 'Stockroom', narr: 'Hyunwoo’s whiteboard, first line. One word is missing.',
          q: { type: 'fill', prompt: '“Monday: the semester starts.” Write the missing word: semester', ko: '월요일: ___ 시작!', ans: ['학기'], units: ['학', '기'], extra: ['년', '방', '교'], skill: 'l23.study',
            diag: [{ p: '학년', note: '학년 = school year (년 = year). A semester = 학 + 기 (period): 학기.' }, { p: '학끼', note: 'Pronounced [학끼], written 학기.' }],
            explain: '학 + 기 (period) = 학기, semester.', en: 'Monday: the semester starts!' } },
        { id: 'B2', time: '22:30', place: 'Stockroom', narr: 'The last line of the whiteboard.',
          q: { type: 'fill', prompt: '“End of June: exams over → school vacation!” Write: school vacation', ko: '6월 말: 시험 끝 → ___!', ans: ['방학'], units: ['방', '학'], extra: ['전', '유', '기'], skill: 'l23.study',
            diag: [{ p: '전학', note: '전학 = changing schools. Vacation = 방 (to release, let go) + 학 = 방학.' }, { p: '학기', note: '학기 = semester. Vacation = 방학.' }],
            explain: '방 (to release, let go) + 학 = 방학: school vacation.', en: 'End of June: exams over → school vacation!' } },
        { id: 'B3', time: '23:00', place: 'Window seats', narr: 'Sua puts down her pen.',
          lines: [['sua', '저 이번 학기에 꼭 ___을 받고 싶어요.', 'I really want to get a scholarship this semester.']],
          q: { type: 'fill', prompt: '“I really want to get a scholarship this semester.”', ko: '저 이번 학기에 꼭 ___을 받고 싶어요.', ans: ['장학금'], units: ['장', '학', '금'], extra: ['생', '전', '원'], skill: 'l23.study',
            diag: [{ p: '장학생', note: '장학생 = the student on a scholarship. What you receive is the money (금): 장학금.' }, { p: '장학끔', note: 'Pronounced [장학끔], written 장학금.' }],
            explain: '장 (recommending) + 학 + 금 (money) = 장학금.', en: 'I really want to get a scholarship this semester.' },
          after: [['sua', '그래서 수학하고 과학을 정말 열심히 공부해요.', 'So I’m studying math and science really hard.']] },
        { id: 'B4', time: '23:30', place: 'Window seats', narr: 'Her math notebook is full of red ink.',
          q: { type: 'write', prompt: 'Ask her: “Is mathematics difficult?”', ans: ['수학 어려워요?'], soft: [{ p: '(손님 |)수학(이|은|) (많이 |좀 |)어려워요', note: 'Accepted.' }], skill: 'l23.study',
            diag: [{ p: '(손님 |)과학(이|은|) 어려워요', note: '과학 = science. Mathematics = 수 (numbers) + 학 = 수학.' }, { p: '(손님 |)수학(이|은|) 어렵어요', note: '어렵다 is ㅂ-irregular (Lesson 11): 어려워요.' }],
            explain: '수학 = mathematics; 어렵다 → 어려워요 (Lesson 11).', en: 'Is mathematics difficult?' },
          after: [['sua', '네… 그래도 재미있어요.', 'Yes… but it’s still fun.']] },
        { id: 'B5', time: '00:30', place: 'Coffee machine', narr: 'Mr. Lee looks at Sua’s notebook and gets curious. (몇 = how many / what number)',
          q: { type: 'write', prompt: 'Write Mr. Lee’s question to Sua: “What school year are you in?” (몇 + school year)', ans: ['몇 학년이에요?'], soft: [{ p: '(학생은 |학생 |손님은 |)몇 학년이에요', note: 'Accepted.' }, { p: '(학생은 |학생 |)몇 학년(이세요|예요)', note: 'Accepted (이세요 is a little more polite).' }], skill: 'l23.study',
            diag: [{ p: '(학생은 |)몇 학기(예요|이에요)', note: '학기 = semester. School year = 학년: 몇 학년이에요?' }, { p: '(학생은 |)몇 항년이에요', note: 'Pronounced [항년], written 학년.' }],
            explain: '학 + 년 (year) = 학년. 몇 학년이에요? = What year are you in?', en: 'What school year are you in?' },
          after: [['sua', '2학년이에요. 과장님은 대학교에서 뭐 공부했어요?', 'I’m in second year. What did you study at university?'], ['manager', '경제학… 근데 다 잊었어요.', 'Economics… but I forgot all of it.']] },
        { id: 'B6', time: '01:30', place: 'Counter', narr: 'Grandma is back for an eraser. (초등학생 = 초등학교 + 생, an elementary-school student)',
          lines: [['grandma', '우리 손자는 지금 초등학생이에요. 내년에 ___에 가요.', 'My grandson is an elementary-school student now. Next year he goes to middle school.']],
          q: { type: 'fill', prompt: '“Next year he goes to middle school.”', ko: '내년에 ___에 가요.', ans: ['중학교'], units: ['중', '학', '교'], extra: ['고', '등', '초'], skill: 'l23.places',
            diag: [{ p: '고등학교', note: '고등학교 = high school. After elementary school comes middle school: 중학교.' }, { p: '중학꾜', note: 'Pronounced [중학꾜], written 중학교.' }],
            explain: '초등학교 (elementary) → 중학교 (middle) → 고등학교 (high school) → 대학교 (university).', en: 'Next year he goes to middle school.' } },
        { id: 'B7', time: '02:00', place: 'Coffee machine', narr: 'Mr. Kim is still proud of his daughter.',
          lines: [['taxi', '우리 딸은 대학교에서 물리학을 가르쳐요.', 'My daughter teaches physics at a university.']],
          q: { type: 'tiles', prompt: 'Ask: “Then is she a university professor?”', ans: ['그럼 대학교수예요?'], soft: [{ p: '(그럼 |그러면 |)(따님이 |딸이 |)대학교수(예요|세요|이세요)', note: 'Accepted.' }], extra: ['대학원생이에요?', '그런', '학자'], skill: 'l23.people',
            diag: [{ p: '(그럼 |)대학원생이에요', note: '대학원생 = a graduate student. Someone who teaches at a university = 대학교수.' }],
            explain: '대학교 (university) + 교수 (professor) = 대학교수. 그럼 = then (Lesson 15).', en: 'Then is she a university professor?' },
          after: [['taxi', '네! 학자예요, 학자!', 'Yes! She’s a scholar, a scholar!']] },
        { id: 'B8', time: '02:30', place: 'Front door', narr: 'The courier holds out his scanner. You have to type what is in the box.',
          q: { type: 'write', prompt: 'Write the word: school supplies; stationery', ans: ['학용품'], skill: 'l23.study',
            diag: [{ p: '학용픔', note: 'Spelling: 품 (goods), 학용품.' }, { p: '용품', note: '용품 = supplies. School supplies = 학 + 용품 = 학용품.' }],
            explain: 'Workbook 23: 학용품 = school supplies; stationery.', en: 'school supplies' },
          after: [['courier', '감사합니다! 다음 가게! 빨리 가야 돼요!', 'Thank you! Next store! I have to go quickly!']] },
        { id: 'B9', time: '03:30', place: 'Counter', narr: 'The officer is new in this area. (순찰 = patrol)',
          lines: [['police', '이 근처에 고등학교 있어요?', 'Is there a high school near here?']],
          q: { type: 'write', prompt: 'Answer: “Yes, there is a high school behind the store.”', ans: ['네, 가게 뒤에 고등학교가 있어요.'], soft: [{ p: '(네 |)(가게|편의점|마트) 뒤에 고등학교(가|) 있어요', note: 'Accepted.' }], skill: 'l23.places',
            diag: [{ p: '(네 |)(가게|편의점) 뒤에 (중학교|초등학교|대학교)(가|) 있어요', note: 'High school = 고등학교 (고등 = higher). 중학교 = middle school, 초등학교 = elementary, 대학교 = university.' }, { p: '(네 |)(가게|편의점) 뒤에서 고등학교(가|) 있어요', note: 'With 있다, use -에 (Lesson 3): 가게 뒤에.' }],
            explain: '뒤에 = behind (Lesson 3). 고등학교 = high school.', en: 'Yes, there is a high school behind the store.' } },
        { id: 'B10', time: '05:40', place: 'Counter', narr: 'The whiteboard is complete. Mr. Park reads it and smiles. (군대 = the army; 다녀오다 = to go and come back)',
          lines: [['boss', '현우가 오늘 학교에 가요. 이제 대학교 3학년이에요.', 'Hyunwoo goes to school today. Now he’s a third-year university student.']],
          q: { type: 'write', prompt: 'Ask Mr. Park: “Is Hyunwoo a returning student?”', ans: ['현우 씨가 복학생이에요?'], soft: [{ p: '(현우 씨(가|는) |현우(가|는) |)복학생이에요', note: 'Accepted.' }], skill: 'l23.people',
            diag: [{ p: '(현우 씨(가|는) |)전학생이에요', note: '전학생 = a student who moved to another school. Back to school after a long break = 복학생.' }, { p: '(현우 씨(가|는) |)유학생이에요', note: '유학생 = a student studying abroad. Returning student = 복 (return) + 학 + 생.' }, { p: '(현우 씨(가|는) |)보칵생이에요', note: 'Pronounced [보칵쌩], written 복학생.' }],
            explain: '복 (return) + 학 + 생 (person) = 복학생.', en: 'Is Hyunwoo a returning student?' },
          after: [['boss', '네! 군대 다녀와서 복학생이에요.', 'Yes! He went to the army and came back, so he’s a returning student.']],
          afterNarr: 'Ramyeon has also returned — from the ramen shelf to the whiteboard tray. A returning cat, with marker on his tail.' },
      ],
      cctv: [
        { id: 'B.c1', type: 'write', prompt: 'Write in Korean: school year', ans: ['학년'], skill: 'l23.study', diag: [{ p: '학기', note: '학기 = semester. School year = 학 + 년 (year).' }, { p: '항년', note: 'Pronounced [항년], written 학년.' }], explain: 'Textbook exercise 5: 학년 (學年).', en: 'school year' },
        { id: 'B.c2', type: 'write', prompt: 'Write in Korean: scholarship', ans: ['장학금'], skill: 'l23.study', diag: [{ p: '장학생', note: '장학생 = the student. Scholarship (money) = 장학금.' }], explain: 'Textbook exercise 3: 장학금 (奬學金).', en: 'scholarship' },
        { id: 'B.c3', type: 'write', prompt: 'Write in Korean: student', ans: ['학생'], skill: 'l23.people', diag: [{ p: '학자', note: '학자 = scholar. Student = 학 + 생.' }], explain: '학 + 생 (person, member, participant) = 학생.', en: 'student' },
        { id: 'B.c4', type: 'write', prompt: 'Write in Korean: private academy', ans: ['학원'], skill: 'l23.places', diag: [{ p: '학교', note: '학교 = school. A private academy = 학 + 원 (house) = 학원.' }, { p: '하권', note: 'Pronounced [하권], written 학원.' }], explain: 'Textbook: 학원 (學院).', en: 'private academy' },
        { id: 'B.c5', type: 'write', prompt: 'Write in Korean: mathematics', ans: ['수학'], skill: 'l23.study', diag: [{ p: '과학', note: '과학 = science. Numbers (수) + 학 = 수학.' }], explain: 'Textbook exercise 4: 수학 (數學).', en: 'mathematics' },
        { id: 'B.c6', type: 'write', prompt: 'Write in Korean: changing schools', ans: ['전학'], soft: [{ p: '전학하다', note: 'Accepted (전학하다 = to change schools). The key: 전학.' }], skill: 'l23.study', diag: [{ p: '전학생', note: '전학생 = the student who moved. Changing schools = 전학.' }, { p: '저낙', note: 'Pronounced [저낙], written 전학.' }], explain: 'Textbook exercise 2: 전학 (轉學).', en: 'changing schools' },
      ],
    },

    C: {
      title: 'The School-Trip Bus', sub: 'Mixed · optional', kind: 'mixed', fix: 'bookbox', optional: true,
      snack: { id: 'l23.snackC', ko: '수학여행 과자 세트', en: 'School-Trip Snack Pack', desc: 'Contains forty snacks and zero vegetables. Must be eaten on a bus, loudly.' },
      scenes: [
        { id: 'C1', time: '22:30', place: 'Counter', narr: 'Minji calls before her bus home.',
          lines: [['minji', '오늘 밤에 고등학생들이 와요! 수학여행 버스예요. 한 시쯤 올 거예요.', 'High-school students are coming tonight! It’s a school-trip bus. It’ll come around one o’clock.']],
          q: { type: 'enOpts', prompt: 'Who is coming tonight?', opts: ['High-school students on a school trip.', 'Math teachers on a trip.', 'University professors.', 'Students studying abroad.'], skill: 'l23.study',
            explain: '수학여행 = school trip (修學旅行: this 수 means “to cultivate”, not numbers like 수학, mathematics). 고등학생 = 고등학교 + 생.', en: 'High-school students are coming tonight! It’s a school-trip bus.' } },
        { id: 'C2', time: '23:00', place: 'Stockroom', narr: 'Behind the desk you find an old box of textbooks, sorted into four smaller boxes with labels.',
          q: { type: 'mc', prompt: 'Which box is for the middle-school books?', opts: ['중학교', '초등학교', '고등학교', '대학교'], skill: 'l23.places',
            explain: '중학교 = middle school; 초등학교 = elementary school; 고등학교 = high school; 대학교 = university.', en: '' } },
        { id: 'C3', time: '00:30', place: 'Front door', narr: 'Mr. Park texted: make a sign for the door. Students get 10% off tonight.',
          q: { type: 'fill', prompt: 'Write the sign: “Student discount!”', ko: '___ 할인!', ans: ['학생'], units: ['학', '생'], extra: ['자', '원', '교'], skill: 'l23.people',
            diag: [{ p: '학자', note: '학자 = scholar. Students = 학생.' }, { p: '학원', note: '학원 = private academy. Students = 학생.' }],
            explain: '학 + 생 (person) = 학생. 할인 = discount.', en: 'Student discount!' } },
        { id: 'C4', time: '01:10', place: 'Counter', narr: 'The bus arrives. Forty students run in. Grandma comes down in her slippers.',
          lines: [['grandma', '학생들이 왜 이렇게 많아요?', 'Why are there so many students?']],
          q: { type: 'tiles', prompt: 'Say: “They came on a school trip.”', ans: ['수학여행 왔어요.'], soft: [{ p: '(학생들이 |고등학생들이 |)수학여행(을|) 왔어요', note: 'Accepted.' }, { p: '(학생들이 |)수학 여행(을|) 왔어요', note: 'Accepted. 수학여행 is written as one word.' }], extra: ['수학', '갔어요.', '유학'], skill: 'l23.study',
            diag: [{ p: '(학생들이 |)유학 왔어요', note: '유학 = studying abroad. School trip = 수학여행.' }],
            explain: '수학여행 (오다/가다) = (to come/go on) a school trip.', en: 'They came on a school trip.' },
          after: [['grandma', '아이고, 그래서 이렇게 시끄러워요.', 'Oh my, that’s why it’s so noisy.']] },
        { id: 'C5', time: '01:30', place: 'Ramen shelf', narr: 'Ramyeon sleeps on a pile of flashcards a student dropped. You check them.',
          q: { type: 'odd', prompt: 'Which card is WRONG?', opts: ['과학 = mathematics', '수학 = mathematics', '어학 = language learning', '물리학 = physics'], skill: 'l23.study',
            explain: '과학 = science (과 = subject; class; species). Mathematics = 수학 (수 = numbers).', en: '' } },
        { id: 'C6', time: '02:00', place: 'Coffee machine', narr: 'Mr. Kim watches the bus through the window. (경주 = Gyeongju, an old city)',
          lines: [['taxi', '저도 옛날에 수학여행 갔어요. 경주에 갔어요. 정말 재미있었어요.', 'I went on a school trip long ago, too. I went to Gyeongju. It was really fun.']],
          q: { type: 'enOpts', prompt: 'What does Mr. Kim remember?', opts: ['His school trip to Gyeongju.', 'His math class in Gyeongju.', 'Studying abroad in Gyeongju.', 'Changing schools to Gyeongju.'], skill: 'l23.study',
            explain: '수학여행 = school trip.', en: 'I went on a school trip long ago, too.' } },
        { id: 'C7', time: '02:30', place: 'Front door', narr: 'The officer counts the students and asks you about the bus. (부산 = Busan)',
          lines: [['police', '이 학생들 학교가 어디예요?', 'Where is these students’ school?']],
          q: { type: 'write', prompt: 'Answer: “It’s a high school in Busan.” (= a high school that is in Busan)', ans: ['부산에 있는 고등학교예요.'], soft: [{ p: '부산(에 있는|) 고등학교예요', note: 'Accepted.' }], skill: 'l23.places',
            diag: [{ p: '부산에 있는 (중학교|대학교|초등학교)예요', note: 'They are 고등학생: high school = 고등학교.' }, { p: '부산에서 있는 고등학교예요', note: 'With 있다, use -에: 부산에 있는 (Lesson 3, 14).' }],
            explain: '부산에 있는 + noun (Lesson 14) + 고등학교예요.', en: 'It’s a high school in Busan.' } },
        { id: 'C8', time: '03:30', place: 'Counter', narr: 'The bus has left. The shelves are empty. Minji texts.',
          lines: [['minji', 'ㅋㅋ 저도 고등학교 때 수학여행 정말 재미있었는데…', 'lol, my school trip in high school was really fun too…']],
          q: { type: 'enOpts', prompt: 'What does Minji remember?', opts: ['Her school trip in high school was really fun.', 'She never went on a school trip.', 'She studied math in high school.', 'She changed high schools.'], skill: 'l23.study',
            explain: '고등학교 때 = when I was in high school. -었는데 (Lesson 21) leaves the sentence open, full of memories.', en: 'My school trip in high school was really fun too…' } },
        { id: 'C9', time: '04:30', place: 'Stockroom', narr: 'You tape the textbook box shut. On the side, Hyunwoo once wrote two words.',
          q: { type: 'enOpts', prompt: 'The label says “학교생활”. What is in the box?', opts: ['Things from school life', 'Things for a school trip', 'School-year reports', 'School supplies'], skill: 'l23.root',
            explain: 'Workbook 21: 학교생활 = school life (학교 + 생활, life).', en: '' } },
        { id: 'C10', time: '05:30', place: 'Counter', narr: 'Mr. Park looks at the empty snack shelf.',
          lines: [['boss', '어젯밤에 손님이 정말 많았어요? 누가 왔어요?', 'Were there really a lot of customers last night? Who came?']],
          q: { type: 'write', prompt: 'Answer: “High-school students came.”', ans: ['고등학생들이 왔어요.'], soft: [{ p: '(네 |)고등학생(들이|이|들) (많이 |)왔어요', note: 'Accepted.' }], skill: 'l23.people',
            diag: [{ p: '(네 |)고등학교(가|) 왔어요', note: '고등학교 is the school (a place). The people = 고등학교 + 생 = 고등학생(들).' }, { p: '(네 |)대학생(들이|이|) 왔어요', note: '대학생 = university students. These were 고등학생.' }],
            explain: '고등학교 + 생 = 고등학생 (high-school student).', en: 'High-school students came.' },
          after: [['boss', '고등학생들이요? 그래서 과자가 다 팔렸어요… 그래도 괜찮아요!', 'High-school students? That’s why all the snacks are sold out… still, that’s fine!']],
          afterNarr: 'In the morning light, Ramyeon sleeps in the box labelled 대학교. As far as he is concerned, he has graduated.' },
      ],
      cctv: [
        { id: 'C.c1', type: 'mc', prompt: '“school vacation”', opts: ['방학', '학기', '학년', '전학'], skill: 'l23.study', explain: '방 (to release, let go) + 학 = 방학.', en: '' },
        { id: 'C.c2', type: 'enOpts', prompt: '초등학교', opts: ['elementary school', 'middle school', 'high school', 'university'], skill: 'l23.places', explain: 'Workbook 2: 초등학교 = elementary school.', en: '' },
        { id: 'C.c3', type: 'write', prompt: 'Write in Korean: student on a scholarship', ans: ['장학생'], skill: 'l23.people', diag: [{ p: '장학금', note: '장학금 = the scholarship (money). The student = 장 + 학 + 생.' }], explain: 'Textbook: 장학생 (奬學生).', en: 'student on a scholarship' },
        { id: 'C.c4', type: 'enOpts', prompt: '“학생들 없는 일요일에 찍어요.”', opts: ['They film on Sundays when there are no students.', 'Students film on Sundays.', 'There is no school on Sunday.', 'They study on Sundays without teachers.'], skill: 'l23.people', explain: 'Textbook dialogue.', en: 'They film on Sundays when there are no students.' },
        { id: 'C.c5', type: 'mc', prompt: '“linguistics”', opts: ['언어학', '어학', '경제학', '과학'], skill: 'l23.study', explain: '언어 (word + word) + 학 = 언어학. 어학 = language learning.', en: '' },
        { id: 'C.c6', type: 'enOpts', prompt: 'In 방학 (school vacation), 방 means…', opts: ['to release, let go', 'room', 'to stay', 'to return'], skill: 'l23.root', explain: 'Textbook: 방 (to release, let go) + 학 = 방학.', en: '' },
      ],
    },
  },

  /* extra questions by skill: returned mistakes, Dawn Restock, store repairs, Rush Hour (rushPool: mc/enOpts only) */
  pool: [
    { id: 'p23.r1', type: 'enOpts', prompt: 'In 장학금 (scholarship), 금 means…', opts: ['money', 'person', 'year', 'school'], skill: 'l23.root', explain: 'Textbook: 장 (recommending) + 학 + 금 (money).', en: '' },
    { id: 'p23.r2', type: 'enOpts', prompt: 'In 학년 (school year), 년 means…', opts: ['year', 'period', 'person', 'house'], skill: 'l23.root', explain: 'Textbook: 학 + 년 (year).', en: '' },
    { id: 'p23.r3', type: 'enOpts', prompt: 'In 학기 (semester), 기 means…', opts: ['period', 'year', 'person', 'money'], skill: 'l23.root', explain: 'Textbook: 학 + 기 (period).', en: '' },
    { id: 'p23.r4', type: 'enOpts', prompt: 'In 학교 (school), 교 means…', opts: ['school', 'person', 'money', 'word'], skill: 'l23.root', explain: 'Textbook: 학 + 교 (school).', en: '' },
    { id: 'p23.r5', type: 'mc', prompt: 'Which word is 학 + 습 (acquire)?', opts: ['학습', '학생', '학자', '학원'], skill: 'l23.root', explain: '학습 = (formal) learning, studies. 한국어 학습 = Korean learning.', en: '' },
    { id: 'p23.p1', type: 'mc', prompt: '“student who moved to another school”', opts: ['전학생', '유학생', '복학생', '대학원생'], skill: 'l23.people', explain: '전학 (changing schools) + 생 = 전학생.', en: '' },
    { id: 'p23.p2', type: 'enOpts', prompt: '장학생', opts: ['student on a scholarship', 'scholarship', 'scholar', 'graduate student'], skill: 'l23.people', explain: '장 + 학 + 생 = 장학생. (장학금 = the scholarship itself.)', en: '' },
    { id: 'p23.p3', type: 'enOpts', prompt: '학자', opts: ['scholar', 'student', 'private academy', 'school year'], skill: 'l23.people', explain: '학 + 자 (person) = 학자.', en: '' },
    { id: 'p23.p4', type: 'odd', prompt: 'Which word is NOT a person?', opts: ['학년', '학생', '학자', '장학생'], skill: 'l23.people', explain: '학년 = school year. 생 and 자 make people.', en: '' },
    { id: 'p23.p5', type: 'enOpts', prompt: '대학교수', opts: ['university professor', 'graduate student', 'university', 'scholar'], skill: 'l23.people', explain: 'Workbook 1: 대학교수 = university professor.', en: '' },
    { id: 'p23.l1', type: 'mc', prompt: '“high school; senior high school”', opts: ['고등학교', '중학교', '초등학교', '대학교'], skill: 'l23.places', explain: 'Workbook 22: 고등학교.', en: '' },
    { id: 'p23.l2', type: 'enOpts', prompt: '대학교', opts: ['university, college', 'graduate school', 'high school', 'private academy'], skill: 'l23.places', explain: 'Workbook 13: 대학교 = university, college.', en: '' },
    { id: 'p23.l3', type: 'odd', prompt: 'Which word is NOT a place?', opts: ['학습', '학교', '학원', '중학교'], skill: 'l23.places', explain: '학습 = (formal) learning, studies. The others are places.', en: '' },
    { id: 'p23.l4', type: 'enOpts', prompt: '학원 = 학 + 원 (house; garden). It is…', opts: ['a private academy', 'a school vacation', 'a scholar', 'a semester'], skill: 'l23.places', explain: 'Textbook: 학원 (學院) = private academy.', en: '' },
    { id: 'p23.s1', type: 'mc', prompt: '“semester”', opts: ['학기', '학년', '방학', '학습'], skill: 'l23.study', explain: '학 + 기 (period) = 학기.', en: '' },
    { id: 'p23.s2', type: 'enOpts', prompt: '독학', opts: ['self-study, studying by oneself', 'studying abroad', 'school vacation', 'linguistics'], skill: 'l23.study', explain: '독 (alone) + 학 = 독학.', en: '' },
    { id: 'p23.s3', type: 'mc', prompt: '“science”', opts: ['과학', '수학', '어학', '경제학'], skill: 'l23.study', explain: '과 (subject; class; species) + 학 = 과학.', en: '' },
    { id: 'p23.s4', type: 'enOpts', prompt: '유학', opts: ['studying abroad', 'changing schools', 'self-study', 'school trip'], skill: 'l23.study', explain: '유 (to stay) + 학 = 유학.', en: '' },
    { id: 'p23.s5', type: 'enOpts', prompt: '한국어 학습', opts: ['(formal) Korean learning', 'a Korean scholar', 'a Korean school', 'Korean linguistics'], skill: 'l23.study', explain: 'Textbook: 한국어 학습 (韓國語 學習).', en: '' },
    { id: 'p23.s6', type: 'enOpts', prompt: '수학여행', opts: ['school trip', 'math class', 'studying abroad', 'school vacation'], skill: 'l23.study', explain: 'Workbook 8: 수학여행 (修學旅行) = school trip. Not the 수 of 수학 (數學), mathematics.', en: '' },
  ],

  /* Shelf Stocking: no forms table → these words */
  vocab: [
    { ko: '학생', en: 'student' }, { ko: '학교', en: 'school' }, { ko: '학원', en: 'private academy' },
    { ko: '수학', en: 'mathematics' }, { ko: '과학', en: 'science' }, { ko: '어학', en: 'language learning' },
    { ko: '언어학', en: 'linguistics' }, { ko: '경제학', en: 'economics' }, { ko: '학자', en: 'scholar' },
    { ko: '유학', en: 'studying abroad' }, { ko: '유학생', en: 'student studying abroad' }, { ko: '전학', en: 'changing schools' },
    { ko: '전학생', en: 'student who moved to another school' }, { ko: '학년', en: 'school year' }, { ko: '학기', en: 'semester' },
    { ko: '방학', en: 'school vacation' }, { ko: '장학금', en: 'scholarship' }, { ko: '장학생', en: 'student on a scholarship' },
    { ko: '복학생', en: 'student back at school after a long break' }, { ko: '학습', en: '(formal) learning, studies' }, { ko: '독학', en: 'self-study' },
    { ko: '대학교수', en: 'university professor' }, { ko: '초등학교', en: 'elementary school' }, { ko: '생명과학', en: 'life science' },
    { ko: '수학여행', en: 'school trip' }, { ko: '지구과학', en: 'earth science' }, { ko: '대학교', en: 'university, college' },
    { ko: '물리학', en: 'physics' }, { ko: '대학원생', en: 'graduate student' }, { ko: '학교생활', en: 'school life' },
    { ko: '고등학교', en: 'high school' }, { ko: '학용품', en: 'school supplies; stationery' }, { ko: '중학교', en: 'middle school' },
  ],
  grp: {},
  examples: {
    '학생': ['학생들 없는 일요일에 찍어요.', 'They film on Sundays when there are no students. (textbook dialogue)'],
    '학교': ['저 드라마 저희 학교에서 찍고 있어요.', 'That drama is set in my school. (textbook dialogue)'],
    '학원': ['학 + 원 (house; garden) = 학원', 'private academy'],
    '수학': ['수 (numbers) + 학 = 수학', 'mathematics'],
    '과학': ['과 (subject; class; species) + 학 = 과학', 'science'],
    '어학': ['어 (word) + 학 = 어학', 'language learning'],
    '언어학': ['언어 (word + word) + 학 = 언어학', 'linguistics'],
    '경제학': ['경제 (economy) + 학 = 경제학', 'economics'],
    '학자': ['학 + 자 (person) = 학자', 'scholar'],
    '유학': ['유 (to stay) + 학 = 유학', 'studying abroad; staying abroad to study'],
    '유학생': ['유학 + 생 = 유학생', 'student studying abroad'],
    '전학': ['전 (to roll, move) + 학 = 전학', 'to change schools'],
    '전학생': ['오늘 학교에 전학생이 왔어요.', 'Today a new student came (from another school) to our school. (WB dictation)'],
    '학년': ['학 + 년 (year) = 학년', 'school year'],
    '학기': ['학 + 기 (period) = 학기', 'semester'],
    '방학': ['방 (to release, let go) + 학 = 방학', 'school vacation'],
    '장학금': ['장 (recommending) + 학 + 금 (money) = 장학금', 'scholarship'],
    '장학생': ['장 + 학 + 생 = 장학생', 'student on a scholarship'],
    '복학생': ['복 (return) + 학 + 생 = 복학생', 'student who has returned to school (usually) after a long break'],
    '학습': ['한국어 학습', '(formal) Korean learning'],
    '독학': ['독 (alone) + 학 = 독학', 'self-study, studying by oneself'],
    '대학교수': ['대학교 + 교수 = 대학교수', 'university professor (WB 1)'],
    '초등학교': ['초등학교 → 중학교 → 고등학교 → 대학교', 'elementary → middle → high school → university'],
    '생명과학': ['생명 (life) + 과학 = 생명과학', 'life science (WB 3)'],
    '수학여행': ['수학여행은 언제 가요?', 'When do you go on a school trip? (WB dictation)'],
    '지구과학': ['지구 (the earth) + 과학 = 지구과학', 'earth science (WB 9)'],
    '대학교': ['대학교 + 교수 = 대학교수', 'university + professor = university professor'],
    '물리학': ['물리 (physics, the laws of things) + 학 = 물리학', 'physics (WB 17)'],
    '대학원생': ['대학원 (graduate school) + 생 = 대학원생', 'graduate student (WB 20)'],
    '학교생활': ['학교 + 생활 (life) = 학교생활', 'school life (WB 21)'],
    '고등학교': ['초등학교 → 중학교 → 고등학교', 'elementary → middle → high school'],
    '학용품': ['학 + 용품 (supplies) = 학용품', 'school supplies; stationery (WB 23)'],
    '중학교': ['중 (middle) + 학교 = 중학교', 'middle school; junior high school (WB 24)'],
  },
};
/* word answers: a one-jamo slip can be another word (학기 / 학게…); the core lenient check already skips words under 4 syllables,
   so only switch it off for the longer word answers */
(() => {
  const G = MM.game[23], off = q => { if (q && q.ans && q.lenient === undefined) q.lenient = false; };
  Object.values(G.shifts).forEach(sh => { sh.scenes.forEach(s => off(s.q)); sh.cctv.forEach(off); });
  G.pool.forEach(off);
})();

/* ---- src/l23/mnemo_L23.js ---- */
/* GENERATED by tools/mnemo_build.js from mnemo/korean3-mnemo.json. Do not edit by hand. */
MM.mnemo[23] = {"cards":[{"id":"ko-k3-0387","w":"학원","cs":"soukromá škola, kurzy (hagwon)","en":"private academy","p":"n","o":"s","rz":["학 + 원 = 학원","učení + ústav = soukromá škola"],"h":"학 = učení (HAK ≈ HÁK, na který si věšíš znalosti; jako v 학교) + 원 ≈ WON: za učení platíš wony = soukromé kurzy.","m":"學 učení + 院 ústav = učební ústav. Odpolední soukromé kurzy, kam chodí většina korejských dětí.","r":["hak-學","won-院"]},{"id":"ko-k3-0388","w":"수학","cs":"matematika","en":"mathematics","p":"n","o":"s","rz":["수 + 학 = 수학","수 (čísla, počet) + 학 (učení, věda) = matematika"],"h":"SU ≈ SUMA: sumy a čísla + 학 = učení → matematika.","m":"數 počet, číslo + 學 učení, věda = věda o číslech, tedy matematika. Kořen 學 najdeš u většiny školních oborů (과학, 문학).","r":["su-數","hak-學"]},{"id":"ko-k3-0389","w":"과학","cs":"věda; přírodní vědy","en":"science","p":"n","o":"s","rz":["과 + 학 = 과학","과 (obor, odvětví) + 학 (učení, věda) = věda"],"h":"KWA ≈ KVASINKY: pokusy s kvasinkami + 학 = učení → věda.","m":"科 obor, odvětví + 學 učení, věda = věda (zejména přírodní vědy). Stejný kořen 科 je i ve slově 교과서 (učebnice).","r":["gwa-科","hak-學"]},{"id":"ko-k3-0390","w":"어학","cs":"studium jazyků; praktická jazykověda","en":"language learning","p":"n","o":"s","rz":["어 + 학 = 어학","어 (jazyk, slovo) + 학 (učení, věda) = studium jazyků"],"h":"어 = jazyk (jako v 한국어) + 학 = učení → studium jazyků.","m":"語 jazyk, řeč + 學 učení, studium = studium cizích jazyků. Stejné 語 je v 한국어 (korejština) nebo 단어 (slovíčko). Na rozdíl od teoretické lingvistiky (언어학) označuje praktické učení jazyků.","r":["eo-語","hak-學"]},{"id":"ko-k3-0391","w":"언어학","cs":"lingvistika; jazykověda","en":"linguistics","p":"n","o":"s","rz":["언어 + 학 = 언어학","언어 (jazyk, řeč) + 학 (učení, věda) = lingvistika"],"h":"언어 = jazyk (O-NO ≈ „ONO mluví!“) + 학 = učení → lingvistika.","m":"言 slovo + 語 jazyk + 學 věda = věda o jazyce, tedy lingvistika. Samotné 언어 znamená ‚jazyk, řeč‘ jako komunikační systém.","r":["eon-言","eo-語","hak-學"]},{"id":"ko-k3-0392","w":"경제학","cs":"ekonomie; ekonomická věda","en":"economics","p":"n","o":"s","rz":["경제 + 학 = 경제학","경제 (ekonomika, hospodářství) + 학 (učení, věda) = ekonomie"],"h":"KJONG-DŽE ≈ KONTO: peníze na kontě + 학 = učení → ekonomie.","m":"經 vést, spravovat + 濟 pomoci, zaopatřit + 學 věda = věda o hospodaření, tedy ekonomie. Samotné 경제 znamená ‚ekonomika, hospodářství‘.","r":["gyeong-經","je-濟","hak-學"]},{"id":"ko-k3-0393","w":"학자","cs":"učenec; vědec; badatel","en":"scholar","p":"n","o":"s","rz":["학 + 자 = 학자","학 (učení, věda) + 자 (osoba) = učenec, vědec"],"h":"학 = učení + DŽA ≈ JÁ (člověk): já, učený člověk = učenec.","m":"學 učení, věda + 者 osoba = člověk věnující se vědě, tedy učenec nebo badatel. Koncovka 者 označuje osoby i ve slovech 과학자 (vědec) nebo 환자 (pacient).","r":["hak-學","ja-者"]},{"id":"ko-k3-0394","w":"유학","cs":"studium v zahraničí","en":"studying abroad","p":"n","o":"s","rz":["유 + 학 = 유학","pobývat + učení = studium v zahraničí"],"h":"JU ≈ „JUCHŮ!“: juchů, jedu studovat do ciziny! + 학 = učení.","m":"留 pobývat + 學 učení = pobývat jinde kvůli studiu. 유학 가다 = jet studovat do zahraničí, 유학생 = zahraniční student.","hada":1,"r":["yu-留","hak-學"]},{"id":"ko-k3-0395","w":"유학생","cs":"zahraniční student; student na studijním pobytu v cizině","en":"student studying abroad","p":"n","o":"s","rz":["유학 + 생 = 유학생","유학 (studium v zahraničí) + 생 (student) = zahraniční student"],"h":"유학 („JUCHŮ“ do ciziny) + 생 = student (jako v 학생).","m":"留 pobývat (v cizině) + 學 studovat + 生 student = student pobývající na studiích v zahraničí. Samotné 유학 znamená ‚studium v zahraničí‘ (유학 가다).","r":["yu-留","hak-學","saeng-生"]},{"id":"ko-k3-0396","w":"전학","cs":"přestup na jinou školu","en":"changing schools","p":"n","o":"s","rz":["전 + 학 = 전학","전 (přesunout, obrátit) + 학 (škola) = přestup na jinou školu"],"h":"DŽON ≈ JOHNNY: Johnny přestoupil + 학 = učení → přestup na jinou školu.","m":"轉 přesunout, změnit směr + 學 škola = přesun na jinou školu. Časté vazby: 전학(을) 가다 (přestoupit na jinou školu), 전학(을) 오다 (přijít z jiné školy).","hada":1,"r":["jeon-轉","hak-學"]},{"id":"ko-k3-0397","w":"전학생","cs":"přestoupivší student; nový žák z jiné školy","en":"student who moved to another school","p":"n","o":"s","ex":"오늘 학교에 전학생이 왔어요.","exc":"Dnes k nám do školy přišel nový student z jiné školy. (에 → kam; 이 → 1. pád)","h":"전학 (JOHNNY přestoupil) + 생 = student → nový žák z jiné školy.","m":"轉 přesunout + 學 škola + 生 student = student, který přestoupil z jiné školy. Spojení 전학 (přestup) + 학생 (student).","r":["jeon-轉","hak-學","saeng-生"]},{"id":"ko-k3-0398","w":"학년","cs":"ročník (ve škole); školní rok","en":"school year","p":"n","o":"s","rz":["학 + 년 = 학년","학 (škola) + 년 (rok) = ročník (ve škole)"],"h":"학 = učení + 년 = rok (NJON ≈ jako v 내년): školní rok, ročník.","m":"學 škola + 年 rok = školní ročník. Vyslovuje se [항년] (ㄱ před ㄴ se mění na ㅇ). Používá se se sinokorejskými číslovkami: 1학년 = první ročník.","r":["hak-學","nyeon-年"]},{"id":"ko-k3-0399","w":"학기","cs":"semestr; pololetí","en":"semester","p":"n","o":"s","rz":["학 + 기 = 학기","학 (škola) + 기 (období) = semestr, pololetí"],"h":"HAK-KI ≈ HÁKY: dva háky = dvě pololetí. Semestr.","m":"學 škola + 期 období = školní období, tedy semestr nebo pololetí. V Koreji se dělí na 1학기 (jarní/první semestr) a 2학기 (podzimní/druhý semestr).","r":["hak-學","gi-期"]},{"id":"ko-k3-0400","w":"방학","cs":"školní prázdniny","en":"school vacation","p":"n","o":"s","rz":["방 + 학 = 방학","방 (pustit, uvolnit) + 학 (učení, škola) = školní prázdniny"],"h":"PANG ≈ PRÁSK: práskneš učebnicí + 학 = učení → prázdniny!","m":"放 pustit, uvolnit + 學 učení = uvolnění ze školy, tedy prázdniny. Používá se jen pro školní prázdniny (여름방학 = letní prázdniny); pro dovolenou v práci se říká 휴가.","hada":1,"r":["bang-放","hak-學"]},{"id":"ko-k3-0401","w":"장학생","cs":"stipendista; student pobírající stipendium","en":"student on a scholarship","p":"n","o":"s","rz":["장 + 학 + 생 = 장학생","장 (odměna, podpora) + 학 (učení) + 생 (student) = stipendista"],"h":"장학금 = stipendium + 생 = student → stipendista.","m":"獎 odměna, povzbuzení + 學 učení + 生 student = student podporovaný za studijní výsledky, tedy stipendista. Od stejného základu je 장학금 (stipendium).","r":["jang-獎","hak-學","saeng-生"]},{"id":"ko-k3-0402","w":"복학생","cs":"student vracející se ke studiu po přerušení","en":"student back at school after a long break","p":"n","o":"s","rz":["복 + 학 + 생 = 복학생","복 (vrátit se) + 학 (studium) + 생 (student) = student vracející se po přerušení studia"],"h":"POK ≈ POKRAČUJE: zase pokračuje + 학생 = student → vrací se ke studiu.","m":"復 vrátit se + 學 studium + 生 student = student, který se vrátil do školy po delší pauze (v Koreji nejčastěji po povinné vojenské službě). Opak k přerušení studia: 휴학 (休 odpočinek + 學).","r":["bok-復","hak-學","saeng-生"]},{"id":"ko-k3-0403","w":"학습","cs":"učení; studium; osvojování si znalostí","en":"(formal) learning, studies","p":"n","o":"s","ex":"한국어 학습","exc":"studium korejštiny","h":"학 = učení + SŮP ≈ SUP: sup se učí lovit → učení, osvojování.","m":"學 učit se + 習 cvičit, procvičovat = učení a procvičování, tedy studium (formálnější než běžné 공부). Stejné 習 je i ve slově 복습 (opakování učiva) nebo 연습 (cvičení).","hada":1,"r":["hak-學","seup-習"]},{"id":"ko-k3-0404","w":"독학","cs":"samostudium","en":"self-study","p":"n","o":"s","rz":["독 + 학 = 독학","독 (sám) + 학 (učení) = samostudium"],"h":"TOK ≈ DOKONCE SÁM: dokonce sám + 학 = učení → samostudium.","m":"獨 sám + 學 učit se = učit se sám, tedy samostudium. Vazba: 독학으로 배우다 = naučit se něco samostudiem.","hada":1,"r":["dok-獨","hak-學"]},{"id":"ko-k3-0405","w":"대학교수","cs":"vysokoškolský profesor","en":"university professor","p":"n","o":"s","rz":["대학교 + 교수 = 대학교수","대학교 (univerzita) + 교수 (profesor) = vysokoškolský profesor"],"h":"대학교 = univerzita + 교수 = profesor (KJO-SU ≈ „KDO SU? Profesor!“).","m":"大 velký + 學 učení (univerzita) + 敎 učit + 授 předávat (profesor) = univerzitní profesor. Oslovení profesora na univerzitě: 교수님.","r":["dae-大","hak-學","gyo-敎","su-授"]},{"id":"ko-k3-0406","w":"초등학교","cs":"základní škola (1. stupeň)","en":"elementary school","p":"n","o":"s","rz":["초등학교 → 중학교 → 고등학교 → 대학교","základní škola (1. stupeň) → 2. stupeň → střední škola → univerzita"],"h":"ČO-DŮNG ≈ ČUDLÍK: malé děti mačkají čudlíky + 학교 = škola → základní škola.","m":"初 počáteční, první + 等 stupeň + 學 učení + 校 škola = škola prvního stupně, tedy základní škola (v Koreji 1.–6. třída). Žák základní školy je 초등학생.","r":["cho-初","deung-等","hak-學","gyo-校"]},{"id":"ko-k3-0407","w":"생명과학","cs":"vědy o živé přírodě; biologické vědy","en":"life science","p":"n","o":"s","rz":["생명 + 과학 = 생명과학","생명 (život) + 과학 (věda) = vědy o živé přírodě"],"h":"생명 = život (SENG-MJONG ≈ SEN MNOHA ŽIVOTŮ) + 과학 = věda (KVASINKY).","m":"生 život + 命 život, bytí + 科 obor + 學 věda = vědy zkoumající živé organismy (biologie, genetika apod.). Samotné 생명 znamená ‚život‘.","r":["saeng-生","myeong-命","gwa-科","hak-學"]},{"id":"ko-k3-0408","w":"수학여행","cs":"školní výlet","en":"school trip","p":"n","o":"s","ex":"수학여행은 언제 가요?","exc":"Kdy jedete na školní výlet? (은 → téma)","h":"수학 + 여행 = výlet („JO, HEJ!“). Zní stejně jako 수학 = matematika, ale tady je to „učení na cestách“.","m":"修 cvičit + 學 učení + 旅行 cesta = výlet na „doučení se“. Pozor: 수 tu není 數 jako v 수학 (matematika).","r":["su-修","hak-學","yeo-旅","haeng-行"]},{"id":"ko-k3-0409","w":"지구과학","cs":"vědy o Zemi; geovědy","en":"earth science","p":"n","o":"s","rz":["지구 + 과학 = 지구과학","지구 (zeměkoule, Země) + 과학 (věda) = vědy o Zemi"],"h":"지구 = Země (DŽI-GU ≈ ŽIGULÍK: v žigulíku objedeš Zemi) + 과학 = věda.","m":"地 země + 球 koule (zeměkoule) + 科 obor + 學 věda = vědy o Zemi (geologie, meteorologie, astronomie). Samotné 지구 znamená ‚planeta Země‘.","r":["ji-地","gu-球","gwa-科","hak-學"]},{"id":"ko-k3-0410","w":"대학교","cs":"univerzita; vysoká škola","en":"university, college","p":"n","o":"s","rz":["대학교 + 교수 = 대학교수","대학교 (univerzita) + 교수 (profesor) = vysokoškolský profesor"],"h":"대학 (TĚŽKÁ vysoká) + 교 = škola (jako v 학교) → univerzita.","m":"大 velký + 學 učení + 校 škola = ‚velká škola‘, tedy univerzita. Zkráceně se často říká jen 대학, vysokoškolák je 대학생.","r":["dae-大","hak-學","gyo-校"]},{"id":"ko-k3-0411","w":"물리학","cs":"fyzika","en":"physics","p":"n","o":"s","rz":["물리 + 학 = 물리학","물리 (fyzika, zákony hmoty) + 학 (učení, věda) = fyzika"],"h":"MUL-LI ≈ MLÝN: mlýnské kolo – fyzika v praxi. + 학 = učení.","m":"物 věc, hmota + 理 princip, zákonitost + 學 věda = věda o zákonitostech hmoty, tedy fyzika. Samotné 물리 se používá jako zkrácený název předmětu fyzika.","r":["mul-物","ri-理","hak-學"]},{"id":"ko-k3-0412","w":"대학원생","cs":"postgraduální student; doktorand","en":"graduate student","p":"n","o":"s","rz":["대학원 + 생 = 대학원생","대학원 (postgraduální studium) + 생 (student) = postgraduální student"],"h":"대학원 = postgraduální studium (대학 + 원 ≈ WON: platíš ještě víc) + 생 = student.","m":"大 velký + 學 učení + 院 ústav (postgraduální škola) + 生 student = student navazujícího magisterského nebo doktorského studia. Samotné 대학원 znamená ‚postgraduální studium / fakulta‘.","r":["dae-大","hak-學","won-院","saeng-生"]},{"id":"ko-k3-0413","w":"학교생활","cs":"školní život","en":"school life","p":"n","o":"s","rz":["학교 + 생활 = 학교생활","학교 (škola) + 생활 (život) = školní život"],"h":"학교 = škola + 생활 = život (SENG-HWAL ≈ SEN A HVAL): školní život.","m":"學 učení + 校 škola + 生 život + 活 činnost, žít = život ve škole. Stejné 생활 najdeš i ve slově 직장생활 (pracovní život) nebo 일상생활 (každodenní život).","r":["hak-學","gyo-校","saeng-生","hwal-活"]},{"id":"ko-k3-0414","w":"고등학교","cs":"střední škola (vyšší stupeň)","en":"high school","p":"n","o":"s","rz":["초등학교 → 중학교 → 고등학교","základní škola (1. stupeň) → 2. stupeň → střední škola"],"h":"KO-DŮNG ≈ „KDO DUNÍ?“: velcí kluci dupou po chodbě + 학교 = škola → střední škola.","m":"高 vysoký + 等 stupeň + 學 učení + 校 škola = škola vyššího stupně, tedy střední škola (v Koreji 3 roky, věk 16–18 let). Zkráceně se říká 고교, středoškolák je 고등학생.","r":["go-高","deung-等","hak-學","gyo-校"]},{"id":"ko-k3-0415","w":"학용품","cs":"školní potřeby; psací potřeby","en":"school supplies; stationery","p":"n","o":"s","rz":["학 + 용품 = 학용품","학 (škola, učení) + 용품 (potřeby, zboží) = školní potřeby"],"h":"학 = učení + 용품 = potřeby (JONG-PUM ≈ „JO, PUMA!“ na penálu): školní potřeby.","m":"學 učení, škola + 用 použít + 品 výrobek, věc = věci používané ke studiu, tedy školní potřeby. Vyslovuje se [하굥품].","r":["hak-學","yong-用","pum-品"]},{"id":"ko-k3-0416","w":"중학교","cs":"druhý stupeň základní školy; nižší střední škola","en":"middle school","p":"n","o":"s","rz":["중 + 학교 = 중학교","중 (střední) + 학교 (škola) = druhý stupeň základní školy"],"h":"중 = střední (DŽUNG ≈ DŽUNGLE uprostřed) + 학교: prostřední škola. Pořadí: 초등학교 → 중학교 → 고등학교.","m":"中 střed + 學 učení + 校 škola = ‚střední škola‘ mezi prvním stupněm (초등학교) a gymnáziem/střední školou (고등학교), v Koreji odpovídá 7.–9. třídě. Žák je 중학생.","r":["jung-中","hak-學","gyo-校"]}],"gram":{"id":"ko-k3-g23","w":"학 (學)","en":"Word Builder 1","cs":"slovotvorný kořen 학 (學) – učení, studium, škola","vy":"Sinokorejský kořen 학 (學) nese základní význam ‚učení, studium, věda‘ nebo ‚škola‘ a tvoří základ desítek běžných korejských slov. Spojením s dalšími kořeny vznikají výrazy související se vzděláváním, například 학생 (student), 학교 (škola), 유학 (studium v zahraničí) nebo 방학 (školní prázdniny). Znalost tohoto kořene usnadňuje odhadování významu nových slovíček.","m":"Když v korejském slově slyšíš slabiku 학, téměř vždy se týká školy, studia nebo vědy: 학교 (škola), 학생 (student), 독학 (samostudium = ‚sám + učení‘), 장학금 (stipendium = ‚podpora + učení + peníze‘).","s":[["학 (學)","kořen 학 (學) souvisí s ‚učením‘, ‚studiem‘ a ‚školou‘"],["학 + 생 = 학생","učení + člověk (člen) = student"],["학 + 교 = 학교","učení + škola = škola"],["학 + 자 = 학자","učení + osoba = učenec, vědec"],["유 + 학 = 유학","pobývat + učení = studium v zahraničí"],["전 + 학 = 전학","přesunout se + učení = přestoupit na jinou školu"],["방 + 학 = 방학","uvolnit, pustit + učení = školní prázdniny"],["장 + 학 + 금 = 장학금","doporučit/podpořit + učení + peníze = stipendium"],["복 + 학 + 생 = 복학생","vrátit se + učení + člověk = student vracející se do školy po delší pauze (např. po vojně)"],["독 + 학 = 독학","sám + učení = samostudium"],["저 드라마 저희 학교에서 찍고 있어요.","Ten seriál natáčejí u nás ve škole."],["학생들 없는 일요일에 찍어요.","Natáčejí v neděli, kdy tam nejsou studenti."],["오늘 학교에 전학생이 왔어요.","Dneska k nám do školy přišel nový student (přestoupil z jiné školy)."],["수학여행은 언제 가요?","Kdy jedete na školní výlet?"],["수학 (數學) · 수학여행 (修學旅行)","matematika (數學) · školní výlet (修學旅行) — dvě různé slabiky 수"]]}};
Object.assign(MM.mnRoots, {"hak-學":["학","學","učení, škola"],"won-院":["원","院","ústav, instituce"],"su-數":["수","數","počet"],"gwa-科":["과","科","obor, oddělení"],"eo-語":["어","語","jazyk, řeč"],"eon-言":["언","言","slovo, řeč"],"gyeong-經":["경","經","projít; vést"],"je-濟":["제","濟","pomoci, přejít (řeku)"],"ja-者":["자","者","osoba"],"yu-留":["유","留","zůstat, pobývat"],"saeng-生":["생","生","život, žít"],"jeon-轉":["전","轉","otáčet, obracet"],"nyeon-年":["년","年","rok (čtení 년)"],"gi-期":["기","期","období, lhůta"],"bang-放":["방","放","pustit, vysílat"],"jang-獎":["장","獎","odměna, povzbudit"],"bok-復":["복","復","znovu, vrátit se"],"seup-習":["습","習","cvičit, učit se"],"dok-獨":["독","獨","sám, jediný"],"dae-大":["대","大","velký"],"gyo-敎":["교","敎","učit"],"su-授":["수","授","předávat, vyučovat"],"cho-初":["초","初","začátek, první"],"deung-等":["등","等","stupeň, třída"],"gyo-校":["교","校","škola"],"myeong-命":["명","命","život, osud, rozkaz"],"su-修":["수","修","cvičit, zdokonalovat"],"yeo-旅":["여","旅","cesta, cestovat"],"haeng-行":["행","行","jít, konat"],"ji-地":["지","地","země, místo"],"gu-球":["구","球","koule"],"mul-物":["물","物","věc"],"ri-理":["리","理","uspořádat, princip"],"hwal-活":["활","活","činnost, žít"],"go-高":["고","高","vysoký"],"yong-用":["용","用","použít"],"pum-品":["품","品","věc, výrobek"],"jung-中":["중","中","střed, Čína"]});

/* ---- src/l23/reads_L23.js ---- */
/* reads_L23.js — Staff Group Chat + Neighborhood Notice Board for Lesson 23 (Word Builder 학).
   {form|lemma} marks a word outside the lesson; tapping it shows gloss[lemma].
   App-written texts (NOT yet checked by a native speaker). */
MM.reads[23] = [
  {
    id: 'l23.chat', kind: 'chat', title: 'Staff group chat', titleKo: '달빛마트 직원방',
    reward: { id: 'l23.sticker', ko: '학생증 스티커', en: 'Student-ID sticker', desc: 'Name: 라면. Major: sleeping. Year: forever.' },
    lines: [
      { who: 'boss', ko: '현우가 오늘 학교에 갔어요. {복학|복학} 첫날이에요!', en: 'Hyunwoo went to school today. It’s his first day back!' },
      { who: 'minji', ko: '와! 현우 씨는 몇 학년이에요?', en: 'Wow! What year is Hyunwoo in?' },
      { who: 'boss', ko: '3학년이에요. 경제학을 공부해요.', en: 'He’s in third year. He studies economics.' },
      { who: 'minji', ko: '경제학이요? 어려울 것 같아요.', en: 'Economics? Sounds difficult.' },
      { who: 'boss', ko: '그래서 이번 방학에 학원에도 {다녔어요|다니다}.', en: 'That’s why he also went to an academy this vacation.' },
      { who: 'minji', ko: 'ㅋㅋ 그럼 이번 학기에 장학금 받을 수도 있어요!', en: 'lol, then he might get a scholarship this semester!' },
      { who: 'boss', ko: '장학금 받으면 저한테 커피 사야 돼요.', en: 'If he gets a scholarship, he has to buy me a coffee.' },
    ],
    gloss: { '복학': 'returning to school (복 return + 학); 복학생 = a returning student', '다니다': 'to go (regularly), to attend' },
    qs: [
      { id: 'r23c.q1', type: 'enOpts', prompt: 'What does Hyunwoo study?', opts: ['Economics.', 'Mathematics.', 'Physics.', 'Linguistics.'], explain: '경제학을 공부해요.' },
      { id: 'r23c.q2', type: 'enOpts', prompt: 'What did Hyunwoo do during the vacation?', opts: ['He went to a private academy.', 'He studied abroad.', 'He changed schools.', 'He went on a school trip.'], explain: '이번 방학에 학원에도 다녔어요.' },
      { id: 'r23c.q3', type: 'enOpts', prompt: 'What does Minji think might happen?', opts: ['Hyunwoo might get a scholarship.', 'Hyunwoo might change schools.', 'Hyunwoo might become a professor.', 'Hyunwoo might stop studying.'], explain: '장학금 받을 수도 있어요 (might, Lesson 22).' },
    ],
  },
  {
    id: 'l23.board', kind: 'board', title: 'Neighborhood notice board', titleKo: '동네 게시판',
    reward: { id: 'l23.notice', ko: '한국어 학습 모임 이름표', en: 'Study-group name tag', desc: 'Hello, my name is ___. (Fill in your name. In Korean, please.)' },
    heading: '한국어 학습 {모임|모임}',
    lines: [
      { ko: '우리 동네에는 대학교가 있어요. 그래서 유학생이 많아요.', en: 'There is a university in our neighborhood. So there are a lot of international students.' },
      { ko: '매주 토요일 오후 세 시에 도서관에서 만나요.', en: 'We meet every Saturday at 3 p.m. at the library.' },
      { ko: '독학은 어려워요. 같이 공부하면 더 재미있어요!', en: 'Self-study is difficult. If we study together, it’s more fun!' },
      { ko: '유학생, 대학원생, 대학교수… 다 괜찮아요.', en: 'International students, graduate students, professors… everyone is welcome.' },
      { ko: '학원은 비싸요? 여기는 {무료|무료}예요!', en: 'Academies are expensive? Here it’s free!' },
    ],
    gloss: { '모임': 'a meeting, a group (that meets)', '무료': 'free (of charge)' },
    qs: [
      { id: 'r23b.q1', type: 'enOpts', prompt: 'Why are there many international students in the neighborhood?', opts: ['There is a university.', 'There is a private academy.', 'There is a high school.', 'The library is free.'], explain: '대학교가 있어요. 그래서 유학생이 많아요.' },
      { id: 'r23b.q2', type: 'enOpts', prompt: 'What does the notice say about self-study?', opts: ['It’s difficult; studying together is more fun.', 'It’s the best way to learn.', 'It’s free.', 'It’s only for professors.'], explain: '독학은 어려워요. 같이 공부하면 더 재미있어요!' },
      { id: 'r23b.q3', type: 'enOpts', prompt: 'How much does the group cost?', opts: ['Nothing — it’s free.', 'The same as an academy.', 'A little, every Saturday.', 'It isn’t written.'], explain: '여기는 무료예요!' },
    ],
  },
];

/* ---- src/l23/textbook_L23.js ---- */
/* textbook_L23.js — Korean 3, Lesson 23 (textbook p.146–150, answers p.198–199). Word Builder 1: 학 (學). Romanization removed.
   The PDF text layer garbles the keyword on p.146 (“೟”) → restored as 학 from the page.
   Track 45 = the keyword and the word list, each read twice (5.5–46.8 s); per-word clips found by silence detection + ASR
   (sherpa-onnx Whisper base). It does not read the parts (학 + 생 …), only the words. Track 46 = dialogue.
   New block type 'words' (tb.js wordsHtml): parts · word + hanja · English, shown openly (the book prints them). */
(() => {
  MM.lessons[23] = {
    n: 23, ko: '학 (學)', en: 'Word Builder 1',
    pages: { tb: '146–150', tbKey: '198–199', wb: '91–94', wbKey: '136–137' },
  };
  const W = (ko, hanja, parts, en, from, to) => ({ ko, hanja, parts, en, clip: from != null ? ['45', from, to] : null });
  MM.textbook[23] = {
    blocks: [
      { t: 'h', text: 'Lesson 23 · Word Builder 1', ko: '학 (學)' },
      { t: 'p', text: 'Welcome to the first Word Builder lesson of Korean 3! Word Builder lessons are designed to help you understand how to more efficiently expand your vocabulary by learning/understanding some common and basic building blocks of Korean words. Many (not all) of the words and letters introduced through Word Builder lessons are based on Chinese characters, or 한자, but the meanings can differ from modern-day Chinese. Your goal, through these lessons, is to understand how words are formed and remember the keywords in Korean in order to expand your Korean vocabulary from there. You certainly don’t have to memorize the Hanja characters, but if you want to, feel free!' },
      { t: 'track', id: '45', from: 5.5, to: 7.7, label: 'Track 45 · 학' },
      { t: 'meaning', label: 'Today’s keyword', ko: '학 (學)', text: 'The Chinese character for this word is 學. The word 학 is related to “learning”, “studying”, and “school”.' },

      { t: 'h2', text: 'Sample Expressions' },
      { t: 'track', id: '45', from: 7.7, to: 46.84, label: 'Track 45 · all the words (each read twice)' },
      { t: 'words', items: [
        W('학생', '學生', '학 + 생 (person, member, participant)', 'student', 7.7, 9.55),
        W('학교', '學校', '학 + 교 (school)', 'school', 9.55, 11.25),
        W('학원', '學院', '학 + 원 (house; garden)', 'private academy', 11.25, 12.85),
        W('수학', '數學', '수 (numbers) + 학', 'mathematics', 12.85, 14.45),
        W('과학', '科學', '과 (subject; class; species) + 학', 'science', 14.45, 16.0),
        W('어학', '語學', '어 (word) + 학', 'language learning', 16.0, 17.5),
        W('언어학', '言語學', '언어 (word + word) + 학', 'linguistics', 17.5, 19.2),
        W('경제학', '經濟學', '경제 (economy) + 학', 'economics', 19.2, 21.12),
        W('학자', '學者', '학 + 자 (person)', 'scholar', 21.12, 22.82),
        W('유학', '留學', '유 (to stay) + 학', 'studying abroad; staying abroad to study', 22.82, 24.2),
        W('유학생', '留學生', '유학 (studying abroad) + 생', 'student studying abroad', 24.2, 26.07),
        W('전학', '轉學', '전 (to roll, move) + 학', 'to change schools', 26.07, 27.6),
        W('전학생', '轉學生', '전학 (to change schools) + 생', 'student who moved to another school', 27.6, 29.68),
        W('학년', '學年', '학 + 년 (year)', 'school year', 29.68, 31.36),
        W('학기', '學期', '학 + 기 (period)', 'semester', 31.36, 33.0),
        W('방학', '放學', '방 (to release, let go) + 학', 'school vacation', 33.0, 34.75),
        W('장학금', '奬學金', '장 (recommending) + 학 + 금 (money)', 'scholarship', 34.75, 36.9),
        W('장학생', '奬學生', '장 + 학 + 생', 'student on a scholarship', 36.9, 38.9),
        W('복학생', '復學生', '복 (return) + 학 + 생', 'student who has returned to school (usually) after a long break', 38.9, 40.95),
        W('학습', '學習', '학 + 습 (acquire)', '(formal) learning, studies', 40.95, 42.6),
        W('한국어 학습', '韓國語 學習', '', '(formal) Korean learning', 42.6, 45.25),
        W('독학', '獨學', '독 (alone) + 학', 'self-study, studying by oneself', 45.25, 46.84),
      ] },
      { t: 'note', label: 'App note (not from the book)', text: 'How they sound (the book shows this in romanization; here in hangul): 학생 [학쌩], 학교 [학꾜], 학원 [하권], 학년 [항년], 학기 [학끼], 학자 [학짜], 장학금 [장학끔], 전학 [저낙], 복학생 [보칵쌩], 독학 [도칵], 학습 [학씁]. A ㄱ at the end of 학 makes the next ㄱ/ㄷ/ㅂ/ㅅ/ㅈ tense, and before ㄴ it sounds like ㅇ.' },

      { t: 'h2', text: 'Sample Dialogue' },
      { t: 'dialogue', track: '46', lines: [
        { id: 'd1', sp: 'A', ko: '저 드라마 저희 학교에서 찍고 있어요.', en: 'That drama is set in my school. (They are filming it at my school.)' },
        { id: 'd2', sp: 'B', ko: '진짜요? 언제 찍어요?', en: 'Really? When do they film?' },
        { id: 'd3', sp: 'A', ko: '학생들 없는 일요일에 찍어요.', en: 'They film on Sundays when there are no students.' },
      ] },
      { t: 'note', label: 'App note (not from the book)', text: '찍다 = to film, to take (a photo). 저희 학교 = my (our) school, humble. 학생들 없는 일요일 = Sunday(s) without students: 없는 is the Lesson 13/14 form of 없다 before a noun.' },

      { t: 'exercises', title: 'Exercises for Lesson 23', items: [
        { id: 'x1', q: 'The word (  ) is related to “learning”, “studying”, and “school”.', ans: ['학'], full: '학 (學)', skill: 'l23.root',
          soft: [{ p: '학 學', note: 'Accepted. The key: 학 (學).' }],
          diag: [{ p: '학생', note: '학생 = student. The keyword itself is one syllable: 학.' }, { p: '학교', note: '학교 = school. The keyword is 학.' }, { p: '공부', note: '공부 = study, but the Word Builder keyword of this lesson is 학 (學).' }] },
        { id: 'x2', q: 'Write in Korean (Sino-Korean): Changing schools', hint: '전 (轉) = to move; to roll', ans: ['전학'], full: '전학 (轉學)', skill: 'l23.study',
          diag: [{ p: '전학생', note: '전학생 = a student who moved to another school. Changing schools itself = 전학.' }, { p: '유학', note: '유학 = studying abroad. 전 (move) + 학 = 전학.' }, { p: '저낙', note: 'Pronounced [저낙], written 전학.' }] },
        { id: 'x3', q: 'Write in Korean (Sino-Korean): Scholarship', hint: '장 (奬) = recommend', ans: ['장학금'], full: '장학금 (奬學金)', skill: 'l23.study',
          diag: [{ p: '장학생', note: '장학생 = a student on a scholarship. The money (금) = 장학금.' }, { p: '장학', note: 'Add 금 (money): 장학금.' }, { p: '장학끔', note: 'Pronounced [장학끔], written 장학금.' }] },
        { id: 'x4', q: 'Write in Korean (Sino-Korean): Mathematics', hint: '수 (數) = numbers', ans: ['수학'], full: '수학 (數學)', skill: 'l23.study',
          diag: [{ p: '과학', note: '과학 = science. Numbers (수) + 학 = 수학.' }, { p: '수학여행', note: '수학여행 = school trip (a different 수: 修). Mathematics = 수학.' }] },
        { id: 'x5', q: 'Write in Korean (Sino-Korean): School year', hint: '년 (年) = year', ans: ['학년'], full: '학년 (學年)', skill: 'l23.study',
          diag: [{ p: '학기', note: '학기 = semester (기 = period). Year (년) → 학년.' }, { p: '항년', note: 'Pronounced [항년], written 학년.' }, { p: '년학', note: '학 comes first: 학 + 년 = 학년.' }] },
      ] },
    ],
  };
})();

/* ---- src/l23/workbook_L23.js ---- */
/* workbook_L23.js — Korean 3 Workbook, Lesson 23 (p.91–94, answer key p.136–137). Word Builder 학 (學).
   Section I (Vocabulary, Part 1): 24 words → match (4 rounds of 6) with the key's English; the book's hanja is shown as keyNote.
   Section II (Vocabulary, Part 2): four pyramids (25 People, 26 Places, 27 Subjects of study, 28 Related words) → NEW wb.js
   type 'pyramid': 학 on top, then two words of 2, 3 and 4 syllables; any order within a level; 25 has one word per level printed.
   Section III dictation = WB Track 56, 57 (each said twice, then in parts; ASR matches the key). */
(() => {
  MM.workbook[23] = {
    sections: [
      {
        id: 'I', title: 'Section I – Vocabulary, Part 1',
        task: 'Define/translate each word to English using what you know or a dictionary. Here: match each word to its meaning (the key’s English).',
        type: 'match',
        items: [
          { n: 1, ko: '대학교수', en: 'university professor', keyNote: '大學敎授' },
          { n: 2, ko: '초등학교', en: 'elementary school', keyNote: '初等學校' },
          { n: 3, ko: '생명과학', en: 'life science', keyNote: '生命科學' },
          { n: 4, ko: '수학', en: 'mathematics', keyNote: '數學' },
          { n: 5, ko: '학자', en: 'scholar', keyNote: '學者' },
          { n: 6, ko: '장학금', en: 'scholarship', keyNote: '奬學金' },
          { n: 7, ko: '경제학', en: 'economics', keyNote: '經濟學' },
          { n: 8, ko: '수학여행', en: 'school trip', keyNote: '修學旅行 — a different 수 from 수학 (數學), mathematics' },
          { n: 9, ko: '지구과학', en: 'earth science', keyNote: '地球科學' },
          { n: 10, ko: '학교', en: 'school', keyNote: '學校' },
          { n: 11, ko: '전학', en: 'to change schools', keyNote: '轉學' },
          { n: 12, ko: '유학생', en: 'student studying abroad', keyNote: '留學生' },
          { n: 13, ko: '대학교', en: 'university, college', keyNote: '大學校' },
          { n: 14, ko: '어학', en: 'language learning', keyNote: '語學' },
          { n: 15, ko: '학생', en: 'student', keyNote: '學生' },
          { n: 16, ko: '복학생', en: 'student who has returned to school (usually) after a long break', keyNote: '復學生' },
          { n: 17, ko: '물리학', en: 'physics', keyNote: '物理學' },
          { n: 18, ko: '학원', en: 'private institute', keyNote: '學院' },
          { n: 19, ko: '방학', en: 'school vacation', keyNote: '放學' },
          { n: 20, ko: '대학원생', en: 'graduate student', keyNote: '大學院生' },
          { n: 21, ko: '학교생활', en: 'school life', keyNote: '學校生活' },
          { n: 22, ko: '고등학교', en: 'high school; senior high school', keyNote: '高等學校' },
          { n: 23, ko: '학용품', en: 'school supplies; stationery', keyNote: '學用品' },
          { n: 24, ko: '중학교', en: 'middle school; junior high school', keyNote: '中學校' },
        ],
      },
      {
        id: 'II', title: 'Section II – Vocabulary, Part 2',
        task: 'Pyramids – Based on 학, build a pyramid with words from Section I. Each level reflects the number of syllables in each word to be written. Two words go on each level of the pyramid. One answer for each level in number 25 has been done for you as an example. Please finish number 25.',
        type: 'pyramid',
        items: [
          { n: 25, title: 'People', skill: 'l23.people', given: ['학생', '유학생', '대학원생'], levels: [['학생', '학자'], ['유학생', '복학생'], ['대학원생', '대학교수']] },
          { n: 26, title: 'Places', skill: 'l23.places', levels: [['학교', '학원'], ['대학교', '중학교'], ['고등학교', '초등학교']] },
          { n: 27, title: 'Subjects of study', skill: 'l23.study', levels: [['수학', '어학'], ['경제학', '물리학'], ['생명과학', '지구과학']] },
          { n: 28, title: 'Related words', skill: 'l23.root', levels: [['전학', '방학'], ['장학금', '학용품'], ['학교생활', '수학여행']],
            keyNote: 'App note: 학교 / 대학교 are places, so they are in 26; 학교생활 (school life) and 수학여행 (school trip) are “related words”.' },
        ],
      },
      {
        id: 'III', title: 'Section III – Dictation',
        task: 'Listen to the MP3. Repeat what you hear out loud, then write it down. Each word/phrase is said twice.',
        type: 'dictation',
        items: [
          { n: 29, track: 'wb56', label: 'Track 56', ans: ['오늘 학교에 전학생이 왔어요.'], en: 'Today a new student came (from another school) to our school.' },
          { n: 30, track: 'wb57', label: 'Track 57', ans: ['수학여행은 언제 가요?'], en: 'When do you go on a school trip? / When are we going on a school trip?',
            soft: [{ p: '수학 여행은 언제 가요', note: 'Accepted. The key writes it as one word: 수학여행.' }] },
        ],
      },
    ],
  };
})();

