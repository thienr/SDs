import { createFileRoute, Link } from "@tanstack/react-router";
import { useSyncExternalStore } from "react";
import { Tex } from "@/components/tex";
import { lessons, shortCourse } from "@/lib/catalog";
import { liveLesson } from "@/lib/cms-live";
import { getCmsVersion, getServerCmsVersion, subscribeCms } from "@/lib/cms-store";
import { getProgress, getServerProgress, subscribeProgress } from "@/lib/progress";

export const Route = createFileRoute("/cong-thuc")({
  component: FormulaPage,
});

function FormulaPage() {
  const progress = useSyncExternalStore(subscribeProgress, getProgress, getServerProgress);
  useSyncExternalStore(subscribeCms, getCmsVersion, getServerCmsVersion);
  const rows = lessons.flatMap((lesson) => {
    const live = liveLesson(lesson, progress.lang);
    const block = live.blocks.find((item) => item.type === "definition");
    if (!block || block.type !== "definition" || !block.formula) return [];
    return [{ lessonId: live.id, title: live.title, formula: block.formula, course: shortCourse(live.courseTitle) }];
  });
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="font-display text-4xl">Công thức</h1>
      <p className="mt-3 text-muted">Mỗi công thức gắn với một bài có ví dụ số hoặc hình kéo được.</p>
      <ul className="mt-6 space-y-4">
        {rows.map((row) => (
          <li key={row.lessonId + row.formula} className="rounded-card border border-line bg-card p-4">
            <p className="text-xs tracking-widest text-muted">{row.course}</p>
            <Link to="/bai/$lessonId" params={{ lessonId: row.lessonId }} className="mt-1 block font-medium">
              {row.title}
            </Link>
            <Tex tex={row.formula} block />
          </li>
        ))}
      </ul>
    </div>
  );
}