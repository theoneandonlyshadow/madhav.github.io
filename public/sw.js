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
  '/_next/static/chunks/app/page-1ae10b74c652131a.js',
  '/_next/static/chunks/4bd1b696-24b05fec8bffec13.js',
  '/_next/static/chunks/517-d49b1e6bf016612f.js',
  '/_next/static/chunks/970-f0d9cb608cbb3092.js',
  '/_next/static/chunks/main-app-5b0f815b1f9f1cb4.js',
  '/_next/static/chunks/webpack-05cc406d6a87b1a9.js'
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