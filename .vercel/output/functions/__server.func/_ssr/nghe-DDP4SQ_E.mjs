import { o as __toESM } from "../_runtime.mjs";
import { p as studyListTitle } from "./study-BtAMXX88.mjs";
import { r as courses } from "./catalog-DRaoKsF4.mjs";
import { n as courseCardIds } from "./course-cards-Bc29sLlz.mjs";
import { J as require_react, b as Link, q as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { h as isDone, m as getDone } from "./toc-memory-Cwcczwc2.mjs";
import { a as getServerProgress, i as getProgress, m as subscribeProgress } from "./progress-BbLCT1Se.mjs";
import { a as Route$8 } from "./router-B7hNBnq3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/nghe-DDP4SQ_E.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var cache = null;
var loadAudio = () => {
	var _cache;
	return (_cache = cache) !== null && _cache !== void 0 ? _cache : cache = import("./audio-CB2C-30s.mjs").then((m) => m.default);
};
/** Cắt bài nghe thành câu ngắn: Chrome hay tự dừng khi một lần đọc quá dài. */
function segments(title, a, waitMs = 6e3) {
	const out = [{
		text: title,
		pause: 600
	}];
	for (const part of a.s.split(new RegExp("(?<=[.!?…])\\s+", ""))) if (part.trim()) out.push({
		text: part.trim(),
		pause: 250
	});
	out.push({
		text: `Câu hỏi nhanh. ${a.q}`,
		pause: waitMs
	});
	out.push({
		text: `Đáp án. ${a.a}`,
		pause: 1200
	});
	return out;
}
function pickVoice() {
	var _vs$find;
	if (typeof speechSynthesis === "undefined") return null;
	return (_vs$find = speechSynthesis.getVoices().find((v) => v.lang.toLowerCase().startsWith("vi"))) !== null && _vs$find !== void 0 ? _vs$find : null;
}
var SPEEDS = [
	.8,
	1,
	1.15,
	1.3,
	1.5
];
function Listen() {
	const vi = (0, import_react.useSyncExternalStore)(subscribeProgress, getProgress, getServerProgress).lang !== "en";
	const { c } = Route$8.useSearch();
	const [data, setData] = (0, import_react.useState)(null);
	const [course, setCourse] = (0, import_react.useState)("all");
	const [skipDone, setSkipDone] = (0, import_react.useState)(true);
	const [wait, setWait] = (0, import_react.useState)(6);
	const [rate, setRate] = (0, import_react.useState)(1);
	const [list, setList] = (0, import_react.useState)([]);
	const [pos, setPos] = (0, import_react.useState)(0);
	const [playing, setPlaying] = (0, import_react.useState)(false);
	const token = (0, import_react.useRef)(0);
	const supported = typeof speechSynthesis !== "undefined";
	(0, import_react.useEffect)(() => {
		loadAudio().then(setData);
	}, []);
	const build = (0, import_react.useCallback)(() => {
		if (!data) return [];
		if (c && data[c]) return [c];
		const done = getDone();
		return (course === "all" ? courses.flatMap((x) => courseCardIds(x.id)) : courseCardIds(course)).filter((id) => data[id] && !(skipDone && isDone(done, id)));
	}, [
		data,
		course,
		skipDone,
		c
	]);
	(0, import_react.useEffect)(() => {
		setList(build());
		setPos(0);
	}, [build]);
	const stop = (0, import_react.useCallback)(() => {
		token.current += 1;
		if (supported) speechSynthesis.cancel();
		setPlaying(false);
	}, [supported]);
	(0, import_react.useEffect)(() => stop, [stop]);
	const play = (0, import_react.useCallback)((from) => {
		if (!data || !supported || !list[from]) return;
		const my = ++token.current;
		speechSynthesis.cancel();
		setPos(from);
		setPlaying(true);
		const id = list[from];
		const segs = segments(studyListTitle(id, "vi"), data[id], wait * 1e3);
		const voice = pickVoice();
		const next = (i) => {
			if (my !== token.current) return;
			if (i >= segs.length) {
				if (from + 1 < list.length) play(from + 1);
				else setPlaying(false);
				return;
			}
			const u = new SpeechSynthesisUtterance(segs[i].text);
			u.lang = "vi-VN";
			if (voice) u.voice = voice;
			u.rate = rate;
			u.onend = () => setTimeout(() => next(i + 1), segs[i].pause);
			u.onerror = () => {
				if (my === token.current) setPlaying(false);
			};
			speechSynthesis.speak(u);
		};
		next(0);
		if ("mediaSession" in navigator) {
			navigator.mediaSession.metadata = new MediaMetadata({
				title: studyListTitle(id, "vi"),
				artist: "Sổ Mực"
			});
			navigator.mediaSession.setActionHandler("nexttrack", () => play(Math.min(from + 1, list.length - 1)));
			navigator.mediaSession.setActionHandler("previoustrack", () => play(Math.max(from - 1, 0)));
			navigator.mediaSession.setActionHandler("pause", stop);
		}
	}, [
		data,
		list,
		rate,
		wait,
		supported,
		stop
	]);
	const cur = list[pos];
	const btn = "min-h-12 rounded-full border border-line px-5 text-sm disabled:opacity-40";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-2xl px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "inline-flex min-h-11 items-center text-sm text-muted",
				children: ["← ", vi ? "Về trang chủ" : "Home"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 text-2xl font-semibold",
				children: vi ? "Nghe học" : "Listen"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: vi ? "Mỗi thẻ có một bài nghe riêng, viết lại để nghe cho dễ hiểu (khoảng 1 phút), kèm một câu hỏi nhanh. App đọc bằng giọng có sẵn của máy, không tốn dữ liệu." : "Each card has a short spoken version plus a quick question. Uses your device's voice."
			}),
			!supported ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-red-600",
				children: vi ? "Trình duyệt này không hỗ trợ đọc thành tiếng." : "Speech is not supported here."
			}) : null,
			!c ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					value: course,
					onChange: (e) => {
						stop();
						setCourse(e.target.value);
					},
					className: "min-h-11 w-full rounded-card border border-line bg-paper px-3 text-sm",
					"aria-label": vi ? "Khóa" : "Course",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "all",
						children: vi ? "Tất cả khóa" : "All courses"
					}), courses.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: x.id,
						children: x.title
					}, x.id))]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex min-h-11 items-center gap-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							className: "size-5",
							checked: skipDone,
							onChange: (e) => setSkipDone(e.target.checked)
						}),
						" ",
						vi ? "Bỏ qua thẻ đã đánh dấu đã học" : "Skip cards marked learned"
					]
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap items-center gap-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-2",
					children: [vi ? "Tốc độ" : "Speed", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						value: rate,
						onChange: (e) => setRate(Number(e.target.value)),
						className: "min-h-11 rounded-card border border-line bg-paper px-2",
						children: SPEEDS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
							value: s,
							children: [s, "x"]
						}, s))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-2",
					children: [vi ? "Chờ trả lời" : "Answer pause", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						value: wait,
						onChange: (e) => setWait(Number(e.target.value)),
						className: "min-h-11 rounded-card border border-line bg-paper px-2",
						children: [
							3,
							6,
							10
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
							value: s,
							children: [s, "s"]
						}, s))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-6 rounded-card border border-accent bg-card p-4",
				"aria-live": "polite",
				children: !data ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm",
					children: vi ? "Đang tải…" : "Loading…"
				}) : !cur ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm",
					children: vi ? "Không còn thẻ nào để nghe trong lựa chọn này." : "Nothing to listen to here."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted",
						children: [
							pos + 1,
							"/",
							list.length
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-medium leading-snug",
						children: studyListTitle(cur, "vi")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: btn,
								disabled: pos === 0,
								onClick: () => playing ? play(pos - 1) : setPos(pos - 1),
								children: "⏮"
							}),
							playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: `${btn} bg-accent text-white`,
								onClick: stop,
								children: vi ? "Dừng" : "Pause"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: `${btn} bg-accent text-white`,
								disabled: !supported,
								onClick: () => play(pos),
								children: vi ? "Nghe" : "Play"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: btn,
								disabled: pos + 1 >= list.length,
								onClick: () => playing ? play(pos + 1) : setPos(pos + 1),
								children: "⏭"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/khai-niem/$conceptId",
						params: { conceptId: cur },
						className: "mt-3 inline-block text-sm text-accent underline",
						children: vi ? "Mở thẻ để đọc" : "Open card"
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-xs text-muted",
				children: vi ? "Lưu ý: iPhone và một số máy Android sẽ dừng đọc khi khóa màn hình. Để nghe liên tục, giữ màn hình sáng hoặc dùng Chrome trên Android." : "Note: some phones stop speech when the screen locks."
			})
		]
	});
}
//#endregion
export { Listen as component };
