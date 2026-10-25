import { o as __toESM } from "../_runtime.mjs";
import { a as getLesson, c as neighbors, r as formatMinutes, t as block } from "./catalog-BobPw5DT.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as Circle, p as Check } from "../_libs/lucide-react.mjs";
import { C as itemStatus, E as openLesson, O as subscribeProgress, T as markLesson, b as getServerProgress, g as subscribeCms, i as Route$2, m as getServerCmsVersion, p as getCmsVersion, v as cycleItem, w as lessonStatus, y as getProgress } from "./router-BJ4vBz0O.mjs";
import { r as Sim } from "./labs-DBcEdh9D.mjs";
import { n as maybeTex, t as Tex } from "./tex-t3KOuum9.mjs";
import { a as liveLesson } from "./cms-live-DjmzNLTd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bai._lessonId-5h9fX78y.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var labels = {
	situation: "Tình huống",
	problem: "Vấn đề",
	why: "Vì sao khái niệm này tồn tại",
	definition: "Định nghĩa",
	illustration: "Minh họa",
	pitfalls: "Đừng nhầm",
	insight: "Insight",
	sources: "Nguồn"
};
function statusLabel(status) {
	if (status === "seen") return "Đã xem";
	if (status === "viewing") return "Đang xem";
	return "Chưa xem";
}
function LessonView({ lesson }) {
	const progress = (0, import_react.useSyncExternalStore)(subscribeProgress, getProgress, getServerProgress);
	(0, import_react.useSyncExternalStore)(subscribeCms, getCmsVersion, getServerCmsVersion);
	const lang = progress.lang;
	const shown = liveLesson(lesson, lang);
	(0, import_react.useEffect)(() => {
		openLesson(shown.id);
	}, [shown.id]);
	const status = lessonStatus(shown.id);
	const near = neighbors(shown.id);
	const recall = shown.blocks.find((item) => item.type === "recall");
	const [ran, setRan] = (0, import_react.useState)(false);
	const [stepI, setStepI] = (0, import_react.useState)(0);
	const [pipeI, setPipeI] = (0, import_react.useState)(0);
	const illustration = block(shown, "illustration");
	const steps = illustration?.steps ?? [];
	const pipeline = illustration?.pipeline ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "reading mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-widest text-muted",
				children: shown.courseTitle
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm text-muted",
				children: [
					shown.moduleTitle,
					" · ",
					shown.sessionTitle
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl leading-tight",
				children: shown.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/goc",
				hash: `lesson:${shown.id}`,
				className: "mt-2 inline-block text-sm text-accent underline",
				children: lang === "en" ? "Edit this lesson" : "Sửa bài này"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm text-muted",
				children: [
					"Đọc khoảng ",
					shown.readMin,
					" phút · ",
					formatMinutes(shown.videoSec),
					" · ",
					statusLabel(status),
					shown.factId === "fallback" ? " · bản đồ buổi" : ""
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "min-h-11 rounded-full bg-accent px-4 text-sm text-accent-ink",
					onClick: () => markLesson(lesson.id, "seen"),
					children: lang === "en" ? "Mark seen" : "Đánh dấu đã xem"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "min-h-11 rounded-full border border-line px-4 text-sm",
					onClick: () => markLesson(lesson.id, "unseen"),
					children: lang === "en" ? "Mark unseen" : "Đặt lại chưa xem"
				})]
			}),
			recall && recall.type === "recall" && recall.links && recall.links.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "mt-6 rounded-card border border-line bg-card p-4 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-widest text-muted",
					children: "Cần nhớ lại"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 space-y-2",
					children: recall.links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/bai/$lessonId",
						params: { lessonId: link.lessonId },
						className: "underline",
						children: link.title
					}) }, link.lessonId))
				})]
			}) : null,
			shown.blocks.map((item) => {
				if (item.type === "recall") return null;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xs uppercase tracking-widest text-muted",
							children: labels[item.type]
						}),
						item.type === "situation" || item.type === "problem" || item.type === "why" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-lg leading-relaxed",
							children: item.text
						}) : null,
						item.type === "definition" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 space-y-3 text-lg leading-relaxed",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.plain }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.precise }),
								item.formula ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-card border border-line bg-card px-3 py-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
										tex: item.formula,
										block: true
									})
								}) : null,
								item.symbols.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-2 text-base",
									children: item.symbols.map((sym) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "shrink-0",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, { tex: sym.sym })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted",
											children: sym.meaning
										})]
									}, sym.sym))
								}) : null
							]
						}) : null,
						item.type === "illustration" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 space-y-4",
							children: [
								item.sim ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sim, { id: item.sim }) : null,
								pipeline.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-card border border-line p-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-sm text-muted",
											children: [
												"Bước ",
												pipeline[pipeI].n,
												". ",
												pipeline[pipeI].title
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-lg",
											children: pipeline[pipeI].body
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-3 flex gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												className: "min-h-11 rounded-full border border-line px-3 text-sm",
												onClick: () => setPipeI((v) => Math.max(0, v - 1)),
												children: "Trước"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												className: "min-h-11 rounded-full bg-ink px-3 text-sm text-paper",
												onClick: () => setPipeI((v) => Math.min(pipeline.length - 1, v + 1)),
												children: "Bước tiếp"
											})]
										})
									]
								}) : null,
								steps.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-card border border-line p-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-muted",
											children: steps[stepI].label
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-2",
											children: maybeTex(steps[stepI].math)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2",
											children: steps[stepI].say
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-3 flex gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												className: "min-h-11 rounded-full border border-line px-3 text-sm",
												onClick: () => setStepI((v) => Math.max(0, v - 1)),
												children: "Trước"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												className: "min-h-11 rounded-full bg-ink px-3 text-sm text-paper",
												onClick: () => setStepI((v) => Math.min(steps.length - 1, v + 1)),
												children: "Bước tiếp"
											})]
										})
									]
								}) : null,
								item.code ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-card border border-line bg-ink p-4 text-paper",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs uppercase tracking-widest text-paper/70",
											children: item.code.lang
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
											className: "mt-2 overflow-x-auto text-sm leading-relaxed",
											children: item.code.source
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "mt-3 min-h-11 rounded-full bg-accent px-4 text-sm text-accent-ink",
											onClick: () => setRan(true),
											children: "Chạy"
										}),
										ran ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
											className: "mt-3 overflow-x-auto border-t border-paper/20 pt-3 text-sm",
											children: item.code.out
										}) : null,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-xs text-paper/70",
											children: "Kết quả tính sẵn trên dữ liệu mẫu. Không cần gõ."
										})
									]
								}) : null
							]
						}) : null,
						item.type === "pitfalls" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 space-y-3",
							children: item.rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-2 rounded-card border border-line p-4 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium",
										children: row.left
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium",
										children: row.right
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted sm:col-span-2",
										children: row.note
									})
								]
							}, row.left))
						}) : null,
						item.type === "insight" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
							className: "mt-3 border-l-4 border-accent pl-4 font-display text-2xl leading-snug",
							children: item.text
						}) : null,
						item.type === "sources" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-3 text-sm",
							children: item.items.map((source) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: source.claim }), source.url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "text-accent underline",
								href: source.url,
								target: "_blank",
								rel: "noreferrer",
								children: source.source
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted",
								children: source.source
							})] }, source.claim))
						}) : null
					]
				}, item.type);
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xs uppercase tracking-widest text-muted",
						children: "Tự đánh dấu mục gốc"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Phần trên là định nghĩa và ví dụ. Danh sách dưới chỉ để nhớ mình đã xem mục nào. Không có câu hỏi."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 divide-y divide-line border-y border-line",
						children: shown.items.map((item) => {
							const st = itemStatus(item.id);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "flex min-h-14 w-full items-start gap-3 py-3 text-left",
								onClick: () => cycleItem(item.id),
								children: [st === "seen" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-1 size-4 shrink-0 text-good" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: `mt-1 size-4 shrink-0 ${st === "viewing" ? "text-accent" : "text-muted"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block",
									children: item.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs uppercase tracking-widest text-muted",
									children: [
										item.kind,
										" · ",
										statusLabel(st),
										item.optional ? " · optional" : ""
									]
								})] })]
							}) }, item.id);
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-3 sm:grid-cols-2",
				children: [near.prev ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/bai/$lessonId",
					params: { lessonId: near.prev.id },
					className: "rounded-card border border-line p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs uppercase tracking-widest text-muted",
						children: lang === "en" ? "Previous" : "Từ trước"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block font-medium",
						children: near.prev.title
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), near.next ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/bai/$lessonId",
					params: { lessonId: near.next.id },
					className: "rounded-card border border-line p-4 sm:text-right",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs uppercase tracking-widest text-muted",
						children: lang === "en" ? "Next" : "Tiếp theo"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block font-medium",
						children: near.next.title
					})]
				}) : null]
			})
		]
	});
}
function LessonPage() {
	const { lessonId } = Route$2.useParams();
	const lesson = getLesson(lessonId);
	if (!lesson) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "reading mx-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl",
			children: "Không thấy bài này"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-muted",
			children: "Bài không nằm trong sổ."
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LessonView, { lesson });
}
//#endregion
export { LessonPage as component };
