import { createFileRoute, Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { RAW_NOTE, cardsToBlocks, type RawText } from "@/lib/raw-format";
import { exportBlocks, exportJson, importRaw, listRaw, saveCard, type RawCard } from "@/lib/raw-corpus";
import { CmsPanel } from "@/components/cms-panel";
import { BridgePanel } from "@/components/bridge-panel";
import { exportCms, importCms } from "@/lib/cms-live";
import { clearCms, cmsEditCount, getCmsVersion, getServerCmsVersion, subscribeCms, type CmsKind } from "@/lib/cms-store";
import { courses } from "@/lib/catalog";
import { getProgress, getServerProgress, subscribeProgress } from "@/lib/progress";
import { clearRaw, getRawVersion, getServerRawVersion, rawEditCount, setRawPatch, subscribeRaw } from "@/lib/raw-store";

export const Route = createFileRoute("/goc")({
  component: RawPage,
});

type Draft = {
  title: string;
  why: string;
  prior: string;
  see: string;
  plain: string;
  situation: string;
  use: string;
  precise: string;
  insight: string;
  formula: string;
  symbols: string;
};

const fields: { key: keyof Draft; vi: string; en: string; tall?: boolean; mono?: boolean }[] = [
  { key: "title", vi: "Tên ý", en: "Title" },
  { key: "why", vi: "Biết để làm gì", en: "What you use it for", tall: true },
  { key: "prior", vi: "Nối với cái trước", en: "How it links", tall: true },
  { key: "see", vi: "Nhìn cái này", en: "Look at this", tall: true },
  { key: "plain", vi: "Nói cho dễ", en: "In plain words", tall: true },
  { key: "situation", vi: "Ví dụ", en: "Example", tall: true },
  { key: "use", vi: "Cách dùng, mỗi dòng một bước", en: "Steps, one per line", tall: true },
  { key: "precise", vi: "Nói cho đúng", en: "The precise version", tall: true },
  { key: "formula", vi: "Công thức KaTeX, để trống nếu không có", en: "KaTeX formula, empty if none", mono: true },
  { key: "symbols", vi: "Ký hiệu, mỗi dòng: ký hiệu | nghĩa", en: "Symbols, one line: symbol | meaning", tall: true, mono: true },
  { key: "insight", vi: "Nhớ một điều", en: "One thing to keep", tall: true },
];

function toDraft(card: RawCard): Draft {
  return {
    title: card.title,
    why: card.why,
    prior: card.prior ?? "",
    see: card.see,
    plain: card.plain,
    situation: card.situation,
    use: card.use.join("\n"),
    precise: card.precise,
    insight: card.insight,
    formula: card.formula ?? "",
    symbols: card.symbols.map((row) => `${row.sym} | ${row.meaning}`).join("\n"),
  };
}

function fromDraft(draft: Draft): RawText {
  return {
    title: draft.title,
    why: draft.why,
    prior: draft.prior,
    see: draft.see,
    plain: draft.plain,
    situation: draft.situation,
    use: draft.use.split("\n"),
    precise: draft.precise,
    insight: draft.insight,
    formula: draft.formula,
    symbols: draft.symbols.split("\n").map((line) => {
      const cut = line.indexOf("|");
      if (cut < 0) return { sym: line, meaning: "" };
      return { sym: line.slice(0, cut), meaning: line.slice(cut + 1) };
    }),
  };
}

type Tab = "idea" | CmsKind;

const tabs: { id: Tab; vi: string; en: string }[] = [
  { id: "idea", vi: "Ý", en: "Ideas" },
  { id: "course", vi: "Đầu khóa", en: "Courses" },
  { id: "module", vi: "Đầu phần", en: "Parts" },
  { id: "session", vi: "Đầu buổi", en: "Sessions" },
  { id: "lesson", vi: "Bài cũ", en: "Old lessons" },
];

function tabFromHash(hash: string): { tab: Tab; id: string } {
  const clean = decodeURIComponent(hash.replace(/^#/, ""));
  const cut = clean.indexOf(":");
  if (cut > 0) {
    const name = clean.slice(0, cut);
    if (name === "course" || name === "module" || name === "session" || name === "lesson") {
      return { tab: name, id: clean.slice(cut + 1) };
    }
  }
  return { tab: "idea", id: clean };
}

function exportWhole() {
  const ideas = JSON.parse(exportJson("both")) as { cards: unknown[] };
  return JSON.stringify(
    {
      "so-muc-cms": 1,
      note: "so-muc-cms v1. Sửa chữ. Giữ nguyên id và kind. Không thêm câu hỏi. Số chưa có nguồn ghi ví dụ minh họa. Trả lại đúng JSON này.",
      ideas: ideas.cards,
      ...exportCms("both"),
    },
    null,
    2,
  );
}

function download(filename: string, text: string, type: string) {
  const blob = new Blob([text], { type });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

function RawPage() {
  const progress = useSyncExternalStore(subscribeProgress, getProgress, getServerProgress);
  const version = useSyncExternalStore(subscribeRaw, getRawVersion, getServerRawVersion);
  useSyncExternalStore(subscribeCms, getCmsVersion, getServerCmsVersion);
  const hash = useRouterState({ select: (state) => state.location.hash });
  const lang = progress.lang;
  const [tab, setTab] = useState<Tab>("idea");
  const [focusId, setFocusId] = useState("");
  const [courseId, setCourseId] = useState("");
  const [query, setQuery] = useState("");
  const [onlyEdited, setOnlyEdited] = useState(false);
  const [selected, setSelected] = useState("");
  const hashLock = useRef(false);
  const [draft, setDraft] = useState<Draft | null>(null);
  const [paste, setPaste] = useState("");
  const [notice, setNotice] = useState("");
  const [armClear, setArmClear] = useState(false);
  const vi = lang !== "en";

  const cards = useMemo(() => listRaw(lang), [lang, version]);
  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return cards.filter((card) => {
      if (courseId && card.courseId !== courseId) return false;
      if (onlyEdited && !card.edited) return false;
      if (!needle) return true;
      return `${card.id} ${card.title} ${card.plain} ${card.sessionTitle}`.toLowerCase().includes(needle);
    });
  }, [cards, courseId, onlyEdited, query]);

  useEffect(() => {
    const next = tabFromHash(hash);
    setTab(next.tab);
    setFocusId(next.id);
    if (next.tab !== "idea") return;
    const id = next.id;
    if (!id) return;
    hashLock.current = true;
    setCourseId("");
    setOnlyEdited(false);
    setQuery("");
    setSelected(id);
  }, [hash]);

  useEffect(() => {
    if (hashLock.current) {
      hashLock.current = false;
      return;
    }
    if (filtered.some((card) => card.id === selected)) return;
    if (filtered[0]) setSelected(filtered[0].id);
  }, [filtered, selected]);

  const card = filtered.find((item) => item.id === selected) ?? null;

  useEffect(() => {
    if (!card) {
      setDraft(null);
      return;
    }
    setDraft(toDraft(card));
  }, [card]);

  const dirty = card && draft ? JSON.stringify(fromDraft(draft)) !== JSON.stringify(fromDraft(toDraft(card))) : false;
  const edited = rawEditCount();

  async function copyOut(text: string, ok: string) {
    try {
      await navigator.clipboard.writeText(text);
      setNotice(ok);
    } catch {
      setPaste(text);
      setNotice(vi ? "Không chép được. Chữ đã nằm ở ô dán." : "Clipboard blocked. The text is in the paste box.");
    }
  }

  function applyPaste(source: string) {
    try {
      const parsed = JSON.parse(source) as { "so-muc-cms"?: number; ideas?: unknown; heads?: unknown; lessons?: unknown; cards?: unknown };
      if (parsed["so-muc-cms"]) {
        const ideaResult =
          Array.isArray(parsed.ideas) && parsed.ideas.length > 0
            ? importRaw(JSON.stringify({ cards: parsed.ideas }), lang)
            : { ok: true as const, applied: 0, skipped: 0, error: null };
        if (!ideaResult.ok) {
          setNotice(ideaResult.error ?? (vi ? "Không áp được các ý." : "Could not apply the ideas."));
          return false;
        }
        const cms = importCms(parsed, lang);
        setNotice(
          vi
            ? `Đã áp ${ideaResult.applied} ý và ${cms.applied} mục khác${ideaResult.skipped + cms.skipped ? `. Bỏ ${ideaResult.skipped + cms.skipped}` : ""}.`
            : `Applied ${ideaResult.applied} ideas and ${cms.applied} other items.`,
        );
        setPaste("");
        return true;
      }
    } catch {
      // not JSON, fall through to the idea block parser
    }
    const result = importRaw(source, lang);
    if (!result.ok) {
      setNotice(result.error);
      return false;
    }
    setNotice(
      vi
        ? `Đã áp ${result.applied} thẻ${result.skipped ? `. Bỏ ${result.skipped} id không có trong sổ` : ""}.`
        : `Applied ${result.applied}${result.skipped ? `. Skipped ${result.skipped} unknown ids` : ""}.`,
    );
    setPaste("");
    return true;
  }

  return (
    <div className="mx-auto max-w-5xl">
      <p className="text-xs tracking-widest text-muted">{vi ? "Sửa mọi chữ trong sổ" : "Edit every line in the book"}</p>
      <h1 className="mt-2 font-display text-4xl leading-tight">{vi ? "Quản lý nội dung" : "Content desk"}</h1>
      <p className="mt-3 max-w-2xl leading-relaxed">
        {vi
          ? "Một chỗ cho cả sổ: đầu khóa, đầu phần, đầu buổi, từng ý, và bài cũ. Sửa xong là trang đọc đổi ngay. Tải file, đưa mô hình, dán bản sửa lại. Giữ nguyên id."
          : "One desk for the whole book: course openers, parts, sessions, ideas, and the older lessons. A save shows up on the reading page at once. Download, let a model edit, paste it back. Keep the ids."}
      </p>
      <p className="mt-2 text-sm text-muted">
        {vi ? `${cards.length} ý · ${edited} ý đã sửa · ${cmsEditCount()} mục khác đã sửa` : `${cards.length} ideas · ${edited} idea edits · ${cmsEditCount()} other edits`}
      </p>

      <BridgePanel lang={lang} onApply={applyPaste} />

      <details className="mt-4 rounded-card border border-line p-4">
        <summary className="cursor-pointer text-sm">{vi ? "Quy tắc ghi trong file" : "Rules written into the file"}</summary>
        <pre className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-muted">{RAW_NOTE}</pre>
      </details>

      <div className="mt-4 flex flex-wrap gap-2">
        <button type="button" className="min-h-11 rounded-full bg-ink px-4 text-sm text-paper" onClick={() => download("so-muc-toan-bo.json", exportWhole(), "application/json")}>
          {vi ? "Tải toàn bộ sổ" : "Download the whole book"}
        </button>
        <button type="button" className="min-h-11 rounded-full border border-line px-4 text-sm" onClick={() => download("so-muc-y.json", exportJson("both"), "application/json")}>
          {vi ? "Chỉ tải các ý" : "Ideas only"}
        </button>
        <button type="button" className="min-h-11 rounded-full border border-line px-4 text-sm" onClick={() => download("so-muc-raw.txt", exportBlocks("both"), "text/plain")}>
          {vi ? "Tải khối chữ" : "Download text blocks"}
        </button>
        <label className="min-h-11 cursor-pointer rounded-full border border-line px-4 py-3 text-sm">
          {vi ? "Nhập tệp" : "Import a file"}
          <input
            className="sr-only"
            type="file"
            accept="application/json,text/plain,.json,.txt,.md"
            onChange={async (event) => {
              const file = event.target.files?.[0];
              event.target.value = "";
              if (!file) return;
              applyPaste(await file.text());
            }}
          />
        </label>
        <button
          type="button"
          className="min-h-11 rounded-full border border-line px-4 text-sm"
          onClick={() => {
            if (!armClear) {
              setArmClear(true);
              setNotice(vi ? "Bấm lần nữa để xóa mọi sửa trên máy này." : "Press again to drop every edit on this device.");
              return;
            }
            clearRaw();
            clearCms();
            setArmClear(false);
            setNotice(vi ? "Đã trở lại chữ in sẵn." : "Back to the printed text.");
          }}
        >
          {vi ? "Xóa mọi sửa" : "Clear edits"}
        </button>
      </div>

      <label className="mt-4 block text-sm">
        <span className="text-muted">{vi ? "Dán JSON hoặc khối CARD" : "Paste JSON or a CARD block"}</span>
        <textarea
          value={paste}
          onChange={(event) => setPaste(event.target.value)}
          className="mt-1 min-h-24 w-full rounded-card border border-line bg-card px-3 py-2 font-mono text-sm leading-relaxed outline-none"
          placeholder={'{"so-muc-cms":1,"ideas":[...],"heads":[...],"lessons":[...]}'}
        />
      </label>
      <button type="button" className="mt-2 min-h-11 rounded-full border border-line px-4 text-sm" onClick={() => applyPaste(paste)}>
        {vi ? "Áp dụng chữ dán" : "Apply the paste"}
      </button>
      {notice ? <p className="mt-3 text-sm">{notice}</p> : null}

      <div className="mt-6 flex flex-wrap gap-2">
        {tabs.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`min-h-11 rounded-full border px-4 text-sm ${tab === item.id ? "border-ink bg-ink text-paper" : "border-line"}`}
            onClick={() => {
              setTab(item.id);
              setFocusId("");
            }}
          >
            {vi ? item.vi : item.en}
          </button>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={vi ? "Tìm id hoặc câu" : "Find an id or a sentence"}
          className="min-h-11 min-w-0 flex-1 rounded-full border border-line bg-card px-4 text-sm outline-none"
        />
        <button
          type="button"
          className={`min-h-11 rounded-full border px-4 text-sm ${onlyEdited ? "border-ink bg-ink text-paper" : "border-line"}`}
          onClick={() => setOnlyEdited((value) => !value)}
        >
          {vi ? "Chỉ chỗ đã sửa" : "Edits only"}
        </button>
      </div>

      {tab !== "idea" ? <CmsPanel kind={tab} lang={lang} needle={query} onlyEdited={onlyEdited} focusId={focusId} /> : null}

      {tab === "idea" ? (
      <>
      <div className="mt-4 flex flex-wrap gap-2">
        <select
          value={courseId}
          onChange={(event) => setCourseId(event.target.value)}
          className="min-h-11 max-w-full rounded-full border border-line bg-card px-4 text-sm"
        >
          <option value="">{vi ? "Mọi khóa" : "All courses"}</option>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.title}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-[16rem_minmax(0,1fr)]">
        <ul className="max-h-80 overflow-auto rounded-card border border-line md:max-h-[70vh]">
          {filtered.map((item) => {
            const on = item.id === card?.id;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => setSelected(item.id)}
                  className={`block w-full min-h-11 px-3 py-2 text-left ${on ? "bg-ink text-paper" : ""}`}
                >
                  <span className="block text-sm font-medium">{item.title}</span>
                  <span className={`block text-xs ${on ? "text-paper" : "text-muted"}`}>
                    {item.id}
                    {item.edited ? (vi ? " · đã sửa" : " · edited") : ""}
                  </span>
                </button>
              </li>
            );
          })}
          {filtered.length === 0 ? <li className="p-3 text-sm text-muted">{vi ? "Không có ý nào khớp." : "Nothing matches."}</li> : null}
        </ul>

        {card && draft ? (
          <form
            className="min-w-0"
            onSubmit={(event) => {
              event.preventDefault();
              saveCard(card.id, lang, fromDraft(draft));
              setNotice(vi ? `Đã lưu ${card.id}.` : `Saved ${card.id}.`);
              setArmClear(false);
            }}
          >
            <p className="text-xs text-muted">{card.courseTitle}</p>
            <p className="mt-1 text-sm text-muted">{card.sessionTitle}</p>
            <p className="mt-1 font-mono text-sm">{card.id} · {lang}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link to="/khai-niem/$conceptId" params={{ conceptId: card.id }} className="inline-flex min-h-11 items-center text-sm text-accent underline">
                {vi ? "Đọc thẻ" : "Read the card"}
              </Link>
              <button
                type="button"
                className="min-h-11 rounded-full border border-line px-4 text-sm"
                onClick={() => {
                  const text = cardsToBlocks([{ ...card, place: `${card.courseTitle} / ${card.sessionTitle}` }]);
                  const slice = text.slice(text.indexOf("===== CARD")).trim();
                  void copyOut(slice, vi ? "Đã chép khối của ý này." : "Copied this idea.");
                }}
              >
                {vi ? "Chép khối ý này" : "Copy this idea"}
              </button>
              <button
                type="button"
                className="min-h-11 rounded-full border border-line px-4 text-sm"
                onClick={() => {
                  setRawPatch(card.id, lang, null);
                  setNotice(vi ? "Ý này về chữ in sẵn." : "This idea is back to the printed text.");
                }}
              >
                {vi ? "Bỏ sửa ý này" : "Revert this idea"}
              </button>
            </div>

            <div className="mt-4 space-y-4">
              {fields.map((field) => (
                <label key={field.key} className="block">
                  <span className="text-xs tracking-widest text-muted">{vi ? field.vi : field.en}</span>
                  <textarea
                    value={draft[field.key]}
                    onChange={(event) => setDraft({ ...draft, [field.key]: event.target.value })}
                    className={`mt-1 w-full rounded-card border border-line bg-card px-3 py-2 text-sm leading-relaxed outline-none ${field.tall ? "min-h-24" : "min-h-11"} ${field.mono ? "font-mono" : ""}`}
                  />
                </label>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button type="submit" className="min-h-11 rounded-full bg-ink px-4 text-sm text-paper">
                {vi ? "Lưu ý này" : "Save this idea"}
              </button>
              {dirty ? <span className="text-sm text-accent">{vi ? "Chưa lưu" : "Not saved"}</span> : null}
              {card.edited && !dirty ? <span className="text-sm text-muted">{vi ? "Đang đè bản in" : "Overriding the printed card"}</span> : null}
            </div>
          </form>
        ) : null}
      </div>
      </>
      ) : null}
    </div>
  );
}
