import { c as lessons } from "./catalog-DhneT6we.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/progress-BKM3W6t5.js
var KEY = "so-muc-v1";
var empty = {
	items: {},
	lastLessonId: null,
	theme: "light",
	lang: "vi"
};
var state = empty;
var listeners = /* @__PURE__ */ new Set();
function emit() {
	if (typeof window !== "undefined") {
		localStorage.setItem(KEY, JSON.stringify(state));
		document.documentElement.dataset.theme = state.theme;
		document.documentElement.lang = state.lang === "en" ? "en" : "vi";
	}
	listeners.forEach((listener) => listener());
}
function hydrateProgress() {
	if (typeof window === "undefined") return;
	try {
		const raw = localStorage.getItem(KEY);
		if (raw) {
			const parsed = JSON.parse(raw);
			state = {
				items: parsed.items ?? {},
				lastLessonId: parsed.lastLessonId ?? null,
				lastAt: parsed.lastAt ?? 0,
				theme: parsed.theme === "dark" ? "dark" : "light",
				lang: parsed.lang === "en" ? "en" : "vi"
			};
		}
	} catch {
		state = empty;
	}
	document.documentElement.dataset.theme = state.theme;
	document.documentElement.lang = state.lang === "en" ? "en" : "vi";
	listeners.forEach((listener) => listener());
}
function subscribeProgress(listener) {
	listeners.add(listener);
	return () => listeners.delete(listener);
}
function getProgress() {
	return state;
}
function getServerProgress() {
	return empty;
}
function itemStatus(id) {
	return state.items[id] ?? "unseen";
}
function lessonStatus(lessonId) {
	const lesson = lessons.find((item) => item.id === lessonId);
	if (!lesson || lesson.items.length === 0) return state.lastLessonId === lessonId ? "viewing" : "unseen";
	const statuses = lesson.items.map((item) => itemStatus(item.id));
	if (statuses.every((status) => status === "seen")) return "seen";
	if (statuses.some((status) => status !== "unseen")) return "viewing";
	return "unseen";
}
function openLesson(lessonId) {
	const lesson = lessons.find((item) => item.id === lessonId);
	const items = { ...state.items };
	if (lesson) {
		for (const item of lesson.items) if (!items[item.id]) items[item.id] = "viewing";
	}
	state = {
		...state,
		items,
		lastLessonId: lessonId,
		lastAt: Date.now()
	};
	emit();
}
function cycleItem(id) {
	const order = [
		"unseen",
		"viewing",
		"seen"
	];
	const next = order[(order.indexOf(itemStatus(id)) + 1) % order.length];
	state = {
		...state,
		items: {
			...state.items,
			[id]: next
		}
	};
	emit();
}
function markLesson(lessonId, status) {
	const lesson = lessons.find((item) => item.id === lessonId);
	if (!lesson) return;
	const items = { ...state.items };
	for (const item of lesson.items) items[item.id] = status;
	state = {
		...state,
		items,
		lastLessonId: lessonId,
		lastAt: Date.now()
	};
	emit();
}
function setTheme(theme) {
	state = {
		...state,
		theme
	};
	emit();
}
function toggleTheme() {
	setTheme(state.theme === "dark" ? "light" : "dark");
}
function setLang(lang) {
	state = {
		...state,
		lang
	};
	emit();
}
function progressSnapshot() {
	return JSON.stringify({
		version: 1,
		exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
		...state
	}, null, 2);
}
function importProgress(text) {
	const parsed = JSON.parse(text);
	if (!parsed || typeof parsed !== "object" || !parsed.items) throw new Error("Tệp không đúng định dạng sổ học");
	state = {
		items: parsed.items ?? {},
		lastLessonId: parsed.lastLessonId ?? null,
		theme: parsed.theme === "dark" ? "dark" : state.theme,
		lang: parsed.lang === "en" ? "en" : state.lang
	};
	emit();
}
function countSeen() {
	const items = lessons.flatMap((lesson) => lesson.items);
	return {
		seen: items.filter((item) => itemStatus(item.id) === "seen").length,
		viewing: items.filter((item) => itemStatus(item.id) === "viewing").length,
		total: items.length
	};
}
/** Áp tiến độ đã gộp từ máy chủ. Chỉ phát tín hiệu khi thật sự có thay đổi. */
function applyRemoteProgress(items, last, at) {
	if (state.lastLessonId === last && Object.keys(items).length === Object.keys(state.items).length && Object.entries(items).every(([k, v]) => state.items[k] === v)) return;
	state = {
		...state,
		items,
		lastLessonId: last,
		lastAt: at
	};
	emit();
}
//#endregion
export { getServerProgress as a, itemStatus as c, openLesson as d, progressSnapshot as f, toggleTheme as h, getProgress as i, lessonStatus as l, subscribeProgress as m, countSeen as n, hydrateProgress as o, setLang as p, cycleItem as r, importProgress as s, applyRemoteProgress as t, markLesson as u };
