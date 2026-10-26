import { Fragment, useState, useSyncExternalStore, type ReactNode } from "react";
import type { Assignment, Cell, Guide, Result } from "@/data/assign/types";
import { getProgress, getServerProgress, subscribeProgress } from "@/lib/progress";

const text = {
  vi: {
    starter: "Mã khởi đầu, giữ nguyên",
    guide: "Hướng dẫn đi kèm",
    think: "Nghĩ trước khi gõ",
    steps: "Các bước",
    code: "Khung code gợi ý",
    result: "Kết quả chạy trên file của bạn",
    ran: "Code đã chạy (xem thêm)",
    read: "Cách đọc kết quả này",
    remark: "Nhận xét mẫu",
    howRemark: "Cách tự viết nhận xét",
    lotus: "Ở Lotus Spa",
    trap: "Dễ sai ở đâu",
    rule: "Starter không bị đổi nội dung hay thứ tự. Khung bên dưới mỗi mục chỉ là phần đi kèm, nên mở lại file bài tập cũ vẫn khớp từng ô.",
    show: "Mở hướng dẫn",
    hide: "Gập hướng dẫn",
    map: "Mục lục bài",
  },
  en: {
    starter: "Starter, unchanged",
    guide: "Companion guide",
    think: "Think before typing",
    steps: "Steps",
    code: "Suggested code skeleton",
    result: "Result on your file",
    ran: "Code that ran (optional)",
    read: "How to read this result",
    remark: "Sample remark",
    howRemark: "How to write your own remark",
    lotus: "At Lotus Spa",
    trap: "Where it goes wrong",
    rule: "The starter is never changed in content or order. The box under each task is only a companion, so reopening an old assignment file still matches cell by cell.",
    show: "Open guide",
    hide: "Fold guide",
    map: "Contents",
  },
} as const;

function inline(s: string): ReactNode[] {
  const clean = s.replace(/<br\s*\/?>/g, " ").replace(/<\/?font[^>]*>/g, "").replace(/<\/?(?:u|i|b)>/g, "");
  const parts = clean.split(/(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((p, i) => {
    if (p.startsWith("**") && p.endsWith("**")) return <strong key={i}>{p.slice(2, -2)}</strong>;
    if (p.startsWith("`") && p.endsWith("`")) return <code key={i} className="rounded bg-paper px-1 text-[0.9em]">{p.slice(1, -1)}</code>;
    const m = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(p);
    if (m) return <a key={i} href={m[2]} target="_blank" rel="noreferrer" className="text-accent underline">{m[1]}</a>;
    return <Fragment key={i}>{p}</Fragment>;
  });
}

function Md({ src }: { src: string }) {
  const lines = src.split("\n");
  const out: ReactNode[] = [];
  let i = 0;
  let k = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }
    if (/^\s*```/.test(line)) {
      const buf: string[] = [];
      i++;
      while (i < lines.length && !/^\s*```/.test(lines[i])) buf.push(lines[i++]);
      i++;
      out.push(<pre key={k++} className="my-2 overflow-x-auto rounded-xl bg-paper p-3 text-sm">{buf.join("\n")}</pre>);
      continue;
    }
    if (/^\s*\|/.test(line)) {
      const rows: string[][] = [];
      while (i < lines.length && /^\s*\|/.test(lines[i])) {
        if (!/^\s*\|[\s:|-]+\|?\s*$/.test(lines[i])) rows.push(lines[i].trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim()));
        i++;
      }
      out.push(
        <div key={k++} className="my-2 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead><tr>{rows[0].map((c, j) => <th key={j} className="border border-line px-2 py-1 text-left">{inline(c)}</th>)}</tr></thead>
            <tbody>{rows.slice(1).map((r, a) => <tr key={a}>{r.map((c, j) => <td key={j} className="border border-line px-2 py-1 align-top">{inline(c)}</td>)}</tr>)}</tbody>
          </table>
        </div>,
      );
      continue;
    }
    const h = /^(#{1,6})\s+(.*)$/.exec(line);
    if (h) {
      const lvl = h[1].length;
      const cls = lvl <= 2 ? "mt-6 font-display text-2xl" : lvl === 3 ? "mt-4 text-lg font-medium" : "mt-3 font-medium";
      out.push(<p key={k++} className={cls}>{inline(h[2])}</p>);
      i++;
      continue;
    }
    if (/^\s*([-*>]|\d+\.)\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\s*([-*>]|\d+\.)\s+/.test(lines[i])) items.push(lines[i++].replace(/^\s*([-*>]|\d+\.)\s+/, ""));
      out.push(<ul key={k++} className="my-2 list-disc space-y-1 pl-6">{items.map((t, j) => <li key={j}>{inline(t)}</li>)}</ul>);
      continue;
    }
    if (/^\s*---+\s*$/.test(line)) { out.push(<hr key={k++} className="my-4 border-line" />); i++; continue; }
    const para: string[] = [];
    while (i < lines.length && lines[i].trim() && !/^(\s*\||#{1,6}\s|\s*```|\s*([-*>]|\d+\.)\s)/.test(lines[i])) para.push(lines[i++]);
    out.push(<p key={k++} className="my-2 leading-relaxed">{inline(para.join(" "))}</p>);
  }
  return <>{out}</>;
}

function GuideBox({ g, r, t }: { g: Guide; r?: Result; t: (typeof text)["vi"] | (typeof text)["en"] }) {
  const [open, setOpen] = useState(true);
  return (
    <section className="my-3 rounded-card border border-line bg-card p-4">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-xs uppercase tracking-widest text-accent">{t.guide}</h3>
        <button type="button" className="min-h-11 rounded-full border border-line px-4 text-sm" onClick={() => setOpen((v) => !v)}>
          {open ? t.hide : t.show}
        </button>
      </div>
      {open ? (
        <div className="mt-2">
          <h4 className="text-sm font-medium">{t.think}</h4>
          <p className="mt-1 leading-relaxed">{g.think}</p>
          <h4 className="mt-4 text-sm font-medium">{t.steps}</h4>
          <ol className="mt-2 space-y-2">
            {g.steps.map((s, i) => (
              <li key={i} className="flex gap-3">
                <span className="font-display text-xl leading-none text-accent">{i + 1}</span>
                <span className="leading-relaxed">{s}</span>
              </li>
            ))}
          </ol>
          {r ? (
            <div className="mt-4">
              <h4 className="text-sm font-medium">{t.result}</h4>
              {r.imgs.map((src) => (
                <img key={src} src={src} alt="" loading="lazy" className="mt-2 w-full rounded-xl border border-line bg-white" />
              ))}
              {r.text ? <pre className="mt-2 overflow-x-auto rounded-xl bg-paper p-3 text-sm">{r.text}</pre> : null}
              <details className="mt-2">
                <summary className="min-h-11 cursor-pointer text-sm text-muted">{t.ran}</summary>
                <pre className="mt-1 overflow-x-auto rounded-xl bg-paper p-3 text-sm">{r.code}</pre>
              </details>
            </div>
          ) : (
            <>
              <h4 className="mt-4 text-sm font-medium">{t.code}</h4>
              <pre className="mt-1 overflow-x-auto rounded-xl bg-paper p-3 text-sm">{g.code}</pre>
            </>
          )}
          {g.read?.length ? (
            <div className="mt-4">
              <h4 className="text-sm font-medium">{t.read}</h4>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                {g.read.map((s, i) => (
                  <li key={i} className="leading-relaxed">{s}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {g.remark ? (
            <div className="mt-4 rounded-xl border border-line p-3">
              <h4 className="text-sm font-medium">{t.remark}</h4>
              <p className="mt-1 leading-relaxed">{g.remark}</p>
              {g.howRemark?.length ? (
                <>
                  <h4 className="mt-3 text-sm font-medium">{t.howRemark}</h4>
                  <ol className="mt-1 list-decimal space-y-1 pl-5">
                    {g.howRemark.map((s, i) => (
                      <li key={i} className="leading-relaxed">{s}</li>
                    ))}
                  </ol>
                </>
              ) : null}
            </div>
          ) : null}
          <div className="mt-4 rounded-xl border-l-4 border-accent bg-paper p-3">
            <p className="text-xs uppercase tracking-widest text-muted">{t.lotus}</p>
            <p className="mt-1 leading-relaxed">{g.lotus}</p>
          </div>
          <p className="mt-3 leading-relaxed"><span className="font-medium">{t.trap}: </span>{g.trap}</p>
        </div>
      ) : null}
    </section>
  );
}

function CellView({ c, t }: { c: Cell; t: (typeof text)["vi"] | (typeof text)["en"] }) {
  if (c.t === "code") {
    if (!c.s.trim()) return null;
    return <pre className="my-2 overflow-x-auto rounded-xl border border-line bg-paper p-3 text-sm" aria-label={t.starter}>{c.s}</pre>;
  }
  return <div className="my-1"><Md src={c.s} /></div>;
}

export function AssignBody({ a }: { a: Assignment }) {
  const progress = useSyncExternalStore(subscribeProgress, getProgress, getServerProgress);
  const lang = progress.lang;
  const t = text[lang];
  const refs = a.cells.filter((c) => c.ref).map((c) => c.ref as string);
  return (
    <div className="mt-6">
      <p className="text-xs tracking-widest text-muted">{a.course} · {a.file}</p>
      <p className="mt-3 rounded-xl border-l-4 border-accent bg-card p-3 leading-relaxed">{a.story[lang === "en" ? 1 : 0]}</p>
      <p className="mt-3 text-sm text-muted">{t.rule}</p>
      <details className="mt-4 rounded-card border border-line p-3">
        <summary className="min-h-11 cursor-pointer text-sm font-medium">{t.map} ({refs.length})</summary>
        <p className="mt-2 flex flex-wrap gap-2">
          {refs.map((r) => (
            <a key={r} href={`#t-${r}`} className="min-h-11 rounded-full border border-line px-3 py-2 text-sm">{r}</a>
          ))}
        </p>
      </details>
      <div className="mt-6">
        {a.cells.map((c, i) => (
          <Fragment key={i}>
            {c.ref ? <span id={`t-${c.ref}`} /> : null}
            <CellView c={c} t={t} />
            {c.ref && a.guides[c.ref] ? <GuideBox g={a.guides[c.ref][lang]} r={a.results?.[c.ref]} t={t} /> : null}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
