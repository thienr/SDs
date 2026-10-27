import { Link } from "@tanstack/react-router";
import type { Lang } from "@/lib/progress";

export function ListenLink({ conceptId, lang }: { conceptId: string; lang: Lang }) {
  return (
    <section className="mt-8">
      <Link to="/nghe" search={{ c: conceptId }} className="flex min-h-12 items-center justify-center gap-2 rounded-card border border-line px-4 text-sm hover:bg-card">
        🎧 {lang === "en" ? "Listen to this card" : "Nghe thẻ này (khoảng 1 phút)"}
      </Link>
    </section>
  );
}
