import type { Lang } from "@/lib/progress";

const KEY = "so-muc-cms-v1";

export type CmsKind = "course" | "module" | "session" | "lesson";

export type CmsPatch = {
  why?: string;
  plain?: string;
  prior?: string;
  text?: string;
  title?: string;
  blurb?: string;
  blocks?: unknown;
  glossary?: unknown;
};

type State = { patches: Record<string, CmsPatch> };

let state: State = { patches: {} };
let version = 0;
const listeners = new Set<() => void>();
let quiet = false;

export function cmsKey(kind: CmsKind, id: string, lang: Lang) {
  return `${lang}:${kind}:${id}`;
}

function emit() {
  if (quiet) return;
  version += 1;
  if (typeof window !== "undefined") {
    localStorage.setItem(KEY, JSON.stringify({ version: 1, patches: state.patches }));
  }
  listeners.forEach((listener) => listener());
}

function isPatch(value: unknown): value is CmsPatch {
  return Boolean(value) && typeof value === "object";
}

export function hydrateCms() {
  if (typeof window === "undefined") return;
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as { patches?: Record<string, unknown> };
      const patches: Record<string, CmsPatch> = {};
      for (const [key, value] of Object.entries(parsed.patches ?? {})) {
        if (isPatch(value)) patches[key] = value;
      }
      state = { patches };
    }
  } catch {
    state = { patches: {} };
  }
  version += 1;
  listeners.forEach((listener) => listener());
}

export function subscribeCms(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getCmsVersion() {
  return version;
}

export function getServerCmsVersion() {
  return 0;
}

export function cmsGet(kind: CmsKind, id: string, lang: Lang): CmsPatch | null {
  return state.patches[cmsKey(kind, id, lang)] ?? null;
}

export function cmsIsEdited(kind: CmsKind, id: string, lang: Lang) {
  return Boolean(state.patches[cmsKey(kind, id, lang)]);
}

export function cmsEditCount() {
  return Object.keys(state.patches).length;
}

export function setCmsPatch(kind: CmsKind, id: string, lang: Lang, patch: CmsPatch | null) {
  const key = cmsKey(kind, id, lang);
  const patches = { ...state.patches };
  if (patch && Object.keys(patch).length > 0) patches[key] = patch;
  else delete patches[key];
  state = { patches };
  emit();
}

export function clearCms() {
  state = { patches: {} };
  emit();
}

export function batchCms(run: () => void) {
  quiet = true;
  try {
    run();
  } finally {
    quiet = false;
    emit();
  }
}
