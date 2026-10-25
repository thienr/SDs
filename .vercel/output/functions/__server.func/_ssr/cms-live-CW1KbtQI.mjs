import { a as getLesson, n as courses, s as lessons } from "./catalog-BshCFI1J.mjs";
import { a as courseHead, c as batchCms, d as cmsGet, f as cmsIsEdited, h as setCmsPatch, o as moduleHead, s as sessionHead } from "./router-DC257ZsM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cms-live-CW1KbtQI.js
var emptyHead = {
	why: "",
	plain: "",
	prior: ""
};
function liveCourse(courseId, lang) {
	return applyHead(courseHead(courseId), "course", courseId, lang);
}
function liveModule(courseId, moduleTitle, lang) {
	return applyHead(moduleHead(courseId, moduleTitle), "module", `${courseId}||${moduleTitle}`, lang);
}
function liveSession(courseId, moduleTitle, sessionTitle, lang) {
	const base = sessionHead(courseId, moduleTitle, sessionTitle);
	return cmsGet("session", sessionId(courseId, moduleTitle, sessionTitle), lang)?.text ?? base[lang];
}
function liveLesson(lesson, lang) {
	const patch = cmsGet("lesson", lesson.id, lang);
	if (!patch) return lesson;
	return {
		...lesson,
		title: patch.title ?? lesson.title,
		blurb: patch.blurb ?? lesson.blurb,
		blocks: Array.isArray(patch.blocks) ? patch.blocks : lesson.blocks,
		glossary: Array.isArray(patch.glossary) ? patch.glossary : lesson.glossary
	};
}
function listCms(kind, lang) {
	if (kind === "course") return courses.map((course) => row("course", course.id, lang, course.title, course.title, liveCourse(course.id, lang)));
	if (kind === "module") return courses.flatMap((course) => course.modules.map((mod) => row("module", `${course.id}||${mod.title}`, lang, mod.title, course.title, liveModule(course.id, mod.title, lang))));
	if (kind === "session") return courses.flatMap((course) => course.modules.flatMap((mod) => mod.sessions.map((session) => {
		const id = sessionId(course.id, mod.title, session.title);
		const text = liveSession(course.id, mod.title, session.title, lang);
		return row("session", id, lang, session.title, `${course.title} / ${mod.title}`, emptyHead, text);
	})));
	return lessons.map((lesson) => {
		const live = liveLesson(lesson, lang);
		return {
			...row("lesson", lesson.id, lang, live.title, `${lesson.courseTitle} / ${lesson.sessionTitle}`, emptyHead),
			title: live.title,
			blurb: live.blurb,
			blocks: JSON.stringify(live.blocks, null, 2),
			glossary: JSON.stringify(live.glossary ?? [], null, 2)
		};
	});
}
function saveCms(item, draft) {
	if (item.kind === "lesson") {
		const lesson = getLesson(item.id);
		if (!lesson) return {
			ok: false,
			error: "Không thấy bài."
		};
		let blocks = lesson.blocks;
		let glossary = lesson.glossary;
		try {
			blocks = JSON.parse(draft.blocks);
			if (!Array.isArray(blocks)) return {
				ok: false,
				error: "Khối bài phải là một mảng JSON."
			};
		} catch {
			return {
				ok: false,
				error: "JSON khối bài không đọc được."
			};
		}
		try {
			glossary = JSON.parse(draft.glossary);
			if (!Array.isArray(glossary)) return {
				ok: false,
				error: "Từ điển bài phải là một mảng JSON."
			};
		} catch {
			return {
				ok: false,
				error: "JSON từ điển không đọc được."
			};
		}
		const next = {
			title: draft.title.trim(),
			blurb: draft.blurb.trim(),
			blocks,
			glossary
		};
		const same = next.title === lesson.title && next.blurb === lesson.blurb && JSON.stringify(next.blocks) === JSON.stringify(lesson.blocks) && JSON.stringify(next.glossary) === JSON.stringify(lesson.glossary ?? []);
		setCmsPatch("lesson", item.id, item.lang, same ? null : next);
		return {
			ok: true,
			error: null
		};
	}
	if (item.kind === "session") {
		const base = printedSession(item.id, item.lang);
		const text = draft.text.trim();
		setCmsPatch("session", item.id, item.lang, text === base ? null : { text });
		return {
			ok: true,
			error: null
		};
	}
	const base = printedHead(item.kind, item.id, item.lang);
	const next = {
		why: draft.why.trim(),
		plain: draft.plain.trim(),
		prior: draft.prior.trim()
	};
	const same = next.why === base.why && next.plain === base.plain && next.prior === base.prior;
	setCmsPatch(item.kind, item.id, item.lang, same ? null : next);
	return {
		ok: true,
		error: null
	};
}
function exportCms(lang) {
	const langs = lang === "both" ? ["vi", "en"] : [lang];
	return {
		heads: langs.flatMap((item) => [
			...listCms("course", item),
			...listCms("module", item),
			...listCms("session", item)
		].map(slim)),
		lessons: langs.flatMap((item) => listCms("lesson", item).map(slim))
	};
}
function importCms(value, fallback) {
	const bag = value;
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
			if (!saveCms(current, {
				...current,
				...row.fields
			}).ok) skipped += 1;
			else applied += 1;
		}
	});
	return {
		applied,
		skipped
	};
}
function applyHead(base, kind, id, lang) {
	const patch = cmsGet(kind, id, lang);
	return {
		why: patch?.why ?? base.why[lang],
		plain: patch?.plain ?? base.plain[lang],
		prior: patch?.prior ?? base.prior[lang]
	};
}
function row(kind, id, lang, label, place, head, text = "") {
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
		glossary: "[]"
	};
}
function sessionId(courseId, moduleTitle, sessionTitle) {
	return `${courseId}||${moduleTitle}||${sessionTitle}`;
}
function printedHead(kind, id, lang) {
	if (kind === "course") {
		const head = courseHead(id);
		return {
			why: head.why[lang],
			plain: head.plain[lang],
			prior: head.prior[lang]
		};
	}
	const [courseId, ...rest] = id.split("||");
	const head = moduleHead(courseId ?? "", rest.join("||"));
	return {
		why: head.why[lang],
		plain: head.plain[lang],
		prior: head.prior[lang]
	};
}
function printedSession(id, lang) {
	const [courseId, moduleTitle, ...rest] = id.split("||");
	return sessionHead(courseId ?? "", moduleTitle ?? "", rest.join("||"))[lang];
}
function slim(item) {
	if (item.kind === "lesson") return {
		kind: item.kind,
		id: item.id,
		lang: item.lang,
		place: item.place,
		title: item.title,
		blurb: item.blurb,
		blocks: safeParse(item.blocks),
		glossary: safeParse(item.glossary)
	};
	if (item.kind === "session") return {
		kind: item.kind,
		id: item.id,
		lang: item.lang,
		place: item.place,
		text: item.text
	};
	return {
		kind: item.kind,
		id: item.id,
		lang: item.lang,
		place: item.place,
		why: item.why,
		plain: item.plain,
		prior: item.prior
	};
}
function asRow(item, fallback) {
	if (!item || typeof item !== "object") return null;
	const row = item;
	const kind = row.kind;
	if (kind !== "course" && kind !== "module" && kind !== "session" && kind !== "lesson") return null;
	if (typeof row.id !== "string" || !row.id) return null;
	const lang = row.lang === "en" ? "en" : row.lang === "vi" ? "vi" : fallback;
	const fields = {};
	if (typeof row.why === "string") fields.why = row.why;
	if (typeof row.plain === "string") fields.plain = row.plain;
	if (typeof row.prior === "string") fields.prior = row.prior;
	if (typeof row.text === "string") fields.text = row.text;
	if (typeof row.title === "string") fields.title = row.title;
	if (typeof row.blurb === "string") fields.blurb = row.blurb;
	if ("blocks" in row) fields.blocks = JSON.stringify(row.blocks ?? [], null, 2);
	if ("glossary" in row) fields.glossary = JSON.stringify(row.glossary ?? [], null, 2);
	return {
		kind,
		id: row.id,
		lang,
		fields
	};
}
function safeParse(text) {
	try {
		return JSON.parse(text);
	} catch {
		return text;
	}
}
//#endregion
export { liveLesson as a, saveCms as c, liveCourse as i, importCms as n, liveModule as o, listCms as r, liveSession as s, exportCms as t };
