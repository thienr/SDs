import { useEffect, useState } from "react";
import { CodeExplain } from "@/components/code-block";
import type { Cell, Demo, Tbl } from "@/data/demos/types";

const ui = {
  vi: { step: "Bước", of: "trên", prev: "Lùi", next: "Bước kế", again: "Chạy lại", auto: "Tự chạy", stop: "Dừng", legend: "Màu", focus: "đang nói tới", gone: "bị loại hoặc gộp", fresh: "mới xuất hiện", bad: "sai hoặc bị từ chối", empty: "trống (NULL)" },
  en: { step: "Step", of: "of", prev: "Back", next: "Next step", again: "Run again", auto: "Autoplay", stop: "Stop", legend: "Colors", focus: "in focus", gone: "dropped or merged", fresh: "new", bad: "wrong or rejected", empty: "empty (NULL)" },
} as const;

function show(v: Cell) {
  if (v === null) return <span className="italic text-muted">NULL</span>;
  return String(v);
}

function Grid({ t }: { t: Tbl }) {
  const m = t.m ?? {};
  const cellClass = (r: number, c: number) => {
    const classes = ["border border-line px-2 py-1 text-sm whitespace-nowrap"];
    if (m.cells?.some(([rr, cc]) => rr === r && cc === c)) return classes.concat("bg-[#f0c14a] text-[#14110e] font-semibold").join(" ");
    if (m.dim?.includes(r)) classes.push("opacity-35 line-through");
    if (m.bad?.includes(r)) classes.push("bg-[#b5461f]/30");
    else if (m.add?.includes(r) || m.addCols?.includes(c)) classes.push("bg-good/25");
    else if (m.rows?.includes(r) || m.cols?.includes(c)) classes.push("bg-[#f0c14a]/35");
    return classes.join(" ");
  };
  return (
    <div className="min-w-0">
      {t.name ? <p className="mb-1 font-mono text-xs text-muted">{t.name}</p> : null}
      <div className="overflow-x-auto rounded-card border border-line bg-card">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {t.c.map((name, c) => (
                <th key={name + c} className={`border border-line bg-paper px-2 py-1 text-left font-mono text-xs font-semibold ${m.addCols?.includes(c) ? "bg-good/25" : ""} ${m.cols?.includes(c) ? "bg-[#f0c14a]/50" : ""}`}>
                  {name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {t.r.map((row, r) => (
              <tr key={r}>
                {row.map((v, c) => (
                  <td key={c} className={cellClass(r, c)}>
                    {show(v)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function DataDemo({ demo, lang }: { demo: Demo; lang: "vi" | "en" }) {
  const t = ui[lang];
  const [i, setI] = useState(0);
  const [auto, setAuto] = useState(false);
  const last = demo.length - 1;
  const step = demo[Math.min(i, last)];

  useEffect(() => {
    setI(0);
    setAuto(false);
  }, [demo]);

  useEffect(() => {
    if (!auto) return;
    const id = window.setInterval(() => {
      setI((v) => {
        if (v >= last) {
          setAuto(false);
          return v;
        }
        return v + 1;
      });
    }, 3200);
    return () => window.clearInterval(id);
  }, [auto, last]);

  const btn = "inline-flex min-h-11 items-center rounded-full border border-line bg-card px-4 text-sm disabled:opacity-40";
  const used = new Set<string>();
  step.t.forEach((tb) => {
    const m = tb.m;
    if (!m) return;
    if (m.rows || m.cols || m.cells) used.add("focus");
    if (m.dim) used.add("gone");
    if (m.add || m.addCols) used.add("fresh");
    if (m.bad) used.add("bad");
    if (tb.r.some((row) => row.includes(null))) used.add("empty");
  });
  const sw: Record<string, string> = { focus: "bg-[#f0c14a]", gone: "bg-line", fresh: "bg-good/60", bad: "bg-[#b5461f]/60", empty: "border border-line bg-card" };

  return (
    <div className="rounded-card border border-line bg-paper p-3">
      <div className="flex items-center justify-between gap-2">
        <p className="text-xs uppercase tracking-widest text-accent">
          {t.step} {Math.min(i, last) + 1} {t.of} {demo.length}
        </p>
        <div className="flex gap-1" aria-hidden>
          {demo.map((_, k) => (
            <span key={k} className={`h-2 w-6 rounded-full ${k <= i ? "bg-accent" : "bg-line"}`} />
          ))}
        </div>
      </div>
      <p className="mt-2 text-base leading-snug">{lang === "en" ? step.en : step.vi}</p>
      {step.code ? <CodeExplain code={step.code} lang={lang}><pre className="mt-3 overflow-x-auto rounded-card bg-[#14110e] px-3 py-2 font-mono text-sm leading-relaxed text-[#f4efe6]">{step.code}</pre></CodeExplain> : null}
      <div className={`mt-3 grid gap-3 ${step.t.length > 1 ? "md:grid-cols-2" : ""}`}>
        {step.t.map((tb, k) => (
          <Grid key={k} t={tb} />
        ))}
      </div>
      {used.size > 0 ? (
        <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
          <span>{t.legend}:</span>
          {[...used].map((k) => (
            <span key={k} className="inline-flex items-center gap-1">
              <span className={`inline-block size-3 rounded-sm ${sw[k]}`} />
              {t[k as "focus"]}
            </span>
          ))}
        </p>
      ) : null}
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" className={btn} disabled={i === 0} onClick={() => setI(Math.max(0, i - 1))}>
          {t.prev}
        </button>
        <button type="button" className={`${btn} bg-ink text-paper`} disabled={i >= last} onClick={() => setI(Math.min(last, i + 1))}>
          {t.next}
        </button>
        <button type="button" className={btn} onClick={() => (i >= last ? (setI(0), setAuto(true)) : setAuto(!auto))}>
          {auto ? t.stop : i >= last ? t.again : t.auto}
        </button>
      </div>
    </div>
  );
}
