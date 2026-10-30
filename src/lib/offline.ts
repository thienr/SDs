import { sessionConcepts } from "@/data/place";
import { courses } from "@/lib/catalog";
import { loadSelfTest } from "@/lib/self-test-data";

export function registerSw() {
  if (typeof navigator === "undefined" || !("serviceWorker" in navigator)) return;
  void navigator.serviceWorker.register("/sw.js").catch(() => {});
}

export const OFFLINE_KEY = "so-muc:offline";

/** Tải mọi trang thẻ + file JS/CSS để mở được khi không có mạng. */
export async function downloadOffline(onProgress: (done: number, total: number) => void) {
  registerSw();
  await navigator.serviceWorker?.ready;
  const ids = [...new Set(Object.values(sessionConcepts).flat())];
  const urls = ["/", "/luyen-tap", ...courses.map((c) => `/khoa/${c.id}`), ...ids.map((id) => `/khai-niem/${id}`)];
  const assets = new Set<string>();
  let done = 0;
  const queue = [...urls];
  const worker = async () => {
    for (let u = queue.shift(); u; u = queue.shift()) {
      try {
        const res = await fetch(u);
        if (res.ok) for (const m of (await res.text()).matchAll(/(?:href|src)="(\/assets\/[^"]+)"/g)) assets.add(m[1]);
      } catch { /* bỏ qua trang lỗi */ }
      done += 1;
      onProgress(done, urls.length);
    }
  };
  await Promise.all([worker(), worker(), worker(), worker()]);
  await Promise.all([...assets].map((a) => fetch(a).catch(() => null)));
  await loadSelfTest().catch(() => null);
  try { localStorage.setItem(OFFLINE_KEY, String(Date.now())); } catch { /* bỏ qua */ }
}
