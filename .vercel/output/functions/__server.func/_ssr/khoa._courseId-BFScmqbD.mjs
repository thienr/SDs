import { o as __toESM } from "../_runtime.mjs";
import { a as getCourse } from "./catalog-DhneT6we.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as getServerCmsVersion, B as getServerRawVersion, M as subscribeCms, W as subscribeRaw, b as subscribeProgress, d as getProgress, f as getServerProgress, k as getCmsVersion, n as Route, s as ModuleTree, w as liveCourse, z as getRawVersion } from "./router-lBoSaD0I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/khoa._courseId-BFScmqbD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CoursePage() {
	const progress = (0, import_react.useSyncExternalStore)(subscribeProgress, getProgress, getServerProgress);
	(0, import_react.useSyncExternalStore)(subscribeRaw, getRawVersion, getServerRawVersion);
	(0, import_react.useSyncExternalStore)(subscribeCms, getCmsVersion, getServerCmsVersion);
	const lang = progress.lang;
	const { courseId } = Route.useParams();
	const hash = useRouterState({ select: (state) => state.location.hash.replace(/^#/, "") });
	const course = getCourse(courseId);
	const openIds = [];
	if (course && hash.startsWith("mod-")) openIds.push(`m:${hash.slice(4)}`);
	if (course && hash.startsWith("ses-")) {
		const sid = hash.slice(4);
		const mod = course.modules.find((m) => m.sessions.some((x) => x.id === sid));
		if (mod) openIds.push(`m:${mod.id}`, `s:${sid}`);
	}
	(0, import_react.useEffect)(() => {
		if (hash) document.getElementById(hash)?.scrollIntoView({ block: "start" });
	}, [hash]);
	if (!course) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: lang === "en" ? "This course is missing." : "Không thấy khóa này." });
	const head = liveCourse(course.id, lang);
	const opener = lang === "en" ? {
		course: "Course opener",
		part: "Part opener",
		contents: "Contents",
		why: "What you use it for",
		prior: "How it links",
		ideas: "The ideas",
		learn: "Open"
	} : {
		course: "Đầu khóa",
		part: "Đầu phần",
		contents: "Mục lục",
		why: "Biết để làm gì",
		prior: "Nối với cái trước",
		ideas: "Các ý",
		learn: "Học"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-widest text-muted",
				children: opener.course
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl leading-tight",
				children: course.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-lg leading-relaxed",
				children: head.plain
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-4 rounded-card border border-line bg-card p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs tracking-widest text-accent",
					children: opener.why
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 leading-relaxed",
					children: head.why
				})]
			}),
			head.prior ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 leading-relaxed",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-xs tracking-widest text-muted",
					children: [opener.prior, ". "]
				}), head.prior]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/goc",
				hash: `course:${course.id}`,
				className: "mt-3 inline-block text-sm text-accent underline",
				children: lang === "en" ? "Edit this opener" : "Sửa đầu khóa"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-8 text-xs tracking-widest text-muted",
				children: opener.contents
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModuleTree, {
					course,
					lang,
					openIds
				}, hash)
			})
		]
	});
}
//#endregion
export { CoursePage as component };
