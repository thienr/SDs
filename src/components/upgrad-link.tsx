import type { StudyConcept } from "@/data/study";
import course from "@/data/course.json";

export function UpgradLink({ concept, lang }: { concept: StudyConcept; lang: "vi" | "en" }) {
  const cid = (concept as { courseId?: string }).courseId;
  const c = (course.courses as { id: string; title: string }[]).find((x) => x.id === cid);
  const mod = (concept as { module?: string }).module;
  const ses = (concept as { session?: string }).session;
  if (!c) return null;
  const path = [c.title, mod, ses].filter(Boolean).join("  ›  ");
  return (
    <section className="mt-8 rounded-card border border-line bg-card p-4">
      <h2 className="text-xs uppercase tracking-widest text-muted">{lang === "en" ? "Where this sits on upGrad" : "Thuộc bài học trên upGrad"}</h2>
      <p className="mt-2 leading-relaxed">{path}</p>
    </section>
  );
}
