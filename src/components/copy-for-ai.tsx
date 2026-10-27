import { useState } from "react";
import { cardContext, promptFor, type AskKind } from "@/lib/ask-context";
import type { Lang } from "@/lib/progress";

const w = {
  vi: { head: "Hỏi AI về thẻ này", note: "Bấm một nút: câu hỏi kèm nội dung thẻ được chép sẵn, bạn dán vào ChatGPT, Gemini, Grok, Claude hay chatbot nào cũng được.", again: "Giải thích lại", quiz: "Ra câu hỏi cho mình", mistake: "Chỗ hay nhầm", copied: "Đã chép. Dán vào chatbot rồi gửi.", fail: "Không chép được. Giữ chữ này để tự chọn và chép:" },
  en: { head: "Ask an AI about this card", note: "Tap one: the question plus the card text is copied. Paste it into ChatGPT, Gemini, Grok, Claude or any chatbot.", again: "Explain again", quiz: "Quiz me", mistake: "Common mistakes", copied: "Copied. Paste into a chatbot and send.", fail: "Could not copy. Select and copy this text:" },
};

export function CopyForAi({ conceptId, lang }: { conceptId: string; lang: Lang }) {
  const t = w[lang];
  const [done, setDone] = useState<AskKind | null>(null);
  const [fallback, setFallback] = useState("");
  const go = async (kind: AskKind) => {
    const text = promptFor(kind, cardContext(conceptId, lang), lang);
    try {
      await navigator.clipboard.writeText(text);
      setFallback("");
      setDone(kind);
    } catch {
      setDone(null);
      setFallback(text);
    }
  };
  const btn = (k: AskKind) => `inline-flex min-h-11 items-center rounded-full border px-4 text-sm ${done === k ? "border-accent bg-card text-accent" : "border-line hover:bg-card"}`;
  return (
    <section className="mt-8 rounded-card border border-line p-4" aria-label={t.head}>
      <h2 className="text-xs uppercase tracking-widest text-accent">{t.head}</h2>
      <p className="mt-2 text-sm text-muted">{t.note}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {(["again", "quiz", "mistake"] as const).map((k) => (
          <button key={k} type="button" className={btn(k)} onClick={() => void go(k)}>{t[k]}</button>
        ))}
      </div>
      <p className="mt-2 min-h-5 text-sm" aria-live="polite">{done ? t.copied : ""}</p>
      {fallback ? (
        <label className="mt-2 block text-xs text-muted">{t.fail}
          <textarea readOnly value={fallback} rows={6} onFocus={(e) => e.currentTarget.select()} className="mt-1 w-full rounded-card border border-line bg-paper p-2 text-sm text-ink" />
        </label>
      ) : null}
    </section>
  );
}
