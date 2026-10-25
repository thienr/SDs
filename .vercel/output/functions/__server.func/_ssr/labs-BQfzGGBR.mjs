import { o as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { O as subscribeProgress, b as getServerProgress, y as getProgress } from "./router-Bd8qiDpA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/labs-BQfzGGBR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cssVar(name, fallback) {
	if (typeof window === "undefined") return fallback;
	return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;
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
function sampleOf(kind, rng) {
	if (kind === "uniform") return rng() * 6 - 1;
	if (kind === "bimodal") return rng() < .5 ? gauss(rng) * .55 - 1.4 : gauss(rng) * .45 + 1.5;
	return -Math.log(Math.max(1e-6, rng()));
}
function CltLab() {
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
		ctx.fillStyle = c.muted;
		ctx.font = "12px Outfit, sans-serif";
		ctx.fillText("histogram của trung bình mẫu", 4, 14);
	}, [means]);
	const se = (kind === "uniform" ? Math.sqrt(3) : kind === "bimodal" ? 1.5 : 1) / Math.sqrt(n);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: "CLT: trung bình mẫu kéo về hình chuông",
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
					["skew", "Lệch phải"],
					["uniform", "Đều"],
					["bimodal", "Hai đỉnh"]
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
				label: "Cỡ mỗi mẫu n",
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
					"SE ước lượng ≈ σ/√n = ",
					se.toFixed(2),
					". 240 trung bình đang nằm trên hình. Phân phối gốc không cần hình chuông."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-2 min-h-11 text-sm underline",
				onClick: () => setTick((v) => v + 1),
				children: "Lấy bộ mẫu khác"
			})
		]
	});
}
function CiLab() {
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
		ctx.moveTo(x(50), 8);
		ctx.lineTo(x(50), h - 8);
		ctx.stroke();
		intervals.forEach((row, i) => {
			const y = 12 + i * (h - 20) / intervals.length;
			ctx.strokeStyle = row.hit ? c.ink : c.accent;
			ctx.globalAlpha = row.hit ? .35 : .95;
			ctx.beginPath();
			ctx.moveTo(x(row.lo), y);
			ctx.lineTo(x(row.hi), y);
			ctx.stroke();
		});
		ctx.globalAlpha = 1;
	}, [intervals]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: "80 khoảng tin cậy, đường xanh là μ",
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
				label: "Mức tin cậy",
				min: 80,
				max: 99,
				step: 1,
				value: level,
				display: `${level}%`,
				onChange: setLevel
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: "Cỡ mẫu",
				min: 8,
				max: 80,
				step: 1,
				value: n,
				display: String(n),
				onChange: setN
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					misses,
					" khoảng tô đậm không chứa μ = 50. z ≈ ",
					z.toFixed(2),
					". Ví dụ minh họa, σ = 10."
				]
			})
		]
	});
}
function HypothesisLab() {
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
	}, [
		alpha,
		effect,
		zobs,
		zcrit
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: "Vùng bác bỏ, p-value và hiệu thật",
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
				label: "Hiệu thật, theo SE",
				min: 0,
				max: 3,
				step: .1,
				value: effect,
				display: effect.toFixed(1),
				onChange: setEffect
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: "z quan sát",
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
					"Ngưỡng |z| ",
					">",
					" ",
					zcrit.toFixed(2),
					". p hai phía ≈ ",
					p < .001 ? "< 0,001" : p.toFixed(3),
					". ",
					p < alpha / 100 ? "Theo quy ước này thì bác bỏ H0." : "Theo quy ước này thì chưa bác bỏ H0.",
					" Vùng tô là α dưới H0, không phải xác suất H0 đúng."
				]
			})
		]
	});
}
function NormalLab() {
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
	}, [
		mu,
		sd,
		a,
		b
	]);
	const z = (30 - mu) / sd;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: "Chuông chuẩn và diện tích giữa hai mốc",
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
				label: "Trung bình",
				min: 20,
				max: 80,
				step: 1,
				value: mu,
				display: String(mu),
				onChange: setMu
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: "Độ lệch chuẩn",
				min: 2,
				max: 20,
				step: 1,
				value: sd,
				display: String(sd),
				onChange: setSd
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: "Mốc trái",
				min: 10,
				max: 90,
				step: 1,
				value: a,
				display: String(a),
				onChange: setA
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: "Mốc phải",
				min: 10,
				max: 100,
				step: 1,
				value: b,
				display: String(b),
				onChange: setB
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					"Diện tích từ ",
					Math.min(a, b),
					" đến ",
					Math.max(a, b),
					" ≈ ",
					(Math.abs(prob) * 100).toFixed(1),
					"%. z của mốc 30 giây so với trung bình hiện tại là ",
					z.toFixed(2),
					". Ví dụ minh họa, đơn vị giây."
				]
			})
		]
	});
}
function BinomialLab() {
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
			const bh = v / peak * (h - 20);
			ctx.fillStyle = k === Math.round(n * p) ? c.good : c.accent;
			ctx.fillRect(4 + k * bw, h - 8 - bh, Math.max(1, bw - 1), bh);
		});
	}, [
		bars,
		n,
		p
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: "Nhị thức: kéo n và p",
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
				label: "Số phiên n",
				min: 5,
				max: 60,
				step: 1,
				value: n,
				display: String(n),
				onChange: setN
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: "Xác suất form p",
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
					"Kỳ vọng np = ",
					(n * p).toFixed(2),
					". Cột đậm gần tâm. Ví dụ minh họa, không phải tỷ lệ thật của một trang."
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
		const Y = (y) => h - 20 - (y - 20) / 90 * (h - 32);
		ctx.strokeStyle = c.line;
		ctx.strokeRect(28, 8, w - 40, h - 28);
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
	}, [m, b]);
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
		title: "Đường thẳng, phần dư và R²",
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
				label: "Độ dốc",
				min: 0,
				max: 12,
				step: .1,
				value: m,
				display: m.toFixed(1),
				onChange: setM
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: "Chặn",
				min: 0,
				max: 80,
				step: 1,
				value: b,
				display: String(b),
				onChange: setB
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					"RSS = ",
					rss.toFixed(0),
					". R² = ",
					r2.toFixed(2),
					". Đường đang là form = ",
					b.toFixed(0),
					" + ",
					m.toFixed(1),
					" × chi (triệu). Tám điểm là ví dụ minh họa."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-2 min-h-11 rounded-full border border-line px-3 text-sm",
				onClick: fit,
				children: "Đặt đường khớp nhất"
			})
		]
	});
}
function GdLab() {
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
		const Y = (y) => h - 16 - y / peak * (h - 32);
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
	}, [w]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: "Quả bóng trên hàm chi phí một tham số",
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
					". Đáy ở 2,2. Hàm J(w) = (w − 2,2)² là ví dụ minh họa."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "min-h-11 rounded-full bg-accent px-4 text-sm text-accent-ink",
					onClick: () => setPlay((v) => !v),
					children: play ? "Tạm dừng" : "Phát"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "min-h-11 rounded-full border border-line px-4 text-sm",
					onClick: () => setW((prev) => prev - lr * grad(prev)),
					children: "Một bước"
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
		const X = (x) => 8 + x / 80 * (w - 16);
		const Y = (v) => h - 16 - v * (h - 28);
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
		ctx.moveTo(8, Y(cut));
		ctx.lineTo(w - 8, Y(cut));
		ctx.stroke();
		ctx.setLineDash([]);
		ctx.fillStyle = c.accent;
		ctx.beginPath();
		ctx.arc(X(xDemo), Y(p), 5, 0, Math.PI * 2);
		ctx.fill();
	}, [
		b0,
		b1,
		cut,
		p
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: "Sigmoid, ngưỡng và ma trận nhầm",
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
				label: "Ngưỡng gọi",
				min: .1,
				max: .9,
				step: .05,
				value: cut,
				display: cut.toFixed(2),
				onChange: setCut
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm",
				children: [
					"Tại x = 40, log-odds = ",
					z.toFixed(2),
					", xác suất = ",
					p.toFixed(2),
					". Ví dụ minh họa."
				]
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
					". Mười hai điểm mẫu có sẵn, không phải dữ liệu khách."
				]
			})
		]
	});
}
function TreeLab() {
	const [depth, setDepth] = (0, import_react.useState)(1);
	const gini = (p) => 1 - (p * p + (1 - p) * (1 - p));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: "Một nhát cắt và độ sâu",
		onReset: () => setDepth(1),
		onExtreme: () => setDepth(depth > 2 ? 1 : 4),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm",
				children: [
					"Nút gốc 40 ở lại, 60 rời. Gini = ",
					gini(.4).toFixed(2),
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: "Độ sâu đang xem",
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
							"Độ sâu 1: ghé ",
							"<",
							" 2. Nhánh trái 10 ở / 40 rời, Gini ",
							gini(10 / 50).toFixed(2),
							". Nhánh phải 30 ở / 20 rời, Gini ",
							gini(30 / 50).toFixed(2),
							"."
						]
					}),
					depth >= 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-xl border border-line p-3",
						children: "Độ sâu 2: tách tiếp theo chi tiêu. Các lá thuần hơn, câu chuyện vẫn kể được trong một phút."
					}) : null,
					depth >= 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-xl border border-accent p-3",
						children: "Độ sâu 3: một lá chỉ còn 2 khách. Quy tắc bắt đầu nhớ từng người."
					}) : null,
					depth >= 4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-xl bg-accent p-3 text-accent-ink",
						children: "Độ sâu 4: gần như mỗi lá một khách của tập đã thấy. Tháng sau các lá này rỗng. Đó là overfitting nhìn được."
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
	}, [step]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: "K-means: gán rồi dời tâm",
		onReset: () => setStep(0),
		onExtreme: () => setStep(1),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref,
				className: "h-52 w-full rounded-xl bg-paper"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: step === 0 ? "Bước gán: mỗi điểm về tâm gần nhất." : "Bước dời: tâm về trung bình của điểm vừa nhận. Ví dụ minh họa, trục đã chuẩn hóa."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-2 min-h-11 rounded-full bg-ink px-4 text-sm text-paper",
				onClick: () => setStep((s) => (s + 1) % 2),
				children: "Bước tiếp"
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
		title: "Thứ tự logic của SELECT",
		onReset: () => setStep(0),
		onExtreme: () => setStep(5),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-medium",
				children: labels[step]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-sm text-muted",
				children: "Máy không chạy từ chữ SELECT. Đọc từ FROM."
			}),
			step < 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full text-left text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Kênh" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Spend" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Form" })
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
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Kênh" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Tổng form" })]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: ordered.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-t border-line",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: r.channel }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: r.forms })]
				}, r.channel)) })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-3 min-h-11 rounded-full bg-accent px-4 text-sm text-accent-ink",
				onClick: () => setStep((s) => Math.min(5, s + 1)),
				children: "Bước tiếp"
			})
		]
	});
}
function JoinLab() {
	const [mode, setMode] = (0, import_react.useState)("left");
	const stores = [
		{
			id: 1,
			name: "Quận 1"
		},
		{
			id: 2,
			name: "Quận 3"
		},
		{
			id: 3,
			name: "Thủ Đức"
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
		title: "JOIN giữ hoặc bỏ hàng không khớp",
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
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Cửa hàng" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Doanh thu" })]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-t border-line",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: r.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: r.amount ?? "trống" })]
				}, i)) })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "Thủ Đức không có đơn. INNER làm mất cửa hàng đó. Ví dụ minh họa."
			})
		]
	});
}
function WindowLab() {
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
		title: "Cửa sổ lũy kế",
		onReset: () => setI(0),
		onExtreme: () => setI(4),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: "Tuần đang đứng",
				min: 0,
				max: 4,
				step: 1,
				value: i,
				display: `Tuần ${i + 1}`,
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
					"Ô đậm là dòng hiện tại. Số nhỏ là tổng từ đầu cửa sổ tới dòng đó. LAG của tuần này là ",
					i > 0 ? weeks[i - 1] : "không có",
					"."
				]
			})
		]
	});
}
function BiasLab() {
	const [k, setK] = (0, import_react.useState)(3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: "Độ phức tạp và hai đường lỗi",
		onReset: () => setK(3),
		onExtreme: () => setK(k > 4 ? 1 : 7),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: "Độ phức tạp",
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
					children: ["Lỗi tập học ", [
						42,
						28,
						18,
						12,
						7,
						4,
						2
					][k - 1]]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-line p-3",
					children: ["Lỗi tập mới ", [
						40,
						26,
						18,
						17,
						21,
						29,
						38
					][k - 1]]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "Đơn vị ví dụ minh họa. Lỗi tập học cứ giảm. Lỗi tập mới giảm rồi tăng. Chỗ đáng giữ nằm quanh độ phức tạp 3 hoặc 4, không phải 7."
			})
		]
	});
}
function SmoothLab() {
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
		title: "Làm trơn mũ",
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
				children: "Cột đậm là lượt khách tuần, cột đất nung là mức đã làm trơn. α cao thì bám tuần mới, α thấp thì lì. Ví dụ minh họa. Chiều cao dùng đơn vị của chính số liệu mẫu."
			})
		]
	});
}
var DOCS = [
	{
		x: .2,
		y: .75,
		t: "Gói 60 phút, không đá nóng"
	},
	{
		x: .28,
		y: .62,
		t: "Gói 90 phút, có đá nóng"
	},
	{
		x: .7,
		y: .3,
		t: "Giờ mở cửa 10–22h"
	},
	{
		x: .55,
		y: .72,
		t: "Huỷ trước 4 giờ"
	}
];
function RagLab() {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: "RAG trên không gian hai chiều",
		onReset: () => setStep(0),
		onExtreme: () => setStep(3),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref,
				className: "h-48 w-full rounded-xl bg-paper"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium",
				children: [
					"Cắt đoạn",
					"Nhúng câu hỏi",
					"Lấy đoạn gần",
					"Viết từ đoạn"
				][step]
			}),
			step >= 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm",
				children: [
					"Đoạn gần nhất: ",
					ranked[0].t,
					". Kế tiếp: ",
					ranked[1].t,
					"."
				]
			}) : null,
			step >= 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Câu trả lời chỉ được dùng hai đoạn này. Không thấy đá nóng ở gói 60 phút."
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-2 min-h-11 rounded-full bg-accent px-4 text-sm text-accent-ink",
				onClick: () => setStep((s) => Math.min(3, s + 1)),
				children: "Bước tiếp"
			})
		]
	});
}
function TemperatureLab() {
	const [temp, setTemp] = (0, import_react.useState)(.7);
	const base = [
		.52,
		.22,
		.12,
		.08,
		.06
	];
	const words = [
		"gói",
		"suất",
		"set",
		"phần",
		"menu"
	];
	const softened = base.map((p) => Math.pow(p, 1 / temp));
	const sum = softened.reduce((s, v) => s + v, 0);
	const probs = softened.map((v) => v / sum);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: "Temperature làm phẳng từ tiếp theo",
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
				children: "Xác suất minh họa cho một vị trí từ, không phải đầu ra của một API thật. Thấp thì gần như luôn chọn «gói»."
			})
		]
	});
}
function EdaLab() {
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
		title: "Hàng rào IQR",
		onReset: () => setFence(1.5),
		onExtreme: () => setFence(fence > 1 ? .5 : 3),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: "Hệ số IQR",
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-muted",
				children: [
					"Q1 = 22, Q3 = 36, IQR = 14. Hàng rào trên = ",
					hi.toFixed(0),
					". Điểm tô đậm bị đánh dấu để xem, chưa bị xóa. Ví dụ minh họa, đơn vị phút."
				]
			})
		]
	});
}
function EnsembleLab() {
	const votes = [
		1,
		1,
		0,
		1,
		1
	];
	const yes = votes.filter(Boolean).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: "Năm cây bỏ phiếu",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex gap-2",
			children: votes.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `flex h-16 flex-1 items-center justify-center rounded-xl text-sm ${v ? "bg-accent text-accent-ink" : "border border-line"}`,
				children: ["Cây ", i + 1]
			}, i))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-3 text-sm",
			children: [
				"Phiếu rời: ",
				yes,
				"/5. Nhãn lấy theo đa số là «rời». Một cây nói «ở» không đổi kết quả. Ví dụ minh họa."
			]
		})]
	});
}
function SlopeLab() {
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
		title: "Tiếp tuyến của f(x) = x²",
		onReset: () => setX(2),
		onExtreme: () => setX(x > 0 ? -.5 : 3.5),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref,
				className: "h-48 w-full rounded-xl bg-paper"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: "Điểm x",
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
					"Độ dốc f′(x) = 2x = ",
					slope.toFixed(1),
					". Tại đúng chỗ đang đứng, không phải độ dốc của cả đoạn."
				]
			})
		]
	});
}
function PivotLab() {
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
		title: "Gộp một chiều",
		onReset: () => setDim("channel"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: `min-h-11 rounded-full px-3 text-sm ${dim === "channel" ? "bg-accent text-accent-ink" : "border border-line"}`,
					onClick: () => setDim("channel"),
					children: "Theo kênh"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: `min-h-11 rounded-full px-3 text-sm ${dim === "store" ? "bg-accent text-accent-ink" : "border border-line"}`,
					onClick: () => setDim("store"),
					children: "Theo cửa hàng"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full text-left text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: dim === "channel" ? "Kênh" : "Cửa hàng" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Spend" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Form" }),
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
				children: "CPA = spend/form trên nhóm, đơn vị ví dụ minh họa. Đổi chiều không viết lại công thức."
			})
		]
	});
}
var PHASES = [
	["Hiểu việc", "Mall mất khách cuối tuần. Câu hỏi: mất ở tầng nào."],
	["Hiểu dữ liệu", "Có POS 14 tháng, camera thiếu ngày lễ."],
	["Chuẩn bị", "Không điền 0 cho ngày camera hỏng."],
	["Mô hình", "Bảng trước sau, tách tầng. Chưa cần thuật toán nặng."],
	["Đánh giá", "Tầng thời trang giảm trước khi tắt ads. Quay lại câu hỏi."],
	["Đưa vào việc", "Một dòng kết luận trong báo cáo tuần."]
];
function CrispLab() {
	const [i, setI] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: "Sáu pha, một case mall",
		onReset: () => setI(0),
		onExtreme: () => setI(5),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-3 gap-2 sm:grid-cols-6",
			children: PHASES.map((phase, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: `min-h-11 rounded-xl px-2 text-xs ${idx === i ? "bg-accent text-accent-ink" : "border border-line"}`,
				onClick: () => setI(idx),
				children: phase[0]
			}, phase[0]))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-3 text-sm",
			children: [PHASES[i][1], " Ví dụ minh họa."]
		})]
	});
}
function StoryLab() {
	const [after, setAfter] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: "Trước và sau một slide",
		onReset: () => setAfter(false),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mb-3 min-h-11 rounded-full border border-line px-3 text-sm",
				onClick: () => setAfter((v) => !v),
				children: after ? "Xem bản rối" : "Xem bản đã kể"
			}),
			after ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-line p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl",
					children: "Meta rẻ hơn GDN 18% trên nhóm A"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "CPA 54 nghìn so với 66 nghìn, cùng 4 tuần, cùng nhóm sản phẩm. Việc tiếp: chuyển 15% ngân sách GDN của nhóm này trong hai tuần."
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-dashed border-line p-4 text-sm text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Tiêu đề: Biểu đồ CPA theo kênh và theo tuần và theo nhóm" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2",
					children: "Ba trục, hai ghi chú, chưa có câu nào để mang ra cuộc họp."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "Số 54 và 66 nghìn là ví dụ minh họa."
			})
		]
	});
}
function OrLab() {
	const [cap, setCap] = (0, import_react.useState)(120);
	const best = Math.min(200, cap);
	const rest = 200 - best;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: "Một trần, một túi tiền",
		onReset: () => setCap(120),
		onExtreme: () => setCap(cap > 80 ? 40 : 200),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: "Trần kênh rẻ nhất",
				min: 40,
				max: 200,
				step: 10,
				value: cap,
				display: `${cap} triệu`,
				onChange: setCap
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm",
				children: [
					"Nếu kênh rẻ được nhận tới ",
					cap,
					" triệu, phương án biên đổ ",
					best,
					" triệu vào kênh đó và ",
					rest,
					" triệu vào kênh còn lại, trong tổng 200. Ví dụ minh họa, chưa phải lời giải Solver đầy đủ."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "Nới trần thêm 10 triệu chỉ có ích khi trần đang chặn. Hết trần thì thêm ngân sách tổng mới là nút đáng nới."
			})
		]
	});
}
function FrameLab() {
	const steps = [
		"Lời than: landing yếu.",
		"Fact: 9.400 phiên, form 1,1%. «Xấu» vẫn là opinion.",
		"Ba nhánh: nguồn, nội dung, form.",
		"SMART: 21 ngày, form từ 1,1% lên 1,6% trên GDN, giá form không tăng quá 15%."
	];
	const [i, setI] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: "Viết lại một câu than",
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
				children: "Bước tiếp"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "Các số là ví dụ minh họa."
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
	const Cmp = registry[id];
	if (!Cmp) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cmp, {});
}
//#endregion
export { Range as n, Sim as r, Lab as t };
