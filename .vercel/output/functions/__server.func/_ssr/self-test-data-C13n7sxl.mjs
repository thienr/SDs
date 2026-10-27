//#region node_modules/.nitro/vite/services/ssr/assets/self-test-data-C13n7sxl.js
var cache = null;
var pending = null;
function loadSelfTest() {
	if (cache) return Promise.resolve(cache);
	pending ??= import("./self-test-FEfmWSGl.mjs").then((m) => cache = m.default ?? m);
	return pending;
}
//#endregion
export { loadSelfTest as t };
