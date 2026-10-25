import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { glossary, lessons, shortCourse } from "@/lib/catalog";

export const Route = createFileRoute("/tim-kiem")({
  component: SearchPage,
});

function SearchPage() {
  const [q, setQ] = useState("");
  const query = q.trim().toLowerCase();
  const found = useMemo(() => {
    if (query.length < 2) return [];
    return lessons
      .filter((lesson) => {
        const blob = `${lesson.title} ${lesson.blurb} ${lesson.courseTitle} ${lesson.sessionTitle} ${lesson.items.map((item) => item.title).join(" ")}`.toLowerCase();
        return blob.includes(query);
      })
      .slice(0, 30);
  }, [query]);
  const terms = query.length < 2 ? [] : glossary.filter((entry) => `${entry.term} ${entry.en} ${entry.def}`.toLowerCase().includes(query)).slice(0, 8);

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="font-display text-4xl">Tìm trong sổ</h1>
      <input
        value={q}
        onChange={(event) => setQ(event.target.value)}
        placeholder="CLT, WHERE, sigmoid..."
        className="mt-4 min-h-12 w-full rounded-full border border-line bg-card px-4 text-lg outline-none"
      />
      <ul className="mt-6 space-y-3">
        {terms.map((entry) => (
          <li key={entry.term} className="rounded-card border border-line p-4">
            <p className="font-medium">{entry.term}</p>
            <p className="text-sm text-muted">{entry.def}</p>
            <Link to="/bai/$lessonId" params={{ lessonId: entry.lessonId }} className="mt-2 inline-block text-sm text-accent underline">
              {entry.lessonTitle}
            </Link>
          </li>
        ))}
        {found.map((lesson) => (
          <li key={lesson.id}>
            <Link to="/bai/$lessonId" params={{ lessonId: lesson.id }} className="block rounded-card border border-line p-4">
              <p className="font-medium">{lesson.title}</p>
              <p className="text-sm text-muted">{shortCourse(lesson.courseTitle)} · {lesson.sessionTitle}</p>
            </Link>
          </li>
        ))}
      </ul>
      {query.length >= 2 && found.length === 0 && terms.length === 0 ? <p className="mt-6 text-muted">Không thấy cụm này trong sổ.</p> : null}
    </div>
  );
}
