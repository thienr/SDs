import { ExternalLink } from "lucide-react";
import videos from "@/data/videos.json";
import { studyListTitle } from "@/data/study";
import type { Lang } from "@/lib/progress";

const V = videos as Record<string, { v: string; t: string; c: string }>;

export function VideoLink({ conceptId, lang }: { conceptId: string; lang: Lang }) {
  const vi = lang !== "en";
  const hit = V[conceptId];
  const href = hit
    ? `https://www.youtube.com/watch?v=${hit.v}`
    : `https://www.youtube.com/results?search_query=${encodeURIComponent(studyListTitle(conceptId, "en") + " explained")}`;
  return (
    <section className="mt-8">
      <a href={href} target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-start gap-2 rounded-card border border-line px-4 py-3 text-sm hover:bg-card">
        <ExternalLink className="mt-0.5 size-4 shrink-0" aria-hidden />
        <span>
          {hit ? (
            <>
              <span className="font-medium">{vi ? "Xem video về chủ đề này" : "Watch a video on this topic"}</span>
              <span className="block text-muted">{hit.t} — {hit.c} (YouTube)</span>
            </>
          ) : (
            <>
              <span className="font-medium">{vi ? "Tìm video trên YouTube" : "Search YouTube"}</span>
              <span className="block text-muted">{vi ? "Chưa có video đã kiểm chứng cho thẻ này, mở kết quả tìm kiếm." : "No verified video yet; opens search results."}</span>
            </>
          )}
        </span>
      </a>
    </section>
  );
}
