/** Chat với Gemini, Grok, GPT, Claude ngay trong app. Khóa API do người dùng tự nhập, chỉ lưu trên máy này (không đồng bộ, không gửi lên máy chủ của app). Trình duyệt gọi thẳng nhà cung cấp. */
export type ProviderId = "claude" | "gpt" | "gemini" | "grok";
export type Msg = { role: "user" | "assistant"; text: string };

export const PROVIDERS: Record<ProviderId, { name: string; model: string; keyUrl: string; web: (q: string) => string | null; webHome: string }> = {
  claude: { name: "Claude", model: "claude-sonnet-5-5", keyUrl: "https://console.anthropic.com/settings/keys", web: (q) => `https://claude.ai/new?q=${encodeURIComponent(q)}`, webHome: "https://claude.ai/new" },
  gpt: { name: "GPT", model: "gpt-5", keyUrl: "https://platform.openai.com/api-keys", web: (q) => `https://chatgpt.com/?q=${encodeURIComponent(q)}`, webHome: "https://chatgpt.com/" },
  gemini: { name: "Gemini", model: "gemini-2.5-flash", keyUrl: "https://aistudio.google.com/apikey", web: () => null, webHome: "https://gemini.google.com/app" },
  grok: { name: "Grok", model: "grok-4", keyUrl: "https://console.x.ai/", web: (q) => `https://grok.com/?q=${encodeURIComponent(q)}`, webHome: "https://grok.com/" },
};

const KEY = "so-muc:ai";
type Store = { keys: Partial<Record<ProviderId, string>>; models: Partial<Record<ProviderId, string>>; last: ProviderId };

export function loadStore(): Store {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return { keys: {}, models: {}, last: "claude", ...JSON.parse(raw) };
  } catch {
    /* bỏ qua */
  }
  return { keys: {}, models: {}, last: "claude" };
}

export function saveStore(s: Store) {
  try {
    localStorage.setItem(KEY, JSON.stringify(s));
  } catch {
    /* bỏ qua */
  }
}

async function readError(res: Response) {
  try {
    const j = (await res.json()) as { error?: { message?: string } | string; message?: string };
    const m = typeof j.error === "string" ? j.error : (j.error?.message ?? j.message);
    return `${res.status}: ${(m ?? "").slice(0, 300)}`;
  } catch {
    return `${res.status}`;
  }
}

export async function askAi(id: ProviderId, key: string, model: string, system: string, history: Msg[], signal?: AbortSignal): Promise<string> {
  let res: Response;
  if (id === "claude") {
    res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      signal,
      headers: { "content-type": "application/json", "x-api-key": key, "anthropic-version": "2023-06-01", "anthropic-dangerous-direct-browser-access": "true" },
      body: JSON.stringify({ model, max_tokens: 1500, system, messages: history.map((m) => ({ role: m.role, content: m.text })) }),
    });
    if (!res.ok) throw new Error(await readError(res));
    const j = (await res.json()) as { content?: { type: string; text?: string }[] };
    return (j.content ?? []).map((c) => c.text ?? "").join("").trim();
  }
  if (id === "gpt" || id === "grok") {
    const url = id === "gpt" ? "https://api.openai.com/v1/chat/completions" : "https://api.x.ai/v1/chat/completions";
    res = await fetch(url, {
      method: "POST",
      signal,
      headers: { "content-type": "application/json", authorization: `Bearer ${key}` },
      body: JSON.stringify({ model, messages: [{ role: "system", content: system }, ...history.map((m) => ({ role: m.role, content: m.text }))] }),
    });
    if (!res.ok) throw new Error(await readError(res));
    const j = (await res.json()) as { choices?: { message?: { content?: string } }[] };
    return (j.choices?.[0]?.message?.content ?? "").trim();
  }
  res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`, {
    method: "POST",
    signal,
    headers: { "content-type": "application/json", "x-goog-api-key": key },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: system }] },
      contents: history.map((m) => ({ role: m.role === "user" ? "user" : "model", parts: [{ text: m.text }] })),
    }),
  });
  if (!res.ok) throw new Error(await readError(res));
  const j = (await res.json()) as { candidates?: { content?: { parts?: { text?: string }[] } }[] };
  return (j.candidates?.[0]?.content?.parts ?? []).map((p) => p.text ?? "").join("").trim();
}

export const SYSTEM_BASE =
  "Bạn là gia sư thống kê, Excel, SQL, Python và học máy cho một người làm marketing đang học chương trình Data Science. Trả lời bằng tiếng Việt (hoặc tiếng Anh nếu người dùng hỏi bằng tiếng Anh), ngắn gọn, từng bước, có ví dụ số đơn giản. Nếu có nội dung thẻ học kèm theo thì bám theo đó. Không bịa số liệu; nếu không chắc thì nói rõ.";
