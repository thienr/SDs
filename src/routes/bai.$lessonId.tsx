import { createFileRoute } from "@tanstack/react-router";
import { LessonView } from "@/components/lesson-view";
import { getLesson } from "@/lib/catalog";

export const Route = createFileRoute("/bai/$lessonId")({
  component: LessonPage,
});

function LessonPage() {
  const { lessonId } = Route.useParams();
  const lesson = getLesson(lessonId);
  if (!lesson) {
    return (
      <div className="reading mx-auto">
        <h1 className="font-display text-4xl">Không thấy bài này</h1>
        <p className="mt-3 text-muted">Bài không nằm trong sổ.</p>
      </div>
    );
  }
  return <LessonView lesson={lesson} />;
}
