import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, useSyncExternalStore } from "react";
import { studyListTitle } from "@/data/study";
import { courses } from "@/lib/catalog";
import { allCardIds, courseCardIds } from "@/lib/course-cards";
import { getProgress, getServerProgress, subscribeProgress } from "@/lib/progress";
import { recordAnswer, useReview } from "@/lib/review";
import { loadSelfTest, type Q } from "@/lib/self-test-data";

export const Route = createFileRoute("/luyen-tap")({ component: Practice });

const text = {
  vi: { title: "Luyện tập", lead: "Chọn một khóa (hoặc tất cả), app trộn ngẫu nhiên các câu tự kiểm tra để bạn làm một lượt 10 câu.", all: "Tất cả khóa", go: "Bắt đầu 10 câu", wrongOnly: "Chỉ luyện lại câu từng sai", book: "Sổ câu hay sai", empty: "Chưa có câu nào sai. Tốt!", check: "Kiểm tra", right: "Đúng.", wrong: "Chưa đúng.", ans: "Đáp án", next: "Câu tiếp", finish: "Xem kết quả", score: (a: number, b: number) => `Đúng ${a}/${b} câu.`, again: "Làm lượt khác", open: "Mở thẻ", back: "Về trang chủ", none: "Không có câu phù hợp.", loading: "Đang tải…" },
  en: { title: "Practice", lead: "Pick a course (or all) and the app mixes self-test questions into a round of 10.", all: "All courses", go: "Start 10 questions", wrongOnly: "Only questions I got wrong", book: "Wrong-answer notebook", empty: "Nothing wrong yet. Nice!", check: "Check", right: "Correct.", wrong: "Not quite.", ans: "Answer", next: "Next", finish: "See result", score: (a: number, b: number) => `${a}/${b} correct.`, again: "Another round", open: "Open card", back: "Home", none: "No matching questions.", loading: "Loading…" },
};

type Item = { id: string; idx: number; q: Q; order: number[] };
const shuffle = <T,>(a: T[]) => {
  const r = [...a];
  for (let i = r.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
};

function Practice() {
  const progress = useSyncExternalStore(subscribeProgress, getProgress, getServerProgress);
  const lang = progress.lang;
  const t = text[lang];
  const i = lang === "en" ? 1 : 0;
  const review = useReview();
  const [data, setData] = useState<Record<string, Q[]> | null>(null);
  const [course, setCourse] = useState("all");
  const [onlyWrong, setOnlyWrong] = useState(false);
  const [queue, setQueue] = useState<Item[] | null>(null);
  const [total, setTotal] = useState(0);
  const [good, setGood] = useState(0);
  const [pick, setPick] = useState<number | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => { void loadSelfTest().then(setData); }, []);

  const wrongKeys = Object.entries(review).filter(([, e]) => e.b === 0).map(([k]) => k);

  const start = () => {
    if (!data) return;
    const ids = new Set(course === "all" ? allCardIds() : courseCardIds(course));
    let keys: string[] = [];
    if (onlyWrong) keys = wrongKeys.filter((k) => ids.has(k.split("#")[0]));
    else for (const id of ids) (data[id] ?? []).forEach((_, ix) => keys.push(`${id}#${ix}`));
    const items = shuffle(keys).slice(0, 10).flatMap((k) => {
      const [id, ix] = k.split("#");
      const q = data[id]?.[Number(ix)];
      return q ? [{ id, idx: Number(ix), q, order: shuffle([...q.o.keys()]) }] : [];
    });
    setQueue(items); setTotal(items.length); setGood(0); setPick(null); setShown(false);
  };

  const cur = queue?.[0];
  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <Link to="/" className="inline-flex min-h-11 items-center text-sm text-muted">← {t.back}</Link>
      <h1 className="mt-2 text-2xl font-semibold">{t.title}</h1>
      <p className="mt-2 text-sm text-muted">{t.lead}</p>

      {!queue || (queue.length === 0 && total === 0) ? (
        <section className="mt-6 space-y-4">
          <select value={course} onChange={(e) => setCourse(e.target.value)} className="min-h-11 w-full rounded-card border border-line bg-paper px-3 text-sm" aria-label={t.all}>
            <option value="all">{t.all}</option>
            {courses.map((c) => <option key={c.id} value={c.id}>{c.title}</option>)}
          </select>
          <label className="flex min-h-11 items-center gap-2 text-sm">
            <input type="checkbox" checked={onlyWrong} onChange={(e) => setOnlyWrong(e.target.checked)} className="size-5" /> {t.wrongOnly} ({wrongKeys.length})
          </label>
          <button type="button" disabled={!data} onClick={start} className="min-h-12 w-full rounded-full bg-accent px-5 text-sm text-white disabled:opacity-40">{data ? t.go : t.loading}</button>
          {queue && total === 0 ? <p className="text-sm">{t.none}</p> : null}
        </section>
      ) : !cur ? (
        <section className="mt-6 rounded-card border border-accent bg-card p-4">
          <p className="font-medium">{t.score(good, total)}</p>
          <button type="button" onClick={() => setQueue(null)} className="mt-3 min-h-11 rounded-full border border-line px-4">{t.again}</button>
        </section>
      ) : (
        <section className="mt-6">
          <p className="text-xs text-muted">{total - queue!.length + 1}/{total}</p>
          <p className="mt-1 font-medium leading-snug">{cur.q.q[i]}</p>
          <div className="mt-3 space-y-2" role="radiogroup">
            {cur.order.map((oi, pos) => {
              const sel = pick === oi;
              const cls = shown ? (oi === cur.q.a ? "border-accent" : "border-line opacity-60") : sel ? "border-accent" : "border-line hover:bg-card";
              return (
                <button key={oi} type="button" role="radio" aria-checked={sel} disabled={shown} onClick={() => setPick(oi)} className={`flex min-h-11 w-full items-start gap-2 rounded-card border px-3 py-2 text-left text-sm ${cls}`}>
                  <span className="shrink-0 font-mono text-muted">{"ABCD"[pos]}.</span><span>{cur.q.o[oi][i]}</span>
                </button>
              );
            })}
          </div>
          {!shown ? (
            <button type="button" disabled={pick === null} onClick={() => { setShown(true); const ok = pick === cur.q.a; if (ok) setGood((g) => g + 1); recordAnswer(cur.id, cur.idx, ok); }} className="mt-3 min-h-11 rounded-full bg-accent px-5 text-sm text-white disabled:opacity-40">{t.check}</button>
          ) : (
            <div className="mt-3 text-sm leading-relaxed" aria-live="polite">
              <p><strong>{pick === cur.q.a ? t.right : `${t.wrong} ${t.ans}: ${"ABCD"[cur.order.indexOf(cur.q.a)]}.`}</strong> {cur.q.w[i]}</p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <button type="button" onClick={() => { setQueue((q) => (q ? q.slice(1) : q)); setPick(null); setShown(false); }} className="min-h-11 rounded-full border border-line px-4">{queue!.length > 1 ? t.next : t.finish}</button>
                <Link to="/khai-niem/$conceptId" params={{ conceptId: cur.id }} className="text-accent underline">{t.open}: {studyListTitle(cur.id, lang)}</Link>
              </div>
            </div>
          )}
        </section>
      )}

      <h2 className="mt-10 text-xs uppercase tracking-widest text-muted">{t.book}</h2>
      {wrongKeys.length === 0 ? <p className="mt-2 text-sm">{t.empty}</p> : (
        <ul className="mt-2 space-y-2 text-sm">
          {wrongKeys.map((k) => {
            const [id, ix] = k.split("#");
            const q = data?.[id]?.[Number(ix)];
            return (
              <li key={k} className="rounded-card border border-line p-3">
                <Link to="/khai-niem/$conceptId" params={{ conceptId: id }} className="text-accent underline">{studyListTitle(id, lang)}</Link>
                {q ? <p className="mt-1 text-muted">{q.q[i]}</p> : null}
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
}
