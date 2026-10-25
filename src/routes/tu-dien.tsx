import { createFileRoute, Link } from "@tanstack/react-router";
import { useSyncExternalStore } from "react";
import { lessons } from "@/lib/catalog";
import { liveLesson } from "@/lib/cms-live";
import { getCmsVersion, getServerCmsVersion, subscribeCms } from "@/lib/cms-store";
import { getProgress, getServerProgress, subscribeProgress } from "@/lib/progress";

export const Route = createFileRoute("/tu-dien")({
  component: GlossaryPage,
});

function GlossaryPage() {
  const progress = useSyncExternalStore(subscribeProgress, getProgress, getServerProgress);
  useSyncExternalStore(subscribeCms, getCmsVersion, getServerCmsVersion);
  const map = new Map<string, { term: string; en: string; def: string; lessonId: string; lessonTitle: string }>();
  for (const lesson of lessons) {
    const live = liveLesson(lesson, progress.lang);
    for (const entry of live.glossary ?? []) {
      const key = entry.term.toLowerCase();
      if (!map.has(key)) map.set(key, { ...entry, lessonId: live.id, lessonTitle: live.title });
    }
  }
  const glossary = [...map.values()].sort((a, b) => a.term.localeCompare(b.term, "en"));
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="font-display text-4xl">Từ điển</h1>
      <p className="mt-3 text-muted">Thuật ngữ giữ tiếng Anh. Nghĩa tiếng Việt nằm cạnh.</p>
      <ul className="mt-6 divide-y divide-line border-y border-line">
        {glossary.map((entry) => (
          <li key={entry.term} className="py-4">
            <p className="font-medium">
              {entry.term} <span className="text-muted">· {entry.en}</span>
            </p>
            <p className="mt-1">{entry.def}</p>
            <Link to="/bai/$lessonId" params={{ lessonId: entry.lessonId }} className="mt-1 inline-block text-sm text-accent underline">
              Bài gốc: {entry.lessonTitle}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}