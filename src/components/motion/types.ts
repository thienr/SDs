export type Col = "ink" | "mute" | "accent" | "gold" | "green" | "blue" | "red" | "soft" | "card" | "none";

export type Actor = {
  id: string;
  k: "box" | "dot" | "bar" | "line" | "arrow" | "text" | "ring";
  x: number;
  y: number;
  w?: number;
  h?: number;
  r?: number;
  x2?: number;
  y2?: number;
  t?: string;
  c?: Col; // màu nét / màu chữ / màu hình đặc (dot, bar)
  f?: Col; // màu nền của box
  o?: number; // độ đậm 0..1
  s?: number; // cỡ chữ
  a?: "start" | "middle" | "end";
  d?: boolean; // nét đứt
};

export type Frame = { vi: string; en: string; a: Actor[] };

export type Motion = { frames: Frame[]; h?: number };
