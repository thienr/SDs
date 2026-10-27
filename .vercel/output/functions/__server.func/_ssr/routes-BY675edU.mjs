import { o as __toESM } from "../_runtime.mjs";
import { d as stats, o as getLesson, r as courses } from "./catalog-DRaoKsF4.mjs";
import { o as getCmsVersion, s as getServerCmsVersion, u as subscribeCms } from "./cms-store-QsPjr5VR.mjs";
import { a as liveCourse } from "./cms-live-BOSWGilr.mjs";
import { a as getServerProgress, f as progressSnapshot, i as getProgress, m as subscribeProgress, n as countSeen, o as hydrateProgress, s as importProgress } from "./progress-BbLCT1Se.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as sessionConcepts, M as setOpenCourse, N as useTocMemory, d as Disclosure, f as ModuleTree, g as useReview, h as recordAnswer, k as studyListTitle, m as dueKeys, p as words$1, u as CoverInfo } from "./router-DCdNt3Gq.mjs";
import { t as loadSelfTest } from "./self-test-data-D_-Lu4LK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BY675edU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var words = {
	vi: {
		head: "Ôn lại hôm nay",
		left: (n) => `Còn ${n} câu đến hạn`,
		check: "Kiểm tra",
		right: "Đúng.",
		wrong: "Chưa đúng.",
		ans: "Đáp án",
		next: "Câu tiếp",
		done: "Xong lượt ôn. Quay lại ngày mai.",
		open: "Mở thẻ",
		none: "Chưa có câu nào đến hạn. Làm phần «Tự kiểm tra» ở cuối thẻ để app hẹn ngày ôn lại."
	},
	en: {
		head: "Review today",
		left: (n) => `${n} due`,
		check: "Check",
		right: "Correct.",
		wrong: "Not quite.",
		ans: "Answer",
		next: "Next",
		done: "Round done. Come back tomorrow.",
		open: "Open card",
		none: "Nothing due yet. Do the «Check yourself» part at the end of a card and the app will schedule a review."
	}
};
function shuffle(n) {
	const a = [...Array(n).keys()];
	for (let i = n - 1; i > 0; i -= 1) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}
function ReviewPanel({ lang }) {
	const map = useReview();
	const t = words[lang];
	const i = lang === "en" ? 1 : 0;
	const [data, setData] = (0, import_react.useState)(null);
	const [queue, setQueue] = (0, import_react.useState)(null);
	const [pick, setPick] = (0, import_react.useState)(null);
	const [shown, setShown] = (0, import_react.useState)(false);
	const [total, setTotal] = (0, import_react.useState)(0);
	const has = Object.keys(map).length > 0;
	(0, import_react.useEffect)(() => {
		if (has) loadSelfTest().then(setData);
	}, [has]);
	const first = (0, import_react.useMemo)(() => {
		if (!data || queue) return null;
		return dueKeys(map, 5).map((key) => {
			var _data$id;
			const [id, ix] = key.split("#");
			const q = (_data$id = data[id]) === null || _data$id === void 0 ? void 0 : _data$id[Number(ix)];
			return q ? {
				id,
				idx: Number(ix),
				q,
				order: shuffle(q.o.length)
			} : null;
		}).filter((x) => x !== null);
	}, [
		data,
		queue,
		map
	]);
	(0, import_react.useEffect)(() => {
		if (first && !queue) {
			setQueue(first);
			setTotal(first.length);
		}
	}, [first, queue]);
	if (!has) return null;
	const cur = queue === null || queue === void 0 ? void 0 : queue[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-8 rounded-card border border-accent bg-card p-4",
		"aria-label": t.head,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-baseline justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xs uppercase tracking-widest text-accent",
				children: t.head
			}), queue && cur ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs text-muted",
				children: t.left(queue.length)
			}) : null]
		}), !queue ? null : !cur ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm",
			children: total > 0 ? t.done : t.none
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium leading-snug",
					children: cur.q.q[i]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 space-y-2",
					role: "radiogroup",
					children: cur.order.map((oi, pos) => {
						const sel = pick === oi;
						const cls = shown ? oi === cur.q.a ? "border-accent" : sel ? "border-line opacity-60 line-through" : "border-line opacity-60" : sel ? "border-accent" : "border-line hover:bg-paper";
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
						recordAnswer(cur.id, cur.idx, pick === cur.q.a);
					},
					className: "mt-3 inline-flex min-h-11 items-center rounded-full bg-accent px-5 text-sm text-white disabled:opacity-40",
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
							className: "min-h-11 rounded-full border border-line px-4 hover:bg-paper",
							children: t.next
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
		})]
	});
}
function Home() {
	const progress = (0, import_react.useSyncExternalStore)(subscribeProgress, getProgress, getServerProgress);
	(0, import_react.useSyncExternalStore)(subscribeCms, getCmsVersion, getServerCmsVersion);
	const lang = progress.lang;
	const [notice, setNotice] = (0, import_react.useState)("");
	const openCourse = useTocMemory().course;
	(0, import_react.useEffect)(() => {
		hydrateProgress();
	}, []);
	const counts = countSeen();
	const last = progress.lastLessonId ? getLesson(progress.lastLessonId) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-widest text-muted",
				children: "Business Analytics"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-5xl leading-none",
				children: "Sổ Mực"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-xl text-lg leading-relaxed",
				children: lang === "en" ? `Courses follow the syllabus order. Open a course, then a session, then one idea. No quiz. ${stats.items} upGrad items still sit behind the older lessons.` : `Các khóa đi đúng thứ tự giáo trình. Mở một khóa, rồi một buổi, rồi một ý. Không có bài kiểm tra. ${stats.items} mục upGrad vẫn nằm ở các bài cũ.`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: lang === "en" ? `Seen ${counts.seen}/${counts.total} items · reading ${counts.viewing}` : `Đã xem ${counts.seen}/${counts.total} mục · đang xem ${counts.viewing}`
			}),
			last ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/bai/$lessonId",
				params: { lessonId: last.id },
				className: "mt-4 block rounded-card border border-line bg-card p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-accent",
						children: lang === "en" ? "Continue" : "Tiếp tục"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-medium",
						children: last.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: last.courseTitle
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewPanel, { lang }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-8 text-xs tracking-widest text-muted",
				children: lang === "en" ? "Contents" : "Mục lục"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-2 divide-y divide-line border-y border-line",
				children: courses.map((course, index) => {
					const head = liveCourse(course.id, lang);
					const ideas = course.modules.reduce((sum, mod) => sum + mod.sessions.reduce((inner, session) => {
						var _sessionConcepts$sess, _sessionConcepts$sess2;
						return inner + ((_sessionConcepts$sess = (_sessionConcepts$sess2 = sessionConcepts[session.id]) === null || _sessionConcepts$sess2 === void 0 ? void 0 : _sessionConcepts$sess2.length) !== null && _sessionConcepts$sess !== void 0 ? _sessionConcepts$sess : 0);
					}, 0), 0);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Disclosure, {
						open: openCourse === course.id,
						onToggle: () => setOpenCourse(openCourse === course.id ? "" : course.id),
						head: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "block py-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs text-muted",
									children: [
										String(index + 1).padStart(2, "0"),
										course.optional ? " · optional" : "",
										" · ",
										ideas,
										" ",
										lang === "en" ? "ideas" : "ý"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block font-medium",
									children: course.title
								}),
								openCourse !== course.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-sm text-muted",
									children: head.why
								}) : null
							]
						}),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoverInfo, {
								plain: head.plain,
								why: head.why,
								prior: head.prior,
								lang,
								editHash: `course:${course.id}`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/khoa/$courseId",
								params: { courseId: course.id },
								className: "mb-2 inline-flex min-h-11 items-center text-sm text-accent underline",
								children: words$1[lang].page
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModuleTree, {
								course,
								lang
							})
						]
					}) }, course.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/tu-dien",
						className: "min-h-11 rounded-full border border-line px-4 py-3 text-sm",
						children: "Từ điển"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/dong-bo",
						className: "min-h-11 rounded-full border border-line px-4 py-3 text-sm",
						children: lang === "en" ? "Sync devices" : "Đồng bộ máy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/goc",
						className: "min-h-11 rounded-full border border-line px-4 py-3 text-sm",
						children: "Quản lý nội dung"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-11 rounded-full border border-line px-4 text-sm",
						onClick: () => {
							const blob = new Blob([progressSnapshot()], { type: "application/json" });
							const url = URL.createObjectURL(blob);
							const a = document.createElement("a");
							a.href = url;
							a.download = "so-muc-tien-do.json";
							a.click();
							URL.revokeObjectURL(url);
						},
						children: "Xuất tiến độ"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "min-h-11 cursor-pointer rounded-full border border-line px-4 py-3 text-sm",
						children: ["Nhập tiến độ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "sr-only",
							type: "file",
							accept: "application/json",
							onChange: async (event) => {
								var _event$target$files;
								const file = (_event$target$files = event.target.files) === null || _event$target$files === void 0 ? void 0 : _event$target$files[0];
								if (!file) return;
								try {
									importProgress(await file.text());
									setNotice("Đã nhập tiến độ.");
								} catch {
									setNotice("Không đọc được tệp.");
								}
							}
						})]
					})
				]
			}),
			notice ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm",
				children: notice
			}) : null
		]
	});
}
//#endregion
export { Home as component };
