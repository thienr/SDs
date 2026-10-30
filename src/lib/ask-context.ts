import { sessionConcepts, sessionOfConcept } from "@/data/place";
import { getStudy, studyCopy, studyListTitle, studyNeighbors } from "@/data/study";
import { courses } from "@/lib/catalog";
import { allCardIds } from "@/lib/course-cards";
import { getDone, isDone } from "@/lib/done";
import { getReports } from "@/lib/report-store";
import { getReview } from "@/lib/review";
import { getToc } from "@/lib/toc-memory";
import { remember } from "@/data/remember";
import type { Lang } from "@/lib/progress";

function where(id: string) {
  const sid = sessionOfConcept(id);
  if (!sid) return null;
  for (const c of courses) {
    for (const m of c.modules) {
      const ses = m.sessions.find((x) => x.id === sid);
      if (ses) {
        const ids = sessionConcepts[sid] ?? [];
        return { course: c.title, module: m.title, session: ses.title, pos: ids.indexOf(id) + 1, of: ids.length };
      }
    }
  }
  return null;
}

/** Hồ sơ học: kết quả tự kiểm tra, thẻ hay sai, báo cáo «khó hiểu». Chỉ lấy từ dữ liệu trên máy này. */
function history(id: string, lang: Lang) {
  const rev = getReview();
  const entries = Object.entries(rev);
  const cards = new Set(entries.map(([k]) => k.split("#")[0]));
  const lines: string[] = [];
  const state = (k: string) => (rev[k] ? (rev[k].b > 0 ? "đúng ở lần làm gần nhất" : "sai ở lần làm gần nhất") : "chưa làm");
  lines.push(`Câu tự kiểm tra của thẻ này: câu 1 ${state(`${id}#0`)}; câu 2 ${state(`${id}#1`)}.`);
  if (entries.length) {
    const weak = [...cards].filter((c) => [0, 1].some((i) => rev[`${c}#${i}`]?.b === 0)).filter((c) => c !== id).slice(0, 6);
    lines.push(`Tổng cộng đã làm ${entries.length} câu tự kiểm tra trên ${cards.size} thẻ.`);
    if (weak.length) lines.push(`Các thẻ mình từng làm sai: ${weak.map((c) => studyListTitle(c, lang)).join("; ")}.`);
  } else {
    lines.push("Mình chưa làm câu tự kiểm tra nào khác.");
  }
  const doneMap = getDone();
  const total = allCardIds().length;
  const learned = allCardIds().filter((c) => isDone(doneMap, c)).length;
  lines.push(`Mình đã đánh dấu học xong ${learned}/${total} thẻ; thẻ này ${isDone(doneMap, id) ? "đã được đánh dấu học xong" : "chưa đánh dấu học xong"}.`);
  const mine = getReports().filter((r) => r.conceptId === id);
  if (mine.length) lines.push(`Mình từng đánh dấu thẻ này là ${mine.map((r) => (r.kind === "unclear" ? "khó hiểu" : "có thể sai")).join(", ")}${mine[0].note ? `: "${mine[0].note.slice(0, 200)}"` : ""}.`);
  const read = getToc().read;
  if (read?.item && read.item !== id) lines.push(`Thẻ mình đọc dở gần nhất trước đó: ${studyListTitle(read.item, lang)}.`);
  return lines.join("\n");
}

export function cardContext(id: string, lang: Lang) {
  const c = getStudy(id);
  if (!c) return null;
  const t = studyCopy(c, lang);
  const r = remember[id]?.[lang === "en" ? 1 : 0];
  const w = where(id);
  const nb = studyNeighbors(id);
  const place = [
    w && `Vị trí trong chương trình: khóa «${w.course}» › phần «${w.module}» › buổi «${w.session}»${w.of ? ` (thẻ ${w.pos}/${w.of} của buổi)` : ""}.`,
    nb.prev && `Thẻ ngay trước: ${studyCopy(nb.prev, lang).title}.`,
    nb.next && `Thẻ ngay sau: ${studyCopy(nb.next, lang).title}.`,
  ].filter(Boolean).join("\n");
  const card = [
    `Thẻ: ${t.title}`,
    t.why && `Biết để làm gì: ${t.why}`,
    t.prior && `Nối với cái trước: ${t.prior}`,
    t.plain && `Nói đơn giản: ${t.plain}`,
    t.situation && `Tình huống: ${t.situation}`,
    t.use?.length ? `Dùng khi: ${t.use.join(" ")}` : "",
    t.precise && `Chính xác: ${t.precise}`,
    t.formula && `Công thức: ${t.formula}`,
    r && `Nhớ một câu: ${r}`,
  ].filter(Boolean).join("\n");
  const text = [place && `[VỊ TRÍ BÀI HỌC]\n${place}`, `[NỘI DUNG THẺ]\n${card}`, `[LỊCH SỬ HỌC CỦA MÌNH]\n${history(id, lang)}`].filter(Boolean).join("\n\n");
  return { id, title: t.title, text: text.slice(0, 9000) };
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
  const intro = "Mình đang tự học chương trình Data Science của upGrad/IIIT Bangalore (thống kê, Excel, SQL, Python, học máy) bằng một app thẻ học. Bên dưới là vị trí bài học, nội dung thẻ mình đang đọc và lịch sử học của mình. Hãy bám đúng nội dung thẻ, không bịa số liệu, dùng lịch sử để chọn mức giải thích (nhấn mạnh chỗ mình hay sai), trả lời bằng tiếng Việt ngắn gọn.";
  const ask = kind === "free" ? own.trim() : asks[lang][kind];
  return [ctx ? `${intro}\n\n${ctx.text}` : intro, ask && `Yêu cầu: ${ask}`].filter(Boolean).join("\n\n");
}
