import { o as __toESM } from "../_runtime.mjs";
import { p as studyListTitle } from "./study-BtAMXX88.mjs";
import { r as courses } from "./catalog-DRaoKsF4.mjs";
import { n as courseCardIds, t as allCardIds } from "./course-cards-Bc29sLlz.mjs";
import { J as require_react, b as Link, q as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as useReview, u as recordAnswer } from "./toc-memory-Cwcczwc2.mjs";
import { a as getServerProgress, i as getProgress, m as subscribeProgress } from "./progress-BbLCT1Se.mjs";
import { c as loadSelfTest } from "./router-B7hNBnq3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/luyen-tap-DXIu0VfZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var text = {
	vi: {
		title: "Luyện tập",
		lead: "Chọn một khóa (hoặc tất cả), app trộn ngẫu nhiên các câu tự kiểm tra để bạn làm một lượt 10 câu.",
		all: "Tất cả khóa",
		go: "Bắt đầu 10 câu",
		wrongOnly: "Chỉ luyện lại câu từng sai",
		book: "Sổ câu hay sai",
		empty: "Chưa có câu nào sai. Tốt!",
		check: "Kiểm tra",
		right: "Đúng.",
		wrong: "Chưa đúng.",
		ans: "Đáp án",
		next: "Câu tiếp",
		finish: "Xem kết quả",
		score: (a, b) => `Đúng ${a}/${b} câu.`,
		again: "Làm lượt khác",
		open: "Mở thẻ",
		back: "Về trang chủ",
		none: "Không có câu phù hợp.",
		loading: "Đang tải…"
	},
	en: {
		title: "Practice",
		lead: "Pick a course (or all) and the app mixes self-test questions into a round of 10.",
		all: "All courses",
		go: "Start 10 questions",
		wrongOnly: "Only questions I got wrong",
		book: "Wrong-answer notebook",
		empty: "Nothing wrong yet. Nice!",
		check: "Check",
		right: "Correct.",
		wrong: "Not quite.",
		ans: "Answer",
		next: "Next",
		finish: "See result",
		score: (a, b) => `${a}/${b} correct.`,
		again: "Another round",
		open: "Open card",
		back: "Home",
		none: "No matching questions.",
		loading: "Loading…"
	}
};
var shuffle = (a) => {
	const r = [...a];
	for (let i = r.length - 1; i > 0; i -= 1) {
		const j = Math.floor(Math.random() * (i + 1));
		[r[i], r[j]] = [r[j], r[i]];
	}
	return r;
};
function Practice() {
	const lang = (0, import_react.useSyncExternalStore)(subscribeProgress, getProgress, getServerProgress).lang;
	const t = text[lang];
	const i = lang === "en" ? 1 : 0;
	const review = useReview();
	const [data, setData] = (0, import_react.useState)(null);
	const [course, setCourse] = (0, import_react.useState)("all");
	const [onlyWrong, setOnlyWrong] = (0, import_react.useState)(false);
	const [queue, setQueue] = (0, import_react.useState)(null);
	const [total, setTotal] = (0, import_react.useState)(0);
	const [good, setGood] = (0, import_react.useState)(0);
	const [pick, setPick] = (0, import_react.useState)(null);
	const [shown, setShown] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		loadSelfTest().then(setData);
	}, []);
	const wrongKeys = Object.entries(review).filter(([, e]) => e.b === 0).map(([k]) => k);
	const start = () => {
		var _data$id;
		if (!data) return;
		const ids = new Set(course === "all" ? allCardIds() : courseCardIds(course));
		let keys = [];
		if (onlyWrong) keys = wrongKeys.filter((k) => ids.has(k.split("#")[0]));
		else for (const id of ids) ((_data$id = data[id]) !== null && _data$id !== void 0 ? _data$id : []).forEach((_, ix) => keys.push(`${id}#${ix}`));
		const items = shuffle(keys).slice(0, 10).flatMap((k) => {
			var _data$id2;
			const [id, ix] = k.split("#");
			const q = (_data$id2 = data[id]) === null || _data$id2 === void 0 ? void 0 : _data$id2[Number(ix)];
			return q ? [{
				id,
				idx: Number(ix),
				q,
				order: shuffle([...q.o.keys()])
			}] : [];
		});
		setQueue(items);
		setTotal(items.length);
		setGood(0);
		setPick(null);
		setShown(false);
	};
	const cur = queue === null || queue === void 0 ? void 0 : queue[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-2xl px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "inline-flex min-h-11 items-center text-sm text-muted",
				children: ["← ", t.back]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 text-2xl font-semibold",
				children: t.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: t.lead
			}),
			!queue || queue.length === 0 && total === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: course,
						onChange: (e) => setCourse(e.target.value),
						className: "min-h-11 w-full rounded-card border border-line bg-paper px-3 text-sm",
						"aria-label": t.all,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "all",
							children: t.all
						}), courses.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: c.id,
							children: c.title
						}, c.id))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex min-h-11 items-center gap-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: onlyWrong,
								onChange: (e) => setOnlyWrong(e.target.checked),
								className: "size-5"
							}),
							" ",
							t.wrongOnly,
							" (",
							wrongKeys.length,
							")"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: !data,
						onClick: start,
						className: "min-h-12 w-full rounded-full bg-accent px-5 text-sm text-white disabled:opacity-40",
						children: data ? t.go : t.loading
					}),
					queue && total === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm",
						children: t.none
					}) : null
				]
			}) : !cur ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6 rounded-card border border-accent bg-card p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: t.score(good, total)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setQueue(null),
					className: "mt-3 min-h-11 rounded-full border border-line px-4",
					children: t.again
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted",
						children: [
							total - queue.length + 1,
							"/",
							total
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-medium leading-snug",
						children: cur.q.q[i]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 space-y-2",
						role: "radiogroup",
						children: cur.order.map((oi, pos) => {
							const sel = pick === oi;
							const cls = shown ? oi === cur.q.a ? "border-accent" : "border-line opacity-60" : sel ? "border-accent" : "border-line hover:bg-card";
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								role: "radio",
								"aria-checked": sel,
								disabled: shown,
								onClick: () => setPick(oi),
								className: `flex min-h-11 w-full items-start gap-2 rounded-card border px-3 py-2 text-left text-sm ${cls}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "shrink-0 font-mono text-muted",
									children: ["ABCD"[pos], "."]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: cur.q.o[oi][i] })]
							}, oi);
						})
					}),
					!shown ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: pick === null,
						onClick: () => {
							setShown(true);
							const ok = pick === cur.q.a;
							if (ok) setGood((g) => g + 1);
							recordAnswer(cur.id, cur.idx, ok);
						},
						className: "mt-3 min-h-11 rounded-full bg-accent px-5 text-sm text-white disabled:opacity-40",
						children: t.check
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 text-sm leading-relaxed",
						"aria-live": "polite",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: pick === cur.q.a ? t.right : `${t.wrong} ${t.ans}: ${"ABCD"[cur.order.indexOf(cur.q.a)]}.` }),
							" ",
							cur.q.w[i]
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex flex-wrap items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									setQueue((q) => q ? q.slice(1) : q);
									setPick(null);
									setShown(false);
								},
								className: "min-h-11 rounded-full border border-line px-4",
								children: queue.length > 1 ? t.next : t.finish
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/khai-niem/$conceptId",
								params: { conceptId: cur.id },
								className: "text-accent underline",
								children: [
									t.open,
									": ",
									studyListTitle(cur.id, lang)
								]
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-10 text-xs uppercase tracking-widest text-muted",
				children: t.book
			}),
			wrongKeys.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm",
				children: t.empty
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 space-y-2 text-sm",
				children: wrongKeys.map((k) => {
					var _data$id3;
					const [id, ix] = k.split("#");
					const q = data === null || data === void 0 || (_data$id3 = data[id]) === null || _data$id3 === void 0 ? void 0 : _data$id3[Number(ix)];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-card border border-line p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/khai-niem/$conceptId",
							params: { conceptId: id },
							className: "text-accent underline",
							children: studyListTitle(id, lang)
						}), q ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-muted",
							children: q.q[i]
						}) : null]
					}, k);
				})
			})
		]
	});
}
//#endregion
export { Practice as component };
