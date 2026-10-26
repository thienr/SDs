import { createFileRoute, Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { ArrowLeft, Search } from "lucide-react";
import { mapNodeIds, relatedEdges, relatedOf, topicConcepts, topicIndexOf, topics } from "@/data/map";
import { getStudy, studyCopy, studyListTitle } from "@/data/study";
import { getProgress, getServerProgress, subscribeProgress } from "@/lib/progress";

export const Route = createFileRoute("/ban-do")({
  component: MapPage,
});

const text = {
  vi: {
    title: "Sơ đồ tư duy",
    lead: "Bắt đầu từ các nhánh lớn. Bấm một nhánh để xem các khái niệm của nó theo đúng thứ tự học, rồi bấm một khái niệm để xem tóm tắt và những khái niệm liên quan.",
    root: "Khoa học dữ liệu",
    search: "Tìm một khái niệm",
    open: "Mở thẻ này",
    related: "Liên kết khái niệm",
    none: "Khái niệm này chưa có liên kết viết tay. Hãy xem các khái niệm liền kề trong cùng nhánh.",
    back: "Tất cả các nhánh",
    count: (n: number) => `${n} khái niệm`,
    total: (n: number, r: number) => `${n} khái niệm · ${r} liên kết`,
    hits: "Kết quả tìm",
    pick: "Chọn một khái niệm để xem tóm tắt.",
    order: "Thứ tự học",
  },
  en: {
    title: "Mind map",
    lead: "Start from the big branches. Tap a branch to see its concepts in study order, then tap a concept for a summary and its related concepts.",
    root: "Data science",
    search: "Find a concept",
    open: "Open this card",
    related: "Linked concepts",
    none: "This concept has no hand-written link yet. See its neighbours in the same branch.",
    back: "All branches",
    count: (n: number) => `${n} concepts`,
    total: (n: number, r: number) => `${n} concepts · ${r} links`,
    hits: "Search results",
    pick: "Pick a concept to see its summary.",
    order: "Study order",
  },
} as const;

const col = (hue: number, l = 50) => `hsl(${hue} 60% ${l}%)`;

function Radial({ lang, onPick, counts }: { lang: "vi" | "en"; onPick: (i: number) => void; counts: number[] }) {
  const t = text[lang];
  const half = Math.ceil(topics.length / 2);
  const W = 1000;
  const H = 640;
  const cx = W / 2;
  const cy = H / 2;
  const pillW = 300;
  const pillH = 46;
  const pos = (i: number) => {
    const left = i < half;
    const n = left ? half : topics.length - half;
    const k = left ? i : i - half;
    const y = 50 + (k * (H - 100)) / Math.max(1, n - 1);
    return { left, x: left ? 165 : W - 165, y };
  };
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label={t.title}>
      {topics.map((topic, i) => {
        const p = pos(i);
        const sx = p.left ? cx - 105 : cx + 105;
        const ex = p.left ? p.x + pillW / 2 : p.x - pillW / 2;
        const mx = (sx + ex) / 2;
        return <path key={`b${topic.key}`} d={`M ${sx} ${cy} C ${mx} ${cy}, ${mx} ${p.y}, ${ex} ${p.y}`} fill="none" stroke={col(topic.hue)} strokeWidth={3} opacity={0.75} />;
      })}
      <ellipse cx={cx} cy={cy} rx={110} ry={48} className="fill-ink" />
      <text x={cx} y={cy + 6} textAnchor="middle" className="fill-paper" style={{ fontSize: 20, fontWeight: 700 }}>
        {t.root}
      </text>
      {topics.map((topic, i) => {
        const p = pos(i);
        return (
          <g key={topic.key} transform={`translate(${p.x - pillW / 2} ${p.y - pillH / 2})`} style={{ cursor: "pointer" }} onClick={() => onPick(i)} role="button" tabIndex={0} onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onPick(i)}>
            <rect width={pillW} height={pillH} rx={pillH / 2} className="fill-card" stroke={col(topic.hue)} strokeWidth={2.5} />
            <circle cx={24} cy={pillH / 2} r={9} fill={col(topic.hue)} />
            <text x={42} y={pillH / 2 - 2} className="fill-ink" style={{ fontSize: 16, fontWeight: 600 }}>
              {(lang === "en" ? topic.en : topic.vi).slice(0, 40)}
            </text>
            <text x={42} y={pillH / 2 + 14} className="fill-muted" style={{ fontSize: 12 }}>
              {t.count(counts[i])}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function MapPage() {
  const progress = useSyncExternalStore(subscribeProgress, getProgress, getServerProgress);
  const lang = progress.lang;
  const t = text[lang];
  const hash = useRouterState({ select: (s) => s.location.hash });
  const [topic, setTopic] = useState<number | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [q, setQ] = useState("");
  const aside = useRef<HTMLElement | null>(null);

  const counts = useMemo(() => topics.map((_, i) => topicConcepts(i).length), []);
  const titles = useMemo(() => {
    const m: Record<string, string> = {};
    for (const id of mapNodeIds) m[id] = studyListTitle(id, lang);
    return m;
  }, [lang]);

  useEffect(() => {
    const id = decodeURIComponent((hash || "").replace(/^#/, ""));
    if (id && mapNodeIds.includes(id)) {
      setTopic(topicIndexOf(id));
      setSelected(id);
    }
  }, [hash]);

  function pick(id: string) {
    setTopic(topicIndexOf(id));
    setSelected(id);
    if (typeof window !== "undefined" && window.matchMedia("(max-width: 1023px)").matches) {
      window.setTimeout(() => aside.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
    }
  }

  const query = q.trim().toLowerCase();
  const hits = useMemo(() => (query.length < 2 ? [] : mapNodeIds.filter((id) => titles[id].toLowerCase().includes(query) || id.includes(query)).slice(0, 12)), [query, titles]);

  const list = topic === null ? [] : topicConcepts(topic);
  const sel = selected ? getStudy(selected) : null;
  const selCopy = sel ? studyCopy(sel, lang) : null;
  const rel = selected ? relatedOf(selected) : [];
  const relSet = new Set(rel.map((r) => r.id));
  const hue = topic === null ? 200 : topics[topic].hue;
  const topicName = (i: number) => (lang === "en" ? topics[i].en : topics[i].vi);

  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="font-display text-4xl">{t.title}</h1>
      <p className="reading mt-3 max-w-3xl text-lg leading-relaxed">{t.lead}</p>
      <p className="mt-2 text-sm text-muted">{t.total(mapNodeIds.length, relatedEdges.length)}</p>

      <div className="relative mt-4 max-w-md">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" />
        <input value={q} onChange={(e) => setQ(e.target.value)} onKeyDown={(e) => e.key === "Enter" && hits[0] && (pick(hits[0]), setQ(""))} placeholder={t.search} className="min-h-11 w-full rounded-full border border-line bg-card pl-9 pr-4 outline-none" />
      </div>
      {hits.length > 0 ? (
        <div className="mt-2 rounded-card border border-line bg-card p-3">
          <p className="text-xs uppercase tracking-widest text-muted">{t.hits}</p>
          <ul className="mt-2 space-y-1">
            {hits.map((id) => (
              <li key={id}>
                <button type="button" className="inline-flex min-h-11 items-center gap-2 text-left" onClick={() => { pick(id); setQ(""); }}>
                  <span className="inline-block size-3 shrink-0 rounded-full" style={{ background: col(topics[topicIndexOf(id)].hue) }} />
                  <span className="underline">{titles[id]}</span>
                  <span className="text-xs text-muted">· {topicName(topicIndexOf(id))}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {topic === null ? (
        <>
          <div className="mt-4 hidden rounded-card border border-line bg-card p-3 md:block">
            <Radial lang={lang} onPick={(i) => setTopic(i)} counts={counts} />
          </div>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2 md:hidden">
            {topics.map((tp, i) => (
              <li key={tp.key}>
                <button type="button" onClick={() => setTopic(i)} className="flex min-h-14 w-full items-center gap-3 rounded-card border border-line bg-card p-3 text-left" style={{ borderLeft: `6px solid ${col(tp.hue)}` }}>
                  <span className="flex-1 font-medium">{topicName(i)}</span>
                  <span className="text-xs text-muted">{t.count(counts[i])}</span>
                </button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1fr)_360px]">
          <section className="rounded-card border border-line bg-card p-4">
            <button type="button" onClick={() => { setTopic(null); setSelected(null); }} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-3 text-sm">
              <ArrowLeft className="size-4" /> {t.back}
            </button>
            <div className="mt-3 flex items-center gap-3">
              <span className="inline-block size-5 rounded-full" style={{ background: col(hue) }} />
              <h2 className="font-display text-2xl">{topicName(topic)}</h2>
            </div>
            <p className="mt-1 text-sm text-muted">{t.order} · {t.count(list.length)}</p>
            <ol className="mt-4 ml-2" style={{ borderLeft: `4px solid ${col(hue)}` }}>
              {list.map((id, n) => {
                const on = id === selected;
                return (
                  <li key={id} className="relative pl-5">
                    <span className="absolute left-0 top-1/2 h-1 w-4 -translate-y-1/2 rounded" style={{ background: col(hue) }} />
                    <button
                      type="button"
                      onClick={() => setSelected(id)}
                      className={`my-1 flex min-h-11 w-full items-center gap-3 rounded-xl border px-3 py-2 text-left ${on ? "border-ink bg-paper font-semibold" : relSet.has(id) ? "border-accent bg-paper" : "border-line"}`}
                    >
                      <span className="w-6 shrink-0 text-sm text-muted">{n + 1}</span>
                      <span className="flex-1 leading-snug">{titles[id]}</span>
                      {relSet.has(id) ? <span className="text-xs text-accent">↔</span> : null}
                    </button>
                  </li>
                );
              })}
            </ol>
          </section>

          <aside ref={aside} className="h-fit rounded-card border border-line bg-card p-4 lg:sticky lg:top-4">
            {selected && selCopy ? (
              <div>
                <p className="text-xs uppercase tracking-widest text-muted">{topicName(topicIndexOf(selected))}</p>
                <h2 className="mt-2 font-display text-2xl leading-snug">{selCopy.title}</h2>
                <p className="mt-3 border-l-4 border-accent pl-3 leading-relaxed">{selCopy.insight}</p>
                <Link to="/khai-niem/$conceptId" params={{ conceptId: selected }} className="mt-4 inline-flex min-h-11 items-center rounded-full bg-ink px-4 text-sm text-paper">
                  {t.open}
                </Link>
                <h3 className="mt-6 text-xs uppercase tracking-widest text-muted">{t.related}</h3>
                {rel.length === 0 ? <p className="mt-2 text-sm text-muted">{t.none}</p> : null}
                <ul className="mt-2 space-y-3">
                  {rel.map((r) => (
                    <li key={r.id}>
                      <button type="button" className="text-left font-medium underline" onClick={() => pick(r.id)}>
                        {titles[r.id]}
                      </button>
                      <p className="mt-0.5 text-xs text-muted">{topicName(topicIndexOf(r.id))}</p>
                      <p className="mt-1 text-sm text-muted">{lang === "en" ? r.en : r.vi}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-muted">{t.pick}</p>
            )}
          </aside>
        </div>
      )}
    </div>
  );
}
