import { sessionConcepts } from "@/data/place";
import { getStudy, studyCopy } from "@/data/study";
import { courses } from "@/lib/catalog";
import type { Lang } from "@/lib/progress";
import { cardsToBlocks, cardsToJson, parseRawImport, type RawIn, type RawText } from "@/lib/raw-format";
import { rawIsEdited, setRawPatch, batchRaw } from "@/lib/raw-store";

export type RawCard = RawText & {
  id: string;
  lang: Lang;
  courseId: string;
  courseTitle: string;
  sessionId: string;
  sessionTitle: string;
  video: string;
  edited: boolean;
};

export function listRaw(lang: Lang): RawCard[] {
  const out: RawCard[] = [];
  for (const course of courses) {
    for (const mod of course.modules) {
      for (const session of mod.sessions) {
        for (const id of sessionConcepts[session.id] ?? []) {
          const concept = getStudy(id);
          if (!concept) continue;
          const text = studyCopy(concept, lang);
          out.push({
            id,
            lang,
            courseId: course.id,
            courseTitle: course.title,
            sessionId: session.id,
            sessionTitle: session.title,
            video: concept.video,
            edited: rawIsEdited(id, lang),
            title: text.title,
            why: text.why,
            prior: text.prior,
            see: text.see,
            plain: text.plain,
            situation: text.situation,
            use: text.use,
            precise: text.precise,
            insight: text.insight,
            formula: text.formula,
            symbols: text.symbols,
          });
        }
      }
    }
  }
  return out;
}

export function saveCard(id: string, lang: Lang, text: RawText) {
  const concept = getStudy(id);
  if (!concept) return false;
  const base = studyCopy(concept, lang, true);
  const next = tidy(text);
  if (sameText(base, next)) setRawPatch(id, lang, null);
  else setRawPatch(id, lang, next);
  return true;
}

export function exportJson(lang: Lang | "both") {
  return cardsToJson(exportRows(lang));
}

export function exportBlocks(lang: Lang | "both") {
  return cardsToBlocks(exportRows(lang));
}

export function importRaw(source: string, fallback: Lang) {
  const parsed = parseRawImport(source);
  if (parsed.error) return { ok: false as const, error: parsed.error, applied: 0, skipped: 0 };
  let applied = 0;
  let skipped = 0;
  batchRaw(() => {
    for (const card of parsed.cards) {
      const concept = getStudy(card.id);
      if (!concept) {
        skipped += 1;
        continue;
      }
      const lang = card.lang || fallback;
      const current = studyCopy(concept, lang);
      saveCard(card.id, lang, merge(current, card));
      applied += 1;
    }
  });
  return { ok: true as const, error: null, applied, skipped };
}

function exportRows(lang: Lang | "both") {
  const langs: Lang[] = lang === "both" ? ["vi", "en"] : [lang];
  return langs.flatMap((item) =>
    listRaw(item).map((card) => ({
      ...card,
      place: `${card.courseTitle} / ${card.sessionTitle}`,
    })),
  );
}

function merge(current: RawText, card: RawIn): RawText {
  return tidy({
    title: card.fields.title ?? current.title,
    why: card.fields.why ?? current.why,
    prior: "prior" in card.fields ? (card.fields.prior ?? null) : current.prior,
    see: card.fields.see ?? current.see,
    plain: card.fields.plain ?? current.plain,
    situation: card.fields.situation ?? current.situation,
    use: card.fields.use ?? current.use,
    precise: card.fields.precise ?? current.precise,
    insight: card.fields.insight ?? current.insight,
    formula: "formula" in card.fields ? (card.fields.formula ?? null) : current.formula,
    symbols: card.fields.symbols ?? current.symbols,
  });
}

function tidy(text: RawText): RawText {
  const clean = (value: string) => value.trim();
  return {
    title: clean(text.title),
    why: clean(text.why),
    prior: text.prior?.trim() ? text.prior.trim() : null,
    see: clean(text.see),
    plain: clean(text.plain),
    situation: clean(text.situation),
    use: text.use.map((step) => step.trim()).filter(Boolean),
    precise: clean(text.precise),
    insight: clean(text.insight),
    formula: text.formula?.trim() ? text.formula.trim() : null,
    symbols: text.symbols
      .map((row) => ({ sym: row.sym.trim(), meaning: row.meaning.trim() }))
      .filter((row) => row.sym || row.meaning),
  };
}

function sameText(a: RawText, b: RawText) {
  return JSON.stringify(tidy(a)) === JSON.stringify(tidy(b));
}
