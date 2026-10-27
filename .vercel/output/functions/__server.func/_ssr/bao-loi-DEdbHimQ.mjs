import { o as __toESM } from "../_runtime.mjs";
import { J as require_react, b as Link, q as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as reportsAsText, i as removeReport, n as clearReports, o as useReports } from "./report-store-BZhsezXf.mjs";
import { a as getServerProgress, i as getProgress, m as subscribeProgress } from "./progress-BbLCT1Se.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bao-loi-DEdbHimQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var text = {
	vi: {
		title: "Báo cáo thẻ",
		lead: "Các thẻ bạn đã đánh dấu sai hoặc khó hiểu. Sao chép danh sách rồi gửi cho Claude để sửa.",
		none: "Chưa có báo cáo nào.",
		copy: "Sao chép tất cả",
		copied: "Đã sao chép",
		json: "Tải JSON",
		clear: "Xóa hết",
		del: "Xóa",
		wrong: "Sai",
		unclear: "Khó hiểu",
		open: "Mở thẻ"
	},
	en: {
		title: "Card reports",
		lead: "Cards you flagged as wrong or hard to follow. Copy the list and send it to Claude to fix.",
		none: "No reports yet.",
		copy: "Copy all",
		copied: "Copied",
		json: "Download JSON",
		clear: "Clear all",
		del: "Delete",
		wrong: "Wrong",
		unclear: "Hard to follow",
		open: "Open card"
	}
};
function ReportsPage() {
	const t = text[(0, import_react.useSyncExternalStore)(subscribeProgress, getProgress, getServerProgress).lang];
	const list = useReports();
	const [copied, setCopied] = (0, import_react.useState)(false);
	const btn = "inline-flex min-h-11 items-center rounded-full border border-line px-4 text-sm hover:bg-card";
	const copy = async () => {
		try {
			await navigator.clipboard.writeText(reportsAsText(list));
			setCopied(true);
			setTimeout(() => setCopied(false), 2e3);
		} catch {}
	};
	const download = () => {
		const blob = new Blob([JSON.stringify(list, null, 2)], { type: "application/json" });
		const a = document.createElement("a");
		a.href = URL.createObjectURL(blob);
		a.download = "bao-loi-the.json";
		a.click();
		setTimeout(() => URL.revokeObjectURL(a.href), 2e3);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-4 pb-28 pt-6 md:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl",
				children: t.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: t.lead
			}),
			list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-muted",
				children: t.none
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: btn,
						onClick: copy,
						children: copied ? t.copied : t.copy
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: btn,
						onClick: download,
						children: t.json
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: btn,
						onClick: () => clearReports(),
						children: t.clear
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 space-y-3",
				children: list.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-card border border-line p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-widest text-muted",
							children: r.kind === "wrong" ? t.wrong : t.unclear
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-medium",
							children: r.title
						}),
						r.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm leading-relaxed",
							children: r.note
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex gap-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/khai-niem/$conceptId",
								params: { conceptId: r.conceptId },
								className: "inline-flex min-h-11 items-center text-accent underline",
								children: t.open
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "inline-flex min-h-11 items-center text-muted underline",
								onClick: () => removeReport(r.id),
								children: t.del
							})]
						})
					]
				}, r.id))
			})] })
		]
	});
}
//#endregion
export { ReportsPage as component };
