import type { StudyConcept } from "@/data/study";
import course from "@/data/course.json";

const PROGRAM = "https://www.upgrad.com/lxp/learner/program-detail/697d8895ff9c0627b932ccb2/study-plan";

export function UpgradLink({ concept, lang }: { concept: StudyConcept; lang: "vi" | "en" }) {
  const cid = (concept as { courseId?: string }).courseId;
  const c = (course.courses as { id: string; title: string }[]).find((x) => x.id === cid);
  const mod = (concept as { module?: string }).module;
  const ses = (concept as { session?: string }).session;
  if (!c) return null;
  const path = [c.title, mod, ses].filter(Boolean).join("  ›  ");
  return (
    <section className="mt-8 rounded-card border border-line bg-card p-4">
      <h2 className="text-xs uppercase tracking-widest text-muted">{lang === "en" ? "Rewatch on upGrad" : "Xem lại bài học trên upGrad"}</h2>
      <p className="mt-2 leading-relaxed">{path}</p>
      <a href={PROGRAM} target="_blank" rel="noreferrer" className="mt-3 inline-flex min-h-11 items-center rounded-full bg-ink px-5 text-sm text-paper">
        {lang === "en" ? "Open upGrad Study Plan" : "Mở Study Plan trên upGrad"}
      </a>
      <p className="mt-2 text-xs text-muted">
        {lang === "en" ? "Opens your study plan; follow the path above to the session." : "Mở Study Plan của chương trình; đi theo dòng chỉ đường ở trên để tới đúng buổi."}
      </p>
    </section>
  );
}
