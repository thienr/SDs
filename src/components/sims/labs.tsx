import { useEffect, useMemo, useState, type ReactElement } from "react";
import { Lab, Range, cdf, cssVar, gauss, invNorm, mulberry32, pdf, useCanvas } from "@/components/sims/kit";

function tone() {
  return {
    ink: cssVar("--ink", "#1c1915"),
    muted: cssVar("--muted", "#6f675e"),
    accent: cssVar("--accent", "#b5461f"),
    good: cssVar("--good", "#2f6b4f"),
    line: cssVar("--line", "#e4dacb"),
    card: cssVar("--card", "#fbf7f1"),
  };
}

type Ink = ReturnType<typeof tone>;

/** Số trên trục ngang, nằm sát đáy ô vẽ. */
function xTicks(ctx: CanvasRenderingContext2D, c: Ink, h: number, items: [number, string][]) {
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
function caption(ctx: CanvasRenderingContext2D, c: Ink, text: string) {
  const maxW = ctx.canvas.getBoundingClientRect().width - 12;
  let size = 11;
  ctx.font = `${size}px Outfit, sans-serif`;
  while (ctx.measureText(text).width > maxW && size > 8) {
    size -= 0.5;
    ctx.font = `${size}px Outfit, sans-serif`;
  }
  ctx.fillStyle = c.muted;
  ctx.textAlign = "left";
  ctx.textBaseline = "alphabetic";
  ctx.fillText(text, 6, 12);
}

function sampleOf(kind: string, rng: () => number) {
  if (kind === "uniform") return rng() * 6 - 1;
  if (kind === "bimodal") return rng() < 0.5 ? gauss(rng) * 0.55 - 1.4 : gauss(rng) * 0.45 + 1.5;
  return -Math.log(Math.max(1e-6, rng()));
}

export function CltLab() {
  const [kind, setKind] = useState("skew");
  const [n, setN] = useState(20);
  const [tick, setTick] = useState(1);
  const means = useMemo(() => {
    const rng = mulberry32(7 + tick * 13 + n);
    const out: number[] = [];
    for (let i = 0; i < 240; i++) {
      let s = 0;
      for (let k = 0; k < n; k++) s += sampleOf(kind, rng);
      out.push(s / n);
    }
    return out;
  }, [kind, n, tick]);
  const ref = useCanvas((ctx, w, h) => {
    const c = tone();
    ctx.clearRect(0, 0, w, h);
    const bins = 18;
    const min = Math.min(...means);
    const max = Math.max(...means);
    const counts = Array(bins).fill(0);
    for (const m of means) {
      const idx = Math.min(bins - 1, Math.max(0, Math.floor(((m - min) / (max - min || 1)) * bins)));
      counts[idx] += 1;
    }
    const peak = Math.max(...counts);
    const gap = 4;
    const bw = (w - 8) / bins;
    counts.forEach((count, i) => {
      const bh = (count / peak) * (h - 28);
      ctx.fillStyle = c.accent;
      ctx.globalAlpha = 0.85;
      ctx.fillRect(4 + i * bw, h - 18 - bh, bw - gap, bh);
    });
    ctx.globalAlpha = 1;
    caption(ctx, c, "ngang: trung bình một mẫu · cao: số mẫu");
    xTicks(ctx, c, h, [[4, min.toFixed(1)], [w / 2, ((min + max) / 2).toFixed(1)], [w - 4, max.toFixed(1)]]);
  }, [means]);
  const sdPop = kind === "uniform" ? Math.sqrt(3) : kind === "bimodal" ? 1.5 : 1;
  const se = sdPop / Math.sqrt(n);
  return (
    <Lab title="CLT: trung bình mẫu kéo về hình chuông" onReset={() => { setN(20); setKind("skew"); setTick(1); }} onExtreme={() => setN(n < 10 ? 40 : 1)}>
      <div className="mb-2 flex flex-wrap gap-2">
        {[
          ["skew", "Lệch phải"],
          ["uniform", "Đều"],
          ["bimodal", "Hai đỉnh"],
        ].map(([id, label]) => (
          <button key={id} type="button" className={`min-h-11 rounded-full px-3 text-sm ${kind === id ? "bg-accent text-accent-ink" : "border border-line"}`} onClick={() => setKind(id)}>
            {label}
          </button>
        ))}
      </div>
      <canvas ref={ref} className="h-52 w-full rounded-xl bg-paper" />
      <Range label="Cỡ mỗi mẫu n" min={1} max={40} step={1} value={n} display={String(n)} onChange={setN} />
      <p className="text-sm text-muted">SE ước lượng ≈ σ/√n = {se.toFixed(2)}. 240 trung bình đang nằm trên hình. Phân phối gốc không cần hình chuông.</p>
      <button type="button" className="mt-2 min-h-11 text-sm underline" onClick={() => setTick((v) => v + 1)}>Lấy bộ mẫu khác</button>
    </Lab>
  );
}

export function CiLab() {
  const [level, setLevel] = useState(95);
  const [n, setN] = useState(30);
  const z = invNorm(1 - (1 - level / 100) / 2);
  const intervals = useMemo(() => {
    const rng = mulberry32(99 + n);
    const sigma = 10;
    const mu = 50;
    const se = sigma / Math.sqrt(n);
    return Array.from({ length: 80 }, () => {
      const mean = mu + se * gauss(rng);
      const half = z * se;
      return { lo: mean - half, hi: mean + half, hit: mean - half <= mu && mu <= mean + half };
    });
  }, [n, z]);
  const misses = intervals.filter((row) => !row.hit).length;
  const ref = useCanvas((ctx, w, h) => {
    const c = tone();
    ctx.clearRect(0, 0, w, h);
    const lo = 50 - 18;
    const hi = 50 + 18;
    const x = (v: number) => ((v - lo) / (hi - lo)) * (w - 16) + 8;
    ctx.strokeStyle = c.good;
    ctx.beginPath();
    ctx.moveTo(x(50), 18);
    ctx.lineTo(x(50), h - 18);
    ctx.stroke();
    intervals.forEach((row, i) => {
      const y = 22 + (i * (h - 46)) / intervals.length;
      ctx.strokeStyle = row.hit ? c.ink : c.accent;
      ctx.globalAlpha = row.hit ? 0.35 : 0.95;
      ctx.beginPath();
      ctx.moveTo(x(row.lo), y);
      ctx.lineTo(x(row.hi), y);
      ctx.stroke();
    });
    ctx.globalAlpha = 1;
    caption(ctx, c, "mỗi gạch: khoảng tin cậy của một mẫu · xanh: μ");
    xTicks(ctx, c, h, [32, 41, 50, 59, 68].map((v) => [x(v), String(v)] as [number, string]));
  }, [intervals]);
  return (
    <Lab title="80 khoảng tin cậy, đường xanh là μ" onReset={() => { setLevel(95); setN(30); }} onExtreme={() => setLevel(level > 90 ? 80 : 99)}>
      <canvas ref={ref} className="h-56 w-full rounded-xl bg-paper" />
      <Range label="Mức tin cậy" min={80} max={99} step={1} value={level} display={`${level}%`} onChange={setLevel} />
      <Range label="Cỡ mẫu" min={8} max={80} step={1} value={n} display={String(n)} onChange={setN} />
      <p className="text-sm text-muted">{misses} khoảng tô đậm không chứa μ = 50. z ≈ {z.toFixed(2)}. Ví dụ minh họa, σ = 10.</p>
    </Lab>
  );
}

export function HypothesisLab() {
  const [alpha, setAlpha] = useState(5);
  const [effect, setEffect] = useState(1.2);
  const [zobs, setZobs] = useState(2.1);
  const zcrit = invNorm(1 - alpha / 100 / 2);
  const p = 2 * (1 - cdf(Math.abs(zobs)));
  const ref = useCanvas((ctx, w, h) => {
    const c = tone();
    ctx.clearRect(0, 0, w, h);
    const x0 = -4;
    const x1 = 4;
    const X = (x: number) => ((x - x0) / (x1 - x0)) * (w - 16) + 8;
    const yMax = pdf(0);
    const Y = (d: number) => h - 24 - (d / yMax) * (h - 40);
    const curve = (mu: number, color: string) => {
      ctx.beginPath();
      for (let i = 0; i <= 80; i++) {
        const x = x0 + ((x1 - x0) * i) / 80;
        const y = Y(pdf(x, mu, 1));
        if (i === 0) ctx.moveTo(X(x), y);
        else ctx.lineTo(X(x), y);
      }
      ctx.strokeStyle = color;
      ctx.stroke();
    };
    ctx.fillStyle = c.accent;
    ctx.globalAlpha = 0.18;
    ctx.beginPath();
    ctx.moveTo(X(-4), Y(0));
    for (let x = -4; x <= -zcrit; x += 0.05) ctx.lineTo(X(x), Y(pdf(x)));
    ctx.lineTo(X(-zcrit), Y(0));
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(X(zcrit), Y(0));
    for (let x = zcrit; x <= 4; x += 0.05) ctx.lineTo(X(x), Y(pdf(x)));
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
    xTicks(ctx, c, h, [-4, -2, 0, 2, 4].map((v) => [X(v), v === 0 ? "z = 0" : String(v)] as [number, string]));
  }, [alpha, effect, zobs, zcrit]);
  return (
    <Lab title="Vùng bác bỏ, p-value và hiệu thật" onReset={() => { setAlpha(5); setEffect(1.2); setZobs(2.1); }} onExtreme={() => setEffect(effect > 0.4 ? 0 : 2.8)}>
      <canvas ref={ref} className="h-52 w-full rounded-xl bg-paper" />
      <Range label="α (%)" min={1} max={20} step={1} value={alpha} display={`${alpha}%`} onChange={setAlpha} />
      <Range label="Hiệu thật, theo SE" min={0} max={3} step={0.1} value={effect} display={effect.toFixed(1)} onChange={setEffect} />
      <Range label="z quan sát" min={-1} max={4} step={0.1} value={zobs} display={zobs.toFixed(1)} onChange={setZobs} />
      <p className="text-sm text-muted">
        Ngưỡng |z| {'>'} {zcrit.toFixed(2)}. p hai phía ≈ {p < 0.001 ? "< 0,001" : p.toFixed(3)}. {p < alpha / 100 ? "Theo quy ước này thì bác bỏ H0." : "Theo quy ước này thì chưa bác bỏ H0."} Vùng tô là α dưới H0, không phải xác suất H0 đúng.
      </p>
    </Lab>
  );
}

export function NormalLab() {
  const [mu, setMu] = useState(42);
  const [sd, setSd] = useState(8);
  const [a, setA] = useState(30);
  const [b, setB] = useState(50);
  const prob = cdf(b, mu, sd) - cdf(a, mu, sd);
  const ref = useCanvas((ctx, w, h) => {
    const c = tone();
    ctx.clearRect(0, 0, w, h);
    const lo = mu - 4 * sd;
    const hi = mu + 4 * sd;
    const X = (x: number) => ((x - lo) / (hi - lo)) * (w - 16) + 8;
    const yMax = pdf(mu, mu, sd);
    const Y = (d: number) => h - 20 - (d / yMax) * (h - 36);
    ctx.beginPath();
    ctx.moveTo(X(a), Y(0));
    for (let x = a; x <= b; x += (hi - lo) / 80) ctx.lineTo(X(x), Y(pdf(x, mu, sd)));
    ctx.lineTo(X(b), Y(0));
    ctx.fillStyle = c.accent;
    ctx.globalAlpha = 0.25;
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.beginPath();
    for (let i = 0; i <= 100; i++) {
      const x = lo + ((hi - lo) * i) / 100;
      const y = Y(pdf(x, mu, sd));
      if (i === 0) ctx.moveTo(X(x), y);
      else ctx.lineTo(X(x), y);
    }
    ctx.strokeStyle = c.ink;
    ctx.stroke();
    caption(ctx, c, "ngang: giây · vùng tô: giữa hai mốc");
    xTicks(ctx, c, h, [-3, -2, -1, 0, 1, 2, 3].map((k) => [X(mu + k * sd), String(Math.round(mu + k * sd))] as [number, string]));
  }, [mu, sd, a, b]);
  const z = (30 - mu) / sd;
  return (
    <Lab title="Chuông chuẩn và diện tích giữa hai mốc" onReset={() => { setMu(42); setSd(8); setA(30); setB(50); }} onExtreme={() => setSd(sd > 4 ? 2 : 16)}>
      <canvas ref={ref} className="h-48 w-full rounded-xl bg-paper" />
      <Range label="Trung bình" min={20} max={80} step={1} value={mu} display={String(mu)} onChange={setMu} />
      <Range label="Độ lệch chuẩn" min={2} max={20} step={1} value={sd} display={String(sd)} onChange={setSd} />
      <Range label="Mốc trái" min={10} max={90} step={1} value={a} display={String(a)} onChange={setA} />
      <Range label="Mốc phải" min={10} max={100} step={1} value={b} display={String(b)} onChange={setB} />
      <p className="text-sm text-muted">Diện tích từ {Math.min(a, b)} đến {Math.max(a, b)} ≈ {(Math.abs(prob) * 100).toFixed(1)}%. z của mốc 30 giây so với trung bình hiện tại là {z.toFixed(2)}. Ví dụ minh họa, đơn vị giây.</p>
    </Lab>
  );
}

export function BinomialLab() {
  const [n, setN] = useState(40);
  const [p, setP] = useState(0.08);
  const bars = useMemo(() => {
    const vals: number[] = [];
    let term = (1 - p) ** n;
    for (let k = 0; k <= n; k++) {
      vals.push(term);
      term *= ((n - k) / (k + 1)) * (p / (1 - p || 1e-9));
    }
    return vals;
  }, [n, p]);
  const ref = useCanvas((ctx, w, h) => {
    const c = tone();
    ctx.clearRect(0, 0, w, h);
    const peak = Math.max(...bars);
    const bw = (w - 8) / bars.length;
    bars.forEach((v, k) => {
      const bh = (v / peak) * (h - 40);
      ctx.fillStyle = k === Math.round(n * p) ? c.good : c.accent;
      ctx.fillRect(4 + k * bw, h - 20 - bh, Math.max(1, bw - 1), bh);
    });
    caption(ctx, c, "ngang: số lần trúng k · cao: xác suất");
    xTicks(ctx, c, h, [0, Math.round(n / 4), Math.round(n / 2), Math.round((3 * n) / 4), n].map((k) => [4 + (k + 0.5) * bw, String(k)] as [number, string]));
  }, [bars, n, p]);
  return (
    <Lab title="Nhị thức: kéo n và p" onReset={() => { setN(40); setP(0.08); }} onExtreme={() => setP(p > 0.2 ? 0.05 : 0.5)}>
      <canvas ref={ref} className="h-48 w-full rounded-xl bg-paper" />
      <Range label="Số phiên n" min={5} max={60} step={1} value={n} display={String(n)} onChange={setN} />
      <Range label="Xác suất form p" min={0.02} max={0.6} step={0.01} value={p} display={p.toFixed(2)} onChange={setP} />
      <p className="text-sm text-muted">Kỳ vọng np = {(n * p).toFixed(2)}. Cột đậm gần tâm. Ví dụ minh họa, không phải tỷ lệ thật của một trang.</p>
    </Lab>
  );
}

const REG_PTS = [
  [2, 32],
  [4, 41],
  [5, 48],
  [7, 60],
  [8, 66],
  [10, 80],
  [11, 78],
  [13, 96],
];

export function RegressionLab() {
  const [m, setM] = useState(6);
  const [b, setB] = useState(20);
  const yhat = (x: number) => b + m * x;
  const ybar = REG_PTS.reduce((s, p) => s + p[1], 0) / REG_PTS.length;
  const rss = REG_PTS.reduce((s, p) => s + (p[1] - yhat(p[0])) ** 2, 0);
  const tss = REG_PTS.reduce((s, p) => s + (p[1] - ybar) ** 2, 0);
  const r2 = 1 - rss / tss;
  const ref = useCanvas((ctx, w, h) => {
    const c = tone();
    ctx.clearRect(0, 0, w, h);
    const X = (x: number) => 28 + ((x - 1) / 13) * (w - 40);
    const Y = (y: number) => h - 20 - ((y - 20) / 90) * (h - 44);
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
    [20, 60, 100].forEach((v) => ctx.fillText(String(v), 24, Y(v) + 4));
    ctx.textAlign = "left";
    caption(ctx, c, "ngang: chi tiêu (triệu) · dọc: số form");
    xTicks(ctx, c, h, [2, 4, 6, 8, 10, 12, 14].map((v) => [X(v), String(v)] as [number, string]));
  }, [m, b]);
  const fit = () => {
    const xs = REG_PTS.map((p) => p[0]);
    const ys = REG_PTS.map((p) => p[1]);
    const xb = xs.reduce((s, v) => s + v, 0) / xs.length;
    const yb = ys.reduce((s, v) => s + v, 0) / ys.length;
    const num = xs.reduce((s, x, i) => s + (x - xb) * (ys[i] - yb), 0);
    const den = xs.reduce((s, x) => s + (x - xb) ** 2, 0);
    const slope = num / den;
    setM(Math.round(slope * 10) / 10);
    setB(Math.round((yb - slope * xb) * 10) / 10);
  };
  return (
    <Lab title="Đường thẳng, phần dư và R²" onReset={() => { setM(6); setB(20); }} onExtreme={() => { setM(0); setB(60); }}>
      <canvas ref={ref} className="h-52 w-full rounded-xl bg-paper" />
      <Range label="Độ dốc" min={0} max={12} step={0.1} value={m} display={m.toFixed(1)} onChange={setM} />
      <Range label="Chặn" min={0} max={80} step={1} value={b} display={String(b)} onChange={setB} />
      <p className="text-sm text-muted">RSS = {rss.toFixed(0)}. R² = {r2.toFixed(2)}. Đường đang là form = {b.toFixed(0)} + {m.toFixed(1)} × chi (triệu). Tám điểm là ví dụ minh họa.</p>
      <button type="button" className="mt-2 min-h-11 rounded-full border border-line px-3 text-sm" onClick={fit}>Đặt đường khớp nhất</button>
    </Lab>
  );
}

export function GdLab() {
  const [lr, setLr] = useState(0.15);
  const [w, setW] = useState(-1);
  const [play, setPlay] = useState(false);
  const cost = (x: number) => (x - 2.2) ** 2;
  const grad = (x: number) => 2 * (x - 2.2);
  useEffect(() => {
    if (!play) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
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
    const X = (x: number) => ((x - lo) / (hi - lo)) * (ww - 16) + 8;
    const peak = cost(-2);
    const Y = (y: number) => h - 22 - (y / peak) * (h - 46);
    ctx.beginPath();
    for (let i = 0; i <= 80; i++) {
      const x = lo + ((hi - lo) * i) / 80;
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
    caption(ctx, c, "ngang: tham số w · dọc: chi phí J(w)");
    xTicks(ctx, c, h, [-2, 0, 2.2, 4, 6].map((v) => [X(v), String(v)] as [number, string]));
  }, [w]);
  return (
    <Lab title="Quả bóng trên hàm chi phí một tham số" onReset={() => { setW(-1); setLr(0.15); setPlay(false); }} onExtreme={() => setLr(lr < 0.8 ? 1.05 : 0.02)}>
      <canvas ref={ref} className="h-48 w-full rounded-xl bg-paper" />
      <Range label="Learning rate η" min={0.02} max={1.1} step={0.01} value={lr} display={lr.toFixed(2)} onChange={setLr} />
      <p className="text-sm text-muted">w = {w.toFixed(2)}, J = {cost(w).toFixed(2)}. Đáy ở 2,2. Hàm J(w) = (w − 2,2)² là ví dụ minh họa.</p>
      <div className="mt-2 flex gap-2">
        <button type="button" className="min-h-11 rounded-full bg-accent px-4 text-sm text-accent-ink" onClick={() => setPlay((v) => !v)}>{play ? "Tạm dừng" : "Phát"}</button>
        <button type="button" className="min-h-11 rounded-full border border-line px-4 text-sm" onClick={() => setW((prev) => prev - lr * grad(prev))}>Một bước</button>
      </div>
    </Lab>
  );
}

const SCORES = [
  { y: 0, s: 0.08 }, { y: 0, s: 0.14 }, { y: 0, s: 0.22 }, { y: 0, s: 0.31 },
  { y: 0, s: 0.4 }, { y: 0, s: 0.48 }, { y: 1, s: 0.28 }, { y: 1, s: 0.46 },
  { y: 1, s: 0.58 }, { y: 1, s: 0.66 }, { y: 1, s: 0.74 }, { y: 1, s: 0.86 },
];

export function SigmoidLab() {
  const [b0, setB0] = useState(-2.2);
  const [b1, setB1] = useState(0.08);
  const [cut, setCut] = useState(0.35);
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
    const X = (x: number) => 26 + (x / 80) * (w - 34);
    const Y = (v: number) => h - 24 - v * (h - 44);
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
    [0, 0.5, 1].forEach((v) => ctx.fillText(String(v), 22, Y(v) + 4));
    ctx.textAlign = "left";
    caption(ctx, c, "ngang: biến x · dọc: xác suất · nét đứt: ngưỡng");
    xTicks(ctx, c, h, [0, 20, 40, 60, 80].map((v) => [X(v), String(v)] as [number, string]));
  }, [b0, b1, cut, p]);
  return (
    <Lab title="Sigmoid, ngưỡng và ma trận nhầm" onReset={() => { setB0(-2.2); setB1(0.08); setCut(0.35); }} onExtreme={() => setCut(cut > 0.5 ? 0.2 : 0.8)}>
      <canvas ref={ref} className="h-48 w-full rounded-xl bg-paper" />
      <Range label="β0" min={-4} max={1} step={0.1} value={b0} display={b0.toFixed(1)} onChange={setB0} />
      <Range label="β1" min={-0.02} max={0.16} step={0.01} value={b1} display={b1.toFixed(2)} onChange={setB1} />
      <Range label="Ngưỡng gọi" min={0.1} max={0.9} step={0.05} value={cut} display={cut.toFixed(2)} onChange={setCut} />
      <p className="text-sm">Tại x = 40, log-odds = {z.toFixed(2)}, xác suất = {p.toFixed(2)}. Ví dụ minh họa.</p>
      <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
        <div className="rounded-xl border border-line p-3">TP {tp} · FN {fn}</div>
        <div className="rounded-xl border border-line p-3">FP {fp} · TN {tn}</div>
      </div>
      <p className="mt-2 text-sm text-muted">Recall = {tp + fn ? (tp / (tp + fn)).toFixed(2) : "—"}. Precision = {tp + fp ? (tp / (tp + fp)).toFixed(2) : "—"}. Mười hai điểm mẫu có sẵn, không phải dữ liệu khách.</p>
    </Lab>
  );
}

export function TreeLab() {
  const [depth, setDepth] = useState(1);
  const gini = (p: number) => 1 - (p * p + (1 - p) * (1 - p));
  return (
    <Lab title="Một nhát cắt và độ sâu" onReset={() => setDepth(1)} onExtreme={() => setDepth(depth > 2 ? 1 : 4)}>
      <p className="text-sm">Nút gốc 40 ở lại, 60 rời. Gini = {gini(0.4).toFixed(2)}.</p>
      <Range label="Độ sâu đang xem" min={1} max={4} step={1} value={depth} display={String(depth)} onChange={setDepth} />
      <div className="mt-3 space-y-2 text-sm">
        <div className="rounded-xl border border-line p-3">Độ sâu 1: ghé {'<'} 2. Nhánh trái 10 ở / 40 rời, Gini {gini(10 / 50).toFixed(2)}. Nhánh phải 30 ở / 20 rời, Gini {gini(30 / 50).toFixed(2)}.</div>
        {depth >= 2 ? <div className="rounded-xl border border-line p-3">Độ sâu 2: tách tiếp theo chi tiêu. Các lá thuần hơn, câu chuyện vẫn kể được trong một phút.</div> : null}
        {depth >= 3 ? <div className="rounded-xl border border-accent p-3">Độ sâu 3: một lá chỉ còn 2 khách. Quy tắc bắt đầu nhớ từng người.</div> : null}
        {depth >= 4 ? <div className="rounded-xl bg-accent p-3 text-accent-ink">Độ sâu 4: gần như mỗi lá một khách của tập đã thấy. Tháng sau các lá này rỗng. Đó là overfitting nhìn được.</div> : null}
      </div>
    </Lab>
  );
}

const KM = [
  [0.2, 0.3], [0.25, 0.45], [0.35, 0.28], [0.4, 0.5],
  [0.7, 0.72], [0.78, 0.6], [0.62, 0.8], [0.85, 0.78],
  [0.55, 0.22], [0.68, 0.3], [0.6, 0.38], [0.75, 0.18],
];

export function KmeansLab() {
  const [step, setStep] = useState(0);
  const centroids = [
    [[0.3, 0.35], [0.75, 0.7], [0.66, 0.28]],
    [[0.3, 0.38], [0.74, 0.73], [0.64, 0.27]],
  ];
  const centers = centroids[Math.min(step, centroids.length - 1)];
  const ref = useCanvas((ctx, w, h) => {
    const c = tone();
    ctx.clearRect(0, 0, w, h);
    const colors = [c.accent, c.good, c.ink];
    KM.forEach(([x, y]) => {
      let best = 0;
      let dist = Infinity;
      centers.forEach((ct, i) => {
        const d = (ct[0] - x) ** 2 + (ct[1] - y) ** 2;
        if (d < dist) { dist = d; best = i; }
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
    caption(ctx, c, "hai biến chuẩn hóa 0–1 · ô vuông: tâm cụm");
  }, [step]);
  return (
    <Lab title="K-means: gán rồi dời tâm" onReset={() => setStep(0)} onExtreme={() => setStep(1)}>
      <canvas ref={ref} className="h-52 w-full rounded-xl bg-paper" />
      <p className="text-sm text-muted">{step === 0 ? "Bước gán: mỗi điểm về tâm gần nhất." : "Bước dời: tâm về trung bình của điểm vừa nhận. Ví dụ minh họa, trục đã chuẩn hóa."}</p>
      <button type="button" className="mt-2 min-h-11 rounded-full bg-ink px-4 text-sm text-paper" onClick={() => setStep((s) => (s + 1) % 2)}>Bước tiếp</button>
    </Lab>
  );
}

const SQL_ROWS = [
  { channel: "GDN", spend: 12, forms: 20 },
  { channel: "GDN", spend: 0, forms: 0 },
  { channel: "Meta", spend: 8, forms: 18 },
  { channel: "Meta", spend: 4, forms: 14 },
  { channel: "TikTok", spend: 6, forms: 9 },
  { channel: "TikTok", spend: 3, forms: 4 },
];

export function SqlLab() {
  const [step, setStep] = useState(0);
  const labels = ["FROM", "WHERE spend > 0", "GROUP BY channel", "HAVING SUM(forms) > 15", "SELECT", "ORDER BY"];
  const rows = SQL_ROWS.filter((r) => step < 1 || r.spend > 0);
  const grouped = [
    { channel: "GDN", forms: 20 },
    { channel: "Meta", forms: 32 },
    { channel: "TikTok", forms: 13 },
  ].filter((r) => step < 3 || r.forms > 15);
  const ordered = step >= 5 ? [...grouped].sort((a, b) => b.forms - a.forms) : grouped;
  return (
    <Lab title="Thứ tự logic của SELECT" onReset={() => setStep(0)} onExtreme={() => setStep(5)}>
      <p className="font-medium">{labels[step]}</p>
      <p className="mb-2 text-sm text-muted">Máy không chạy từ chữ SELECT. Đọc từ FROM.</p>
      {step < 2 ? (
        <table className="w-full text-left text-sm">
          <thead><tr className="text-muted"><th>Kênh</th><th>Spend</th><th>Form</th></tr></thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.channel + r.spend} className="border-t border-line"><td>{r.channel}</td><td>{r.spend}</td><td>{r.forms}</td></tr>
            ))}
          </tbody>
        </table>
      ) : (
        <table className="w-full text-left text-sm">
          <thead><tr className="text-muted"><th>Kênh</th><th>Tổng form</th></tr></thead>
          <tbody>
            {ordered.map((r) => (
              <tr key={r.channel} className="border-t border-line"><td>{r.channel}</td><td>{r.forms}</td></tr>
            ))}
          </tbody>
        </table>
      )}
      <button type="button" className="mt-3 min-h-11 rounded-full bg-accent px-4 text-sm text-accent-ink" onClick={() => setStep((s) => Math.min(5, s + 1))}>Bước tiếp</button>
    </Lab>
  );
}

export function JoinLab() {
  const [mode, setMode] = useState<"inner" | "left" | "right">("left");
  const stores = [
    { id: 1, name: "Quận 1" },
    { id: 2, name: "Quận 3" },
    { id: 3, name: "Thủ Đức" },
  ];
  const orders = [
    { store: 1, amount: 12 },
    { store: 1, amount: 4 },
    { store: 2, amount: 9 },
  ];
  let rows: { name: string; amount: number | null }[] = [];
  if (mode === "inner") {
    rows = orders.map((o) => ({ name: stores.find((s) => s.id === o.store)?.name ?? "?", amount: o.amount }));
  } else if (mode === "left") {
    const next: { name: string; amount: number | null }[] = [];
    for (const s of stores) {
      const hit = orders.filter((o) => o.store === s.id);
      if (!hit.length) next.push({ name: s.name, amount: null });
      else for (const o of hit) next.push({ name: s.name, amount: o.amount });
    }
    rows = next;
  } else {
    rows = orders.map((o) => ({ name: stores.find((s) => s.id === o.store)?.name ?? "?", amount: o.amount }));
  }
  return (
    <Lab title="JOIN giữ hoặc bỏ hàng không khớp" onReset={() => setMode("left")}>
      <div className="mb-3 flex gap-2">
        {(["inner", "left", "right"] as const).map((id) => (
          <button key={id} type="button" className={`min-h-11 rounded-full px-3 text-sm uppercase ${mode === id ? "bg-accent text-accent-ink" : "border border-line"}`} onClick={() => setMode(id)}>{id}</button>
        ))}
      </div>
      <table className="w-full text-left text-sm">
        <thead><tr className="text-muted"><th>Cửa hàng</th><th>Doanh thu</th></tr></thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-line"><td>{r.name}</td><td>{r.amount ?? "trống"}</td></tr>
          ))}
        </tbody>
      </table>
      <p className="mt-2 text-sm text-muted">Thủ Đức không có đơn. INNER làm mất cửa hàng đó. Ví dụ minh họa.</p>
    </Lab>
  );
}

export function WindowLab() {
  const [i, setI] = useState(2);
  const weeks = [10, 12, 8, 15, 11];
  const running = weeks.map((_, idx) => weeks.slice(0, idx + 1).reduce((s, v) => s + v, 0));
  return (
    <Lab title="Cửa sổ lũy kế" onReset={() => setI(0)} onExtreme={() => setI(4)}>
      <Range label="Tuần đang đứng" min={0} max={4} step={1} value={i} display={`Tuần ${i + 1}`} onChange={setI} />
      <div className="mt-2 flex gap-2">
        {weeks.map((v, idx) => (
          <div key={idx} className={`min-h-16 flex-1 rounded-xl border p-2 text-center text-sm ${idx === i ? "border-accent bg-accent text-accent-ink" : idx < i ? "border-line" : "border-dashed border-line text-muted"}`}>
            <div>{v}</div>
            <div className="text-xs">{idx <= i ? running[idx] : ""}</div>
          </div>
        ))}
      </div>
      <p className="mt-2 text-sm text-muted">Ô đậm là dòng hiện tại. Số nhỏ là tổng từ đầu cửa sổ tới dòng đó. LAG của tuần này là {i > 0 ? weeks[i - 1] : "không có"}.</p>
    </Lab>
  );
}

export function BiasLab() {
  const [k, setK] = useState(3);
  const train = [42, 28, 18, 12, 7, 4, 2];
  const test = [40, 26, 18, 17, 21, 29, 38];
  return (
    <Lab title="Độ phức tạp và hai đường lỗi" onReset={() => setK(3)} onExtreme={() => setK(k > 4 ? 1 : 7)}>
      <Range label="Độ phức tạp" min={1} max={7} step={1} value={k} display={String(k)} onChange={setK} />
      <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-xl border border-line p-3">Lỗi tập học {train[k - 1]}</div>
        <div className="rounded-xl border border-line p-3">Lỗi tập mới {test[k - 1]}</div>
      </div>
      <p className="mt-2 text-sm text-muted">Đơn vị ví dụ minh họa. Lỗi tập học cứ giảm. Lỗi tập mới giảm rồi tăng. Chỗ đáng giữ nằm quanh độ phức tạp 3 hoặc 4, không phải 7.</p>
    </Lab>
  );
}

export function SmoothLab() {
  const [alpha, setAlpha] = useState(0.4);
  const y = [20, 22, 21, 28, 30, 27, 26, 33];
  const fit: number[] = [];
  let level = y[0];
  for (const value of y) {
    level = alpha * value + (1 - alpha) * level;
    fit.push(level);
  }
  return (
    <Lab title="Làm trơn mũ" onReset={() => setAlpha(0.4)} onExtreme={() => setAlpha(alpha > 0.5 ? 0.1 : 0.9)}>
      <Range label="alpha" min={0.1} max={0.9} step={0.05} value={alpha} display={alpha.toFixed(2)} onChange={setAlpha} />
      <div className="mt-2 flex items-end gap-1 h-32">
        {y.map((value, idx) => (
          <div key={idx} className="flex flex-1 flex-col justify-end gap-1">
            <div className="rounded-sm bg-ink/80" style={{ height: `${value * 2}px` }} />
            <div className="rounded-sm bg-accent" style={{ height: `${fit[idx] * 2}px` }} />
          </div>
        ))}
      </div>
      <p className="mt-2 text-sm text-muted">Cột đậm là lượt khách tuần, cột đất nung là mức đã làm trơn. α cao thì bám tuần mới, α thấp thì lì. Ví dụ minh họa. Chiều cao dùng đơn vị của chính số liệu mẫu.</p>
    </Lab>
  );
}

const DOCS = [
  { x: 0.2, y: 0.75, t: "Gói 60 phút, không đá nóng" },
  { x: 0.28, y: 0.62, t: "Gói 90 phút, có đá nóng" },
  { x: 0.7, y: 0.3, t: "Giờ mở cửa 10–22h" },
  { x: 0.55, y: 0.72, t: "Huỷ trước 4 giờ" },
];

export function RagLab() {
  const [step, setStep] = useState(0);
  const q = { x: 0.32, y: 0.68 };
  const ranked = DOCS.map((d) => ({ ...d, dist: (d.x - q.x) ** 2 + (d.y - q.y) ** 2 })).sort((a, b) => a.dist - b.dist);
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
  const names = ["Cắt đoạn", "Nhúng câu hỏi", "Lấy đoạn gần", "Viết từ đoạn"];
  return (
    <Lab title="RAG trên không gian hai chiều" onReset={() => setStep(0)} onExtreme={() => setStep(3)}>
      <canvas ref={ref} className="h-48 w-full rounded-xl bg-paper" />
      <p className="text-sm font-medium">{names[step]}</p>
      {step >= 2 ? <p className="text-sm">Đoạn gần nhất: {ranked[0].t}. Kế tiếp: {ranked[1].t}.</p> : null}
      {step >= 3 ? <p className="text-sm text-muted">Câu trả lời chỉ được dùng hai đoạn này. Không thấy đá nóng ở gói 60 phút.</p> : null}
      <button type="button" className="mt-2 min-h-11 rounded-full bg-accent px-4 text-sm text-accent-ink" onClick={() => setStep((s) => Math.min(3, s + 1))}>Bước tiếp</button>
    </Lab>
  );
}

export function TemperatureLab() {
  const [temp, setTemp] = useState(0.7);
  const base = [0.52, 0.22, 0.12, 0.08, 0.06];
  const words = ["gói", "suất", "set", "phần", "menu"];
  const softened = base.map((p) => Math.pow(p, 1 / temp));
  const sum = softened.reduce((s, v) => s + v, 0);
  const probs = softened.map((v) => v / sum);
  return (
    <Lab title="Temperature làm phẳng từ tiếp theo" onReset={() => setTemp(0.7)} onExtreme={() => setTemp(temp > 0.5 ? 0.2 : 1.4)}>
      <Range label="temperature" min={0.2} max={1.4} step={0.05} value={temp} display={temp.toFixed(2)} onChange={setTemp} />
      <div className="mt-2 space-y-2">
        {words.map((word, i) => (
          <div key={word} className="flex items-center gap-3 text-sm">
            <span className="w-12">{word}</span>
            <span className="h-3 flex-1 rounded-full bg-line">
              <span className="block h-3 rounded-full bg-accent" style={{ width: `${probs[i] * 100}%` }} />
            </span>
            <span className="w-12 tabular-nums">{(probs[i] * 100).toFixed(0)}%</span>
          </div>
        ))}
      </div>
      <p className="mt-2 text-sm text-muted">Xác suất minh họa cho một vị trí từ, không phải đầu ra của một API thật. Thấp thì gần như luôn chọn «gói».</p>
    </Lab>
  );
}

export function EdaLab() {
  const [fence, setFence] = useState(1.5);
  const values = [12, 18, 20, 22, 24, 25, 28, 30, 33, 36, 40, 48, 120];
  const q1 = 22;
  const q3 = 36;
  const iqr = q3 - q1;
  const hi = q3 + fence * iqr;
  return (
    <Lab title="Hàng rào IQR" onReset={() => setFence(1.5)} onExtreme={() => setFence(fence > 1 ? 0.5 : 3)}>
      <Range label="Hệ số IQR" min={0.5} max={3} step={0.1} value={fence} display={fence.toFixed(1)} onChange={setFence} />
      <div className="mt-2 flex flex-wrap gap-2">
        {values.map((v) => (
          <span key={v} className={`rounded-full px-3 py-2 text-sm ${v > hi ? "bg-accent text-accent-ink" : "border border-line"}`}>{v}</span>
        ))}
      </div>
      <p className="mt-2 text-sm text-muted">Q1 = 22, Q3 = 36, IQR = 14. Hàng rào trên = {hi.toFixed(0)}. Điểm tô đậm bị đánh dấu để xem, chưa bị xóa. Ví dụ minh họa, đơn vị phút.</p>
    </Lab>
  );
}

export function EnsembleLab() {
  const votes = [1, 1, 0, 1, 1];
  const yes = votes.filter(Boolean).length;
  return (
    <Lab title="Năm cây bỏ phiếu">
      <div className="flex gap-2">
        {votes.map((v, i) => (
          <div key={i} className={`flex h-16 flex-1 items-center justify-center rounded-xl text-sm ${v ? "bg-accent text-accent-ink" : "border border-line"}`}>
            Cây {i + 1}
          </div>
        ))}
      </div>
      <p className="mt-3 text-sm">Phiếu rời: {yes}/5. Nhãn lấy theo đa số là «rời». Một cây nói «ở» không đổi kết quả. Ví dụ minh họa.</p>
    </Lab>
  );
}

export function SlopeLab() {
  const [x, setX] = useState(2);
  const slope = 2 * x;
  const ref = useCanvas((ctx, w, h) => {
    const c = tone();
    ctx.clearRect(0, 0, w, h);
    const X = (v: number) => 16 + ((v + 1) / 6) * (w - 32);
    const Y = (v: number) => h - 16 - (v / 16) * (h - 32);
    ctx.beginPath();
    for (let v = -1; v <= 4.01; v += 0.05) {
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
  return (
    <Lab title="Tiếp tuyến của f(x) = x²" onReset={() => setX(2)} onExtreme={() => setX(x > 0 ? -0.5 : 3.5)}>
      <canvas ref={ref} className="h-48 w-full rounded-xl bg-paper" />
      <Range label="Điểm x" min={-0.5} max={3.5} step={0.1} value={x} display={x.toFixed(1)} onChange={setX} />
      <p className="text-sm text-muted">Độ dốc f′(x) = 2x = {slope.toFixed(1)}. Tại đúng chỗ đang đứng, không phải độ dốc của cả đoạn.</p>
    </Lab>
  );
}

export function PivotLab() {
  const [dim, setDim] = useState<"channel" | "store">("channel");
  const rows = [
    { channel: "GDN", store: "Q1", spend: 12, forms: 30 },
    { channel: "GDN", store: "Q3", spend: 8, forms: 10 },
    { channel: "Meta", store: "Q1", spend: 6, forms: 20 },
    { channel: "Meta", store: "Q3", spend: 5, forms: 8 },
  ];
  const keys = [...new Set(rows.map((r) => r[dim]))];
  return (
    <Lab title="Gộp một chiều" onReset={() => setDim("channel")}>
      <div className="mb-2 flex gap-2">
        <button type="button" className={`min-h-11 rounded-full px-3 text-sm ${dim === "channel" ? "bg-accent text-accent-ink" : "border border-line"}`} onClick={() => setDim("channel")}>Theo kênh</button>
        <button type="button" className={`min-h-11 rounded-full px-3 text-sm ${dim === "store" ? "bg-accent text-accent-ink" : "border border-line"}`} onClick={() => setDim("store")}>Theo cửa hàng</button>
      </div>
      <table className="w-full text-left text-sm">
        <thead><tr className="text-muted"><th>{dim === "channel" ? "Kênh" : "Cửa hàng"}</th><th>Spend</th><th>Form</th><th>CPA</th></tr></thead>
        <tbody>
          {keys.map((key) => {
            const part = rows.filter((r) => r[dim] === key);
            const spend = part.reduce((s, r) => s + r.spend, 0);
            const forms = part.reduce((s, r) => s + r.forms, 0);
            return (
              <tr key={key} className="border-t border-line"><td>{key}</td><td>{spend}</td><td>{forms}</td><td>{(spend / forms).toFixed(2)}</td></tr>
            );
          })}
        </tbody>
      </table>
      <p className="mt-2 text-sm text-muted">CPA = spend/form trên nhóm, đơn vị ví dụ minh họa. Đổi chiều không viết lại công thức.</p>
    </Lab>
  );
}

const PHASES = [
  ["Hiểu việc", "Mall mất khách cuối tuần. Câu hỏi: mất ở tầng nào."],
  ["Hiểu dữ liệu", "Có POS 14 tháng, camera thiếu ngày lễ."],
  ["Chuẩn bị", "Không điền 0 cho ngày camera hỏng."],
  ["Mô hình", "Bảng trước sau, tách tầng. Chưa cần thuật toán nặng."],
  ["Đánh giá", "Tầng thời trang giảm trước khi tắt ads. Quay lại câu hỏi."],
  ["Đưa vào việc", "Một dòng kết luận trong báo cáo tuần."],
];

export function CrispLab() {
  const [i, setI] = useState(0);
  return (
    <Lab title="Sáu pha, một case mall" onReset={() => setI(0)} onExtreme={() => setI(5)}>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
        {PHASES.map((phase, idx) => (
          <button key={phase[0]} type="button" className={`min-h-11 rounded-xl px-2 text-xs ${idx === i ? "bg-accent text-accent-ink" : "border border-line"}`} onClick={() => setI(idx)}>{phase[0]}</button>
        ))}
      </div>
      <p className="mt-3 text-sm">{PHASES[i][1]} Ví dụ minh họa.</p>
    </Lab>
  );
}

export function StoryLab() {
  const [after, setAfter] = useState(false);
  return (
    <Lab title="Trước và sau một slide" onReset={() => setAfter(false)}>
      <button type="button" className="mb-3 min-h-11 rounded-full border border-line px-3 text-sm" onClick={() => setAfter((v) => !v)}>{after ? "Xem bản rối" : "Xem bản đã kể"}</button>
      {after ? (
        <div className="rounded-xl border border-line p-4">
          <p className="font-display text-2xl">Meta rẻ hơn GDN 18% trên nhóm A</p>
          <p className="mt-2 text-sm text-muted">CPA 54 nghìn so với 66 nghìn, cùng 4 tuần, cùng nhóm sản phẩm. Việc tiếp: chuyển 15% ngân sách GDN của nhóm này trong hai tuần.</p>
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-line p-4 text-sm text-muted">
          <p>Tiêu đề: Biểu đồ CPA theo kênh và theo tuần và theo nhóm</p>
          <p className="mt-2">Ba trục, hai ghi chú, chưa có câu nào để mang ra cuộc họp.</p>
        </div>
      )}
      <p className="mt-2 text-sm text-muted">Số 54 và 66 nghìn là ví dụ minh họa.</p>
    </Lab>
  );
}

export function OrLab() {
  const [cap, setCap] = useState(120);
  const best = Math.min(200, cap);
  const rest = 200 - best;
  return (
    <Lab title="Một trần, một túi tiền" onReset={() => setCap(120)} onExtreme={() => setCap(cap > 80 ? 40 : 200)}>
      <Range label="Trần kênh rẻ nhất" min={40} max={200} step={10} value={cap} display={`${cap} triệu`} onChange={setCap} />
      <p className="text-sm">Nếu kênh rẻ được nhận tới {cap} triệu, phương án biên đổ {best} triệu vào kênh đó và {rest} triệu vào kênh còn lại, trong tổng 200. Ví dụ minh họa, chưa phải lời giải Solver đầy đủ.</p>
      <p className="mt-2 text-sm text-muted">Nới trần thêm 10 triệu chỉ có ích khi trần đang chặn. Hết trần thì thêm ngân sách tổng mới là nút đáng nới.</p>
    </Lab>
  );
}

export function FrameLab() {
  const steps = [
    "Lời than: landing yếu.",
    "Fact: 9.400 phiên, form 1,1%. «Xấu» vẫn là opinion.",
    "Ba nhánh: nguồn, nội dung, form.",
    "SMART: 21 ngày, form từ 1,1% lên 1,6% trên GDN, giá form không tăng quá 15%.",
  ];
  const [i, setI] = useState(0);
  return (
    <Lab title="Viết lại một câu than" onReset={() => setI(0)} onExtreme={() => setI(3)}>
      <p className="font-display text-2xl">{steps[i]}</p>
      <button type="button" className="mt-3 min-h-11 rounded-full bg-ink px-4 text-sm text-paper" onClick={() => setI((v) => Math.min(3, v + 1))}>Bước tiếp</button>
      <p className="mt-2 text-sm text-muted">Các số là ví dụ minh họa.</p>
    </Lab>
  );
}

const registry: Record<string, () => ReactElement> = {
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
  frame: FrameLab,
};

export function Sim({ id }: { id: string }) {
  const Cmp = registry[id];
  if (!Cmp) return null;
  return <Cmp />;
}
