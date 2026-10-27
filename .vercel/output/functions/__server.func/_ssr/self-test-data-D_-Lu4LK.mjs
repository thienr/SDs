//#region node_modules/.nitro/vite/services/ssr/assets/self-test-data-D_-Lu4LK.js
var cache = null;
var pending = null;
function loadSelfTest() {
	var _pending;
	if (cache) return Promise.resolve(cache);
	(_pending = pending) !== null && _pending !== void 0 || (pending = import("./self-test-FEfmWSGl.mjs").then((m) => {
		var _m$default;
		return cache = (_m$default = m.default) !== null && _m$default !== void 0 ? _m$default : m;
	}));
	return pending;
}
//#endregion
export { loadSelfTest as t };
