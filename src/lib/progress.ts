import { lessons } from "@/lib/catalog";

export type Status = "unseen" | "viewing" | "seen";
export type Lang = "vi" | "en";

type State = {
  items: Record<string, Status>;
  lastLessonId: string | null;
  theme: "light" | "dark";
  lang: Lang;
};

const KEY = "so-muc-v1";

const empty: State = { items: {}, lastLessonId: null, theme: "light", lang: "vi" };

let state: State = empty;
const listeners = new Set<() => void>();

function emit() {
  if (typeof window !== "undefined") {
    localStorage.setItem(KEY, JSON.stringify(state));
    document.documentElement.dataset.theme = state.theme;
    document.documentElement.lang = state.lang === "en" ? "en" : "vi";
  }
  listeners.forEach((listener) => listener());
}

export function hydrateProgress() {
  if (typeof window === "undefined") return;
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<State>;
      state = {
        items: parsed.items ?? {},
        lastLessonId: parsed.lastLessonId ?? null,
        theme: parsed.theme === "dark" ? "dark" : "light",
        lang: parsed.lang === "en" ? "en" : "vi",
      };
    }
  } catch {
    state = empty;
  }
  document.documentElement.dataset.theme = state.theme;
  document.documentElement.lang = state.lang === "en" ? "en" : "vi";
  listeners.forEach((listener) => listener());
}

export function subscribeProgress(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getProgress() {
  return state;
}

export function getServerProgress() {
  return empty;
}

export function itemStatus(id: string): Status {
  return state.items[id] ?? "unseen";
}

export function lessonStatus(lessonId: string): Status {
  const lesson = lessons.find((item) => item.id === lessonId);
  if (!lesson || lesson.items.length === 0) {
    return state.lastLessonId === lessonId ? "viewing" : "unseen";
  }
  const statuses = lesson.items.map((item) => itemStatus(item.id));
  if (statuses.every((status) => status === "seen")) return "seen";
  if (statuses.some((status) => status !== "unseen")) return "viewing";
  return "unseen";
}

export function openLesson(lessonId: string) {
  const lesson = lessons.find((item) => item.id === lessonId);
  const items = { ...state.items };
  if (lesson) {
    for (const item of lesson.items) {
      if (!items[item.id]) items[item.id] = "viewing";
    }
  }
  state = { ...state, items, lastLessonId: lessonId };
  emit();
}

export function cycleItem(id: string) {
  const order: Status[] = ["unseen", "viewing", "seen"];
  const next = order[(order.indexOf(itemStatus(id)) + 1) % order.length];
  state = { ...state, items: { ...state.items, [id]: next } };
  emit();
}

export function markLesson(lessonId: string, status: Status) {
  const lesson = lessons.find((item) => item.id === lessonId);
  if (!lesson) return;
  const items = { ...state.items };
  for (const item of lesson.items) items[item.id] = status;
  state = { ...state, items, lastLessonId: lessonId };
  emit();
}

export function setTheme(theme: "light" | "dark") {
  state = { ...state, theme };
  emit();
}

export function toggleTheme() {
  setTheme(state.theme === "dark" ? "light" : "dark");
}

export function setLang(lang: Lang) {
  state = { ...state, lang };
  emit();
}

export function progressSnapshot() {
  return JSON.stringify({ version: 1, exportedAt: new Date().toISOString(), ...state }, null, 2);
}

export function importProgress(text: string) {
  const parsed = JSON.parse(text) as Partial<State>;
  if (!parsed || typeof parsed !== "object" || !parsed.items) {
    throw new Error("Tệp không đúng định dạng sổ học");
  }
  state = {
    items: parsed.items ?? {},
    lastLessonId: parsed.lastLessonId ?? null,
    theme: parsed.theme === "dark" ? "dark" : state.theme,
    lang: parsed.lang === "en" ? "en" : state.lang,
  };
  emit();
}

export function courseSeenRatio(courseId: string) {
  const items = lessons.filter((lesson) => lesson.courseId === courseId).flatMap((lesson) => lesson.items);
  if (!items.length) return 0;
  const seen = items.filter((item) => itemStatus(item.id) === "seen").length;
  return seen / items.length;
}

export function countSeen() {
  const items = lessons.flatMap((lesson) => lesson.items);
  const seen = items.filter((item) => itemStatus(item.id) === "seen").length;
  const viewing = items.filter((item) => itemStatus(item.id) === "viewing").length;
  return { seen, viewing, total: items.length };
}
