import { o as __toESM } from "../_runtime.mjs";
import { J as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/report-store-BZhsezXf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var KEY = "so-muc:reports";
var empty = [];
var cache = null;
var subs = /* @__PURE__ */ new Set();
function load() {
	if (cache) return cache;
	try {
		const raw = typeof localStorage === "undefined" ? null : localStorage.getItem(KEY);
		const parsed = raw ? JSON.parse(raw) : [];
		cache = Array.isArray(parsed) ? parsed : [];
	} catch {
		cache = [];
	}
	return cache;
}
function save(next) {
	cache = next;
	try {
		localStorage.setItem(KEY, JSON.stringify(next));
	} catch {}
	subs.forEach((f) => f());
}
function addReport(r) {
	save([...load(), {
		...r,
		id: `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`,
		at: (/* @__PURE__ */ new Date()).toISOString()
	}]);
}
function removeReport(id) {
	save(load().filter((r) => r.id !== id));
}
function clearReports() {
	save([]);
}
function useReports() {
	return (0, import_react.useSyncExternalStore)((f) => {
		subs.add(f);
		return () => subs.delete(f);
	}, load, () => empty);
}
function reportsAsText(list) {
	return list.map((r, i) => `${i + 1}. [${r.kind === "wrong" ? "SAI" : "KHÓ HIỂU"}] ${r.conceptId} — ${r.title}${r.note ? `\n   Ghi chú: ${r.note}` : ""}`).join("\n");
}
function getReports() {
	return load();
}
//#endregion
export { reportsAsText as a, removeReport as i, clearReports as n, useReports as o, getReports as r, addReport as t };
