import { o as __toESM } from "../_runtime.mjs";
import { J as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/done-7YxkEW8W.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var KEY$2 = "so-muc:done";
var NONE$1 = {};
var cache$2 = null;
var subs$2 = /* @__PURE__ */ new Set();
function load$2() {
	if (cache$2) return cache$2;
	try {
		const raw = typeof localStorage === "undefined" ? null : localStorage.getItem(KEY$2);
		cache$2 = raw ? JSON.parse(raw) : {};
	} catch {
		cache$2 = {};
	}
	return cache$2;
}
function save$2(next) {
	cache$2 = next;
	try {
		localStorage.setItem(KEY$2, JSON.stringify(next));
	} catch {}
	subs$2.forEach((f) => f());
}
var getDone = () => load$2();
var subscribeDone = (f) => (subs$2.add(f), () => void subs$2.delete(f));
var useDone = () => (0, import_react.useSyncExternalStore)(subscribeDone, load$2, () => NONE$1);
var isDone = (map, id) => {
	var _map$id;
	return ((_map$id = map[id]) === null || _map$id === void 0 ? void 0 : _map$id.x) === 1;
};
function setDone(id, on) {
	save$2({
		...load$2(),
		[id]: {
			x: on ? 1 : 0,
			a: Date.now()
		}
	});
}
function applyRemoteDone(next) {
	if (JSON.stringify(next) === JSON.stringify(load$2())) return;
	save$2(next);
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/review-ErGOBQnF.js
/** Ôn lại cách quãng: mỗi câu tự kiểm tra có một «hộp» 0–5. Đúng thì lên hộp, sai thì về 0 và hỏi lại ngày mai. */
var KEY$1 = "so-muc:review";
var GAPS = [
	1,
	3,
	7,
	14,
	30
];
var cache$1 = null;
var subs$1 = /* @__PURE__ */ new Set();
var NONE = {};
function today(offset = 0) {
	const d = new Date(Date.now() + offset * 864e5);
	const z = (n) => String(n).padStart(2, "0");
	return `${d.getFullYear()}-${z(d.getMonth() + 1)}-${z(d.getDate())}`;
}
function load$1() {
	if (cache$1) return cache$1;
	try {
		const raw = typeof localStorage === "undefined" ? null : localStorage.getItem(KEY$1);
		cache$1 = raw ? JSON.parse(raw) : {};
	} catch {
		cache$1 = {};
	}
	return cache$1;
}
function save$1(next) {
	cache$1 = next;
	try {
		localStorage.setItem(KEY$1, JSON.stringify(next));
	} catch {}
	subs$1.forEach((f) => f());
}
var reviewKey = (conceptId, index) => `${conceptId}#${index}`;
function recordAnswer(conceptId, index, correct) {
	var _all$key$b, _all$key;
	const all = load$1();
	const key = reviewKey(conceptId, index);
	const box = (_all$key$b = (_all$key = all[key]) === null || _all$key === void 0 ? void 0 : _all$key.b) !== null && _all$key$b !== void 0 ? _all$key$b : 0;
	const nb = correct ? Math.min(box + 1, 5) : 0;
	const days = nb === 0 ? 1 : GAPS[nb - 1];
	save$1({
		...all,
		[key]: {
			b: nb,
			d: today(days),
			a: Date.now()
		}
	});
}
function getReview() {
	return load$1();
}
function subscribeReview(f) {
	subs$1.add(f);
	return () => subs$1.delete(f);
}
function applyRemoteReview(next) {
	if (JSON.stringify(next) === JSON.stringify(load$1())) return;
	save$1(next);
}
function useReview() {
	return (0, import_react.useSyncExternalStore)(subscribeReview, load$1, () => NONE);
}
/** Các câu đến hạn (ngày hẹn ≤ hôm nay), cũ nhất trước. */
function dueKeys(map, limit = 5) {
	const t = today();
	return Object.entries(map).filter(([, v]) => v.d <= t).sort((a, b) => a[1].d.localeCompare(b[1].d) || a[1].b - b[1].b).slice(0, limit).map(([k]) => k);
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/toc-memory-Cwcczwc2.js
var KEY = "so-muc:toc";
var empty = {
	course: null,
	read: null
};
var cache = null;
var subs = /* @__PURE__ */ new Set();
function load() {
	if (cache) return cache;
	try {
		const raw = typeof localStorage === "undefined" ? null : localStorage.getItem(KEY);
		cache = raw ? {
			...empty,
			...JSON.parse(raw)
		} : empty;
	} catch {
		cache = empty;
	}
	return cache;
}
function save(next, stamp = true) {
	next = stamp ? {
		...next,
		at: Date.now()
	} : next;
	cache = next;
	try {
		localStorage.setItem(KEY, JSON.stringify(next));
	} catch {}
	subs.forEach((f) => f());
}
function setOpenCourse(course) {
	save({
		...load(),
		course
	});
}
function setLastRead(read) {
	const r = load().read;
	if (r && r.course === read.course && r.mod === read.mod && r.ses === read.ses && r.item === read.item) return;
	save({
		course: read.course,
		read
	});
}
function useTocMemory() {
	return (0, import_react.useSyncExternalStore)((f) => {
		subs.add(f);
		return () => subs.delete(f);
	}, load, () => empty);
}
function getToc() {
	return load();
}
function subscribeToc(f) {
	subs.add(f);
	return () => subs.delete(f);
}
function applyRemoteToc(next) {
	const cur = load();
	if (cur.course === next.course && JSON.stringify(cur.read) === JSON.stringify(next.read)) return;
	save({
		course: next.course,
		read: next.read,
		at: next.at
	}, false);
}
//#endregion
export { subscribeDone as _, subscribeToc as a, dueKeys as c, subscribeReview as d, useReview as f, setDone as g, isDone as h, setOpenCourse as i, getReview as l, getDone as m, getToc as n, useTocMemory as o, applyRemoteDone as p, setLastRead as r, applyRemoteReview as s, applyRemoteToc as t, recordAnswer as u, useDone as v };
