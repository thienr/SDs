import { o as __toESM } from "../_runtime.mjs";
import { l as shortCourse, s as lessons } from "./catalog-BobPw5DT.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { O as subscribeProgress, b as getServerProgress, g as subscribeCms, m as getServerCmsVersion, p as getCmsVersion, y as getProgress } from "./router-CGxXTrc_.mjs";
import { t as Tex } from "./tex-t3KOuum9.mjs";
import { a as liveLesson } from "./cms-live-COwizrjv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cong-thuc-CfOERVhJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function FormulaPage() {
	const progress = (0, import_react.useSyncExternalStore)(subscribeProgress, getProgress, getServerProgress);
	(0, import_react.useSyncExternalStore)(subscribeCms, getCmsVersion, getServerCmsVersion);
	const rows = lessons.flatMap((lesson) => {
		const live = liveLesson(lesson, progress.lang);
		const block = live.blocks.find((item) => item.type === "definition");
		if (!block || block.type !== "definition" || !block.formula) return [];
		return [{
			lessonId: live.id,
			title: live.title,
			formula: block.formula,
			course: shortCourse(live.courseTitle)
		}];
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl",
				children: "Công thức"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "Mỗi công thức gắn với một bài có ví dụ số hoặc hình kéo được."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 space-y-4",
				children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-card border border-line bg-card p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-widest text-muted",
							children: row.course
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/bai/$lessonId",
							params: { lessonId: row.lessonId },
							className: "mt-1 block font-medium",
							children: row.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							tex: row.formula,
							block: true
						})
					]
				}, row.lessonId + row.formula))
			})
		]
	});
}
//#endregion
export { FormulaPage as component };
