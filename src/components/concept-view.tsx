import { ReportCard } from "@/components/report-card";
import { remember } from "@/data/remember";
import { Link } from "@tanstack/react-router";
import { useState, useSyncExternalStore } from "react";
import { DataDemo } from "@/components/sims/data-demo";
import { MotionPlayer } from "@/components/motion/player";
import { motions } from "@/data/motion";
import { demos } from "@/data/demos";
import { Sim } from "@/components/sims/labs";
import { InferWidget } from "@/components/sims/infer-widgets";
import { Tex } from "@/components/tex";
import { walks, type Visual, type WalkText } from "@/data/walk";
import { WalkVisual } from "@/components/walk-visual";
import { AssignBody } from "@/components/assign-view";
import { OverviewBody } from "@/components/overview-view";
import { UpgradLink } from "@/components/upgrad-link";
import { overviews } from "@/data/overview";
import { getAssignmentByConcept } from "@/data/assign";
import { relatedOf } from "@/data/map";
import { studyCopy, studyListTitle, studyNeighbors, type StudyConcept } from "@/data/study";
import { getProgress, getServerProgress, subscribeProgress } from "@/lib/progress";
import { getRawVersion, getServerRawVersion, subscribeRaw } from "@/lib/raw-store";

const heads = {
  vi: {
    why: "Vì sao cần biết",
    prior: "Liên hệ với bài trước",
    see: "Quan sát",
    plain: "Hiểu nhanh",
    example: "Tình huống minh họa (số liệu giả định)",
    use: "Cách áp dụng",
    precise: "Định nghĩa chính xác",
    more: "Tự thử điều chỉnh",
    prev: "Từ trước",
    next: "Tiếp theo",
    links: "Khái niệm liên quan",
    onMap: "Xem trên sơ đồ tư duy",
    onFormula: "Xem trong bảng công thức",
    onGlossary: "Mở từ điển",
    v2d: "Đồ thị kéo được",
    v3d: "Cảnh 3D",
    walk: "Làm từng bước với số liệu thật",
    words: "Từ cần biết",
    problem: "Bài toán",
    steps: "Từng bước",
    say: "Kết luận bằng lời",
    check: "Tự kiểm tra",
    reveal: "Hiện đáp án",
    story: "Câu chuyện Lotus Spa",
  },
  en: {
    why: "What you use it for",
    prior: "How it links",
    see: "Watch it",
    plain: "In plain words",
    example: "Illustrative situation (made-up numbers)",
    use: "When to use it",
    precise: "The precise version",
    more: "Try it",
    prev: "Previous",
    next: "Next",
    links: "Connections",
    onMap: "See on the map",
    onFormula: "See in the formula sheet",
    onGlossary: "Open the glossary",
    v2d: "Interactive chart",
    v3d: "3D scene",
    walk: "Worked step by step with real numbers",
    words: "Words you need",
    problem: "The problem",
    steps: "Step by step",
    say: "The conclusion in words",
    check: "Check yourself",
    reveal: "Show answer",
    story: "The Lotus Spa story",
  },
} as const;

function Quick({ id, head, formula }: { id: string; head: Record<string, string>; formula: boolean }) {
  const cls = "inline-flex min-h-11 items-center rounded-full border border-line px-3 text-sm";
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      <Link to="/ban-do" hash={id} className={cls}>
        {head.onMap}
      </Link>
      {formula ? (
        <Link to="/cong-thuc" hash={id} className={cls}>
          {head.onFormula}
        </Link>
      ) : null}
      <Link to="/tu-dien" className={cls}>
        {head.onGlossary}
      </Link>
    </div>
  );
}

function WalkBlock({ walk, head, visual, lang }: { walk: WalkText; head: Record<string, string>; visual?: Visual; lang: "vi" | "en" }) {
  const [open, setOpen] = useState(false);
  return (
    <section className="mt-8 rounded-card border border-line bg-card p-4">
      <h2 className="text-xs uppercase tracking-widest text-muted">{head.walk}</h2>
      {walk.story ? (
        <div className="mt-3 rounded-xl border-l-4 border-accent bg-paper p-3">
          <p className="text-xs uppercase tracking-widest text-muted">{head.story}</p>
          <p className="mt-1 leading-relaxed">{walk.story}</p>
        </div>
      ) : null}
      <h3 className="mt-3 text-sm font-medium">{head.words}</h3>
      <dl className="mt-1 space-y-2">
        {walk.words.map(([term, meaning]) => (
          <div key={term}>
            <dt className="font-medium">
              <Link to="/tu-dien" hash={term.replace(/\s+/g, " ").trim().toLowerCase()} className="underline decoration-dotted underline-offset-4">
                {term}
              </Link>
            </dt>
            <dd className="leading-relaxed text-muted">{meaning}</dd>
          </div>
        ))}
      </dl>
      <h3 className="mt-5 text-sm font-medium">{head.problem}</h3>
      <p className="mt-1 leading-relaxed">{walk.problem}</p>
      {visual ? <WalkVisual v={visual} lang={lang} /> : null}
      <h3 className="mt-5 text-sm font-medium">{head.steps}</h3>
      <ol className="mt-2 space-y-3">
        {walk.steps.map(([title, body], i) => (
          <li key={title} className="flex gap-3">
            <span className="font-display text-2xl leading-none text-accent">{i + 1}</span>
            <div>
              <p className="font-medium">{title}</p>
              <p className="leading-relaxed">{body}</p>
            </div>
          </li>
        ))}
      </ol>
      <h3 className="mt-5 text-sm font-medium">{head.say}</h3>
      <p className="mt-1 leading-relaxed">{walk.say}</p>
      <h3 className="mt-5 text-sm font-medium">{head.check}</h3>
      <p className="mt-1 leading-relaxed">{walk.check[0]}</p>
      <button type="button" className="mt-2 min-h-11 rounded-full border border-line px-4 text-sm" onClick={() => setOpen((v) => !v)}>
        {open ? "−" : head.reveal}
      </button>
      {open ? <p className="mt-2 rounded-xl bg-paper p-3 leading-relaxed">{walk.check[1]}</p> : null}
    </section>
  );
}

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
  const hasDemo = Boolean(demos[concept.id]);
  const hasLab = Boolean(concept.sim) && !hasDemo;
  const asg = getAssignmentByConcept(concept.id);
  const ov = overviews[concept.id];
  const visual = hasDemo ? (
    <DataDemo demo={demos[concept.id]} lang={lang} />
  ) : motions[concept.id] ? (
    <MotionPlayer motion={motions[concept.id]} lang={lang} />
  ) : hasLab ? (
    <Sim id={concept.sim as string} />
  ) : null;
  return (
    <article className="reading mx-auto">
      <p className="text-xs uppercase tracking-widest text-muted">{concept.eyebrow} · {concept.session}</p>
      <p className="mt-2 text-sm text-muted">{near.index + 1}/{near.total} · {concept.video}</p>
      <h1 className="mt-3 font-display text-4xl leading-tight">{asg ? asg.title[lang === "en" ? 1 : 0] : text.title}</h1>
      <Link to="/goc" hash={concept.id} className="mt-3 inline-block text-sm text-accent underline">
        {lang === "en" ? "Edit the raw text" : "Sửa chữ gốc"}
      </Link>

      {asg ? (
        <AssignBody a={asg} />
      ) : ov ? (
        <OverviewBody ov={ov} lang={lang} />
      ) : (
        <>
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

      {visual ? (
        <section className="mt-6">
          <h2 className="text-xs uppercase tracking-widest text-muted">{head.see}</h2>
          <div className="mt-3">{visual}</div>
        </section>
      ) : null}

      <section className="mt-8">
        <h2 className="text-xs uppercase tracking-widest text-muted">{head.plain}</h2>
        <p className="mt-2 text-lg leading-relaxed">{text.plain}</p>
      </section>

      <section className="mt-8">
        <h2 className="text-xs uppercase tracking-widest text-muted">{head.example}</h2>
        <p className="mt-2 leading-relaxed">{text.situation}</p>
      </section>

      {walks[concept.id] ? <WalkBlock walk={walks[concept.id][lang]} head={head} visual={walks[concept.id].visual} lang={lang} /> : null}

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

      {remember[concept.id] ? (
        <section className="mt-8 rounded-card border border-accent bg-card px-4 py-3">
          <h2 className="text-xs uppercase tracking-widest text-accent">{lang === "en" ? "Remember in one line" : "Nhớ một câu"}</h2>
          <p className="mt-2 leading-relaxed">{remember[concept.id][lang === "en" ? 1 : 0]}</p>
        </section>
      ) : null}

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
          <Quick id={concept.id} head={head} formula={Boolean(text.formula)} />
        </section>
      ) : (
        <section className="mt-6">
          <Quick id={concept.id} head={head} formula={Boolean(text.formula)} />
        </section>
      )}

      {(concept.sim && hasDemo) || concept.widget ? (
        <section className="mt-8">
          <h2 className="text-xs uppercase tracking-widest text-muted">{head.more}</h2>
          <div className="mt-3">
            {concept.widget ? <InferWidget id={concept.widget} lang={lang} /> : null}
            {concept.sim && hasDemo ? <Sim id={concept.sim} /> : null}
          </div>
        </section>
      ) : null}

        </>
      )}

      <UpgradLink concept={concept} lang={lang} />

      <ReportCard conceptId={concept.id} title={text.title} lang={lang} />

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