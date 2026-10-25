import { o as __toESM } from "../_runtime.mjs";
import { a as getCourse, c as lessons, o as getLesson } from "./catalog-DhneT6we.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as subscribeRaw, F as getRawVersion, H as sessionConcepts, I as getServerRawVersion, O as subscribeProgress, R as rawIsEdited, b as getServerProgress, g as subscribeCms, j as studyListTitle, m as getServerCmsVersion, n as Route, p as getCmsVersion, w as lessonStatus, y as getProgress } from "./router-wfChfhbC.mjs";
import { i as liveCourse, o as liveModule, s as liveSession } from "./cms-live-BOICpRyN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/khoa._courseId-DQRZmC9j.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var trackOnly = /* @__PURE__ */ new Set([
	"Inferential Statistics",
	"Hypothesis Testing",
	"Exploratory Data Analysis",
	"Database Design and Introduction to MySQL",
	"Advanced SQL and Best Practices",
	"Linear Regression",
	"Logistic Regression",
	"Classification using Decision Trees",
	"Unsupervised Learning: Clustering",
	"Basics of NLP and Text Mining",
	"Business Problem Solving",
	"Bagging and Random Forests",
	"Model Selection - I",
	"Model Selection - II",
	"Time Series Forecasting - I",
	"Time Series Forecasting - II"
]);
function CoursePage() {
	const progress = (0, import_react.useSyncExternalStore)(subscribeProgress, getProgress, getServerProgress);
	(0, import_react.useSyncExternalStore)(subscribeRaw, getRawVersion, getServerRawVersion);
	(0, import_react.useSyncExternalStore)(subscribeCms, getCmsVersion, getServerCmsVersion);
	const lang = progress.lang;
	const { courseId } = Route.useParams();
	const course = getCourse(courseId);
	if (!course) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: lang === "en" ? "This course is missing." : "Không thấy khóa này." });
	const courseLessonIds = new Set(lessons.filter((lesson) => lesson.courseId === course.id).map((lesson) => lesson.id));
	const head = liveCourse(course.id, lang);
	const opener = lang === "en" ? {
		course: "Course opener",
		part: "Part opener",
		contents: "Contents",
		why: "What you use it for",
		prior: "How it links",
		ideas: "The ideas",
		learn: "Open"
	} : {
		course: "Đầu khóa",
		part: "Đầu phần",
		contents: "Mục lục",
		why: "Biết để làm gì",
		prior: "Nối với cái trước",
		ideas: "Các ý",
		learn: "Học"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-widest text-muted",
				children: opener.course
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl leading-tight",
				children: course.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-lg leading-relaxed",
				children: head.plain
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-4 rounded-card border border-line bg-card p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs tracking-widest text-accent",
					children: opener.why
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 leading-relaxed",
					children: head.why
				})]
			}),
			head.prior ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 leading-relaxed",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-xs tracking-widest text-muted",
					children: [opener.prior, ". "]
				}), head.prior]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/goc",
				hash: `course:${course.id}`,
				className: "mt-3 inline-block text-sm text-accent underline",
				children: lang === "en" ? "Edit this opener" : "Sửa đầu khóa"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-8 text-xs tracking-widest text-muted",
				children: opener.contents
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-3 space-y-3",
				children: course.modules.map((mod, index) => {
					const modHead = liveModule(course.id, mod.title, lang);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `#mod-${mod.id}`,
						className: "block min-h-11 rounded-card border border-line px-4 py-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs tracking-widest text-muted",
								children: [index + 1, mod.optional ? " · optional" : ""]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block font-medium",
								children: mod.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-sm text-muted",
								children: modHead.why
							})
						]
					}) }, mod.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 space-y-12",
				children: course.modules.map((mod, index) => {
					const modHead = liveModule(course.id, mod.title, lang);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: `mod-${mod.id}`,
						className: "scroll-mt-32",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs tracking-widest text-accent",
								children: [
									opener.part,
									" · ",
									index + 1,
									mod.optional ? " · optional" : ""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-display text-3xl leading-tight",
								children: mod.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 leading-relaxed",
								children: modHead.plain
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 leading-relaxed",
								children: modHead.why
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted",
								children: modHead.prior
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/goc",
								hash: `module:${course.id}||${mod.title}`,
								className: "mt-2 inline-block text-sm text-accent underline",
								children: lang === "en" ? "Edit this part" : "Sửa đầu phần"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 text-xs tracking-widest text-muted",
								children: opener.contents
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "mt-3 space-y-4",
								children: mod.sessions.map((session) => {
									const blurb = liveSession(course.id, mod.title, session.title, lang);
									const ids = sessionConcepts[session.id] ?? [];
									const showLessons = ids.filter((id) => !id.startsWith("d-")).length === 0 && !trackOnly.has(mod.title);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										id: `ses-${session.id}`,
										className: "scroll-mt-32 rounded-card border border-line p-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-sm text-muted",
												children: [session.title, session.optional ? " · optional" : ""]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 leading-relaxed",
												children: blurb
											}),
											ids.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "mt-3 space-y-1",
												children: ids.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
													to: "/khai-niem/$conceptId",
													params: { conceptId: id },
													className: "flex min-h-11 items-baseline justify-between gap-3 py-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "font-medium",
														children: [studyListTitle(id, lang), rawIsEdited(id, lang) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "ml-2 text-xs font-normal text-accent",
															children: lang === "en" ? "edited" : "đã sửa"
														}) : null]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "shrink-0 text-xs tracking-widest text-accent",
														children: opener.learn
													})]
												}) }, id))
											}) : null,
											showLessons ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "mt-3 space-y-2",
												children: session.lessonIds.filter((id) => courseLessonIds.has(id)).map((id) => {
													const lesson = getLesson(id);
													if (!lesson) return null;
													const status = lessonStatus(id);
													return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
														to: "/bai/$lessonId",
														params: { lessonId: id },
														className: "flex min-h-11 items-baseline justify-between gap-3",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-medium",
															children: lesson.title
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "shrink-0 text-xs tracking-widest text-muted",
															children: status === "seen" ? lang === "en" ? "Seen" : "Đã xem" : status === "viewing" ? lang === "en" ? "Reading" : "Đang xem" : lang === "en" ? "Not yet" : "Chưa xem"
														})]
													}) }, id);
												})
											}) : null
										]
									}, session.id);
								})
							})
						]
					}, mod.id);
				})
			})
		]
	});
}
//#endregion
export { CoursePage as component };
