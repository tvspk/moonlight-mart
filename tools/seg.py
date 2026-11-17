import sys, subprocess, re, numpy as np, sherpa_onnx
M='/home/claude/asr/sherpa-onnx-whisper-base/'
rec=sherpa_onnx.OfflineRecognizer.from_whisper(encoder=M+'base-encoder.int8.onnx',decoder=M+('base-decoder.int8.onnx' if __import__('os').path.exists(M+'base-decoder.int8.onnx') else 'base-decoder.onnx'),tokens=M+'base-tokens.txt',language='ko',task='transcribe')
f=sys.argv[1]; th=sys.argv[2] if len(sys.argv)>2 else '-35dB'; d=sys.argv[3] if len(sys.argv)>3 else '0.35'
pcm=subprocess.run(['ffmpeg','-v','error','-i',f,'-ac','1','-ar','16000','-f','s16le','-'],capture_output=True).stdout
a=np.frombuffer(pcm,np.int16).astype(np.float32)/32768
err=subprocess.run(['ffmpeg','-i',f,'-af',f'silencedetect=n={th}:d={d}','-f','null','-'],capture_output=True,text=True).stderr
st=[float(x) for x in re.findall(r'silence_start: ([\d.]+)',err)]; en=[float(x) for x in re.findall(r'silence_end: ([\d.]+)',err)]
dur=len(a)/16000; segs=[]; cur=0.0
for s,e in zip(st,en+[dur]*(len(st)-len(en))):
    if s>cur+0.15: segs.append((cur,s))
    cur=e
if cur<dur-0.15: segs.append((cur,dur))
for s,e in segs:
    x=a[int(s*16000):int(e*16000)]
    S=rec.create_stream(); S.accept_waveform(16000,x); rec.decode_stream(S)
    print(f'{s:6.2f}-{e:6.2f}  {S.result.text}')
