import type { Lang } from "@/lib/progress";
import type { RawText } from "@/lib/raw-format";

const KEY = "so-muc-raw-v1";

type State = { patches: Record<string, RawText> };

let state: State = { patches: {} };
let version = 0;
const listeners = new Set<() => void>();

function keyOf(id: string, lang: Lang) {
  return `${lang}:${id}`;
}

let quiet = false;

function emit() {
  if (quiet) return;
  version += 1;
  if (typeof window !== "undefined") {
    localStorage.setItem(KEY, JSON.stringify({ version: 1, patches: state.patches }));
  }
  listeners.forEach((listener) => listener());
}

export function batchRaw(run: () => void) {
  quiet = true;
  try {
    run();
  } finally {
    quiet = false;
    emit();
  }
}

function isText(value: unknown): value is RawText {
  if (!value || typeof value !== "object") return false;
  const row = value as RawText;
  return typeof row.title === "string" && typeof row.why === "string" && typeof row.plain === "string" && Array.isArray(row.use) && Array.isArray(row.symbols);
}

export function hydrateRaw() {
  if (typeof window === "undefined") return;
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as { patches?: Record<string, unknown> };
      const patches: Record<string, RawText> = {};
      for (const [key, value] of Object.entries(parsed.patches ?? {})) {
        if (isText(value)) patches[key] = value;
      }
      state = { patches };
    }
  } catch {
    state = { patches: {} };
  }
  version += 1;
  listeners.forEach((listener) => listener());
}

export function subscribeRaw(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getRawVersion() {
  return version;
}

export function getServerRawVersion() {
  return 0;
}

export function applyRaw(id: string, lang: Lang, base: RawText): RawText {
  return state.patches[keyOf(id, lang)] ?? base;
}

export function rawIsEdited(id: string, lang: Lang) {
  return Boolean(state.patches[keyOf(id, lang)]);
}

export function rawEditCount() {
  return Object.keys(state.patches).length;
}

export function setRawPatch(id: string, lang: Lang, text: RawText | null) {
  const key = keyOf(id, lang);
  const patches = { ...state.patches };
  if (text) patches[key] = text;
  else delete patches[key];
  state = { patches };
  emit();
}

export function clearRaw() {
  state = { patches: {} };
  emit();
}
