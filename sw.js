// Offline: the network first (a new version at once), the cache without network. Audio goes straight to the network
// (seeking needs range requests). Made by scripts/build_web.py, do not edit by hand.
const C='mm-3f84dee8a000',F=["index.html", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png", "lessons/l1.js", "lessons/l10.js", "lessons/l11.js", "lessons/l12.js", "lessons/l13.js", "lessons/l14.js", "lessons/l15.js", "lessons/l16.js", "lessons/l17.js", "lessons/l18.js", "lessons/l19.js", "lessons/l2.js", "lessons/l20.js", "lessons/l21.js", "lessons/l22.js", "lessons/l23.js", "lessons/l24.js", "lessons/l25.js", "lessons/l26.js", "lessons/l27.js", "lessons/l28.js", "lessons/l29.js", "lessons/l3.js", "lessons/l30.js", "lessons/l31.js", "lessons/l4.js", "lessons/l5.js", "lessons/l6.js", "lessons/l7.js", "lessons/l8.js", "lessons/l9.js", "lessons/voice_ids.js"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(['./',...F])));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const r=e.request,u=new URL(r.url);if(r.method!=='GET'||u.origin!==location.origin||u.pathname.includes('/audio/'))return;
  e.respondWith(fetch(r).then(x=>{if(x.status===200){const y=x.clone();caches.open(C).then(c=>c.put(r,y))}return x})
    .catch(()=>caches.match(r,{ignoreSearch:true}).then(x=>x||caches.match('index.html'))))});
