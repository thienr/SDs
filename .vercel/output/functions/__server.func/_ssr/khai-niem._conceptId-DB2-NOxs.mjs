import { o as __toESM } from "../_runtime.mjs";
import { n as course_default } from "./catalog-DhneT6we.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as getServerRawVersion, F as studyListTitle, G as overviews, I as studyNeighbors, K as getAssignmentByConcept, N as getStudy, P as studyCopy, W as subscribeRaw, b as subscribeProgress, d as getProgress, f as getServerProgress, r as Route$1, z as getRawVersion } from "./router-BzjXYyt2.mjs";
import { n as Tex, t as CodeExplain } from "./tex-CS8_Tn4y.mjs";
import { n as Range, r as Sim, t as Lab } from "./labs-BHsBDE2J.mjs";
import { r as relatedOf } from "./map-COIyOqwS.mjs";
import { t as walks } from "./walk-BWyJOgjD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/khai-niem._conceptId-DB2-NOxs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ui = {
	vi: {
		step: "Bước",
		of: "trên",
		prev: "Lùi",
		next: "Bước kế",
		again: "Chạy lại",
		auto: "Tự chạy",
		stop: "Dừng",
		legend: "Màu",
		focus: "đang nói tới",
		gone: "bị loại hoặc gộp",
		fresh: "mới xuất hiện",
		bad: "sai hoặc bị từ chối",
		empty: "trống (NULL)"
	},
	en: {
		step: "Step",
		of: "of",
		prev: "Back",
		next: "Next step",
		again: "Run again",
		auto: "Autoplay",
		stop: "Stop",
		legend: "Colors",
		focus: "in focus",
		gone: "dropped or merged",
		fresh: "new",
		bad: "wrong or rejected",
		empty: "empty (NULL)"
	}
};
function show(v) {
	if (v === null) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "italic text-muted",
		children: "NULL"
	});
	return String(v);
}
function Grid({ t }) {
	const m = t.m ?? {};
	const cellClass = (r, c) => {
		const classes = ["border border-line px-2 py-1 text-sm whitespace-nowrap"];
		if (m.cells?.some(([rr, cc]) => rr === r && cc === c)) return classes.concat("bg-[#f0c14a] text-[#14110e] font-semibold").join(" ");
		if (m.dim?.includes(r)) classes.push("opacity-35 line-through");
		if (m.bad?.includes(r)) classes.push("bg-[#b5461f]/30");
		else if (m.add?.includes(r) || m.addCols?.includes(c)) classes.push("bg-good/25");
		else if (m.rows?.includes(r) || m.cols?.includes(c)) classes.push("bg-[#f0c14a]/35");
		return classes.join(" ");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0",
		children: [t.name ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-1 font-mono text-xs text-muted",
			children: t.name
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto rounded-card border border-line bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full border-collapse",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: t.c.map((name, c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: `border border-line bg-paper px-2 py-1 text-left font-mono text-xs font-semibold ${m.addCols?.includes(c) ? "bg-good/25" : ""} ${m.cols?.includes(c) ? "bg-[#f0c14a]/50" : ""}`,
					children: name
				}, name + c)) }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: t.r.map((row, r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: row.map((v, c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: cellClass(r, c),
					children: show(v)
				}, c)) }, r)) })]
			})
		})]
	});
}
function DataDemo({ demo, lang }) {
	const t = ui[lang];
	const [i, setI] = (0, import_react.useState)(0);
	const [auto, setAuto] = (0, import_react.useState)(false);
	const last = demo.length - 1;
	const step = demo[Math.min(i, last)];
	(0, import_react.useEffect)(() => {
		setI(0);
		setAuto(false);
	}, [demo]);
	(0, import_react.useEffect)(() => {
		if (!auto) return;
		const id = window.setInterval(() => {
			setI((v) => {
				if (v >= last) {
					setAuto(false);
					return v;
				}
				return v + 1;
			});
		}, 3200);
		return () => window.clearInterval(id);
	}, [auto, last]);
	const btn = "inline-flex min-h-11 items-center rounded-full border border-line bg-card px-4 text-sm disabled:opacity-40";
	const used = /* @__PURE__ */ new Set();
	step.t.forEach((tb) => {
		const m = tb.m;
		if (!m) return;
		if (m.rows || m.cols || m.cells) used.add("focus");
		if (m.dim) used.add("gone");
		if (m.add || m.addCols) used.add("fresh");
		if (m.bad) used.add("bad");
		if (tb.r.some((row) => row.includes(null))) used.add("empty");
	});
	const sw = {
		focus: "bg-[#f0c14a]",
		gone: "bg-line",
		fresh: "bg-good/60",
		bad: "bg-[#b5461f]/60",
		empty: "border border-line bg-card"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-card border border-line bg-paper p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs uppercase tracking-widest text-accent",
					children: [
						t.step,
						" ",
						Math.min(i, last) + 1,
						" ",
						t.of,
						" ",
						demo.length
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-1",
					"aria-hidden": true,
					children: demo.map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-2 w-6 rounded-full ${k <= i ? "bg-accent" : "bg-line"}` }, k))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-base leading-snug",
				children: lang === "en" ? step.en : step.vi
			}),
			step.code ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeExplain, {
				code: step.code,
				lang,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
					className: "mt-3 overflow-x-auto rounded-card bg-[#14110e] px-3 py-2 font-mono text-sm leading-relaxed text-[#f4efe6]",
					children: step.code
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `mt-3 grid gap-3 ${step.t.length > 1 ? "md:grid-cols-2" : ""}`,
				children: step.t.map((tb, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grid, { t: tb }, k))
			}),
			used.size > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [t.legend, ":"] }), [...used].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `inline-block size-3 rounded-sm ${sw[k]}` }), t[k]]
				}, k))]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: btn,
						disabled: i === 0,
						onClick: () => setI(Math.max(0, i - 1)),
						children: t.prev
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: `${btn} bg-ink text-paper`,
						disabled: i >= last,
						onClick: () => setI(Math.min(last, i + 1)),
						children: t.next
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: btn,
						onClick: () => i >= last ? (setI(0), setAuto(true)) : setAuto(!auto),
						children: auto ? t.stop : i >= last ? t.again : t.auto
					})
				]
			})
		]
	});
}
var COLOR = {
	ink: "var(--ink)",
	mute: "var(--muted)",
	accent: "var(--accent)",
	gold: "hsl(42 88% 52%)",
	green: "hsl(150 48% 38%)",
	blue: "hsl(210 62% 50%)",
	red: "hsl(2 68% 52%)",
	soft: "color-mix(in srgb, var(--ink) 7%, var(--card))",
	card: "var(--card)",
	none: "transparent"
};
var NUM = [
	"x",
	"y",
	"w",
	"h",
	"r",
	"x2",
	"y2",
	"o",
	"s"
];
var DEFAULT = {
	x: 0,
	y: 0,
	w: 0,
	h: 0,
	r: 0,
	x2: 0,
	y2: 0,
	o: 1,
	s: 3.4
};
function ease(u) {
	return u < .5 ? 2 * u * u : 1 - Math.pow(-2 * u + 2, 2) / 2;
}
function mix(from, to, u) {
	const base = to ?? from;
	if (!base) return null;
	const out = { ...base };
	const a = from ?? {
		...base,
		o: 0
	};
	const b = to ?? {
		...base,
		o: 0
	};
	for (const k of NUM) {
		const av = a[k] ?? DEFAULT[k];
		out[k] = av + ((b[k] ?? DEFAULT[k]) - av) * u;
	}
	if (!from) out.o = (to?.o ?? 1) * u;
	if (!to) out.o = (from?.o ?? 1) * (1 - u);
	out.t = u < .5 && from?.t !== void 0 ? from.t : base.t;
	return out;
}
function lines(t, size, width) {
	const parts = t.split("\n");
	const longest = Math.max(...parts.map((p) => p.length), 1);
	const fit = width > 0 ? Math.min(size, width * .92 / (longest * .54)) : size;
	return {
		parts,
		size: Math.max(2.3, fit)
	};
}
function Shape({ a }) {
	const o = a.o ?? 1;
	const stroke = COLOR[a.c ?? "ink"];
	const tr = { transition: "fill .4s, stroke .4s" };
	if (a.k === "box") {
		const w = a.w ?? 20;
		const h = a.h ?? 8;
		const { parts, size } = lines(a.t ?? "", a.s ?? 3.4, w);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			opacity: o,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: a.x - w / 2,
				y: a.y - h / 2,
				width: w,
				height: h,
				rx: 1.6,
				fill: COLOR[a.f ?? "soft"],
				stroke,
				strokeWidth: a.c ? .45 : .25,
				strokeDasharray: a.d ? "1.4 1" : void 0,
				style: tr
			}), parts.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: a.x,
				y: a.y + (i - (parts.length - 1) / 2) * size * 1.18 + size * .36,
				textAnchor: "middle",
				fontSize: size,
				fill: a.f && a.f !== "soft" && a.f !== "card" && a.f !== "none" && a.f !== "gold" ? "#fff" : "var(--ink)",
				stroke: "none",
				style: { fontWeight: 500 },
				children: p
			}, i))]
		});
	}
	if (a.k === "dot") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
		cx: a.x,
		cy: a.y,
		r: Math.max(0, a.r ?? 1.2),
		fill: COLOR[a.c ?? "ink"],
		opacity: o,
		style: tr
	});
	if (a.k === "ring") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
		cx: a.x,
		cy: a.y,
		r: Math.max(0, a.r ?? 4),
		fill: "none",
		stroke,
		strokeWidth: .5,
		strokeDasharray: a.d ? "1.4 1" : void 0,
		opacity: o,
		style: tr
	});
	if (a.k === "bar") {
		const w = a.w ?? 5;
		const h = Math.max(0, a.h ?? 10);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			opacity: o,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: a.x - w / 2,
				y: a.y - h,
				width: w,
				height: h,
				rx: .6,
				fill: COLOR[a.c ?? "accent"],
				style: tr
			}), a.t ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: a.x,
				y: a.y - h - 1.2,
				textAnchor: "middle",
				fontSize: a.s ?? 2.8,
				fill: COLOR.ink,
				style: { fontWeight: 600 },
				children: a.t
			}) : null]
		});
	}
	if (a.k === "line" || a.k === "arrow") {
		const x2 = a.x2 ?? a.x;
		const y2 = a.y2 ?? a.y;
		const dx = x2 - a.x;
		const dy = y2 - a.y;
		const len = Math.hypot(dx, dy) || 1;
		const ux = dx / len;
		const uy = dy / len;
		const hs = 1.8;
		const head = a.k === "arrow" && len > 2.5;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			opacity: o,
			style: tr,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: a.x,
					y1: a.y,
					x2: head ? x2 - ux * hs * .8 : x2,
					y2: head ? y2 - uy * hs * .8 : y2,
					stroke,
					strokeWidth: a.w && a.w > 0 ? a.w : .6,
					strokeDasharray: a.d ? "1.6 1.2" : void 0,
					strokeLinecap: "round",
					style: tr
				}),
				head ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
					points: `${x2},${y2} ${x2 - ux * hs - uy * hs * .55},${y2 - uy * hs + ux * hs * .55} ${x2 - ux * hs + uy * hs * .55},${y2 - uy * hs - ux * hs * .55}`,
					fill: stroke,
					style: tr
				}) : null,
				a.t ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: (a.x + x2) / 2,
					y: (a.y + y2) / 2 - 1.2,
					textAnchor: "middle",
					fontSize: a.s ?? 2.8,
					fill: stroke,
					children: a.t
				}) : null
			]
		});
	}
	const { parts, size } = lines(a.t ?? "", a.s ?? 3.4, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
		x: a.x,
		y: a.y,
		textAnchor: a.a ?? "middle",
		fontSize: size,
		fill: COLOR[a.c ?? "ink"],
		opacity: o,
		style: {
			fontWeight: 500,
			transition: "fill .4s"
		},
		children: parts.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tspan", {
			x: a.x,
			dy: i === 0 ? 0 : size * 1.2,
			children: p
		}, i))
	});
}
var T$1 = {
	vi: {
		step: "Bước",
		of: "trên",
		play: "Chạy",
		pause: "Dừng",
		replay: "Chạy lại",
		next: "Bước kế",
		back: "Lùi"
	},
	en: {
		step: "Step",
		of: "of",
		play: "Play",
		pause: "Pause",
		replay: "Replay",
		next: "Next",
		back: "Back"
	}
};
function MotionPlayer({ motion, lang }) {
	const t = T$1[lang];
	const n = motion.frames.length;
	const [i, setI] = (0, import_react.useState)(0);
	const [auto, setAuto] = (0, import_react.useState)(false);
	const [shown, setShown] = (0, import_react.useState)(motion.frames[0].a);
	const prev = (0, import_react.useRef)(motion.frames[0].a);
	const raf = (0, import_react.useRef)(0);
	const box = (0, import_react.useRef)(null);
	const reduce = (0, import_react.useMemo)(() => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, []);
	(0, import_react.useEffect)(() => {
		const target = motion.frames[i].a;
		const from = prev.current;
		if (reduce) {
			setShown(target);
			prev.current = target;
			return;
		}
		const start = performance.now();
		const dur = 750;
		const fm = new Map(from.map((a) => [a.id, a]));
		const tm = new Map(target.map((a) => [a.id, a]));
		const ids = [.../* @__PURE__ */ new Set([...from.map((a) => a.id), ...target.map((a) => a.id)])];
		cancelAnimationFrame(raf.current);
		const tick = (now) => {
			const u = Math.min(1, (now - start) / dur);
			const e = ease(u);
			const out = [];
			for (const id of ids) {
				const m = mix(fm.get(id), tm.get(id), e);
				if (m && (m.o ?? 1) > .01) out.push(m);
			}
			setShown(out);
			if (u < 1) raf.current = requestAnimationFrame(tick);
			else prev.current = target;
		};
		raf.current = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf.current);
	}, [
		i,
		motion,
		reduce
	]);
	(0, import_react.useEffect)(() => {
		const el = box.current;
		if (!el || reduce || typeof IntersectionObserver === "undefined") return;
		const io = new IntersectionObserver((e) => {
			if (e[0]?.isIntersecting) {
				setAuto(true);
				io.disconnect();
			}
		}, { threshold: .6 });
		io.observe(el);
		return () => io.disconnect();
	}, [reduce]);
	(0, import_react.useEffect)(() => {
		if (!auto) return;
		if (i >= n - 1) {
			setAuto(false);
			return;
		}
		const id = window.setTimeout(() => setI((v) => Math.min(n - 1, v + 1)), 4200);
		return () => window.clearTimeout(id);
	}, [
		auto,
		i,
		n
	]);
	const frame = motion.frames[i];
	const h = motion.h ?? 60;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: box,
		className: "rounded-card border border-line bg-card p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				viewBox: `0 0 100 ${h}`,
				className: "block w-full",
				role: "img",
				"aria-label": lang === "en" ? frame.en : frame.vi,
				children: shown.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shape, { a }, a.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 min-h-[3.6rem] text-lg leading-relaxed",
				"aria-live": "polite",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "mr-2 text-xs uppercase tracking-widest text-accent",
					children: [
						t.step,
						" ",
						i + 1,
						" ",
						t.of,
						" ",
						n
					]
				}), lang === "en" ? frame.en : frame.vi]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex flex-wrap items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-11 rounded-full border border-line px-4 text-sm disabled:opacity-40",
						disabled: i === 0,
						onClick: () => {
							setAuto(false);
							setI(i - 1);
						},
						children: t.back
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-11 rounded-full bg-ink px-4 text-sm text-paper disabled:opacity-40",
						disabled: i >= n - 1,
						onClick: () => {
							setAuto(false);
							setI(i + 1);
						},
						children: t.next
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-11 rounded-full border border-line px-4 text-sm",
						onClick: () => {
							if (i >= n - 1) {
								setI(0);
								setAuto(true);
							} else setAuto((v) => !v);
						},
						children: i >= n - 1 ? t.replay : auto ? t.pause : t.play
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-auto flex gap-1.5",
						"aria-hidden": true,
						children: motion.frames.map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-2 rounded-full transition-all ${k === i ? "w-5 bg-accent" : "w-2 bg-line"}` }, k))
					})
				]
			})
		]
	});
}
var box = (id, x, y, w, h, t, o = {}) => ({
	id,
	k: "box",
	x,
	y,
	w,
	h,
	t,
	...o
});
var dot = (id, x, y, c = "ink", r = 1.3, o = {}) => ({
	id,
	k: "dot",
	x,
	y,
	r,
	c,
	...o
});
var ring = (id, x, y, r, c = "accent", o = {}) => ({
	id,
	k: "ring",
	x,
	y,
	r,
	c,
	...o
});
var bar = (id, x, base, h, c = "accent", w = 5, t, o = {}) => ({
	id,
	k: "bar",
	x,
	y: base,
	w,
	h,
	c,
	t,
	...o
});
var txt = (id, x, y, t, o = {}) => ({
	id,
	k: "text",
	x,
	y,
	t,
	c: "ink",
	...o
});
var ln = (id, x, y, x2, y2, c = "mute", o = {}) => ({
	id,
	k: "line",
	x,
	y,
	x2,
	y2,
	c,
	...o
});
var arr = (id, x, y, x2, y2, c = "mute", o = {}) => ({
	id,
	k: "arrow",
	x,
	y,
	x2,
	y2,
	c,
	...o
});
var F = (vi, en, ...a) => ({
	vi,
	en,
	a: a.flat()
});
var M = (frames, h = 60) => ({
	frames,
	h
});
/** Hàng hộp nối nhau bằng mũi tên. `on` là bước đang nói tới: bước trước xanh, bước sau mờ. */
function chain(p, labels, o = {}) {
	const n = labels.length;
	const x0 = o.x0 ?? 6;
	const x1 = o.x1 ?? 94;
	const y = o.y ?? 30;
	const h = o.h ?? 12;
	const gap = n > 1 ? 3.6 : 0;
	const w = (x1 - x0 - gap * (n - 1)) / n;
	const out = [];
	labels.forEach((t, i) => {
		const cx = x0 + w / 2 + i * (w + gap);
		const on = o.on ?? -1;
		const cur = i === on;
		const done = on >= 0 && i < on;
		const dim = on >= 0 && i > on && !o.all;
		out.push(box(`${p}${i}`, cx, y, w, h, t, {
			f: cur ? "accent" : "soft",
			c: done ? "green" : cur ? "accent" : "ink",
			o: dim ? .5 : 1
		}));
		if (o.sub?.[i]) out.push(txt(`${p}s${i}`, cx, y + h / 2 + 4.5, o.sub[i], {
			s: 2.7,
			c: cur ? "accent" : "mute",
			o: dim ? .5 : 1
		}));
		if (i < n - 1) out.push(arr(`${p}a${i}`, cx + w / 2 + .3, y, cx + w / 2 + gap - .3, y, done || cur ? "green" : "mute", { o: dim ? .4 : 1 }));
	});
	return out;
}
/** Cột có nhãn dưới chân. */
function bars(p, vals, labels, o = {}) {
	const n = vals.length;
	const x0 = o.x0 ?? 10;
	const x1 = o.x1 ?? 90;
	const base = o.base ?? 46;
	const H = o.h ?? 32;
	const max = o.max ?? Math.max(...vals, 1);
	const step = (x1 - x0) / n;
	const w = Math.min(10, step * .62);
	const out = [ln(`${p}base`, x0 - 2, base, x1 + 2, base, "mute", { w: .3 })];
	vals.forEach((v, i) => {
		const cx = x0 + step * (i + .5);
		const col = Array.isArray(o.c) ? o.c[i] : o.c ?? "accent";
		const hl = o.hl ? o.hl.includes(i) : true;
		out.push(bar(`${p}b${i}`, cx, base, v / max * H, hl ? col : "mute", w, o.show === false ? void 0 : `${v}${o.unit ?? ""}`, { o: hl ? 1 : .45 }));
		out.push(txt(`${p}l${i}`, cx, base + 4.2, labels[i], {
			s: 2.8,
			c: "mute"
		}));
	});
	return out;
}
/** Các chấm nằm trên một trục số nằm ngang. */
function numline(p, from, to, o = {}) {
	const y = o.y ?? 40;
	const x0 = o.x0 ?? 8;
	const x1 = o.x1 ?? 92;
	const out = [ln(`${p}ax`, x0, y, x1, y, "mute", { w: .4 })];
	for (const t of o.ticks ?? []) {
		const x = x0 + (t - from) / (to - from) * (x1 - x0);
		out.push(ln(`${p}t${t}`, x, y - 1, x, y + 1, "mute", { w: .3 }), txt(`${p}tl${t}`, x, y + 5, String(t), {
			s: 2.8,
			c: "mute"
		}));
	}
	return out;
}
var at = (v, from, to, x0 = 8, x1 = 92) => x0 + (v - from) / (to - from) * (x1 - x0);
/** Hai hộp cạnh nhau (trái/phải) cùng hàng. */
function pair(p, a, b, o = {}) {
	const y = o.y ?? 26;
	const h = o.h ?? 16;
	return [box(`${p}a`, 28, y, 40, h, a, {
		c: o.ca ?? "blue",
		f: o.fa,
		o: o.oa
	}), box(`${p}b`, 72, y, 40, h, b, {
		c: o.cb ?? "accent",
		f: o.fb,
		o: o.ob,
		d: o.d
	})];
}
/** Danh sách hộp xếp dọc, mỗi hộp một dòng. */
function stack(p, labels, o = {}) {
	const gap = o.gap ?? 10;
	const h = o.h ?? 8;
	return labels.map((t, i) => {
		const on = !o.on || o.on.includes(i);
		const bad = o.bad?.includes(i);
		return box(`${p}${i}`, o.x ?? 50, (o.y0 ?? 10) + i * gap, o.w ?? 72, h, t, {
			c: bad ? "red" : on ? o.c ?? "blue" : "mute",
			f: on && o.on ? bad ? "red" : "blue" : void 0,
			o: on ? 1 : .4,
			s: 3
		});
	});
}
/** Đường cong chuông (nhiều đoạn thẳng ngắn). df=0 → chuẩn; df>0 → đuôi dày hơn (t). */
function bell(p, cx, base, o = {}) {
	const w = o.w ?? 70;
	const h = o.h ?? 26;
	const fat = o.fat ?? 0;
	const n = 28;
	const out = [];
	const f = (u) => fat ? Math.pow(1 + u * u / (2 + fat), -(1.2 + fat * .5)) : Math.exp(-(u * u) / 2);
	let px = 0;
	let py = 0;
	for (let i = 0; i <= n; i++) {
		const u = -3 + 6 * i / n;
		const x = cx + u / 3 * (w / 2);
		const y = base - f(u) * h;
		if (i > 0) out.push(ln(`${p}${i}`, px, py, x, y, o.c ?? "blue", {
			w: .7,
			o: o.op ?? 1
		}));
		px = x;
		py = y;
	}
	out.push(ln(`${p}ax`, cx - w / 2, base, cx + w / 2, base, "mute", { w: .3 }));
	return out;
}
var m1 = {
	"crisp-biz": M([
		F("Spa Lotus có một file form: ngày, kênh, số form. Đây chỉ là nguyên liệu.", "Lotus Spa has a form file: date, channel, number of forms. It is only raw material.", box("f", 50, 18, 46, 16, "file form\nngày · kênh · số form", { f: "soft" })),
		F("Câu hỏi nghiệp vụ đứng trước: «Tuần sau có nên tăng ngân sách TikTok không?»", "The business question comes first: “Should next week's TikTok budget go up?”", box("f", 50, 46, 46, 16, "file form\nngày · kênh · số form", { o: .6 }), box("q", 50, 14, 80, 16, "Tuần sau có nên tăng\nngân sách TikTok không?", {
			f: "accent",
			c: "accent"
		}), arr("a", 50, 38, 50, 24, "accent")),
		F("File chỉ có ích khi nó trả lời được câu hỏi đó; không phải file nào có sẵn cũng đáng phân tích.", "The file is useful only if it can answer that question; not every file you hold deserves analysis.", box("q", 50, 14, 80, 16, "Tuần sau có nên tăng\nngân sách TikTok không?", {
			f: "accent",
			c: "accent"
		}), box("f", 26, 46, 38, 14, "form theo kênh\nvà theo tuần", {
			c: "green",
			f: "soft"
		}), box("g", 74, 46, 38, 14, "ảnh cảnh đẹp\ncủa spa", { o: .35 }), arr("a", 26, 38, 40, 24, "green"), arr("b", 74, 38, 60, 24, "mute", {
			d: true,
			o: .4
		}))
	]),
	"crisp-data": M([
		F("Dữ liệu có sẵn: cột «số tin nhắn».", "The data you have: a “number of messages” column.", box("d", 28, 22, 40, 14, "số tin nhắn\n240 tuần này", { f: "soft" })),
		F("Quyết định cần: «khách có quay lại không?»", "The decision needs: “will customers come back?”", box("d", 28, 22, 40, 14, "số tin nhắn\n240 tuần này"), box("q", 72, 22, 40, 14, "khách có\nquay lại không?", {
			f: "accent",
			c: "accent"
		})),
		F("Hai thứ khác nhau: 240 tin nhắn không cho biết ai quay lại. Phải đo đúng thứ cần quyết định.", "These are different: 240 messages do not tell you who returned. Measure what the decision needs.", box("d", 28, 22, 40, 14, "số tin nhắn\n240 tuần này"), box("q", 72, 22, 40, 14, "khách có\nquay lại không?", {
			f: "accent",
			c: "accent"
		}), ln("x", 50, 22, 50, 22, "red"), txt("g", 50, 40, "khoảng cách giữa cái đo và cái cần", {
			c: "red",
			s: 3
		}), arr("a1", 48, 22, 52, 22, "red", { d: true }), box("fix", 50, 50, 70, 8, "cần thêm: ngày quay lại của từng khách", { c: "green" }))
	]),
	"crisp-prep": M([
		F("100 khách: 92 ở lại, 8 rời đi.", "100 customers: 92 stay, 8 leave.", bars("b", [92, 8], ["ở lại", "rời đi"], {
			c: ["blue", "red"],
			max: 100
		})),
		F("Mô hình ngây thơ gọi mọi người là «ở lại»: đúng 92 trên 100 = 92%.", "A naive model calls everyone “stays”: 92 out of 100 correct = 92%.", bars("b", [92, 8], ["ở lại", "rời đi"], {
			c: ["blue", "red"],
			max: 100
		}), box("m", 50, 8, 60, 8, "đoán: ai cũng ở lại → chính xác 92%", { c: "gold" })),
		F("Nhưng việc cần làm là giữ chân người sắp rời: mô hình đó bắt được 0 trong 8 người.", "But the job is to keep people who are about to leave: that model catches 0 of the 8.", bars("b", [92, 8], ["ở lại", "rời đi"], {
			c: ["blue", "red"],
			max: 100,
			hl: [1]
		}), box("m", 50, 8, 70, 8, "bắt được 0 / 8 người rời đi", {
			c: "red",
			f: "red"
		}), ring("r", 70, 40, 7, "red")),
		F("Vì vậy làm sạch dữ liệu và chọn thước đo theo quyết định quan trọng hơn con số chính xác chung.", "So preparing data and choosing a metric by the decision matters more than overall accuracy.", chain("c", [
			"làm sạch",
			"chọn thước đo",
			"mô hình",
			"quyết định"
		], {
			on: 1,
			y: 28
		}))
	]),
	"crisp-ship": M([
		F("Có một bản xuất file kết quả. Chưa phải triển khai.", "You have an exported results file. That is not deployment yet.", box("x", 50, 28, 50, 14, "file kết quả .csv", { f: "soft" })),
		F("Triển khai cần ba thứ: người phụ trách bấm điều chỉnh, ngày chạy lại, và lúc thay mô hình cũ.", "Deployment needs three things: an owner who acts, a re-run date, and a moment to replace the old model.", box("x", 50, 12, 50, 10, "file kết quả .csv", { o: .5 }), box("a", 18, 38, 28, 14, "người phụ\ntrách bấm", { c: "green" }), box("b", 50, 38, 28, 14, "ngày\nchạy lại", { c: "green" }), box("c", 82, 38, 28, 14, "lúc thay\nmô hình cũ", { c: "green" })),
		F("Ngân sách TikTok tuần sau được chỉnh theo ngưỡng đã viết sẵn: lúc đó kết quả mới đi vào quyết định thật.", "Next week's TikTok budget is adjusted by a pre-written threshold: only then do results enter a real decision.", chain("c", [
			"kết quả",
			"ngưỡng đã viết",
			"chỉnh ngân sách",
			"đo lại"
		], {
			on: 2,
			y: 28
		}))
	]),
	"ps-open": M([
		F("«Form giảm» mới là một nỗi lo, chưa phải một vấn đề.", "“Forms are down” is a worry, not yet a problem.", box("w", 50, 28, 40, 14, "«Form giảm»", { c: "mute" })),
		F("Vấn đề phải là một quyết định: «Tuần sau có tắt kênh này không?»", "A problem must be a decision: “Should we switch this channel off next week?”", box("w", 25, 28, 34, 12, "«Form giảm»", { o: .5 }), arr("a", 43, 28, 56, 28, "accent"), box("p", 75, 28, 36, 14, "Tuần sau có tắt\nkênh này không?", {
			f: "accent",
			c: "accent"
		})),
		F("Sáu bước sau chỉ phục vụ câu hỏi đó: định nghĩa → số liệu → nguyên nhân → phương án → làm → đo lại.", "The six steps only serve that question: define → facts → causes → options → act → re-measure.", chain("s", [
			"định nghĩa",
			"số liệu",
			"nguyên nhân",
			"phương án",
			"làm",
			"đo lại"
		], {
			on: 0,
			y: 26,
			h: 14,
			x0: 3,
			x1: 97
		}), txt("q", 50, 50, "mọi bước quay về câu hỏi: tắt kênh hay không?", {
			s: 3,
			c: "accent"
		})),
		F("Bước 1 kiểm tra: câu hỏi đã có hạn chót và người quyết định chưa?", "Step 1 checks: does the question have a deadline and a decision maker?", chain("s", [
			"định nghĩa",
			"số liệu",
			"nguyên nhân",
			"phương án",
			"làm",
			"đo lại"
		], {
			on: 0,
			y: 26,
			h: 14,
			x0: 3,
			x1: 97
		}), box("c", 50, 50, 74, 8, "hạn chót · người quyết định · ngân sách", { c: "green" }))
	]),
	"ps-type": M([
		F("Hai loại vấn đề trông giống nhau nhưng cần câu hỏi khác nhau.", "Two kinds of problems look alike but need different questions.", box("a", 27, 24, 40, 14, "Chọn gì?\n(lựa chọn)", { c: "blue" }), box("b", 73, 24, 40, 14, "Vì sao?\n(nguyên nhân)", { c: "gold" })),
		F("Tắt một kênh là lựa chọn: có ngân sách và một ngày hạn, trả lời bằng «nên / không nên».", "Switching a channel off is a choice: it has a budget and a deadline and is answered with “should / shouldn't”.", box("a", 27, 24, 40, 14, "Chọn gì?\n(lựa chọn)", {
			f: "blue",
			c: "blue"
		}), box("b", 73, 24, 40, 14, "Vì sao?\n(nguyên nhân)", { o: .4 }), box("x", 27, 46, 40, 10, "nên tắt / không tắt", { c: "blue" })),
		F("Giải thích vì sao form giảm là câu chuyện nguyên nhân; nó không tự thành một nút để bấm.", "Explaining why forms fell is a cause story; it does not turn into a button by itself.", box("a", 27, 24, 40, 14, "Chọn gì?\n(lựa chọn)", { o: .4 }), box("b", 73, 24, 40, 14, "Vì sao?\n(nguyên nhân)", {
			f: "gold",
			c: "gold"
		}), box("y", 73, 46, 40, 10, "cần tìm → rồi mới chọn", { c: "gold" }))
	]),
	"ps-fact": M([
		F("Tuần này: 80 form trên 2.000 lượt bấm = 4%. Đây là sự thật đo được.", "This week: 80 forms from 2,000 clicks = 4%. That is a measurable fact.", box("f", 50, 20, 56, 16, "80 form / 2.000 click\n= 4%", {
			f: "green",
			c: "green"
		})),
		F("«Kênh này yếu» là một nhận xét: chưa nói yếu so với mức nào.", "“This channel is weak” is an opinion: weak compared with what?", box("f", 27, 20, 40, 14, "80 / 2.000 = 4%", { c: "green" }), box("o", 73, 20, 40, 14, "«kênh này yếu»", {
			c: "mute",
			d: true
		})),
		F("Nhận xét chỉ kiểm tra được khi viết ngưỡng: «yếu = dưới 3%».", "An opinion becomes testable once you write a threshold: “weak = below 3%”.", bars("b", [4, 3], ["tuần này", "ngưỡng yếu"], {
			c: ["green", "red"],
			max: 5,
			unit: "%",
			x0: 20,
			x1: 80
		})),
		F("4% cao hơn ngưỡng 3%, nên với định nghĩa đã viết, kênh này chưa yếu.", "4% is above the 3% threshold, so by the written definition this channel is not weak yet.", bars("b", [4, 3], ["tuần này", "ngưỡng yếu"], {
			c: ["green", "red"],
			max: 5,
			unit: "%",
			x0: 20,
			x1: 80
		}), ln("t", 20, 22.4, 80, 22.4, "red", {
			d: true,
			w: .4
		}), txt("v", 50, 8, "4% > 3% → chưa yếu", {
			c: "green",
			s: 3.4
		}))
	]),
	"ps-smart": M([
		F("Câu mục tiêu: «Đến 30/11, form từ TikTok tăng thêm 20 mỗi tuần so với mức 80 hiện tại.»", "The goal sentence: “By 30 Nov, TikTok forms rise by 20 per week from the current 80.”", box("g", 50, 20, 84, 16, "Đến 30/11, form TikTok tăng thêm 20/tuần\nso với mức 80 hiện tại, cùng cách đếm", { f: "soft" })),
		F("Mỗi phần của câu trả lời một chữ cái: S cụ thể, M đo được, A khả thi, R liên quan, T có hạn.", "Each part answers a letter: S specific, M measurable, A achievable, R relevant, T time-bound.", box("g", 50, 10, 84, 12, "Đến 30/11, form TikTok +20/tuần so với 80", { o: .8 }), ...[
			"S",
			"M",
			"A",
			"R",
			"T"
		].map((l, i) => box(`l${i}`, 12 + i * 19, 34, 15, 12, l, {
			f: i === 0 ? "accent" : "soft",
			c: "accent"
		})), txt("w", 50, 55, "kênh TikTok · form · khả thi · liên quan · 30/11", {
			s: 2.8,
			c: "mute"
		})),
		F("Nhờ vậy anh Minh có căn cứ: đạt thì tăng ngân sách thêm 10%.", "Mr Minh now has grounds: if it is met, raise the budget by another 10%.", bars("b", [80, 100], ["hiện tại", "mục tiêu 30/11"], {
			c: ["mute", "green"],
			max: 110,
			x0: 20,
			x1: 80
		}), arr("a", 34, 12, 66, 12, "accent"), txt("t", 50, 8, "đạt → tăng ngân sách 10%", { c: "accent" }))
	]),
	"ps-rank": M([
		F("Có nhiều việc cùng muốn làm, nhưng hạn 30/11 chỉ đủ nguồn lực cho một.", "Many tasks compete, but the 30 Nov deadline fits resources for only one.", box("a", 22, 22, 36, 11, "mục tiêu TikTok", { c: "accent" }), box("b", 62, 22, 36, 11, "làm lại logo", { c: "mute" }), box("c", 22, 40, 36, 11, "đổi font web", { c: "mute" }), box("d", 62, 40, 36, 11, "chụp ảnh mới", { c: "mute" })),
		F("Giữ lại một việc; các việc còn lại ghi «để sau» có chủ đích.", "Keep one; mark the rest “later” on purpose.", box("a", 22, 22, 36, 11, "mục tiêu TikTok", {
			f: "accent",
			c: "accent"
		}), box("b", 62, 22, 36, 11, "làm lại logo\n→ để sau", {
			o: .45,
			d: true
		}), box("c", 22, 40, 36, 11, "đổi font web\n→ để sau", {
			o: .45,
			d: true
		}), box("d", 62, 40, 36, 11, "chụp ảnh mới\n→ để sau", {
			o: .45,
			d: true
		})),
		F("«Để sau» là một quyết định ghi lại có ngày xem lại, không phải việc bị quên.", "“Later” is a recorded decision with a review date, not a forgotten task.", box("a", 24, 22, 40, 12, "TikTok · làm ngay", {
			f: "accent",
			c: "accent"
		}), box("b", 72, 22, 40, 12, "sau 30/11: xem lại\nlogo, font, ảnh", { c: "gold" }), arr("x", 46, 22, 50, 22, "mute"), txt("t", 50, 46, "ưu tiên = chọn bỏ bớt", {
			c: "accent",
			s: 3.6
		}))
	]),
	"ps-cause": M([
		F("Form từ TikTok giảm. Nhiều nguyên nhân có thể có.", "TikTok forms fell. Many causes are possible.", box("e", 50, 10, 50, 10, "form TikTok giảm", { f: "soft" }), box("a", 25, 34, 40, 12, "người dùng chán\nmạng xã hội", { c: "mute" }), box("b", 75, 34, 40, 12, "trang đích lỗi 404\ntrên điện thoại", { c: "mute" }), arr("x", 40, 16, 28, 28, "mute"), arr("y", 60, 16, 72, 28, "mute")),
		F("Hỏi: nguyên nhân nào thay đổi được trong hai tuần?", "Ask: which cause can change within two weeks?", box("e", 50, 10, 50, 10, "form TikTok giảm"), box("a", 25, 34, 40, 12, "người dùng chán\nmạng xã hội", { c: "mute" }), box("b", 75, 34, 40, 12, "trang đích lỗi 404\ntrên điện thoại", { c: "mute" }), txt("q", 50, 54, "thay đổi được trong 2 tuần?", {
			c: "accent",
			s: 3.4
		})),
		F("«Chán mạng xã hội» không sửa được; «lỗi 404» thì sửa được. Xử lý cái thứ hai.", "“Bored of social media” can't be fixed; “404 error” can. Work on the second.", box("e", 50, 10, 50, 10, "form TikTok giảm"), box("a", 25, 34, 40, 12, "người dùng chán\nmạng xã hội\n✗ không đổi được", {
			o: .4,
			d: true,
			s: 2.8
		}), box("b", 75, 34, 40, 12, "trang đích lỗi 404\n✓ sửa được", {
			f: "green",
			c: "green"
		}))
	]),
	"ps-opt": M([
		F("Ba phương án cho vấn đề form giảm.", "Three options for the falling forms.", box("o", 50, 10, 50, 9, "form TikTok = 80", { f: "soft" }), box("a", 18, 34, 28, 14, "sửa\nlỗi 404", { c: "green" }), box("b", 50, 34, 28, 14, "làm trang\nđích mới", { c: "gold" }), box("c", 82, 34, 28, 14, "không\nlàm gì", { c: "mute" })),
		F("Mỗi phương án kéo theo một hệ quả: 2 ngày công / 3 tuần / giữ nguyên.", "Each option carries a consequence: 2 person-days / 3 weeks / unchanged.", box("o", 50, 10, 50, 9, "form TikTok = 80"), box("a", 18, 30, 28, 12, "sửa lỗi 404", { c: "green" }), box("b", 50, 30, 28, 12, "trang đích mới", { c: "gold" }), box("c", 82, 30, 28, 12, "không làm gì", { c: "mute" }), txt("ta", 18, 46, "2 ngày của\n1 người", { s: 2.8 }), txt("tb", 50, 46, "3 tuần\n→ trễ 30/11", {
			s: 2.8,
			c: "red"
		}), txt("tc", 82, 46, "form giữ\nnguyên 80", { s: 2.8 })),
		F("Chọn phương án có hệ quả chấp nhận được trước hạn: sửa lỗi 404.", "Choose the option whose consequence fits before the deadline: fix the 404.", box("o", 50, 10, 50, 9, "form TikTok = 80"), box("a", 18, 30, 28, 12, "sửa lỗi 404", {
			f: "green",
			c: "green"
		}), box("b", 50, 30, 28, 12, "trang đích mới", { o: .35 }), box("c", 82, 30, 28, 12, "không làm gì", { o: .35 }), txt("ta", 18, 46, "2 ngày · kịp hạn", {
			s: 2.8,
			c: "green"
		}))
	]),
	"ps-do": M([
		F("Lỗi 404 được sửa ngày 20/11. Tuần trước đó: 80 form.", "The 404 was fixed on 20 Nov. The week before: 80 forms.", bars("b", [80], ["tuần có 80 form"], {
			c: "mute",
			max: 100,
			x0: 30,
			x1: 70
		}), txt("t", 50, 8, "sửa lỗi 20/11", { c: "accent" })),
		F("Đến 30/11 đếm lại bằng đúng cách đã dùng: cùng định nghĩa form, cùng khung tuần.", "On 30 Nov count again the same way: same form definition, same week window.", bars("b", [80, 0], ["trước", "sau 30/11"], {
			c: ["mute", "accent"],
			max: 100,
			x0: 20,
			x1: 80
		}), box("r", 50, 8, 60, 8, "cùng cách đếm", { c: "green" })),
		F("Ra 90 hay ra 70 đều là kết quả; cách đếm không được đổi giữa chừng.", "90 or 70 are both results; the counting method must not change midway.", bars("b", [80, 90], ["trước", "sau"], {
			c: ["mute", "green"],
			max: 100,
			x0: 20,
			x1: 80
		}), txt("t", 50, 8, "90 → cải thiện · 70 → vẫn là kết quả", { s: 3 }))
	])
};
var V = [
	2,
	4,
	4,
	4,
	5,
	5,
	7,
	9
];
var m2 = {
	"py-plot": M([
		F("GDN: 80 form trên 4.000 click. TikTok: 40 form trên 1.000 click.", "GDN: 80 forms from 4,000 clicks. TikTok: 40 forms from 1,000 clicks.", box("g", 28, 14, 38, 10, "GDN 80 / 4.000", { c: "blue" }), box("t", 72, 14, 38, 10, "TikTok 40 / 1.000", { c: "accent" })),
		F("Câu hỏi «kênh nào nhiều form hơn?» → vẽ số form: GDN cao hơn.", "Question “which channel has more forms?” → plot form counts: GDN is higher.", box("g", 28, 8, 38, 8, "GDN 80 / 4.000", { o: .5 }), box("t", 72, 8, 38, 8, "TikTok 40 / 1.000", { o: .5 }), bars("n", [80, 40], ["GDN", "TikTok"], {
			c: ["blue", "accent"],
			max: 90,
			x0: 25,
			x1: 75,
			base: 50,
			h: 32
		}), txt("y", 6, 20, "form", {
			s: 2.8,
			c: "mute",
			a: "start"
		})),
		F("Câu hỏi «kênh nào hiệu quả hơn?» → vẽ tỷ lệ form/click: TikTok 4% cao gấp đôi GDN 2%.", "Question “which channel converts better?” → plot forms per click: TikTok 4% is double GDN 2%.", bars("n", [2, 4], ["GDN", "TikTok"], {
			c: ["blue", "accent"],
			max: 5,
			unit: "%",
			x0: 25,
			x1: 75,
			base: 50,
			h: 32
		}), txt("y", 6, 20, "form/click (%)", {
			s: 2.8,
			c: "mute",
			a: "start"
		})),
		F("Hai biểu đồ đều đúng với hai câu hỏi khác nhau; hình không tự chia cho mẫu số, và trục phải ghi đơn vị.", "Both charts are right for different questions; a plot never divides by the denominator for you, and axes need units.", box("a", 28, 24, 38, 14, "số form\ntrả lời «nhiều hơn?»", { c: "blue" }), box("b", 72, 24, 38, 14, "tỷ lệ form/click\ntrả lời «hiệu quả hơn?»", { c: "accent" }), txt("t", 50, 48, "chọn đơn vị trước, rồi mới vẽ", {
			c: "accent",
			s: 3.6
		}))
	]),
	"py-g1": M([
		F("Danh sách ['A','B','C','D']: mỗi ô có một chỉ số, bắt đầu từ 0.", "List ['A','B','C','D']: each cell has an index that starts at 0.", ...[
			"A",
			"B",
			"C",
			"D"
		].flatMap((t, i) => [box(`c${i}`, 16 + i * 22, 28, 18, 14, t, { c: "blue" }), txt(`i${i}`, 16 + i * 22, 42, String(i), {
			c: "accent",
			s: 3.8
		})])),
		F("Câu hỏi «phần tử đầu tiên» → chỉ số 0, không phải 1.", "Question “the first element” → index 0, not 1.", ...[
			"A",
			"B",
			"C",
			"D"
		].flatMap((t, i) => [box(`c${i}`, 16 + i * 22, 28, 18, 14, t, {
			c: i === 0 ? "accent" : "blue",
			f: i === 0 ? "accent" : "soft",
			o: i === 0 ? 1 : .55
		}), txt(`i${i}`, 16 + i * 22, 42, String(i), {
			c: "accent",
			s: 3.8
		})]), txt("q", 50, 10, "lst[0] → 'A'", {
			s: 4,
			c: "accent"
		})),
		F("Mẹo «đáp án là 2» không giúp gì: câu hỏi chấm điểm vẫn chỉ hỏi ý đã học, ở đây là chỉ số bắt đầu từ 0.", "A memorised “answer is 2” does not help: graded questions only ask learned ideas; here, indexes start at 0.", ...[
			"A",
			"B",
			"C",
			"D"
		].flatMap((t, i) => [box(`c${i}`, 16 + i * 22, 28, 18, 14, t, {
			c: "blue",
			o: .55
		}), txt(`i${i}`, 16 + i * 22, 42, String(i), {
			c: "accent",
			s: 3.8
		})]), box("n", 50, 54, 80, 8, "nhớ ý (chỉ số từ 0), đừng nhớ đáp án", { c: "green" }))
	]),
	"py-g2": M([
		F("Một DataFrame có năm dòng, mỗi dòng có nhãn a…e và vị trí 0…4.", "A DataFrame has five rows, each with a label a…e and a position 0…4.", ...[
			"a",
			"b",
			"c",
			"d",
			"e"
		].flatMap((l, i) => [box(`r${i}`, 40, 10 + i * 9, 36, 7, `dòng ${l}`, { c: "blue" }), txt(`p${i}`, 66, 10 + i * 9 + 1.2, `vị trí ${i}`, {
			s: 2.8,
			c: "mute",
			a: "start"
		})])),
		F("df.loc['a':'c'] lấy theo nhãn và gồm cả điểm cuối: a, b, c.", "df.loc['a':'c'] selects by label and includes the end: a, b, c.", ...[
			"a",
			"b",
			"c",
			"d",
			"e"
		].flatMap((l, i) => [box(`r${i}`, 40, 10 + i * 9, 36, 7, `dòng ${l}`, {
			c: i < 3 ? "green" : "mute",
			f: i < 3 ? "green" : "soft",
			o: i < 3 ? 1 : .4
		}), txt(`p${i}`, 66, 10 + i * 9 + 1.2, `vị trí ${i}`, {
			s: 2.8,
			c: "mute",
			a: "start"
		})])),
		F("df.iloc[0:3] lấy theo vị trí và không gồm điểm cuối: vị trí 0, 1, 2 → cũng a, b, c.", "df.iloc[0:3] selects by position and excludes the end: positions 0, 1, 2 → also a, b, c.", ...[
			"a",
			"b",
			"c",
			"d",
			"e"
		].flatMap((l, i) => [box(`r${i}`, 40, 10 + i * 9, 36, 7, `dòng ${l}`, {
			c: i < 3 ? "accent" : "mute",
			f: i < 3 ? "accent" : "soft",
			o: i < 3 ? 1 : .4
		}), txt(`p${i}`, 66, 10 + i * 9 + 1.2, `vị trí ${i}`, {
			s: 2.8,
			c: i < 3 ? "accent" : "mute",
			a: "start"
		})])),
		F("Cùng ba dòng nhưng hai quy tắc khác nhau: loc gồm điểm cuối, iloc thì không.", "The same three rows under two different rules: loc includes the end, iloc does not.", box("a", 28, 24, 38, 14, "loc['a':'c']\ngồm c", { c: "green" }), box("b", 72, 24, 38, 14, "iloc[0:3]\nkhông gồm 3", { c: "accent" }), txt("t", 50, 46, "nhầm hai cái này là lỗi lệch một dòng", {
			s: 3.2,
			c: "red"
		}))
	]),
	"ds-pct": M([
		F("Tám số đã sắp xếp: 2, 4, 4, 4, 5, 5, 7, 9.", "Eight sorted numbers: 2, 4, 4, 4, 5, 5, 7, 9.", bars("b", V, V.map(String), {
			c: "blue",
			max: 9,
			show: false,
			base: 42,
			h: 28
		})),
		F("Trung vị là chỗ giữa, giữa ô thứ 4 và thứ 5: (4 + 5) / 2 = 4,5.", "The median is the middle, between the 4th and 5th: (4 + 5) / 2 = 4.5.", bars("b", V, V.map(String), {
			c: "blue",
			max: 9,
			show: false,
			base: 42,
			h: 28,
			hl: [3, 4]
		}), ln("m", at(4.5, 0, 8, 10, 90), 10, at(4.5, 0, 8, 10, 90), 44, "accent", { d: true }), txt("t", 50, 6, "trung vị = 4,5", { c: "accent" })),
		F("Phân vị thứ 90: vị trí 1 + 0,9 × 7 = 7,3, nằm giữa số thứ 7 (là 7) và số thứ 8 (là 9).", "The 90th percentile: position 1 + 0.9 × 7 = 7.3, between the 7th (7) and the 8th (9).", bars("b", V, V.map(String), {
			c: "blue",
			max: 9,
			show: false,
			base: 42,
			h: 28,
			hl: [6, 7]
		}), txt("t", 50, 6, "vị trí 7,3 → giữa 7 và 9", { c: "accent" })),
		F("Nội suy (PERCENTILE.INC): 7 + 0,3 × (9 − 7) = 7,6. Lấy quan sát bậc gần nhất: 9. Phải ghi tên cách cắt.", "Interpolation (PERCENTILE.INC): 7 + 0.3 × (9 − 7) = 7.6. Nearest-rank: 9. Name the method you used.", box("a", 28, 20, 38, 16, "nội suy\n7,6", {
			f: "accent",
			c: "accent"
		}), box("b", 72, 20, 38, 16, "bậc gần nhất\n9", { c: "blue" }), txt("t", 50, 46, "cùng dữ liệu, hai đáp án", {
			c: "red",
			s: 3.6
		}))
	]),
	"ds-range": M([
		F("Tám tuần: số form lần lượt 2, 4, 4, 4, 5, 5, 7, 9.", "Eight weeks of forms: 2, 4, 4, 4, 5, 5, 7, 9.", bars("b", V, V.map(String), {
			c: "blue",
			max: 9,
			show: false,
			base: 44,
			h: 30
		})),
		F("Range chỉ nhìn hai đầu: lớn nhất 9, nhỏ nhất 2 → 9 − 2 = 7 form.", "Range looks only at the two ends: max 9, min 2 → 9 − 2 = 7 forms.", bars("b", V, V.map(String), {
			c: "blue",
			max: 9,
			show: false,
			base: 44,
			h: 30,
			hl: [0, 7]
		}), txt("t", 50, 6, "range = 9 − 2 = 7", {
			c: "accent",
			s: 3.8
		})),
		F("Sáu tuần ở giữa nằm rất sát nhau (4–7), và range không cho biết điều đó.", "The six middle weeks sit close together (4–7), which range cannot tell you.", bars("b", V, V.map(String), {
			c: "blue",
			max: 9,
			show: false,
			base: 44,
			h: 30,
			hl: [
				1,
				2,
				3,
				4,
				5,
				6
			]
		}), txt("t", 50, 6, "phần giữa chặt, range không thấy", { c: "mute" })),
		F("Một lỗi gõ 90 thay vì 9 làm range nhảy lên 88 trong khi các tuần khác không đổi.", "A typo 90 instead of 9 makes range jump to 88 while the other weeks do not change.", bars("b", [
			2,
			4,
			4,
			4,
			5,
			5,
			7,
			90
		], [
			"2",
			"4",
			"4",
			"4",
			"5",
			"5",
			"7",
			"90"
		], {
			c: [
				"blue",
				"blue",
				"blue",
				"blue",
				"blue",
				"blue",
				"blue",
				"red"
			],
			max: 90,
			show: false,
			base: 44,
			h: 30
		}), txt("t", 50, 6, "range = 90 − 2 = 88", {
			c: "red",
			s: 3.8
		}))
	]),
	"ds-mad": M([
		F("Dãy 2, 4, 4, 4, 5, 5, 7, 9 có trung bình 5.", "The series 2, 4, 4, 4, 5, 5, 7, 9 has mean 5.", bars("b", V, V.map(String), {
			c: "blue",
			max: 9,
			show: false,
			base: 44,
			h: 30
		}), ln("m", 6, 44 - 5 / 9 * 30, 94, 44 - 5 / 9 * 30, "accent", { d: true }), txt("t", 50, 6, "trung bình = 5", { c: "accent" })),
		F("Độ lệch tuyệt đối: 3, 1, 1, 1, 0, 0, 2, 4 → tổng 12.", "Absolute deviations: 3, 1, 1, 1, 0, 0, 2, 4 → sum 12.", bars("b", [
			3,
			1,
			1,
			1,
			0,
			0,
			2,
			4
		], [
			"2",
			"4",
			"4",
			"4",
			"5",
			"5",
			"7",
			"9"
		], {
			c: "gold",
			max: 4,
			base: 44,
			h: 28
		}), txt("t", 50, 6, "|x − 5| cộng lại = 12", { c: "accent" })),
		F("MAD = 12 / 8 = 1,5 form: trung bình khoảng cách tới tâm, không bình phương.", "MAD = 12 / 8 = 1.5 forms: the average distance to the centre, without squaring.", box("a", 50, 26, 64, 18, "MAD = 12 / 8 = 1,5", {
			f: "gold",
			c: "gold"
		}), txt("t", 50, 46, "chia n, lấy trị tuyệt đối", {
			c: "mute",
			s: 3.2
		})),
		F("Độ lệch chuẩn mẫu: bình phương (tổng 32), chia n − 1 = 7, rồi lấy căn ≈ 2,14. Hai số này không thay thế nhau.", "Sample SD: square (sum 32), divide by n − 1 = 7, then root ≈ 2.14. The two numbers are not interchangeable.", box("a", 28, 26, 38, 16, "MAD\n1,5", { c: "gold" }), box("b", 72, 26, 38, 16, "độ lệch chuẩn\n≈ 2,14", { c: "blue" }), txt("t", 50, 48, "cùng dữ liệu, hai thước khác nhau", { c: "red" }))
	]),
	"ens-oob": M([
		F("Tập học có 1.000 khách. Mỗi cây rút một «túi» có hoàn lại.", "The training set has 1,000 customers. Each tree draws a “bag” with replacement.", box("all", 50, 24, 84, 14, "1.000 khách trong tập học", { c: "blue" })),
		F("Khoảng một phần ba số dòng không vào túi của cây đó: đó là dòng ngoài túi (OOB).", "About a third of the rows are not in that tree's bag: those are out-of-bag (OOB).", box("bag", 33, 24, 56, 14, "túi của cây\n≈ 2/3 số dòng", {
			f: "blue",
			c: "blue"
		}), box("oob", 79, 24, 28, 14, "OOB\n≈ 1/3", {
			f: "gold",
			c: "gold"
		})),
		F("Cây đó được chấm bằng đúng phần OOB của nó; mỗi cây có một OOB khác nhau.", "That tree is graded on its own OOB rows; every tree has a different OOB set.", box("bag", 33, 24, 56, 14, "túi của cây\n≈ 2/3 số dòng", { o: .5 }), box("oob", 79, 24, 28, 14, "OOB\n≈ 1/3", {
			f: "gold",
			c: "gold"
		}), arr("a", 79, 33, 79, 44, "gold"), box("s", 79, 50, 36, 9, "chấm cây này", { c: "green" })),
		F("Nhưng tuần sau không nằm trong 1.000 khách này, nên OOB không thay cho một tập kiểm tra theo thời gian.", "But next week is not among these 1,000 customers, so OOB does not replace a time-based test set.", box("all", 32, 24, 56, 14, "1.000 khách\n(túi + OOB)", { c: "blue" }), box("n", 80, 24, 28, 14, "tuần sau\n(chưa có)", {
			c: "red",
			d: true
		}), txt("t", 50, 46, "OOB ≠ tương lai", {
			c: "red",
			s: 3.8
		})),
		F("Nhân đôi 8 khách rời đi trước khi chia làm cùng một người nằm cả trong túi lẫn OOB, khiến OOB nói dối.", "Duplicating the 8 churners before splitting puts the same person in both bag and OOB, so OOB lies.", box("bag", 33, 20, 56, 12, "bản gốc trong túi", { o: .6 }), box("oob", 79, 20, 28, 12, "bản sao trong OOB", {
			c: "red",
			f: "red"
		}), txt("t", 50, 42, "cùng một khách ở cả hai phía → điểm đẹp giả", {
			c: "red",
			s: 3.2
		}))
	]),
	"imb-smote": M([
		F("Hai khách đã rời đi: một người chi 2 triệu, một người chi 4 triệu.", "Two churners: one spends 2 million, one spends 4 million.", numline("n", 0, 6, {
			y: 36,
			ticks: [
				0,
				2,
				3,
				4,
				6
			]
		}), dot("a", at(2, 0, 6), 36, "red", 2), dot("b", at(4, 0, 6), 36, "red", 2), txt("la", at(2, 0, 6), 28, "khách A", { s: 2.8 }), txt("lb", at(4, 0, 6), 28, "khách B", { s: 2.8 })),
		F("SMOTE nối hai điểm bằng một đoạn thẳng rồi đặt điểm mới ở giữa.", "SMOTE joins the two points with a line and puts a new point in between.", numline("n", 0, 6, {
			y: 36,
			ticks: [
				0,
				2,
				3,
				4,
				6
			]
		}), dot("a", at(2, 0, 6), 36, "red", 2), dot("b", at(4, 0, 6), 36, "red", 2), ln("l", at(2, 0, 6), 36, at(4, 0, 6), 36, "red", { d: true }), dot("n1", at(3, 0, 6), 36, "gold", 2.2)),
		F("Điểm mới: 2 + 0,5 × (4 − 2) = 3 triệu. Không có khách nào chi đúng 3 triệu.", "The new point: 2 + 0.5 × (4 − 2) = 3 million. No customer spends exactly 3 million.", numline("n", 0, 6, {
			y: 36,
			ticks: [
				0,
				2,
				3,
				4,
				6
			]
		}), dot("a", at(2, 0, 6), 36, "red", 2), dot("b", at(4, 0, 6), 36, "red", 2), dot("n1", at(3, 0, 6), 36, "gold", 2.2), ring("r", at(3, 0, 6), 36, 5, "gold"), txt("t", at(3, 0, 6), 22, "người này không có thật", {
			c: "red",
			s: 3
		})),
		F("Nếu điểm tổng hợp lọt sang tập chấm, mô hình được chấm bằng một người không tồn tại. Chỉ tạo mẫu trên tập học.", "If a synthetic point leaks into the test set the model is graded on a person who does not exist. Synthesize only on the training set.", box("tr", 28, 28, 40, 14, "tập học\n+ điểm tổng hợp", { c: "blue" }), box("te", 72, 28, 40, 14, "tập chấm\nchỉ khách thật", { c: "green" }), ln("x", 50, 18, 50, 40, "red", { d: true }), txt("t", 50, 50, "SMOTE chỉ đứng ở bên trái đường này", {
			c: "red",
			s: 3
		}))
	]),
	"tb-why": M([
		F("Câu hỏi: «tuần này kênh nào có nhiều form hơn?»", "The question: “which channel had more forms this week?”", box("q", 50, 24, 70, 14, "tuần này kênh nào\ncó nhiều form hơn?", {
			f: "accent",
			c: "accent"
		})),
		F("Một biểu đồ cột trả lời thẳng câu hỏi đó: GDN 80, TikTok 40, Facebook 55.", "A bar chart answers it directly: GDN 80, TikTok 40, Facebook 55.", bars("b", [
			80,
			40,
			55
		], [
			"GDN",
			"TikTok",
			"Facebook"
		], {
			c: [
				"blue",
				"accent",
				"gold"
			],
			max: 90,
			base: 50,
			h: 36,
			x0: 15,
			x1: 85
		})),
		F("Một bản đồ thế giới tô cùng dữ liệu không trả lời gì thêm: chỉ là trang trí.", "A world map filled with the same data answers nothing more: it is decoration.", box("m", 50, 26, 66, 26, "bản đồ thế giới\n(không có địa điểm trong dữ liệu)", {
			c: "red",
			d: true,
			o: .7
		}), txt("t", 50, 50, "thêm hình ≠ thêm hiểu", {
			c: "red",
			s: 3.6
		})),
		F("Chọn hình theo câu hỏi; công cụ chỉ cộng những gì bạn thả vào, nên một phép nối nhân dòng vẫn làm sai mọi hình.", "Choose the chart by the question; the tool only sums what you drop in, so a row-multiplying join still breaks every chart.", chain("c", [
			"câu hỏi",
			"dữ liệu đúng dòng",
			"biểu đồ"
		], {
			on: 2,
			y: 26
		}))
	]),
	"tb-bar": M([
		F("Form của ba kênh trong một tuần: ba nhóm riêng biệt → ba cột.", "Forms of three channels in one week: three separate groups → three bars.", bars("b", [
			80,
			40,
			55
		], [
			"GDN",
			"TikTok",
			"Facebook"
		], {
			c: [
				"blue",
				"accent",
				"gold"
			],
			max: 90,
			base: 46,
			h: 30,
			x0: 15,
			x1: 85
		}), txt("t", 50, 6, "so sánh nhóm → cột", {
			c: "accent",
			s: 3.8
		})),
		F("Form của một kênh qua tám tuần: trục là thời gian có thứ tự → một đường.", "Forms of one channel over eight weeks: the axis is ordered time → a line.", ...[
			40,
			44,
			43,
			50,
			55,
			53,
			60,
			64
		].flatMap((v, i, a) => [dot(`p${i}`, 10 + i * 11.4, 46 - v / 70 * 34, "accent", 1.4), ...i > 0 ? [ln(`s${i}`, 10 + (i - 1) * 11.4, 46 - a[i - 1] / 70 * 34, 10 + i * 11.4, 46 - v / 70 * 34, "accent", { w: .7 })] : []]), txt("t", 50, 6, "theo thời gian → đường", {
			c: "accent",
			s: 3.8
		})),
		F("Đổi hình giữa hai câu hỏi là đổi nghĩa: nối đường qua ba kênh nghĩa là kênh GDN «dẫn tới» TikTok, điều không có.", "Swapping shapes changes meaning: a line through three channels implies GDN “leads to” TikTok, which is false.", ...[
			80,
			40,
			55
		].flatMap((v, i, a) => [dot(`p${i}`, 20 + i * 30, 46 - v / 90 * 34, "red", 1.6), ...i > 0 ? [ln(`s${i}`, 20 + (i - 1) * 30, 46 - a[i - 1] / 90 * 34, 20 + i * 30, 46 - v / 90 * 34, "red", {
			w: .7,
			d: true
		})] : []]), txt("t", 50, 6, "đường qua nhóm rời nhau = sai nghĩa", {
			c: "red",
			s: 3.4
		})),
		F("Thứ tự cột là lựa chọn của bạn: xếp theo độ lớn để mắt so sánh được, đừng xếp theo mã vô nghĩa.", "Bar order is your choice: sort by size so the eye can compare; do not order by a meaningless code.", bars("b", [
			80,
			55,
			40
		], [
			"GDN",
			"Facebook",
			"TikTok"
		], {
			c: [
				"blue",
				"gold",
				"accent"
			],
			max: 90,
			base: 46,
			h: 30,
			x0: 15,
			x1: 85
		}), txt("t", 50, 6, "xếp từ lớn đến nhỏ", {
			c: "green",
			s: 3.8
		}))
	]),
	"tb-box": M([
		F("Form của một kênh trong 40 tuần: mỗi chấm là một tuần.", "One channel's forms over 40 weeks: each dot is one week.", ...[
			3,
			4,
			4,
			5,
			5,
			5,
			6,
			6,
			6,
			6,
			7,
			7,
			7,
			8,
			9,
			2
		].map((v, i) => dot(`d${i}`, 20 + v * 8, 14 + i % 4 * 5, "blue", 1.1)), ...numline("n", 0, 10, {
			y: 44,
			x0: 20,
			x1: 100,
			ticks: [
				2,
				4,
				6,
				8
			]
		})),
		F("Hộp gom phần giữa: vạch giữa là trung vị, cạnh hộp là tứ phân vị, râu kéo tới các tuần xa.", "The box gathers the middle: the centre line is the median, edges are quartiles, whiskers reach far weeks.", ln("w", 36, 28, 92, 28, "ink", { w: .5 }), box("bx", 66, 28, 28, 16, "", {
			c: "blue",
			f: "soft"
		}), ln("md", 66, 20, 66, 36, "accent", { w: .8 }), txt("t1", 66, 48, "trung vị", {
			c: "accent",
			s: 3
		}), txt("t2", 44, 20, "tuần cực thấp", {
			s: 2.8,
			c: "mute"
		}), txt("t3", 86, 20, "tuần cực cao", {
			s: 2.8,
			c: "mute"
		})),
		F("Hộp hẹp nghĩa là phần lớn các tuần ổn định; độ rộng là điều hộp cho thấy.", "A narrow box means most weeks are steady; width is what a box plot shows.", ln("w", 36, 28, 92, 28, "ink", { w: .5 }), box("bx", 66, 28, 12, 16, "", {
			c: "blue",
			f: "blue"
		}), ln("md", 66, 20, 66, 36, "card", { w: .8 }), txt("t", 50, 10, "phần giữa hẹp = ổn định", {
			c: "blue",
			s: 3.6
		})),
		F("Bản đồ chỉ khi có địa điểm thật; nếu file không có tỉnh hay thành phố thì không vẽ bản đồ.", "A map only when places exist; if the file has no province or city, do not draw one.", box("f", 28, 26, 38, 14, "file: tuần, kênh, form", { c: "mute" }), box("m", 74, 26, 38, 14, "bản đồ\nkhông có địa điểm", {
			c: "red",
			d: true
		}), arr("a", 48, 26, 54, 26, "red", { d: true }), txt("t", 50, 48, "không có địa điểm → không có bản đồ", {
			c: "red",
			s: 3.2
		}))
	]),
	"tb-part": M([
		F("Một tuần có 100 form, chia 70 và 30: hai phần của một tổng.", "One week has 100 forms, split 70 and 30: two parts of a total.", box("a", 38, 28, 56, 14, "70", {
			f: "blue",
			c: "blue"
		}), box("b", 87, 28, 42, 14, "30", {
			f: "accent",
			c: "accent"
		}), ln("t", 10, 40, 90, 40, "mute", { w: .3 }), txt("tl", 50, 48, "100 form = 100%", {
			s: 3,
			c: "mute"
		})),
		F("Hai phần thì biểu đồ tròn (hoặc thanh chồng) đọc được ngay: 70% và 30%.", "With two parts a pie (or stacked bar) reads at once: 70% and 30%.", box("a", 35, 28, 50, 14, "GDN 70%", {
			f: "blue",
			c: "blue"
		}), box("b", 80, 28, 40, 14, "TikTok 30%", {
			f: "accent",
			c: "accent"
		}), txt("t", 50, 10, "ít phần → đọc được", {
			c: "green",
			s: 3.8
		})),
		F("Tám kênh mỗi kênh khoảng 12 form: các lát xấp xỉ nhau, mắt không phân biệt nổi. Dùng cột.", "Eight channels of about 12 forms each: slices look alike and the eye cannot tell. Use bars.", bars("b", [
			14,
			13,
			12,
			12,
			12,
			12,
			11,
			14
		], [
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8"
		], {
			c: "blue",
			max: 16,
			base: 46,
			h: 30,
			show: true
		}), txt("t", 50, 6, "nhiều phần ngang nhau → cột", {
			c: "accent",
			s: 3.6
		})),
		F("Tránh vẽ hai tuần bằng hai hình tròn để so sánh; hãy dùng cột cạnh nhau để so từng phần.", "Avoid comparing two weeks with two pies; use side-by-side bars to compare each part.", bars("b", [
			70,
			30,
			55,
			45
		], [
			"GDN T1",
			"TikTok T1",
			"GDN T2",
			"TikTok T2"
		], {
			c: [
				"blue",
				"accent",
				"blue",
				"accent"
			],
			max: 80,
			base: 46,
			h: 30
		}), txt("t", 50, 6, "so sánh → cột cạnh nhau", {
			c: "green",
			s: 3.6
		}))
	]),
	"tb-dual": M([
		F("Quyết định: «có tăng ngân sách kênh này không?»", "The decision: “should this channel's budget go up?”", box("q", 50, 26, 72, 14, "Có tăng ngân sách\nkênh này không?", {
			f: "accent",
			c: "accent"
		})),
		F("Trang chỉ cần hai thứ: tỷ lệ form (%) và mức chi (triệu đồng).", "The page needs only two things: form rate (%) and spend (million VND).", box("q", 50, 8, 60, 8, "tăng ngân sách kênh này?", { o: .7 }), box("a", 28, 34, 38, 16, "tỷ lệ form\n(%)", { c: "green" }), box("b", 72, 34, 38, 16, "mức chi\n(triệu đồng)", { c: "blue" })),
		F("Thêm tám bộ lọc biến trang thành màn hình tìm kiếm, không còn là một quyết định.", "Adding eight filters turns the page into a search screen, not a decision.", box("a", 28, 24, 38, 14, "tỷ lệ form (%)", { c: "green" }), box("b", 72, 24, 38, 14, "mức chi (triệu)", { c: "blue" }), ...Array.from({ length: 8 }, (_, i) => box(`f${i}`, 14 + i % 4 * 24, 44 + Math.floor(i / 4) * 8, 20, 6, `lọc ${i + 1}`, {
			c: "red",
			d: true,
			o: .7,
			s: 2.8
		}))),
		F("Hai trục phải ghi hai đơn vị; một đường cắt đường kia chỉ là hiệu ứng của thang, không phải một điểm có ý nghĩa.", "Both axes must state their units; one line crossing another is a scale effect, not a meaningful point.", ln("ax", 10, 44, 90, 44, "mute"), ln("l1", 14, 36, 86, 16, "green", { w: .8 }), ln("l2", 14, 14, 86, 38, "blue", { w: .8 }), ring("x", 50, 26, 4, "red"), txt("t", 50, 52, "giao điểm do thang, không do dữ liệu", {
			c: "red",
			s: 3.2
		}), txt("u1", 6, 10, "% form", {
			c: "green",
			s: 2.8,
			a: "start"
		}), txt("u2", 94, 10, "triệu đồng", {
			c: "blue",
			s: 2.8,
			a: "end"
		}))
	]),
	"pb-page": M([
		F("Quyết định của trang: ngân sách của tuần.", "The page's decision: this week's budget.", box("q", 50, 26, 70, 14, "ngân sách\ncủa tuần", {
			f: "accent",
			c: "accent"
		})),
		F("Trang chỉ có ba thành phần: tỷ lệ form, mức chi và một bộ lọc tuần.", "The page has only three parts: form rate, spend and one week filter.", box("q", 50, 8, 60, 8, "ngân sách của tuần", { o: .7 }), box("a", 20, 34, 28, 14, "tỷ lệ\nform", { c: "green" }), box("b", 50, 34, 28, 14, "mức chi", { c: "blue" }), box("c", 80, 34, 28, 14, "lọc\ntuần", { c: "gold" })),
		F("Bộ lọc theo màu logo không thuộc trang này; câu hỏi khác thì để ở một trang khác (drill-through).", "A logo-colour filter does not belong here; a different question goes on a different page (drill-through).", box("a", 20, 24, 28, 12, "tỷ lệ form", { c: "green" }), box("b", 50, 24, 28, 12, "mức chi", { c: "blue" }), box("c", 80, 24, 28, 12, "lọc tuần", { c: "gold" }), box("x", 30, 46, 40, 10, "lọc màu logo", {
			c: "red",
			d: true,
			o: .6
		}), arr("y", 54, 46, 70, 46, "mute"), box("p", 84, 46, 22, 10, "trang khác", { c: "mute" }))
	]),
	"fw-5why": M([
		F("Hiện tượng: «form sai».", "The symptom: “forms are wrong”.", ...chain("w", ["form sai"], {
			y: 26,
			x0: 30,
			x1: 70
		})),
		F("Vì sao? Thiếu một trường. Vì sao? Mẫu cũ.", "Why? A field is missing. Why? The template is old.", ...chain("w", [
			"form sai",
			"thiếu\nmột trường",
			"mẫu cũ"
		], {
			y: 26,
			on: 2
		})),
		F("Vì sao mẫu cũ? Không ai được giao việc cập nhật mẫu. Đây là điểm can thiệp.", "Why is the template old? Nobody is assigned to update it. This is the intervention point.", ...chain("w", [
			"form sai",
			"thiếu trường",
			"mẫu cũ",
			"không ai\ncập nhật"
		], {
			y: 26,
			on: 3,
			h: 14
		})),
		F("Giao một người cập nhật mẫu: dừng ở đây, không cần đủ năm câu nếu điểm can thiệp đã hiện.", "Assign someone to update the template: stop here; you do not need five whys once the intervention point shows.", ...chain("w", [
			"form sai",
			"thiếu trường",
			"mẫu cũ",
			"không ai\ncập nhật"
		], {
			y: 22,
			on: 3,
			h: 14
		}), box("fix", 50, 46, 70, 10, "giao người cập nhật mẫu → đo lại", {
			f: "green",
			c: "green"
		}))
	]),
	"fw-spin": M([
		F("SPIN: bốn loại câu hỏi đi theo thứ tự.", "SPIN: four kinds of question in order.", ...[
			"S",
			"P",
			"I",
			"N"
		].map((l, i) => box(`l${i}`, 16 + i * 22, 28, 18, 18, l, {
			f: "soft",
			c: "accent",
			s: 6
		}))),
		F("Situation: «Mỗi tuần được bao nhiêu form?»", "Situation: “How many forms do you get a week?”", ...[
			"S",
			"P",
			"I",
			"N"
		].map((l, i) => box(`l${i}`, 16 + i * 22, 22, 18, 14, l, {
			f: i === 0 ? "accent" : "soft",
			c: "accent",
			s: 5,
			o: i === 0 ? 1 : .4
		})), txt("x", 50, 46, "«Mỗi tuần được bao nhiêu form?»", { s: 3.6 })),
		F("Problem: «Không biết kênh nào đáng tiền.» Implication: «Ngân sách tháng sau chốt theo cảm giác.»", "Problem: “We do not know which channel is worth it.” Implication: “Next month's budget is set by feel.”", ...[
			"S",
			"P",
			"I",
			"N"
		].map((l, i) => box(`l${i}`, 16 + i * 22, 22, 18, 14, l, {
			f: i === 1 || i === 2 ? "accent" : "soft",
			c: "accent",
			s: 5,
			o: i === 1 || i === 2 ? 1 : .4
		})), txt("x", 50, 44, "«Không biết kênh nào đáng tiền»", { s: 3.2 }), txt("y", 50, 52, "«Ngân sách tháng sau chốt theo cảm giác»", { s: 3.2 })),
		F("Need-payoff: «Có một thước đo để cắt một kênh.» Bốn câu hỏi, không câu nào là hợp đồng.", "Need-payoff: “A metric that lets you cut one channel.” Four questions; none of them is a contract.", ...[
			"S",
			"P",
			"I",
			"N"
		].map((l, i) => box(`l${i}`, 16 + i * 22, 22, 18, 14, l, {
			f: i === 3 ? "accent" : "soft",
			c: "accent",
			s: 5,
			o: i === 3 ? 1 : .4
		})), txt("x", 50, 46, "«Có một thước đo để cắt một kênh»", { s: 3.4 }))
	]),
	"fw-ask": M([
		F("Câu hỏi: «Anh có thấy kênh này yếu không?»", "Question: “Do you think this channel is weak?”", box("q", 50, 26, 72, 14, "Anh có thấy kênh\nnày yếu không?", { c: "blue" })),
		F("Câu trả lời «yếu» mới chỉ là một ý kiến.", "The answer “weak” is only an opinion.", box("q", 28, 26, 38, 14, "Anh có thấy\nkênh này yếu?", { o: .6 }), arr("a", 48, 26, 56, 26, "mute"), box("r", 76, 26, 32, 14, "«yếu»\n(ý kiến)", { c: "gold" })),
		F("Muốn thành kết luận cần một ngưỡng đã viết từ trước: «yếu = dưới 3%».", "To become a conclusion you need a threshold written beforehand: “weak = below 3%”.", box("r", 28, 26, 38, 14, "«yếu»\n(ý kiến)", { o: .6 }), arr("a", 48, 26, 56, 26, "green"), box("t", 76, 26, 32, 14, "dưới 3%\n(ngưỡng)", {
			f: "green",
			c: "green"
		})),
		F("Đo 2% < 3% thì mới được nói «yếu»; khi đó câu hỏi trở thành kết luận có căn cứ.", "Only when the measured 2% < 3% may you say “weak”; then the question becomes a grounded conclusion.", bars("b", [2, 3], ["đo được", "ngưỡng"], {
			c: ["red", "mute"],
			max: 4,
			unit: "%",
			base: 46,
			h: 28,
			x0: 25,
			x1: 75
		}), txt("t", 50, 8, "2% < 3% → yếu theo định nghĩa đã viết", {
			c: "red",
			s: 3.2
		}))
	]),
	"fw-bmc": M([
		F("Business Model Canvas: chín ô mô tả một mô hình kinh doanh.", "Business Model Canvas: nine boxes describe a business model.", ...[
			"đối tác",
			"hoạt động",
			"giá trị",
			"quan hệ",
			"khách hàng",
			"nguồn lực",
			"kênh",
			"chi phí",
			"doanh thu"
		].map((t, i) => box(`c${i}`, 20 + i % 3 * 30, 14 + Math.floor(i / 3) * 14, 27, 11, t, {
			c: "mute",
			s: 3
		}))),
		F("Ô «kênh» ghi «TikTok». Đây mới là một giả thuyết, chưa phải bằng chứng.", "The “channel” box says “TikTok”. This is a hypothesis, not yet evidence.", ...[
			"đối tác",
			"hoạt động",
			"giá trị",
			"quan hệ",
			"khách hàng",
			"nguồn lực",
			"kênh: TikTok",
			"chi phí",
			"doanh thu"
		].map((t, i) => box(`c${i}`, 20 + i % 3 * 30, 14 + Math.floor(i / 3) * 14, 27, 11, t, {
			c: i === 6 ? "accent" : "mute",
			f: i === 6 ? "gold" : "soft",
			s: 3,
			o: i === 6 ? 1 : .5
		}))),
		F("Cách kiểm tra: tỷ lệ form trên click của kênh đó, cùng một đơn vị dòng.", "How to test it: that channel's forms per click, at the same row unit.", box("h", 26, 20, 36, 14, "giả thuyết\nkênh: TikTok", { c: "gold" }), arr("a", 46, 20, 56, 20, "mute"), box("t", 76, 20, 36, 14, "form / click\ncùng đơn vị dòng", { c: "green" }), txt("x", 50, 46, "kiểm tra được → mới là bằng chứng", {
			c: "green",
			s: 3.4
		})),
		F("Nếu không kiểm tra được thì ô đó vẫn chỉ là lời nói; chín ô không thay được một mục tiêu SMART.", "If it cannot be tested the box is still just talk; nine boxes do not replace a SMART goal.", box("h", 28, 26, 38, 14, "ô không\nkiểm tra được", {
			c: "red",
			d: true
		}), box("g", 74, 26, 38, 14, "mục tiêu SMART\ncó số và hạn", { c: "green" }), txt("x", 50, 46, "ô chữ ≠ bằng chứng", {
			c: "red",
			s: 3.6
		}))
	]),
	"fw-mece": M([
		F("Câu hỏi gốc: «form đến từ đâu?»", "Root question: “where do forms come from?”", box("q", 50, 14, 50, 11, "form đến từ đâu?", {
			f: "accent",
			c: "accent"
		})),
		F("Cắt theo kênh: mỗi form thuộc đúng một kênh, các kênh cộng lại đủ 100% của tuần.", "Split by channel: each form belongs to exactly one channel and the channels add up to 100% of the week.", box("q", 50, 10, 50, 10, "form đến từ đâu?", {
			f: "accent",
			c: "accent"
		}), ...[
			"GDN\n50%",
			"TikTok\n30%",
			"Facebook\n20%"
		].flatMap((t, i) => [box(`b${i}`, 20 + i * 30, 36, 24, 14, t, { c: "blue" }), arr(`a${i}`, 50, 16, 20 + i * 30, 29, "mute")]), txt("s", 50, 52, "50 + 30 + 20 = 100% → MECE", {
			c: "green",
			s: 3.4
		})),
		F("Thêm nhánh «khách trẻ» là chồng một tiêu chí khác lên: một form vừa là TikTok vừa là khách trẻ.", "Adding a “young customers” branch layers another criterion: one form is both TikTok and young.", box("q", 50, 10, 50, 10, "form đến từ đâu?", { o: .6 }), ...[
			"GDN\n50%",
			"TikTok\n30%",
			"Facebook\n20%"
		].map((t, i) => box(`b${i}`, 20 + i * 30, 30, 24, 14, t, {
			c: "blue",
			o: .6
		})), box("y", 72, 40, 34, 14, "khách trẻ\n(chồng lên)", {
			c: "red",
			d: true
		}), txt("s", 50, 54, "một form bị đếm hai lần → không còn MECE", {
			c: "red",
			s: 3
		}))
	]),
	"fw-7p": M([
		F("7P: danh sách bảy mục để kiểm tra một dịch vụ, ví dụ một spa.", "7P: a seven-item checklist for a service, for example a spa.", ...[
			"Product",
			"Price",
			"Place",
			"Promotion",
			"People",
			"Process",
			"Physical\nevidence"
		].map((t, i) => box(`p${i}`, i < 4 ? 14 + i * 24 : 26 + (i - 4) * 24, i < 4 ? 20 : 38, 22, 12, t, {
			c: "blue",
			s: 3
		}))),
		F("Process: các bước của một lượt chăm sóc. Physical evidence: căn phòng và phiếu dịch vụ.", "Process: the steps of one treatment. Physical evidence: the room and the service sheet.", ...[
			"Product",
			"Price",
			"Place",
			"Promotion",
			"People",
			"Process",
			"Physical\nevidence"
		].map((t, i) => box(`p${i}`, i < 4 ? 14 + i * 24 : 26 + (i - 4) * 24, i < 4 ? 20 : 38, 22, 12, t, {
			c: i >= 5 ? "accent" : "blue",
			f: i >= 5 ? "accent" : "soft",
			s: 3,
			o: i >= 5 ? 1 : .45
		}))),
		F("Mục nào còn thiếu thì ghi «thiếu»; đừng nhân điểm hay xếp hạng các P.", "If an item is missing, write “missing”; do not multiply scores or rank the Ps.", ...[
			"Product",
			"Price",
			"Place",
			"Promotion",
			"People",
			"Process",
			"Physical\nevidence"
		].map((t, i) => box(`p${i}`, i < 4 ? 14 + i * 24 : 26 + (i - 4) * 24, i < 4 ? 20 : 38, 22, 12, i === 6 ? "Physical\nevidence: thiếu" : t, {
			c: i === 6 ? "red" : "blue",
			d: i === 6,
			s: 3,
			o: i === 6 ? 1 : .7
		})), txt("t", 50, 54, "danh sách kiểm tra, không phải bảng xếp hạng", {
			s: 3,
			c: "mute"
		}))
	]),
	"fw-5c": M([
		F("5C: năm phía cần nhìn trước khi chọn phương án.", "5C: five sides to look at before choosing an option.", box("c", 50, 30, 24, 12, "phương án", {
			f: "accent",
			c: "accent"
		}), ...[
			"Customers",
			"Competitors",
			"Collaborators",
			"Climate",
			"Company"
		].map((t, i) => {
			const ang = i / 5 * Math.PI * 2 - Math.PI / 2;
			return box(`c${i}`, 50 + Math.cos(ang) * 36, 30 + Math.sin(ang) * 22, 24, 9, t, {
				c: "blue",
				s: 2.8
			});
		})),
		F("Customers: ai đang gửi form. Competitors: ai đang mua cùng kênh.", "Customers: who is sending forms. Competitors: who is buying the same channel.", box("c", 50, 30, 24, 12, "phương án", {
			f: "accent",
			c: "accent",
			o: .5
		}), ...[
			"Customers",
			"Competitors",
			"Collaborators",
			"Climate",
			"Company"
		].map((t, i) => {
			const ang = i / 5 * Math.PI * 2 - Math.PI / 2;
			return box(`c${i}`, 50 + Math.cos(ang) * 36, 30 + Math.sin(ang) * 22, 24, 9, t, {
				c: i < 2 ? "accent" : "blue",
				f: i < 2 ? "accent" : "soft",
				s: 2.8,
				o: i < 2 ? 1 : .4
			});
		})),
		F("Collaborators: đơn vị đo và đơn vị chạy quảng cáo. Climate: một quy định hoặc một mùa vụ. Company: năng lực thật có trong hạn.", "Collaborators: the measurement and ad-running partners. Climate: a rule or a season. Company: real capability within the deadline.", box("c", 50, 30, 24, 12, "phương án", {
			f: "accent",
			c: "accent",
			o: .5
		}), ...[
			"Customers",
			"Competitors",
			"Collaborators",
			"Climate",
			"Company"
		].map((t, i) => {
			const ang = i / 5 * Math.PI * 2 - Math.PI / 2;
			return box(`c${i}`, 50 + Math.cos(ang) * 36, 30 + Math.sin(ang) * 22, 24, 9, t, {
				c: i >= 2 ? "accent" : "blue",
				f: i >= 2 ? "accent" : "soft",
				s: 2.8,
				o: i >= 2 ? 1 : .4
			});
		})),
		F("Đối tác đo sai đơn vị dòng thì phía Collaborators làm hỏng cả năm phía; năm phía không xếp hạng nhau.", "If the measuring partner counts the wrong row unit, Collaborators breaks all five sides; the five sides are not ranked.", box("c", 50, 30, 24, 12, "phương án", {
			c: "accent",
			o: .5
		}), ...[
			"Customers",
			"Competitors",
			"Collaborators",
			"Climate",
			"Company"
		].map((t, i) => {
			const ang = i / 5 * Math.PI * 2 - Math.PI / 2;
			return box(`c${i}`, 50 + Math.cos(ang) * 36, 30 + Math.sin(ang) * 22, 24, 9, t, {
				c: i === 2 ? "red" : "blue",
				f: i === 2 ? "red" : "soft",
				s: 2.8,
				o: i === 2 ? 1 : .6
			});
		}))
	]),
	"st-shape": M([
		F("Ba phần của một câu chuyện dữ liệu: tình huống bình thường, chỗ vướng, việc cần chốt.", "Three parts of a data story: the normal situation, the conflict, the resolution.", ...chain("c", [
			"bình thường",
			"chỗ vướng",
			"việc cần chốt"
		], { y: 28 })),
		F("Bình thường: form trên click là 4%.", "Normal: forms per click is 4%.", ...chain("c", [
			"bình thường",
			"chỗ vướng",
			"việc cần chốt"
		], {
			y: 12,
			on: 0,
			all: true,
			h: 9
		}), bars("b", [
			4,
			4,
			4,
			4
		], [
			"T1",
			"T2",
			"T3",
			"T4"
		], {
			c: "blue",
			max: 5,
			unit: "%",
			base: 50,
			h: 24,
			x0: 20,
			x1: 80
		})),
		F("Chỗ vướng: tuần này một kênh chỉ còn 2%.", "The conflict: this week one channel drops to 2%.", ...chain("c", [
			"bình thường",
			"chỗ vướng",
			"việc cần chốt"
		], {
			y: 12,
			on: 1,
			all: true,
			h: 9
		}), bars("b", [
			4,
			4,
			4,
			2
		], [
			"T1",
			"T2",
			"T3",
			"T4"
		], {
			c: [
				"blue",
				"blue",
				"blue",
				"red"
			],
			max: 5,
			unit: "%",
			base: 50,
			h: 24,
			x0: 20,
			x1: 80
		})),
		F("Việc cần chốt: có cắt ngân sách kênh đó trong hạn đã viết hay không.", "The resolution: cut that channel's budget within the stated deadline or not.", ...chain("c", [
			"bình thường",
			"chỗ vướng",
			"việc cần chốt"
		], {
			y: 12,
			on: 2,
			all: true,
			h: 9
		}), box("d", 50, 40, 74, 14, "cắt hay giữ ngân sách kênh đó\ntrước 30/11?", {
			f: "accent",
			c: "accent"
		}))
	]),
	"st-who": M([
		F("Người nghe: chốt ngân sách, có năm phút.", "The listener: decides the budget, has five minutes.", box("p", 28, 24, 38, 14, "người nghe\nchốt ngân sách", { c: "blue" }), box("t", 72, 24, 38, 14, "5 phút", {
			c: "gold",
			s: 5
		})),
		F("Họ đang tin rằng «TikTok rẻ».", "They currently believe “TikTok is cheap”.", box("p", 28, 24, 38, 14, "người nghe", { o: .5 }), box("b", 72, 24, 38, 14, "tin rằng\n«TikTok rẻ»", { c: "red" })),
		F("Câu chuyện phải chạm vào niềm tin đó bằng một tỷ lệ: TikTok 2% so với GDN 4% trên cùng một cách đếm.", "The story must hit that belief with one rate: TikTok 2% versus GDN 4% under the same counting.", bars("b", [2, 4], ["TikTok", "GDN"], {
			c: ["red", "blue"],
			max: 5,
			unit: "%",
			base: 46,
			h: 28,
			x0: 25,
			x1: 75
		}), txt("t", 50, 8, "một tỷ lệ chạm vào niềm tin", {
			c: "accent",
			s: 3.6
		})),
		F("Không dùng mười slide định nghĩa: năm phút chỉ đủ một thông điệp dẫn tới quyết định.", "Do not use ten definition slides: five minutes only fits one message that leads to a decision.", ...Array.from({ length: 10 }, (_, i) => box(`s${i}`, 10 + i % 5 * 20, 14 + Math.floor(i / 5) * 12, 16, 9, `slide ${i + 1}`, {
			c: "red",
			d: true,
			o: .35,
			s: 2.6
		})), box("o", 50, 46, 70, 11, "1 thông điệp → 1 quyết định", {
			f: "green",
			c: "green"
		}))
	]),
	"st-insight": M([
		F("Năm dạng nhận xét: xu hướng, khác biệt, phần của tổng, điểm lạ, đi cùng nhau.", "Five kinds of insight: trend, difference, share, outlier, together.", ...[
			"xu hướng",
			"khác biệt",
			"phần của tổng",
			"điểm lạ",
			"đi cùng nhau"
		].map((t, i) => box(`k${i}`, 18 + i % 3 * 32, i < 3 ? 22 : 40, 28, 12, t, {
			c: "blue",
			s: 3
		}))),
		F("Tám tuần của một kênh là xu hướng → đường. Ba kênh trong một tuần là khác biệt → cột.", "Eight weeks of one channel is a trend → line. Three channels in one week is a difference → bars.", ...[
			20,
			24,
			23,
			30,
			34,
			33,
			40,
			44
		].flatMap((v, i, a) => [dot(`p${i}`, 8 + i * 5, 34 - v / 3, "accent", 1), ...i > 0 ? [ln(`s${i}`, 8 + (i - 1) * 5, 34 - a[i - 1] / 3, 8 + i * 5, 34 - v / 3, "accent", { w: .6 })] : []]), bars("b", [
			80,
			40,
			55
		], [
			"A",
			"B",
			"C"
		], {
			c: "blue",
			max: 90,
			base: 50,
			h: 28,
			x0: 56,
			x1: 94,
			show: false
		}), txt("t1", 26, 8, "xu hướng", { c: "accent" }), txt("t2", 75, 8, "khác biệt", { c: "blue" })),
		F("Một tuần với đủ các kênh là phần của tổng; một tuần gấp mười các tuần còn lại là điểm lạ, cần đi kiểm tra chứ chưa kết luận.", "One week with all channels is a share; one week ten times the rest is an outlier, to check not conclude.", box("a", 12, 28, 10, 9, "50%", {
			f: "blue",
			c: "blue",
			s: 3
		}), box("b", 24, 28, 14, 9, "30%", {
			f: "accent",
			c: "accent",
			s: 3
		}), box("c", 36, 28, 10, 9, "20%", {
			f: "gold",
			c: "gold",
			s: 3
		}), txt("t1", 24, 18, "phần của tổng", { c: "blue" }), ...[
			4,
			5,
			4,
			5,
			4,
			50
		].map((v, i) => dot(`o${i}`, 56 + i * 7, 46 - Math.min(v, 50) / 2.2, i === 5 ? "red" : "blue", 1.3)), ring("r", 91, 46 - 50 / 2.2, 4, "red"), txt("t2", 75, 18, "điểm lạ → kiểm tra", { c: "red" })),
		F("Năm dạng giúp chọn biểu đồ; tương quan «đi cùng nhau» chỉ mô tả, không phải nhân quả.", "The five kinds help pick a chart; “together” (correlation) only describes; it is not causation.", ...[
			1,
			2,
			3,
			4,
			5,
			6,
			7
		].map((v, i) => dot(`t${i}`, 22 + i * 8, 44 - v * 3.4 - i % 2 * 1.5, "green", 1.5)), txt("t", 50, 10, "đi cùng nhau ≠ cái này gây ra cái kia", {
			c: "red",
			s: 3.4
		}))
	]),
	"st-pyramid": M([
		F("Câu cần chốt đứng trước: «Đề nghị không tăng ngân sách kênh này trong hạn 30/11.»", "The point to settle goes first: “We recommend not raising this channel's budget by 30 Nov.”", box("a", 50, 14, 80, 12, "Đề nghị: không tăng ngân sách\nkênh này trong hạn 30/11", {
			f: "accent",
			c: "accent"
		})),
		F("Rồi đến lý do: tỷ lệ 2% dưới ngưỡng 3%, và không kịp sửa trong hạn.", "Then the reasons: 2% is below the 3% threshold, and it cannot be fixed in time.", box("a", 50, 10, 80, 11, "Đề nghị: không tăng ngân sách", {
			f: "accent",
			c: "accent"
		}), box("r1", 28, 30, 38, 12, "2% < ngưỡng 3%", { c: "blue" }), box("r2", 72, 30, 38, 12, "không kịp sửa\ntrong hạn", { c: "blue" }), arr("x", 40, 16, 30, 24, "mute"), arr("y", 60, 16, 70, 24, "mute")),
		F("Cuối cùng là bằng chứng: cùng cách đếm với tuần nền.", "Last comes the evidence: the same counting method as the baseline week.", box("a", 50, 8, 70, 9, "Đề nghị: không tăng ngân sách", {
			f: "accent",
			c: "accent",
			s: 3
		}), box("r1", 28, 24, 38, 10, "2% < ngưỡng 3%", {
			c: "blue",
			s: 3
		}), box("r2", 72, 24, 38, 10, "không kịp sửa", {
			c: "blue",
			s: 3
		}), box("e", 50, 42, 76, 10, "bằng chứng: cùng cách đếm với tuần nền", {
			c: "green",
			s: 3
		}), arr("x", 28, 30, 44, 36, "mute"), arr("y", 72, 30, 56, 36, "mute")),
		F("Thứ tự này sắp xếp lập luận, không tạo ra lập luận: nếu bằng chứng chỉ là ý kiến thì nó vẫn là ý kiến.", "This order arranges an argument, it does not create one: if the evidence is only opinion, it stays opinion.", box("a", 50, 14, 70, 11, "kết luận", { c: "accent" }), box("r", 50, 30, 70, 11, "lý do", { c: "blue" }), box("e", 50, 46, 70, 11, "bằng chứng (số, không phải ý kiến)", {
			c: "green",
			s: 3
		}))
	]),
	"st-one": M([
		F("Hai tiêu đề trong một trang là hai câu chuyện bị trộn.", "Two headlines on one page are two stories mixed together.", box("p", 50, 26, 70, 30, "ngân sách kênh trong hạn này\n+ câu chuyện thương hiệu", {
			c: "red",
			d: true
		})),
		F("Tách thành hai trang: trang 1 chỉ nói ngân sách kênh trong hạn này.", "Split into two pages: page 1 only says this period's channel budget.", box("p1", 28, 28, 38, 26, "TRANG 1\nngân sách kênh\ntrong hạn này", {
			f: "accent",
			c: "accent"
		}), box("p2", 72, 28, 38, 26, "TRANG 2\nthương hiệu\n(nếu còn giờ)", {
			o: .5,
			c: "mute"
		})),
		F("Người nghe chỉ có năm phút thì chỉ nhận trang 1; trang 2 là phụ lục nếu còn giờ.", "A listener with five minutes only takes page 1; page 2 is an appendix if time remains.", box("p1", 28, 28, 38, 26, "TRANG 1\nđã nghe", {
			f: "green",
			c: "green"
		}), box("p2", 72, 28, 38, 26, "TRANG 2\nnếu còn giờ", {
			o: .4,
			d: true,
			c: "mute"
		}), txt("t", 50, 52, "một thông điệp = một quyết định + lý do", {
			c: "accent",
			s: 3.2
		}))
	])
};
var C = [
	"C0\nđặt câu hỏi",
	"C1\nlàm với máy",
	"C2\nsuy diễn",
	"C3\nmô hình"
];
var sc = (n) => chain("c", C, {
	y: 22,
	on: n,
	all: true,
	h: 14
});
var m3 = {
	"c0-order": M([
		F("Giáo trình có bốn khóa nối tiếp: C0 đặt câu hỏi, C1 làm việc với máy, C2 suy diễn, C3 mô hình.", "The syllabus has four courses in sequence: C0 asking, C1 working with the machine, C2 inference, C3 models.", ...sc(0)),
		F("C3 cần một dòng dữ liệu để dự đoán; dòng đó chỉ có sau C1 và C2.", "C3 needs a data row to predict from; that row only exists after C1 and C2.", ...sc(3), arr("a", 50, 34, 50, 44, "red", { d: true }), txt("t", 50, 52, "nhảy tới C3 → chưa có gì để đếm", {
			c: "red",
			s: 3.4
		})),
		F("Đi đúng thứ tự: mỗi khóa dựa vào khóa trước.", "Go in order: each course builds on the previous one.", ...sc(2), txt("t", 50, 46, "Toán và mô tả là bản ngắn, tùy chọn", {
			c: "mute",
			s: 3
		}))
	]),
	"c0-read": M([
		F("Một thẻ gồm bốn phần: lý do cần ý đó, nối với ý trước, hình minh họa, câu định nghĩa.", "A card has four parts: why it matters, link to the previous idea, an illustration, a definition.", ...chain("c", [
			"lý do",
			"nối ý trước",
			"hình",
			"định nghĩa"
		], {
			y: 26,
			on: 0,
			all: true,
			h: 14
		})),
		F("Bạn đọc lần lượt từng phần, không phải xem hết một video.", "You read part by part, not watch a whole video.", ...chain("c", [
			"lý do",
			"nối ý trước",
			"hình",
			"định nghĩa"
		], {
			y: 26,
			on: 2,
			h: 14
		})),
		F("Dừng khi câu định nghĩa đã khớp với hình. Sổ không chấm điểm.", "Stop when the definition matches the picture. The notebook does not grade.", ...chain("c", [
			"lý do",
			"nối ý trước",
			"hình",
			"định nghĩa"
		], {
			y: 26,
			on: 3,
			h: 14
		}), txt("t", 50, 46, "khớp hình = xong thẻ", {
			c: "green",
			s: 3.6
		}))
	]),
	"or-obj": M([
		F("Hai loại ô khác nhau: biến quyết định (bạn chọn) và hàm mục tiêu (công thức).", "Two different cells: decision variables (you choose) and the objective (a formula).", ...pair("p", "biến quyết định\nsố suất mỗi kênh", "hàm mục tiêu\ndoanh thu = công thức", {
			ca: "blue",
			cb: "accent"
		})),
		F("Bạn chỉ gõ số suất; doanh thu tự ra từ công thức của các suất đó.", "You only type slots; revenue comes out of the formula of those slots.", ...pair("p", "gõ: 10, 20, 5", "doanh thu = tổng(suất × giá)", {
			ca: "blue",
			cb: "accent",
			fb: "soft"
		}), arr("a", 48, 26, 52, 26, "mute")),
		F("Nếu gõ cả doanh thu, bạn tự điền đáp án và không còn gì để giải.", "If you type revenue too, you fill in the answer yourself and nothing is left to solve.", ...pair("p", "gõ: 10, 20, 5", "gõ cả doanh thu", {
			ca: "blue",
			cb: "red",
			d: true
		}), txt("t", 50, 46, "tự điền đáp án = không còn bài toán", {
			c: "red",
			s: 3.4
		}))
	]),
	"or-con": M([
		F("Ngân sách là 100. Mỗi suất có đơn giá riêng.", "The budget is 100. Each slot has its own unit cost.", box("b", 50, 20, 70, 14, "ngân sách ≤ 100", {
			f: "accent",
			c: "accent"
		})),
		F("Tổng số suất × đơn giá phải nhỏ hơn hoặc bằng 100.", "Total slots × unit cost must be at most 100.", box("b", 50, 12, 70, 10, "ngân sách ≤ 100", { c: "accent" }), ...stack("s", [
			"kênh A: 10 × 3 = 30",
			"kênh B: 20 × 2 = 40",
			"kênh C: 5 × 6 = 30"
		], {
			y0: 26,
			gap: 10,
			w: 60
		}), txt("t", 50, 56, "tổng = 100 ≤ 100", {
			c: "green",
			s: 3.4
		})),
		F("Quên dòng này thì «tối ưu» cứ tăng số suất mãi; đổi ≤ thành ≥ thì có thể không còn phương án.", "Forget the row and the “optimum” keeps adding slots; flip ≤ to ≥ and there may be no feasible plan.", box("b", 28, 24, 38, 14, "quên giới hạn\n→ tăng mãi", { c: "red" }), box("c", 72, 24, 38, 14, "viết ≥ thay ≤\n→ vô nghiệm", {
			c: "red",
			d: true
		}), txt("t", 50, 46, "mỗi nguồn lực: một bất đẳng thức", {
			c: "mute",
			s: 3.2
		}))
	]),
	"or-solv": M([
		F("Hai biến, ràng buộc là các đường thẳng: vùng khả thi là một đa giác.", "Two variables with linear constraints: the feasible region is a polygon.", ln("p1", 20, 40, 20, 12, "blue"), ln("p2", 20, 12, 70, 12, "blue"), ln("p3", 70, 12, 82, 36, "blue"), ln("p4", 82, 36, 55, 44, "blue"), ln("p5", 55, 44, 20, 40, "blue")),
		F("Với mục tiêu tuyến tính, solver chỉ cần xét các đỉnh: nó dừng ở một đỉnh.", "With a linear objective, the solver only needs to check the corners: it stops at a corner.", ln("p1", 20, 40, 20, 12, "blue"), ln("p2", 20, 12, 70, 12, "blue"), ln("p3", 70, 12, 82, 36, "blue"), ln("p4", 82, 36, 55, 44, "blue"), ln("p5", 55, 44, 20, 40, "blue"), ...[
			[20, 40],
			[20, 12],
			[70, 12],
			[82, 36],
			[55, 44]
		].map(([x, y], i) => ({
			id: `v${i}`,
			k: "dot",
			x,
			y,
			r: i === 3 ? 2.2 : 1.2,
			c: i === 3 ? "accent" : "blue"
		})), txt("t", 50, 54, "tối ưu nằm ở một đỉnh", {
			c: "accent",
			s: 3.4
		})),
		F("Thêm một bình phương vào mục tiêu: đường đồng mức cong, tối ưu có thể nằm giữa, và solver có thể dừng ở cực trị cục bộ.", "Add a square to the objective: contours curve, the optimum can be inside, and the solver may stop at a local extremum.", ln("p1", 20, 40, 20, 12, "blue", { o: .5 }), ln("p2", 20, 12, 70, 12, "blue", { o: .5 }), ln("p3", 70, 12, 82, 36, "blue", { o: .5 }), ln("p4", 82, 36, 55, 44, "blue", { o: .5 }), ln("p5", 55, 44, 20, 40, "blue", { o: .5 }), {
			id: "r",
			k: "ring",
			x: 48,
			y: 28,
			r: 8,
			c: "red"
		}, {
			id: "d",
			k: "dot",
			x: 48,
			y: 28,
			r: 1.8,
			c: "red"
		}, txt("t", 50, 54, "bài cong: thử nhiều điểm xuất phát", {
			c: "red",
			s: 3.2
		}))
	]),
	"or-sheet": M([
		F("Trang tính: B2:B4 là biến, B6 là mục tiêu, B8 ≤ B9 là giới hạn.", "Sheet: B2:B4 are variables, B6 the objective, B8 ≤ B9 the constraint.", ...stack("s", [
			"B2:B4 — biến (Solver được sửa)",
			"B6 — mục tiêu (công thức)",
			"B8 ≤ B9 — giới hạn ngân sách",
			"B12 — «nhớ kiểm tra giá»"
		], {
			y0: 12,
			gap: 11,
			w: 76,
			on: [
				0,
				1,
				2
			]
		})),
		F("Solver chỉ đọc ba vùng đã khai báo, không đọc B12.", "Solver reads only the three declared ranges, not B12.", ...stack("s", [
			"B2:B4 — biến (Solver được sửa)",
			"B6 — mục tiêu (công thức)",
			"B8 ≤ B9 — giới hạn ngân sách",
			"B12 — «nhớ kiểm tra giá»"
		], {
			y0: 12,
			gap: 11,
			w: 76,
			on: [
				0,
				1,
				2
			],
			bad: []
		}), txt("t", 50, 54, "B12 không tham gia bài toán", {
			c: "mute",
			s: 3
		})),
		F("Một giới hạn gõ thành ghi chú thì không phải giới hạn; phải là một ô công thức được khai báo.", "A constraint typed as a note is not a constraint; it must be a declared formula cell.", ...stack("s", ["B8 ≤ B9 — khai báo trong Solver", "B12: «ngân sách tối đa 100» (chữ)"], {
			y0: 18,
			gap: 16,
			w: 76,
			on: [0],
			bad: [1]
		}), txt("t", 50, 54, "chữ ghi chú ≠ giới hạn", {
			c: "red",
			s: 3.4
		}))
	]),
	"ga-next": M([
		F("Prompt: «Giá gói spa là bao nhiêu?», không kèm bảng giá.", "Prompt: “How much is the spa package?”, no price list attached.", box("p", 50, 24, 70, 14, "Giá gói spa là bao nhiêu?\n(không có bảng giá)", { c: "blue" })),
		F("Mô hình tính phân phối xác suất trên các mảnh chữ kế tiếp, rồi chọn một mảnh.", "The model computes a probability over next text pieces and picks one.", box("p", 50, 8, 70, 9, "Giá gói spa là...", {
			o: .6,
			s: 3
		}), ...[
			"800.000",
			"1.200.000",
			"950.000"
		].map((t, i) => box(`o${i}`, 22 + i * 28, 30, 24, 10, t, {
			c: "gold",
			s: 3
		})), txt("t", 50, 48, "mỗi mảnh có một xác suất", {
			c: "mute",
			s: 3
		})),
		F("Một số được viết ra, nghe hợp lý; nó không được tra từ cơ sở dữ liệu của công ty.", "A number gets written and sounds plausible; it was not looked up in the company's database.", box("p", 28, 26, 38, 14, "«1.200.000»\n(được sinh ra)", { c: "gold" }), box("d", 72, 26, 38, 14, "bảng giá thật\n(không có trong prompt)", {
			c: "red",
			d: true
		}), txt("t", 50, 48, "đừng báo con số này cho khách", {
			c: "red",
			s: 3.4
		}))
	]),
	"ga-vs": M([
		F("Hai việc khác nhau: đoán một cột và nối tiếp một đoạn chữ.", "Two different jobs: predict a column and continue a text.", ...pair("p", "học máy\nđoán một cột", "GenAI\nnối tiếp đoạn chữ")),
		F("Học máy: «khách này có rời đi không?» — có nhãn, có tập chấm, có một ô đúng.", "ML: “will this customer leave?” — labelled, with a test set and one right cell.", box("a", 50, 16, 80, 12, "khách này có rời đi không?  →  có / không", { c: "blue" }), box("b", 50, 36, 80, 12, "chấm bằng tập kiểm tra có nhãn", {
			f: "blue",
			c: "blue"
		})),
		F("GenAI: «viết một tin nhắn» — không có một ô đúng duy nhất, nên thước đo của việc 1 không áp được.", "GenAI: “write a message” — no single right cell, so the first job's metric does not apply.", box("a", 50, 16, 80, 12, "viết một tin nhắn cho khách", { c: "accent" }), box("b", 50, 36, 80, 12, "không có một ô đúng duy nhất", {
			c: "red",
			d: true
		}), txt("t", 50, 52, "gọi đúng tên việc trước khi chọn thước đo", {
			c: "mute",
			s: 3.2
		}))
	]),
	"ga-stack": M([
		F("Ba tầng: model, data, sản phẩm.", "Three layers: model, data, product.", ...stack("l", [
			"sản phẩm (nút, giao diện)",
			"data (tài liệu trong lần gọi)",
			"model (viết câu)"
		], {
			y0: 14,
			gap: 14,
			w: 70,
			h: 10
		})),
		F("Cùng một model: lần gọi có dán chính sách đổi trả cho câu khác lần không dán. Đó là tầng data.", "Same model: a call with the return policy pasted gives different text than one without. That is the data layer.", ...stack("l", [
			"sản phẩm (nút, giao diện)",
			"data (dán chính sách đổi trả)",
			"model (viết câu)"
		], {
			y0: 14,
			gap: 14,
			w: 70,
			h: 10,
			on: [1]
		})),
		F("Sản phẩm chưa có nút «đặt lịch» thì người dùng vẫn chỉ nhận được một đoạn chữ. Đó là tầng sản phẩm.", "If the product has no “book” button, users still only get text. That is the product layer.", ...stack("l", [
			"sản phẩm (chưa có nút đặt lịch)",
			"data (dán chính sách đổi trả)",
			"model (viết câu)"
		], {
			y0: 14,
			gap: 14,
			w: 70,
			h: 10,
			on: [0]
		}), txt("t", 50, 56, "nói rõ bạn đang đụng tầng nào", {
			c: "mute",
			s: 3
		}))
	]),
	"ga-use": M([
		F("Hai việc cùng dùng một mô hình: nháp tiêu đề và gửi giá cho khách.", "Two jobs, one model: drafting a headline and sending prices to a customer.", ...pair("p", "nháp tiêu đề\n(người sửa lại)", "tự gửi giá\ncho khách")),
		F("Giá của một lần sai: tiêu đề tệ thì sửa; giá sai gửi đi có thể thành một hợp đồng.", "Cost of one error: a bad headline is edited; a wrong price sent can become a contract.", ...pair("p", "sai → sửa\ngiá thấp", "sai → hợp đồng\ngiá cao", {
			ca: "green",
			cb: "red",
			fa: "soft"
		})),
		F("Hai việc không dùng chung một nút: việc giá cao phải có người duyệt hoặc nguồn kiểm được.", "The two jobs should not share a button: the high-cost one needs a reviewer or a checkable source.", ...pair("p", "tự động\nvới người sửa", "có người duyệt\n+ nguồn kiểm được", {
			ca: "green",
			cb: "red"
		}))
	]),
	"ga-chat": M([
		F("Một lần gọi gồm các message: system và user.", "One call contains messages: system and user.", box("s", 50, 14, 76, 10, "system: «chỉ dùng bảng giá đính kèm»", { c: "blue" }), box("u", 50, 30, 76, 10, "user: dán bảng giá + câu hỏi", { c: "accent" })),
		F("Thiếu một trong hai thì lần gọi không đủ thông tin.", "Missing either one means the call lacks information.", box("s", 50, 14, 76, 10, "system: «chỉ dùng bảng giá đính kèm»", { c: "blue" }), box("u", 50, 30, 76, 10, "user: (chưa dán bảng giá)", {
			c: "red",
			d: true
		}), txt("t", 50, 48, "không có bảng giá → không có nguồn", {
			c: "red",
			s: 3.4
		})),
		F("Mô hình không giữ hộ: lần gọi sau ứng dụng phải gửi lại cả hai.", "The model keeps nothing: on the next call the app must send both again.", box("a", 28, 22, 38, 14, "lần gọi 1\nsystem + user", { c: "blue" }), box("b", 72, 22, 38, 14, "lần gọi 2\ngửi lại cả hai", { c: "accent" }), arr("x", 48, 22, 52, 22, "mute"), txt("t", 50, 44, "system không phải khóa pháp lý", {
			c: "mute",
			s: 3
		}))
	]),
	"ga-tok": M([
		F("Cửa sổ ngữ cảnh có một trần token.", "The context window has a token ceiling.", box("w", 50, 24, 80, 18, "", {
			c: "blue",
			f: "soft"
		}), txt("t", 50, 10, "trần token", {
			c: "blue",
			s: 3.2
		})),
		F("Bảng giá dài một trang nằm trọn trong trần: lần gọi thấy được nó.", "A one-page price list fits inside the ceiling: the call sees it.", box("w", 50, 24, 80, 18, "", {
			c: "blue",
			f: "soft"
		}), box("p", 50, 24, 40, 10, "bảng giá 1 trang", {
			f: "green",
			c: "green"
		})),
		F("Chôn nó ở cuối một lần dán khổng lồ thì có thể không còn trong cửa sổ, nhưng hóa đơn vẫn tính phần đã gửi.", "Bury it at the end of a giant paste and it may fall out of the window, yet the bill counts what was sent.", box("w", 36, 24, 52, 18, "", {
			c: "blue",
			f: "soft"
		}), box("big", 58, 24, 56, 12, "đoạn dán khổng lồ …………… bảng giá", {
			c: "red",
			o: .8,
			s: 2.8
		}), txt("t", 50, 50, "ngoài trần = không thấy, vẫn bị tính tiền", {
			c: "red",
			s: 3.2
		}))
	]),
	"ga-prompt": M([
		F("Một prompt gồm ba phần: việc cần làm, ngữ cảnh, dạng đầu ra.", "A prompt has three parts: the task, the context, the output format.", ...chain("c", [
			"việc cần làm",
			"ngữ cảnh",
			"dạng đầu ra"
		], {
			y: 26,
			on: 0,
			all: true
		})),
		F("Việc: trả lời có được hoàn tiền không. Ngữ cảnh: đoạn chính sách đính kèm, không bịa thêm.", "Task: answer whether a refund is allowed. Context: the attached policy; no inventions.", ...chain("c", [
			"trả lời có\nhoàn tiền không",
			"đoạn chính sách\nđính kèm",
			"dạng đầu ra"
		], {
			y: 26,
			on: 1,
			h: 18
		})),
		F("Dạng: một câu có dẫn đúng chỗ trong đoạn, hoặc nói «không thấy trong đoạn».", "Format: one sentence citing the passage, or “not found in the passage”.", ...chain("c", [
			"trả lời có\nhoàn tiền không",
			"đoạn chính sách\nđính kèm",
			"một câu có dẫn\nhoặc «không thấy»"
		], {
			y: 26,
			on: 2,
			h: 18
		}))
	]),
	"ga-few": M([
		F("Muốn đầu ra là «có / không / không thấy trong đoạn».", "You want the output to be “yes / no / not in the passage”.", box("g", 50, 24, 70, 14, "đầu ra: có | không | không thấy", { c: "accent" })),
		F("Đưa ba mẫu đúng dạng đó vào prompt.", "Put three examples of exactly that format into the prompt.", ...[
			"mẫu 1 → có",
			"mẫu 2 → không",
			"mẫu 3 → không thấy"
		].map((t, i) => box(`e${i}`, 50, 12 + i * 12, 60, 9, t, {
			c: "blue",
			s: 3
		}))),
		F("Mẫu cố định dạng câu, nhưng không làm đoạn chính sách đúng hơn: chúng chỉ giúp dễ kiểm.", "Examples fix the sentence shape but do not make the policy any truer; they only make answers easier to check.", ...pair("p", "ví dụ\ncố định dạng", "dữ liệu\nvẫn phải đúng", {
			ca: "blue",
			cb: "red",
			d: true
		}))
	]),
	"ga-cot": M([
		F("Context không có giá. Mô hình vẫn được bảo «viết từng bước».", "The context has no price. The model is still told to “write step by step”.", box("c", 28, 24, 38, 14, "context:\nkhông có giá", {
			c: "red",
			d: true
		}), box("s", 72, 24, 38, 14, "«hãy viết\ntừng bước»", { c: "blue" })),
		F("Chuỗi bước vẫn viết ra một mức giá và một lý do nghe hợp lý.", "The chain still writes a price and a sensible-sounding reason.", ...stack("s", [
			"bước 1: gói thường ~ 1 triệu",
			"bước 2: cộng phụ phí",
			"bước 3: giá = 1.200.000"
		], {
			y0: 10,
			gap: 11,
			w: 70
		})),
		F("Không bước nào trỏ về nguồn trong context, nên đó không phải bằng chứng: đừng thu tiền theo giá đó.", "No step points to a source in the context, so it is not evidence: do not charge that price.", ...stack("s", [
			"bước 1: gói thường ~ 1 triệu",
			"bước 2: cộng phụ phí",
			"bước 3: giá = 1.200.000"
		], {
			y0: 10,
			gap: 11,
			w: 70,
			bad: [
				0,
				1,
				2
			],
			on: [
				0,
				1,
				2
			]
		}), txt("t", 50, 50, "bước không trỏ nguồn → bỏ", {
			c: "red",
			s: 3.4
		}))
	]),
	"sa-tune": M([
		F("Chính sách đổi trả sửa một câu.", "The return policy changes by one sentence.", box("p", 50, 24, 70, 14, "chính sách: «7 ngày» → «14 ngày»", { c: "accent" })),
		F("RAG: đổi tài liệu được tìm; câu mới có ngay ở lần gọi sau.", "RAG: change the searched document; the new sentence appears on the next call.", ...chain("c", [
			"sửa tài liệu",
			"xây lại index",
			"câu trả lời mới"
		], {
			y: 26,
			on: 2
		})),
		F("Fine-tune: huấn luyện lại cả mô hình vì một câu là nhầm tầng; nó đổi cách viết, không đổi sự thật như một bảng tra.", "Fine-tune: retraining the whole model for one sentence is the wrong layer; it changes style, not facts like a lookup table.", ...pair("p", "RAG\nđổi tài liệu", "fine-tune\nđổi trọng số", {
			ca: "green",
			cb: "red",
			fa: "green",
			d: true
		}), txt("t", 50, 46, "sự thật thay đổi → RAG; giọng văn ổn định → xét fine-tune", {
			c: "mute",
			s: 3
		}))
	]),
	"sa-react": M([
		F("Khách hỏi: «còn hàng không?»", "Customer asks: “is it in stock?”", ...chain("r", [
			"suy nghĩ",
			"gọi catalog",
			"nhìn kết quả"
		], {
			y: 26,
			on: 0,
			all: true
		})),
		F("Bước act: gọi catalog theo mã. Bước observe: số catalog trả về.", "Act: call the catalog by code. Observe: the number the catalog returns.", ...chain("r", [
			"suy nghĩ",
			"gọi catalog\ntheo mã A12",
			"catalog trả:\ncòn 0"
		], {
			y: 26,
			on: 2,
			h: 18
		})),
		F("Không có bước đó thì phải nói «chưa tra», không được bịa «còn 3». Vòng lặp cần một trần số bước.", "Without that step say “not checked yet”, never invent “3 left”. The loop needs a step ceiling.", box("a", 28, 26, 38, 14, "không tra\n→ «còn 3»", {
			c: "red",
			d: true
		}), box("b", 72, 26, 38, 14, "không tra\n→ «chưa tra»", { c: "green" }))
	]),
	"sa-stage": M([
		F("Ba chặng: nói theo prompt, gọi catalog, chấm các ca.", "Three stages: talk from the prompt, call the catalog, score the cases.", ...chain("s", [
			"1 nói theo\nprompt",
			"2 gọi\ncatalog",
			"3 chấm\ncác ca"
		], {
			y: 26,
			on: 0,
			all: true,
			h: 18
		})),
		F("Chặng 1 chưa có catalog nên chưa được nói giá. Chặng 2 mới có kết quả catalog.", "Stage 1 has no catalog so it may not quote prices. Stage 2 has catalog results.", ...chain("s", [
			"1 nói theo\nprompt",
			"2 gọi\ncatalog",
			"3 chấm\ncác ca"
		], {
			y: 26,
			on: 1,
			h: 18
		})),
		F("Chặng 3 so các ca với thước đo viết trước; chặng nào chưa có log thì chưa xảy ra.", "Stage 3 compares cases to a metric written beforehand; a stage without a log has not happened.", ...chain("s", [
			"1 nói theo\nprompt",
			"2 gọi\ncatalog",
			"3 chấm\ncác ca"
		], {
			y: 26,
			on: 2,
			h: 18
		}), txt("t", 50, 48, "không bịa một cuộc hội thoại", {
			c: "red",
			s: 3.2
		}))
	]),
	"sa-tool": M([
		F("Mã A12 gọi catalog: trả về giá và tồn kho.", "Code A12 calls the catalog: it returns price and stock.", box("q", 28, 26, 38, 14, "tra mã A12", { c: "blue" }), box("r", 72, 26, 38, 14, "giá: 900.000\ntồn: 4", {
			f: "green",
			c: "green"
		}), arr("a", 48, 26, 52, 26, "mute")),
		F("Câu trả lời nhắc lại đúng các trường đó và không thêm gì.", "The answer repeats exactly those fields and adds nothing.", box("r", 28, 26, 38, 14, "giá: 900.000\ntồn: 4", { c: "green" }), box("a", 72, 26, 38, 14, "«A12: 900.000đ,\ncòn 4»", { c: "accent" }), arr("x", 48, 26, 52, 26, "green")),
		F("Gói không có mã: không có dòng thì không có số; trả «không thấy mã», đừng đoán giá gần đúng.", "A package with no code: no row means no number; answer “code not found”, not a rough price.", box("q", 28, 26, 38, 14, "tra mã ???", { c: "blue" }), box("r", 72, 26, 38, 14, "không thấy mã", { c: "green" }), arr("x", 48, 26, 52, 26, "mute"), txt("t", 50, 48, "không có dòng ≠ giá 0", {
			c: "red",
			s: 3.4
		}))
	]),
	"sa-score": M([
		F("Ca viết trước: mã A12, catalog trả «hết hàng».", "Case written first: code A12, catalog says “out of stock”.", box("c", 50, 24, 70, 14, "ca: mã A12 → catalog: hết hàng", { c: "blue" })),
		F("Mô hình nói «còn hàng», rất chắc. Ca này sai.", "The model says “in stock”, very confidently. This case fails.", box("c", 28, 24, 38, 14, "đúng:\nhết hàng", { c: "green" }), box("m", 72, 24, 38, 14, "mô hình:\ncòn hàng", {
			c: "red",
			f: "red"
		})),
		F("Ba lần cùng nói «còn hàng» không làm nó đúng; thước đo là kết quả catalog, không phải số lần lặp lại.", "Saying “in stock” three times does not make it right; the metric is the catalog result, not repetition.", ...[
			"còn hàng",
			"còn hàng",
			"còn hàng"
		].map((t, i) => box(`m${i}`, 18 + i * 32, 22, 26, 10, t, {
			c: "red",
			s: 3
		})), box("c", 50, 42, 70, 10, "catalog: hết hàng → cả ba đều sai", {
			c: "green",
			s: 3
		}))
	]),
	"rag-why": M([
		F("Một file PDF nội bộ nằm ngoài mô hình.", "An internal PDF lives outside the model.", pair("p", "file PDF nội bộ", "mô hình", {
			ca: "gold",
			cb: "blue"
		})[0], pair("p", "file PDF nội bộ", "mô hình", {
			ca: "gold",
			cb: "blue"
		})[1]),
		F("RAG thêm một bước tìm: lấy vài đoạn của file rồi đặt vào prompt.", "RAG adds a search step: fetch a few passages of the file and put them in the prompt.", ...chain("r", [
			"file PDF",
			"tìm đoạn",
			"đoạn vào prompt",
			"mô hình"
		], {
			y: 26,
			on: 2,
			h: 14
		})),
		F("Không có đoạn nào vào prompt thì câu trả lời về file là câu không nguồn, dù bạn nói «RAG».", "With no passage in the prompt the answer about the file has no source, however much you say “RAG”.", ...chain("r", [
			"file PDF",
			"tìm đoạn",
			"(rỗng)",
			"mô hình"
		], {
			y: 26,
			on: 3,
			h: 14
		}), txt("t", 50, 48, "phải thấy đoạn nào đã vào prompt", {
			c: "red",
			s: 3.2
		}))
	]),
	"rag-chunk": M([
		F("Một mục dài 8 dòng, trong đó dòng 1 là lời hứa và dòng 6 là điều kiện.", "A section of 8 lines: line 1 is the promise, line 6 is the condition.", ...Array.from({ length: 8 }, (_, i) => box(`l${i}`, 50, 6 + i * 7, 70, 6, i === 0 ? "dòng 1: hoàn tiền" : i === 5 ? "dòng 6: điều kiện" : `dòng ${i + 1}`, {
			c: i === 0 || i === 5 ? "accent" : "mute",
			s: 2.8
		}))),
		F("Cắt mỗi mảnh 2 dòng: lời hứa và điều kiện nằm ở hai mảnh khác nhau.", "Cut into 2-line chunks: the promise and the condition land in different chunks.", ...Array.from({ length: 8 }, (_, i) => box(`l${i}`, i % 2 === 0 ? 40 : 40, 6 + i * 7, 56, 6, i === 0 ? "dòng 1: hoàn tiền" : i === 5 ? "dòng 6: điều kiện" : `dòng ${i + 1}`, {
			c: Math.floor(i / 2) === 0 ? "blue" : Math.floor(i / 2) === 2 ? "red" : "mute",
			s: 2.8
		})), txt("m1", 82, 9, "mảnh 1", {
			s: 2.8,
			c: "blue"
		}), txt("m3", 82, 37, "mảnh 3", {
			s: 2.8,
			c: "red"
		})),
		F("Hỏi về hoàn tiền có thể chỉ tìm thấy mảnh 1: lời hứa mà không có điều kiện.", "A refund question may only find chunk 1: the promise without its condition.", box("m1", 50, 20, 70, 14, "mảnh 1: «hoàn tiền»", {
			f: "gold",
			c: "gold"
		}), box("m3", 50, 40, 70, 12, "mảnh 3: «chỉ trong 7 ngày» (không được tìm)", {
			c: "red",
			d: true,
			s: 3
		}), txt("t", 50, 56, "cắt đoạn là cắt nghĩa", {
			c: "red",
			s: 3.4
		}))
	]),
	"rag-vec": M([
		F("Kho có hai tài liệu: FAQ marketing và điều khoản.", "The store holds two documents: a marketing FAQ and the terms.", ...pair("p", "FAQ marketing", "điều khoản", {
			ca: "gold",
			cb: "blue"
		})),
		F("Câu hỏi dùng chữ của FAQ nên FAQ đứng thứ nhất, điều khoản thứ hai.", "The question uses FAQ wording so the FAQ ranks first and the terms second.", ...stack("r", ["1. FAQ marketing", "2. điều khoản"], {
			y0: 14,
			gap: 14,
			w: 60,
			h: 10,
			on: [0]
		}), txt("t", 50, 46, "gần nhất theo độ gần, chưa phải đúng nhất", {
			c: "mute",
			s: 3
		})),
		F("Trả lời theo top-1 là trả lời nhầm tài liệu: lấy vài đoạn, đọc, rồi mới viết.", "Answering from top-1 uses the wrong document: take a few passages, read, then write.", ...stack("r", ["1. FAQ marketing", "2. điều khoản"], {
			y0: 14,
			gap: 14,
			w: 60,
			h: 10,
			on: [0, 1],
			bad: [0]
		}), txt("t", 50, 46, "top-1 không phải kết luận", {
			c: "red",
			s: 3.4
		}))
	]),
	"rag-idx": M([
		F("8 giờ: xây index khi điều khoản ghi «7 ngày».", "8:00: the index is built when the policy says “7 days”.", box("i", 28, 24, 38, 14, "8h: index\n«7 ngày»", { c: "blue" }), box("f", 72, 24, 38, 14, "file nguồn\n«7 ngày»", { c: "blue" })),
		F("9 giờ: file sửa thành «14 ngày», nhưng index vẫn là bản 8 giờ.", "9:00: the file becomes “14 days”, but the index is still the 8:00 version.", box("i", 28, 24, 38, 14, "index (8h)\n«7 ngày»", { c: "red" }), box("f", 72, 24, 38, 14, "file nguồn (9h)\n«14 ngày»", {
			f: "green",
			c: "green"
		})),
		F("Cả buổi sáng bot nói 7 ngày: đó là chỉ mục cũ, không phải mô hình ngoan cố. Phải xây lại index khi nguồn đổi.", "All morning the bot says 7 days: a stale index, not a stubborn model. Rebuild the index when the source changes.", ...chain("c", [
			"file đổi",
			"xây lại index",
			"bot nói 14"
		], {
			y: 26,
			on: 2
		}))
	]),
	"rag-rank": M([
		F("Có 20 đoạn xếp theo độ gần; điều khoản đúng đứng thứ 15.", "20 passages ordered by similarity; the right clause is 15th.", ...Array.from({ length: 20 }, (_, i) => box(`p${i}`, 8 + i % 10 * 9.4, 20 + Math.floor(i / 10) * 12, 8, 8, String(i + 1), {
			c: i === 14 ? "accent" : "mute",
			f: i === 14 ? "accent" : "soft",
			s: 2.8
		}))),
		F("Re-rank đọc lại cả danh sách và kéo điều khoản đó lên đầu.", "Re-rank reads the list again and lifts that clause to the top.", ...Array.from({ length: 20 }, (_, i) => box(`p${i}`, 8 + i % 10 * 9.4, 20 + Math.floor(i / 10) * 12, 8, 8, String(i + 1), {
			c: i === 14 ? "green" : "mute",
			f: i === 14 ? "green" : "soft",
			s: 2.8
		})), box("t", 50, 52, 70, 8, "re-rank: đoạn 15 → hạng 1", {
			c: "green",
			s: 3
		})),
		F("Nhưng nếu bước tìm chỉ giữ 5 đoạn đầu thì đoạn 15 không bao giờ vào danh sách: re-rank không tìm hộ.", "But if the search keeps only the top 5, passage 15 never enters the list: re-rank cannot find it for you.", ...Array.from({ length: 20 }, (_, i) => box(`p${i}`, 8 + i % 10 * 9.4, 20 + Math.floor(i / 10) * 12, 8, 8, String(i + 1), {
			c: i < 5 ? "blue" : i === 14 ? "red" : "mute",
			f: i < 5 ? "soft" : "soft",
			o: i < 5 || i === 14 ? 1 : .35,
			s: 2.8
		})), txt("t", 50, 52, "chỉ giữ 5 đoạn → đoạn 15 ngoài danh sách", {
			c: "red",
			s: 3.2
		}))
	]),
	"rag-near": M([
		F("Buổi demo chạy một câu hỏi và tìm được một đoạn.", "The demo runs one question and finds one passage.", box("d", 50, 24, 60, 14, "demo: 1 câu hỏi → 1 đoạn", { c: "blue" })),
		F("Đó chưa phải đánh giá: đánh giá cần một bộ ca, gồm cả ca mà độ gần sẽ phản bội.", "That is not an evaluation: evaluation needs a set of cases, including ones where similarity betrays you.", ...[
			"ca 1 (demo)",
			"ca 2",
			"ca 3: độ gần sai"
		].map((t, i) => box(`c${i}`, 50, 12 + i * 12, 60, 9, t, {
			c: i === 2 ? "red" : "blue",
			s: 3,
			o: i === 0 ? 1 : .9
		}))),
		F("Giữ một bộ ca; demo chỉ là một câu trong bộ đó, nếu nó đáng nằm trong bộ.", "Keep a case set; the demo is just one row in it, if it deserves to be.", box("s", 50, 24, 76, 18, "bộ ca: demo là một dòng", {
			c: "green",
			f: "soft"
		}), txt("t", 50, 46, "một lần chạy được ≠ một kết quả", {
			c: "mute",
			s: 3.2
		}))
	]),
	"rag-store": M([
		F("Hai collection trong Chroma: policy-2026-09 và policy-2026-10.", "Two Chroma collections: policy-2026-09 and policy-2026-10.", ...pair("p", "policy-2026-09", "policy-2026-10", {
			ca: "blue",
			cb: "blue"
		})),
		F("Lần gọi trỏ nhầm vào policy-2026-09 nên câu trả lời bám theo tháng 9.", "The call points at policy-2026-09, so the answer follows September.", ...pair("p", "policy-2026-09\n← lần gọi trỏ vào", "policy-2026-10", {
			ca: "red",
			fa: "red",
			cb: "mute",
			ob: .4
		})),
		F("Đó không phải embedding hỏng: ghi tên kho trong log, đừng nói «đã tìm vector store» như thể chỉ có một kho.", "Not a broken embedding: log the collection name; do not say “searched the vector store” as if there were one.", ...pair("p", "log: tìm trong\npolicy-2026-10", "tên kho phải\nnằm trong log", {
			ca: "green",
			cb: "accent"
		}))
	]),
	"rag-demo": M([
		F("Buổi RAG Demonstration chạy một câu và in ra một câu trả lời.", "The RAG demonstration runs one question and prints one answer.", ...chain("r", [
			"câu hỏi",
			"đoạn đã tìm",
			"câu đã viết"
		], {
			y: 26,
			on: 2,
			all: true
		})),
		F("Giữ đoạn đã tìm cạnh câu đã viết: có cặp đó mới có một ca.", "Keep the retrieved passage next to the written answer: only that pair makes a case.", ...pair("p", "đoạn đã tìm\n«hoàn tiền: không nêu số»", "câu đã viết\n«hoàn 500.000đ»", {
			ca: "blue",
			cb: "red"
		})),
		F("Kiểm tra: số tiền trong câu có nằm trong đoạn không? Không thì câu bịa số.", "Check: is the amount in the answer inside the passage? If not, the answer invented it.", ...pair("p", "đoạn: không có\nsố tiền", "câu: có số\n500.000đ", {
			ca: "blue",
			cb: "red",
			d: true
		}), txt("t", 50, 46, "số không nằm trong đoạn → bịa", {
			c: "red",
			s: 3.4
		}))
	])
};
var m4 = {
	"im-grid": M([
		F("Một bức ảnh biển hiệu chia thành lưới ô nhỏ.", "A photo of a shop sign is divided into a grid of small cells.", ...Array.from({ length: 24 }, (_, i) => box(`g${i}`, 20 + i % 6 * 12, 10 + Math.floor(i / 6) * 9, 11, 8, "", {
			c: "mute",
			f: "soft"
		}))),
		F("Mỗi ô là một con số độ sáng, không phải «chữ» hay «đường phố».", "Each cell is a brightness number, not “letters” or “a street”.", ...Array.from({ length: 24 }, (_, i) => box(`g${i}`, 20 + i % 6 * 12, 10 + Math.floor(i / 6) * 9, 11, 8, String(i * 37 % 99), {
			c: "blue",
			f: "soft",
			s: 2.8
		}))),
		F("Prompt «một góc phố» cho ra một lưới số trông giống góc phố; nó không phải địa chỉ bạn có thể gửi khách đến.", "A “street corner” prompt yields a number grid that looks like one; it is not an address you can send customers to.", box("a", 28, 26, 38, 14, "lưới số\ntrông như góc phố", { c: "blue" }), box("b", 72, 26, 38, 14, "địa chỉ thật\n(không có)", {
			c: "red",
			d: true
		}), txt("t", 50, 48, "biển hiệu trông thật ≠ có thật", {
			c: "red",
			s: 3.4
		}))
	]),
	"im-vae": M([
		F("Ảnh biển hiệu có một chữ nhỏ ở góc.", "The sign photo has a small word in the corner.", box("i", 50, 22, 60, 24, "ảnh gốc: chữ nhỏ rõ nét", { c: "blue" })),
		F("VAE nén ảnh thành một mã ngắn, chỉ giữ phần chung.", "A VAE compresses the image to a short code that keeps only the common parts.", ...chain("v", [
			"ảnh gốc",
			"mã ngắn",
			"ảnh dựng lại"
		], {
			y: 26,
			on: 1
		})),
		F("Chữ nhỏ là phần riêng, đã bị bỏ khi nén: sau khi dựng lại nó thành một vệt mờ.", "The small word is a specific detail dropped in compression: after rebuilding it is a blur.", ...pair("p", "ảnh gốc\nchữ rõ", "dựng lại\nchữ thành vệt", {
			ca: "blue",
			cb: "red",
			fb: "soft"
		}), txt("t", 50, 48, "không phải «phông chữ nghệ thuật»", {
			c: "red",
			s: 3.2
		}))
	]),
	"im-gan": M([
		F("GAN có hai bên: kẻ làm giả viết ảnh, người chê phân biệt thật giả.", "A GAN has two sides: a forger writes images and a critic tells real from fake.", ...pair("p", "kẻ làm giả", "người chê", {
			ca: "accent",
			cb: "blue"
		})),
		F("Kẻ làm giả viết một đôi giày không có mã; người chê không bắt được và gật đầu.", "The forger writes a shoe with no SKU; the critic cannot catch it and nods.", box("a", 24, 22, 32, 12, "giày không mã", { c: "accent" }), arr("x", 41, 22, 55, 22, "mute"), box("b", 76, 22, 32, 12, "người chê: «ổn»", { c: "green" })),
		F("Người chê gật không có nghĩa là kho của bạn có đôi giày đó.", "The critic's nod does not mean your stock has that shoe.", box("a", 28, 24, 38, 14, "người chê\ngật đầu", { c: "green" }), box("b", 72, 24, 38, 14, "kho của bạn:\nkhông có", {
			c: "red",
			d: true
		}), txt("t", 50, 46, "ảnh đẹp ≠ sản phẩm tồn tại", {
			c: "red",
			s: 3.4
		}))
	]),
	"im-diff": M([
		F("Diffusion bắt đầu từ ảnh toàn nhiễu.", "Diffusion starts from an all-noise image.", ...Array.from({ length: 18 }, (_, i) => dot(`n${i}`, 20 + i % 6 * 12, 14 + Math.floor(i / 6) * 10, "mute", 1.4))),
		F("Mỗi bước gỡ bớt một ít nhiễu theo hướng prompt mô tả, dần hiện ra một bao bì.", "Each step removes a little noise toward what the prompt describes, gradually revealing a package.", ...chain("d", [
			"toàn nhiễu",
			"bớt nhiễu",
			"hiện hình",
			"bao bì"
		], {
			y: 26,
			on: 2,
			h: 14
		})),
		F("Mã vạch trên bao bì chỉ là các ô nhiễu còn sót lại, không phải mã trong hệ thống; nó không tra từ một kho ảnh.", "The barcode is leftover noise cells, not a code in your system; it was not looked up in an image store.", ...pair("p", "mã vạch\ntrong ảnh", "mã trong\nhệ thống", {
			ca: "red",
			cb: "mute",
			d: true
		}), txt("t", 50, 46, "chỉ là nhiễu còn sót", {
			c: "red",
			s: 3.4
		}))
	]),
	"im-txt": M([
		F("Prompt mô tả một bao bì, gửi vào mô hình sinh ảnh.", "A prompt describes a package and goes into an image model.", ...chain("p", [
			"prompt",
			"mô hình ảnh",
			"ảnh"
		], {
			y: 26,
			on: 2,
			all: true
		})),
		F("Ảnh ra chỉ là một hình minh họa, chưa phải một bao bì đã in.", "The output is only an illustration, not a printed package.", ...pair("p", "ảnh minh họa", "bao bì đã in", {
			ca: "blue",
			cb: "mute",
			d: true,
			ob: .5
		})),
		F("Prompt lái bức ảnh nhưng không chứng nhận nó: đừng bịa thông số cho sản phẩm trong ảnh.", "A prompt steers the picture but does not certify it: do not invent specs for the product shown.", box("a", 28, 26, 38, 14, "prompt lái ảnh", { c: "blue" }), box("b", 72, 26, 38, 14, "chứng nhận\nthông số (không có)", {
			c: "red",
			d: true
		}), txt("t", 50, 48, "chỉ ghi thông số lấy từ nguồn thật", {
			c: "mute",
			s: 3
		}))
	]),
	"rag-job": M([
		F("Bài yêu cầu RAG trên các văn bản được giao.", "The assignment requires RAG over the assigned documents.", box("s", 50, 24, 70, 16, "văn bản được giao\n(phạm vi của bài)", {
			c: "green",
			f: "soft"
		})),
		F("Câu trả lời dẫn một điều khoản nằm trong các văn bản đó là câu trong bài.", "An answer quoting a clause that is inside those texts is in scope.", box("s", 50, 20, 70, 16, "văn bản được giao", {
			c: "green",
			f: "soft"
		}), box("c", 50, 20, 40, 8, "điều khoản trong file", {
			c: "green",
			f: "green"
		})),
		F("Một điều khoản không có trong đó là câu ngoài bài, dù ngoài đời nó có thật.", "A clause not in them is out of scope, even if it is real in life.", box("s", 36, 24, 52, 18, "văn bản được giao", {
			c: "green",
			f: "soft"
		}), box("c", 82, 24, 30, 12, "điều khoản lạ", {
			c: "red",
			d: true
		}), txt("t", 50, 48, "đúng ngoài đời ≠ đúng trong bài", {
			c: "red",
			s: 3.4
		}))
	]),
	"lc-tpl": M([
		F("Khuôn: «chỉ dùng đoạn sau: {passage}». Chỗ trống {passage} chờ được điền.", "Template: “use only this passage: {passage}”. The {passage} slot waits to be filled.", box("t", 50, 24, 80, 14, "chỉ dùng đoạn sau: {passage}", { c: "blue" })),
		F("Điền một đoạn tìm được vào chỗ trống: lần gọi bám theo nguồn.", "Fill the slot with a retrieved passage: the call stays tied to a source.", box("t", 50, 16, 80, 12, "chỉ dùng đoạn sau: «hoàn tiền trong 14 ngày»", {
			c: "green",
			s: 3
		}), txt("n", 50, 36, "có nguồn → còn trong RAG", {
			c: "green",
			s: 3.4
		})),
		F("Nếu passage rỗng mà vẫn gọi, mọi câu trả lời sau đó nằm ngoài RAG dù code dùng LangChain.", "If passage is empty and you still call, every answer is outside RAG even if the code uses LangChain.", box("t", 50, 16, 80, 12, "chỉ dùng đoạn sau: ( rỗng )", {
			c: "red",
			d: true,
			s: 3
		}), txt("n", 50, 36, "tên thư viện không tạo ra nguồn", {
			c: "red",
			s: 3.4
		}))
	]),
	"lc-parse": M([
		F("Dạng yêu cầu: «có» hoặc «không», kèm đúng mã.", "The required form: “yes” or “no”, with the exact code.", box("p", 50, 24, 70, 14, "dạng: có|không + mã", { c: "blue" })),
		F("Mô hình viết: «tôi nghĩ là có, khoảng 2 triệu». Không đúng dạng.", "The model writes: “I think yes, about 2 million”. Wrong shape.", ...chain("c", ["mô hình viết\n«tôi nghĩ là có…»", "parser"], {
			y: 26,
			on: 1,
			h: 18
		})),
		F("Parser vỡ và báo lỗi dạng. Kết quả đúng của hệ thống là lỗi, không phải «có».", "The parser breaks and reports a shape error. The system's right result is the error, not “yes”.", box("a", 28, 24, 38, 14, "parser:\nlỗi dạng", {
			c: "red",
			f: "red"
		}), box("b", 72, 24, 38, 14, "đừng đọc thành\n«có»", {
			c: "mute",
			d: true
		}), txt("t", 50, 46, "không đoán ý mô hình", {
			c: "red",
			s: 3.4
		}))
	]),
	"lc-agent": M([
		F("Chain là đường đã vẽ sẵn: tra catalog rồi trả lời.", "A chain is a pre-drawn path: query the catalog, then answer.", ...chain("c", ["tra catalog", "trả lời"], {
			y: 26,
			on: 1,
			x0: 25,
			x1: 75
		})),
		F("Agent tự chọn bước sau: catalog hay chính sách tùy câu hỏi.", "An agent picks the next step itself: catalog or policy depending on the question.", box("q", 20, 26, 22, 12, "câu hỏi mở", { c: "accent" }), box("a", 62, 12, 30, 10, "catalog", { c: "blue" }), box("b", 62, 40, 30, 10, "chính sách", { c: "blue" }), arr("x", 31, 24, 47, 14, "mute"), arr("y", 31, 28, 47, 38, "mute")),
		F("Cả hai đều cần trần: dừng sau vài bước dù chưa «hài lòng».", "Both need a ceiling: stop after a few steps even if not “satisfied”.", ...chain("c", [
			"bước 1",
			"bước 2",
			"bước 3",
			"dừng"
		], {
			y: 26,
			on: 3,
			h: 14
		}), txt("t", 50, 48, "trần số bước = bắt buộc", {
			c: "red",
			s: 3.4
		}))
	]),
	"cap-none": M([
		F("Một capstone vẫn bắt đầu bằng câu: ai quyết định điều gì?", "A capstone still starts with: who decides what?", box("q", 50, 24, 74, 14, "ai quyết định điều gì?", {
			f: "accent",
			c: "accent"
		})),
		F("Sau đó đi đúng các bước CRISP-DM quen thuộc.", "Then follow the familiar CRISP-DM steps.", ...chain("c", [
			"hiểu bài toán",
			"hiểu dữ liệu",
			"chuẩn bị",
			"mô hình",
			"đánh giá"
		], {
			y: 26,
			on: 0,
			h: 14
		})),
		F("Không có công thức mới nào tên là capstone: nó chỉ là một bài làm.", "No new formula is named capstone: it is just an assignment.", box("a", 50, 24, 70, 14, "capstone = bài làm\nkhông có buổi dạy thêm", { c: "mute" }))
	]),
	"ht-h0": M([
		F("Hai bản quảng cáo A và B. Muốn biết B có khác A không.", "Two ads A and B. We want to know whether B differs from A.", ...pair("p", "bản A", "bản B", {
			ca: "blue",
			cb: "accent"
		})),
		F("H0 (giả thuyết không): tỷ lệ form của B bằng A. H1: hai tỷ lệ khác nhau.", "H0 (null): B's form rate equals A's. H1: the two rates differ.", box("a", 28, 24, 38, 16, "H0\nB = A", { c: "blue" }), box("b", 72, 24, 38, 16, "H1\nB ≠ A", { c: "accent" })),
		F("«B thắng» chưa phải giả thuyết mà là kết luận, chỉ được nói sau khi có bằng chứng.", "“B wins” is a conclusion, not a hypothesis, to be said only after evidence.", box("a", 28, 24, 38, 14, "H0 / H1\n(viết trước)", { c: "green" }), box("b", 72, 24, 38, 14, "«B thắng»\n(kết luận sau)", {
			c: "red",
			d: true
		}), arr("x", 48, 24, 52, 24, "mute"))
	]),
	"ht-p": M([
		F("Giả sử H0 đúng: hai bản bằng nhau, và mẫu hay lệch quanh 0.", "Assume H0 is true: the two ads are equal and samples scatter around 0.", ...bell("b", 50, 46, {
			w: 80,
			h: 28
		}), txt("t", 50, 52, "mức chênh giữa hai bản", {
			s: 2.8,
			c: "mute"
		})),
		F("Mẫu của bạn lệch ở đây: phần đuôi từ chỗ đó ra ngoài là p-value.", "Your sample sits here: the tail beyond it is the p-value.", ...bell("b", 50, 46, {
			w: 80,
			h: 28
		}), ln("m", 74, 46, 74, 20, "accent", { w: .7 }), txt("t", 80, 18, "p ≈ 0,03", {
			c: "accent",
			s: 3.6
		})),
		F("p = 0,03: nếu H0 đúng, lệch như thế chỉ gặp khoảng 3 lần trong 100 lần làm lại. Đó không phải xác suất H0 đúng.", "p = 0.03: if H0 is true you would see a gap this big about 3 times in 100 repeats. It is not the probability H0 is true.", ...bell("b", 50, 46, {
			w: 80,
			h: 28,
			op: .5
		}), ...Array.from({ length: 3 }, (_, i) => dot(`d${i}`, 78 + i * 4, 40, "accent", 1.2)), txt("t", 50, 10, "độ hiếm của mẫu, không phải P(H0 đúng)", {
			c: "red",
			s: 3.2
		}))
	]),
	"ht-err": M([
		F("Hai thực tế có thể xảy ra, và hai cách bạn kết luận.", "Two realities and two calls you can make.", box("a", 28, 14, 38, 10, "thật sự bằng nhau", { c: "blue" }), box("b", 72, 14, 38, 10, "thật sự khác", { c: "accent" }), box("c", 28, 36, 38, 10, "bạn báo «khác»", { c: "mute" }), box("d", 72, 36, 38, 10, "bạn báo «bằng»", { c: "mute" })),
		F("Thật sự bằng nhau mà bạn báo «khác»: báo động giả (loại I), cỡ α = 5%.", "Truly equal but you call “different”: false alarm (type I), size α = 5%.", box("a", 28, 14, 38, 10, "thật sự bằng nhau", { c: "blue" }), box("c", 28, 36, 38, 10, "bạn báo «khác»", {
			c: "red",
			f: "red"
		}), arr("x", 28, 20, 28, 31, "red"), txt("t", 70, 28, "báo động giả (loại I)", {
			c: "red",
			s: 3.2
		})),
		F("Thật sự khác mà bạn báo «bằng»: bỏ sót (loại II). Với α = 5%, 100 lần làm đúng luật thì khoảng 5 lần vẫn báo sai ở trường hợp bằng nhau.", "Truly different but you call “equal”: a miss (type II). With α = 5%, about 5 of 100 rule-following runs still shout wrong when truly equal.", box("b", 72, 14, 38, 10, "thật sự khác", { c: "accent" }), box("d", 72, 36, 38, 10, "bạn báo «bằng»", {
			c: "red",
			f: "red"
		}), arr("x", 72, 20, 72, 31, "red"), txt("t", 28, 28, "bỏ sót (loại II)", {
			c: "red",
			s: 3.2
		}))
	]),
	"ht-t": M([
		F("12 tuần dữ liệu, độ lệch chuẩn tính từ chính 12 tuần đó.", "12 weeks of data, with the standard deviation estimated from those 12 weeks.", bars("b", [
			8,
			9,
			10,
			10,
			11,
			12,
			10,
			9,
			11,
			12,
			10,
			11
		], [
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			""
		], {
			c: "blue",
			max: 14,
			show: false,
			base: 40,
			h: 26,
			x0: 10,
			x1: 90
		}), txt("t", 50, 50, "độ lệch chuẩn cũng là ước lượng", {
			c: "mute",
			s: 3
		})),
		F("Phân phối chuẩn có đuôi mỏng; vạch bác ở đây.", "The normal curve has thin tails; its cutoff sits here.", ...bell("b", 50, 44, {
			w: 80,
			h: 28,
			op: 1
		}), ln("c1", 66, 44, 66, 24, "red", {
			w: .6,
			d: true
		}), txt("t", 66, 20, "vạch chuẩn", {
			c: "red",
			s: 2.8
		})),
		F("Phân phối t với 11 bậc tự do đuôi dày hơn, vạch đứng xa hơn: khó bác quá sớm.", "The t curve with 11 degrees of freedom has fatter tails, its cutoff sits farther out: harder to reject too early.", ...bell("b", 50, 44, {
			w: 80,
			h: 28,
			op: .35
		}), ...bell("f", 50, 44, {
			w: 80,
			h: 28,
			fat: 4,
			c: "accent"
		}), ln("c1", 66, 44, 66, 24, "red", {
			w: .6,
			d: true,
			o: .4
		}), ln("c2", 71, 44, 71, 24, "accent", { w: .7 }), txt("t", 71, 20, "vạch t", {
			c: "accent",
			s: 2.8
		}))
	]),
	"ht-means": M([
		F("GDN trung bình 120.000đ (độ lệch chuẩn 30.000đ, 36 form), Facebook 135.000đ (40.000đ, 36 form).", "GDN averages 120,000 (SD 30,000, 36 forms), Facebook 135,000 (40,000, 36 forms).", ...numline("n", 100, 160, {
			y: 36,
			ticks: [
				100,
				120,
				135,
				160
			]
		}), dot("a", at(120, 100, 160), 36, "blue", 2), dot("b", at(135, 100, 160), 36, "accent", 2), txt("la", at(120, 100, 160), 26, "GDN 120", {
			s: 3,
			c: "blue"
		}), txt("lb", at(135, 100, 160), 26, "FB 135", {
			s: 3,
			c: "accent"
		})),
		F("Khoảng cách giữa hai trung bình là 15.000đ, nhưng mỗi trung bình có sai số của nó.", "The gap between the means is 15,000, but each mean has its own error.", ...numline("n", 100, 160, {
			y: 36,
			ticks: [
				100,
				120,
				135,
				160
			]
		}), ring("a", at(120, 100, 160), 36, 6, "blue"), ring("b", at(135, 100, 160), 36, 6.8, "accent"), dot("a2", at(120, 100, 160), 36, "blue", 2), dot("b2", at(135, 100, 160), 36, "accent", 2), txt("t", 50, 12, "sai số ≈ 8.000đ; chênh 15.000đ", {
			c: "mute",
			s: 3
		})),
		F("So khoảng cách với sai số: khoảng 1,9 sai số, gần ngưỡng; phép kiểm định cho biết đó có thể chỉ là nhiễu.", "Compare the gap with its error: about 1.9 errors, near the threshold; the test says whether it may be only noise.", bars("b", [1.9, 2], ["chênh / sai số", "ngưỡng ≈ 2"], {
			c: ["accent", "mute"],
			max: 3,
			base: 46,
			h: 28,
			x0: 25,
			x1: 75
		}))
	]),
	"ht-props": M([
		F("Mỗi bản có 2.000 người xem. A: 40 form (2,0%). B: 52 form (2,6%).", "Each ad has 2,000 viewers. A: 40 forms (2.0%). B: 52 forms (2.6%).", bars("b", [2, 2.6], ["A 2,0%", "B 2,6%"], {
			c: ["blue", "accent"],
			max: 3,
			base: 46,
			h: 30,
			x0: 25,
			x1: 75,
			unit: "%"
		})),
		F("Chênh 0,6 điểm phần trăm. Câu hỏi: chênh đó có lớn hơn nhiễu do chọn mẫu không?", "A gap of 0.6 percentage points. Question: is it bigger than sampling noise?", bars("b", [2, 2.6], ["A 2,0%", "B 2,6%"], {
			c: ["blue", "accent"],
			max: 3,
			base: 46,
			h: 30,
			x0: 25,
			x1: 75,
			unit: "%"
		}), ln("g", 62, 14, 62, 22, "red", { w: .7 }), txt("t", 50, 8, "chênh 0,6 điểm", {
			c: "red",
			s: 3.2
		})),
		F("Sai số ở cỡ mẫu này khoảng 0,45 điểm; chênh 0,6 chỉ ≈ 1,3 sai số, chưa đủ để kết luận.", "At this sample size the error is about 0.45 points; the 0.6 gap is only ≈ 1.3 errors, not enough to conclude.", bars("b", [1.3, 2], ["chênh / sai số", "ngưỡng ≈ 2"], {
			c: ["accent", "mute"],
			max: 3,
			base: 46,
			h: 28,
			x0: 25,
			x1: 75
		}), txt("t", 50, 8, "2,0% và 2,6% vẫn có thể là nhiễu", {
			c: "red",
			s: 3.2
		}))
	]),
	"ht-peek": M([
		F("Bạn xem p mỗi ngày và định dừng khi p < 5%.", "You check p every day and plan to stop when p < 5%.", ...[
			.3,
			.12,
			.2,
			.07,
			.04,
			.09,
			.15
		].map((v, i) => dot(`d${i}`, 12 + i * 12, 44 - v * 100, v < .05 ? "green" : "mute", 1.4)), ln("l", 6, 39, 94, 39, "red", {
			d: true,
			w: .4
		}), txt("t", 20, 8, "p theo ngày", {
			s: 3,
			c: "mute"
		})),
		F("Mỗi ngày là một lần được báo; chỉ cần một ngày chạm dưới 5% là bạn dừng.", "Each day is another chance to call it; one day under 5% and you stop.", ...[
			.3,
			.12,
			.2,
			.07,
			.04,
			.09,
			.15
		].map((v, i) => dot(`d${i}`, 12 + i * 12, 44 - v * 100, v < .05 ? "red" : "mute", 1.6)), ring("r", 60, 40, 4, "red"), ln("l", 6, 39, 94, 39, "red", {
			d: true,
			w: .4
		})),
		F("Nhiều lần được báo thì tỷ lệ báo động giả thật cao hơn 5% đã viết. Phải định cỡ mẫu hoặc ngày dừng trước.", "With many chances the real false-alarm rate exceeds the written 5%. Fix the sample size or stop day beforehand.", bars("b", [5, 20], ["viết: 5%", "thực tế: cao hơn"], {
			c: ["mute", "red"],
			max: 25,
			base: 46,
			h: 28,
			x0: 25,
			x1: 75,
			unit: "%"
		}), txt("t", 50, 8, "nhìn trộm làm 5% không còn là 5%", {
			c: "red",
			s: 3.2
		}))
	]),
	"ht-chi": M([
		F("Bảng thực tế: GDN 30 mua / 70 không; TikTok 10 mua / 90 không.", "Observed table: GDN 30 buy / 70 not; TikTok 10 buy / 90 not.", bars("b", [30, 10], ["GDN mua", "TikTok mua"], {
			c: ["blue", "accent"],
			max: 40,
			base: 46,
			h: 28,
			x0: 25,
			x1: 75
		})),
		F("Nếu kênh và việc mua không liên quan, mỗi kênh kỳ vọng 20 người mua.", "If channel and buying were unrelated, each channel would expect 20 buyers.", bars("b", [30, 10], ["GDN mua", "TikTok mua"], {
			c: ["blue", "accent"],
			max: 40,
			base: 46,
			h: 28,
			x0: 25,
			x1: 75
		}), ln("e1", 14, 32, 50, 32, "mute", {
			d: true,
			w: .4
		}), ln("e2", 50, 32, 86, 32, "mute", {
			d: true,
			w: .4
		}), txt("t", 50, 8, "kỳ vọng = 20 mỗi ô", {
			c: "mute",
			s: 3
		})),
		F("Chi-bình phương cộng độ lệch của cả bảng: (30−20)²/20 + (10−20)²/20 + … nhìn cả bảng, không từng ô.", "Chi-square adds the gaps of the whole table: (30−20)²/20 + (10−20)²/20 + … the whole table, not one cell.", box("a", 50, 24, 80, 14, "χ² = Σ (quan sát − kỳ vọng)² / kỳ vọng\n= 5 + 5 + 1,25 + 1,25 = 12,5", {
			c: "accent",
			s: 3
		}), txt("t", 50, 46, "một số cho cả bảng", {
			c: "mute",
			s: 3
		}))
	]),
	"ht-anova": M([
		F("Ba kênh với ba số đo giá mỗi form: 10–12, 11–13, 19–21 (nghìn đồng).", "Three channels with three cost-per-form measures: 10–12, 11–13, 19–21 (thousand).", ...[
			[
				10,
				11,
				12
			],
			[
				11,
				12,
				13
			],
			[
				19,
				20,
				21
			]
		].flatMap((g, k) => g.map((v, i) => dot(`d${k}${i}`, 16 + k * 34, 44 - (v - 8) * 2.8, [
			"blue",
			"gold",
			"accent"
		][k], 1.6)))),
		F("Trung bình từng kênh: 11, 12, 20. Khoảng cách giữa các kênh lớn hơn khoảng cách trong từng kênh.", "Channel means: 11, 12, 20. The gaps between channels exceed the spread within each channel.", ...[
			[
				10,
				11,
				12
			],
			[
				11,
				12,
				13
			],
			[
				19,
				20,
				21
			]
		].flatMap((g, k) => g.map((v, i) => dot(`d${k}${i}`, 16 + k * 34, 44 - (v - 8) * 2.8, [
			"blue",
			"gold",
			"accent"
		][k], 1.6))), ...[
			11,
			12,
			20
		].map((m, k) => ln(`m${k}`, 8 + k * 34, 44 - (m - 8) * 2.8, 26 + k * 34, 44 - (m - 8) * 2.8, "ink", { w: .6 }))),
		F("ANOVA so hai phần đó trong một cuộc kiểm định (thay vì ba cuộc), rồi mới hỏi kênh nào khác kênh nào.", "ANOVA compares those two parts in one test (not three), and only then asks which pairs differ.", box("a", 28, 24, 38, 14, "giữa các kênh\n(lớn)", { c: "accent" }), box("b", 72, 24, 38, 14, "trong từng kênh\n(nhỏ)", { c: "blue" }), txt("t", 50, 46, "tỷ số F lớn → có kênh khác", {
			c: "green",
			s: 3.4
		}))
	]),
	"eda-ask": M([
		F("«Làm EDA» chưa phải một câu hỏi.", "“Do EDA” is not yet a question.", box("q", 50, 24, 60, 14, "«làm EDA»", {
			c: "red",
			d: true
		})),
		F("Câu viết được: tỷ lệ form tháng này có khác tháng trước không, và khác bao nhiêu form?", "A writable question: does this month's form rate differ from last month's, and by how many forms?", box("q", 50, 24, 84, 16, "tỷ lệ form tháng này có khác tháng trước không,\nvà khác bao nhiêu form?", {
			f: "accent",
			c: "accent",
			s: 3
		})),
		F("Câu hỏi quyết định cột nào cần nhìn và hình nào cần vẽ.", "The question decides which columns to look at and which chart to draw.", ...chain("c", [
			"câu hỏi",
			"cột cần xem",
			"hình cần vẽ"
		], {
			y: 26,
			on: 2
		}))
	]),
	"eda-src": M([
		F("Hai file: chuyến taxi công khai và khách spa của bạn.", "Two files: public taxi trips and your own spa customers.", ...pair("p", "file chuyến taxi\ncông khai", "khách spa\ncủa bạn", {
			ca: "mute",
			cb: "accent"
		})),
		F("Một tỷ lệ tính trên file taxi nói về chuyến taxi, không nói về cửa hàng của bạn.", "A rate computed on the taxi file describes taxi trips, not your shop.", box("a", 28, 24, 38, 14, "tỷ lệ trên\nfile taxi", { c: "mute" }), box("b", 72, 24, 38, 14, "tỷ lệ đặt lịch\ncủa bạn", {
			c: "red",
			d: true
		}), txt("t", 50, 46, "không thay thế nhau", {
			c: "red",
			s: 3.4
		})),
		F("Trước khi tính, hỏi: bảng này ghi ai?", "Before computing, ask: who does this table record?", box("q", 50, 24, 70, 14, "bảng này ghi ai?", {
			f: "accent",
			c: "accent"
		}))
	]),
	"eda-type": M([
		F("Bốn cột, bốn kiểu: kênh (chữ), số sao (chữ có thứ tự), ngày form (ngày), chi tiêu (số).", "Four columns, four types: channel (text), stars (ordered text), form date (date), spend (number).", ...[
			["kênh", "chữ"],
			["số sao", "chữ có\nthứ tự"],
			["ngày form", "ngày"],
			["chi tiêu", "số"]
		].map(([a, b], i) => box(`c${i}`, 14 + i * 24, 24, 21, 18, `${a}\n${b}`, {
			c: [
				"mute",
				"gold",
				"blue",
				"accent"
			][i],
			s: 3
		}))),
		F("Mỗi kiểu cho phép phép tính khác nhau: số thì trung bình được, ngày thì khoảng cách, chữ thì đếm.", "Each type allows different operations: numbers average, dates measure gaps, text is counted.", ...[
			["kênh", "đếm"],
			["số sao", "thứ hạng"],
			["ngày form", "khoảng\ncách"],
			["chi tiêu", "trung bình"]
		].map(([a, b], i) => box(`c${i}`, 14 + i * 24, 24, 21, 18, `${a}\n${b}`, {
			c: [
				"mute",
				"gold",
				"blue",
				"accent"
			][i],
			s: 3
		}))),
		F("Trung bình của chữ «GDN» không tồn tại.", "The mean of the text “GDN” does not exist.", box("a", 50, 24, 66, 14, "trung bình(«GDN», «Facebook»)  →  không tồn tại", {
			c: "red",
			d: true,
			s: 3
		}))
	]),
	"eda-row": M([
		F("Một khách để lại form hai lần vì tải lại trang: hai dòng.", "One customer submitted twice because of a page reload: two rows.", ...stack("r", [
			"Lan — 2.000.000đ",
			"Lan — 2.000.000đ",
			"Minh — 1.000.000đ"
		], {
			y0: 10,
			gap: 11,
			w: 70,
			on: [0, 1],
			c: "blue"
		})),
		F("SUM chi tiêu tính Lan hai lần: 5.000.000 thay vì 3.000.000.", "SUM counts Lan twice: 5,000,000 instead of 3,000,000.", ...stack("r", [
			"Lan — 2.000.000đ",
			"Lan — 2.000.000đ",
			"Minh — 1.000.000đ"
		], {
			y0: 10,
			gap: 11,
			w: 70,
			on: [0, 1],
			bad: [1]
		}), txt("t", 50, 46, "tổng bị nhân đôi", {
			c: "red",
			s: 3.6
		})),
		F("Mỗi dòng phải là một thứ bạn gọi tên được: một khách, một đơn, một lượt form.", "Each row must be a thing you can name: a customer, an order, a form submission.", box("q", 50, 24, 70, 14, "mỗi dòng = ?\nmột khách, hay một lần gửi?", {
			f: "accent",
			c: "accent"
		}))
	]),
	"eda-miss": M([
		F("1.000 khách, cột tuổi có 100 ô trống; 900 người khai trung bình 35 tuổi.", "1,000 customers; the age column has 100 blanks; the 900 who answered average 35.", box("a", 38, 24, 58, 16, "900 người khai\ntrung bình 35", { c: "blue" }), box("b", 82, 24, 24, 16, "100 ô\ntrống", {
			c: "gold",
			d: true
		})),
		F("Điền 0 cho 100 người đó thì trung bình tụt còn 31,5 và có «khách 0 tuổi».", "Filling 0 for those 100 drops the mean to 31.5 and creates “0-year-old customers”.", box("a", 38, 24, 58, 16, "900 người: 35", { c: "blue" }), box("b", 82, 24, 24, 16, "100 ô = 0", {
			c: "red",
			f: "red"
		}), txt("t", 50, 46, "trung bình mới = 31,5", {
			c: "red",
			s: 3.6
		})),
		F("Ô trống là «chưa biết», không phải số 0: bỏ riêng, hoặc điền có lý do và ghi lại.", "A blank means “unknown”, not zero: set aside, or fill with a stated reason.", box("a", 28, 24, 38, 14, "ô trống\n= chưa biết", { c: "green" }), box("b", 72, 24, 38, 14, "số 0\n= đã biết là 0", { c: "mute" }))
	]),
	"eda-scale": M([
		F("Hai cột: chi tiêu tính bằng triệu đồng (khoảng 0–10), thời gian xem tính bằng giây (khoảng 0–600).", "Two columns: spend in millions (about 0–10), watch time in seconds (about 0–600).", ...pair("p", "chi tiêu\n0 … 10", "thời gian xem\n0 … 600", {
			ca: "blue",
			cb: "accent"
		})),
		F("Khi tính khoảng cách để gom cụm, cột có số lớn chiếm hết tiếng nói; chi tiêu gần như bị bỏ.", "When measuring distances for clustering the big-number column dominates; spend is almost ignored.", bars("b", [10, 600], ["chi tiêu", "thời gian xem"], {
			c: ["blue", "accent"],
			max: 600,
			show: false,
			base: 46,
			h: 30,
			x0: 25,
			x1: 75
		}), txt("t", 50, 8, "khoảng cách do cột giây quyết định", {
			c: "red",
			s: 3.2
		})),
		F("Đổi sang điểm z: mỗi cột cùng thước, nên có trọng lượng như nhau.", "Switch to z-scores: each column on the same scale carries equal weight.", bars("b", [1, 1], ["chi tiêu (z)", "thời gian (z)"], {
			c: ["blue", "accent"],
			max: 2,
			show: false,
			base: 46,
			h: 30,
			x0: 25,
			x1: 75
		}), txt("t", 50, 8, "cùng một thước", {
			c: "green",
			s: 3.4
		}))
	]),
	"eda-bad": M([
		F("Ba giá trị lạ: tỷ lệ form 200%, ngày hẹn năm sau, tuổi −3.", "Three odd values: form rate 200%, appointment date next year, age −3.", ...stack("r", [
			"tỷ lệ form = 200%",
			"ngày hẹn: năm sau (file đã khóa)",
			"tuổi = −3"
		], {
			y0: 12,
			gap: 12,
			w: 70,
			c: "red",
			bad: [
				0,
				1,
				2
			],
			on: [
				0,
				1,
				2
			]
		})),
		F("Đó không phải khách lạ (điểm xa) mà là giá trị không được phép: lỗi nhập.", "These are not unusual customers (outliers) but forbidden values: entry errors.", box("a", 28, 24, 38, 14, "điểm xa\n(hợp lệ, hiếm)", { c: "blue" }), box("b", 72, 24, 38, 14, "không hợp lệ\n(sai luật)", { c: "red" })),
		F("Lọc theo luật miền giá trị trước, rồi mới xét điểm xa.", "Filter by domain rules first, then consider outliers.", ...chain("c", [
			"luật miền giá trị",
			"lọc giá trị sai",
			"xét điểm xa"
		], {
			y: 26,
			on: 1
		}))
	]),
	"eda-cat": M([
		F("Bảng có 400 dòng GDN, 550 Facebook, 250 TikTok: tổng 1.200.", "The table has 400 GDN, 550 Facebook, 250 TikTok rows: 1,200 in all.", bars("b", [
			400,
			550,
			250
		], [
			"GDN",
			"Facebook",
			"TikTok"
		], {
			c: [
				"blue",
				"gold",
				"accent"
			],
			max: 600,
			base: 46,
			h: 30,
			x0: 15,
			x1: 85
		})),
		F("Phần của từng kênh: 33%, 46%, 21%.", "Each channel's share: 33%, 46%, 21%.", bars("b", [
			33,
			46,
			21
		], [
			"GDN",
			"Facebook",
			"TikTok"
		], {
			c: [
				"blue",
				"gold",
				"accent"
			],
			max: 55,
			unit: "%",
			base: 46,
			h: 30,
			x0: 15,
			x1: 85
		})),
		F("Chữ không có thứ tự thì thứ tự vẽ cột không mang nghĩa: đếm, đừng nối đường.", "Unordered text means bar order carries no meaning: count, do not connect with a line.", bars("b", [
			46,
			33,
			21
		], [
			"Facebook",
			"GDN",
			"TikTok"
		], {
			c: [
				"gold",
				"blue",
				"accent"
			],
			max: 55,
			unit: "%",
			base: 46,
			h: 30,
			x0: 15,
			x1: 85
		}), txt("t", 50, 6, "xếp từ lớn đến nhỏ cho dễ đọc", {
			c: "mute",
			s: 3
		}))
	]),
	"eda-ord": M([
		F("Đánh giá 1–5 sao: 40 người cho 5 sao, 30 cho 1 sao, 30 cho 3 sao.", "Ratings 1–5: 40 give 5 stars, 30 give 1 star, 30 give 3 stars.", bars("b", [
			30,
			0,
			30,
			0,
			40
		], [
			"1★",
			"2★",
			"3★",
			"4★",
			"5★"
		], {
			c: "gold",
			max: 45,
			base: 46,
			h: 30,
			x0: 15,
			x1: 85
		})),
		F("Trung bình 3,2 trông như «tạm ổn».", "The mean 3.2 looks like “so-so”.", bars("b", [
			30,
			0,
			30,
			0,
			40
		], [
			"1★",
			"2★",
			"3★",
			"4★",
			"5★"
		], {
			c: "gold",
			max: 45,
			base: 46,
			h: 30,
			x0: 15,
			x1: 85
		}), ln("m", at(3.2, 1, 5, 15, 85), 12, at(3.2, 1, 5, 15, 85), 46, "red", {
			d: true,
			w: .6
		}), txt("t", at(3.2, 1, 5, 15, 85), 8, "trung bình 3,2", {
			c: "red",
			s: 3
		})),
		F("Thật ra khách chia hai cực: giữ nguyên các bậc, đừng chỉ nhìn một con số.", "In truth customers split into two poles: keep the levels, do not look at a single number.", bars("b", [
			30,
			0,
			30,
			0,
			40
		], [
			"1★",
			"2★",
			"3★",
			"4★",
			"5★"
		], {
			c: [
				"red",
				"gold",
				"gold",
				"gold",
				"green"
			],
			max: 45,
			base: 46,
			h: 30,
			x0: 15,
			x1: 85
		}), txt("t", 50, 8, "hai cực: 1★ và 5★", {
			c: "red",
			s: 3.4
		}))
	]),
	"eda-num": M([
		F("Tám tuần: 18, 19, 20, 20, 20, 21, 22 và 120.", "Eight weeks: 18, 19, 20, 20, 20, 21, 22 and 120.", bars("b", [
			18,
			19,
			20,
			20,
			20,
			21,
			22,
			120
		], [
			"18",
			"19",
			"20",
			"20",
			"20",
			"21",
			"22",
			"120"
		], {
			c: [
				"blue",
				"blue",
				"blue",
				"blue",
				"blue",
				"blue",
				"blue",
				"red"
			],
			max: 120,
			show: false,
			base: 46,
			h: 32
		})),
		F("Trung vị là 20: chỗ giữa của các tuần.", "The median is 20: the middle of the weeks.", bars("b", [
			18,
			19,
			20,
			20,
			20,
			21,
			22,
			120
		], [
			"18",
			"19",
			"20",
			"20",
			"20",
			"21",
			"22",
			"120"
		], {
			c: "blue",
			max: 120,
			show: false,
			base: 46,
			h: 32
		}), ln("m", 6, 46 - 20 / 120 * 32, 94, 46 - 20 / 120 * 32, "green", {
			d: true,
			w: .6
		}), txt("t", 50, 6, "trung vị = 20", {
			c: "green",
			s: 3.4
		})),
		F("Trung bình bị tuần 120 kéo lên khoảng 32,5: hai số cách nhau xa là dấu hiệu có đuôi.", "The mean is dragged to about 32.5 by week 120: two numbers far apart signal a tail.", bars("b", [
			18,
			19,
			20,
			20,
			20,
			21,
			22,
			120
		], [
			"18",
			"19",
			"20",
			"20",
			"20",
			"21",
			"22",
			"120"
		], {
			c: "blue",
			max: 120,
			show: false,
			base: 46,
			h: 32
		}), ln("m", 6, 46 - 20 / 120 * 32, 94, 46 - 20 / 120 * 32, "green", {
			d: true,
			w: .6
		}), ln("a", 6, 38, 94, 38, "red", {
			d: true,
			w: .6
		}), txt("t", 50, 6, "trung bình 30 ≠ trung vị 20", {
			c: "red",
			s: 3.4
		}))
	]),
	"eda-r": M([
		F("Các tuần của một tài khoản: chi tiêu càng cao, số form thường càng cao.", "Weeks of one account: more spend usually means more forms.", ...[
			[2, 6],
			[3, 10],
			[4, 9],
			[5, 15],
			[6, 14],
			[7, 22],
			[8, 16],
			[9, 24]
		].map(([x, y], i) => dot(`d${i}`, 12 + x * 8, 48 - y * 1.5, "blue", 1.5))),
		F("r = 0,6 nói hai cột đi cùng nhau, ở mức vừa.", "r = 0.6 says the two columns move together, moderately.", ...[
			[2, 6],
			[3, 10],
			[4, 9],
			[5, 15],
			[6, 14],
			[7, 22],
			[8, 16],
			[9, 24]
		].map(([x, y], i) => dot(`d${i}`, 12 + x * 8, 48 - y * 1.5, "blue", 1.5)), ln("l", 24, 40, 90, 12, "accent", { w: .7 }), txt("t", 30, 8, "r = 0,6", {
			c: "accent",
			s: 3.6
		})),
		F("Một tuần cụ thể vẫn có thể lệch xa đường tóm tắt: r không phải một đường chắc chắn.", "A specific week can still sit far from the summary line: r is not a certain line.", ...[
			[2, 6],
			[3, 10],
			[4, 9],
			[5, 15],
			[6, 14],
			[7, 22],
			[8, 16],
			[9, 24]
		].map(([x, y], i) => dot(`d${i}`, 12 + x * 8, 48 - y * 1.5, i === 6 ? "red" : "blue", 1.5)), ln("l", 24, 40, 90, 12, "accent", { w: .7 }), ring("r", 76, 24, 4, "red"))
	]),
	"eda-cause": M([
		F("Tuần nào số form tăng thì đơn kem gần cửa hàng cũng tăng.", "Weeks with more forms also have more cream orders near the shop.", ...[
			[1, 2],
			[2, 3],
			[3, 3.5],
			[4, 5],
			[5, 6]
		].map(([x, y], i) => dot(`d${i}`, 20 + x * 12, 46 - y * 5, "green", 1.6)), txt("t", 50, 8, "form ↑  kem ↑ (đi cùng nhau)", {
			c: "green",
			s: 3.4
		})),
		F("Tắt kem không phải kế hoạch media: hai thứ không kéo nhau.", "Switching off cream is not a media plan: the two do not drag each other.", box("a", 28, 24, 38, 14, "form ↑", { c: "blue" }), box("b", 72, 24, 38, 14, "kem ↑", { c: "gold" }), arr("x", 48, 24, 52, 24, "red", { d: true }), txt("t", 50, 46, "mũi tên nhân quả: chưa có", {
			c: "red",
			s: 3.4
		})),
		F("Cả hai cùng tăng theo mùa lễ: một nguyên nhân thứ ba.", "Both rise with the holiday season: a third cause.", box("m", 50, 10, 40, 10, "mùa lễ", {
			f: "accent",
			c: "accent"
		}), box("a", 28, 34, 30, 12, "form ↑", { c: "blue" }), box("b", 72, 34, 30, 12, "kem ↑", { c: "gold" }), arr("x", 42, 16, 30, 28, "accent"), arr("y", 58, 16, 70, 28, "accent"))
	]),
	"eda-group": M([
		F("Số form mỗi tuần: GDN 38, 40, 42, 40 và Facebook 10, 20, 30, 100.", "Weekly forms: GDN 38, 40, 42, 40 and Facebook 10, 20, 30, 100.", ...[
			38,
			40,
			42,
			40
		].map((v, i) => dot(`g${i}`, 14 + i * 7, 46 - v / 100 * 36, "blue", 1.6)), ...[
			10,
			20,
			30,
			100
		].map((v, i) => dot(`f${i}`, 62 + i * 7, 46 - v / 100 * 36, "gold", 1.6))),
		F("Cả hai kênh đều có trung bình 40.", "Both channels have a mean of 40.", ...[
			38,
			40,
			42,
			40
		].map((v, i) => dot(`g${i}`, 14 + i * 7, 46 - v / 100 * 36, "blue", 1.6)), ...[
			10,
			20,
			30,
			100
		].map((v, i) => dot(`f${i}`, 62 + i * 7, 46 - v / 100 * 36, "gold", 1.6)), ln("m1", 10, 31.6, 44, 31.6, "blue", {
			d: true,
			w: .5
		}), ln("m2", 58, 31.6, 92, 31.6, "gold", {
			d: true,
			w: .5
		}), txt("t", 50, 6, "trung bình = 40 ở cả hai", {
			c: "mute",
			s: 3.2
		})),
		F("GDN khít, Facebook rất rộng: so nhóm phải nhìn cả độ rộng, không chỉ trung bình.", "GDN is tight, Facebook very wide: comparing groups needs spread, not just means.", ...[
			38,
			40,
			42,
			40
		].map((v, i) => dot(`g${i}`, 14 + i * 7, 46 - v / 100 * 36, "blue", 1.6)), ...[
			10,
			20,
			30,
			100
		].map((v, i) => dot(`f${i}`, 62 + i * 7, 46 - v / 100 * 36, "gold", 1.6)), box("a", 28, 8, 30, 8, "GDN: khít", {
			c: "blue",
			s: 3
		}), box("b", 76, 8, 30, 8, "Facebook: rộng", {
			c: "red",
			s: 3
		}))
	])
};
var scat = (pre, pts, c = "blue", x0 = 12, sx = 8, base = 48, sy = 1.5) => pts.map(([x, y], i) => dot(`${pre}${i}`, x0 + x * sx, base - y * sy, c, 1.5));
var m5 = {
	"eda-tab": M([
		F("Bảng: GDN có 30 người mua trên 100 dòng; cả bảng có 40 người mua.", "Table: GDN has 30 buyers out of 100 rows; the whole table has 40 buyers.", box("a", 28, 24, 38, 14, "GDN: 100 dòng\n30 mua", { c: "blue" }), box("b", 72, 24, 38, 14, "cả bảng\n40 mua", { c: "mute" })),
		F("30 / 100 = 30%: phần dòng GDN có mua (chia theo hàng).", "30 / 100 = 30%: the share of GDN rows that buy (divide by the row).", box("a", 28, 24, 38, 14, "30 mua\ntrên 100 dòng GDN", {
			f: "blue",
			c: "blue"
		}), box("b", 72, 24, 38, 14, "= 30%", {
			c: "blue",
			s: 6
		}), arr("x", 48, 24, 52, 24, "mute")),
		F("30 / 40 = 75%: phần người mua đến từ GDN (chia theo cột). Hai phần trăm khác nhau vì mẫu số khác nhau.", "30 / 40 = 75%: the share of buyers that come from GDN (divide by the column). Different denominators, different percentages.", box("a", 28, 24, 38, 14, "30 mua GDN\ntrên 40 mua cả bảng", {
			f: "accent",
			c: "accent"
		}), box("b", 72, 24, 38, 14, "= 75%", {
			c: "accent",
			s: 6
		}), arr("x", 48, 24, 52, 24, "mute"), txt("t", 50, 46, "luôn nói «phần của cái gì»", {
			c: "mute",
			s: 3.2
		}))
	]),
	"eda-flip": M([
		F("Khách mới: TikTok 30%, GDN 20%. Khách cũ: cả hai 90%.", "New customers: TikTok 30%, GDN 20%. Existing: both 90%.", bars("b", [
			30,
			20,
			90,
			90
		], [
			"TikTok mới",
			"GDN mới",
			"TikTok cũ",
			"GDN cũ"
		], {
			c: [
				"accent",
				"blue",
				"accent",
				"blue"
			],
			max: 100,
			unit: "%",
			base: 46,
			h: 30,
			x0: 12,
			x1: 88
		})),
		F("Trong từng nhóm, TikTok không thua GDN.", "Within each group TikTok is not behind GDN.", bars("b", [
			30,
			20,
			90,
			90
		], [
			"TikTok mới",
			"GDN mới",
			"TikTok cũ",
			"GDN cũ"
		], {
			c: [
				"green",
				"mute",
				"mute",
				"mute"
			],
			max: 100,
			unit: "%",
			base: 46,
			h: 30,
			x0: 12,
			x1: 88
		}), txt("t", 50, 6, "mới: 30% > 20%; cũ: 90% = 90%", {
			c: "green",
			s: 3.2
		})),
		F("Gộp lại GDN 70% còn TikTok 40%: GDN thắng chỉ vì phần lớn khách của nó là khách cũ. Luôn xem theo nhóm.", "Pooled, GDN is 70% and TikTok 40%: GDN wins only because most of its customers are existing ones. Always look by group.", bars("b", [40, 70], ["TikTok gộp", "GDN gộp"], {
			c: ["accent", "blue"],
			max: 100,
			unit: "%",
			base: 46,
			h: 30,
			x0: 25,
			x1: 75
		}), txt("t", 50, 6, "nghịch lý Simpson", {
			c: "red",
			s: 3.6
		}))
	]),
	"pred-proj": M([
		F("Đường học trên các tuần chi 2–12 triệu: form = 3 + 2,5 × chi.", "A line learned on weeks spending 2–12 million: forms = 3 + 2.5 × spend.", ...scat("d", [
			[2, 8],
			[3, 10],
			[4, 13],
			[6, 17],
			[8, 22],
			[10, 28],
			[12, 33]
		], "blue", 6, 5.5, 46, .8), ln("l", 17, 39.6, 72, 46 - 33 * .8, "accent", { w: .7 })),
		F("Chi 8 triệu → 23 form: nằm trong vùng đã học, là một dự đoán.", "Spend 8 million → 23 forms: inside the learned range, a prediction.", ...scat("d", [
			[2, 8],
			[3, 10],
			[4, 13],
			[6, 17],
			[8, 22],
			[10, 28],
			[12, 33]
		], "blue", 6, 5.5, 46, .8), ln("l", 17, 39.6, 72, 46 - 33 * .8, "accent", { w: .7 }), ring("r", 50, 46 - 23 * .8, 3, "green"), txt("t", 50, 8, "8 triệu → 23 form (trong vùng đã học)", {
			c: "green",
			s: 3
		})),
		F("Chi 40 triệu → 103 form chỉ là một giả định: đường không hứa đúng ngoài vùng đã học.", "Spend 40 million → 103 forms is only an assumption: the line makes no promise outside the learned range.", ...scat("d", [
			[2, 8],
			[3, 10],
			[4, 13],
			[6, 17],
			[8, 22],
			[10, 28],
			[12, 33]
		], "blue", 6, 5.5, 46, .8), ln("l", 17, 39.6, 72, 46 - 33 * .8, "accent", { w: .7 }), ln("e", 72, 46 - 33 * .8, 94, 12, "red", {
			w: .7,
			d: true
		}), ring("r", 94, 12, 3, "red"), txt("t", 60, 6, "40 triệu → 103 form (ngoại suy)", {
			c: "red",
			s: 3
		}))
	]),
	"logit-spec": M([
		F("20 người rời, 80 người ở lại.", "20 churners, 80 who stay.", box("a", 24, 24, 28, 14, "20 người rời", { c: "red" }), box("b", 66, 24, 52, 14, "80 người ở lại", { c: "blue" })),
		F("Gọi trúng 15 trên 20 người rời: độ nhạy = 15/20 = 75%.", "Catching 15 of 20 churners: sensitivity = 15/20 = 75%.", box("a", 24, 24, 28, 14, "rời: gọi trúng 15/20", {
			f: "red",
			c: "red",
			s: 3
		}), box("b", 66, 24, 52, 14, "80 người ở lại", {
			c: "blue",
			o: .5
		}), txt("t", 50, 46, "độ nhạy = 75%", {
			c: "red",
			s: 3.6
		})),
		F("Gọi nhầm 8 trong 80 người ở lại: độ đặc hiệu = 72/80 = 90%. Accuracy 87% chủ yếu vì khách ở lại đông.", "Wrongly flagging 8 of 80 who stay: specificity = 72/80 = 90%. Accuracy of 87% is mostly because stayers are many.", box("a", 24, 24, 28, 14, "rời", {
			c: "red",
			o: .5
		}), box("b", 66, 24, 52, 14, "ở lại: gọi đúng 72/80", {
			f: "blue",
			c: "blue",
			s: 3
		}), txt("t", 50, 46, "độ đặc hiệu = 90%", {
			c: "blue",
			s: 3.6
		}))
	]),
	"logit-who": M([
		F("Mô hình học trên những người nghe máy.", "The model learned from people who answered the phone.", box("a", 28, 24, 38, 16, "học trên:\nngười nghe máy", {
			c: "green",
			f: "soft"
		}), box("b", 72, 24, 38, 16, "chưa học:\nngười không nghe", {
			c: "red",
			d: true
		})),
		F("Gán xác suất đó cho người không nghe máy là một câu khác mà mô hình chưa được học.", "Applying that probability to people who did not answer is a different claim the model has not learned.", box("a", 28, 24, 38, 16, "học trên:\nngười nghe máy", {
			c: "green",
			o: .5
		}), box("b", 72, 24, 38, 16, "áp lên người\nkhông nghe", { c: "red" }), arr("x", 46, 24, 54, 24, "red")),
		F("File chỉ có khách đã đặt lịch cũng không nói được gì về người chưa từng gọi: nói rõ mẫu là ai.", "A file with only customers who booked says nothing about people who never called: state who the sample is.", box("a", 50, 24, 74, 14, "mẫu = khách đã đặt lịch\n→ chỉ nói về khách đã đặt lịch", {
			c: "accent",
			s: 3
		}))
	]),
	"logit-drift": M([
		F("Tháng 3: GDN chiếm phần lớn form; AUC = 0,82.", "March: GDN dominates forms; AUC = 0.82.", bars("b", [
			70,
			20,
			10
		], [
			"GDN",
			"TikTok",
			"Facebook"
		], {
			c: [
				"blue",
				"accent",
				"gold"
			],
			max: 80,
			unit: "%",
			base: 44,
			h: 26,
			x0: 15,
			x1: 85
		}), txt("t", 50, 6, "tháng 3 · AUC 0,82", {
			c: "blue",
			s: 3.4
		})),
		F("Tháng 12: TikTok chiếm phần lớn và tỷ lệ rời bỏ cũng đổi.", "December: TikTok dominates and the churn rate also changes.", bars("b", [
			20,
			70,
			10
		], [
			"GDN",
			"TikTok",
			"Facebook"
		], {
			c: [
				"blue",
				"accent",
				"gold"
			],
			max: 80,
			unit: "%",
			base: 44,
			h: 26,
			x0: 15,
			x1: 85
		}), txt("t", 50, 6, "tháng 12 · cơ cấu đã đổi", {
			c: "accent",
			s: 3.4
		})),
		F("AUC tháng 3 không cấp phép cho tháng 12: chấm lại trên dữ liệu tháng mới.", "March's AUC does not license December: score again on the new month's data.", ...chain("c", [
			"dữ liệu\nmới",
			"chấm lại",
			"dùng hay không"
		], {
			y: 26,
			on: 1,
			h: 18
		}))
	]),
	"tree-line": M([
		F("Số form nhảy lên khi chi vượt 5 triệu, rồi đứng yên.", "Forms jump when spend exceeds 5 million, then stay flat.", ...[
			1,
			2,
			3,
			4
		].map((x, i) => dot(`a${i}`, 12 + x * 8, 40, "blue", 1.5)), ...[
			6,
			7,
			8,
			9,
			10
		].map((x, i) => dot(`b${i}`, 12 + x * 8, 20, "blue", 1.5)), ln("s", 52, 8, 52, 46, "mute", {
			d: true,
			w: .4
		})),
		F("Đường thẳng lấy một độ dốc và trượt cả hai phía.", "A straight line takes one slope and slides across both sides.", ...[
			1,
			2,
			3,
			4
		].map((x, i) => dot(`a${i}`, 12 + x * 8, 40, "blue", 1.5)), ...[
			6,
			7,
			8,
			9,
			10
		].map((x, i) => dot(`b${i}`, 12 + x * 8, 20, "blue", 1.5)), ln("l", 16, 44, 94, 16, "red", { w: .7 }), ln("s", 52, 8, 52, 46, "mute", {
			d: true,
			w: .4
		})),
		F("Cây cắt một bậc ở 5 triệu: mỗi bên một mức, khớp hình bậc thang.", "A tree cuts one step at 5 million: one level per side, matching the staircase.", ...[
			1,
			2,
			3,
			4
		].map((x, i) => dot(`a${i}`, 12 + x * 8, 40, "blue", 1.5)), ...[
			6,
			7,
			8,
			9,
			10
		].map((x, i) => dot(`b${i}`, 12 + x * 8, 20, "blue", 1.5)), ln("c1", 14, 40, 52, 40, "green", { w: .8 }), ln("c2", 52, 20, 94, 20, "green", { w: .8 }), ln("c3", 52, 40, 52, 20, "green", { w: .8 }), txt("t", 50, 6, "ngoài vết cắt cuối, bậc chỉ là trung bình lá ở mép", {
			c: "mute",
			s: 2.8
		}))
	]),
	"tree-imp": M([
		F("«Số lần ghé» và «số lần xem» gần như là một cột viết hai lần.", "“Visits” and “views” are almost one column written twice.", ...pair("p", "số lần ghé", "số lần xem", {
			ca: "blue",
			cb: "blue"
		})),
		F("Cây có thể dồn hết điểm quan trọng cho một trong hai.", "The tree may pile all importance on one of the two.", bars("b", [90, 10], ["số lần ghé", "số lần xem"], {
			c: ["accent", "mute"],
			max: 100,
			base: 46,
			h: 28,
			x0: 25,
			x1: 75
		})),
		F("Điểm này nói cột nào làm nhóm sạch hơn, không nói «lần ghé gây ra form».", "This score says which column made groups cleaner, not that “visits cause forms”.", box("a", 28, 24, 38, 14, "làm nhóm\nsạch hơn", { c: "green" }), box("b", 72, 24, 38, 14, "gây ra form", {
			c: "red",
			d: true
		}), txt("t", 50, 46, "biểu đồ này không nói câu thứ hai", {
			c: "red",
			s: 3.2
		}))
	]),
	"tree-num": M([
		F("Cây số có hai lá: «chi dưới 5 triệu» trung bình 12 form, lá còn lại 28 form.", "A numeric tree has two leaves: “spend under 5 million” averages 12 forms, the other 28.", box("a", 28, 26, 38, 14, "lá 1: chi < 5\nTB = 12", { c: "blue" }), box("b", 72, 26, 38, 14, "lá 2: chi ≥ 5\nTB = 28", { c: "accent" })),
		F("Tuần chi 4 triệu được gán đúng 12: không nội suy giữa 12 và 28.", "A week spending 4 million gets exactly 12: no interpolation between 12 and 28.", ...numline("n", 0, 10, {
			y: 40,
			ticks: [
				0,
				5,
				10
			]
		}), ln("a", at(0, 0, 10), 28, at(5, 0, 10), 28, "blue", { w: .9 }), ln("b", at(5, 0, 10), 14, at(10, 0, 10), 14, "accent", { w: .9 }), dot("p", at(4, 0, 10), 28, "red", 2), txt("t", at(4, 0, 10), 20, "chi 4 → 12", {
			c: "red",
			s: 3
		})),
		F("Tuần chi 40 triệu vẫn nhận số của lá ở mép (28): cây không ngoại suy.", "A week spending 40 million still receives the edge leaf's value (28): trees do not extrapolate.", ...numline("n", 0, 45, {
			y: 40,
			ticks: [
				0,
				5,
				40
			]
		}), ln("a", at(0, 0, 45), 28, at(5, 0, 45), 28, "blue", { w: .9 }), ln("b", at(5, 0, 45), 14, at(45, 0, 45), 14, "accent", { w: .9 }), dot("p", at(40, 0, 45), 14, "red", 2), txt("t", at(40, 0, 45), 8, "chi 40 → 28", {
			c: "red",
			s: 3
		}))
	]),
	"km-start": M([
		F("Hai đám khách, k = 2.", "Two customer clusters, k = 2.", ...Array.from({ length: 8 }, (_, i) => dot(`a${i}`, 14 + i % 4 * 5, 16 + Math.floor(i / 4) * 5, "blue", 1.2)), ...Array.from({ length: 4 }, (_, i) => dot(`b${i}`, 72 + i % 2 * 5, 36 + Math.floor(i / 2) * 5, "gold", 1.2))),
		F("Khởi động ngẫu nhiên có thể thả cả hai tâm vào đám đông: đám kia không có tâm.", "Random starts may drop both centres in the big cluster: the other has none.", ...Array.from({ length: 8 }, (_, i) => dot(`a${i}`, 14 + i % 4 * 5, 16 + Math.floor(i / 4) * 5, "blue", 1.2)), ...Array.from({ length: 4 }, (_, i) => dot(`b${i}`, 72 + i % 2 * 5, 36 + Math.floor(i / 2) * 5, "gold", 1.2)), ring("c1", 20, 19, 8, "red"), ring("c2", 25, 22, 8, "red")),
		F("K-means++ chọn tâm sau ở xa tâm trước nên mỗi đám có một tâm. Vẫn nên chạy vài lần.", "K-means++ picks the next centre far from the first so each cluster gets one. Still run it a few times.", ...Array.from({ length: 8 }, (_, i) => dot(`a${i}`, 14 + i % 4 * 5, 16 + Math.floor(i / 4) * 5, "blue", 1.2)), ...Array.from({ length: 4 }, (_, i) => dot(`b${i}`, 72 + i % 2 * 5, 36 + Math.floor(i / 2) * 5, "gold", 1.2)), ring("c1", 20, 19, 8, "green"), ring("c2", 74, 38, 7, "green"))
	]),
	"link-how": M([
		F("Khách spa xếp thành một dải theo giờ đến.", "Spa customers form a strip by arrival hour.", ...Array.from({ length: 10 }, (_, i) => dot(`d${i}`, 10 + i * 8.5, 30 + i % 2 * 2, "blue", 1.6))),
		F("Single linkage dính ở chỗ gần nhất nên nối cả dải thành một sợi.", "Single linkage joins at the closest point so the whole strip becomes one chain.", ...Array.from({ length: 10 }, (_, i) => dot(`d${i}`, 10 + i * 8.5, 30 + i % 2 * 2, "blue", 1.6)), ...Array.from({ length: 9 }, (_, i) => ln(`l${i}`, 10 + i * 8.5, 30 + i % 2 * 2, 18.5 + i * 8.5, 30 + (i + 1) % 2 * 2, "red", { w: .6 })), txt("t", 50, 12, "single: một sợi dài", {
			c: "red",
			s: 3.4
		})),
		F("Complete chỉ dính khi cả cụm còn chặt, nên dải bị chia thành nhiều cụm; average ở giữa. Không cách nào là sự thật.", "Complete joins only while the whole cluster is tight, so the strip splits; average sits between. No method is the truth.", ...Array.from({ length: 10 }, (_, i) => dot(`d${i}`, 10 + i * 8.5, 30 + i % 2 * 2, i < 5 ? "blue" : "gold", 1.6)), ring("r1", 27, 31, 18, "blue"), ring("r2", 69, 31, 18, "gold"), txt("t", 50, 12, "complete: các cụm chặt", {
			c: "green",
			s: 3.4
		}))
	]),
	"db-scan": M([
		F("Đa số khách đến trong giờ vàng; vài người đến lúc 2 giờ sáng.", "Most customers arrive in prime hours; a few come at 2 am.", ...Array.from({ length: 12 }, (_, i) => dot(`d${i}`, 52 + i % 4 * 3.5, 22 + Math.floor(i / 4) * 4, "blue", 1.4)), dot("o1", 14, 40, "mute", 1.4), dot("o2", 24, 12, "mute", 1.4)),
		F("Bạn chọn bán kính và số hàng xóm tối thiểu, không chọn k.", "You choose a radius and a minimum neighbour count, not k.", ...Array.from({ length: 12 }, (_, i) => dot(`d${i}`, 52 + i % 4 * 3.5, 22 + Math.floor(i / 4) * 4, "blue", 1.4)), dot("o1", 14, 40, "mute", 1.4), dot("o2", 24, 12, "mute", 1.4), ring("r", 57, 27, 4, "accent"), txt("t", 30, 52, "bán kính + số hàng xóm tối thiểu", {
			c: "accent",
			s: 3.2
		})),
		F("Đám đặc là cụm; hai điểm thưa được để là nhiễu thay vì ép vào đám.", "The dense blob is a cluster; the two sparse points stay as noise instead of being forced in.", ...Array.from({ length: 12 }, (_, i) => dot(`d${i}`, 52 + i % 4 * 3.5, 22 + Math.floor(i / 4) * 4, "green", 1.4)), ring("cl", 57, 27, 12, "green"), dot("o1", 14, 40, "red", 1.6), dot("o2", 24, 12, "red", 1.6), txt("t", 22, 50, "nhiễu", {
			c: "red",
			s: 3.2
		}))
	]),
	"gmm-soft": M([
		F("Hai nhóm: «gói lẻ» và «gói tháng». Một khách nằm giữa.", "Two groups: “single sessions” and “monthly plan”. One customer sits between.", ...Array.from({ length: 6 }, (_, i) => dot(`a${i}`, 14 + i % 3 * 4, 22 + Math.floor(i / 3) * 4, "blue", 1.4)), ...Array.from({ length: 6 }, (_, i) => dot(`b${i}`, 72 + i % 3 * 4, 22 + Math.floor(i / 3) * 4, "gold", 1.4)), dot("x", 46, 25, "red", 2)),
		F("K-means phải chọn một nhóm: khách đó bị xếp hoàn toàn vào một bên.", "K-means must choose one group: the customer goes wholly to one side.", ...Array.from({ length: 6 }, (_, i) => dot(`a${i}`, 14 + i % 3 * 4, 22 + Math.floor(i / 3) * 4, "blue", 1.4)), ...Array.from({ length: 6 }, (_, i) => dot(`b${i}`, 72 + i % 3 * 4, 22 + Math.floor(i / 3) * 4, "gold", 1.4)), dot("x", 46, 25, "red", 2), arr("g", 46, 25, 30, 25, "blue"), txt("t", 50, 44, "k-means: 100% «gói lẻ»", {
			c: "blue",
			s: 3.4
		})),
		F("GMM cho hai phần: 0,6 gói lẻ và 0,4 gói tháng. Với đám hình vòng cung, bầu dục này sẽ mô tả sai.", "GMM gives two shares: 0.6 single and 0.4 monthly. For arc-shaped clusters these ellipses describe them wrongly.", ...Array.from({ length: 6 }, (_, i) => dot(`a${i}`, 14 + i % 3 * 4, 22 + Math.floor(i / 3) * 4, "blue", 1.4)), ...Array.from({ length: 6 }, (_, i) => dot(`b${i}`, 72 + i % 3 * 4, 22 + Math.floor(i / 3) * 4, "gold", 1.4)), dot("x", 46, 25, "red", 2), box("t", 50, 44, 60, 10, "GMM: 0,6 gói lẻ · 0,4 gói tháng", {
			c: "red",
			s: 3
		}))
	]),
	"k-mode": M([
		F("Kênh của ba khách trong một cụm: GDN, GDN, Facebook.", "The channels of three customers in a cluster: GDN, GDN, Facebook.", ...[
			"GDN",
			"GDN",
			"Facebook"
		].map((t, i) => box(`c${i}`, 20 + i * 30, 24, 26, 12, t, { c: "blue" }))),
		F("Mode (giá trị gặp nhiều nhất) là GDN; trung bình của mã kênh không có nghĩa.", "The mode (most frequent value) is GDN; the mean of channel codes is meaningless.", ...[
			"GDN",
			"GDN",
			"Facebook"
		].map((t, i) => box(`c${i}`, 20 + i * 30, 18, 26, 12, t, {
			c: i < 2 ? "green" : "mute",
			f: i < 2 ? "green" : "soft"
		})), box("m", 50, 42, 50, 10, "mode = GDN", { c: "green" })),
		F("K-modes xử lý cột chữ. Chỉ K-prototype ghép được cột số (chi tiêu) với cột chữ (kênh).", "K-modes handles text columns. Only K-prototype can mix numbers (spend) with text (channel).", box("a", 28, 24, 38, 14, "K-modes\nchỉ cột chữ", { c: "blue" }), box("b", 72, 24, 38, 14, "K-prototype\nsố + chữ", { c: "accent" }))
	]),
	"nlp-stem": M([
		F("Review có «đã chờ», «chờ mãi» và «sự chờ».", "Reviews contain “waited”, “waiting forever” and “the wait”.", ...[
			"đã chờ",
			"chờ mãi",
			"sự chờ"
		].map((t, i) => box(`c${i}`, 20 + i * 30, 24, 26, 12, t, { c: "blue" }))),
		F("Cắt đuôi dồn cả ba về một mảnh «chờ»; nhưng cũng có thể dồn hai nghĩa khác nhau vào một mảnh.", "Stemming folds all three into one piece “wait”; it can also fold two different meanings into one.", ...[
			"đã chờ",
			"chờ mãi",
			"sự chờ"
		].map((t, i) => box(`c${i}`, 20 + i * 30, 12, 26, 10, t, {
			c: "blue",
			o: .6,
			s: 3
		})), ...[
			0,
			1,
			2
		].map((i) => arr(`a${i}`, 20 + i * 30, 18, 50, 34, "mute")), box("s", 50, 42, 30, 10, "mảnh: chờ", {
			f: "accent",
			c: "accent"
		})),
		F("Lemmatisation thận trọng hơn vì dùng từ điển, nhưng vẫn bỏ đi hình thái như thì và mức độ.", "Lemmatisation is more careful because it uses a dictionary, but it still drops forms like tense and degree.", box("a", 28, 24, 38, 14, "cắt đuôi\nthô, nhanh", { c: "accent" }), box("b", 72, 24, 38, 14, "lemma\nthận trọng hơn", { c: "green" }))
	]),
	"nlp-pmi": M([
		F("1.000 review: «chờ» có trong 50, «lâu» trong 100, cả hai cùng có trong 20.", "1,000 reviews: “wait” in 50, “long” in 100, both together in 20.", box("a", 28, 24, 38, 14, "«chờ»: 50\n«lâu»: 100", { c: "blue" }), box("b", 72, 24, 38, 14, "cả hai: 20", { c: "accent" })),
		F("Nếu độc lập: 50/1000 × 100/1000 × 1000 = 5 câu có cả hai.", "If independent: 50/1000 × 100/1000 × 1000 = 5 reviews with both.", bars("b", [5, 20], ["nếu độc lập", "thực tế"], {
			c: ["mute", "accent"],
			max: 24,
			base: 46,
			h: 28,
			x0: 25,
			x1: 75
		}), txt("t", 30, 12, "kỳ vọng 5", {
			c: "mute",
			s: 3
		})),
		F("Thực tế 20 gấp 4 lần kỳ vọng 5: PMI = log₂(4) = 2. Hai chữ đi cùng nhau nhiều hơn mức ngẫu nhiên.", "Observed 20 is 4× the expected 5: PMI = log₂(4) = 2. The two words co-occur more than chance.", box("a", 50, 24, 74, 16, "PMI = log₂(20 / 5) = 2", {
			f: "accent",
			c: "accent"
		}), txt("t", 50, 46, "đi cùng nhau ≠ nguyên nhân", {
			c: "mute",
			s: 3.2
		}))
	]),
	"git-commit": M([
		F("Mỗi commit là một ảnh chụp của dự án.", "Each commit is a snapshot of the project.", ...chain("c", [
			"ảnh 1",
			"ảnh 2",
			"ảnh 3"
		], {
			y: 26,
			on: 2,
			all: true
		})),
		F("Câu mô tả tốt: «thêm cột kênh vào file form» cho biết ảnh này khác ảnh trước ở đâu.", "A good message: “add channel column to form file” tells what differs from the previous snapshot.", ...chain("c", [
			"ảnh 1",
			"ảnh 2",
			"ảnh 3"
		], {
			y: 14,
			on: 2,
			all: true,
			h: 9
		}), box("m", 50, 38, 80, 12, "«thêm cột kênh vào file form»", {
			c: "green",
			f: "soft"
		})),
		F("Câu «update» thì không ai biết đổi gì.", "A message “update” tells nobody what changed.", ...chain("c", [
			"ảnh 1",
			"ảnh 2",
			"ảnh 3"
		], {
			y: 14,
			on: 2,
			all: true,
			h: 9
		}), box("m", 50, 38, 80, 12, "«update»", {
			c: "red",
			d: true
		}))
	]),
	"git-branch": M([
		F("Nhánh chính (main) đang chạy báo cáo.", "The main branch is running the report.", ln("m", 10, 20, 90, 20, "blue", { w: .9 }), txt("t", 12, 12, "main: báo cáo đang chạy", {
			a: "start",
			c: "blue",
			s: 3
		})),
		F("Bạn thử đổi cách tính giá form trên một nhánh riêng; main đứng yên.", "You try a new form-price formula on a separate branch; main stays still.", ln("m", 10, 20, 90, 20, "blue", { w: .9 }), ln("b1", 30, 20, 40, 38, "accent", { w: .9 }), ln("b2", 40, 38, 66, 38, "accent", { w: .9 }), txt("t", 52, 46, "nhánh thử", {
			c: "accent",
			s: 3
		})),
		F("Chỉ nhập lại khi thử xong và đúng; nhập khi chưa xong, báo cáo sẽ gãy.", "Merge back only when done and correct; merging early breaks the report.", ln("m", 10, 20, 90, 20, "blue", { w: .9 }), ln("b1", 30, 20, 40, 38, "accent", { w: .9 }), ln("b2", 40, 38, 66, 38, "accent", { w: .9 }), arr("b3", 66, 38, 76, 22, "green", { w: .9 }), txt("t", 80, 34, "nhập khi đã xong", {
			c: "green",
			s: 3
		}))
	]),
	"ens-bag": M([
		F("1.000 khách. Mỗi cây rút lại 1.000 dòng, có hoàn lại.", "1,000 customers. Each tree redraws 1,000 rows with replacement.", box("a", 50, 24, 80, 14, "1.000 khách", { c: "blue" })),
		F("Có khách vào túi hai lần, có khách không vào túi của cây này.", "Some customers enter the bag twice, others do not enter this tree's bag.", ...[
			"Lan ×2",
			"Minh ×1",
			"An ×0"
		].map((t, i) => box(`c${i}`, 20 + i * 30, 24, 26, 12, t, {
			c: i === 0 ? "accent" : i === 2 ? "mute" : "blue",
			f: i === 0 ? "accent" : "soft",
			d: i === 2
		}))),
		F("Cây khác thấy một túi hơi khác nên các cây không chép lại nhau.", "Other trees see a slightly different bag so the trees do not copy each other.", ...[
			"cây 1",
			"cây 2",
			"cây 3"
		].map((t, i) => box(`c${i}`, 20 + i * 30, 20, 26, 10, t, { c: "green" })), ...[
			"Lan ×2 · An ×0",
			"Lan ×0 · An ×1",
			"Lan ×1 · An ×3"
		].map((t, i) => box(`d${i}`, 20 + i * 30, 36, 28, 10, t, {
			c: "blue",
			s: 2.6
		})))
	]),
	"rf-col": M([
		F("Nếu cây nào cũng nhìn mọi cột, cột «số lần ghé» luôn thắng.", "If every tree sees every column, “visits” always wins.", ...[
			"cây 1",
			"cây 2",
			"cây 3"
		].flatMap((t, i) => [
			box(`t${i}`, 20 + i * 30, 12, 24, 9, t, { c: "blue" }),
			box(`c${i}`, 20 + i * 30, 34, 24, 9, "cắt theo ghé", {
				c: "accent",
				f: "accent"
			}),
			arr(`a${i}`, 20 + i * 30, 17, 20 + i * 30, 29, "mute")
		])),
		F("Mọi cây cắt cùng một chỗ nên đều giống nhau và rừng thành một cây nhân bản.", "All trees cut at the same place so they match, and the forest is one cloned tree.", ...[
			"cây 1",
			"cây 2",
			"cây 3"
		].flatMap((t, i) => [
			box(`t${i}`, 20 + i * 30, 12, 24, 9, t, { c: "blue" }),
			box(`c${i}`, 20 + i * 30, 34, 24, 9, "cắt theo ghé", {
				c: "red",
				f: "red"
			}),
			arr(`a${i}`, 20 + i * 30, 17, 20 + i * 30, 29, "mute")
		]), txt("t", 50, 52, "cây giống nhau → rừng vô ích", {
			c: "red",
			s: 3.2
		})),
		F("Mỗi nhát cắt chỉ được nhìn một nhóm cột ngẫu nhiên: có lúc cây phải cắt theo cột khác.", "Each split sees only a random subset of columns: sometimes a tree must split on another column.", ...[
			"cây 1",
			"cây 2",
			"cây 3"
		].flatMap((t, i) => [
			box(`t${i}`, 20 + i * 30, 12, 24, 9, t, { c: "blue" }),
			box(`c${i}`, 20 + i * 30, 34, 24, 9, [
				"theo ghé",
				"theo chi",
				"theo kênh"
			][i], {
				c: "green",
				f: "green"
			}),
			arr(`a${i}`, 20 + i * 30, 17, 20 + i * 30, 29, "mute")
		]))
	]),
	"imb-trap": M([
		F("100 khách: 92 ở lại và 8 rời đi.", "100 customers: 92 stay and 8 leave.", bars("b", [92, 8], ["ở lại", "rời đi"], {
			c: ["blue", "red"],
			max: 100,
			base: 46,
			h: 30,
			x0: 25,
			x1: 75
		})),
		F("Mô hình gọi mọi người là «ở lại»: accuracy = 92/100 = 92%.", "A model that calls everyone “stays”: accuracy = 92/100 = 92%.", box("a", 50, 24, 74, 14, "gọi tất cả «ở lại»\naccuracy = 92%", {
			c: "green",
			s: 3.4
		})),
		F("Nhưng bạn không giữ được ai trong 8 người rời. Bài rời bỏ không phải bài toán accuracy.", "But you retain none of the 8 who leave. Churn is not an accuracy problem.", box("a", 28, 24, 38, 14, "accuracy 92%", { c: "green" }), box("b", 72, 24, 38, 14, "giữ được\n0 / 8 người rời", {
			c: "red",
			f: "red"
		}), txt("t", 50, 46, "đẹp trên giấy, vô ích trên thực tế", {
			c: "red",
			s: 3.2
		}))
	]),
	"imb-fix": M([
		F("8 khách rời bị chép thành 16 dòng trước khi chia tập.", "8 churners are copied into 16 rows before splitting.", box("a", 28, 24, 38, 14, "8 người rời", { c: "red" }), arr("x", 48, 24, 52, 24, "mute"), box("b", 72, 24, 38, 14, "16 dòng\n(8 người)", {
			c: "red",
			f: "red"
		})),
		F("Cùng một người có thể vừa ở tập học vừa ở tập chấm: điểm đẹp giả.", "The same person can sit in both train and test: inflated score.", box("a", 28, 24, 38, 14, "tập học\nLan (bản 1)", { c: "blue" }), box("b", 72, 24, 38, 14, "tập chấm\nLan (bản 2)", { c: "green" }), txt("t", 50, 46, "nhân bản trước khi chia = rò rỉ", {
			c: "red",
			s: 3.2
		})),
		F("Cách an toàn: đổi trọng số (vẫn 8 người nhưng bỏ sót đắt hơn) hoặc đổi ngưỡng; thường thử đổi ngưỡng trước.", "Safer: change class weights (still 8 people but a miss costs more) or move the threshold; try the threshold first.", ...chain("c", [
			"đổi ngưỡng",
			"đổi trọng số",
			"nhân bản (sau khi chia)"
		], {
			y: 26,
			on: 0,
			h: 14
		}))
	]),
	"bv-bias": M([
		F("Số form theo mức chi là một hình cong.", "Forms versus spend is a curve.", ...[
			[1, 6],
			[2, 14],
			[3, 22],
			[4, 28],
			[5, 31],
			[6, 32],
			[7, 31],
			[8, 28]
		].map(([x, y], i) => dot(`d${i}`, 10 + x * 9, 46 - y, "blue", 1.5))),
		F("Đường thẳng trượt cả tập học lẫn tuần mới: đó là lệch (bias).", "A straight line misses both the training and new weeks: that is bias.", ...[
			[1, 6],
			[2, 14],
			[3, 22],
			[4, 28],
			[5, 31],
			[6, 32],
			[7, 31],
			[8, 28]
		].map(([x, y], i) => dot(`d${i}`, 10 + x * 9, 46 - y, "blue", 1.5)), ln("l", 16, 40, 90, 26, "red", { w: .7 }), txt("t", 50, 8, "quá thẳng → lệch", {
			c: "red",
			s: 3.4
		})),
		F("Cây rất sâu khớp từng tuần nhiễu: tập học đẹp nhưng tuần mới xấu. Đó là nhảy (variance).", "A very deep tree fits every noisy week: pretty on training, ugly on new weeks. That is variance.", ...[
			[1, 6],
			[2, 14],
			[3, 22],
			[4, 28],
			[5, 31],
			[6, 32],
			[7, 31],
			[8, 28]
		].map(([x, y], i) => dot(`d${i}`, 10 + x * 9, 46 - y, "blue", 1.5)), ...[
			[
				1,
				6,
				2,
				14
			],
			[
				2,
				14,
				3,
				22
			],
			[
				3,
				22,
				4,
				28
			],
			[
				4,
				28,
				5,
				34
			],
			[
				5,
				34,
				6,
				29
			],
			[
				6,
				29,
				7,
				33
			],
			[
				7,
				33,
				8,
				28
			]
		].map(([x1, y1, x2, y2], i) => ln(`z${i}`, 10 + x1 * 9, 46 - y1, 10 + x2 * 9, 46 - y2, "accent", { w: .7 })), txt("t", 50, 8, "khớp từng nhiễu → nhảy", {
			c: "accent",
			s: 3.4
		}))
	]),
	"reg-ridge": M([
		F("Chi tiêu tính bằng đồng và bằng triệu đồng cùng nằm trong mô hình.", "Spend in VND and in millions of VND both sit in the model.", ...pair("p", "chi (đồng)", "chi (triệu)", {
			ca: "blue",
			cb: "blue"
		})),
		F("Không co: hai hệ số giằng co nhau, ví dụ +50 và −48.", "Without shrinking: the two coefficients fight, for example +50 and −48.", bars("b", [50, 48], ["+50", "−48"], {
			c: ["accent", "red"],
			max: 55,
			show: false,
			base: 46,
			h: 28,
			x0: 25,
			x1: 75
		}), txt("t", 50, 6, "giằng co", {
			c: "red",
			s: 3.4
		})),
		F("Ridge kéo cả hai về gần 0, ví dụ 1,0 và 0,9, và hiếm khi làm một cột thành đúng 0.", "Ridge pulls both near 0, e.g. 1.0 and 0.9, and rarely makes a column exactly 0.", bars("b", [1, .9], ["1,0", "0,9"], {
			c: ["green", "green"],
			max: 55,
			show: false,
			base: 46,
			h: 28,
			x0: 25,
			x1: 75
		}), txt("t", 50, 6, "co đều, không về đúng 0", {
			c: "green",
			s: 3.4
		}))
	]),
	"reg-lasso": M([
		F("Mô hình có mười cột kênh và hành vi.", "The model has ten channel and behaviour columns.", ...Array.from({ length: 10 }, (_, i) => box(`c${i}`, 12 + i % 5 * 19, 18 + Math.floor(i / 5) * 14, 16, 9, `cột ${i + 1}`, {
			c: "blue",
			s: 2.8
		}))),
		F("Lasso có thể đưa hệ số của vài cột về đúng 0 và giữ lại những cột kia.", "Lasso can set some coefficients to exactly 0 and keep the others.", ...Array.from({ length: 10 }, (_, i) => box(`c${i}`, 12 + i % 5 * 19, 18 + Math.floor(i / 5) * 14, 16, 9, `cột ${i + 1}`, {
			c: [
				1,
				4,
				6,
				8
			].includes(i) ? "mute" : "green",
			d: [
				1,
				4,
				6,
				8
			].includes(i),
			o: [
				1,
				4,
				6,
				8
			].includes(i) ? .4 : 1,
			s: 2.8
		}))),
		F("Cột về 0 không có nghĩa nó vô dụng ngoài đời, chỉ là mô hình này không cần nó.", "A column set to 0 is not useless in real life; this model just does not need it.", box("a", 28, 24, 38, 14, "hệ số = 0\ntrong mô hình này", {
			c: "mute",
			d: true
		}), box("b", 72, 24, 38, 14, "vô dụng ngoài đời?\nkhông nhất thiết", { c: "red" }))
	]),
	"met-reg": M([
		F("Ba tuần lệch 2, 2 và 10 form.", "Three weeks off by 2, 2 and 10 forms.", bars("b", [
			2,
			2,
			10
		], [
			"tuần 1",
			"tuần 2",
			"tuần 3"
		], {
			c: [
				"blue",
				"blue",
				"red"
			],
			max: 11,
			base: 46,
			h: 28,
			x0: 20,
			x1: 80
		})),
		F("MAE = (2 + 2 + 10) / 3 ≈ 4,67 form: trung bình khoảng lệch.", "MAE = (2 + 2 + 10) / 3 ≈ 4.67 forms: the average gap.", bars("b", [
			2,
			2,
			10
		], [
			"tuần 1",
			"tuần 2",
			"tuần 3"
		], {
			c: "blue",
			max: 11,
			base: 46,
			h: 28,
			x0: 20,
			x1: 80
		}), ln("m", 8, 46 - 4.67 / 11 * 28, 92, 46 - 4.67 / 11 * 28, "green", {
			d: true,
			w: .6
		}), txt("t", 50, 6, "MAE ≈ 4,67", {
			c: "green",
			s: 3.4
		})),
		F("RMSE = √((4 + 4 + 100) / 3) = 6,0 form: tuần lệch 10 bị phạt nặng hơn nên kéo RMSE cao hơn MAE.", "RMSE = √((4 + 4 + 100) / 3) = 6.0 forms: the week off by 10 is penalised harder, pulling RMSE above MAE.", bars("b", [
			2,
			2,
			10
		], [
			"tuần 1",
			"tuần 2",
			"tuần 3"
		], {
			c: "blue",
			max: 11,
			base: 46,
			h: 28,
			x0: 20,
			x1: 80
		}), ln("m", 8, 46 - 4.67 / 11 * 28, 92, 46 - 4.67 / 11 * 28, "green", {
			d: true,
			w: .5
		}), ln("r", 8, 46 - 6 / 11 * 28, 92, 46 - 6 / 11 * 28, "red", {
			d: true,
			w: .7
		}), txt("t", 50, 6, "RMSE 6,0 > MAE 4,67", {
			c: "red",
			s: 3.4
		}))
	]),
	"fe-num": M([
		F("Hầu hết tuần chi dưới 5 triệu, có một tuần chi 80 triệu.", "Most weeks spend under 5 million; one week spends 80 million.", bars("b", [
			2,
			3,
			3,
			4,
			4,
			5,
			80
		], [
			"",
			"",
			"",
			"",
			"",
			"",
			"80"
		], {
			c: [
				"blue",
				"blue",
				"blue",
				"blue",
				"blue",
				"blue",
				"red"
			],
			max: 80,
			show: false,
			base: 46,
			h: 32
		})),
		F("Log kéo cái đuôi về: tuần 80 không còn át cả cột.", "Log pulls the tail in: week 80 no longer dwarfs the column.", bars("b", [
			.7,
			1.1,
			1.1,
			1.4,
			1.4,
			1.6,
			4.4
		], [
			"",
			"",
			"",
			"",
			"",
			"",
			"log 80"
		], {
			c: [
				"blue",
				"blue",
				"blue",
				"blue",
				"blue",
				"blue",
				"accent"
			],
			max: 5,
			show: false,
			base: 46,
			h: 32
		})),
		F("Nhưng log(0) không tồn tại: tuần chi 0 phải dùng log(1 + x) hoặc một luật khác.", "But log(0) does not exist: a zero-spend week needs log(1 + x) or another rule.", box("a", 28, 24, 38, 14, "log(0)\nkhông có nghĩa", {
			c: "red",
			d: true
		}), box("b", 72, 24, 38, 14, "log(1 + x)\ncó nghĩa với 0", { c: "green" }))
	]),
	"fe-cat": M([
		F("Ba kênh: GDN, Facebook, TikTok.", "Three channels: GDN, Facebook, TikTok.", ...[
			"GDN",
			"Facebook",
			"TikTok"
		].map((t, i) => box(`c${i}`, 20 + i * 30, 24, 26, 12, t, { c: "blue" }))),
		F("Ba cột 0/1 cộng với hệ số chặn: một cột là thừa vì biết hai cột là biết cột thứ ba.", "Three 0/1 columns plus an intercept: one is redundant, since two columns imply the third.", ...[
			"GDN 1/0/0",
			"FB 0/1/0",
			"TikTok 0/0/1"
		].map((t, i) => box(`c${i}`, 20 + i * 30, 24, 26, 12, t, {
			c: "blue",
			s: 3
		})), txt("t", 50, 44, "cột 3 = 1 − cột 1 − cột 2", {
			c: "red",
			s: 3.2
		})),
		F("Bỏ một kênh làm mốc. Cây quyết định thì có thể giữ cả ba.", "Drop one channel as the baseline. Decision trees can keep all three.", ...[
			"GDN (mốc)",
			"FB 0/1",
			"TikTok 0/1"
		].map((t, i) => box(`c${i}`, 20 + i * 30, 24, 26, 12, t, {
			c: i === 0 ? "mute" : "green",
			d: i === 0,
			s: 3
		})))
	]),
	"fe-time": M([
		F("Cột ngày để nguyên: đường đọc nó như «càng muộn càng nhiều form».", "A raw date column: a line reads it as “later means more forms”.", ...[
			1,
			2,
			3,
			4,
			5,
			6,
			7
		].map((x, i) => dot(`d${i}`, 14 + x * 10, 44 - x * 4, "blue", 1.5)), ln("l", 24, 40, 84, 16, "red", { w: .7 })),
		F("Nhưng chủ nhật và thứ hai không phải hai bậc của đường thẳng đó: tuần có chu kỳ.", "But Sunday and Monday are not two steps on that line: the week is cyclic.", ...[
			.5,
			1,
			.6,
			.55,
			.6,
			.9,
			1.2
		].map((v, i) => box(`w${i}`, 14 + i * 12, 40 - v * 20, 9, 5, [
			"T2",
			"T3",
			"T4",
			"T5",
			"T6",
			"T7",
			"CN"
		][i], {
			c: "accent",
			s: 2.8
		}))),
		F("Tách thứ, giờ, tháng nếu đó mới là câu bạn hỏi.", "Split into weekday, hour, month if that is the question you ask.", ...chain("c", [
			"ngày",
			"thứ",
			"giờ",
			"tháng"
		], {
			y: 26,
			on: 1,
			h: 14
		}))
	]),
	"cv-fold": M([
		F("Chia khách thành bốn phần.", "Split the customers into four folds.", ...[
			0,
			1,
			2,
			3
		].map((i) => box(`f${i}`, 14 + i * 24, 24, 21, 12, `phần ${i + 1}`, { c: "blue" }))),
		F("Mỗi lượt học trên ba phần và chấm phần bị giấu: lượt 1 giấu phần 1.", "Each round trains on three folds and scores the hidden one: round 1 hides fold 1.", ...[
			0,
			1,
			2,
			3
		].map((i) => box(`f${i}`, 14 + i * 24, 24, 21, 12, i === 0 ? "giấu" : "học", {
			c: i === 0 ? "accent" : "blue",
			f: i === 0 ? "accent" : "soft"
		}))),
		F("RMSE bốn lượt: 5,8, 6,2, 6,0, 6,4 → trung bình 6,1. Chỉnh độ sâu trên chính bốn lần này thì điểm hơi đẹp hơn sự thật.", "RMSE over four rounds: 5.8, 6.2, 6.0, 6.4 → mean 6.1. Tuning depth on these same four folds makes the score slightly rosier than the truth.", bars("b", [
			5.8,
			6.2,
			6,
			6.4
		], [
			"lượt 1",
			"lượt 2",
			"lượt 3",
			"lượt 4"
		], {
			c: "blue",
			max: 7,
			base: 46,
			h: 26,
			x0: 15,
			x1: 85
		}), txt("t", 50, 8, "trung bình = 6,1", {
			c: "accent",
			s: 3.4
		}))
	]),
	"cv-grid": M([
		F("Độ sâu thử 2, 4, 8; số cột mỗi nhát cắt thử 2, 4.", "Depth tries 2, 4, 8; columns per split tries 2, 4.", ...[
			2,
			4,
			8
		].flatMap((d, i) => [2, 4].map((c, j) => box(`g${i}${j}`, 24 + i * 26, 20 + j * 14, 22, 10, `${d} × ${c}`, {
			c: "blue",
			s: 3
		})))),
		F("Lưới thử 3 × 2 = 6 cặp, mỗi cặp một điểm.", "The grid tries 3 × 2 = 6 pairs, one score each.", ...[
			2,
			4,
			8
		].flatMap((d, i) => [2, 4].map((c, j) => box(`g${i}${j}`, 24 + i * 26, 20 + j * 14, 22, 10, `${d} × ${c}`, {
			c: "green",
			f: "green",
			s: 3
		})))),
		F("Độ sâu 3 không được thử vì bạn không viết ra: lưới không ra khỏi khoảng bạn đặt.", "Depth 3 is never tried because you did not write it: the grid never leaves your range.", ...[
			2,
			4,
			8
		].flatMap((d, i) => [2, 4].map((c, j) => box(`g${i}${j}`, 24 + i * 26, 20 + j * 14, 22, 10, `${d} × ${c}`, {
			c: "mute",
			o: .5,
			s: 3
		}))), box("x", 50, 48, 50, 9, "độ sâu 3: không có trong lưới", {
			c: "red",
			d: true,
			s: 3
		}))
	]),
	"ts-order": M([
		F("Số form tuần này giống tuần trước hơn là giống một tuần ngẫu nhiên.", "This week's forms look more like last week's than like a random week.", ...[
			20,
			22,
			25,
			27,
			30,
			32,
			35,
			38
		].map((v, i) => dot(`d${i}`, 12 + i * 10, 46 - v * .9, "blue", 1.5)), ...[
			20,
			22,
			25,
			27,
			30,
			32,
			35
		].map((v, i) => ln(`l${i}`, 12 + i * 10, 46 - v * .9, 22 + i * 10, 46 - [
			22,
			25,
			27,
			30,
			32,
			35,
			38
		][i] * .9, "blue", { w: .5 }))),
		F("Xáo các dòng rồi mới học: không còn «tuần tới» để dự báo.", "Shuffle the rows and then learn: there is no “next week” left to forecast.", ...[
			30,
			20,
			38,
			25,
			35,
			22,
			32,
			27
		].map((v, i) => dot(`d${i}`, 12 + i * 10, 46 - v * .9, "red", 1.5)), txt("t", 50, 8, "đống số không thứ tự", {
			c: "red",
			s: 3.4
		})),
		F("Giữ nguyên thứ tự; học trên quá khứ và chấm trên tương lai của nó.", "Keep the order; learn on the past and score on its future.", ...chain("c", ["quá khứ\n(học)", "tương lai\n(chấm)"], {
			y: 26,
			on: 1,
			h: 18,
			x0: 25,
			x1: 75
		}))
	]),
	"ts-dep": M([
		F("Phần dư của đường form theo mức chi: tuần này cùng dấu với tuần trước suốt một tháng.", "Residuals of forms-on-spend: this week shares the sign of last week for a whole month.", ...[
			3,
			4,
			3.5,
			2,
			1,
			-1,
			-2,
			-3,
			-2.5,
			-1
		].map((v, i) => dot(`d${i}`, 8 + i * 9, 26 - v * 3.2, v > 0 ? "accent" : "blue", 1.5)), ln("z", 6, 26, 94, 26, "mute", { w: .3 })),
		F("Các dòng không độc lập: mỗi tuần mang một phần tuần trước.", "The rows are not independent: each week carries part of the previous week.", ...[
			3,
			4,
			3.5,
			2,
			1,
			-1,
			-2,
			-3,
			-2.5,
			-1
		].map((v, i) => dot(`d${i}`, 8 + i * 9, 26 - v * 3.2, v > 0 ? "accent" : "blue", 1.5)), ln("z", 6, 26, 94, 26, "mute", { w: .3 }), ...[
			3,
			4,
			3.5,
			2,
			1,
			-1,
			-2,
			-3,
			-2.5
		].map((v, i) => ln(`l${i}`, 8 + i * 9, 26 - v * 3.2, 17 + i * 9, 26 - [
			4,
			3.5,
			2,
			1,
			-1,
			-2,
			-3,
			-2.5,
			-1
		][i] * 3.2, "mute", { w: .4 }))),
		F("Sai số chuẩn của hệ số vì vậy quá tự tin: đây là một chuỗi, không phải một đống dòng độc lập.", "So the coefficient's standard error is overconfident: this is a series, not a pile of independent rows.", box("a", 28, 24, 38, 14, "sai số chuẩn\ntính theo độc lập", {
			c: "red",
			d: true
		}), box("b", 72, 24, 38, 14, "thực tế: chuỗi\nphụ thuộc", { c: "green" }), txt("t", 50, 46, "quá tự tin", {
			c: "red",
			s: 3.6
		}))
	])
};
/** Đường nối các điểm theo thứ tự (chuỗi thời gian). */
function ser(p, v, o = {}) {
	const x0 = o.x0 ?? 8;
	const x1 = o.x1 ?? 92;
	const base = o.base ?? 46;
	const h = o.h ?? 32;
	const max = o.max ?? Math.max(...v);
	const min = o.min ?? 0;
	const px = (i) => x0 + (i + (o.from ?? 0)) / Math.max(1, v.length - 1 + (o.from ?? 0)) * (x1 - x0);
	const py = (y) => base - (y - min) / (max - min) * h;
	const out = [];
	v.forEach((y, i) => {
		out.push(dot(`${p}d${i}`, px(i), py(y), o.c ?? "blue", 1.3));
		if (i > 0) out.push(ln(`${p}l${i}`, px(i - 1), py(v[i - 1]), px(i), py(y), o.c ?? "blue", { w: .6 }));
	});
	return out;
}
var vec = (p, x, y, c = "blue", o0 = 20, base = 46, s = 3) => arr(p, o0, base, o0 + x * s, base - y * s, c, { w: .8 });
var axes = (p, o0 = 20, base = 46) => [ln(`${p}x`, o0, base, 90, base, "mute", { w: .3 }), ln(`${p}y`, o0, base, o0, 4, "mute", { w: .3 })];
var m6 = {
	"ts-decomp": M([
		F("Hai kiểu mùa: cộng thêm hay nhân lên.", "Two kinds of season: additive or multiplicative.", ...pair("p", "cộng\n+20 form", "nhân\n×1,4", {
			ca: "blue",
			cb: "accent"
		})),
		F("Kiểu cộng: tháng lễ luôn thêm khoảng 20 form dù nền cao hay thấp.", "Additive: a holiday month always adds about 20 forms whether the baseline is high or low.", bars("b", [
			40,
			60,
			80,
			100
		], [
			"nền 40",
			"lễ",
			"nền 80",
			"lễ"
		], {
			c: [
				"blue",
				"accent",
				"blue",
				"accent"
			],
			max: 110,
			base: 46,
			h: 28,
			x0: 15,
			x1: 85
		}), txt("t", 50, 6, "+20 ở cả hai mức nền", {
			c: "accent",
			s: 3.4
		})),
		F("Kiểu nhân: lễ là ×1,4 nên nền gấp đôi thì phần mùa cũng gấp đôi. Chọn theo dữ liệu, đừng đoán từ một năm.", "Multiplicative: a holiday is ×1.4, so a doubled baseline doubles the seasonal part. Choose from data, not from one year.", bars("b", [
			40,
			56,
			80,
			112
		], [
			"nền 40",
			"lễ",
			"nền 80",
			"lễ"
		], {
			c: [
				"blue",
				"accent",
				"blue",
				"accent"
			],
			max: 115,
			base: 46,
			h: 28,
			x0: 15,
			x1: 85
		}), txt("t", 50, 6, "+16 rồi +32: mùa lớn theo nền", {
			c: "accent",
			s: 3.4
		}))
	]),
	"ts-naive": M([
		F("Tuần trước 40 form, nên câu ngây nói tuần này cũng 40.", "Last week 40 forms, so the naive forecast says this week 40 too.", box("a", 28, 24, 38, 14, "tuần trước: 40", { c: "blue" }), arr("x", 48, 24, 52, 24, "mute"), box("b", 72, 24, 38, 14, "dự báo ngây: 40", { c: "accent" })),
		F("Mô hình RMSE 9, câu ngây RMSE 6: mô hình tệ hơn câu ngây.", "Model RMSE 9, naive RMSE 6: the model is worse than the naive line.", bars("b", [9, 6], ["mô hình", "ngây"], {
			c: ["red", "green"],
			max: 10,
			base: 46,
			h: 28,
			x0: 25,
			x1: 75
		}), txt("t", 50, 6, "chưa đáng dùng", {
			c: "red",
			s: 3.6
		})),
		F("Dữ liệu có mùa năm thì câu ngây có thể là «bằng tuần cùng kỳ năm trước».", "With yearly seasonality the naive line may be “same as the same week last year”.", ...chain("c", ["tuần cùng kỳ\nnăm trước", "dự báo ngây\ntuần này"], {
			y: 26,
			on: 1,
			h: 18,
			x0: 25,
			x1: 75
		}))
	]),
	"ts-sma": M([
		F("Ba tuần gần nhất: 20, 24 và 80 form (lễ).", "The last three weeks: 20, 24 and 80 forms (holiday).", bars("b", [
			20,
			24,
			80
		], [
			"t−3",
			"t−2",
			"t−1"
		], {
			c: [
				"blue",
				"blue",
				"accent"
			],
			max: 90,
			base: 46,
			h: 30,
			x0: 20,
			x1: 80
		})),
		F("SMA = (20 + 24 + 80) / 3 ≈ 41,3: tuần lễ được cân như một tuần thường.", "SMA = (20 + 24 + 80) / 3 ≈ 41.3: the holiday week weighs like an ordinary week.", bars("b", [
			20,
			24,
			80
		], [
			"t−3",
			"t−2",
			"t−1"
		], {
			c: [
				"blue",
				"blue",
				"accent"
			],
			max: 90,
			base: 46,
			h: 30,
			x0: 20,
			x1: 80
		}), ln("m", 8, 46 - 41.3 / 90 * 30, 92, 46 - 41.3 / 90 * 30, "red", {
			d: true,
			w: .6
		}), txt("t", 50, 6, "SMA ≈ 41,3", {
			c: "red",
			s: 3.4
		})),
		F("Khi lễ đã qua, 80 vẫn nằm trong cửa sổ một lúc: dự báo phản ứng chậm.", "After the holiday, 80 stays in the window for a while: the forecast reacts slowly.", bars("b", [
			24,
			80,
			22
		], [
			"t−3",
			"t−2",
			"t−1"
		], {
			c: [
				"blue",
				"accent",
				"blue"
			],
			max: 90,
			base: 46,
			h: 30,
			x0: 20,
			x1: 80
		}), ln("m", 8, 32, 92, 32, "red", {
			d: true,
			w: .6
		}), txt("t", 50, 6, "vẫn cao dù tuần mới thấp", {
			c: "red",
			s: 3.4
		}))
	]),
	"ts-holt": M([
		F("Form tăng khoảng 3 mỗi tuần suốt một quý, mức hiện tại 40.", "Forms rise about 3 per week all quarter; the current level is 40.", ...ser("s", [
			28,
			31,
			34,
			37,
			40
		], {
			max: 70,
			x1: 50
		})),
		F("Holt cộng độ dốc đó vào các tuần tới.", "Holt adds that slope to the coming weeks.", ...ser("s", [
			28,
			31,
			34,
			37,
			40
		], {
			max: 70,
			x1: 50
		}), ln("f", 50, 46 - 40 / 70 * 32, 66, 23.6, "accent", {
			d: true,
			w: .7
		})),
		F("Đẩy dự báo thật xa thì dốc vẫn chạy và có thể ra số vô lý; một tháng lễ nhảy một lần không phải dốc cả năm.", "Push the forecast far out and the slope keeps running into a silly number; a one-off holiday jump is not a yearlong slope.", ...ser("s", [
			28,
			31,
			34,
			37,
			40
		], {
			max: 70,
			x1: 50
		}), ln("f", 50, 46 - 40 / 70 * 32, 92, 46 - 120 / 70 * 32, "red", {
			d: true,
			w: .7
		}), txt("t", 70, 8, "dốc chạy mãi", {
			c: "red",
			s: 3.2
		}))
	]),
	"ts-hw": M([
		F("Form theo tuần có chu kỳ 7 (ngày).", "Weekly-ish forms with a cycle of 7 (days).", ...ser("s", [
			20,
			22,
			30,
			28,
			26,
			40,
			38,
			21,
			23,
			31,
			29,
			27,
			41,
			39
		], { max: 45 })),
		F("Holt-Winters cần bạn nói 7: nó không tự quyết định là 7 hay 52.", "Holt-Winters needs you to say 7: it does not decide between 7 and 52.", ...ser("s", [
			20,
			22,
			30,
			28,
			26,
			40,
			38,
			21,
			23,
			31,
			29,
			27,
			41,
			39
		], { max: 45 }), ln("a", 8, 50, 52, 50, "accent", { w: .7 }), txt("t", 30, 56, "chu kỳ = 7 (do bạn khai)", {
			c: "accent",
			s: 3
		})),
		F("Cần hơn một vòng để thấy hình dạng; một năm dữ liệu tuần thì mùa năm chưa lặp lại lần nào.", "You need more than one cycle to see the shape; a year of weekly data has not repeated its yearly season even once.", box("a", 50, 24, 76, 14, "1 năm dữ liệu tuần\n= mùa năm mới xuất hiện 1 lần", {
			c: "red",
			s: 3
		}))
	]),
	"ts-mape": M([
		F("Số thật 10, đoán 12: lệch tương đối 2 / 10 = 20%.", "Actual 10, guess 12: relative error 2 / 10 = 20%.", box("a", 28, 24, 38, 14, "thật 10\nđoán 12", { c: "blue" }), box("b", 72, 24, 38, 14, "2 / 10 = 20%", {
			c: "green",
			s: 4
		})),
		F("Số thật 0, đoán 3: không chia được cho 0, MAPE gãy.", "Actual 0, guess 3: you cannot divide by 0, MAPE breaks.", box("a", 28, 24, 38, 14, "thật 0\nđoán 3", { c: "blue" }), box("b", 72, 24, 38, 14, "3 / 0\n= không có", {
			c: "red",
			d: true
		})),
		F("MAE vẫn là 3 form dùng được; RMSE thì phạt tuần lệch lớn hơn.", "MAE is still a usable 3 forms; RMSE penalises large misses harder.", ...pair("p", "MAE = 3 form\nvẫn dùng được", "RMSE\nphạt lệch lớn", {
			ca: "green",
			cb: "accent"
		}))
	]),
	"ts-walk": M([
		F("Học đến hết tháng 6, chấm tháng 7.", "Learn through June, score July.", ...["T1–6", "T7"].map((t, i) => box(`f${i}`, 30 + i * 36, 24, i === 0 ? 50 : 20, 12, t, {
			c: i === 0 ? "blue" : "accent",
			f: i === 1 ? "accent" : "soft"
		}))),
		F("Rồi học đến hết tháng 7, chấm tháng 8: cuốn tới từng bước.", "Then learn through July, score August: roll forward step by step.", ...["T1–7", "T8"].map((t, i) => box(`f${i}`, 30 + i * 36, 24, i === 0 ? 50 : 20, 12, t, {
			c: i === 0 ? "blue" : "accent",
			f: i === 1 ? "accent" : "soft"
		}))),
		F("Xáo tuần vào k-fold: mô hình thấy tuần 8 khi đang chấm tuần 7. Đó không còn là dự báo.", "Shuffling weeks into k-fold: the model sees week 8 while scoring week 7. That is no longer forecasting.", ...["tuần 8 (học)", "tuần 7 (chấm)"].map((t, i) => box(`f${i}`, 28 + i * 44, 24, 36, 12, t, { c: i === 0 ? "red" : "accent" })), arr("x", 46, 24, 54, 24, "red"), txt("t", 50, 46, "nhìn thấy tương lai", {
			c: "red",
			s: 3.4
		}))
	]),
	"ts-stat": M([
		F("Form dao động quanh 40 suốt năm với độ rộng không đổi: tạm gọi là dừng.", "Forms oscillate around 40 all year with constant width: call it stationary.", ...ser("s", [
			40,
			44,
			38,
			42,
			37,
			43,
			39,
			41,
			36,
			42
		], {
			min: 20,
			max: 60,
			c: "green"
		})),
		F("Form tăng đều thì chưa dừng: tâm đi theo thời gian.", "A steadily rising series is not stationary: its centre moves with time.", ...ser("s", [
			20,
			24,
			27,
			33,
			36,
			42,
			45,
			50,
			54,
			58
		], {
			min: 15,
			max: 60,
			c: "red"
		})),
		F("Lấy tuần này trừ tuần trước cho các bước thay đổi, ổn định hơn; muốn dự báo mức phải cộng ngược lại.", "Subtract last week from this week to get the changes, steadier; to forecast levels you add them back.", ...ser("s", [
			4,
			3,
			6,
			3,
			6,
			3,
			5,
			4,
			4
		], {
			min: 0,
			max: 10,
			c: "accent"
		}), txt("t", 50, 8, "phần thay đổi: tạm dừng", {
			c: "accent",
			s: 3.2
		}))
	]),
	"ts-acf": M([
		F("Form tuần này tương quan 0,6 với tuần trước và 0,3 với hai tuần trước (ACF).", "This week's forms correlate 0.6 with last week and 0.3 with two weeks ago (ACF).", bars("b", [.6, .3], ["trễ 1", "trễ 2"], {
			c: "blue",
			max: 1,
			base: 46,
			h: 28,
			x0: 30,
			x1: 70
		}), txt("t", 50, 6, "ACF", {
			c: "blue",
			s: 3.6
		})),
		F("PACF hỏi phần còn lại sau khi đã tính các bước gần hơn: trễ 2 có thể còn rất ít.", "PACF asks what remains after accounting for nearer lags: lag 2 may be tiny.", bars("b", [.6, .05], ["trễ 1", "trễ 2"], {
			c: "accent",
			max: 1,
			base: 46,
			h: 28,
			x0: 30,
			x1: 70
		}), txt("t", 50, 6, "PACF", {
			c: "accent",
			s: 3.6
		})),
		F("Chuỗi ngắn hay cho hình nói dối: đừng chọn bậc chỉ vì một cột vượt vạch.", "Short series often draw a lying picture: do not pick an order just because one bar crosses the line.", bars("b", [
			.6,
			.3,
			.25,
			.1
		], [
			"1",
			"2",
			"3",
			"4"
		], {
			c: "blue",
			max: 1,
			base: 46,
			h: 28,
			x0: 20,
			x1: 80
		}), ln("v", 8, 46 - .28 * 28, 92, 46 - .28 * 28, "red", {
			d: true,
			w: .5
		}), txt("t", 50, 6, "một cột vượt vạch ≠ một quy luật", {
			c: "red",
			s: 3.2
		}))
	]),
	"ts-ar": M([
		F("Giả sử tuần này ≈ 10 + 0,5 × tuần trước.", "Suppose this week ≈ 10 + 0.5 × last week.", box("a", 50, 24, 74, 14, "tuần này = 10 + 0,5 × tuần trước", { c: "accent" })),
		F("Tuần trước 40 form thì dự báo 10 + 0,5 × 40 = 30.", "If last week was 40, the forecast is 10 + 0.5 × 40 = 30.", ...chain("c", [
			"tuần trước\n40",
			"10 + 0,5 × 40",
			"dự báo\n30"
		], {
			y: 26,
			on: 2,
			h: 16
		})),
		F("Hệ số 0,5 không phải «một nửa nguyên nhân»: nó là mức bám trên một chuỗi đã được cho là dừng.", "The 0.5 is not “half the cause”: it is the stickiness of a series assumed stationary.", box("a", 28, 24, 38, 14, "0,5 = mức bám", { c: "green" }), box("b", 72, 24, 38, 14, "một nửa nguyên nhân", {
			c: "red",
			d: true
		}))
	]),
	"ts-ma": M([
		F("Một tuần lỗi tracking làm form hụt 15.", "One tracking-error week drops forms by 15.", ...ser("s", [
			40,
			41,
			25,
			33,
			38,
			40,
			40
		], {
			min: 15,
			max: 45,
			c: "blue"
		}), ring("r", at(2, 0, 6), 46 - 10 / 30 * 32, 4, "red")),
		F("Tuần sau còn vương lại một phần của cú sốc đó: đó là MA trong ARIMA.", "The week after still carries part of that shock: that is the MA in ARIMA.", ...ser("s", [
			40,
			41,
			25,
			33,
			38,
			40,
			40
		], {
			min: 15,
			max: 45,
			c: "blue"
		}), ring("r", at(2, 0, 6), 46 - 10 / 30 * 32, 4, "red"), ring("q", at(3, 0, 6), 26.8, 3, "accent"), txt("t", 50, 8, "cú sốc cũ còn vương lại", {
			c: "accent",
			s: 3.2
		})),
		F("Trung bình của ba tuần gần nhất là một việc khác, dù cũng gọi «trung bình trượt». Đừng trộn hai thứ trong báo cáo.", "The average of the last three weeks is a different thing, though also called “moving average”. Do not mix them in a report.", ...pair("p", "MA trong ARIMA\ncú sốc cũ", "trung bình trượt\n3 tuần gần nhất", {
			ca: "accent",
			cb: "blue"
		}))
	]),
	"ts-arima": M([
		F("Form có hướng đi lên: lấy hiệu một lần (d = 1).", "Forms trend up: difference once (d = 1).", ...chain("c", [
			"chuỗi có hướng",
			"lấy hiệu\nd = 1",
			"AR và MA"
		], {
			y: 26,
			on: 1,
			h: 16
		})),
		F("Rồi AR và MA chạy trên phần thay đổi: đó là ARIMA. Mùa tuần cần SARIMA với chu kỳ 7.", "Then AR and MA run on the changes: that is ARIMA. A weekly season needs SARIMA with period 7.", ...chain("c", [
			"lấy hiệu",
			"AR + MA",
			"mùa 7 → SARIMA"
		], {
			y: 26,
			on: 2,
			h: 14
		})),
		F("Thêm cột khuyến mãi là SARIMAX, và bạn phải biết khuyến mãi tuần tới; nếu chưa biết thì bạn đang đoán luôn cả khuyến mãi.", "Adding a promo column makes SARIMAX, and you must know next week's promo; if not, you are guessing the promo too.", box("a", 28, 24, 38, 14, "SARIMAX\ncần cột khuyến mãi", { c: "blue" }), box("b", 72, 24, 38, 14, "khuyến mãi tuần tới\nchưa biết → đoán", {
			c: "red",
			d: true
		}))
	]),
	"math-vec": M([
		F("Một tuần: chi 10 triệu, thu 80 form, viết (10, 80).", "One week: spend 10 million, 80 forms, written (10, 80).", ...axes("a"), vec("v", 10, 20, "blue", 20, 46, 2.5), txt("t", 60, 12, "(10, 80)", {
			c: "blue",
			s: 3.6
		})),
		F("Đổi chỗ thành (80, 10) là một tuần hoàn toàn khác: ô đầu là chi tiêu.", "Swapping to (80, 10) is a totally different week: the first cell is spend.", ...axes("a"), vec("v", 10, 20, "mute", 20, 46, 2.5), vec("w", 20, 10 / 4, "red", 20, 46, 2.5), txt("t", 60, 12, "(80, 10) ≠ (10, 80)", {
			c: "red",
			s: 3.4
		})),
		F("Véctơ là một danh sách số có thứ tự: vị trí mỗi số có nghĩa.", "A vector is an ordered list of numbers: each position has a meaning.", ...pair("p", "ô 1\nchi tiêu", "ô 2\nsố form", {
			ca: "blue",
			cb: "accent"
		}))
	]),
	"math-add": M([
		F("Hai tuần: (10, 80) và (2, 5).", "Two weeks: (10, 80) and (2, 5).", ...axes("a"), arr("u", 20, 46, 60, 14, "blue", { w: .8 }), arr("v", 20, 46, 28, 36, "accent", { w: .8 })),
		F("Cộng từng ô: (10 + 2, 80 + 5) = (12, 85).", "Add cell by cell: (10 + 2, 80 + 5) = (12, 85).", box("a", 50, 24, 74, 14, "(10, 80) + (2, 5) = (12, 85)", {
			c: "green",
			s: 3.6
		})),
		F("Nhân với 2: (20, 160); cả chi tiêu lẫn form cùng gấp đôi, không phải chỉ một ô.", "Multiply by 2: (20, 160); spend and forms both double, not just one cell.", box("a", 50, 24, 74, 14, "2 × (10, 80) = (20, 160)", {
			c: "accent",
			s: 3.6
		}), txt("t", 50, 44, "mọi ô cùng nhân", {
			c: "mute",
			s: 3.2
		}))
	]),
	"math-dot": M([
		F("Tuần A là (2, 3) và tuần B là (4, 1).", "Week A is (2, 3) and week B is (4, 1).", ...axes("a"), arr("u", 20, 46, 44, 22, "blue", { w: .8 }), arr("v", 20, 46, 68, 38, "accent", { w: .8 })),
		F("Tích vô hướng = 2 × 4 + 3 × 1 = 11: nhân từng ô rồi cộng.", "Dot product = 2 × 4 + 3 × 1 = 11: multiply cell by cell, then add.", box("a", 50, 24, 74, 14, "2 × 4 + 3 × 1 = 11", {
			f: "accent",
			c: "accent",
			s: 4
		})),
		F("Hai trục (1, 0) và (0, 1) cho 1 × 0 + 0 × 1 = 0: không cùng hướng chút nào.", "The two axes (1, 0) and (0, 1) give 1 × 0 + 0 × 1 = 0: not aligned at all.", ...axes("a"), arr("u", 20, 46, 50, 46, "blue", { w: .8 }), arr("v", 20, 46, 20, 16, "accent", { w: .8 }), txt("t", 60, 24, "1×0 + 0×1 = 0", {
			c: "green",
			s: 3.4
		}))
	]),
	"math-mat": M([
		F("Ma trận [[2, 0], [0, 1]] và tuần (3, 4).", "Matrix [[2, 0], [0, 1]] and week (3, 4).", ...pair("p", "ma trận\n[[2,0],[0,1]]", "tuần\n(3, 4)", {
			ca: "accent",
			cb: "blue"
		})),
		F("Hàng 1 tạo ô 1: 2×3 + 0×4 = 6. Hàng 2 tạo ô 2: 0×3 + 1×4 = 4.", "Row 1 makes cell 1: 2×3 + 0×4 = 6. Row 2 makes cell 2: 0×3 + 1×4 = 4.", box("a", 50, 16, 74, 10, "hàng 1: 2×3 + 0×4 = 6", { c: "accent" }), box("b", 50, 32, 74, 10, "hàng 2: 0×3 + 1×4 = 4", { c: "accent" })),
		F("Kết quả (6, 4): chi tiêu được nhân đôi, số form giữ nguyên.", "Result (6, 4): spend doubled, forms unchanged.", ...axes("a"), arr("u", 20, 46, 44, 14, "mute", {
			w: .6,
			d: true
		}), arr("v", 20, 46, 68, 14, "green", { w: .9 }))
	]),
	"math-mul": M([
		F("A cỡ 2×3 nhân với cột B gồm 3 số: các cỡ khớp nhau (3 = 3).", "A (2×3) times a column B of 3 numbers: sizes match (3 = 3).", ...pair("p", "A: 2 hàng\n× 3 cột", "B: 3 số", {
			ca: "blue",
			cb: "accent"
		}), txt("t", 50, 46, "3 cột = 3 số → làm được", {
			c: "green",
			s: 3.4
		})),
		F("Kết quả có 2 số: mỗi hàng của A gặp cột B ra một số.", "The result has 2 numbers: each row of A meets column B once.", ...chain("c", [
			"A (2×3)",
			"× B (3)",
			"= 2 số"
		], {
			y: 26,
			on: 2
		})),
		F("Nhân A với một cột chỉ có 2 số thì không làm được; và AB thường khác BA.", "Multiplying A by a column of only 2 numbers is impossible; and AB usually differs from BA.", box("a", 28, 24, 38, 14, "A × (2 số)\nkhông làm được", {
			c: "red",
			d: true
		}), box("b", 72, 24, 38, 14, "AB ≠ BA\n(thường)", { c: "accent" }))
	]),
	"math-det": M([
		F("Ma trận [[2, 0], [0, 1]] biến hình vuông 1×1 thành hình chữ nhật 2×1.", "Matrix [[2, 0], [0, 1]] turns a 1×1 square into a 2×1 rectangle.", box("a", 28, 26, 14, 14, "1×1", { c: "mute" }), arr("x", 38, 26, 50, 26, "mute"), box("b", 70, 26, 28, 14, "2×1", {
			c: "blue",
			f: "soft"
		})),
		F("Định thức 2 × 1 − 0 × 0 = 2: diện tích gấp đôi.", "Determinant 2 × 1 − 0 × 0 = 2: the area doubles.", box("a", 28, 26, 14, 14, "diện tích 1", {
			c: "mute",
			s: 2.8
		}), box("b", 70, 26, 28, 14, "diện tích 2", {
			f: "green",
			c: "green"
		}), txt("t", 50, 46, "det = 2", {
			c: "green",
			s: 3.6
		})),
		F("[[1, 2], [2, 4]]: hàng dưới gấp hai hàng trên, định thức 1×4 − 2×2 = 0, mặt phẳng bị ép thành một đường.", "[[1, 2], [2, 4]]: the bottom row is twice the top row, determinant 1×4 − 2×2 = 0, the plane is squashed to a line.", box("a", 28, 26, 14, 14, "hình vuông", {
			c: "mute",
			s: 2.8
		}), ln("l", 52, 26, 90, 26, "red", { w: 1.2 }), txt("t", 50, 46, "det = 0 → ép thành một đường", {
			c: "red",
			s: 3.4
		}))
	]),
	"math-sys": M([
		F("Hai đường: x + y = 3 và x − y = 1.", "Two lines: x + y = 3 and x − y = 1.", ...axes("a", 14, 46), ln("l1", 20, 12, 70, 46, "blue", { w: .7 }), ln("l2", 20, 46, 70, 12, "accent", { w: .7 })),
		F("Chúng gặp nhau tại (2, 1): nghiệm duy nhất nằm trên cả hai đường.", "They meet at (2, 1): the unique solution lies on both lines.", ...axes("a", 14, 46), ln("l1", 20, 12, 70, 46, "blue", { w: .7 }), ln("l2", 20, 46, 70, 12, "accent", { w: .7 }), ring("r", 45, 29, 3.5, "green"), txt("t", 45, 8, "(2, 1)", {
			c: "green",
			s: 3.6
		})),
		F("Đổi điều kiện sau thành 2x + 2y = 5: hai đường song song, không có điểm nào thỏa cả hai.", "Change the second to 2x + 2y = 5: the lines are parallel and no point satisfies both.", ...axes("a", 14, 46), ln("l1", 20, 12, 70, 46, "blue", { w: .7 }), ln("l2", 20, 6, 70, 40, "red", { w: .7 }), txt("t", 50, 54, "song song → vô nghiệm", {
			c: "red",
			s: 3.4
		}))
	]),
	"math-eig": M([
		F("Ma trận [[2, 0], [0, 1]] kéo giãn mặt phẳng.", "The matrix [[2, 0], [0, 1]] stretches the plane.", ...axes("a"), arr("u", 20, 46, 42, 46, "blue", { w: .8 }), arr("v", 20, 46, 20, 24, "accent", { w: .8 })),
		F("(1, 0) thành (2, 0): cùng hướng, dài gấp 2 → λ = 2. (0, 1) giữ nguyên → λ = 1.", "(1, 0) becomes (2, 0): same direction, twice as long → λ = 2. (0, 1) stays → λ = 1.", ...axes("a"), arr("u", 20, 46, 42, 46, "mute", {
			w: .6,
			d: true
		}), arr("u2", 20, 46, 64, 46, "green", { w: .9 }), arr("v", 20, 46, 20, 24, "accent", { w: .9 }), txt("t", 60, 20, "λ = 2 và λ = 1", {
			c: "green",
			s: 3.4
		})),
		F("(1, 1) thành (2, 1): lệch hướng nên không phải vectơ riêng.", "(1, 1) becomes (2, 1): the direction changes, so it is not an eigenvector.", ...axes("a"), arr("u", 20, 46, 42, 24, "mute", {
			w: .6,
			d: true
		}), arr("u2", 20, 46, 64, 24, "red", { w: .9 }), txt("t", 60, 20, "bị quay → không phải", {
			c: "red",
			s: 3.4
		}))
	]),
	"math-deriv": M([
		F("form ≈ 20 + 6x − 0,1x², x là số triệu chi: đường cong dần.", "forms ≈ 20 + 6x − 0.1x², x in millions of spend: a flattening curve.", ...ser("s", [
			20,
			25.9,
			31.6,
			37.1,
			42.4,
			47.5,
			52.4,
			57.1,
			61.6,
			65.9,
			70
		], {
			min: 15,
			max: 75,
			c: "blue"
		})),
		F("Độ dốc là 6 − 0,2x: tại x = 0 thêm 1 triệu được khoảng 6 form.", "The slope is 6 − 0.2x: at x = 0 one more million gives about 6 forms.", ...ser("s", [
			20,
			25.9,
			31.6,
			37.1,
			42.4,
			47.5,
			52.4,
			57.1,
			61.6,
			65.9,
			70
		], {
			min: 15,
			max: 75,
			c: "blue"
		}), ln("t", 8, 46 - 5 / 60 * 32, 30, 46 - 5 / 60 * 32 - 5.4, "green", { w: .8 }), txt("x", 28, 8, "x = 0: dốc 6", {
			c: "green",
			s: 3.2
		})),
		F("Tại x = 10 độ dốc chỉ còn 6 − 2 = 4: thêm một triệu chỉ được khoảng 4 form.", "At x = 10 the slope is 6 − 2 = 4: one more million adds only about 4 forms.", ...ser("s", [
			20,
			25.9,
			31.6,
			37.1,
			42.4,
			47.5,
			52.4,
			57.1,
			61.6,
			65.9,
			70
		], {
			min: 15,
			max: 75,
			c: "blue"
		}), ln("t", 72, 46 - 55 / 60 * 32 + 2, 92, 46 - 55 / 60 * 32 - 8, "red", { w: .8 }), txt("x", 70, 8, "x = 10: dốc 4", {
			c: "red",
			s: 3.2
		}))
	]),
	"math-jac": M([
		F("Hai nút (chi, email) và hai đầu ra (form, lead đủ điều kiện).", "Two knobs (spend, email) and two outputs (forms, qualified leads).", ...pair("p", "nút: chi, email", "đầu ra: form, lead", {
			ca: "blue",
			cb: "accent"
		})),
		F("Mỗi đầu ra có một đạo hàm riêng theo mỗi nút: bảng 2×2 gồm bốn ô.", "Each output has a partial derivative for each knob: a 2×2 table of four cells.", ...[
			"∂form/∂chi",
			"∂form/∂email",
			"∂lead/∂chi",
			"∂lead/∂email"
		].map((t, i) => box(`c${i}`, 30 + i % 2 * 40, 16 + Math.floor(i / 2) * 16, 36, 12, t, {
			c: "accent",
			s: 3
		}))),
		F("Chỉ có một đầu ra thì bảng thu về một hàng: chính là gradient.", "With a single output the table shrinks to one row: the gradient.", ...["∂form/∂chi", "∂form/∂email"].map((t, i) => box(`c${i}`, 30 + i * 40, 24, 36, 12, t, {
			c: "green",
			s: 3
		})), ...["∂lead/∂chi", "∂lead/∂email"].map((t, i) => box(`d${i}`, 30 + i * 40, 40, 36, 12, t, {
			c: "mute",
			d: true,
			o: .3,
			s: 3
		})))
	]),
	"math-hess": M([
		F("Một nút: f(w) = (w − 2)² có đạo hàm bậc hai 2: cong lên, nên là một đáy.", "One knob: f(w) = (w − 2)² has second derivative 2: curves up, so it is a bottom.", ...ser("s", [
			9,
			4,
			1,
			0,
			1,
			4,
			9
		], {
			min: 0,
			max: 9,
			c: "green",
			base: 44
		}), txt("t", 50, 8, "cong lên → đáy", {
			c: "green",
			s: 3.4
		})),
		F("Hai nút: x² − y² cong lên theo x và cong xuống theo y.", "Two knobs: x² − y² curves up along x and down along y.", ...ser("a", [
			9,
			4,
			1,
			0,
			1,
			4,
			9
		], {
			min: 0,
			max: 9,
			c: "blue",
			base: 36,
			h: 24,
			x0: 8,
			x1: 46
		}), ...ser("b", [
			0,
			5,
			8,
			9,
			8,
			5,
			0
		], {
			min: 0,
			max: 9,
			c: "red",
			base: 36,
			h: 24,
			x0: 54,
			x1: 92
		}), txt("t1", 27, 8, "theo x: lên", {
			c: "blue",
			s: 3
		}), txt("t2", 73, 8, "theo y: xuống", {
			c: "red",
			s: 3
		})),
		F("Đạo hàm bậc nhất bằng 0 tại gốc, nhưng đó là một yên ngựa chứ không phải đáy.", "The first derivative is 0 at the origin, but that is a saddle, not a bottom.", box("a", 28, 24, 38, 14, "đạo hàm = 0\ntại gốc", { c: "blue" }), box("b", 72, 24, 38, 14, "yên ngựa\nkhông phải đáy", {
			c: "red",
			f: "red"
		}))
	]),
	"math-taylor": M([
		F("Tại mức chi 10 triệu, tiếp tuyến dùng độ dốc 4 form mỗi triệu.", "At spend 10 million the tangent uses a slope of 4 forms per million.", ...ser("s", [
			20,
			25.9,
			31.6,
			37.1,
			42.4,
			47.5,
			52.4,
			57.1,
			61.6,
			65.9,
			70
		], {
			min: 15,
			max: 100,
			c: "blue"
		})),
		F("Thêm 0,2 triệu thì tiếp tuyến gần đúng sát đường cong.", "Add 0.2 million and the tangent is close to the curve.", ...ser("s", [
			20,
			25.9,
			31.6,
			37.1,
			42.4,
			47.5,
			52.4,
			57.1,
			61.6,
			65.9,
			70
		], {
			min: 15,
			max: 100,
			c: "blue"
		}), ln("t", 60, 34.83764705882353, 92, 46 - (65.9 - 15) / 85 * 32 - 11, "green", { w: .8 }), ring("r", 60, 46 - (65.9 - 15) / 85 * 32, 3, "green")),
		F("Nhảy thêm 20 triệu thì đường bậc hai đã cong đi, và tiếp tuyến cho số lớn hơn nhiều so với thực tế.", "Jump another 20 million and the quadratic has bent away; the tangent gives a much larger number than reality.", ...ser("s", [
			20,
			25.9,
			31.6,
			37.1,
			42.4,
			47.5,
			52.4,
			57.1,
			61.6,
			65.9,
			70
		], {
			min: 15,
			max: 100,
			c: "blue",
			x1: 60
		}), ln("t", 40, 32.83764705882353, 94, 8, "red", {
			w: .8,
			d: true
		}), txt("x", 70, 54, "ở xa: tiếp tuyến lệch", {
			c: "red",
			s: 3.2
		}))
	]),
	"ds-type": M([
		F("Ba kiểu: số (chi tiêu), chữ (kênh), chữ có thứ bậc (số sao).", "Three types: number (spend), text (channel), ordered text (stars).", ...[
			["số", "chi tiêu"],
			["chữ", "kênh"],
			["chữ có\nthứ bậc", "1–5 sao"]
		].map(([a, b], i) => box(`c${i}`, 18 + i * 32, 24, 28, 18, `${a}\n${b}`, {
			c: [
				"accent",
				"blue",
				"gold"
			][i],
			s: 3
		}))),
		F("Mã hóa Google, Meta, TikTok thành 1, 2, 3 thì thứ tự 1 < 2 < 3 là do bạn tự gán.", "Encoding Google, Meta, TikTok as 1, 2, 3 makes 1 < 2 < 3 an order you invented.", ...[
			"Google = 1",
			"Meta = 2",
			"TikTok = 3"
		].map((t, i) => box(`c${i}`, 20 + i * 30, 24, 26, 12, t, {
			c: "blue",
			s: 3
		}))),
		F("«Trung bình mã kênh» là câu vô nghĩa: 2 không phải kênh nào cả.", "“Mean channel code” is meaningless: 2 is not a channel.", box("a", 50, 24, 70, 14, "TB(1, 2, 3) = 2 = ?", {
			c: "red",
			d: true
		}))
	]),
	"ds-center": M([
		F("Tám tuần: 2, 4, 4, 4, 5, 5, 7, 9.", "Eight weeks: 2, 4, 4, 4, 5, 5, 7, 9.", bars("b", [
			2,
			4,
			4,
			4,
			5,
			5,
			7,
			9
		], [
			"2",
			"4",
			"4",
			"4",
			"5",
			"5",
			"7",
			"9"
		], {
			c: "blue",
			max: 9,
			show: false,
			base: 44,
			h: 28
		})),
		F("Trung bình = 40 / 8 = 5; trung vị = (4 + 5) / 2 = 4,5.", "Mean = 40 / 8 = 5; median = (4 + 5) / 2 = 4.5.", bars("b", [
			2,
			4,
			4,
			4,
			5,
			5,
			7,
			9
		], [
			"2",
			"4",
			"4",
			"4",
			"5",
			"5",
			"7",
			"9"
		], {
			c: "blue",
			max: 9,
			show: false,
			base: 44,
			h: 28
		}), ln("m", 8, 44 - 5 / 9 * 28, 92, 44 - 5 / 9 * 28, "accent", {
			d: true,
			w: .6
		}), ln("d", 8, 30, 92, 30, "green", {
			d: true,
			w: .6
		}), txt("t", 50, 6, "TB 5 · trung vị 4,5: gần nhau", {
			c: "mute",
			s: 3.2
		})),
		F("Thêm một giá trị cực đoan 90: trung bình nhảy lên, trung vị gần như đứng yên.", "Add an extreme value 90: the mean jumps, the median barely moves.", bars("b", [
			2,
			4,
			4,
			4,
			5,
			5,
			7,
			90
		], [
			"2",
			"4",
			"4",
			"4",
			"5",
			"5",
			"7",
			"90"
		], {
			c: [
				"blue",
				"blue",
				"blue",
				"blue",
				"blue",
				"blue",
				"blue",
				"red"
			],
			max: 90,
			show: false,
			base: 44,
			h: 28
		}), txt("t", 50, 6, "TB 15,1 · trung vị 4,5", {
			c: "red",
			s: 3.4
		}))
	]),
	"ds-mode": M([
		F("Dãy 2, 4, 4, 4, 5, 5, 7, 9: đếm số lần mỗi giá trị xuất hiện.", "The series 2, 4, 4, 4, 5, 5, 7, 9: count how often each value appears.", bars("b", [
			1,
			3,
			2,
			1,
			1
		], [
			"2",
			"4",
			"5",
			"7",
			"9"
		], {
			c: "blue",
			max: 4,
			base: 46,
			h: 28,
			x0: 20,
			x1: 80
		})),
		F("Số 4 xuất hiện 3 lần, nhiều nhất: mode là 4.", "The value 4 appears 3 times, most often: the mode is 4.", bars("b", [
			1,
			3,
			2,
			1,
			1
		], [
			"2",
			"4",
			"5",
			"7",
			"9"
		], {
			c: [
				"blue",
				"accent",
				"blue",
				"blue",
				"blue"
			],
			max: 4,
			base: 46,
			h: 28,
			x0: 20,
			x1: 80
		}), txt("t", 50, 6, "mode = 4", {
			c: "accent",
			s: 3.6
		})),
		F("Nếu 5 cũng xuất hiện 3 lần thì có hai mode. Với cột kênh, mode là kênh có nhiều khách nhất.", "If 5 also appeared 3 times there would be two modes. For a channel column the mode is the channel with the most customers.", bars("b", [
			400,
			550,
			250
		], [
			"GDN",
			"Facebook",
			"TikTok"
		], {
			c: [
				"blue",
				"accent",
				"blue"
			],
			max: 600,
			base: 46,
			h: 28,
			x0: 20,
			x1: 80
		}), txt("t", 50, 6, "mode = Facebook", {
			c: "accent",
			s: 3.4
		}))
	]),
	"ds-q": M([
		F("Dãy đã sắp: 2, 4, 4, 4 | 5, 5, 7, 9; chia làm nửa dưới và nửa trên.", "Sorted: 2, 4, 4, 4 | 5, 5, 7, 9; split into a lower and an upper half.", bars("b", [
			2,
			4,
			4,
			4,
			5,
			5,
			7,
			9
		], [
			"2",
			"4",
			"4",
			"4",
			"5",
			"5",
			"7",
			"9"
		], {
			c: [
				"blue",
				"blue",
				"blue",
				"blue",
				"gold",
				"gold",
				"gold",
				"gold"
			],
			max: 9,
			show: false,
			base: 44,
			h: 28
		})),
		F("Trung vị mỗi nửa: Q1 = 4 và Q3 = 6; trung vị cả dãy Q2 = 4,5.", "Median of each half: Q1 = 4 and Q3 = 6; the overall median Q2 = 4.5.", bars("b", [
			2,
			4,
			4,
			4,
			5,
			5,
			7,
			9
		], [
			"2",
			"4",
			"4",
			"4",
			"5",
			"5",
			"7",
			"9"
		], {
			c: [
				"blue",
				"blue",
				"blue",
				"blue",
				"gold",
				"gold",
				"gold",
				"gold"
			],
			max: 9,
			show: false,
			base: 44,
			h: 28
		}), txt("t", 50, 6, "Q1 = 4 · Q2 = 4,5 · Q3 = 6", {
			c: "accent",
			s: 3.4
		})),
		F("IQR = Q3 − Q1 = 6 − 4 = 2. Phần mềm khác có thể cắt lệch một chút.", "IQR = Q3 − Q1 = 6 − 4 = 2. Other software may cut slightly differently.", box("a", 50, 24, 74, 14, "IQR = 6 − 4 = 2", {
			f: "accent",
			c: "accent",
			s: 4
		}), txt("t", 50, 46, "ghi rõ cách cắt", {
			c: "mute",
			s: 3.2
		}))
	]),
	"ds-var": M([
		F("Dãy 2, 4, 4, 4, 5, 5, 7, 9 có trung bình 5.", "The series has mean 5.", bars("b", [
			2,
			4,
			4,
			4,
			5,
			5,
			7,
			9
		], [
			"2",
			"4",
			"4",
			"4",
			"5",
			"5",
			"7",
			"9"
		], {
			c: "blue",
			max: 9,
			show: false,
			base: 44,
			h: 28
		}), ln("m", 8, 44 - 5 / 9 * 28, 92, 44 - 5 / 9 * 28, "accent", {
			d: true,
			w: .6
		})),
		F("Bình phương độ lệch: 9, 1, 1, 1, 0, 0, 4, 16 → tổng 32.", "Squared deviations: 9, 1, 1, 1, 0, 0, 4, 16 → sum 32.", bars("b", [
			9,
			1,
			1,
			1,
			0,
			0,
			4,
			16
		], [
			"2",
			"4",
			"4",
			"4",
			"5",
			"5",
			"7",
			"9"
		], {
			c: "gold",
			max: 16,
			base: 44,
			h: 28
		}), txt("t", 50, 6, "tổng = 32", {
			c: "accent",
			s: 3.6
		})),
		F("Mẫu chia n − 1: 32 / 7 ≈ 4,57. Nếu có toàn bộ tổng thể, chia n: 32 / 8 = 4.", "Sample divides by n − 1: 32 / 7 ≈ 4.57. With the whole population divide by n: 32 / 8 = 4.", ...pair("p", "mẫu: 32 / 7\n≈ 4,57", "tổng thể: 32 / 8\n= 4", {
			ca: "blue",
			cb: "accent"
		}))
	]),
	"ds-sd": M([
		F("Phương sai mẫu là 4,57 form²: đơn vị là bình phương.", "Sample variance is 4.57 forms²: the unit is squared.", box("a", 50, 24, 60, 14, "phương sai = 4,57 form²", {
			c: "gold",
			s: 3.6
		})),
		F("Độ lệch chuẩn = √4,57 ≈ 2,14 form: về lại đơn vị gốc.", "Standard deviation = √4.57 ≈ 2.14 forms: back to the original unit.", ...chain("c", [
			"4,57 form²",
			"căn bậc hai",
			"2,14 form"
		], {
			y: 26,
			on: 2
		})),
		F("Báo cáo «độ rộng là 4,57 form» là sai đơn vị: phải là 2,14 form.", "Reporting “the spread is 4.57 forms” is the wrong unit: it should be 2.14 forms.", box("a", 28, 24, 38, 14, "4,57 form\n(sai đơn vị)", {
			c: "red",
			d: true
		}), box("b", 72, 24, 38, 14, "2,14 form\n(đúng)", { c: "green" }))
	]),
	"ds-cov": M([
		F("Ba tuần: chi 1, 2, 3 triệu; form 2, 2, 5. Trung bình chi 2, form 3.", "Three weeks: spend 1, 2, 3 million; forms 2, 2, 5. Mean spend 2, forms 3.", ...[
			[1, 2],
			[2, 2],
			[3, 5]
		].map(([x, y], i) => dot(`d${i}`, 20 + x * 18, 46 - y * 7, "blue", 1.8)), ln("mx", 56, 8, 56, 46, "mute", {
			d: true,
			w: .3
		}), ln("my", 12, 25, 90, 25, "mute", {
			d: true,
			w: .3
		})),
		F("Tích hai độ lệch từng tuần: (−1)(−1) = 1, 0 × (−1) = 0, (1)(2) = 2 → tổng 3.", "Product of the two deviations per week: (−1)(−1) = 1, 0 × (−1) = 0, (1)(2) = 2 → sum 3.", ...[
			[1, 2],
			[2, 2],
			[3, 5]
		].map(([x, y], i) => dot(`d${i}`, 20 + x * 18, 46 - y * 7, "blue", 1.8)), box("a", 50, 8, 70, 9, "1 + 0 + 2 = 3", {
			c: "accent",
			s: 3.4
		})),
		F("Hiệp phương sai mẫu = 3 / 2 = 1,5 (triệu × form). Dương: cùng phía trung bình.", "Sample covariance = 3 / 2 = 1.5 (million × forms). Positive: same side of the means.", box("a", 50, 24, 74, 14, "cov = 3 / (n − 1) = 1,5", {
			f: "accent",
			c: "accent",
			s: 3.8
		}), txt("t", 50, 46, "đơn vị: triệu × form", {
			c: "mute",
			s: 3.2
		}))
	]),
	"ds-corr": M([
		F("Với chi và form ở bài trước: cov = 1,5, độ lệch chuẩn chi = 1, form = √3.", "With spend and forms from before: cov = 1.5, SD of spend = 1, of forms = √3.", box("a", 50, 24, 74, 14, "cov = 1,5 · sd chi = 1 · sd form = √3", {
			c: "blue",
			s: 3.2
		})),
		F("r = 1,5 / (1 × √3) ≈ 0,87: không còn đơn vị.", "r = 1.5 / (1 × √3) ≈ 0.87: unit-free.", box("a", 50, 24, 74, 14, "r = 1,5 / √3 ≈ 0,87", {
			f: "accent",
			c: "accent",
			s: 4
		})),
		F("Đổi chi sang đồng thì r vẫn là 0,87; nhưng ba điểm là quá ít, và r không phải nguyên nhân.", "Switching spend to VND, r is still 0.87; but three points are too few, and r is not causation.", ...pair("p", "triệu hay đồng\nr = 0,87", "3 điểm: quá ít\nđể báo cáo", {
			ca: "green",
			cb: "red"
		}))
	])
};
var motions = {
	...m1,
	...m2,
	...m3,
	...m4,
	...m5,
	...m6
};
/** Viết gọn một bảng. */
function T(name, c, r, m) {
	return {
		name,
		c,
		r,
		m
	};
}
/** Viết gọn một bước. */
function S(vi, en, t, code) {
	return {
		vi,
		en,
		code,
		t
	};
}
var mem = (r, m = {}) => T("bộ nhớ", ["tên", "giá trị"], r, m);
var df = (m = {}) => T("df", [
	"",
	"channel",
	"spend"
], [
	[
		"a",
		"GDN",
		8
	],
	[
		"b",
		"Meta",
		12
	],
	[
		"c",
		"TikTok",
		6
	]
], m);
var pyDemos = {
	"py-run": [S("Python đọc từ trên xuống. Dòng 1 dùng cpl khi chưa ai tạo nó nên báo lỗi.", "Python reads top to bottom. Line 1 uses cpl before anyone created it, so it errors.", [mem([["cpl", "chưa có"]], { bad: [0] })], "print(cpl)      # dòng 1: NameError\ncpl = 8 / 24    # dòng 2"), S("Đảo thứ tự: tạo cpl trước, dùng sau. Bộ nhớ có tên cpl nên dòng print chạy được.", "Swap the order: create cpl first, use it after. The memory holds the name cpl, so print works.", [mem([["cpl", .333]], { add: [0] })], "cpl = 8 / 24    # dòng 1: tạo tên\nprint(cpl)      # dòng 2: dùng tên")],
	"py-type": [
		S("Với số nguyên, + là cộng.", "With integers, + adds.", [T("biểu thức", [
			"biểu thức",
			"kết quả",
			"kiểu"
		], [[
			"3 + 4",
			7,
			"int"
		]], { rows: [0] })]),
		S("Với chuỗi, + là nối. «3» + «4» ra «34», không phải 7.", "With strings, + joins. \"3\" + \"4\" gives \"34\", not 7.", [T("biểu thức", [
			"biểu thức",
			"kết quả",
			"kiểu"
		], [
			[
				"3 + 4",
				7,
				"int"
			],
			[
				"\"3\" + \"4\"",
				"\"34\"",
				"str"
			],
			[
				"\"3\" * 2",
				"\"33\"",
				"str"
			]
		], { rows: [1, 2] })]),
		S("Trộn số với chuỗi thì Python từ chối, vì kiểu quyết định phép nào hợp lệ.", "Mix a number with a string and Python refuses, because the type decides which operation is valid.", [T("biểu thức", [
			"biểu thức",
			"kết quả",
			"kiểu"
		], [
			[
				"3 + 4",
				7,
				"int"
			],
			[
				"\"3\" + \"4\"",
				"\"34\"",
				"str"
			],
			[
				"3 + \"4\"",
				"TypeError",
				"—"
			]
		], { bad: [2] })])
	],
	"py-op": [
		S("Một dấu = là gán: đặt tên x vào ô nhớ giá trị 5.", "One = assigns: it puts the name x on a memory slot holding 5.", [mem([["x", 5]], { add: [0] })], "x = 5"),
		S("Hai dấu == là so sánh: hỏi «x có bằng 5 không?» và trả về True. x không đổi.", "Two == compare: they ask whether x equals 5 and return True. x does not change.", [mem([["x", 5], ["x == 5", "True"]], { cells: [[1, 1]] })], "x == 5"),
		S("So sánh với 6 ra False, và x vẫn là 5. Chỉ dấu = mới làm bộ nhớ đổi.", "Comparing with 6 gives False, and x is still 5. Only = changes memory.", [mem([["x", 5], ["x == 6", "False"]], { cells: [[1, 1]] })], "x == 6")
	],
	"py-if": [
		S("Với spend = 12, nhánh if đúng nên chạy. Các nhánh sau không được xét.", "With spend = 12, the if branch is true so it runs. The later branches are not even checked.", [T("nhánh", [
			"nhánh",
			"điều kiện",
			"chạy?"
		], [
			[
				"if",
				"spend >= 10",
				"chạy"
			],
			[
				"elif",
				"spend >= 6",
				"bỏ qua"
			],
			[
				"else",
				"(còn lại)",
				"bỏ qua"
			]
		], {
			rows: [0],
			dim: [1, 2]
		})], "spend = 12\nif spend >= 10: tier = 'cao'\nelif spend >= 6: tier = 'vừa'\nelse: tier = 'thấp'"),
		S("Với spend = 8, if sai nên xét tiếp: elif đúng và chạy. Else bỏ qua.", "With spend = 8, if is false so it checks on: elif is true and runs. Else is skipped.", [T("nhánh", [
			"nhánh",
			"điều kiện",
			"chạy?"
		], [
			[
				"if",
				"spend >= 10",
				"sai"
			],
			[
				"elif",
				"spend >= 6",
				"chạy"
			],
			[
				"else",
				"(còn lại)",
				"bỏ qua"
			]
		], {
			rows: [1],
			dim: [0, 2]
		})], "spend = 8"),
		S("Với spend = 4, hai điều kiện đều sai nên else chạy. Luôn đúng một nhánh.", "With spend = 4, both conditions fail so else runs. Exactly one branch runs.", [T("nhánh", [
			"nhánh",
			"điều kiện",
			"chạy?"
		], [
			[
				"if",
				"spend >= 10",
				"sai"
			],
			[
				"elif",
				"spend >= 6",
				"sai"
			],
			[
				"else",
				"(còn lại)",
				"chạy"
			]
		], {
			rows: [2],
			dim: [0, 1]
		})], "spend = 4")
	],
	"py-loop": [
		S("for đi qua từng phần tử của danh sách, lần lượt một. Bắt đầu: total = 0.", "for walks through each element of a list, one by one. Start: total = 0.", [T("vòng lặp", [
			"vòng",
			"spend",
			"total"
		], [[
			"—",
			"—",
			0
		]])], "total = 0\nfor spend in [8, 10, 12]:\n    total = total + spend"),
		S("Vòng 1: spend = 8, total thành 8. Vòng 2: spend = 10, total thành 18.", "Turn 1: spend = 8, total becomes 8. Turn 2: spend = 10, total becomes 18.", [T("vòng lặp", [
			"vòng",
			"spend",
			"total"
		], [[
			1,
			8,
			8
		], [
			2,
			10,
			18
		]], { add: [0, 1] })]),
		S("Vòng 3: spend = 12, total thành 30. Hết phần tử thì for tự dừng.", "Turn 3: spend = 12, total becomes 30. When the elements run out, for stops by itself.", [T("vòng lặp", [
			"vòng",
			"spend",
			"total"
		], [
			[
				1,
				8,
				8
			],
			[
				2,
				10,
				18
			],
			[
				3,
				12,
				30
			]
		], { add: [2] })]),
		S("while thì khác: nó lặp tới khi điều kiện sai. Quên đổi spend thì điều kiện mãi đúng và không bao giờ dừng.", "while is different: it repeats until the condition is false. Forget to change spend and the condition stays true forever.", [T("vòng lặp", ["vòng", "spend < 10 ?"], [
			[1, "đúng"],
			[2, "đúng"],
			[3, "đúng"],
			["…", "đúng mãi"]
		], { bad: [3] })], "spend = 8\nwhile spend < 10:\n    print(spend)   # quên tăng spend")
	],
	"py-fn": [S("Hàm nhận hai số và trả về s / f. return là thứ người gọi nhận lại.", "The function takes two numbers and returns s / f. return is what the caller gets back.", [mem([["cpl(8, 24)", .333]], { cells: [[0, 1]] })], "def cpl(s, f):\n    return s / f\n\nx = cpl(8, 24)"), S("Thiếu return thì hàm vẫn chạy nhưng không trả gì: người gọi nhận None.", "Without return the function still runs but hands nothing back: the caller gets None.", [mem([["cpl(8, 24)", .333], ["cpl_bad(8, 24)", "None"]], { bad: [1] })], "def cpl_bad(s, f):\n    s / f           # tính xong rồi bỏ\n\ny = cpl_bad(8, 24)   # y là None")],
	"py-str": [
		S("Một chuỗi s là «Tet Sale». Gọi .upper() trả về một chuỗi mới viết hoa.", "A string s is Tet Sale. Calling .upper() returns a new uppercase string.", [mem([["s", "Tet Sale"], ["s.upper()", "TET SALE"]], { add: [1] })], "s = \"Tet Sale\"\ns.upper()"),
		S("Nhưng s vẫn là «Tet Sale». Chuỗi cũ không tự đổi.", "But s is still Tet Sale. The old string does not change by itself.", [mem([["s", "Tet Sale"]], { cells: [[0, 1]] })], "print(s)   # Tet Sale"),
		S("Muốn giữ kết quả thì gán lại tên.", "To keep the result, assign it back to a name.", [mem([["s", "TET SALE"]], { cells: [[0, 1]] })], "s = s.upper()")
	],
	"py-list": [
		S("Danh sách có thứ tự. Chỉ số bắt đầu từ 0, không phải từ 1.", "A list has an order. Indexes start at 0, not 1.", [T("spend = [8, 10, 12]", ["chỉ số", "giá trị"], [
			[0, 8],
			[1, 10],
			[2, 12]
		])]),
		S("spend[0] là phần tử đầu tiên: 8.", "spend[0] is the first element: 8.", [T("spend = [8, 10, 12]", ["chỉ số", "giá trị"], [
			[0, 8],
			[1, 10],
			[2, 12]
		], { cells: [[0, 1]] })], "spend[0]   → 8"),
		S("spend[-1] đếm từ cuối: 12. spend[3] không có nên báo IndexError.", "spend[-1] counts from the end: 12. spend[3] does not exist so it raises IndexError.", [T("spend = [8, 10, 12]", ["chỉ số", "giá trị"], [
			[0, 8],
			[1, 10],
			[2, 12],
			[3, "IndexError"]
		], {
			cells: [[2, 1]],
			bad: [3]
		})], "spend[-1]  → 12\nspend[3]   → IndexError"),
		S("List sửa được: gán lại một ô, hoặc thêm vào cuối bằng append.", "A list can be edited: assign a cell, or add to the end with append.", [T("spend", ["chỉ số", "giá trị"], [
			[0, 8],
			[1, 15],
			[2, 12],
			[3, 20]
		], {
			cells: [[1, 1]],
			add: [3]
		})], "spend[1] = 15\nspend.append(20)")
	],
	"py-dict": [
		S("Dictionary tra giá trị theo khóa: kênh GDN có chi tiêu 8.", "A dictionary looks up a value by key: channel GDN has spend 8.", [T("d", ["khóa", "giá trị"], [["GDN", 8], ["Meta", 12]], { cols: [0] })], "d = {\"GDN\": 8, \"Meta\": 12}\nd[\"GDN\"]   → 8"),
		S("Hỏi khóa không có: d[\"TikTok\"] báo KeyError.", "Ask for a missing key: d[\"TikTok\"] raises KeyError.", [T("d", ["khóa", "giá trị"], [
			["GDN", 8],
			["Meta", 12],
			["TikTok", "KeyError"]
		], { bad: [2] })], "d[\"TikTok\"]   → KeyError"),
		S("get thì chịu trả về giá trị mặc định thay vì lỗi: None, hoặc 0 nếu bạn nói.", "get is willing to return a default instead of an error: None, or 0 if you say so.", [T("d", ["biểu thức", "kết quả"], [["d.get(\"TikTok\")", "None"], ["d.get(\"TikTok\", 0)", 0]], { rows: [1] })])
	],
	"py-tup": [
		S("Tuple cũng có thứ tự, viết bằng ngoặc tròn.", "A tuple also has an order, written with round brackets.", [T("t = (\"GDN\", 8)", ["chỉ số", "giá trị"], [[0, "GDN"], [1, 8]])]),
		S("Đọc t[1] thì được 8. Nhưng gán t[1] = 9 báo TypeError: tuple không cho sửa từng ô.", "Reading t[1] gives 8. But assigning t[1] = 9 raises TypeError: a tuple does not allow editing a cell.", [T("t = (\"GDN\", 8)", ["chỉ số", "giá trị"], [[0, "GDN"], [1, 8]], { bad: [1] })], "t[1]     → 8\nt[1] = 9 → TypeError"),
		S("Muốn đổi thì tạo tuple mới, hoặc dùng list nếu cần sửa.", "To change it, build a new tuple, or use a list if you need to edit.", [T("t", ["chỉ số", "giá trị"], [[0, "GDN"], [1, 9]], { add: [1] })], "t = (t[0], 9)")
	],
	"py-set": [
		S("Một danh sách có GDN hai lần.", "A list with GDN twice.", [T("list", ["vị trí", "giá trị"], [
			[0, "GDN"],
			[1, "Meta"],
			[2, "GDN"]
		], { rows: [0, 2] })], "ch = [\"GDN\", \"Meta\", \"GDN\"]"),
		S("set(ch) giữ mỗi giá trị một lần. Còn hai phần tử.", "set(ch) keeps each value once. Two elements remain.", [T("set", ["giá trị"], [["GDN"], ["Meta"]], { add: [0, 1] })], "set(ch)   → {\"GDN\", \"Meta\"}"),
		S("Set không có vị trí, nên không hứa thứ tự và không có s[0]. Dùng nó để hỏi «có hay không» và đếm giá trị khác nhau.", "A set has no position, so no order promise and no s[0]. Use it to ask is it in there and to count distinct values.", [T("set", ["biểu thức", "kết quả"], [
			["\"GDN\" in s", "True"],
			["len(s)", 2],
			["s[0]", "TypeError"]
		], { bad: [2] })])
	],
	"py-np": [
		S("Mảng NumPy là một hình chữ nhật số, mọi ô cùng một kiểu. Đây là mảng 2 dòng 2 cột.", "A NumPy array is a rectangle of numbers, every cell of one type. This is 2 rows by 2 columns.", [T("a", [
			"",
			"cột 0",
			"cột 1"
		], [[
			"dòng 0",
			8,
			24
		], [
			"dòng 1",
			6,
			12
		]])], "a = np.array([[8, 24], [6, 12]])"),
		S("sum(axis=0) cộng theo từng cột, ra hai số.", "sum(axis=0) adds down each column, giving two numbers.", [T("a", [
			"",
			"cột 0",
			"cột 1"
		], [
			[
				"dòng 0",
				8,
				24
			],
			[
				"dòng 1",
				6,
				12
			],
			[
				"a.sum(axis=0)",
				14,
				36
			]
		], {
			cols: [1, 2],
			rows: [2]
		})], "a.sum(axis=0)   → [14, 36]"),
		S("Trộn số với chữ thì cả mảng bị ép thành chữ. Lúc đó không cộng được nữa.", "Mix numbers with text and the whole array is forced to text. You can no longer add.", [T("np.array([8, \"GDN\"])", [
			"phần tử",
			"giá trị",
			"kiểu"
		], [[
			0,
			"8",
			"chữ"
		], [
			1,
			"GDN",
			"chữ"
		]], { bad: [0, 1] })])
	],
	"py-ser": [S("Hai Series có nhãn (index) khác nhau: s1 có a, b, c; s2 có b, c, d.", "Two Series with different labels (index): s1 has a, b, c; s2 has b, c, d.", [T("s1", ["nhãn", "giá trị"], [
		["a", 1],
		["b", 2],
		["c", 3]
	]), T("s2", ["nhãn", "giá trị"], [
		["b", 10],
		["c", 20],
		["d", 30]
	])]), S("s1 + s2 cộng theo nhãn, không theo vị trí mắt nhìn. b và c có ở cả hai nên cộng được. a và d chỉ có một bên nên ra NaN.", "s1 + s2 adds by label, not by position. b and c are in both so they add. a and d are in only one so they give NaN.", [T("s1 + s2", ["nhãn", "kết quả"], [
		["a", "NaN"],
		["b", 12],
		["c", 23],
		["d", "NaN"]
	], {
		rows: [1, 2],
		bad: [0, 3]
	})], "s1 + s2")],
	"py-frame": [
		S("DataFrame có nhãn dòng (a, b, c) và có vị trí (0, 1, 2). Hai thứ này khác nhau.", "A DataFrame has row labels (a, b, c) and positions (0, 1, 2). They are different things.", [df()]),
		S("loc dùng nhãn: df.loc[\"b\"] là dòng có nhãn b.", "loc uses labels: df.loc[\"b\"] is the row labeled b.", [df({ rows: [1] })], "df.loc[\"b\"]"),
		S("iloc dùng vị trí: df.iloc[1] là dòng ở vị trí 1. Hôm nay trùng, nhưng sau khi lọc hay xếp lại thì không còn trùng.", "iloc uses position: df.iloc[1] is the row at position 1. Same row today, but after filtering or sorting they no longer match.", [df({ rows: [1] })], "df.iloc[1]"),
		S("Cắt bằng loc lấy cả điểm cuối: df.loc[\"a\":\"b\"] có hai dòng.", "Slicing with loc includes the end: df.loc[\"a\":\"b\"] has two rows.", [df({ rows: [0, 1] })], "df.loc[\"a\":\"b\"]"),
		S("Cắt bằng iloc bỏ điểm cuối: df.iloc[0:1] chỉ có một dòng.", "Slicing with iloc excludes the end: df.iloc[0:1] has just one row.", [df({ rows: [0] })], "df.iloc[0:1]")
	]
};
var ads = (m = {}) => T("ads", [
	"week",
	"channel",
	"spend",
	"forms"
], [
	[
		1,
		"GDN",
		8,
		24
	],
	[
		1,
		"TikTok",
		6,
		12
	],
	[
		2,
		"GDN",
		10,
		35
	],
	[
		2,
		"TikTok",
		4,
		9
	],
	[
		3,
		"GDN",
		12,
		30
	],
	[
		3,
		"TikTok",
		7,
		20
	]
], m);
var sqlDemos = {
	"sql-wh": [
		S("Bảng đang ghi đơn (nguồn). Hai đơn đang ở trạng thái new.", "The table that takes orders (the source). Two orders are new.", [T("orders", [
			"id",
			"status",
			"total"
		], [[
			1,
			"new",
			200
		], [
			2,
			"new",
			150
		]])]),
		S("Khi đơn 2 được trả tiền, nguồn ghi đè. Trạng thái cũ mất.", "When order 2 is paid, the source overwrites it. The old status is gone.", [T("orders", [
			"id",
			"status",
			"total"
		], [[
			1,
			"new",
			200
		], [
			2,
			"paid",
			150
		]], { cells: [[1, 1]] })], "UPDATE orders SET status = 'paid' WHERE id = 2;"),
		S("Kho dữ liệu chụp lại mỗi ngày và chỉ thêm dòng, nên còn cả lịch sử.", "The warehouse snapshots every day and only adds rows, so history stays.", [T("fact_order_daily", [
			"day",
			"id",
			"status"
		], [[
			"Mon",
			2,
			"new"
		], [
			"Tue",
			2,
			"paid"
		]], { add: [1] })], "INSERT INTO fact_order_daily SELECT CURRENT_DATE, id, status FROM orders;")
	],
	"sql-star": [
		S("Ở giữa là bảng sự kiện: mỗi dòng là một lần có form. Nó chỉ giữ số và khóa.", "In the middle is the fact table: one row per form. It holds only numbers and keys.", [T("fact_form", [
			"form_id",
			"campaign_id",
			"channel_id",
			"forms"
		], [
			[
				1,
				1,
				1,
				24
			],
			[
				2,
				1,
				2,
				12
			],
			[
				3,
				2,
				1,
				35
			]
		], { cols: [1, 2] })]),
		S("Xung quanh là các bảng mô tả: tên chiến dịch, tên kênh. Khóa trong bảng sự kiện trỏ tới chúng.", "Around it are description tables: campaign name, channel name. Keys in the fact table point to them.", [T("dim_campaign", ["campaign_id", "name"], [[1, "Tết"], [2, "Hè"]], { cols: [0] }), T("dim_channel", ["channel_id", "name"], [[1, "GDN"], [2, "TikTok"]], { cols: [0] })]),
		S("Muốn đọc ra chữ thì nối ba bảng theo khóa.", "To read words, join the three tables on the keys.", [T("kết quả", [
			"form_id",
			"campaign",
			"channel",
			"forms"
		], [
			[
				1,
				"Tết",
				"GDN",
				24
			],
			[
				2,
				"Tết",
				"TikTok",
				12
			],
			[
				3,
				"Hè",
				"GDN",
				35
			]
		], { add: [
			0,
			1,
			2
		] })], "SELECT f.form_id, c.name, ch.name, f.forms\nFROM fact_form f\nJOIN dim_campaign c ON c.campaign_id = f.campaign_id\nJOIN dim_channel ch ON ch.channel_id = f.channel_id;")
	],
	"sql-key": [
		S("Khóa chính (id) nhận ra từng chiến dịch. Mỗi form có khóa ngoại campaign_id trỏ về đó.", "The primary key (id) identifies each campaign. Each form carries a foreign key campaign_id pointing to it.", [T("campaigns", ["id", "name"], [[1, "Tết"], [2, "Hè"]], { cols: [0] }), T("forms", ["id", "campaign_id"], [[1, 1], [2, 2]], { cols: [1] })]),
		S("Thêm form trỏ tới chiến dịch 9 không có thật thì cơ sở dữ liệu từ chối.", "A form pointing at campaign 9, which does not exist, is rejected by the database.", [T("forms", ["id", "campaign_id"], [
			[1, 1],
			[2, 2],
			[3, 9]
		], { bad: [2] })], "INSERT INTO forms VALUES (3, 9);  -- lỗi: không có campaigns.id = 9"),
		S("Trỏ tới chiến dịch 1 có thật thì được nhận.", "Pointing at the real campaign 1 is accepted.", [T("forms", ["id", "campaign_id"], [
			[1, 1],
			[2, 2],
			[3, 1]
		], { add: [2] })], "INSERT INTO forms VALUES (3, 1);")
	],
	"sql-ddl": [
		S("Bảng ads có hai cột. Đây là khung và các dòng dữ liệu.", "The ads table has two columns. That is the frame and the rows.", [T("ads", ["id", "spend"], [[1, 8], [2, 10]])]),
		S("DDL đổi khung: thêm một cột. Mọi dòng có sẵn ô trống ở cột mới.", "DDL changes the frame: it adds a column. Every row gets an empty cell there.", [T("ads", [
			"id",
			"spend",
			"note"
		], [[
			1,
			8,
			null
		], [
			2,
			10,
			null
		]], { addCols: [2] })], "ALTER TABLE ads ADD COLUMN note TEXT;"),
		S("DML sửa dòng: chỉ một ô đổi, khung vẫn vậy.", "DML edits rows: one cell changes, the frame stays.", [T("ads", [
			"id",
			"spend",
			"note"
		], [[
			1,
			12,
			null
		], [
			2,
			10,
			null
		]], { cells: [[0, 1]] })], "UPDATE ads SET spend = 12 WHERE id = 1;")
	],
	"sql-run": [
		S("Máy bắt đầu từ FROM: lấy cả bảng.", "The engine starts at FROM: it takes the whole table.", [ads()], "SELECT channel, SUM(spend) AS total\nFROM ads                 -- 1. chạy trước\nWHERE spend >= 6\nGROUP BY channel\nORDER BY total;"),
		S("WHERE lọc từng dòng, trước khi gộp. Dòng chi 4 bị loại.", "WHERE filters single rows, before grouping. The row with spend 4 is dropped.", [ads({ dim: [3] })], "WHERE spend >= 6         -- 2."),
		S("GROUP BY gom các dòng còn lại theo kênh.", "GROUP BY collects the remaining rows by channel.", [T("nhóm", ["channel", "spend của các dòng"], [["GDN", "8, 10, 12"], ["TikTok", "6, 7"]])], "GROUP BY channel         -- 3."),
		S("Lúc này SELECT mới chạy: tính tổng cho từng nhóm và đặt tên total.", "Only now does SELECT run: it computes the sum of each group and names it total.", [T("kết quả", ["channel", "total"], [["GDN", 30], ["TikTok", 13]], { addCols: [1] })], "SELECT channel, SUM(spend) AS total   -- 4."),
		S("ORDER BY chạy cuối nên dùng được tên total vừa đặt. Xếp tăng dần.", "ORDER BY runs last, so it can use the name total. Sorted ascending.", [T("kết quả", ["channel", "total"], [["TikTok", 13], ["GDN", 30]], { rows: [0, 1] })], "ORDER BY total           -- 5.")
	],
	"sql-having": [
		S("Bảng gốc, sáu dòng.", "The base table, six rows.", [ads()]),
		S("WHERE lọc dòng trước khi gộp: dòng chi 4 bị loại.", "WHERE filters rows before grouping: the row with spend 4 is dropped.", [ads({ dim: [3] })], "WHERE spend >= 6"),
		S("Sau khi gộp, mỗi kênh còn một dòng tổng.", "After grouping, each channel has one total row.", [T("nhóm", ["channel", "SUM(spend)"], [["GDN", 30], ["TikTok", 13]])], "GROUP BY channel"),
		S("HAVING lọc nhóm theo con số đã tính. TikTok có tổng 13 nên bị loại.", "HAVING filters groups by the computed number. TikTok totals 13 and is dropped.", [T("nhóm", ["channel", "SUM(spend)"], [["GDN", 30], ["TikTok", 13]], {
			dim: [1],
			rows: [0]
		})], "HAVING SUM(spend) > 20")
	],
	"sql-count": [
		S("Bốn người điền form. Hai người không để số điện thoại.", "Four people filled the form. Two left no phone number.", [T("leads", [
			"id",
			"name",
			"phone"
		], [
			[
				1,
				"An",
				"0901"
			],
			[
				2,
				"Bình",
				null
			],
			[
				3,
				"Chi",
				"0933"
			],
			[
				4,
				"Dũng",
				null
			]
		])]),
		S("COUNT(*) đếm dòng, nên ra 4.", "COUNT(*) counts rows, so it returns 4.", [T("leads", [
			"id",
			"name",
			"phone"
		], [
			[
				1,
				"An",
				"0901"
			],
			[
				2,
				"Bình",
				null
			],
			[
				3,
				"Chi",
				"0933"
			],
			[
				4,
				"Dũng",
				null
			]
		], { rows: [
			0,
			1,
			2,
			3
		] })], "SELECT COUNT(*) FROM leads;   -- 4"),
		S("COUNT(phone) chỉ đếm ô có giá trị, nên ra 2.", "COUNT(phone) counts only cells that have a value, so it returns 2.", [T("leads", [
			"id",
			"name",
			"phone"
		], [
			[
				1,
				"An",
				"0901"
			],
			[
				2,
				"Bình",
				null
			],
			[
				3,
				"Chi",
				"0933"
			],
			[
				4,
				"Dũng",
				null
			]
		], { cells: [[0, 2], [2, 2]] })], "SELECT COUNT(phone) FROM leads;   -- 2")
	],
	"sql-join": [S("Chiến dịch Tết có hai tuần chạy ở bảng weeks.", "The Tết campaign has two running weeks in the weeks table.", [T("campaigns", ["id", "name"], [[1, "Tết"], [2, "Hè"]], { cols: [0] }), T("weeks", ["campaign_id", "week"], [
		[1, "w1"],
		[1, "w2"],
		[2, "w1"]
	], { cols: [0] })]), S("Nối theo khóa không duy nhất: Tết khớp hai dòng nên xuất hiện hai lần. Hai dòng thành ba dòng.", "Joining on a key that is not unique: Tết matches two rows so it shows twice. Two rows become three.", [T("kết quả", [
		"id",
		"name",
		"week"
	], [
		[
			1,
			"Tết",
			"w1"
		],
		[
			1,
			"Tết",
			"w2"
		],
		[
			2,
			"Hè",
			"w1"
		]
	], { rows: [0, 1] })], "SELECT c.id, c.name, w.week\nFROM campaigns c JOIN weeks w ON w.campaign_id = c.id;")],
	"sql-left": [
		S("Ba chiến dịch, nhưng chỉ hai chiến dịch có form.", "Three campaigns, but only two have forms.", [T("campaigns", ["id", "name"], [
			[1, "Tết"],
			[2, "Hè"],
			[3, "Noel"]
		]), T("forms", ["campaign_id", "forms"], [[1, 40], [2, 25]])]),
		S("LEFT JOIN giữ cả ba chiến dịch. Noel không có form nên ô trống, là NULL.", "LEFT JOIN keeps all three campaigns. Noel has no forms, so its cell is empty, NULL.", [T("kết quả", ["name", "forms"], [
			["Tết", 40],
			["Hè", 25],
			["Noel", null]
		], { cells: [[2, 1]] })], "SELECT c.name, f.forms\nFROM campaigns c LEFT JOIN forms f ON f.campaign_id = c.id;"),
		S("NULL là «không có dữ liệu», không phải 0. Chỉ khi bạn quyết định mới đổi nó thành 0.", "NULL means no data, not 0. Only when you decide do you turn it into 0.", [T("kết quả", ["name", "forms"], [
			["Tết", 40],
			["Hè", 25],
			["Noel", 0]
		], { cells: [[2, 1]] })], "SELECT c.name, COALESCE(f.forms, 0) AS forms ...")
	],
	"sql-union": [
		S("Hai bảng cùng cột, đến từ hai nguồn. TikTok có mặt ở cả hai.", "Two tables with the same columns, from two sources. TikTok is in both.", [T("a", ["channel", "forms"], [["GDN", 24], ["TikTok", 12]]), T("b", ["channel", "forms"], [["TikTok", 12], ["Meta", 18]])]),
		S("UNION ALL xếp bảng này nối xuống dưới bảng kia, giữ cả dòng trùng.", "UNION ALL stacks one table under the other and keeps the duplicate.", [T("kết quả", ["channel", "forms"], [
			["GDN", 24],
			["TikTok", 12],
			["TikTok", 12],
			["Meta", 18]
		], { rows: [1, 2] })], "SELECT * FROM a UNION ALL SELECT * FROM b;"),
		S("UNION bỏ dòng trùng. Đây là xếp dọc, khác JOIN là ghép ngang thêm cột.", "UNION removes the duplicate. It stacks down, unlike JOIN which adds columns across.", [T("kết quả", ["channel", "forms"], [
			["GDN", 24],
			["TikTok", 12],
			["TikTok", 12],
			["Meta", 18]
		], { dim: [2] })], "SELECT * FROM a UNION SELECT * FROM b;")
	],
	"sql-win": [
		S("Bốn dòng, hai kênh.", "Four rows, two channels.", [T("ads", ["channel", "spend"], [
			["GDN", 8],
			["GDN", 10],
			["TikTok", 6],
			["TikTok", 4]
		])]),
		S("GROUP BY gộp mỗi kênh thành một dòng. Từng dòng gốc biến mất.", "GROUP BY folds each channel into one row. The original rows disappear.", [T("kết quả", ["channel", "total"], [["GDN", 18], ["TikTok", 10]])], "SELECT channel, SUM(spend) AS total FROM ads GROUP BY channel;"),
		S("Hàm cửa sổ thêm một cột tổng nhưng vẫn giữ cả bốn dòng.", "A window function adds a total column but keeps all four rows.", [T("kết quả", [
			"channel",
			"spend",
			"total"
		], [
			[
				"GDN",
				8,
				18
			],
			[
				"GDN",
				10,
				18
			],
			[
				"TikTok",
				6,
				10
			],
			[
				"TikTok",
				4,
				10
			]
		], { addCols: [2] })], "SELECT channel, spend,\n  SUM(spend) OVER (PARTITION BY channel) AS total\nFROM ads;")
	],
	"sql-rank": [
		S("Xếp hạng kênh theo form. Hai kênh hòa nhau ở 40.", "Rank channels by forms. Two channels tie at 40.", [T("kênh", ["channel", "forms"], [
			["GDN", 50],
			["Meta", 40],
			["TikTok", 40],
			["Zalo", 30]
		], { rows: [1, 2] })]),
		S("ROW_NUMBER không quan tâm hòa: luôn 1, 2, 3, 4.", "ROW_NUMBER ignores ties: always 1, 2, 3, 4.", [T("kênh", [
			"channel",
			"forms",
			"row_number"
		], [
			[
				"GDN",
				50,
				1
			],
			[
				"Meta",
				40,
				2
			],
			[
				"TikTok",
				40,
				3
			],
			[
				"Zalo",
				30,
				4
			]
		], { addCols: [2] })], "ROW_NUMBER() OVER (ORDER BY forms DESC)"),
		S("RANK cho hai kênh hòa cùng hạng 2 rồi nhảy số: kênh sau là hạng 4.", "RANK gives the tied channels the same rank 2, then skips: the next is 4.", [T("kênh", [
			"channel",
			"forms",
			"rank"
		], [
			[
				"GDN",
				50,
				1
			],
			[
				"Meta",
				40,
				2
			],
			[
				"TikTok",
				40,
				2
			],
			[
				"Zalo",
				30,
				4
			]
		], {
			addCols: [2],
			cells: [[3, 2]]
		})], "RANK() OVER (ORDER BY forms DESC)"),
		S("DENSE_RANK cũng hòa ở hạng 2 nhưng không nhảy số: kênh sau là hạng 3.", "DENSE_RANK also ties at 2 but does not skip: the next is 3.", [T("kênh", [
			"channel",
			"forms",
			"dense_rank"
		], [
			[
				"GDN",
				50,
				1
			],
			[
				"Meta",
				40,
				2
			],
			[
				"TikTok",
				40,
				2
			],
			[
				"Zalo",
				30,
				3
			]
		], {
			addCols: [2],
			cells: [[3, 2]]
		})], "DENSE_RANK() OVER (ORDER BY forms DESC)")
	],
	"sql-part": [
		S("Hai kênh, hai tuần mỗi kênh.", "Two channels, two weeks each.", [T("ads", [
			"channel",
			"week",
			"forms"
		], [
			[
				"GDN",
				1,
				24
			],
			[
				"GDN",
				2,
				35
			],
			[
				"TikTok",
				1,
				12
			],
			[
				"TikTok",
				2,
				9
			]
		])]),
		S("Xếp hạng chung cả bảng: TikTok bị đẩy xuống hạng 3 và 4.", "Ranking the whole table: TikTok is pushed down to 3 and 4.", [T("ads", [
			"channel",
			"week",
			"forms",
			"rank"
		], [
			[
				"GDN",
				1,
				24,
				2
			],
			[
				"GDN",
				2,
				35,
				1
			],
			[
				"TikTok",
				1,
				12,
				3
			],
			[
				"TikTok",
				2,
				9,
				4
			]
		], { addCols: [3] })], "RANK() OVER (ORDER BY forms DESC)"),
		S("PARTITION BY chia theo kênh. Mỗi kênh tự đếm hạng, bắt đầu từ 1.", "PARTITION BY splits by channel. Each channel counts its own rank, starting from 1.", [T("ads", [
			"channel",
			"week",
			"forms",
			"rank"
		], [
			[
				"GDN",
				1,
				24,
				2
			],
			[
				"GDN",
				2,
				35,
				1
			],
			[
				"TikTok",
				1,
				12,
				1
			],
			[
				"TikTok",
				2,
				9,
				2
			]
		], {
			addCols: [3],
			cells: [[2, 3]]
		})], "RANK() OVER (PARTITION BY channel ORDER BY forms DESC)")
	],
	"sql-frame": [
		S("Thiếu tuần 3: chỉ có tuần 1, 2, 4, 5. Muốn trung bình của «ba dòng gần nhất».", "Week 3 is missing: only weeks 1, 2, 4, 5. We want the average of the last three rows.", [T("weeks", ["week", "spend"], [
			[1, 10],
			[2, 20],
			[4, 40],
			[5, 50]
		])], "AVG(spend) OVER (ORDER BY week\n  ROWS BETWEEN 2 PRECEDING AND CURRENT ROW)"),
		S("Ở tuần 4, khung lấy ba dòng: tuần 1, 2 và 4. Nó trải qua bốn tuần lịch, vì tuần 3 không có dòng.", "At week 4 the frame takes three rows: weeks 1, 2 and 4. It spans four calendar weeks, because week 3 has no row.", [T("weeks", [
			"week",
			"spend",
			"avg3"
		], [
			[
				1,
				10,
				10
			],
			[
				2,
				20,
				15
			],
			[
				4,
				40,
				23.3
			],
			[
				5,
				50,
				"…"
			]
		], {
			rows: [
				0,
				1,
				2
			],
			cells: [[2, 2]]
		})]),
		S("Ở tuần 5, khung là tuần 2, 4, 5. Khung đếm dòng, không đếm ngày.", "At week 5 the frame is weeks 2, 4, 5. The frame counts rows, not days.", [T("weeks", [
			"week",
			"spend",
			"avg3"
		], [
			[
				1,
				10,
				10
			],
			[
				2,
				20,
				15
			],
			[
				4,
				40,
				23.3
			],
			[
				5,
				50,
				36.7
			]
		], {
			rows: [
				1,
				2,
				3
			],
			cells: [[3, 2]]
		})])
	],
	"sql-lag": [
		S("Ba ngày có số liệu: ngày 1, 2 và 4. Ngày 3 thiếu.", "Three days with data: days 1, 2 and 4. Day 3 is missing.", [T("daily", ["day", "forms"], [
			[1, 10],
			[2, 14],
			[4, 9]
		])]),
		S("LAG lấy giá trị của dòng ngay trước. Dòng đầu chưa có dòng trước nên là NULL.", "LAG takes the value from the row right before. The first row has none, so NULL.", [T("daily", [
			"day",
			"forms",
			"prev"
		], [
			[
				1,
				10,
				null
			],
			[
				2,
				14,
				10
			],
			[
				4,
				9,
				14
			]
		], { addCols: [2] })], "LAG(forms) OVER (ORDER BY day) AS prev"),
		S("Ở ngày 4, «dòng trước» là ngày 2, không phải hôm qua. Thiếu ngày thì LAG vẫn nhảy qua.", "On day 4 the previous row is day 2, not yesterday. With a missing day, LAG still jumps across.", [T("daily", [
			"day",
			"forms",
			"prev"
		], [
			[
				1,
				10,
				null
			],
			[
				2,
				14,
				10
			],
			[
				4,
				9,
				14
			]
		], {
			cells: [[2, 2]],
			rows: [1]
		})])
	],
	"sql-case": [
		S("Bảng gốc chỉ có kênh và chi tiêu.", "The base table has only channel and spend.", [T("ads", ["channel", "spend"], [
			["GDN", 12],
			["Meta", 8],
			["TikTok", 4]
		])]),
		S("CASE tạo một cột mới ngay trong kết quả, theo từng bậc.", "CASE builds a new column right in the result, tier by tier.", [T("kết quả", [
			"channel",
			"spend",
			"tier"
		], [
			[
				"GDN",
				12,
				"cao"
			],
			[
				"Meta",
				8,
				"vừa"
			],
			[
				"TikTok",
				4,
				"thấp"
			]
		], { addCols: [2] })], "SELECT channel, spend,\n  CASE WHEN spend >= 10 THEN 'cao'\n       WHEN spend >= 6  THEN 'vừa'\n       ELSE 'thấp' END AS tier\nFROM ads;"),
		S("Bảng gốc vẫn không có cột tier. Bậc chỉ sống trong câu truy vấn.", "The base table still has no tier column. The tier lives only in the query.", [T("ads", ["channel", "spend"], [
			["GDN", 12],
			["Meta", 8],
			["TikTok", 4]
		])], "SELECT * FROM ads;")
	],
	"sql-cte": [
		S("Bảng gốc ads.", "The base table ads.", [T("ads", [
			"id",
			"channel",
			"spend"
		], [
			[
				1,
				"GDN",
				8
			],
			[
				2,
				"TikTok",
				6
			],
			[
				3,
				"Meta",
				12
			]
		])]),
		S("Đặt tên cho một câu con: big là các dòng chi từ 8 trở lên. Nó chỉ là tên cho câu truy vấn.", "Name a sub-query: big is the rows with spend of 8 or more. It is just a name for a query.", [T("big", [
			"id",
			"channel",
			"spend"
		], [[
			1,
			"GDN",
			8
		], [
			3,
			"Meta",
			12
		]], { rows: [0, 1] })], "CREATE VIEW big AS\n  SELECT * FROM ads WHERE spend >= 8;"),
		S("Sửa bảng gốc: TikTok từ 6 lên 9.", "Edit the base table: TikTok goes from 6 to 9.", [T("ads", [
			"id",
			"channel",
			"spend"
		], [
			[
				1,
				"GDN",
				8
			],
			[
				2,
				"TikTok",
				9
			],
			[
				3,
				"Meta",
				12
			]
		], { cells: [[1, 2]] })], "UPDATE ads SET spend = 9 WHERE id = 2;"),
		S("Hỏi lại big: TikTok tự có mặt. View không phải bản sao, nó chạy lại câu truy vấn mỗi lần.", "Ask big again: TikTok appears by itself. A view is not a copy, it reruns its query every time.", [T("big", [
			"id",
			"channel",
			"spend"
		], [
			[
				1,
				"GDN",
				8
			],
			[
				2,
				"TikTok",
				9
			],
			[
				3,
				"Meta",
				12
			]
		], { add: [1] })], "SELECT * FROM big;")
	],
	"sql-idx": [
		S("Tìm kênh Meta trong bảng sáu dòng, không có chỉ mục: máy đọc từng dòng từ đầu.", "Finding Meta in a six-row table with no index: the engine reads every row from the top.", [T("ads", ["id", "channel"], [
			[1, "GDN"],
			[2, "Meta"],
			[3, "TikTok"],
			[4, "GDN"],
			[5, "Meta"],
			[6, "TikTok"]
		], { rows: [
			0,
			1,
			2,
			3,
			4,
			5
		] })], "SELECT * FROM ads WHERE channel = 'Meta';"),
		S("Chỉ mục như mục lục: kênh nào nằm ở dòng nào. Máy tra mục lục rồi nhảy thẳng tới dòng 2 và 5.", "An index is like a table of contents: which channel sits on which rows. The engine looks it up and jumps straight to rows 2 and 5.", [T("index trên channel", ["channel", "dòng"], [
			["GDN", "1, 4"],
			["Meta", "2, 5"],
			["TikTok", "3, 6"]
		], { rows: [1] }), T("ads", ["id", "channel"], [
			[1, "GDN"],
			[2, "Meta"],
			[3, "TikTok"],
			[4, "GDN"],
			[5, "Meta"],
			[6, "TikTok"]
		], { rows: [1, 4] })]),
		S("Kết quả y hệt, chỉ nhanh hơn. Chỉ mục đổi tốc độ, không đổi câu trả lời.", "The result is identical, only faster. An index changes speed, not the answer.", [T("kết quả", ["id", "channel"], [[2, "Meta"], [5, "Meta"]])])
	],
	"sql-like": [
		S("Bốn tên chiến dịch. Ký tự % thay cho «bất kỳ chuỗi nào».", "Four campaign names. The % sign stands for any string.", [T("campaigns", ["name"], [
			["Tet Sale"],
			["Tet 2026"],
			["Mid-Tet"],
			["Back Tet"]
		])]),
		S("'Tet%' khớp những tên bắt đầu bằng Tet.", "'Tet%' matches names that start with Tet.", [T("campaigns", ["name"], [
			["Tet Sale"],
			["Tet 2026"],
			["Mid-Tet"],
			["Back Tet"]
		], { rows: [0, 1] })], "WHERE name LIKE 'Tet%'"),
		S("'%Tet' khớp những tên kết thúc bằng Tet.", "'%Tet' matches names that end with Tet.", [T("campaigns", ["name"], [
			["Tet Sale"],
			["Tet 2026"],
			["Mid-Tet"],
			["Back Tet"]
		], { rows: [2, 3] })], "WHERE name LIKE '%Tet'"),
		S("'%Tet%' khớp tên có Tet ở bất kỳ đâu. LIKE chỉ có % và _. Luật phức tạp hơn là việc của regex.", "'%Tet%' matches Tet anywhere. LIKE has only % and _. Richer rules are regex's job.", [T("campaigns", ["name"], [
			["Tet Sale"],
			["Tet 2026"],
			["Mid-Tet"],
			["Back Tet"]
		], { rows: [
			0,
			1,
			2,
			3
		] })], "WHERE name LIKE '%Tet%'")
	],
	"sql-date": [
		S("Ba ngày được lưu thành chữ, không phải kiểu ngày.", "Three dates stored as text, not as a date type.", [T("log", ["d"], [
			["5/1/2026"],
			["10/1/2026"],
			["9/1/2026"]
		])]),
		S("Xếp theo chữ: «10/1» đứng trước «5/1» vì ký tự «1» nhỏ hơn «5». Thứ tự sai.", "Sorting as text: \"10/1\" comes before \"5/1\" because the character \"1\" is smaller than \"5\". The order is wrong.", [T("log", ["d"], [
			["10/1/2026"],
			["5/1/2026"],
			["9/1/2026"]
		], { bad: [
			0,
			1,
			2
		] })], "SELECT d FROM log ORDER BY d;"),
		S("Đổi sang kiểu ngày trước khi xếp: ngày 5, 9, rồi 10. Đúng thứ tự thời gian.", "Convert to a date type before sorting: 5, 9, 10. The true time order.", [T("log", ["d"], [
			["5/1/2026"],
			["9/1/2026"],
			["10/1/2026"]
		], { add: [
			0,
			1,
			2
		] })], "SELECT d FROM log ORDER BY TO_DATE(d, 'DD/MM/YYYY');")
	],
	"sql-nest": [
		S("Muốn các kênh đã có form. Kênh 2 chưa có form nào.", "We want channels that have forms. Channel 2 has none.", [T("channels", ["id", "name"], [
			[1, "GDN"],
			[2, "TikTok"],
			[3, "Meta"]
		]), T("forms", ["channel_id"], [
			[1],
			[1],
			[3]
		])]),
		S("Cách 1, câu con: hỏi «id nào có trong forms».", "Way 1, a subquery: ask which ids appear in forms.", [T("kết quả", ["id", "name"], [[1, "GDN"], [3, "Meta"]], { add: [0, 1] })], "SELECT * FROM channels\nWHERE id IN (SELECT channel_id FROM forms);"),
		S("Cách 2, phép nối: ra đúng kết quả đó. Câu lồng không cao cấp hơn. Chọn cách dễ đọc.", "Way 2, a join: the very same result. A nested query is not fancier. Pick the one that reads better.", [T("kết quả", ["id", "name"], [[1, "GDN"], [3, "Meta"]], { add: [0, 1] })], "SELECT DISTINCT c.*\nFROM channels c JOIN forms f ON f.channel_id = c.id;")
	],
	"sql-nwin": [
		S("Muốn cộng dồn form theo từng kênh qua các tuần.", "We want a running total of forms per channel across weeks.", [T("ads", [
			"channel",
			"week",
			"forms"
		], [
			[
				"GDN",
				1,
				24
			],
			[
				"GDN",
				2,
				35
			],
			[
				"TikTok",
				1,
				12
			],
			[
				"TikTok",
				2,
				9
			]
		])]),
		S("Viết cửa sổ dài ngay trong hàm.", "Spell the window out inside the function.", [T("kết quả", [
			"channel",
			"week",
			"forms",
			"run"
		], [
			[
				"GDN",
				1,
				24,
				24
			],
			[
				"GDN",
				2,
				35,
				59
			],
			[
				"TikTok",
				1,
				12,
				12
			],
			[
				"TikTok",
				2,
				9,
				21
			]
		], { addCols: [3] })], "SUM(forms) OVER (PARTITION BY channel ORDER BY week) AS run"),
		S("Đặt tên cửa sổ là w rồi gọi w. Kết quả y hệt. Tên chỉ để viết ngắn và dùng lại.", "Name the window w and call w. The result is identical. A name only shortens and reuses.", [T("kết quả", [
			"channel",
			"week",
			"forms",
			"run"
		], [
			[
				"GDN",
				1,
				24,
				24
			],
			[
				"GDN",
				2,
				35,
				59
			],
			[
				"TikTok",
				1,
				12,
				12
			],
			[
				"TikTok",
				2,
				9,
				21
			]
		], { addCols: [3] })], "SUM(forms) OVER w AS run\n...\nWINDOW w AS (PARTITION BY channel ORDER BY week)")
	],
	"sql-proc": [
		S("Bảng ads đang có ba tuần, bảng archive còn trống.", "The ads table holds three weeks, the archive table is empty.", [T("ads", [
			"id",
			"week",
			"spend"
		], [
			[
				1,
				"w1",
				8
			],
			[
				2,
				"w2",
				10
			],
			[
				3,
				"w3",
				12
			]
		]), T("archive", [
			"id",
			"week",
			"spend"
		], [])]),
		S("Gọi thủ tục một lần: nó chép tuần 1 sang archive rồi xóa khỏi ads. Hai việc trong một lệnh.", "Call the procedure once: it copies week 1 to archive then deletes it from ads. Two jobs in one command.", [T("ads", [
			"id",
			"week",
			"spend"
		], [
			[
				1,
				"w1",
				8
			],
			[
				2,
				"w2",
				10
			],
			[
				3,
				"w3",
				12
			]
		], { dim: [0] }), T("archive", [
			"id",
			"week",
			"spend"
		], [[
			1,
			"w1",
			8
		]], { add: [0] })], "CALL archive_week('w1');"),
		S("Kết quả: một kịch bản đã lưu đã sửa hai bảng, và có thể gọi lại bất cứ lúc nào.", "Result: one saved script edited two tables, and you can call it again any time.", [T("ads", [
			"id",
			"week",
			"spend"
		], [[
			2,
			"w2",
			10
		], [
			3,
			"w3",
			12
		]]), T("archive", [
			"id",
			"week",
			"spend"
		], [[
			1,
			"w1",
			8
		]])])
	],
	"sql-cur": [
		S("Ba form cần chuyển từ new sang done.", "Three forms need to go from new to done.", [T("forms", ["id", "status"], [
			[1, "new"],
			[2, "new"],
			[3, "new"]
		])]),
		S("Con trỏ đi từng dòng một: dòng 1 xong, rồi mới tới dòng 2 và 3. Ba vòng lặp.", "A cursor goes one row at a time: row 1 is done, then row 2 and 3. Three loop turns.", [T("forms", ["id", "status"], [
			[1, "done"],
			[2, "new"],
			[3, "new"]
		], { rows: [0] })], "FETCH NEXT FROM cur;  -- vòng 1\nUPDATE forms SET status = 'done' WHERE id = 1;"),
		S("Vòng 2 và vòng 3 cũng như vậy, từng dòng một.", "Turns 2 and 3 do the same, one row each.", [T("forms", ["id", "status"], [
			[1, "done"],
			[2, "done"],
			[3, "done"]
		], { rows: [1, 2] })], "-- vòng 2, vòng 3"),
		S("Một câu UPDATE xử lý cả ba dòng cùng lúc, gọn hơn và thường nhanh hơn nhiều.", "One UPDATE handles all three rows at once, shorter and usually much faster.", [T("forms", ["id", "status"], [
			[1, "done"],
			[2, "done"],
			[3, "done"]
		], { rows: [
			0,
			1,
			2
		] })], "UPDATE forms SET status = 'done' WHERE status = 'new';")
	]
};
var vizDemos = {
	"tb-join": [
		S("Bảng chiến dịch có ngân sách mỗi chiến dịch. Bảng weeks có từng tuần chạy.", "The campaigns table has one budget per campaign. The weeks table has each running week.", [T("campaigns", [
			"id",
			"name",
			"budget"
		], [[
			1,
			"Tết",
			100
		], [
			2,
			"Hè",
			100
		]]), T("weeks", ["campaign_id", "week"], [
			[1, "w1"],
			[1, "w2"],
			[2, "w1"]
		])]),
		S("Nối hai bảng: Tết có hai tuần nên dòng Tết nhân đôi, và ngân sách 100 lặp hai lần.", "Join the tables: Tết has two weeks so its row doubles, and its budget 100 appears twice.", [T("sau khi nối", [
			"name",
			"budget",
			"week"
		], [
			[
				"Tết",
				100,
				"w1"
			],
			[
				"Tết",
				100,
				"w2"
			],
			[
				"Hè",
				100,
				"w1"
			]
		], { rows: [0, 1] })]),
		S("Kéo SUM(budget) lên biểu đồ ra 300, trong khi tổng thật là 200. Phép nối đã nhân dòng trước khi vẽ.", "Drag SUM(budget) onto a chart and you get 300, while the truth is 200. The join multiplied rows before the drawing.", [T("biểu đồ", ["", "tổng budget"], [["đúng (trước khi nối)", 200], ["sau khi nối", 300]], { bad: [1] })])
	],
	"tb-calc": [
		S("Dữ liệu gốc có chi tiêu và form theo kênh.", "The source data has spend and forms by channel.", [T("ads", [
			"channel",
			"spend",
			"forms"
		], [[
			"GDN",
			30,
			89
		], [
			"TikTok",
			17,
			41
		]])]),
		S("Trường tính toán CPL là một công thức: tổng chi chia tổng form. Tableau chạy nó mỗi lần vẽ.", "The calculated field CPL is a formula: total spend divided by total forms. Tableau runs it each time it draws.", [T("trong biểu đồ", ["channel", "CPL"], [["GDN", .337], ["TikTok", .415]], { addCols: [1] })], "CPL = SUM([spend]) / SUM([forms])"),
		S("Bảng dữ liệu gốc vẫn không có cột CPL. Công thức không tạo dữ liệu mới.", "The source table still has no CPL column. A formula creates no new data.", [T("ads", [
			"channel",
			"spend",
			"forms"
		], [[
			"GDN",
			30,
			89
		], [
			"TikTok",
			17,
			41
		]])])
	],
	"pb-model": [S("Mô hình là các bảng và đường nối giữa chúng. Bảng chiến dịch (mô tả) nối với bảng form (sự kiện) qua campaign_id.", "A model is tables and the lines between them. The campaign table (description) joins the form table (events) through campaign_id.", [T("campaign", ["campaign_id", "name"], [[1, "Tết"], [2, "Hè"]], { cols: [0] }), T("forms", ["form_id", "campaign_id"], [
		[1, 1],
		[2, 1],
		[3, 2]
	], { cols: [1] })]), S("Chọn «Tết» ở bảng chiến dịch: bộ lọc chảy qua đường nối, chỉ còn các form của Tết.", "Pick Tết in the campaign table: the filter flows along the line, leaving only Tết's forms.", [T("campaign", ["campaign_id", "name"], [[1, "Tết"], [2, "Hè"]], {
		rows: [0],
		dim: [1]
	}), T("forms", ["form_id", "campaign_id"], [
		[1, 1],
		[2, 1],
		[3, 2]
	], {
		rows: [0, 1],
		dim: [2]
	})])],
	"pb-pq": [
		S("Power Query là một danh sách bước. Mỗi bước là một công thức, chạy lần lượt trên dữ liệu thô.", "Power Query is a list of steps. Each step is a formula, run in order on the raw data.", [T("applied steps", ["#", "bước"], [
			[1, "Source: đọc file"],
			[2, "Filter: bỏ dòng trống"],
			[3, "Change type: spend thành số"]
		])]),
		S("Dữ liệu thô có một dòng trống và spend là chữ. Sau ba bước còn dữ liệu sạch.", "Raw data has a blank row and spend as text. After three steps it is clean.", [T("thô", ["channel", "spend"], [
			["GDN", "8"],
			[null, null],
			["Meta", "12"]
		], { bad: [1] }), T("sau 3 bước", ["channel", "spend"], [["GDN", 8], ["Meta", 12]], { add: [0, 1] })]),
		S("Làm mới (refresh) là chạy lại cả ba công thức trên dữ liệu mới. Dòng TikTok mới tự đi qua các bước.", "Refresh runs all three formulas again on the new data. The new TikTok row passes through the steps by itself.", [T("sau khi refresh", ["channel", "spend"], [
			["GDN", 8],
			["Meta", 12],
			["TikTok", 6]
		], { add: [2] })])
	],
	"pb-grain": [
		S("Mỗi dòng của bảng này là một dòng hàng trong đơn, không phải một đơn. Đó là grain (độ mịn).", "Each row of this table is one order line, not one order. That is the grain.", [T("order_lines", ["order_id", "item"], [
			[1, "A"],
			[1, "B"],
			[2, "A"]
		])]),
		S("Đếm dòng ra 3. Đây là số dòng hàng, không phải số đơn.", "Counting rows gives 3. That is the number of lines, not of orders.", [T("order_lines", ["order_id", "item"], [
			[1, "A"],
			[1, "B"],
			[2, "A"]
		], { rows: [
			0,
			1,
			2
		] })], "COUNTROWS(order_lines)   → 3"),
		S("Muốn số đơn thì đếm mã đơn khác nhau: ra 2.", "For the number of orders, count distinct order ids: 2.", [T("order_lines", ["order_id", "item"], [
			[1, "A"],
			[1, "B"],
			[2, "A"]
		], { cols: [0] })], "DISTINCTCOUNT(order_lines[order_id])   → 2")
	],
	"pb-dax": [
		S("Bảng ads. Cột tính (calculated column) lưu một giá trị cho mỗi dòng, tính một lần lúc làm mới.", "The ads table. A calculated column stores one value per row, computed once at refresh.", [T("ads", [
			"channel",
			"spend",
			"forms",
			"cpl"
		], [
			[
				"GDN",
				8,
				24,
				.333
			],
			[
				"GDN",
				10,
				35,
				.286
			],
			[
				"TikTok",
				6,
				12,
				.5
			]
		], { addCols: [3] })], "cpl = [spend] / [forms]"),
		S("Measure không lưu gì. Nó tính lại mỗi lần bộ lọc đổi. Không lọc: tổng chi chia tổng form.", "A measure stores nothing. It recomputes each time the filter changes. No filter: total spend over total forms.", [T("measure CPL", ["bộ lọc", "CPL"], [["không lọc", .362]], { cells: [[0, 1]] })], "CPL = DIVIDE(SUM(ads[spend]), SUM(ads[forms]))"),
		S("Lọc kênh nào thì measure tính lại trên các dòng của kênh đó. Trung bình các cột cpl sẽ không cho đúng con số này.", "Filter a channel and the measure recomputes over that channel's rows. Averaging the cpl column would not give these numbers.", [T("measure CPL", ["bộ lọc", "CPL"], [
			["không lọc", .362],
			["channel = GDN", .337],
			["channel = TikTok", .415]
		], { rows: [1, 2] })])
	],
	"pb-rls": [
		S("Bảng form, mỗi dòng có người phụ trách.", "A form table, each row with an owner.", [T("forms", [
			"form_id",
			"owner",
			"forms"
		], [
			[
				1,
				"An",
				24
			],
			[
				2,
				"Bình",
				12
			],
			[
				3,
				"An",
				35
			],
			[
				4,
				"Bình",
				9
			]
		])]),
		S("Luật RLS (row-level security) áp lên người xem. Khi Bình mở báo cáo, dòng của An bị ẩn đi hoàn toàn.", "An RLS (row-level security) rule is applied to the viewer. When Bình opens the report, An's rows are hidden entirely.", [T("Bình nhìn thấy", [
			"form_id",
			"owner",
			"forms"
		], [
			[
				1,
				"An",
				24
			],
			[
				2,
				"Bình",
				12
			],
			[
				3,
				"An",
				35
			],
			[
				4,
				"Bình",
				9
			]
		], {
			dim: [0, 2],
			rows: [1, 3]
		})], "[owner] = USERNAME()"),
		S("Slicer thì khác: người xem tự bấm và có thể bỏ chọn. RLS không cho người xem tự gỡ.", "A slicer is different: the viewer clicks and can clear it. RLS cannot be removed by the viewer.", [T("so sánh", [
			"",
			"ai quyết định",
			"bỏ được?"
		], [[
			"slicer",
			"người xem",
			"được"
		], [
			"RLS",
			"người quản trị",
			"không"
		]], { rows: [1] })])
	],
	"pb-refresh": [
		S("Nguồn có ba dòng. Báo cáo tính tổng form: 71.", "The source has three rows. The report totals the forms: 71.", [T("nguồn", ["form_id", "forms"], [
			[1, 24],
			[2, 12],
			[3, 35]
		]), T("báo cáo", ["", "tổng form"], [["measure", 71]])]),
		S("Nguồn có thêm một dòng mới. Báo cáo chưa làm mới nên vẫn hiện 71.", "A new row lands in the source. The report has not refreshed, so it still shows 71.", [T("nguồn", ["form_id", "forms"], [
			[1, 24],
			[2, 12],
			[3, 35],
			[4, 9]
		], { add: [3] }), T("báo cáo", ["", "tổng form"], [["measure", 71]], { bad: [0] })]),
		S("Làm mới (refresh) kéo dòng mới về và chạy lại công thức: 80. Measure không giữ số cũ.", "Refresh pulls the new row and reruns the formula: 80. A measure does not keep the old number.", [T("nguồn", ["form_id", "forms"], [
			[1, 24],
			[2, 12],
			[3, 35],
			[4, 9]
		]), T("báo cáo", ["", "tổng form"], [["measure", 80]], { cells: [[0, 1]] })])
	]
};
var xlDemos = {
	"xl-cell": [S("Một ô giữ ba loại thứ: số, chữ hoặc công thức. Bảng này cho thấy bạn gõ gì và ô hiện gì.", "A cell holds one of three things: a number, text or a formula. This shows what you type and what the cell shows.", [T("sheet", [
		"ô",
		"bạn gõ",
		"ô hiện",
		"loại"
	], [
		[
			"A1",
			"12",
			"12",
			"số"
		],
		[
			"A2",
			"'12",
			"12",
			"chữ trông giống số"
		],
		[
			"A3",
			"=A1*2",
			"24",
			"công thức"
		]
	])]), S("SUM bỏ qua ô chữ. Tổng A1:A2 chỉ là 12, không phải 24.", "SUM skips text cells. The total of A1:A2 is just 12, not 24.", [T("sheet", [
		"ô",
		"bạn gõ",
		"ô hiện",
		"loại"
	], [
		[
			"A1",
			"12",
			"12",
			"số"
		],
		[
			"A2",
			"'12",
			"12",
			"chữ trông giống số"
		],
		[
			"A3",
			"=A1*2",
			"24",
			"công thức"
		]
	], {
		rows: [0],
		dim: [1]
	})], "=SUM(A1:A2)   → 12")],
	"xl-lock": [S("Công thức =B2*$E$1 nhân chi tiêu với tỷ lệ ở E1. Dấu $ khóa địa chỉ E1.", "The formula =B2*$E$1 multiplies spend by the rate in E1. The $ signs lock E1.", [T("kéo xuống bốn dòng", ["dòng", "công thức"], [
		[2, "=B2*$E$1"],
		[3, "=B3*$E$1"],
		[4, "=B4*$E$1"]
	], { cols: [1] })], "=B2*$E$1"), S("Không có $, địa chỉ trượt theo khi kéo: E1 thành E2, E3. Các ô đó trống nên ra 0.", "Without $, the address slides as you drag: E1 becomes E2, E3. Those cells are empty so you get 0.", [T("kéo xuống bốn dòng", ["dòng", "công thức"], [
		[2, "=B2*E1"],
		[3, "=B3*E2"],
		[4, "=B4*E3"]
	], { bad: [1, 2] })], "=B2*E1")],
	"xl-if": [
		S("IF chọn một nhánh: chi từ 10 trở lên là «cao», còn lại là «thấp».", "IF picks one branch: spend of 10 or more is cao, otherwise thấp.", [T("tuần", [
			"tuần",
			"chi",
			"tier"
		], [
			[
				"w1",
				12,
				"cao"
			],
			[
				"w2",
				8,
				"thấp"
			],
			[
				"w3",
				"(trống)",
				"thấp"
			]
		], { addCols: [2] })], "=IF(B2>=10, \"cao\", \"thấp\")"),
		S("Tuần 3 chưa nhập số. Ô trống bị coi như 0 nên rơi vào «thấp», trông như tuần chi ít.", "Week 3 has no number yet. A blank is treated as 0, so it lands in thấp, looking like a low-spend week.", [T("tuần", [
			"tuần",
			"chi",
			"tier"
		], [
			[
				"w1",
				12,
				"cao"
			],
			[
				"w2",
				8,
				"thấp"
			],
			[
				"w3",
				"(trống)",
				"thấp"
			]
		], { cells: [[2, 2]] })]),
		S("Muốn tách trường hợp chưa có số thì kiểm tra ô trống trước.", "To separate the not-entered case, test for blank first.", [T("tuần", [
			"tuần",
			"chi",
			"tier"
		], [
			[
				"w1",
				12,
				"cao"
			],
			[
				"w2",
				8,
				"thấp"
			],
			[
				"w3",
				"(trống)",
				"chưa có"
			]
		], { cells: [[2, 2]] })], "=IF(ISBLANK(B4), \"chưa có\", IF(B4>=10, \"cao\", \"thấp\"))")
	],
	"xl-keep": [
		S("Bảng có năm dòng.", "A table with five rows.", [T("ads", ["kênh", "chi"], [
			["GDN", 12],
			["Meta", 8],
			["TikTok", 4],
			["Zalo", 3],
			["Bing", 9]
		])]),
		S("Lọc chi ≥ 8: dòng khác bị giấu đi, không bị xóa.", "Filter spend ≥ 8: the other rows are hidden, not deleted.", [T("ads", ["kênh", "chi"], [
			["GDN", 12],
			["Meta", 8],
			["TikTok", 4],
			["Zalo", 3],
			["Bing", 9]
		], { dim: [2, 3] })]),
		S("Bỏ bộ lọc thì mọi dòng quay lại như cũ.", "Clear the filter and every row comes back.", [T("ads", ["kênh", "chi"], [
			["GDN", 12],
			["Meta", 8],
			["TikTok", 4],
			["Zalo", 3],
			["Bing", 9]
		])]),
		S("Xóa dòng mới làm mất dữ liệu thật. Lúc này không còn đường quay lại ngoài hoàn tác.", "Deleting is what really loses data. Only undo gets it back.", [T("ads", ["kênh", "chi"], [
			["GDN", 12],
			["Meta", 8],
			["Bing", 9]
		])])
	],
	"xl-chart": [S("Muốn so các nhóm với nhau (kênh này với kênh kia): dùng biểu đồ cột. Mỗi nhóm một cột.", "To compare groups (one channel with another): use a bar chart. One bar per group.", [T("so nhóm → biểu đồ cột", ["kênh", "form"], [
		["GDN", 90],
		["Meta", 55],
		["TikTok", 41]
	], { cols: [1] })]), S("Muốn xem một thứ đổi theo thời gian: dùng biểu đồ đường. Thứ tự tuần là có thật nên nối các điểm được.", "To see one thing change over time: use a line chart. Week order is real, so joining the points makes sense.", [T("theo thời gian → biểu đồ đường", ["tuần", "form"], [
		["w1", 41],
		["w2", 55],
		["w3", 90]
	], { cols: [1] })])],
	"xl-pivot": [
		S("Sáu dòng gốc: mỗi dòng là một kênh trong một tuần.", "Six raw rows: each is one channel in one week.", [T("ads", [
			"week",
			"channel",
			"spend"
		], [
			[
				1,
				"GDN",
				8
			],
			[
				1,
				"TikTok",
				6
			],
			[
				2,
				"GDN",
				10
			],
			[
				2,
				"TikTok",
				4
			],
			[
				3,
				"GDN",
				12
			],
			[
				3,
				"TikTok",
				7
			]
		])]),
		S("PivotTable nhóm các dòng theo kênh và cộng chi tiêu. Sáu dòng thành hai dòng.", "A PivotTable groups rows by channel and sums spend. Six rows become two.", [T("pivot: hàng = channel, giá trị = tổng spend", ["channel", "tổng spend"], [["GDN", 30], ["TikTok", 17]], { addCols: [1] })]),
		S("Đưa tuần lên cột thì ra bảng chéo. Tổng vẫn là 47, như ở bảng gốc. Pivot chỉ sắp lại, không tạo thêm số.", "Move week to columns for a cross-table. The total is still 47, as in the raw table. A pivot only rearranges, it creates no new numbers.", [T("pivot: hàng = channel, cột = week", [
			"channel",
			"w1",
			"w2",
			"w3",
			"tổng"
		], [
			[
				"GDN",
				8,
				10,
				12,
				30
			],
			[
				"TikTok",
				6,
				4,
				7,
				17
			],
			[
				"tổng",
				14,
				14,
				19,
				47
			]
		], { rows: [2] })])
	],
	"xl-look": [
		S("Bảng tra: cột đầu là tên kênh, bên phải là mã và giá mỗi form.", "A lookup table: the first column is the channel name, to the right are the code and cost per form.", [T("kênh", [
			"name",
			"id",
			"cpl"
		], [
			[
				"GDN",
				1,
				40
			],
			[
				"Meta",
				2,
				55
			],
			[
				"TikTok",
				3,
				32
			]
		], { cols: [0] })]),
		S("VLOOKUP tìm «Meta» ở cột đầu rồi lấy ô ở cột thứ 3 của dòng đó. FALSE ở cuối nghĩa là chỉ lấy khớp đúng.", "VLOOKUP finds Meta in the first column then takes the cell from the 3rd column of that row. The final FALSE means exact match only.", [T("kênh", [
			"name",
			"id",
			"cpl"
		], [
			[
				"GDN",
				1,
				40
			],
			[
				"Meta",
				2,
				55
			],
			[
				"TikTok",
				3,
				32
			]
		], {
			rows: [1],
			cells: [[1, 2]]
		})], "=VLOOKUP(\"Meta\", A:C, 3, FALSE)   → 55"),
		S("Nó chỉ nhìn sang bên phải của cột tìm. Muốn lấy cột nằm bên trái cột tìm thì VLOOKUP không làm được. Bỏ FALSE thì nó tìm gần đúng và có thể trả về dòng sai.", "It only looks to the right of the search column. A column to the left of it cannot be fetched. Drop FALSE and it matches approximately and may return the wrong row.", [T("kênh", [
			"name",
			"id",
			"cpl"
		], [
			[
				"GDN",
				1,
				40
			],
			[
				"Meta",
				2,
				55
			],
			[
				"TikTok",
				3,
				32
			]
		], { bad: [
			0,
			1,
			2
		] })], "=VLOOKUP(2, B:C, ...) không lấy được cột name ở bên trái")
	],
	"xa-text": [S("Hàm xử lý chuỗi trả về chữ. LEFT lấy bốn ký tự đầu của «2026-01».", "String functions return text. LEFT takes the first four characters of 2026-01.", [T("công thức", [
		"công thức",
		"kết quả",
		"loại"
	], [[
		"=LEFT(\"2026-01\", 4)",
		"2026",
		"chữ"
	]], { cells: [[0, 1]] })]), S("Trông giống số nhưng vẫn là chữ nên SUM bỏ qua. Muốn thành số phải bọc VALUE.", "It looks like a number but it is text, so SUM skips it. To make it a number, wrap it in VALUE.", [T("công thức", [
		"công thức",
		"kết quả",
		"loại"
	], [[
		"=LEFT(\"2026-01\", 4)",
		"2026",
		"chữ"
	], [
		"=VALUE(LEFT(\"2026-01\", 4))",
		2026,
		"số"
	]], { rows: [1] })])],
	"xa-count": [
		S("Một cột có số, chữ «n/a» và một ô trống.", "A column with numbers, the text n/a and a blank cell.", [T("cột B", ["ô", "giá trị"], [
			["B1", 12],
			["B2", "n/a"],
			["B3", "(trống)"],
			["B4", 7]
		])]),
		S("COUNT chỉ đếm ô là số: B1 và B4, ra 2.", "COUNT counts only numeric cells: B1 and B4, so 2.", [T("cột B", ["ô", "giá trị"], [
			["B1", 12],
			["B2", "n/a"],
			["B3", "(trống)"],
			["B4", 7]
		], { cells: [[0, 1], [3, 1]] })], "=COUNT(B1:B4)   → 2"),
		S("COUNTA đếm mọi ô không trống, kể cả chữ: ra 3.", "COUNTA counts every non-empty cell, text included: 3.", [T("cột B", ["ô", "giá trị"], [
			["B1", 12],
			["B2", "n/a"],
			["B3", "(trống)"],
			["B4", 7]
		], { cells: [
			[0, 1],
			[1, 1],
			[3, 1]
		] })], "=COUNTA(B1:B4)   → 3")
	],
	"xa-match": [
		S("Bảng có tên kênh ở cột A và mã ở cột B. Cần tìm tên khi biết mã 2: tên nằm bên trái cột mã.", "Names in column A and codes in column B. We need the name given code 2: the name is left of the code column.", [T("kênh", ["A: name", "B: id"], [
			["GDN", 1],
			["Meta", 2],
			["TikTok", 3]
		], { cols: [1] })]),
		S("MATCH tìm mã 2 trong cột B và báo vị trí: dòng thứ 2.", "MATCH finds code 2 in column B and reports the position: the 2nd row.", [T("kênh", ["A: name", "B: id"], [
			["GDN", 1],
			["Meta", 2],
			["TikTok", 3]
		], { cells: [[1, 1]] })], "=MATCH(2, B:B, 0)   → 2"),
		S("INDEX lấy ô thứ 2 của cột A. Nó nhìn được sang trái, điều VLOOKUP không làm được.", "INDEX takes the 2nd cell of column A. It can look left, which VLOOKUP cannot.", [T("kênh", ["A: name", "B: id"], [
			["GDN", 1],
			["Meta", 2],
			["TikTok", 3]
		], { cells: [[1, 0]] })], "=INDEX(A:A, MATCH(2, B:B, 0))   → Meta")
	],
	"xa-what": [S("Mô hình nhỏ: số form = chi tiêu × tỷ lệ. Ô đầu vào là chi tiêu 8 và tỷ lệ 3.", "A small model: forms = spend × rate. The input cells are spend 8 and rate 3.", [T("ô đầu vào", ["ô", "giá trị"], [
		["spend", 8],
		["rate", 3],
		["forms = spend × rate", 24]
	], {
		rows: [0, 1],
		cells: [[2, 1]]
	})]), S("Đổi tỷ lệ thành 4, số form tự tính lại ra 32. Đây là phép tính theo giả định bạn nhập, không phải dự báo.", "Change rate to 4 and forms recalculates to 32. This is arithmetic on the assumption you typed, not a forecast.", [T("ô đầu vào", ["ô", "giá trị"], [
		["spend", 8],
		["rate", 4],
		["forms = spend × rate", 32]
	], { cells: [[1, 1], [2, 1]] })])],
	"xa-macro": [
		S("Macro ghi lại các thao tác bạn bấm theo thứ tự.", "A macro records the steps you click, in order.", [T("macro đã ghi", ["#", "thao tác"], [
			[1, "chọn cột C"],
			[2, "xếp giảm dần"],
			[3, "tô vàng dòng đầu"]
		])]),
		S("Chạy lại macro là bấm lại đúng các bước đó trên dữ liệu mới.", "Running the macro replays exactly those clicks on new data.", [T("macro đã ghi", ["#", "thao tác"], [
			[1, "chọn cột C"],
			[2, "xếp giảm dần"],
			[3, "tô vàng dòng đầu"]
		], { rows: [
			0,
			1,
			2
		] })]),
		S("Nó không biết bạn muốn gì. Nếu dữ liệu mới có thêm một cột thì «cột C» là cột khác, và macro vẫn bấm.", "It does not know what you want. If the new data has an extra column, column C is a different column, and the macro still clicks.", [T("macro đã ghi", ["#", "thao tác"], [
			[1, "chọn cột C"],
			[2, "xếp giảm dần"],
			[3, "tô vàng dòng đầu"]
		], { bad: [0] })])
	]
};
var demos = {
	...sqlDemos,
	...xlDemos,
	...pyDemos,
	...vizDemos
};
function t(lang, vi, en) {
	return lang === "en" ? en : vi;
}
function fact(n) {
	let out = 1;
	for (let i = 2; i <= n; i += 1) out *= i;
	return out;
}
function CountWidget({ lang }) {
	const [n, setN] = (0, import_react.useState)(8);
	const [k, setK] = (0, import_react.useState)(3);
	const perm = fact(n) / fact(n - k);
	const comb = perm / fact(k);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t(lang, "Đếm bộ và thứ tự", "Sets and order"),
		onReset: () => {
			setN(8);
			setK(3);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t(lang, "n người có sẵn", "n available"),
				min: 3,
				max: 10,
				step: 1,
				value: n,
				display: String(n),
				onChange: (value) => {
					setN(value);
					if (k > value) setK(value);
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t(lang, "k người được chọn", "k chosen"),
				min: 1,
				max: n,
				step: 1,
				value: k,
				display: String(k),
				onChange: setK
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 grid grid-cols-2 gap-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-line p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted",
						children: t(lang, "Hoán vị P(n,k)", "Permutation P(n,k)")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-3xl",
						children: perm
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-line p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted",
						children: t(lang, "Tổ hợp C(n,k)", "Combination C(n,k)")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-3xl",
						children: comb
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: t(lang, "Ví dụ minh họa. Tổ hợp = hoán vị / k!.", "An example. Combination = permutation / k!.")
			})
		]
	});
}
function AddRuleWidget({ lang }) {
	const [pa, setPa] = (0, import_react.useState)(.08);
	const [pb, setPb] = (0, import_react.useState)(.4);
	const [joint, setJoint] = (0, import_react.useState)(.05);
	const maxJoint = Math.min(pa, pb);
	const used = Math.min(joint, maxJoint);
	const or = pa + pb - used;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t(lang, "A hoặc B, trừ phần giao", "A or B, minus the overlap"),
		onReset: () => {
			setPa(.08);
			setPb(.4);
			setJoint(.05);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t(lang, "P(A) form", "P(A) form"),
				min: .02,
				max: .3,
				step: .01,
				value: pa,
				display: pa.toFixed(2),
				onChange: setPa
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t(lang, "P(B) từ GDN", "P(B) from GDN"),
				min: .1,
				max: .8,
				step: .01,
				value: pb,
				display: pb.toFixed(2),
				onChange: setPb
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t(lang, "P(A và B)", "P(A and B)"),
				min: 0,
				max: maxJoint,
				step: .01,
				value: used,
				display: used.toFixed(2),
				onChange: setJoint
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 font-display text-3xl",
				children: or.toFixed(2)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					t(lang, "P(A hoặc B)", "P(A or B)"),
					" = ",
					pa.toFixed(2),
					" + ",
					pb.toFixed(2),
					" − ",
					used.toFixed(2),
					". ",
					t(lang, "Ví dụ minh họa.", "An example.")
				]
			})
		]
	});
}
function MulRuleWidget({ lang }) {
	const [pa, setPa] = (0, import_react.useState)(.4);
	const [pbGiven, setPbGiven] = (0, import_react.useState)(.1);
	const both = pa * pbGiven;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t(lang, "Cả hai: nhân xác suất có điều kiện", "Both: multiply the conditional probability"),
		onReset: () => {
			setPa(.4);
			setPbGiven(.1);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: "P(GDN)",
				min: .1,
				max: .8,
				step: .01,
				value: pa,
				display: pa.toFixed(2),
				onChange: setPa
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: "P(form | GDN)",
				min: .02,
				max: .4,
				step: .01,
				value: pbGiven,
				display: pbGiven.toFixed(2),
				onChange: setPbGiven
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 font-display text-3xl",
				children: both.toFixed(3)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					t(lang, "P(GDN và form)", "P(GDN and form)"),
					" = ",
					pa.toFixed(2),
					" × ",
					pbGiven.toFixed(2),
					". ",
					t(lang, "Ví dụ minh họa.", "An example.")
				]
			})
		]
	});
}
function ExpectWidget({ lang }) {
	const [p, setP] = (0, import_react.useState)(.25);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t(lang, "Kỳ vọng của một biến 0/1", "Expectation of a 0/1 variable"),
		onReset: () => setP(.25),
		onExtreme: () => setP(p > .5 ? .1 : .8),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: "P(X = 1)",
				min: .05,
				max: .8,
				step: .05,
				value: p,
				display: p.toFixed(2),
				onChange: setP
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 font-display text-3xl",
				children: p.toFixed(2)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					"E[X] = 0×",
					(1 - p).toFixed(2),
					" + 1×",
					p.toFixed(2),
					". ",
					t(lang, `Trên 100 lead, kỳ vọng khoảng ${Math.round(p * 100)} form. Ví dụ minh họa.`, `Over 100 leads, expect about ${Math.round(p * 100)} forms. An example.`)
				]
			})
		]
	});
}
function BayesWidget({ lang }) {
	const [prior, setPrior] = (0, import_react.useState)(.2);
	const [hit, setHit] = (0, import_react.useState)(.8);
	const [falseHit, setFalseHit] = (0, import_react.useState)(.1);
	const pb = hit * prior + falseHit * (1 - prior);
	const post = pb === 0 ? 0 : hit * prior / pb;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t(lang, "Cập nhật sau một tín hiệu", "Update after one signal"),
		onReset: () => {
			setPrior(.2);
			setHit(.8);
			setFalseHit(.1);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t(lang, "Tỷ lệ đúng khách ban đầu", "Starting rate of the right customer"),
				min: .05,
				max: .6,
				step: .05,
				value: prior,
				display: prior.toFixed(2),
				onChange: setPrior
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t(lang, "Thấy tín hiệu nếu đúng khách", "See the signal if it is the right customer"),
				min: .4,
				max: .95,
				step: .05,
				value: hit,
				display: hit.toFixed(2),
				onChange: setHit
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t(lang, "Thấy tín hiệu nếu không phải", "See the signal if it is not"),
				min: .02,
				max: .4,
				step: .02,
				value: falseHit,
				display: falseHit.toFixed(2),
				onChange: setFalseHit
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 font-display text-3xl",
				children: post.toFixed(2)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: t(lang, "Xác suất đúng khách sau tín hiệu. Prior vẫn còn trọng lượng. Ví dụ minh họa.", "Probability it is the right customer after the signal. The prior still has weight. An example.")
			})
		]
	});
}
function methodsFor(lang) {
	return [
		{
			id: "random",
			name: t(lang, "Ngẫu nhiên đơn", "Simple random"),
			say: t(lang, "Mỗi phiên cùng cơ hội. Được phép suy ra nguồn, nếu danh sách nguồn đủ.", "Every session has the same chance. You may infer to the source, if the source list is complete.")
		},
		{
			id: "strata",
			name: t(lang, "Phân tầng", "Stratified"),
			say: t(lang, "Lấy trong từng kênh. Giữ được GDN, Facebook, TikTok. Đỡ bị một kênh nuốt mẫu.", "Draw inside each channel. You keep GDN, Facebook, TikTok. One channel does not swallow the sample.")
		},
		{
			id: "convenience",
			name: t(lang, "Thuận tiện", "Convenience"),
			say: t(lang, "Lấy người đã để lại số. Dễ. Không được kết luận về người không gửi form.", "Take people who left a number. Easy. You cannot conclude about people who did not send a form.")
		}
	];
}
function SampleWidget({ lang }) {
	const [id, setId] = (0, import_react.useState)("random");
	const methods = methodsFor(lang);
	const current = methods.find((method) => method.id === id) ?? methods[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t(lang, "Cách lấy mẫu đổi câu được nói", "The draw changes what you may say"),
		onReset: () => setId("random"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: methods.map((method) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: `min-h-11 rounded-full px-3 text-sm ${id === method.id ? "bg-accent text-accent-ink" : "border border-line"}`,
					onClick: () => setId(method.id),
					children: method.name
				}, method.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-lg leading-relaxed",
				children: current.say
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: t(lang, "Ví dụ minh họa trên một danh sách phiên.", "An example on a list of sessions.")
			})
		]
	});
}
function InferWidget({ id, lang }) {
	if (id === "count") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountWidget, { lang });
	if (id === "addrule") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddRuleWidget, { lang });
	if (id === "mulrule") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MulRuleWidget, { lang });
	if (id === "expect") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpectWidget, { lang });
	if (id === "bayes") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BayesWidget, { lang });
	if (id === "sample") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SampleWidget, { lang });
	return null;
}
/** Hình minh họa trong mục «Làm từng bước»: bảng tính, biểu đồ cột, biểu đồ đường. Dùng màu từ token của app. */
function WalkVisual({ v, lang }) {
	const i = lang === "en" ? 1 : 0;
	const frame = (body) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "mt-4 rounded-xl border border-line bg-paper p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
				className: "text-xs uppercase tracking-widest text-muted",
				children: v.title[i]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 overflow-x-auto",
				children: body
			}),
			v.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: v.note[i]
			}) : null
		]
	});
	if (v.kind === "table") {
		const marked = new Set((v.mark ?? []).map(([r, c]) => `${r},${c}`));
		const cols = "ABCDEFGH";
		return frame(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "min-w-full border-collapse text-sm tabular-nums",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "w-8 border border-line bg-card" }), v.head.map((h, c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("th", {
				className: "border border-line bg-card px-2 py-1 text-left font-medium",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mr-1 text-xs text-muted",
					children: cols[c]
				}), h[i]]
			}, c))] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: v.rows.map((row, r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
				className: "border border-line bg-card px-2 py-1 text-xs font-normal text-muted",
				children: r + 1
			}), row.map((cell, c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				className: `border border-line px-2 py-1 ${typeof cell === "number" ? "text-right" : ""} ${marked.has(`${r},${c}`) ? "bg-accent font-medium text-accent-ink" : "bg-card"}`,
				children: cell
			}, c))] }, r)) })]
		}));
	}
	const W = 320;
	const H = 160;
	const pad = 28;
	if (v.kind === "bars") {
		const max = Math.max(...v.items.map((x) => x.value)) * 1.15;
		const bw = 264 / v.items.length;
		return frame(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: `0 0 ${W} ${H}`,
			className: "w-full max-w-md",
			role: "img",
			"aria-label": v.title[i],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: pad,
				y1: 132,
				x2: 292,
				y2: 132,
				stroke: "currentColor",
				opacity: .3
			}), v.items.map((it, k) => {
				const h = 104 * it.value / max;
				const x = pad + k * bw + bw * .2;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x,
						y: 132 - h,
						width: bw * .6,
						height: h,
						rx: 3,
						className: "fill-accent"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
						x: x + bw * .3,
						y: 132 - h - 4,
						textAnchor: "middle",
						fontSize: 11,
						fill: "currentColor",
						children: [it.value, v.unit ?? ""]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: x + bw * .3,
						y: 146,
						textAnchor: "middle",
						fontSize: 11,
						fill: "currentColor",
						opacity: .7,
						children: it.label[i]
					})
				] }, k);
			})]
		}));
	}
	const lo = Math.min(...v.ys);
	const hi = Math.max(...v.ys);
	const span = hi - lo || 1;
	const min = lo - span * .3;
	const rng = hi + span * .3 - min;
	const px = (k) => pad + k * 264 / Math.max(v.ys.length - 1, 1);
	const py = (y) => 132 - (y - min) / rng * 104;
	return frame(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: `0 0 ${W} ${H}`,
		className: "w-full max-w-md",
		role: "img",
		"aria-label": v.title[i],
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: pad,
				y1: 132,
				x2: 292,
				y2: 132,
				stroke: "currentColor",
				opacity: .3
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", {
				fill: "none",
				strokeWidth: 2,
				className: "stroke-accent",
				points: v.ys.map((y, k) => `${px(k)},${py(y)}`).join(" ")
			}),
			v.ys.map((y, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: px(k),
					cy: py(y),
					r: 3.5,
					className: "fill-accent"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
					x: px(k),
					y: py(y) - 8,
					textAnchor: "middle",
					fontSize: 11,
					fill: "currentColor",
					children: [y, v.unit ?? ""]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: px(k),
					y: 146,
					textAnchor: "middle",
					fontSize: 11,
					fill: "currentColor",
					opacity: .7,
					children: v.xs[k]
				})
			] }, k))
		]
	}));
}
var text = {
	vi: {
		starter: "Mã khởi đầu, giữ nguyên",
		guide: "Hướng dẫn đi kèm",
		think: "Nghĩ trước khi gõ",
		steps: "Các bước",
		code: "Khung code gợi ý",
		result: "Kết quả chạy trên file của bạn",
		ran: "Code đã chạy (xem thêm)",
		read: "Cách đọc kết quả này",
		remark: "Nhận xét mẫu",
		howRemark: "Cách tự viết nhận xét",
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
		result: "Result on your file",
		ran: "Code that ran (optional)",
		read: "How to read this result",
		remark: "Sample remark",
		howRemark: "How to write your own remark",
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
			const body = buf.join("\n");
			out.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeExplain, {
				code: body,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
					className: "my-2 overflow-x-auto rounded-xl bg-paper p-3 text-sm",
					children: body
				})
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
function GuideBox({ g, r, t }) {
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
				r ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-sm font-medium",
							children: t.result
						}),
						r.imgs.map((src) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src,
							alt: "",
							loading: "lazy",
							className: "mt-2 w-full rounded-xl border border-line bg-white"
						}, src)),
						r.text ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
							className: "mt-2 overflow-x-auto rounded-xl bg-paper p-3 text-sm",
							children: r.text
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
							className: "mt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
								className: "min-h-11 cursor-pointer text-sm text-muted",
								children: t.ran
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeExplain, {
								code: r.code,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
									className: "mt-1 overflow-x-auto rounded-xl bg-paper p-3 text-sm",
									children: r.code
								})
							})]
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "mt-4 text-sm font-medium",
					children: t.code
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeExplain, {
					code: g.code,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "mt-1 overflow-x-auto rounded-xl bg-paper p-3 text-sm",
						children: g.code
					})
				})] }),
				g.read?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-sm font-medium",
						children: t.read
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-2 list-disc space-y-1 pl-5",
						children: g.read.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "leading-relaxed",
							children: s
						}, i))
					})]
				}) : null,
				g.remark ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 rounded-xl border border-line p-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-sm font-medium",
							children: t.remark
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 leading-relaxed",
							children: g.remark
						}),
						g.howRemark?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "mt-3 text-sm font-medium",
							children: t.howRemark
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-1 list-decimal space-y-1 pl-5",
							children: g.howRemark.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "leading-relaxed",
								children: s
							}, i))
						})] }) : null
					]
				}) : null,
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
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeExplain, {
			code: c.s,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
				className: "my-2 overflow-x-auto rounded-xl border border-line bg-paper p-3 text-sm",
				"aria-label": t.starter,
				children: c.s
			})
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "my-1",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Md, { src: c.s })
	});
}
function AssignBody({ a }) {
	const lang = (0, import_react.useSyncExternalStore)(subscribeProgress, getProgress, getServerProgress).lang;
	const t = text[lang];
	const refs = a.cells.filter((c) => c.ref).map((c) => c.ref);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs tracking-widest text-muted",
				children: [
					a.course,
					" · ",
					a.file
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 rounded-xl border-l-4 border-accent bg-card p-3 leading-relaxed",
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
						r: a.results?.[c.ref],
						t
					}) : null
				] }, i))
			})
		]
	});
}
function Qa({ q, a, n }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "rounded-card border border-line bg-card p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-medium",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mr-2 font-display text-xl text-accent",
					children: n
				}), q]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-2 min-h-11 rounded-full border border-line px-4 text-sm",
				onClick: () => setOpen((v) => !v),
				children: open ? "Ẩn đáp án mẫu" : "Tự trả lời trước, rồi xem đáp án mẫu"
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 rounded-xl bg-paper p-3 leading-relaxed",
				children: a
			}) : null
		]
	});
}
function OverviewBody({ ov, lang }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mt-6 rounded-card border border-line bg-card p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-lg leading-relaxed",
			children: ov.lead
		})
	}), ov.blocks.map((b, i) => {
		if (b.k === "h") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-8 font-display text-2xl leading-snug",
			children: b.x
		}, i);
		if (b.k === "p") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 leading-relaxed",
			children: b.x
		}, i);
		if (b.k === "note") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 rounded-xl border-l-4 border-accent bg-paper p-3 leading-relaxed",
			children: b.x
		}, i);
		if (b.k === "code") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeExplain, {
			code: b.x,
			lang,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
				className: "mt-3 overflow-x-auto rounded-xl bg-paper p-3 text-sm leading-relaxed",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: b.x })
			})
		}, i);
		if (b.k === "ul") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 list-disc space-y-2 pl-5 leading-relaxed",
			children: b.x.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t }, t))
		}, i);
		if (b.k === "def") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
			className: "mt-3 space-y-3",
			children: b.x.map(([t, m]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-line p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "font-medium",
					children: t
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "mt-1 leading-relaxed text-muted",
					children: m
				})]
			}, t))
		}, i);
		if (b.k === "qa") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-4 space-y-3",
			children: b.x.map(([q, a], j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Qa, {
				q,
				a,
				n: j + 1
			}, q))
		}, i);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 space-y-2",
			children: b.x.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/khai-niem/$conceptId",
				params: { conceptId: id },
				className: "font-medium text-accent underline",
				children: studyListTitle(id, lang)
			}) }, id))
		}, i);
	})] });
}
function UpgradLink({ concept, lang }) {
	const cid = concept.courseId;
	const c = course_default.courses.find((x) => x.id === cid);
	const mod = concept.module;
	const ses = concept.session;
	if (!c) return null;
	const path = [
		c.title,
		mod,
		ses
	].filter(Boolean).join("  ›  ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-8 rounded-card border border-line bg-card p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-xs uppercase tracking-widest text-muted",
			children: lang === "en" ? "Where this sits on upGrad" : "Thuộc bài học trên upGrad"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 leading-relaxed",
			children: path
		})]
	});
}
var heads = {
	vi: {
		why: "Vì sao cần biết",
		prior: "Liên hệ với bài trước",
		see: "Quan sát",
		plain: "Hiểu nhanh",
		example: "Tình huống minh họa (số liệu giả định)",
		use: "Cách áp dụng",
		precise: "Định nghĩa chính xác",
		more: "Tự thử điều chỉnh",
		prev: "Từ trước",
		next: "Tiếp theo",
		links: "Khái niệm liên quan",
		onMap: "Xem trên sơ đồ tư duy",
		onFormula: "Xem trong bảng công thức",
		onGlossary: "Mở từ điển",
		v2d: "Đồ thị kéo được",
		v3d: "Cảnh 3D",
		walk: "Làm từng bước với số liệu thật",
		words: "Từ cần biết",
		problem: "Bài toán",
		steps: "Từng bước",
		say: "Kết luận bằng lời",
		check: "Tự kiểm tra",
		reveal: "Hiện đáp án",
		story: "Câu chuyện Lotus Spa"
	},
	en: {
		why: "What you use it for",
		prior: "How it links",
		see: "Watch it",
		plain: "In plain words",
		example: "Illustrative situation (made-up numbers)",
		use: "When to use it",
		precise: "The precise version",
		more: "Try it",
		prev: "Previous",
		next: "Next",
		links: "Connections",
		onMap: "See on the map",
		onFormula: "See in the formula sheet",
		onGlossary: "Open the glossary",
		v2d: "Interactive chart",
		v3d: "3D scene",
		walk: "Worked step by step with real numbers",
		words: "Words you need",
		problem: "The problem",
		steps: "Step by step",
		say: "The conclusion in words",
		check: "Check yourself",
		reveal: "Show answer",
		story: "The Lotus Spa story"
	}
};
function Quick({ id, head, formula }) {
	const cls = "inline-flex min-h-11 items-center rounded-full border border-line px-3 text-sm";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-3 flex flex-wrap gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/ban-do",
				hash: id,
				className: cls,
				children: head.onMap
			}),
			formula ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/cong-thuc",
				hash: id,
				className: cls,
				children: head.onFormula
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/tu-dien",
				className: cls,
				children: head.onGlossary
			})
		]
	});
}
function WalkBlock({ walk, head, visual, lang }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-8 rounded-card border border-line bg-card p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xs uppercase tracking-widest text-muted",
				children: head.walk
			}),
			walk.story ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 rounded-xl border-l-4 border-accent bg-paper p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-widest text-muted",
					children: head.story
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 leading-relaxed",
					children: walk.story
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-3 text-sm font-medium",
				children: head.words
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "mt-1 space-y-2",
				children: walk.words.map(([term, meaning]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "font-medium",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/tu-dien",
						hash: term.replace(/\s+/g, " ").trim().toLowerCase(),
						className: "underline decoration-dotted underline-offset-4",
						children: term
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "leading-relaxed text-muted",
					children: meaning
				})] }, term))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-5 text-sm font-medium",
				children: head.problem
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 leading-relaxed",
				children: walk.problem
			}),
			visual ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WalkVisual, {
				v: visual,
				lang
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-5 text-sm font-medium",
				children: head.steps
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-2 space-y-3",
				children: walk.steps.map(([title, body], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-2xl leading-none text-accent",
						children: i + 1
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "leading-relaxed",
						children: body
					})] })]
				}, title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-5 text-sm font-medium",
				children: head.say
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 leading-relaxed",
				children: walk.say
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-5 text-sm font-medium",
				children: head.check
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 leading-relaxed",
				children: walk.check[0]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-2 min-h-11 rounded-full border border-line px-4 text-sm",
				onClick: () => setOpen((v) => !v),
				children: open ? "−" : head.reveal
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 rounded-xl bg-paper p-3 leading-relaxed",
				children: walk.check[1]
			}) : null
		]
	});
}
function ConceptView({ concept }) {
	const progress = (0, import_react.useSyncExternalStore)(subscribeProgress, getProgress, getServerProgress);
	(0, import_react.useSyncExternalStore)(subscribeRaw, getRawVersion, getServerRawVersion);
	const lang = progress.lang;
	const head = heads[lang];
	const text = studyCopy(concept, lang);
	const near = studyNeighbors(concept.id);
	const prevText = near.prev ? studyCopy(near.prev, lang) : null;
	const nextText = near.next ? studyCopy(near.next, lang) : null;
	const rel = relatedOf(concept.id);
	const hasDemo = Boolean(demos[concept.id]);
	const hasLab = Boolean(concept.sim) && !hasDemo;
	const asg = getAssignmentByConcept(concept.id);
	const ov = overviews[concept.id];
	const visual = hasDemo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataDemo, {
		demo: demos[concept.id],
		lang
	}) : motions[concept.id] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MotionPlayer, {
		motion: motions[concept.id],
		lang
	}) : hasLab ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sim, { id: concept.sim }) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "reading mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs uppercase tracking-widest text-muted",
				children: [
					concept.eyebrow,
					" · ",
					concept.session
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-muted",
				children: [
					near.index + 1,
					"/",
					near.total,
					" · ",
					concept.video
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl leading-tight",
				children: asg ? asg.title[lang === "en" ? 1 : 0] : text.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/goc",
				hash: concept.id,
				className: "mt-3 inline-block text-sm text-accent underline",
				children: lang === "en" ? "Edit the raw text" : "Sửa chữ gốc"
			}),
			asg ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssignBody, { a: asg }) : ov ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OverviewBody, {
				ov,
				lang
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-6 rounded-card border border-line bg-card p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xs uppercase tracking-widest text-accent",
						children: head.why
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-lg leading-relaxed",
						children: text.why
					})]
				}),
				text.prior ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xs uppercase tracking-widest text-muted",
						children: head.prior
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 leading-relaxed",
						children: text.prior
					})]
				}) : null,
				visual ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xs uppercase tracking-widest text-muted",
						children: head.see
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3",
						children: visual
					})]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xs uppercase tracking-widest text-muted",
						children: head.plain
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-lg leading-relaxed",
						children: text.plain
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xs uppercase tracking-widest text-muted",
						children: head.example
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 leading-relaxed",
						children: text.situation
					})]
				}),
				walks[concept.id] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WalkBlock, {
					walk: walks[concept.id][lang],
					head,
					visual: walks[concept.id].visual,
					lang
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xs uppercase tracking-widest text-muted",
						children: head.use
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-3 space-y-3",
						children: text.use.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-2xl leading-none text-accent",
								children: index + 1
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "leading-relaxed",
								children: step
							})]
						}, step))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xs uppercase tracking-widest text-muted",
							children: head.precise
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 leading-relaxed",
							children: text.precise
						}),
						text.formula ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 rounded-card border border-line bg-card px-3 py-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
								tex: text.formula,
								block: true
							})
						}) : null,
						text.symbols.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-2 text-sm",
							children: text.symbols.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, { tex: row.sym })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted",
									children: row.meaning
								})]
							}, row.sym))
						}) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
					className: "mt-8 border-l-4 border-accent pl-4 font-display text-2xl leading-snug",
					children: text.insight
				}),
				rel.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xs uppercase tracking-widest text-muted",
							children: head.links
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-3",
							children: rel.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/khai-niem/$conceptId",
								params: { conceptId: r.id },
								className: "font-medium underline",
								children: studyListTitle(r.id, lang)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: lang === "en" ? r.en : r.vi
							})] }, r.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quick, {
							id: concept.id,
							head,
							formula: Boolean(text.formula)
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quick, {
						id: concept.id,
						head,
						formula: Boolean(text.formula)
					})
				}),
				concept.sim && hasDemo || concept.widget ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xs uppercase tracking-widest text-muted",
						children: head.more
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3",
						children: [concept.widget ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InferWidget, {
							id: concept.widget,
							lang
						}) : null, concept.sim && hasDemo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sim, { id: concept.sim }) : null]
					})]
				}) : null
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpgradLink, {
				concept,
				lang
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-3 sm:grid-cols-2",
				children: [near.prev && prevText ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/khai-niem/$conceptId",
					params: { conceptId: near.prev.id },
					className: "rounded-card border border-line p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs tracking-widest text-muted",
						children: head.prev
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block font-medium",
						children: prevText.title
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), near.next && nextText ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/khai-niem/$conceptId",
					params: { conceptId: near.next.id },
					className: "rounded-card border border-line p-4 sm:text-right",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs tracking-widest text-muted",
						children: head.next
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block font-medium",
						children: nextText.title
					})]
				}) : null]
			})
		]
	});
}
function ConceptPage() {
	const { conceptId } = Route$1.useParams();
	const concept = getStudy(conceptId);
	if (!concept) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "reading mx-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl",
			children: "Không thấy khái niệm này"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/",
			className: "mt-4 inline-block underline",
			children: "Về trang đầu"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConceptView, { concept });
}
//#endregion
export { ConceptPage as component };
