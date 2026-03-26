// Service Worker Básico para permitir a instalação da PWA
self.addEventListener('install', (event) => {
  console.log('Service Worker instalado.');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker ativado.');
});

// Responde às requisições da rede (necessário para PWA)
self.addEventListener('fetch', (event) => {
  // Podes adicionar lógica de cache aqui no futuro
  event.respondWith(fetch(event.request));
});