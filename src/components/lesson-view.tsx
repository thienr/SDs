import { Link } from "@tanstack/react-router";
import { useEffect, useState, useSyncExternalStore } from "react";
import { Check, Circle } from "lucide-react";
import { Sim } from "@/components/sims/labs";
import { Tex, maybeTex } from "@/components/tex";
import { block, formatMinutes, neighbors, type Lesson } from "@/lib/catalog";
import { liveLesson } from "@/lib/cms-live";
import { getCmsVersion, getServerCmsVersion, subscribeCms } from "@/lib/cms-store";
import { cycleItem, getProgress, getServerProgress, itemStatus, lessonStatus, markLesson, openLesson, subscribeProgress } from "@/lib/progress";

const labels: Record<string, string> = {
  situation: "Tình huống",
  problem: "Vấn đề",
  why: "Vì sao khái niệm này tồn tại",
  definition: "Định nghĩa",
  illustration: "Minh họa",
  pitfalls: "Đừng nhầm",
  insight: "Insight",
  sources: "Nguồn",
};

function statusLabel(status: string) {
  if (status === "seen") return "Đã xem";
  if (status === "viewing") return "Đang xem";
  return "Chưa xem";
}

export function LessonView({ lesson }: { lesson: Lesson }) {
  const progress = useSyncExternalStore(subscribeProgress, getProgress, getServerProgress);
  useSyncExternalStore(subscribeCms, getCmsVersion, getServerCmsVersion);
  const lang = progress.lang;
  const shown = liveLesson(lesson, lang);
  useEffect(() => {
    openLesson(shown.id);
  }, [shown.id]);
  const status = lessonStatus(shown.id);
  const near = neighbors(shown.id);
  const recall = shown.blocks.find((item) => item.type === "recall");
  const [ran, setRan] = useState(false);
  const [stepI, setStepI] = useState(0);
  const [pipeI, setPipeI] = useState(0);
  const illustration = block(shown, "illustration");
  const steps = illustration?.steps ?? [];
  const pipeline = illustration?.pipeline ?? [];

  return (
    <article className="reading mx-auto">
      <p className="text-xs uppercase tracking-widest text-muted">
        {shown.courseTitle}
      </p>
      <p className="mt-1 text-sm text-muted">
        {shown.moduleTitle} · {shown.sessionTitle}
      </p>
      <h1 className="mt-3 font-display text-4xl leading-tight">{shown.title}</h1>
      <Link to="/goc" hash={`lesson:${shown.id}`} className="mt-2 inline-block text-sm text-accent underline">
        {lang === "en" ? "Edit this lesson" : "Sửa bài này"}
      </Link>
      <p className="mt-3 text-sm text-muted">
        Đọc khoảng {shown.readMin} phút · {formatMinutes(shown.videoSec)} · {statusLabel(status)}
        {shown.factId === "fallback" ? " · tóm tắt buổi" : ""}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button type="button" className="min-h-11 rounded-full bg-accent px-4 text-sm text-accent-ink" onClick={() => markLesson(lesson.id, "seen")}>
          {lang === "en" ? "Mark seen" : "Đánh dấu đã xem"}
        </button>
        <button type="button" className="min-h-11 rounded-full border border-line px-4 text-sm" onClick={() => markLesson(lesson.id, "unseen")}>
          {lang === "en" ? "Mark unseen" : "Đặt lại chưa xem"}
        </button>
      </div>

      {recall && recall.type === "recall" && recall.links && recall.links.length > 0 ? (
        <aside className="mt-6 rounded-card border border-line bg-card p-4 text-sm">
          <p className="text-xs uppercase tracking-widest text-muted">Cần nhớ lại</p>
          <ul className="mt-2 space-y-2">
            {recall.links.map((link) => (
              <li key={link.lessonId}>
                <Link to="/bai/$lessonId" params={{ lessonId: link.lessonId }} className="underline">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      ) : null}

      {shown.blocks.map((item) => {
        if (item.type === "recall") return null;
        return (
          <section key={item.type} className="mt-8">
            <h2 className="text-xs uppercase tracking-widest text-muted">{labels[item.type]}</h2>
            {item.type === "situation" || item.type === "problem" || item.type === "why" ? (
              <p className="mt-2 text-lg leading-relaxed">{item.text}</p>
            ) : null}
            {item.type === "definition" ? (
              <div className="mt-2 space-y-3 text-lg leading-relaxed">
                <p>{item.plain}</p>
                <p>{item.precise}</p>
                {item.formula ? (
                  <div className="rounded-card border border-line bg-card px-3 py-2">
                    <Tex tex={item.formula} block />
                  </div>
                ) : null}
                {item.symbols.length > 0 ? (
                  <ul className="space-y-2 text-base">
                    {item.symbols.map((sym) => (
                      <li key={sym.sym} className="flex gap-3">
                        <span className="shrink-0">
                          <Tex tex={sym.sym} />
                        </span>
                        <span className="text-muted">{sym.meaning}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ) : null}
            {item.type === "illustration" ? (
              <div className="mt-3 space-y-4">
                {item.sim ? <Sim id={item.sim} /> : null}
                {pipeline.length > 0 ? (
                  <div className="rounded-card border border-line p-4">
                    <p className="text-sm text-muted">
                      Bước {pipeline[pipeI].n}. {pipeline[pipeI].title}
                    </p>
                    <p className="mt-2 text-lg">{pipeline[pipeI].body}</p>
                    <div className="mt-3 flex gap-2">
                      <button type="button" className="min-h-11 rounded-full border border-line px-3 text-sm" onClick={() => setPipeI((v) => Math.max(0, v - 1))}>
                        Trước
                      </button>
                      <button type="button" className="min-h-11 rounded-full bg-ink px-3 text-sm text-paper" onClick={() => setPipeI((v) => Math.min(pipeline.length - 1, v + 1))}>
                        Bước tiếp
                      </button>
                    </div>
                  </div>
                ) : null}
                {steps.length > 0 ? (
                  <div className="rounded-card border border-line p-4">
                    <p className="text-sm text-muted">{steps[stepI].label}</p>
                    <div className="mt-2">{maybeTex(steps[stepI].math)}</div>
                    <p className="mt-2">{steps[stepI].say}</p>
                    <div className="mt-3 flex gap-2">
                      <button type="button" className="min-h-11 rounded-full border border-line px-3 text-sm" onClick={() => setStepI((v) => Math.max(0, v - 1))}>
                        Trước
                      </button>
                      <button type="button" className="min-h-11 rounded-full bg-ink px-3 text-sm text-paper" onClick={() => setStepI((v) => Math.min(steps.length - 1, v + 1))}>
                        Bước tiếp
                      </button>
                    </div>
                  </div>
                ) : null}
                {item.code ? (
                  <div className="rounded-card border border-line bg-ink p-4 text-paper">
                    <p className="text-xs uppercase tracking-widest text-paper/70">{item.code.lang}</p>
                    <pre className="mt-2 overflow-x-auto text-sm leading-relaxed">{item.code.source}</pre>
                    <button type="button" className="mt-3 min-h-11 rounded-full bg-accent px-4 text-sm text-accent-ink" onClick={() => setRan(true)}>
                      Chạy
                    </button>
                    {ran ? <pre className="mt-3 overflow-x-auto border-t border-paper/20 pt-3 text-sm">{item.code.out}</pre> : null}
                    <p className="mt-2 text-xs text-paper/70">Kết quả tính sẵn trên dữ liệu mẫu. Không cần gõ.</p>
                  </div>
                ) : null}
              </div>
            ) : null}
            {item.type === "pitfalls" ? (
              <div className="mt-3 space-y-3">
                {item.rows.map((row) => (
                  <div key={row.left} className="grid gap-2 rounded-card border border-line p-4 sm:grid-cols-2">
                    <p className="font-medium">{row.left}</p>
                    <p className="font-medium">{row.right}</p>
                    <p className="text-muted sm:col-span-2">{row.note}</p>
                  </div>
                ))}
              </div>
            ) : null}
            {item.type === "insight" ? (
              <blockquote className="mt-3 border-l-4 border-accent pl-4 font-display text-2xl leading-snug">{item.text}</blockquote>
            ) : null}
            {item.type === "sources" ? (
              <ul className="mt-3 space-y-3 text-sm">
                {item.items.map((source) => (
                  <li key={source.claim}>
                    <p>{source.claim}</p>
                    {source.url ? (
                      <a className="text-accent underline" href={source.url} target="_blank" rel="noreferrer">
                        {source.source}
                      </a>
                    ) : (
                      <p className="text-muted">{source.source}</p>
                    )}
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        );
      })}

      <section className="mt-10">
        <h2 className="text-xs uppercase tracking-widest text-muted">Tự đánh dấu mục gốc</h2>
        <p className="mt-2 text-sm text-muted">Phần trên là định nghĩa và ví dụ. Danh sách dưới chỉ để nhớ mình đã xem mục nào. Không có câu hỏi.</p>
        <ul className="mt-3 divide-y divide-line border-y border-line">
          {shown.items.map((item) => {
            const st = itemStatus(item.id);
            return (
              <li key={item.id}>
                <button type="button" className="flex min-h-14 w-full items-start gap-3 py-3 text-left" onClick={() => cycleItem(item.id)}>
                  {st === "seen" ? <Check className="mt-1 size-4 shrink-0 text-good" /> : <Circle className={`mt-1 size-4 shrink-0 ${st === "viewing" ? "text-accent" : "text-muted"}`} />}
                  <span>
                    <span className="block">{item.title}</span>
                    <span className="text-xs uppercase tracking-widest text-muted">
                      {item.kind} · {statusLabel(st)}
                      {item.optional ? " · optional" : ""}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </section>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {near.prev ? (
          <Link to="/bai/$lessonId" params={{ lessonId: near.prev.id }} className="rounded-card border border-line p-4">
            <span className="text-xs uppercase tracking-widest text-muted">{lang === "en" ? "Previous" : "Từ trước"}</span>
            <span className="mt-1 block font-medium">{near.prev.title}</span>
          </Link>
        ) : <span />}
        {near.next ? (
          <Link to="/bai/$lessonId" params={{ lessonId: near.next.id }} className="rounded-card border border-line p-4 sm:text-right">
            <span className="text-xs uppercase tracking-widest text-muted">{lang === "en" ? "Next" : "Tiếp theo"}</span>
            <span className="mt-1 block font-medium">{near.next.title}</span>
          </Link>
        ) : null}
      </div>
    </article>
  );
}
