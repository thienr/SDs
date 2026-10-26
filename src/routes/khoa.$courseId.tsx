import { createFileRoute, Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useSyncExternalStore } from "react";
import { ModuleTree } from "@/components/toc-tree";
import { liveCourse } from "@/lib/cms-live";
import { getCmsVersion, getServerCmsVersion, subscribeCms } from "@/lib/cms-store";
import { getCourse } from "@/lib/catalog";
import { getProgress, getServerProgress, subscribeProgress } from "@/lib/progress";
import { getRawVersion, getServerRawVersion, subscribeRaw } from "@/lib/raw-store";

export const Route = createFileRoute("/khoa/$courseId")({
  component: CoursePage,
});

function CoursePage() {
  const progress = useSyncExternalStore(subscribeProgress, getProgress, getServerProgress);
  useSyncExternalStore(subscribeRaw, getRawVersion, getServerRawVersion);
  useSyncExternalStore(subscribeCms, getCmsVersion, getServerCmsVersion);
  const lang = progress.lang;
  const { courseId } = Route.useParams();
  const hash = useRouterState({ select: (state) => state.location.hash.replace(/^#/, "") });
  const course = getCourse(courseId);
  const openIds: string[] = [];
  if (course && hash.startsWith("mod-")) openIds.push(`m:${hash.slice(4)}`);
  if (course && hash.startsWith("ses-")) {
    const sid = hash.slice(4);
    const mod = course.modules.find((m) => m.sessions.some((x) => x.id === sid));
    if (mod) openIds.push(`m:${mod.id}`, `s:${sid}`);
  }
  useEffect(() => {
    if (hash) document.getElementById(hash)?.scrollIntoView({ block: "start" });
  }, [hash]);
  if (!course) return <p>{lang === "en" ? "This course is missing." : "Không thấy khóa này."}</p>;
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
      <div className="mt-2">
        <ModuleTree key={hash} course={course} lang={lang} openIds={openIds} />
      </div>
    </div>
  );
}
