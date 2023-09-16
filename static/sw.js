<<<<<<< Updated upstream
const options = {"workboxURL":"https://cdn.jsdelivr.net/npm/workbox-cdn@5.1.4/workbox/workbox-sw.js","importScripts":[],"config":{"debug":false},"cacheOptions":{"cacheId":"dhriti-prod","directoryIndex":"/","revision":"hh8XKZoGZY0W"},"clientsClaim":true,"skipWaiting":true,"cleanupOutdatedCaches":true,"offlineAnalytics":false,"preCaching":[{"revision":"hh8XKZoGZY0W","url":"/hostels/jwh/?standalone=true"}],"runtimeCaching":[{"urlPattern":"/hostels/jwh/_nuxt/","handler":"CacheFirst","method":"GET","strategyPlugins":[]},{"urlPattern":"/hostels/jwh/","handler":"NetworkFirst","method":"GET","strategyPlugins":[]}],"offlinePage":null,"pagesURLPattern":"/hostels/jwh/","offlineStrategy":"NetworkFirst"}
=======
// THIS FILE SHOULD NOT BE VERSION CONTROLLED
>>>>>>> Stashed changes

// https://github.com/NekR/self-destroying-sw

self.addEventListener('install', function (e) {
  self.skipWaiting()
})

self.addEventListener('activate', function (e) {
  self.registration.unregister()
    .then(function () {
      return self.clients.matchAll()
    })
    .then(function (clients) {
      clients.forEach(client => client.navigate(client.url))
    })
})
