const CACHE_NAME = 'date-app-v1';
const ASSETS = ['/', '/jeu/', '/jeu/index.html', '/jeu/manifest.json', '/jeu/icon.svg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
