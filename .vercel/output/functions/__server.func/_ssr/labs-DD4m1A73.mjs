import { o as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as subscribeProgress, d as getProgress, f as getServerProgress } from "./router-C3Tme0PN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/labs-DD4m1A73.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cssVar(name, fallback) {
	if (typeof window === "undefined") return fallback;
	return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;
}
function tone() {
	return {
		ink: cssVar("--ink", "#1c1915"),
		muted: cssVar("--muted", "#6f675e"),
		accent: cssVar("--accent", "#b5461f"),
		good: cssVar("--good", "#2f6b4f"),
		line: cssVar("--line", "#e4dacb"),
		card: cssVar("--card", "#fbf7f1")
	};
}
/** Số trên trục ngang, nằm sát đáy ô vẽ. */
function xTicks(ctx, c, h, items) {
	ctx.fillStyle = c.muted;
	ctx.strokeStyle = c.line;
	ctx.font = "11px Outfit, sans-serif";
	ctx.textAlign = "center";
	ctx.textBaseline = "alphabetic";
	items.forEach(([px, label]) => {
		ctx.beginPath();
		ctx.moveTo(px, h - 15);
		ctx.lineTo(px, h - 11);
		ctx.stroke();
		ctx.fillText(label, px, h - 2);
	});
	ctx.textAlign = "left";
}
/** Dòng chú thích ở góc trên bên trái: nói trục nào là gì. */
function caption(ctx, c, text) {
	const maxW = ctx.canvas.getBoundingClientRect().width - 12;
	let size = 11;
	ctx.font = `${size}px Outfit, sans-serif`;
	while (ctx.measureText(text).width > maxW && size > 8) {
		size -= .5;
		ctx.font = `${size}px Outfit, sans-serif`;
	}
	ctx.fillStyle = c.muted;
	ctx.textAlign = "left";
	ctx.textBaseline = "alphabetic";
	ctx.fillText(text, 6, 12);
}
function useCanvas(draw, deps) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = ref.current;
		if (!canvas) return;
		const paint = () => {
			const rect = canvas.getBoundingClientRect();
			const dpr = Math.min(2, window.devicePixelRatio || 1);
			canvas.width = Math.max(1, Math.floor(rect.width * dpr));
			canvas.height = Math.max(1, Math.floor(rect.height * dpr));
			const ctx = canvas.getContext("2d");
			if (!ctx) return;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			draw(ctx, rect.width, rect.height);
		};
		paint();
		const observer = new ResizeObserver(paint);
		observer.observe(canvas);
		return () => observer.disconnect();
	}, deps);
	return ref;
}
function useLang() {
	return (0, import_react.useSyncExternalStore)(subscribeProgress, getProgress, getServerProgress).lang === "en" ? "en" : "vi";
}
/** t("tiếng Việt", "English") chọn theo ngôn ngữ đang bật. */
function useT() {
	const lang = useLang();
	return (0, import_react.useCallback)((vi, en) => lang === "en" ? en : vi, [lang]);
}
function Lab({ title, children, onReset, onExtreme }) {
	const lang = (0, import_react.useSyncExternalStore)(subscribeProgress, getProgress, getServerProgress).lang;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-card border border-line bg-card p-4 shadow-[var(--shadow)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex flex-wrap items-center justify-between gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-xl",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [onExtreme ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "min-h-11 rounded-full border border-line px-3 text-sm",
					onClick: onExtreme,
					children: lang === "en" ? "Extreme value" : "Giá trị cực đoan"
				}) : null, onReset ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "min-h-11 rounded-full bg-ink px-3 text-sm text-paper",
					onClick: onReset,
					children: lang === "en" ? "Reset" : "Đặt lại"
				}) : null]
			})]
		}), children]
	});
}
function Range({ label, value, min, max, step, onChange, display }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block py-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-baseline justify-between gap-3 text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-medium tabular-nums",
				children: display
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			className: "lab-range w-full",
			type: "range",
			min,
			max,
			step,
			value,
			onChange: (event) => onChange(Number(event.target.value))
		})]
	});
}
function erf(x) {
	const sign = Math.sign(x);
	const a = Math.abs(x);
	const t = 1 / (1 + .3275911 * a);
	return sign * (1 - ((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - .284496736) * t + .254829592) * t * Math.exp(-a * a));
}
function cdf(x, mu = 0, sd = 1) {
	return .5 * (1 + erf((x - mu) / (sd * Math.SQRT2)));
}
function pdf(x, mu = 0, sd = 1) {
	const z = (x - mu) / sd;
	return Math.exp(-.5 * z * z) / (sd * Math.sqrt(2 * Math.PI));
}
function invNorm(p) {
	if (p <= 1e-4) return -4;
	if (p >= .9999) return 4;
	const lower = p < .5;
	const t = lower ? p : 1 - p;
	const s = Math.sqrt(-2 * Math.log(t));
	const x = s - (2.515517 + .802853 * s + .010328 * s * s) / (1 + 1.432788 * s + .189269 * s * s + .001308 * s * s * s);
	return lower ? -x : x;
}
function mulberry32(seed) {
	let a = seed;
	return () => {
		a |= 0;
		a = a + 1831565813 | 0;
		let t = Math.imul(a ^ a >>> 15, 1 | a);
		t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
		return ((t ^ t >>> 14) >>> 0) / 4294967296;
	};
}
function gauss(rng) {
	const u = Math.max(1e-9, rng());
	const v = rng();
	return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}
var pill = (on) => `min-h-11 rounded-full px-3 text-sm ${on ? "bg-accent text-accent-ink" : "border border-line"}`;
function Pills({ value, items, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mb-2 flex flex-wrap gap-2",
		children: items.map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: pill(value === id),
			onClick: () => onChange(id),
			children: label
		}, id))
	});
}
function Btn({ children, onClick, solid }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: `min-h-11 rounded-full px-4 text-sm ${solid ? "bg-ink text-paper" : "border border-line"}`,
		onClick,
		children
	});
}
function yTicks(ctx, c, items, x = 4) {
	ctx.fillStyle = c.muted;
	ctx.font = "11px Outfit, sans-serif";
	ctx.textAlign = "left";
	ctx.textBaseline = "middle";
	items.forEach(([py, label]) => ctx.fillText(label, x, py));
	ctx.textBaseline = "alphabetic";
}
var clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
function solve(A, b) {
	const n = b.length;
	const M = A.map((row, i) => [...row, b[i]]);
	for (let i = 0; i < n; i++) {
		let p = i;
		for (let r = i + 1; r < n; r++) if (Math.abs(M[r][i]) > Math.abs(M[p][i])) p = r;
		[M[i], M[p]] = [M[p], M[i]];
		const d = M[i][i] || 1e-12;
		for (let j = i; j <= n; j++) M[i][j] /= d;
		for (let r = 0; r < n; r++) {
			if (r === i) continue;
			const f = M[r][i];
			for (let j = i; j <= n; j++) M[r][j] -= f * M[i][j];
		}
	}
	return M.map((row) => row[n]);
}
/** Least squares. X rows already include the intercept column. */
function ols(X, y) {
	const k = X[0].length;
	const A = Array.from({ length: k }, () => Array(k).fill(0));
	const b = Array(k).fill(0);
	X.forEach((row, i) => {
		for (let p = 0; p < k; p++) {
			b[p] += row[p] * y[i];
			for (let q = 0; q < k; q++) A[p][q] += row[p] * row[q];
		}
	});
	const beta = solve(A, b);
	const mean = y.reduce((s, v) => s + v, 0) / y.length;
	let rss = 0;
	let tss = 0;
	X.forEach((row, i) => {
		const fit = row.reduce((s, v, j) => s + v * beta[j], 0);
		rss += (y[i] - fit) ** 2;
		tss += (y[i] - mean) ** 2;
	});
	return {
		beta,
		rss,
		r2: tss ? 1 - rss / tss : 0
	};
}
function listOf(n, r, ordered) {
	const letters = "ABCDEFG".slice(0, n).split("");
	const out = [];
	const used = Array(n).fill(false);
	const cur = [];
	const rec = (start) => {
		if (out.length >= 48) return;
		if (cur.length === r) {
			out.push(cur.join(""));
			return;
		}
		for (let i = ordered ? 0 : start; i < n; i++) {
			if (used[i]) continue;
			used[i] = true;
			cur.push(letters[i]);
			rec(i + 1);
			cur.pop();
			used[i] = false;
		}
	};
	rec(0);
	return out;
}
var permCount = (n, r) => {
	let v = 1;
	for (let i = 0; i < r; i++) v *= n - i;
	return v;
};
var factorial = (r) => r <= 1 ? 1 : r * factorial(r - 1);
function CountLab({ mode }) {
	const t = useT();
	const [n, setN] = (0, import_react.useState)(5);
	const [r, setR] = (0, import_react.useState)(3);
	const rr = Math.min(r, n);
	const value = (k) => mode === "perm" ? permCount(n, k) : permCount(n, k) / factorial(k);
	const ref = useCanvas((ctx, w, h) => {
		const c = tone();
		ctx.clearRect(0, 0, w, h);
		const vals = Array.from({ length: n }, (_, i) => value(i + 1));
		const peak = Math.max(...vals);
		const bw = (w - 16) / n;
		vals.forEach((v, i) => {
			const bh = v / peak * (h - 56);
			ctx.fillStyle = i + 1 === rr ? c.accent : c.ink;
			ctx.globalAlpha = i + 1 === rr ? .95 : .3;
			ctx.fillRect(8 + i * bw + 3, h - 20 - bh, bw - 6, bh);
			ctx.globalAlpha = 1;
			ctx.fillStyle = c.ink;
			ctx.font = "11px Outfit, sans-serif";
			ctx.textAlign = "center";
			ctx.fillText(String(Math.round(v)), 8 + i * bw + bw / 2, h - 24 - bh);
		});
		caption(ctx, c, mode === "perm" ? t("ngang: chọn r phần tử · cao: số cách xếp (có thứ tự)", "x: choose r items · y: number of ordered arrangements") : t("ngang: chọn r phần tử · cao: số cách chọn (không thứ tự)", "x: choose r items · y: number of unordered selections"));
		xTicks(ctx, c, h, vals.map((_, i) => [8 + i * bw + bw / 2, `r = ${i + 1}`]));
	}, [
		n,
		rr,
		mode,
		t
	]);
	const chips = listOf(n, rr, mode === "perm");
	const total = Math.round(value(rr));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: mode === "perm" ? t("Hoán vị: thứ tự có nghĩa", "Permutations: order matters") : t("Tổ hợp: thứ tự không có nghĩa", "Combinations: order does not matter"),
		onReset: () => {
			setN(5);
			setR(3);
		},
		onExtreme: () => {
			setN(7);
			setR(4);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref,
				className: "h-48 w-full rounded-xl bg-paper"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t("Số phần tử n", "Items available n"),
				min: 2,
				max: 7,
				step: 1,
				value: n,
				display: String(n),
				onChange: setN
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t("Chọn r", "Choose r"),
				min: 1,
				max: n,
				step: 1,
				value: rr,
				display: String(rr),
				onChange: setR
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm",
				children: [mode === "perm" ? `P(${n},${rr}) = n!/(n−r)! = ${total}` : `C(${n},${rr}) = n!/(r!(n−r)!) = ${total}`, mode === "comb" ? ` · ${t("so với có thứ tự", "vs ordered")}: ${permCount(n, rr)} = ${total} × ${factorial(rr)}!` : ` · ${t("nếu bỏ thứ tự còn", "ignoring order leaves")} ${Math.round(permCount(n, rr) / factorial(rr))}`]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex flex-wrap gap-1.5",
				children: [chips.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-lg border border-line px-2 py-1 text-xs tabular-nums",
					children: s
				}, s)), total > chips.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "px-1 py-1 text-xs text-muted",
					children: ["… +", total - chips.length]
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: mode === "perm" ? t("AB và BA là hai cách khác nhau, nên chúng đều có mặt trong danh sách.", "AB and BA are different arrangements, so both appear in the list.") : t("AB và BA là cùng một nhóm, nên chỉ giữ một. Chia cho r! là bỏ các cách xoay cùng nhóm.", "AB and BA are the same group, so only one is kept. Dividing by r! removes the re-orderings of one group.")
			})
		]
	});
}
function ProbLab() {
	const t = useT();
	const [k, setK] = (0, import_react.useState)(3);
	const [us, setUs] = (0, import_react.useState)([]);
	const rng = (0, import_react.useRef)(mulberry32(41));
	const p = k / 10;
	const add = (m) => setUs((cur) => [...cur, ...Array.from({ length: m }, () => rng.current())].slice(0, 3e3));
	const hits = us.filter((u) => u < p).length;
	const ref = useCanvas((ctx, w, h) => {
		const c = tone();
		ctx.clearRect(0, 0, w, h);
		const N = Math.max(50, us.length);
		const X = (i) => 30 + i / N * (w - 40);
		const Y = (v) => h - 22 - v * (h - 44);
		ctx.strokeStyle = c.line;
		[
			0,
			.5,
			1
		].forEach((v) => {
			ctx.beginPath();
			ctx.moveTo(30, Y(v));
			ctx.lineTo(w - 10, Y(v));
			ctx.stroke();
		});
		ctx.strokeStyle = c.good;
		ctx.setLineDash([5, 4]);
		ctx.beginPath();
		ctx.moveTo(30, Y(p));
		ctx.lineTo(w - 10, Y(p));
		ctx.stroke();
		ctx.setLineDash([]);
		ctx.strokeStyle = c.accent;
		ctx.lineWidth = 2;
		ctx.beginPath();
		let s = 0;
		us.forEach((u, i) => {
			s += u < p ? 1 : 0;
			const px = X(i + 1);
			const py = Y(s / (i + 1));
			if (i === 0) ctx.moveTo(px, py);
			else ctx.lineTo(px, py);
		});
		ctx.stroke();
		ctx.lineWidth = 1;
		yTicks(ctx, c, [
			0,
			.5,
			1
		].map((v) => [Y(v), String(v)]));
		caption(ctx, c, t("ngang: số lần thử · dọc: tỷ lệ xảy ra · nét đứt: p của mô hình", "x: number of trials · y: share that happened · dashed: the model's p"));
		xTicks(ctx, c, h, [
			[X(0), "0"],
			[X(N / 2), String(Math.round(N / 2))],
			[X(N), String(N)]
		]);
	}, [
		us,
		p,
		t
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t("Xác suất: mô hình và tần suất gặp nhau", "Probability: the model meets the long-run frequency"),
		onReset: () => {
			setK(3);
			setUs([]);
		},
		onExtreme: () => add(1e3),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref,
				className: "h-52 w-full rounded-xl bg-paper"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t("Kết quả có lợi trong 10 kết quả đều khả năng", "Favourable outcomes out of 10 equally likely"),
				min: 0,
				max: 10,
				step: 1,
				value: k,
				display: `${k}/10`,
				onChange: setK
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-1 flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						onClick: () => add(10),
						children: "+10"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						onClick: () => add(100),
						children: "+100"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						onClick: () => add(1e3),
						children: "+1000"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						onClick: () => setUs([]),
						children: t("Xóa lần thử", "Clear trials")
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm",
				children: [
					t("Mô hình", "Model"),
					": p = ",
					k,
					"/10 = ",
					p.toFixed(2),
					". ",
					t("Thực tế", "Observed"),
					": ",
					hits,
					"/",
					us.length || 0,
					us.length ? ` = ${(hits / us.length).toFixed(3)}` : "",
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: t("Ít lần thử thì tỷ lệ nhảy lung tung. Càng nhiều lần, đường đỏ càng sát nét đứt. Xác suất tính từ mô hình trước khi có dữ liệu, tần suất xác nhận lại sau.", "With few trials the share jumps around. With more, the red line settles onto the dashed one. Probability comes from the model before any data; frequency confirms it afterwards.")
			})
		]
	});
}
function VennLab({ mode }) {
	const t = useT();
	const [a, setA] = (0, import_react.useState)(40);
	const [b, setB] = (0, import_react.useState)(30);
	const [abRaw, setAb] = (0, import_react.useState)(12);
	const lo = Math.max(0, a + b - 100);
	const hi = Math.min(a, b);
	const ab = clamp(abRaw, lo, hi);
	const aOnly = a - ab;
	const bOnly = b - ab;
	const neither = 100 - a - b + ab;
	const ref = useCanvas((ctx, w, h) => {
		const c = tone();
		ctx.clearRect(0, 0, w, h);
		const x0 = 8;
		const y0 = 22;
		const W = w - 16;
		const H = h - 40;
		const wA = a / 100 * W;
		[
			{
				x: x0,
				y: y0,
				w: wA,
				h: a ? ab / a * H : 0,
				name: "A∩B",
				pct: ab,
				col: c.accent,
				al: .9,
				on: true
			},
			{
				x: x0,
				y: y0 + (a ? ab / a * H : 0),
				w: wA,
				h: a ? aOnly / a * H : H,
				name: "A",
				pct: aOnly,
				col: c.ink,
				al: .3,
				on: mode !== "and"
			},
			{
				x: x0 + wA,
				y: y0,
				w: W - wA,
				h: a < 100 ? bOnly / (100 - a) * H : 0,
				name: "B",
				pct: bOnly,
				col: c.good,
				al: .5,
				on: mode !== "and"
			},
			{
				x: x0 + wA,
				y: y0 + (a < 100 ? bOnly / (100 - a) * H : 0),
				w: W - wA,
				h: a < 100 ? neither / (100 - a) * H : H,
				name: t("không A, không B", "neither"),
				pct: neither,
				col: c.line,
				al: 1,
				on: mode !== "or" && mode !== "and"
			}
		].forEach((cell) => {
			ctx.fillStyle = cell.col;
			ctx.globalAlpha = cell.on ? cell.al : cell.name === "A∩B" ? cell.al : .1;
			ctx.fillRect(cell.x, cell.y, Math.max(0, cell.w), Math.max(0, cell.h));
			ctx.globalAlpha = 1;
			ctx.strokeStyle = c.card;
			ctx.lineWidth = 2;
			ctx.strokeRect(cell.x, cell.y, Math.max(0, cell.w), Math.max(0, cell.h));
			ctx.lineWidth = 1;
			if (cell.w > 44 && cell.h > 18) {
				ctx.fillStyle = cell.col === c.accent ? "#fff" : c.ink;
				ctx.font = "12px Outfit, sans-serif";
				ctx.textAlign = "center";
				ctx.fillText(`${cell.name} ${cell.pct}%`, cell.x + cell.w / 2, cell.y + cell.h / 2 + 4);
			}
		});
		ctx.textAlign = "left";
		caption(ctx, c, t("cột trái = A (rộng theo P(A)) · hàng trên cùng = cũng là B", "left column = A (width = P(A)) · top part = also B"));
		xTicks(ctx, c, h, [[x0 + wA / 2, `A = ${a}%`], [x0 + wA + (W - wA) / 2, `${t("không A", "not A")} = ${100 - a}%`]]);
	}, [
		a,
		b,
		ab,
		mode,
		t
	]);
	const union = a + b - ab;
	const indep = Math.abs(ab - a * b / 100) < .5;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: mode === "events" ? t("Hai biến cố: rời nhau hay chồng nhau", "Two events: disjoint or overlapping") : mode === "or" ? t("Quy tắc cộng: trừ phần chồng", "Addition rule: subtract the overlap") : mode === "and" ? t("Quy tắc nhân: cả hai cùng xảy ra", "Multiplication rule: both happen") : t("Bảng xác suất đồng thời", "The joint probability table"),
		onReset: () => {
			setA(40);
			setB(30);
			setAb(12);
		},
		onExtreme: () => setAb(0),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref,
				className: "h-52 w-full rounded-xl bg-paper"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: "P(A) %",
				min: 5,
				max: 90,
				step: 1,
				value: a,
				display: `${a}%`,
				onChange: setA
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: "P(B) %",
				min: 5,
				max: 90,
				step: 1,
				value: b,
				display: `${b}%`,
				onChange: setB
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t("P(A và B) %", "P(A and B) %"),
				min: lo,
				max: Math.max(lo, hi),
				step: 1,
				value: ab,
				display: `${ab}%`,
				onChange: setAb
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-1 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
					onClick: () => setAb(lo),
					children: t("Rời nhau", "Disjoint")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
					onClick: () => setAb(clamp(Math.round(a * b / 100), lo, hi)),
					children: t("Độc lập", "Independent")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm",
				children: mode === "or" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"P(A ",
					t("hoặc", "or"),
					" B) = ",
					a,
					" + ",
					b,
					" − ",
					ab,
					" = ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [union, "%"] })
				] }) : mode === "and" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"P(A ",
					t("và", "and"),
					" B) = P(A) × P(B | A) = ",
					a,
					"% × ",
					a ? (ab / a * 100).toFixed(0) : 0,
					"% = ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [ab, "%"] })
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"P(A ",
					t("và", "and"),
					" B) = ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [ab, "%"] }),
					" · P(A ",
					t("hoặc", "or"),
					" B) = ",
					union,
					"%"
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					"P(B | A) = ",
					a ? (ab / a * 100).toFixed(0) : 0,
					"% ",
					t("so với P(B)", "vs P(B)"),
					" = ",
					b,
					"%. ",
					indep ? t("Hai số gần bằng nhau: A và B độc lập.", "The two are about equal: A and B are independent.") : t("Hai số khác nhau: A và B không độc lập.", "The two differ: A and B are not independent."),
					" ",
					ab === 0 ? t("Chồng nhau bằng 0: rời nhau, nhưng rời nhau KHÔNG có nghĩa là độc lập.", "Overlap is 0: disjoint, but disjoint does NOT mean independent.") : ""
				]
			}),
			mode === "joint" || mode === "events" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "mt-2 w-full text-center text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "A" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: t("không A", "not A") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: t("Tổng", "Total") })
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-line",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "text-left text-muted",
								children: "B"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", { children: [ab, "%"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", { children: [bOnly, "%"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "font-medium",
								children: [b, "%"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-line",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "text-left text-muted",
								children: t("không B", "not B")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", { children: [aOnly, "%"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", { children: [neither, "%"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "font-medium",
								children: [100 - b, "%"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-line",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "text-left text-muted",
								children: t("Tổng", "Total")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "font-medium",
								children: [a, "%"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "font-medium",
								children: [100 - a, "%"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "100%" })
						]
					})
				] })]
			}) : null
		]
	});
}
function DiceLab({ mode }) {
	const t = useT();
	const [rolls, setRolls] = (0, import_react.useState)([]);
	const rng = (0, import_react.useRef)(mulberry32(17));
	const roll = (m) => setRolls((cur) => [...cur, ...Array.from({ length: m }, () => [1 + Math.floor(rng.current() * 6), 1 + Math.floor(rng.current() * 6)])].slice(-4e3));
	const counts = Array(13).fill(0);
	rolls.forEach(([x, y]) => counts[x + y] += 1);
	const mean = rolls.length ? rolls.reduce((s, [x, y]) => s + x + y, 0) / rolls.length : 0;
	const ref = useCanvas((ctx, w, h) => {
		const c = tone();
		ctx.clearRect(0, 0, w, h);
		const bw = (w - 36) / 11;
		const Y = (v) => h - 22 - v / .2 * (h - 44);
		ctx.strokeStyle = c.line;
		[
			0,
			.1,
			.2
		].forEach((v) => {
			ctx.beginPath();
			ctx.moveTo(30, Y(v));
			ctx.lineTo(w - 6, Y(v));
			ctx.stroke();
		});
		for (let s = 2; s <= 12; s++) {
			const x = 32 + (s - 2) * bw;
			const th = (6 - Math.abs(s - 7)) / 36;
			if (rolls.length) {
				ctx.fillStyle = c.accent;
				ctx.globalAlpha = .85;
				const fr = counts[s] / rolls.length;
				ctx.fillRect(x + 3, Y(fr), bw - 6, h - 22 - Y(fr));
				ctx.globalAlpha = 1;
			}
			ctx.strokeStyle = c.ink;
			ctx.strokeRect(x + 1, Y(th), bw - 2, h - 22 - Y(th));
		}
		if (rolls.length && mode === "ev") {
			const mx = 32 + (mean - 2) * bw + bw / 2;
			ctx.strokeStyle = c.good;
			ctx.lineWidth = 2;
			ctx.beginPath();
			ctx.moveTo(mx, 16);
			ctx.lineTo(mx, h - 22);
			ctx.stroke();
			ctx.lineWidth = 1;
		}
		yTicks(ctx, c, [
			0,
			.1,
			.2
		].map((v) => [Y(v), v.toFixed(1)]));
		caption(ctx, c, t("ngang: tổng hai xúc xắc X · cao: xác suất · khung: lý thuyết · cột: đã gieo", "x: total of two dice X · y: probability · outline: theory · bars: rolled"));
		xTicks(ctx, c, h, Array.from({ length: 11 }, (_, i) => [32 + i * bw + bw / 2, String(i + 2)]));
	}, [
		rolls,
		mode,
		t
	]);
	const last = rolls[rolls.length - 1];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: mode === "rv" ? t("Biến ngẫu nhiên: mỗi kết quả thành một con số", "Random variable: each outcome becomes a number") : t("Kỳ vọng: trung bình khi gieo rất nhiều lần", "Expected value: the average over very many rolls"),
		onReset: () => setRolls([]),
		onExtreme: () => roll(1e3),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref,
				className: "h-52 w-full rounded-xl bg-paper"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						solid: true,
						onClick: () => roll(1),
						children: t("Gieo 1 lần", "Roll once")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						onClick: () => roll(10),
						children: "+10"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						onClick: () => roll(100),
						children: "+100"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						onClick: () => roll(1e3),
						children: "+1000"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm",
				children: [
					last ? `${t("Lần gieo cuối", "Last roll")}: (${last[0]}, ${last[1]}) → X = ${last[0] + last[1]}. ` : t("Bấm gieo để bắt đầu. ", "Press roll to start. "),
					t("Đã gieo", "Rolled"),
					" ",
					rolls.length,
					" ",
					t("lần", "times"),
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: mode === "ev" ? `E[X] = Σ x·p(x) = 7. ${t("Trung bình đã gieo", "Average so far")}: ${rolls.length ? mean.toFixed(2) : "–"} (${t("đường xanh", "green line")}). ${t("Gieo ít thì lệch, gieo nhiều thì dần về 7.", "A few rolls wander; many rolls settle towards 7.")}` : t("X là quy tắc đổi cặp xúc xắc thành một con số. Cặp (1,1) cho X = 2 hiếm hơn nhiều so với X = 7 vì chỉ có 1 cặp so với 6 cặp.", "X is the rule that turns a pair of dice into one number. (1,1) gives X = 2, far rarer than X = 7 because there is 1 pair against 6.")
			})
		]
	});
}
var POP = 20;
function population() {
	const rng = mulberry32(11);
	const cells = [];
	for (let i = 0; i < POP; i++) for (let j = 0; j < POP; j++) cells.push(rng() < .12 + .5 * (1 - (i + j) / 38) ? 1 : 0);
	return cells;
}
var POPULATION = population();
var TRUE_RATE = POPULATION.reduce((s, v) => s + v, 0) / POPULATION.length;
function draw(method, n, seed) {
	const rng = mulberry32(seed * 977 + 3);
	const idx = Array.from({ length: 400 }, (_, i) => i);
	if (method === "random") {
		for (let i = idx.length - 1; i > 0; i--) {
			const j = Math.floor(rng() * (i + 1));
			[idx[i], idx[j]] = [idx[j], idx[i]];
		}
		return idx.slice(0, n);
	}
	if (method === "convenience") return idx.map((i) => ({
		i,
		key: Math.floor(i / POP) + i % POP + rng() * 3
	})).sort((p, q) => p.key - q.key).slice(0, n).map((o) => o.i);
	const step = Math.max(1, Math.floor(idx.length / n));
	const start = Math.floor(rng() * step);
	return idx.filter((i) => i >= start && (i - start) % step === 0).slice(0, n);
}
var estimate = (s) => s.length ? s.reduce((a, i) => a + POPULATION[i], 0) / s.length : 0;
function SampleLab({ start = "random" }) {
	const t = useT();
	const [method, setMethod] = (0, import_react.useState)(start);
	const [n, setN] = (0, import_react.useState)(40);
	const [seed, setSeed] = (0, import_react.useState)(1);
	const picked = (0, import_react.useMemo)(() => draw(method, n, seed), [
		method,
		n,
		seed
	]);
	const est = estimate(picked);
	const many = (0, import_react.useMemo)(() => Array.from({ length: 40 }, (_, k) => estimate(draw(method, n, 100 + k))), [method, n]);
	const set = (0, import_react.useMemo)(() => new Set(picked), [picked]);
	const gridRef = useCanvas((ctx, w, h) => {
		const c = tone();
		ctx.clearRect(0, 0, w, h);
		const size = Math.min(w, h - 16) / POP;
		const ox = (w - size * POP) / 2;
		POPULATION.forEach((v, i) => {
			const x = ox + i % POP * size + size / 2;
			const y = 8 + Math.floor(i / POP) * size + size / 2;
			ctx.fillStyle = v ? c.good : c.line;
			ctx.beginPath();
			ctx.arc(x, y, size * .32, 0, Math.PI * 2);
			ctx.fill();
			if (set.has(i)) {
				ctx.strokeStyle = c.accent;
				ctx.lineWidth = 2;
				ctx.beginPath();
				ctx.arc(x, y, size * .46, 0, Math.PI * 2);
				ctx.stroke();
				ctx.lineWidth = 1;
			}
		});
	}, [set]);
	const dotRef = useCanvas((ctx, w, h) => {
		const c = tone();
		ctx.clearRect(0, 0, w, h);
		const X = (v) => 12 + v * (w - 24);
		ctx.strokeStyle = c.line;
		ctx.beginPath();
		ctx.moveTo(12, h - 20);
		ctx.lineTo(w - 12, h - 20);
		ctx.stroke();
		ctx.strokeStyle = c.good;
		ctx.lineWidth = 2;
		ctx.beginPath();
		ctx.moveTo(X(TRUE_RATE), 16);
		ctx.lineTo(X(TRUE_RATE), h - 20);
		ctx.stroke();
		ctx.lineWidth = 1;
		const stack = /* @__PURE__ */ new Map();
		many.forEach((v) => {
			const bin = Math.round(v * 50);
			const k = stack.get(bin) ?? 0;
			stack.set(bin, k + 1);
			ctx.fillStyle = c.accent;
			ctx.beginPath();
			ctx.arc(X(bin / 50), h - 28 - k * 8, 3.4, 0, Math.PI * 2);
			ctx.fill();
		});
		caption(ctx, c, t("40 lần lấy mẫu: mỗi chấm là một kết quả · xanh: tỷ lệ thật", "40 draws: each dot is one result · green: the true rate"));
		xTicks(ctx, c, h, [
			0,
			.25,
			.5,
			.75,
			1
		].map((v) => [X(v), `${Math.round(v * 100)}%`]));
	}, [many, t]);
	const mean = many.reduce((s, v) => s + v, 0) / many.length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t("Lấy mẫu từ tổng thể 400 khách", "Sampling from a population of 400 customers"),
		onReset: () => {
			setMethod(start);
			setN(40);
			setSeed(1);
		},
		onExtreme: () => {
			setMethod("convenience");
			setN(40);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pills, {
				value: method,
				onChange: setMethod,
				items: [
					["random", t("Ngẫu nhiên", "Random")],
					["convenience", t("Tiện tay (góc đầu)", "Convenience (first ones)")],
					["systematic", t("Cách đều", "Systematic")]
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref: gridRef,
				className: "h-56 w-full rounded-xl bg-paper"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted",
				children: t("Chấm xanh = khách đồng ý (có), chấm xám = không. Vòng đỏ = khách được chọn vào mẫu.", "Green dot = customer says yes, grey = no. Red ring = picked into the sample.")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t("Cỡ mẫu n", "Sample size n"),
				min: 10,
				max: 200,
				step: 5,
				value: n,
				display: String(n),
				onChange: setN
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref: dotRef,
				className: "mt-2 h-36 w-full rounded-xl bg-paper"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm",
				children: [
					t("Tỷ lệ thật của cả 400", "True rate across all 400"),
					": ",
					(TRUE_RATE * 100).toFixed(1),
					"%. ",
					t("Mẫu này cho", "This sample gives"),
					" ",
					(est * 100).toFixed(1),
					"%. ",
					t("Trung bình 40 lần", "Average of 40 draws"),
					": ",
					(mean * 100).toFixed(1),
					"%."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: method === "convenience" ? t("Lấy những người gần nhất thì cả đám chấm lệch sang một bên, dù mẫu có lớn. Mẫu lớn không sửa được chọn sai.", "Taking whoever is closest shifts the whole cloud to one side, even for large samples. A bigger sample cannot repair a bad selection.") : t("Chọn ngẫu nhiên thì các chấm quây quanh giá trị thật. Mẫu càng lớn, đám chấm càng hẹp.", "With random selection the dots gather around the true value. The larger the sample, the narrower the cloud.")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-2 min-h-11 text-sm underline",
				onClick: () => setSeed((v) => v + 1),
				children: t("Lấy mẫu khác", "Draw another sample")
			})
		]
	});
}
function BayesLab() {
	const t = useT();
	const [prev, setPrev] = (0, import_react.useState)(5);
	const [sens, setSens] = (0, import_react.useState)(90);
	const [fpr, setFpr] = (0, import_react.useState)(8);
	const tp = 1e3 * (prev / 100) * (sens / 100);
	const fp = 1e3 * (1 - prev / 100) * (fpr / 100);
	const post = tp + fp ? tp / (tp + fp) : 0;
	const ref = useCanvas((ctx, w, h) => {
		const c = tone();
		ctx.clearRect(0, 0, w, h);
		const W = w - 20;
		const X = (v) => 10 + v / 1e3 * W;
		const sick = 1e3 * (prev / 100);
		const row = (y, parts, label) => {
			let at = 0;
			ctx.fillStyle = c.muted;
			ctx.font = "11px Outfit, sans-serif";
			ctx.textAlign = "left";
			ctx.fillText(label, 10, y - 5);
			parts.forEach(([v, col, al]) => {
				ctx.fillStyle = col;
				ctx.globalAlpha = al;
				ctx.fillRect(X(at), y, X(v) - X(0), 30);
				ctx.globalAlpha = 1;
				at += v;
			});
		};
		row(48, [[
			sick,
			c.accent,
			.9
		], [
			1e3 - sick,
			c.line,
			1
		]], t("1000 khách: đỏ = thật sự sắp rời", "1000 customers: red = really about to leave"));
		row(112, [[
			tp,
			c.accent,
			.9
		], [
			fp,
			c.ink,
			.35
		]], t("Chỉ những người bị cảnh báo: đỏ = đúng, xám = báo nhầm", "Only those flagged: red = correct, grey = false alarm"));
		caption(ctx, c, t("độ dài = số khách trên 1000", "length = customers out of 1000"));
		xTicks(ctx, c, h, [
			0,
			250,
			500,
			750,
			1e3
		].map((v) => [X(v), String(v)]));
	}, [
		prev,
		tp,
		fp,
		t
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t("Bayes: cảnh báo xong, khả năng thật là bao nhiêu", "Bayes: after an alert, how likely is it really"),
		onReset: () => {
			setPrev(5);
			setSens(90);
			setFpr(8);
		},
		onExtreme: () => setPrev(prev > 10 ? 1 : 40),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref,
				className: "h-44 w-full rounded-xl bg-paper"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t("Tỷ lệ khách sắp rời (xác suất ban đầu)", "Share of customers about to leave (prior)"),
				min: 1,
				max: 50,
				step: 1,
				value: prev,
				display: `${prev}%`,
				onChange: setPrev
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t("Bắt đúng người sắp rời", "Catches those really leaving"),
				min: 50,
				max: 99,
				step: 1,
				value: sens,
				display: `${sens}%`,
				onChange: setSens
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t("Báo nhầm người ở lại", "Falsely flags those staying"),
				min: 1,
				max: 30,
				step: 1,
				value: fpr,
				display: `${fpr}%`,
				onChange: setFpr
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm",
				children: [
					t("Trên 1000 khách", "Out of 1000 customers"),
					": ",
					tp.toFixed(0),
					" ",
					t("báo đúng", "flagged correctly"),
					" + ",
					fp.toFixed(0),
					" ",
					t("báo nhầm", "flagged wrongly"),
					". P(",
					t("rời", "leaving"),
					" | ",
					t("bị cảnh báo", "flagged"),
					") = ",
					tp.toFixed(0),
					"/",
					(tp + fp).toFixed(0),
					" = ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [(post * 100).toFixed(0), "%"] }),
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: t("Kéo tỷ lệ ban đầu xuống thấp: số báo nhầm áp đảo, dù công cụ bắt đúng 90%. Đó là lý do xác suất ban đầu phải đi vào phép tính.", "Pull the prior down: false alarms swamp the correct ones even though the tool catches 90%. That is why the prior must enter the calculation.")
			})
		]
	});
}
var ML_RNG = mulberry32(23);
var ML_POINTS = Array.from({ length: 80 }, () => {
	const x = ML_RNG() * 10;
	return {
		x,
		y: 10 + 6 * x + gauss(ML_RNG) * 9
	};
});
var ML_TEST = Array.from({ length: 200 }, () => {
	const x = ML_RNG() * 10;
	return {
		x,
		y: 10 + 6 * x + gauss(ML_RNG) * 9
	};
});
function MlLab() {
	const t = useT();
	const [n, setN] = (0, import_react.useState)(4);
	const fit = (0, import_react.useMemo)(() => {
		const pts = ML_POINTS.slice(0, n);
		const mean = pts.reduce((s, p) => s + p.y, 0) / n;
		const r = ols(pts.map((p) => [1, p.x]), pts.map((p) => p.y));
		const rmse = (f) => Math.sqrt(ML_TEST.reduce((s, p) => s + (p.y - f(p.x)) ** 2, 0) / ML_TEST.length);
		return {
			b0: r.beta[0],
			b1: r.beta[1],
			err: rmse((x) => r.beta[0] + r.beta[1] * x),
			base: rmse(() => mean)
		};
	}, [n]);
	const ref = useCanvas((ctx, w, h) => {
		const c = tone();
		ctx.clearRect(0, 0, w, h);
		const X = (v) => 34 + v / 10 * (w - 44);
		const Y = (v) => h - 22 - v / 100 * (h - 44);
		ctx.strokeStyle = c.good;
		ctx.setLineDash([5, 4]);
		ctx.beginPath();
		ctx.moveTo(X(0), Y(10));
		ctx.lineTo(X(10), Y(70));
		ctx.stroke();
		ctx.setLineDash([]);
		ML_POINTS.slice(0, n).forEach((p) => {
			ctx.fillStyle = c.ink;
			ctx.beginPath();
			ctx.arc(X(p.x), Y(p.y), 3.4, 0, Math.PI * 2);
			ctx.fill();
		});
		ctx.strokeStyle = c.accent;
		ctx.lineWidth = 2;
		ctx.beginPath();
		ctx.moveTo(X(0), Y(fit.b0));
		ctx.lineTo(X(10), Y(fit.b0 + fit.b1 * 10));
		ctx.stroke();
		ctx.lineWidth = 1;
		yTicks(ctx, c, [
			0,
			50,
			100
		].map((v) => [Y(v), String(v)]));
		caption(ctx, c, t("ngang: chi tiêu · dọc: số form · xanh nét đứt: quy luật thật (máy không biết)", "x: spend · y: forms · dashed green: the true rule (the machine does not know it)"));
		xTicks(ctx, c, h, [
			0,
			5,
			10
		].map((v) => [X(v), String(v)]));
	}, [
		n,
		fit,
		t
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t("Học máy: tìm quy luật từ ví dụ", "Machine learning: finding the rule from examples"),
		onReset: () => setN(4),
		onExtreme: () => setN(n < 30 ? 80 : 3),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref,
				className: "h-52 w-full rounded-xl bg-paper"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t("Số ví dụ để học", "Training examples"),
				min: 3,
				max: 80,
				step: 1,
				value: n,
				display: String(n),
				onChange: setN
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm",
				children: [
					t("Đường đỏ do máy tìm từ", "The red line was found from"),
					" ",
					n,
					" ",
					t("điểm", "points"),
					": forms ≈ ",
					fit.b0.toFixed(1),
					" + ",
					fit.b1.toFixed(1),
					" × spend."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm",
				children: [
					t("Sai số trên 200 khách mới", "Error on 200 new customers"),
					": ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: fit.err.toFixed(1) }),
					" ",
					t("so với chỉ đoán trung bình", "versus always guessing the average"),
					": ",
					fit.base.toFixed(1),
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: t("Càng nhiều ví dụ, đường đỏ càng gần quy luật thật và sai số trên dữ liệu mới càng thấp. Đó là toàn bộ ý của 'học'.", "With more examples the red line approaches the true rule and the error on new data shrinks. That is all 'learning' means here.")
			})
		]
	});
}
function AssumeLab() {
	const t = useT();
	const [shape, setShape] = (0, import_react.useState)("ok");
	const data = (0, import_react.useMemo)(() => {
		const rng = mulberry32(31);
		const pts = Array.from({ length: 60 }, () => {
			const x = rng() * 10;
			const noise = gauss(rng);
			return {
				x,
				y: shape === "curve" ? 5 + .9 * (x - 5) ** 2 + noise * 1.2 : shape === "funnel" ? 10 + 3 * x + noise * (.4 + x * .55) : 10 + 3 * x + noise * 2
			};
		});
		const r = ols(pts.map((p) => [1, p.x]), pts.map((p) => p.y));
		return {
			pts,
			b0: r.beta[0],
			b1: r.beta[1]
		};
	}, [shape]);
	const ref = useCanvas((ctx, w, h) => {
		const c = tone();
		ctx.clearRect(0, 0, w, h);
		const half = w / 2;
		const ys = data.pts.map((p) => p.y);
		const lo = Math.min(...ys);
		const hi = Math.max(...ys);
		const res = data.pts.map((p) => p.y - (data.b0 + data.b1 * p.x));
		const rm = Math.max(...res.map(Math.abs)) * 1.1 || 1;
		const X = (v) => 10 + v / 10 * (half - 24);
		const Y = (v) => h - 22 - (v - lo) / (hi - lo || 1) * (h - 50);
		data.pts.forEach((p) => {
			ctx.fillStyle = c.ink;
			ctx.beginPath();
			ctx.arc(X(p.x), Y(p.y), 2.8, 0, Math.PI * 2);
			ctx.fill();
		});
		ctx.strokeStyle = c.accent;
		ctx.lineWidth = 2;
		ctx.beginPath();
		ctx.moveTo(X(0), Y(data.b0));
		ctx.lineTo(X(10), Y(data.b0 + data.b1 * 10));
		ctx.stroke();
		ctx.lineWidth = 1;
		const RX = (v) => half + 14 + v / 10 * (half - 24);
		const RY = (v) => h / 2 - v / rm * ((h - 50) / 2) + 2;
		ctx.strokeStyle = c.line;
		ctx.beginPath();
		ctx.moveTo(half + 8, RY(0));
		ctx.lineTo(w - 6, RY(0));
		ctx.stroke();
		data.pts.forEach((p, i) => {
			ctx.fillStyle = c.accent;
			ctx.beginPath();
			ctx.arc(RX(p.x), RY(res[i]), 2.8, 0, Math.PI * 2);
			ctx.fill();
		});
		ctx.fillStyle = c.muted;
		ctx.font = "11px Outfit, sans-serif";
		ctx.textAlign = "left";
		ctx.fillText(t("trái: dữ liệu + đường", "left: data + line"), 6, 12);
		ctx.fillText(t("phải: phần dư (điểm − đường)", "right: residuals (point − line)"), half + 8, 12);
		ctx.fillText("0", half + 2, RY(0) + 4);
		xTicks(ctx, c, h, [
			[X(0), "0"],
			[X(5), "5"],
			[X(10), "10"],
			[RX(0), "0"],
			[RX(5), "5"],
			[RX(10), "10"]
		]);
	}, [data, t]);
	const diag = {
		ok: t("Phần dư rải ngẫu nhiên quanh 0, bề rộng đều. Giả định ổn.", "Residuals scatter randomly around 0 with an even band. The assumptions hold."),
		curve: t("Phần dư cong thành hình chữ U: đường thẳng bỏ sót một đường cong. Quan hệ không tuyến tính.", "Residuals bend into a U: the straight line misses a curve. The relationship is not linear."),
		funnel: t("Phần dư xoè rộng như cái phễu: độ nhiễu tăng theo x. Phương sai không đều, khoảng tin cậy sẽ sai.", "Residuals fan out like a funnel: the noise grows with x. Variance is not constant, so intervals will be wrong.")
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t("Nhìn phần dư để kiểm giả định", "Check the assumptions by looking at the residuals"),
		onReset: () => setShape("ok"),
		onExtreme: () => setShape(shape === "ok" ? "funnel" : "ok"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pills, {
				value: shape,
				onChange: setShape,
				items: [
					["ok", t("Dữ liệu ổn", "Healthy data")],
					["curve", t("Quan hệ cong", "Curved relation")],
					["funnel", t("Nhiễu tăng dần", "Growing noise")]
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref,
				className: "h-52 w-full rounded-xl bg-paper"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm",
				children: diag[shape]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: t("R² có thể vẫn cao ở cả ba trường hợp. Chỉ biểu đồ phần dư mới cho thấy đường thẳng đang sai ở đâu.", "R² can still be high in all three cases. Only the residual plot shows where the straight line goes wrong.")
			})
		]
	});
}
function MlrWhyLab({ held = false }) {
	const t = useT();
	const [rho, setRho] = (0, import_react.useState)(.7);
	const res = (0, import_react.useMemo)(() => {
		const rng = mulberry32(5);
		const rows = Array.from({ length: 300 }, () => {
			const a = gauss(rng);
			const z = gauss(rng);
			const x1 = a;
			const x2 = rho * a + Math.sqrt(1 - rho * rho) * z;
			return {
				x1,
				x2,
				y: 3 * x1 + 5 * x2 + gauss(rng) * 2
			};
		});
		const simple = ols(rows.map((r) => [1, r.x1]), rows.map((r) => r.y));
		const both = ols(rows.map((r) => [
			1,
			r.x1,
			r.x2
		]), rows.map((r) => r.y));
		return {
			simple: simple.beta[1],
			both: both.beta[1],
			b2: both.beta[2],
			r2s: simple.r2,
			r2b: both.r2
		};
	}, [rho]);
	const ref = useCanvas((ctx, w, h) => {
		const c = tone();
		ctx.clearRect(0, 0, w, h);
		const bars = [
			[
				t("Hệ số thật của x1", "True effect of x1"),
				3,
				c.good
			],
			[
				t("Chỉ có x1 trong mô hình", "Only x1 in the model"),
				res.simple,
				c.ink
			],
			[
				t("Có cả x1 và x2", "Both x1 and x2"),
				res.both,
				c.accent
			]
		];
		const max = 9;
		const bw = (w - 30) / bars.length;
		const Y = (v) => h - 34 - v / max * (h - 62);
		ctx.strokeStyle = c.line;
		[
			0,
			3,
			6,
			9
		].forEach((v) => {
			ctx.beginPath();
			ctx.moveTo(26, Y(v));
			ctx.lineTo(w - 4, Y(v));
			ctx.stroke();
		});
		bars.forEach(([label, v, col], i) => {
			const x = 28 + i * bw;
			ctx.fillStyle = col;
			ctx.globalAlpha = .85;
			ctx.fillRect(x + 8, Y(v), bw - 16, h - 34 - Y(v));
			ctx.globalAlpha = 1;
			ctx.fillStyle = c.ink;
			ctx.font = "12px Outfit, sans-serif";
			ctx.textAlign = "center";
			ctx.fillText(v.toFixed(2), x + bw / 2, Y(v) - 5);
			ctx.fillStyle = c.muted;
			ctx.font = "10.5px Outfit, sans-serif";
			ctx.fillText(label, x + bw / 2, h - 18);
		});
		ctx.textAlign = "left";
		yTicks(ctx, c, [
			0,
			3,
			6,
			9
		].map((v) => [Y(v), String(v)]));
		caption(ctx, c, t("cột cao = hệ số mà mô hình gán cho x1 (mỗi +1 x1, y đổi bao nhiêu)", "bar height = the coefficient the model gives x1 (change in y per +1 of x1)"));
	}, [res, t]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: held ? t("Hệ số = tác động khi giữ biến kia cố định", "Coefficient = effect while the other variable is held fixed") : t("Vì sao thêm biến thứ hai", "Why add a second variable"),
		onReset: () => setRho(.7),
		onExtreme: () => setRho(rho > .4 ? 0 : .95),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref,
				className: "h-52 w-full rounded-xl bg-paper"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t("x1 và x2 đi cùng nhau mạnh cỡ nào (tương quan)", "How strongly x1 and x2 move together (correlation)"),
				min: 0,
				max: .95,
				step: .05,
				value: rho,
				display: rho.toFixed(2),
				onChange: setRho
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm",
				children: [
					t("Thật ra y = 3·x1 + 5·x2 + nhiễu. Bỏ x2 ra, x1 gánh luôn phần của x2:", "In truth y = 3·x1 + 5·x2 + noise. Drop x2 and x1 absorbs part of x2's effect:"),
					" ",
					res.simple.toFixed(2),
					". ",
					t("Thêm x2, hệ số x1 về", "Add x2 and the x1 coefficient returns to"),
					" ",
					res.both.toFixed(2),
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm text-muted",
				children: [
					"R²: ",
					res.r2s.toFixed(2),
					" → ",
					res.r2b.toFixed(2),
					". ",
					t("Khi tương quan bằng 0 thì bỏ x2 cũng không sao. Càng đi cùng nhau, bỏ x2 càng làm hệ số x1 sai.", "When the correlation is 0, leaving x2 out does little harm. The more they move together, the more leaving x2 out distorts x1's coefficient.")
				]
			})
		]
	});
}
function VifLab() {
	const t = useT();
	const [r, setR] = (0, import_react.useState)(.6);
	const vif = 1 / (1 - r * r);
	const ref = useCanvas((ctx, w, h) => {
		const c = tone();
		ctx.clearRect(0, 0, w, h);
		const half = w * .42;
		const rng = mulberry32(9);
		ctx.strokeStyle = c.line;
		ctx.strokeRect(8, 20, half - 14, h - 44);
		for (let i = 0; i < 70; i++) {
			const a = gauss(rng);
			const b = r * a + Math.sqrt(1 - r * r) * gauss(rng);
			const px = 8 + (half - 14) / 2 + a / 3.2 * ((half - 14) / 2);
			const py = 20 + (h - 44) / 2 - b / 3.2 * ((h - 44) / 2);
			ctx.fillStyle = c.ink;
			ctx.beginPath();
			ctx.arc(clamp(px, 10, half - 8), clamp(py, 22, h - 26), 2.6, 0, Math.PI * 2);
			ctx.fill();
		}
		const left = half + 36;
		const X = (v) => left + v * (w - left - 10);
		const Y = (v) => h - 22 - Math.min(v, 25) / 25 * (h - 44);
		ctx.strokeStyle = c.line;
		[5, 10].forEach((v) => {
			ctx.setLineDash([4, 4]);
			ctx.beginPath();
			ctx.moveTo(left, Y(v));
			ctx.lineTo(w - 10, Y(v));
			ctx.stroke();
			ctx.setLineDash([]);
		});
		ctx.strokeStyle = c.ink;
		ctx.beginPath();
		for (let i = 0; i <= 98; i++) {
			const rv = i / 100;
			const px = X(rv);
			const py = Y(1 / (1 - rv * rv));
			if (i === 0) ctx.moveTo(px, py);
			else ctx.lineTo(px, py);
		}
		ctx.stroke();
		ctx.fillStyle = c.accent;
		ctx.beginPath();
		ctx.arc(X(r), Y(vif), 6, 0, Math.PI * 2);
		ctx.fill();
		yTicks(ctx, c, [
			1,
			5,
			10,
			25
		].map((v) => [Y(v), String(v)]), half + 6);
		ctx.fillStyle = c.muted;
		ctx.font = "11px Outfit, sans-serif";
		ctx.textAlign = "left";
		ctx.fillText(t("x1 (ngang) với x2 (dọc)", "x1 (across) vs x2 (up)"), 10, 13);
		ctx.fillText(t("VIF theo tương quan r", "VIF vs correlation r"), left, 13);
		xTicks(ctx, c, h, [
			0,
			.5,
			1
		].map((v) => [X(v), String(v)]));
	}, [
		r,
		vif,
		t
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t("VIF: hai biến đi cùng nhau thì phình sai số", "VIF: when two variables move together, the error balloons"),
		onReset: () => setR(.6),
		onExtreme: () => setR(r > .8 ? 0 : .97),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref,
				className: "h-52 w-full rounded-xl bg-paper"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t("Tương quan giữa x1 và x2", "Correlation between x1 and x2"),
				min: 0,
				max: .98,
				step: .01,
				value: r,
				display: r.toFixed(2),
				onChange: setR
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm",
				children: [
					"VIF = 1/(1 − r²) = ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: vif.toFixed(1) }),
					". ",
					t("Sai số chuẩn của hệ số nhân lên", "The coefficient's standard error is multiplied by"),
					" √VIF = ",
					Math.sqrt(vif).toFixed(2),
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm text-muted",
				children: [
					vif >= 10 ? t("Trên 10: hai biến gần như là một. Mô hình không biết chia công cho ai, hệ số lung lay.", "Above 10: the two variables are almost one. The model cannot tell whom to credit, so the coefficients wobble.") : vif >= 5 ? t("Quanh 5: bắt đầu đáng lo.", "Around 5: starting to worry.") : t("Dưới 5: không sao.", "Below 5: fine."),
					" ",
					t("Các điểm càng dồn lên một đường chéo thì VIF càng cao.", "The more the points squeeze onto a diagonal, the higher the VIF.")
				]
			})
		]
	});
}
function DummyLab() {
	const t = useT();
	const groups = [
		"GDN",
		"Meta",
		"TikTok"
	];
	const base = [
		20,
		32,
		13
	];
	const [ref0, setRef0] = (0, import_react.useState)(0);
	const pts = (0, import_react.useMemo)(() => {
		const rng = mulberry32(3);
		return groups.map((_, g) => Array.from({ length: 12 }, () => base[g] + gauss(rng) * 3.5));
	}, []);
	const means = pts.map((p) => p.reduce((s, v) => s + v, 0) / p.length);
	const canvasRef = useCanvas((ctx, w, h) => {
		const c = tone();
		ctx.clearRect(0, 0, w, h);
		const Y = (v) => h - 22 - v / 45 * (h - 44);
		const colW = (w - 40) / 3;
		ctx.strokeStyle = c.line;
		[
			0,
			15,
			30,
			45
		].forEach((v) => {
			ctx.beginPath();
			ctx.moveTo(30, Y(v));
			ctx.lineTo(w - 6, Y(v));
			ctx.stroke();
		});
		ctx.strokeStyle = c.good;
		ctx.setLineDash([5, 4]);
		ctx.beginPath();
		ctx.moveTo(30, Y(means[ref0]));
		ctx.lineTo(w - 6, Y(means[ref0]));
		ctx.stroke();
		ctx.setLineDash([]);
		pts.forEach((p, g) => {
			const cx = 34 + g * colW + colW / 2;
			p.forEach((v, i) => {
				ctx.fillStyle = g === ref0 ? c.good : c.ink;
				ctx.globalAlpha = .55;
				ctx.beginPath();
				ctx.arc(cx + (i % 6 - 2.5) * 9, Y(v), 3.2, 0, Math.PI * 2);
				ctx.fill();
				ctx.globalAlpha = 1;
			});
			ctx.strokeStyle = c.accent;
			ctx.lineWidth = 3;
			ctx.beginPath();
			ctx.moveTo(cx - 34, Y(means[g]));
			ctx.lineTo(cx + 34, Y(means[g]));
			ctx.stroke();
			ctx.lineWidth = 1;
		});
		yTicks(ctx, c, [
			0,
			15,
			30,
			45
		].map((v) => [Y(v), String(v)]));
		caption(ctx, c, t("mỗi chấm là một tuần · gạch đỏ: trung bình nhóm · nét đứt: nhóm gốc", "each dot is a week · red bar: group mean · dashed: the baseline group"));
		xTicks(ctx, c, h, groups.map((g, i) => [34 + i * colW + colW / 2, g]));
	}, [
		ref0,
		pts,
		means,
		t
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t("Biến giả: một nhóm làm gốc, các nhóm còn lại là độ lệch", "Dummy variables: one group is the baseline, the others are offsets"),
		onReset: () => setRef0(0),
		onExtreme: () => setRef0((ref0 + 1) % 3),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pills, {
				value: String(ref0),
				onChange: (v) => setRef0(Number(v)),
				items: groups.map((g, i) => [String(i), `${t("Gốc", "Baseline")}: ${g}`])
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref: canvasRef,
				className: "h-52 w-full rounded-xl bg-paper"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "mt-2 w-full text-left text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: t("Số hạng", "Term") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: t("Giá trị", "Value") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: t("Nghĩa là", "Meaning") })
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-t border-line",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: t("Chặn", "Intercept") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: means[ref0].toFixed(1) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: t(`trung bình của ${groups[ref0]}`, `mean of ${groups[ref0]}`) })
					]
				}), groups.map((g, i) => i === ref0 ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-t border-line",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", { children: ["is_", g] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: (means[i] - means[ref0]).toFixed(1) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: t(`${g} hơn ${groups[ref0]} chừng này`, `${g} minus ${groups[ref0]}`) })
					]
				}, g))] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: t("Ba nhóm chỉ cần hai cột 0/1. Nhóm bị bỏ ra là nhóm gốc, và mọi hệ số đều đọc so với nó. Đổi nhóm gốc thì con số đổi, nhưng chênh lệch giữa các nhóm thì không.", "Three groups need only two 0/1 columns. The omitted group is the baseline and every coefficient is read against it. Change the baseline and the numbers change, but the gaps between groups do not.")
			})
		]
	});
}
function SelectLab() {
	const t = useT();
	const [k, setK] = (0, import_react.useState)(2);
	const rows = (0, import_react.useMemo)(() => {
		const rng = mulberry32(77);
		const n = 40;
		const cols = Array.from({ length: 12 }, () => Array.from({ length: n }, () => gauss(rng)));
		const y = Array.from({ length: n }, (_, i) => 2 * cols[0][i] + 1.5 * cols[1][i] + gauss(rng) * 2);
		return Array.from({ length: 12 }, (_, i) => {
			const m = i + 1;
			const r = ols(Array.from({ length: n }, (_, row) => [1, ...cols.slice(0, m).map((c) => c[row])]), y);
			return {
				r2: r.r2,
				adj: 1 - (1 - r.r2) * 39 / (n - m - 1)
			};
		});
	}, []);
	const ref = useCanvas((ctx, w, h) => {
		const c = tone();
		ctx.clearRect(0, 0, w, h);
		const X = (i) => 34 + (i - 1) / 11 * (w - 48);
		const Y = (v) => h - 24 - clamp(v, 0, 1) * (h - 46);
		ctx.strokeStyle = c.line;
		[
			0,
			.5,
			1
		].forEach((v) => {
			ctx.beginPath();
			ctx.moveTo(30, Y(v));
			ctx.lineTo(w - 6, Y(v));
			ctx.stroke();
		});
		const line = (key, col) => {
			ctx.strokeStyle = col;
			ctx.lineWidth = 2;
			ctx.beginPath();
			rows.forEach((r, i) => i === 0 ? ctx.moveTo(X(i + 1), Y(r[key])) : ctx.lineTo(X(i + 1), Y(r[key])));
			ctx.stroke();
			ctx.lineWidth = 1;
			ctx.fillStyle = col;
			ctx.beginPath();
			ctx.arc(X(k), Y(rows[k - 1][key]), 5, 0, Math.PI * 2);
			ctx.fill();
		};
		line("r2", c.ink);
		line("adj", c.accent);
		ctx.setLineDash([4, 4]);
		ctx.strokeStyle = c.good;
		ctx.beginPath();
		ctx.moveTo(X(2), 16);
		ctx.lineTo(X(2), h - 24);
		ctx.stroke();
		ctx.setLineDash([]);
		yTicks(ctx, c, [
			0,
			.5,
			1
		].map((v) => [Y(v), v.toFixed(1)]));
		caption(ctx, c, t("ngang: số biến trong mô hình · đen: R² · đỏ: R² hiệu chỉnh · xanh: 2 biến thật", "x: variables in the model · black: R² · red: adjusted R² · green: the 2 real ones"));
		xTicks(ctx, c, h, Array.from({ length: 12 }, (_, i) => [X(i + 1), String(i + 1)]));
	}, [
		rows,
		k,
		t
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t("Thêm biến: R² luôn tăng, R² hiệu chỉnh thì không", "Adding variables: R² always rises, adjusted R² does not"),
		onReset: () => setK(2),
		onExtreme: () => setK(12),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref,
				className: "h-52 w-full rounded-xl bg-paper"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t("Số biến đưa vào", "Variables included"),
				min: 1,
				max: 12,
				step: 1,
				value: k,
				display: String(k),
				onChange: setK
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm",
				children: [
					"R² = ",
					rows[k - 1].r2.toFixed(3),
					" · ",
					t("R² hiệu chỉnh", "adjusted R²"),
					" = ",
					rows[k - 1].adj.toFixed(3)
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: t("Chỉ 2 biến đầu là thật; từ biến thứ 3 trở đi là số ngẫu nhiên. R² vẫn nhích lên vì thêm biến nào cũng khớp thêm chút nhiễu. R² hiệu chỉnh phạt việc thêm biến vô ích nên đi ngang rồi tụt xuống.", "Only the first 2 variables are real; from the 3rd on they are random numbers. R² still creeps up because any extra variable fits a bit more noise. Adjusted R² penalises useless variables, so it flattens and then falls.")
			})
		]
	});
}
function fitLogistic(pts) {
	let b0 = 0;
	let b1 = 0;
	for (let it = 0; it < 400; it++) {
		let g0 = 0;
		let g1 = 0;
		for (const p of pts) {
			const pr = 1 / (1 + Math.exp(-(b0 + b1 * p.x)));
			g0 += pr - p.y;
			g1 += (pr - p.y) * p.x;
		}
		b0 -= .5 * g0 / pts.length;
		b1 -= .5 * g1 / pts.length;
	}
	return {
		b0,
		b1
	};
}
var LOGIT_PTS = (() => {
	const rng = mulberry32(14);
	return Array.from({ length: 36 }, () => {
		const x = rng() * 10;
		return {
			x,
			y: rng() < 1 / (1 + Math.exp(-(x - 5) * 1.1)) ? 1 : 0
		};
	});
})();
function WhyLogitLab() {
	const t = useT();
	const [x0, setX0] = (0, import_react.useState)(9.5);
	const m = (0, import_react.useMemo)(() => {
		return {
			lin: (() => {
				const r = ols(LOGIT_PTS.map((p) => [1, p.x]), LOGIT_PTS.map((p) => p.y));
				return {
					b0: r.beta[0],
					b1: r.beta[1]
				};
			})(),
			log: fitLogistic(LOGIT_PTS)
		};
	}, []);
	const linAt = (x) => m.lin.b0 + m.lin.b1 * x;
	const logAt = (x) => 1 / (1 + Math.exp(-(m.log.b0 + m.log.b1 * x)));
	const ref = useCanvas((ctx, w, h) => {
		const c = tone();
		ctx.clearRect(0, 0, w, h);
		const X = (v) => 34 + v / 12 * (w - 44);
		const Y = (v) => h - 24 - (v + .4) / 1.8 * (h - 46);
		ctx.strokeStyle = c.line;
		[0, 1].forEach((v) => {
			ctx.beginPath();
			ctx.moveTo(30, Y(v));
			ctx.lineTo(w - 6, Y(v));
			ctx.stroke();
		});
		LOGIT_PTS.forEach((p) => {
			ctx.fillStyle = c.ink;
			ctx.globalAlpha = .55;
			ctx.beginPath();
			ctx.arc(X(p.x), Y(p.y), 3.4, 0, Math.PI * 2);
			ctx.fill();
			ctx.globalAlpha = 1;
		});
		const plot = (f, col) => {
			ctx.strokeStyle = col;
			ctx.lineWidth = 2;
			ctx.beginPath();
			for (let i = 0; i <= 120; i++) {
				const v = i / 120 * 12;
				if (i === 0) ctx.moveTo(X(v), Y(f(v)));
				else ctx.lineTo(X(v), Y(f(v)));
			}
			ctx.stroke();
			ctx.lineWidth = 1;
		};
		plot(linAt, c.ink);
		plot(logAt, c.accent);
		ctx.setLineDash([4, 4]);
		ctx.strokeStyle = c.good;
		ctx.beginPath();
		ctx.moveTo(X(x0), 16);
		ctx.lineTo(X(x0), h - 24);
		ctx.stroke();
		ctx.setLineDash([]);
		yTicks(ctx, c, [
			[Y(0), "0"],
			[Y(1), "1"],
			[Y(-.3), "-0.3"],
			[Y(1.3), "1.3"]
		]);
		caption(ctx, c, t("chấm: 0 = ở lại, 1 = rời · đen: đường thẳng · đỏ: đường sigmoid", "dots: 0 = stays, 1 = leaves · black: straight line · red: sigmoid"));
		xTicks(ctx, c, h, [
			0,
			4,
			8,
			12
		].map((v) => [X(v), String(v)]));
	}, [
		x0,
		m,
		t
	]);
	const lv = linAt(x0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t("Vì sao không dùng đường thẳng cho câu hỏi có/không", "Why a straight line fails for yes/no questions"),
		onReset: () => setX0(9.5),
		onExtreme: () => setX0(x0 < 6 ? 12 : 0),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref,
				className: "h-52 w-full rounded-xl bg-paper"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t("Khách mới có x =", "A new customer with x ="),
				min: 0,
				max: 12,
				step: .5,
				value: x0,
				display: x0.toFixed(1),
				onChange: setX0
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm",
				children: [
					t("Đường thẳng đoán", "The straight line predicts"),
					": ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: lv.toFixed(2) }),
					" ",
					lv > 1 || lv < 0 ? t("(không thể là xác suất!)", "(cannot be a probability!)") : "",
					" · ",
					t("sigmoid đoán", "the sigmoid predicts"),
					": ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: logAt(x0).toFixed(2) })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: t("Kéo x ra hai đầu: đường thẳng chui ra ngoài khoảng 0 đến 1, còn sigmoid luôn nằm trong đó. Đó là lý do hồi quy logistic uốn đường thẳng thành chữ S.", "Drag x towards either end: the line escapes the 0 to 1 range, while the sigmoid always stays inside. That is why logistic regression bends the line into an S.")
			})
		]
	});
}
function OvrLab() {
	const t = useT();
	const [x, setX] = (0, import_react.useState)(4);
	const labels = [
		t("đặt liệu trình", "book a treatment"),
		t("mua sản phẩm", "buy a product"),
		t("chỉ xem", "only browse")
	];
	const sig = (v) => 1 / (1 + Math.exp(-v));
	const fs = [
		(v) => sig(-3.2 + .75 * v),
		(v) => sig(2.2 - .3 * v) * .85,
		(v) => sig(3 - .8 * v)
	];
	const ps = fs.map((f) => f(x));
	const best = ps.indexOf(Math.max(...ps));
	const cols = (c) => [
		c.accent,
		c.good,
		c.ink
	];
	const ref = useCanvas((ctx, w, h) => {
		const c = tone();
		ctx.clearRect(0, 0, w, h);
		const X = (v) => 34 + v / 10 * (w - 44);
		const Y = (v) => h - 24 - v * (h - 46);
		ctx.strokeStyle = c.line;
		[
			0,
			.5,
			1
		].forEach((v) => {
			ctx.beginPath();
			ctx.moveTo(30, Y(v));
			ctx.lineTo(w - 6, Y(v));
			ctx.stroke();
		});
		fs.forEach((f, k) => {
			ctx.strokeStyle = cols(c)[k];
			ctx.lineWidth = k === best ? 3 : 1.6;
			ctx.beginPath();
			for (let i = 0; i <= 100; i++) {
				const v = i / 10;
				if (i === 0) ctx.moveTo(X(v), Y(f(v)));
				else ctx.lineTo(X(v), Y(f(v)));
			}
			ctx.stroke();
			ctx.fillStyle = cols(c)[k];
			ctx.beginPath();
			ctx.arc(X(x), Y(f(x)), 5, 0, Math.PI * 2);
			ctx.fill();
		});
		ctx.lineWidth = 1;
		ctx.setLineDash([4, 4]);
		ctx.strokeStyle = c.muted;
		ctx.beginPath();
		ctx.moveTo(X(x), 16);
		ctx.lineTo(X(x), h - 24);
		ctx.stroke();
		ctx.setLineDash([]);
		yTicks(ctx, c, [
			0,
			.5,
			1
		].map((v) => [Y(v), String(v)]));
		caption(ctx, c, t("ngang: số lần ghé x · dọc: xác suất của từng đường (mỗi nhãn một đường)", "x: number of visits · y: probability from each curve (one curve per label)"));
		xTicks(ctx, c, h, [
			0,
			2,
			4,
			6,
			8,
			10
		].map((v) => [X(v), String(v)]));
	}, [x, t]);
	const total = ps.reduce((s, v) => s + v, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t("Nhiều nhãn: mỗi nhãn một đường cong", "Many labels: one curve per label"),
		onReset: () => setX(4),
		onExtreme: () => setX(x < 5 ? 9 : 1),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref,
				className: "h-52 w-full rounded-xl bg-paper"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t("Số lần ghé của khách", "Customer visits"),
				min: 0,
				max: 10,
				step: .5,
				value: x,
				display: x.toFixed(1),
				onChange: setX
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 grid grid-cols-3 gap-2 text-sm",
				children: labels.map((l, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `rounded-xl border p-2 ${k === best ? "border-accent bg-accent text-accent-ink" : "border-line"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs opacity-80",
						children: l
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "tabular-nums",
						children: ps[k].toFixed(2)
					})]
				}, l))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: t(`Tổng ba xác suất = ${total.toFixed(2)}, không tự bằng 1 vì mỗi đường trả lời một câu hỏi riêng. Nhãn cao nhất được chọn, và bạn vẫn phải tự viết quy tắc hành động.`, `The three probabilities add up to ${total.toFixed(2)}, not automatically 1, because each curve answers its own question. The highest label wins, and you still write the action rule yourself.`)
			})
		]
	});
}
var CUST = [
	[120, 2],
	[180, 8],
	[90, 5],
	[450, 3],
	[480, 9],
	[300, 6],
	[60, 9],
	[380, 7],
	[220, 1],
	[410, 5],
	[150, 4],
	[500, 6]
];
var PROBE = [250, 8];
function ScaleLab() {
	const t = useT();
	const [scaled, setScaled] = (0, import_react.useState)(false);
	const stats = (0, import_react.useMemo)(() => {
		const cols = [0, 1].map((j) => CUST.map((r) => r[j]));
		const mean = cols.map((c) => c.reduce((s, v) => s + v, 0) / c.length);
		return {
			mean,
			sd: cols.map((c, j) => Math.sqrt(c.reduce((s, v) => s + (v - mean[j]) ** 2, 0) / c.length))
		};
	}, []);
	const conv = (j, v) => scaled ? (v - stats.mean[j]) / stats.sd[j] : v;
	const info = (0, import_react.useMemo)(() => {
		return CUST.map((r, i) => {
			const dx = conv(0, r[0]) - conv(0, PROBE[0]);
			const dy = conv(1, r[1]) - conv(1, PROBE[1]);
			return {
				i,
				dx2: dx * dx,
				dy2: dy * dy,
				dist: Math.sqrt(dx * dx + dy * dy)
			};
		}).sort((a, b) => a.dist - b.dist)[0];
	}, [scaled]);
	const ref = useCanvas((ctx, w, h) => {
		const c = tone();
		ctx.clearRect(0, 0, w, h);
		const xs = CUST.map((r) => conv(0, r[0])).concat(conv(0, PROBE[0]));
		const ys = CUST.map((r) => conv(1, r[1])).concat(conv(1, PROBE[1]));
		const [x0, x1] = [Math.min(...xs), Math.max(...xs)];
		const [y0, y1] = [Math.min(...ys), Math.max(...ys)];
		const X = (v) => 34 + (v - x0) / (x1 - x0) * (w - 52);
		const Y = (v) => h - 26 - (v - y0) / (y1 - y0) * (h - 56);
		CUST.forEach((r, i) => {
			ctx.fillStyle = i === info.i ? c.good : c.ink;
			ctx.beginPath();
			ctx.arc(X(conv(0, r[0])), Y(conv(1, r[1])), i === info.i ? 6 : 4, 0, Math.PI * 2);
			ctx.fill();
		});
		ctx.strokeStyle = c.accent;
		ctx.setLineDash([4, 3]);
		ctx.beginPath();
		ctx.moveTo(X(conv(0, PROBE[0])), Y(conv(1, PROBE[1])));
		ctx.lineTo(X(conv(0, CUST[info.i][0])), Y(conv(1, CUST[info.i][1])));
		ctx.stroke();
		ctx.setLineDash([]);
		ctx.fillStyle = c.accent;
		ctx.fillRect(X(conv(0, PROBE[0])) - 6, Y(conv(1, PROBE[1])) - 6, 12, 12);
		yTicks(ctx, c, [[Y(y0), scaled ? y0.toFixed(1) : String(Math.round(y0))], [Y(y1), scaled ? y1.toFixed(1) : String(Math.round(y1))]]);
		caption(ctx, c, scaled ? t("hai trục đã chuẩn hóa (đơn vị: độ lệch chuẩn) · vuông đỏ: khách cần tìm hàng xóm", "both axes standardised (unit: standard deviations) · red square: the customer to match") : t("ngang: chi tiêu (triệu) 60–500 · dọc: số lần ghé 1–9 · vuông đỏ: khách cần tìm hàng xóm", "x: spend (million) 60–500 · y: visits 1–9 · red square: the customer to match"));
		xTicks(ctx, c, h, [[X(x0), scaled ? x0.toFixed(1) : String(Math.round(x0))], [X(x1), scaled ? x1.toFixed(1) : String(Math.round(x1))]]);
	}, [
		scaled,
		info,
		t
	]);
	const tot = info.dx2 + info.dy2 || 1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t("Chuẩn hóa trước khi gom cụm", "Standardise before clustering"),
		onReset: () => setScaled(false),
		onExtreme: () => setScaled(!scaled),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pills, {
				value: scaled ? "s" : "r",
				onChange: (v) => setScaled(v === "s"),
				items: [["r", t("Số gốc", "Raw numbers")], ["s", t("Đã chuẩn hóa", "Standardised")]]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref,
				className: "h-52 w-full rounded-xl bg-paper"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm",
				children: [
					t("Hàng xóm gần nhất của khách vuông đỏ", "The red square's nearest neighbour"),
					": ",
					t("chi tiêu", "spend"),
					" ",
					CUST[info.i][0],
					", ",
					t("ghé", "visits"),
					" ",
					CUST[info.i][1],
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm",
				children: [
					t("Phần khoảng cách đến từ chi tiêu", "Share of the distance coming from spend"),
					": ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [(info.dx2 / tot * 100).toFixed(0), "%"] }),
					" · ",
					t("từ số lần ghé", "from visits"),
					": ",
					(info.dy2 / tot * 100).toFixed(0),
					"%"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: scaled ? t("Sau khi chuẩn hóa, cả hai biến đóng góp ngang nhau và hàng xóm hợp lý hơn.", "After standardising, both variables contribute fairly and the neighbour makes more sense.") : t("Chi tiêu chạy tới hàng trăm còn số lần ghé chỉ vài đơn vị, nên chi tiêu gần như quyết định mọi thứ và số lần ghé bị bỏ qua. Bấm 'Đã chuẩn hóa' để so.", "Spend runs into the hundreds while visits are a handful, so spend decides almost everything and visits are ignored. Press 'Standardised' to compare.")
			})
		]
	});
}
var STOP_VI = /* @__PURE__ */ new Set([
	"và",
	"của",
	"là",
	"có",
	"cho",
	"một",
	"những",
	"được",
	"ở",
	"với"
]);
var STOP_EN = /* @__PURE__ */ new Set([
	"and",
	"of",
	"is",
	"the",
	"a",
	"an",
	"to",
	"in",
	"for",
	"with",
	"only"
]);
function TokLab() {
	const t = useT();
	const lang = t("vi", "en");
	const [text, setText] = (0, import_react.useState)("");
	const sample = t("Gói massage đá nóng 90 phút, giá chỉ 450.000đ!", "Hot stone massage package, 90 minutes, only $25!");
	const src = text || sample;
	const [low, setLow] = (0, import_react.useState)(true);
	const [strip, setStrip] = (0, import_react.useState)(true);
	const [stop, setStop] = (0, import_react.useState)(false);
	const tokens = (0, import_react.useMemo)(() => {
		let s = src;
		if (low) s = s.toLowerCase();
		if (strip) s = s.replace(/[.,!?;:()"“”]/g, " ");
		let toks = s.split(/\s+/).filter(Boolean);
		if (stop) {
			const list = lang === "vi" ? STOP_VI : STOP_EN;
			toks = toks.filter((w) => !list.has(w.toLowerCase()));
		}
		return toks;
	}, [
		src,
		low,
		strip,
		stop,
		lang
	]);
	const uniq = new Set(tokens).size;
	const toggle = (label, on, set) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		className: pill(on),
		onClick: () => set(!on),
		children: [on ? "✓ " : "", label]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t("Tách token: cắt câu thành từng mảnh", "Tokenising: cutting a sentence into pieces"),
		onReset: () => {
			setText("");
			setLow(true);
			setStrip(true);
			setStop(false);
		},
		onExtreme: () => {
			setLow(false);
			setStrip(false);
			setStop(false);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: "mb-2 w-full rounded-xl border border-line bg-paper px-3 py-2 text-sm",
				value: text,
				placeholder: sample,
				onChange: (e) => setText(e.target.value),
				"aria-label": t("Câu để tách", "Sentence to split")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 flex flex-wrap gap-2",
				children: [
					toggle(t("chữ thường", "lowercase"), low, setLow),
					toggle(t("bỏ dấu câu", "strip punctuation"), strip, setStrip),
					toggle(t("bỏ từ thừa", "drop stop-words"), stop, setStop)
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-1.5 rounded-xl bg-paper p-3",
				children: tokens.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-lg border border-accent px-2 py-1 text-sm",
					children: w
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm",
				children: [
					tokens.length,
					" token · ",
					uniq,
					" ",
					t("khác nhau", "distinct"),
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: t("Tắt 'chữ thường' thì 'Gói' và 'gói' thành hai token khác nhau. Tắt 'bỏ dấu câu' thì '450.000đ!' dính cả dấu. Mỗi lựa chọn làm bộ token đổi, và mọi bước sau đều dùng bộ token này.", "Turn off 'lowercase' and 'Hot' and 'hot' become two tokens. Turn off 'strip punctuation' and '$25!' keeps its mark stuck on. Each choice changes the token set, and every later step uses it.")
			})
		]
	});
}
var DOCS_BOW = {
	vi: [
		"khách thích gói massage",
		"gói massage khách thích",
		"khách thích ghế massage rẻ",
		"ghế rẻ đặt trước"
	],
	en: [
		"guests like massage package",
		"package massage guests like",
		"guests like massage chair cheap",
		"chair cheap book ahead"
	]
};
function BowLab() {
	const t = useT();
	const docs = t("vi", "en") === "vi" ? DOCS_BOW.vi : DOCS_BOW.en;
	const [sel, setSel] = (0, import_react.useState)(0);
	const vocab = (0, import_react.useMemo)(() => [...new Set(docs.flatMap((d) => d.split(" ")))], [docs]);
	const vec = (d) => vocab.map((w) => d.split(" ").filter((x) => x === w).length);
	const vs = docs.map(vec);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t("Túi từ: đếm từ và bỏ thứ tự", "Bag of words: count words, drop the order"),
		onReset: () => setSel(0),
		onExtreme: () => setSel(1),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-2 space-y-1.5",
				children: docs.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: `block w-full rounded-xl border px-3 py-2 text-left text-sm ${sel === i ? "border-accent bg-accent text-accent-ink" : "border-line"}`,
					onClick: () => setSel(i),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mr-2 opacity-70",
						children: ["d", i + 1]
					}), d]
				}, d))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-center text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "text-left" }), vocab.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-1 font-normal",
							children: w
						}, w))]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: vs.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: `border-t border-line ${sel === i ? "bg-accent/15" : ""}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
							className: "text-left text-muted",
							children: ["d", i + 1]
						}), v.map((n, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: n ? "font-medium" : "text-muted/50",
							children: n
						}, j))]
					}, i)) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: t("d1 và d2 có cùng các từ nhưng đảo thứ tự: hai hàng giống hệt nhau. Máy chỉ còn thấy 'có bao nhiêu lần', không thấy 'đứng ở đâu'. d3 chia sẻ 'khách thích massage' với d1 nên hàng của nó cũng gần.", "d1 and d2 hold the same words in a different order: their rows are identical. The machine only sees 'how many times', never 'where'. d3 shares 'guests like massage' with d1, so its row is close too.")
			})
		]
	});
}
function TfidfLab() {
	const t = useT();
	const docs = t("vi", "en") === "vi" ? DOCS_BOW.vi : DOCS_BOW.en;
	const [sel, setSel] = (0, import_react.useState)(2);
	const words = docs[sel].split(" ");
	const N = docs.length;
	const rows = [...new Set(words)].map((w) => {
		const tf = words.filter((x) => x === w).length / words.length;
		const df = docs.filter((d) => d.split(" ").includes(w)).length;
		const idf = Math.log(N / df);
		return {
			w,
			tf,
			df,
			idf,
			score: tf * idf
		};
	});
	const max = Math.max(.01, ...rows.map((r) => r.score));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t("TF-IDF: từ nào đáng chú ý trong văn bản này", "TF-IDF: which words stand out in this text"),
		onReset: () => setSel(2),
		onExtreme: () => setSel(3),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-2 space-y-1.5",
				children: docs.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: `block w-full rounded-xl border px-3 py-2 text-left text-sm ${sel === i ? "border-accent bg-accent text-accent-ink" : "border-line"}`,
					onClick: () => setSel(i),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mr-2 opacity-70",
						children: ["d", i + 1]
					}), d]
				}, d))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full text-left text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: t("Từ", "Word") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "TF" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: t("Có trong", "In docs") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "IDF" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "TF×IDF" })
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-t border-line",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: r.w }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "tabular-nums",
							children: r.tf.toFixed(2)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
							className: "tabular-nums",
							children: [
								r.df,
								"/",
								N
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "tabular-nums",
							children: r.idf.toFixed(2)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-block h-2.5 rounded-full bg-accent align-middle",
							style: { width: `${r.score / max * 60}px` }
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-2 tabular-nums",
							children: r.score.toFixed(2)
						})] })
					]
				}, r.w)) })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: t("TF cho biết từ lặp nhiều trong văn bản này. IDF = ln(N/df) hạ điểm các từ có mặt ở hầu hết văn bản. Từ có ở mọi văn bản được điểm 0. 'Massage' có ở 3 trong 4 văn bản nên điểm thấp; 'ghế' và 'đặt' hiếm hơn nên nổi hơn.", "TF says the word repeats in this text. IDF = ln(N/df) lowers words found in most texts; a word in every text scores 0. 'Massage' is in 3 of 4 texts so it scores low; 'chair' and 'book' are rarer and stand out more.")
			})
		]
	});
}
function levenshtein(a, b) {
	const d = Array.from({ length: a.length + 1 }, (_, i) => Array.from({ length: b.length + 1 }, (_, j) => i === 0 ? j : j === 0 ? i : 0));
	for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
	const path = /* @__PURE__ */ new Set();
	let i = a.length;
	let j = b.length;
	path.add(`${i},${j}`);
	while (i > 0 || j > 0) {
		if (i > 0 && j > 0 && d[i][j] === d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)) {
			i--;
			j--;
		} else if (i > 0 && d[i][j] === d[i - 1][j] + 1) i--;
		else j--;
		path.add(`${i},${j}`);
	}
	return {
		d,
		path
	};
}
function EditLab() {
	const t = useT();
	const [a, setA] = (0, import_react.useState)("masage");
	const [b, setB] = (0, import_react.useState)("massage");
	const sa = a.slice(0, 9).toLowerCase();
	const sb = b.slice(0, 9).toLowerCase();
	const { d, path } = (0, import_react.useMemo)(() => levenshtein(sa, sb), [sa, sb]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t("Khoảng cách chỉnh sửa: bao nhiêu thao tác để biến chữ này thành chữ kia", "Edit distance: how many edits turn one word into the other"),
		onReset: () => {
			setA("masage");
			setB("massage");
		},
		onExtreme: () => {
			setA("spa");
			setB("massage");
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 grid grid-cols-2 gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "rounded-xl border border-line bg-paper px-3 py-2 text-sm",
					value: a,
					maxLength: 9,
					onChange: (e) => setA(e.target.value),
					"aria-label": t("Chữ thứ nhất", "First word")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "rounded-xl border border-line bg-paper px-3 py-2 text-sm",
					value: b,
					maxLength: 9,
					onChange: (e) => setB(e.target.value),
					"aria-label": t("Chữ thứ hai", "Second word")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "text-center text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {}),
							[...sb].map((ch, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "w-8 font-normal",
								children: ch
							}, j))
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: d.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "pr-1 text-muted",
						children: i === 0 ? "" : sa[i - 1]
					}), row.map((v, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: `h-8 w-8 rounded ${path.has(`${i},${j}`) ? "bg-accent text-accent-ink" : "text-muted"}`,
						children: v
					}, j))] }, i)) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm",
				children: [
					t("Khoảng cách chỉnh sửa", "Edit distance"),
					" = ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: d[sa.length][sb.length] }),
					" ",
					t("(ô góc dưới phải)", "(bottom-right cell)"),
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: t("Mỗi ô là số thao tác ít nhất (thêm, xóa hoặc đổi một chữ) để biến phần đầu của chữ đầu thành phần đầu của chữ sau. Dãy ô tô đậm là đường đi rẻ nhất. 'masage' → 'massage' chỉ cần thêm một chữ 's', nên khoảng cách là 1: nhờ vậy gợi ý sửa lỗi gõ biết hai chữ này gần nhau.", "Each cell is the fewest edits (insert, delete or substitute one letter) to turn the first part of the first word into the first part of the second. The highlighted cells are the cheapest route. 'masage' → 'massage' needs one inserted 's', so the distance is 1, which is how typo suggestions know the two words are close.")
			})
		]
	});
}
function PartialLab() {
	const t = useT();
	const [x0, setX0] = (0, import_react.useState)(1);
	const [y0, setY0] = (0, import_react.useState)(1);
	const [along, setAlong] = (0, import_react.useState)("x");
	const f = (x, y) => x * x + x * y + 2 * y * y;
	const dfx = 2 * x0 + y0;
	const dfy = x0 + 4 * y0;
	const ref = useCanvas((ctx, w, h) => {
		const c = tone();
		ctx.clearRect(0, 0, w, h);
		const g = (s) => along === "x" ? f(s, y0) : f(x0, s);
		const at = along === "x" ? x0 : y0;
		const slope = along === "x" ? dfx : dfy;
		const X = (v) => 34 + (v + 3) / 6 * (w - 46);
		const Y = (v) => h - 24 - (v + 2) / 40 * (h - 46);
		ctx.strokeStyle = c.line;
		[
			0,
			10,
			20,
			30
		].forEach((v) => {
			ctx.beginPath();
			ctx.moveTo(30, Y(v));
			ctx.lineTo(w - 6, Y(v));
			ctx.stroke();
		});
		ctx.strokeStyle = c.ink;
		ctx.lineWidth = 2;
		ctx.beginPath();
		for (let i = 0; i <= 120; i++) {
			const s = -3 + i / 120 * 6;
			if (i === 0) ctx.moveTo(X(s), Y(g(s)));
			else ctx.lineTo(X(s), Y(g(s)));
		}
		ctx.stroke();
		ctx.lineWidth = 1;
		ctx.strokeStyle = c.accent;
		ctx.lineWidth = 2;
		ctx.beginPath();
		ctx.moveTo(X(at - 1), Y(g(at) - slope));
		ctx.lineTo(X(at + 1), Y(g(at) + slope));
		ctx.stroke();
		ctx.lineWidth = 1;
		ctx.fillStyle = c.accent;
		ctx.beginPath();
		ctx.arc(X(at), Y(g(at)), 5, 0, Math.PI * 2);
		ctx.fill();
		yTicks(ctx, c, [
			0,
			10,
			20,
			30
		].map((v) => [Y(v), String(v)]));
		caption(ctx, c, along === "x" ? t(`lát cắt: y giữ cố định = ${y0.toFixed(1)}, chỉ x chạy`, `slice: y held at ${y0.toFixed(1)}, only x moves`) : t(`lát cắt: x giữ cố định = ${x0.toFixed(1)}, chỉ y chạy`, `slice: x held at ${x0.toFixed(1)}, only y moves`));
		xTicks(ctx, c, h, [
			-3,
			-2,
			-1,
			0,
			1,
			2,
			3
		].map((v) => [X(v), String(v)]));
	}, [
		x0,
		y0,
		along,
		t
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t("Đạo hàm riêng: xoay một nút, giữ nút kia", "Partial derivative: turn one knob, hold the other"),
		onReset: () => {
			setX0(1);
			setY0(1);
			setAlong("x");
		},
		onExtreme: () => {
			setX0(2.5);
			setY0(-2);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pills, {
				value: along,
				onChange: setAlong,
				items: [["x", t("Xoay x (giữ y)", "Turn x (hold y)")], ["y", t("Xoay y (giữ x)", "Turn y (hold x)")]]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref,
				className: "h-52 w-full rounded-xl bg-paper"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: "x",
				min: -2.5,
				max: 2.5,
				step: .1,
				value: x0,
				display: x0.toFixed(1),
				onChange: setX0
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: "y",
				min: -2.5,
				max: 2.5,
				step: .1,
				value: y0,
				display: y0.toFixed(1),
				onChange: setY0
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm",
				children: [
					"f(x, y) = x² + xy + 2y² = ",
					f(x0, y0).toFixed(2),
					" · ∂f/∂x = 2x + y = ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: dfx.toFixed(1) }),
					" · ∂f/∂y = x + 4y = ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: dfy.toFixed(1) })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: t("Đường đen là mặt cắt của f khi chỉ một biến chạy. Đường đỏ là tiếp tuyến của mặt cắt đó; độ dốc của nó chính là đạo hàm riêng theo biến đang xoay.", "The black line is a slice of f when only one variable moves. The red line is that slice's tangent; its slope is the partial derivative with respect to the variable being turned.")
			})
		]
	});
}
var registry2 = {
	"count-p": () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountLab, { mode: "perm" }),
	"count-c": () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountLab, { mode: "comb" }),
	prob: ProbLab,
	"venn-events": () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VennLab, { mode: "events" }),
	"venn-or": () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VennLab, { mode: "or" }),
	"venn-and": () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VennLab, { mode: "and" }),
	"venn-joint": () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VennLab, { mode: "joint" }),
	"dice-rv": () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiceLab, { mode: "rv" }),
	"dice-ev": () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiceLab, { mode: "ev" }),
	sample: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SampleLab, {}),
	"sample-bias": () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SampleLab, { start: "convenience" }),
	bayes: BayesLab,
	ml: MlLab,
	assume: AssumeLab,
	mlrwhy: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MlrWhyLab, {}),
	mlrheld: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MlrWhyLab, { held: true }),
	vif: VifLab,
	dummy: DummyLab,
	select: SelectLab,
	logwhy: WhyLogitLab,
	ovr: OvrLab,
	scale: ScaleLab,
	tok: TokLab,
	bow: BowLab,
	tfidf: TfidfLab,
	edit: EditLab,
	partial: PartialLab
};
function sampleOf(kind, rng) {
	if (kind === "uniform") return rng() * 6 - 1;
	if (kind === "bimodal") return rng() < .5 ? gauss(rng) * .55 - 1.4 : gauss(rng) * .45 + 1.5;
	return -Math.log(Math.max(1e-6, rng()));
}
function CltLab() {
	const t = useT();
	const [kind, setKind] = (0, import_react.useState)("skew");
	const [n, setN] = (0, import_react.useState)(20);
	const [tick, setTick] = (0, import_react.useState)(1);
	const means = (0, import_react.useMemo)(() => {
		const rng = mulberry32(7 + tick * 13 + n);
		const out = [];
		for (let i = 0; i < 240; i++) {
			let s = 0;
			for (let k = 0; k < n; k++) s += sampleOf(kind, rng);
			out.push(s / n);
		}
		return out;
	}, [
		kind,
		n,
		tick
	]);
	const ref = useCanvas((ctx, w, h) => {
		const c = tone();
		ctx.clearRect(0, 0, w, h);
		const bins = 18;
		const min = Math.min(...means);
		const max = Math.max(...means);
		const counts = Array(bins).fill(0);
		for (const m of means) {
			const idx = Math.min(17, Math.max(0, Math.floor((m - min) / (max - min || 1) * bins)));
			counts[idx] += 1;
		}
		const peak = Math.max(...counts);
		const gap = 4;
		const bw = (w - 8) / bins;
		counts.forEach((count, i) => {
			const bh = count / peak * (h - 28);
			ctx.fillStyle = c.accent;
			ctx.globalAlpha = .85;
			ctx.fillRect(4 + i * bw, h - 18 - bh, bw - gap, bh);
		});
		ctx.globalAlpha = 1;
		caption(ctx, c, t("ngang: trung bình một mẫu · cao: số mẫu", "x: mean of one sample · y: number of samples"));
		xTicks(ctx, c, h, [
			[4, min.toFixed(1)],
			[w / 2, ((min + max) / 2).toFixed(1)],
			[w - 4, max.toFixed(1)]
		]);
	}, [means, t]);
	const se = (kind === "uniform" ? Math.sqrt(3) : kind === "bimodal" ? 1.5 : 1) / Math.sqrt(n);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t("CLT: trung bình mẫu kéo về hình chuông", "CLT: sample means pull into a bell shape"),
		onReset: () => {
			setN(20);
			setKind("skew");
			setTick(1);
		},
		onExtreme: () => setN(n < 10 ? 40 : 1),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-2 flex flex-wrap gap-2",
				children: [
					["skew", t("Lệch phải", "Right-skewed")],
					["uniform", t("Đều", "Uniform")],
					["bimodal", t("Hai đỉnh", "Two peaks")]
				].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: `min-h-11 rounded-full px-3 text-sm ${kind === id ? "bg-accent text-accent-ink" : "border border-line"}`,
					onClick: () => setKind(id),
					children: label
				}, id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref,
				className: "h-52 w-full rounded-xl bg-paper"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t("Cỡ mỗi mẫu n", "Size of each sample n"),
				min: 1,
				max: 40,
				step: 1,
				value: n,
				display: String(n),
				onChange: setN
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					t("SE ước lượng ≈ σ/√n", "Estimated SE ≈ σ/√n"),
					" = ",
					se.toFixed(2),
					". ",
					t("240 trung bình đang nằm trên hình. Phân phối gốc không cần hình chuông.", "240 means are plotted. The original distribution does not need to be bell-shaped.")
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-2 min-h-11 text-sm underline",
				onClick: () => setTick((v) => v + 1),
				children: t("Lấy bộ mẫu khác", "Draw new samples")
			})
		]
	});
}
function CiLab() {
	const t = useT();
	const [level, setLevel] = (0, import_react.useState)(95);
	const [n, setN] = (0, import_react.useState)(30);
	const z = invNorm(1 - (1 - level / 100) / 2);
	const intervals = (0, import_react.useMemo)(() => {
		const rng = mulberry32(99 + n);
		const sigma = 10;
		const mu = 50;
		const se = sigma / Math.sqrt(n);
		return Array.from({ length: 80 }, () => {
			const mean = mu + se * gauss(rng);
			const half = z * se;
			return {
				lo: mean - half,
				hi: mean + half,
				hit: mean - half <= mu && mu <= mean + half
			};
		});
	}, [n, z]);
	const misses = intervals.filter((row) => !row.hit).length;
	const ref = useCanvas((ctx, w, h) => {
		const c = tone();
		ctx.clearRect(0, 0, w, h);
		const lo = 32;
		const x = (v) => (v - lo) / 36 * (w - 16) + 8;
		ctx.strokeStyle = c.good;
		ctx.beginPath();
		ctx.moveTo(x(50), 18);
		ctx.lineTo(x(50), h - 18);
		ctx.stroke();
		intervals.forEach((row, i) => {
			const y = 22 + i * (h - 46) / intervals.length;
			ctx.strokeStyle = row.hit ? c.ink : c.accent;
			ctx.globalAlpha = row.hit ? .35 : .95;
			ctx.beginPath();
			ctx.moveTo(x(row.lo), y);
			ctx.lineTo(x(row.hi), y);
			ctx.stroke();
		});
		ctx.globalAlpha = 1;
		caption(ctx, c, t("mỗi gạch: khoảng tin cậy của một mẫu · xanh: μ", "each bar: one sample's confidence interval · green: μ"));
		xTicks(ctx, c, h, [
			32,
			41,
			50,
			59,
			68
		].map((v) => [x(v), String(v)]));
	}, [intervals, t]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t("80 khoảng tin cậy, đường xanh là μ", "80 confidence intervals, the green line is μ"),
		onReset: () => {
			setLevel(95);
			setN(30);
		},
		onExtreme: () => setLevel(level > 90 ? 80 : 99),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref,
				className: "h-56 w-full rounded-xl bg-paper"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t("Mức tin cậy", "Confidence level"),
				min: 80,
				max: 99,
				step: 1,
				value: level,
				display: `${level}%`,
				onChange: setLevel
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t("Cỡ mẫu", "Sample size"),
				min: 8,
				max: 80,
				step: 1,
				value: n,
				display: String(n),
				onChange: setN
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: t(`${misses} khoảng tô đậm không chứa μ = 50. z ≈ ${z.toFixed(2)}. Ví dụ minh họa, σ = 10.`, `${misses} highlighted intervals miss μ = 50. z ≈ ${z.toFixed(2)}. Illustrative example, σ = 10.`)
			})
		]
	});
}
function HypothesisLab() {
	const t = useT();
	const [alpha, setAlpha] = (0, import_react.useState)(5);
	const [effect, setEffect] = (0, import_react.useState)(1.2);
	const [zobs, setZobs] = (0, import_react.useState)(2.1);
	const zcrit = invNorm(1 - alpha / 100 / 2);
	const p = 2 * (1 - cdf(Math.abs(zobs)));
	const ref = useCanvas((ctx, w, h) => {
		const c = tone();
		ctx.clearRect(0, 0, w, h);
		const x0 = -4;
		const X = (x) => (x - x0) / 8 * (w - 16) + 8;
		const yMax = pdf(0);
		const Y = (d) => h - 24 - d / yMax * (h - 40);
		const curve = (mu, color) => {
			ctx.beginPath();
			for (let i = 0; i <= 80; i++) {
				const x = x0 + 8 * i / 80;
				const y = Y(pdf(x, mu, 1));
				if (i === 0) ctx.moveTo(X(x), y);
				else ctx.lineTo(X(x), y);
			}
			ctx.strokeStyle = color;
			ctx.stroke();
		};
		ctx.fillStyle = c.accent;
		ctx.globalAlpha = .18;
		ctx.beginPath();
		ctx.moveTo(X(-4), Y(0));
		for (let x = -4; x <= -zcrit; x += .05) ctx.lineTo(X(x), Y(pdf(x)));
		ctx.lineTo(X(-zcrit), Y(0));
		ctx.fill();
		ctx.beginPath();
		ctx.moveTo(X(zcrit), Y(0));
		for (let x = zcrit; x <= 4; x += .05) ctx.lineTo(X(x), Y(pdf(x)));
		ctx.lineTo(X(4), Y(0));
		ctx.fill();
		ctx.globalAlpha = 1;
		curve(0, c.ink);
		curve(effect, c.accent);
		ctx.strokeStyle = c.good;
		ctx.beginPath();
		ctx.moveTo(X(zobs), 10);
		ctx.lineTo(X(zobs), h - 18);
		ctx.stroke();
		ctx.fillStyle = c.muted;
		ctx.font = "12px Outfit, sans-serif";
		ctx.fillText("H0", X(0) - 8, 16);
		ctx.fillText("H1", X(effect) - 8, 16);
		xTicks(ctx, c, h, [
			-4,
			-2,
			0,
			2,
			4
		].map((v) => [X(v), v === 0 ? "z = 0" : String(v)]));
	}, [
		alpha,
		effect,
		zobs,
		zcrit
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t("Vùng bác bỏ, p-value và hiệu thật", "Rejection region, p-value and true effect"),
		onReset: () => {
			setAlpha(5);
			setEffect(1.2);
			setZobs(2.1);
		},
		onExtreme: () => setEffect(effect > .4 ? 0 : 2.8),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref,
				className: "h-52 w-full rounded-xl bg-paper"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: "α (%)",
				min: 1,
				max: 20,
				step: 1,
				value: alpha,
				display: `${alpha}%`,
				onChange: setAlpha
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t("Hiệu thật, theo SE", "True effect, in SE units"),
				min: 0,
				max: 3,
				step: .1,
				value: effect,
				display: effect.toFixed(1),
				onChange: setEffect
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t("z quan sát", "Observed z"),
				min: -1,
				max: 4,
				step: .1,
				value: zobs,
				display: zobs.toFixed(1),
				onChange: setZobs
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					t("Ngưỡng", "Threshold"),
					" |z| ",
					">",
					" ",
					zcrit.toFixed(2),
					". ",
					t("p hai phía", "Two-sided p"),
					" ≈ ",
					p < .001 ? t("< 0,001", "< 0.001") : p.toFixed(3),
					". ",
					p < alpha / 100 ? t("Theo quy ước này thì bác bỏ H0.", "By this convention, reject H0.") : t("Theo quy ước này thì chưa bác bỏ H0.", "By this convention, do not reject H0."),
					" ",
					t("Vùng tô là α dưới H0, không phải xác suất H0 đúng.", "The shaded area is α under H0, not the probability that H0 is true.")
				]
			})
		]
	});
}
function NormalLab() {
	const t = useT();
	const [mu, setMu] = (0, import_react.useState)(42);
	const [sd, setSd] = (0, import_react.useState)(8);
	const [a, setA] = (0, import_react.useState)(30);
	const [b, setB] = (0, import_react.useState)(50);
	const prob = cdf(b, mu, sd) - cdf(a, mu, sd);
	const ref = useCanvas((ctx, w, h) => {
		const c = tone();
		ctx.clearRect(0, 0, w, h);
		const lo = mu - 4 * sd;
		const hi = mu + 4 * sd;
		const X = (x) => (x - lo) / (hi - lo) * (w - 16) + 8;
		const yMax = pdf(mu, mu, sd);
		const Y = (d) => h - 20 - d / yMax * (h - 36);
		ctx.beginPath();
		ctx.moveTo(X(a), Y(0));
		for (let x = a; x <= b; x += (hi - lo) / 80) ctx.lineTo(X(x), Y(pdf(x, mu, sd)));
		ctx.lineTo(X(b), Y(0));
		ctx.fillStyle = c.accent;
		ctx.globalAlpha = .25;
		ctx.fill();
		ctx.globalAlpha = 1;
		ctx.beginPath();
		for (let i = 0; i <= 100; i++) {
			const x = lo + (hi - lo) * i / 100;
			const y = Y(pdf(x, mu, sd));
			if (i === 0) ctx.moveTo(X(x), y);
			else ctx.lineTo(X(x), y);
		}
		ctx.strokeStyle = c.ink;
		ctx.stroke();
		caption(ctx, c, t("ngang: giây · vùng tô: giữa hai mốc", "x: seconds · shaded: between the two marks"));
		xTicks(ctx, c, h, [
			-3,
			-2,
			-1,
			0,
			1,
			2,
			3
		].map((k) => [X(mu + k * sd), String(Math.round(mu + k * sd))]));
	}, [
		mu,
		sd,
		a,
		b,
		t
	]);
	const z = (30 - mu) / sd;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t("Chuông chuẩn và diện tích giữa hai mốc", "Normal curve and the area between two marks"),
		onReset: () => {
			setMu(42);
			setSd(8);
			setA(30);
			setB(50);
		},
		onExtreme: () => setSd(sd > 4 ? 2 : 16),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref,
				className: "h-48 w-full rounded-xl bg-paper"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t("Trung bình", "Mean"),
				min: 20,
				max: 80,
				step: 1,
				value: mu,
				display: String(mu),
				onChange: setMu
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t("Độ lệch chuẩn", "Standard deviation"),
				min: 2,
				max: 20,
				step: 1,
				value: sd,
				display: String(sd),
				onChange: setSd
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t("Mốc trái", "Left mark"),
				min: 10,
				max: 90,
				step: 1,
				value: a,
				display: String(a),
				onChange: setA
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t("Mốc phải", "Right mark"),
				min: 10,
				max: 100,
				step: 1,
				value: b,
				display: String(b),
				onChange: setB
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: t(`Diện tích từ ${Math.min(a, b)} đến ${Math.max(a, b)} ≈ ${(Math.abs(prob) * 100).toFixed(1)}%. z của mốc 30 giây so với trung bình hiện tại là ${z.toFixed(2)}. Ví dụ minh họa, đơn vị giây.`, `Area from ${Math.min(a, b)} to ${Math.max(a, b)} ≈ ${(Math.abs(prob) * 100).toFixed(1)}%. z of the 30-second mark relative to the current mean is ${z.toFixed(2)}. Illustrative example, units are seconds.`)
			})
		]
	});
}
function BinomialLab() {
	const t = useT();
	const [n, setN] = (0, import_react.useState)(40);
	const [p, setP] = (0, import_react.useState)(.08);
	const bars = (0, import_react.useMemo)(() => {
		const vals = [];
		let term = (1 - p) ** n;
		for (let k = 0; k <= n; k++) {
			vals.push(term);
			term *= (n - k) / (k + 1) * (p / (1 - p || 1e-9));
		}
		return vals;
	}, [n, p]);
	const ref = useCanvas((ctx, w, h) => {
		const c = tone();
		ctx.clearRect(0, 0, w, h);
		const peak = Math.max(...bars);
		const bw = (w - 8) / bars.length;
		bars.forEach((v, k) => {
			const bh = v / peak * (h - 40);
			ctx.fillStyle = k === Math.round(n * p) ? c.good : c.accent;
			ctx.fillRect(4 + k * bw, h - 20 - bh, Math.max(1, bw - 1), bh);
		});
		caption(ctx, c, t("ngang: số lần trúng k · cao: xác suất", "x: number of hits k · y: probability"));
		xTicks(ctx, c, h, [
			0,
			Math.round(n / 4),
			Math.round(n / 2),
			Math.round(3 * n / 4),
			n
		].map((k) => [4 + (k + .5) * bw, String(k)]));
	}, [
		bars,
		n,
		p,
		t
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t("Nhị thức: kéo n và p", "Binomial: drag n and p"),
		onReset: () => {
			setN(40);
			setP(.08);
		},
		onExtreme: () => setP(p > .2 ? .05 : .5),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref,
				className: "h-48 w-full rounded-xl bg-paper"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t("Số phiên n", "Number of sessions n"),
				min: 5,
				max: 60,
				step: 1,
				value: n,
				display: String(n),
				onChange: setN
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t("Xác suất form p", "Form probability p"),
				min: .02,
				max: .6,
				step: .01,
				value: p,
				display: p.toFixed(2),
				onChange: setP
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					t("Kỳ vọng", "Expected value"),
					" np = ",
					(n * p).toFixed(2),
					". ",
					t("Cột đậm gần tâm. Ví dụ minh họa, không phải tỷ lệ thật của một trang.", "The green bar is near the centre. Illustrative example, not a real page's rate.")
				]
			})
		]
	});
}
var REG_PTS = [
	[2, 32],
	[4, 41],
	[5, 48],
	[7, 60],
	[8, 66],
	[10, 80],
	[11, 78],
	[13, 96]
];
function RegressionLab() {
	const t = useT();
	const [m, setM] = (0, import_react.useState)(6);
	const [b, setB] = (0, import_react.useState)(20);
	const yhat = (x) => b + m * x;
	const ybar = REG_PTS.reduce((s, p) => s + p[1], 0) / REG_PTS.length;
	const rss = REG_PTS.reduce((s, p) => s + (p[1] - yhat(p[0])) ** 2, 0);
	const r2 = 1 - rss / REG_PTS.reduce((s, p) => s + (p[1] - ybar) ** 2, 0);
	const ref = useCanvas((ctx, w, h) => {
		const c = tone();
		ctx.clearRect(0, 0, w, h);
		const X = (x) => 28 + (x - 1) / 13 * (w - 40);
		const Y = (y) => h - 20 - (y - 20) / 90 * (h - 44);
		ctx.strokeStyle = c.line;
		ctx.strokeRect(28, 20, w - 40, h - 40);
		REG_PTS.forEach(([x, y]) => {
			ctx.strokeStyle = c.accent;
			ctx.beginPath();
			ctx.moveTo(X(x), Y(y));
			ctx.lineTo(X(x), Y(yhat(x)));
			ctx.stroke();
			ctx.fillStyle = c.ink;
			ctx.beginPath();
			ctx.arc(X(x), Y(y), 4, 0, Math.PI * 2);
			ctx.fill();
		});
		ctx.strokeStyle = c.good;
		ctx.lineWidth = 2;
		ctx.beginPath();
		ctx.moveTo(X(1), Y(yhat(1)));
		ctx.lineTo(X(14), Y(yhat(14)));
		ctx.stroke();
		ctx.lineWidth = 1;
		ctx.fillStyle = c.muted;
		ctx.font = "11px Outfit, sans-serif";
		ctx.textAlign = "right";
		[
			20,
			60,
			100
		].forEach((v) => ctx.fillText(String(v), 24, Y(v) + 4));
		ctx.textAlign = "left";
		caption(ctx, c, t("ngang: chi tiêu (triệu) · dọc: số form", "x: spend (million) · y: number of forms"));
		xTicks(ctx, c, h, [
			2,
			4,
			6,
			8,
			10,
			12,
			14
		].map((v) => [X(v), String(v)]));
	}, [
		m,
		b,
		t
	]);
	const fit = () => {
		const xs = REG_PTS.map((p) => p[0]);
		const ys = REG_PTS.map((p) => p[1]);
		const xb = xs.reduce((s, v) => s + v, 0) / xs.length;
		const yb = ys.reduce((s, v) => s + v, 0) / ys.length;
		const slope = xs.reduce((s, x, i) => s + (x - xb) * (ys[i] - yb), 0) / xs.reduce((s, x) => s + (x - xb) ** 2, 0);
		setM(Math.round(slope * 10) / 10);
		setB(Math.round((yb - slope * xb) * 10) / 10);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t("Đường thẳng, phần dư và R²", "Line, residuals and R²"),
		onReset: () => {
			setM(6);
			setB(20);
		},
		onExtreme: () => {
			setM(0);
			setB(60);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref,
				className: "h-52 w-full rounded-xl bg-paper"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t("Độ dốc", "Slope"),
				min: 0,
				max: 12,
				step: .1,
				value: m,
				display: m.toFixed(1),
				onChange: setM
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t("Chặn", "Intercept"),
				min: 0,
				max: 80,
				step: 1,
				value: b,
				display: String(b),
				onChange: setB
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: t(`RSS = ${rss.toFixed(0)}. R² = ${r2.toFixed(2)}. Đường đang là form = ${b.toFixed(0)} + ${m.toFixed(1)} × chi (triệu). Tám điểm là ví dụ minh họa.`, `RSS = ${rss.toFixed(0)}. R² = ${r2.toFixed(2)}. The line is forms = ${b.toFixed(0)} + ${m.toFixed(1)} × spend (million). The eight points are illustrative.`)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-2 min-h-11 rounded-full border border-line px-3 text-sm",
				onClick: fit,
				children: t("Đặt đường khớp nhất", "Set best-fit line")
			})
		]
	});
}
function GdLab() {
	const t = useT();
	const [lr, setLr] = (0, import_react.useState)(.15);
	const [w, setW] = (0, import_react.useState)(-1);
	const [play, setPlay] = (0, import_react.useState)(false);
	const cost = (x) => (x - 2.2) ** 2;
	const grad = (x) => 2 * (x - 2.2);
	(0, import_react.useEffect)(() => {
		if (!play) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const id = window.setInterval(() => {
			setW((prev) => {
				const next = prev - lr * grad(prev);
				if (!Number.isFinite(next) || Math.abs(next) > 30) return prev;
				return next;
			});
		}, 180);
		return () => window.clearInterval(id);
	}, [play, lr]);
	const ref = useCanvas((ctx, ww, h) => {
		const c = tone();
		ctx.clearRect(0, 0, ww, h);
		const lo = -2;
		const hi = 6;
		const X = (x) => (x - lo) / 8 * (ww - 16) + 8;
		const peak = cost(-2);
		const Y = (y) => h - 22 - y / peak * (h - 46);
		ctx.beginPath();
		for (let i = 0; i <= 80; i++) {
			const x = lo + 8 * i / 80;
			const y = Y(cost(x));
			if (i === 0) ctx.moveTo(X(x), y);
			else ctx.lineTo(X(x), y);
		}
		ctx.strokeStyle = c.ink;
		ctx.stroke();
		const ball = Math.max(lo, Math.min(hi, w));
		ctx.fillStyle = c.accent;
		ctx.beginPath();
		ctx.arc(X(ball), Y(cost(ball)), 7, 0, Math.PI * 2);
		ctx.fill();
		caption(ctx, c, t("ngang: tham số w · dọc: chi phí J(w)", "x: parameter w · y: cost J(w)"));
		xTicks(ctx, c, h, [
			-2,
			0,
			2.2,
			4,
			6
		].map((v) => [X(v), String(v)]));
	}, [w, t]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t("Quả bóng trên hàm chi phí một tham số", "A ball on a one-parameter cost function"),
		onReset: () => {
			setW(-1);
			setLr(.15);
			setPlay(false);
		},
		onExtreme: () => setLr(lr < .8 ? 1.05 : .02),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref,
				className: "h-48 w-full rounded-xl bg-paper"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: "Learning rate η",
				min: .02,
				max: 1.1,
				step: .01,
				value: lr,
				display: lr.toFixed(2),
				onChange: setLr
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					"w = ",
					w.toFixed(2),
					", J = ",
					cost(w).toFixed(2),
					". ",
					t("Đáy ở 2,2. Hàm J(w) = (w − 2,2)² là ví dụ minh họa.", "The bottom is at 2.2. The function J(w) = (w − 2.2)² is illustrative.")
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "min-h-11 rounded-full bg-accent px-4 text-sm text-accent-ink",
					onClick: () => setPlay((v) => !v),
					children: play ? t("Tạm dừng", "Pause") : t("Phát", "Play")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "min-h-11 rounded-full border border-line px-4 text-sm",
					onClick: () => setW((prev) => prev - lr * grad(prev)),
					children: t("Một bước", "One step")
				})]
			})
		]
	});
}
var SCORES = [
	{
		y: 0,
		s: .08
	},
	{
		y: 0,
		s: .14
	},
	{
		y: 0,
		s: .22
	},
	{
		y: 0,
		s: .31
	},
	{
		y: 0,
		s: .4
	},
	{
		y: 0,
		s: .48
	},
	{
		y: 1,
		s: .28
	},
	{
		y: 1,
		s: .46
	},
	{
		y: 1,
		s: .58
	},
	{
		y: 1,
		s: .66
	},
	{
		y: 1,
		s: .74
	},
	{
		y: 1,
		s: .86
	}
];
function SigmoidLab() {
	const t = useT();
	const [b0, setB0] = (0, import_react.useState)(-2.2);
	const [b1, setB1] = (0, import_react.useState)(.08);
	const [cut, setCut] = (0, import_react.useState)(.35);
	const xDemo = 40;
	const z = b0 + b1 * xDemo;
	const p = 1 / (1 + Math.exp(-z));
	let tp = 0, fp = 0, tn = 0, fn = 0;
	for (const row of SCORES) {
		const pred = row.s >= cut ? 1 : 0;
		if (pred === 1 && row.y === 1) tp += 1;
		else if (pred === 1 && row.y === 0) fp += 1;
		else if (pred === 0 && row.y === 0) tn += 1;
		else fn += 1;
	}
	const ref = useCanvas((ctx, w, h) => {
		const c = tone();
		ctx.clearRect(0, 0, w, h);
		const X = (x) => 26 + x / 80 * (w - 34);
		const Y = (v) => h - 24 - v * (h - 44);
		ctx.beginPath();
		for (let x = 0; x <= 80; x++) {
			const zz = b0 + b1 * x;
			const yy = 1 / (1 + Math.exp(-zz));
			if (x === 0) ctx.moveTo(X(x), Y(yy));
			else ctx.lineTo(X(x), Y(yy));
		}
		ctx.strokeStyle = c.ink;
		ctx.stroke();
		ctx.strokeStyle = c.accent;
		ctx.setLineDash([4, 4]);
		ctx.beginPath();
		ctx.moveTo(26, Y(cut));
		ctx.lineTo(w - 8, Y(cut));
		ctx.stroke();
		ctx.setLineDash([]);
		ctx.fillStyle = c.accent;
		ctx.beginPath();
		ctx.arc(X(xDemo), Y(p), 5, 0, Math.PI * 2);
		ctx.fill();
		ctx.fillStyle = c.muted;
		ctx.font = "11px Outfit, sans-serif";
		ctx.textAlign = "right";
		[
			0,
			.5,
			1
		].forEach((v) => ctx.fillText(String(v), 22, Y(v) + 4));
		ctx.textAlign = "left";
		caption(ctx, c, t("ngang: biến x · dọc: xác suất · nét đứt: ngưỡng", "x: variable x · y: probability · dashed: cutoff"));
		xTicks(ctx, c, h, [
			0,
			20,
			40,
			60,
			80
		].map((v) => [X(v), String(v)]));
	}, [
		b0,
		b1,
		cut,
		p,
		t
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t("Sigmoid, ngưỡng và ma trận nhầm", "Sigmoid, cutoff and confusion matrix"),
		onReset: () => {
			setB0(-2.2);
			setB1(.08);
			setCut(.35);
		},
		onExtreme: () => setCut(cut > .5 ? .2 : .8),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref,
				className: "h-48 w-full rounded-xl bg-paper"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: "β0",
				min: -4,
				max: 1,
				step: .1,
				value: b0,
				display: b0.toFixed(1),
				onChange: setB0
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: "β1",
				min: -.02,
				max: .16,
				step: .01,
				value: b1,
				display: b1.toFixed(2),
				onChange: setB1
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t("Ngưỡng gọi", "Decision cutoff"),
				min: .1,
				max: .9,
				step: .05,
				value: cut,
				display: cut.toFixed(2),
				onChange: setCut
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm",
				children: t(`Tại x = 40, log-odds = ${z.toFixed(2)}, xác suất = ${p.toFixed(2)}. Ví dụ minh họa.`, `At x = 40, log-odds = ${z.toFixed(2)}, probability = ${p.toFixed(2)}. Illustrative example.`)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 grid grid-cols-2 gap-2 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-line p-3",
					children: [
						"TP ",
						tp,
						" · FN ",
						fn
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-line p-3",
					children: [
						"FP ",
						fp,
						" · TN ",
						tn
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-muted",
				children: [
					"Recall = ",
					tp + fn ? (tp / (tp + fn)).toFixed(2) : "—",
					". Precision = ",
					tp + fp ? (tp / (tp + fp)).toFixed(2) : "—",
					". ",
					t("Mười hai điểm mẫu có sẵn, không phải dữ liệu khách.", "Twelve built-in sample points, not real customer data.")
				]
			})
		]
	});
}
function TreeLab() {
	const t = useT();
	const [depth, setDepth] = (0, import_react.useState)(1);
	const gini = (p) => 1 - (p * p + (1 - p) * (1 - p));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t("Một nhát cắt và độ sâu", "One split and the depth"),
		onReset: () => setDepth(1),
		onExtreme: () => setDepth(depth > 2 ? 1 : 4),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm",
				children: [
					t("Nút gốc 40 ở lại, 60 rời.", "Root node: 40 stay, 60 leave."),
					" Gini = ",
					gini(.4).toFixed(2),
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t("Độ sâu đang xem", "Depth shown"),
				min: 1,
				max: 4,
				step: 1,
				value: depth,
				display: String(depth),
				onChange: setDepth
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 space-y-2 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-line p-3",
						children: [
							t("Độ sâu 1: ghé", "Depth 1: visits"),
							" ",
							"<",
							" 2. ",
							t("Nhánh trái 10 ở / 40 rời", "Left branch 10 stay / 40 leave"),
							", Gini ",
							gini(10 / 50).toFixed(2),
							". ",
							t("Nhánh phải 30 ở / 20 rời", "Right branch 30 stay / 20 leave"),
							", Gini ",
							gini(30 / 50).toFixed(2),
							"."
						]
					}),
					depth >= 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-xl border border-line p-3",
						children: t("Độ sâu 2: tách tiếp theo chi tiêu. Các lá thuần hơn, câu chuyện vẫn kể được trong một phút.", "Depth 2: split further by spend. Leaves are purer and the story can still be told in a minute.")
					}) : null,
					depth >= 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-xl border border-accent p-3",
						children: t("Độ sâu 3: một lá chỉ còn 2 khách. Quy tắc bắt đầu nhớ từng người.", "Depth 3: a leaf holds only 2 customers. The rules start memorising individuals.")
					}) : null,
					depth >= 4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-xl bg-accent p-3 text-accent-ink",
						children: t("Độ sâu 4: gần như mỗi lá một khách của tập đã thấy. Tháng sau các lá này rỗng. Đó là overfitting nhìn được.", "Depth 4: nearly one customer per leaf in the data seen. Next month these leaves are empty. That is overfitting you can see.")
					}) : null
				]
			})
		]
	});
}
var KM = [
	[.2, .3],
	[.25, .45],
	[.35, .28],
	[.4, .5],
	[.7, .72],
	[.78, .6],
	[.62, .8],
	[.85, .78],
	[.55, .22],
	[.68, .3],
	[.6, .38],
	[.75, .18]
];
function KmeansLab() {
	const t = useT();
	const [step, setStep] = (0, import_react.useState)(0);
	const centroids = [[
		[.3, .35],
		[.75, .7],
		[.66, .28]
	], [
		[.3, .38],
		[.74, .73],
		[.64, .27]
	]];
	const centers = centroids[Math.min(step, centroids.length - 1)];
	const ref = useCanvas((ctx, w, h) => {
		const c = tone();
		ctx.clearRect(0, 0, w, h);
		const colors = [
			c.accent,
			c.good,
			c.ink
		];
		KM.forEach(([x, y]) => {
			let best = 0;
			let dist = Infinity;
			centers.forEach((ct, i) => {
				const d = (ct[0] - x) ** 2 + (ct[1] - y) ** 2;
				if (d < dist) {
					dist = d;
					best = i;
				}
			});
			ctx.fillStyle = colors[best];
			ctx.beginPath();
			ctx.arc(16 + x * (w - 32), h - 16 - y * (h - 32), 5, 0, Math.PI * 2);
			ctx.fill();
		});
		centers.forEach((ct, i) => {
			ctx.strokeStyle = colors[i];
			ctx.lineWidth = 2;
			ctx.strokeRect(16 + ct[0] * (w - 32) - 7, h - 16 - ct[1] * (h - 32) - 7, 14, 14);
		});
		ctx.lineWidth = 1;
		caption(ctx, c, t("hai biến chuẩn hóa 0–1 · ô vuông: tâm cụm", "two variables scaled 0–1 · square: cluster centre"));
	}, [step, t]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t("K-means: gán rồi dời tâm", "K-means: assign, then move the centres"),
		onReset: () => setStep(0),
		onExtreme: () => setStep(1),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref,
				className: "h-52 w-full rounded-xl bg-paper"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: step === 0 ? t("Bước gán: mỗi điểm về tâm gần nhất.", "Assign step: each point goes to its nearest centre.") : t("Bước dời: tâm về trung bình của điểm vừa nhận. Ví dụ minh họa, trục đã chuẩn hóa.", "Move step: each centre moves to the mean of the points it just received. Illustrative example, axes scaled.")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-2 min-h-11 rounded-full bg-ink px-4 text-sm text-paper",
				onClick: () => setStep((s) => (s + 1) % 2),
				children: t("Bước tiếp", "Next step")
			})
		]
	});
}
var SQL_ROWS = [
	{
		channel: "GDN",
		spend: 12,
		forms: 20
	},
	{
		channel: "GDN",
		spend: 0,
		forms: 0
	},
	{
		channel: "Meta",
		spend: 8,
		forms: 18
	},
	{
		channel: "Meta",
		spend: 4,
		forms: 14
	},
	{
		channel: "TikTok",
		spend: 6,
		forms: 9
	},
	{
		channel: "TikTok",
		spend: 3,
		forms: 4
	}
];
function SqlLab() {
	const t = useT();
	const [step, setStep] = (0, import_react.useState)(0);
	const labels = [
		"FROM",
		"WHERE spend > 0",
		"GROUP BY channel",
		"HAVING SUM(forms) > 15",
		"SELECT",
		"ORDER BY"
	];
	const rows = SQL_ROWS.filter((r) => step < 1 || r.spend > 0);
	const grouped = [
		{
			channel: "GDN",
			forms: 20
		},
		{
			channel: "Meta",
			forms: 32
		},
		{
			channel: "TikTok",
			forms: 13
		}
	].filter((r) => step < 3 || r.forms > 15);
	const ordered = step >= 5 ? [...grouped].sort((a, b) => b.forms - a.forms) : grouped;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t("Thứ tự logic của SELECT", "The logical order of SELECT"),
		onReset: () => setStep(0),
		onExtreme: () => setStep(5),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-medium",
				children: labels[step]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-sm text-muted",
				children: t("Máy không chạy từ chữ SELECT. Đọc từ FROM.", "The engine does not start at the word SELECT. Read from FROM.")
			}),
			step < 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full text-left text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: t("Kênh", "Channel") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Spend" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: t("Form", "Forms") })
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-t border-line",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: r.channel }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: r.spend }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: r.forms })
					]
				}, r.channel + r.spend)) })]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full text-left text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: t("Kênh", "Channel") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: t("Tổng form", "Total forms") })]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: ordered.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-t border-line",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: r.channel }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: r.forms })]
				}, r.channel)) })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-3 min-h-11 rounded-full bg-accent px-4 text-sm text-accent-ink",
				onClick: () => setStep((s) => Math.min(5, s + 1)),
				children: t("Bước tiếp", "Next step")
			})
		]
	});
}
function JoinLab() {
	const t = useT();
	const [mode, setMode] = (0, import_react.useState)("left");
	const stores = [
		{
			id: 1,
			name: t("Quận 1", "District 1")
		},
		{
			id: 2,
			name: t("Quận 3", "District 3")
		},
		{
			id: 3,
			name: t("Thủ Đức", "Thu Duc")
		}
	];
	const orders = [
		{
			store: 1,
			amount: 12
		},
		{
			store: 1,
			amount: 4
		},
		{
			store: 2,
			amount: 9
		}
	];
	let rows = [];
	if (mode === "inner") rows = orders.map((o) => ({
		name: stores.find((s) => s.id === o.store)?.name ?? "?",
		amount: o.amount
	}));
	else if (mode === "left") {
		const next = [];
		for (const s of stores) {
			const hit = orders.filter((o) => o.store === s.id);
			if (!hit.length) next.push({
				name: s.name,
				amount: null
			});
			else for (const o of hit) next.push({
				name: s.name,
				amount: o.amount
			});
		}
		rows = next;
	} else rows = orders.map((o) => ({
		name: stores.find((s) => s.id === o.store)?.name ?? "?",
		amount: o.amount
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t("JOIN giữ hoặc bỏ hàng không khớp", "JOIN keeps or drops unmatched rows"),
		onReset: () => setMode("left"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-3 flex gap-2",
				children: [
					"inner",
					"left",
					"right"
				].map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: `min-h-11 rounded-full px-3 text-sm uppercase ${mode === id ? "bg-accent text-accent-ink" : "border border-line"}`,
					onClick: () => setMode(id),
					children: id
				}, id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full text-left text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: t("Cửa hàng", "Store") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: t("Doanh thu", "Revenue") })]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-t border-line",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: r.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: r.amount ?? t("trống", "empty") })]
				}, i)) })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: t("Thủ Đức không có đơn. INNER làm mất cửa hàng đó. Ví dụ minh họa.", "Thu Duc has no orders. INNER drops that store. Illustrative example.")
			})
		]
	});
}
function WindowLab() {
	const t = useT();
	const [i, setI] = (0, import_react.useState)(2);
	const weeks = [
		10,
		12,
		8,
		15,
		11
	];
	const running = weeks.map((_, idx) => weeks.slice(0, idx + 1).reduce((s, v) => s + v, 0));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t("Cửa sổ lũy kế", "Running-total window"),
		onReset: () => setI(0),
		onExtreme: () => setI(4),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t("Tuần đang đứng", "Current week"),
				min: 0,
				max: 4,
				step: 1,
				value: i,
				display: t(`Tuần ${i + 1}`, `Week ${i + 1}`),
				onChange: setI
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 flex gap-2",
				children: weeks.map((v, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `min-h-16 flex-1 rounded-xl border p-2 text-center text-sm ${idx === i ? "border-accent bg-accent text-accent-ink" : idx < i ? "border-line" : "border-dashed border-line text-muted"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: v }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs",
						children: idx <= i ? running[idx] : ""
					})]
				}, idx))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-muted",
				children: [
					t("Ô đậm là dòng hiện tại. Số nhỏ là tổng từ đầu cửa sổ tới dòng đó.", "The filled cell is the current row. The small number is the total from the start of the window to that row."),
					" ",
					t("LAG của tuần này là", "This week's LAG is"),
					" ",
					i > 0 ? weeks[i - 1] : t("không có", "none"),
					"."
				]
			})
		]
	});
}
function BiasLab() {
	const t = useT();
	const [k, setK] = (0, import_react.useState)(3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t("Độ phức tạp và hai đường lỗi", "Complexity and the two error curves"),
		onReset: () => setK(3),
		onExtreme: () => setK(k > 4 ? 1 : 7),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t("Độ phức tạp", "Complexity"),
				min: 1,
				max: 7,
				step: 1,
				value: k,
				display: String(k),
				onChange: setK
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 grid grid-cols-2 gap-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-line p-3",
					children: [
						t("Lỗi tập học", "Training error"),
						" ",
						[
							42,
							28,
							18,
							12,
							7,
							4,
							2
						][k - 1]
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-line p-3",
					children: [
						t("Lỗi tập mới", "New-data error"),
						" ",
						[
							40,
							26,
							18,
							17,
							21,
							29,
							38
						][k - 1]
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: t("Đơn vị ví dụ minh họa. Lỗi tập học cứ giảm. Lỗi tập mới giảm rồi tăng. Chỗ đáng giữ nằm quanh độ phức tạp 3 hoặc 4, không phải 7.", "Illustrative units. Training error keeps falling. New-data error falls, then rises. The sweet spot is around complexity 3 or 4, not 7.")
			})
		]
	});
}
function SmoothLab() {
	const t = useT();
	const [alpha, setAlpha] = (0, import_react.useState)(.4);
	const y = [
		20,
		22,
		21,
		28,
		30,
		27,
		26,
		33
	];
	const fit = [];
	let level = y[0];
	for (const value of y) {
		level = alpha * value + (1 - alpha) * level;
		fit.push(level);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t("Làm trơn mũ", "Exponential smoothing"),
		onReset: () => setAlpha(.4),
		onExtreme: () => setAlpha(alpha > .5 ? .1 : .9),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: "alpha",
				min: .1,
				max: .9,
				step: .05,
				value: alpha,
				display: alpha.toFixed(2),
				onChange: setAlpha
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 flex items-end gap-1 h-32",
				children: y.map((value, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-1 flex-col justify-end gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-sm bg-ink/80",
						style: { height: `${value * 2}px` }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-sm bg-accent",
						style: { height: `${fit[idx] * 2}px` }
					})]
				}, idx))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: t("Cột đậm là lượt khách tuần, cột đất nung là mức đã làm trơn. α cao thì bám tuần mới, α thấp thì lì. Ví dụ minh họa. Chiều cao dùng đơn vị của chính số liệu mẫu.", "The dark bar is weekly visitors, the terracotta bar is the smoothed level. High α follows recent weeks, low α is sluggish. Illustrative example. Heights use the sample data's own units.")
			})
		]
	});
}
var DOCS = [
	{
		x: .2,
		y: .75,
		t: "Gói 60 phút, không đá nóng",
		en: "60-minute package, no hot stones"
	},
	{
		x: .28,
		y: .62,
		t: "Gói 90 phút, có đá nóng",
		en: "90-minute package, with hot stones"
	},
	{
		x: .7,
		y: .3,
		t: "Giờ mở cửa 10–22h",
		en: "Opening hours 10:00–22:00"
	},
	{
		x: .55,
		y: .72,
		t: "Huỷ trước 4 giờ",
		en: "Cancel 4 hours ahead"
	}
];
function RagLab() {
	const t = useT();
	const [step, setStep] = (0, import_react.useState)(0);
	const q = {
		x: .32,
		y: .68
	};
	const ranked = DOCS.map((d) => ({
		...d,
		dist: (d.x - q.x) ** 2 + (d.y - q.y) ** 2
	})).sort((a, b) => a.dist - b.dist);
	const ref = useCanvas((ctx, w, h) => {
		const c = tone();
		ctx.clearRect(0, 0, w, h);
		DOCS.forEach((d) => {
			ctx.fillStyle = c.ink;
			ctx.beginPath();
			ctx.arc(20 + d.x * (w - 40), h - 16 - d.y * (h - 32), 6, 0, Math.PI * 2);
			ctx.fill();
		});
		if (step >= 1) {
			ctx.fillStyle = c.accent;
			ctx.beginPath();
			ctx.arc(20 + q.x * (w - 40), h - 16 - q.y * (h - 32), 7, 0, Math.PI * 2);
			ctx.fill();
		}
	}, [step]);
	const names = [
		t("Cắt đoạn", "Split into chunks"),
		t("Nhúng câu hỏi", "Embed the question"),
		t("Lấy đoạn gần", "Retrieve nearest chunks"),
		t("Viết từ đoạn", "Write from the chunks")
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t("RAG trên không gian hai chiều", "RAG on a two-dimensional space"),
		onReset: () => setStep(0),
		onExtreme: () => setStep(3),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref,
				className: "h-48 w-full rounded-xl bg-paper"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium",
				children: names[step]
			}),
			step >= 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm",
				children: [
					t("Đoạn gần nhất", "Nearest chunk"),
					": ",
					t(ranked[0].t, ranked[0].en),
					". ",
					t("Kế tiếp", "Next"),
					": ",
					t(ranked[1].t, ranked[1].en),
					"."
				]
			}) : null,
			step >= 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: t("Câu trả lời chỉ được dùng hai đoạn này. Không thấy đá nóng ở gói 60 phút.", "The answer may only use these two chunks. Hot stones are not mentioned for the 60-minute package.")
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-2 min-h-11 rounded-full bg-accent px-4 text-sm text-accent-ink",
				onClick: () => setStep((s) => Math.min(3, s + 1)),
				children: t("Bước tiếp", "Next step")
			})
		]
	});
}
function TemperatureLab() {
	const t = useT();
	const [temp, setTemp] = (0, import_react.useState)(.7);
	const base = [
		.52,
		.22,
		.12,
		.08,
		.06
	];
	const words = [
		t("gói", "package"),
		t("suất", "slot"),
		"set",
		t("phần", "portion"),
		"menu"
	];
	const softened = base.map((p) => Math.pow(p, 1 / temp));
	const sum = softened.reduce((s, v) => s + v, 0);
	const probs = softened.map((v) => v / sum);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t("Temperature làm phẳng từ tiếp theo", "Temperature flattens the next word"),
		onReset: () => setTemp(.7),
		onExtreme: () => setTemp(temp > .5 ? .2 : 1.4),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: "temperature",
				min: .2,
				max: 1.4,
				step: .05,
				value: temp,
				display: temp.toFixed(2),
				onChange: setTemp
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 space-y-2",
				children: words.map((word, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-12",
							children: word
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "h-3 flex-1 rounded-full bg-line",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block h-3 rounded-full bg-accent",
								style: { width: `${probs[i] * 100}%` }
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "w-12 tabular-nums",
							children: [(probs[i] * 100).toFixed(0), "%"]
						})
					]
				}, word))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: t("Xác suất minh họa cho một vị trí từ, không phải đầu ra của một API thật. Thấp thì gần như luôn chọn «gói».", "Illustrative probabilities for one word position, not the output of a real API. At low values it almost always picks “package”.")
			})
		]
	});
}
function EdaLab() {
	const t = useT();
	const [fence, setFence] = (0, import_react.useState)(1.5);
	const values = [
		12,
		18,
		20,
		22,
		24,
		25,
		28,
		30,
		33,
		36,
		40,
		48,
		120
	];
	const hi = 36 + fence * 14;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t("Hàng rào IQR", "The IQR fence"),
		onReset: () => setFence(1.5),
		onExtreme: () => setFence(fence > 1 ? .5 : 3),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t("Hệ số IQR", "IQR multiplier"),
				min: .5,
				max: 3,
				step: .1,
				value: fence,
				display: fence.toFixed(1),
				onChange: setFence
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 flex flex-wrap gap-2",
				children: values.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `rounded-full px-3 py-2 text-sm ${v > hi ? "bg-accent text-accent-ink" : "border border-line"}`,
					children: v
				}, v))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: t(`Q1 = 22, Q3 = 36, IQR = 14. Hàng rào trên = ${hi.toFixed(0)}. Điểm tô đậm bị đánh dấu để xem, chưa bị xóa. Ví dụ minh họa, đơn vị phút.`, `Q1 = 22, Q3 = 36, IQR = 14. Upper fence = ${hi.toFixed(0)}. Filled points are flagged for review, not deleted. Illustrative example, units are minutes.`)
			})
		]
	});
}
function EnsembleLab() {
	const t = useT();
	const votes = [
		1,
		1,
		0,
		1,
		1
	];
	const yes = votes.filter(Boolean).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t("Năm cây bỏ phiếu", "Five trees vote"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex gap-2",
			children: votes.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `flex h-16 flex-1 items-center justify-center rounded-xl text-sm ${v ? "bg-accent text-accent-ink" : "border border-line"}`,
				children: [
					t("Cây", "Tree"),
					" ",
					i + 1
				]
			}, i))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm",
			children: t(`Phiếu rời: ${yes}/5. Nhãn lấy theo đa số là «rời». Một cây nói «ở» không đổi kết quả. Ví dụ minh họa.`, `Votes to leave: ${yes}/5. The majority label is “leave”. One tree saying “stay” does not change the result. Illustrative example.`)
		})]
	});
}
function SlopeLab() {
	const t = useT();
	const [x, setX] = (0, import_react.useState)(2);
	const slope = 2 * x;
	const ref = useCanvas((ctx, w, h) => {
		const c = tone();
		ctx.clearRect(0, 0, w, h);
		const X = (v) => 16 + (v + 1) / 6 * (w - 32);
		const Y = (v) => h - 16 - v / 16 * (h - 32);
		ctx.beginPath();
		for (let v = -1; v <= 4.01; v += .05) {
			const y = v * v;
			if (v === -1) ctx.moveTo(X(v), Y(y));
			else ctx.lineTo(X(v), Y(y));
		}
		ctx.strokeStyle = c.ink;
		ctx.stroke();
		const y = x * x;
		ctx.strokeStyle = c.accent;
		ctx.beginPath();
		ctx.moveTo(X(x - 1), Y(y - slope));
		ctx.lineTo(X(x + 1), Y(y + slope));
		ctx.stroke();
		ctx.fillStyle = c.accent;
		ctx.beginPath();
		ctx.arc(X(x), Y(y), 5, 0, Math.PI * 2);
		ctx.fill();
	}, [x]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t("Tiếp tuyến của f(x) = x²", "Tangent of f(x) = x²"),
		onReset: () => setX(2),
		onExtreme: () => setX(x > 0 ? -.5 : 3.5),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref,
				className: "h-48 w-full rounded-xl bg-paper"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t("Điểm x", "Point x"),
				min: -.5,
				max: 3.5,
				step: .1,
				value: x,
				display: x.toFixed(1),
				onChange: setX
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					t("Độ dốc", "Slope"),
					" f′(x) = 2x = ",
					slope.toFixed(1),
					". ",
					t("Tại đúng chỗ đang đứng, không phải độ dốc của cả đoạn.", "Exactly at the point you stand on, not the slope of a whole stretch.")
				]
			})
		]
	});
}
function PivotLab() {
	const t = useT();
	const [dim, setDim] = (0, import_react.useState)("channel");
	const rows = [
		{
			channel: "GDN",
			store: "Q1",
			spend: 12,
			forms: 30
		},
		{
			channel: "GDN",
			store: "Q3",
			spend: 8,
			forms: 10
		},
		{
			channel: "Meta",
			store: "Q1",
			spend: 6,
			forms: 20
		},
		{
			channel: "Meta",
			store: "Q3",
			spend: 5,
			forms: 8
		}
	];
	const keys = [...new Set(rows.map((r) => r[dim]))];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t("Gộp một chiều", "Group by one dimension"),
		onReset: () => setDim("channel"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: `min-h-11 rounded-full px-3 text-sm ${dim === "channel" ? "bg-accent text-accent-ink" : "border border-line"}`,
					onClick: () => setDim("channel"),
					children: t("Theo kênh", "By channel")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: `min-h-11 rounded-full px-3 text-sm ${dim === "store" ? "bg-accent text-accent-ink" : "border border-line"}`,
					onClick: () => setDim("store"),
					children: t("Theo cửa hàng", "By store")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full text-left text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: dim === "channel" ? t("Kênh", "Channel") : t("Cửa hàng", "Store") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Spend" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: t("Form", "Forms") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "CPA" })
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: keys.map((key) => {
					const part = rows.filter((r) => r[dim] === key);
					const spend = part.reduce((s, r) => s + r.spend, 0);
					const forms = part.reduce((s, r) => s + r.forms, 0);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-line",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: key }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: spend }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: forms }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: (spend / forms).toFixed(2) })
						]
					}, key);
				}) })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: t("CPA = spend/form trên nhóm, đơn vị ví dụ minh họa. Đổi chiều không viết lại công thức.", "CPA = spend / forms per group, illustrative units. Changing the dimension does not rewrite the formula.")
			})
		]
	});
}
var PHASES = [
	[
		"Hiểu việc",
		"Mall mất khách cuối tuần. Câu hỏi: mất ở tầng nào.",
		"Business understanding",
		"The mall loses weekend visitors. Question: on which floor?"
	],
	[
		"Hiểu dữ liệu",
		"Có POS 14 tháng, camera thiếu ngày lễ.",
		"Data understanding",
		"We have 14 months of POS data; the camera data misses public holidays."
	],
	[
		"Chuẩn bị",
		"Không điền 0 cho ngày camera hỏng.",
		"Preparation",
		"Do not fill 0 for days the camera was broken."
	],
	[
		"Mô hình",
		"Bảng trước sau, tách tầng. Chưa cần thuật toán nặng.",
		"Modelling",
		"A before/after table split by floor. No heavy algorithm needed yet."
	],
	[
		"Đánh giá",
		"Tầng thời trang giảm trước khi tắt ads. Quay lại câu hỏi.",
		"Evaluation",
		"The fashion floor dropped before the ads were switched off. Go back to the question."
	],
	[
		"Đưa vào việc",
		"Một dòng kết luận trong báo cáo tuần.",
		"Deployment",
		"One line of conclusion in the weekly report."
	]
];
function CrispLab() {
	const t = useT();
	const [i, setI] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t("Sáu pha, một case mall", "Six phases, one mall case"),
		onReset: () => setI(0),
		onExtreme: () => setI(5),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-3 gap-2 sm:grid-cols-6",
			children: PHASES.map((phase, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: `min-h-11 rounded-xl px-2 text-xs ${idx === i ? "bg-accent text-accent-ink" : "border border-line"}`,
				onClick: () => setI(idx),
				children: t(phase[0], phase[2])
			}, phase[0]))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-3 text-sm",
			children: [
				t(PHASES[i][1], PHASES[i][3]),
				" ",
				t("Ví dụ minh họa.", "Illustrative example.")
			]
		})]
	});
}
function StoryLab() {
	const t = useT();
	const [after, setAfter] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t("Trước và sau một slide", "A slide before and after"),
		onReset: () => setAfter(false),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mb-3 min-h-11 rounded-full border border-line px-3 text-sm",
				onClick: () => setAfter((v) => !v),
				children: after ? t("Xem bản rối", "See the messy version") : t("Xem bản đã kể", "See the storytelling version")
			}),
			after ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-line p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl",
					children: t("Meta rẻ hơn GDN 18% trên nhóm A", "Meta is 18% cheaper than GDN on group A")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: t("CPA 54 nghìn so với 66 nghìn, cùng 4 tuần, cùng nhóm sản phẩm. Việc tiếp: chuyển 15% ngân sách GDN của nhóm này trong hai tuần.", "CPA 54k vs 66k, same 4 weeks, same product group. Next: move 15% of this group's GDN budget over two weeks.")
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-dashed border-line p-4 text-sm text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("Tiêu đề: Biểu đồ CPA theo kênh và theo tuần và theo nhóm", "Title: CPA chart by channel and by week and by group") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2",
					children: t("Ba trục, hai ghi chú, chưa có câu nào để mang ra cuộc họp.", "Three axes, two footnotes, not one sentence to take into the meeting.")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: t("Số 54 và 66 nghìn là ví dụ minh họa.", "The 54k and 66k figures are illustrative.")
			})
		]
	});
}
function OrLab() {
	const t = useT();
	const [cap, setCap] = (0, import_react.useState)(120);
	const best = Math.min(200, cap);
	const rest = 200 - best;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t("Một trần, một túi tiền", "One cap, one budget"),
		onReset: () => setCap(120),
		onExtreme: () => setCap(cap > 80 ? 40 : 200),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t("Trần kênh rẻ nhất", "Cap on the cheapest channel"),
				min: 40,
				max: 200,
				step: 10,
				value: cap,
				display: t(`${cap} triệu`, `${cap} million`),
				onChange: setCap
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm",
				children: t(`Nếu kênh rẻ được nhận tới ${cap} triệu, phương án biên đổ ${best} triệu vào kênh đó và ${rest} triệu vào kênh còn lại, trong tổng 200. Ví dụ minh họa, chưa phải lời giải Solver đầy đủ.`, `If the cheap channel can take up to ${cap} million, the marginal plan puts ${best} million there and ${rest} million into the other channel, out of 200 in total. Illustrative example, not a full Solver solution.`)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: t("Nới trần thêm 10 triệu chỉ có ích khi trần đang chặn. Hết trần thì thêm ngân sách tổng mới là nút đáng nới.", "Raising the cap by 10 million only helps while the cap is binding. Once it is not, the total budget is the constraint worth loosening.")
			})
		]
	});
}
function FrameLab() {
	const t = useT();
	const steps = [
		t("Lời than: landing yếu.", "The complaint: the landing page is weak."),
		t("Fact: 9.400 phiên, form 1,1%. «Xấu» vẫn là opinion.", "Fact: 9,400 sessions, 1.1% form rate. “Bad” is still an opinion."),
		t("Ba nhánh: nguồn, nội dung, form.", "Three branches: source, content, form."),
		t("SMART: 21 ngày, form từ 1,1% lên 1,6% trên GDN, giá form không tăng quá 15%.", "SMART: 21 days, form rate from 1.1% to 1.6% on GDN, cost per form up by no more than 15%.")
	];
	const [i, setI] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t("Viết lại một câu than", "Rewrite a complaint"),
		onReset: () => setI(0),
		onExtreme: () => setI(3),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-2xl",
				children: steps[i]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-3 min-h-11 rounded-full bg-ink px-4 text-sm text-paper",
				onClick: () => setI((v) => Math.min(3, v + 1)),
				children: t("Bước tiếp", "Next step")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: t("Các số là ví dụ minh họa.", "The numbers are illustrative.")
			})
		]
	});
}
var registry = {
	clt: CltLab,
	ci: CiLab,
	hypothesis: HypothesisLab,
	normal: NormalLab,
	pdf: NormalLab,
	binomial: BinomialLab,
	regression: RegressionLab,
	gd: GdLab,
	sigmoid: SigmoidLab,
	tree: TreeLab,
	kmeans: KmeansLab,
	sql: SqlLab,
	join: JoinLab,
	window: WindowLab,
	bias: BiasLab,
	smooth: SmoothLab,
	rag: RagLab,
	temperature: TemperatureLab,
	eda: EdaLab,
	ensemble: EnsembleLab,
	slope: SlopeLab,
	pivot: PivotLab,
	crisp: CrispLab,
	story: StoryLab,
	or: OrLab,
	frame: FrameLab
};
function Sim({ id }) {
	const Cmp = registry[id] ?? registry2[id];
	if (!Cmp) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cmp, {});
}
//#endregion
export { Range as n, Sim as r, Lab as t };
