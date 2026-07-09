const CACHE_NAME = 'calc-cache-v2';
const APP_SHELL = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) => Promise.all(
      names.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => cache.match(event.request).then((cached) => {
      const networkUpdate = fetch(event.request, { cache: 'no-store' }).then((response) => {
        if (response.ok && response.type === 'basic') {
          cache.put(event.request, response.clone());
        }
        return response;
      }).catch(() => cached);
      // Serve the cached copy instantly (offline-first), but always keep the
      // network request going in the background so the cache -- and the
      // next load, even offline -- picks up new deploys automatically.
      event.waitUntil(networkUpdate);
      return cached || networkUpdate;
    }))
  );
});
