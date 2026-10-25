import type { StudyConcept } from "@/data/study";
import course from "@/data/course.json";

const PROGRAM = "https://www.upgrad.com/lxp/learner/program-detail/697d8895ff9c0627b932ccb2/study-plan";

const COURSE: Record<string, string> = {
  "c-779b43bacf62": "672db5befb27d12d151f3edd",
  "c-7780a48d5816": "67518350c9ece813b02afcee",
  "c-1f3e0f37b6e5": "67567d47fb27d12d15486ebb",
  "c-f3c8d7aa3721": "67595d3162fde39221665d8f",
  "c-3365bb99f989": "676140aec69258144e725f01",
  "c-5ebd125743f2": "676140c7c69258144e72620b",
  "c-cca6e1fa1c5f": "676140d6d64659fd90672eab",
  "c-0598c14acf8d": "67812ea0c6ef7082b97095bc",
  "c-75c5d36b41f2": "6784d84e818080e6fc212279",
  "c-96d004f30def": "679cb18b4f6f8f7dcfb5dbcd",
  "c-a0c17afb8849": "679cb3029144c42ea540c2b0",
  "c-7ffadedb3906": "68b802efc749b7db358e838d",
  "c-7e0b1f4942db": "68b8031ec749b7db358e8ddc",
  "c-cbba2e56c4a9": "68b803411ba4eacbe08ce4e0",
};

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
      <a href={cid && COURSE[cid] ? `${PROGRAM}/${COURSE[cid]}` : PROGRAM} target="_blank" rel="noreferrer" className="mt-3 inline-flex min-h-11 items-center rounded-full bg-ink px-5 text-sm text-paper">
        {lang === "en" ? "Open this course on upGrad" : "Mở đúng khóa này trên upGrad"}
      </a>
      <p className="mt-2 text-xs text-muted">
        {lang === "en" ? "Opens the course page; follow the path above to the session. If it shows a login error, sign in at upgrad.com first, then click again." : "Mở trang khóa học; đi theo dòng chỉ đường ở trên để tới đúng buổi. Nếu báo lỗi đăng nhập, hãy đăng nhập upgrad.com trước rồi bấm lại."}
      </p>
    </section>
  );
}
