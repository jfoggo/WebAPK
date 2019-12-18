/*
	Cache Strategy: cacheAll (boolean flag)
		
		1) cacheAll = true 		=> Cache all requests in urlsToCache list and all further requests
		2) cacheAll = false 	=> Cache only all requests in urlsToCache list
*/
var cacheAll = false;
var CACHE_NAME = 'webapk-cache';
var urlsToCache = [
	'/WebAPK/',
	'/WebAPK/index.html',
	'/WebAPK/logo.png',
	'/WebAPK/manifest.json',
	'/WebAPK/css/main.css',
	'/WebAPK/js/main.js',
	'/WebAPK/js/jquery.min.js'
];
var urlsNotToCache = [
	// Urls that don't need to be cached can be added here explicitly
];

// Install Event
self.addEventListener('install', function(event) {
	console.log("[SW] install event: ",event);
	// Perform install steps
	event.waitUntil(
		caches.open(CACHE_NAME).then(
			function(cache) {
				console.log('[SW] Opened cache: ',cache);
				return cache.addAll(urlsToCache);
			}
		)
	);
});


// Fetch Event
self.addEventListener('fetch', function(event) {
	console.log("[SW] fetch event: ",event);
	event.respondWith(
		caches.match(event.request).then(
			function(response) {
				// Cache hit - return response
				if (response) return response;
				// What cache strategy should be used? => cacheAll (boolean flag)
				else if (!cacheAll || urlsNotToCache.indexOf(event.request) !== -1) return fetch(event.request);
				else {
					fetch(event.request).then(
						// Try to cache new requests directly 
						function(response) {
							// Check if we received a valid response
							if(!response || response.status !== 200 || response.type !== 'basic') return response;
							// IMPORTANT: Clone the response. A response is a stream
							// and because we want the browser to consume the response
							// as well as the cache consuming the response, we need
							// to clone it so we have two streams.
							var responseToCache = response.clone();
							caches.open(CACHE_NAME).then(
								function(cache) {
									cache.put(event.request, responseToCache);
								}
							);
							return response;
						}
					);
				}
			}
		)
	);
});

