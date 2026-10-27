import { getStudy, studyCopy } from "@/data/study";
import { remember } from "@/data/remember";
import type { Lang } from "@/lib/progress";

export function cardContext(id: string, lang: Lang) {
  const c = getStudy(id);
  if (!c) return null;
  const t = studyCopy(c, lang);
  const r = remember[id]?.[lang === "en" ? 1 : 0];
  const text = [`Thẻ: ${t.title}`, t.plain && `Nói đơn giản: ${t.plain}`, t.situation && `Tình huống: ${t.situation}`, t.precise && `Chính xác: ${t.precise}`, t.formula && `Công thức: ${t.formula}`, r && `Nhớ một câu: ${r}`].filter(Boolean).join("\n");
  return { id, title: t.title, text: text.slice(0, 6000) };
}

export type AskKind = "again" | "quiz" | "mistake" | "free";

const asks: Record<Lang, Record<AskKind, string>> = {
  vi: {
    again: "Giải thích lại thẻ này bằng một ví dụ khác, đơn giản, từng bước. Cuối cùng tóm một câu để nhớ.",
    quiz: "Ra cho mình 3 câu hỏi kiểm tra về thẻ này (khó dần). Hỏi từng câu một, chờ mình trả lời rồi mới chấm và giải thích.",
    mistake: "Người mới học thẻ này hay nhầm chỗ nào nhất? Cho ví dụ sai và ví dụ đúng.",
    free: "",
  },
  en: {
    again: "Explain this card again with a different simple example, step by step. End with a one-line takeaway.",
    quiz: "Give me 3 quiz questions on this card, getting harder. Ask one at a time, wait for my answer, then grade and explain.",
    mistake: "Where do beginners most often go wrong on this card? Show a wrong and a right example.",
    free: "",
  },
};

export function promptFor(kind: AskKind, ctx: { text: string } | null, lang: Lang, own = "") {
  const intro = "Mình đang học Data Science (thống kê, Excel, SQL, Python, học máy). Đây là thẻ học mình đang đọc. Hãy bám đúng nội dung thẻ, không bịa số liệu, trả lời bằng tiếng Việt ngắn gọn.";
  const ask = kind === "free" ? own.trim() : asks[lang][kind];
  return [ctx ? `${intro}\n\n${ctx.text}` : intro, ask && `Yêu cầu: ${ask}`].filter(Boolean).join("\n\n");
}
