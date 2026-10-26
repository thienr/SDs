import { useEffect, useMemo, useRef, useState } from "react";
import type { Actor, Col, Motion } from "@/components/motion/types";

const COLOR: Record<Col, string> = {
  ink: "var(--ink)",
  mute: "var(--muted)",
  accent: "var(--accent)",
  gold: "hsl(42 88% 52%)",
  green: "hsl(150 48% 38%)",
  blue: "hsl(210 62% 50%)",
  red: "hsl(2 68% 52%)",
  soft: "color-mix(in srgb, var(--ink) 7%, var(--card))",
  card: "var(--card)",
  none: "transparent",
};

const NUM = ["x", "y", "w", "h", "r", "x2", "y2", "o", "s"] as const;
type NumKey = (typeof NUM)[number];
const DEFAULT: Record<NumKey, number> = { x: 0, y: 0, w: 0, h: 0, r: 0, x2: 0, y2: 0, o: 1, s: 3.4 };

function ease(u: number) {
  return u < 0.5 ? 2 * u * u : 1 - Math.pow(-2 * u + 2, 2) / 2;
}

function mix(from: Actor | undefined, to: Actor | undefined, u: number): Actor | null {
  const base = to ?? from;
  if (!base) return null;
  const out: Actor = { ...base };
  const a = from ?? { ...base, o: 0 };
  const b = to ?? { ...base, o: 0 };
  for (const k of NUM) {
    const av = a[k] ?? DEFAULT[k];
    const bv = b[k] ?? DEFAULT[k];
    out[k] = av + (bv - av) * u;
  }
  if (!from) out.o = (to?.o ?? 1) * u;
  if (!to) out.o = (from?.o ?? 1) * (1 - u);
  out.t = u < 0.5 && from?.t !== undefined ? from.t : base.t;
  return out;
}

function lines(t: string, size: number, width: number) {
  const parts = t.split("\n");
  const longest = Math.max(...parts.map((p) => p.length), 1);
  const fit = width > 0 ? Math.min(size, (width * 0.92) / (longest * 0.54)) : size;
  return { parts, size: Math.max(2.3, fit) };
}

function Shape({ a }: { a: Actor }) {
  const o = a.o ?? 1;
  const stroke = COLOR[a.c ?? "ink"];
  const tr = { transition: "fill .4s, stroke .4s" } as const;
  if (a.k === "box") {
    const w = a.w ?? 20;
    const h = a.h ?? 8;
    const { parts, size } = lines(a.t ?? "", a.s ?? 3.4, w);
    return (
      <g opacity={o}>
        <rect x={a.x - w / 2} y={a.y - h / 2} width={w} height={h} rx={1.6} fill={COLOR[a.f ?? "soft"]} stroke={stroke} strokeWidth={a.c ? 0.45 : 0.25} strokeDasharray={a.d ? "1.4 1" : undefined} style={tr} />
        {parts.map((p, i) => (
          <text key={i} x={a.x} y={a.y + (i - (parts.length - 1) / 2) * size * 1.18 + size * 0.36} textAnchor="middle" fontSize={size} fill={a.f && a.f !== "soft" && a.f !== "card" && a.f !== "none" && a.f !== "gold" ? "#fff" : "var(--ink)"} stroke="none" style={{ fontWeight: 500 }}>
            {p}
          </text>
        ))}
      </g>
    );
  }
  if (a.k === "dot") return <circle cx={a.x} cy={a.y} r={Math.max(0, a.r ?? 1.2)} fill={COLOR[a.c ?? "ink"]} opacity={o} style={tr} />;
  if (a.k === "ring") return <circle cx={a.x} cy={a.y} r={Math.max(0, a.r ?? 4)} fill="none" stroke={stroke} strokeWidth={0.5} strokeDasharray={a.d ? "1.4 1" : undefined} opacity={o} style={tr} />;
  if (a.k === "bar") {
    const w = a.w ?? 5;
    const h = Math.max(0, a.h ?? 10);
    return (
      <g opacity={o}>
        <rect x={a.x - w / 2} y={a.y - h} width={w} height={h} rx={0.6} fill={COLOR[a.c ?? "accent"]} style={tr} />
        {a.t ? <text x={a.x} y={a.y - h - 1.2} textAnchor="middle" fontSize={a.s ?? 2.8} fill={COLOR.ink} style={{ fontWeight: 600 }}>{a.t}</text> : null}
      </g>
    );
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
    return (
      <g opacity={o} style={tr}>
        <line x1={a.x} y1={a.y} x2={head ? x2 - ux * hs * 0.8 : x2} y2={head ? y2 - uy * hs * 0.8 : y2} stroke={stroke} strokeWidth={a.w ?? 0.6} strokeDasharray={a.d ? "1.6 1.2" : undefined} strokeLinecap="round" style={tr} />
        {head ? <polygon points={`${x2},${y2} ${x2 - ux * hs - uy * hs * 0.55},${y2 - uy * hs + ux * hs * 0.55} ${x2 - ux * hs + uy * hs * 0.55},${y2 - uy * hs - ux * hs * 0.55}`} fill={stroke} style={tr} /> : null}
        {a.t ? <text x={(a.x + x2) / 2} y={(a.y + y2) / 2 - 1.2} textAnchor="middle" fontSize={a.s ?? 2.8} fill={stroke}>{a.t}</text> : null}
      </g>
    );
  }
  const { parts, size } = lines(a.t ?? "", a.s ?? 3.4, 0);
  return (
    <text x={a.x} y={a.y} textAnchor={a.a ?? "middle"} fontSize={size} fill={COLOR[a.c ?? "ink"]} opacity={o} style={{ fontWeight: 500, transition: "fill .4s" }}>
      {parts.map((p, i) => (
        <tspan key={i} x={a.x} dy={i === 0 ? 0 : size * 1.2}>
          {p}
        </tspan>
      ))}
    </text>
  );
}

const T = {
  vi: { step: "Bước", of: "trên", play: "Chạy", pause: "Dừng", replay: "Chạy lại", next: "Bước kế", back: "Lùi" },
  en: { step: "Step", of: "of", play: "Play", pause: "Pause", replay: "Replay", next: "Next", back: "Back" },
} as const;

export function MotionPlayer({ motion, lang }: { motion: Motion; lang: "vi" | "en" }) {
  const t = T[lang];
  const n = motion.frames.length;
  const [i, setI] = useState(0);
  const [auto, setAuto] = useState(false);
  const [shown, setShown] = useState<Actor[]>(motion.frames[0].a);
  const prev = useRef<Actor[]>(motion.frames[0].a);
  const raf = useRef(0);
  const box = useRef<HTMLDivElement | null>(null);
  const reduce = useMemo(() => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, []);

  useEffect(() => {
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
    const ids = [...new Set([...from.map((a) => a.id), ...target.map((a) => a.id)])];
    cancelAnimationFrame(raf.current);
    const tick = (now: number) => {
      const u = Math.min(1, (now - start) / dur);
      const e = ease(u);
      const out: Actor[] = [];
      for (const id of ids) {
        const m = mix(fm.get(id), tm.get(id), e);
        if (m && (m.o ?? 1) > 0.01) out.push(m);
      }
      setShown(out);
      if (u < 1) raf.current = requestAnimationFrame(tick);
      else prev.current = target;
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [i, motion, reduce]);

  useEffect(() => {
    const el = box.current;
    if (!el || reduce || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver((e) => {
      if (e[0]?.isIntersecting) {
        setAuto(true);
        io.disconnect();
      }
    }, { threshold: 0.6 });
    io.observe(el);
    return () => io.disconnect();
  }, [reduce]);

  useEffect(() => {
    if (!auto) return;
    if (i >= n - 1) {
      setAuto(false);
      return;
    }
    const id = window.setTimeout(() => setI((v) => Math.min(n - 1, v + 1)), 4200);
    return () => window.clearTimeout(id);
  }, [auto, i, n]);

  const frame = motion.frames[i];
  const h = motion.h ?? 60;
  return (
    <div ref={box} className="rounded-card border border-line bg-card p-3">
      <svg viewBox={`0 0 100 ${h}`} className="block w-full" role="img" aria-label={lang === "en" ? frame.en : frame.vi}>
        {shown.map((a) => (
          <Shape key={a.id} a={a} />
        ))}
      </svg>
      <p className="mt-2 min-h-[3.6rem] text-lg leading-relaxed" aria-live="polite">
        <span className="mr-2 text-xs uppercase tracking-widest text-accent">{t.step} {i + 1} {t.of} {n}</span>
        {lang === "en" ? frame.en : frame.vi}
      </p>
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <button type="button" className="min-h-11 rounded-full border border-line px-4 text-sm disabled:opacity-40" disabled={i === 0} onClick={() => { setAuto(false); setI(i - 1); }}>{t.back}</button>
        <button type="button" className="min-h-11 rounded-full bg-ink px-4 text-sm text-paper disabled:opacity-40" disabled={i >= n - 1} onClick={() => { setAuto(false); setI(i + 1); }}>{t.next}</button>
        <button type="button" className="min-h-11 rounded-full border border-line px-4 text-sm" onClick={() => { if (i >= n - 1) { setI(0); setAuto(true); } else setAuto((v) => !v); }}>
          {i >= n - 1 ? t.replay : auto ? t.pause : t.play}
        </button>
        <span className="ml-auto flex gap-1.5" aria-hidden>
          {motion.frames.map((_, k) => (
            <span key={k} className={`h-2 rounded-full transition-all ${k === i ? "w-5 bg-accent" : "w-2 bg-line"}`} />
          ))}
        </span>
      </div>
    </div>
  );
}
