import { useEffect, useState } from "react";
import type { Lang } from "@/lib/progress";

const KEY = "so-muc-bridge-key";

type Item = { id: number; note: string; createdAt: string };

export function BridgePanel({ lang, onApply }: { lang: Lang; onApply: (text: string) => boolean }) {
  const vi = lang !== "en";
  const [origin, setOrigin] = useState("");
  const [key, setKey] = useState("");
  const [draft, setDraft] = useState("");
  const [claimed, setClaimed] = useState<boolean | null>(null);
  const [items, setItems] = useState<Item[]>([]);
  const [notice, setNotice] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    setOrigin(window.location.origin);
    const saved = localStorage.getItem(KEY) ?? "";
    setKey(saved);
    setDraft(saved);
  }, []);

  useEffect(() => {
    let stop = false;
    async function look() {
      try {
        const gate = await fetch("/api/so-muc?what=gate");
        const body = (await gate.json()) as { claimed?: boolean; error?: string };
        if (stop) return;
        if (!gate.ok) {
          setNotice(body.error ?? (vi ? "Chưa nối được." : "Not connected."));
          return;
        }
        setClaimed(Boolean(body.claimed));
      } catch {
        if (!stop) setNotice(vi ? "Chưa nối được." : "Not connected.");
      }
    }
    void look();
    return () => {
      stop = true;
    };
  }, [vi]);

  useEffect(() => {
    if (!key) return;
    let stop = false;
    async function pull() {
      const res = await fetch("/api/so-muc?what=inbox", { headers: { Authorization: `Bearer ${key}` } });
      const body = (await res.json()) as { items?: Item[]; error?: string };
      if (stop) return;
      if (!res.ok) {
        if (res.status === 401 || res.status === 409) setItems([]);
        return;
      }
      setItems(body.items ?? []);
    }
    void pull();
    const timer = window.setInterval(() => void pull(), 15000);
    return () => {
      stop = true;
      window.clearInterval(timer);
    };
  }, [key]);

  async function copy(text: string, ok: string) {
    try {
      await navigator.clipboard.writeText(text);
      setNotice(ok);
    } catch {
      setNotice(vi ? "Không chép được. Chọn chữ rồi chép tay." : "Clipboard blocked. Select the text and copy it.");
    }
  }

  async function createKey() {
    const bytes = new Uint8Array(18);
    crypto.getRandomValues(bytes);
    const next = [...bytes].map((byte) => byte.toString(16).padStart(2, "0")).join("");
    const res = await fetch("/api/so-muc", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ op: "claim", key: next }),
    });
    const body = (await res.json()) as { error?: string };
    if (!res.ok) {
      setNotice(body.error ?? (vi ? "Chưa tạo được khóa." : "Could not create a key."));
      return;
    }
    localStorage.setItem(KEY, next);
    setKey(next);
    setDraft(next);
    setClaimed(true);
    setShow(true);
    setNotice(vi ? "Đã tạo khóa. Chép vào cấu hình của mô hình." : "Key created. Copy it into the model's config.");
  }

  async function saveDraft() {
    const next = draft.trim();
    const res = await fetch("/api/so-muc", {
      method: "POST",
      headers: { "content-type": "application/json", Authorization: `Bearer ${next}` },
      body: JSON.stringify({ op: "claim", key: next }),
    });
    const body = (await res.json()) as { error?: string };
    if (!res.ok) {
      setNotice(body.error ?? (vi ? "Khóa không dùng được." : "That key does not work."));
      return;
    }
    localStorage.setItem(KEY, next);
    setKey(next);
    setClaimed(true);
    setNotice(vi ? "Đã lưu khóa trên máy này." : "Key saved on this device.");
  }

  async function applyItem(id: number) {
    const res = await fetch(`/api/so-muc?what=inbox&id=${id}`, { headers: { Authorization: `Bearer ${key}` } });
    const body = (await res.json()) as { item?: { body: unknown }; error?: string };
    if (!res.ok || !body.item) {
      setNotice(body.error ?? (vi ? "Không lấy được bản sửa." : "Could not load that edit."));
      return;
    }
    const ok = onApply(JSON.stringify(body.item.body));
    if (!ok) return;
    await fetch("/api/so-muc", {
      method: "POST",
      headers: { "content-type": "application/json", Authorization: `Bearer ${key}` },
      body: JSON.stringify({ op: "drop", id }),
    });
    setItems((current) => current.filter((item) => item.id !== id));
    setNotice(vi ? "Đã áp bản từ ngoài." : "Applied the outside edit.");
  }

  async function dismiss(id: number) {
    await fetch("/api/so-muc", {
      method: "POST",
      headers: { "content-type": "application/json", Authorization: `Bearer ${key}` },
      body: JSON.stringify({ op: "drop", id }),
    });
    setItems((current) => current.filter((item) => item.id !== id));
  }

  const mcpUrl = origin ? `${origin}/api/mcp` : "/api/mcp";
  const readUrl = origin ? `${origin}/api/so-muc` : "/api/so-muc";
  const config = JSON.stringify(
    {
      mcpServers: {
        "so-muc": {
          url: mcpUrl,
          ...(key ? { headers: { Authorization: `Bearer ${key}` } } : {}),
        },
      },
    },
    null,
    2,
  );

  return (
    <section className="mt-6 rounded-card border border-line p-4">
      <h2 className="font-display text-2xl leading-tight">{vi ? "Kết nối ra ngoài" : "Connect outward"}</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {vi
          ? "Mô hình đọc cả sổ qua MCP hoặc API. Muốn sửa thì nó gửi vào hộp thư. Bấm Áp dụng là trang đọc đổi ngay. Khóa chỉ để gửi bản sửa, đừng dán chỗ công khai."
          : "A model reads the book through MCP or the API. Edits land in the inbox. Apply, and the reading page changes. The key only sends edits. Don't paste it in public."}
      </p>
      <p className="mt-3 break-all font-mono text-sm">{mcpUrl}</p>
      <p className="mt-1 break-all font-mono text-sm text-muted">{readUrl}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" className="min-h-11 rounded-full border border-line px-4 text-sm" onClick={() => void copy(mcpUrl, vi ? "Đã chép địa chỉ MCP." : "Copied the MCP address.")}>
          {vi ? "Chép MCP" : "Copy MCP"}
        </button>
        <button type="button" className="min-h-11 rounded-full border border-line px-4 text-sm" onClick={() => void copy(config, vi ? "Đã chép cấu hình." : "Copied the config.")}>
          {vi ? "Chép cấu hình" : "Copy config"}
        </button>
        {key ? (
          <button type="button" className="min-h-11 rounded-full border border-line px-4 text-sm" onClick={() => void copy(key, vi ? "Đã chép khóa." : "Copied the key.")}>
            {vi ? "Chép khóa" : "Copy key"}
          </button>
        ) : null}
      </div>
      <label className="mt-4 block text-sm">
        <span className="text-muted">{vi ? "Khóa sửa" : "Edit key"}</span>
        <input
          type={show ? "text" : "password"}
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          className="mt-1 min-h-11 w-full rounded-card border border-line bg-card px-3 font-mono text-sm outline-none"
          autoComplete="off"
          spellCheck={false}
        />
      </label>
      <div className="mt-2 flex flex-wrap gap-2">
        {claimed === false ? (
          <button type="button" className="min-h-11 rounded-full bg-ink px-4 text-sm text-paper" onClick={() => void createKey()}>
            {vi ? "Tạo khóa" : "Create a key"}
          </button>
        ) : null}
        <button type="button" className="min-h-11 rounded-full border border-line px-4 text-sm" onClick={() => void saveDraft()}>
          {vi ? "Lưu khóa này" : "Save this key"}
        </button>
        <button type="button" className="min-h-11 rounded-full border border-line px-4 text-sm" onClick={() => setShow((value) => !value)}>
          {show ? (vi ? "Ẩn" : "Hide") : vi ? "Hiện" : "Show"}
        </button>
      </div>
      {claimed === null ? <p className="mt-3 text-sm text-muted">{vi ? "Đang nối…" : "Connecting…"}</p> : null}
      {notice ? <p className="mt-3 text-sm">{notice}</p> : null}
      <h3 className="mt-5 text-sm">{vi ? "Hộp thư từ ngoài" : "Inbox from outside"}</h3>
      {items.length === 0 ? (
        <p className="mt-2 text-sm text-muted">{vi ? "Chưa có bản sửa nào." : "No edits waiting."}</p>
      ) : (
        <ul className="mt-2 space-y-2">
          {items.map((item) => (
            <li key={item.id} className="rounded-card border border-line px-3 py-3">
              <p className="text-sm">{item.note || (vi ? `Bản #${item.id}` : `Edit #${item.id}`)}</p>
              <p className="mt-1 text-xs text-muted">{item.createdAt}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <button type="button" className="min-h-11 rounded-full bg-ink px-4 text-sm text-paper" onClick={() => void applyItem(item.id)}>
                  {vi ? "Áp dụng" : "Apply"}
                </button>
                <button type="button" className="min-h-11 rounded-full border border-line px-4 text-sm" onClick={() => void dismiss(item.id)}>
                  {vi ? "Bỏ" : "Dismiss"}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
