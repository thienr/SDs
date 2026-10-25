import { addConcepts, addCopy, getAddConcept, type AddConcept } from "@/data/add";
import { c4Concepts, c4Copy, getC4Concept, type C4Concept } from "@/data/c4";
import { getMoreConcept, moreConcepts, moreCopy, type MoreConcept } from "@/data/c3more";
import { getRestConcept, restConcepts, restCopy, type RestConcept } from "@/data/c2rest";
import { conceptCopy, conceptNeighbors, getConcept, type Concept } from "@/data/inferential";
import { gapCopy, gapNeighbors, getGapConcept, stitchAfter, type GapConcept } from "@/data/gap";
import { getMlConcept, mlConcepts, mlCopy, type MlConcept } from "@/data/ml";
import type { Lang } from "@/lib/progress";
import { applyRaw } from "@/lib/raw-store";
import type { RawText } from "@/lib/raw-format";

export type StudyConcept = Concept | RestConcept | MlConcept | MoreConcept | C4Concept | AddConcept | GapConcept;

const MATH = "c-0598c14acf8d";
const DESC = "c-75c5d36b41f2";

const c3Chain: (MlConcept | MoreConcept)[] = [...mlConcepts, ...moreConcepts];

function insertAfter<T extends { id: string }>(base: T[]): (T | GapConcept)[] {
  const out: (T | GapConcept)[] = [];
  for (const item of base) {
    out.push(item);
    for (const id of stitchAfter[item.id] ?? []) {
      const extra = getGapConcept(id);
      if (extra) out.push(extra);
    }
  }
  return out;
}

const c2Chain = insertAfter(restConcepts);
const c4Chain = insertAfter(c4Concepts);
const mathChain = insertAfter(addConcepts.filter((concept) => concept.courseId === MATH));
const descChain = insertAfter(addConcepts.filter((concept) => concept.courseId === DESC));

function pack(chain: StudyConcept[], id: string) {
  const index = chain.findIndex((concept) => concept.id === id);
  if (index < 0) return null;
  return {
    prev: index > 0 ? chain[index - 1] : null,
    next: index < chain.length - 1 ? chain[index + 1] : null,
    index,
    total: chain.length,
  };
}

/** Concepts that borrow a 2D chart from sims/labs. Only used when the concept has none of its own. */
const simFor: Record<string, string> = {
  "infer-intro": "sample", samples: "sample", "samp-use": "sample", "samp-types": "sample-bias",
  permut: "count-p", "math-perm": "count-p", combin: "count-c", "math-comb": "count-c",
  "prob-def": "prob", "no-exp": "prob", "math-p": "prob", "math-kind": "prob",
  events: "venn-events", "math-disj": "venn-events", "add-rule": "venn-or", "math-or": "venn-or",
  "mul-rule": "venn-and", "math-and": "venn-and", joint: "venn-joint",
  rv: "dice-rv", ev: "dice-ev", bayes: "bayes", "ml-what": "ml", "slr-assume": "assume",
  "mlr-why": "mlrwhy", "mlr-coef": "mlrheld", "mlr-vif": "vif", "mlr-dummy": "dummy", "mlr-select": "select",
  "logit-why": "logwhy", "logit-rest": "ovr", "clus-why": "scale",
  "nlp-tok": "tok", "nlp-bow": "bow", "nlp-tfidf": "tfidf", "nlp-edit": "edit",
  "math-ls": "regression", "math-part": "partial", "math-crit": "slope",
  "ts-ses": "smooth", "ga-temp": "temperature", "rag-emb": "rag", "or-sens": "or", "st-board": "story",
};

export function getStudy(id: string): StudyConcept | null {
  const found = lookupStudy(id);
  const sim = simFor[id];
  return found && sim && !found.sim ? { ...found, sim } : found;
}

function lookupStudy(id: string): StudyConcept | null {
  return (
    getConcept(id) ??
    getRestConcept(id) ??
    getMlConcept(id) ??
    getMoreConcept(id) ??
    getC4Concept(id) ??
    getAddConcept(id) ??
    getGapConcept(id)
  );
}

export function studyNeighbors(id: string): { prev: StudyConcept | null; next: StudyConcept | null; index: number; total: number } {
  if (getConcept(id)) return conceptNeighbors(id);
  return (
    pack(c2Chain, id) ??
    pack(c3Chain, id) ??
    pack(c4Chain, id) ??
    pack(mathChain, id) ??
    pack(descChain, id) ??
    gapNeighbors(id)
  );
}

export function studyCopy(concept: StudyConcept, lang: Lang, bare = false): RawText {
  const base = bareCopy(concept, lang);
  if (bare) return base;
  return applyRaw(concept.id, lang, base);
}

function bareCopy(concept: StudyConcept, lang: Lang): RawText {
  if (getConcept(concept.id)) return conceptCopy(concept as Concept, lang);
  if (getRestConcept(concept.id)) return restCopy(concept as RestConcept, lang);
  if (getMlConcept(concept.id)) return mlCopy(concept as MlConcept, lang);
  if (getMoreConcept(concept.id)) return moreCopy(concept as MoreConcept, lang);
  if (getC4Concept(concept.id)) return c4Copy(concept as C4Concept, lang);
  if (getAddConcept(concept.id)) return addCopy(concept as AddConcept, lang);
  return gapCopy(concept as GapConcept, lang);
}

export function studyListTitle(id: string, lang: Lang) {
  const concept = getStudy(id);
  return concept ? studyCopy(concept, lang).title : id;
}

export function c3Count() {
  return c3Chain.length;
}
