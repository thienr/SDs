import { useEffect, useState } from "react";
import type { Lang } from "@/lib/progress";

type Q = { q: [string, string]; o: [string, string][]; a: number; w: [string, string] };
let cache: Record<string, Q[]> | null = null;
let pending: Promise<Record<string, Q[]>> | null = null;
function load() {
  if (cache) return Promise.resolve(cache);
  pending ??= import("@/data/self-test.json").then((m) => (cache = (m.default ?? m) as unknown as Record<string, Q[]>));
  return pending;
}

const words = {
  vi: { head: "Tự kiểm tra", check: "Kiểm tra", right: "Đúng.", wrong: "Chưa đúng.", ans: "Đáp án", retry: "Làm lại", score: (s: number, n: number) => `${s}/${n} câu đúng` },
  en: { head: "Check yourself", check: "Check", right: "Correct.", wrong: "Not quite.", ans: "Answer", retry: "Try again", score: (s: number, n: number) => `${s}/${n} correct` },
};

export function SelfTest({ conceptId, lang }: { conceptId: string; lang: Lang }) {
  const [qs, setQs] = useState<Q[] | null>(null);
  const [pick, setPick] = useState<Record<number, number>>({});
  const [done, setDone] = useState<Record<number, boolean>>({});
  const t = words[lang];
  const i = lang === "en" ? 1 : 0;
  useEffect(() => {
    let live = true;
    setPick({});
    setDone({});
    load().then((d) => live && setQs(d[conceptId] ?? []));
    return () => {
      live = false;
    };
  }, [conceptId]);
  if (!qs || qs.length === 0) return null;
  const score = qs.filter((q, k) => done[k] && pick[k] === q.a).length;
  const all = qs.every((_, k) => done[k]);
  return (
    <section className="mt-8" aria-label={t.head}>
      <h2 className="text-xs uppercase tracking-widest text-accent">{t.head}</h2>
      <ol className="mt-3 space-y-5">
        {qs.map((q, k) => (
          <li key={k} className="rounded-card border border-line p-4">
            <p className="font-medium leading-snug">{k + 1}. {q.q[i]}</p>
            <div className="mt-3 space-y-2" role="radiogroup">
              {q.o.map((o, j) => {
                const sel = pick[k] === j;
                const shown = done[k];
                const cls = shown
                  ? j === q.a
                    ? "border-accent bg-card"
                    : sel
                      ? "border-line opacity-60 line-through"
                      : "border-line opacity-60"
                  : sel
                    ? "border-accent bg-card"
                    : "border-line hover:bg-card";
                return (
                  <button
                    key={j}
                    type="button"
                    role="radio"
                    aria-checked={sel}
                    disabled={shown}
                    onClick={() => setPick((p) => ({ ...p, [k]: j }))}
                    className={`flex min-h-11 w-full items-start gap-2 rounded-card border px-3 py-2 text-left text-sm ${cls}`}
                  >
                    <span className="shrink-0 font-mono text-muted">{"ABCD"[j]}.</span>
                    <span>{o[i]}</span>
                  </button>
                );
              })}
            </div>
            {!done[k] ? (
              <button
                type="button"
                disabled={pick[k] === undefined}
                onClick={() => setDone((d) => ({ ...d, [k]: true }))}
                className="mt-3 inline-flex min-h-11 items-center rounded-full bg-accent px-5 text-sm text-white disabled:opacity-40"
              >
                {t.check}
              </button>
            ) : (
              <p className="mt-3 text-sm leading-relaxed" aria-live="polite">
                <strong>{pick[k] === q.a ? t.right : `${t.wrong} ${t.ans}: ${"ABCD"[q.a]}.`}</strong> {q.w[i]}
              </p>
            )}
          </li>
        ))}
      </ol>
      {all ? (
        <p className="mt-3 flex items-center gap-3 text-sm">
          <span>{t.score(score, qs.length)}</span>
          <button type="button" onClick={() => { setPick({}); setDone({}); }} className="min-h-11 rounded-full border border-line px-4 hover:bg-card">
            {t.retry}
          </button>
        </p>
      ) : null}
    </section>
  );
}
