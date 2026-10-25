import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as katex } from "../_libs/katex.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tex-t3KOuum9.js
var import_jsx_runtime = require_jsx_runtime();
function Tex({ tex, block = false }) {
	const html = katex.renderToString(tex, {
		throwOnError: false,
		displayMode: block
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: block ? "katex-block block overflow-x-auto py-2 text-center" : "inline",
		dangerouslySetInnerHTML: { __html: html }
	});
}
function maybeTex(math) {
	if (/[\\^_{}]/.test(math)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
		tex: math,
		block: true
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "overflow-x-auto font-mono text-sm",
		children: math
	});
}
//#endregion
export { maybeTex as n, Tex as t };
