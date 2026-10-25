import { c as lessons, d as stats } from "./catalog-DhneT6we.mjs";
import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/do-phu-kafhI8o9.js
var import_jsx_runtime = require_jsx_runtime();
function CoveragePage() {
	const attached = lessons.reduce((sum, lesson) => sum + lesson.items.length, 0);
	const fallback = lessons.filter((lesson) => lesson.factId === "fallback");
	const withSim = lessons.filter((lesson) => lesson.sim);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl",
				children: "Độ phủ"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 font-display text-5xl",
				children: [
					attached,
					"/",
					stats.items
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-lg",
				children: "mục trong phụ lục có một bài để đọc. Không còn mục trống."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-6 grid grid-cols-2 gap-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-card border border-line p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-muted",
						children: "Bài"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "font-display text-3xl",
						children: stats.lessons
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-card border border-line p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-muted",
						children: "Bài có hình kéo"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "font-display text-3xl",
						children: withSim.length
					})]
				})]
			}),
			fallback.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-8 font-display text-2xl",
					children: "Bài viết riêng cho buổi luyện"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm text-muted",
					children: [
						"Buổi luyện hoặc chỗ danh mục không có video vẫn có một bài giải thích khái niệm. Không có câu hỏi. ",
						fallback.length,
						" bài thuộc nhóm này."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2",
					children: fallback.map((lesson) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/bai/$lessonId",
						params: { lessonId: lesson.id },
						className: "text-sm underline",
						children: [
							lesson.sessionTitle,
							" · ",
							lesson.items.length,
							" mục"
						]
					}) }, lesson.id))
				})
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-sm text-muted",
				children: "Không còn bài nào chỉ lặp lại tên mục trong danh mục. Mỗi mục nằm trong một bài có định nghĩa."
			})
		]
	});
}
//#endregion
export { CoveragePage as component };
