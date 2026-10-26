import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useSyncExternalStore } from "react";
import { getProgress, getServerProgress, subscribeProgress } from "@/lib/progress";
import { clearReports, removeReport, reportsAsText, useReports } from "@/lib/report-store";

export const Route = createFileRoute("/bao-loi")({
  component: ReportsPage,
});

const text = {
  vi: { title: "Báo cáo thẻ", lead: "Các thẻ bạn đã đánh dấu sai hoặc khó hiểu. Sao chép danh sách rồi gửi cho Claude để sửa.", none: "Chưa có báo cáo nào.", copy: "Sao chép tất cả", copied: "Đã sao chép", json: "Tải JSON", clear: "Xóa hết", del: "Xóa", wrong: "Sai", unclear: "Khó hiểu", open: "Mở thẻ" },
  en: { title: "Card reports", lead: "Cards you flagged as wrong or hard to follow. Copy the list and send it to Claude to fix.", none: "No reports yet.", copy: "Copy all", copied: "Copied", json: "Download JSON", clear: "Clear all", del: "Delete", wrong: "Wrong", unclear: "Hard to follow", open: "Open card" },
};

function ReportsPage() {
  const progress = useSyncExternalStore(subscribeProgress, getProgress, getServerProgress);
  const lang = progress.lang;
  const t = text[lang];
  const list = useReports();
  const [copied, setCopied] = useState(false);
  const btn = "inline-flex min-h-11 items-center rounded-full border border-line px-4 text-sm hover:bg-card";
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(reportsAsText(list));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* bỏ qua */
    }
  };
  const download = () => {
    const blob = new Blob([JSON.stringify(list, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "bao-loi-the.json";
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  };
  return (
    <div className="px-4 pb-28 pt-6 md:px-8">
      <h1 className="font-display text-4xl">{t.title}</h1>
      <p className="mt-2 text-muted">{t.lead}</p>
      {list.length === 0 ? (
        <p className="mt-6 text-muted">{t.none}</p>
      ) : (
        <>
          <div className="mt-4 flex flex-wrap gap-2">
            <button type="button" className={btn} onClick={copy}>{copied ? t.copied : t.copy}</button>
            <button type="button" className={btn} onClick={download}>{t.json}</button>
            <button type="button" className={btn} onClick={() => clearReports()}>{t.clear}</button>
          </div>
          <ul className="mt-6 space-y-3">
            {list.map((r) => (
              <li key={r.id} className="rounded-card border border-line p-4">
                <p className="text-xs tracking-widest text-muted">{r.kind === "wrong" ? t.wrong : t.unclear}</p>
                <p className="mt-1 font-medium">{r.title}</p>
                {r.note ? <p className="mt-1 text-sm leading-relaxed">{r.note}</p> : null}
                <div className="mt-2 flex gap-3 text-sm">
                  <Link to="/khai-niem/$conceptId" params={{ conceptId: r.conceptId }} className="inline-flex min-h-11 items-center text-accent underline">{t.open}</Link>
                  <button type="button" className="inline-flex min-h-11 items-center text-muted underline" onClick={() => removeReport(r.id)}>{t.del}</button>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
