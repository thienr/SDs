import { useMemo, useState, useSyncExternalStore } from "react";
import { explainCode } from "@/lib/explain-code";
import { getProgress, getServerProgress, subscribeProgress, type Lang } from "@/lib/progress";

const ui = {
  vi: { open: "Dịch code sang tiếng người", close: "Ẩn bản dịch", piece: "Mảnh code", plain: "Nói bằng tiếng người", steps: "Đọc từ trái sang phải", lang: { Python: "Python", SQL: "SQL", Excel: "Excel", Shell: "Dòng lệnh" } },
  en: { open: "Translate this code into plain language", close: "Hide translation", piece: "Code", plain: "In plain words", steps: "Read left to right", lang: { Python: "Python", SQL: "SQL", Excel: "Excel", Shell: "Terminal" } },
};

function Explain({ code, lang, hint }: { code: string; lang: Lang; hint?: string }) {
  const t = ui[lang];
  const ex = useMemo(() => explainCode(code, lang, hint), [code, lang, hint]);
  if (!ex) return null;
  return (
    <div className="mt-2 rounded-xl border border-line bg-paper p-3 text-ink">
      <p className="text-xs uppercase tracking-widest text-muted">{t.lang[ex.lang]}</p>
      <p className="mt-1 leading-relaxed">{ex.summary}</p>
      <ol className="mt-3 space-y-3">
        {ex.rows.map((r, i) => (
          <li key={i} className={r.kind === "note" ? "opacity-70" : ""}>
            <pre className="overflow-x-auto rounded-lg bg-ink/5 px-2 py-1 text-sm leading-relaxed whitespace-pre-wrap break-words"><code>{r.code}</code></pre>
            <p className="mt-1 leading-relaxed">{r.text}</p>
            {r.steps ? (
              <div className="mt-1 text-sm">
                <p className="text-xs uppercase tracking-widest text-muted">{t.steps}</p>
                <ol className="mt-1 list-decimal space-y-0.5 pl-5 text-muted">
                  {r.steps.map((s, k) => (
                    <li key={k}>{s}</li>
                  ))}
                </ol>
              </div>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

/**
 * Khối code có nút xổ xuống «Dịch code sang tiếng người».
 * `children` là phần hiển thị code gốc (giữ kiểu dáng của từng trang).
 */
export function CodeExplain({ code, lang: langProp, hint, children }: { code: string; lang?: Lang; hint?: string; children: React.ReactNode }) {
  const progress = useSyncExternalStore(subscribeProgress, getProgress, getServerProgress);
  const lang: Lang = langProp ?? progress.lang;
  const [open, setOpen] = useState(false);
  const t = ui[lang];
  const can = useMemo(() => !!explainCode(code, lang, hint), [code, lang, hint]);
  return (
    <>
      {children}
      {can ? (
        <div className="mb-2">
          <button
            type="button"
            aria-expanded={open}
            className="mt-1 inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-card px-4 text-sm text-ink"
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden>{open ? "▾" : "▸"}</span>
            {open ? t.close : t.open}
          </button>
          {open ? <Explain code={code} lang={lang} hint={hint} /> : null}
        </div>
      ) : null}
    </>
  );
}
