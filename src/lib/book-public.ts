import { courseHead, moduleHead, sessionHead } from "@/data/outline";
import { sessionConcepts } from "@/data/place";
import { getStudy, studyCopy } from "@/data/study";
import { courses, getLesson } from "@/lib/catalog";
import type { Lang } from "@/lib/progress";
import type { RawText } from "@/lib/raw-format";

export type PublicCard = RawText & {
  id: string;
  lang: Lang;
  courseId: string;
  courseTitle: string;
  sessionId: string;
  sessionTitle: string;
};

const cache = new Map<Lang, PublicCard[]>();

export function publicIdeas(lang: Lang): PublicCard[] {
  const hit = cache.get(lang);
  if (hit) return hit;
  const out: PublicCard[] = [];
  for (const course of courses) {
    for (const mod of course.modules) {
      for (const session of mod.sessions) {
        for (const id of sessionConcepts[session.id] ?? []) {
          const concept = getStudy(id);
          if (!concept) continue;
          const text = studyCopy(concept, lang, true);
          out.push({
            id,
            lang,
            courseId: course.id,
            courseTitle: course.title,
            sessionId: session.id,
            sessionTitle: session.title,
            ...text,
          });
        }
      }
    }
  }
  cache.set(lang, out);
  return out;
}

export function bookMeta() {
  return {
    name: "Sổ Mực",
    "so-muc-api": 1,
    read: "/api/so-muc",
    mcp: "/api/mcp",
    courses: courses.length,
    ideas: publicIdeas("vi").length,
    queries: ["meta", "outline", "ideas", "idea", "heads", "lesson", "gate", "inbox"],
    note: "GET đọc chữ in sẵn, không cần khóa. Bản sửa trên từng máy không nằm ở đây. Mô hình gửi bản sửa bằng MCP submit_edit hoặc POST /api/so-muc. Người mở Quản lý bấm Áp dụng thì trang đọc đổi. Giữ nguyên id. Không thêm câu hỏi.",
  };
}

export function publicOutline(courseId?: string) {
  const list = courseId ? courses.filter((course) => course.id === courseId) : courses;
  return list.map((course) => ({
    id: course.id,
    title: course.title,
    modules: course.modules.map((mod) => ({
      id: mod.id,
      title: mod.title,
      optional: mod.optional,
      sessions: mod.sessions.map((session) => ({
        id: session.id,
        title: session.title,
        optional: session.optional,
        ideas: sessionConcepts[session.id] ?? [],
      })),
    })),
  }));
}

export function publicIdea(id: string, lang: Lang): PublicCard | null {
  return publicIdeas(lang).find((card) => card.id === id) ?? null;
}

export function searchIdeas(query: string, lang: Lang, offset: number, limit: number, courseId?: string) {
  const needle = query.trim().toLowerCase();
  const rows = publicIdeas(lang).filter((card) => {
    if (courseId && card.courseId !== courseId) return false;
    if (!needle) return true;
    return `${card.id} ${card.title} ${card.plain} ${card.why} ${card.sessionTitle} ${card.courseTitle}`.toLowerCase().includes(needle);
  });
  return {
    total: rows.length,
    offset,
    ideas: rows.slice(offset, offset + limit).map(slim),
  };
}

export function publicHeads(kind: "course" | "module" | "session", lang: Lang, courseId?: string) {
  const list = courseId ? courses.filter((course) => course.id === courseId) : courses;
  if (kind === "course") {
    return list.map((course) => {
      const head = courseHead(course.id);
      return { kind, id: course.id, lang, title: course.title, why: head.why[lang], plain: head.plain[lang], prior: head.prior[lang] };
    });
  }
  if (kind === "module") {
    return list.flatMap((course) =>
      course.modules.map((mod) => {
        const head = moduleHead(course.id, mod.title);
        return {
          kind,
          id: `${course.id}||${mod.title}`,
          lang,
          title: mod.title,
          place: course.title,
          why: head.why[lang],
          plain: head.plain[lang],
          prior: head.prior[lang],
        };
      }),
    );
  }
  return list.flatMap((course) =>
    course.modules.flatMap((mod) =>
      mod.sessions.map((session) => ({
        kind,
        id: `${course.id}||${mod.title}||${session.title}`,
        lang,
        title: session.title,
        place: `${course.title} / ${mod.title}`,
        text: sessionHead(course.id, mod.title, session.title)[lang],
      })),
    ),
  );
}

export function publicLesson(id: string) {
  const lesson = getLesson(id);
  if (!lesson) return null;
  return {
    id: lesson.id,
    title: lesson.title,
    blurb: lesson.blurb,
    courseId: lesson.courseId,
    courseTitle: lesson.courseTitle,
    moduleTitle: lesson.moduleTitle,
    sessionId: lesson.sessionId,
    sessionTitle: lesson.sessionTitle,
    blocks: lesson.blocks,
    glossary: lesson.glossary,
  };
}

function slim(card: PublicCard) {
  return {
    id: card.id,
    lang: card.lang,
    title: card.title,
    courseId: card.courseId,
    courseTitle: card.courseTitle,
    sessionTitle: card.sessionTitle,
    plain: card.plain.slice(0, 220),
  };
}
