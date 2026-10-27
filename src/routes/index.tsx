import { courseCardIds } from "@/lib/course-cards";
import { isDone, useDone } from "@/lib/done";
import { ReviewPanel } from "@/components/review-panel";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, useSyncExternalStore } from "react";
import { setOpenCourse, useTocMemory } from "@/lib/toc-memory";
import { CoverInfo, Disclosure, ModuleTree, tocWords } from "@/components/toc-tree";
import { sessionConcepts } from "@/data/place";
import { liveCourse } from "@/lib/cms-live";
import { getCmsVersion, getServerCmsVersion, subscribeCms } from "@/lib/cms-store";
import { courses, getLesson, stats } from "@/lib/catalog";
import {
  countSeen,
  getProgress,
  getServerProgress,
  hydrateProgress,
  importProgress,
  progressSnapshot,
  subscribeProgress,
} from "@/lib/progress";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const progress = useSyncExternalStore(subscribeProgress, getProgress, getServerProgress);
  useSyncExternalStore(subscribeCms, getCmsVersion, getServerCmsVersion);
  const lang = progress.lang;
  const [notice, setNotice] = useState("");
  const mem = useTocMemory();
  const doneMap = useDone();
  const openCourse = mem.course;
  useEffect(() => {
    hydrateProgress();
  }, []);
  const counts = countSeen();
  const last = progress.lastLessonId ? getLesson(progress.lastLessonId) : null;

  return (
    <div className="mx-auto max-w-3xl">
      <p className="text-xs tracking-widest text-muted">Business Analytics</p>
      <h1 className="mt-2 font-display text-5xl leading-none">Sổ Mực</h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed">
        {lang === "en"
          ? `Courses follow the syllabus order. Open a course, then a session, then one idea. No quiz. ${stats.items} upGrad items still sit behind the older lessons.`
          : `Các khóa đi đúng thứ tự giáo trình. Mở một khóa, rồi một buổi, rồi một ý. Không có bài kiểm tra. ${stats.items} mục upGrad vẫn nằm ở các bài cũ.`}
      </p>
      <p className="mt-3 text-sm text-muted">
        {lang === "en"
          ? `Seen ${counts.seen}/${counts.total} items · reading ${counts.viewing}`
          : `Đã xem ${counts.seen}/${counts.total} mục · đang xem ${counts.viewing}`}
      </p>

      {last ? (
        <Link to="/bai/$lessonId" params={{ lessonId: last.id }} className="mt-4 block rounded-card border border-line bg-card p-4">
          <p className="text-xs tracking-widest text-accent">{lang === "en" ? "Continue" : "Tiếp tục"}</p>
          <p className="mt-1 font-medium">{last.title}</p>
          <p className="text-sm text-muted">{last.courseTitle}</p>
        </Link>
      ) : null}

      <ReviewPanel lang={lang} />

      <h2 className="mt-8 text-xs tracking-widest text-muted">{lang === "en" ? "Contents" : "Mục lục"}</h2>
      <ol className="mt-2 divide-y divide-line border-y border-line">
        {courses.map((course, index) => {
          const head = liveCourse(course.id, lang);
          const ideas = course.modules.reduce(
            (sum, mod) => sum + mod.sessions.reduce((inner, session) => inner + (sessionConcepts[session.id]?.length ?? 0), 0),
            0,
          );
          const cardIds = courseCardIds(course.id);
          const learned = cardIds.filter((id) => isDone(doneMap, id)).length;
          return (
            <li key={course.id}>
              <Disclosure
                open={openCourse === course.id}
                onToggle={() => setOpenCourse(openCourse === course.id ? "" : course.id)}
                head={
                  <span className="block py-1">
                    <span className="text-xs text-muted">{String(index + 1).padStart(2, "0")}{course.optional ? " · optional" : ""} · {ideas} {lang === "en" ? "ideas" : "ý"}{cardIds.length ? ` · ${lang === "en" ? "learned" : "đã học"} ${learned}/${cardIds.length}` : ""}</span>
                    {cardIds.length ? <span className="mt-1 block h-1 overflow-hidden rounded-full bg-line" role="progressbar" aria-valuenow={learned} aria-valuemin={0} aria-valuemax={cardIds.length}><span className="block h-full bg-accent" style={{ width: `${Math.round((learned / cardIds.length) * 100)}%` }} /></span> : null}
                    <span className="mt-1 block font-medium">{course.title}</span>
                    {openCourse !== course.id ? <span className="mt-1 block text-sm text-muted">{head.why}</span> : null}
                  </span>
                }
              >
                <CoverInfo plain={head.plain} why={head.why} prior={head.prior} lang={lang} editHash={`course:${course.id}`} />
                <Link to="/khoa/$courseId" params={{ courseId: course.id }} className="mb-2 inline-flex min-h-11 items-center text-sm text-accent underline">
                  {tocWords[lang].page}
                </Link>
                <ModuleTree course={course} lang={lang} />
              </Disclosure>
            </li>
          );
        })}
      </ol>

      <div className="mt-6 flex flex-wrap gap-2">
        <Link to="/tu-dien" className="min-h-11 rounded-full border border-line px-4 py-3 text-sm">Từ điển</Link>
        <Link to="/luyen-tap" className="min-h-11 rounded-full border border-line px-4 py-3 text-sm">{lang === "en" ? "Practice" : "Luyện tập"}</Link>
        <Link to="/dong-bo" className="min-h-11 rounded-full border border-line px-4 py-3 text-sm">{lang === "en" ? "Sync devices" : "Đồng bộ máy"}</Link>
        <Link to="/goc" className="min-h-11 rounded-full border border-line px-4 py-3 text-sm">Quản lý nội dung</Link>
        <button
          type="button"
          className="min-h-11 rounded-full border border-line px-4 text-sm"
          onClick={() => {
            const blob = new Blob([progressSnapshot()], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "so-muc-tien-do.json";
            a.click();
            URL.revokeObjectURL(url);
          }}
        >
          Xuất tiến độ
        </button>
        <label className="min-h-11 cursor-pointer rounded-full border border-line px-4 py-3 text-sm">
          Nhập tiến độ
          <input
            className="sr-only"
            type="file"
            accept="application/json"
            onChange={async (event) => {
              const file = event.target.files?.[0];
              if (!file) return;
              try {
                importProgress(await file.text());
                setNotice("Đã nhập tiến độ.");
              } catch {
                setNotice("Không đọc được tệp.");
              }
            }}
          />
        </label>
      </div>
      {notice ? <p className="mt-3 text-sm">{notice}</p> : null}
    </div>
  );
}
