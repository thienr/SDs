import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { listCms, saveCms, type CmsRow } from "@/lib/cms-live";
import { getCmsVersion, getServerCmsVersion, setCmsPatch, subscribeCms, type CmsKind } from "@/lib/cms-store";
import type { Lang } from "@/lib/progress";

const labels: Record<CmsKind, { vi: string; en: string }> = {
  course: { vi: "Đầu khóa", en: "Course opener" },
  module: { vi: "Đầu phần", en: "Part opener" },
  session: { vi: "Đầu buổi", en: "Session line" },
  lesson: { vi: "Bài cũ", en: "Old lesson" },
};

export function CmsPanel({ kind, lang, needle, onlyEdited, focusId }: { kind: CmsKind; lang: Lang; needle: string; onlyEdited: boolean; focusId: string }) {
  const vi = lang !== "en";
  const version = useSyncExternalStore(subscribeCms, getCmsVersion, getServerCmsVersion);
  const rows = useMemo(() => listCms(kind, lang), [kind, lang, version]);
  const filtered = useMemo(() => {
    const q = needle.trim().toLowerCase();
    return rows.filter((row) => {
      if (onlyEdited && !row.edited) return false;
      if (!q) return true;
      return `${row.id} ${row.label} ${row.place} ${row.why} ${row.plain} ${row.text} ${row.title}`.toLowerCase().includes(q);
    });
  }, [rows, needle, onlyEdited]);
  const [selected, setSelected] = useState(focusId);
  const [draft, setDraft] = useState<CmsRow | null>(null);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    if (focusId) setSelected(focusId);
  }, [focusId]);

  useEffect(() => {
    if (filtered.some((row) => row.id === selected)) return;
    if (filtered[0]) setSelected(filtered[0].id);
  }, [filtered, selected]);

  const row = filtered.find((item) => item.id === selected) ?? rows.find((item) => item.id === selected) ?? null;

  useEffect(() => {
    setDraft(row ? { ...row } : null);
  }, [row]);

  if (!row || !draft) return <p className="mt-4 text-sm text-muted">{vi ? "Không có mục nào." : "Nothing here."}</p>;

  function set(key: keyof CmsRow, value: string) {
    setDraft((current) => (current ? { ...current, [key]: value } : current));
  }

  return (
    <div className="mt-4 grid gap-4 md:grid-cols-[16rem_minmax(0,1fr)]">
      <ul className="max-h-80 overflow-auto rounded-card border border-line md:max-h-[70vh]">
        {filtered.map((item) => {
          const on = item.id === row.id;
          return (
            <li key={item.id}>
              <button type="button" onClick={() => setSelected(item.id)} className={`block w-full min-h-11 px-3 py-2 text-left ${on ? "bg-ink text-paper" : ""}`}>
                <span className="block text-sm font-medium">{item.label}</span>
                <span className={`block text-xs ${on ? "text-paper" : "text-muted"}`}>
                  {item.place}
                  {item.edited ? (vi ? " · đã sửa" : " · edited") : ""}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      <form
        className="min-w-0"
        onSubmit={(event) => {
          event.preventDefault();
          const result = saveCms(row, draft);
          setNotice(result.ok ? (vi ? `Đã lưu ${labels[kind].vi}.` : "Saved.") : result.error);
        }}
      >
        <p className="text-xs text-muted">{row.place}</p>
        <p className="mt-1 font-mono text-sm">{row.id}</p>
        <button
          type="button"
          className="mt-3 min-h-11 rounded-full border border-line px-4 text-sm"
          onClick={() => {
            setCmsPatch(row.kind, row.id, row.lang, null);
            setNotice(vi ? "Đã về chữ in sẵn." : "Back to the printed text.");
          }}
        >
          {vi ? "Bỏ sửa mục này" : "Revert this item"}
        </button>
        <div className="mt-4 space-y-4">
          {kind === "session" ? <Field label={vi ? "Lời buổi" : "Session line"} value={draft.text} onChange={(value) => set("text", value)} tall /> : null}
          {kind === "course" || kind === "module" ? (
            <>
              <Field label={vi ? "Hiểu nhanh" : "In plain words"} value={draft.plain} onChange={(value) => set("plain", value)} tall />
              <Field label={vi ? "Vì sao cần biết" : "What you use it for"} value={draft.why} onChange={(value) => set("why", value)} tall />
              <Field label={vi ? "Liên hệ với bài trước" : "How it links"} value={draft.prior} onChange={(value) => set("prior", value)} tall />
            </>
          ) : null}
          {kind === "lesson" ? (
            <>
              <Field label={vi ? "Tên bài" : "Title"} value={draft.title} onChange={(value) => set("title", value)} />
              <Field label={vi ? "Lời ngắn" : "Blurb"} value={draft.blurb} onChange={(value) => set("blurb", value)} tall />
              <Field label={vi ? "Khối bài, JSON" : "Blocks, JSON"} value={draft.blocks} onChange={(value) => set("blocks", value)} tall mono />
              <Field label={vi ? "Từ điển bài, JSON" : "Glossary, JSON"} value={draft.glossary} onChange={(value) => set("glossary", value)} tall mono />
            </>
          ) : null}
        </div>
        <button type="submit" className="mt-4 min-h-11 rounded-full bg-ink px-4 text-sm text-paper">
          {vi ? "Lưu mục này" : "Save this item"}
        </button>
        {notice ? <p className="mt-3 text-sm">{notice}</p> : null}
      </form>
    </div>
  );
}

function Field({ label, value, onChange, tall, mono }: { label: string; value: string; onChange: (value: string) => void; tall?: boolean; mono?: boolean }) {
  return (
    <label className="block">
      <span className="text-xs tracking-widest text-muted">{label}</span>
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={`mt-1 w-full rounded-card border border-line bg-card px-3 py-2 text-sm leading-relaxed outline-none ${tall ? "min-h-28" : "min-h-11"} ${mono ? "font-mono" : ""}`}
      />
    </label>
  );
}
