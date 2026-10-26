import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { addReport, useReports, type ReportKind } from "@/lib/report-store";
import type { Lang } from "@/lib/progress";

const words = {
  vi: {
    ask: "Thẻ này có vấn đề?",
    wrong: "Báo thẻ sai",
    unclear: "Khó hiểu",
    notePh: "Ghi thêm chỗ nào sai hoặc khó hiểu (không bắt buộc)",
    send: "Lưu báo cáo",
    cancel: "Hủy",
    done: "Đã lưu. Gửi danh sách này cho Claude để sửa.",
    view: (n: number) => `Xem ${n} báo cáo`,
    mine: (n: number) => `Thẻ này đã có ${n} báo cáo của bạn.`,
  },
  en: {
    ask: "Something wrong with this card?",
    wrong: "Report an error",
    unclear: "Hard to follow",
    notePh: "Say what is wrong or unclear (optional)",
    send: "Save report",
    cancel: "Cancel",
    done: "Saved. Send the list to Claude to fix.",
    view: (n: number) => `View ${n} reports`,
    mine: (n: number) => `You have ${n} reports on this card.`,
  },
};

export function ReportCard({ conceptId, title, lang }: { conceptId: string; title: string; lang: Lang }) {
  const t = words[lang];
  const reports = useReports();
  const mine = reports.filter((r) => r.conceptId === conceptId).length;
  const [kind, setKind] = useState<ReportKind | null>(null);
  const [note, setNote] = useState("");
  const [saved, setSaved] = useState(false);
  const btn = "inline-flex min-h-11 items-center rounded-full border border-line px-4 text-sm hover:bg-card";
  return (
    <section className="mt-10 rounded-card border border-line p-4" aria-label={t.ask}>
      <p className="text-sm text-muted">{t.ask}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        <button type="button" className={btn} onClick={() => { setKind("wrong"); setSaved(false); }}>{t.wrong}</button>
        <button type="button" className={btn} onClick={() => { setKind("unclear"); setSaved(false); }}>{t.unclear}</button>
      </div>
      {kind ? (
        <div className="mt-3">
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder={t.notePh}
            rows={3}
            className="w-full rounded-lg border border-line bg-paper p-3 text-base"
          />
          <div className="mt-2 flex gap-2">
            <button
              type="button"
              className="inline-flex min-h-11 items-center rounded-full bg-accent px-5 text-sm text-white"
              onClick={() => { addReport({ conceptId, title, kind, note: note.trim(), lang }); setKind(null); setNote(""); setSaved(true); }}
            >
              {t.send}
            </button>
            <button type="button" className={btn} onClick={() => { setKind(null); setNote(""); }}>{t.cancel}</button>
          </div>
        </div>
      ) : null}
      {saved ? <p className="mt-3 text-sm text-accent">{t.done}</p> : mine > 0 ? <p className="mt-3 text-sm text-muted">{t.mine(mine)}</p> : null}
      {reports.length > 0 ? (
        <Link to="/bao-loi" className="mt-3 inline-flex min-h-11 items-center text-sm text-accent underline">{t.view(reports.length)}</Link>
      ) : null}
    </section>
  );
}
