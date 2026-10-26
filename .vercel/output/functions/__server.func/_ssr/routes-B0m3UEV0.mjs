import { o as __toESM } from "../_runtime.mjs";
import { d as stats, o as getLesson, r as courses } from "./catalog-DhneT6we.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as getServerCmsVersion, J as setOpenCourse, M as subscribeCms, Y as useTocMemory, a as CoverInfo, b as subscribeProgress, c as words, d as getProgress, f as getServerProgress, k as getCmsVersion, l as countSeen, m as importProgress, o as Disclosure, p as hydrateProgress, q as sessionConcepts, s as ModuleTree, w as liveCourse, y as progressSnapshot } from "./router-9fV-CodP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B0m3UEV0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-8 text-xs tracking-widest text-muted",
				children: lang === "en" ? "Contents" : "Mục lục"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-2 divide-y divide-line border-y border-line",
				children: courses.map((course, index) => {
					const head = liveCourse(course.id, lang);
					const ideas = course.modules.reduce((sum, mod) => sum + mod.sessions.reduce((inner, session) => inner + (sessionConcepts[session.id]?.length ?? 0), 0), 0);
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
								children: words[lang].page
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
								const file = event.target.files?.[0];
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
