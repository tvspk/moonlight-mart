#!/usr/bin/env python3
"""voice_gen.py JOBS.tsv OUTDIR [--only id,id] [--limit N] [--force]
Supertonic 3 (pip `supertonic`, model Supertone/supertonic-3 from huggingface.co), Korean, voice M1 (= M) / F1 (= F).
Reads voice_jobs.tsv from tools/voice_extract.js (id, voice, lesson, kind, text, speak), turns digits into words
(native numbers before 시/개/살/시간/마리/병/잔/번(times)/명 under 100, else Sino-Korean), synthesizes at speed 0.95,
pads 0.15 s silence and writes OUTDIR/<id>.mp3 (mono 32 kb/s, 24 kHz). Existing files are kept (incremental)."""
import sys, os, re, subprocess, tempfile, argparse
import numpy as np, soundfile as sf

NATIVE = {1: '한', 2: '두', 3: '세', 4: '네', 5: '다섯', 6: '여섯', 7: '일곱', 8: '여덟', 9: '아홉', 10: '열', 20: '스물'}
TENS = {1: '열', 2: '스물', 3: '서른', 4: '마흔', 5: '쉰', 6: '예순', 7: '일흔', 8: '여든', 9: '아흔'}
def native(n):
    if n == 20: return '스무'
    t, o = divmod(n, 10)
    return (TENS[t] if t else '') + (NATIVE[o] if o else '')
DIG = '영일이삼사오육칠팔구'
def sino(n):
    if n == 0: return '영'
    out = ''
    for unit, name in ((10**8, '억'), (10**4, '만'), (1000, '천'), (100, '백'), (10, '십')):
        q, n = divmod(n, unit)
        if q: out += ('' if q == 1 and unit < 10**4 else (sino(q) if q >= 10 else DIG[q])) + name
    return out + (DIG[n] if n else '')
NATIVE_COUNTERS = ('시간', '시', '개', '살', '마리', '병', '잔', '명', '번', '사람', '군데', '달')
def numwords(s):
    def rep(m):
        n = int(m.group(1).replace(',', '')); rest = m.group(2)
        if rest.startswith(NATIVE_COUNTERS) and 0 < n < 100: return native(n) + ' ' + rest
        if rest.startswith('월'): return {6: '유', 10: '시'}.get(n, sino(n)) + rest
        return sino(n) + ' ' + rest if rest[:1] and '가' <= rest[:1] <= '힣' else sino(n) + rest
    return re.sub(r'(\d[\d,]*)\s*(\S*)', rep, s)
def clean(s):
    s = s.replace('P.S.', '').replace('ATM', '에이티엠').replace('TTMIK', '티티엠아이케이')
    s = re.sub(r'\s*[–—]\s*', ', ', s).replace(' / ', ', ').replace('·', ',').replace(':', ',')
    s = numwords(s)
    s = re.sub(r'([!?])\1+', r'\1', s)
    return re.sub(r'\s+', ' ', s).strip(' ,')

def main():
    ap = argparse.ArgumentParser(); ap.add_argument('jobs'); ap.add_argument('out')
    ap.add_argument('--only'); ap.add_argument('--limit', type=int); ap.add_argument('--force', action='store_true')
    ap.add_argument('--speed', type=float, default=0.95); ap.add_argument('--steps', type=int, default=10)
    a = ap.parse_args()
    from supertonic import TTS
    tts = TTS(); styles = {'M': tts.get_voice_style('M1'), 'F': tts.get_voice_style('F1')}
    os.makedirs(a.out, exist_ok=True)
    rows = [l.rstrip('\n').split('\t') for l in open(a.jobs, encoding='utf8') if l.strip()]
    if a.only: keep = set(a.only.split(',')); rows = [r for r in rows if r[0] in keep]
    if a.limit: rows = rows[:a.limit]
    done = 0
    for r in rows:
        vid, voice, text = r[0], r[1], r[5]
        dst = os.path.join(a.out, vid + '.mp3')
        if os.path.exists(dst) and not a.force: continue
        wav, _ = tts.synthesize(clean(text), voice_style=styles[voice], lang='ko', speed=a.speed, total_steps=a.steps)
        x = np.asarray(wav, dtype=np.float32).reshape(-1)
        pad = np.zeros(int(0.15 * tts.sample_rate), dtype=np.float32)
        x = np.concatenate([pad, x, pad])
        with tempfile.NamedTemporaryFile(suffix='.wav', delete=False) as t: tmp = t.name
        sf.write(tmp, x, tts.sample_rate)
        subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', tmp, '-vn', '-map_metadata', '-1', '-ac', '1', '-ar', '24000', '-b:a', '32k', dst], check=True)
        os.unlink(tmp); done += 1
        if done % 100 == 0: print(done, flush=True)
    print('generated', done)

if __name__ == '__main__':
    if len(sys.argv) > 1 and sys.argv[1] == '--test-clean':
        for t in sys.argv[2:]: print(t, '→', clean(t))
    else: main()
