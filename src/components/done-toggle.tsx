import { Check } from "lucide-react";
import { isDone, setDone, useDone } from "@/lib/done";
import type { Lang } from "@/lib/progress";

export function DoneToggle({ conceptId, lang }: { conceptId: string; lang: Lang }) {
  const done = isDone(useDone(), conceptId);
  const vi = lang !== "en";
  return (
    <section className="mt-8">
      <button
        type="button"
        aria-pressed={done}
        onClick={() => setDone(conceptId, !done)}
        className={`inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-card border px-4 text-sm font-medium ${done ? "border-accent bg-card text-accent" : "border-line hover:bg-card"}`}
      >
        {done ? <Check className="size-5" aria-hidden /> : null}
        {done ? (vi ? "Đã học xong thẻ này (bấm để bỏ)" : "Marked as learned (tap to undo)") : (vi ? "Đánh dấu đã học xong thẻ này" : "Mark this card as learned")}
      </button>
    </section>
  );
}
