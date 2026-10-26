import { o as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as ArrowLeft, o as Search } from "../_libs/lucide-react.mjs";
import { F as studyListTitle, N as getStudy, P as studyCopy, b as subscribeProgress, d as getProgress, f as getServerProgress } from "./router-BTZ8sCam.mjs";
import { a as topicIndexOf, i as topicConcepts, n as relatedEdges, o as topics, r as relatedOf, t as mapNodeIds } from "./map-BBERLkZx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ban-do-CH54XGAx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var text = {
	vi: {
		title: "Sơ đồ tư duy",
		lead: "Bắt đầu từ các nhánh lớn. Bấm một nhánh để xem các khái niệm của nó theo đúng thứ tự học, rồi bấm một khái niệm để xem tóm tắt và những khái niệm liên quan.",
		root: "Khoa học dữ liệu",
		search: "Tìm một khái niệm",
		open: "Mở thẻ này",
		related: "Liên kết khái niệm",
		none: "Khái niệm này chưa có liên kết viết tay. Hãy xem các khái niệm liền kề trong cùng nhánh.",
		back: "Tất cả các nhánh",
		count: (n) => `${n} khái niệm`,
		total: (n, r) => `${n} khái niệm · ${r} liên kết`,
		hits: "Kết quả tìm",
		pick: "Chọn một khái niệm để xem tóm tắt.",
		order: "Thứ tự học"
	},
	en: {
		title: "Mind map",
		lead: "Start from the big branches. Tap a branch to see its concepts in study order, then tap a concept for a summary and its related concepts.",
		root: "Data science",
		search: "Find a concept",
		open: "Open this card",
		related: "Linked concepts",
		none: "This concept has no hand-written link yet. See its neighbours in the same branch.",
		back: "All branches",
		count: (n) => `${n} concepts`,
		total: (n, r) => `${n} concepts · ${r} links`,
		hits: "Search results",
		pick: "Pick a concept to see its summary.",
		order: "Study order"
	}
};
var col = (hue, l = 50) => `hsl(${hue} 60% ${l}%)`;
function Radial({ lang, onPick, counts }) {
	const t = text[lang];
	const half = Math.ceil(topics.length / 2);
	const W = 1e3;
	const H = 640;
	const cx = W / 2;
	const cy = H / 2;
	const pillW = 300;
	const pillH = 46;
	const pos = (i) => {
		const left = i < half;
		const n = left ? half : topics.length - half;
		const y = 50 + (left ? i : i - half) * 540 / Math.max(1, n - 1);
		return {
			left,
			x: left ? 165 : 835,
			y
		};
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: `0 0 ${W} ${H}`,
		className: "w-full",
		role: "img",
		"aria-label": t.title,
		children: [
			topics.map((topic, i) => {
				const p = pos(i);
				const sx = p.left ? 395 : 605;
				const ex = p.left ? p.x + pillW / 2 : p.x - pillW / 2;
				const mx = (sx + ex) / 2;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: `M ${sx} ${cy} C ${mx} ${cy}, ${mx} ${p.y}, ${ex} ${p.y}`,
					fill: "none",
					stroke: col(topic.hue),
					strokeWidth: 3,
					opacity: .75
				}, `b${topic.key}`);
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx,
				cy,
				rx: 110,
				ry: 48,
				className: "fill-ink"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: cx,
				y: 326,
				textAnchor: "middle",
				className: "fill-paper",
				style: {
					fontSize: 20,
					fontWeight: 700
				},
				children: t.root
			}),
			topics.map((topic, i) => {
				const p = pos(i);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					transform: `translate(${p.x - pillW / 2} ${p.y - pillH / 2})`,
					style: { cursor: "pointer" },
					onClick: () => onPick(i),
					role: "button",
					tabIndex: 0,
					onKeyDown: (e) => (e.key === "Enter" || e.key === " ") && onPick(i),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							width: pillW,
							height: pillH,
							rx: pillH / 2,
							className: "fill-card",
							stroke: col(topic.hue),
							strokeWidth: 2.5
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: 24,
							cy: pillH / 2,
							r: 9,
							fill: col(topic.hue)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: 42,
							y: pillH / 2 - 2,
							className: "fill-ink",
							style: {
								fontSize: 16,
								fontWeight: 600
							},
							children: (lang === "en" ? topic.en : topic.vi).slice(0, 40)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: 42,
							y: 37,
							className: "fill-muted",
							style: { fontSize: 12 },
							children: t.count(counts[i])
						})
					]
				}, topic.key);
			})
		]
	});
}
function MapPage() {
	const lang = (0, import_react.useSyncExternalStore)(subscribeProgress, getProgress, getServerProgress).lang;
	const t = text[lang];
	const hash = useRouterState({ select: (s) => s.location.hash });
	const [topic, setTopic] = (0, import_react.useState)(null);
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [q, setQ] = (0, import_react.useState)("");
	const aside = (0, import_react.useRef)(null);
	const counts = (0, import_react.useMemo)(() => topics.map((_, i) => topicConcepts(i).length), []);
	const titles = (0, import_react.useMemo)(() => {
		const m = {};
		for (const id of mapNodeIds) m[id] = studyListTitle(id, lang);
		return m;
	}, [lang]);
	(0, import_react.useEffect)(() => {
		const id = decodeURIComponent((hash || "").replace(/^#/, ""));
		if (id && mapNodeIds.includes(id)) {
			setTopic(topicIndexOf(id));
			setSelected(id);
		}
	}, [hash]);
	function pick(id) {
		setTopic(topicIndexOf(id));
		setSelected(id);
		if (typeof window !== "undefined" && window.matchMedia("(max-width: 1023px)").matches) window.setTimeout(() => aside.current?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		}), 50);
	}
	const query = q.trim().toLowerCase();
	const hits = (0, import_react.useMemo)(() => query.length < 2 ? [] : mapNodeIds.filter((id) => titles[id].toLowerCase().includes(query) || id.includes(query)).slice(0, 12), [query, titles]);
	const list = topic === null ? [] : topicConcepts(topic);
	const sel = selected ? getStudy(selected) : null;
	const selCopy = sel ? studyCopy(sel, lang) : null;
	const rel = selected ? relatedOf(selected) : [];
	const relSet = new Set(rel.map((r) => r.id));
	const hue = topic === null ? 200 : topics[topic].hue;
	const topicName = (i) => lang === "en" ? topics[i].en : topics[i].vi;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl",
				children: t.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "reading mt-3 max-w-3xl text-lg leading-relaxed",
				children: t.lead
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: t.total(mapNodeIds.length, relatedEdges.length)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-4 max-w-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: q,
					onChange: (e) => setQ(e.target.value),
					onKeyDown: (e) => e.key === "Enter" && hits[0] && (pick(hits[0]), setQ("")),
					placeholder: t.search,
					className: "min-h-11 w-full rounded-full border border-line bg-card pl-9 pr-4 outline-none"
				})]
			}),
			hits.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 rounded-card border border-line bg-card p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-widest text-muted",
					children: t.hits
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 space-y-1",
					children: hits.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "inline-flex min-h-11 items-center gap-2 text-left",
						onClick: () => {
							pick(id);
							setQ("");
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-block size-3 shrink-0 rounded-full",
								style: { background: col(topics[topicIndexOf(id)].hue) }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "underline",
								children: titles[id]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-muted",
								children: ["· ", topicName(topicIndexOf(id))]
							})
						]
					}) }, id))
				})]
			}) : null,
			topic === null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 hidden rounded-card border border-line bg-card p-3 md:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radial, {
					lang,
					onPick: (i) => setTopic(i),
					counts
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 grid gap-2 sm:grid-cols-2 md:hidden",
				children: topics.map((tp, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setTopic(i),
					className: "flex min-h-14 w-full items-center gap-3 rounded-card border border-line bg-card p-3 text-left",
					style: { borderLeft: `6px solid ${col(tp.hue)}` },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex-1 font-medium",
						children: topicName(i)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted",
						children: t.count(counts[i])
					})]
				}) }, tp.key))
			})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-4 lg:grid-cols-[minmax(0,1fr)_360px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-card border border-line bg-card p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => {
								setTopic(null);
								setSelected(null);
							},
							className: "inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-3 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }),
								" ",
								t.back
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-block size-5 rounded-full",
								style: { background: col(hue) }
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl",
								children: topicName(topic)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-muted",
							children: [
								t.order,
								" · ",
								t.count(list.length)
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-4 ml-2",
							style: { borderLeft: `4px solid ${col(hue)}` },
							children: list.map((id, n) => {
								const on = id === selected;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "relative pl-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute left-0 top-1/2 h-1 w-4 -translate-y-1/2 rounded",
										style: { background: col(hue) }
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setSelected(id),
										className: `my-1 flex min-h-11 w-full items-center gap-3 rounded-xl border px-3 py-2 text-left ${on ? "border-ink bg-paper font-semibold" : relSet.has(id) ? "border-accent bg-paper" : "border-line"}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "w-6 shrink-0 text-sm text-muted",
												children: n + 1
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "flex-1 leading-snug",
												children: titles[id]
											}),
											relSet.has(id) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs text-accent",
												children: "↔"
											}) : null
										]
									})]
								}, id);
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					ref: aside,
					className: "h-fit rounded-card border border-line bg-card p-4 lg:sticky lg:top-4",
					children: selected && selCopy ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-widest text-muted",
							children: topicName(topicIndexOf(selected))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-2xl leading-snug",
							children: selCopy.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 border-l-4 border-accent pl-3 leading-relaxed",
							children: selCopy.insight
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/khai-niem/$conceptId",
							params: { conceptId: selected },
							className: "mt-4 inline-flex min-h-11 items-center rounded-full bg-ink px-4 text-sm text-paper",
							children: t.open
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-6 text-xs uppercase tracking-widest text-muted",
							children: t.related
						}),
						rel.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: t.none
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 space-y-3",
							children: rel.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "text-left font-medium underline",
									onClick: () => pick(r.id),
									children: titles[r.id]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 text-xs text-muted",
									children: topicName(topicIndexOf(r.id))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: lang === "en" ? r.en : r.vi
								})
							] }, r.id))
						})
					] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted",
						children: t.pick
					})
				})]
			})
		]
	});
}
//#endregion
export { MapPage as component };
