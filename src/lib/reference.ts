import { walks } from "@/data/walk";
import { mapNodeIds, relatedOf, topicIndexOf } from "@/data/map";
import { getStudy, studyCopy, studyListTitle } from "@/data/study";
import { lessons } from "@/lib/catalog";
import { formulaExtra } from "@/data/formulas-extra";
import type { Lang } from "@/lib/progress";

export type Src = { id: string; title: string };
export type FormulaItem = {
  id: string;
  title: string;
  tex: string;
  code?: string;
  codeLang?: string;
  note?: string;
  symbols: { sym: string; meaning: string }[];
  topic: number;
  order: number;
  related: Src[];
};
export type TermItem = {
  key: string;
  term: string;
  def: string;
  kind: "term" | "concept" | "legacy";
  topic: number;
  order: number;
  sources: Src[];
  lessonId?: string;
  en?: string;
};

const clean = (s: string) => s.replace(/\s+/g, " ").trim();

/** Mọi công thức có trong thẻ khái niệm, theo thứ tự học trong từng chủ đề. */
export function buildFormulas(lang: Lang): FormulaItem[] {
  const out: FormulaItem[] = [];
  mapNodeIds.forEach((id, order) => {
    const c = getStudy(id);
    if (!c) return;
    const t = studyCopy(c, lang);
    const ex = formulaExtra[id];
    if (!t.formula && !ex) return;
    const own = !!t.formula;
    out.push({
      id,
      title: t.title,
      tex: t.formula ?? ex?.tex ?? "",
      code: own ? undefined : ex?.code,
      codeLang: own ? undefined : ex?.lang,
      note: ex?.note ? ex.note[lang === "en" ? 1 : 0] : undefined,
      symbols: own ? (t.symbols ?? []) : (ex?.sym ?? []).map(([sym, vi, en]) => ({ sym, meaning: lang === "en" ? en : vi })),
      topic: topicIndexOf(id),
      order,
      related: relatedOf(id).slice(0, 4).map((r) => ({ id: r.id, title: studyListTitle(r.id, lang) })),
    });
  });
  return out;
}

/**
 * Từ điển gộp từ ba nguồn: «từ cần biết» trong từng bài làm tay, khái niệm có tên
 * dạng «thuật ngữ: ý», và bảng từ của bài giảng gốc. Trùng tên thì gộp nguồn.
 */
export function buildTerms(lang: Lang): TermItem[] {
  const map = new Map<string, TermItem>();
  const add = (item: Omit<TermItem, "sources"> & { source?: Src }) => {
    const key = item.key;
    const have = map.get(key);
    if (!have) {
      map.set(key, { ...item, sources: item.source ? [item.source] : [] });
      return;
    }
    if (item.source && !have.sources.some((s) => s.id === item.source!.id)) have.sources.push(item.source);
    if (item.lessonId && !have.lessonId) have.lessonId = item.lessonId;
    if (item.en && !have.en) have.en = item.en;
    if (have.kind !== "term" && item.kind === "term") {
      have.def = item.def;
      have.kind = "term";
    }
  };
  mapNodeIds.forEach((id, order) => {
    const c = getStudy(id);
    if (!c) return;
    const topic = topicIndexOf(id);
    const title = studyListTitle(id, lang);
    const src = { id, title };
    const words = walks[id]?.[lang]?.words ?? [];
    for (const [term, meaning] of words) {
      const t = clean(term);
      if (!t || t.length > 60) continue;
      add({ key: t.toLowerCase(), term: t, def: clean(meaning), kind: "term", topic, order, source: src });
    }
    const head = title.split(":")[0];
    if (title.includes(":") && head.length >= 2 && head.length <= 48) {
      const t = studyCopy(c, lang);
      add({ key: head.toLowerCase(), term: clean(head), def: clean(t.plain), kind: "concept", topic, order, source: src });
    }
  });
  lessons.forEach((lesson, i) => {
    for (const g of lesson.glossary ?? []) {
      const t = clean(g.term);
      add({ key: t.toLowerCase(), term: t, def: clean(g.def), kind: "legacy", topic: -1, order: 10000 + i, lessonId: lesson.id, en: g.en });
    }
  });
  return [...map.values()];
}
