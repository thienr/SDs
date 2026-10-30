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

/** Các khái niệm của một chủ đề, theo đúng thứ tự học. */
export function topicConcepts(topicIndex: number): string[] {
  return mapNodeIds.filter((id) => topicIndexOf(id) === topicIndex);
}
