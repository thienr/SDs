import { o as __toESM } from "../_runtime.mjs";
import { s as lessons } from "./catalog-BobPw5DT.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { O as subscribeProgress, b as getServerProgress, g as subscribeCms, m as getServerCmsVersion, p as getCmsVersion, y as getProgress } from "./router-BKTVoWn3.mjs";
import { a as liveLesson } from "./cms-live-C2rygzrc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tu-dien-CIAQBcz9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function GlossaryPage() {
	const progress = (0, import_react.useSyncExternalStore)(subscribeProgress, getProgress, getServerProgress);
	(0, import_react.useSyncExternalStore)(subscribeCms, getCmsVersion, getServerCmsVersion);
	const map = /* @__PURE__ */ new Map();
	for (const lesson of lessons) {
		const live = liveLesson(lesson, progress.lang);
		for (const entry of live.glossary ?? []) {
			const key = entry.term.toLowerCase();
			if (!map.has(key)) map.set(key, {
				...entry,
				lessonId: live.id,
				lessonTitle: live.title
			});
		}
	}
	const glossary = [...map.values()].sort((a, b) => a.term.localeCompare(b.term, "en"));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl",
				children: "Từ điển"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "Thuật ngữ giữ tiếng Anh. Nghĩa tiếng Việt nằm cạnh."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 divide-y divide-line border-y border-line",
				children: glossary.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-medium",
							children: [
								entry.term,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-muted",
									children: ["· ", entry.en]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1",
							children: entry.def
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/bai/$lessonId",
							params: { lessonId: entry.lessonId },
							className: "mt-1 inline-block text-sm text-accent underline",
							children: ["Bài gốc: ", entry.lessonTitle]
						})
					]
				}, entry.term))
			})
		]
	});
}
//#endregion
export { GlossaryPage as component };
