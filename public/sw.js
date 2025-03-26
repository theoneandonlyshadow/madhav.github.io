const CACHE_NAME = 'madhav_cache_v2';
const ASSETS_TO_CACHE = [
  '/',
  '/madhav.ico',
  '/img/madhav.jpg',
  '/img/netprobe.png',
  '/img/verm.png',
  '/img/xpr.png',
  '/assets/madhav_resume.pdf',
  '../app/components/ContactSection.tsx',
  '../app/components/Curzr.tsx',
  '../app/components/HeroSection.tsx',
  '../app/components/Icons.tsx',
  '../app/components/ProjectsSection.tsx',
  '../app/components/SkillsSection.tsx',
  '../app/components/WebCapabilitiesSection.tsx',
  '/_next/static/chunks/main.js',
  '/_next/static/chunks/webpack.js',
  '/_next/static/chunks/pages/_app.js',
  '/_next/static/chunks/pages/pages.js'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(cache => cache.addAll(ASSETS_TO_CACHE))
        .then(() => self.skipWaiting())
    );
  });
  
  self.addEventListener('fetch', (event) => {
    // Skip non-GET requests and external resources
    if (event.request.method !== 'GET' || !event.request.url.startsWith(self.location.origin)) {
      return;
    }
  
    event.respondWith(
      caches.match(event.request)
        .then(cached => {
          // Return cached version if available
          if (cached) return cached;
          
          // Otherwise fetch from network
          return fetch(event.request)
            .then(response => {
              // Cache successful responses
              if (response.ok) {
                const clone = response.clone();
                caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
              }
              return response;
            })
            .catch(() => {
              // For HTML requests, return a "fake" response to trigger your offline UI
              if (event.request.headers.get('accept').includes('text/html')) {
                return new Response(null, { status: 408, statusText: 'Offline' });
              }
            });
        })
    );
  });