import type { Actor, Col, Frame, Motion } from "@/components/motion/types";

type P = Partial<Actor>;
export type A = Actor | Actor[];

export const box = (id: string, x: number, y: number, w: number, h: number, t: string, o: P = {}): Actor => ({ id, k: "box", x, y, w, h, t, ...o });
export const dot = (id: string, x: number, y: number, c: Col = "ink", r = 1.3, o: P = {}): Actor => ({ id, k: "dot", x, y, r, c, ...o });
export const ring = (id: string, x: number, y: number, r: number, c: Col = "accent", o: P = {}): Actor => ({ id, k: "ring", x, y, r, c, ...o });
export const bar = (id: string, x: number, base: number, h: number, c: Col = "accent", w = 5, t?: string, o: P = {}): Actor => ({ id, k: "bar", x, y: base, w, h, c, t, ...o });
export const txt = (id: string, x: number, y: number, t: string, o: P = {}): Actor => ({ id, k: "text", x, y, t, c: "ink", ...o });
export const ln = (id: string, x: number, y: number, x2: number, y2: number, c: Col = "mute", o: P = {}): Actor => ({ id, k: "line", x, y, x2, y2, c, ...o });
export const arr = (id: string, x: number, y: number, x2: number, y2: number, c: Col = "mute", o: P = {}): Actor => ({ id, k: "arrow", x, y, x2, y2, c, ...o });

export const F = (vi: string, en: string, ...a: A[]): Frame => ({ vi, en, a: a.flat() });
export const M = (frames: Frame[], h = 60): Motion => ({ frames, h });

/** Hàng hộp nối nhau bằng mũi tên. `on` là bước đang nói tới: bước trước xanh, bước sau mờ. */
export function chain(p: string, labels: string[], o: { on?: number; y?: number; h?: number; sub?: string[]; x0?: number; x1?: number; all?: boolean } = {}): Actor[] {
  const n = labels.length;
  const x0 = o.x0 ?? 6;
  const x1 = o.x1 ?? 94;
  const y = o.y ?? 30;
  const h = o.h ?? 12;
  const gap = n > 1 ? 3.6 : 0;
  const w = (x1 - x0 - gap * (n - 1)) / n;
  const out: Actor[] = [];
  labels.forEach((t, i) => {
    const cx = x0 + w / 2 + i * (w + gap);
    const on = o.on ?? -1;
    const cur = i === on;
    const done = on >= 0 && i < on;
    const dim = on >= 0 && i > on && !o.all;
    out.push(box(`${p}${i}`, cx, y, w, h, t, { f: cur ? "accent" : "soft", c: done ? "green" : cur ? "accent" : "ink", o: dim ? 0.5 : 1 }));
    if (o.sub?.[i]) out.push(txt(`${p}s${i}`, cx, y + h / 2 + 4.5, o.sub[i], { s: 2.7, c: cur ? "accent" : "mute", o: dim ? 0.5 : 1 }));
    if (i < n - 1) out.push(arr(`${p}a${i}`, cx + w / 2 + 0.3, y, cx + w / 2 + gap - 0.3, y, done || cur ? "green" : "mute", { o: dim ? 0.4 : 1 }));
  });
  return out;
}

/** Cột có nhãn dưới chân. */
export function bars(p: string, vals: number[], labels: string[], o: { x0?: number; x1?: number; base?: number; max?: number; h?: number; c?: Col | Col[]; show?: boolean; hl?: number[]; unit?: string } = {}): Actor[] {
  const n = vals.length;
  const x0 = o.x0 ?? 10;
  const x1 = o.x1 ?? 90;
  const base = o.base ?? 46;
  const H = o.h ?? 32;
  const max = o.max ?? Math.max(...vals, 1);
  const step = (x1 - x0) / n;
  const w = Math.min(10, step * 0.62);
  const out: Actor[] = [ln(`${p}base`, x0 - 2, base, x1 + 2, base, "mute", { w: 0.3 })];
  vals.forEach((v, i) => {
    const cx = x0 + step * (i + 0.5);
    const col = Array.isArray(o.c) ? o.c[i] : o.c ?? "accent";
    const hl = o.hl ? o.hl.includes(i) : true;
    out.push(bar(`${p}b${i}`, cx, base, (v / max) * H, hl ? col : "mute", w, o.show === false ? undefined : `${v}${o.unit ?? ""}`, { o: hl ? 1 : 0.45 }));
    out.push(txt(`${p}l${i}`, cx, base + 4.2, labels[i], { s: 2.8, c: "mute" }));
  });
  return out;
}

/** Các chấm nằm trên một trục số nằm ngang. */
export function numline(p: string, from: number, to: number, o: { y?: number; x0?: number; x1?: number; ticks?: number[] } = {}): Actor[] {
  const y = o.y ?? 40;
  const x0 = o.x0 ?? 8;
  const x1 = o.x1 ?? 92;
  const out: Actor[] = [ln(`${p}ax`, x0, y, x1, y, "mute", { w: 0.4 })];
  for (const t of o.ticks ?? []) {
    const x = x0 + ((t - from) / (to - from)) * (x1 - x0);
    out.push(ln(`${p}t${t}`, x, y - 1, x, y + 1, "mute", { w: 0.3 }), txt(`${p}tl${t}`, x, y + 5, String(t), { s: 2.8, c: "mute" }));
  }
  return out;
}
export const at = (v: number, from: number, to: number, x0 = 8, x1 = 92) => x0 + ((v - from) / (to - from)) * (x1 - x0);

/** Hai hộp cạnh nhau (trái/phải) cùng hàng. */
export function pair(p: string, a: string, b: string, o: { y?: number; ca?: Col; cb?: Col; fa?: Col; fb?: Col; oa?: number; ob?: number; h?: number; d?: boolean } = {}): Actor[] {
  const y = o.y ?? 26;
  const h = o.h ?? 16;
  return [
    box(`${p}a`, 28, y, 40, h, a, { c: o.ca ?? "blue", f: o.fa, o: o.oa }),
    box(`${p}b`, 72, y, 40, h, b, { c: o.cb ?? "accent", f: o.fb, o: o.ob, d: o.d }),
  ];
}
/** Danh sách hộp xếp dọc, mỗi hộp một dòng. */
export function stack(p: string, labels: string[], o: { x?: number; w?: number; y0?: number; gap?: number; h?: number; on?: number[]; c?: Col; bad?: number[] } = {}): Actor[] {
  const gap = o.gap ?? 10;
  const h = o.h ?? 8;
  return labels.map((t, i) => {
    const on = !o.on || o.on.includes(i);
    const bad = o.bad?.includes(i);
    return box(`${p}${i}`, o.x ?? 50, (o.y0 ?? 10) + i * gap, o.w ?? 72, h, t, { c: bad ? "red" : on ? (o.c ?? "blue") : "mute", f: on && o.on ? (bad ? "red" : "blue") : undefined, o: on ? 1 : 0.4, s: 3 });
  });
}

/** Đường cong chuông (nhiều đoạn thẳng ngắn). df=0 → chuẩn; df>0 → đuôi dày hơn (t). */
export function bell(p: string, cx: number, base: number, o: { w?: number; h?: number; c?: Col; fat?: number; op?: number } = {}): Actor[] {
  const w = o.w ?? 70;
  const h = o.h ?? 26;
  const fat = o.fat ?? 0;
  const n = 28;
  const out: Actor[] = [];
  const f = (u: number) => (fat ? Math.pow(1 + (u * u) / (2 + fat), -(1.2 + fat * 0.5)) : Math.exp(-(u * u) / 2));
  let px = 0;
  let py = 0;
  for (let i = 0; i <= n; i++) {
    const u = -3 + (6 * i) / n;
    const x = cx + (u / 3) * (w / 2);
    const y = base - f(u) * h;
    if (i > 0) out.push(ln(`${p}${i}`, px, py, x, y, o.c ?? "blue", { w: 0.7, o: o.op ?? 1 }));
    px = x;
    py = y;
  }
  out.push(ln(`${p}ax`, cx - w / 2, base, cx + w / 2, base, "mute", { w: 0.3 }));
  return out;
}
