import { createFileRoute, Link } from "@tanstack/react-router";
import { AssignView } from "@/components/assign-view";
import { getAssignment } from "@/data/assign";

export const Route = createFileRoute("/bai-tap/$id")({
  component: AssignPage,
});

function AssignPage() {
  const { id } = Route.useParams();
  const a = getAssignment(id);
  if (!a) {
    return (
      <div className="reading mx-auto">
        <h1 className="font-display text-4xl">Không thấy bài tập này</h1>
        <Link to="/bai-tap" className="mt-4 inline-block underline">Về danh sách bài tập</Link>
      </div>
    );
  }
  return <AssignView a={a} />;
}
