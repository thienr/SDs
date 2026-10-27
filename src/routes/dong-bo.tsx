import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useSyncExternalStore } from "react";
import { getProgress, getServerProgress, subscribeProgress } from "@/lib/progress";
import { disableSync, enableSync, newCode, syncNow, useSync } from "@/lib/sync";

export const Route = createFileRoute("/dong-bo")({ component: SyncPage });

const text = {
  vi: {
    title: "Đồng bộ giữa các máy",
    lead: "Tiến độ đọc, chỗ đọc dở và lịch ôn lại được giữ trên máy chủ, gắn với một mã bí mật. Không cần tài khoản. Máy nào nhập cùng mã thì thấy cùng tiến độ.",
    off: "Chưa bật đồng bộ trên máy này.",
    make: "Bật và tạo mã mới",
    join: "Đã có mã từ máy khác",
    joinGo: "Nhập mã này",
    ph: "Dán mã đồng bộ",
    your: "Mã của bạn",
    keep: "Giữ mã như một chìa khóa: ai có mã thì xem và sửa được tiến độ học của bạn. Chỉ có tiến độ, không có thông tin cá nhân.",
    copy: "Sao chép mã",
    copied: "Đã sao chép",
    now: "Đồng bộ ngay",
    stop: "Tắt đồng bộ trên máy này",
    stopNote: "Dữ liệu trên máy chủ vẫn còn. Nhập lại mã là nối lại.",
    busy: "Đang đồng bộ…",
    ok: (t: string) => `Đồng bộ lần cuối: ${t}`,
    never: "Chưa đồng bộ lần nào.",
    bad: "Mã không đúng dạng (16–128 ký tự chữ, số, - hoặc _).",
    back: "Về trang đầu",
  },
  en: {
    title: "Sync between devices",
    lead: "Your reading progress, where you stopped and your review schedule are kept on the server under a secret code. No account needed. Any device with the same code shows the same progress.",
    off: "Sync is not on for this device.",
    make: "Turn on and create a new code",
    join: "I have a code from another device",
    joinGo: "Use this code",
    ph: "Paste sync code",
    your: "Your code",
    keep: "Treat the code like a key: anyone who has it can see and change your study progress. It holds progress only, no personal data.",
    copy: "Copy code",
    copied: "Copied",
    now: "Sync now",
    stop: "Turn off on this device",
    stopNote: "Server data stays. Enter the code again to reconnect.",
    busy: "Syncing…",
    ok: (t: string) => `Last synced: ${t}`,
    never: "Not synced yet.",
    bad: "Code is not valid (16–128 characters: letters, digits, - or _).",
    back: "Back to start",
  },
};

function SyncPage() {
  const progress = useSyncExternalStore(subscribeProgress, getProgress, getServerProgress);
  const lang = progress.lang;
  const t = text[lang];
  const s = useSync();
  const [draft, setDraft] = useState("");
  const [err, setErr] = useState("");
  const [copied, setCopied] = useState(false);
  const btn = "inline-flex min-h-11 items-center rounded-full border border-line px-4 text-sm hover:bg-card";
  return (
    <div className="reading mx-auto">
      <Link to="/" className="text-sm text-accent underline">{t.back}</Link>
      <h1 className="mt-3 font-display text-4xl">{t.title}</h1>
      <p className="mt-3 leading-relaxed text-muted">{t.lead}</p>

      {!s.code ? (
        <div className="mt-6 space-y-6">
          <p>{t.off}</p>
          <button type="button" className="inline-flex min-h-11 items-center rounded-full bg-accent px-5 text-sm text-white" onClick={() => void enableSync(newCode())}>{t.make}</button>
          <div>
            <h2 className="text-xs uppercase tracking-widest text-muted">{t.join}</h2>
            <div className="mt-2 flex flex-wrap gap-2">
              <input value={draft} onChange={(e) => { setDraft(e.target.value); setErr(""); }} placeholder={t.ph} className="min-h-11 min-w-0 flex-1 rounded-card border border-line bg-paper px-3 text-sm" autoCapitalize="none" autoCorrect="off" spellCheck={false} />
              <button type="button" className={btn} onClick={() => { const c = draft.trim(); if (!/^[A-Za-z0-9_-]{16,128}$/.test(c)) return setErr(t.bad); void enableSync(c); }}>{t.joinGo}</button>
            </div>
            {err ? <p className="mt-2 text-sm text-red-600">{err}</p> : null}
          </div>
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          <div className="rounded-card border border-line p-4">
            <p className="text-xs uppercase tracking-widest text-muted">{t.your}</p>
            <p className="mt-2 break-all font-mono text-sm">{s.code}</p>
            <button type="button" className={`${btn} mt-3`} onClick={async () => { try { await navigator.clipboard.writeText(s.code ?? ""); setCopied(true); } catch { /* bỏ qua */ } }}>{copied ? t.copied : t.copy}</button>
            <p className="mt-3 text-sm text-muted">{t.keep}</p>
          </div>
          <p className="text-sm" aria-live="polite">
            {s.state === "busy" ? t.busy : s.state === "error" ? <span className="text-red-600">{s.msg}</span> : s.at ? t.ok(new Date(s.at).toLocaleString(lang === "en" ? "en-GB" : "vi-VN")) : t.never}
          </p>
          <div className="flex flex-wrap gap-2">
            <button type="button" className={btn} onClick={() => void syncNow()}>{t.now}</button>
            <button type="button" className={btn} onClick={() => disableSync()}>{t.stop}</button>
          </div>
          <p className="text-xs text-muted">{t.stopNote}</p>
        </div>
      )}
    </div>
  );
}
