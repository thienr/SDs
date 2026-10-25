import { apiJson, bearer } from "@/lib/api-cors";
import { bookMeta, publicHeads, publicIdea, publicLesson, publicOutline, searchIdeas } from "@/lib/book-public";
import { claimKey, dropInbox, gateStatus, listInbox, readInbox, submitEdit } from "@/lib/bridge.server";
import type { Lang } from "@/lib/progress";

function langOf(value: string | null): Lang {
  return value === "en" ? "en" : "vi";
}

function clamp(value: string | null, fallback: number, max: number) {
  const n = Number(value ?? fallback);
  if (!Number.isFinite(n) || n < 0) return fallback;
  return Math.min(max, Math.floor(n));
}

export async function handleSoMucGet(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const what = url.searchParams.get("what") ?? "meta";
  try {
    if (what === "meta") return apiJson(bookMeta());
    if (what === "gate") return apiJson(await gateStatus());
    if (what === "outline") {
      const courseId = url.searchParams.get("course") || undefined;
      const outline = publicOutline(courseId);
      if (courseId && outline.length === 0) return apiJson({ error: "Không thấy khóa." }, 404);
      return apiJson({ courses: outline });
    }
    if (what === "ideas" || what === "search") {
      const lang = langOf(url.searchParams.get("lang"));
      const course = url.searchParams.get("course") ?? "";
      const offset = clamp(url.searchParams.get("offset"), 0, 10_000);
      const limit = clamp(url.searchParams.get("limit"), 30, 50);
      return apiJson(searchIdeas(url.searchParams.get("q") ?? "", lang, offset, limit, course || undefined));
    }
    if (what === "idea") {
      const id = url.searchParams.get("id") ?? "";
      if (!id) return apiJson({ error: "Thiếu id." }, 400);
      const lang = url.searchParams.get("lang");
      if (lang === "both") {
        const vi = publicIdea(id, "vi");
        const en = publicIdea(id, "en");
        if (!vi && !en) return apiJson({ error: "Không thấy ý." }, 404);
        return apiJson({ vi, en });
      }
      const card = publicIdea(id, langOf(lang));
      if (!card) return apiJson({ error: "Không thấy ý." }, 404);
      return apiJson(card);
    }
    if (what === "heads") {
      const kind = url.searchParams.get("kind") ?? "course";
      if (kind !== "course" && kind !== "module" && kind !== "session") return apiJson({ error: "kind phải là course, module hoặc session." }, 400);
      const heads = publicHeads(kind, langOf(url.searchParams.get("lang")), url.searchParams.get("course") || undefined);
      return apiJson({ heads });
    }
    if (what === "lesson") {
      const id = url.searchParams.get("id") ?? "";
      const lesson = publicLesson(id);
      if (!lesson) return apiJson({ error: "Không thấy bài." }, 404);
      return apiJson(lesson);
    }
    if (what === "inbox") {
      const key = bearer(request);
      const id = Number(url.searchParams.get("id") ?? "");
      if (url.searchParams.get("id")) {
        const one = await readInbox(key, id);
        if (!one.ok) return apiJson({ error: one.error }, one.status);
        return apiJson({ item: one.value });
      }
      const list = await listInbox(key);
      if (!list.ok) return apiJson({ error: list.error }, list.status);
      return apiJson(list.value);
    }
    return apiJson({ error: "what không hợp lệ." }, 400);
  } catch (error) {
    console.error("[so-muc]", error);
    return apiJson({ error: "Không đọc được sổ." }, 500);
  }
}

export async function handleSoMucPost(request: Request): Promise<Response> {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return apiJson({ error: "JSON không đọc được." }, 400);
  }
  const row = body && typeof body === "object" ? (body as Record<string, unknown>) : {};
  const key = bearer(request) ?? (typeof row.key === "string" ? row.key : null);
  const op = row.op;
  try {
    if (op === "claim") {
      const result = await claimKey(key);
      if (!result.ok) return apiJson({ error: result.error }, result.status);
      return apiJson(result.value);
    }
    if (op === "submit") {
      if (!("body" in row) && !("edit" in row)) return apiJson({ error: "Thiếu body." }, 400);
      const result = await submitEdit(key, row.note, "body" in row ? row.body : row.edit);
      if (!result.ok) return apiJson({ error: result.error }, result.status);
      return apiJson(result.value);
    }
    if (op === "drop") {
      const result = await dropInbox(key, Number(row.id));
      if (!result.ok) return apiJson({ error: result.error }, result.status);
      return apiJson(result.value);
    }
    return apiJson({ error: "op phải là claim, submit hoặc drop." }, 400);
  } catch (error) {
    console.error("[so-muc]", error);
    return apiJson({ error: "Không ghi được hộp thư." }, 500);
  }
}
