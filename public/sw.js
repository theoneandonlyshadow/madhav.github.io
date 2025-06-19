const CACHE_NAME = 'madhav_cache_v2';
const ASSETS_TO_CACHE = [
  '/',
  '/madhav.ico',
  '/img/madhav.jpg',
  '/img/netprobe.png',
  '/img/verm.png',
  '/img/xpr.png',
  '/assets/madhav_resume.pdf',
  '../app/globals.css',
  '../app/bootstrap.min.css',
];

self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(cache => cache.addAll(ASSETS_TO_CACHE))
        .then(() => self.skipWaiting())
    );
  });
  
  self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET' || !event.request.url.startsWith(self.location.origin)) {
      return;
    }
  
    event.respondWith(
      caches.match(event.request)
        .then(cached => {
          if (cached) return cached;
          
          return fetch(event.request)
            .then(response => {
              if (response.ok) {
                const clone = response.clone();
                caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
              }
              return response;
            })
            .catch(() => {
              if (event.request.headers.get('accept').includes('text/html')) {
                return new Response(null, { status: 408, statusText: 'Offline' });
              }
            });
        })
    );
  });