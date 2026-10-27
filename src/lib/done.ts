import { useSyncExternalStore } from "react";

/** Thẻ nào đã học xong. Mỗi mục có dấu thời gian để gộp giữa các máy (bản mới hơn thắng, kể cả khi bỏ đánh dấu). */
export type DoneEntry = { x: 0 | 1; a: number };
export type DoneMap = Record<string, DoneEntry>;
const KEY = "so-muc:done";
const NONE: DoneMap = {};
let cache: DoneMap | null = null;
const subs = new Set<() => void>();

function load(): DoneMap {
  if (cache) return cache;
  try {
    const raw = typeof localStorage === "undefined" ? null : localStorage.getItem(KEY);
    cache = raw ? (JSON.parse(raw) as DoneMap) : {};
  } catch {
    cache = {};
  }
  return cache!;
}

function save(next: DoneMap) {
  cache = next;
  try {
    localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    /* bỏ qua */
  }
  subs.forEach((f) => f());
}

export const getDone = () => load();
export const subscribeDone = (f: () => void) => (subs.add(f), () => void subs.delete(f));
export const useDone = (): DoneMap => useSyncExternalStore(subscribeDone, load, () => NONE);
export const isDone = (map: DoneMap, id: string) => map[id]?.x === 1;

export function setDone(id: string, on: boolean) {
  save({ ...load(), [id]: { x: on ? 1 : 0, a: Date.now() } });
}

export function applyRemoteDone(next: DoneMap) {
  if (JSON.stringify(next) === JSON.stringify(load())) return;
  save(next);
}
