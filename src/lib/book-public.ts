import { getAssignmentByConcept } from "@/data/assign";
import { courseHead, moduleHead, sessionHead } from "@/data/outline";
import { overviews } from "@/data/overview";
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

/** Trang đọc hiện bản đồ hoặc bài nộp. MCP trước đây chỉ gửi thẻ nháp «không có định nghĩa». */
function shown(id: string, lang: Lang, text: RawText): RawText {
  const assignment = fromAssignment(id, lang, text);
  if (assignment) return assignment;
  const ov = overviews[id];
  if (!ov) return text;
  const parts: string[] = [ov.lead];
  const use: string[] = [];
  const defs: string[] = [];
  const notes: string[] = [];
  for (const block of ov.blocks) {
    if (block.k === "h") parts.push(block.x);
    else if (block.k === "p") parts.push(block.x);
    else if (block.k === "note") {
      parts.push(block.x);
      notes.push(block.x);
    } else if (block.k === "ul") {
      parts.push(block.x.join(" "));
      use.push(...block.x);
    } else if (block.k === "def") {
      for (const [term, meaning] of block.x) {
        defs.push(`${term}: ${meaning}`);
        parts.push(`${term}: ${meaning}`);
      }
    } else if (block.k === "qa") {
      for (const [q, a] of block.x) parts.push(`Hỏi: ${q} Đáp án mẫu: ${a}`);
    } else if (block.k === "code") parts.push(block.x);
    else parts.push(`Đọc tiếp: ${block.x.join(", ")}`);
  }
  const body = parts.filter(Boolean).join("\n");
  return {
    ...text,
    title: ov.title,
    why: ov.lead,
    prior: null,
    see: ov.lead,
    plain: body,
    situation: "",
    use: use.slice(0, 16),
    precise: defs.join("\n") || body,
    insight: notes[0] || ov.lead,
  };
}

function fromAssignment(id: string, lang: Lang, text: RawText): RawText | null {
  const assignment = getAssignmentByConcept(id);
  if (!assignment) return null;
  const i = lang === "en" ? 1 : 0;
  const tongue = lang === "en" ? "en" : "vi";
  const heads: string[] = [];
  for (const cell of assignment.cells) {
    if (cell.t !== "md") continue;
    const line = cell.s.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    if (line.startsWith("#")) heads.push(line.replace(/^#+\s*/, ""));
  }
  const notes: string[] = [];
  const steps: string[] = [];
  for (const [ref, pair] of Object.entries(assignment.guides)) {
    const guide = pair[tongue];
    notes.push(`${ref}. ${guide.think} ${guide.lotus} ${guide.trap}${guide.remark ? ` ${guide.remark}` : ""}`);
    steps.push(...guide.steps);
  }
  const story = assignment.story[i];
  const body = [story, heads.join("\n"), notes.join("\n")].filter(Boolean).join("\n");
  return {
    ...text,
    title: assignment.title[i],
    why: story,
    prior: null,
    see: story,
    plain: body,
    situation: "",
    use: steps.slice(0, 16),
    precise: steps.join("\n") || body,
    insight: notes[0] || story,
    formula: null,
    symbols: [],
  };
}

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
          const text = shown(id, lang, studyCopy(concept, lang, true));
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
    plain: card.plain.slice(0, 280),
  };
}
