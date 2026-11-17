#!/usr/bin/env python3
"""voice_check.py JOBS.tsv DIR MODELDIR [--th 0.75] [--out report.tsv] [--only id,id]
ASR check of the generated voice files: sherpa-onnx Whisper (Korean) decodes every DIR/<id>.mp3 and compares it
with the spoken text (Hangul syllables only, numbers written as words like voice_gen.clean) by
difflib ratio. Writes every score to --out and prints only files below --th (plus missing / too long files)."""
import sys, os, re, subprocess, difflib, argparse
import numpy as np
sys.path.insert(0, os.path.dirname(__file__))
from voice_gen import clean

def load(path):
    raw = subprocess.run(['ffmpeg', '-v', 'error', '-i', path, '-ac', '1', '-ar', '16000', '-f', 'f32le', '-'], capture_output=True, check=True).stdout
    return np.frombuffer(raw, dtype=np.float32)
hang = lambda s: ''.join(re.findall(r'[가-힣]', s))

def main():
    ap = argparse.ArgumentParser(); ap.add_argument('jobs'); ap.add_argument('dir'); ap.add_argument('model')
    ap.add_argument('--th', type=float, default=0.75); ap.add_argument('--out', default='voice_check.tsv'); ap.add_argument('--only')
    ap.add_argument('--size', default='base')
    a = ap.parse_args()
    import sherpa_onnx
    m = a.model; sz = a.size
    rec = sherpa_onnx.OfflineRecognizer.from_whisper(encoder=f'{m}/{sz}-encoder.int8.onnx', decoder=f'{m}/{sz}-decoder.int8.onnx', tokens=f'{m}/{sz}-tokens.txt', language='ko', task='transcribe', num_threads=8)
    rows = [l.rstrip('\n').split('\t') for l in open(a.jobs, encoding='utf8') if l.strip()]
    if a.only: keep = set(a.only.split(',')); rows = [r for r in rows if r[0] in keep]
    out, bad = [], 0
    for i, r in enumerate(rows):
        p = os.path.join(a.dir, r[0] + '.mp3')
        if not os.path.exists(p): print('MISSING', r[0]); bad += 1; continue
        x = load(p); dur = len(x) / 16000
        st = rec.create_stream(); st.accept_waveform(16000, x); rec.decode_stream(st)
        got = st.result.text.strip()
        want = clean(r[5]); got = clean(got); score = difflib.SequenceMatcher(None, hang(want), hang(got)).ratio()
        nsyl = max(1, len(hang(want))); rate = nsyl / dur
        flag = score < a.th or dur > 2 + nsyl * 0.45
        out.append([r[0], r[1], r[2], r[3], f'{score:.2f}', f'{dur:.1f}', want, got])
        if flag: bad += 1; print(f'{r[0]}\t{r[1]}\t{score:.2f}\t{dur:.1f}s\t{want}\t|\t{got}')
        if (i + 1) % 200 == 0: print('..', i + 1, flush=True)
    open(a.out, 'w', encoding='utf8').write(''.join('\t'.join(o) + '\n' for o in out))
    sc = [float(o[4]) for o in out]
    print(f'checked {len(out)}, flagged {bad}, mean score {np.mean(sc):.3f}' if sc else 'nothing checked')

if __name__ == '__main__': main()
