self.addEventListener("install",event=>{
    event.waitUntil(
        caches.open("kesflow-cache").then(chace=>{
            return chahce.addAll([
                "/",
                "/index.html",
                "/invest.html",
                "/style.css",
                "/utils/dateutilis.js",
                "/utils/investicija.js",
                "/app.js",
                "/img/logoKF.png"
            ]);
        })
    );
});

self.addEventListener("fetch",event=>{
    event.respondWith(
        caches.open(event.request).then(response=>{
            return response || fetch(event.request);
        })
    );
});