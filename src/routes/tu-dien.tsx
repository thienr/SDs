import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState, useSyncExternalStore } from "react";
import { Filters, topicColor, topicName } from "@/components/reference-ui";
import { buildTerms } from "@/lib/reference";
import { getCmsVersion, getServerCmsVersion, subscribeCms } from "@/lib/cms-store";
import { getProgress, getServerProgress, subscribeProgress } from "@/lib/progress";

export const Route = createFileRoute("/tu-dien")({
  component: GlossaryPage,
});

const text = {
  vi: {
    title: "Từ điển",
    lead: "Thuật ngữ và khái niệm gom từ mọi thẻ, xếp theo chủ đề. Mỗi mục ghi nghĩa ngắn và dẫn về những thẻ dùng nó. Thuật ngữ giữ tiếng Anh khi giáo trình dùng tiếng Anh.",
    search: "Tìm một thuật ngữ",
    all: "Tất cả",
    groupTopic: "Theo chủ đề",
    groupAz: "A–Z",
    seen: "Xuất hiện ở",
    lecture: "Bài giảng gốc",
    none: "Không có thuật ngữ nào khớp.",
    kind: { term: "Thuật ngữ", concept: "Khái niệm", legacy: "Bài giảng" },
  },
  en: {
    title: "Glossary",
    lead: "Terms and concepts gathered from every card, grouped by topic. Each entry has a short meaning and links to the cards that use it.",
    search: "Find a term",
    all: "All",
    groupTopic: "By topic",
    groupAz: "A–Z",
    seen: "Appears in",
    lecture: "Original lecture",
    none: "No term matches.",
    kind: { term: "Term", concept: "Concept", legacy: "Lecture" },
  },
} as const;

function GlossaryPage() {
  const progress = useSyncExternalStore(subscribeProgress, getProgress, getServerProgress);
  const cms = useSyncExternalStore(subscribeCms, getCmsVersion, getServerCmsVersion);
  const lang = progress.lang;
  const t = text[lang];
  const [q, setQ] = useState("");
  const [topic, setTopic] = useState<number | null>(null);
  const [az, setAz] = useState(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const all = useMemo(() => buildTerms(lang), [lang, cms]);
  const counts = useMemo(() => {
    const c: Record<number, number> = {};
    for (const f of all) c[f.topic] = (c[f.topic] ?? 0) + 1;
    return c;
  }, [all]);
  const query = q.trim().toLowerCase();
  const rows = useMemo(
    () => all.filter((f) => (topic === null || f.topic === topic) && (!query || f.term.toLowerCase().includes(query) || f.def.toLowerCase().includes(query))),
    [all, topic, query],
  );
  const groups = useMemo(() => {
    const cmp = (a: { term: string }, b: { term: string }) => a.term.localeCompare(b.term, lang === "en" ? "en" : "vi");
    if (az) {
      const m = new Map<string, typeof rows>();
      for (const r of [...rows].sort(cmp)) {
        const L = r.term.charAt(0).toUpperCase();
        const key = /[A-ZÀ-Ỹ]/i.test(L) ? L.normalize("NFD").replace(/[̀-ͯ]/g, "").charAt(0) : "#";
        m.set(key, [...(m.get(key) ?? []), r]);
      }
      return [...m.entries()].map(([k, v]) => ({ key: k, label: k, color: "", list: v }));
    }
    const m = new Map<number, typeof rows>();
    for (const r of rows) m.set(r.topic, [...(m.get(r.topic) ?? []), r]);
    return [...m.entries()]
      .sort((a, b) => (a[0] < 0 ? 1 : b[0] < 0 ? -1 : a[0] - b[0]))
      .map(([ti, v]) => ({ key: String(ti), label: topicName(ti, lang), color: topicColor(ti), list: [...v].sort(cmp) }));
  }, [rows, az, lang]);

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="font-display text-4xl">{t.title}</h1>
      <p className="reading mt-3 text-lg leading-relaxed">{t.lead}</p>
      <Filters lang={lang} q={q} setQ={setQ} topic={topic} setTopic={setTopic} counts={counts} placeholder={t.search} allLabel={t.all} />
      <div className="mt-3 flex gap-2">
        {[false, true].map((v) => (
          <button key={String(v)} type="button" onClick={() => setAz(v)} className={`min-h-11 rounded-full border border-line px-3 text-sm ${az === v ? "bg-ink text-paper" : ""}`}>
            {v ? t.groupAz : t.groupTopic}
          </button>
        ))}
      </div>
      {rows.length === 0 ? <p className="mt-6 text-muted">{t.none}</p> : null}
      {groups.map((g) => (
        <section key={g.key} className="mt-8">
          <h2 className="flex items-center gap-3 font-display text-2xl">
            {g.color ? <span className="inline-block size-4 rounded-full" style={{ background: g.color }} /> : null}
            {g.label}
            <span className="text-sm font-normal text-muted">{g.list.length}</span>
          </h2>
          <ul className="mt-2 divide-y divide-line border-y border-line">
            {g.list.map((e) => (
              <li key={e.key} id={e.key} className="py-4">
                <p className="font-medium">
                  {e.term} {e.en ? <span className="text-muted">· {e.en}</span> : null}
                  <span className="ml-2 rounded-full border border-line px-2 py-0.5 text-xs font-normal text-muted">{t.kind[e.kind]}</span>
                </p>
                <p className="mt-1 leading-relaxed">{e.def}</p>
                <p className="mt-2 flex flex-wrap items-center gap-2 text-sm">
                  <span className="text-muted">{t.seen}:</span>
                  {e.sources.slice(0, 6).map((s) => (
                    <Link key={s.id} to="/khai-niem/$conceptId" params={{ conceptId: s.id }} className="inline-flex min-h-11 items-center rounded-full border border-line px-3">
                      {s.title.split(":")[0].slice(0, 40)}
                    </Link>
                  ))}
                  {e.sources.length > 6 ? <span className="text-muted">+{e.sources.length - 6}</span> : null}
                  {e.lessonId ? (
                    <Link to="/bai/$lessonId" params={{ lessonId: e.lessonId }} className="inline-flex min-h-11 items-center rounded-full border border-line px-3">
                      {t.lecture}
                    </Link>
                  ) : null}
                </p>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
