import { apiEmpty, apiJson, bearer } from "@/lib/api-cors";
import { publicHeads, publicIdea, publicLesson, publicOutline, searchIdeas } from "@/lib/book-public";
import { cleanKey, submitEdit } from "@/lib/bridge.server";
import type { Lang } from "@/lib/progress";

const KNOWN = new Set(["2024-11-05", "2025-03-26", "2025-06-18", "2025-11-25", "2026-07-28"]);
const META_VERSION = "io.modelcontextprotocol/protocolVersion";

function header(request: Request, name: string) {
  return request.headers.get(name) ?? "";
}

function decodeMcpValue(value: string) {
  const match = /^=\?base64\?([A-Za-z0-9+/=]+)\?=$/.exec(value.trim());
  if (!match) return value;
  try {
    return Buffer.from(match[1], "base64").toString("utf8");
  } catch {
    return value;
  }
}

function metaVersion(params: Record<string, unknown> | undefined) {
  const meta = params?._meta;
  if (!meta || typeof meta !== "object") return "";
  const version = (meta as Record<string, unknown>)[META_VERSION];
  return typeof version === "string" ? version : "";
}

const tools = [
  {
    name: "list_courses",
    description: "Các khóa trong Sổ Mực, đúng thứ tự mục lục. Không cần đối số.",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "outline",
    description: "Mục lục một khóa hoặc cả sổ: phần, buổi, id từng ý.",
    inputSchema: {
      type: "object",
      properties: { courseId: { type: "string", description: "Bỏ trống để lấy mọi khóa." } },
    },
  },
  {
    name: "search_ideas",
    description: "Tìm ý theo câu hoặc id. Kết quả là đoạn ngắn. Gọi get_idea để lấy đủ chữ.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string" },
        lang: { type: "string", enum: ["vi", "en"] },
        courseId: { type: "string" },
        limit: { type: "number" },
      },
      required: ["query"],
    },
  },
  {
    name: "get_idea",
    description: "Đủ chữ của một ý: vì sao, nối với cái trước, định nghĩa, ví dụ, công thức. lang=both lấy cả hai thứ tiếng.",
    inputSchema: {
      type: "object",
      properties: {
        id: { type: "string" },
        lang: { type: "string", enum: ["vi", "en", "both"] },
      },
      required: ["id"],
    },
  },
  {
    name: "get_heads",
    description: "Lời mở đầu khóa, đầu phần, hoặc một câu đầu buổi.",
    inputSchema: {
      type: "object",
      properties: {
        kind: { type: "string", enum: ["course", "module", "session"] },
        lang: { type: "string", enum: ["vi", "en"] },
        courseId: { type: "string" },
      },
      required: ["kind"],
    },
  },
  {
    name: "get_lesson",
    description: "Một bài cũ (không phải thẻ ý): tiêu đề, blurb, khối nội dung.",
    inputSchema: {
      type: "object",
      properties: { id: { type: "string" } },
      required: ["id"],
    },
  },
  {
    name: "submit_edit",
    description: "Gửi bản sửa vào hộp thư của sổ. Không đổi trang đọc cho đến khi người dùng bấm Áp dụng. Giữ nguyên id. Chỉ gửi phần đổi. body là object so-muc-cms (ideas, heads, lessons) hoặc một ý có id.",
    inputSchema: {
      type: "object",
      properties: {
        body: { description: "Object JSON của bản sửa, hoặc chuỗi JSON." },
        note: { type: "string" },
        key: { type: "string", description: "Khóa sửa, nếu header Authorization chưa có." },
      },
      required: ["body"],
    },
  },
];

type Rpc = { jsonrpc?: string; id?: unknown; method?: string; params?: Record<string, unknown> };

function langOf(value: unknown): Lang {
  return value === "en" ? "en" : "vi";
}

function textResult(value: unknown, isError = false) {
  const text = typeof value === "string" ? value : JSON.stringify(value, null, 2);
  return { content: [{ type: "text", text: text.slice(0, 80_000) }], ...(isError ? { isError: true } : {}) };
}

async function callTool(name: string, args: Record<string, unknown>, request: Request) {
  if (name === "list_courses") {
    return textResult(publicOutline().map((course) => ({ id: course.id, title: course.title, modules: course.modules.length })));
  }
  if (name === "outline") {
    const courseId = typeof args.courseId === "string" ? args.courseId : "";
    const outline = publicOutline(courseId || undefined);
    if (courseId && outline.length === 0) return textResult("Không thấy khóa.", true);
    return textResult({ courses: outline });
  }
  if (name === "search_ideas") {
    const query = typeof args.query === "string" ? args.query : "";
    const limit = Math.min(20, Math.max(1, Number(args.limit) || 8));
    const courseId = typeof args.courseId === "string" ? args.courseId : undefined;
    return textResult(searchIdeas(query, langOf(args.lang), 0, limit, courseId));
  }
  if (name === "get_idea") {
    const id = typeof args.id === "string" ? args.id : "";
    if (!id) return textResult("Thiếu id.", true);
    if (args.lang === "both") {
      const vi = publicIdea(id, "vi");
      const en = publicIdea(id, "en");
      if (!vi && !en) return textResult("Không thấy ý.", true);
      return textResult({ vi, en });
    }
    const card = publicIdea(id, langOf(args.lang));
    if (!card) return textResult("Không thấy ý.", true);
    return textResult(card);
  }
  if (name === "get_heads") {
    const kind = args.kind;
    if (kind !== "course" && kind !== "module" && kind !== "session") return textResult("kind phải là course, module hoặc session.", true);
    const courseId = typeof args.courseId === "string" ? args.courseId : undefined;
    return textResult({ heads: publicHeads(kind, langOf(args.lang), courseId) });
  }
  if (name === "get_lesson") {
    const id = typeof args.id === "string" ? args.id : "";
    const lesson = publicLesson(id);
    if (!lesson) return textResult("Không thấy bài.", true);
    return textResult(lesson);
  }
  if (name === "submit_edit") {
    const key = bearer(request) ?? (typeof args.key === "string" ? args.key : null);
    if (!cleanKey(key)) return textResult("Thiếu khóa sửa. Lấy khóa trên trang Quản lý, gửi header Authorization: Bearer <khóa> hoặc đối số key.", true);
    const result = await submitEdit(key, args.note, args.body);
    if (!result.ok) return textResult(result.error, true);
    return textResult({ id: result.value.id, queued: true, note: "Đã vào hộp thư. Trang đọc đổi khi người dùng bấm Áp dụng." });
  }
  return textResult("Không có công cụ này.", true);
}

function rpcResult(id: unknown, result: unknown): Response {
  return apiJson({ jsonrpc: "2.0", id: id ?? null, result });
}

function rpcError(id: unknown, code: number, message: string, status = 200): Response {
  return apiJson({ jsonrpc: "2.0", id: id ?? null, error: { code, message } }, status);
}

export async function handleMcp(request: Request): Promise<Response> {
  if (request.method === "OPTIONS") return apiEmpty(204);
  if (request.method === "GET" || request.method === "DELETE") return apiEmpty(405);
  if (request.method !== "POST") return apiJson({ error: "method not allowed" }, 405);

  let message: unknown;
  try {
    message = await request.json();
  } catch {
    return rpcError(null, -32700, "JSON không đọc được.");
  }
  if (Array.isArray(message)) {
    const parts = await Promise.all(message.map((item) => oneRpc(item, request)));
    const kept = parts.filter((part): part is Response => part !== null);
    if (kept.length === 0) return apiEmpty(202);
    if (kept.length === 1) return kept[0];
    const bodies = await Promise.all(kept.map(async (part) => part.json() as Promise<unknown>));
    return apiJson(bodies);
  }
  const single = await oneRpc(message, request);
  return single ?? apiEmpty(202);
}

async function oneRpc(message: unknown, request: Request): Promise<Response | null> {
  const rpc = (message && typeof message === "object" ? message : {}) as Rpc;
  const id = rpc.id ?? null;
  const params = rpc.params ?? {};
  const headerVersion = header(request, "mcp-protocol-version");
  const fromMeta = metaVersion(params);
  if (headerVersion && fromMeta && headerVersion !== fromMeta) {
    return rpcError(id, -32600, "HeaderMismatch: MCP-Protocol-Version không khớp phiên bản trong _meta.", 400);
  }
  const announced = headerVersion || fromMeta;
  if (announced && !KNOWN.has(announced)) {
    return rpcError(id, -32600, `MCP-Protocol-Version không hỗ trợ: ${announced}.`, 400);
  }
  const bodyMethod = rpc.method ?? "";
  const headerMethod = header(request, "mcp-method");
  if (headerMethod && bodyMethod && headerMethod !== bodyMethod) {
    return rpcError(id, -32600, "HeaderMismatch: Mcp-Method không khớp method.", 400);
  }
  const method = bodyMethod || headerMethod;
  const isNote = method.startsWith("notifications/") || rpc.id === undefined;
  if (method === "initialize") {
    const bodyVersion = typeof params.protocolVersion === "string" ? params.protocolVersion : "";
    if (announced && bodyVersion && announced !== bodyVersion) {
      return rpcError(id, -32600, "HeaderMismatch: phiên bản header không khớp protocolVersion.", 400);
    }
    const asked = bodyVersion || announced || "2025-03-26";
    if (!KNOWN.has(asked)) return rpcError(id, -32602, `protocolVersion không hỗ trợ: ${asked}.`, 400);
    return rpcResult(id, {
      protocolVersion: asked,
      capabilities: { tools: { listChanged: false } },
      serverInfo: { name: "so-muc", version: "1.0.0" },
      instructions:
        "Sổ Mực, sổ học tiếng Việt. Đọc bằng list_courses, outline, search_ideas, get_idea, get_heads, get_lesson. Đây là chữ in sẵn. Giữ nguyên id. Không thêm câu hỏi hay bịa số. Sửa chữ bằng submit_edit với body JSON; trang đọc chỉ đổi khi người dùng bấm Áp dụng. submit_edit cần khóa.",
    });
  }
  if (method === "notifications/initialized" || method === "initialized") return null;
  if (isNote && method !== "ping") return null;
  if (method === "ping") return rpcResult(id, {});
  if (method === "tools/list") return rpcResult(id, { tools });
  if (method === "tools/call") {
    const name = typeof params.name === "string" ? params.name : "";
    const headerName = header(request, "mcp-name");
    if (headerName && decodeMcpValue(headerName) !== name) {
      return rpcError(id, -32600, "HeaderMismatch: Mcp-Name không khớp tên công cụ.", 400);
    }
    const args = params.arguments && typeof params.arguments === "object" ? (params.arguments as Record<string, unknown>) : {};
    try {
      return rpcResult(id, await callTool(name, args, request));
    } catch (error) {
      console.error("[mcp]", error);
      return rpcResult(id, textResult("Công cụ lỗi.", true));
    }
  }
  if (!method) return rpcError(id, -32600, "Thiếu method.");
  return rpcError(id, -32601, "Method không có.");
}
