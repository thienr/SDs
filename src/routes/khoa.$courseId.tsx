import { createFileRoute, Link } from "@tanstack/react-router";
import { useSyncExternalStore } from "react";
import { sessionConcepts } from "@/data/place";
import { liveCourse, liveModule, liveSession } from "@/lib/cms-live";
import { getCmsVersion, getServerCmsVersion, subscribeCms } from "@/lib/cms-store";
import { studyListTitle } from "@/data/study";
import { getCourse, getLesson, lessons } from "@/lib/catalog";
import { getProgress, getServerProgress, lessonStatus, subscribeProgress } from "@/lib/progress";
import { getRawVersion, getServerRawVersion, rawIsEdited, subscribeRaw } from "@/lib/raw-store";

export const Route = createFileRoute("/khoa/$courseId")({
  component: CoursePage,
});

const trackOnly = new Set([
  "Inferential Statistics",
  "Hypothesis Testing",
  "Exploratory Data Analysis",
  "Database Design and Introduction to MySQL",
  "Advanced SQL and Best Practices",
  "Linear Regression",
  "Logistic Regression",
  "Classification using Decision Trees",
  "Unsupervised Learning: Clustering",
  "Basics of NLP and Text Mining",
  "Business Problem Solving",
  "Bagging and Random Forests",
  "Model Selection - I",
  "Model Selection - II",
  "Time Series Forecasting - I",
  "Time Series Forecasting - II",
]);

function CoursePage() {
  const progress = useSyncExternalStore(subscribeProgress, getProgress, getServerProgress);
  useSyncExternalStore(subscribeRaw, getRawVersion, getServerRawVersion);
  useSyncExternalStore(subscribeCms, getCmsVersion, getServerCmsVersion);
  const lang = progress.lang;
  const { courseId } = Route.useParams();
  const course = getCourse(courseId);
  if (!course) return <p>{lang === "en" ? "This course is missing." : "Không thấy khóa này."}</p>;
  const courseLessonIds = new Set(lessons.filter((lesson) => lesson.courseId === course.id).map((lesson) => lesson.id));
  const head = liveCourse(course.id, lang);
  const opener = lang === "en"
    ? { course: "Course opener", part: "Part opener", contents: "Contents", why: "What you use it for", prior: "How it links", ideas: "The ideas", learn: "Open" }
    : { course: "Đầu khóa", part: "Đầu phần", contents: "Mục lục", why: "Biết để làm gì", prior: "Nối với cái trước", ideas: "Các ý", learn: "Học" };

  return (
    <div className="mx-auto max-w-3xl">
      <p className="text-xs tracking-widest text-muted">{opener.course}</p>
      <h1 className="mt-2 font-display text-4xl leading-tight">{course.title}</h1>
      <p className="mt-4 text-lg leading-relaxed">{head.plain}</p>
      <section className="mt-4 rounded-card border border-line bg-card p-4">
        <h2 className="text-xs tracking-widest text-accent">{opener.why}</h2>
        <p className="mt-2 leading-relaxed">{head.why}</p>
      </section>
      {head.prior ? (
        <p className="mt-4 leading-relaxed">
          <span className="text-xs tracking-widest text-muted">{opener.prior}. </span>
          {head.prior}
        </p>
      ) : null}
      <Link to="/goc" hash={`course:${course.id}`} className="mt-3 inline-block text-sm text-accent underline">
        {lang === "en" ? "Edit this opener" : "Sửa đầu khóa"}
      </Link>

      <h2 className="mt-8 text-xs tracking-widest text-muted">{opener.contents}</h2>
      <ol className="mt-3 space-y-3">
        {course.modules.map((mod, index) => {
          const modHead = liveModule(course.id, mod.title, lang);
          return (
            <li key={mod.id}>
              <a href={`#mod-${mod.id}`} className="block min-h-11 rounded-card border border-line px-4 py-3">
                <span className="text-xs tracking-widest text-muted">{index + 1}{mod.optional ? " · optional" : ""}</span>
                <span className="mt-1 block font-medium">{mod.title}</span>
                <span className="mt-1 block text-sm text-muted">{modHead.why}</span>
              </a>
            </li>
          );
        })}
      </ol>

      <div className="mt-10 space-y-12">
        {course.modules.map((mod, index) => {
          const modHead = liveModule(course.id, mod.title, lang);
          return (
            <section key={mod.id} id={`mod-${mod.id}`} className="scroll-mt-32">
              <p className="text-xs tracking-widest text-accent">{opener.part} · {index + 1}{mod.optional ? " · optional" : ""}</p>
              <h2 className="mt-2 font-display text-3xl leading-tight">{mod.title}</h2>
              <p className="mt-3 leading-relaxed">{modHead.plain}</p>
              <p className="mt-3 leading-relaxed">{modHead.why}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{modHead.prior}</p>
              <Link to="/goc" hash={`module:${course.id}||${mod.title}`} className="mt-2 inline-block text-sm text-accent underline">
                {lang === "en" ? "Edit this part" : "Sửa đầu phần"}
              </Link>

              <h3 className="mt-6 text-xs tracking-widest text-muted">{opener.contents}</h3>
              <ol className="mt-3 space-y-4">
                {mod.sessions.map((session) => {
                  const blurb = liveSession(course.id, mod.title, session.title, lang);
                  const ids = sessionConcepts[session.id] ?? [];
                  const real = ids.filter((id) => !id.startsWith("d-"));
                  const showLessons = real.length === 0 && !trackOnly.has(mod.title);
                  return (
                    <li key={session.id} id={`ses-${session.id}`} className="scroll-mt-32 rounded-card border border-line p-4">
                      <p className="text-sm text-muted">{session.title}{session.optional ? " · optional" : ""}</p>
                      <p className="mt-2 leading-relaxed">{blurb}</p>
                      {ids.length > 0 ? (
                        <ul className="mt-3 space-y-1">
                          {ids.map((id) => (
                            <li key={id}>
                              <Link to="/khai-niem/$conceptId" params={{ conceptId: id }} className="flex min-h-11 items-baseline justify-between gap-3 py-1">
                                <span className="font-medium">
                                  {studyListTitle(id, lang)}
                                  {rawIsEdited(id, lang) ? <span className="ml-2 text-xs font-normal text-accent">{lang === "en" ? "edited" : "đã sửa"}</span> : null}
                                </span>
                                <span className="shrink-0 text-xs tracking-widest text-accent">{opener.learn}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      {showLessons ? (
                        <ul className="mt-3 space-y-2">
                          {session.lessonIds.filter((id) => courseLessonIds.has(id)).map((id) => {
                            const lesson = getLesson(id);
                            if (!lesson) return null;
                            const status = lessonStatus(id);
                            return (
                              <li key={id}>
                                <Link to="/bai/$lessonId" params={{ lessonId: id }} className="flex min-h-11 items-baseline justify-between gap-3">
                                  <span className="font-medium">{lesson.title}</span>
                                  <span className="shrink-0 text-xs tracking-widest text-muted">
                                    {status === "seen" ? (lang === "en" ? "Seen" : "Đã xem") : status === "viewing" ? (lang === "en" ? "Reading" : "Đang xem") : lang === "en" ? "Not yet" : "Chưa xem"}
                                  </span>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      ) : null}
                    </li>
                  );
                })}
              </ol>
            </section>
          );
        })}
      </div>
    </div>
  );
}
