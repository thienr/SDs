import type { Explained, Lg } from "./tpl";
import { detectLang } from "./index";

/** Bản giải thích viết tay cho code trong các bài tập; khóa là mã băm của code. */
type Note = { s: [string, string]; r: [number, number, string, string][] };

export function codeHash(code: string): string {
  const s = code.replace(/\r/g, "").trim();
  let x = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    x ^= s.charCodeAt(i);
    x = Math.imul(x, 0x01000193) >>> 0;
  }
  return x.toString(16).padStart(8, "0");
}

let loaded: Record<string, Note> | null = null;
let loading: Promise<Record<string, Note>> | null = null;

export function loadNotes(): Promise<Record<string, Note>> {
  if (loaded) return Promise.resolve(loaded);
  loading ??= import("@/data/code-notes.json").then((m) => {
    loaded = (m.default ?? m) as unknown as Record<string, Note>;
    return loaded;
  });
  return loading;
}

export function handNote(code: string, lg: Lg): Explained {
  const note = loaded?.[codeHash(code)];
  if (!note) return null;
  const lines = code.replace(/\r/g, "").trim().split("\n");
  const k = lg === "en" ? 3 : 2;
  const detected = detectLang(code);
  return {
    lang: detected === "Calc" ? "Excel" : detected,
    summary: note.s[lg === "en" ? 1 : 0],
    rows: note.r.map((r) => ({ code: lines.slice(r[0] - 1, r[1]).join("\n"), text: r[k] as string, kind: "block" as const })),
  };
}
