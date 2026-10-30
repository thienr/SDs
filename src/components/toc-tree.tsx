import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Check, ChevronRight } from "lucide-react";
import { isDone, useDone } from "@/lib/done";
import { sessionConcepts } from "@/data/place";
import { studyListTitle } from "@/data/study";
import { liveModule, liveSession } from "@/lib/cms-live";
import { getLesson, lessons, type Course } from "@/lib/catalog";
import { lessonStatus, type Lang } from "@/lib/progress";
import { useTocMemory } from "@/lib/toc-memory";
import { rawIsEdited } from "@/lib/raw-store";

/** Các khóa chỉ học qua thẻ khái niệm, không liệt kê bài giảng gốc. */
const trackOnly = new Set([
  "Inferential Statistics", "Hypothesis Testing", "Exploratory Data Analysis", "Database Design and Introduction to MySQL",
  "Advanced SQL and Best Practices", "Linear Regression", "Logistic Regression", "Classification using Decision Trees",
  "Unsupervised Learning: Clustering", "Basics of NLP and Text Mining", "Business Problem Solving", "Bagging and Random Forests",
  "Model Selection - I", "Model Selection - II", "Time Series Forecasting - I", "Time Series Forecasting - II",
]);

const words = {
  vi: { why: "Biết để làm gì", prior: "Nối với cái trước", editCourse: "Sửa đầu khóa", editPart: "Sửa đầu phần", page: "Mở trang khóa", last: "đọc dở ở đây", seen: "Đã xem", viewing: "Đang xem", not: "Chưa xem", edited: "đã sửa", none: "Buổi này chưa có thẻ riêng." },
  en: { why: "What you use it for", prior: "How it links", editCourse: "Edit this opener", editPart: "Edit this part", page: "Open the course page", last: "you stopped here", seen: "Seen", viewing: "Reading", not: "Not yet", edited: "edited", none: "No cards for this session yet." },
};

/** Nút có mũi tên bung xuống. */
export function Disclosure({ id, open, onToggle, head, children, level = 0 }: { id?: string; open: boolean; onToggle: () => void; head: React.ReactNode; children: React.ReactNode; level?: 0 | 1 | 2 }) {
  return (
    <div id={id} className="scroll-mt-32">
      <button
        type="button"
        aria-expanded={open}
        onClick={onToggle}
        className={`flex min-h-11 w-full items-start gap-2 text-left ${level === 0 ? "py-2" : "py-1"}`}
      >
        <ChevronRight className={`mt-1 size-4 shrink-0 text-accent transition-transform ${open ? "rotate-90" : ""}`} aria-hidden />
        <span className="min-w-0 flex-1">{head}</span>
      </button>
      {open ? <div className="ml-6">{children}</div> : null}
    </div>
  );
}

export function CoverInfo({ plain, why, prior, lang, editHash, onNavigate }: { plain: string; why: string; prior: string; lang: Lang; editHash: string; onNavigate?: () => void }) {
  const t = words[lang];
  return (
    <div className="mb-2 rounded-card border border-line bg-card p-3 text-sm leading-relaxed">
      {plain ? <p>{plain}</p> : null}
      {why ? <p className="mt-2"><span className="text-xs uppercase tracking-widest text-accent">{t.why}. </span>{why}</p> : null}
      {prior ? <p className="mt-2 text-muted"><span className="text-xs uppercase tracking-widest">{t.prior}. </span>{prior}</p> : null}
      <Link to="/goc" hash={editHash} onClick={onNavigate} className="mt-2 inline-block text-xs text-accent underline">
        {editHash.startsWith("course:") ? t.editCourse : t.editPart}
      </Link>
    </div>
  );
}

function SessionLinks({ course, modTitle, sessionId, lessonIds, lang, onNavigate, lastItem }: { lastItem?: string | null; course: Course; modTitle: string; sessionId: string; lessonIds: string[]; lang: Lang; onNavigate?: () => void }) {
  const t = words[lang];
  const doneMap = useDone();
  const ids = sessionConcepts[sessionId] ?? [];
  const real = ids.filter((id) => !id.startsWith("d-"));
  const showLessons = real.length === 0 && !trackOnly.has(modTitle);
  const mine = new Set(lessons.filter((l) => l.courseId === course.id).map((l) => l.id));
  const lessonRows = showLessons ? lessonIds.filter((id) => mine.has(id)) : [];
  if (!ids.length && !lessonRows.length) return <p className="py-1 text-sm text-muted">{t.none}</p>;
  return (
    <ul className="mb-2 space-y-0.5">
      {ids.map((id) => (
        <li key={id}>
          <Link to="/khai-niem/$conceptId" params={{ conceptId: id }} onClick={onNavigate} className={`flex min-h-11 items-center justify-between gap-3 rounded-lg px-2 text-sm hover:bg-card ${lastItem === id ? "bg-card ring-1 ring-accent" : ""}`}>
            <span className="font-medium">
              {isDone(doneMap, id) ? <Check className="mr-1 inline size-4 text-accent" aria-label={lang === "en" ? "learned" : "đã học"} /> : null}
              {studyListTitle(id, lang)}
              {lastItem === id ? <span className="ml-2 text-xs font-normal text-accent">{t.last}</span> : null}
              {rawIsEdited(id, lang) ? <span className="ml-2 text-xs font-normal text-accent">{t.edited}</span> : null}
            </span>
          </Link>
        </li>
      ))}
      {lessonRows.map((id) => {
        const lesson = getLesson(id);
        if (!lesson) return null;
        const st = lessonStatus(id);
        return (
          <li key={id}>
            <Link to="/bai/$lessonId" params={{ lessonId: id }} onClick={onNavigate} className={`flex min-h-11 items-center justify-between gap-3 rounded-lg px-2 text-sm hover:bg-card ${lastItem === id ? "bg-card ring-1 ring-accent" : ""}`}>
              <span className="font-medium">{lesson.title}{lastItem === id ? <span className="ml-2 text-xs font-normal text-accent">{t.last}</span> : null}</span>
              <span className="shrink-0 text-xs text-muted">{st === "seen" ? t.seen : st === "viewing" ? t.viewing : t.not}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

/**
 * Mục lục của một khóa: phần → buổi → liên kết từng bài. Mỗi cấp có mũi tên bung xuống;
 * phần «bìa» (giới thiệu) cũng bung ra ngay tại chỗ.
 */
export function ModuleTree({ course, lang, openIds, onNavigate }: { course: Course; lang: Lang; openIds?: string[]; onNavigate?: () => void }) {
  const mem = useTocMemory();
  const last = mem.read && mem.read.course === course.id ? mem.read : null;
  const [open, setOpen] = useState<Set<string>>(() => new Set([...(openIds ?? []), ...(last?.mod ? [`m:${last.mod}`] : []), ...(last?.ses ? [`s:${last.ses}`] : [])]));
  useEffect(() => {
    const add = [...(last?.mod ? [`m:${last.mod}`] : []), ...(last?.ses ? [`s:${last.ses}`] : [])];
    if (add.length) setOpen((prev) => (add.every((k) => prev.has(k)) ? prev : new Set([...prev, ...add])));
  }, [last?.mod, last?.ses]);
  const toggle = (k: string) =>
    setOpen((prev) => {
      const n = new Set(prev);
      if (n.has(k)) n.delete(k);
      else n.add(k);
      return n;
    });
  return (
    <ol className="space-y-1">
      {course.modules.map((mod, mi) => {
        const head = liveModule(course.id, mod.title, lang);
        const mk = `m:${mod.id}`;
        return (
          <li key={mod.id} className="border-b border-line last:border-b-0">
            <Disclosure
              id={`mod-${mod.id}`}
              open={open.has(mk)}
              onToggle={() => toggle(mk)}
              head={
                <>
                  <span className="text-xs tracking-widest text-muted">{mi + 1}{mod.optional ? " · optional" : ""}</span>
                  <span className="block font-medium">{mod.title}</span>
                  {!open.has(mk) && head.why ? <span className="mt-0.5 block text-sm text-muted">{head.why}</span> : null}
                </>
              }
            >
              <CoverInfo plain={head.plain} why={head.why} prior={head.prior} lang={lang} editHash={`module:${course.id}||${mod.title}`} onNavigate={onNavigate} />
              <ol>
                {mod.sessions.map((s) => {
                  const sk = `s:${s.id}`;
                  const ids = (sessionConcepts[s.id] ?? []).length;
                  const blurb = liveSession(course.id, mod.title, s.title, lang);
                  return (
                    <li key={s.id}>
                      <Disclosure
                        id={`ses-${s.id}`}
                        level={1}
                        open={open.has(sk)}
                        onToggle={() => toggle(sk)}
                        head={
                          <span className="flex items-baseline justify-between gap-3">
                            <span className="text-sm">{s.title}{s.optional ? " · optional" : ""}</span>
                            {ids > 0 ? <span className="shrink-0 text-xs text-muted">{ids}</span> : null}
                          </span>
                        }
                      >
                        {blurb ? <p className="mb-1 text-sm leading-relaxed text-muted">{blurb}</p> : null}
                        <SessionLinks lastItem={last?.ses === s.id ? last.item : null} course={course} modTitle={mod.title} sessionId={s.id} lessonIds={s.lessonIds} lang={lang} onNavigate={onNavigate} />
                      </Disclosure>
                    </li>
                  );
                })}
              </ol>
            </Disclosure>
          </li>
        );
      })}
    </ol>
  );
}

export { words as tocWords };
