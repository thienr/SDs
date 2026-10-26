import { o as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as getServerCmsVersion, M as subscribeCms, b as subscribeProgress, d as getProgress, f as getServerProgress, k as getCmsVersion } from "./router-CFi-bkjy.mjs";
import { a as topicName, i as topicColor, r as buildTerms, t as Filters } from "./reference-CEZ2lpUS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tu-dien-D7herURO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var text = {
	vi: {
		title: "Từ điển",
		lead: "Thuật ngữ và khái niệm gom từ mọi thẻ, xếp theo chủ đề. Mỗi mục ghi nghĩa ngắn và dẫn về những thẻ dùng nó. Thuật ngữ giữ tiếng Anh khi giáo trình dùng tiếng Anh.",
		search: "Tìm một thuật ngữ",
		all: "Tất cả",
		groupTopic: "Theo chủ đề",
		groupAz: "A–Z",
		seen: "Xuất hiện ở",
		lecture: "Bài giảng gốc",
		none: "Không có thuật ngữ nào khớp.",
		kind: {
			term: "Thuật ngữ",
			concept: "Khái niệm",
			legacy: "Bài giảng"
		}
	},
	en: {
		title: "Glossary",
		lead: "Terms and concepts gathered from every card, grouped by topic. Each entry has a short meaning and links to the cards that use it.",
		search: "Find a term",
		all: "All",
		groupTopic: "By topic",
		groupAz: "A–Z",
		seen: "Appears in",
		lecture: "Original lecture",
		none: "No term matches.",
		kind: {
			term: "Term",
			concept: "Concept",
			legacy: "Lecture"
		}
	}
};
function GlossaryPage() {
	const progress = (0, import_react.useSyncExternalStore)(subscribeProgress, getProgress, getServerProgress);
	const cms = (0, import_react.useSyncExternalStore)(subscribeCms, getCmsVersion, getServerCmsVersion);
	const lang = progress.lang;
	const t = text[lang];
	const [q, setQ] = (0, import_react.useState)("");
	const [topic, setTopic] = (0, import_react.useState)(null);
	const [az, setAz] = (0, import_react.useState)(false);
	const all = (0, import_react.useMemo)(() => buildTerms(lang), [lang, cms]);
	const counts = (0, import_react.useMemo)(() => {
		const c = {};
		for (const f of all) c[f.topic] = (c[f.topic] ?? 0) + 1;
		return c;
	}, [all]);
	const query = q.trim().toLowerCase();
	const rows = (0, import_react.useMemo)(() => all.filter((f) => (topic === null || f.topic === topic) && (!query || f.term.toLowerCase().includes(query) || f.def.toLowerCase().includes(query))), [
		all,
		topic,
		query
	]);
	const groups = (0, import_react.useMemo)(() => {
		const cmp = (a, b) => a.term.localeCompare(b.term, lang === "en" ? "en" : "vi");
		if (az) {
			const m = /* @__PURE__ */ new Map();
			for (const r of [...rows].sort(cmp)) {
				const L = r.term.charAt(0).toUpperCase();
				const key = /[A-ZÀ-Ỹ]/i.test(L) ? L.normalize("NFD").replace(/[̀-ͯ]/g, "").charAt(0) : "#";
				m.set(key, [...m.get(key) ?? [], r]);
			}
			return [...m.entries()].map(([k, v]) => ({
				key: k,
				label: k,
				color: "",
				list: v
			}));
		}
		const m = /* @__PURE__ */ new Map();
		for (const r of rows) m.set(r.topic, [...m.get(r.topic) ?? [], r]);
		return [...m.entries()].sort((a, b) => a[0] < 0 ? 1 : b[0] < 0 ? -1 : a[0] - b[0]).map(([ti, v]) => ({
			key: String(ti),
			label: topicName(ti, lang),
			color: topicColor(ti),
			list: [...v].sort(cmp)
		}));
	}, [
		rows,
		az,
		lang
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl",
				children: t.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "reading mt-3 text-lg leading-relaxed",
				children: t.lead
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Filters, {
				lang,
				q,
				setQ,
				topic,
				setTopic,
				counts,
				placeholder: t.search,
				allLabel: t.all
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex gap-2",
				children: [false, true].map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setAz(v),
					className: `min-h-11 rounded-full border border-line px-3 text-sm ${az === v ? "bg-ink text-paper" : ""}`,
					children: v ? t.groupAz : t.groupTopic
				}, String(v)))
			}),
			rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-muted",
				children: t.none
			}) : null,
			groups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "flex items-center gap-3 font-display text-2xl",
					children: [
						g.color ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-block size-4 rounded-full",
							style: { background: g.color }
						}) : null,
						g.label,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-normal text-muted",
							children: g.list.length
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 divide-y divide-line border-y border-line",
					children: g.list.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						id: e.key,
						className: "py-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-medium",
								children: [
									e.term,
									" ",
									e.en ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-muted",
										children: ["· ", e.en]
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-2 rounded-full border border-line px-2 py-0.5 text-xs font-normal text-muted",
										children: t.kind[e.kind]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 leading-relaxed",
								children: e.def
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 flex flex-wrap items-center gap-2 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-muted",
										children: [t.seen, ":"]
									}),
									e.sources.slice(0, 6).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/khai-niem/$conceptId",
										params: { conceptId: s.id },
										className: "inline-flex min-h-11 items-center rounded-full border border-line px-3",
										children: s.title.split(":")[0].slice(0, 40)
									}, s.id)),
									e.sources.length > 6 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-muted",
										children: ["+", e.sources.length - 6]
									}) : null,
									e.lessonId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/bai/$lessonId",
										params: { lessonId: e.lessonId },
										className: "inline-flex min-h-11 items-center rounded-full border border-line px-3",
										children: t.lecture
									}) : null
								]
							})
						]
					}, e.key))
				})]
			}, g.key))
		]
	});
}
//#endregion
export { GlossaryPage as component };
