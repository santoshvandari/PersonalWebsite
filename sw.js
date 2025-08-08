// Service Worker for Santosh Bhandari's Portfolio
const CACHE_NAME = 'santosh-portfolio-v1.0.0';

// Install Service Worker
self.addEventListener('install', (event) => {
    console.log('Service Worker: Installed');
    self.skipWaiting();
});

// Fetch Event - No caching, always fetch from network
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request)
            .catch(() => {
                // Fallback for offline - only for navigation requests
                if (event.request.destination === 'document') {
                    return new Response('Offline - Please check your internet connection', {
                        status: 200,
                        headers: { 'Content-Type': 'text/html' }
                    });
                }
            })
    );
});

// Activate Service Worker
self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activated');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    console.log('Deleting cache:', cacheName);
                    return caches.delete(cacheName);
                })
            );
        })
    );
    self.clients.claim();
});

// Background Sync (for form submissions when offline)
self.addEventListener('sync', (event) => {
    if (event.tag === 'background-sync') {
        event.waitUntil(
            // Handle offline form submissions
            console.log('Background sync triggered')
        );
    }
});

// Push Notifications (for future use)
self.addEventListener('push', (event) => {
    const options = {
        body: event.data ? event.data.text() : 'New update available!',
        icon: '/img/favicon.ico',
        badge: '/img/favicon.ico',
        vibrate: [200, 100, 200],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            {
                action: 'explore',
                title: 'View Website',
                icon: '/img/favicon.ico'
            },
            {
                action: 'close',
                title: 'Close',
                icon: '/img/favicon.ico'
            }
        ]
    };

    event.waitUntil(
        self.registration.showNotification('Santosh Bhandari Portfolio', options)
    );
});

// Notification Click Handler
self.addEventListener('notificationclick', (event) => {
    event.notification.close();

    if (event.action === 'explore') {
        event.waitUntil(
            clients.openWindow('/')
        );
    }
});
