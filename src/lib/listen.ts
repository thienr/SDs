export type Audio = { s: string; q: string; a: string };
let cache: Promise<Record<string, Audio>> | null = null;
export const loadAudio = () => (cache ??= import("@/data/audio.json").then((m) => m.default as Record<string, Audio>));

export type Seg = { text: string; pause: number };

/** Cắt bài nghe thành câu ngắn: Chrome hay tự dừng khi một lần đọc quá dài. */
export function segments(title: string, a: Audio, waitMs = 6000): Seg[] {
  const out: Seg[] = [{ text: title, pause: 600 }];
  for (const part of a.s.split(/(?<=[.!?…])\s+/)) if (part.trim()) out.push({ text: part.trim(), pause: 250 });
  out.push({ text: `Câu hỏi nhanh. ${a.q}`, pause: waitMs });
  out.push({ text: `Đáp án. ${a.a}`, pause: 1200 });
  return out;
}

export function pickVoice(): SpeechSynthesisVoice | null {
  if (typeof speechSynthesis === "undefined") return null;
  const vs = speechSynthesis.getVoices();
  return vs.find((v) => v.lang.toLowerCase().startsWith("vi")) ?? null;
}
