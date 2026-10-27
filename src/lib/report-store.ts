import { useSyncExternalStore } from "react";

/** Báo cáo thẻ sai / khó hiểu. Lưu trong trình duyệt; xuất ra để gửi cho người sửa. */
export type ReportKind = "wrong" | "unclear";
export type Report = { id: string; conceptId: string; title: string; kind: ReportKind; note: string; lang: "vi" | "en"; at: string };

const KEY = "so-muc:reports";
const empty: Report[] = [];
let cache: Report[] | null = null;
const subs = new Set<() => void>();

function load(): Report[] {
  if (cache) return cache;
  try {
    const raw = typeof localStorage === "undefined" ? null : localStorage.getItem(KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    cache = Array.isArray(parsed) ? parsed : [];
  } catch {
    cache = [];
  }
  return cache as Report[];
}

function save(next: Report[]) {
  cache = next;
  try {
    localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    /* bỏ qua */
  }
  subs.forEach((f) => f());
}

export function addReport(r: Omit<Report, "id" | "at">) {
  save([...load(), { ...r, id: `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`, at: new Date().toISOString() }]);
}

export function removeReport(id: string) {
  save(load().filter((r) => r.id !== id));
}

export function clearReports() {
  save([]);
}

export function useReports(): Report[] {
  return useSyncExternalStore(
    (f) => {
      subs.add(f);
      return () => subs.delete(f);
    },
    load,
    () => empty,
  );
}

export function reportsAsText(list: Report[]): string {
  return list
    .map((r, i) => `${i + 1}. [${r.kind === "wrong" ? "SAI" : "KHÓ HIỂU"}] ${r.conceptId} — ${r.title}${r.note ? `\n   Ghi chú: ${r.note}` : ""}`)
    .join("\n");
}

export function getReports(): Report[] {
  return load();
}
