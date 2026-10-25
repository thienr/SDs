import { createHash } from "node:crypto";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { parseAppendix } from "./parse.mjs";
import { topics } from "./topics.mjs";
import { topicsB } from "./topics-b.mjs";
import { topicsC } from "./topics-c.mjs";
import { topicsD } from "./topics-d.mjs";
import { teachLoose } from "./teach-loose.mjs";

const ALL = [...topics, ...topicsB, ...topicsC, ...topicsD];

function hid(s) {
  return createHash("sha1").update(s).digest("hex").slice(0, 12);
}

function mergeCourses(raw) {
  const merged = [];
  for (const c of raw) {
    const prev = merged[merged.length - 1];
    if (prev && prev.title === c.title) prev.modules.push(...c.modules);
    else merged.push({ ...c, modules: [...c.modules] });
  }
  merged.forEach((c, ci) => {
    c.id = "c-" + hid(c.title);
    c.order = ci;
    c.modules.forEach((m, mi) => {
      m.id = "m-" + hid(`${c.title}|${mi}|${m.title}`);
      m.courseId = c.id;
      m.order = mi;
      m.sessions.forEach((s, si) => {
        s.id = "s-" + hid(`${m.id}|${si}|${s.title}`);
        s.moduleId = m.id;
        s.courseId = c.id;
        s.order = si;
        s.segments.forEach((g, gi) => {
          g.id = "g-" + hid(`${s.id}|${gi}|${g.raw}`);
          g.order = gi;
          g.items.forEach((it, ii) => {
            it.id = "i-" + hid(`${g.id}|${ii}|${it.raw}|${it.title}`);
            it.order = ii;
          });
        });
      });
    });
  });
  return merged;
}

function isMetaItem(it) {
  if (it.kind === "quiz" || it.kind === "graded") return true;
  const t = it.title.trim().toLowerCase();
  if (/^(session|module|course)\s+(overview|summary)\b/.test(t)) return true;
  if (/^(module|session)\s+summary\b/.test(t)) return true;
  if (/^summary\b/.test(t)) return true;
  if (/^module (overview|summary)\b/.test(t)) return true;
  if (/^(additional resources|guidelines|coding best practices|common misconceptions)\b/.test(t))
    return true;
  if (/^(practice questions?|graded questions?|interview practice questions?|quizzes)\b/.test(t))
    return true;
  if (/^quiz\b/.test(t)) return true;
  if (/^introduction$/.test(t)) return true;
  if (/^introduction\s*[-–:(]/.test(t)) return true;
  if (/^(codelines|text|file|table|image|part)$/.test(t)) return true;
  if (/^anecdotes?\b/.test(t)) return true;
  if (/recall quiz|ungraded assessment|graded assessment|coding question|coding quiz/.test(t))
    return true;
  return false;
}

function scoreTopic(topic, text, scopeText) {
  if (topic.scope && !topic.scope.test(scopeText)) return 0;
  if (topic.avoid && topic.avoid.test(text)) return 0;
  let score = 0;
  for (const key of topic.keys) {
    if (key.test(text)) score += Math.min(96, key.source.length);
  }
  return score;
}

function bestTopic(text, scopeText) {
  let best = null;
  let bestScore = 0;
  for (const topic of ALL) {
    const score = scoreTopic(topic, text, scopeText);
    if (score > bestScore) {
      best = topic;
      bestScore = score;
    }
  }
  return bestScore >= 3 ? best : null;
}

function blocksFrom(topic, note) {
  const sources = [...(topic.sources ?? [])];
  if (note) sources.push({ claim: note, source: "Phụ lục A, mục 10 của kế hoạch học" });
  const blocks = [
    { type: "situation", text: topic.situation },
    { type: "problem", text: topic.problem },
    { type: "why", text: topic.why },
    {
      type: "definition",
      plain: topic.plain,
      precise: topic.precise,
      formula: topic.formula,
      symbols: topic.symbols ?? [],
    },
    {
      type: "illustration",
      sim: topic.sim,
      steps: topic.steps ?? [],
      pipeline: topic.pipeline ?? [],
      code: topic.code ?? null,
    },
  ];
  if (topic.pitfalls?.length) blocks.push({ type: "pitfalls", rows: topic.pitfalls });
  blocks.push({ type: "insight", text: topic.insight });
  blocks.push({ type: "sources", items: sources });
  if (topic.recall?.length) blocks.push({ type: "recall", factIds: topic.recall });
  return blocks;
}

function isThinTitle(title) {
  const t = title.trim().toLowerCase();
  if (t.length < 3) return true;
  return /untitled|checkpointing|\bcodelines\b|^optional$|^file\b|^text\b|^image\b|^table\b|^\(?video\b|^(part|ii|iii|iv|v)\b|^method[- ]?[ivx\d]+/.test(t);
}

function blankLesson(topic, course, mod, session) {
  return {
    id: "l-" + hid(`${mod.id}|${topic.id}`),
    factId: topic.id,
    title: topic.title,
    courseId: course.id,
    moduleId: mod.id,
    sessionId: session.id,
    sessionTitle: session.title,
    moduleTitle: mod.title,
    courseTitle: course.title,
    optional: !!session.optional || !!mod.optional,
    sim: topic.sim ?? null,
    blurb: topic.insight,
    blocks: blocksFrom(topic, ""),
    glossary: topic.glossary ?? [],
    items: [],
    sessionIds: [],
  };
}

function attachItem(lesson, item) {
  item.lessonId = lesson.id;
  if (!lesson.sessionIds.includes(item.sessionId) && item.sessionId) lesson.sessionIds.push(item.sessionId);
  if (!lesson.items.some((x) => x.id === item.id)) lesson.items.push(toItem(item));
}

function videoSec(items) {
  return items.reduce((sum, it) => sum + (it.durationSec || 0), 0);
}

function toItem(it) {
  return {
    id: it.id,
    title: it.title,
    kind: it.kind,
    durationSec: it.durationSec,
    optional: !!it.optional,
    order: it.order,
    lessonId: it.lessonId,
  };
}

export function buildCourse(markdown) {
  const courses = mergeCourses(parseAppendix(markdown));
  const lessons = [];

  for (const course of courses) {
    for (const mod of course.modules) {
      if (mod.sessions.length === 0) {
        mod.sessions.push({
          id: "s-" + hid(mod.id + "|empty"),
          title: "Nội dung chưa mở",
          order: 0,
          optional: mod.optional,
          moduleId: mod.id,
          courseId: course.id,
          segments: [],
        });
      }
      const moduleLessons = new Map();
      for (const session of mod.sessions) {
        const scopeText = `${course.title}\n${mod.title}\n${session.title}`;
        const meta = [];
        const loose = [];
        const seen = [];
        for (const seg of session.segments) {
          for (const item of seg.items) {
            if (seg.capturedEmpty) {
              item.title = `${session.title.replace(/^S\d+\s*/, "")} — upGrad chưa mở danh sách video`;
              item.kind = "reading";
            }
            if (!seg.capturedEmpty && isMetaItem(item)) {
              meta.push(item);
              continue;
            }
            const text = `${isThinTitle(item.title) ? mod.title + "\n" : ""}${session.title}\n${item.title}\n${item.raw ?? ""}`;
            const topic = bestTopic(text, scopeText);
            if (!topic) {
              loose.push(item);
              continue;
            }
            let lesson = moduleLessons.get(topic.id);
            if (!lesson) {
              const gapNote = seg.capturedEmpty
                ? "Study plan chưa có danh sách video bên trong mục này."
                : /không hiển thị thời lượng/i.test(seg.raw)
                  ? "Mục này trên study plan không hiển thị thời lượng."
                  : "";
              lesson = {
                id: "l-" + hid(`${mod.id}|${topic.id}`),
                factId: topic.id,
                title: topic.title,
                courseId: course.id,
                moduleId: mod.id,
                sessionId: session.id,
                sessionTitle: session.title,
                moduleTitle: mod.title,
                courseTitle: course.title,
                optional: !!session.optional && !!mod.optional,
                sim: topic.sim,
                blurb: topic.insight,
                blocks: blocksFrom(topic, gapNote),
                glossary: topic.glossary ?? [],
                items: [],
                sessionIds: [],
              };
              moduleLessons.set(topic.id, lesson);
              lessons.push(lesson);
            }
            if (!lesson.sessionIds.includes(session.id)) lesson.sessionIds.push(session.id);
            item.lessonId = lesson.id;
            if (!lesson.items.some((x) => x.id === item.id)) lesson.items.push(toItem(item));
            if (!seen.includes(lesson.id)) seen.push(lesson.id);
          }
        }
        if (loose.length) {
          const sessionTopic = /mind\s*map/i.test(mod.title)
            ? null
            : bestTopic(`${mod.title}\n${session.title}`, scopeText);
          if (sessionTopic) {
            let lesson = moduleLessons.get(sessionTopic.id);
            if (!lesson) {
              lesson = blankLesson(sessionTopic, course, mod, session);
              moduleLessons.set(sessionTopic.id, lesson);
              lessons.push(lesson);
            }
            if (!lesson.sessionIds.includes(session.id)) lesson.sessionIds.push(session.id);
            for (const item of loose) attachItem(lesson, item);
            if (!seen.includes(lesson.id)) seen.push(lesson.id);
          } else {
            const topic = teachLoose({ course, module: mod, session });
            const lesson = blankLesson(topic, course, mod, session);
            lesson.id = "l-" + hid(`${session.id}|${topic.id}`);
            lesson.sessionIds = [session.id];
            for (const item of loose) attachItem(lesson, item);
            lessons.push(lesson);
            seen.push(lesson.id);
          }
        }
        if (seen.length === 0) {
          const sessionTopic = session.segments.length === 0 || /mind\s*map/i.test(mod.title)
            ? null
            : bestTopic(`${mod.title}\n${session.title}`, scopeText);
          const topic = sessionTopic ?? teachLoose({ course, module: mod, session });
          let lesson = sessionTopic ? moduleLessons.get(sessionTopic.id) : null;
          if (!lesson) {
            lesson = blankLesson(topic, course, mod, session);
            if (session.segments.length === 0) {
              lesson.blocks = blocksFrom(topic, "Danh mục lúc làm sổ chưa có session bên trong module này.");
            }
            if (sessionTopic) moduleLessons.set(sessionTopic.id, lesson);
            else lesson.id = "l-" + hid(`${session.id}|${topic.id}`);
            lessons.push(lesson);
          }
          if (!lesson.sessionIds.includes(session.id)) lesson.sessionIds.push(session.id);
          for (const item of meta) attachItem(lesson, item);
          meta.length = 0;
          if (!seen.includes(lesson.id)) seen.push(lesson.id);
        }
        const hostId = seen[0];
        const host = lessons.find((l) => l.id === hostId);
        for (const item of meta) {
          item.lessonId = host.id;
          if (!host.items.some((x) => x.id === item.id)) host.items.push(toItem(item));
        }
        session.lessonIds = seen;
      }
      for (const lesson of moduleLessons.values()) {
        lesson.videoSec = videoSec(lesson.items);
        lesson.readMin = Math.max(12, Math.min(28, 14 + (lesson.sim ? 6 : 0) + Math.round(lesson.videoSec / 1200)));
        lesson.itemCount = lesson.items.length;
        lesson.order = lesson.order ?? 0;
      }
    }
  }

  const byFact = new Map();
  for (const lesson of lessons) {
    if (!byFact.has(lesson.factId)) byFact.set(lesson.factId, lesson.id);
  }
  for (const lesson of lessons) {
    for (const block of lesson.blocks) {
      if (block.type === "recall") {
        block.links = block.factIds
          .map((id) => ({ factId: id, lessonId: byFact.get(id) }))
          .filter((x) => x.lessonId && x.lessonId !== lesson.id);
        const titles = new Map(lessons.map((l) => [l.id, l.title]));
        block.links.forEach((link) => {
          link.title = titles.get(link.lessonId);
        });
      }
    }
  }

  const items = lessons.flatMap((l) => l.items);
  const ids = new Set();
  for (const it of items) {
    if (ids.has(it.id)) throw new Error("Duplicate item " + it.id + " " + it.title);
    ids.add(it.id);
  }
  lessons.forEach((lesson, i) => {
    lesson.order = i;
    lesson.videoSec = videoSec(lesson.items);
    lesson.readMin = Math.max(12, Math.min(28, 14 + (lesson.sim ? 6 : 0) + Math.round((lesson.videoSec || 0) / 1200)));
    lesson.itemCount = lesson.items.length;
  });
  const missing = items.filter((it) => !it.lessonId);
  if (missing.length) throw new Error(`Missing lesson for ${missing.length} items`);

  const tree = courses.map((c) => ({
    id: c.id,
    title: c.title,
    order: c.order,
    optional: !!c.optional,
    modules: c.modules.map((m) => ({
      id: m.id,
      title: m.title,
      order: m.order,
      optional: !!m.optional,
      sessions: m.sessions.map((s) => ({
        id: s.id,
        title: s.title,
        order: s.order,
        optional: !!s.optional,
        lessonIds: s.lessonIds ?? [],
      })),
    })),
  }));

  const slimLessons = lessons.map((l) => ({
    id: l.id,
    factId: l.factId,
    title: l.title,
    courseId: l.courseId,
    moduleId: l.moduleId,
    sessionId: l.sessionId,
    sessionTitle: l.sessionTitle,
    sessionIds: l.sessionIds ?? [l.sessionId],
    moduleTitle: l.moduleTitle,
    courseTitle: l.courseTitle,
    optional: l.optional,
    order: l.order,
    sim: l.sim,
    blurb: l.blurb,
    readMin: l.readMin,
    videoSec: l.videoSec,
    blocks: l.blocks,
    glossary: l.glossary,
    items: l.items,
  }));

  return {
    generatedAt: "2026-10-24",
    courses: tree,
    lessons: slimLessons,
    stats: {
      courses: tree.length,
      lessons: slimLessons.length,
      items: items.length,
      withSim: slimLessons.filter((l) => l.sim).length,
      fallback: slimLessons.filter((l) => l.factId === "fallback").length,
    },
  };
}

const md = readFileSync(new URL("../../attachments/Pasted Text.txt", import.meta.url), "utf8");
const data = buildCourse(md);
mkdirSync(new URL("../../src/data", import.meta.url), { recursive: true });
writeFileSync(new URL("../../src/data/course.json", import.meta.url), JSON.stringify(data));
console.log(JSON.stringify(data.stats));
const fb = data.lessons.filter((l) => l.factId === "fallback");
console.log("fallback sample:");
for (const l of fb.slice(0, 25)) console.log("-", l.courseTitle.slice(0, 28), "|", l.sessionTitle.slice(0, 40), "| items", l.items.length);
console.log("fallback lessons", fb.length);
