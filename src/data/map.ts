import { relatedLinks } from "@/data/links";
import { sessionConcepts } from "@/data/place";

export type Topic = { key: string; vi: string; en: string; hue: number; prefixes: string[]; exact?: string[] };

/** Nhóm chủ đề của bản đồ. Thứ tự quyết định vị trí trên vòng tròn. */
export const topics: Topic[] = [
  { key: "prob", vi: "Xác suất và mẫu", en: "Probability and samples", hue: 25, prefixes: [], exact: ["infer-intro", "permut", "combin", "prob-def", "events", "add-rule", "mul-rule", "rv", "dist", "ev", "no-exp", "binomial", "cdf", "pdf", "normal", "zscore", "samples", "samp-dist", "samp-props", "clt", "clt-est", "ci", "samp-types", "samp-use", "joint", "bayes", "samp-est"] },
  { key: "test", vi: "Kiểm định giả thuyết", en: "Hypothesis tests", hue: 45, prefixes: ["ht-"] },
  { key: "desc", vi: "Thống kê mô tả", en: "Descriptive statistics", hue: 70, prefixes: ["ds-"] },
  { key: "eda", vi: "Khám phá dữ liệu (EDA)", en: "Exploring data (EDA)", hue: 105, prefixes: ["eda-"] },
  { key: "sql", vi: "SQL", en: "SQL", hue: 150, prefixes: ["sql-"] },
  { key: "tool", vi: "Excel và Python", en: "Excel and Python", hue: 175, prefixes: ["xl-", "xa-", "py-"] },
  { key: "reg", vi: "Hồi quy", en: "Regression", hue: 200, prefixes: ["slr-", "gd-", "mlr-"], exact: ["ml-what", "pred-proj"] },
  { key: "logit", vi: "Phân loại logistic", en: "Logistic classification", hue: 220, prefixes: ["logit-"] },
  { key: "tree", vi: "Cây và rừng", en: "Trees and forests", hue: 245, prefixes: ["tree-", "ens-", "rf-"] },
  { key: "tune", vi: "Chấm, chọn và tinh chỉnh mô hình", en: "Scoring, choosing and tuning models", hue: 265, prefixes: ["imb-", "bv-", "reg-", "met-", "fe-", "cv-"] },
  { key: "clus", vi: "Gom cụm", en: "Clustering", hue: 285, prefixes: ["clus-", "km-", "db-", "gmm-", "k-mode"], exact: ["hier", "link-how"] },
  { key: "nlp", vi: "Xử lý chữ (NLP)", en: "Text (NLP)", hue: 305, prefixes: ["nlp-"] },
  { key: "ts", vi: "Chuỗi thời gian", en: "Time series", hue: 330, prefixes: ["ts-"] },
  { key: "math", vi: "Toán nền", en: "Math foundations", hue: 350, prefixes: ["math-"] },
  { key: "flow", vi: "Quy trình và khung tư duy", en: "Process and frameworks", hue: 10, prefixes: ["c0-", "crisp-", "ps-", "biz-", "git-", "fw-"] },
  { key: "viz", vi: "Trực quan và kể chuyện", en: "Visuals and storytelling", hue: 125, prefixes: ["tb-", "pb-", "st-"] },
  { key: "opt", vi: "Tối ưu hóa", en: "Optimization", hue: 60, prefixes: ["or-"] },
  { key: "ai", vi: "GenAI, RAG và ảnh sinh", en: "GenAI, RAG and generated images", hue: 195, prefixes: ["ga-", "sa-", "rag-", "im-", "lc-", "cap-"] },
];

export function topicIndexOf(id: string): number {
  for (let i = 0; i < topics.length; i++) {
    const t = topics[i];
    if (t.exact?.includes(id)) return i;
  }
  for (let i = 0; i < topics.length; i++) {
    if (topics[i].prefixes.some((p) => id.startsWith(p))) return i;
  }
  return -1;
}

/** Mọi khái niệm có định nghĩa (bỏ các buổi luyện d-*). */
export const mapNodeIds: string[] = (() => {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const ids of Object.values(sessionConcepts)) {
    for (const id of ids) {
      if (id.startsWith("d-") || seen.has(id)) continue;
      if (topicIndexOf(id) < 0) continue;
      seen.add(id);
      out.push(id);
    }
  }
  return out;
})();

const nodeSet = new Set(mapNodeIds);

export type Edge = { a: string; b: string; kind: "next" | "related"; vi?: string; en?: string };

/** Dây tiếp nối: hai khái niệm liền nhau trong cùng chủ đề. */
export const chainEdges: Edge[] = (() => {
  const last = new Map<number, string>();
  const out: Edge[] = [];
  for (const id of mapNodeIds) {
    const t = topicIndexOf(id);
    const prev = last.get(t);
    if (prev) out.push({ a: prev, b: id, kind: "next" });
    last.set(t, id);
  }
  return out;
})();

/** Dây liên quan, viết tay. */
export const relatedEdges: Edge[] = relatedLinks
  .filter(([a, b]) => nodeSet.has(a) && nodeSet.has(b))
  .map(([a, b, vi, en]) => ({ a, b, kind: "related" as const, vi, en }));

const adjacency = new Map<string, { id: string; vi: string; en: string }[]>();
for (const e of relatedEdges) {
  if (!adjacency.has(e.a)) adjacency.set(e.a, []);
  if (!adjacency.has(e.b)) adjacency.set(e.b, []);
  adjacency.get(e.a)!.push({ id: e.b, vi: e.vi ?? "", en: e.en ?? "" });
  adjacency.get(e.b)!.push({ id: e.a, vi: e.vi ?? "", en: e.en ?? "" });
}

/** Các khái niệm có dây nối viết tay với `id`. */
export function relatedOf(id: string) {
  return adjacency.get(id) ?? [];
}

export type Pos = { x: number; y: number };

export const WORLD = { w: 1800, h: 1300 };

export function topicCenter(i: number): Pos {
  const n = topics.length;
  const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
  return { x: WORLD.w / 2 + Math.cos(angle) * 640, y: WORLD.h / 2 + Math.sin(angle) * 470 };
}

/** Bố cục lực đơn giản, cố định hạt giống để mọi lần mở đều giống nhau. */
export function computeLayout(): Record<string, Pos> {
  const ids = mapNodeIds;
  const n = ids.length;
  const index = new Map(ids.map((id, i) => [id, i]));
  const topic = ids.map((id) => topicIndexOf(id));
  const centers = topics.map((_, i) => topicCenter(i));
  let seed = 12345;
  const rand = () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };
  const x = new Float64Array(n);
  const y = new Float64Array(n);
  const vx = new Float64Array(n);
  const vy = new Float64Array(n);
  for (let i = 0; i < n; i++) {
    const c = centers[topic[i]];
    x[i] = c.x + (rand() - 0.5) * 120;
    y[i] = c.y + (rand() - 0.5) * 120;
  }
  const springs: [number, number, number, number][] = [];
  for (const e of chainEdges) springs.push([index.get(e.a)!, index.get(e.b)!, 42, 0.035]);
  for (const e of relatedEdges) springs.push([index.get(e.a)!, index.get(e.b)!, 110, 0.012]);
  const steps = 280;
  for (let s = 0; s < steps; s++) {
    const cool = 1 - s / steps;
    for (let i = 0; i < n; i++) {
      const c = centers[topic[i]];
      vx[i] += (c.x - x[i]) * 0.012 * cool;
      vy[i] += (c.y - y[i]) * 0.012 * cool;
    }
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const dx = x[i] - x[j];
        const dy = y[i] - y[j];
        const d2 = dx * dx + dy * dy + 0.01;
        if (d2 > 6400) continue;
        const d = Math.sqrt(d2);
        const f = (520 / d2) * cool;
        vx[i] += (dx / d) * f;
        vy[i] += (dy / d) * f;
        vx[j] -= (dx / d) * f;
        vy[j] -= (dy / d) * f;
      }
    }
    for (const [a, b, len, k] of springs) {
      const dx = x[b] - x[a];
      const dy = y[b] - y[a];
      const d = Math.sqrt(dx * dx + dy * dy) + 0.01;
      const f = (d - len) * k;
      vx[a] += (dx / d) * f;
      vy[a] += (dy / d) * f;
      vx[b] -= (dx / d) * f;
      vy[b] -= (dy / d) * f;
    }
    for (let i = 0; i < n; i++) {
      vx[i] *= 0.82;
      vy[i] *= 0.82;
      x[i] += vx[i];
      y[i] += vy[i];
    }
  }
  const out: Record<string, Pos> = {};
  ids.forEach((id, i) => {
    out[id] = { x: x[i], y: y[i] };
  });
  return out;
}
