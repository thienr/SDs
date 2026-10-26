import { Search } from "lucide-react";
import { topics } from "@/data/map";
import type { Lang } from "@/lib/progress";

export const topicName = (i: number, lang: Lang) => (i < 0 ? (lang === "en" ? "Original lectures" : "Bài giảng gốc") : lang === "en" ? topics[i].en : topics[i].vi);
export const topicColor = (i: number) => (i < 0 ? "hsl(30 8% 55%)" : `hsl(${topics[i].hue} 60% 50%)`);

export function Filters({
  lang,
  q,
  setQ,
  topic,
  setTopic,
  counts,
  placeholder,
  allLabel,
}: {
  lang: Lang;
  q: string;
  setQ: (v: string) => void;
  topic: number | null;
  setTopic: (v: number | null) => void;
  counts: Record<number, number>;
  placeholder: string;
  allLabel: string;
}) {
  const total = Object.values(counts).reduce((a, b) => a + b, 0);
  const shown = [...topics.map((_, i) => i), -1].filter((i) => (counts[i] ?? 0) > 0);
  return (
    <div className="mt-4">
      <label className="relative block max-w-md">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" />
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={placeholder} className="min-h-11 w-full rounded-full border border-line bg-card pl-9 pr-4 outline-none" />
      </label>
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" onClick={() => setTopic(null)} className={`min-h-11 rounded-full border border-line px-3 text-sm ${topic === null ? "bg-ink text-paper" : ""}`}>
          {allLabel} · {total}
        </button>
        {shown.map((i) => (
          <button key={i} type="button" onClick={() => setTopic(topic === i ? null : i)} className={`inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-3 text-sm ${topic === i ? "bg-ink text-paper" : ""}`}>
            <span className="inline-block size-3 rounded-full" style={{ background: topicColor(i) }} />
            {topicName(i, lang)} · {counts[i]}
          </button>
        ))}
      </div>
    </div>
  );
}
