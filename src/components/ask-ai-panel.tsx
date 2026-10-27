import { useEffect, useMemo, useRef, useState } from "react";
import { getStudy, studyCopy } from "@/data/study";
import { remember } from "@/data/remember";
import { askAi, loadStore, PROVIDERS, saveStore, SYSTEM_BASE, type Msg, type ProviderId } from "@/lib/ai-chat";
import type { Lang } from "@/lib/progress";

const w = {
  vi: {
    title: "Hỏi AI", close: "Đóng", ctx: "Đang kèm thẻ", noctx: "Chưa kèm thẻ nào (mở một thẻ khái niệm để AI bám theo).",
    ph: "Hỏi bất cứ điều gì về thẻ này…", send: "Gửi", thinking: "Đang trả lời…", key: "Khóa API của", save: "Lưu khóa", change: "Đổi khóa/mô hình",
    keyNote: "Khóa chỉ lưu trên máy này, không đồng bộ và không gửi lên máy chủ của Sổ Mực; trình duyệt gọi thẳng nhà cung cấp và bạn trả phí theo mức dùng của họ.",
    get: "Lấy khóa", model: "Mô hình", web: "Hoặc mở app của họ", copy: "Chép câu hỏi + thẻ", copied: "Đã chép", clear: "Xóa cuộc trò chuyện", err: "Lỗi",
    launchHead: "Hỏi bằng tài khoản của bạn", launchNote: "Mở app của từng bên (đã đăng nhập sẵn trên máy bạn) với câu hỏi và nội dung thẻ điền sẵn. Không cần khóa API.", launchAsk: "Câu hỏi", advanced: "Nâng cao: chat ngay trong app bằng khóa API", starters: ["Giải thích lại bằng ví dụ khác", "Cho mình 3 câu hỏi kiểm tra", "Mình hay nhầm chỗ nào ở thẻ này?"],
  },
  en: {
    title: "Ask AI", close: "Close", ctx: "Card attached", noctx: "No card attached (open a concept card so the AI can follow it).",
    ph: "Ask anything about this card…", send: "Send", thinking: "Answering…", key: "API key for", save: "Save key", change: "Change key/model",
    keyNote: "The key stays on this device only. It is not synced or sent to the Sổ Mực server; your browser calls the provider directly and you pay their usage fees.",
    get: "Get a key", model: "Model", web: "Or open their app", copy: "Copy question + card", copied: "Copied", clear: "Clear chat", err: "Error",
    launchHead: "Ask with your own account", launchNote: "Opens each provider's app (already signed in on your device) with the question and card pre-filled. No API key needed.", launchAsk: "Question", advanced: "Advanced: chat inside the app with an API key", starters: ["Explain it again with another example", "Give me 3 quiz questions", "Where do people usually go wrong here?"],
  },
};

function cardContext(path: string, lang: Lang) {
  const m = /^\/khai-niem\/([^/]+)/.exec(path);
  if (!m) return null;
  const id = decodeURIComponent(m[1]);
  const c = getStudy(id);
  if (!c) return null;
  const t = studyCopy(c, lang);
  const r = remember[id]?.[lang === "en" ? 1 : 0];
  const text = [`Thẻ: ${t.title}`, t.plain && `Nói đơn giản: ${t.plain}`, t.situation && `Tình huống: ${t.situation}`, t.precise && `Chính xác: ${t.precise}`, t.formula && `Công thức: ${t.formula}`, r && `Nhớ một câu: ${r}`].filter(Boolean).join("\n");
  return { id, title: t.title, text: text.slice(0, 6000) };
}

export default function AskAiPanel({ lang, path, onClose }: { lang: Lang; path: string; onClose: () => void }) {
  const t = w[lang];
  const [store, setStore] = useState(loadStore);
  const [id, setId] = useState<ProviderId>(store.last);
  const [chats, setChats] = useState<Partial<Record<ProviderId, Msg[]>>>({});
  const [draft, setDraft] = useState("");
  const [keyDraft, setKeyDraft] = useState("");
  const [modelDraft, setModelDraft] = useState("");
  const [editing, setEditing] = useState(false);
  const [adv, setAdv] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const [copied, setCopied] = useState(false);
  const end = useRef<HTMLDivElement>(null);
  const ctx = useMemo(() => cardContext(path, lang), [path, lang]);
  const prov = PROVIDERS[id];
  const key = store.keys[id];
  const model = store.models[id] || prov.model;
  const msgs = chats[id] ?? [];
  const system = ctx ? `${SYSTEM_BASE}\n\n--- NỘI DUNG THẺ ĐANG HỌC ---\n${ctx.text}` : SYSTEM_BASE;

  useEffect(() => end.current?.scrollIntoView({ block: "end" }), [msgs.length, busy]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const update = (next: typeof store) => {
    setStore(next);
    saveStore(next);
  };
  const pick = (p: ProviderId) => {
    setId(p);
    setErr("");
    setEditing(false);
    update({ ...store, last: p });
  };
  const send = async (text: string) => {
    const q = text.trim();
    if (!q || !key || busy) return;
    const next = [...msgs, { role: "user" as const, text: q }];
    setChats((c) => ({ ...c, [id]: next }));
    setDraft("");
    setBusy(true);
    setErr("");
    try {
      const a = await askAi(id, key, model, system, next);
      setChats((c) => ({ ...c, [id]: [...next, { role: "assistant", text: a || "(trống)" }] }));
    } catch (e) {
      setErr(e instanceof Error ? e.message : String(e));
    } finally {
      setBusy(false);
    }
  };
  const prompt = (q: string) => `${ctx ? `${ctx.text}\n\n` : ""}${q}`.trim();
  const btn = "inline-flex min-h-11 items-center rounded-full border border-line px-4 text-sm hover:bg-card";

  return (
    <div className="fixed inset-0 z-40 flex items-end justify-center bg-black/40 md:items-center" role="dialog" aria-modal="true" aria-label={t.title} onClick={onClose}>
      <div className="flex max-h-[88dvh] w-full flex-col rounded-t-2xl border border-line bg-paper md:max-h-[80dvh] md:max-w-xl md:rounded-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between gap-2 border-b border-line px-4 py-2">
          <h2 className="font-display text-xl">{t.title}</h2>
          <button type="button" className="inline-flex size-11 items-center justify-center text-xl" onClick={onClose} aria-label={t.close}>×</button>
        </div>
        {(key || adv || editing) ? <div className="flex gap-2 overflow-x-auto px-4 py-2" role="tablist">
          {(Object.keys(PROVIDERS) as ProviderId[]).map((p) => (
            <button key={p} type="button" role="tab" aria-selected={p === id} onClick={() => pick(p)} className={`min-h-11 shrink-0 rounded-full border px-4 text-sm ${p === id ? "border-accent bg-card text-accent" : "border-line"}`}>
              {PROVIDERS[p].name}{store.keys[p] ? "" : " ·"}
            </button>
          ))}
        </div> : null}
        <p className="px-4 text-xs text-muted">{ctx ? `${t.ctx}: ${ctx.title}` : t.noctx}</p>

        {!key && !adv && !editing ? (
          <div className="space-y-3 overflow-y-auto px-4 py-3">
            <h3 className="text-sm font-medium">{t.launchHead}</h3>
            <p className="text-xs text-muted">{t.launchNote}</p>
            <label className="block text-sm">{t.launchAsk}
              <input value={draft} onChange={(e) => setDraft(e.target.value)} placeholder={t.starters[0]} className="mt-1 min-h-11 w-full rounded-card border border-line bg-paper px-3 text-base" />
            </label>
            <div className="grid grid-cols-2 gap-2">
              {(Object.keys(PROVIDERS) as ProviderId[]).map((p) => {
                const q = prompt(draft || t.starters[0]).slice(0, 6000);
                const href = PROVIDERS[p].web(q) ?? PROVIDERS[p].webHome;
                return (
                  <a key={p} href={href} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-card border border-accent bg-card text-sm font-medium text-accent" onClick={() => { if (!PROVIDERS[p].web(q)) void navigator.clipboard?.writeText(q).then(() => setCopied(true)).catch(() => {}); }}>
                    {PROVIDERS[p].name}
                  </a>
                );
              })}
            </div>
            <p className="text-xs text-muted">{copied ? t.copied : "Gemini: nội dung được chép sẵn, bạn dán vào ô chat."}</p>
            <button type="button" className="text-xs underline" onClick={() => setAdv(true)}>{t.advanced}</button>
          </div>
        ) : !key || editing ? (
          <div className="space-y-3 overflow-y-auto px-4 py-3">
            <label className="block text-sm">{t.key} {prov.name}
              <input type="password" autoComplete="off" autoCapitalize="none" spellCheck={false} value={keyDraft} onChange={(e) => setKeyDraft(e.target.value)} className="mt-1 min-h-11 w-full rounded-card border border-line bg-paper px-3 font-mono text-sm" />
            </label>
            <label className="block text-sm">{t.model}
              <input value={modelDraft || model} onChange={(e) => setModelDraft(e.target.value)} className="mt-1 min-h-11 w-full rounded-card border border-line bg-paper px-3 font-mono text-sm" />
            </label>
            <div className="flex flex-wrap gap-2">
              <button type="button" className="inline-flex min-h-11 items-center rounded-full bg-accent px-5 text-sm text-white" onClick={() => { const k = keyDraft.trim() || key; if (!k) return; update({ ...store, keys: { ...store.keys, [id]: k }, models: { ...store.models, [id]: (modelDraft || model).trim() } }); setKeyDraft(""); setModelDraft(""); setEditing(false); }}>{t.save}</button>
              <a className={btn} href={prov.keyUrl} target="_blank" rel="noreferrer">{t.get}</a>
            </div>
            <p className="text-xs text-muted">{t.keyNote}</p>
          </div>
        ) : (
          <>
            <div className="min-h-24 flex-1 space-y-3 overflow-y-auto px-4 py-3">
              {msgs.length === 0 ? (
                <div className="flex flex-wrap gap-2">
                  {t.starters.map((s) => (<button key={s} type="button" className={btn} onClick={() => void send(s)}>{s}</button>))}
                </div>
              ) : null}
              {msgs.map((m, i) => (
                <div key={i} className={`whitespace-pre-wrap rounded-card px-3 py-2 text-sm leading-relaxed ${m.role === "user" ? "ml-8 bg-card" : "mr-4 border border-line"}`}>{m.text}</div>
              ))}
              {busy ? <p className="text-sm text-muted">{t.thinking}</p> : null}
              {err ? <p className="text-sm text-red-600">{t.err} {err}</p> : null}
              <div ref={end} />
            </div>
            <form className="flex gap-2 border-t border-line p-3" onSubmit={(e) => { e.preventDefault(); void send(draft); }}>
              <input value={draft} onChange={(e) => setDraft(e.target.value)} placeholder={t.ph} className="min-h-11 min-w-0 flex-1 rounded-card border border-line bg-paper px-3 text-base" />
              <button type="submit" disabled={busy || !draft.trim()} className="min-h-11 rounded-full bg-accent px-5 text-sm text-white disabled:opacity-40">{t.send}</button>
            </form>
          </>
        )}

        {!key && !adv && !editing ? null : <div className="flex flex-wrap items-center gap-2 border-t border-line px-4 py-2 text-xs text-muted">
          {key && !editing ? <button type="button" className="underline" onClick={() => setEditing(true)}>{t.change}</button> : null}
          {msgs.length ? <button type="button" className="underline" onClick={() => setChats((c) => ({ ...c, [id]: [] }))}>{t.clear}</button> : null}
          <span className="ml-auto">{t.web}:</span>
          {(Object.keys(PROVIDERS) as ProviderId[]).map((p) => {
            const q = prompt(draft || t.starters[0]);
            const href = PROVIDERS[p].web(q.slice(0, 6000)) ?? PROVIDERS[p].webHome;
            return (
              <a key={p} href={href} target="_blank" rel="noreferrer" className="inline-flex min-h-8 items-center rounded-full border border-line px-3" onClick={() => { if (!PROVIDERS[p].web(q)) void navigator.clipboard?.writeText(q).then(() => setCopied(true)).catch(() => {}); }}>
                {PROVIDERS[p].name}
              </a>
            );
          })}
          <button type="button" className="underline" onClick={async () => { try { await navigator.clipboard.writeText(prompt(draft)); setCopied(true); } catch { /* bỏ qua */ } }}>{copied ? t.copied : t.copy}</button>
        </div>}
      </div>
    </div>
  );
}
