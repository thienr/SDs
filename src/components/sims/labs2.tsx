import { useMemo, useRef, useState, type ReactElement } from "react";
import { Lab, Range, gauss, mulberry32, useCanvas, useT, tone, xTicks, caption, type Ink } from "@/components/sims/kit";

/* ---------- small helpers ---------- */

const pill = (on: boolean) => `min-h-11 rounded-full px-3 text-sm ${on ? "bg-accent text-accent-ink" : "border border-line"}`;

function Pills<T extends string>({ value, items, onChange }: { value: T; items: [T, string][]; onChange: (v: T) => void }) {
  return (
    <div className="mb-2 flex flex-wrap gap-2">
      {items.map(([id, label]) => (
        <button key={id} type="button" className={pill(value === id)} onClick={() => onChange(id)}>
          {label}
        </button>
      ))}
    </div>
  );
}

function Btn({ children, onClick, solid }: { children: React.ReactNode; onClick: () => void; solid?: boolean }) {
  return (
    <button type="button" className={`min-h-11 rounded-full px-4 text-sm ${solid ? "bg-ink text-paper" : "border border-line"}`} onClick={onClick}>
      {children}
    </button>
  );
}

function yTicks(ctx: CanvasRenderingContext2D, c: Ink, items: [number, string][], x = 4) {
  ctx.fillStyle = c.muted;
  ctx.font = "11px Outfit, sans-serif";
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  items.forEach(([py, label]) => ctx.fillText(label, x, py));
  ctx.textBaseline = "alphabetic";
}

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

function solve(A: number[][], b: number[]): number[] {
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
function ols(X: number[][], y: number[]) {
  const k = X[0].length;
  const A = Array.from({ length: k }, () => Array(k).fill(0) as number[]);
  const b = Array(k).fill(0) as number[];
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
  return { beta, rss, r2: tss ? 1 - rss / tss : 0 };
}

/* ---------- permutations and combinations ---------- */

function listOf(n: number, r: number, ordered: boolean) {
  const letters = "ABCDEFG".slice(0, n).split("");
  const out: string[] = [];
  const used: boolean[] = Array(n).fill(false);
  const cur: string[] = [];
  const rec = (start: number) => {
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

const permCount = (n: number, r: number) => {
  let v = 1;
  for (let i = 0; i < r; i++) v *= n - i;
  return v;
};
const factorial = (r: number): number => (r <= 1 ? 1 : r * factorial(r - 1));

export function CountLab({ mode }: { mode: "perm" | "comb" }) {
  const t = useT();
  const [n, setN] = useState(5);
  const [r, setR] = useState(3);
  const rr = Math.min(r, n);
  const value = (k: number) => (mode === "perm" ? permCount(n, k) : permCount(n, k) / factorial(k));
  const ref = useCanvas((ctx, w, h) => {
    const c = tone();
    ctx.clearRect(0, 0, w, h);
    const vals = Array.from({ length: n }, (_, i) => value(i + 1));
    const peak = Math.max(...vals);
    const bw = (w - 16) / n;
    vals.forEach((v, i) => {
      const bh = (v / peak) * (h - 56);
      ctx.fillStyle = i + 1 === rr ? c.accent : c.ink;
      ctx.globalAlpha = i + 1 === rr ? 0.95 : 0.3;
      ctx.fillRect(8 + i * bw + 3, h - 20 - bh, bw - 6, bh);
      ctx.globalAlpha = 1;
      ctx.fillStyle = c.ink;
      ctx.font = "11px Outfit, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(String(Math.round(v)), 8 + i * bw + bw / 2, h - 24 - bh);
    });
    caption(ctx, c, mode === "perm" ? t("ngang: chọn r phần tử · cao: số cách xếp (có thứ tự)", "x: choose r items · y: number of ordered arrangements") : t("ngang: chọn r phần tử · cao: số cách chọn (không thứ tự)", "x: choose r items · y: number of unordered selections"));
    xTicks(ctx, c, h, vals.map((_, i) => [8 + i * bw + bw / 2, `r = ${i + 1}`] as [number, string]));
  }, [n, rr, mode, t]);
  const chips = listOf(n, rr, mode === "perm");
  const total = Math.round(value(rr));
  return (
    <Lab title={mode === "perm" ? t("Hoán vị: thứ tự có nghĩa", "Permutations: order matters") : t("Tổ hợp: thứ tự không có nghĩa", "Combinations: order does not matter")} onReset={() => { setN(5); setR(3); }} onExtreme={() => { setN(7); setR(4); }}>
      <canvas ref={ref} className="h-48 w-full rounded-xl bg-paper" />
      <Range label={t("Số phần tử n", "Items available n")} min={2} max={7} step={1} value={n} display={String(n)} onChange={setN} />
      <Range label={t("Chọn r", "Choose r")} min={1} max={n} step={1} value={rr} display={String(rr)} onChange={setR} />
      <p className="text-sm">
        {mode === "perm" ? `P(${n},${rr}) = n!/(n−r)! = ${total}` : `C(${n},${rr}) = n!/(r!(n−r)!) = ${total}`}
        {mode === "comb" ? ` · ${t("so với có thứ tự", "vs ordered")}: ${permCount(n, rr)} = ${total} × ${factorial(rr)}!` : ` · ${t("nếu bỏ thứ tự còn", "ignoring order leaves")} ${Math.round(permCount(n, rr) / factorial(rr))}`}
      </p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {chips.map((s) => (
          <span key={s} className="rounded-lg border border-line px-2 py-1 text-xs tabular-nums">{s}</span>
        ))}
        {total > chips.length ? <span className="px-1 py-1 text-xs text-muted">… +{total - chips.length}</span> : null}
      </div>
      <p className="mt-2 text-sm text-muted">
        {mode === "perm"
          ? t("AB và BA là hai cách khác nhau, nên chúng đều có mặt trong danh sách.", "AB and BA are different arrangements, so both appear in the list.")
          : t("AB và BA là cùng một nhóm, nên chỉ giữ một. Chia cho r! là bỏ các cách xoay cùng nhóm.", "AB and BA are the same group, so only one is kept. Dividing by r! removes the re-orderings of one group.")}
      </p>
    </Lab>
  );
}

/* ---------- probability as long-run frequency ---------- */

export function ProbLab() {
  const t = useT();
  const [k, setK] = useState(3);
  const [us, setUs] = useState<number[]>([]);
  const rng = useRef(mulberry32(41));
  const p = k / 10;
  const add = (m: number) => setUs((cur) => [...cur, ...Array.from({ length: m }, () => rng.current())].slice(0, 3000));
  const hits = us.filter((u) => u < p).length;
  const ref = useCanvas((ctx, w, h) => {
    const c = tone();
    ctx.clearRect(0, 0, w, h);
    const N = Math.max(50, us.length);
    const X = (i: number) => 30 + (i / N) * (w - 40);
    const Y = (v: number) => h - 22 - v * (h - 44);
    ctx.strokeStyle = c.line;
    [0, 0.5, 1].forEach((v) => {
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
    yTicks(ctx, c, [0, 0.5, 1].map((v) => [Y(v), String(v)] as [number, string]));
    caption(ctx, c, t("ngang: số lần thử · dọc: tỷ lệ xảy ra · nét đứt: p của mô hình", "x: number of trials · y: share that happened · dashed: the model's p"));
    xTicks(ctx, c, h, [[X(0), "0"], [X(N / 2), String(Math.round(N / 2))], [X(N), String(N)]]);
  }, [us, p, t]);
  return (
    <Lab title={t("Xác suất: mô hình và tần suất gặp nhau", "Probability: the model meets the long-run frequency")} onReset={() => { setK(3); setUs([]); }} onExtreme={() => add(1000)}>
      <canvas ref={ref} className="h-52 w-full rounded-xl bg-paper" />
      <Range label={t("Kết quả có lợi trong 10 kết quả đều khả năng", "Favourable outcomes out of 10 equally likely")} min={0} max={10} step={1} value={k} display={`${k}/10`} onChange={setK} />
      <div className="mt-1 flex flex-wrap gap-2">
        <Btn onClick={() => add(10)}>+10</Btn>
        <Btn onClick={() => add(100)}>+100</Btn>
        <Btn onClick={() => add(1000)}>+1000</Btn>
        <Btn onClick={() => setUs([])}>{t("Xóa lần thử", "Clear trials")}</Btn>
      </div>
      <p className="mt-2 text-sm">
        {t("Mô hình", "Model")}: p = {k}/10 = {p.toFixed(2)}. {t("Thực tế", "Observed")}: {hits}/{us.length || 0}
        {us.length ? ` = ${(hits / us.length).toFixed(3)}` : ""}.
      </p>
      <p className="mt-1 text-sm text-muted">{t("Ít lần thử thì tỷ lệ nhảy lung tung. Càng nhiều lần, đường đỏ càng sát nét đứt. Xác suất tính từ mô hình trước khi có dữ liệu, tần suất xác nhận lại sau.", "With few trials the share jumps around. With more, the red line settles onto the dashed one. Probability comes from the model before any data; frequency confirms it afterwards.")}</p>
    </Lab>
  );
}

/* ---------- Venn / joint probability ---------- */

type VMode = "events" | "or" | "and" | "joint";

export function VennLab({ mode }: { mode: VMode }) {
  const t = useT();
  const [a, setA] = useState(40);
  const [b, setB] = useState(30);
  const [abRaw, setAb] = useState(12);
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
    const wA = (a / 100) * W;
    const cells = [
      { x: x0, y: y0, w: wA, h: a ? (ab / a) * H : 0, name: "A∩B", pct: ab, col: c.accent, al: 0.9, on: true },
      { x: x0, y: y0 + (a ? (ab / a) * H : 0), w: wA, h: a ? (aOnly / a) * H : H, name: "A", pct: aOnly, col: c.ink, al: 0.3, on: mode !== "and" },
      { x: x0 + wA, y: y0, w: W - wA, h: a < 100 ? (bOnly / (100 - a)) * H : 0, name: "B", pct: bOnly, col: c.good, al: 0.5, on: mode !== "and" },
      { x: x0 + wA, y: y0 + (a < 100 ? (bOnly / (100 - a)) * H : 0), w: W - wA, h: a < 100 ? (neither / (100 - a)) * H : H, name: t("không A, không B", "neither"), pct: neither, col: c.line, al: 1, on: mode !== "or" && mode !== "and" },
    ];
    cells.forEach((cell) => {
      ctx.fillStyle = cell.col;
      ctx.globalAlpha = cell.on ? cell.al : cell.name === "A∩B" ? cell.al : 0.1;
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
  }, [a, b, ab, mode, t]);
  const union = a + b - ab;
  const indep = Math.abs(ab - (a * b) / 100) < 0.5;
  return (
    <Lab
      title={
        mode === "events" ? t("Hai biến cố: rời nhau hay chồng nhau", "Two events: disjoint or overlapping")
        : mode === "or" ? t("Quy tắc cộng: trừ phần chồng", "Addition rule: subtract the overlap")
        : mode === "and" ? t("Quy tắc nhân: cả hai cùng xảy ra", "Multiplication rule: both happen")
        : t("Bảng xác suất đồng thời", "The joint probability table")
      }
      onReset={() => { setA(40); setB(30); setAb(12); }}
      onExtreme={() => setAb(0)}
    >
      <canvas ref={ref} className="h-52 w-full rounded-xl bg-paper" />
      <Range label="P(A) %" min={5} max={90} step={1} value={a} display={`${a}%`} onChange={setA} />
      <Range label="P(B) %" min={5} max={90} step={1} value={b} display={`${b}%`} onChange={setB} />
      <Range label={t("P(A và B) %", "P(A and B) %")} min={lo} max={Math.max(lo, hi)} step={1} value={ab} display={`${ab}%`} onChange={setAb} />
      <div className="mt-1 flex flex-wrap gap-2">
        <Btn onClick={() => setAb(lo)}>{t("Rời nhau", "Disjoint")}</Btn>
        <Btn onClick={() => setAb(clamp(Math.round((a * b) / 100), lo, hi))}>{t("Độc lập", "Independent")}</Btn>
      </div>
      <p className="mt-2 text-sm">
        {mode === "or" ? (
          <>P(A {t("hoặc", "or")} B) = {a} + {b} − {ab} = <b>{union}%</b></>
        ) : mode === "and" ? (
          <>P(A {t("và", "and")} B) = P(A) × P(B | A) = {a}% × {a ? ((ab / a) * 100).toFixed(0) : 0}% = <b>{ab}%</b></>
        ) : (
          <>P(A {t("và", "and")} B) = <b>{ab}%</b> · P(A {t("hoặc", "or")} B) = {union}%</>
        )}
      </p>
      <p className="text-sm text-muted">
        P(B | A) = {a ? ((ab / a) * 100).toFixed(0) : 0}% {t("so với P(B)", "vs P(B)")} = {b}%. {indep ? t("Hai số gần bằng nhau: A và B độc lập.", "The two are about equal: A and B are independent.") : t("Hai số khác nhau: A và B không độc lập.", "The two differ: A and B are not independent.")} {ab === 0 ? t("Chồng nhau bằng 0: rời nhau, nhưng rời nhau KHÔNG có nghĩa là độc lập.", "Overlap is 0: disjoint, but disjoint does NOT mean independent.") : ""}
      </p>
      {mode === "joint" || mode === "events" ? (
        <table className="mt-2 w-full text-center text-sm">
          <thead><tr className="text-muted"><th /><th>A</th><th>{t("không A", "not A")}</th><th>{t("Tổng", "Total")}</th></tr></thead>
          <tbody>
            <tr className="border-t border-line"><td className="text-left text-muted">B</td><td>{ab}%</td><td>{bOnly}%</td><td className="font-medium">{b}%</td></tr>
            <tr className="border-t border-line"><td className="text-left text-muted">{t("không B", "not B")}</td><td>{aOnly}%</td><td>{neither}%</td><td className="font-medium">{100 - b}%</td></tr>
            <tr className="border-t border-line"><td className="text-left text-muted">{t("Tổng", "Total")}</td><td className="font-medium">{a}%</td><td className="font-medium">{100 - a}%</td><td>100%</td></tr>
          </tbody>
        </table>
      ) : null}
    </Lab>
  );
}

/* ---------- two dice: random variable and expected value ---------- */

export function DiceLab({ mode }: { mode: "rv" | "ev" }) {
  const t = useT();
  const [rolls, setRolls] = useState<[number, number][]>([]);
  const rng = useRef(mulberry32(17));
  const roll = (m: number) =>
    setRolls((cur) => [...cur, ...Array.from({ length: m }, () => [1 + Math.floor(rng.current() * 6), 1 + Math.floor(rng.current() * 6)] as [number, number])].slice(-4000));
  const counts = Array(13).fill(0) as number[];
  rolls.forEach(([x, y]) => (counts[x + y] += 1));
  const mean = rolls.length ? rolls.reduce((s, [x, y]) => s + x + y, 0) / rolls.length : 0;
  const ref = useCanvas((ctx, w, h) => {
    const c = tone();
    ctx.clearRect(0, 0, w, h);
    const bw = (w - 36) / 11;
    const Y = (v: number) => h - 22 - (v / 0.2) * (h - 44);
    ctx.strokeStyle = c.line;
    [0, 0.1, 0.2].forEach((v) => {
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
        ctx.globalAlpha = 0.85;
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
    yTicks(ctx, c, [0, 0.1, 0.2].map((v) => [Y(v), v.toFixed(1)] as [number, string]));
    caption(ctx, c, t("ngang: tổng hai xúc xắc X · cao: xác suất · khung: lý thuyết · cột: đã gieo", "x: total of two dice X · y: probability · outline: theory · bars: rolled"));
    xTicks(ctx, c, h, Array.from({ length: 11 }, (_, i) => [32 + i * bw + bw / 2, String(i + 2)] as [number, string]));
  }, [rolls, mode, t]);
  const last = rolls[rolls.length - 1];
  return (
    <Lab title={mode === "rv" ? t("Biến ngẫu nhiên: mỗi kết quả thành một con số", "Random variable: each outcome becomes a number") : t("Kỳ vọng: trung bình khi gieo rất nhiều lần", "Expected value: the average over very many rolls")} onReset={() => setRolls([])} onExtreme={() => roll(1000)}>
      <canvas ref={ref} className="h-52 w-full rounded-xl bg-paper" />
      <div className="flex flex-wrap gap-2">
        <Btn solid onClick={() => roll(1)}>{t("Gieo 1 lần", "Roll once")}</Btn>
        <Btn onClick={() => roll(10)}>+10</Btn>
        <Btn onClick={() => roll(100)}>+100</Btn>
        <Btn onClick={() => roll(1000)}>+1000</Btn>
      </div>
      <p className="mt-2 text-sm">
        {last ? `${t("Lần gieo cuối", "Last roll")}: (${last[0]}, ${last[1]}) → X = ${last[0] + last[1]}. ` : t("Bấm gieo để bắt đầu. ", "Press roll to start. ")}
        {t("Đã gieo", "Rolled")} {rolls.length} {t("lần", "times")}.
      </p>
      <p className="mt-1 text-sm text-muted">
        {mode === "ev"
          ? `E[X] = Σ x·p(x) = 7. ${t("Trung bình đã gieo", "Average so far")}: ${rolls.length ? mean.toFixed(2) : "–"} (${t("đường xanh", "green line")}). ${t("Gieo ít thì lệch, gieo nhiều thì dần về 7.", "A few rolls wander; many rolls settle towards 7.")}`
          : t("X là quy tắc đổi cặp xúc xắc thành một con số. Cặp (1,1) cho X = 2 hiếm hơn nhiều so với X = 7 vì chỉ có 1 cặp so với 6 cặp.", "X is the rule that turns a pair of dice into one number. (1,1) gives X = 2, far rarer than X = 7 because there is 1 pair against 6.")}
      </p>
    </Lab>
  );
}

/* ---------- sampling ---------- */

const POP = 20;
function population() {
  const rng = mulberry32(11);
  const cells: number[] = [];
  for (let i = 0; i < POP; i++) for (let j = 0; j < POP; j++) cells.push(rng() < 0.12 + 0.5 * (1 - (i + j) / (2 * (POP - 1))) ? 1 : 0);
  return cells;
}
const POPULATION = population();
const TRUE_RATE = POPULATION.reduce((s, v) => s + v, 0) / POPULATION.length;

type Method = "random" | "convenience" | "systematic";
function draw(method: Method, n: number, seed: number): number[] {
  const rng = mulberry32(seed * 977 + 3);
  const idx = Array.from({ length: POP * POP }, (_, i) => i);
  if (method === "random") {
    for (let i = idx.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [idx[i], idx[j]] = [idx[j], idx[i]];
    }
    return idx.slice(0, n);
  }
  if (method === "convenience") {
    return idx
      .map((i) => ({ i, key: Math.floor(i / POP) + (i % POP) + rng() * 3 }))
      .sort((p, q) => p.key - q.key)
      .slice(0, n)
      .map((o) => o.i);
  }
  const step = Math.max(1, Math.floor(idx.length / n));
  const start = Math.floor(rng() * step);
  return idx.filter((i) => i >= start && (i - start) % step === 0).slice(0, n);
}
const estimate = (s: number[]) => (s.length ? s.reduce((a, i) => a + POPULATION[i], 0) / s.length : 0);

export function SampleLab({ start = "random" }: { start?: Method }) {
  const t = useT();
  const [method, setMethod] = useState<Method>(start);
  const [n, setN] = useState(40);
  const [seed, setSeed] = useState(1);
  const picked = useMemo(() => draw(method, n, seed), [method, n, seed]);
  const est = estimate(picked);
  const many = useMemo(() => Array.from({ length: 40 }, (_, k) => estimate(draw(method, n, 100 + k))), [method, n]);
  const set = useMemo(() => new Set(picked), [picked]);
  const gridRef = useCanvas((ctx, w, h) => {
    const c = tone();
    ctx.clearRect(0, 0, w, h);
    const size = Math.min(w, h - 16) / POP;
    const ox = (w - size * POP) / 2;
    POPULATION.forEach((v, i) => {
      const x = ox + (i % POP) * size + size / 2;
      const y = 8 + Math.floor(i / POP) * size + size / 2;
      ctx.fillStyle = v ? c.good : c.line;
      ctx.beginPath();
      ctx.arc(x, y, size * 0.32, 0, Math.PI * 2);
      ctx.fill();
      if (set.has(i)) {
        ctx.strokeStyle = c.accent;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(x, y, size * 0.46, 0, Math.PI * 2);
        ctx.stroke();
        ctx.lineWidth = 1;
      }
    });
  }, [set]);
  const dotRef = useCanvas((ctx, w, h) => {
    const c = tone();
    ctx.clearRect(0, 0, w, h);
    const X = (v: number) => 12 + v * (w - 24);
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
    const stack = new Map<number, number>();
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
    xTicks(ctx, c, h, [0, 0.25, 0.5, 0.75, 1].map((v) => [X(v), `${Math.round(v * 100)}%`] as [number, string]));
  }, [many, t]);
  const mean = many.reduce((s, v) => s + v, 0) / many.length;
  return (
    <Lab title={t("Lấy mẫu từ tổng thể 400 khách", "Sampling from a population of 400 customers")} onReset={() => { setMethod(start); setN(40); setSeed(1); }} onExtreme={() => { setMethod("convenience"); setN(40); }}>
      <Pills value={method} onChange={setMethod} items={[["random", t("Ngẫu nhiên", "Random")], ["convenience", t("Tiện tay (góc đầu)", "Convenience (first ones)")], ["systematic", t("Cách đều", "Systematic")]]} />
      <canvas ref={gridRef} className="h-56 w-full rounded-xl bg-paper" />
      <p className="mt-1 text-xs text-muted">{t("Chấm xanh = khách đồng ý (có), chấm xám = không. Vòng đỏ = khách được chọn vào mẫu.", "Green dot = customer says yes, grey = no. Red ring = picked into the sample.")}</p>
      <Range label={t("Cỡ mẫu n", "Sample size n")} min={10} max={200} step={5} value={n} display={String(n)} onChange={setN} />
      <canvas ref={dotRef} className="mt-2 h-36 w-full rounded-xl bg-paper" />
      <p className="mt-2 text-sm">
        {t("Tỷ lệ thật của cả 400", "True rate across all 400")}: {(TRUE_RATE * 100).toFixed(1)}%. {t("Mẫu này cho", "This sample gives")} {(est * 100).toFixed(1)}%. {t("Trung bình 40 lần", "Average of 40 draws")}: {(mean * 100).toFixed(1)}%.
      </p>
      <p className="mt-1 text-sm text-muted">
        {method === "convenience"
          ? t("Lấy những người gần nhất thì cả đám chấm lệch sang một bên, dù mẫu có lớn. Mẫu lớn không sửa được chọn sai.", "Taking whoever is closest shifts the whole cloud to one side, even for large samples. A bigger sample cannot repair a bad selection.")
          : t("Chọn ngẫu nhiên thì các chấm quây quanh giá trị thật. Mẫu càng lớn, đám chấm càng hẹp.", "With random selection the dots gather around the true value. The larger the sample, the narrower the cloud.")}
      </p>
      <button type="button" className="mt-2 min-h-11 text-sm underline" onClick={() => setSeed((v) => v + 1)}>{t("Lấy mẫu khác", "Draw another sample")}</button>
    </Lab>
  );
}

/* ---------- Bayes ---------- */

export function BayesLab() {
  const t = useT();
  const [prev, setPrev] = useState(5);
  const [sens, setSens] = useState(90);
  const [fpr, setFpr] = useState(8);
  const tp = 1000 * (prev / 100) * (sens / 100);
  const fp = 1000 * (1 - prev / 100) * (fpr / 100);
  const post = tp + fp ? tp / (tp + fp) : 0;
  const ref = useCanvas((ctx, w, h) => {
    const c = tone();
    ctx.clearRect(0, 0, w, h);
    const W = w - 20;
    const X = (v: number) => 10 + (v / 1000) * W;
    const sick = 1000 * (prev / 100);
    const row = (y: number, parts: [number, string, number][], label: string) => {
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
    row(48, [[sick, c.accent, 0.9], [1000 - sick, c.line, 1]], t("1000 khách: đỏ = thật sự sắp rời", "1000 customers: red = really about to leave"));
    row(112, [[tp, c.accent, 0.9], [fp, c.ink, 0.35]], t("Chỉ những người bị cảnh báo: đỏ = đúng, xám = báo nhầm", "Only those flagged: red = correct, grey = false alarm"));
    caption(ctx, c, t("độ dài = số khách trên 1000", "length = customers out of 1000"));
    xTicks(ctx, c, h, [0, 250, 500, 750, 1000].map((v) => [X(v), String(v)] as [number, string]));
  }, [prev, tp, fp, t]);
  return (
    <Lab title={t("Bayes: cảnh báo xong, khả năng thật là bao nhiêu", "Bayes: after an alert, how likely is it really")} onReset={() => { setPrev(5); setSens(90); setFpr(8); }} onExtreme={() => setPrev(prev > 10 ? 1 : 40)}>
      <canvas ref={ref} className="h-44 w-full rounded-xl bg-paper" />
      <Range label={t("Tỷ lệ khách sắp rời (xác suất ban đầu)", "Share of customers about to leave (prior)")} min={1} max={50} step={1} value={prev} display={`${prev}%`} onChange={setPrev} />
      <Range label={t("Bắt đúng người sắp rời", "Catches those really leaving")} min={50} max={99} step={1} value={sens} display={`${sens}%`} onChange={setSens} />
      <Range label={t("Báo nhầm người ở lại", "Falsely flags those staying")} min={1} max={30} step={1} value={fpr} display={`${fpr}%`} onChange={setFpr} />
      <p className="text-sm">
        {t("Trên 1000 khách", "Out of 1000 customers")}: {tp.toFixed(0)} {t("báo đúng", "flagged correctly")} + {fp.toFixed(0)} {t("báo nhầm", "flagged wrongly")}. P({t("rời", "leaving")} | {t("bị cảnh báo", "flagged")}) = {tp.toFixed(0)}/{(tp + fp).toFixed(0)} = <b>{(post * 100).toFixed(0)}%</b>.
      </p>
      <p className="mt-1 text-sm text-muted">{t("Kéo tỷ lệ ban đầu xuống thấp: số báo nhầm áp đảo, dù công cụ bắt đúng 90%. Đó là lý do xác suất ban đầu phải đi vào phép tính.", "Pull the prior down: false alarms swamp the correct ones even though the tool catches 90%. That is why the prior must enter the calculation.")}</p>
    </Lab>
  );
}

/* ---------- what is machine learning: learning a rule from examples ---------- */

const ML_RNG = mulberry32(23);
const ML_POINTS = Array.from({ length: 80 }, () => {
  const x = ML_RNG() * 10;
  return { x, y: 10 + 6 * x + gauss(ML_RNG) * 9 };
});
const ML_TEST = Array.from({ length: 200 }, () => {
  const x = ML_RNG() * 10;
  return { x, y: 10 + 6 * x + gauss(ML_RNG) * 9 };
});

export function MlLab() {
  const t = useT();
  const [n, setN] = useState(4);
  const fit = useMemo(() => {
    const pts = ML_POINTS.slice(0, n);
    const mean = pts.reduce((s, p) => s + p.y, 0) / n;
    const r = ols(pts.map((p) => [1, p.x]), pts.map((p) => p.y));
    const rmse = (f: (x: number) => number) => Math.sqrt(ML_TEST.reduce((s, p) => s + (p.y - f(p.x)) ** 2, 0) / ML_TEST.length);
    return { b0: r.beta[0], b1: r.beta[1], err: rmse((x) => r.beta[0] + r.beta[1] * x), base: rmse(() => mean) };
  }, [n]);
  const ref = useCanvas((ctx, w, h) => {
    const c = tone();
    ctx.clearRect(0, 0, w, h);
    const X = (v: number) => 34 + (v / 10) * (w - 44);
    const Y = (v: number) => h - 22 - (v / 100) * (h - 44);
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
    yTicks(ctx, c, [0, 50, 100].map((v) => [Y(v), String(v)] as [number, string]));
    caption(ctx, c, t("ngang: chi tiêu · dọc: số form · xanh nét đứt: quy luật thật (máy không biết)", "x: spend · y: forms · dashed green: the true rule (the machine does not know it)"));
    xTicks(ctx, c, h, [0, 5, 10].map((v) => [X(v), String(v)] as [number, string]));
  }, [n, fit, t]);
  return (
    <Lab title={t("Học máy: tìm quy luật từ ví dụ", "Machine learning: finding the rule from examples")} onReset={() => setN(4)} onExtreme={() => setN(n < 30 ? 80 : 3)}>
      <canvas ref={ref} className="h-52 w-full rounded-xl bg-paper" />
      <Range label={t("Số ví dụ để học", "Training examples")} min={3} max={80} step={1} value={n} display={String(n)} onChange={setN} />
      <p className="text-sm">
        {t("Đường đỏ do máy tìm từ", "The red line was found from")} {n} {t("điểm", "points")}: forms ≈ {fit.b0.toFixed(1)} + {fit.b1.toFixed(1)} × spend.
      </p>
      <p className="mt-1 text-sm">
        {t("Sai số trên 200 khách mới", "Error on 200 new customers")}: <b>{fit.err.toFixed(1)}</b> {t("so với chỉ đoán trung bình", "versus always guessing the average")}: {fit.base.toFixed(1)}.
      </p>
      <p className="mt-1 text-sm text-muted">{t("Càng nhiều ví dụ, đường đỏ càng gần quy luật thật và sai số trên dữ liệu mới càng thấp. Đó là toàn bộ ý của 'học'.", "With more examples the red line approaches the true rule and the error on new data shrinks. That is all 'learning' means here.")}</p>
    </Lab>
  );
}

/* ---------- regression assumptions: look at the residuals ---------- */

type Shape = "ok" | "curve" | "funnel";

export function AssumeLab() {
  const t = useT();
  const [shape, setShape] = useState<Shape>("ok");
  const data = useMemo(() => {
    const rng = mulberry32(31);
    const pts = Array.from({ length: 60 }, () => {
      const x = rng() * 10;
      const noise = gauss(rng);
      const y = shape === "curve" ? 5 + 0.9 * (x - 5) ** 2 + noise * 1.2 : shape === "funnel" ? 10 + 3 * x + noise * (0.4 + x * 0.55) : 10 + 3 * x + noise * 2;
      return { x, y };
    });
    const r = ols(pts.map((p) => [1, p.x]), pts.map((p) => p.y));
    return { pts, b0: r.beta[0], b1: r.beta[1] };
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
    const X = (v: number) => 10 + (v / 10) * (half - 24);
    const Y = (v: number) => h - 22 - ((v - lo) / (hi - lo || 1)) * (h - 50);
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
    const RX = (v: number) => half + 14 + (v / 10) * (half - 24);
    const RY = (v: number) => h / 2 - (v / rm) * ((h - 50) / 2) + 2;
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
    xTicks(ctx, c, h, [[X(0), "0"], [X(5), "5"], [X(10), "10"], [RX(0), "0"], [RX(5), "5"], [RX(10), "10"]]);
  }, [data, t]);
  const diag: Record<Shape, string> = {
    ok: t("Phần dư rải ngẫu nhiên quanh 0, bề rộng đều. Giả định ổn.", "Residuals scatter randomly around 0 with an even band. The assumptions hold."),
    curve: t("Phần dư cong thành hình chữ U: đường thẳng bỏ sót một đường cong. Quan hệ không tuyến tính.", "Residuals bend into a U: the straight line misses a curve. The relationship is not linear."),
    funnel: t("Phần dư xoè rộng như cái phễu: độ nhiễu tăng theo x. Phương sai không đều, khoảng tin cậy sẽ sai.", "Residuals fan out like a funnel: the noise grows with x. Variance is not constant, so intervals will be wrong."),
  };
  return (
    <Lab title={t("Nhìn phần dư để kiểm giả định", "Check the assumptions by looking at the residuals")} onReset={() => setShape("ok")} onExtreme={() => setShape(shape === "ok" ? "funnel" : "ok")}>
      <Pills value={shape} onChange={setShape} items={[["ok", t("Dữ liệu ổn", "Healthy data")], ["curve", t("Quan hệ cong", "Curved relation")], ["funnel", t("Nhiễu tăng dần", "Growing noise")]]} />
      <canvas ref={ref} className="h-52 w-full rounded-xl bg-paper" />
      <p className="mt-2 text-sm">{diag[shape]}</p>
      <p className="mt-1 text-sm text-muted">{t("R² có thể vẫn cao ở cả ba trường hợp. Chỉ biểu đồ phần dư mới cho thấy đường thẳng đang sai ở đâu.", "R² can still be high in all three cases. Only the residual plot shows where the straight line goes wrong.")}</p>
    </Lab>
  );
}

/* ---------- multiple regression: why add a second variable ---------- */

export function MlrWhyLab({ held = false }: { held?: boolean }) {
  const t = useT();
  const [rho, setRho] = useState(0.7);
  const res = useMemo(() => {
    const rng = mulberry32(5);
    const rows = Array.from({ length: 300 }, () => {
      const a = gauss(rng);
      const z = gauss(rng);
      const x1 = a;
      const x2 = rho * a + Math.sqrt(1 - rho * rho) * z;
      return { x1, x2, y: 3 * x1 + 5 * x2 + gauss(rng) * 2 };
    });
    const simple = ols(rows.map((r) => [1, r.x1]), rows.map((r) => r.y));
    const both = ols(rows.map((r) => [1, r.x1, r.x2]), rows.map((r) => r.y));
    return { simple: simple.beta[1], both: both.beta[1], b2: both.beta[2], r2s: simple.r2, r2b: both.r2 };
  }, [rho]);
  const ref = useCanvas((ctx, w, h) => {
    const c = tone();
    ctx.clearRect(0, 0, w, h);
    const bars: [string, number, string][] = [
      [t("Hệ số thật của x1", "True effect of x1"), 3, c.good],
      [t("Chỉ có x1 trong mô hình", "Only x1 in the model"), res.simple, c.ink],
      [t("Có cả x1 và x2", "Both x1 and x2"), res.both, c.accent],
    ];
    const max = 9;
    const bw = (w - 30) / bars.length;
    const Y = (v: number) => h - 34 - (v / max) * (h - 62);
    ctx.strokeStyle = c.line;
    [0, 3, 6, 9].forEach((v) => {
      ctx.beginPath();
      ctx.moveTo(26, Y(v));
      ctx.lineTo(w - 4, Y(v));
      ctx.stroke();
    });
    bars.forEach(([label, v, col], i) => {
      const x = 28 + i * bw;
      ctx.fillStyle = col;
      ctx.globalAlpha = 0.85;
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
    yTicks(ctx, c, [0, 3, 6, 9].map((v) => [Y(v), String(v)] as [number, string]));
    caption(ctx, c, t("cột cao = hệ số mà mô hình gán cho x1 (mỗi +1 x1, y đổi bao nhiêu)", "bar height = the coefficient the model gives x1 (change in y per +1 of x1)"));
  }, [res, t]);
  return (
    <Lab title={held ? t("Hệ số = tác động khi giữ biến kia cố định", "Coefficient = effect while the other variable is held fixed") : t("Vì sao thêm biến thứ hai", "Why add a second variable")} onReset={() => setRho(0.7)} onExtreme={() => setRho(rho > 0.4 ? 0 : 0.95)}>
      <canvas ref={ref} className="h-52 w-full rounded-xl bg-paper" />
      <Range label={t("x1 và x2 đi cùng nhau mạnh cỡ nào (tương quan)", "How strongly x1 and x2 move together (correlation)")} min={0} max={0.95} step={0.05} value={rho} display={rho.toFixed(2)} onChange={setRho} />
      <p className="text-sm">
        {t("Thật ra y = 3·x1 + 5·x2 + nhiễu. Bỏ x2 ra, x1 gánh luôn phần của x2:", "In truth y = 3·x1 + 5·x2 + noise. Drop x2 and x1 absorbs part of x2's effect:")} {res.simple.toFixed(2)}. {t("Thêm x2, hệ số x1 về", "Add x2 and the x1 coefficient returns to")} {res.both.toFixed(2)}.
      </p>
      <p className="mt-1 text-sm text-muted">R²: {res.r2s.toFixed(2)} → {res.r2b.toFixed(2)}. {t("Khi tương quan bằng 0 thì bỏ x2 cũng không sao. Càng đi cùng nhau, bỏ x2 càng làm hệ số x1 sai.", "When the correlation is 0, leaving x2 out does little harm. The more they move together, the more leaving x2 out distorts x1's coefficient.")}</p>
    </Lab>
  );
}

/* ---------- VIF ---------- */

export function VifLab() {
  const t = useT();
  const [r, setR] = useState(0.6);
  const vif = 1 / (1 - r * r);
  const ref = useCanvas((ctx, w, h) => {
    const c = tone();
    ctx.clearRect(0, 0, w, h);
    const half = w * 0.42;
    const rng = mulberry32(9);
    ctx.strokeStyle = c.line;
    ctx.strokeRect(8, 20, half - 14, h - 44);
    for (let i = 0; i < 70; i++) {
      const a = gauss(rng);
      const b = r * a + Math.sqrt(1 - r * r) * gauss(rng);
      const px = 8 + (half - 14) / 2 + (a / 3.2) * ((half - 14) / 2);
      const py = 20 + (h - 44) / 2 - (b / 3.2) * ((h - 44) / 2);
      ctx.fillStyle = c.ink;
      ctx.beginPath();
      ctx.arc(clamp(px, 10, half - 8), clamp(py, 22, h - 26), 2.6, 0, Math.PI * 2);
      ctx.fill();
    }
    const left = half + 36;
    const X = (v: number) => left + v * (w - left - 10);
    const Y = (v: number) => h - 22 - (Math.min(v, 25) / 25) * (h - 44);
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
    yTicks(ctx, c, [1, 5, 10, 25].map((v) => [Y(v), String(v)] as [number, string]), half + 6);
    ctx.fillStyle = c.muted;
    ctx.font = "11px Outfit, sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(t("x1 (ngang) với x2 (dọc)", "x1 (across) vs x2 (up)"), 10, 13);
    ctx.fillText(t("VIF theo tương quan r", "VIF vs correlation r"), left, 13);
    xTicks(ctx, c, h, [0, 0.5, 1].map((v) => [X(v), String(v)] as [number, string]));
  }, [r, vif, t]);
  return (
    <Lab title={t("VIF: hai biến đi cùng nhau thì phình sai số", "VIF: when two variables move together, the error balloons")} onReset={() => setR(0.6)} onExtreme={() => setR(r > 0.8 ? 0 : 0.97)}>
      <canvas ref={ref} className="h-52 w-full rounded-xl bg-paper" />
      <Range label={t("Tương quan giữa x1 và x2", "Correlation between x1 and x2")} min={0} max={0.98} step={0.01} value={r} display={r.toFixed(2)} onChange={setR} />
      <p className="text-sm">VIF = 1/(1 − r²) = <b>{vif.toFixed(1)}</b>. {t("Sai số chuẩn của hệ số nhân lên", "The coefficient's standard error is multiplied by")} √VIF = {Math.sqrt(vif).toFixed(2)}.</p>
      <p className="mt-1 text-sm text-muted">{vif >= 10 ? t("Trên 10: hai biến gần như là một. Mô hình không biết chia công cho ai, hệ số lung lay.", "Above 10: the two variables are almost one. The model cannot tell whom to credit, so the coefficients wobble.") : vif >= 5 ? t("Quanh 5: bắt đầu đáng lo.", "Around 5: starting to worry.") : t("Dưới 5: không sao.", "Below 5: fine.")} {t("Các điểm càng dồn lên một đường chéo thì VIF càng cao.", "The more the points squeeze onto a diagonal, the higher the VIF.")}</p>
    </Lab>
  );
}

/* ---------- dummy variables ---------- */

export function DummyLab() {
  const t = useT();
  const groups = ["GDN", "Meta", "TikTok"];
  const base = [20, 32, 13];
  const [ref0, setRef0] = useState(0);
  const pts = useMemo(() => {
    const rng = mulberry32(3);
    return groups.map((_, g) => Array.from({ length: 12 }, () => base[g] + gauss(rng) * 3.5));
  }, []);
  const means = pts.map((p) => p.reduce((s, v) => s + v, 0) / p.length);
  const canvasRef = useCanvas((ctx, w, h) => {
    const c = tone();
    ctx.clearRect(0, 0, w, h);
    const Y = (v: number) => h - 22 - (v / 45) * (h - 44);
    const colW = (w - 40) / 3;
    ctx.strokeStyle = c.line;
    [0, 15, 30, 45].forEach((v) => {
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
        ctx.globalAlpha = 0.55;
        ctx.beginPath();
        ctx.arc(cx + ((i % 6) - 2.5) * 9, Y(v), 3.2, 0, Math.PI * 2);
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
    yTicks(ctx, c, [0, 15, 30, 45].map((v) => [Y(v), String(v)] as [number, string]));
    caption(ctx, c, t("mỗi chấm là một tuần · gạch đỏ: trung bình nhóm · nét đứt: nhóm gốc", "each dot is a week · red bar: group mean · dashed: the baseline group"));
    xTicks(ctx, c, h, groups.map((g, i) => [34 + i * colW + colW / 2, g] as [number, string]));
  }, [ref0, pts, means, t]);
  return (
    <Lab title={t("Biến giả: một nhóm làm gốc, các nhóm còn lại là độ lệch", "Dummy variables: one group is the baseline, the others are offsets")} onReset={() => setRef0(0)} onExtreme={() => setRef0((ref0 + 1) % 3)}>
      <Pills value={String(ref0) as "0" | "1" | "2"} onChange={(v) => setRef0(Number(v))} items={groups.map((g, i) => [String(i) as "0" | "1" | "2", `${t("Gốc", "Baseline")}: ${g}`])} />
      <canvas ref={canvasRef} className="h-52 w-full rounded-xl bg-paper" />
      <table className="mt-2 w-full text-left text-sm">
        <thead><tr className="text-muted"><th>{t("Số hạng", "Term")}</th><th>{t("Giá trị", "Value")}</th><th>{t("Nghĩa là", "Meaning")}</th></tr></thead>
        <tbody>
          <tr className="border-t border-line"><td>{t("Chặn", "Intercept")}</td><td>{means[ref0].toFixed(1)}</td><td>{t(`trung bình của ${groups[ref0]}`, `mean of ${groups[ref0]}`)}</td></tr>
          {groups.map((g, i) => (i === ref0 ? null : (
            <tr key={g} className="border-t border-line"><td>is_{g}</td><td>{(means[i] - means[ref0]).toFixed(1)}</td><td>{t(`${g} hơn ${groups[ref0]} chừng này`, `${g} minus ${groups[ref0]}`)}</td></tr>
          )))}
        </tbody>
      </table>
      <p className="mt-2 text-sm text-muted">{t("Ba nhóm chỉ cần hai cột 0/1. Nhóm bị bỏ ra là nhóm gốc, và mọi hệ số đều đọc so với nó. Đổi nhóm gốc thì con số đổi, nhưng chênh lệch giữa các nhóm thì không.", "Three groups need only two 0/1 columns. The omitted group is the baseline and every coefficient is read against it. Change the baseline and the numbers change, but the gaps between groups do not.")}</p>
    </Lab>
  );
}

/* ---------- R² vs adjusted R² ---------- */

export function SelectLab() {
  const t = useT();
  const [k, setK] = useState(2);
  const rows = useMemo(() => {
    const rng = mulberry32(77);
    const n = 40;
    const cols = Array.from({ length: 12 }, () => Array.from({ length: n }, () => gauss(rng)));
    const y = Array.from({ length: n }, (_, i) => 2 * cols[0][i] + 1.5 * cols[1][i] + gauss(rng) * 2);
    return Array.from({ length: 12 }, (_, i) => {
      const m = i + 1;
      const r = ols(Array.from({ length: n }, (_, row) => [1, ...cols.slice(0, m).map((c) => c[row])]), y);
      return { r2: r.r2, adj: 1 - ((1 - r.r2) * (n - 1)) / (n - m - 1) };
    });
  }, []);
  const ref = useCanvas((ctx, w, h) => {
    const c = tone();
    ctx.clearRect(0, 0, w, h);
    const X = (i: number) => 34 + ((i - 1) / 11) * (w - 48);
    const Y = (v: number) => h - 24 - clamp(v, 0, 1) * (h - 46);
    ctx.strokeStyle = c.line;
    [0, 0.5, 1].forEach((v) => {
      ctx.beginPath();
      ctx.moveTo(30, Y(v));
      ctx.lineTo(w - 6, Y(v));
      ctx.stroke();
    });
    const line = (key: "r2" | "adj", col: string) => {
      ctx.strokeStyle = col;
      ctx.lineWidth = 2;
      ctx.beginPath();
      rows.forEach((r, i) => (i === 0 ? ctx.moveTo(X(i + 1), Y(r[key])) : ctx.lineTo(X(i + 1), Y(r[key]))));
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
    yTicks(ctx, c, [0, 0.5, 1].map((v) => [Y(v), v.toFixed(1)] as [number, string]));
    caption(ctx, c, t("ngang: số biến trong mô hình · đen: R² · đỏ: R² hiệu chỉnh · xanh: 2 biến thật", "x: variables in the model · black: R² · red: adjusted R² · green: the 2 real ones"));
    xTicks(ctx, c, h, Array.from({ length: 12 }, (_, i) => [X(i + 1), String(i + 1)] as [number, string]));
  }, [rows, k, t]);
  return (
    <Lab title={t("Thêm biến: R² luôn tăng, R² hiệu chỉnh thì không", "Adding variables: R² always rises, adjusted R² does not")} onReset={() => setK(2)} onExtreme={() => setK(12)}>
      <canvas ref={ref} className="h-52 w-full rounded-xl bg-paper" />
      <Range label={t("Số biến đưa vào", "Variables included")} min={1} max={12} step={1} value={k} display={String(k)} onChange={setK} />
      <p className="text-sm">R² = {rows[k - 1].r2.toFixed(3)} · {t("R² hiệu chỉnh", "adjusted R²")} = {rows[k - 1].adj.toFixed(3)}</p>
      <p className="mt-1 text-sm text-muted">{t("Chỉ 2 biến đầu là thật; từ biến thứ 3 trở đi là số ngẫu nhiên. R² vẫn nhích lên vì thêm biến nào cũng khớp thêm chút nhiễu. R² hiệu chỉnh phạt việc thêm biến vô ích nên đi ngang rồi tụt xuống.", "Only the first 2 variables are real; from the 3rd on they are random numbers. R² still creeps up because any extra variable fits a bit more noise. Adjusted R² penalises useless variables, so it flattens and then falls.")}</p>
    </Lab>
  );
}

/* ---------- why logistic ---------- */

function fitLogistic(pts: { x: number; y: number }[]) {
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
    b0 -= (0.5 * g0) / pts.length;
    b1 -= (0.5 * g1) / pts.length;
  }
  return { b0, b1 };
}

const LOGIT_PTS = (() => {
  const rng = mulberry32(14);
  return Array.from({ length: 36 }, () => {
    const x = rng() * 10;
    return { x, y: rng() < 1 / (1 + Math.exp(-(x - 5) * 1.1)) ? 1 : 0 };
  });
})();

export function WhyLogitLab() {
  const t = useT();
  const [x0, setX0] = useState(9.5);
  const m = useMemo(() => {
    const lin = (() => {
      const r = ols(LOGIT_PTS.map((p) => [1, p.x]), LOGIT_PTS.map((p) => p.y));
      return { b0: r.beta[0], b1: r.beta[1] };
    })();
    return { lin, log: fitLogistic(LOGIT_PTS) };
  }, []);
  const linAt = (x: number) => m.lin.b0 + m.lin.b1 * x;
  const logAt = (x: number) => 1 / (1 + Math.exp(-(m.log.b0 + m.log.b1 * x)));
  const ref = useCanvas((ctx, w, h) => {
    const c = tone();
    ctx.clearRect(0, 0, w, h);
    const X = (v: number) => 34 + (v / 12) * (w - 44);
    const Y = (v: number) => h - 24 - ((v + 0.4) / 1.8) * (h - 46);
    ctx.strokeStyle = c.line;
    [0, 1].forEach((v) => {
      ctx.beginPath();
      ctx.moveTo(30, Y(v));
      ctx.lineTo(w - 6, Y(v));
      ctx.stroke();
    });
    LOGIT_PTS.forEach((p) => {
      ctx.fillStyle = c.ink;
      ctx.globalAlpha = 0.55;
      ctx.beginPath();
      ctx.arc(X(p.x), Y(p.y), 3.4, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    });
    const plot = (f: (x: number) => number, col: string) => {
      ctx.strokeStyle = col;
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i = 0; i <= 120; i++) {
        const v = (i / 120) * 12;
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
    yTicks(ctx, c, [[Y(0), "0"], [Y(1), "1"], [Y(-0.3), "-0.3"], [Y(1.3), "1.3"]]);
    caption(ctx, c, t("chấm: 0 = ở lại, 1 = rời · đen: đường thẳng · đỏ: đường sigmoid", "dots: 0 = stays, 1 = leaves · black: straight line · red: sigmoid"));
    xTicks(ctx, c, h, [0, 4, 8, 12].map((v) => [X(v), String(v)] as [number, string]));
  }, [x0, m, t]);
  const lv = linAt(x0);
  return (
    <Lab title={t("Vì sao không dùng đường thẳng cho câu hỏi có/không", "Why a straight line fails for yes/no questions")} onReset={() => setX0(9.5)} onExtreme={() => setX0(x0 < 6 ? 12 : 0)}>
      <canvas ref={ref} className="h-52 w-full rounded-xl bg-paper" />
      <Range label={t("Khách mới có x =", "A new customer with x =")} min={0} max={12} step={0.5} value={x0} display={x0.toFixed(1)} onChange={setX0} />
      <p className="text-sm">
        {t("Đường thẳng đoán", "The straight line predicts")}: <b>{lv.toFixed(2)}</b> {lv > 1 || lv < 0 ? t("(không thể là xác suất!)", "(cannot be a probability!)") : ""} · {t("sigmoid đoán", "the sigmoid predicts")}: <b>{logAt(x0).toFixed(2)}</b>
      </p>
      <p className="mt-1 text-sm text-muted">{t("Kéo x ra hai đầu: đường thẳng chui ra ngoài khoảng 0 đến 1, còn sigmoid luôn nằm trong đó. Đó là lý do hồi quy logistic uốn đường thẳng thành chữ S.", "Drag x towards either end: the line escapes the 0 to 1 range, while the sigmoid always stays inside. That is why logistic regression bends the line into an S.")}</p>
    </Lab>
  );
}

/* ---------- one-versus-rest ---------- */

export function OvrLab() {
  const t = useT();
  const [x, setX] = useState(4);
  const labels = [t("đặt liệu trình", "book a treatment"), t("mua sản phẩm", "buy a product"), t("chỉ xem", "only browse")];
  const sig = (v: number) => 1 / (1 + Math.exp(-v));
  const fs = [(v: number) => sig(-3.2 + 0.75 * v), (v: number) => sig(2.2 - 0.3 * v) * 0.85, (v: number) => sig(3 - 0.8 * v)];
  const ps = fs.map((f) => f(x));
  const best = ps.indexOf(Math.max(...ps));
  const cols = (c: Ink) => [c.accent, c.good, c.ink];
  const ref = useCanvas((ctx, w, h) => {
    const c = tone();
    ctx.clearRect(0, 0, w, h);
    const X = (v: number) => 34 + (v / 10) * (w - 44);
    const Y = (v: number) => h - 24 - v * (h - 46);
    ctx.strokeStyle = c.line;
    [0, 0.5, 1].forEach((v) => {
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
    yTicks(ctx, c, [0, 0.5, 1].map((v) => [Y(v), String(v)] as [number, string]));
    caption(ctx, c, t("ngang: số lần ghé x · dọc: xác suất của từng đường (mỗi nhãn một đường)", "x: number of visits · y: probability from each curve (one curve per label)"));
    xTicks(ctx, c, h, [0, 2, 4, 6, 8, 10].map((v) => [X(v), String(v)] as [number, string]));
  }, [x, t]);
  const total = ps.reduce((s, v) => s + v, 0);
  return (
    <Lab title={t("Nhiều nhãn: mỗi nhãn một đường cong", "Many labels: one curve per label")} onReset={() => setX(4)} onExtreme={() => setX(x < 5 ? 9 : 1)}>
      <canvas ref={ref} className="h-52 w-full rounded-xl bg-paper" />
      <Range label={t("Số lần ghé của khách", "Customer visits")} min={0} max={10} step={0.5} value={x} display={x.toFixed(1)} onChange={setX} />
      <div className="mt-2 grid grid-cols-3 gap-2 text-sm">
        {labels.map((l, k) => (
          <div key={l} className={`rounded-xl border p-2 ${k === best ? "border-accent bg-accent text-accent-ink" : "border-line"}`}>
            <div className="text-xs opacity-80">{l}</div>
            <div className="tabular-nums">{ps[k].toFixed(2)}</div>
          </div>
        ))}
      </div>
      <p className="mt-2 text-sm text-muted">{t(`Tổng ba xác suất = ${total.toFixed(2)}, không tự bằng 1 vì mỗi đường trả lời một câu hỏi riêng. Nhãn cao nhất được chọn, và bạn vẫn phải tự viết quy tắc hành động.`, `The three probabilities add up to ${total.toFixed(2)}, not automatically 1, because each curve answers its own question. The highest label wins, and you still write the action rule yourself.`)}</p>
    </Lab>
  );
}

/* ---------- scaling before clustering ---------- */

const CUST = [
  [120, 2], [180, 8], [90, 5], [450, 3], [480, 9], [300, 6], [60, 9], [380, 7], [220, 1], [410, 5], [150, 4], [500, 6],
] as const;
const PROBE = [250, 8] as const;

export function ScaleLab() {
  const t = useT();
  const [scaled, setScaled] = useState(false);
  const stats = useMemo(() => {
    const cols = [0, 1].map((j) => CUST.map((r) => r[j]));
    const mean = cols.map((c) => c.reduce((s, v) => s + v, 0) / c.length);
    const sd = cols.map((c, j) => Math.sqrt(c.reduce((s, v) => s + (v - mean[j]) ** 2, 0) / c.length));
    return { mean, sd };
  }, []);
  const conv = (j: number, v: number) => (scaled ? (v - stats.mean[j]) / stats.sd[j] : v);
  const info = useMemo(() => {
    const d = CUST.map((r, i) => {
      const dx = conv(0, r[0]) - conv(0, PROBE[0]);
      const dy = conv(1, r[1]) - conv(1, PROBE[1]);
      return { i, dx2: dx * dx, dy2: dy * dy, dist: Math.sqrt(dx * dx + dy * dy) };
    });
    return d.sort((a, b) => a.dist - b.dist)[0];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scaled]);
  const ref = useCanvas((ctx, w, h) => {
    const c = tone();
    ctx.clearRect(0, 0, w, h);
    const xs = CUST.map((r) => conv(0, r[0])).concat(conv(0, PROBE[0]));
    const ys = CUST.map((r) => conv(1, r[1])).concat(conv(1, PROBE[1]));
    const [x0, x1] = [Math.min(...xs), Math.max(...xs)];
    const [y0, y1] = [Math.min(...ys), Math.max(...ys)];
    const X = (v: number) => 34 + ((v - x0) / (x1 - x0)) * (w - 52);
    const Y = (v: number) => h - 26 - ((v - y0) / (y1 - y0)) * (h - 56);
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
  }, [scaled, info, t]);
  const tot = info.dx2 + info.dy2 || 1;
  return (
    <Lab title={t("Chuẩn hóa trước khi gom cụm", "Standardise before clustering")} onReset={() => setScaled(false)} onExtreme={() => setScaled(!scaled)}>
      <Pills value={scaled ? "s" : "r"} onChange={(v) => setScaled(v === "s")} items={[["r", t("Số gốc", "Raw numbers")], ["s", t("Đã chuẩn hóa", "Standardised")]]} />
      <canvas ref={ref} className="h-52 w-full rounded-xl bg-paper" />
      <p className="mt-2 text-sm">
        {t("Hàng xóm gần nhất của khách vuông đỏ", "The red square's nearest neighbour")}: {t("chi tiêu", "spend")} {CUST[info.i][0]}, {t("ghé", "visits")} {CUST[info.i][1]}.
      </p>
      <p className="mt-1 text-sm">
        {t("Phần khoảng cách đến từ chi tiêu", "Share of the distance coming from spend")}: <b>{((info.dx2 / tot) * 100).toFixed(0)}%</b> · {t("từ số lần ghé", "from visits")}: {((info.dy2 / tot) * 100).toFixed(0)}%
      </p>
      <p className="mt-1 text-sm text-muted">{scaled ? t("Sau khi chuẩn hóa, cả hai biến đóng góp ngang nhau và hàng xóm hợp lý hơn.", "After standardising, both variables contribute fairly and the neighbour makes more sense.") : t("Chi tiêu chạy tới hàng trăm còn số lần ghé chỉ vài đơn vị, nên chi tiêu gần như quyết định mọi thứ và số lần ghé bị bỏ qua. Bấm 'Đã chuẩn hóa' để so.", "Spend runs into the hundreds while visits are a handful, so spend decides almost everything and visits are ignored. Press 'Standardised' to compare.")}</p>
    </Lab>
  );
}

/* ---------- text: tokens, bag of words, tf-idf, edit distance ---------- */

const STOP_VI = new Set(["và", "của", "là", "có", "cho", "một", "những", "được", "ở", "với"]);
const STOP_EN = new Set(["and", "of", "is", "the", "a", "an", "to", "in", "for", "with", "only"]);

export function TokLab() {
  const t = useT();
  const lang = t("vi", "en");
  const [text, setText] = useState("");
  const sample = t("Gói massage đá nóng 90 phút, giá chỉ 450.000đ!", "Hot stone massage package, 90 minutes, only $25!");
  const src = text || sample;
  const [low, setLow] = useState(true);
  const [strip, setStrip] = useState(true);
  const [stop, setStop] = useState(false);
  const tokens = useMemo(() => {
    let s = src;
    if (low) s = s.toLowerCase();
    if (strip) s = s.replace(/[.,!?;:()"“”]/g, " ");
    let toks = s.split(/\s+/).filter(Boolean);
    if (stop) {
      const list = lang === "vi" ? STOP_VI : STOP_EN;
      toks = toks.filter((w) => !list.has(w.toLowerCase()));
    }
    return toks;
  }, [src, low, strip, stop, lang]);
  const uniq = new Set(tokens).size;
  const toggle = (label: string, on: boolean, set: (v: boolean) => void) => (
    <button type="button" className={pill(on)} onClick={() => set(!on)}>{on ? "✓ " : ""}{label}</button>
  );
  return (
    <Lab title={t("Tách token: cắt câu thành từng mảnh", "Tokenising: cutting a sentence into pieces")} onReset={() => { setText(""); setLow(true); setStrip(true); setStop(false); }} onExtreme={() => { setLow(false); setStrip(false); setStop(false); }}>
      <input className="mb-2 w-full rounded-xl border border-line bg-paper px-3 py-2 text-sm" value={text} placeholder={sample} onChange={(e) => setText(e.target.value)} aria-label={t("Câu để tách", "Sentence to split")} />
      <div className="mb-2 flex flex-wrap gap-2">
        {toggle(t("chữ thường", "lowercase"), low, setLow)}
        {toggle(t("bỏ dấu câu", "strip punctuation"), strip, setStrip)}
        {toggle(t("bỏ từ thừa", "drop stop-words"), stop, setStop)}
      </div>
      <div className="flex flex-wrap gap-1.5 rounded-xl bg-paper p-3">
        {tokens.map((w, i) => (
          <span key={i} className="rounded-lg border border-accent px-2 py-1 text-sm">{w}</span>
        ))}
      </div>
      <p className="mt-2 text-sm">{tokens.length} token · {uniq} {t("khác nhau", "distinct")}.</p>
      <p className="mt-1 text-sm text-muted">{t("Tắt 'chữ thường' thì 'Gói' và 'gói' thành hai token khác nhau. Tắt 'bỏ dấu câu' thì '450.000đ!' dính cả dấu. Mỗi lựa chọn làm bộ token đổi, và mọi bước sau đều dùng bộ token này.", "Turn off 'lowercase' and 'Hot' and 'hot' become two tokens. Turn off 'strip punctuation' and '$25!' keeps its mark stuck on. Each choice changes the token set, and every later step uses it.")}</p>
    </Lab>
  );
}

const DOCS_BOW = {
  vi: ["khách thích gói massage", "gói massage khách thích", "khách thích ghế massage rẻ", "ghế rẻ đặt trước"],
  en: ["guests like massage package", "package massage guests like", "guests like massage chair cheap", "chair cheap book ahead"],
};

export function BowLab() {
  const t = useT();
  const docs = t("vi", "en") === "vi" ? DOCS_BOW.vi : DOCS_BOW.en;
  const [sel, setSel] = useState(0);
  const vocab = useMemo(() => [...new Set(docs.flatMap((d) => d.split(" ")))], [docs]);
  const vec = (d: string) => vocab.map((w) => d.split(" ").filter((x) => x === w).length);
  const vs = docs.map(vec);
  return (
    <Lab title={t("Túi từ: đếm từ và bỏ thứ tự", "Bag of words: count words, drop the order")} onReset={() => setSel(0)} onExtreme={() => setSel(1)}>
      <div className="mb-2 space-y-1.5">
        {docs.map((d, i) => (
          <button key={d} type="button" className={`block w-full rounded-xl border px-3 py-2 text-left text-sm ${sel === i ? "border-accent bg-accent text-accent-ink" : "border-line"}`} onClick={() => setSel(i)}>
            <span className="mr-2 opacity-70">d{i + 1}</span>{d}
          </button>
        ))}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-center text-sm">
          <thead><tr className="text-muted"><th className="text-left" />{vocab.map((w) => <th key={w} className="px-1 font-normal">{w}</th>)}</tr></thead>
          <tbody>
            {vs.map((v, i) => (
              <tr key={i} className={`border-t border-line ${sel === i ? "bg-accent/15" : ""}`}>
                <td className="text-left text-muted">d{i + 1}</td>
                {v.map((n, j) => <td key={j} className={n ? "font-medium" : "text-muted/50"}>{n}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-sm text-muted">{t("d1 và d2 có cùng các từ nhưng đảo thứ tự: hai hàng giống hệt nhau. Máy chỉ còn thấy 'có bao nhiêu lần', không thấy 'đứng ở đâu'. d3 chia sẻ 'khách thích massage' với d1 nên hàng của nó cũng gần.", "d1 and d2 hold the same words in a different order: their rows are identical. The machine only sees 'how many times', never 'where'. d3 shares 'guests like massage' with d1, so its row is close too.")}</p>
    </Lab>
  );
}

export function TfidfLab() {
  const t = useT();
  const docs = t("vi", "en") === "vi" ? DOCS_BOW.vi : DOCS_BOW.en;
  const [sel, setSel] = useState(2);
  const words = docs[sel].split(" ");
  const N = docs.length;
  const rows = [...new Set(words)].map((w) => {
    const tf = words.filter((x) => x === w).length / words.length;
    const df = docs.filter((d) => d.split(" ").includes(w)).length;
    const idf = Math.log(N / df);
    return { w, tf, df, idf, score: tf * idf };
  });
  const max = Math.max(0.01, ...rows.map((r) => r.score));
  return (
    <Lab title={t("TF-IDF: từ nào đáng chú ý trong văn bản này", "TF-IDF: which words stand out in this text")} onReset={() => setSel(2)} onExtreme={() => setSel(3)}>
      <div className="mb-2 space-y-1.5">
        {docs.map((d, i) => (
          <button key={d} type="button" className={`block w-full rounded-xl border px-3 py-2 text-left text-sm ${sel === i ? "border-accent bg-accent text-accent-ink" : "border-line"}`} onClick={() => setSel(i)}>
            <span className="mr-2 opacity-70">d{i + 1}</span>{d}
          </button>
        ))}
      </div>
      <table className="w-full text-left text-sm">
        <thead><tr className="text-muted"><th>{t("Từ", "Word")}</th><th>TF</th><th>{t("Có trong", "In docs")}</th><th>IDF</th><th>TF×IDF</th></tr></thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.w} className="border-t border-line">
              <td>{r.w}</td>
              <td className="tabular-nums">{r.tf.toFixed(2)}</td>
              <td className="tabular-nums">{r.df}/{N}</td>
              <td className="tabular-nums">{r.idf.toFixed(2)}</td>
              <td>
                <span className="inline-block h-2.5 rounded-full bg-accent align-middle" style={{ width: `${(r.score / max) * 60}px` }} />
                <span className="ml-2 tabular-nums">{r.score.toFixed(2)}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-2 text-sm text-muted">{t("TF cho biết từ lặp nhiều trong văn bản này. IDF = ln(N/df) hạ điểm các từ có mặt ở hầu hết văn bản. Từ có ở mọi văn bản được điểm 0. 'Massage' có ở 3 trong 4 văn bản nên điểm thấp; 'ghế' và 'đặt' hiếm hơn nên nổi hơn.", "TF says the word repeats in this text. IDF = ln(N/df) lowers words found in most texts; a word in every text scores 0. 'Massage' is in 3 of 4 texts so it scores low; 'chair' and 'book' are rarer and stand out more.")}</p>
    </Lab>
  );
}

function levenshtein(a: string, b: string) {
  const d = Array.from({ length: a.length + 1 }, (_, i) => Array.from({ length: b.length + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0)));
  for (let i = 1; i <= a.length; i++)
    for (let j = 1; j <= b.length; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  const path = new Set<string>();
  let i = a.length;
  let j = b.length;
  path.add(`${i},${j}`);
  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && d[i][j] === d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)) { i--; j--; }
    else if (i > 0 && d[i][j] === d[i - 1][j] + 1) i--;
    else j--;
    path.add(`${i},${j}`);
  }
  return { d, path };
}

export function EditLab() {
  const t = useT();
  const [a, setA] = useState("masage");
  const [b, setB] = useState("massage");
  const sa = a.slice(0, 9).toLowerCase();
  const sb = b.slice(0, 9).toLowerCase();
  const { d, path } = useMemo(() => levenshtein(sa, sb), [sa, sb]);
  return (
    <Lab title={t("Khoảng cách chỉnh sửa: bao nhiêu thao tác để biến chữ này thành chữ kia", "Edit distance: how many edits turn one word into the other")} onReset={() => { setA("masage"); setB("massage"); }} onExtreme={() => { setA("spa"); setB("massage"); }}>
      <div className="mb-2 grid grid-cols-2 gap-2">
        <input className="rounded-xl border border-line bg-paper px-3 py-2 text-sm" value={a} maxLength={9} onChange={(e) => setA(e.target.value)} aria-label={t("Chữ thứ nhất", "First word")} />
        <input className="rounded-xl border border-line bg-paper px-3 py-2 text-sm" value={b} maxLength={9} onChange={(e) => setB(e.target.value)} aria-label={t("Chữ thứ hai", "Second word")} />
      </div>
      <div className="overflow-x-auto">
        <table className="text-center text-sm">
          <thead>
            <tr className="text-muted"><th /><th />{[...sb].map((ch, j) => <th key={j} className="w-8 font-normal">{ch}</th>)}</tr>
          </thead>
          <tbody>
            {d.map((row, i) => (
              <tr key={i}>
                <td className="pr-1 text-muted">{i === 0 ? "" : sa[i - 1]}</td>
                {row.map((v, j) => (
                  <td key={j} className={`h-8 w-8 rounded ${path.has(`${i},${j}`) ? "bg-accent text-accent-ink" : "text-muted"}`}>{v}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-sm">{t("Khoảng cách chỉnh sửa", "Edit distance")} = <b>{d[sa.length][sb.length]}</b> {t("(ô góc dưới phải)", "(bottom-right cell)")}.</p>
      <p className="mt-1 text-sm text-muted">{t("Mỗi ô là số thao tác ít nhất (thêm, xóa hoặc đổi một chữ) để biến phần đầu của chữ đầu thành phần đầu của chữ sau. Dãy ô tô đậm là đường đi rẻ nhất. 'masage' → 'massage' chỉ cần thêm một chữ 's', nên khoảng cách là 1: nhờ vậy gợi ý sửa lỗi gõ biết hai chữ này gần nhau.", "Each cell is the fewest edits (insert, delete or substitute one letter) to turn the first part of the first word into the first part of the second. The highlighted cells are the cheapest route. 'masage' → 'massage' needs one inserted 's', so the distance is 1, which is how typo suggestions know the two words are close.")}</p>
    </Lab>
  );
}

/* ---------- partial derivative ---------- */

export function PartialLab() {
  const t = useT();
  const [x0, setX0] = useState(1);
  const [y0, setY0] = useState(1);
  const [along, setAlong] = useState<"x" | "y">("x");
  const f = (x: number, y: number) => x * x + x * y + 2 * y * y;
  const dfx = 2 * x0 + y0;
  const dfy = x0 + 4 * y0;
  const ref = useCanvas((ctx, w, h) => {
    const c = tone();
    ctx.clearRect(0, 0, w, h);
    const g = (s: number) => (along === "x" ? f(s, y0) : f(x0, s));
    const at = along === "x" ? x0 : y0;
    const slope = along === "x" ? dfx : dfy;
    const X = (v: number) => 34 + ((v + 3) / 6) * (w - 46);
    const Y = (v: number) => h - 24 - ((v + 2) / 40) * (h - 46);
    ctx.strokeStyle = c.line;
    [0, 10, 20, 30].forEach((v) => {
      ctx.beginPath();
      ctx.moveTo(30, Y(v));
      ctx.lineTo(w - 6, Y(v));
      ctx.stroke();
    });
    ctx.strokeStyle = c.ink;
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let i = 0; i <= 120; i++) {
      const s = -3 + (i / 120) * 6;
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
    yTicks(ctx, c, [0, 10, 20, 30].map((v) => [Y(v), String(v)] as [number, string]));
    caption(ctx, c, along === "x" ? t(`lát cắt: y giữ cố định = ${y0.toFixed(1)}, chỉ x chạy`, `slice: y held at ${y0.toFixed(1)}, only x moves`) : t(`lát cắt: x giữ cố định = ${x0.toFixed(1)}, chỉ y chạy`, `slice: x held at ${x0.toFixed(1)}, only y moves`));
    xTicks(ctx, c, h, [-3, -2, -1, 0, 1, 2, 3].map((v) => [X(v), String(v)] as [number, string]));
  }, [x0, y0, along, t]);
  return (
    <Lab title={t("Đạo hàm riêng: xoay một nút, giữ nút kia", "Partial derivative: turn one knob, hold the other")} onReset={() => { setX0(1); setY0(1); setAlong("x"); }} onExtreme={() => { setX0(2.5); setY0(-2); }}>
      <Pills value={along} onChange={setAlong} items={[["x", t("Xoay x (giữ y)", "Turn x (hold y)")], ["y", t("Xoay y (giữ x)", "Turn y (hold x)")]]} />
      <canvas ref={ref} className="h-52 w-full rounded-xl bg-paper" />
      <Range label="x" min={-2.5} max={2.5} step={0.1} value={x0} display={x0.toFixed(1)} onChange={setX0} />
      <Range label="y" min={-2.5} max={2.5} step={0.1} value={y0} display={y0.toFixed(1)} onChange={setY0} />
      <p className="text-sm">f(x, y) = x² + xy + 2y² = {f(x0, y0).toFixed(2)} · ∂f/∂x = 2x + y = <b>{dfx.toFixed(1)}</b> · ∂f/∂y = x + 4y = <b>{dfy.toFixed(1)}</b></p>
      <p className="mt-1 text-sm text-muted">{t("Đường đen là mặt cắt của f khi chỉ một biến chạy. Đường đỏ là tiếp tuyến của mặt cắt đó; độ dốc của nó chính là đạo hàm riêng theo biến đang xoay.", "The black line is a slice of f when only one variable moves. The red line is that slice's tangent; its slope is the partial derivative with respect to the variable being turned.")}</p>
    </Lab>
  );
}

export const registry2: Record<string, () => ReactElement> = {
  "count-p": () => <CountLab mode="perm" />,
  "count-c": () => <CountLab mode="comb" />,
  prob: ProbLab,
  "venn-events": () => <VennLab mode="events" />,
  "venn-or": () => <VennLab mode="or" />,
  "venn-and": () => <VennLab mode="and" />,
  "venn-joint": () => <VennLab mode="joint" />,
  "dice-rv": () => <DiceLab mode="rv" />,
  "dice-ev": () => <DiceLab mode="ev" />,
  sample: () => <SampleLab />,
  "sample-bias": () => <SampleLab start="convenience" />,
  bayes: BayesLab,
  ml: MlLab,
  assume: AssumeLab,
  mlrwhy: () => <MlrWhyLab />,
  mlrheld: () => <MlrWhyLab held />,
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
  partial: PartialLab,
};

