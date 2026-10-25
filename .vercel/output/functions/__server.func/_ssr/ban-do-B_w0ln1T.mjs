import { o as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as Search, s as Plus, u as Minus } from "../_libs/lucide-react.mjs";
import { A as getStudy, M as studyListTitle, b as getProgress, j as studyCopy, k as subscribeProgress, x as getServerProgress } from "./router-cri9Hc1u.mjs";
import { a as relatedEdges, c as topicIndexOf, i as mapNodeIds, l as topics, n as chainEdges, o as relatedOf, r as computeLayout, s as topicCenter, t as WORLD } from "./map-DCsnToqW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ban-do-B_w0ln1T.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var text = {
	vi: {
		title: "Bản đồ kiến thức",
		lead: "Mỗi chấm là một khái niệm. Dây xám nối hai khái niệm liền nhau trong cùng chủ đề. Dây màu nối hai khái niệm liên quan, kèm lý do. Bấm một chấm để xem.",
		search: "Tìm một khái niệm",
		open: "Mở thẻ này",
		related: "Dây nối",
		none: "Khái niệm này chưa có dây nối viết tay. Xem các khái niệm liền kề trong cùng chủ đề.",
		before: "Liền trước",
		after: "Liền sau",
		loading: "Đang dựng bản đồ…",
		all: "Tất cả",
		reset: "Về giữa",
		count: (n, r) => `${n} khái niệm · ${r} dây liên quan`
	},
	en: {
		title: "Knowledge map",
		lead: "Each dot is a concept. A grey thread joins neighbours in the same topic. A coloured thread joins related concepts, with the reason. Tap a dot to see it.",
		search: "Find a concept",
		open: "Open this card",
		related: "Connections",
		none: "This concept has no hand-written connection yet. See its neighbours in the same topic.",
		before: "Just before",
		after: "Just after",
		loading: "Building the map…",
		all: "All",
		reset: "Reset view",
		count: (n, r) => `${n} concepts · ${r} related links`
	}
};
var R = 6;
function MapPage() {
	const lang = (0, import_react.useSyncExternalStore)(subscribeProgress, getProgress, getServerProgress).lang;
	const t = text[lang];
	const hash = useRouterState({ select: (s) => s.location.hash });
	const [pos, setPos] = (0, import_react.useState)(null);
	const [view, setView] = (0, import_react.useState)({
		x: 0,
		y: 0,
		k: 1
	});
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [topicOnly, setTopicOnly] = (0, import_react.useState)(null);
	const [q, setQ] = (0, import_react.useState)("");
	const svgRef = (0, import_react.useRef)(null);
	const drag = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		setPos(computeLayout());
	}, []);
	(0, import_react.useEffect)(() => {
		const id = decodeURIComponent((hash || "").replace(/^#/, ""));
		if (id && mapNodeIds.includes(id)) setSelected(id);
	}, [hash]);
	const titles = (0, import_react.useMemo)(() => {
		const m = {};
		for (const id of mapNodeIds) m[id] = studyListTitle(id, lang);
		return m;
	}, [lang]);
	const query = q.trim().toLowerCase();
	const matches = (0, import_react.useMemo)(() => {
		if (query.length < 2) return /* @__PURE__ */ new Set();
		return new Set(mapNodeIds.filter((id) => titles[id].toLowerCase().includes(query) || id.includes(query)));
	}, [query, titles]);
	const near = (0, import_react.useMemo)(() => {
		const set = /* @__PURE__ */ new Set();
		if (!selected) return set;
		set.add(selected);
		for (const r of relatedOf(selected)) set.add(r.id);
		return set;
	}, [selected]);
	function zoomAt(factor, cx = WORLD.w / 2, cy = WORLD.h / 2) {
		setView((v) => {
			const k = Math.min(5, Math.max(.5, v.k * factor));
			const f = k / v.k;
			return {
				k,
				x: cx - (cx - v.x) * f,
				y: cy - (cy - v.y) * f
			};
		});
	}
	function toWorld(clientX, clientY) {
		const el = svgRef.current;
		if (!el) return {
			x: WORLD.w / 2,
			y: WORLD.h / 2
		};
		const r = el.getBoundingClientRect();
		const scale = Math.max(WORLD.w / r.width, WORLD.h / r.height);
		return {
			x: (clientX - r.left) * scale - (r.width * scale - WORLD.w) / 2,
			y: (clientY - r.top) * scale - (r.height * scale - WORLD.h) / 2
		};
	}
	const selTopic = selected ? topicIndexOf(selected) : -1;
	const sel = selected ? getStudy(selected) : null;
	const selCopy = sel ? studyCopy(sel, lang) : null;
	const rel = selected ? relatedOf(selected) : [];
	const idx = selected ? mapNodeIds.indexOf(selected) : -1;
	const sameTopic = (i) => i >= 0 && i < mapNodeIds.length && topicIndexOf(mapNodeIds[i]) === selTopic ? mapNodeIds[i] : null;
	const prevId = idx >= 0 ? sameTopic(idx - 1) : null;
	const nextId = idx >= 0 ? sameTopic(idx + 1) : null;
	const visible = (id) => topicOnly === null || topicIndexOf(id) === topicOnly;
	const hue = (id) => topics[topicIndexOf(id)].hue;
	const dim = selected !== null || matches.size > 0;
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
				children: t.count(mapNodeIds.length, relatedEdges.length)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: q,
							onChange: (event) => setQ(event.target.value),
							onKeyDown: (event) => {
								if (event.key === "Enter" && matches.size > 0) setSelected([...matches][0]);
							},
							placeholder: t.search,
							className: "min-h-11 w-64 rounded-full border border-line bg-card pl-9 pr-4 outline-none"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: `min-h-11 rounded-full border border-line px-3 text-sm ${topicOnly === null ? "bg-ink text-paper" : ""}`,
						onClick: () => setTopicOnly(null),
						children: t.all
					}),
					topics.map((topic, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setTopicOnly(topicOnly === i ? null : i),
						className: `inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-3 text-sm ${topicOnly === i ? "bg-ink text-paper" : ""}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-block size-3 rounded-full",
							style: { background: `hsl(${topic.hue} 60% 50%)` }
						}), lang === "en" ? topic.en : topic.vi]
					}, topic.key))
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-4 lg:grid-cols-[minmax(0,1fr)_340px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden rounded-card border border-line bg-card",
					children: [pos ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						ref: svgRef,
						viewBox: `0 0 ${WORLD.w} ${WORLD.h}`,
						className: "h-[70vh] w-full touch-none select-none",
						onWheel: (event) => {
							const p = toWorld(event.clientX, event.clientY);
							zoomAt(event.deltaY < 0 ? 1.15 : 1 / 1.15, p.x, p.y);
						},
						onPointerDown: (event) => {
							drag.current = {
								x: event.clientX,
								y: event.clientY,
								vx: view.x,
								vy: view.y,
								moved: false
							};
							event.currentTarget.setPointerCapture(event.pointerId);
						},
						onPointerMove: (event) => {
							const d = drag.current;
							if (!d) return;
							const dx = event.clientX - d.x;
							const dy = event.clientY - d.y;
							if (Math.abs(dx) + Math.abs(dy) > 4) d.moved = true;
							const el = svgRef.current;
							const r = el ? el.getBoundingClientRect() : null;
							const scale = r ? Math.max(WORLD.w / r.width, WORLD.h / r.height) : 1;
							setView((v) => ({
								...v,
								x: d.vx + dx * scale,
								y: d.vy + dy * scale
							}));
						},
						onPointerUp: () => {
							const d = drag.current;
							drag.current = null;
							if (d && !d.moved) setSelected(null);
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
							transform: `translate(${view.x} ${view.y}) scale(${view.k})`,
							children: [
								topics.map((topic, i) => {
									const c = topicCenter(i);
									if (topicOnly !== null && topicOnly !== i) return null;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
										x: c.x,
										y: c.y - 70,
										textAnchor: "middle",
										className: "fill-muted",
										style: {
											fontSize: 22,
											fontWeight: 600,
											letterSpacing: 1
										},
										children: lang === "en" ? topic.en : topic.vi
									}, topic.key);
								}),
								chainEdges.map((e) => {
									if (!visible(e.a) || !visible(e.b)) return null;
									const a = pos[e.a];
									const b = pos[e.b];
									const on = selected && near.has(e.a) && near.has(e.b);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
										x1: a.x,
										y1: a.y,
										x2: b.x,
										y2: b.y,
										className: "stroke-line",
										strokeWidth: on ? 2 : 1,
										opacity: dim && !on ? .25 : .9
									}, `${e.a}-${e.b}`);
								}),
								relatedEdges.map((e) => {
									if (!visible(e.a) || !visible(e.b)) return null;
									const a = pos[e.a];
									const b = pos[e.b];
									const on = selected !== null && (e.a === selected || e.b === selected);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
										x1: a.x,
										y1: a.y,
										x2: b.x,
										y2: b.y,
										className: "stroke-accent",
										strokeWidth: on ? 3 : 1.4,
										opacity: selected !== null ? on ? 1 : .1 : .55
									}, `r-${e.a}-${e.b}`);
								}),
								mapNodeIds.map((id) => {
									if (!visible(id)) return null;
									const p = pos[id];
									const isSel = id === selected;
									const hit = matches.has(id);
									const inNear = near.has(id);
									const faded = dim && !isSel && !inNear && !hit;
									const labelled = isSel || inNear || hit;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
										transform: `translate(${p.x} ${p.y})`,
										opacity: faded ? .3 : 1,
										style: { cursor: "pointer" },
										onPointerDown: (event) => event.stopPropagation(),
										onClick: () => setSelected(id),
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
												r: isSel ? 10 : hit ? 8 : R,
												fill: `hsl(${hue(id)} 60% 50%)`,
												className: isSel ? "stroke-ink" : "stroke-card",
												strokeWidth: isSel ? 3 : 1.5
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", { children: titles[id] }),
											labelled ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
												y: -12,
												textAnchor: "middle",
												className: "fill-ink",
												style: {
													fontSize: 15,
													fontWeight: isSel ? 700 : 500,
													paintOrder: "stroke",
													stroke: "var(--card)",
													strokeWidth: 4
												},
												children: titles[id].split(":")[0].slice(0, 34)
											}) : null
										]
									}, id);
								})
							]
						})
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "p-8 text-muted",
						children: t.loading
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute right-3 top-3 flex flex-col gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "inline-flex size-11 items-center justify-center rounded-full border border-line bg-card",
								onClick: () => zoomAt(1.3),
								"aria-label": "+",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "inline-flex size-11 items-center justify-center rounded-full border border-line bg-card",
								onClick: () => zoomAt(1 / 1.3),
								"aria-label": "-",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "inline-flex min-h-11 items-center justify-center rounded-full border border-line bg-card px-3 text-xs",
								onClick: () => setView({
									x: 0,
									y: 0,
									k: 1
								}),
								children: t.reset
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "rounded-card border border-line bg-card p-4",
					children: selected && selCopy ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-widest text-muted",
							children: lang === "en" ? topics[selTopic].en : topics[selTopic].vi
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
							children: rel.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "text-left font-medium underline",
								onClick: () => setSelected(r.id),
								children: titles[r.id]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: lang === "en" ? r.en : r.vi
							})] }, r.id))
						}),
						prevId || nextId ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 space-y-2 text-sm",
							children: [prevId ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted",
								children: [t.before, ": "]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "underline",
								onClick: () => setSelected(prevId),
								children: titles[prevId]
							})] }) : null, nextId ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted",
								children: [t.after, ": "]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "underline",
								onClick: () => setSelected(nextId),
								children: titles[nextId]
							})] }) : null]
						}) : null
					] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted",
						children: t.lead
					})
				})]
			})
		]
	});
}
//#endregion
export { MapPage as component };
