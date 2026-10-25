import { o as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link, g as Outlet, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as getProgress, k as subscribeProgress, x as getServerProgress } from "./router-cri9Hc1u.mjs";
import { t as assignments } from "./assign-ljutj6N2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bai-tap-D-Cc88GP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AssignLayout() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const lang = (0, import_react.useSyncExternalStore)(subscribeProgress, getProgress, getServerProgress).lang;
	if (pathname !== "/bai-tap" && pathname !== "/bai-tap/") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl",
				children: lang === "en" ? "Assignment guides" : "Hướng dẫn assignment"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: lang === "en" ? "Each page follows the starter file cell by cell, unchanged, with a companion guide under every task." : "Mỗi trang đi theo file starter từng ô, không đổi, kèm hướng dẫn dưới mỗi mục."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 space-y-3",
				children: assignments.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/bai-tap/$id",
					params: { id: a.id },
					className: "block min-h-11 rounded-card border border-line px-4 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs tracking-widest text-muted",
							children: a.course
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block font-medium",
							children: a.title[lang === "en" ? 1 : 0]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-sm text-muted",
							children: a.file
						})
					]
				}) }, a.id))
			})
		]
	});
}
//#endregion
export { AssignLayout as component };
