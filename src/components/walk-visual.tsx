import type { Visual } from "@/data/walk";

/** Hình minh họa trong mục «Làm từng bước»: bảng tính, biểu đồ cột, biểu đồ đường. Dùng màu từ token của app. */
export function WalkVisual({ v, lang }: { v: Visual; lang: "vi" | "en" }) {
  const i = lang === "en" ? 1 : 0;
  const frame = (body: React.ReactNode) => (
    <figure className="mt-4 rounded-xl border border-line bg-paper p-3">
      <figcaption className="text-xs uppercase tracking-widest text-muted">{v.title[i]}</figcaption>
      <div className="mt-2 overflow-x-auto">{body}</div>
      {v.note ? <p className="mt-2 text-sm text-muted">{v.note[i]}</p> : null}
    </figure>
  );
  if (v.kind === "table") {
    const marked = new Set((v.mark ?? []).map(([r, c]) => `${r},${c}`));
    const cols = "ABCDEFGH";
    return frame(
      <table className="min-w-full border-collapse text-sm tabular-nums">
        <thead>
          <tr>
            <th className="w-8 border border-line bg-card" />
            {v.head.map((h, c) => (
              <th key={c} className="border border-line bg-card px-2 py-1 text-left font-medium">
                <span className="mr-1 text-xs text-muted">{cols[c]}</span>
                {h[i]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {v.rows.map((row, r) => (
            <tr key={r}>
              <th className="border border-line bg-card px-2 py-1 text-xs font-normal text-muted">{r + 1}</th>
              {row.map((cell, c) => (
                <td
                  key={c}
                  className={`border border-line px-2 py-1 ${typeof cell === "number" ? "text-right" : ""} ${marked.has(`${r},${c}`) ? "bg-accent font-medium text-accent-ink" : "bg-card"}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>,
    );
  }
  const W = 320;
  const H = 160;
  const pad = 28;
  if (v.kind === "bars") {
    const max = Math.max(...v.items.map((x) => x.value)) * 1.15;
    const bw = (W - pad * 2) / v.items.length;
    return frame(
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full max-w-md" role="img" aria-label={v.title[i]}>
        <line x1={pad} y1={H - pad} x2={W - pad} y2={H - pad} stroke="currentColor" opacity={0.3} />
        {v.items.map((it, k) => {
          const h = ((H - pad * 2) * it.value) / max;
          const x = pad + k * bw + bw * 0.2;
          return (
            <g key={k}>
              <rect x={x} y={H - pad - h} width={bw * 0.6} height={h} rx={3} className="fill-accent" />
              <text x={x + bw * 0.3} y={H - pad - h - 4} textAnchor="middle" fontSize={11} fill="currentColor">
                {it.value}
                {v.unit ?? ""}
              </text>
              <text x={x + bw * 0.3} y={H - pad + 14} textAnchor="middle" fontSize={11} fill="currentColor" opacity={0.7}>
                {it.label[i]}
              </text>
            </g>
          );
        })}
      </svg>,
    );
  }
  const lo = Math.min(...v.ys);
  const hi = Math.max(...v.ys);
  const span = hi - lo || 1;
  const min = lo - span * 0.3;
  const rng = hi + span * 0.3 - min;
  const px = (k: number) => pad + (k * (W - pad * 2)) / Math.max(v.ys.length - 1, 1);
  const py = (y: number) => H - pad - ((y - min) / rng) * (H - pad * 2);
  return frame(
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full max-w-md" role="img" aria-label={v.title[i]}>
      <line x1={pad} y1={H - pad} x2={W - pad} y2={H - pad} stroke="currentColor" opacity={0.3} />
      <polyline fill="none" strokeWidth={2} className="stroke-accent" points={v.ys.map((y, k) => `${px(k)},${py(y)}`).join(" ")} />
      {v.ys.map((y, k) => (
        <g key={k}>
          <circle cx={px(k)} cy={py(y)} r={3.5} className="fill-accent" />
          <text x={px(k)} y={py(y) - 8} textAnchor="middle" fontSize={11} fill="currentColor">
            {y}
            {v.unit ?? ""}
          </text>
          <text x={px(k)} y={H - pad + 14} textAnchor="middle" fontSize={11} fill="currentColor" opacity={0.7}>
            {v.xs[k]}
          </text>
        </g>
      ))}
    </svg>,
  );
}
