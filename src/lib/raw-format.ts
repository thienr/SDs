import type { Lang } from "@/lib/progress";

export const RAW_NOTE =
  "so-muc-raw v1. Sửa chữ trong cards. Giữ nguyên id và lang. Không thêm câu hỏi, quiz, hay ô đáp án. Số chưa có nguồn phải ghi ví dụ minh họa. Không bịa số liệu. course, session, place, video chỉ để đọc: sửa cũng bị bỏ qua. Trả lại đúng JSON này, hoặc khối ===== CARD =====.";

export type RawText = {
  title: string;
  why: string;
  prior: string | null;
  see: string;
  plain: string;
  situation: string;
  use: string[];
  precise: string;
  insight: string;
  formula: string | null;
  symbols: { sym: string; meaning: string }[];
};

export type RawIn = {
  id: string;
  lang: Lang;
  fields: Partial<RawText>;
};

const WRITABLE = ["title", "why", "prior", "see", "plain", "situation", "use", "precise", "insight", "formula", "symbols"] as const;

export function parseRawImport(input: string): { cards: RawIn[]; error: string | null } {
  const source = input.trim();
  if (!source) return { cards: [], error: "Ô dán đang trống." };
  if (source.startsWith("{") || source.startsWith("[")) {
    try {
      return fromJson(JSON.parse(source) as unknown);
    } catch {
      return { cards: [], error: "JSON không đọc được." };
    }
  }
  return fromBlocks(source);
}

export function cardsToJson(cards: Array<RawText & { id: string; lang: Lang; place: string; video: string }>) {
  return JSON.stringify({ "so-muc-raw": 1, note: RAW_NOTE, cards }, null, 2);
}

export function cardsToBlocks(cards: Array<RawText & { id: string; lang: Lang; place: string; video: string }>) {
  const body = cards.map((card) => {
    const lines = [
      `===== CARD ${card.id} ${card.lang} =====`,
      "@place",
      card.place,
      "@video",
      card.video,
      "@title",
      card.title,
      "@why",
      card.why,
      "@prior",
      card.prior ?? "",
      "@see",
      card.see,
      "@plain",
      card.plain,
      "@situation",
      card.situation,
      "@use",
      ...card.use,
      "@precise",
      card.precise,
      "@insight",
      card.insight,
      "@formula",
      card.formula ?? "",
      "@symbols",
      ...card.symbols.map((row) => `${row.sym} | ${row.meaning}`),
      "===== END =====",
      "",
    ];
    return lines.join("\n");
  });
  return `so-muc-raw: 1\n${RAW_NOTE}\n\n${body.join("\n")}`;
}

function fromJson(value: unknown): { cards: RawIn[]; error: string | null } {
  const list = Array.isArray(value)
    ? value
    : value && typeof value === "object" && Array.isArray((value as { cards?: unknown }).cards)
      ? (value as { cards: unknown[] }).cards
      : value && typeof value === "object" && typeof (value as { id?: unknown }).id === "string"
        ? [value]
        : null;
  if (!list) return { cards: [], error: "JSON này không có mảng cards." };
  const cards: RawIn[] = [];
  for (const item of list) {
    const card = oneObject(item);
    if (card) cards.push(card);
  }
  if (cards.length === 0) return { cards: [], error: "Không có thẻ nào có id." };
  return { cards, error: null };
}

function oneObject(item: unknown): RawIn | null {
  if (!item || typeof item !== "object") return null;
  const row = item as Record<string, unknown>;
  if (typeof row.id !== "string" || !row.id.trim()) return null;
  const lang: Lang = row.lang === "en" ? "en" : "vi";
  const fields: Partial<RawText> = {};
  if (typeof row.title === "string") fields.title = row.title;
  if (typeof row.why === "string") fields.why = row.why;
  if ("prior" in row) fields.prior = typeof row.prior === "string" && row.prior.trim() ? row.prior : null;
  if (typeof row.see === "string") fields.see = row.see;
  if (typeof row.plain === "string") fields.plain = row.plain;
  if (typeof row.situation === "string") fields.situation = row.situation;
  if ("use" in row) fields.use = asSteps(row.use);
  if (typeof row.precise === "string") fields.precise = row.precise;
  if (typeof row.insight === "string") fields.insight = row.insight;
  if ("formula" in row) fields.formula = typeof row.formula === "string" && row.formula.trim() ? row.formula : null;
  if ("symbols" in row) fields.symbols = asSymbols(row.symbols);
  return { id: row.id.trim(), lang, fields };
}

function fromBlocks(source: string): { cards: RawIn[]; error: string | null } {
  const lines = source.split(/\r?\n/);
  const cards: RawIn[] = [];
  let current: { id: string; lang: Lang; bag: Map<string, string[]> } | null = null;
  let field = "";
  const flush = () => {
    if (!current) return;
    cards.push({ id: current.id, lang: current.lang, fields: fieldsFrom(current.bag) });
    current = null;
    field = "";
  };
  for (const line of lines) {
    const open = line.match(/^===== CARD\s+(\S+)\s+(vi|en)\s+=====\s*$/);
    if (open) {
      flush();
      current = { id: open[1], lang: open[2] as Lang, bag: new Map() };
      continue;
    }
    if (/^===== END =====\s*$/.test(line)) {
      flush();
      continue;
    }
    if (!current) continue;
    const tag = line.match(/^@([a-z]+)\s*$/);
    if (tag) {
      field = tag[1];
      if (!current.bag.has(field)) current.bag.set(field, []);
      continue;
    }
    if (!field) continue;
    current.bag.get(field)?.push(line);
  }
  flush();
  if (cards.length === 0) return { cards: [], error: "Không thấy khối ===== CARD id vi =====." };
  return { cards, error: null };
}

function fieldsFrom(bag: Map<string, string[]>): Partial<RawText> {
  const fields: Partial<RawText> = {};
  const text = (name: string) => (bag.get(name) ?? []).join("\n").trim();
  for (const name of WRITABLE) {
    if (!bag.has(name)) continue;
    if (name === "prior") {
      const value = text(name);
      fields.prior = value ? value : null;
    } else if (name === "formula") {
      const value = text(name);
      fields.formula = value ? value : null;
    } else if (name === "use") {
      fields.use = asSteps(bag.get(name) ?? []);
    } else if (name === "symbols") {
      fields.symbols = asSymbols(bag.get(name) ?? []);
    } else if (name === "title" || name === "why" || name === "see" || name === "plain" || name === "situation" || name === "precise" || name === "insight") {
      fields[name] = text(name);
    }
  }
  return fields;
}

function asSteps(value: unknown): string[] {
  const list = Array.isArray(value) ? value : typeof value === "string" ? value.split(/\r?\n/) : [];
  return list
    .map((step) => String(step).trim().replace(/^[-*]\s+/, ""))
    .filter(Boolean);
}

function asSymbols(value: unknown): { sym: string; meaning: string }[] {
  if (typeof value === "string") return asSymbols(value.split(/\r?\n/));
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => {
      if (typeof item === "string") {
        const cut = item.indexOf("|");
        if (cut < 0) return { sym: item.trim(), meaning: "" };
        return { sym: item.slice(0, cut).trim(), meaning: item.slice(cut + 1).trim() };
      }
      if (item && typeof item === "object") {
        const row = item as { sym?: unknown; meaning?: unknown };
        return { sym: String(row.sym ?? "").trim(), meaning: String(row.meaning ?? "").trim() };
      }
      return { sym: "", meaning: "" };
    })
    .filter((row) => row.sym || row.meaning);
}
