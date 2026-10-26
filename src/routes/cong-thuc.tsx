import { CodeExplain } from "@/components/code-block";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState, useSyncExternalStore } from "react";
import { Tex } from "@/components/tex";
import { Filters, topicColor, topicName } from "@/components/reference-ui";
import { buildFormulas } from "@/lib/reference";
import { getCmsVersion, getServerCmsVersion, subscribeCms } from "@/lib/cms-store";
import { getProgress, getServerProgress, subscribeProgress } from "@/lib/progress";

export const Route = createFileRoute("/cong-thuc")({
  component: FormulaPage,
});

const text = {
  vi: {
    title: "Công thức",
    lead: "Mọi công thức trong sổ, xếp theo chủ đề và theo thứ tự học. Mỗi công thức có bảng ký hiệu, thẻ gốc để xem số liệu thật, và các khái niệm liên quan.",
    search: "Tìm công thức hoặc tên khái niệm",
    all: "Tất cả",
    symbols: "Ký hiệu",
    open: "Mở thẻ gốc",
    related: "Liên quan",
    none: "Không có công thức nào khớp.",
  },
  en: {
    title: "Formulas",
    lead: "Every formula in the notebook, grouped by topic and in study order. Each has a symbol table, its source card for real numbers, and related concepts.",
    search: "Find a formula or concept",
    all: "All",
    symbols: "Symbols",
    open: "Open source card",
    related: "Related",
    none: "No formula matches.",
  },
} as const;

function FormulaPage() {
  const progress = useSyncExternalStore(subscribeProgress, getProgress, getServerProgress);
  const cms = useSyncExternalStore(subscribeCms, getCmsVersion, getServerCmsVersion);
  const lang = progress.lang;
  const t = text[lang];
  const [q, setQ] = useState("");
  const [topic, setTopic] = useState<number | null>(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const all = useMemo(() => buildFormulas(lang), [lang, cms]);
  const counts = useMemo(() => {
    const c: Record<number, number> = {};
    for (const f of all) c[f.topic] = (c[f.topic] ?? 0) + 1;
    return c;
  }, [all]);
  const query = q.trim().toLowerCase();
  const rows = all.filter((f) => (topic === null || f.topic === topic) && (!query || f.title.toLowerCase().includes(query) || (f.tex + (f.code ?? "")).toLowerCase().includes(query) || f.symbols.some((s) => s.meaning.toLowerCase().includes(query))));
  const groups = useMemo(() => {
    const m = new Map<number, typeof rows>();
    for (const r of rows) m.set(r.topic, [...(m.get(r.topic) ?? []), r]);
    return [...m.entries()].sort((a, b) => a[0] - b[0]);
  }, [rows]);

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="font-display text-4xl">{t.title}</h1>
      <p className="reading mt-3 text-lg leading-relaxed">{t.lead}</p>
      <Filters lang={lang} q={q} setQ={setQ} topic={topic} setTopic={setTopic} counts={counts} placeholder={t.search} allLabel={t.all} />
      {rows.length === 0 ? <p className="mt-6 text-muted">{t.none}</p> : null}
      {groups.map(([ti, list]) => (
        <section key={ti} className="mt-8">
          <h2 className="flex items-center gap-3 font-display text-2xl">
            <span className="inline-block size-4 rounded-full" style={{ background: topicColor(ti) }} />
            {topicName(ti, lang)}
            <span className="text-sm font-normal text-muted">{list.length}</span>
          </h2>
          <ul className="mt-3 space-y-4">
            {list.map((f) => (
              <li key={f.id} id={f.id} className="rounded-card border border-line bg-card p-4" style={{ borderLeft: `6px solid ${topicColor(ti)}` }}>
                <Link to="/khai-niem/$conceptId" params={{ conceptId: f.id }} className="font-medium leading-snug underline">
                  {f.title}
                </Link>
                {f.code ? (
                  <div className="mt-3">
                    <p className="text-xs uppercase tracking-widest text-muted">{f.codeLang}</p>
                    <CodeExplain code={f.code} lang={lang} hint={f.codeLang}><pre className="mt-1 overflow-x-auto rounded-lg bg-ink/5 p-3 text-sm leading-relaxed"><code>{f.code}</code></pre></CodeExplain>
                  </div>
                ) : (
                  <Tex tex={f.tex} block />
                )}
                {f.symbols.length > 0 ? (
                  <div className="mt-1">
                    <p className="text-xs uppercase tracking-widest text-muted">{t.symbols}</p>
                    <ul className="mt-2 space-y-1 text-sm">
                      {f.symbols.map((s, i) => (
                        <li key={i} className="flex gap-3">
                          {s.sym ? (
                            <span className="shrink-0">
                              <Tex tex={s.sym} />
                            </span>
                          ) : null}
                          <span className="text-muted">{s.meaning}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                {f.note ? <p className="mt-2 text-sm text-muted">{f.note}</p> : null}
                <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
                  <Link to="/khai-niem/$conceptId" params={{ conceptId: f.id }} className="inline-flex min-h-11 items-center rounded-full bg-ink px-4 text-paper">
                    {t.open}
                  </Link>
                  {f.related.length > 0 ? <span className="text-muted">{t.related}:</span> : null}
                  {f.related.map((r) => (
                    <Link key={r.id} to="/khai-niem/$conceptId" params={{ conceptId: r.id }} className="inline-flex min-h-11 items-center rounded-full border border-line px-3">
                      {r.title.split(":")[0].slice(0, 36)}
                    </Link>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
