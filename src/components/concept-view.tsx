import { Link } from "@tanstack/react-router";
import { useSyncExternalStore } from "react";
import { Stage3D } from "@/components/sims/stage3d";
import { Sim } from "@/components/sims/labs";
import { InferWidget } from "@/components/sims/infer-widgets";
import { Tex } from "@/components/tex";
import { relatedOf } from "@/data/map";
import { studyCopy, studyListTitle, studyNeighbors, type StudyConcept } from "@/data/study";
import { getProgress, getServerProgress, subscribeProgress } from "@/lib/progress";
import { getRawVersion, getServerRawVersion, subscribeRaw } from "@/lib/raw-store";

const heads = {
  vi: {
    why: "Biết để làm gì",
    prior: "Nối với cái trước",
    see: "Nhìn cái này",
    plain: "Nói cho dễ",
    example: "Tình huống (mọi số là số minh họa)",
    use: "Khi nào dùng",
    precise: "Nói cho đúng",
    more: "Kéo thêm",
    prev: "Từ trước",
    next: "Tiếp theo",
    links: "Dây nối",
    onMap: "Xem trên bản đồ",
  },
  en: {
    why: "What you use it for",
    prior: "How it links",
    see: "Look at this",
    plain: "In plain words",
    example: "Situation (all numbers are illustrations)",
    use: "When to use it",
    precise: "The precise version",
    more: "Try it",
    prev: "Previous",
    next: "Next",
    links: "Connections",
    onMap: "See on the map",
  },
} as const;

export function ConceptView({ concept }: { concept: StudyConcept }) {
  const progress = useSyncExternalStore(subscribeProgress, getProgress, getServerProgress);
  useSyncExternalStore(subscribeRaw, getRawVersion, getServerRawVersion);
  const lang = progress.lang;
  const head = heads[lang];
  const text = studyCopy(concept, lang);
  const near = studyNeighbors(concept.id);
  const prevText = near.prev ? studyCopy(near.prev, lang) : null;
  const nextText = near.next ? studyCopy(near.next, lang) : null;
  const rel = relatedOf(concept.id);
  return (
    <article className="reading mx-auto">
      <p className="text-xs uppercase tracking-widest text-muted">{concept.eyebrow} · {concept.session}</p>
      <p className="mt-2 text-sm text-muted">{near.index + 1}/{near.total} · {concept.video}</p>
      <h1 className="mt-3 font-display text-4xl leading-tight">{text.title}</h1>
      <Link to="/goc" hash={concept.id} className="mt-3 inline-block text-sm text-accent underline">
        {lang === "en" ? "Edit the raw text" : "Sửa chữ gốc"}
      </Link>

      <section className="mt-6 rounded-card border border-line bg-card p-4">
        <h2 className="text-xs uppercase tracking-widest text-accent">{head.why}</h2>
        <p className="mt-2 text-lg leading-relaxed">{text.why}</p>
      </section>

      {text.prior ? (
        <section className="mt-6">
          <h2 className="text-xs uppercase tracking-widest text-muted">{head.prior}</h2>
          <p className="mt-2 leading-relaxed">{text.prior}</p>
        </section>
      ) : null}

      <section className="mt-6">
        <h2 className="text-xs uppercase tracking-widest text-muted">{head.see}</h2>
        <div className="mt-3">
          <Stage3D scene={concept.scene} lang={lang} />
        </div>
        <p className="mt-3 text-lg leading-relaxed">{text.see}</p>
      </section>

      <section className="mt-8">
        <h2 className="text-xs uppercase tracking-widest text-muted">{head.plain}</h2>
        <p className="mt-2 text-lg leading-relaxed">{text.plain}</p>
      </section>

      <section className="mt-8">
        <h2 className="text-xs uppercase tracking-widest text-muted">{head.example}</h2>
        <p className="mt-2 leading-relaxed">{text.situation}</p>
      </section>

      <section className="mt-8">
        <h2 className="text-xs uppercase tracking-widest text-muted">{head.use}</h2>
        <ol className="mt-3 space-y-3">
          {text.use.map((step, index) => (
            <li key={step} className="flex gap-3">
              <span className="font-display text-2xl leading-none text-accent">{index + 1}</span>
              <p className="leading-relaxed">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="text-xs uppercase tracking-widest text-muted">{head.precise}</h2>
        <p className="mt-2 leading-relaxed">{text.precise}</p>
        {text.formula ? (
          <div className="mt-4 rounded-card border border-line bg-card px-3 py-2">
            <Tex tex={text.formula} block />
          </div>
        ) : null}
        {text.symbols.length > 0 ? (
          <ul className="mt-3 space-y-2 text-sm">
            {text.symbols.map((row) => (
              <li key={row.sym} className="flex gap-3">
                <span className="shrink-0"><Tex tex={row.sym} /></span>
                <span className="text-muted">{row.meaning}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </section>

      <blockquote className="mt-8 border-l-4 border-accent pl-4 font-display text-2xl leading-snug">{text.insight}</blockquote>

      {rel.length > 0 ? (
        <section className="mt-8">
          <h2 className="text-xs uppercase tracking-widest text-muted">{head.links}</h2>
          <ul className="mt-3 space-y-3">
            {rel.map((r) => (
              <li key={r.id}>
                <Link to="/khai-niem/$conceptId" params={{ conceptId: r.id }} className="font-medium underline">
                  {studyListTitle(r.id, lang)}
                </Link>
                <p className="mt-1 text-sm text-muted">{lang === "en" ? r.en : r.vi}</p>
              </li>
            ))}
          </ul>
          <Link to="/ban-do" hash={concept.id} className="mt-3 inline-block text-sm text-accent underline">
            {head.onMap}
          </Link>
        </section>
      ) : (
        <Link to="/ban-do" hash={concept.id} className="mt-6 inline-block text-sm text-accent underline">
          {head.onMap}
        </Link>
      )}

      {concept.sim || concept.widget ? (
        <section className="mt-8">
          <h2 className="text-xs uppercase tracking-widest text-muted">{head.more}</h2>
          <div className="mt-3">
            {concept.widget ? <InferWidget id={concept.widget} lang={lang} /> : null}
            {concept.sim ? <Sim id={concept.sim} /> : null}
          </div>
        </section>
      ) : null}

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {near.prev && prevText ? (
          <Link to="/khai-niem/$conceptId" params={{ conceptId: near.prev.id }} className="rounded-card border border-line p-4">
            <span className="text-xs tracking-widest text-muted">{head.prev}</span>
            <span className="mt-1 block font-medium">{prevText.title}</span>
          </Link>
        ) : <span />}
        {near.next && nextText ? (
          <Link to="/khai-niem/$conceptId" params={{ conceptId: near.next.id }} className="rounded-card border border-line p-4 sm:text-right">
            <span className="text-xs tracking-widest text-muted">{head.next}</span>
            <span className="mt-1 block font-medium">{nextText.title}</span>
          </Link>
        ) : null}
      </div>
    </article>
  );
}