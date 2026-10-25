import { o as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Route$3, b as getProgress, k as subscribeProgress, x as getServerProgress } from "./router-cri9Hc1u.mjs";
import { n as getAssignment } from "./assign-ljutj6N2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bai-tap._id-Ck0GMb4O.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var text = {
	vi: {
		starter: "Starter, giữ nguyên",
		guide: "Hướng dẫn đi kèm",
		think: "Nghĩ trước khi gõ",
		steps: "Các bước",
		code: "Khung code gợi ý",
		lotus: "Ở Lotus Spa",
		trap: "Dễ sai ở đâu",
		rule: "Starter không bị đổi nội dung hay thứ tự. Khung bên dưới mỗi mục chỉ là phần đi kèm, nên mở lại file bài tập cũ vẫn khớp từng ô.",
		show: "Mở hướng dẫn",
		hide: "Gập hướng dẫn",
		map: "Mục lục bài"
	},
	en: {
		starter: "Starter, unchanged",
		guide: "Companion guide",
		think: "Think before typing",
		steps: "Steps",
		code: "Suggested code skeleton",
		lotus: "At Lotus Spa",
		trap: "Where it goes wrong",
		rule: "The starter is never changed in content or order. The box under each task is only a companion, so reopening an old assignment file still matches cell by cell.",
		show: "Open guide",
		hide: "Fold guide",
		map: "Contents"
	}
};
function inline(s) {
	return s.replace(/<br\s*\/?>/g, " ").replace(/<\/?font[^>]*>/g, "").replace(/<\/?(?:u|i|b)>/g, "").split(/(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g).map((p, i) => {
		if (p.startsWith("**") && p.endsWith("**")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: p.slice(2, -2) }, i);
		if (p.startsWith("`") && p.endsWith("`")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
			className: "rounded bg-paper px-1 text-[0.9em]",
			children: p.slice(1, -1)
		}, i);
		const m = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(p);
		if (m) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: m[2],
			target: "_blank",
			rel: "noreferrer",
			className: "text-accent underline",
			children: m[1]
		}, i);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: p }, i);
	});
}
function Md({ src }) {
	const lines = src.split("\n");
	const out = [];
	let i = 0;
	let k = 0;
	while (i < lines.length) {
		const line = lines[i];
		if (!line.trim()) {
			i++;
			continue;
		}
		if (/^\s*```/.test(line)) {
			const buf = [];
			i++;
			while (i < lines.length && !/^\s*```/.test(lines[i])) buf.push(lines[i++]);
			i++;
			out.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
				className: "my-2 overflow-x-auto rounded-xl bg-paper p-3 text-sm",
				children: buf.join("\n")
			}, k++));
			continue;
		}
		if (/^\s*\|/.test(line)) {
			const rows = [];
			while (i < lines.length && /^\s*\|/.test(lines[i])) {
				if (!/^\s*\|[\s:|-]+\|?\s*$/.test(lines[i])) rows.push(lines[i].trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim()));
				i++;
			}
			out.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "my-2 overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full border-collapse text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: rows[0].map((c, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "border border-line px-2 py-1 text-left",
						children: inline(c)
					}, j)) }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.slice(1).map((r, a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: r.map((c, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "border border-line px-2 py-1 align-top",
						children: inline(c)
					}, j)) }, a)) })]
				})
			}, k++));
			continue;
		}
		const h = /^(#{1,6})\s+(.*)$/.exec(line);
		if (h) {
			const lvl = h[1].length;
			const cls = lvl <= 2 ? "mt-6 font-display text-2xl" : lvl === 3 ? "mt-4 text-lg font-medium" : "mt-3 font-medium";
			out.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cls,
				children: inline(h[2])
			}, k++));
			i++;
			continue;
		}
		if (/^\s*([-*>]|\d+\.)\s+/.test(line)) {
			const items = [];
			while (i < lines.length && /^\s*([-*>]|\d+\.)\s+/.test(lines[i])) items.push(lines[i++].replace(/^\s*([-*>]|\d+\.)\s+/, ""));
			out.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "my-2 list-disc space-y-1 pl-6",
				children: items.map((t, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: inline(t) }, j))
			}, k++));
			continue;
		}
		if (/^\s*---+\s*$/.test(line)) {
			out.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "my-4 border-line" }, k++));
			i++;
			continue;
		}
		const para = [];
		while (i < lines.length && lines[i].trim() && !/^(\s*\||#{1,6}\s|\s*```|\s*([-*>]|\d+\.)\s)/.test(lines[i])) para.push(lines[i++]);
		out.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "my-2 leading-relaxed",
			children: inline(para.join(" "))
		}, k++));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: out });
}
function GuideBox({ g, t }) {
	const [open, setOpen] = (0, import_react.useState)(true);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "my-3 rounded-card border border-line bg-card p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-xs uppercase tracking-widest text-accent",
				children: t.guide
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "min-h-11 rounded-full border border-line px-4 text-sm",
				onClick: () => setOpen((v) => !v),
				children: open ? t.hide : t.show
			})]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-sm font-medium",
					children: t.think
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 leading-relaxed",
					children: g.think
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "mt-4 text-sm font-medium",
					children: t.steps
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-2 space-y-2",
					children: g.steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-xl leading-none text-accent",
							children: i + 1
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "leading-relaxed",
							children: s
						})]
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "mt-4 text-sm font-medium",
					children: t.code
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
					className: "mt-1 overflow-x-auto rounded-xl bg-paper p-3 text-sm",
					children: g.code
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 rounded-xl border-l-4 border-accent bg-paper p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-widest text-muted",
						children: t.lotus
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 leading-relaxed",
						children: g.lotus
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 leading-relaxed",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-medium",
						children: [t.trap, ": "]
					}), g.trap]
				})
			]
		}) : null]
	});
}
function CellView({ c, t }) {
	if (c.t === "code") {
		if (!c.s.trim()) return null;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
			className: "my-2 overflow-x-auto rounded-xl border border-line bg-paper p-3 text-sm",
			"aria-label": t.starter,
			children: c.s
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "my-1",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Md, { src: c.s })
	});
}
function AssignView({ a }) {
	const lang = (0, import_react.useSyncExternalStore)(subscribeProgress, getProgress, getServerProgress).lang;
	const t = text[lang];
	const refs = a.cells.filter((c) => c.ref).map((c) => c.ref);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs tracking-widest text-muted",
				children: [
					a.course,
					" · ",
					a.file
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl leading-tight",
				children: a.title[lang === "en" ? 1 : 0]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 rounded-xl border-l-4 border-accent bg-card p-3 leading-relaxed",
				children: a.story[lang === "en" ? 1 : 0]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: t.rule
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
				className: "mt-4 rounded-card border border-line p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
					className: "min-h-11 cursor-pointer text-sm font-medium",
					children: [
						t.map,
						" (",
						refs.length,
						")"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 flex flex-wrap gap-2",
					children: refs.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#t-${r}`,
						className: "min-h-11 rounded-full border border-line px-3 py-2 text-sm",
						children: r
					}, r))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: a.cells.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [
					c.ref ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { id: `t-${c.ref}` }) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CellView, {
						c,
						t
					}),
					c.ref && a.guides[c.ref] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GuideBox, {
						g: a.guides[c.ref][lang],
						t
					}) : null
				] }, i))
			})
		]
	});
}
function AssignPage() {
	const { id } = Route$3.useParams();
	const a = getAssignment(id);
	if (!a) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "reading mx-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl",
			children: "Không thấy bài tập này"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/bai-tap",
			className: "mt-4 inline-block underline",
			children: "Về danh sách bài tập"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssignView, { a });
}
//#endregion
export { AssignPage as component };
