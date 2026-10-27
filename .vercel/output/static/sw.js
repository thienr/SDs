/* Sổ Mực service worker: học offline. Trang: ưu tiên mạng, rơi về bản đã lưu. /assets/*: lưu rồi dùng lại. */
const V = "somuc-v1";
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== V).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  const r = e.request;
  if (r.method !== "GET") return;
  const u = new URL(r.url);
  if (u.origin !== location.origin || u.pathname.startsWith("/api/")) return;
  if (u.pathname.startsWith("/assets/")) {
    e.respondWith(caches.open(V).then(async (c) => {
      const hit = await c.match(r);
      if (hit) return hit;
      const res = await fetch(r);
      if (res.ok) c.put(r, res.clone());
      return res;
    }));
    return;
  }
  if (r.mode === "navigate" || r.headers.get("accept")?.includes("text/html")) {
    e.respondWith(caches.open(V).then(async (c) => {
      try {
        const res = await fetch(r);
        if (res.ok) c.put(r, res.clone());
        return res;
      } catch {
        return (await c.match(r)) || (await c.match("/")) || Response.error();
      }
    }));
  }
});
