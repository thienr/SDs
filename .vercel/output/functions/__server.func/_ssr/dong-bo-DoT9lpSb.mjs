import { o as __toESM } from "../_runtime.mjs";
import { J as require_react, b as Link, q as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as getServerProgress, i as getProgress, m as subscribeProgress } from "./progress-BbLCT1Se.mjs";
import { a as disableSync, c as syncNow, l as useSync, o as enableSync, s as newCode } from "./router-CSqP0z_b.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dong-bo-DoT9lpSb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var text = {
	vi: {
		title: "Đồng bộ giữa các máy",
		lead: "Tiến độ đọc, chỗ đọc dở và lịch ôn lại được giữ trên máy chủ, gắn với một mã bí mật. Không cần tài khoản. Máy nào nhập cùng mã thì thấy cùng tiến độ.",
		off: "Chưa bật đồng bộ trên máy này.",
		make: "Bật và tạo mã mới",
		join: "Đã có mã từ máy khác",
		joinGo: "Nhập mã này",
		ph: "Dán mã đồng bộ",
		your: "Mã của bạn",
		keep: "Giữ mã như một chìa khóa: ai có mã thì xem và sửa được tiến độ học của bạn. Chỉ có tiến độ, không có thông tin cá nhân.",
		copy: "Sao chép mã",
		copied: "Đã sao chép",
		now: "Đồng bộ ngay",
		stop: "Tắt đồng bộ trên máy này",
		stopNote: "Dữ liệu trên máy chủ vẫn còn. Nhập lại mã là nối lại.",
		busy: "Đang đồng bộ…",
		ok: (t) => `Đồng bộ lần cuối: ${t}`,
		never: "Chưa đồng bộ lần nào.",
		bad: "Mã không đúng dạng (16–128 ký tự chữ, số, - hoặc _).",
		back: "Về trang đầu"
	},
	en: {
		title: "Sync between devices",
		lead: "Your reading progress, where you stopped and your review schedule are kept on the server under a secret code. No account needed. Any device with the same code shows the same progress.",
		off: "Sync is not on for this device.",
		make: "Turn on and create a new code",
		join: "I have a code from another device",
		joinGo: "Use this code",
		ph: "Paste sync code",
		your: "Your code",
		keep: "Treat the code like a key: anyone who has it can see and change your study progress. It holds progress only, no personal data.",
		copy: "Copy code",
		copied: "Copied",
		now: "Sync now",
		stop: "Turn off on this device",
		stopNote: "Server data stays. Enter the code again to reconnect.",
		busy: "Syncing…",
		ok: (t) => `Last synced: ${t}`,
		never: "Not synced yet.",
		bad: "Code is not valid (16–128 characters: letters, digits, - or _).",
		back: "Back to start"
	}
};
function GoogleButton({ onError }) {
	const ref = (0, import_react.useRef)(null);
	const [id, setId] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		fetch("/api/sync").then((r) => r.json()).then((d) => {
			var _d$google;
			return setId((_d$google = d.google) !== null && _d$google !== void 0 ? _d$google : null);
		}).catch(() => setId(null));
	}, []);
	(0, import_react.useEffect)(() => {
		if (!id || !ref.current) return;
		const el = ref.current;
		const go = () => {
			var _window$google, _window$google2;
			(_window$google = window.google) === null || _window$google === void 0 || _window$google.accounts.id.initialize({
				client_id: id,
				callback: async (resp) => {
					try {
						var _b$error;
						const r = await fetch("/api/sync", {
							method: "POST",
							headers: { "content-type": "application/json" },
							body: JSON.stringify({ credential: resp.credential })
						});
						const b = await r.json();
						if (!r.ok || !b.code) throw new Error((_b$error = b.error) !== null && _b$error !== void 0 ? _b$error : "Lỗi đăng nhập");
						await enableSync(b.code);
					} catch (e) {
						onError(e instanceof Error ? e.message : "Lỗi đăng nhập");
					}
				}
			});
			(_window$google2 = window.google) === null || _window$google2 === void 0 || _window$google2.accounts.id.renderButton(el, {
				theme: "outline",
				size: "large",
				text: "signin_with",
				locale: "vi"
			});
		};
		if (window.google) return go();
		const sc = document.createElement("script");
		sc.src = "https://accounts.google.com/gsi/client";
		sc.async = true;
		sc.onload = go;
		document.head.appendChild(sc);
	}, [id, onError]);
	return id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: "min-h-11"
	}) : null;
}
function SyncPage() {
	const lang = (0, import_react.useSyncExternalStore)(subscribeProgress, getProgress, getServerProgress).lang;
	const t = text[lang];
	const s = useSync();
	const [draft, setDraft] = (0, import_react.useState)("");
	const [err, setErr] = (0, import_react.useState)("");
	const [copied, setCopied] = (0, import_react.useState)(false);
	const btn = "inline-flex min-h-11 items-center rounded-full border border-line px-4 text-sm hover:bg-card";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "reading mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "text-sm text-accent underline",
				children: t.back
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl",
				children: t.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 leading-relaxed text-muted",
				children: t.lead
			}),
			!s.code ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t.off }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoogleButton, { onError: setErr }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "inline-flex min-h-11 items-center rounded-full bg-accent px-5 text-sm text-white",
						onClick: () => void enableSync(newCode()),
						children: t.make
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xs uppercase tracking-widest text-muted",
							children: t.join
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: draft,
								onChange: (e) => {
									setDraft(e.target.value);
									setErr("");
								},
								placeholder: t.ph,
								className: "min-h-11 min-w-0 flex-1 rounded-card border border-line bg-paper px-3 text-sm",
								autoCapitalize: "none",
								autoCorrect: "off",
								spellCheck: false
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: btn,
								onClick: () => {
									const c = draft.trim();
									if (!/^[A-Za-z0-9_-]{16,128}$/.test(c)) return setErr(t.bad);
									enableSync(c);
								},
								children: t.joinGo
							})]
						}),
						err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-red-600",
							children: err
						}) : null
					] })
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-card border border-line p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-widest text-muted",
								children: t.your
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 break-all font-mono text-sm",
								children: s.code
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: `${btn} mt-3`,
								onClick: async () => {
									try {
										var _s$code;
										await navigator.clipboard.writeText((_s$code = s.code) !== null && _s$code !== void 0 ? _s$code : "");
										setCopied(true);
									} catch {}
								},
								children: copied ? t.copied : t.copy
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted",
								children: t.keep
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm",
						"aria-live": "polite",
						children: s.state === "busy" ? t.busy : s.state === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-red-600",
							children: s.msg
						}) : s.at ? t.ok(new Date(s.at).toLocaleString(lang === "en" ? "en-GB" : "vi-VN")) : t.never
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: btn,
							onClick: () => void syncNow(),
							children: t.now
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: btn,
							onClick: () => disableSync(),
							children: t.stop
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: t.stopNote
					})
				]
			})
		]
	});
}
//#endregion
export { SyncPage as component };
