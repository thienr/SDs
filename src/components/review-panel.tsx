import { Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { studyListTitle } from "@/data/study";
import type { Lang } from "@/lib/progress";
import { dueKeys, recordAnswer, useReview } from "@/lib/review";
import { loadSelfTest, type Q } from "@/lib/self-test-data";

const words = {
  vi: { head: "Ôn lại hôm nay", left: (n: number) => `Còn ${n} câu đến hạn`, check: "Kiểm tra", right: "Đúng.", wrong: "Chưa đúng.", ans: "Đáp án", next: "Câu tiếp", done: "Xong lượt ôn. Quay lại ngày mai.", open: "Mở thẻ", none: "Chưa có câu nào đến hạn. Làm phần «Tự kiểm tra» ở cuối thẻ để app hẹn ngày ôn lại." },
  en: { head: "Review today", left: (n: number) => `${n} due`, check: "Check", right: "Correct.", wrong: "Not quite.", ans: "Answer", next: "Next", done: "Round done. Come back tomorrow.", open: "Open card", none: "Nothing due yet. Do the «Check yourself» part at the end of a card and the app will schedule a review." },
};

type Item = { id: string; idx: number; q: Q; order: number[] };

function shuffle(n: number) {
  const a = [...Array(n).keys()];
  for (let i = n - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function ReviewPanel({ lang }: { lang: Lang }) {
  const map = useReview();
  const t = words[lang];
  const i = lang === "en" ? 1 : 0;
  const [data, setData] = useState<Record<string, Q[]> | null>(null);
  const [queue, setQueue] = useState<Item[] | null>(null);
  const [pick, setPick] = useState<number | null>(null);
  const [shown, setShown] = useState(false);
  const [total, setTotal] = useState(0);
  const has = Object.keys(map).length > 0;

  useEffect(() => {
    if (has) void loadSelfTest().then(setData);
  }, [has]);

  const first = useMemo(() => {
    if (!data || queue) return null;
    return dueKeys(map, 5)
      .map((key) => {
        const [id, ix] = key.split("#");
        const q = data[id]?.[Number(ix)];
        return q ? { id, idx: Number(ix), q, order: shuffle(q.o.length) } : null;
      })
      .filter((x): x is Item => x !== null);
  }, [data, queue, map]);
  useEffect(() => {
    if (first && !queue) {
      setQueue(first);
      setTotal(first.length);
    }
  }, [first, queue]);

  if (!has) return null;
  const cur = queue?.[0];
  return (
    <section className="mt-8 rounded-card border border-accent bg-card p-4" aria-label={t.head}>
      <div className="flex items-baseline justify-between gap-3">
        <h2 className="text-xs uppercase tracking-widest text-accent">{t.head}</h2>
        {queue && cur ? <span className="text-xs text-muted">{t.left(queue.length)}</span> : null}
      </div>
      {!queue ? null : !cur ? (
        <p className="mt-3 text-sm">{total > 0 ? t.done : t.none}</p>
      ) : (
        <div className="mt-3">
          <p className="font-medium leading-snug">{cur.q.q[i]}</p>
          <div className="mt-3 space-y-2" role="radiogroup">
            {cur.order.map((oi, pos) => {
              const sel = pick === oi;
              const cls = shown ? (oi === cur.q.a ? "border-accent" : sel ? "border-line opacity-60 line-through" : "border-line opacity-60") : sel ? "border-accent" : "border-line hover:bg-paper";
              return (
                <button key={oi} type="button" role="radio" aria-checked={sel} disabled={shown} onClick={() => setPick(oi)} className={`flex min-h-11 w-full items-start gap-2 rounded-card border px-3 py-2 text-left text-sm ${cls}`}>
                  <span className="shrink-0 font-mono text-muted">{"ABCD"[pos]}.</span>
                  <span>{cur.q.o[oi][i]}</span>
                </button>
              );
            })}
          </div>
          {!shown ? (
            <button type="button" disabled={pick === null} onClick={() => { setShown(true); recordAnswer(cur.id, cur.idx, pick === cur.q.a); }} className="mt-3 inline-flex min-h-11 items-center rounded-full bg-accent px-5 text-sm text-white disabled:opacity-40">
              {t.check}
            </button>
          ) : (
            <div className="mt-3 text-sm leading-relaxed" aria-live="polite">
              <p><strong>{pick === cur.q.a ? t.right : `${t.wrong} ${t.ans}: ${"ABCD"[cur.order.indexOf(cur.q.a)]}.`}</strong> {cur.q.w[i]}</p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <button type="button" onClick={() => { setQueue((q) => (q ? q.slice(1) : q)); setPick(null); setShown(false); }} className="min-h-11 rounded-full border border-line px-4 hover:bg-paper">{t.next}</button>
                <Link to="/khai-niem/$conceptId" params={{ conceptId: cur.id }} className="text-accent underline">{t.open}: {studyListTitle(cur.id, lang)}</Link>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
