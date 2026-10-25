import { createFileRoute, Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { Minus, Plus, Search } from "lucide-react";
import { chainEdges, computeLayout, mapNodeIds, relatedEdges, relatedOf, topicCenter, topicIndexOf, topics, WORLD, type Pos } from "@/data/map";
import { getStudy, studyCopy, studyListTitle } from "@/data/study";
import { getProgress, getServerProgress, subscribeProgress } from "@/lib/progress";

export const Route = createFileRoute("/ban-do")({
  component: MapPage,
});

type View = { x: number; y: number; k: number };

const text = {
  vi: {
    title: "Bản đồ kiến thức",
    lead: "Mỗi chấm là một khái niệm. Dây xám nối hai khái niệm liền nhau trong cùng chủ đề. Dây màu nối hai khái niệm liên quan, kèm lý do. Bấm một chấm để xem.",
    search: "Tìm một khái niệm",
    open: "Mở thẻ này",
    related: "Dây nối",
    none: "Khái niệm này chưa có dây nối viết tay. Xem các khái niệm liền kề trong cùng chủ đề.",
    before: "Liền trước",
    after: "Liền sau",
    loading: "Đang dựng bản đồ…",
    all: "Tất cả",
    reset: "Về giữa",
    count: (n: number, r: number) => `${n} khái niệm · ${r} dây liên quan`,
  },
  en: {
    title: "Knowledge map",
    lead: "Each dot is a concept. A grey thread joins neighbours in the same topic. A coloured thread joins related concepts, with the reason. Tap a dot to see it.",
    search: "Find a concept",
    open: "Open this card",
    related: "Connections",
    none: "This concept has no hand-written connection yet. See its neighbours in the same topic.",
    before: "Just before",
    after: "Just after",
    loading: "Building the map…",
    all: "All",
    reset: "Reset view",
    count: (n: number, r: number) => `${n} concepts · ${r} related links`,
  },
} as const;

const R = 6;

function MapPage() {
  const progress = useSyncExternalStore(subscribeProgress, getProgress, getServerProgress);
  const lang = progress.lang;
  const t = text[lang];
  const hash = useRouterState({ select: (s) => s.location.hash });
  const [pos, setPos] = useState<Record<string, Pos> | null>(null);
  const [view, setView] = useState<View>({ x: 0, y: 0, k: 1 });
  const [selected, setSelected] = useState<string | null>(null);
  const [topicOnly, setTopicOnly] = useState<number | null>(null);
  const [q, setQ] = useState("");
  const svgRef = useRef<SVGSVGElement | null>(null);
  const drag = useRef<{ x: number; y: number; vx: number; vy: number; moved: boolean } | null>(null);

  useEffect(() => {
    setPos(computeLayout());
  }, []);

  useEffect(() => {
    const id = decodeURIComponent((hash || "").replace(/^#/, ""));
    if (id && mapNodeIds.includes(id)) setSelected(id);
  }, [hash]);

  const titles = useMemo(() => {
    const m: Record<string, string> = {};
    for (const id of mapNodeIds) m[id] = studyListTitle(id, lang);
    return m;
  }, [lang]);

  const query = q.trim().toLowerCase();
  const matches = useMemo(() => {
    if (query.length < 2) return new Set<string>();
    return new Set(mapNodeIds.filter((id) => titles[id].toLowerCase().includes(query) || id.includes(query)));
  }, [query, titles]);

  const near = useMemo(() => {
    const set = new Set<string>();
    if (!selected) return set;
    set.add(selected);
    for (const r of relatedOf(selected)) set.add(r.id);
    return set;
  }, [selected]);

  function zoomAt(factor: number, cx = WORLD.w / 2, cy = WORLD.h / 2) {
    setView((v) => {
      const k = Math.min(5, Math.max(0.5, v.k * factor));
      const f = k / v.k;
      return { k, x: cx - (cx - v.x) * f, y: cy - (cy - v.y) * f };
    });
  }

  function toWorld(clientX: number, clientY: number) {
    const el = svgRef.current;
    if (!el) return { x: WORLD.w / 2, y: WORLD.h / 2 };
    const r = el.getBoundingClientRect();
    const scale = Math.max(WORLD.w / r.width, WORLD.h / r.height);
    return { x: (clientX - r.left) * scale - (r.width * scale - WORLD.w) / 2, y: (clientY - r.top) * scale - (r.height * scale - WORLD.h) / 2 };
  }

  const selTopic = selected ? topicIndexOf(selected) : -1;
  const sel = selected ? getStudy(selected) : null;
  const selCopy = sel ? studyCopy(sel, lang) : null;
  const rel = selected ? relatedOf(selected) : [];
  const idx = selected ? mapNodeIds.indexOf(selected) : -1;
  const sameTopic = (i: number) => (i >= 0 && i < mapNodeIds.length && topicIndexOf(mapNodeIds[i]) === selTopic ? mapNodeIds[i] : null);
  const prevId = idx >= 0 ? sameTopic(idx - 1) : null;
  const nextId = idx >= 0 ? sameTopic(idx + 1) : null;

  const visible = (id: string) => topicOnly === null || topicIndexOf(id) === topicOnly;
  const hue = (id: string) => topics[topicIndexOf(id)].hue;
  const dim = selected !== null || matches.size > 0;

  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="font-display text-4xl">{t.title}</h1>
      <p className="reading mt-3 max-w-3xl text-lg leading-relaxed">{t.lead}</p>
      <p className="mt-2 text-sm text-muted">{t.count(mapNodeIds.length, relatedEdges.length)}</p>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <label className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" />
          <input
            value={q}
            onChange={(event) => setQ(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && matches.size > 0) setSelected([...matches][0]);
            }}
            placeholder={t.search}
            className="min-h-11 w-64 rounded-full border border-line bg-card pl-9 pr-4 outline-none"
          />
        </label>
        <button type="button" className={`min-h-11 rounded-full border border-line px-3 text-sm ${topicOnly === null ? "bg-ink text-paper" : ""}`} onClick={() => setTopicOnly(null)}>
          {t.all}
        </button>
        {topics.map((topic, i) => (
          <button
            key={topic.key}
            type="button"
            onClick={() => setTopicOnly(topicOnly === i ? null : i)}
            className={`inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-3 text-sm ${topicOnly === i ? "bg-ink text-paper" : ""}`}
          >
            <span className="inline-block size-3 rounded-full" style={{ background: `hsl(${topic.hue} 60% 50%)` }} />
            {lang === "en" ? topic.en : topic.vi}
          </button>
        ))}
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="relative overflow-hidden rounded-card border border-line bg-card">
          {pos ? (
            <svg
              ref={svgRef}
              viewBox={`0 0 ${WORLD.w} ${WORLD.h}`}
              className="h-[70vh] w-full touch-none select-none"
              onWheel={(event) => {
                const p = toWorld(event.clientX, event.clientY);
                zoomAt(event.deltaY < 0 ? 1.15 : 1 / 1.15, p.x, p.y);
              }}
              onPointerDown={(event) => {
                drag.current = { x: event.clientX, y: event.clientY, vx: view.x, vy: view.y, moved: false };
                (event.currentTarget as SVGSVGElement).setPointerCapture(event.pointerId);
              }}
              onPointerMove={(event) => {
                const d = drag.current;
                if (!d) return;
                const dx = event.clientX - d.x;
                const dy = event.clientY - d.y;
                if (Math.abs(dx) + Math.abs(dy) > 4) d.moved = true;
                const el = svgRef.current;
                const r = el ? el.getBoundingClientRect() : null;
                const scale = r ? Math.max(WORLD.w / r.width, WORLD.h / r.height) : 1;
                setView((v) => ({ ...v, x: d.vx + dx * scale, y: d.vy + dy * scale }));
              }}
              onPointerUp={() => {
                const d = drag.current;
                drag.current = null;
                if (d && !d.moved) setSelected(null);
              }}
            >
              <g transform={`translate(${view.x} ${view.y}) scale(${view.k})`}>
                {topics.map((topic, i) => {
                  const c = topicCenter(i);
                  if (topicOnly !== null && topicOnly !== i) return null;
                  return (
                    <text key={topic.key} x={c.x} y={c.y - 70} textAnchor="middle" className="fill-muted" style={{ fontSize: 22, fontWeight: 600, letterSpacing: 1 }}>
                      {lang === "en" ? topic.en : topic.vi}
                    </text>
                  );
                })}
                {chainEdges.map((e) => {
                  if (!visible(e.a) || !visible(e.b)) return null;
                  const a = pos[e.a];
                  const b = pos[e.b];
                  const on = selected && (near.has(e.a) && near.has(e.b));
                  return <line key={`${e.a}-${e.b}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} className="stroke-line" strokeWidth={on ? 2 : 1} opacity={dim && !on ? 0.25 : 0.9} />;
                })}
                {relatedEdges.map((e) => {
                  if (!visible(e.a) || !visible(e.b)) return null;
                  const a = pos[e.a];
                  const b = pos[e.b];
                  const on = selected !== null && (e.a === selected || e.b === selected);
                  return (
                    <line
                      key={`r-${e.a}-${e.b}`}
                      x1={a.x}
                      y1={a.y}
                      x2={b.x}
                      y2={b.y}
                      className="stroke-accent"
                      strokeWidth={on ? 3 : 1.4}
                      opacity={selected !== null ? (on ? 1 : 0.1) : 0.55}
                    />
                  );
                })}
                {mapNodeIds.map((id) => {
                  if (!visible(id)) return null;
                  const p = pos[id];
                  const isSel = id === selected;
                  const hit = matches.has(id);
                  const inNear = near.has(id);
                  const faded = dim && !isSel && !inNear && !hit;
                  const labelled = isSel || inNear || hit;
                  return (
                    <g
                      key={id}
                      transform={`translate(${p.x} ${p.y})`}
                      opacity={faded ? 0.3 : 1}
                      style={{ cursor: "pointer" }}
                      onPointerDown={(event) => event.stopPropagation()}
                      onClick={() => setSelected(id)}
                    >
                      <circle r={isSel ? R + 4 : hit ? R + 2 : R} fill={`hsl(${hue(id)} 60% 50%)`} className={isSel ? "stroke-ink" : "stroke-card"} strokeWidth={isSel ? 3 : 1.5} />
                      <title>{titles[id]}</title>
                      {labelled ? (
                        <text y={-12} textAnchor="middle" className="fill-ink" style={{ fontSize: 15, fontWeight: isSel ? 700 : 500, paintOrder: "stroke", stroke: "var(--card)", strokeWidth: 4 }}>
                          {titles[id].split(":")[0].slice(0, 34)}
                        </text>
                      ) : null}
                    </g>
                  );
                })}
              </g>
            </svg>
          ) : (
            <p className="p-8 text-muted">{t.loading}</p>
          )}
          <div className="absolute right-3 top-3 flex flex-col gap-2">
            <button type="button" className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-card" onClick={() => zoomAt(1.3)} aria-label="+">
              <Plus className="size-5" />
            </button>
            <button type="button" className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-card" onClick={() => zoomAt(1 / 1.3)} aria-label="-">
              <Minus className="size-5" />
            </button>
            <button type="button" className="inline-flex min-h-11 items-center justify-center rounded-full border border-line bg-card px-3 text-xs" onClick={() => setView({ x: 0, y: 0, k: 1 })}>
              {t.reset}
            </button>
          </div>
        </div>

        <aside className="rounded-card border border-line bg-card p-4">
          {selected && selCopy ? (
            <div>
              <p className="text-xs uppercase tracking-widest text-muted">{lang === "en" ? topics[selTopic].en : topics[selTopic].vi}</p>
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
                    <button type="button" className="text-left font-medium underline" onClick={() => setSelected(r.id)}>
                      {titles[r.id]}
                    </button>
                    <p className="mt-1 text-sm text-muted">{lang === "en" ? r.en : r.vi}</p>
                  </li>
                ))}
              </ul>
              {prevId || nextId ? (
                <div className="mt-6 space-y-2 text-sm">
                  {prevId ? (
                    <p>
                      <span className="text-muted">{t.before}: </span>
                      <button type="button" className="underline" onClick={() => setSelected(prevId)}>{titles[prevId]}</button>
                    </p>
                  ) : null}
                  {nextId ? (
                    <p>
                      <span className="text-muted">{t.after}: </span>
                      <button type="button" className="underline" onClick={() => setSelected(nextId)}>{titles[nextId]}</button>
                    </p>
                  ) : null}
                </div>
              ) : null}
            </div>
          ) : (
            <p className="text-muted">{t.lead}</p>
          )}
        </aside>
      </div>
    </div>
  );
}
