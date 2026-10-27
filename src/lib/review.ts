import { useSyncExternalStore } from "react";
import type { ReviewEntry } from "@/lib/sync-merge";

/** Ôn lại cách quãng: mỗi câu tự kiểm tra có một «hộp» 0–5. Đúng thì lên hộp, sai thì về 0 và hỏi lại ngày mai. */
const KEY = "so-muc:review";
export const GAPS = [1, 3, 7, 14, 30];
export type ReviewMap = Record<string, ReviewEntry>;

let cache: ReviewMap | null = null;
const subs = new Set<() => void>();
const NONE: ReviewMap = {};

export function today(offset = 0) {
  const d = new Date(Date.now() + offset * 86_400_000);
  const z = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${z(d.getMonth() + 1)}-${z(d.getDate())}`;
}

function load(): ReviewMap {
  if (cache) return cache;
  try {
    const raw = typeof localStorage === "undefined" ? null : localStorage.getItem(KEY);
    cache = raw ? (JSON.parse(raw) as ReviewMap) : {};
  } catch {
    cache = {};
  }
  return cache!;
}

function save(next: ReviewMap) {
  cache = next;
  try {
    localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    /* bỏ qua */
  }
  subs.forEach((f) => f());
}

export const reviewKey = (conceptId: string, index: number) => `${conceptId}#${index}`;

export function recordAnswer(conceptId: string, index: number, correct: boolean) {
  const all = load();
  const key = reviewKey(conceptId, index);
  const box = all[key]?.b ?? 0;
  const nb = correct ? Math.min(box + 1, 5) : 0;
  const days = nb === 0 ? 1 : GAPS[nb - 1];
  save({ ...all, [key]: { b: nb, d: today(days), a: Date.now() } });
}

export function getReview() {
  return load();
}
export function subscribeReview(f: () => void) {
  subs.add(f);
  return () => subs.delete(f);
}
export function applyRemoteReview(next: ReviewMap) {
  if (JSON.stringify(next) === JSON.stringify(load())) return;
  save(next);
}
export function useReview(): ReviewMap {
  return useSyncExternalStore(subscribeReview, load, () => NONE);
}

/** Các câu đến hạn (ngày hẹn ≤ hôm nay), cũ nhất trước. */
export function dueKeys(map: ReviewMap, limit = 5): string[] {
  const t = today();
  return Object.entries(map)
    .filter(([, v]) => v.d <= t)
    .sort((a, b) => a[1].d.localeCompare(b[1].d) || a[1].b - b[1].b)
    .slice(0, limit)
    .map(([k]) => k);
}
