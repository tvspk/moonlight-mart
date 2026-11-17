#!/usr/bin/env python3
"""Web version for GitHub Pages: python3 -I scripts/build_web.py

Runs ./build.sh (dist/moonlight-mart.html + dist/lessons) with a BUILD_VER that depends only on the lesson sources, so the
result is the same on every machine, then writes to the repository root:
  index.html             <!doctype>, CSP (connect-src only 'self' and https://api.github.com), manifest, service worker + the game
  lessons/*.js           lesson data (same files as dist/lessons)
  sw.js                  network first, the cache without network; audio is never cached (seeking needs range requests)
  manifest.webmanifest
Audio is served from the root audio/ folder (the same files the APK is built from).
After every change of src/ run this script and commit the result: the workflow fails with "out of date" otherwise.
"""
import hashlib, json, os, pathlib, shutil, subprocess, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
os.chdir(ROOT)

src = sorted(p for p in ROOT.glob('src/l*/*.js')) + [ROOT / 'src/voice_ids.js']
ver = hashlib.sha256(b''.join(p.relative_to(ROOT).as_posix().encode() + p.read_bytes() for p in src)).hexdigest()[:10]
subprocess.run(['bash', 'build.sh'], check=True, env=dict(os.environ, BUILD_VER=ver), stdout=subprocess.DEVNULL)

game = (ROOT / 'dist/moonlight-mart.html').read_text(encoding='utf-8')
assert game.startswith('<title>Moonlight Mart</title>'), 'dist/moonlight-mart.html should start with <title>'
CSP = ("default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; "
       "font-src https://fonts.gstatic.com; img-src 'self' data: blob:; media-src 'self' blob:; "
       "connect-src 'self' https://api.github.com; worker-src 'self'; manifest-src 'self'; base-uri 'none'; form-action 'none'; object-src 'none'")
head = ('<!doctype html>\n<html lang="en"><head><meta charset="utf-8">\n'
        f'<meta http-equiv="Content-Security-Policy" content="{CSP}">\n'
        '<meta name="theme-color" content="#1B2238">\n<link rel="manifest" href="manifest.webmanifest">\n'
        '<link rel="icon" href="icons/icon-192.png">\n<link rel="apple-touch-icon" href="icons/icon-192.png">\n'
        "<script>if('serviceWorker'in navigator&&location.protocol==='https:')addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}))</script>\n")
page = head + game
(ROOT / 'index.html').write_text(page, encoding='utf-8')

shutil.rmtree(ROOT / 'lessons', ignore_errors=True)
shutil.copytree(ROOT / 'dist/lessons', ROOT / 'lessons')

files = ['index.html', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png'] + sorted('lessons/' + p.name for p in (ROOT / 'lessons').glob('*.js'))
h = hashlib.sha256()
for f in files[:1] + files[4:]:
    h.update((ROOT / f).read_bytes())
cache = 'mm-' + h.hexdigest()[:12]
sw = f"""// Offline: the network first (a new version at once), the cache without network. Audio goes straight to the network
// (seeking needs range requests). Made by scripts/build_web.py, do not edit by hand.
const C='{cache}',F={json.dumps(files)};
self.addEventListener('install',e=>{{e.waitUntil(caches.open(C).then(c=>c.addAll(['./',...F])));self.skipWaiting()}});
self.addEventListener('activate',e=>{{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))}});
self.addEventListener('fetch',e=>{{const r=e.request,u=new URL(r.url);if(r.method!=='GET'||u.origin!==location.origin||u.pathname.includes('/audio/'))return;
  e.respondWith(fetch(r).then(x=>{{if(x.status===200){{const y=x.clone();caches.open(C).then(c=>c.put(r,y))}}return x}})
    .catch(()=>caches.match(r,{{ignoreSearch:true}}).then(x=>x||caches.match('index.html'))))}});
"""
(ROOT / 'sw.js').write_text(sw, encoding='utf-8')
man = {"name": "Moonlight Mart", "short_name": "Moonlight Mart", "lang": "en", "start_url": "./", "scope": "./", "display": "standalone",
       "background_color": "#1B2238", "theme_color": "#1B2238",
       "icons": [{"src": "icons/icon-192.png", "sizes": "192x192", "type": "image/png"},
                 {"src": "icons/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any"}]}
(ROOT / 'manifest.webmanifest').write_text(json.dumps(man, indent=1, ensure_ascii=False) + '\n', encoding='utf-8')
(ROOT / '.nojekyll').write_text('')
print(f'web: index.html ({len(page)} bytes), lessons/ ({len(files) - 4} files), sw.js cache {cache}', file=sys.stderr)
