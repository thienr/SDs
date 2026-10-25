import { courseHead, moduleHead, sessionHead, type Line } from "@/data/outline";
import { courses, getLesson, lessons, type Block, type GlossaryEntry, type Lesson } from "@/lib/catalog";
import type { Lang } from "@/lib/progress";
import { batchCms, cmsGet, cmsIsEdited, setCmsPatch, type CmsKind, type CmsPatch } from "@/lib/cms-store";

export type HeadText = { why: string; plain: string; prior: string };

export type CmsRow = {
  kind: CmsKind;
  id: string;
  lang: Lang;
  label: string;
  place: string;
  edited: boolean;
  why: string;
  plain: string;
  prior: string;
  text: string;
  title: string;
  blurb: string;
  blocks: string;
  glossary: string;
};

const emptyHead: HeadText = { why: "", plain: "", prior: "" };

export function liveCourse(courseId: string, lang: Lang): HeadText {
  return applyHead(courseHead(courseId), "course", courseId, lang);
}

export function liveModule(courseId: string, moduleTitle: string, lang: Lang): HeadText {
  return applyHead(moduleHead(courseId, moduleTitle), "module", `${courseId}||${moduleTitle}`, lang);
}

export function liveSession(courseId: string, moduleTitle: string, sessionTitle: string, lang: Lang): string {
  const base = sessionHead(courseId, moduleTitle, sessionTitle);
  const patch = cmsGet("session", sessionId(courseId, moduleTitle, sessionTitle), lang);
  return patch?.text ?? base[lang];
}

export function liveLesson(lesson: Lesson, lang: Lang): Lesson {
  const patch = cmsGet("lesson", lesson.id, lang);
  if (!patch) return lesson;
  return {
    ...lesson,
    title: patch.title ?? lesson.title,
    blurb: patch.blurb ?? lesson.blurb,
    blocks: Array.isArray(patch.blocks) ? (patch.blocks as Block[]) : lesson.blocks,
    glossary: Array.isArray(patch.glossary) ? (patch.glossary as GlossaryEntry[]) : lesson.glossary,
  };
}

export function listCms(kind: CmsKind, lang: Lang): CmsRow[] {
  if (kind === "course") {
    return courses.map((course) => row("course", course.id, lang, course.title, course.title, liveCourse(course.id, lang)));
  }
  if (kind === "module") {
    return courses.flatMap((course) =>
      course.modules.map((mod) =>
        row("module", `${course.id}||${mod.title}`, lang, mod.title, course.title, liveModule(course.id, mod.title, lang)),
      ),
    );
  }
  if (kind === "session") {
    return courses.flatMap((course) =>
      course.modules.flatMap((mod) =>
        mod.sessions.map((session) => {
          const id = sessionId(course.id, mod.title, session.title);
          const text = liveSession(course.id, mod.title, session.title, lang);
          return row("session", id, lang, session.title, `${course.title} / ${mod.title}`, emptyHead, text);
        }),
      ),
    );
  }
  return lessons.map((lesson) => {
    const live = liveLesson(lesson, lang);
    return {
      ...row("lesson", lesson.id, lang, live.title, `${lesson.courseTitle} / ${lesson.sessionTitle}`, emptyHead),
      title: live.title,
      blurb: live.blurb,
      blocks: JSON.stringify(live.blocks, null, 2),
      glossary: JSON.stringify(live.glossary ?? [], null, 2),
    };
  });
}

export function saveCms(item: CmsRow, draft: CmsRow) {
  if (item.kind === "lesson") {
    const lesson = getLesson(item.id);
    if (!lesson) return { ok: false as const, error: "Không thấy bài." };
    let blocks: unknown = lesson.blocks;
    let glossary: unknown = lesson.glossary;
    try {
      blocks = JSON.parse(draft.blocks);
      if (!Array.isArray(blocks)) return { ok: false as const, error: "Khối bài phải là một mảng JSON." };
    } catch {
      return { ok: false as const, error: "JSON khối bài không đọc được." };
    }
    try {
      glossary = JSON.parse(draft.glossary);
      if (!Array.isArray(glossary)) return { ok: false as const, error: "Từ điển bài phải là một mảng JSON." };
    } catch {
      return { ok: false as const, error: "JSON từ điển không đọc được." };
    }
    const next = { title: draft.title.trim(), blurb: draft.blurb.trim(), blocks, glossary };
    const same =
      next.title === lesson.title &&
      next.blurb === lesson.blurb &&
      JSON.stringify(next.blocks) === JSON.stringify(lesson.blocks) &&
      JSON.stringify(next.glossary) === JSON.stringify(lesson.glossary ?? []);
    setCmsPatch("lesson", item.id, item.lang, same ? null : next);
    return { ok: true as const, error: null };
  }
  if (item.kind === "session") {
    const base = printedSession(item.id, item.lang);
    const text = draft.text.trim();
    setCmsPatch("session", item.id, item.lang, text === base ? null : { text });
    return { ok: true as const, error: null };
  }
  const base = printedHead(item.kind, item.id, item.lang);
  const next = { why: draft.why.trim(), plain: draft.plain.trim(), prior: draft.prior.trim() };
  const same = next.why === base.why && next.plain === base.plain && next.prior === base.prior;
  setCmsPatch(item.kind, item.id, item.lang, same ? null : next);
  return { ok: true as const, error: null };
}

export function exportCms(lang: Lang | "both") {
  const langs: Lang[] = lang === "both" ? ["vi", "en"] : [lang];
  const heads = langs.flatMap((item) => [...listCms("course", item), ...listCms("module", item), ...listCms("session", item)].map(slim));
  const lessonRows = langs.flatMap((item) => listCms("lesson", item).map(slim));
  return { heads, lessons: lessonRows };
}

export function importCms(value: unknown, fallback: Lang) {
  const bag = value as { heads?: unknown; lessons?: unknown };
  const heads = Array.isArray(bag.heads) ? bag.heads : [];
  const lessonRows = Array.isArray(bag.lessons) ? bag.lessons : [];
  let applied = 0;
  let skipped = 0;
  batchCms(() => {
    for (const item of [...heads, ...lessonRows]) {
      const row = asRow(item, fallback);
      if (!row) {
        skipped += 1;
        continue;
      }
      const current = listCms(row.kind, row.lang).find((entry) => entry.id === row.id);
      if (!current) {
        skipped += 1;
        continue;
      }
      const result = saveCms(current, { ...current, ...row.fields });
      if (!result.ok) skipped += 1;
      else applied += 1;
    }
  });
  return { applied, skipped };
}

function applyHead(base: { why: Line; plain: Line; prior: Line }, kind: "course" | "module", id: string, lang: Lang): HeadText {
  const patch = cmsGet(kind, id, lang);
  return {
    why: patch?.why ?? base.why[lang],
    plain: patch?.plain ?? base.plain[lang],
    prior: patch?.prior ?? base.prior[lang],
  };
}

function row(kind: CmsKind, id: string, lang: Lang, label: string, place: string, head: HeadText, text = ""): CmsRow {
  return {
    kind,
    id,
    lang,
    label,
    place,
    edited: cmsIsEdited(kind, id, lang),
    why: head.why,
    plain: head.plain,
    prior: head.prior,
    text,
    title: label,
    blurb: "",
    blocks: "[]",
    glossary: "[]",
  };
}

function sessionId(courseId: string, moduleTitle: string, sessionTitle: string) {
  return `${courseId}||${moduleTitle}||${sessionTitle}`;
}

function printedHead(kind: CmsKind, id: string, lang: Lang): HeadText {
  if (kind === "course") {
    const head = courseHead(id);
    return { why: head.why[lang], plain: head.plain[lang], prior: head.prior[lang] };
  }
  const [courseId, ...rest] = id.split("||");
  const head = moduleHead(courseId ?? "", rest.join("||"));
  return { why: head.why[lang], plain: head.plain[lang], prior: head.prior[lang] };
}

function printedSession(id: string, lang: Lang) {
  const [courseId, moduleTitle, ...rest] = id.split("||");
  return sessionHead(courseId ?? "", moduleTitle ?? "", rest.join("||"))[lang];
}

function slim(item: CmsRow) {
  if (item.kind === "lesson") {
    return {
      kind: item.kind,
      id: item.id,
      lang: item.lang,
      place: item.place,
      title: item.title,
      blurb: item.blurb,
      blocks: safeParse(item.blocks),
      glossary: safeParse(item.glossary),
    };
  }
  if (item.kind === "session") {
    return { kind: item.kind, id: item.id, lang: item.lang, place: item.place, text: item.text };
  }
  return { kind: item.kind, id: item.id, lang: item.lang, place: item.place, why: item.why, plain: item.plain, prior: item.prior };
}

function asRow(item: unknown, fallback: Lang): { kind: CmsKind; id: string; lang: Lang; fields: Partial<CmsRow> } | null {
  if (!item || typeof item !== "object") return null;
  const row = item as Record<string, unknown>;
  const kind = row.kind;
  if (kind !== "course" && kind !== "module" && kind !== "session" && kind !== "lesson") return null;
  if (typeof row.id !== "string" || !row.id) return null;
  const lang: Lang = row.lang === "en" ? "en" : row.lang === "vi" ? "vi" : fallback;
  const fields: Partial<CmsRow> = {};
  if (typeof row.why === "string") fields.why = row.why;
  if (typeof row.plain === "string") fields.plain = row.plain;
  if (typeof row.prior === "string") fields.prior = row.prior;
  if (typeof row.text === "string") fields.text = row.text;
  if (typeof row.title === "string") fields.title = row.title;
  if (typeof row.blurb === "string") fields.blurb = row.blurb;
  if ("blocks" in row) fields.blocks = JSON.stringify(row.blocks ?? [], null, 2);
  if ("glossary" in row) fields.glossary = JSON.stringify(row.glossary ?? [], null, 2);
  return { kind, id: row.id, lang, fields };
}

function safeParse(text: string) {
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}
