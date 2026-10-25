import { createFileRoute, Link } from "@tanstack/react-router";
import { lessons, stats } from "@/lib/catalog";

export const Route = createFileRoute("/do-phu")({
  component: CoveragePage,
});

function CoveragePage() {
  const attached = lessons.reduce((sum, lesson) => sum + lesson.items.length, 0);
  const fallback = lessons.filter((lesson) => lesson.factId === "fallback");
  const withSim = lessons.filter((lesson) => lesson.sim);
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="font-display text-4xl">Độ phủ</h1>
      <p className="mt-4 font-display text-5xl">{attached}/{stats.items}</p>
      <p className="mt-2 text-lg">mục trong phụ lục có một bài để đọc. Không còn mục trống.</p>
      <dl className="mt-6 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-card border border-line p-4">
          <dt className="text-muted">Bài</dt>
          <dd className="font-display text-3xl">{stats.lessons}</dd>
        </div>
        <div className="rounded-card border border-line p-4">
          <dt className="text-muted">Bài có hình kéo</dt>
          <dd className="font-display text-3xl">{withSim.length}</dd>
        </div>
      </dl>
      {fallback.length > 0 ? (
        <>
          <h2 className="mt-8 font-display text-2xl">Bài viết riêng cho buổi luyện</h2>
          <p className="mt-2 text-sm text-muted">
            Buổi luyện hoặc chỗ danh mục không có video vẫn có một bài giải thích khái niệm. Không có câu hỏi. {fallback.length} bài thuộc nhóm này.
          </p>
          <ul className="mt-4 space-y-2">
            {fallback.map((lesson) => (
              <li key={lesson.id}>
                <Link to="/bai/$lessonId" params={{ lessonId: lesson.id }} className="text-sm underline">
                  {lesson.sessionTitle} · {lesson.items.length} mục
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className="mt-8 text-sm text-muted">Không còn bài nào chỉ lặp lại tên mục trong danh mục. Mỗi mục nằm trong một bài có định nghĩa.</p>
      )}
    </div>
  );
}
