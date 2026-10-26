import { o as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { O as subscribeProgress, b as getServerProgress, g as subscribeCms, m as getServerCmsVersion, p as getCmsVersion, y as getProgress } from "./router-XVPeYSV5.mjs";
import { n as Tex, t as CodeExplain } from "./tex-6jIk2Td4.mjs";
import { a as topicName, i as topicColor, n as buildFormulas, t as Filters } from "./reference-ffUN9Dr1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cong-thuc-D2hdVgv2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var text = {
	vi: {
		title: "Công thức",
		lead: "Mọi công thức trong sổ, xếp theo chủ đề và theo thứ tự học. Mỗi công thức có bảng ký hiệu, thẻ gốc để xem số liệu thật, và các khái niệm liên quan.",
		search: "Tìm công thức hoặc tên khái niệm",
		all: "Tất cả",
		symbols: "Ký hiệu",
		open: "Mở thẻ gốc",
		related: "Liên quan",
		none: "Không có công thức nào khớp."
	},
	en: {
		title: "Formulas",
		lead: "Every formula in the notebook, grouped by topic and in study order. Each has a symbol table, its source card for real numbers, and related concepts.",
		search: "Find a formula or concept",
		all: "All",
		symbols: "Symbols",
		open: "Open source card",
		related: "Related",
		none: "No formula matches."
	}
};
function FormulaPage() {
	const progress = (0, import_react.useSyncExternalStore)(subscribeProgress, getProgress, getServerProgress);
	const cms = (0, import_react.useSyncExternalStore)(subscribeCms, getCmsVersion, getServerCmsVersion);
	const lang = progress.lang;
	const t = text[lang];
	const [q, setQ] = (0, import_react.useState)("");
	const [topic, setTopic] = (0, import_react.useState)(null);
	const all = (0, import_react.useMemo)(() => buildFormulas(lang), [lang, cms]);
	const counts = (0, import_react.useMemo)(() => {
		const c = {};
		for (const f of all) c[f.topic] = (c[f.topic] ?? 0) + 1;
		return c;
	}, [all]);
	const query = q.trim().toLowerCase();
	const rows = all.filter((f) => (topic === null || f.topic === topic) && (!query || f.title.toLowerCase().includes(query) || (f.tex + (f.code ?? "")).toLowerCase().includes(query) || f.symbols.some((s) => s.meaning.toLowerCase().includes(query))));
	const groups = (0, import_react.useMemo)(() => {
		const m = /* @__PURE__ */ new Map();
		for (const r of rows) m.set(r.topic, [...m.get(r.topic) ?? [], r]);
		return [...m.entries()].sort((a, b) => a[0] - b[0]);
	}, [rows]);
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
			rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-muted",
				children: t.none
			}) : null,
			groups.map(([ti, list]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "flex items-center gap-3 font-display text-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-block size-4 rounded-full",
							style: { background: topicColor(ti) }
						}),
						topicName(ti, lang),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-normal text-muted",
							children: list.length
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-4",
					children: list.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						id: f.id,
						className: "rounded-card border border-line bg-card p-4",
						style: { borderLeft: `6px solid ${topicColor(ti)}` },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/khai-niem/$conceptId",
								params: { conceptId: f.id },
								className: "font-medium leading-snug underline",
								children: f.title
							}),
							f.code ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-widest text-muted",
									children: f.codeLang
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeExplain, {
									code: f.code,
									lang,
									hint: f.codeLang,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
										className: "mt-1 overflow-x-auto rounded-lg bg-ink/5 p-3 text-sm leading-relaxed",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: f.code })
									})
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
								tex: f.tex,
								block: true
							}),
							f.symbols.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-widest text-muted",
									children: t.symbols
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-2 space-y-1 text-sm",
									children: f.symbols.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3",
										children: [s.sym ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "shrink-0",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, { tex: s.sym })
										}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted",
											children: s.meaning
										})]
									}, i))
								})]
							}) : null,
							f.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: f.note
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex flex-wrap items-center gap-2 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/khai-niem/$conceptId",
										params: { conceptId: f.id },
										className: "inline-flex min-h-11 items-center rounded-full bg-ink px-4 text-paper",
										children: t.open
									}),
									f.related.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-muted",
										children: [t.related, ":"]
									}) : null,
									f.related.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/khai-niem/$conceptId",
										params: { conceptId: r.id },
										className: "inline-flex min-h-11 items-center rounded-full border border-line px-3",
										children: r.title.split(":")[0].slice(0, 36)
									}, r.id))
								]
							})
						]
					}, f.id))
				})]
			}, ti))
		]
	});
}
//#endregion
export { FormulaPage as component };
