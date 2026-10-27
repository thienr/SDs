import { o as __toESM } from "../_runtime.mjs";
import { c as lessons, s as glossary, u as shortCourse } from "./catalog-DRaoKsF4.mjs";
import { J as require_react, b as Link, q as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tim-kiem-DD7NpIXU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SearchPage() {
	const [q, setQ] = (0, import_react.useState)("");
	const query = q.trim().toLowerCase();
	const found = (0, import_react.useMemo)(() => {
		if (query.length < 2) return [];
		return lessons.filter((lesson) => {
			return `${lesson.title} ${lesson.blurb} ${lesson.courseTitle} ${lesson.sessionTitle} ${lesson.items.map((item) => item.title).join(" ")}`.toLowerCase().includes(query);
		}).slice(0, 30);
	}, [query]);
	const terms = query.length < 2 ? [] : glossary.filter((entry) => `${entry.term} ${entry.en} ${entry.def}`.toLowerCase().includes(query)).slice(0, 8);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl",
				children: "Tìm trong sổ"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: q,
				onChange: (event) => setQ(event.target.value),
				placeholder: "CLT, WHERE, sigmoid...",
				className: "mt-4 min-h-12 w-full rounded-full border border-line bg-card px-4 text-lg outline-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-6 space-y-3",
				children: [terms.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-card border border-line p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: entry.term
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: entry.def
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/bai/$lessonId",
							params: { lessonId: entry.lessonId },
							className: "mt-2 inline-block text-sm text-accent underline",
							children: entry.lessonTitle
						})
					]
				}, entry.term)), found.map((lesson) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/bai/$lessonId",
					params: { lessonId: lesson.id },
					className: "block rounded-card border border-line p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: lesson.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							shortCourse(lesson.courseTitle),
							" · ",
							lesson.sessionTitle
						]
					})]
				}) }, lesson.id))]
			}),
			query.length >= 2 && found.length === 0 && terms.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-muted",
				children: "Không thấy cụm này trong sổ."
			}) : null
		]
	});
}
//#endregion
export { SearchPage as component };
