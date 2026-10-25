import { Link } from "@tanstack/react-router";
import { useState } from "react";
import type { Overview } from "@/data/overview";
import { studyListTitle } from "@/data/study";
import type { Lang } from "@/lib/progress";

function Qa({ q, a, n }: { q: string; a: string; n: number }) {
  const [open, setOpen] = useState(false);
  return (
    <li className="rounded-card border border-line bg-card p-4">
      <p className="font-medium"><span className="mr-2 font-display text-xl text-accent">{n}</span>{q}</p>
      <button type="button" className="mt-2 min-h-11 rounded-full border border-line px-4 text-sm" onClick={() => setOpen((v) => !v)}>
        {open ? "Ẩn đáp án mẫu" : "Tự trả lời trước, rồi xem đáp án mẫu"}
      </button>
      {open ? <p className="mt-3 rounded-xl bg-paper p-3 leading-relaxed">{a}</p> : null}
    </li>
  );
}

export function OverviewBody({ ov, lang }: { ov: Overview; lang: Lang }) {
  return (
    <div>
      <section className="mt-6 rounded-card border border-line bg-card p-4">
        <p className="text-lg leading-relaxed">{ov.lead}</p>
      </section>
      {ov.blocks.map((b, i) => {
        if (b.k === "h") return <h2 key={i} className="mt-8 font-display text-2xl leading-snug">{b.x}</h2>;
        if (b.k === "p") return <p key={i} className="mt-3 leading-relaxed">{b.x}</p>;
        if (b.k === "note") return <p key={i} className="mt-4 rounded-xl border-l-4 border-accent bg-paper p-3 leading-relaxed">{b.x}</p>;
        if (b.k === "code") return <pre key={i} className="mt-3 overflow-x-auto rounded-xl bg-paper p-3 text-sm leading-relaxed"><code>{b.x}</code></pre>;
        if (b.k === "ul")
          return (
            <ul key={i} className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
              {b.x.map((t) => <li key={t}>{t}</li>)}
            </ul>
          );
        if (b.k === "def")
          return (
            <dl key={i} className="mt-3 space-y-3">
              {b.x.map(([t, m]) => (
                <div key={t} className="rounded-xl border border-line p-3">
                  <dt className="font-medium">{t}</dt>
                  <dd className="mt-1 leading-relaxed text-muted">{m}</dd>
                </div>
              ))}
            </dl>
          );
        if (b.k === "qa")
          return (
            <ol key={i} className="mt-4 space-y-3">
              {b.x.map(([q, a], j) => <Qa key={q} q={q} a={a} n={j + 1} />)}
            </ol>
          );
        return (
          <ul key={i} className="mt-3 space-y-2">
            {b.x.map((id) => (
              <li key={id}>
                <Link to="/khai-niem/$conceptId" params={{ conceptId: id }} className="font-medium text-accent underline">
                  {studyListTitle(id, lang)}
                </Link>
              </li>
            ))}
          </ul>
        );
      })}
    </div>
  );
}
