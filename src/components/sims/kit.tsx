import { useCallback, useEffect, useRef, useSyncExternalStore, type ReactNode } from "react";
import { getProgress, getServerProgress, subscribeProgress } from "@/lib/progress";

export function cssVar(name: string, fallback: string) {
  if (typeof window === "undefined") return fallback;
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return value || fallback;
}

export function tone() {
  return {
    ink: cssVar("--ink", "#1c1915"),
    muted: cssVar("--muted", "#6f675e"),
    accent: cssVar("--accent", "#b5461f"),
    good: cssVar("--good", "#2f6b4f"),
    line: cssVar("--line", "#e4dacb"),
    card: cssVar("--card", "#fbf7f1"),
  };
}

export type Ink = ReturnType<typeof tone>;

/** Số trên trục ngang, nằm sát đáy ô vẽ. */
export function xTicks(ctx: CanvasRenderingContext2D, c: Ink, h: number, items: [number, string][]) {
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
export function caption(ctx: CanvasRenderingContext2D, c: Ink, text: string) {
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


export function useCanvas(draw: (ctx: CanvasRenderingContext2D, w: number, h: number) => void, deps: unknown[]) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return ref;
}

export function useLang(): "vi" | "en" {
  const lang = useSyncExternalStore(subscribeProgress, getProgress, getServerProgress).lang;
  return lang === "en" ? "en" : "vi";
}

/** t("tiếng Việt", "English") chọn theo ngôn ngữ đang bật. */
export function useT() {
  const lang = useLang();
  return useCallback((vi: string, en: string) => (lang === "en" ? en : vi), [lang]);
}

export function Lab({
  title,
  children,
  onReset,
  onExtreme,
}: {
  title: string;
  children: ReactNode;
  onReset?: () => void;
  onExtreme?: () => void;
}) {
  const lang = useSyncExternalStore(subscribeProgress, getProgress, getServerProgress).lang;
  return (
    <section className="rounded-card border border-line bg-card p-4 shadow-[var(--shadow)]">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h3 className="font-display text-xl">{title}</h3>
        <div className="flex gap-2">
          {onExtreme ? (
            <button type="button" className="min-h-11 rounded-full border border-line px-3 text-sm" onClick={onExtreme}>
              {lang === "en" ? "Extreme value" : "Giá trị cực đoan"}
            </button>
          ) : null}
          {onReset ? (
            <button type="button" className="min-h-11 rounded-full bg-ink px-3 text-sm text-paper" onClick={onReset}>
              {lang === "en" ? "Reset" : "Đặt lại"}
            </button>
          ) : null}
        </div>
      </div>
      {children}
    </section>
  );
}

export function Range({
  label,
  value,
  min,
  max,
  step,
  onChange,
  display,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
  display: string;
}) {
  return (
    <label className="block py-1">
      <span className="flex items-baseline justify-between gap-3 text-sm">
        <span>{label}</span>
        <span className="font-medium tabular-nums">{display}</span>
      </span>
      <input
        className="lab-range w-full"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </label>
  );
}

export function erf(x: number) {
  const sign = Math.sign(x);
  const a = Math.abs(x);
  const t = 1 / (1 + 0.3275911 * a);
  const y =
    1 -
    (((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t + 0.254829592) *
      t *
      Math.exp(-a * a));
  return sign * y;
}

export function cdf(x: number, mu = 0, sd = 1) {
  return 0.5 * (1 + erf((x - mu) / (sd * Math.SQRT2)));
}

export function pdf(x: number, mu = 0, sd = 1) {
  const z = (x - mu) / sd;
  return Math.exp(-0.5 * z * z) / (sd * Math.sqrt(2 * Math.PI));
}

export function invNorm(p: number) {
  if (p <= 0.0001) return -4;
  if (p >= 0.9999) return 4;
  const lower = p < 0.5;
  const t = lower ? p : 1 - p;
  const s = Math.sqrt(-2 * Math.log(t));
  const x =
    s -
    (2.515517 + 0.802853 * s + 0.010328 * s * s) /
      (1 + 1.432788 * s + 0.189269 * s * s + 0.001308 * s * s * s);
  return lower ? -x : x;
}

export function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function gauss(rng: () => number) {
  const u = Math.max(1e-9, rng());
  const v = rng();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}
