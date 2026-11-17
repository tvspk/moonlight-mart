#!/usr/bin/env python3
"""Generate 해요-form tables for a lesson and check them against forms printed in the book.

Usage: python3 gen_forms.py 1  -> writes ../src/l1/forms_L1.js
The conjugator covers the regular rules plus ㅂ, 르, 으, 하다 and ㄷ/ㅅ irregulars
(irregular verbs must be flagged explicitly, never guessed from spelling)."""
import json, sys, os, unicodedata

B, V0, T0 = 0xAC00, 21, 28
L = list("ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ")
V = list("ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ")
T = [""] + list("ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ")

def dec(s):
    c = ord(s) - B
    return L[c // (V0 * T0)], V[(c % (V0 * T0)) // T0], T[c % T0]

def com(l, v, t=""):
    return chr(B + (L.index(l) * V0 + V.index(v)) * T0 + T.index(t))

def hae(dict_form, irr=None):
    """Return 해요 form. irr in {None,'ㅂ','르','으','ㄷ','ㅅ'}; 하다 and vowel rules are automatic."""
    stem = dict_form[:-1]
    if stem.endswith("하"):
        return stem[:-1] + "해요"
    last = stem[-1]
    l, v, t = dec(last)
    pre = stem[:-1]
    if irr == "ㅂ":
        assert t == "ㅂ"
        base = pre + com(l, v)
        # 돕다/곱다 take 와, all others 워
        return base + ("와요" if stem in ("돕", "곱") else "워요")
    if irr == "르":
        assert last == "르"
        pl, pv, pt = dec(pre[-1])
        assert pt == ""
        new_prev = com(pl, pv, "ㄹ")
        bright = pv in ("ㅏ", "ㅗ")
        return pre[:-1] + new_prev + ("라요" if bright else "러요")
    if irr == "으" or (v == "ㅡ" and t == "" and irr is None):
        # drop ㅡ; vowel of previous syllable decides 아/어 (single syllable -> 어)
        if pre:
            pv = dec(pre[-1])[1]
            nv = "ㅏ" if pv in ("ㅏ", "ㅗ") else "ㅓ"
        else:
            nv = "ㅓ"
        return pre + com(l, nv) + "요"
    if t:  # consonant-final regular stem
        return stem + ("아요" if v in ("ㅏ", "ㅗ") else "어요")
    # vowel-final regular stem: contractions
    if v == "ㅏ":
        return stem + "요"
    if v == "ㅗ":
        return pre + com(l, "ㅘ") + "요"
    if v == "ㅜ":
        return pre + com(l, "ㅝ") + "요"
    if v == "ㅣ":
        return pre + com(l, "ㅕ") + "요"
    if v in ("ㅓ", "ㅐ", "ㅔ", "ㅕ"):
        return stem + "요"
    return stem + "어요"

# Lesson 1 vocabulary. irr is set by hand from the book, not inferred.
L1 = [
    # dict, english, irr, book form (as printed in textbook/workbook) for verification
    ("크다", "to be big; to be tall; (of sound) to be loud", "으", "커요"),
    ("작다", "to be small", None, "작아요"),
    ("비싸다", "to be expensive", None, "비싸요"),
    ("빠르다", "to be fast", "르", "빨라요"),
    ("어렵다", "to be difficult", "ㅂ", "어려워요"),
    ("쉽다", "to be easy", "ㅂ", "쉬워요"),
    ("시끄럽다", "to be noisy", "ㅂ", "시끄러워요"),
    ("덥다", "to be hot (weather)", "ㅂ", "더워요"),
    ("맵다", "to be spicy", "ㅂ", "매워요"),
    ("아름답다", "to be beautiful", "ㅂ", "아름다워요"),
    ("맛있다", "to be tasty, delicious", None, "맛있어요"),
    ("멋있다", "to be cool, stylish", None, "멋있어요"),
    ("좋다", "to be good; to like", None, "좋아요"),
    ("졸리다", "to be sleepy", None, "졸려요"),
    ("바쁘다", "to be busy", "으", "바빠요"),
    ("배고프다", "to be hungry", "으", "배고파요"),
    ("슬프다", "to be sad", "으", "슬퍼요"),
    ("쓰다", "to be bitter", "으", "써요"),
    ("짜다", "to be salty", None, "짜요"),
]

# Lesson 2 (-고). irr set by hand. Book-printed forms used for checking (None = not printed):
# (dict, english, irr, hae, go, past 해요, past -고)
L2 = [
    ("재미있다", "to be interesting, fun", None, "재미있어요", "재미있고", None, None),
    ("싸다", "to be cheap", None, "싸요", "싸고", None, None),
    ("만나다", "to meet", None, None, "만나고", "만났어요", "만났고"),
    ("보다", "to see, to watch", None, None, "보고", "봤어요", None),
    ("가다", "to go", None, None, "가고", "갔어요", None),
    ("먹다", "to eat", None, None, "먹고", "먹었어요", "먹었고"),
    ("마시다", "to drink", None, None, "마시고", "마셨어요", None),
    ("읽다", "to read", None, None, "읽고", None, None),
    ("공부하다", "to study", None, None, "공부하고", "공부했어요", None),
    ("운동하다", "to exercise, to work out", None, None, "운동하고", "운동했어요", None),
    ("쇼핑하다", "to shop, to go shopping", None, None, None, None, None),
    ("수영하다", "to swim", None, None, "수영하고", "수영했어요", None),
    ("씻다", "to wash (oneself)", None, None, "씻고", None, None),
    ("자다", "to sleep", None, None, None, "잤어요", None),
    ("배부르다", "to be full (after eating)", "르", "배불러요", None, None, None),
]

def past_hae(hae_form):
    """만나요 -> 만났어요: add ㅆ under the last syllable of the 해요 stem."""
    base = hae_form[:-1]
    l, v, t = dec(base[-1])
    assert t == ""
    return base[:-1] + com(l, v, "ㅆ") + "어요"

def go(d):
    return d[:-1] + "고"

def fut_go(d):
    stem = d[:-1]
    l, v, t = dec(stem[-1])
    if t == "":
        return stem[:-1] + com(l, v, "ㄹ") + " 거고"
    if t == "ㄹ":
        return stem + " 거고"
    return stem + "을 거고"

def wrongs_go(d, hae_form):
    """Misspellings of the -고 form: 해요-stem + 고, casual 구 spelling, tensed spelling, 으 inserted."""
    stem = d[:-1]
    right = stem + "고"
    w = []
    hs = hae_form[:-1] + "고"
    if hs != right:
        w.append(hs)
    l, v, t = dec(stem[-1])
    if t:
        w.append(stem + "꼬")
        if t == "ㄺ":
            w.append(stem[:-1] + com(l, v, "ㄹ") + "꼬")
        w.append(stem + "으고")
    w.append(stem + "구")
    out = []
    for x in w:
        if x != right and x not in out:
            out.append(x)
    return out[:4]

# Plausible wrong forms a learner produces (used for distractors and diag).
def wrongs(d, irr, right):
    stem = d[:-1]
    w = set()
    l, v, t = dec(stem[-1])
    if t:
        w.add(stem + ("어요" if v in ("ㅏ", "ㅗ") else "아요"))
        w.add(stem + ("아요" if v in ("ㅏ", "ㅗ") else "어요"))
    else:
        w.add(stem + "요")
        w.add(stem + "어요")
    if irr == "ㅂ":
        base = stem[:-1] + com(l, v)
        w.add(base + "와요" if not right.endswith("와요") else base + "워요")
        w.add(base + "어요")
    if irr == "르":
        pre = stem[:-1]
        w.add(pre + "러요" if right.endswith("라요") else pre + "라요")
        pl, pv, _ = dec(pre[-1])
        w.add(pre[:-1] + com(pl, pv, "ㄹ") + ("러요" if right.endswith("라요") else "라요"))
    if irr == "으":
        pre = stem[:-1]
        alt = "ㅓ" if right[-2:-1] and dec(right[-2])[1] == "ㅏ" else "ㅏ"
        w.add(pre + com(l, alt) + "요")
    if t:
        w.add(stem + "요")
        # phonetic (resyllabified) misspelling, e.g. 맛있어요 -> 마시써요, 좋아요 -> 조아요
        base = stem[:-1] + com(l, v)
        nxt = right[len(stem)]
        nl, nv, nt = dec(nxt)
        moved = t if t not in ("ㅎ",) else None
        if irr is None and moved and moved in L:
            w.add(base + com(moved, nv, nt) + right[len(stem)+1:])
        elif t == "ㅎ":
            w.add(base + right[len(stem):])
    else:
        if v == "ㅏ":
            w.add(stem + "아요")
    if d == "졸리다":
        w.update({"졸리어요", "졸랴요", "졸려워요"})
    w.discard(right)
    return sorted(w)[:4]

def main_l2(n):
    rows, bad = [], []
    chk = lambda what, got, book: book is not None and unicodedata.normalize("NFC", got) != book and bad.append((what, got, book))
    for d, en, irr, b_hae, b_go, b_ph, b_pg in L2:
        h = hae(d, irr)
        g = go(d)
        ph = past_hae(h)
        pg = ph[:-2] + "고"
        chk(d + " hae", h, b_hae); chk(d + " go", g, b_go); chk(d + " past", ph, b_ph); chk(d + " past-go", pg, b_pg)
        rows.append({"dict": d, "en": en, "irr": irr or "reg", "hae": h, "go": g, "pastGo": pg, "futGo": fut_go(d), "main": g, "wrong": wrongs_go(d, h)})
    # spot checks from the book: 볼 거고 (TB p.18), 만날 거고 (key p.196)
    for d, want in (("보다", "볼 거고"), ("만나다", "만날 거고")):
        chk(d + " fut", fut_go(d), want)
    if bad:
        print("MISMATCH vs book:", bad)
        sys.exit(1)
    write(n, rows, "TB p.15-20, key p.196, WB p.16-18, key p.121-122")
    for r in rows:
        print(r["dict"], "->", r["go"], r["pastGo"], r["futGo"], r["hae"], " wrong:", r["wrong"])


# Lesson 4 (-(으)ㄹ까요?). irr 'ㄹ' = ㄹ-stem (set by hand). (dict, english, irr, book -(으)ㄹ까요 form, book past form or None)
L4 = [
    ("먹다", "to eat", None, "먹을까요", None),
    ("보다", "to see, to watch", None, "볼까요", None),
    ("팔다", "to sell", "ㄹ", "팔까요", None),
    ("시작하다", "to start", None, "시작할까요", None),
    ("공부하다", "to study", None, "공부할까요", None),
    ("달리다", "to run", None, "달릴까요", None),
    ("놀다", "to play, to hang out", "ㄹ", "놀까요", None),
    ("살다", "to live", "ㄹ", "살까요", None),
    ("있다", "to be (there), to exist", None, "있을까요", None),
    ("오다", "to come", None, "올까요", "왔을까요"),
    ("마시다", "to drink", None, "마실까요", None),
    ("놓다", "to put, to place", None, "놓을까요", None),
    ("만들다", "to make", "ㄹ", "만들까요", None),
    ("앉다", "to sit", None, "앉을까요", None),
    ("전화하다", "to call, to make a phone call", None, "전화할까요", "전화했을까요"),
    ("가다", "to go", None, "갈까요", None),
    ("찍다", "to take (a picture)", None, "찍을까요", None),
    ("하다", "to do", None, "할까요", "했을까요"),
]

def kka(d, irr=None):
    stem = d[:-1]
    l, v, t = dec(stem[-1])
    if t == "ㄹ":
        assert irr == "ㄹ", d
        return stem + "까요"
    if t:
        return stem + "을까요"
    return stem[:-1] + com(l, v, "ㄹ") + "까요"

def past_kka(d, irr=None):
    return past_hae(hae(d))[:-2] + "을까요"

def wrongs_kka(d, irr, right):
    stem = d[:-1]
    l, v, t = dec(stem[-1])
    w = []
    if t == "ㄹ":
        w += [stem + "을까요", stem[:-1] + com(l, v) + "를까요", stem + "가요"]
    elif t:
        w += [stem + "까요", right[:-2] + "가요"]
        if t in L and t not in ("ㅇ", "ㅎ"):
            w.append(stem[:-1] + com(l, v) + com(t, "ㅡ", "ㄹ") + "까요")  # 먹을까요 -> 머글까요
        if t == "ㅎ":
            w.append(stem[:-1] + com(l, v, "ㄹ") + "까요")  # 놓다 -> 놀까요 (= shall we play)
    else:
        w += [stem + "을까요", right[:-2] + "가요", stem + "까요"]
        h = hae(d, irr)[:-1]
        hl, hv, ht = dec(h[-1])
        alt = h[:-1] + com(hl, hv, "ㄹ") + "까요"
        if alt != right:
            w.append(alt)  # 마셜까요, 공부핼까요
    out = []
    for x in w:
        if x != right and x not in out:
            out.append(x)
    return out[:4]

def main_l4(n):
    rows, bad = [], []
    for d, en, irr, b_k, b_p in L4:
        k = kka(d, irr)
        pk = past_kka(d, irr)
        if unicodedata.normalize("NFC", k) != b_k:
            bad.append((d, k, b_k))
        if b_p and pk != b_p:
            bad.append((d + " past", pk, b_p))
        rows.append({"dict": d, "en": en, "irr": irr or "reg", "hae": hae(d, irr), "kka": k, "pastKka": pk, "main": k, "wrong": wrongs_kka(d, irr, k)})
    if bad:
        print("MISMATCH vs book:", bad)
        sys.exit(1)
    write(n, rows, "TB p.27-33, key p.196, WB p.22-25, key p.122-123")
    for r in rows:
        print(r["dict"], "->", r["kka"], r["pastKka"], " wrong:", r["wrong"])

# Lesson 6 (-(으)ㄹ 거예요 vs -(으)ㄹ게요). irr 'ㄹ' = ㄹ-stem (set by hand).
# (dict, english, irr, book 거예요 form or None, book 게요 form or None) — book = TB p.39-45, key p.196, WB p.31-33, key p.124
L6 = [
    ("하다", "to do", None, "할 거예요", "할게요"),
    ("보내다", "to send", None, "보낼 거예요", None),
    ("웃다", "to laugh", None, "웃을 거예요", None),
    ("공부하다", "to study", None, "공부할 거예요", "공부할게요"),
    ("만나다", "to meet", None, "만날 거예요", "만날게요"),
    ("가다", "to go", None, "갈 거예요", "갈게요"),
    ("나가다", "to go out", None, "나갈 거예요", "나갈게요"),
    ("오다", "to come", None, "올 거예요", None),
    ("주다", "to give", None, "줄 거예요", "줄게요"),
    ("도와주다", "to help", None, "도와줄 거예요", "도와줄게요"),
    ("전화하다", "to call, to make a phone call", None, None, "전화할게요"),
    ("주문하다", "to order", None, None, "주문할게요"),
    ("먹다", "to eat", None, None, "먹을게요"),
    ("청소하다", "to clean", None, None, None),
    ("살다", "to live", "ㄹ", None, None),
    ("만들다", "to make", "ㄹ", None, None),
]

def fut_geo(d, irr=None):
    stem = d[:-1]
    l, v, t = dec(stem[-1])
    if t == "ㄹ":
        assert irr == "ㄹ", d
        return stem + " 거예요"
    if t:
        return stem + "을 거예요"
    return stem[:-1] + com(l, v, "ㄹ") + " 거예요"

def fut_ge(d, irr=None):
    return fut_geo(d, irr).replace(" 거예요", "게요")

def wrongs_ge(d, irr, right):
    """Learner slips for -(으)ㄹ게요: 께 spelling, space before 게요, 을 on a vowel stem / missing 을, sound spelling."""
    stem = d[:-1]
    l, v, t = dec(stem[-1])
    w = [right[:-2] + "께요"]  # (no spacing variant: the grader accepts spacing slips with a note)
    if t == "ㄹ":
        w += [stem + "을게요", stem[:-1] + com(l, v) + "를게요"]
    elif t:
        w += [stem + "게요"]
        if t in L and t not in ("ㅇ", "ㅎ"):
            w.append(stem[:-1] + com(l, v) + com(t, "ㅡ", "ㄹ") + "게요")  # 먹을게요 -> 머글게요
    else:
        w += [stem + "을게요", stem + "게요"]  # 하을게요, 하게요 (ㄹ missing)
    out = []
    for x in w:
        if x != right and x not in out:
            out.append(x)
    return out[:4]

def main_l6(n):
    rows, bad = [], []
    for d, en, irr, b_geo, b_ge in L6:
        g, ge = fut_geo(d, irr), fut_ge(d, irr)
        if b_geo and g != b_geo:
            bad.append((d, g, b_geo))
        if b_ge and ge != b_ge:
            bad.append((d, ge, b_ge))
        w = wrongs_ge(d, irr, ge)
        rows.append({"dict": d, "en": en, "irr": irr or "reg", "hae": hae(d, irr), "geo": g, "ge": ge, "main": ge,
                     "wrong": w, "wrongGeo": [g.replace("거예요", "거에요"), g.replace("거예요", "꺼예요")]})
    if bad:
        print("MISMATCH vs book:", bad)
        sys.exit(1)
    write(n, rows, "TB p.39-45, key p.196, WB p.31-33, key p.124")
    for r in rows:
        print(r["dict"], "->", r["geo"], "|", r["ge"], " wrong:", r["wrong"])

# Lesson 7 (-아/어/여서). irr set by hand ('으' = ㅡ drops). (dict, english, irr, book -아/어/여서 form or None)
# book = TB p.46-53, key p.196, WB p.34-36, key p.124-125
L7 = [
    ("하다", "to do", None, "해서"),
    ("먹다", "to eat", None, "먹어서"),
    ("만들다", "to make", None, "만들어서"),
    ("오다", "to come", None, "와서"),
    ("가다", "to go", None, "가서"),
    ("바쁘다", "to be busy", "으", "바빠서"),
    ("만나다", "to meet", None, "만나서"),
    ("모으다", "to save up, to collect", "으", "모아서"),
    ("사다", "to buy", None, "사서"),
    ("자다", "to sleep", None, "자서"),
    ("공부하다", "to study", None, "공부해서"),
    ("재미있다", "to be fun, to be interesting", None, "재미있어서"),
    ("아프다", "to be sick, to hurt", "으", "아파서"),
    ("비슷하다", "to be similar", None, "비슷해서"),
    ("읽다", "to read", None, None),
    ("주다", "to give", None, None),
]

def seo(d, irr=None):
    return hae(d, irr)[:-1] + "서"

def wrongs_seo(d, irr, right):
    """Learner slips for -아/어/여서: tense on the first verb, 아/어 swapped, no contraction, sound spelling."""
    stem = d[:-1]
    l, v, t = dec(stem[-1])
    h = hae(d, irr)
    w = [past_hae(h)[:-1] + "서"]  # 먹었어서: tense belongs on the final verb only
    if stem.endswith("하"):
        w += [stem + "서", stem + "아서"]  # 하서, 하아서 (하여서 itself is correct, formal)
    elif irr == "으":
        hl, hv, ht = dec(h[-2])
        alt = "ㅓ" if hv == "ㅏ" else "ㅏ"
        w += [h[:-2] + com(hl, alt) + "서", stem + "어서"]  # 바뻐서, 바쁘어서
    elif t:
        w.append(stem + ("아서" if right.endswith("어서") else "어서"))  # 먹아서
        if t in L and t not in ("ㅇ", "ㅎ") and len(t) == 1:
            nxt = right[len(stem)]
            nl, nv, nt = dec(nxt)
            w.append(stem[:-1] + com(l, v) + com(t, nv, nt) + right[len(stem) + 1:])  # 머거서
        elif t == "ㅆ":
            w.append(stem[:-1] + com(l, v) + "써서")  # 재미이써서
        elif t == "ㄺ":
            w.append(stem[:-1] + com(l, v, "ㄹ") + "거서")  # 일거서
    else:
        if v == "ㅏ":
            w.append(stem + "아서")  # 가아서
        if d == "오다":
            w.append("오아서")
        w.append(stem + "서" if stem + "서" != right else stem + "어서")  # 오서, 주서 / 가어서
    out = []
    for x in w:
        if x != right and x not in out:
            out.append(x)
    return out[:4]

def main_l7(n):
    rows, bad = [], []
    for d, en, irr, b in L7:
        f = seo(d, irr)
        if b and f != b:
            bad.append((d, f, b))
        rows.append({"dict": d, "en": en, "irr": irr or "reg", "hae": hae(d, irr), "seo": f, "main": f, "wrong": wrongs_seo(d, irr, f)})
    # fixed expressions printed in the book: 따르다 -> 따라서, 들다 -> 들어서 (예를 들어서)
    for d, irr, want in (("따르다", "으", "따라서"), ("들다", None, "들어서")):
        if seo(d, irr) != want:
            bad.append((d, seo(d, irr), want))
    if bad:
        print("MISMATCH vs book:", bad)
        sys.exit(1)
    write(n, rows, "TB p.46-53, key p.196, WB p.34-36, key p.124-125")
    for r in rows:
        print(r["dict"], "->", r["seo"], " wrong:", r["wrong"])


# Lesson 9 (-(으)ㄴ/는/(으)ㄹ 것 같아요). kind set by hand: 'desc' (descriptive verb), 'act' (action verb),
# 'ex' (있다/없다 words: present takes 는). irr: 'ㄹ' = ㄹ-stem, 'ㅎ' = ㅎ-irregular (그렇다, printed in the book).
# (dict, english, kind, irr, book present, book past, book future) — None = not printed.
# book = TB p.60-66, key p.197, WB p.41-44, key p.125-126
L9 = [
    ("예쁘다", "to be pretty", "desc", None, "예쁜", None, None),
    ("말하다", "to talk, to speak; to say", "act", None, "말하는", "말한", "말할"),
    ("이상하다", "to be strange", "desc", None, "이상한", None, None),
    ("오다", "to come (눈이 오다 = to snow)", "act", None, "오는", "온", "올"),
    ("이야기하다", "to tell; to talk", "act", None, "이야기하는", "이야기한", "이야기할"),
    ("비싸다", "to be expensive", "desc", None, "비싼", None, "비쌀"),
    ("그렇다", "to be so; to be that way", "desc", "ㅎ", "그런", None, None),
    ("재미있다", "to be fun, to be interesting", "ex", None, None, None, "재미있을"),
    ("재미없다", "to be boring, not fun", "ex", None, None, None, "재미없을"),
    ("맛있다", "to be tasty, delicious", "ex", None, None, None, "맛있을"),
    ("사다", "to buy", "act", None, "사는", "산", "살"),
    ("하다", "to do", "act", None, "하는", "한", "할"),
    ("일어나다", "to get up; to wake up", "act", None, "일어나는", "일어난", "일어날"),
    ("자다", "to sleep", "act", None, "자는", "잔", "잘"),
    ("공부하다", "to study", "act", None, "공부하는", "공부한", "공부할"),
    ("연습하다", "to practice", "act", None, "연습하는", "연습한", "연습할"),
    ("모으다", "to save up, to collect", "act", None, "모으는", "모은", "모을"),
    ("가다", "to go", "act", None, None, "간", None),
    ("모르다", "to not know", "act", "르", "모르는", None, None),
    ("작다", "to be small", "desc", None, "작은", None, None),
    ("바쁘다", "to be busy", "desc", None, "바쁜", None, None),
    ("괜찮다", "to be okay", "desc", None, None, None, "괜찮을"),
    ("멀다", "to be far", "desc", "ㄹ", None, None, None),
]

def adn_n(d, irr=None):
    """-(으)ㄴ: vowel stem + ㄴ, ㄹ-stem drops ㄹ + ㄴ, ㅎ-irregular drops ㅎ + ㄴ, consonant stem + 은."""
    stem = d[:-1]
    l, v, t = dec(stem[-1])
    if t == "ㄹ":
        assert irr == "ㄹ", d
        return stem[:-1] + com(l, v, "ㄴ")
    if t == "ㅎ" and irr == "ㅎ":
        return stem[:-1] + com(l, v, "ㄴ")
    if t:
        return stem + "은"
    return stem[:-1] + com(l, v, "ㄴ")

def adn_neun(d, irr=None):
    stem = d[:-1]
    l, v, t = dec(stem[-1])
    if t == "ㄹ":
        return stem[:-1] + com(l, v) + "는"
    return stem + "는"

def adn_l(d, irr=None):
    stem = d[:-1]
    l, v, t = dec(stem[-1])
    if t == "ㄹ":
        return stem
    if t == "ㅎ" and irr == "ㅎ":
        return stem[:-1] + com(l, v, "ㄹ")
    if t:
        return stem + "을"
    return stem[:-1] + com(l, v, "ㄹ")

def fused_past(d, irr):
    """비쌌 (것 같아요): the past 았/었 glued straight onto 것 — a workbook distractor."""
    h = hae(d, irr)
    if irr == "ㅎ":
        return "그랬"
    return past_hae(h)[:-2]

def sound_spell(word):
    """먹을 -> 머글, 맛있을 -> 맛이쓸: the batchim moved onto the ending."""
    if len(word) < 2:
        return None
    l, v, t = dec(word[-2])
    nl, nv, nt = dec(word[-1])
    if not t or nl != "ㅇ" or t in ("ㅇ", "ㅎ") or t not in L:
        return None
    return word[:-2] + com(l, v) + com(t, nv, nt)

def wrongs_adn(d, kind, irr, which, right):
    stem = d[:-1]
    l, v, t = dec(stem[-1])
    w = []
    if which == "pres" and kind == "desc":
        w += [stem + "는"]
        w += [stem + ("인" if t and irr != "ㄹ" else "은")]  # 작인 (WB 17), 비싸은
        w += [fused_past(d, irr)]
        if irr == "ㄹ":
            w = [stem + "은", stem + "는", stem[:-1] + com(l, v) + "는"]
    elif which == "pres" and kind == "ex":
        w += [stem + "은", fused_past(d, irr), adn_l(d)]
    elif which == "pres":
        w += [adn_n(d, irr), adn_l(d, irr)]
        if t == "ㄹ":
            w.append(stem + "는")
        elif not t:
            w.append(stem + "은")
        else:
            w.append(stem + "은")  # 먹은 is the past: a tense slip
    elif which == "past":
        w += [fused_past(d, irr), adn_neun(d, irr)]
        if t == "ㄹ":
            w.append(stem + "은")
        elif not t:
            w.append(stem + "은")
        else:
            w.append(stem + "인")
    else:  # fut
        if t == "ㄹ":
            w += [stem + "을"]
        elif t:
            ss = sound_spell(right)
            if ss:
                w.append(ss)
        else:
            w += [stem + "을"]
        w += [adn_neun(d, irr) if kind in ("act", "ex") else adn_n(d, irr), fused_past(d, irr)]
    if irr == "ㅎ":
        w = {"pres": [stem + "은", stem + "는", "그랬"], "past": ["그랬", stem + "은"], "fut": [stem + "을", adn_n(d, irr), "그랬"]}[which]
    out = []
    for x in w:
        if x and x != right and x not in out:
            out.append(x)
    return out[:3]

def main_l9(n):
    rows, bad = [], []
    P = lambda x: x + " 것 같아요"
    for d, en, kind, irr, b_pres, b_past, b_fut in L9:
        pres = adn_neun(d, irr) if kind in ("act", "ex") else adn_n(d, irr)
        past = adn_n(d, irr) if kind == "act" else None
        fut = adn_l(d, irr)
        for what, got, book in (("pres", pres, b_pres), ("past", past, b_past), ("fut", fut, b_fut)):
            if book and got != book:
                bad.append((d, what, got, book))
        row = {"dict": d, "en": en, "kind": kind, "irr": irr or "reg", "hae": hae(d, irr if irr in ("ㅂ", "르", "으") else None) if irr != "ㅎ" else "그래요",
               "pres": pres, "fut": fut, "presP": P(pres), "futP": P(fut), "main": pres}
        words = {pres: wrongs_adn(d, kind, irr, "pres", pres), fut: wrongs_adn(d, kind, irr, "fut", fut)}
        if past:
            row["past"], row["pastP"] = past, P(past)
            words[past] = wrongs_adn(d, kind, irr, "past", past)
        row["wrong"] = words[pres]
        row["words"] = words
        row["wrongPresP"] = [P(x) for x in words[pres]]
        row["wrongFutP"] = [P(x) for x in words[fut]]
        if past:
            row["wrongPastP"] = [P(x) for x in words[past]]
        rows.append(row)
    # 이다 after a noun: 선생님인 것 같아요 (WB 22)
    if bad:
        print("MISMATCH vs book:", bad)
        sys.exit(1)
    write(n, rows, "TB p.60-66, key p.197, WB p.41-44, key p.125-126")
    for r in rows:
        print(r["dict"], r["kind"], "->", r["pres"], r.get("past"), r["fut"], " wrong:", r["words"])

# Lesson 10 (-기 전에). irr 'ㄹ' = ㄹ-stem (keeps its ㄹ: 놀기). (dict, english, irr, book -기 form or None)
# book = TB p.67-71, key p.197, WB p.45-48, key p.126-127
L10 = [
    ("가다", "to go", None, "가기"),
    ("사다", "to buy", None, "사기"),
    ("먹다", "to eat", None, "먹기"),
    ("공부하다", "to study", None, "공부하기"),
    ("내다", "to pay (돈을 내다 = to pay money)", None, "내기"),
    ("오다", "to come", None, "오기"),
    ("놀다", "to play, to hang out", "ㄹ", "놀기"),
    ("들어오다", "to come in", None, "들어오기"),
    ("도망가다", "to run away", None, "도망가기"),
    ("마시다", "to drink", None, "마시기"),
    ("연습하다", "to practice", None, "연습하기"),
    ("주다", "to give", None, "주기"),
    ("씻다", "to wash", None, "씻기"),
    ("쓰다", "to write; to use", None, "쓰기"),
    ("보내다", "to send", None, "보내기"),
    ("열다", "to open", "ㄹ", "열기"),
    ("팔다", "to sell", "ㄹ", "팔기"),
    ("자다", "to sleep", None, "자기"),
    ("운동하다", "to exercise, to work out", None, None),
]

def wrongs_gi(d, irr, right):
    """Learner slips for -기 전에: past before 기, the -는/-(으)ㄹ noun forms of Lesson 9, -고, ㄹ dropped."""
    stem = d[:-1]
    l, v, t = dec(stem[-1])
    h = hae(d, irr if irr in ("ㅂ", "르", "으") else None)
    w = [past_hae(h)[:-2] + "기"]  # 먹었기 전에
    w.append(adn_neun(d, irr))       # 먹는 전에
    if t == "ㄹ":
        w.append(stem[:-1] + com(l, v) + "기")  # 노기
    w.append(stem + "고")            # 먹고 전에
    out = []
    for x in w:
        if x != right and x not in out:
            out.append(x)
    return out[:3]

def main_l10(n):
    rows, bad = [], []
    for d, en, irr, b in L10:
        g = d[:-1] + "기"
        if b and g != b:
            bad.append((d, g, b))
        w = wrongs_gi(d, irr, g)
        rows.append({"dict": d, "en": en, "irr": irr or "reg", "hae": hae(d, irr if irr in ("ㅂ", "르", "으") else None),
                     "gi": g, "giJ": g + " 전에", "main": g, "wrong": w, "wrongGiJ": [x + " 전에" for x in w]})
    if bad:
        print("MISMATCH vs book:", bad)
        sys.exit(1)
    write(n, rows, "TB p.67-71, key p.197, WB p.45-48, key p.126-127")
    for r in rows:
        print(r["dict"], "->", r["giJ"], " wrong:", r["wrong"])

# Lesson 11 (ㅂ irregular). irr set by hand from the book: 'ㅂ' = ㅂ changes to 우 (돕다/곱다: 오) before a vowel,
# 'keep' = the book's exceptions where ㅂ stays (입다, 잡다, 씹다, 좁다, 넓다). kind: 'act' / 'desc' (for -(으)ㄴ/는 것).
# (dict, english, kind, irr, book: {form: printed}) — book = TB p.77-82, key p.197, WB p.49-52, key p.127-128
L11 = [
    ("돕다", "to help", "act", "ㅂ", {"hae": "도와요", "past": "도왔어요", "fut": "도울 거예요", "geot": "돕는 것", "myeon": "도우면", "go": "돕고", "seo": "도와서"}),
    ("어렵다", "to be difficult", "desc", "ㅂ", {"hae": "어려워요", "past": "어려웠어요", "fut": "어려울 거예요", "geot": "어려운 것"}),
    ("춥다", "to be cold", "desc", "ㅂ", {"hae": "추워요", "past": "추웠어요", "fut": "추울 거예요"}),
    ("아름답다", "to be beautiful", "desc", "ㅂ", {"hae": "아름다워요", "past": "아름다웠어요", "fut": "아름다울 거예요", "geot": "아름다운 것"}),
    ("귀엽다", "to be cute", "desc", "ㅂ", {"hae": "귀여워요", "past": "귀여웠어요", "fut": "귀여울 거예요", "geot": "귀여운 것"}),
    ("맵다", "to be spicy", "desc", "ㅂ", {"hae": "매워요", "past": "매웠어요", "fut": "매울 거예요", "geot": "매운 것"}),
    ("쉽다", "to be easy", "desc", "ㅂ", {"hae": "쉬워요", "past": "쉬웠어요", "fut": "쉬울 거예요", "geot": "쉬운 것"}),
    ("덥다", "to be hot (weather)", "desc", "ㅂ", {"hae": "더워요", "past": "더웠어요", "fut": "더울 거예요", "geot": "더운 것"}),
    ("굽다", "to bake; to grill", "act", "ㅂ", {"hae": "구워요", "past": "구웠어요", "fut": "구울 거예요", "geot": "굽는 것", "myeon": "구우면", "go": "굽고", "seo": "구워서"}),
    ("눕다", "to lie down", "act", "ㅂ", {"hae": "누워요", "past": "누웠어요", "fut": "누울 거예요", "geot": "눕는 것", "myeon": "누우면", "go": "눕고", "seo": "누워서"}),
    ("밉다", "to hate; to be dislikeable", "desc", "ㅂ", {"hae": "미워요", "past": "미웠어요", "fut": "미울 거예요", "geot": "미운 것"}),
    ("입다", "to wear", "act", "keep", {"hae": "입어요", "myeon": "입으면", "go": "입고", "seo": "입어서"}),
    ("잡다", "to catch", "act", "keep", {"myeon": "잡으면", "go": "잡고", "seo": "잡아서"}),
    ("씹다", "to bite; to chew", "act", "keep", {"myeon": "씹으면", "go": "씹고", "seo": "씹어서"}),
    ("좁다", "to be narrow", "desc", "keep", {"hae": "좁아요"}),
    ("넓다", "to be wide", "desc", "keep", {}),
]

def b_base(stem):
    """돕 -> 도, 어렵 -> 어려 (ㅂ dropped)."""
    l, v, t = dec(stem[-1])
    assert t == "ㅂ", stem
    return stem[:-1] + com(l, v)

def l11_forms(d, kind, irr):
    stem = d[:-1]
    l, v, t = dec(stem[-1])
    h = hae(d, "ㅂ" if irr == "ㅂ" else None)
    f = {"hae": h, "past": past_hae(h), "go": stem + "고"}
    if irr == "ㅂ":
        u = b_base(stem)
        f["fut"] = u + "울 거예요"
        f["myeon"] = u + "우면"
        f["geot"] = (stem + "는 것") if kind == "act" else (u + "운 것")
    else:
        f["fut"] = stem + "을 거예요"
        f["myeon"] = stem + "으면"
        f["geot"] = (stem + "는 것") if kind == "act" else (stem + "은 것")
    f["seo"] = h[:-1] + "서"
    return f

def l11_wrongs(d, kind, irr, f):
    """Learner slips. ㅂ verbs: ㅂ kept before a vowel (돕아요), 와/워 swapped, ㅂ dropped without 우 (어려어요),
    ㅂ changed before a consonant ending (도우고, 도우는 것). keep verbs: the irregular rule over-applied (이워요)."""
    stem = d[:-1]
    l, v, t = dec(stem[-1])
    W = {k: [] for k in ("hae", "past", "fut", "myeon", "go", "seo", "geot")}
    bright = v in ("ㅏ", "ㅗ")
    if irr == "ㅂ":
        u = b_base(stem)
        ow = "와" if f["hae"].endswith("와요") else "워"
        sw = "워" if ow == "와" else "와"
        W["hae"] = [stem + ("아요" if bright else "어요"), u + sw + "요", u + "어요"]
        W["past"] = [stem + ("았어요" if bright else "었어요"), past_hae(u + sw + "요"), f["hae"][:-1] + "었어요"]
        W["fut"] = [stem + "을 거예요", u + "을 거예요", stem[:-1] + com(l, v, "ㄹ") + " 거예요"]  # 돕을, 도을, 돌
        W["myeon"] = [stem + "으면", u + "면", u + "으면"]
        W["go"] = [u + "우고", u + ow + "고", stem + "꼬"]
        W["seo"] = [stem + ("아서" if bright else "어서"), u + sw + "서", u + "우어서"]
        W["geot"] = ([u + "우는 것", stem + "은 것", u + "운 것"] if kind == "act" else [stem + "은 것", u + "우는 것", stem + "는 것"])
    else:
        u = stem[:-1] + com(l, v) if t == "ㅂ" else None
        if u:  # 입다, 잡다, 씹다, 좁다: over-applied rule
            W["hae"] = [u + ("와요" if v == "ㅗ" else "워요"), u + "아요" if not bright else u + "어요"]
            W["past"] = [past_hae(u + ("와요" if v == "ㅗ" else "워요"))]
            W["fut"] = [u + "울 거예요"]
            W["myeon"] = [u + "우면"]
            W["seo"] = [u + ("와서" if v == "ㅗ" else "워서")]
            W["geot"] = [u + "운 것"] + ([stem + "은 것"] if kind == "act" else [stem + "는 것"])
        else:  # 넓다 (ㄼ)
            W["hae"] = [stem[:-1] + com(l, v, "ㄹ") + "워요", stem + "아요"]
            W["past"] = [stem[:-1] + com(l, v, "ㄹ") + "웠어요"]
            W["fut"] = [stem[:-1] + com(l, v, "ㄹ") + "울 거예요"]
            W["myeon"] = [stem[:-1] + com(l, v, "ㄹ") + "우면"]
            W["seo"] = [stem[:-1] + com(l, v, "ㄹ") + "워서"]
            W["geot"] = [stem[:-1] + com(l, v, "ㄹ") + "운 것", stem + "는 것"]
        W["hae"].append(stem + ("어요" if bright else "아요"))
        W["go"] = [stem + "꼬", stem + "으고"]
    out = {}
    for k, ws in W.items():
        o = []
        for x in ws:
            if x and x != f[k] and x not in o:
                o.append(x)
        out[k] = o[:3]
    return out

def main_l11(n):
    rows, bad = [], []
    for d, en, kind, irr, book in L11:
        f = l11_forms(d, kind, irr)
        for k, want in book.items():
            if f[k] != want:
                bad.append((d, k, f[k], want))
        w = l11_wrongs(d, kind, irr, f)
        row = {"dict": d, "en": en, "kind": kind, "irr": irr}
        row.update(f)
        row["main"] = f["hae"]
        row["wrong"] = w["hae"]
        for k in ("past", "fut", "myeon", "go", "seo", "geot"):
            row["wrong" + k[0].upper() + k[1:]] = w[k]
        row["words"] = {f[k]: w[k] for k in ("past", "fut", "myeon", "go", "seo") if w[k]}
        rows.append(row)
    if bad:
        print("MISMATCH vs book:", bad)
        sys.exit(1)
    write(n, rows, "TB p.77-82, key p.197, WB p.49-52, key p.127-128")
    for r in rows:
        print(r["dict"], r["irr"], "->", r["hae"], r["past"], r["fut"], r["myeon"], r["go"], r["seo"], r["geot"])
        print("    wrong:", r["wrong"], r["wrongPast"], r["wrongFut"], r["wrongMyeon"], r["wrongGo"], r["wrongSeo"], r["wrongGeot"])

# Lesson 13 (adjectives: descriptive verb + -(으)ㄴ before a noun). irr: 'ㅂ' (차가운), 'ㅎ' (하얀, 그런), 'ㄹ' (단),
# 'ex' = 있다/없다 words (+는: 재미있는, 맛있는), '르' only matters for 해요 (빠른 is regular here).
# (dict, english, irr, book adnominal or None)  book = TB p.88-93, key p.197, WB p.57-59, key p.129-130
L13 = [
    ("예쁘다", "to be pretty", None, "예쁜"),
    ("작다", "to be small", None, "작은"),
    ("빠르다", "to be fast", "르", "빠른"),
    ("조용하다", "to be quiet", None, "조용한"),
    ("비싸다", "to be expensive", None, "비싼"),
    ("싸다", "to be cheap", None, None),
    ("바쁘다", "to be busy", "으", None),
    ("하얗다", "to be white", "ㅎ", "하얀"),
    ("그렇다", "to be so, to be like that", "ㅎ", "그런"),
    ("달다", "to be sweet", "ㄹ", "단"),
    ("재미있다", "to be fun, interesting", "ex", None),
    ("맛있다", "to be delicious", "ex", "맛있는"),
    ("재미없다", "to be boring", "ex", None),
    ("좋다", "to be good", None, "좋은"),
    ("이상하다", "to be strange", None, "이상한"),
    ("차갑다", "to be cold (to the touch)", "ㅂ", "차가운"),
    ("나쁘다", "to be bad", "으", "나쁜"),
    ("크다", "to be big", "으", "큰"),
    ("행복하다", "to be happy", None, "행복한"),
    ("슬프다", "to be sad", "으", "슬픈"),
    ("피곤하다", "to be tired", None, "피곤한"),
    ("졸리다", "to be sleepy", None, "졸린"),
    ("귀엽다", "to be cute", "ㅂ", "귀여운"),
    ("덥다", "to be hot (weather)", "ㅂ", "더운"),
    ("많다", "to be many, to be a lot", None, "많은"),
]

def l13_adn(d, irr):
    stem = d[:-1]
    if irr == "ex":
        return stem + "는"
    if irr == "ㅂ":
        return b_base(stem) + "운"
    return adn_n(d, irr if irr in ("ㄹ", "ㅎ") else None)

def l13_wrongs(d, irr, right):
    """Learner slips: -은 on a vowel stem (예쁘은), -는 like action verbs (예쁘는), 인 (작인, WB L9), ㅎ kept (하얗은),
    ㄹ kept (달은), ㅂ kept (귀엽은) or dropped without 우 (귀여은), 있다 words with 은 (맛있은), the 해요 stem + ㄴ (예뻔)."""
    stem = d[:-1]
    l, v, t = dec(stem[-1])
    w = []
    if irr == "ex":
        w = [stem + "은", stem + "을", stem + "인"]
    elif irr == "ㅂ":
        u = b_base(stem)
        w = [stem + "은", u + "은", stem + "는"]
    elif irr == "ㅎ":
        w = [stem + "은", stem + "는", stem[:-1] + com(l, v) + "은"]
    elif irr == "ㄹ":
        w = [stem + "은", stem + "는", stem[:-1] + com(l, v) + "는"]
    elif t:
        w = [stem + "인", stem + "는", sound_spell(right) or stem + "을"]
    else:
        w = [stem + "은", stem + "는"]
        h = hae(d, irr if irr in ("르", "으") else None)
        hl, hv, ht = dec(h[-2])
        if h[:-1] != stem:
            w.append(h[:-2] + com(hl, hv, "ㄴ"))  # 예뻔, 빨란
        else:
            w.append(stem + "인")
    out = []
    for x in w:
        if x and x != right and x not in out:
            out.append(x)
    return out[:3]

def main_l13(n):
    rows, bad = [], []
    for d, en, irr, book in L13:
        a = l13_adn(d, irr)
        if book and a != book:
            bad.append((d, a, book))
        h = "그래요" if d == "그렇다" else "하얘요" if d == "하얗다" else hae(d, irr if irr in ("ㅂ", "르", "으") else None)
        row = {"dict": d, "en": en, "irr": {"ex": "ex", "ㅂ": "ㅂ", "ㅎ": "ㅎ", "ㄹ": "ㄹ"}.get(irr, "reg"), "hae": h, "adn": a, "main": a,
               "wrong": l13_wrongs(d, irr, a)}
        rows.append(row)
    if bad:
        print("MISMATCH vs book:", bad)
        sys.exit(1)
    write(n, rows, "TB p.88-93, key p.197, WB p.57-59, key p.129-130")
    for r in rows:
        print(r["dict"], r["irr"], "->", r["adn"], r["hae"], " wrong:", r["wrong"])

# ---- Lesson 14: action verb stem + -는 (ㄹ-stems drop ㄹ: 열다 → 여는) ----
L14 = [
    ("노래하다", "to sing", None, "노래하는"),
    ("좋아하다", "to like; to love", None, "좋아하는"),
    ("가다", "to go", None, "가는"),
    ("자다", "to sleep", None, "자는"),
    ("열다", "to open", "ㄹ", "여는"),
    ("불다", "to blow", "ㄹ", "부는"),
    ("먹다", "to eat", None, "먹는"),
    ("공부하다", "to study", None, None),
    ("오다", "to come", None, "오는"),
    ("알다", "to know", "ㄹ", "아는"),
    ("모르다", "to not know", "르", "모르는"),
    ("있다", "to be (somewhere), to have", "ex", "있는"),
    ("마시다", "to drink", None, None),
    ("보다", "to see, to watch", None, None),
    ("만들다", "to make", "ㄹ", None),
    ("살다", "to live", "ㄹ", None),
    ("팔다", "to sell", "ㄹ", None),
    ("일하다", "to work", None, None),
    ("읽다", "to read", None, None),
    ("기다리다", "to wait", None, None),
]
NASAL = {"ㄱ": "ㅇ", "ㄲ": "ㅇ", "ㄺ": "ㅇ", "ㄷ": "ㄴ", "ㅅ": "ㄴ", "ㅆ": "ㄴ", "ㅈ": "ㄴ", "ㅊ": "ㄴ", "ㅌ": "ㄴ", "ㅂ": "ㅁ", "ㅍ": "ㅁ"}

def l14_neun(d, irr):
    stem = d[:-1]
    l, v, t = dec(stem[-1])
    if t == "ㄹ":
        assert irr == "ㄹ", d
        return stem[:-1] + com(l, v) + "는"
    return stem + "는"

def l14_wrongs(d, irr, right):
    """Learner slips: past -(으)ㄴ (간, 먹은, 좋아한: WB T/F 2), future -(으)ㄹ (갈, 먹을), sound spelling (멍는, 인는),
    ㄹ kept (열는), ㄹ-stem past/descriptive (연), 르 doubled (몰르는), the 해요 stem + 는 (좋아해는)."""
    stem = d[:-1]
    l, v, t = dec(stem[-1])
    w = []
    if irr == "ㄹ":
        w = [stem + "는", stem[:-1] + com(l, v, "ㄴ"), stem + "은"]
    elif irr == "ex":
        w = [stem + "은", stem[:-1] + com(l, v, "ㄴ") + "는", stem + "을"]
    elif irr == "르":
        w = [stem[:-1] + com(l, v, "ㄴ"), stem[:-2] + com(*dec(stem[-2])[:2], "ㄹ") + stem[-1] + "는", stem[:-1] + com(l, v, "ㄹ")]
    elif t:
        nz = NASAL.get(t)
        w = [stem + "은", stem + "을"] + ([stem[:-1] + com(l, v, nz) + "는"] if nz else [])
    else:
        w = [stem[:-1] + com(l, v, "ㄴ"), stem[:-1] + com(l, v, "ㄹ")]
        if stem.endswith("하"):
            w.append(stem[:-1] + "해는")
        else:
            w.append(stem + "은")
    out = []
    for x in w:
        if x and x != right and x not in out:
            out.append(x)
    return out[:3]

def main_l14(n):
    rows, bad = [], []
    for d, en, irr, book in L14:
        a = l14_neun(d, irr)
        if book and a != book:
            bad.append((d, a, book))
        h = hae(d, "르" if irr == "르" else None)
        rows.append({"dict": d, "en": en, "irr": {"ㄹ": "ㄹ", "ex": "ex", "르": "르"}.get(irr, "reg"), "hae": h, "neun": a, "main": a,
                     "wrong": l14_wrongs(d, irr, a)})
    # book phrases: TB p.95-98, key p.197, WB p.60-62, key p.130
    book_phr = {"좋아하다": ["좋아하는 책", "제가 좋아하는 노래", "민지가 좋아하는 사람"], "먹다": ["자주 먹는 한국 음식"], "가다": ["자주 가는 카페", "자주 가는 옷 가게"],
                "오다": ["눈이 오는 날"], "있다": ["저기 있는 사람"], "알다": ["아는 사람"], "모르다": ["모르는 사람"]}
    for r in rows:
        for ph in book_phr.get(r["dict"], []):
            if r["neun"] not in ph.split():
                bad.append((r["dict"], r["neun"], ph))
    if bad:
        print("MISMATCH vs book:", bad)
        sys.exit(1)
    write(n, rows, "TB p.94-100, key p.197, WB p.60-62, key p.130")
    for r in rows:
        print(r["dict"], r["irr"], "->", r["neun"], r["hae"], " wrong:", r["wrong"])

# ---- Lesson 16: "let's" — -아/어/여요 (청유형) + the other endings of the book's chart: -(으)시죠, -자, -(으)ㄹ래요?, -(으)실래요? ----
# irr: 'ㅂ' (눕다: 누워요, 누우시죠, 눕자, 누울래요, 누우실래요 — WB key 10), 'ㄹ' (들다, 놀다: ㄹ drops before -시: 드시죠, 노시죠).
# hon = False: no honorific forms (먹다/마시다 → 드시다 in honorific speech; 먹으시죠 would be odd), so no 시죠/실래요 questions.
# (dict, english, irr, hon, book: {form: printed}) — book = TB p.105-109, key p.198, WB p.67-69, key p.131-132
L16 = [
    ("시작하다", "to start; to begin", None, True, {"hae": "시작해요", "sijyo": "시작하시죠", "ja": "시작하자", "lae": "시작할래요", "sillae": "시작하실래요"}),
    ("가다", "to go", None, True, {"hae": "가요", "sijyo": "가시죠", "ja": "가자", "lae": "갈래요", "sillae": "가실래요"}),
    ("공부하다", "to study", None, True, {"hae": "공부해요", "sijyo": "공부하시죠", "ja": "공부하자", "lae": "공부할래요", "sillae": "공부하실래요"}),
    ("달리다", "to run", None, True, {"hae": "달려요", "sijyo": "달리시죠", "ja": "달리자", "lae": "달릴래요", "sillae": "달리실래요"}),
    ("눕다", "to lie down", "ㅂ", True, {"hae": "누워요", "sijyo": "누우시죠", "ja": "눕자", "lae": "누울래요", "sillae": "누우실래요"}),
    ("보다", "to see; to watch", None, True, {"hae": "봐요", "sijyo": "보시죠", "ja": "보자", "lae": "볼래요", "sillae": "보실래요"}),
    ("먹다", "to eat", None, False, {"hae": "먹어요"}),
    ("만나다", "to meet", None, True, {"hae": "만나요"}),
    ("하다", "to do", None, True, {"hae": "해요"}),
    ("운동하다", "to exercise", None, True, {"hae": "운동해요"}),
    ("들다", "to lift; to carry", "ㄹ", True, {"hae": "들어요"}),
    ("마시다", "to drink", None, False, {}),
    ("기다리다", "to wait", None, True, {}),
    ("청소하다", "to clean", None, True, {}),
    ("일하다", "to work", None, True, {}),
    ("놀다", "to play; to hang out", "ㄹ", True, {}),
]

def l16_forms(d, irr, hon):
    stem = d[:-1]
    l, v, t = dec(stem[-1])
    f = {"hae": hae(d, "ㅂ" if irr == "ㅂ" else None), "ja": stem + "자"}
    if irr == "ㅂ":
        u = b_base(stem) + "우"            # 누우
        f["lae"] = b_base(stem) + "울래요"
        hs = u
    elif irr == "ㄹ":
        assert t == "ㄹ", d
        f["lae"] = stem + "래요"            # 놀래요
        hs = stem[:-1] + com(l, v)         # 노 (ㄹ drops before 시)
    elif t:
        f["lae"] = stem + "을래요"
        hs = stem + "으"
    else:
        f["lae"] = stem[:-1] + com(l, v, "ㄹ") + "래요"
        hs = stem
    if hon:
        f["sijyo"] = hs + "시죠"
        f["sillae"] = hs + "실래요"
    return f

def l16_wrongs(d, irr, f):
    """Learner slips. 해요: the L1 slips. -시죠/-실래요: 으 on a vowel stem or missing after a consonant, ㅂ kept (눕으시죠), ㄹ kept
    (놀으시죠, 놀시죠), 시조 spelling. -자: the 해요 stem + 자 (시작해자, 봐자), 으 inserted (먹으자), ㅂ changed (누우자 — the key says 눕자).
    -(으)ㄹ래요: 을래요 on a vowel stem (가을래요), 레요 spelling (갈레요), ㄹ missing (먹래요), ㅂ kept (눕을래요)."""
    stem = d[:-1]
    l, v, t = dec(stem[-1])
    W = {"hae": wrongs(d, "ㅂ" if irr == "ㅂ" else None, f["hae"])}
    hstem = f["hae"][:-1]
    if irr == "ㅂ":
        u = b_base(stem)
        W["ja"] = [u + "우자", u + "워자", stem + "으자"]
        W["lae"] = [stem + "을래요", u + "을래요", stem + "래요"]
        W["sijyo"] = [stem + "으시죠", u + "시죠", stem + "시죠"]
    elif irr == "ㄹ":
        W["ja"] = [stem + "으자", stem[:-1] + com(l, v) + "자", hstem + "자"]
        W["lae"] = [stem + "을래요", stem[:-1] + com(l, v) + "래요", stem + "레요"]
        W["sijyo"] = [stem + "으시죠", stem + "시죠", stem[:-1] + com(l, v) + "시조"]
    elif t:
        W["ja"] = [stem + "으자", hstem + "자", stem + "쟈"]
        W["lae"] = [stem + "래요", stem + "을레요", stem + "를래요"]
        W["sijyo"] = [stem + "시죠", stem + "으시조", hstem + "시죠"]
    else:
        W["ja"] = [hstem + "자", stem + "자요", stem + "쟈"]
        W["lae"] = [stem + "을래요", f["lae"].replace("래요", "레요"), hstem[:-1] + com(*dec(hstem[-1])[:2], "ㄹ") + "래요"]
        W["sijyo"] = [stem + "으시죠", stem + "시조", hstem + "시죠"]
    W["sillae"] = [x.replace("시죠", "실래요").replace("시조", "실레요") for x in W["sijyo"]]
    out = {}
    for k, ws in W.items():
        right = f.get(k)
        if right is None:
            continue
        o = []
        for x in ws:
            if x and x != right and x not in o and x not in f.values():
                o.append(x)
        out[k] = o[:3]
    return out

def main_l16(n):
    rows, bad = [], []
    for d, en, irr, hon, book in L16:
        f = l16_forms(d, irr, hon)
        for k, want in book.items():
            if f.get(k) != want:
                bad.append((d, k, f.get(k), want))
        w = l16_wrongs(d, irr, f)
        row = {"dict": d, "en": en, "irr": irr or "reg"}
        row.update(f)
        row["main"] = f["hae"]
        row["wrong"] = w["hae"]
        for k in ("sijyo", "ja", "lae", "sillae"):
            if k in w:
                row["wrong" + k[0].upper() + k[1:]] = w[k]
        row["words"] = {f[k]: w[k] for k in ("sijyo", "ja", "lae", "sillae") if k in f and w.get(k)}
        rows.append(row)
    # book sentences (TB p.105-108, WB key p.131-132): the 해요 form must appear in them
    book_sent = {"가다": "같이 가요", "먹다": "우리 햄버거 먹어요", "만나다": "세 시에 여기에서 만나요", "시작하다": "토요일에 시작해요",
                 "하다": "네, 지금 해요", "운동하다": "우리 내일부터 같이 운동해요", "들다": "같이 들어요"}
    for r in rows:
        if r["dict"] in book_sent and r["hae"] not in book_sent[r["dict"]].split():
            bad.append((r["dict"], r["hae"], book_sent[r["dict"]]))
    if bad:
        print("MISMATCH vs book:", bad)
        sys.exit(1)
    write(n, rows, "TB p.105-109, key p.198, WB p.67-69, key p.131-132")
    for r in rows:
        print(r["dict"], r["irr"], "->", r["hae"], r.get("sijyo"), r["ja"], r["lae"], r.get("sillae"))
        print("    wrong:", r["wrong"], r.get("wrongSijyo"), r["wrongJa"], r["wrongLae"], r.get("wrongSillae"))

# ---- Lesson 17: noun + 을/를 위해서, verb stem + -기 위해서 ----
# Verbs: (dict, english, irr, book -기 form or None). Nouns: (noun, english, book phrase or None).
# book = TB p.110-114, key p.198, WB p.70-72, key p.132
L17V = [
    ("가다", "to go", None, "가기"),
    ("배우다", "to learn", None, "배우기"),
    ("하다", "to do", None, "하기"),
    ("일어나다", "to get up", None, "일어나기"),
    ("보내다", "to send", None, "보내기"),
    ("공부하다", "to study", None, None),
    ("모으다", "to gather; to collect; to save up", "으", None),
    ("사다", "to buy", None, None),
    ("만나다", "to meet", None, None),
    ("먹다", "to eat", None, None),
    ("받다", "to receive; to get", None, None),
    ("살다", "to live", "ㄹ", None),
    ("일하다", "to work", None, None),
    ("준비하다", "to prepare", None, None),
]
L17N = [
    ("건강", "health", "건강을"),
    ("회사", "company", "회사를"),
    ("평화", "peace", "평화를"),
    ("부모님", "parents", "부모님을"),
    ("친구", "friend", "친구를"),
    ("미래", "future", "미래를"),
    ("피부", "skin", "피부를"),
    ("가족", "family", None),
    ("손님", "customer; guest", None),
    ("고양이", "cat", None),
]

def l17_noun(nn):
    t = dec(nn[-1])[2]
    return nn + ("을" if t else "를")

def l17_noun_wrongs(nn, right):
    t = dec(nn[-1])[2]
    w = [nn + ("를" if t else "을"), nn + ("이" if t else "가"), nn + "에"]
    return [x for x in w if x != right][:3]

def main_l17(n):
    rows, bad = [], []
    for d, en, irr, book in L17V:
        g = d[:-1] + "기"
        if book and g != book:
            bad.append((d, g, book))
        w = wrongs_gi(d, irr if irr == "ㄹ" else None, g)
        rows.append({"dict": d, "en": en, "irr": irr if irr == "ㄹ" else "reg", "kind": "verb", "gi": g, "giW": g + " 위해서",
                     "main": g, "wrong": w, "wrongGiW": [x + " 위해서" for x in w]})
    for nn, en, book in L17N:
        a = l17_noun(nn)
        if book and a != book:
            bad.append((nn, a, book))
        w = l17_noun_wrongs(nn, a)
        rows.append({"dict": nn, "en": en, "irr": "noun", "kind": "noun", "ul": a, "ulW": a + " 위해서", "main": a, "wrong": w,
                     "wrongUlW": [x + " 위해서" for x in w]})
    # book phrases: TB p.111-113, WB key p.132
    phr = ["건강을 위해서", "회사를 위해서", "한국에 가기 위해서", "일본어를 배우기 위해서", "세계 평화를 위해서", "부모님을 위해서",
           "배낭여행을 가기 위해서", "친구를 위해서", "미래를 위해서", "청소를 하기 위해서", "대학에 가기 위해서", "일어나기 위해서",
           "빨리 가기 위해서", "피부를 위해서", "보내기 위해서"]
    have = {r.get("giW") or r.get("ulW") for r in rows}
    for ph in phr:
        tail = " ".join(ph.split()[-2:])
        if tail.split()[0] in [r["main"] for r in rows] and tail not in have:
            bad.append(("phrase", ph))
    if bad:
        print("MISMATCH vs book:", bad)
        sys.exit(1)
    write(n, rows, "TB p.110-114, key p.198, WB p.70-72, key p.132")
    for r in rows:
        print(r["dict"], r["kind"], "->", r.get("giW") or r.get("ulW"), " wrong:", r["wrong"])

# Lesson 19 (-(으)ㄴ 다음에 / 후에 / 뒤에 = after -ing). The past adnominal -(으)ㄴ (Lessons 9, 13): vowel stem + ㄴ, consonant stem + 은,
# ㄹ-stem drops ㄹ + ㄴ (만들다 → 만든). (dict, english, irr, book form or None). book = TB p.120-124, key p.198, WB p.76-79, key p.133-134
L19 = [
    ("받다", "to receive", None, "받은"),
    ("가다", "to go", None, "간"),
    ("읽다", "to read", None, "읽은"),
    ("보다", "to see; to watch", None, "본"),
    ("먹다", "to eat", None, "먹은"),
    ("하다", "to do", None, "한"),
    ("결정하다", "to decide", None, "결정한"),
    ("쓰다", "to use; to write", None, "쓴"),
    ("마시다", "to drink", None, "마신"),
    ("운동하다", "to exercise", None, "운동한"),
    ("타다", "to ride, to take (a vehicle)", None, "탄"),
    ("치다", "to play (the piano)", None, "친"),
    ("공부하다", "to study", None, "공부한"),
    ("청소하다", "to clean", None, "청소한"),
    ("만나다", "to meet", None, "만난"),
    ("사다", "to buy", None, "산"),
    ("끝나다", "to end, to finish", None, None),
    ("오다", "to come", None, None),
    ("씻다", "to wash", None, None),
    ("만들다", "to make", "ㄹ", None),
    ("놀다", "to play, to hang out", "ㄹ", None),
]

def l19_wrongs(d, irr, right):
    """Slips: present -는 (먹는), future -(으)ㄹ (먹을), past 았/었 + 은 (먹었은), -기 from -기 전에 (먹기), vowel stem + 은 (가은),
    sound spelling (머근), ㄹ kept (만들은)."""
    stem = d[:-1]
    l, v, t = dec(stem[-1])
    h = hae(d, None)
    w = []
    if t == "ㄹ":
        w += [stem + "은", adn_neun(d, irr), stem]
    elif t:
        w += [adn_neun(d), stem + "을", sound_spell(right)]
    else:
        w += [adn_neun(d), adn_l(d), past_hae(h)[:-2] + "은"]
    w += [past_hae(h)[:-2] + "은", stem + "기"]
    out = []
    for x in w:
        if x and x != right and x not in out:
            out.append(x)
    return out[:4]

def main_l19(n):
    rows, bad = [], []
    for d, en, irr, book in L19:
        a = adn_n(d, irr)
        if book and a != book:
            bad.append((d, a, book))
        w = l19_wrongs(d, irr, a)
        row = {"dict": d, "en": en, "irr": irr or "reg", "kind": "verb", "adn": a, "main": a, "wrong": w[:3]}
        for k, noun in (("daeum", "다음에"), ("hu", "후에"), ("dwi", "뒤에")):
            row[k] = a + " " + noun
            row["wrong" + k[0].upper() + k[1:]] = [x + " " + noun for x in w[:3]]
        rows.append(row)
    # book phrases (TB p.121-123, key p.198, WB key p.133-134): the verb before 다음에/후에/뒤에 must match the table
    phr = ["받은 다음에", "받은 후에", "받은 뒤에", "간 다음에", "간 후에", "간 뒤에", "읽은 다음에", "읽은 후에", "읽은 뒤에",
           "본 다음에", "먹은 다음에", "한 다음에", "한 뒤에", "결정한 후에", "쓴 다음에", "마신 다음에", "탄 다음에", "친 다음에",
           "공부한 다음에", "청소한 다음에", "만난 다음에", "산 다음에", "운동한 다음에"]
    have = {r[k] for r in rows for k in ("daeum", "hu", "dwi")}
    for ph in phr:
        if ph not in have:
            bad.append(("phrase", ph))
    if bad:
        print("MISMATCH vs book:", bad)
        sys.exit(1)
    write(n, rows, "TB p.120-124, key p.198, WB p.76-79, key p.133-134")
    for r in rows:
        print(r["dict"], "->", r["daeum"], " wrong:", r["wrong"])

# Lesson 20 (-아/어/여도 = even if, even though). irr set by hand: 'ㅂ' (쉽다, 눕다, 춥다, 덥다 — Lesson 11), '으' (바쁘다, 예쁘다,
# 고프다, 크다, 아프다 — automatic in hae()). (dict, english, irr, book form or None)  book = TB p.125-129, key p.198, WB key p.134-135
L20 = [
    ("보다", "to see, to look; to watch", None, "봐도"),
    ("울다", "to cry", None, "울어도"),
    ("공부하다", "to study", None, "공부해도"),
    ("바쁘다", "to be busy", "으", "바빠도"),
    ("가다", "to go", None, "가도"),
    ("타다", "to ride, to take (a taxi)", None, "타도"),
    ("하다", "to do", None, "해도"),
    ("이상하다", "to be strange, weird", None, "이상해도"),
    ("좋다", "to be good", None, "좋아도"),
    ("예쁘다", "to be pretty", "으", "예뻐도"),
    ("쉽다", "to be easy", "ㅂ", "쉬워도"),
    ("달리다", "to run", None, "달려도"),
    ("비싸다", "to be expensive", None, "비싸도"),
    ("좋아하다", "to like", None, "좋아해도"),
    ("켜다", "to turn on", None, "켜도"),
    ("전화하다", "to call, to phone", None, "전화해도"),
    ("고프다", "to be hungry (배가 고프다)", "으", "고파도"),
    ("크다", "to be big", "으", "커도"),
    ("없다", "to not have; to not exist", None, "없어도"),
    ("않다", "to not (do / be) (-지 않다)", None, "않아도"),
    ("못하다", "to be bad at; can’t do", None, "못해도"),
    ("눕다", "to lie down", "ㅂ", "누워도"),
    ("세일하다", "to be on sale", None, "세일해도"),
    # game-only words (regular or Lesson 1/11 irregular; not printed with -아도 in the book)
    ("먹다", "to eat", None, None),
    ("오다", "to come", None, None),
    ("마시다", "to drink", None, None),
    ("기다리다", "to wait", None, None),
    ("늦다", "to be late", None, None),
    ("춥다", "to be cold (weather)", "ㅂ", None),
    ("덥다", "to be hot (weather)", "ㅂ", None),
    ("아프다", "to be sick, to hurt", "으", None),
    ("어렵다", "to be difficult", "ㅂ", None),
    ("힘들다", "to be hard, tiring", None, None),
]

def l20_wrongs(d, irr, right):
    """Slips for -아/어/여도: 아/어 swapped (먹아도), no contraction (가아도, 오아도), 하도 / 하아도, ㅡ-verbs (바뻐도, 바쁘어도),
    ㅂ kept or wrong vowel (쉽어도, 쉬와도), sound spelling (머거도), bare stem + 도 (먹도). Past + 도 (먹었어도) is NOT listed:
    it is correct Korean ("even if I had eaten")."""
    stem = d[:-1]
    l, v, t = dec(stem[-1])
    h = hae(d, irr)
    w = []
    if stem.endswith("하"):
        w += [stem + "도", stem + "아도"]
    elif irr == "으":
        hl, hv, ht = dec(h[-2])
        alt = "ㅓ" if hv == "ㅏ" else "ㅏ"
        w += [h[:-2] + com(hl, alt) + "도", stem + "어도", stem + "도"]
    elif irr == "ㅂ":
        base = stem[:-1] + com(l, v)
        w += [stem + "어도", base + ("와도" if not right.endswith("와도") else "워도"), stem + "아도"]
    elif t:
        w.append(stem + ("아도" if right.endswith("어도") else "어도"))
        if t in L and t not in ("ㅇ", "ㅎ") and len(t) == 1:
            nl, nv, nt = dec(right[len(stem)])
            w.append(stem[:-1] + com(l, v) + com(t, nv, nt) + right[len(stem) + 1:])
        elif t == "ㅆ":
            w.append(stem[:-1] + com(l, v) + "써도")
        w.append(stem + "도")
    else:
        if v == "ㅏ":
            w += [stem + "아도", stem + "어도"]
        elif d == "오다":
            w += ["오아도", "오도"]
        elif v == "ㅗ":
            w += [stem + "도", stem + "어도"]
        else:
            w += [stem + "도", stem + "아도"]
    out = []
    for x in w:
        if x != right and x not in out:
            out.append(x)
    return out[:3]

def main_l20(n):
    rows, bad = [], []
    for d, en, irr, book in L20:
        f = hae(d, irr)[:-1] + "도"
        if book and f != book:
            bad.append((d, f, book))
        rows.append({"dict": d, "en": en, "irr": irr or "reg", "hae": hae(d, irr), "do": f, "main": f, "wrong": l20_wrongs(d, irr, f)})
    # 보아도 is printed as the full form of 봐도, 공부하여도 of 공부해도: never listed as wrong
    for r in rows:
        if any(w in ("보아도", "공부하여도") for w in r["wrong"]):
            bad.append(("full form listed as wrong", r["dict"]))
    if bad:
        print("MISMATCH vs book:", bad)
        sys.exit(1)
    write(n, rows, "TB p.125-129, key p.198, WB p.80-83, key p.134-135")
    for r in rows:
        print(r["dict"], "->", r["do"], " wrong:", r["wrong"])

# Lesson 21 (-는데 / -은데 / -ㄴ데). kind by hand: 'act' (action verb: 는데), 'ex' (있다/없다 words: 는데), 'desc' (descriptive:
# consonant stem 은데, vowel or ㄹ stem ㄴ데), 'noun' (noun + 인데 = 이다). irr: 'ㄹ' (멀다 → 먼데, 알다 → 아는데), 'ㅂ' (춥다 → 추운데,
# Lesson 11), 'keep' (좁다 → 좁은데). (dict, english, kind, irr, book present form, book past form)
L21 = [
    ("하다", "to do", "act", None, "하는데", "했는데"),
    ("있다", "to be (there), to have", "ex", None, "있는데", "있었는데"),
    ("먹다", "to eat", "act", None, "먹는데", None),
    ("작다", "to be small", "desc", None, "작은데", None),
    ("좁다", "to be narrow", "desc", "keep", "좁은데", None),
    ("예쁘다", "to be pretty", "desc", None, "예쁜데", None),
    ("멀다", "to be far", "desc", "ㄹ", "먼데", None),
    ("바쁘다", "to be busy", "desc", None, "바쁜데", None),
    ("좋다", "to be good", "desc", None, "좋은데", None),
    ("멋있다", "to be cool, stylish", "ex", None, "멋있는데", None),
    ("재미있다", "to be fun, interesting", "ex", None, None, "재미있었는데"),
    ("보다", "to see, to watch", "act", None, None, "봤는데"),
    ("사다", "to buy", "act", None, None, "샀는데"),
    ("세일하다", "to be on sale", "act", None, None, None),
    # game-only words (Lesson 1/9/11/13/14 forms)
    ("크다", "to be big", "desc", None, None, None),
    ("비싸다", "to be expensive", "desc", None, None, None),
    ("춥다", "to be cold (weather)", "desc", "ㅂ", None, None),
    ("무섭다", "to be scary", "desc", "ㅂ", None, "무서웠는데"),
    ("무겁다", "to be heavy", "desc", "ㅂ", None, None),
    ("졸리다", "to be sleepy", "desc", None, None, None),
    ("배고프다", "to be hungry", "desc", None, None, None),
    ("없다", "to not have; to not exist", "ex", None, None, None),
    ("맛있다", "to be tasty", "ex", None, None, None),
    ("자다", "to sleep", "act", None, None, None),
]
L21N = [  # noun + 이다 → 인데 (book: 일요일인데, 9시인데, 생일인데, 학생인데)
    ("일요일", "Sunday", "일요일인데"), ("생일", "birthday", "생일인데"), ("학생", "student", "학생인데"), ("9시", "9 o’clock", "9시인데"),
    ("새벽", "dawn, early morning (새벽 두 시 = 2 a.m.)", None), ("천 원", "1,000 won", None),
]

def l21_nde(d, kind, irr):
    stem = d[:-1]
    l, v, t = dec(stem[-1])
    if kind in ("act", "ex"):
        if t == "ㄹ":
            return stem[:-1] + com(l, v) + "는데"
        return stem + "는데"
    if irr == "ㅂ":
        return stem[:-1] + com(l, v) + "운데"
    if t == "ㄹ":
        return stem[:-1] + com(l, v, "ㄴ") + "데"
    if t:
        return stem + "은데"
    return stem[:-1] + com(l, v, "ㄴ") + "데"

def l21_wrongs(d, kind, irr, right):
    stem = d[:-1]
    l, v, t = dec(stem[-1])
    w = []
    if kind in ("act", "ex"):
        if t == "ㄹ":
            w += [stem + "는데", stem[:-1] + com(l, v, "ㄴ") + "데"]
        elif t:
            w += [stem + "은데", stem + "인데"]
            ss = sound_spell(stem + "는") if False else None
            if t == "ㄱ":
                w.append(stem[:-1] + com(l, v, "ㅇ") + "는데")  # 멍는데 (pronunciation)
            if t == "ㅆ":
                w.append(stem[:-1] + com(l, v, "ㄴ") + "는데")  # 인는데 (pronunciation)
        else:
            w += [stem[:-1] + com(l, v, "ㄴ") + "데", stem + "은데"]
    else:
        w.append(stem + "는데")
        if irr == "ㅂ":
            w += [stem + "은데", stem[:-1] + com(l, v) + "우는데"]
        elif t == "ㄹ":
            w += [stem + "은데", stem[:-1] + com(l, v) + "는데"]
        elif t:
            w.append(stem + "인데")
        else:
            w.append(stem + "은데")
    out = []
    for x in w:
        if x and x != right and x not in out:
            out.append(x)
    return out[:3]

def main_l21(n):
    rows, bad = [], []
    for d, en, kind, irr, bp, bpast in L21:
        f = l21_nde(d, kind, irr)
        past = past_hae(hae(d, "ㅂ" if irr == "ㅂ" else None))[:-2] + "는데"
        if bp and f != bp:
            bad.append((d, f, bp))
        if bpast and past != bpast:
            bad.append((d, past, bpast))
        wp = [past[:-2] + "인데", past[:-2] + "은데"]
        rows.append({"dict": d, "en": en, "irr": irr or "reg", "kind": kind, "nde": f, "past": past, "main": f,
                     "wrong": l21_wrongs(d, kind, irr, f), "wrongPast": wp})
    for nn, en, bp in L21N:
        f = nn + "인데"
        if bp and f != bp:
            bad.append((nn, f, bp))
        rows.append({"dict": nn, "en": en, "irr": "noun", "kind": "noun", "nde": f, "main": f,
                     "wrong": [nn + "은데", nn + "는데", nn + "데"]})
    if bad:
        print("MISMATCH vs book:", bad)
        sys.exit(1)
    write(n, rows, "TB p.134-140, key p.198, WB p.84-87, key p.135")
    for r in rows:
        print(r["dict"], "->", r["nde"], r.get("past", ""), " wrong:", r["wrong"], r.get("wrongPast", ""))

# Lesson 22 (-(으)ㄹ 수도 있어요 = might, could; -(으)ㄹ 수 있다 = can). The -(으)ㄹ form (L9 future adnominal): vowel stem + ㄹ,
# ㄹ-stem as is (알 → 알), consonant + 을; irr 'ㅂ' (춥다 → 추울, Lesson 11), 'ㅎ' (그렇다 → 그럴), 'noun' (가짜 + 이다 → 가짜일).
# (dict, english, irr, book -(으)ㄹ form or None)  book = TB p.141-145, key p.198, WB key p.135-136
L22 = [
    ("알다", "to know", "ㄹ", "알"),
    ("만나다", "to meet", None, "만날"),
    ("작다", "to be small", None, "작을"),
    ("오다", "to come", None, "올"),
    ("가다", "to go", None, "갈"),
    ("그렇다", "to be so, to be like that", "ㅎ", "그럴"),
    ("쓰다", "to use", None, "쓸"),
    # game-only words (regular, Lesson 9 -(으)ㄹ forms; ㅂ as in Lesson 11)
    ("늦다", "to be late", None, None),
    ("많다", "to be many, a lot", None, None),
    ("새다", "to leak", None, None),
    ("막히다", "to be blocked, jammed (길이 막히다)", None, None),
    ("이상하다", "to be strange", None, None),
    ("고치다", "to fix", None, None),
    ("일하다", "to work", None, None),
    ("그만두다", "to quit", None, None),
    ("자다", "to sleep", None, None),
    ("무겁다", "to be heavy", "ㅂ", None),
]
L22N = [("가짜", "fake (가짜이다 = to be fake)", "가짜일"), ("진짜", "real (진짜이다 = to be real)", None)]

def l22_l(d, irr):
    stem = d[:-1]
    l, v, t = dec(stem[-1])
    if irr == "ㅂ":
        assert t == "ㅂ", d
        return stem[:-1] + com(l, v) + "울"
    if irr == "ㄹ" or t == "ㄹ":
        return stem
    return adn_l(d, irr)

def l22_wrongs(d, irr, right):
    """Slips before 수도: 을 on a vowel stem (오을), missing 을 (먹 수도), sound spelling (머글), ㄹ-stem + 을 (알을, 아를),
    ㅂ kept (춥을) or wrong vowel (추을), ㅎ kept (그렇을), present -는 / past -(으)ㄴ adnominal (먹는, 먹은, 온)."""
    stem = d[:-1]
    l, v, t = dec(stem[-1])
    w = []
    if irr == "ㅂ":
        w += [stem + "을", stem[:-1] + com(l, v) + "을", stem[:-1] + com(l, v) + "운"]
    elif irr == "ㅎ":
        w += [stem + "을", stem[:-1] + com(l, v) + "을", stem[:-1] + com(l, v, "ㄴ")]
    elif t == "ㄹ":
        w += [stem + "을", stem[:-1] + com(l, v) + "를", stem[:-1] + com(l, v) + "는"]
    elif t:
        ss = sound_spell(right)
        w += [stem, ss, adn_neun(d), stem + "은"]
    else:
        w += [stem + "을", stem[:-1] + com(l, v, "ㄴ"), stem + "는"]
    out = []
    for x in w:
        if x and x != right and x not in out:
            out.append(x)
    return out[:3]

def main_l22(n):
    rows, bad = [], []
    for d, en, irr, book in L22:
        f = l22_l(d, irr)
        if book and f != book:
            bad.append((d, f, book))
        w = l22_wrongs(d, irr, f)
        rows.append({"dict": d, "en": en, "irr": irr or "reg", "kind": "verb", "l": f, "sudo": f + " 수도 있다", "sudoY": f + " 수도 있어요",
                     "su": f + " 수 있어요", "main": f + " 수도 있어요", "wrong": [x + " 수도 있어요" for x in w], "wrongL": w})
    for nn, en, bp in L22N:
        last = nn[-1]
        f = nn + "일" if not dec(last)[2] else nn + "일"
        if bp and f != bp:
            bad.append((nn, f, bp))
        w = [nn + "을", nn + "이을", nn + "인"]
        rows.append({"dict": nn, "en": en, "irr": "noun", "kind": "noun", "l": f, "sudo": f + " 수도 있다", "sudoY": f + " 수도 있어요",
                     "main": f + " 수도 있어요", "wrong": [x + " 수도 있어요" for x in w], "wrongL": w})
    # every printed phrase (TB p.142-145, key p.198, WB key p.136) must be in the table
    phr = ["알 수도 있다", "만날 수도 있다", "작을 수도 있다", "올 수도 있어요", "갈 수도 있어요", "가짜일 수도 있어요", "그럴 수도 있어요",
           "쓸 수도 있다", "알 수도 있어요", "만날 수도 있어요", "작을 수도 있어요", "쓸 수도 있어요"]
    have = {r[k] for r in rows for k in ("sudo", "sudoY")}
    for ph in phr:
        if ph not in have:
            bad.append(("phrase", ph))
    if bad:
        print("MISMATCH vs book:", bad)
        sys.exit(1)
    write(n, rows, "TB p.141-145, key p.198, WB p.88-90, key p.135-136")
    for r in rows:
        print(r["dict"], "->", r["sudoY"], " wrong:", r["wrongL"])

# Lesson 24 (르 irregular). The book's rule: before -아/어/여요, -아/어/여서, -았/었/였어요 the 르 becomes ㄹ under the previous syllable
# and ONE MORE ㄹ is added (고르다 → 골라요); before other endings (-고, -는데, -기, -(으)면, -세요, -지) 르 stays.
# -아/어도 (Lesson 20) is built on the 해요 form too → 불러도 (WB key 13). kind: act / desc (-는데 vs -(으)ㄴ데, Lesson 21).
# (dict, english, kind, book: {form: printed}) — book = TB p.151-155, key p.199, WB p.95-97, key p.137-138
L24 = [
    ("고르다", "to choose; to pick; to select", "act", {"hae": "골라요", "seo": "골라서", "past": "골랐어요", "gi": "고르기", "seyo": "고르세요"}),
    ("모르다", "to not know", "act", {"hae": "몰라요", "seo": "몰라서", "past": "몰랐어요", "nde": "모르는데"}),
    ("빠르다", "to be fast", "desc", {"hae": "빨라요", "seo": "빨라서", "past": "빨랐어요"}),
    ("자르다", "to cut", "act", {"hae": "잘라요", "seo": "잘라서", "past": "잘랐어요"}),
    ("기르다", "to grow, to raise", "act", {"hae": "길러요", "seo": "길러서", "past": "길렀어요", "go": "기르고"}),
    ("다르다", "to be different", "desc", {"hae": "달라요", "seo": "달라서", "past": "달랐어요"}),
    ("누르다", "to press, to push", "act", {"hae": "눌러요", "seo": "눌러서", "past": "눌렀어요", "go": "누르고"}),
    ("마르다", "to dry (up); to be skinny", "act", {"hae": "말라요", "seo": "말라서", "past": "말랐어요", "gi": "마르기"}),
    ("바르다", "to rub, to put on", "act", {"hae": "발라요", "seo": "발라서", "past": "발랐어요"}),
    ("부르다", "to call, to address; to sing", "act", {"hae": "불러요", "seo": "불러서", "past": "불렀어요", "do": "불러도"}),
    ("서두르다", "to hurry", "act", {"hae": "서둘러요", "seo": "서둘러서", "past": "서둘렀어요", "ji": "서두르지"}),
    ("찌르다", "to stab; to stick", "act", {"hae": "찔러요", "seo": "찔러서", "past": "찔렀어요"}),
    ("배부르다", "to be full (after eating)", "desc", {"hae": "배불러요"}),
]

def l24_forms(d, kind):
    stem = d[:-1]
    assert stem[-1] == "르", d
    h = hae(d, "르")
    base = h[:-1]
    f = {"hae": h, "past": past_hae(h), "seo": base + "서", "do": base + "도",
         "go": stem + "고", "gi": stem + "기", "ji": stem + "지", "myeon": stem + "면",
         "nde": stem + "는데" if kind == "act" else stem[:-1] + "른데"}
    if kind == "act":
        f["seyo"] = stem + "세요"
    return f

def l24_wrongs(d, kind, f):
    """Slips: no extra ㄹ (고라요 — the 으-rule), vowel harmony swapped (골러요), no change at all (고르어요);
    for the endings that keep 르: the irregular form over-applied (골라고, 골라는데) or a doubled ㄹ (골르고)."""
    stem = d[:-1]
    pre = stem[:-1]
    pl, pv, pt = dec(pre[-1])
    no_l = pre[:-1] + com(pl, pv)           # 고
    with_l = pre[:-1] + com(pl, pv, "ㄹ")   # 골
    bright = pv in ("ㅏ", "ㅗ")
    a, sw = ("라", "러") if bright else ("러", "라")
    plain = "어" if True else "아"
    W = {
        "hae": [no_l + a + "요", with_l + sw + "요", stem + "어요"],
        "past": [past_hae(no_l + a + "요"), past_hae(with_l + sw + "요"), stem + "었어요"],
        "seo": [no_l + a + "서", with_l + sw + "서", stem + "어서"],
        "do": [no_l + a + "도", with_l + sw + "도", stem + "어도"],
        "go": [with_l + a + "고", with_l + "르고"],
        "gi": [with_l + a + "기", with_l + "르기"],
        "ji": [with_l + a + "지", with_l + "르지"],
        "myeon": [with_l + a + "면", with_l + "르면", stem + "으면"],
        "nde": ([with_l + a + "는데", with_l + "르는데"] if kind == "act" else [stem + "는데", with_l + "른데", with_l + a + "는데"]),
        "seyo": [with_l + a + "세요", with_l + "르세요"],
    }
    out = {}
    for k, ws in W.items():
        o = []
        for x in ws:
            if k in f and x != f[k] and x not in o:
                o.append(x)
        out[k] = o[:3]
    return out

def main_l24(n):
    rows, bad = [], []
    for d, en, kind, book in L24:
        f = l24_forms(d, kind)
        for k, want in book.items():
            if f.get(k) != want:
                bad.append((d, k, f.get(k), want))
        w = l24_wrongs(d, kind, f)
        row = {"dict": d, "en": en, "kind": kind, "irr": "르"}
        row.update(f)
        row["main"] = f["hae"]
        row["wrong"] = w["hae"]
        for k in ("past", "seo", "do", "go", "gi", "ji", "myeon", "nde", "seyo"):
            if k in w:
                row["wrong" + k[0].upper() + k[1:]] = w[k]
        row["words"] = {f[k]: w[k] for k in ("past", "seo", "do", "go", "nde", "myeon") if w.get(k)}
        rows.append(row)
    if bad:
        print("MISMATCH vs book:", bad)
        sys.exit(1)
    write(n, rows, "TB p.151-155, key p.199, WB p.95-97, key p.137-138")
    for r in rows:
        print(r["dict"], "->", r["hae"], r["past"], r["seo"], r["do"], "|", r["go"], r["nde"], r["myeon"], r.get("seyo"))
        print("    wrong:", r["wrong"], r["wrongPast"], r["wrongSeo"], r["wrongGo"], r["wrongNde"])

# Lesson 25 (-네요). Book: verb stem + 네요, past -았/었/였 + 네요, noun + 이네요 (11월이네요, 남편이네요).
# Irregular stems do not change: -네요 starts with a consonant (춥네요, 어렵네요, 무겁네요, 더럽네요 — WB key; 빠르네요, 바쁘네요).
# ㄹ-stems drop ㄹ before ㄴ (멀다 → 머네요) — NOT in the L25 book text; the same rule as 여는 / 부는 (Lesson 14), marked as an app note.
# (dict, english, irr, book: {form: printed}) — TB p.156-160, key p.199, WB p.98-100, key p.138-139
L25 = [
    ("맛있다", "to be tasty, delicious", None, {"ne": "맛있네요"}),
    ("크다", "to be big", "으", {"ne": "크네요", "hae": "커요"}),
    ("어울리다", "to suit, to go well with (잘 어울리다 = to suit someone well)", None, {"ne": "어울리네요", "hae": "어울려요"}),
    ("맞다", "to be correct, to be right", None, {"ne": "맞네요", "hae": "맞아요"}),
    ("있다", "to be (somewhere), to exist; to have", None, {"ne": "있네요"}),
    ("재미있다", "to be fun, interesting", None, {"ne": "재미있네요", "hae": "재미있어요"}),
    ("춥다", "to be cold (weather)", "ㅂ", {"ne": "춥네요"}),
    ("오다", "to come", None, {"pastNe": "왔네요"}),
    ("어렵다", "to be difficult", "ㅂ", {"ne": "어렵네요", "hae": "어려워요"}),
    ("무겁다", "to be heavy", "ㅂ", {"ne": "무겁네요", "hae": "무거워요"}),
    ("깊다", "to be deep", None, {"ne": "깊네요", "hae": "깊어요"}),
    ("더럽다", "to be dirty", "ㅂ", {"ne": "더럽네요", "hae": "더러워요"}),
    ("밝다", "to be bright", None, {"ne": "밝네요", "hae": "밝아요"}),
    # game words (forms not printed in L25; regular / earlier-lesson rules)
    ("많다", "to be many, to be a lot", None, {}),
    ("비싸다", "to be expensive", None, {}),
    ("좋다", "to be good", None, {}),
    ("빠르다", "to be fast", "르", {}),
    ("바쁘다", "to be busy", "으", {}),
    ("덥다", "to be hot (weather)", "ㅂ", {}),
    ("먹다", "to eat", None, {}),
    ("하다", "to do", None, {}),
    ("가다", "to go", None, {}),
    ("멀다", "to be far", "ㄹ", {}),
    ("알다", "to know", "ㄹ", {}),
    ("길다", "to be long", "ㄹ", {}),
]
L25N = [("11월", "November", "11월이네요"), ("남편", "husband", "남편이네요"), ("학생", "student", None)]

NASAL = {"ㄱ": "ㅇ", "ㄲ": "ㅇ", "ㅋ": "ㅇ", "ㄳ": "ㅇ", "ㄺ": "ㅇ", "ㄷ": "ㄴ", "ㅅ": "ㄴ", "ㅆ": "ㄴ", "ㅈ": "ㄴ", "ㅊ": "ㄴ",
         "ㅌ": "ㄴ", "ㅎ": "ㄴ", "ㅂ": "ㅁ", "ㅍ": "ㅁ", "ㅄ": "ㅁ", "ㄿ": "ㅁ"}

def l25_sound(stem):
    """맞 → 만, 있 → 인, 춥 → 춤, 밝 → 방: the final consonant as heard before ㄴ (nasalisation)."""
    l, v, t = dec(stem[-1])
    if t in NASAL:
        return stem[:-1] + com(l, v, NASAL[t])
    return None

def l25_forms(d, irr):
    stem = d[:-1]
    l, v, t = dec(stem[-1])
    ne_stem = stem[:-1] + com(l, v) if t == "ㄹ" else stem
    h = hae(d, irr if irr in ("ㅂ", "르", "으") else None)
    p = past_hae(h)
    return {"hae": h, "ne": ne_stem + "네요", "pastNe": p[:-2] + "네요", "past": p}

def l25_wrongs(d, irr, f):
    stem = d[:-1]
    l, v, t = dec(stem[-1])
    h = f["hae"]
    w = [h[:-1] + "네요"]                          # 해요 form + 네요: 커네요, 어려워네요, 맞아네요
    if t == "ㄹ":
        w = [stem + "네요", stem + "으네요"] + w     # ㄹ kept: 멀네요
    elif t:
        ss = l25_sound(stem)
        if ss:
            w.append(ss + "네요")                   # sound spelling: 만네요, 인네요, 춤네요
        w.append(stem + "으네요")                   # 으 inserted: 맞으네요
    w.append(f["ne"][:-2] + "내요")                 # 네 / 내 confusion: 크내요
    pw = [f["past"][:-1] + "네요", f["pastNe"][:-2] + "내요", h[:-1] + "네요"]   # 왔어네요, 왔내요, 와네요 (present)
    pst = f["pastNe"][:-2]
    ss = l25_sound(pst)
    if ss:
        pw.insert(1, ss + "네요")                   # 완네요
    clean = lambda xs, right: [x for i, x in enumerate(xs) if x != right and x not in xs[:i]][:3]
    return clean(w, f["ne"]), clean(pw, f["pastNe"])

def main_l25(n):
    rows, bad = [], []
    for d, en, irr, book in L25:
        f = l25_forms(d, irr)
        for k, want in book.items():
            if f.get(k) != want:
                bad.append((d, k, f.get(k), want))
        w, pw = l25_wrongs(d, irr, f)
        rows.append({"dict": d, "en": en, "irr": irr or "reg", "kind": "verb", "hae": f["hae"], "past": f["past"], "ne": f["ne"],
                     "pastNe": f["pastNe"], "main": f["ne"], "wrong": w, "wrongPast": pw, "words": {f["pastNe"]: pw}})
        if not book:
            rows[-1]["noVocab"] = True   # game-only word from earlier lessons: not in the L25 vocabulary deck
    for nn, en, bp in L25N:
        f = nn + ("이네요" if dec(nn[-1])[2] else "네요")
        if bp and f != bp:
            bad.append((nn, f, bp))
        w = [nn + "네요", nn + "이내요", nn + "이에요네요"]
        rows.append({"dict": nn, "en": en, "irr": "noun", "kind": "noun", "ne": f, "main": f, "wrong": [x for x in w if x != f], "noVocab": nn != "남편"})
    if bad:
        print("MISMATCH vs book:", bad)
        sys.exit(1)
    write(n, rows, "TB p.156-160, key p.199, WB p.98-100, key p.138-139")
    for r in rows:
        print(r["dict"], "->", r["ne"], r.get("pastNe"), " wrong:", r["wrong"], r.get("wrongPast"))

# Lesson 26 (ㄷ irregular). Book: ㄷ batchim + vowel → ㄹ (듣 + 어서 → 들어서); consonant endings keep ㄷ (듣고 있어요, 걷는 것).
# Regular (keep ㄷ): 받다, 묻다 (to bury), 닫다, 믿다. 묻다 has two rows (ask = irregular, bury = regular) → each row has an id.
# (id, dict, english, irr, book: {form: printed}) — TB p.161-166, key p.199, WB p.101-103, key p.139-140
L26 = [
    ("듣다", "듣다", "to listen, to hear", "ㄷ", {"seo": "들어서", "prog": "듣고 있어요", "past": "들었어요", "hae": "들어요", "fut": "들을 거예요"}),
    ("걷다", "걷다", "to walk", "ㄷ", {"hae": "걸어요", "neun": "걷는", "past": "걸었어요", "pastNde": "걸었는데", "fut": "걸을 거예요", "prog": "걷고 있어요"}),
    ("묻다.ask", "묻다", "to ask", "ㄷ", {"myeon": "물으면", "hae": "물어요", "do": "물어도", "past": "물었어요", "fut": "물을 거예요", "prog": "묻고 있어요"}),
    ("싣다", "싣다", "to load", "ㄷ", {"fut": "실을 거예요", "hae": "실어요", "past": "실었어요", "prog": "싣고 있어요"}),
    ("깨닫다", "깨닫다", "to realize", "ㄷ", {"past": "깨달았어요", "hae": "깨달아요", "fut": "깨달을 거예요", "prog": "깨닫고 있어요"}),
    ("붇다", "붇다", "to swell (up), to be bloated", "ㄷ", {"hae": "불어요", "past": "불었어요", "fut": "불을 거예요", "prog": "붇고 있어요"}),
    ("받다", "받다", "to receive, to get", "keep", {"seo": "받아서", "hae": "받아요", "past": "받았어요", "fut": "받을 거예요", "prog": "받고 있어요"}),
    ("묻다.bury", "묻다", "to bury", "keep", {"hae": "묻어요", "past": "묻었어요", "fut": "묻을 거예요", "prog": "묻고 있어요"}),
    ("닫다", "닫다", "to close", "keep", {"myeon": "닫으면", "hae": "닫아요", "past": "닫았어요", "fut": "닫을 거예요", "prog": "닫고 있어요"}),
    ("믿다", "믿다", "to believe, to trust", "keep", {"hae": "믿어요", "past": "믿었어요", "fut": "믿을 거예요", "prog": "믿고 있어요"}),
]

def l26_forms(d, irr):
    stem = d[:-1]
    l, v, t = dec(stem[-1])
    assert t == "ㄷ", d
    vb = stem[:-1] + com(l, v, "ㄹ") if irr == "ㄷ" else stem      # stem before a vowel: 들 / 받
    a = "아" if v in ("ㅏ", "ㅗ") else "어"
    pa = "았" if a == "아" else "었"
    f = {"hae": vb + a + "요", "past": vb + pa + "어요", "fut": vb + "을 거예요", "seo": vb + a + "서", "myeon": vb + "으면",
         "do": vb + a + "도", "go": stem + "고", "prog": stem + "고 있어요", "neun": stem + "는", "pastNde": vb + pa + "는데"}
    return f, vb

def l26_wrongs(d, irr, f, vb):
    """ㄷ verbs: ㄷ kept before a vowel (듣어요 — the book's distractors 듣어서, 깨닫았어요), 아/어 swapped, ㄹ-stem confusion
    (들 거예요, 들면 = forms of 들다), ㄹ used before a consonant (들고 있어요 = holding, 걸는).
    Regular verbs: the ㄹ change over-applied (발아서, 달으면 — the book's distractors; 밀어요 = push, 물어요 = ask)."""
    stem = d[:-1]
    l, v, t = dec(stem[-1])
    other = stem[:-1] + com(l, v, "ㄹ") if irr != "ㄷ" else stem     # the wrong vowel-stem
    a = "아" if v in ("ㅏ", "ㅗ") else "어"
    sw, psw = ("어", "었") if a == "아" else ("아", "았")
    pa = "았" if a == "아" else "었"
    nol = stem[:-1] + com(l, v)       # 드 / 거 (ㄹ-drop look)
    W = {
        "hae": [other + a + "요", vb + sw + "요"],
        "past": [other + pa + "어요", vb + psw + "어요"],
        "fut": [other + "을 거예요"] + ([vb + " 거예요"] if irr == "ㄷ" else []),
        "seo": [other + a + "서", vb + sw + "서"],
        "myeon": [other + "으면"] + ([vb + "면"] if irr == "ㄷ" else []),
        "do": [other + a + "도", vb + sw + "도"],
        "go": [stem[:-1] + com(l, v, "ㄹ") + "고"] if irr == "ㄷ" else [other + "고"],
        "prog": [stem[:-1] + com(l, v, "ㄹ") + "고 있어요"] if irr == "ㄷ" else [other + "고 있어요"],
        "neun": ([stem[:-1] + com(l, v, "ㄹ") + "는", nol + "는"] if irr == "ㄷ" else [other + "는"]),
        "pastNde": [other + pa + "는데", vb + pa + "은데"],
    }
    out = {}
    for k, ws in W.items():
        o = []
        for x in ws:
            if x != f[k] and x not in o:
                o.append(x)
        out[k] = o[:3]
    return out

def main_l26(n):
    rows, bad = [], []
    for rid, d, en, irr, book in L26:
        f, vb = l26_forms(d, irr)
        for k, want in book.items():
            if f.get(k) != want:
                bad.append((rid, k, f.get(k), want))
        w = l26_wrongs(d, irr, f, vb)
        row = {"id": rid, "dict": d, "en": en, "irr": irr, "kind": "verb"}
        row.update(f)
        row["main"] = f["hae"]
        row["wrong"] = w["hae"]
        for k in ("past", "fut", "seo", "myeon", "do", "go", "prog", "neun", "pastNde"):
            row["wrong" + k[0].upper() + k[1:]] = w[k]
        row["words"] = {f[k]: w[k] for k in ("past", "seo", "myeon", "do", "go") if w[k]}
        if rid == "묻다.bury":
            row["noVocab"] = True
        rows.append(row)
    if bad:
        print("MISMATCH vs book:", bad)
        sys.exit(1)
    write(n, rows, "TB p.161-166, key p.199, WB p.101-103, key p.139-140")
    for r in rows:
        print(r["id"], "->", r["hae"], r["past"], r["fut"], r["prog"], r["seo"], r["myeon"], r["do"], r["neun"], r["pastNde"])
        print("    wrong:", r["wrong"], r["wrongPast"], r["wrongFut"], r["wrongSeo"], r["wrongMyeon"], r["wrongGo"], r["wrongNeun"])

# ---- Lesson 27: politeness levels — 존댓말 (-아/어요) → 반말 (-아/어): drop 요; -이에요/-예요 → -이야/-야; names + 아/야 ----
# Verbs: (dict, english, irr, kind, book {col: form}). book = TB p.167-174, key p.199, WB p.104-107, key p.140
L27V = [
    ("하다", "to do", None, "act", {"banPast": "했어"}),
    ("만나다", "to meet", None, "act", {"past": "만났어요", "banPast": "만났어", "fut": "만날 거예요", "banFut": "만날 거야"}),
    ("일하다", "to work", None, "act", {"fut": "일할 거예요", "banFut": "일할 거야"}),
    ("있다", "to be (there), to have", None, "ex", {"ban": "있어"}),
    ("먹다", "to eat", None, "act", {"ban": "먹어"}),
    ("배부르다", "to be full (after eating)", "르", "desc", {"hae": "배불러요"}),
    ("오다", "to come", None, "act", {"ban": "와"}),
    ("가다", "to go", None, "act", {"kka": "갈까요", "banKka": "갈까"}),
    ("보다", "to see, to watch", None, "act", {}),
    ("마시다", "to drink", None, "act", {}),
    ("자다", "to sleep", None, "act", {}),
    ("좋다", "to be good", None, "desc", {}),
    ("괜찮다", "to be okay", None, "desc", {}),
    ("바쁘다", "to be busy", "으", "desc", {}),
    ("춥다", "to be cold (weather)", "ㅂ", "desc", {}),
    ("피곤하다", "to be tired", None, "desc", {}),
    ("알다", "to know", "ㄹ", "act", {}),
    ("모르다", "to not know", "르", "act", {}),
    ("듣다", "to hear, to listen", "ㄷ", "act", {}),
    ("걱정하다", "to worry", None, "act", {"jima": "걱정하지 마세요", "banJima": "걱정하지 마"}),
    ("늦다", "to be late", None, "act", {"banJima": "늦지 마"}),
]
# Nouns + 이에요/예요: (noun, english, book {col: form})
L27N = [
    ("뭐", "what", {"hae": "뭐예요", "ban": "뭐야"}),
    ("학생", "student", {}),
    ("친구", "friend", {}),
    ("커피", "coffee", {}),
    ("라면", "ramen (also: the cat)", {}),
    ("내일", "tomorrow", {}),
]
# Names: (name, book {col: form}); voc = calling someone in 반말 (+아 after a consonant, +야 after a vowel); third = name as subject in 반말 talk
L27P = [
    ("경은", {"voc": "경은아"}),
    ("현우", {"voc": "현우야"}),
    ("석진", {"third": "석진이가"}),
    ("승훈", {"voc": "승훈아"}),
    ("민지", {}),
    ("수아", {}),
    ("소연", {}),
    ("현정", {}),
]

def hae_d(d, irr):
    """hae() plus the ㄷ irregular (듣다 → 들어요), which hae() does not cover."""
    if irr == "ㄷ":
        stem = d[:-1]; l, v, t = dec(stem[-1])
        return stem[:-1] + com(l, v, "ㄹ") + ("아요" if v in ("ㅏ", "ㅗ") else "어요")
    return hae(d, irr if irr in ("ㅂ", "르", "으") else None)

def l27_verb(d, irr):
    stem = d[:-1]
    h = hae_d(d, irr)
    p = past_hae(h)
    l, v, t = dec(stem[-1])
    if irr == "ㅂ":
        fut = b_base(stem) + "울 거예요"; kk = b_base(stem) + "울까요"
    elif irr == "ㄷ":
        ls = stem[:-1] + com(l, v, "ㄹ"); fut = ls + "을 거예요"; kk = ls + "을까요"
    elif irr == "ㄹ":
        fut = stem + " 거예요"; kk = stem + "까요"
    else:
        fut = fut_geo(d); kk = kka(d)
    f = {"hae": h, "ban": h[:-1], "past": p, "banPast": p[:-1], "fut": fut, "banFut": fut.replace("거예요", "거야"),
         "kka": kk, "banKka": kk[:-1]}
    return f

def l27_verb_wrongs(d, irr, f):
    """반말 slips: 요 kept (= still 존댓말), bare stem (먹, 하), dictionary form (먹다: the plain written style, not this lesson),
    noun ending 야 added to a verb (먹어야 = must eat), past without 어 (만났), future 거예 / 거이야, -(으)ㄹ까 kept polite."""
    stem = d[:-1]
    W = {
        "ban": [f["hae"], stem, d, f["ban"] + "야"],
        "banPast": [f["past"], f["banPast"][:-1], f["banPast"][:-1] + "다", f["banPast"] + "야"],
        "banFut": [f["fut"], f["fut"][:-1], f["fut"].replace("거예요", "거이야"), f["fut"].replace(" 거예요", " 것이야")],
        "banKka": [f["kka"], f["banKka"] + "야", f["banKka"][:-1] + "가"],
    }
    out = {}
    for k, ws in W.items():
        o = []
        for x in ws:
            if x and x != f[k] and x not in o:
                o.append(x)
        out[k] = o[:3]
    return out

def l27_noun(nn):
    t = dec(nn[-1])[2]
    return (nn + "이에요", nn + "이야") if t else (nn + "예요", nn + "야")

def l27_noun_wrongs(nn, hae_f, ban_f):
    t = dec(nn[-1])[2]
    if t:
        w = [hae_f, nn + "야", nn + "이에", nn + "이예요"]
    else:
        w = [hae_f, nn + "이야", nn + "예", nn + "에요"]
    return [x for x in w if x != ban_f][:3]

def l27_name(nm):
    t = dec(nm[-1])[2]
    if t:
        return {"voc": nm + "아", "third": nm + "이가", "polite": nm + " 씨"}, {"wrongVoc": [nm + "야", nm + " 씨", nm + "이야"], "wrongThird": [nm + "가", nm + "아가", nm + "야가"]}  # not nm + "이": 석진이 했어 is correct (subject particle 이)
    return {"voc": nm + "야", "third": nm + "가", "polite": nm + " 씨"}, {"wrongVoc": [nm + "아", nm + " 씨", nm + "이야"], "wrongThird": [nm + "이가", nm + "야가", nm + "이"]}

def main_l27(n):
    rows, bad = [], []
    for d, en, irr, kind, book in L27V:
        f = l27_verb(d, irr)
        if "jima" in book or "banJima" in book:
            f["jima"] = d[:-1] + "지 마세요"; f["banJima"] = d[:-1] + "지 마"
        for k, want in book.items():
            if f.get(k) != want:
                bad.append((d, k, f.get(k), want))
        w = l27_verb_wrongs(d, irr, f)
        row = {"dict": d, "en": en, "irr": irr or "reg", "kind": "verb"}
        row.update(f)
        row["main"] = f["ban"]
        row["wrong"] = w["ban"]
        row["wrongPast"] = w["banPast"]; row["wrongFut"] = w["banFut"]; row["wrongKka"] = w["banKka"]
        if "banJima" in f:
            row["wrongJima"] = [f["jima"], d[:-1] + "지 말", d[:-1] + "지 마요"]
        row["words"] = {f["banPast"]: w["banPast"], f["banFut"]: w["banFut"]}
        if d not in ("걱정하다", "늦다"):      # the other verbs are old friends: only the two workbook verbs join the L27 deck
            row["noVocab"] = True
        rows.append(row)
    for nn, en, book in L27N:
        h, b = l27_noun(nn)
        f = {"hae": h, "ban": b}
        for k, want in book.items():
            if f.get(k) != want:
                bad.append((nn, k, f.get(k), want))
        rows.append({"id": nn + ".n", "dict": nn, "en": en, "irr": "noun", "kind": "noun", "hae": h, "ban": b, "main": b,
                     "wrong": l27_noun_wrongs(nn, h, b), "noVocab": True})
    for nm, book in L27P:
        f, w = l27_name(nm)
        for k, want in book.items():
            if f.get(k) != want:
                bad.append((nm, k, f.get(k), want))
        row = {"id": nm + ".name", "dict": nm, "en": "a name", "irr": "name", "kind": "name", "noVocab": True}
        row.update(f); row.update(w)
        rows.append(row)
    # book sentences: the casual form must appear in them
    book_sent = {"뭐": "이거 뭐야?", "만나다": "어제 친구 만났어.", "일하다": "내일 일할 거야.", "있다": "냉장고에 아이스크림 있어, 석진아.",
                 "먹다": "그럼 이따가 먹어.", "가다": "우리 내일 쇼핑 갈까?", "오다": "그럼 한국에는 언제 와?", "하다": "석진이가 했어."}
    for r in rows:
        s = book_sent.get(r["dict"])
        if s and not any(r.get(k) and r[k] in s for k in ("ban", "banPast", "banFut", "banKka")):
            bad.append((r["dict"], s))
    if bad:
        print("MISMATCH vs book:", bad)
        sys.exit(1)
    write(n, rows, "TB p.167-174, key p.199, WB p.104-107, key p.140")
    for r in rows:
        if r["kind"] == "verb":
            print(r["dict"], "->", r["ban"], r["banPast"], r["banFut"], r["banKka"], r.get("banJima"), " wrong:", r["wrong"], r["wrongPast"], r["wrongFut"], r["wrongKka"])
        elif r["kind"] == "noun":
            print(r["dict"], "->", r["hae"], r["ban"], r["wrong"])
        else:
            print(r["dict"], "->", r["voc"], r["third"], r["wrongVoc"], r["wrongThird"])

# ---- Lesson 28: “let's” in 반말: verb stem + -자; let's not: -지 말자 ----
# (dict, english, irr, book {col: form}); book = TB p.175-179, key p.199, WB p.108-111, key p.140-141
L28 = [
    ("하다", "to do", None, {"ja": "하자", "jiMalja": "하지 말자"}),
    ("공부하다", "to study", None, {"ja": "공부하자", "jiMalja": "공부하지 말자"}),
    ("먹다", "to eat", None, {"ja": "먹자"}),
    ("보다", "to see, to watch", None, {"ja": "보자", "jiMalja": "보지 말자"}),
    ("사다", "to buy", None, {"ja": "사자", "jiMalja": "사지 말자"}),
    ("쉬다", "to rest, to take a day off", None, {"ja": "쉬자"}),
    ("가다", "to go", None, {"ja": "가자"}),
    ("기다리다", "to wait", None, {"ja": "기다리자"}),
    ("놀다", "to hang out, to play", "ㄹ", {"ja": "놀자"}),
    ("타다", "to take (a ride); to get on/in", None, {}),
    ("물어보다", "to ask", None, {"ja": "물어보자"}),
    ("청소하다", "to clean (up)", None, {"ja": "청소하자"}),
    ("산책하다", "to take a walk", None, {"ja": "산책하자"}),
    ("들어가다", "to go inside", None, {"jiMalja": "들어가지 말자"}),
    ("닫다", "to close", None, {"jiMalja": "닫지 말자"}),
    ("서두르다", "to hurry, to rush", "르", {"jiMalja": "서두르지 말자"}),
    ("걸어가다", "to walk (to a place)", None, {"ja": "걸어가자"}),
    ("나가다", "to go out", None, {"ja": "나가자"}),
    ("만나다", "to meet", None, {"ja": "만나자"}),
    ("마시다", "to drink", None, {}),
    ("만들다", "to make", "ㄹ", {}),
    ("걷다", "to walk", "ㄷ", {}),
    ("듣다", "to listen", "ㄷ", {}),
    ("고르다", "to choose, to pick", "르", {}),
    ("눕다", "to lie down", "ㅂ", {}),
]

def l28_wrongs(d, irr, f):
    """-자 slips: the 해요 stem + 자 (해자, 봐자, 먹어자), 으 inserted after a consonant (먹으자), 자요 (mixing 반말 and 요),
    the irregular change over-applied (걸자 = let's hang, 골라자, 누우자 — -자 begins with a consonant, the stem stays), ㄹ dropped (노자).
    -지 말자: 안 + verb + 자 (안 하자), 말다 conjugated wrongly (하지 마자, 하지 말아자), -지 않자."""
    stem = d[:-1]
    l, v, t = dec(stem[-1])
    h = hae_d(d, irr)
    hs = h[:-1]
    ja = [hs + "자", stem + "자요"]
    if t and t != "ㄹ":
        ja.insert(1, stem + "으자")
    if irr == "ㄷ":
        ja.insert(0, stem[:-1] + com(l, v, "ㄹ") + "자")
    if irr == "ㄹ":
        ja.insert(0, stem[:-1] + com(l, v) + "자")
    if irr == "ㅂ":
        ja.insert(0, b_base(stem) + "우자")
    neg = "안 " + f["ja"] if not d.endswith("하다") or len(d) == 2 else d[:-2] + " 안 하자"
    jm = [neg, stem + "지 마자", stem + "지 않자"]
    clean = lambda ws, right: [x for i, x in enumerate(ws) if x != right and x not in ws[:i]][:3]
    return clean(ja, f["ja"]), clean(jm, f["jiMalja"])

def main_l28(n):
    rows, bad = [], []
    for d, en, irr, book in L28:
        stem = d[:-1]
        f = {"ja": stem + "자", "jiMalja": stem + "지 말자", "hae": hae_d(d, irr)}
        for k, want in book.items():
            if f.get(k) != want:
                bad.append((d, k, f.get(k), want))
        wj, wm = l28_wrongs(d, irr, f)
        row = {"dict": d, "en": en, "irr": irr or "reg", "kind": "verb"}
        row.update(f)
        row["main"] = f["ja"]; row["wrong"] = wj; row["wrongJiMalja"] = wm
        row["words"] = {f["jiMalja"]: wm}
        if d in ("마시다", "만들다", "걷다", "듣다", "고르다", "눕다", "들어가다", "닫다", "서두르다", "걸어가다", "나가다", "만나다", "하다", "보다", "사다"):
            row["noVocab"] = True
        rows.append(row)
    # L16 key: 눕다 → 눕자 (the -자 column of the Lesson 16 chart)
    if [r for r in rows if r["dict"] == "눕다"][0]["ja"] != "눕자":
        bad.append("눕자")
    if bad:
        print("MISMATCH vs book:", bad)
        sys.exit(1)
    write(n, rows, "TB p.175-179, key p.199, WB p.108-111, key p.140-141")
    for r in rows:
        print(r["dict"], "->", r["ja"], r["jiMalja"], " wrong:", r["wrong"], r["wrongJiMalja"])

# ---- Lesson 29: ㅅ irregular — ㅅ 받침 + vowel → ㅅ drops (낫 + 아요 → 나아요, 짓 + 었어요 → 지었어요); NO contraction afterwards
# (나아요, not 나요; 지어요, not 져요). Before a consonant ㅅ stays (짓고 있어요, 짓는). Regular: 웃다, 씻다, 벗다.
# (dict, english, irr, book {col: form}) — TB p.180-184, key p.199, WB p.112-115, key p.141-142
L29 = [
    ("낫다", "to heal, to recover; to be better (in comparison)", "ㅅ", {"hae": "나아요", "past": "나았어요", "fut": "나을 거예요", "prog": "낫고 있어요"}),
    ("젓다", "to stir (liquid)", "ㅅ", {"hae": "저어요", "seyo": "저으세요", "past": "저었어요", "fut": "저을 거예요", "prog": "젓고 있어요"}),
    ("잇다", "to connect, to link", "ㅅ", {"past": "이었어요", "hae": "이어요", "fut": "이을 거예요", "prog": "잇고 있어요"}),
    ("짓다", "to make, to build, to compose", "ㅅ", {"past": "지었어요", "fut": "지을 거예요", "hae": "지어요", "prog": "짓고 있어요", "neun": "짓는"}),
    ("긋다", "to draw (a line)", "ㅅ", {"hae": "그어요", "past": "그었어요", "fut": "그을 거예요", "prog": "긋고 있어요"}),
    ("붓다", "to pour", "ㅅ", {"hae": "부어요", "past": "부었어요", "fut": "부을 거예요", "prog": "붓고 있어요", "seyo": "부으세요", "eun": "부은", "seo": "부어서"}),
    ("웃다", "to smile, to laugh", "keep", {"hae": "웃어요", "past": "웃었어요", "fut": "웃을 거예요", "prog": "웃고 있어요"}),
    ("씻다", "to wash", "keep", {"fut": "씻을 거예요", "hae": "씻어요", "past": "씻었어요", "prog": "씻고 있어요", "gi": "씻기"}),
    ("벗다", "to take (clothes) off", "keep", {"aju": "벗어 주세요", "hae": "벗어요", "past": "벗었어요", "fut": "벗을 거예요", "prog": "벗고 있어요"}),
]
L29_CONTRACT = {"ㅏ": "ㅏ", "ㅓ": "ㅓ", "ㅣ": "ㅕ", "ㅜ": "ㅝ", "ㅡ": "ㅓ"}

def l29_forms(d, irr):
    stem = d[:-1]
    l, v, t = dec(stem[-1])
    assert t == "ㅅ", d
    vb = stem[:-1] + com(l, v) if irr == "ㅅ" else stem          # stem before a vowel: 나 / 웃
    a = "아" if v in ("ㅏ", "ㅗ") else "어"
    pa = "았" if a == "아" else "었"
    f = {"hae": vb + a + "요", "past": vb + pa + "어요", "fut": vb + "을 거예요", "prog": stem + "고 있어요", "myeon": vb + "으면",
         "seyo": vb + "으세요", "aju": vb + a + " 주세요", "neun": stem + "는", "eun": vb + "은", "seo": vb + a + "서", "go": stem + "고", "gi": stem + "기"}
    return f, vb

def l29_wrongs(d, irr, f):
    """ㅅ verbs: ㅅ kept before a vowel (짓었어요, 붓으세요, 붓은, 젓으세요, 붓어서 — the book's own wrong forms, WB 19), contracted after
    the ㅅ drops (져요, 나요, 붜요 — the vowels stay apart), 으 dropped (질 거예요, 지면, 진 — other verbs' forms), ㅅ dropped before a
    consonant (지고 있어요, 지는). Regular verbs: ㅅ dropped (우어요 / 워요, 씨어요, 버어요; 우는 = crying, 울다)."""
    stem = d[:-1]
    l, v, t = dec(stem[-1])
    bare = stem[:-1] + com(l, v)                 # 지 / 우
    a = "아" if v in ("ㅏ", "ㅗ") else "어"
    pa = "았" if a == "아" else "었"
    cv = L29_CONTRACT.get(v, v)
    con = stem[:-1] + com(l, cv)                  # 져 / 나 / 붜
    conP = stem[:-1] + com(l, cv, "ㅆ")           # 졌 / 났 / 붰
    sw = "어" if a == "아" else "아"
    if irr == "ㅅ":
        W = {"hae": [stem + a + "요", con + "요", bare + sw + "요"], "past": [stem + pa + "어요", conP + "어요"],
             "fut": [stem + "을 거예요", bare + "ㄹ"], "myeon": [stem + "으면", bare + "면"], "seyo": [stem + "으세요", bare + "세요"],
             "aju": [stem + a + " 주세요", con + " 주세요"], "eun": [stem + "은", bare + "ㄴ"], "seo": [stem + a + "서", con + "서"],
             "prog": [bare + "고 있어요"], "neun": [bare + "는"], "go": [bare + "고"], "gi": [bare + "기"]}
    else:
        W = {"hae": [bare + a + "요", con + "요"], "past": [bare + pa + "어요", conP + "어요"], "fut": [bare + "을 거예요", bare + "ㄹ"],
             "myeon": [bare + "으면", bare + "면"], "seyo": [bare + "으세요", bare + "세요"], "aju": [bare + a + " 주세요", con + " 주세요"],
             "eun": [bare + "은", bare + "ㄴ"], "seo": [bare + a + "서", con + "서"], "prog": [bare + "고 있어요"], "neun": [bare + "는"],
             "go": [bare + "고"], "gi": [bare + "기"]}
    out = {}
    for k, ws in W.items():
        o = []
        for x in ws:
            if x.endswith("ㄹ"):        # bare + ㄹ 거예요 / bare + ㄴ: compose the final consonant into the last syllable
                pass
            if x != f[k] and x not in o:
                o.append(x)
        out[k] = o[:3]
    # compose “bare + ㄹ 거예요” and “bare + ㄴ” properly
    bl, bv, _ = dec(bare[-1])
    out["fut"] = [x if not x.endswith("ㄹ") else bare[:-1] + com(bl, bv, "ㄹ") + " 거예요" for x in out["fut"]]
    out["eun"] = [x if not x.endswith("ㄴ") else bare[:-1] + com(bl, bv, "ㄴ") for x in out["eun"]]
    return out

def main_l29(n):
    rows, bad = [], []
    for d, en, irr, book in L29:
        f, vb = l29_forms(d, irr)
        for k, want in book.items():
            if f.get(k) != want:
                bad.append((d, k, f.get(k), want))
        w = l29_wrongs(d, irr, f)
        row = {"dict": d, "en": en, "irr": irr, "kind": "verb"}
        row.update(f)
        row["main"] = f["hae"]
        row["wrong"] = w["hae"]
        for k in ("past", "fut", "prog", "myeon", "seyo", "aju", "neun", "eun", "seo", "go", "gi"):
            row["wrong" + k[0].upper() + k[1:]] = w[k]
        row["words"] = {f[k]: w[k] for k in ("past", "seo", "myeon", "seyo", "eun", "go") if w[k]}
        rows.append(row)
    if bad:
        print("MISMATCH vs book:", bad)
        sys.exit(1)
    write(n, rows, "TB p.180-184, key p.199, WB p.112-115, key p.141-142")
    for r in rows:
        print(r["dict"], "->", r["hae"], r["past"], r["fut"], r["prog"], r["myeon"], r["seyo"], r["aju"], r["neun"], r["eun"], r["seo"])
        print("    wrong:", r["wrong"], r["wrongPast"], r["wrongFut"], r["wrongMyeon"], r["wrongSeyo"], r["wrongEun"], r["wrongProg"], r["wrongNeun"])


def write(n, rows, src):
    out = os.path.join(os.path.dirname(__file__), "..", "src", f"l{n}", f"forms_L{n}.js")
    os.makedirs(os.path.dirname(out), exist_ok=True)
    with open(out, "w", encoding="utf8") as fh:
        fh.write(f"/* GENERATED by tools/gen_forms.py — checked against forms printed in {src}. Do not edit by hand. */\n")
        fh.write(f"MM.forms[{n}] = " + json.dumps(rows, ensure_ascii=False, indent=1) + ";\n")

def main(n):
    if n == 2:
        return main_l2(n)
    if n == 4:
        return main_l4(n)
    if n == 6:
        return main_l6(n)
    if n == 7:
        return main_l7(n)
    if n == 9:
        return main_l9(n)
    if n == 10:
        return main_l10(n)
    if n == 11:
        return main_l11(n)
    if n == 13:
        return main_l13(n)
    if n == 14:
        return main_l14(n)
    if n == 16:
        return main_l16(n)
    if n == 17:
        return main_l17(n)
    if n == 19:
        return main_l19(n)
    if n == 20:
        return main_l20(n)
    if n == 21:
        return main_l21(n)
    if n == 22:
        return main_l22(n)
    if n == 24:
        return main_l24(n)
    if n == 25:
        return main_l25(n)
    if n == 26:
        return main_l26(n)
    if n == 27:
        return main_l27(n)
    if n == 28:
        return main_l28(n)
    if n == 29:
        return main_l29(n)
    if n == 30:
        sys.exit('Lesson 30 is Word Builder 실 (室): no verb forms; its questions are written by hand in game_L30.js.')
    if n == 23:
        sys.exit('Lesson 23 is Word Builder 학 (學): no verb forms; its questions are written by hand in game_L23.js.')
    if n in (3, 5, 8, 12, 15, 18):
        sys.exit(f'Lesson {n} has no verb forms (3: position words, 5: -쯤/정도/약, 8: noun + 같아요, 12: 그래도, 15: 그러면/그럼, 18: -밖에 + negative); its questions are written by hand in game_L{n}.js.')
    rows, bad = [], []
    for d, en, irr, book in L1:
        f = hae(d, irr)
        if unicodedata.normalize("NFC", f) != book:
            bad.append((d, f, book))
        rows.append({"dict": d, "en": en, "irr": irr or "reg", "hae": f, "wrong": wrongs(d, irr, f)})
    if bad:
        print("MISMATCH vs book:", bad)
        sys.exit(1)
    out = os.path.join(os.path.dirname(__file__), "..", "src", f"l{n}", f"forms_L{n}.js")
    os.makedirs(os.path.dirname(out), exist_ok=True)
    with open(out, "w", encoding="utf8") as fh:
        fh.write("/* GENERATED by tools/gen_forms.py — checked against forms printed in TB p.8-14 and WB p.121. Do not edit by hand. */\n")
        fh.write(f"MM.forms[{n}] = " + json.dumps(rows, ensure_ascii=False, indent=1) + ";\n")
    for r in rows:
        print(r["dict"], "->", r["hae"], " wrong:", r["wrong"])

if __name__ == "__main__":
    main(int(sys.argv[1]) if len(sys.argv) > 1 else 1)
