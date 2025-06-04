// service-worker.js
const CACHE_NAME = 'my-app-cache-v2'; // Verhoog versienummer bij wijzigingen

self.addEventListener('install', (event) => {
  // Skip wachten om direct geactiveerd te worden
  self.skipWaiting();
  console.log('Service Worker installing...');
});

self.addEventListener('activate', (event) => {
  // Claim controle over alle pagina's
  event.waitUntil(clients.claim());
  console.log('Service Worker activated');
});