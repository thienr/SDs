import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { studyListTitle } from "@/data/study";
import { courses } from "@/lib/catalog";
import { courseCardIds } from "@/lib/course-cards";
import { getDone, isDone } from "@/lib/done";
import { loadAudio, pickVoice, segments, type Audio } from "@/lib/listen";
import { getProgress, getServerProgress, subscribeProgress } from "@/lib/progress";

export const Route = createFileRoute("/nghe")({
  component: Listen,
  validateSearch: (s: Record<string, unknown>) => ({ c: typeof s.c === "string" ? s.c : undefined }),
});

const SPEEDS = [0.8, 1, 1.15, 1.3, 1.5];

function Listen() {
  const progress = useSyncExternalStore(subscribeProgress, getProgress, getServerProgress);
  const lang = progress.lang;
  const vi = lang !== "en";
  const { c } = Route.useSearch();
  const [data, setData] = useState<Record<string, Audio> | null>(null);
  const [course, setCourse] = useState("all");
  const [skipDone, setSkipDone] = useState(true);
  const [wait, setWait] = useState(6);
  const [rate, setRate] = useState(1);
  const [list, setList] = useState<string[]>([]);
  const [pos, setPos] = useState(0);
  const [playing, setPlaying] = useState(false);
  const token = useRef(0);
  const supported = typeof speechSynthesis !== "undefined";

  useEffect(() => { void loadAudio().then(setData); }, []);

  const build = useCallback(() => {
    if (!data) return [] as string[];
    if (c && data[c]) return [c];
    const done = getDone();
    const ids = course === "all" ? courses.flatMap((x) => courseCardIds(x.id)) : courseCardIds(course);
    return ids.filter((id) => data[id] && !(skipDone && isDone(done, id)));
  }, [data, course, skipDone, c]);

  useEffect(() => { setList(build()); setPos(0); }, [build]);

  const stop = useCallback(() => { token.current += 1; if (supported) speechSynthesis.cancel(); setPlaying(false); }, [supported]);
  useEffect(() => stop, [stop]);

  const play = useCallback((from: number) => {
    if (!data || !supported || !list[from]) return;
    const my = ++token.current;
    speechSynthesis.cancel();
    setPos(from); setPlaying(true);
    const id = list[from];
    const segs = segments(studyListTitle(id, "vi"), data[id], wait * 1000);
    const voice = pickVoice();
    const next = (i: number) => {
      if (my !== token.current) return;
      if (i >= segs.length) { if (from + 1 < list.length) play(from + 1); else setPlaying(false); return; }
      const u = new SpeechSynthesisUtterance(segs[i].text);
      u.lang = "vi-VN"; if (voice) u.voice = voice; u.rate = rate;
      u.onend = () => setTimeout(() => next(i + 1), segs[i].pause);
      u.onerror = () => { if (my === token.current) setPlaying(false); };
      speechSynthesis.speak(u);
    };
    next(0);
    if ("mediaSession" in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({ title: studyListTitle(id, "vi"), artist: "Sổ Mực" });
      navigator.mediaSession.setActionHandler("nexttrack", () => play(Math.min(from + 1, list.length - 1)));
      navigator.mediaSession.setActionHandler("previoustrack", () => play(Math.max(from - 1, 0)));
      navigator.mediaSession.setActionHandler("pause", stop);
    }
  }, [data, list, rate, wait, supported, stop]);

  const cur = list[pos];
  const btn = "min-h-12 rounded-full border border-line px-5 text-sm disabled:opacity-40";
  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <Link to="/" className="inline-flex min-h-11 items-center text-sm text-muted">← {vi ? "Về trang chủ" : "Home"}</Link>
      <h1 className="mt-2 text-2xl font-semibold">{vi ? "Nghe học" : "Listen"}</h1>
      <p className="mt-2 text-sm text-muted">{vi ? "Mỗi thẻ có một bài nghe riêng, viết lại để nghe cho dễ hiểu (khoảng 1 phút), kèm một câu hỏi nhanh. App đọc bằng giọng có sẵn của máy, không tốn dữ liệu." : "Each card has a short spoken version plus a quick question. Uses your device's voice."}</p>
      {!supported ? <p className="mt-4 text-sm text-red-600">{vi ? "Trình duyệt này không hỗ trợ đọc thành tiếng." : "Speech is not supported here."}</p> : null}

      {!c ? (
        <div className="mt-5 space-y-3">
          <select value={course} onChange={(e) => { stop(); setCourse(e.target.value); }} className="min-h-11 w-full rounded-card border border-line bg-paper px-3 text-sm" aria-label={vi ? "Khóa" : "Course"}>
            <option value="all">{vi ? "Tất cả khóa" : "All courses"}</option>
            {courses.map((x) => <option key={x.id} value={x.id}>{x.title}</option>)}
          </select>
          <label className="flex min-h-11 items-center gap-2 text-sm"><input type="checkbox" className="size-5" checked={skipDone} onChange={(e) => setSkipDone(e.target.checked)} /> {vi ? "Bỏ qua thẻ đã đánh dấu đã học" : "Skip cards marked learned"}</label>
        </div>
      ) : null}

      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
        <label className="flex items-center gap-2">{vi ? "Tốc độ" : "Speed"}
          <select value={rate} onChange={(e) => setRate(Number(e.target.value))} className="min-h-11 rounded-card border border-line bg-paper px-2">{SPEEDS.map((s) => <option key={s} value={s}>{s}x</option>)}</select>
        </label>
        <label className="flex items-center gap-2">{vi ? "Chờ trả lời" : "Answer pause"}
          <select value={wait} onChange={(e) => setWait(Number(e.target.value))} className="min-h-11 rounded-card border border-line bg-paper px-2">{[3, 6, 10].map((s) => <option key={s} value={s}>{s}s</option>)}</select>
        </label>
      </div>

      <section className="mt-6 rounded-card border border-accent bg-card p-4" aria-live="polite">
        {!data ? <p className="text-sm">{vi ? "Đang tải…" : "Loading…"}</p> : !cur ? <p className="text-sm">{vi ? "Không còn thẻ nào để nghe trong lựa chọn này." : "Nothing to listen to here."}</p> : (
          <>
            <p className="text-xs text-muted">{pos + 1}/{list.length}</p>
            <p className="mt-1 font-medium leading-snug">{studyListTitle(cur, "vi")}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <button type="button" className={btn} disabled={pos === 0} onClick={() => (playing ? play(pos - 1) : setPos(pos - 1))}>⏮</button>
              {playing ? <button type="button" className={`${btn} bg-accent text-white`} onClick={stop}>{vi ? "Dừng" : "Pause"}</button> : <button type="button" className={`${btn} bg-accent text-white`} disabled={!supported} onClick={() => play(pos)}>{vi ? "Nghe" : "Play"}</button>}
              <button type="button" className={btn} disabled={pos + 1 >= list.length} onClick={() => (playing ? play(pos + 1) : setPos(pos + 1))}>⏭</button>
            </div>
            <Link to="/khai-niem/$conceptId" params={{ conceptId: cur }} className="mt-3 inline-block text-sm text-accent underline">{vi ? "Mở thẻ để đọc" : "Open card"}</Link>
          </>
        )}
      </section>
      <p className="mt-4 text-xs text-muted">{vi ? "Lưu ý: iPhone và một số máy Android sẽ dừng đọc khi khóa màn hình. Để nghe liên tục, giữ màn hình sáng hoặc dùng Chrome trên Android." : "Note: some phones stop speech when the screen locks."}</p>
    </main>
  );
}
