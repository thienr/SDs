import raw from "@/data/course.json";

export type ItemKind = "video" | "quiz" | "reading" | "assignment" | "graded";

export type Item = {
  id: string;
  title: string;
  kind: ItemKind;
  durationSec: number | null;
  optional: boolean;
  order: number;
  lessonId: string;
};

export type Step = { label: string; math: string; say: string };
export type Pipe = { n: string; title: string; body: string };
export type Pitfall = { left: string; right: string; note: string };
export type SymbolRow = { sym: string; meaning: string };
export type Source = { claim: string; source: string; url?: string };
export type GlossaryEntry = { term: string; en: string; def: string };

export type Block =
  | { type: "situation"; text: string }
  | { type: "problem"; text: string }
  | { type: "why"; text: string }
  | {
      type: "definition";
      plain: string;
      precise: string;
      formula: string | null;
      symbols: SymbolRow[];
    }
  | {
      type: "illustration";
      sim: string | null;
      steps: Step[];
      pipeline: Pipe[];
      code: { lang: string; source: string; out: string } | null;
    }
  | { type: "pitfalls"; rows: Pitfall[] }
  | { type: "insight"; text: string }
  | { type: "sources"; items: Source[] }
  | {
      type: "recall";
      factIds: string[];
      links?: { factId: string; lessonId: string; title?: string }[];
    };

export type Lesson = {
  id: string;
  factId: string;
  title: string;
  courseId: string;
  moduleId: string;
  sessionId: string;
  sessionTitle: string;
  sessionIds?: string[];
  moduleTitle: string;
  courseTitle: string;
  optional: boolean;
  order: number;
  sim: string | null;
  blurb: string;
  readMin: number;
  videoSec: number;
  blocks: Block[];
  glossary: GlossaryEntry[];
  items: Item[];
  itemCount: number;
};

export type Session = {
  id: string;
  title: string;
  order: number;
  optional: boolean;
  lessonIds: string[];
};

export type Module = {
  id: string;
  title: string;
  order: number;
  optional: boolean;
  sessions: Session[];
};

export type Course = {
  id: string;
  title: string;
  order: number;
  optional: boolean;
  modules: Module[];
};

type CourseFile = {
  courses: Course[];
  lessons: Lesson[];
  stats: { courses: number; lessons: number; items: number; withSim: number; fallback: number };
};

const data = raw as unknown as CourseFile;

export const courses = data.courses;
export const lessons = data.lessons.slice().sort((a, b) => a.order - b.order);
export const stats = data.stats;

const lessonMap = new Map(lessons.map((lesson) => [lesson.id, lesson]));
const courseMap = new Map(courses.map((course) => [course.id, course]));

export function getLesson(id: string) {
  return lessonMap.get(id) ?? null;
}

export function getCourse(id: string) {
  return courseMap.get(id) ?? null;
}

export function courseLessons(courseId: string) {
  return lessons.filter((lesson) => lesson.courseId === courseId);
}

export function neighbors(id: string) {
  const index = lessons.findIndex((lesson) => lesson.id === id);
  return {
    prev: index > 0 ? lessons[index - 1] : null,
    next: index >= 0 && index < lessons.length - 1 ? lessons[index + 1] : null,
  };
}

export function shortCourse(title: string) {
  return title
    .replace(/^C\d+[^\s]*\s*/, "")
    .replace(/^Additional Resources - /, "")
    .replace(/\s*\(.*?\)\s*/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function formatMinutes(totalSec: number) {
  if (!totalSec) return "không rõ phút video";
  const min = Math.round(totalSec / 60);
  if (min < 60) return `${min} phút video gốc`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m ? `${h} giờ ${m} phút video gốc` : `${h} giờ video gốc`;
}

export const formulas = lessons.flatMap((lesson) => {
  const block = lesson.blocks.find((b) => b.type === "definition");
  if (!block || block.type !== "definition" || !block.formula) return [];
  return [{ lessonId: lesson.id, title: lesson.title, formula: block.formula, course: shortCourse(lesson.courseTitle) }];
});

export const glossary = (() => {
  const map = new Map<string, GlossaryEntry & { lessonId: string; lessonTitle: string }>();
  for (const lesson of lessons) {
    for (const entry of lesson.glossary ?? []) {
      const key = entry.term.toLowerCase();
      if (!map.has(key)) map.set(key, { ...entry, lessonId: lesson.id, lessonTitle: lesson.title });
    }
  }
  return [...map.values()].sort((a, b) => a.term.localeCompare(b.term, "en"));
})();

export function block<T extends Block["type"]>(lesson: Lesson, type: T) {
  return lesson.blocks.find((b) => b.type === type) as Extract<Block, { type: T }> | undefined;
}
