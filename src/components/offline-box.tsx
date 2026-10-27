import { useState } from "react";
import { downloadOffline, OFFLINE_KEY } from "@/lib/offline";
import type { Lang } from "@/lib/progress";

export function OfflineBox({ lang }: { lang: Lang }) {
  const vi = lang !== "en";
  const [st, setSt] = useState<{ d: number; n: number } | null>(null);
  const [fin, setFin] = useState(false);
  let before: string | null = null;
  try { before = localStorage.getItem(OFFLINE_KEY); } catch { /* bỏ qua */ }
  const busy = st !== null && !fin;
  return (
    <section className="mt-10 border-t border-line pt-6">
      <h2 className="font-medium">{vi ? "Học khi không có mạng" : "Study offline"}</h2>
      <p className="mt-2 text-sm text-muted">{vi ? "Tải trước toàn bộ thẻ vào máy này (vài MB). Sau đó mở app ở máy bay hay vùng mất sóng vẫn đọc và làm bài tự kiểm tra được. Tiến độ sẽ đồng bộ khi có mạng lại." : "Download every card to this device (a few MB). Afterwards the app opens and works without a connection; progress syncs when you're back online."}</p>
      <button type="button" disabled={busy} onClick={() => { setFin(false); setSt({ d: 0, n: 1 }); void downloadOffline((d, n) => setSt({ d, n })).then(() => setFin(true)).catch(() => setFin(true)); }} className="mt-3 min-h-11 rounded-full border border-line px-4 text-sm disabled:opacity-50">
        {busy ? `${vi ? "Đang tải" : "Downloading"} ${st!.d}/${st!.n}…` : fin || before ? (vi ? "Đã tải. Bấm để cập nhật" : "Downloaded. Tap to refresh") : (vi ? "Tải để học offline" : "Download for offline")}
      </button>
    </section>
  );
}
