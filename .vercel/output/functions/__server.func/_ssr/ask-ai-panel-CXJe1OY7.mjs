import { o as __toESM } from "../_runtime.mjs";
import { t as cardContext } from "./ask-context-BJsDBP5Y.mjs";
import { J as require_react, q as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ask-ai-panel-CXJe1OY7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PROVIDERS = {
	claude: {
		name: "Claude",
		model: "claude-sonnet-5-5",
		keyUrl: "https://console.anthropic.com/settings/keys",
		web: (q) => `https://claude.ai/new?q=${encodeURIComponent(q)}`,
		webHome: "https://claude.ai/new"
	},
	gpt: {
		name: "GPT",
		model: "gpt-5",
		keyUrl: "https://platform.openai.com/api-keys",
		web: (q) => `https://chatgpt.com/?q=${encodeURIComponent(q)}`,
		webHome: "https://chatgpt.com/"
	},
	gemini: {
		name: "Gemini",
		model: "gemini-2.5-flash",
		keyUrl: "https://aistudio.google.com/apikey",
		web: () => null,
		webHome: "https://gemini.google.com/app"
	},
	grok: {
		name: "Grok",
		model: "grok-4",
		keyUrl: "https://console.x.ai/",
		web: (q) => `https://grok.com/?q=${encodeURIComponent(q)}`,
		webHome: "https://grok.com/"
	}
};
var KEY = "so-muc:ai";
function loadStore() {
	try {
		const raw = localStorage.getItem(KEY);
		if (raw) return {
			keys: {},
			models: {},
			last: "claude",
			...JSON.parse(raw)
		};
	} catch {}
	return {
		keys: {},
		models: {},
		last: "claude"
	};
}
function saveStore(s) {
	try {
		localStorage.setItem(KEY, JSON.stringify(s));
	} catch {}
}
async function readError(res) {
	try {
		var _j$error$message, _j$error;
		const j = await res.json();
		const m = typeof j.error === "string" ? j.error : (_j$error$message = (_j$error = j.error) === null || _j$error === void 0 ? void 0 : _j$error.message) !== null && _j$error$message !== void 0 ? _j$error$message : j.message;
		return `${res.status}: ${(m !== null && m !== void 0 ? m : "").slice(0, 300)}`;
	} catch {
		return `${res.status}`;
	}
}
async function askAi(id, key, model, system, history, signal) {
	var _j$candidates$0$conte, _j$candidates;
	let res;
	if (id === "claude") {
		var _j$content;
		res = await fetch("https://api.anthropic.com/v1/messages", {
			method: "POST",
			signal,
			headers: {
				"content-type": "application/json",
				"x-api-key": key,
				"anthropic-version": "2023-06-01",
				"anthropic-dangerous-direct-browser-access": "true"
			},
			body: JSON.stringify({
				model,
				max_tokens: 1500,
				system,
				messages: history.map((m) => ({
					role: m.role,
					content: m.text
				}))
			})
		});
		if (!res.ok) throw new Error(await readError(res));
		return ((_j$content = (await res.json()).content) !== null && _j$content !== void 0 ? _j$content : []).map((c) => {
			var _c$text;
			return (_c$text = c.text) !== null && _c$text !== void 0 ? _c$text : "";
		}).join("").trim();
	}
	if (id === "gpt" || id === "grok") {
		var _j$choices$0$message$, _j$choices;
		res = await fetch(id === "gpt" ? "https://api.openai.com/v1/chat/completions" : "https://api.x.ai/v1/chat/completions", {
			method: "POST",
			signal,
			headers: {
				"content-type": "application/json",
				authorization: `Bearer ${key}`
			},
			body: JSON.stringify({
				model,
				messages: [{
					role: "system",
					content: system
				}, ...history.map((m) => ({
					role: m.role,
					content: m.text
				}))]
			})
		});
		if (!res.ok) throw new Error(await readError(res));
		return ((_j$choices$0$message$ = (_j$choices = (await res.json()).choices) === null || _j$choices === void 0 || (_j$choices = _j$choices[0]) === null || _j$choices === void 0 || (_j$choices = _j$choices.message) === null || _j$choices === void 0 ? void 0 : _j$choices.content) !== null && _j$choices$0$message$ !== void 0 ? _j$choices$0$message$ : "").trim();
	}
	res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`, {
		method: "POST",
		signal,
		headers: {
			"content-type": "application/json",
			"x-goog-api-key": key
		},
		body: JSON.stringify({
			systemInstruction: { parts: [{ text: system }] },
			contents: history.map((m) => ({
				role: m.role === "user" ? "user" : "model",
				parts: [{ text: m.text }]
			}))
		})
	});
	if (!res.ok) throw new Error(await readError(res));
	return ((_j$candidates$0$conte = (_j$candidates = (await res.json()).candidates) === null || _j$candidates === void 0 || (_j$candidates = _j$candidates[0]) === null || _j$candidates === void 0 || (_j$candidates = _j$candidates.content) === null || _j$candidates === void 0 ? void 0 : _j$candidates.parts) !== null && _j$candidates$0$conte !== void 0 ? _j$candidates$0$conte : []).map((p) => {
		var _p$text;
		return (_p$text = p.text) !== null && _p$text !== void 0 ? _p$text : "";
	}).join("").trim();
}
var SYSTEM_BASE = "Bạn là gia sư thống kê, Excel, SQL, Python và học máy cho một người làm marketing đang học chương trình Data Science. Trả lời bằng tiếng Việt (hoặc tiếng Anh nếu người dùng hỏi bằng tiếng Anh), ngắn gọn, từng bước, có ví dụ số đơn giản. Nếu có nội dung thẻ học kèm theo thì bám theo đó. Không bịa số liệu; nếu không chắc thì nói rõ.";
var w = {
	vi: {
		title: "Hỏi AI",
		close: "Đóng",
		ctx: "Đang kèm thẻ",
		noctx: "Chưa kèm thẻ nào (mở một thẻ khái niệm để AI bám theo).",
		ph: "Hỏi bất cứ điều gì về thẻ này…",
		send: "Gửi",
		thinking: "Đang trả lời…",
		key: "Khóa API của",
		save: "Lưu khóa",
		change: "Đổi khóa/mô hình",
		keyNote: "Khóa chỉ lưu trên máy này, không đồng bộ và không gửi lên máy chủ của Sổ Mực; trình duyệt gọi thẳng nhà cung cấp và bạn trả phí theo mức dùng của họ.",
		get: "Lấy khóa",
		model: "Mô hình",
		web: "Hoặc mở app của họ",
		copy: "Chép câu hỏi + thẻ",
		copied: "Đã chép",
		clear: "Xóa cuộc trò chuyện",
		err: "Lỗi",
		launchHead: "Hỏi bằng tài khoản của bạn",
		launchNote: "Mở app của từng bên (đã đăng nhập sẵn trên máy bạn) với câu hỏi và nội dung thẻ điền sẵn. Không cần khóa API.",
		launchAsk: "Câu hỏi",
		advanced: "Nâng cao: chat ngay trong app bằng khóa API",
		starters: [
			"Giải thích lại bằng ví dụ khác",
			"Cho mình 3 câu hỏi kiểm tra",
			"Mình hay nhầm chỗ nào ở thẻ này?"
		]
	},
	en: {
		title: "Ask AI",
		close: "Close",
		ctx: "Card attached",
		noctx: "No card attached (open a concept card so the AI can follow it).",
		ph: "Ask anything about this card…",
		send: "Send",
		thinking: "Answering…",
		key: "API key for",
		save: "Save key",
		change: "Change key/model",
		keyNote: "The key stays on this device only. It is not synced or sent to the Sổ Mực server; your browser calls the provider directly and you pay their usage fees.",
		get: "Get a key",
		model: "Model",
		web: "Or open their app",
		copy: "Copy question + card",
		copied: "Copied",
		clear: "Clear chat",
		err: "Error",
		launchHead: "Ask with your own account",
		launchNote: "Opens each provider's app (already signed in on your device) with the question and card pre-filled. No API key needed.",
		launchAsk: "Question",
		advanced: "Advanced: chat inside the app with an API key",
		starters: [
			"Explain it again with another example",
			"Give me 3 quiz questions",
			"Where do people usually go wrong here?"
		]
	}
};
function AskAiPanel({ lang, path, onClose }) {
	var _chats$id;
	const t = w[lang];
	const [store, setStore] = (0, import_react.useState)(loadStore);
	const [id, setId] = (0, import_react.useState)(store.last);
	const [chats, setChats] = (0, import_react.useState)({});
	const [draft, setDraft] = (0, import_react.useState)("");
	const [keyDraft, setKeyDraft] = (0, import_react.useState)("");
	const [modelDraft, setModelDraft] = (0, import_react.useState)("");
	const [editing, setEditing] = (0, import_react.useState)(false);
	const [adv, setAdv] = (0, import_react.useState)(false);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [err, setErr] = (0, import_react.useState)("");
	const [copied, setCopied] = (0, import_react.useState)(false);
	const end = (0, import_react.useRef)(null);
	const ctx = (0, import_react.useMemo)(() => {
		const m = /^\/khai-niem\/([^/]+)/.exec(path);
		return m ? cardContext(decodeURIComponent(m[1]), lang) : null;
	}, [path, lang]);
	const prov = PROVIDERS[id];
	const key = store.keys[id];
	const model = store.models[id] || prov.model;
	const msgs = (_chats$id = chats[id]) !== null && _chats$id !== void 0 ? _chats$id : [];
	const system = ctx ? `${SYSTEM_BASE}\n\n--- NỘI DUNG THẺ ĐANG HỌC ---\n${ctx.text}` : SYSTEM_BASE;
	(0, import_react.useEffect)(() => {
		var _end$current;
		return (_end$current = end.current) === null || _end$current === void 0 ? void 0 : _end$current.scrollIntoView({ block: "end" });
	}, [msgs.length, busy]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => e.key === "Escape" && onClose();
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [onClose]);
	const update = (next) => {
		setStore(next);
		saveStore(next);
	};
	const pick = (p) => {
		setId(p);
		setErr("");
		setEditing(false);
		update({
			...store,
			last: p
		});
	};
	const send = async (text) => {
		const q = text.trim();
		if (!q || !key || busy) return;
		const next = [...msgs, {
			role: "user",
			text: q
		}];
		setChats((c) => ({
			...c,
			[id]: next
		}));
		setDraft("");
		setBusy(true);
		setErr("");
		try {
			const a = await askAi(id, key, model, system, next);
			setChats((c) => ({
				...c,
				[id]: [...next, {
					role: "assistant",
					text: a || "(trống)"
				}]
			}));
		} catch (e) {
			setErr(e instanceof Error ? e.message : String(e));
		} finally {
			setBusy(false);
		}
	};
	const prompt = (q) => `${ctx ? `${ctx.text}\n\n` : ""}${q}`.trim();
	const btn = "inline-flex min-h-11 items-center rounded-full border border-line px-4 text-sm hover:bg-card";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-40 flex items-end justify-center bg-black/40 md:items-center",
		role: "dialog",
		"aria-modal": "true",
		"aria-label": t.title,
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex max-h-[88dvh] w-full flex-col rounded-t-2xl border border-line bg-paper md:max-h-[80dvh] md:max-w-xl md:rounded-2xl",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-2 border-b border-line px-4 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl",
						children: t.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "inline-flex size-11 items-center justify-center text-xl",
						onClick: onClose,
						"aria-label": t.close,
						children: "×"
					})]
				}),
				key || adv || editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-2 overflow-x-auto px-4 py-2",
					role: "tablist",
					children: Object.keys(PROVIDERS).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						role: "tab",
						"aria-selected": p === id,
						onClick: () => pick(p),
						className: `min-h-11 shrink-0 rounded-full border px-4 text-sm ${p === id ? "border-accent bg-card text-accent" : "border-line"}`,
						children: [PROVIDERS[p].name, store.keys[p] ? "" : " ·"]
					}, p))
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "px-4 text-xs text-muted",
					children: ctx ? `${t.ctx}: ${ctx.title}` : t.noctx
				}),
				!key && !adv && !editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3 overflow-y-auto px-4 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-medium",
							children: t.launchHead
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: t.launchNote
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm",
							children: [t.launchAsk, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: draft,
								onChange: (e) => setDraft(e.target.value),
								placeholder: t.starters[0],
								className: "mt-1 min-h-11 w-full rounded-card border border-line bg-paper px-3 text-base"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-2",
							children: Object.keys(PROVIDERS).map((p) => {
								var _PROVIDERS$p$web;
								const q = prompt(draft || t.starters[0]).slice(0, 6e3);
								const href = (_PROVIDERS$p$web = PROVIDERS[p].web(q)) !== null && _PROVIDERS$p$web !== void 0 ? _PROVIDERS$p$web : PROVIDERS[p].webHome;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex min-h-12 items-center justify-center rounded-card border border-accent bg-card text-sm font-medium text-accent",
									onClick: () => {
										var _navigator$clipboard;
										if (!PROVIDERS[p].web(q)) (_navigator$clipboard = navigator.clipboard) === null || _navigator$clipboard === void 0 || _navigator$clipboard.writeText(q).then(() => setCopied(true)).catch(() => {});
									},
									children: PROVIDERS[p].name
								}, p);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: copied ? t.copied : "Gemini: nội dung được chép sẵn, bạn dán vào ô chat."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "text-xs underline",
							onClick: () => setAdv(true),
							children: t.advanced
						})
					]
				}) : !key || editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3 overflow-y-auto px-4 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm",
							children: [
								t.key,
								" ",
								prov.name,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "password",
									autoComplete: "off",
									autoCapitalize: "none",
									spellCheck: false,
									value: keyDraft,
									onChange: (e) => setKeyDraft(e.target.value),
									className: "mt-1 min-h-11 w-full rounded-card border border-line bg-paper px-3 font-mono text-sm"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm",
							children: [t.model, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: modelDraft || model,
								onChange: (e) => setModelDraft(e.target.value),
								className: "mt-1 min-h-11 w-full rounded-card border border-line bg-paper px-3 font-mono text-sm"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "inline-flex min-h-11 items-center rounded-full bg-accent px-5 text-sm text-white",
								onClick: () => {
									const k = keyDraft.trim() || key;
									if (!k) return;
									update({
										...store,
										keys: {
											...store.keys,
											[id]: k
										},
										models: {
											...store.models,
											[id]: (modelDraft || model).trim()
										}
									});
									setKeyDraft("");
									setModelDraft("");
									setEditing(false);
								},
								children: t.save
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: btn,
								href: prov.keyUrl,
								target: "_blank",
								rel: "noreferrer",
								children: t.get
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: t.keyNote
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-h-24 flex-1 space-y-3 overflow-y-auto px-4 py-3",
					children: [
						msgs.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: t.starters.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: btn,
								onClick: () => void send(s),
								children: s
							}, s))
						}) : null,
						msgs.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `whitespace-pre-wrap rounded-card px-3 py-2 text-sm leading-relaxed ${m.role === "user" ? "ml-8 bg-card" : "mr-4 border border-line"}`,
							children: m.text
						}, i)),
						busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: t.thinking
						}) : null,
						err ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-red-600",
							children: [
								t.err,
								" ",
								err
							]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: end })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "flex gap-2 border-t border-line p-3",
					onSubmit: (e) => {
						e.preventDefault();
						send(draft);
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: draft,
						onChange: (e) => setDraft(e.target.value),
						placeholder: t.ph,
						className: "min-h-11 min-w-0 flex-1 rounded-card border border-line bg-paper px-3 text-base"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: busy || !draft.trim(),
						className: "min-h-11 rounded-full bg-accent px-5 text-sm text-white disabled:opacity-40",
						children: t.send
					})]
				})] }),
				!key && !adv && !editing ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2 border-t border-line px-4 py-2 text-xs text-muted",
					children: [
						key && !editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "underline",
							onClick: () => setEditing(true),
							children: t.change
						}) : null,
						msgs.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "underline",
							onClick: () => setChats((c) => ({
								...c,
								[id]: []
							})),
							children: t.clear
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "ml-auto",
							children: [t.web, ":"]
						}),
						Object.keys(PROVIDERS).map((p) => {
							var _PROVIDERS$p$web2;
							const q = prompt(draft || t.starters[0]);
							const href = (_PROVIDERS$p$web2 = PROVIDERS[p].web(q.slice(0, 6e3))) !== null && _PROVIDERS$p$web2 !== void 0 ? _PROVIDERS$p$web2 : PROVIDERS[p].webHome;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href,
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex min-h-8 items-center rounded-full border border-line px-3",
								onClick: () => {
									var _navigator$clipboard2;
									if (!PROVIDERS[p].web(q)) (_navigator$clipboard2 = navigator.clipboard) === null || _navigator$clipboard2 === void 0 || _navigator$clipboard2.writeText(q).then(() => setCopied(true)).catch(() => {});
								},
								children: PROVIDERS[p].name
							}, p);
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "underline",
							onClick: async () => {
								try {
									await navigator.clipboard.writeText(prompt(draft));
									setCopied(true);
								} catch {}
							},
							children: copied ? t.copied : t.copy
						})
					]
				})
			]
		})
	});
}
//#endregion
export { AskAiPanel as default };
