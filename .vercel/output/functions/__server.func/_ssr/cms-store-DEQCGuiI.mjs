//#region node_modules/.nitro/vite/services/ssr/assets/cms-store-DEQCGuiI.js
var KEY = "so-muc-cms-v1";
var state = { patches: {} };
var version = 0;
var listeners = /* @__PURE__ */ new Set();
var quiet = false;
function cmsKey(kind, id, lang) {
	return `${lang}:${kind}:${id}`;
}
function emit() {
	if (quiet) return;
	version += 1;
	if (typeof window !== "undefined") localStorage.setItem(KEY, JSON.stringify({
		version: 1,
		patches: state.patches
	}));
	listeners.forEach((listener) => listener());
}
function isPatch(value) {
	return Boolean(value) && typeof value === "object";
}
function hydrateCms() {
	if (typeof window === "undefined") return;
	try {
		const raw = localStorage.getItem(KEY);
		if (raw) {
			const parsed = JSON.parse(raw);
			const patches = {};
			for (const [key, value] of Object.entries(parsed.patches ?? {})) if (isPatch(value)) patches[key] = value;
			state = { patches };
		}
	} catch {
		state = { patches: {} };
	}
	version += 1;
	listeners.forEach((listener) => listener());
}
function subscribeCms(listener) {
	listeners.add(listener);
	return () => listeners.delete(listener);
}
function getCmsVersion() {
	return version;
}
function getServerCmsVersion() {
	return 0;
}
function cmsGet(kind, id, lang) {
	return state.patches[cmsKey(kind, id, lang)] ?? null;
}
function cmsIsEdited(kind, id, lang) {
	return Boolean(state.patches[cmsKey(kind, id, lang)]);
}
function cmsEditCount() {
	return Object.keys(state.patches).length;
}
function setCmsPatch(kind, id, lang, patch) {
	const key = cmsKey(kind, id, lang);
	const patches = { ...state.patches };
	if (patch && Object.keys(patch).length > 0) patches[key] = patch;
	else delete patches[key];
	state = { patches };
	emit();
}
function clearCms() {
	state = { patches: {} };
	emit();
}
function batchCms(run) {
	quiet = true;
	try {
		run();
	} finally {
		quiet = false;
		emit();
	}
}
//#endregion
export { cmsIsEdited as a, hydrateCms as c, cmsGet as i, setCmsPatch as l, clearCms as n, getCmsVersion as o, cmsEditCount as r, getServerCmsVersion as s, batchCms as t, subscribeCms as u };
