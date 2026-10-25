/** Parse Phụ lục A (upGrad study plan paste) into a course tree. */

const DUR = /(\d{1,2}:\d{2}(?::\d{2})?)/;

export function parseDur(token) {
  const parts = token.split(":").map((n) => Number(n));
  if (parts.some((n) => Number.isNaN(n))) return null;
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  return null;
}

export function kindOf(text) {
  const s = text.toLowerCase();
  if (/graded|gradable/.test(s)) return "graded";
  if (
    /quiz|assessment|coding question|coding quiz|coding practice|practice question|subjective question|comprehension|recall/.test(
      s,
    )
  )
    return "quiz";
  if (/assignment|final submission|submission guideline|evaluation rubric/.test(s))
    return "assignment";
  if (/mind\s*map|lecture notes/.test(s)) return "reading";
  if (/\bcase study\b/.test(s)) return "assignment";
  return "video";
}

function cleanTitle(text) {
  return text
    .replace(/\([^)]*\)/g, " ")
    .replace(/\s+/g, " ")
    .replace(/\s+-\s*$/g, "")
    .trim();
}

function oneItem(text) {
  const durM = text.match(new RegExp(`\\(${DUR.source}\\)`));
  const durationSec = durM ? parseDur(durM[1]) : null;
  let title = cleanTitle(text);
  if (!title) title = text.trim().slice(0, 120);
  return { title, durationSec, kind: kindOf(text), raw: text.trim() };
}

/** Expand one pipe-separated chunk into one or more items. */
export function expandChunk(raw) {
  const text = raw.trim();
  if (!text) return [];

  let m = text.match(/^(\d+)\s*x\s+(.+)$/i);
  if (m) {
    const n = clampCount(m[1]);
    const inner = expandChunk(m[2]);
    if (inner.length !== 1) return inner;
    return Array.from({ length: n }, (_, i) => ({
      ...inner[0],
      title: `${inner[0].title} (${i + 1}/${n})`,
    }));
  }

  m = text.match(/^(.+?)\s+x(\d+)\s*$/i);
  if (m) {
    const n = clampCount(m[2]);
    const inner = expandChunk(m[1]);
    if (!inner.length) return [];
    if (inner.length !== 1) return inner;
    return Array.from({ length: n }, (_, i) => ({
      ...inner[0],
      title: `${inner[0].title} (${i + 1}/${n})`,
    }));
  }

  m = text.match(/Part\s*(\d+)\s*[-–]\s*(\d+)/i);
  if (m) {
    const a = Number(m[1]);
    const b = Number(m[2]);
    const each = text.match(new RegExp(`\\(${DUR.source}\\s*each\\)`, "i"));
    const dur = each ? parseDur(each[1]) : null;
    const base = cleanTitle(text.replace(/Part\s*\d+\s*[-–]\s*\d+/i, "").replace(/\beach\b/i, ""));
    const items = [];
    const end = Math.min(b, a + 24);
    for (let i = a; i <= end; i++) {
      items.push({
        title: `${base} Part ${i}`.replace(/\s+/g, " ").trim(),
        durationSec: dur,
        kind: kindOf(base),
        raw: text,
      });
    }
    if (/mỗi phần có recall quiz/i.test(text)) {
      for (let i = a; i <= end; i++) {
        items.push({
          title: `${base} Part ${i} — Recall Quiz`,
          durationSec: null,
          kind: "quiz",
          raw: text,
        });
      }
    }
    return items;
  }

  return [oneItem(text)];
}

function clampCount(n) {
  const v = Number(n);
  if (!Number.isFinite(v) || v < 1) return 1;
  return Math.min(12, v);
}

function isOpt(...parts) {
  return /\[opt\]|optional|toàn bộ optional/i.test(parts.filter(Boolean).join(" "));
}

let seq = 0;
function nextId(prefix) {
  seq += 1;
  return `${prefix}-${String(seq).padStart(4, "0")}`;
}

export function parseAppendix(markdown) {
  seq = 0;
  const start = markdown.indexOf("### C0-1");
  const body = start >= 0 ? markdown.slice(start) : markdown;
  const lines = body.split(/\r?\n/);

  const courses = [];
  let course = null;
  let module = null;
  let session = null;

  const pushCourse = (title) => {
    const optional = isOpt(title);
    course = {
      id: nextId("course"),
      title: title.trim(),
      order: courses.length,
      optional,
      modules: [],
    };
    courses.push(course);
    module = null;
    session = null;
  };

  const pushModule = (title) => {
    if (!course) pushCourse("Khoá chưa đặt tên");
    module = {
      id: nextId("mod"),
      courseId: course.id,
      title: title.trim(),
      order: course.modules.length,
      optional: course.optional || isOpt(title),
      sessions: [],
    };
    course.modules.push(module);
    session = null;
  };

  const pushSession = (title) => {
    if (!module) pushModule("Module");
    session = {
      id: nextId("ses"),
      moduleId: module.id,
      courseId: course.id,
      title: title.trim(),
      order: module.sessions.length,
      optional: module.optional || isOpt(title),
      segments: [],
    };
    module.sessions.push(session);
  };

  for (const line0 of lines) {
    const line = line0.trim();
    if (!line) continue;
    if (line.startsWith("### ")) {
      const rest = line.slice(4).trim();
      const [cTitle, mTitle] = rest.split(">>").map((s) => s.trim());
      pushCourse(cTitle || rest);
      pushModule(mTitle || "M");
      continue;
    }
    if (line.startsWith("#### ")) {
      pushSession(line.slice(5).trim());
      continue;
    }
    if (line.startsWith("- ")) {
      if (!session) pushSession("Nội dung");
      const raw = line.slice(2).trim();
      const chunks = raw.split("|");
      let lastBase = "";
      const items = [];
      for (const chunk of chunks) {
        for (const item of expandChunk(chunk)) {
          if (/^part\s*\d+$/i.test(item.title) && lastBase) {
            const n = item.title.match(/\d+/)?.[0] ?? "";
            item.title = `${lastBase} — Part ${n}`;
          } else {
            const base = item.title.replace(/\s+[—-]?\s*part\s*\d+.*$/i, "").trim();
            if (base && !/^(quiz|summary|introduction)$/i.test(base)) lastBase = base;
          }
          items.push(item);
        }
      }
      const capturedEmpty = /segment title only|module header only|không hiển thị thời lượng|chưa có nội dung/i.test(
        raw,
      );
      session.segments.push({
        id: nextId("seg"),
        sessionId: session.id,
        title: raw.slice(0, 180),
        raw,
        capturedEmpty,
        order: session.segments.length,
        optional: session.optional || isOpt(raw),
        items: items.map((item, order) => ({
          id: nextId("item"),
          ...item,
          order,
          optional: session.optional || isOpt(item.title, raw),
        })),
      });
    }
  }

  return courses;
}

export function flatten(courses) {
  const segments = [];
  for (const course of courses) {
    for (const mod of course.modules) {
      for (const ses of mod.sessions) {
        for (const seg of ses.segments) {
          segments.push({
            ...seg,
            courseId: course.id,
            courseTitle: course.title,
            moduleId: mod.id,
            moduleTitle: mod.title,
            sessionTitle: ses.title,
            sessionOptional: ses.optional,
          });
        }
      }
    }
  }
  return segments;
}
