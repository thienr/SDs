import { useSyncExternalStore } from "react";
import { applyRemoteProgress, getProgress, subscribeProgress } from "@/lib/progress";
import { applyRemoteReview, getReview, subscribeReview } from "@/lib/review";
import { applyRemoteToc, getToc, subscribeToc } from "@/lib/toc-memory";
import { cleanSync, mergeSync, type SyncData } from "@/lib/sync-merge";

const CODE_KEY = "so-muc:sync-code";
export type SyncStatus = { code: string | null; state: "off" | "idle" | "busy" | "error"; at: number; msg: string };
let status: SyncStatus = { code: null, state: "off", at: 0, msg: "" };
const OFF: SyncStatus = status;
const subs = new Set<() => void>();
let applying = false;
let timer: ReturnType<typeof setTimeout> | null = null;
let started = false;
let inflight = false;

function set(next: Partial<SyncStatus>) {
  status = { ...status, ...next };
  subs.forEach((f) => f());
}

export const useSync = () => useSyncExternalStore((f) => (subs.add(f), () => subs.delete(f)), () => status, () => OFF);

function readCode() {
  try {
    return localStorage.getItem(CODE_KEY);
  } catch {
    return null;
  }
}

export function newCode() {
  const bytes = crypto.getRandomValues(new Uint8Array(18));
  return btoa(String.fromCharCode(...bytes)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function local(): SyncData {
  const p = getProgress();
  const t = getToc();
  return cleanSync({
    p: { items: p.items, last: p.lastLessonId, at: p.lastAt ?? 0 },
    t: { course: t.course, read: t.read, at: t.at ?? 0 },
    r: getReview(),
  });
}

function apply(d: SyncData) {
  applying = true;
  try {
    applyRemoteProgress(d.p.items, d.p.last, d.p.at);
    applyRemoteToc(d.t);
    applyRemoteReview(d.r);
  } finally {
    applying = false;
  }
}

export async function syncNow(): Promise<boolean> {
  const code = readCode();
  if (!code) return false;
  if (inflight) return false;
  inflight = true;
  set({ code, state: "busy", msg: "" });
  try {
    const res = await fetch("/api/sync", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ code, data: local() }) });
    const body = (await res.json()) as { data?: unknown; error?: string };
    if (!res.ok) throw new Error(body.error ?? "Lỗi đồng bộ");
    apply(mergeSync(local(), cleanSync(body.data)));
    set({ state: "idle", at: Date.now(), msg: "" });
    return true;
  } catch (e) {
    set({ state: "error", msg: e instanceof Error ? e.message : "Lỗi đồng bộ" });
    return false;
  } finally {
    inflight = false;
  }
}

function schedule() {
  if (applying || !readCode()) return;
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => void syncNow(), 4000);
}

/** Gọi một lần khi app mở: đồng bộ ngay, rồi đồng bộ sau mỗi thay đổi và khi quay lại tab. */
export function startAutoSync() {
  if (started || typeof window === "undefined") return;
  started = true;
  const code = readCode();
  set({ code, state: code ? "idle" : "off" });
  subscribeProgress(schedule);
  subscribeToc(schedule);
  subscribeReview(schedule);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") void syncNow();
  });
  void syncNow();
}

export async function enableSync(code: string) {
  try {
    localStorage.setItem(CODE_KEY, code);
  } catch {
    set({ state: "error", msg: "Trình duyệt không cho lưu mã." });
    return false;
  }
  set({ code, state: "idle" });
  return syncNow();
}

export function disableSync() {
  try {
    localStorage.removeItem(CODE_KEY);
  } catch {
    /* bỏ qua */
  }
  set({ code: null, state: "off", msg: "" });
}
