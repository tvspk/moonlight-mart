#!/usr/bin/env python3
"""Native-speaker review fixes (2026-10-15). Each entry: (file, old, new). Fails if old not found exactly once."""
import sys
FIX = [
 ('src/l1/game_L1.js', "['taxi', '네, 수고해요.', 'Sure. Keep up the good work.']", "['taxi', '네, 수고하세요.', 'Sure. Keep up the good work.']"),
 ('src/l1/game_L1.js', "'아이고… 경찰관님 불러요!', 'Oh no… call the officer!'", "'아이고… 경찰 불러요!', 'Oh no… call the police!'"),
 ('src/l1/game_L1.js', "'얼른 가요! 수고했어요.'", "'얼른 집에 가요! 수고했어요.'"),
 ('src/l2/game_L2.js', "'하하, 좋아요. 집에 가고 푹 자요!', 'Ha ha, good. Go home and get a good sleep!'", "'하하, 좋아요. 집에서 푹 자요!', 'Ha ha, good. Get a good sleep at home!'"),
 ('src/l2/game_L2.js', "'학생도 일하고, 아침에 꼭 자요.', 'You too: work, and then make sure you sleep in the morning.'", "'학생도 일 끝나고 꼭 자요.', 'You too: when work is over, make sure you sleep.'"),
 ('src/l3/game_L3.js', "'어젯밤에 저 나무 뒤에 숨어 있었어요. 빠른 자동차가 많아요.', 'Last night I was hiding behind that tree. There are a lot of fast cars.'", "'어젯밤에 저 나무 뒤에 숨어 있었어요. 여기 차들이 너무 빨라요.', 'Last night I was hiding behind that tree. The cars here are too fast.'"),
 ('src/l3/game_L3.js', "'선반 위에 없어요? 이상하네요.'", "'선반 위에 없어요? 이상해요.'"),
 ('src/l4/game_L4.js', "['boss', '네, 봐요!', 'Yes, let’s look!']", "['boss', '네, 같이 봐요!', 'Yes, let’s look together!']"),
 ('src/l4/game_L4.js', "'제가 봤어요. 고양이가 냉동고 뒤에서 놀았어요.', 'I saw it. The cat was playing behind the freezer.'", "'제가 봤어요. 고양이가 냉동고 뒤에서 놀고 있었어요.', 'I saw it. The cat was playing behind the freezer.'"),
 ('src/l4/game_L4.js', "'냉동고 괜찮아요! 아이스크림 오늘 팔까요?', 'The freezer is fine! Shall we sell the ice cream today?'", "'냉동고 괜찮아요! 아이스크림은 어떻게 할까요?', 'The freezer is fine! What shall we do with the ice cream?'"),
 ('src/l4/game_L4.js', "prompt: 'Answer: “Yes. Shall we sell it today?” (agree with his idea)', ans: ['네. 오늘 팔까요?'], soft: [{ p: '네 오늘 팔까요', note: 'Accepted.' }, { p: '오늘 팔까요', note: 'Accepted.' }]", "prompt: 'Suggest: “Shall we sell it today?”', ans: ['오늘 팔까요?'], soft: [{ p: '네 오늘 팔까요', note: 'Accepted.' }, { p: '아이스크림 오늘 팔까요', note: 'Accepted.' }]"),
 ('src/l5/game_L5.js', "'라면은 여기 5년쯤 있었어요.'", "'라면은 여기서 5년쯤 살았어요.'"),
 ('src/l5/reads_L5.js', "'사장님, {금요일|금요일} {회식|회식} 몇 시쯤 만날까요?'", "'사장님, {금요일|금요일} {회식|회식}, 몇 시쯤 만날까요?'"),
 ('src/l5/reads_L5.js', "'네. 그리고 {가게|가게}에서 4킬로미터쯤 {걸어요|걷다}. ㅋㅋ'", "'네. 그리고 {가게|가게}에서 {식당|식당}까지 4킬로미터쯤 {걸어요|걷다}. ㅋㅋ'"),
 ('src/l9/game_L9.js', "'네? 무슨 김밥요?'", "'네? 무슨 김밥이요?'"),
 ('src/l9/reads_L9.js', "'요즘 밤 3시쯤에 이상한 {소리|소리}가 {나요|나다}.'", "'요즘 {새벽|새벽} 3시쯤에 이상한 {소리|소리}가 {나요|나다}.'"),
 ('src/l9/reads_L9.js', "explain: '밤 3시쯤에 = at around 3 at night (쯤, Lesson 5).'", "explain: '새벽 3시쯤에 = at around 3 a.m. (쯤, Lesson 5).'"),
 ('src/l9/reads_L9.js', "gloss: { '소리': 'sound, noise',", "gloss: { '새벽': 'the small hours, early morning (새벽 3시 = 3 a.m.)', '소리': 'sound, noise',"),
 ('src/l9/reads_L9.js', "{ ko: '누가 알아요? 201호에 {연락|연락} 주세요.', en: 'Does anyone know? Please contact (flat) 201.' }", "{ ko: '알아요? 그럼 201호에 {연락|연락} 주세요.', en: 'Do you know? Then please contact (flat) 201.' }"),
 ('src/l11/game_L11.js', "ko: '제가 ___ 줄게요!', ans: ['구워']", "ko: '제가 ___ 드릴게요!', ans: ['구워']"),
 ('src/l11/game_L11.js', "explain: '굽다 → 구워요, so 구워 주다 = to bake (for someone). 굽고 싶어요 keeps the ㅂ: -고 starts with a consonant.'", "explain: '굽다 → 구워요, so 구워 주다 = to bake (for someone). To Grandma you use the humble 드리다 (Lesson 6 notice board): 구워 드릴게요. 굽고 싶어요 keeps the ㅂ: -고 starts with a consonant.'"),
 ('src/l11/game_L11.js', "prompt: 'Note: “If you bake sweet potatoes, clean the oven.” (-(으)면 = if)', ko: '고구마를 ___ 오븐을 청소하세요.'", "prompt: 'Note: “When you’re done baking sweet potatoes, clean the oven.” (-(으)면 = if, when; 다 = all, completely)', ko: '고구마를 다 ___ 오븐을 청소하세요.'"),
 ('src/l11/game_L11.js', "explain: 'WB 23: 굽다 → 구우면 · 굽고 · 구워서.', en: 'If you bake sweet potatoes, clean the oven.'", "explain: 'WB 23: 굽다 → 구우면 · 굽고 · 구워서. 다 구우면 = when you have baked them all (finished baking).', en: 'When you’re done baking sweet potatoes, clean the oven.'"),
 ('src/l11/game_L11.js', "narr: 'The officer looks at your new vest. (불편하다 = to be uncomfortable)',\n          lines: [['police', '조끼 괜찮아요?', 'Is the vest okay?']]", "narr: 'The officer watches you push the new vests into the staff locker. (불편하다 = to be uncomfortable)',\n          lines: [['police', '사물함 괜찮아요?', 'Is the locker okay?']]"),
 ('src/l11/game_L11.js', "{ p: '(조끼가 |)(좀 |조금 |너무 |)좁아서 (좀 |조금 |)불편해요', note: 'Accepted.' }, { p: '(조끼가 |)(좀 |조금 |너무 |)좁고", "{ p: '(사물함이 |)(좀 |조금 |너무 |)좁아서 (좀 |조금 |)불편해요', note: 'Accepted.' }, { p: '(사물함이 |)(좀 |조금 |너무 |)좁고"),
]
bad = 0
for f, o, n in FIX:
    s = open(f, encoding='utf8').read()
    c = s.count(o)
    if c != 1:
        if s.count(n) >= 1: continue  # already applied
        print('NOT FOUND x%d: %s :: %s' % (c, f, o)); bad += 1; continue
    open(f, 'w', encoding='utf8').write(s.replace(o, n))
print('ok' if not bad else 'errors: %d' % bad); sys.exit(1 if bad else 0)
