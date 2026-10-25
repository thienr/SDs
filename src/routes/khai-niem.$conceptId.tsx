import { createFileRoute, Link } from "@tanstack/react-router";
import { ConceptView } from "@/components/concept-view";
import { getStudy } from "@/data/study";

export const Route = createFileRoute("/khai-niem/$conceptId")({
  component: ConceptPage,
});

function ConceptPage() {
  const { conceptId } = Route.useParams();
  const concept = getStudy(conceptId);
  if (!concept) {
    return (
      <div className="reading mx-auto">
        <h1 className="font-display text-4xl">Không thấy khái niệm này</h1>
        <Link to="/" className="mt-4 inline-block underline">Về trang đầu</Link>
      </div>
    );
  }
  return <ConceptView concept={concept} />;
}
