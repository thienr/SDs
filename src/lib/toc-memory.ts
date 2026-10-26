import { useSyncExternalStore } from "react";

/** Nhớ mục lục: khóa đang mở (chỉ một khóa) và chỗ đọc gần nhất. Lưu trong trình duyệt. */
export type TocMemory = { course: string | null; read: { course: string; mod: string | null; ses: string | null; item: string | null } | null };
const KEY = "so-muc:toc";
const empty: TocMemory = { course: null, read: null };
let cache: TocMemory | null = null;
const subs = new Set<() => void>();

function load(): TocMemory {
  if (cache) return cache;
  try {
    const raw = typeof localStorage === "undefined" ? null : localStorage.getItem(KEY);
    cache = raw ? { ...empty, ...JSON.parse(raw) } : empty;
  } catch {
    cache = empty;
  }
  return cache as TocMemory;
}

function save(next: TocMemory) {
  cache = next;
  try {
    localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    /* bỏ qua */
  }
  subs.forEach((f) => f());
}

export function setOpenCourse(course: string | null) {
  save({ ...load(), course });
}

export function setLastRead(read: NonNullable<TocMemory["read"]>) {
  const cur = load();
  const r = cur.read;
  if (r && r.course === read.course && r.mod === read.mod && r.ses === read.ses && r.item === read.item) return;
  save({ course: read.course, read });
}

export function useTocMemory(): TocMemory {
  return useSyncExternalStore(
    (f) => {
      subs.add(f);
      return () => subs.delete(f);
    },
    load,
    () => empty,
  );
}
