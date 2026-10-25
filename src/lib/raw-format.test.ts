import assert from "node:assert/strict";
import test from "node:test";
import { cardsToBlocks, cardsToJson, parseRawImport, type RawText } from "./raw-format.ts";

const sample: RawText & { id: string; lang: "vi"; place: string; video: string } = {
  id: "infer-intro",
  lang: "vi",
  place: "C2 / S1",
  video: "Introduction",
  title: "Đếm một tuần",
  why: "Để khỏi lấy số của một tuần.",
  prior: null,
  see: "Khung vàng là tuần này.",
  plain: "Bạn đo một ít.",
  situation: "Tuần này 400 phiên. Ví dụ minh họa.",
  use: ["Hỏi trước đang nói về tuần này.", "Đừng đưa mỗi một số 3%."],
  precise: "Một số của tuần này chưa phải cả nguồn.",
  insight: "Một số chưa phải sự thật.",
  formula: null,
  symbols: [{ sym: "n", meaning: "cỡ mẫu" }],
};

test("json roundtrip keeps text and drops place on the writable set", () => {
  const parsed = parseRawImport(cardsToJson([sample]));
  assert.equal(parsed.error, null);
  assert.equal(parsed.cards.length, 1);
  assert.equal(parsed.cards[0].id, "infer-intro");
  assert.equal(parsed.cards[0].lang, "vi");
  assert.equal(parsed.cards[0].fields.title, sample.title);
  assert.equal(parsed.cards[0].fields.prior, null);
  assert.deepEqual(parsed.cards[0].fields.use, sample.use);
  assert.equal("place" in parsed.cards[0].fields, false);
});

test("partial json only carries the fields that were sent", () => {
  const parsed = parseRawImport(JSON.stringify({ cards: [{ id: "ht-p", lang: "en", title: "A p-value is not the chance the null is true" }] }));
  assert.equal(parsed.error, null);
  assert.deepEqual(Object.keys(parsed.cards[0].fields), ["title"]);
});

test("block format reads two cards and empty formula as null", () => {
  const parsed = parseRawImport(cardsToBlocks([sample, { ...sample, id: "permut", title: "Đổi thứ tự", formula: "P(n,k)" }]));
  assert.equal(parsed.error, null);
  assert.equal(parsed.cards.length, 2);
  assert.equal(parsed.cards[0].fields.formula, null);
  assert.equal(parsed.cards[1].fields.formula, "P(n,k)");
  assert.equal(parsed.cards[1].fields.symbols?.[0].meaning, "cỡ mẫu");
});

test("garbage is an error, not an empty success", () => {
  const parsed = parseRawImport("xin chào");
  assert.equal(parsed.cards.length, 0);
  assert.ok(parsed.error);
});
