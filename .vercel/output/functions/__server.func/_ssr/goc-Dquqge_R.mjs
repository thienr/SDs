import { o as __toESM } from "../_runtime.mjs";
import { a as getServerRawVersion, d as setRawPatch, f as studyCopy, g as sessionConcepts, h as subscribeRaw, i as getRawVersion, l as rawEditCount, n as clearRaw, o as getStudy, t as batchRaw, u as rawIsEdited } from "./study-BtAMXX88.mjs";
import { r as courses } from "./catalog-DRaoKsF4.mjs";
import { J as require_react, b as Link, p as useRouterState, q as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as setCmsPatch, n as clearCms, o as getCmsVersion, r as cmsEditCount, s as getServerCmsVersion, u as subscribeCms } from "./cms-store-QsPjr5VR.mjs";
import { i as listCms, n as exportCms, r as importCms, u as saveCms } from "./cms-live-BOSWGilr.mjs";
import { a as getServerProgress, i as getProgress, m as subscribeProgress } from "./progress-BbLCT1Se.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/goc-Dquqge_R.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var RAW_NOTE = "so-muc-raw v1. Sửa chữ trong cards. Giữ nguyên id và lang. Không thêm câu hỏi, quiz, hay ô đáp án. Số chưa có nguồn phải ghi ví dụ minh họa. Không bịa số liệu. course, session, place, video chỉ để đọc: sửa cũng bị bỏ qua. Trả lại đúng JSON này, hoặc khối ===== CARD =====.";
var WRITABLE = [
	"title",
	"why",
	"prior",
	"see",
	"plain",
	"situation",
	"use",
	"precise",
	"insight",
	"formula",
	"symbols"
];
function parseRawImport(input) {
	const source = input.trim();
	if (!source) return {
		cards: [],
		error: "Ô dán đang trống."
	};
	if (source.startsWith("{") || source.startsWith("[")) try {
		return fromJson(JSON.parse(source));
	} catch {
		return {
			cards: [],
			error: "JSON không đọc được."
		};
	}
	return fromBlocks(source);
}
function cardsToJson(cards) {
	return JSON.stringify({
		"so-muc-raw": 1,
		note: RAW_NOTE,
		cards
	}, null, 2);
}
function cardsToBlocks(cards) {
	return `so-muc-raw: 1\n${RAW_NOTE}\n\n${cards.map((card) => {
		var _card$prior, _card$formula;
		return [
			`===== CARD ${card.id} ${card.lang} =====`,
			"@place",
			card.place,
			"@video",
			card.video,
			"@title",
			card.title,
			"@why",
			card.why,
			"@prior",
			(_card$prior = card.prior) !== null && _card$prior !== void 0 ? _card$prior : "",
			"@see",
			card.see,
			"@plain",
			card.plain,
			"@situation",
			card.situation,
			"@use",
			...card.use,
			"@precise",
			card.precise,
			"@insight",
			card.insight,
			"@formula",
			(_card$formula = card.formula) !== null && _card$formula !== void 0 ? _card$formula : "",
			"@symbols",
			...card.symbols.map((row) => `${row.sym} | ${row.meaning}`),
			"===== END =====",
			""
		].join("\n");
	}).join("\n")}`;
}
function fromJson(value) {
	const list = Array.isArray(value) ? value : value && typeof value === "object" && Array.isArray(value.cards) ? value.cards : value && typeof value === "object" && typeof value.id === "string" ? [value] : null;
	if (!list) return {
		cards: [],
		error: "JSON này không có mảng cards."
	};
	const cards = [];
	for (const item of list) {
		const card = oneObject(item);
		if (card) cards.push(card);
	}
	if (cards.length === 0) return {
		cards: [],
		error: "Không có thẻ nào có id."
	};
	return {
		cards,
		error: null
	};
}
function oneObject(item) {
	if (!item || typeof item !== "object") return null;
	const row = item;
	if (typeof row.id !== "string" || !row.id.trim()) return null;
	const lang = row.lang === "en" ? "en" : "vi";
	const fields = {};
	if (typeof row.title === "string") fields.title = row.title;
	if (typeof row.why === "string") fields.why = row.why;
	if ("prior" in row) fields.prior = typeof row.prior === "string" && row.prior.trim() ? row.prior : null;
	if (typeof row.see === "string") fields.see = row.see;
	if (typeof row.plain === "string") fields.plain = row.plain;
	if (typeof row.situation === "string") fields.situation = row.situation;
	if ("use" in row) fields.use = asSteps(row.use);
	if (typeof row.precise === "string") fields.precise = row.precise;
	if (typeof row.insight === "string") fields.insight = row.insight;
	if ("formula" in row) fields.formula = typeof row.formula === "string" && row.formula.trim() ? row.formula : null;
	if ("symbols" in row) fields.symbols = asSymbols(row.symbols);
	return {
		id: row.id.trim(),
		lang,
		fields
	};
}
function fromBlocks(source) {
	const lines = source.split(/\r?\n/);
	const cards = [];
	let current = null;
	let field = "";
	const flush = () => {
		if (!current) return;
		cards.push({
			id: current.id,
			lang: current.lang,
			fields: fieldsFrom(current.bag)
		});
		current = null;
		field = "";
	};
	for (const line of lines) {
		var _current$bag$get;
		const open = line.match(/^===== CARD\s+(\S+)\s+(vi|en)\s+=====\s*$/);
		if (open) {
			flush();
			current = {
				id: open[1],
				lang: open[2],
				bag: /* @__PURE__ */ new Map()
			};
			continue;
		}
		if (/^===== END =====\s*$/.test(line)) {
			flush();
			continue;
		}
		if (!current) continue;
		const tag = line.match(/^@([a-z]+)\s*$/);
		if (tag) {
			field = tag[1];
			if (!current.bag.has(field)) current.bag.set(field, []);
			continue;
		}
		if (!field) continue;
		(_current$bag$get = current.bag.get(field)) === null || _current$bag$get === void 0 || _current$bag$get.push(line);
	}
	flush();
	if (cards.length === 0) return {
		cards: [],
		error: "Không thấy khối ===== CARD id vi =====."
	};
	return {
		cards,
		error: null
	};
}
function fieldsFrom(bag) {
	const fields = {};
	const text = (name) => {
		var _bag$get;
		return ((_bag$get = bag.get(name)) !== null && _bag$get !== void 0 ? _bag$get : []).join("\n").trim();
	};
	for (const name of WRITABLE) {
		if (!bag.has(name)) continue;
		if (name === "prior") {
			const value = text(name);
			fields.prior = value ? value : null;
		} else if (name === "formula") {
			const value = text(name);
			fields.formula = value ? value : null;
		} else if (name === "use") {
			var _bag$get2;
			fields.use = asSteps((_bag$get2 = bag.get(name)) !== null && _bag$get2 !== void 0 ? _bag$get2 : []);
		} else if (name === "symbols") {
			var _bag$get3;
			fields.symbols = asSymbols((_bag$get3 = bag.get(name)) !== null && _bag$get3 !== void 0 ? _bag$get3 : []);
		} else if (name === "title" || name === "why" || name === "see" || name === "plain" || name === "situation" || name === "precise" || name === "insight") fields[name] = text(name);
	}
	return fields;
}
function asSteps(value) {
	return (Array.isArray(value) ? value : typeof value === "string" ? value.split(/\r?\n/) : []).map((step) => String(step).trim().replace(/^[-*]\s+/, "")).filter(Boolean);
}
function asSymbols(value) {
	if (typeof value === "string") return asSymbols(value.split(/\r?\n/));
	if (!Array.isArray(value)) return [];
	return value.map((item) => {
		if (typeof item === "string") {
			const cut = item.indexOf("|");
			if (cut < 0) return {
				sym: item.trim(),
				meaning: ""
			};
			return {
				sym: item.slice(0, cut).trim(),
				meaning: item.slice(cut + 1).trim()
			};
		}
		if (item && typeof item === "object") {
			var _row$sym, _row$meaning;
			const row = item;
			return {
				sym: String((_row$sym = row.sym) !== null && _row$sym !== void 0 ? _row$sym : "").trim(),
				meaning: String((_row$meaning = row.meaning) !== null && _row$meaning !== void 0 ? _row$meaning : "").trim()
			};
		}
		return {
			sym: "",
			meaning: ""
		};
	}).filter((row) => row.sym || row.meaning);
}
function listRaw(lang) {
	const out = [];
	for (const course of courses) for (const mod of course.modules) for (const session of mod.sessions) {
		var _sessionConcepts$sess;
		for (const id of (_sessionConcepts$sess = sessionConcepts[session.id]) !== null && _sessionConcepts$sess !== void 0 ? _sessionConcepts$sess : []) {
			const concept = getStudy(id);
			if (!concept) continue;
			const text = studyCopy(concept, lang);
			out.push({
				id,
				lang,
				courseId: course.id,
				courseTitle: course.title,
				sessionId: session.id,
				sessionTitle: session.title,
				video: concept.video,
				edited: rawIsEdited(id, lang),
				title: text.title,
				why: text.why,
				prior: text.prior,
				see: text.see,
				plain: text.plain,
				situation: text.situation,
				use: text.use,
				precise: text.precise,
				insight: text.insight,
				formula: text.formula,
				symbols: text.symbols
			});
		}
	}
	return out;
}
function saveCard(id, lang, text) {
	const concept = getStudy(id);
	if (!concept) return false;
	const base = studyCopy(concept, lang, true);
	const next = tidy(text);
	if (sameText(base, next)) setRawPatch(id, lang, null);
	else setRawPatch(id, lang, next);
	return true;
}
function exportJson(lang) {
	return cardsToJson(exportRows(lang));
}
function exportBlocks(lang) {
	return cardsToBlocks(exportRows(lang));
}
function importRaw(source, fallback) {
	const parsed = parseRawImport(source);
	if (parsed.error) return {
		ok: false,
		error: parsed.error,
		applied: 0,
		skipped: 0
	};
	let applied = 0;
	let skipped = 0;
	batchRaw(() => {
		for (const card of parsed.cards) {
			const concept = getStudy(card.id);
			if (!concept) {
				skipped += 1;
				continue;
			}
			const lang = card.lang || fallback;
			const current = studyCopy(concept, lang);
			saveCard(card.id, lang, merge(current, card));
			applied += 1;
		}
	});
	return {
		ok: true,
		error: null,
		applied,
		skipped
	};
}
function exportRows(lang) {
	return (lang === "both" ? ["vi", "en"] : [lang]).flatMap((item) => listRaw(item).map((card) => ({
		...card,
		place: `${card.courseTitle} / ${card.sessionTitle}`
	})));
}
function merge(current, card) {
	var _card$fields$title, _card$fields$why, _card$fields$prior, _card$fields$see, _card$fields$plain, _card$fields$situatio, _card$fields$use, _card$fields$precise, _card$fields$insight, _card$fields$formula, _card$fields$symbols;
	return tidy({
		title: (_card$fields$title = card.fields.title) !== null && _card$fields$title !== void 0 ? _card$fields$title : current.title,
		why: (_card$fields$why = card.fields.why) !== null && _card$fields$why !== void 0 ? _card$fields$why : current.why,
		prior: "prior" in card.fields ? (_card$fields$prior = card.fields.prior) !== null && _card$fields$prior !== void 0 ? _card$fields$prior : null : current.prior,
		see: (_card$fields$see = card.fields.see) !== null && _card$fields$see !== void 0 ? _card$fields$see : current.see,
		plain: (_card$fields$plain = card.fields.plain) !== null && _card$fields$plain !== void 0 ? _card$fields$plain : current.plain,
		situation: (_card$fields$situatio = card.fields.situation) !== null && _card$fields$situatio !== void 0 ? _card$fields$situatio : current.situation,
		use: (_card$fields$use = card.fields.use) !== null && _card$fields$use !== void 0 ? _card$fields$use : current.use,
		precise: (_card$fields$precise = card.fields.precise) !== null && _card$fields$precise !== void 0 ? _card$fields$precise : current.precise,
		insight: (_card$fields$insight = card.fields.insight) !== null && _card$fields$insight !== void 0 ? _card$fields$insight : current.insight,
		formula: "formula" in card.fields ? (_card$fields$formula = card.fields.formula) !== null && _card$fields$formula !== void 0 ? _card$fields$formula : null : current.formula,
		symbols: (_card$fields$symbols = card.fields.symbols) !== null && _card$fields$symbols !== void 0 ? _card$fields$symbols : current.symbols
	});
}
function tidy(text) {
	var _text$prior, _text$formula;
	const clean = (value) => value.trim();
	return {
		title: clean(text.title),
		why: clean(text.why),
		prior: ((_text$prior = text.prior) === null || _text$prior === void 0 ? void 0 : _text$prior.trim()) ? text.prior.trim() : null,
		see: clean(text.see),
		plain: clean(text.plain),
		situation: clean(text.situation),
		use: text.use.map((step) => step.trim()).filter(Boolean),
		precise: clean(text.precise),
		insight: clean(text.insight),
		formula: ((_text$formula = text.formula) === null || _text$formula === void 0 ? void 0 : _text$formula.trim()) ? text.formula.trim() : null,
		symbols: text.symbols.map((row) => ({
			sym: row.sym.trim(),
			meaning: row.meaning.trim()
		})).filter((row) => row.sym || row.meaning)
	};
}
function sameText(a, b) {
	return JSON.stringify(tidy(a)) === JSON.stringify(tidy(b));
}
var labels = {
	course: {
		vi: "Đầu khóa",
		en: "Course opener"
	},
	module: {
		vi: "Đầu phần",
		en: "Part opener"
	},
	session: {
		vi: "Đầu buổi",
		en: "Session line"
	},
	lesson: {
		vi: "Bài cũ",
		en: "Old lesson"
	}
};
function CmsPanel({ kind, lang, needle, onlyEdited, focusId }) {
	var _ref, _filtered$find;
	const vi = lang !== "en";
	const version = (0, import_react.useSyncExternalStore)(subscribeCms, getCmsVersion, getServerCmsVersion);
	const rows = (0, import_react.useMemo)(() => listCms(kind, lang), [
		kind,
		lang,
		version
	]);
	const filtered = (0, import_react.useMemo)(() => {
		const q = needle.trim().toLowerCase();
		return rows.filter((row) => {
			if (onlyEdited && !row.edited) return false;
			if (!q) return true;
			return `${row.id} ${row.label} ${row.place} ${row.why} ${row.plain} ${row.text} ${row.title}`.toLowerCase().includes(q);
		});
	}, [
		rows,
		needle,
		onlyEdited
	]);
	const [selected, setSelected] = (0, import_react.useState)(focusId);
	const [draft, setDraft] = (0, import_react.useState)(null);
	const [notice, setNotice] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (focusId) setSelected(focusId);
	}, [focusId]);
	(0, import_react.useEffect)(() => {
		if (filtered.some((row) => row.id === selected)) return;
		if (filtered[0]) setSelected(filtered[0].id);
	}, [filtered, selected]);
	const row = (_ref = (_filtered$find = filtered.find((item) => item.id === selected)) !== null && _filtered$find !== void 0 ? _filtered$find : rows.find((item) => item.id === selected)) !== null && _ref !== void 0 ? _ref : null;
	(0, import_react.useEffect)(() => {
		setDraft(row ? { ...row } : null);
	}, [row]);
	if (!row || !draft) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-4 text-sm text-muted",
		children: vi ? "Không có mục nào." : "Nothing here."
	});
	function set(key, value) {
		setDraft((current) => current ? {
			...current,
			[key]: value
		} : current);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4 grid gap-4 md:grid-cols-[16rem_minmax(0,1fr)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "max-h-80 overflow-auto rounded-card border border-line md:max-h-[70vh]",
			children: filtered.map((item) => {
				const on = item.id === row.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setSelected(item.id),
					className: `block w-full min-h-11 px-3 py-2 text-left ${on ? "bg-ink text-paper" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-sm font-medium",
						children: item.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: `block text-xs ${on ? "text-paper" : "text-muted"}`,
						children: [item.place, item.edited ? vi ? " · đã sửa" : " · edited" : ""]
					})]
				}) }, item.id);
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "min-w-0",
			onSubmit: (event) => {
				event.preventDefault();
				const result = saveCms(row, draft);
				setNotice(result.ok ? vi ? `Đã lưu ${labels[kind].vi}.` : "Saved." : result.error);
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: row.place
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-mono text-sm",
					children: row.id
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "mt-3 min-h-11 rounded-full border border-line px-4 text-sm",
					onClick: () => {
						setCmsPatch(row.kind, row.id, row.lang, null);
						setNotice(vi ? "Đã về chữ in sẵn." : "Back to the printed text.");
					},
					children: vi ? "Bỏ sửa mục này" : "Revert this item"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 space-y-4",
					children: [
						kind === "session" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: vi ? "Lời buổi" : "Session line",
							value: draft.text,
							onChange: (value) => set("text", value),
							tall: true
						}) : null,
						kind === "course" || kind === "module" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: vi ? "Hiểu nhanh" : "In plain words",
								value: draft.plain,
								onChange: (value) => set("plain", value),
								tall: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: vi ? "Vì sao cần biết" : "What you use it for",
								value: draft.why,
								onChange: (value) => set("why", value),
								tall: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: vi ? "Liên hệ với bài trước" : "How it links",
								value: draft.prior,
								onChange: (value) => set("prior", value),
								tall: true
							})
						] }) : null,
						kind === "lesson" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: vi ? "Tên bài" : "Title",
								value: draft.title,
								onChange: (value) => set("title", value)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: vi ? "Lời ngắn" : "Blurb",
								value: draft.blurb,
								onChange: (value) => set("blurb", value),
								tall: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: vi ? "Khối bài, JSON" : "Blocks, JSON",
								value: draft.blocks,
								onChange: (value) => set("blocks", value),
								tall: true,
								mono: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: vi ? "Từ điển bài, JSON" : "Glossary, JSON",
								value: draft.glossary,
								onChange: (value) => set("glossary", value),
								tall: true,
								mono: true
							})
						] }) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "mt-4 min-h-11 rounded-full bg-ink px-4 text-sm text-paper",
					children: vi ? "Lưu mục này" : "Save this item"
				}),
				notice ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm",
					children: notice
				}) : null
			]
		})]
	});
}
function Field({ label, value, onChange, tall, mono }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs tracking-widest text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			value,
			onChange: (event) => onChange(event.target.value),
			className: `mt-1 w-full rounded-card border border-line bg-card px-3 py-2 text-sm leading-relaxed outline-none ${tall ? "min-h-28" : "min-h-11"} ${mono ? "font-mono" : ""}`
		})]
	});
}
var KEY = "so-muc-bridge-key";
function BridgePanel({ lang, onApply }) {
	const vi = lang !== "en";
	const [origin, setOrigin] = (0, import_react.useState)("");
	const [key, setKey] = (0, import_react.useState)("");
	const [draft, setDraft] = (0, import_react.useState)("");
	const [claimed, setClaimed] = (0, import_react.useState)(null);
	const [items, setItems] = (0, import_react.useState)([]);
	const [notice, setNotice] = (0, import_react.useState)("");
	const [show, setShow] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		var _localStorage$getItem;
		setOrigin(window.location.origin);
		const saved = (_localStorage$getItem = localStorage.getItem(KEY)) !== null && _localStorage$getItem !== void 0 ? _localStorage$getItem : "";
		setKey(saved);
		setDraft(saved);
	}, []);
	(0, import_react.useEffect)(() => {
		let stop = false;
		async function look() {
			try {
				const gate = await fetch("/api/so-muc?what=gate");
				const body = await gate.json();
				if (stop) return;
				if (!gate.ok) {
					var _body$error;
					setNotice((_body$error = body.error) !== null && _body$error !== void 0 ? _body$error : vi ? "Chưa nối được." : "Not connected.");
					return;
				}
				setClaimed(Boolean(body.claimed));
			} catch {
				if (!stop) setNotice(vi ? "Chưa nối được." : "Not connected.");
			}
		}
		look();
		return () => {
			stop = true;
		};
	}, [vi]);
	(0, import_react.useEffect)(() => {
		if (!key) return;
		let stop = false;
		async function pull() {
			var _body$items;
			const res = await fetch("/api/so-muc?what=inbox", { headers: { Authorization: `Bearer ${key}` } });
			const body = await res.json();
			if (stop) return;
			if (!res.ok) {
				if (res.status === 401 || res.status === 409) setItems([]);
				return;
			}
			setItems((_body$items = body.items) !== null && _body$items !== void 0 ? _body$items : []);
		}
		pull();
		const timer = window.setInterval(() => void pull(), 15e3);
		return () => {
			stop = true;
			window.clearInterval(timer);
		};
	}, [key]);
	async function copy(text, ok) {
		try {
			await navigator.clipboard.writeText(text);
			setNotice(ok);
		} catch {
			setNotice(vi ? "Không chép được. Chọn chữ rồi chép tay." : "Clipboard blocked. Select the text and copy it.");
		}
	}
	async function createKey() {
		const bytes = /* @__PURE__ */ new Uint8Array(18);
		crypto.getRandomValues(bytes);
		const next = [...bytes].map((byte) => byte.toString(16).padStart(2, "0")).join("");
		const res = await fetch("/api/so-muc", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({
				op: "claim",
				key: next
			})
		});
		const body = await res.json();
		if (!res.ok) {
			var _body$error2;
			setNotice((_body$error2 = body.error) !== null && _body$error2 !== void 0 ? _body$error2 : vi ? "Chưa tạo được khóa." : "Could not create a key.");
			return;
		}
		localStorage.setItem(KEY, next);
		setKey(next);
		setDraft(next);
		setClaimed(true);
		setShow(true);
		setNotice(vi ? "Đã tạo khóa. Chép vào cấu hình của mô hình." : "Key created. Copy it into the model's config.");
	}
	async function saveDraft() {
		const next = draft.trim();
		const res = await fetch("/api/so-muc", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				Authorization: `Bearer ${next}`
			},
			body: JSON.stringify({
				op: "claim",
				key: next
			})
		});
		const body = await res.json();
		if (!res.ok) {
			var _body$error3;
			setNotice((_body$error3 = body.error) !== null && _body$error3 !== void 0 ? _body$error3 : vi ? "Khóa không dùng được." : "That key does not work.");
			return;
		}
		localStorage.setItem(KEY, next);
		setKey(next);
		setClaimed(true);
		setNotice(vi ? "Đã lưu khóa trên máy này." : "Key saved on this device.");
	}
	async function applyItem(id) {
		const res = await fetch(`/api/so-muc?what=inbox&id=${id}`, { headers: { Authorization: `Bearer ${key}` } });
		const body = await res.json();
		if (!res.ok || !body.item) {
			var _body$error4;
			setNotice((_body$error4 = body.error) !== null && _body$error4 !== void 0 ? _body$error4 : vi ? "Không lấy được bản sửa." : "Could not load that edit.");
			return;
		}
		if (!onApply(JSON.stringify(body.item.body))) return;
		await fetch("/api/so-muc", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				Authorization: `Bearer ${key}`
			},
			body: JSON.stringify({
				op: "drop",
				id
			})
		});
		setItems((current) => current.filter((item) => item.id !== id));
		setNotice(vi ? "Đã áp bản từ ngoài." : "Applied the outside edit.");
	}
	async function dismiss(id) {
		await fetch("/api/so-muc", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				Authorization: `Bearer ${key}`
			},
			body: JSON.stringify({
				op: "drop",
				id
			})
		});
		setItems((current) => current.filter((item) => item.id !== id));
	}
	const mcpUrl = origin ? `${origin}/api/mcp` : "/api/mcp";
	const readUrl = origin ? `${origin}/api/so-muc` : "/api/so-muc";
	const config = JSON.stringify({ mcpServers: { "so-muc": {
		url: mcpUrl,
		...key ? { headers: { Authorization: `Bearer ${key}` } } : {}
	} } }, null, 2);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-6 rounded-card border border-line p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl leading-tight",
				children: vi ? "Kết nối ra ngoài" : "Connect outward"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted",
				children: vi ? "Mô hình đọc cả sổ qua MCP hoặc API. Muốn sửa thì nó gửi vào hộp thư. Bấm Áp dụng là trang đọc đổi ngay. Khóa chỉ để gửi bản sửa, đừng dán chỗ công khai." : "A model reads the book through MCP or the API. Edits land in the inbox. Apply, and the reading page changes. The key only sends edits. Don't paste it in public."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 break-all font-mono text-sm",
				children: mcpUrl
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 break-all font-mono text-sm text-muted",
				children: readUrl
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-11 rounded-full border border-line px-4 text-sm",
						onClick: () => void copy(mcpUrl, vi ? "Đã chép địa chỉ MCP." : "Copied the MCP address."),
						children: vi ? "Chép MCP" : "Copy MCP"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-11 rounded-full border border-line px-4 text-sm",
						onClick: () => void copy(config, vi ? "Đã chép cấu hình." : "Copied the config."),
						children: vi ? "Chép cấu hình" : "Copy config"
					}),
					key ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-11 rounded-full border border-line px-4 text-sm",
						onClick: () => void copy(key, vi ? "Đã chép khóa." : "Copied the key."),
						children: vi ? "Chép khóa" : "Copy key"
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-4 block text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted",
					children: vi ? "Khóa sửa" : "Edit key"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: show ? "text" : "password",
					value: draft,
					onChange: (event) => setDraft(event.target.value),
					className: "mt-1 min-h-11 w-full rounded-card border border-line bg-card px-3 font-mono text-sm outline-none",
					autoComplete: "off",
					spellCheck: false
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex flex-wrap gap-2",
				children: [
					claimed === false ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-11 rounded-full bg-ink px-4 text-sm text-paper",
						onClick: () => void createKey(),
						children: vi ? "Tạo khóa" : "Create a key"
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-11 rounded-full border border-line px-4 text-sm",
						onClick: () => void saveDraft(),
						children: vi ? "Lưu khóa này" : "Save this key"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-11 rounded-full border border-line px-4 text-sm",
						onClick: () => setShow((value) => !value),
						children: show ? vi ? "Ẩn" : "Hide" : vi ? "Hiện" : "Show"
					})
				]
			}),
			claimed === null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: vi ? "Đang nối…" : "Connecting…"
			}) : null,
			notice ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm",
				children: notice
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-5 text-sm",
				children: vi ? "Hộp thư từ ngoài" : "Inbox from outside"
			}),
			items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: vi ? "Chưa có bản sửa nào." : "No edits waiting."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 space-y-2",
				children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-card border border-line px-3 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm",
							children: item.note || (vi ? `Bản #${item.id}` : `Edit #${item.id}`)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted",
							children: item.createdAt
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "min-h-11 rounded-full bg-ink px-4 text-sm text-paper",
								onClick: () => void applyItem(item.id),
								children: vi ? "Áp dụng" : "Apply"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "min-h-11 rounded-full border border-line px-4 text-sm",
								onClick: () => void dismiss(item.id),
								children: vi ? "Bỏ" : "Dismiss"
							})]
						})
					]
				}, item.id))
			})
		]
	});
}
var fields = [
	{
		key: "title",
		vi: "Tên khái niệm",
		en: "Title"
	},
	{
		key: "why",
		vi: "Vì sao cần biết",
		en: "What you use it for",
		tall: true
	},
	{
		key: "prior",
		vi: "Liên hệ với bài trước",
		en: "How it links",
		tall: true
	},
	{
		key: "see",
		vi: "Quan sát",
		en: "Look at this",
		tall: true
	},
	{
		key: "plain",
		vi: "Hiểu nhanh",
		en: "In plain words",
		tall: true
	},
	{
		key: "situation",
		vi: "Tình huống minh họa",
		en: "Example",
		tall: true
	},
	{
		key: "use",
		vi: "Cách áp dụng, mỗi dòng một bước",
		en: "Steps, one per line",
		tall: true
	},
	{
		key: "precise",
		vi: "Định nghĩa chính xác",
		en: "The precise version",
		tall: true
	},
	{
		key: "formula",
		vi: "Công thức KaTeX, để trống nếu không có",
		en: "KaTeX formula, empty if none",
		mono: true
	},
	{
		key: "symbols",
		vi: "Ký hiệu, mỗi dòng: ký hiệu | nghĩa",
		en: "Symbols, one line: symbol | meaning",
		tall: true,
		mono: true
	},
	{
		key: "insight",
		vi: "Ghi nhớ",
		en: "One thing to keep",
		tall: true
	}
];
function toDraft(card) {
	var _card$prior, _card$formula;
	return {
		title: card.title,
		why: card.why,
		prior: (_card$prior = card.prior) !== null && _card$prior !== void 0 ? _card$prior : "",
		see: card.see,
		plain: card.plain,
		situation: card.situation,
		use: card.use.join("\n"),
		precise: card.precise,
		insight: card.insight,
		formula: (_card$formula = card.formula) !== null && _card$formula !== void 0 ? _card$formula : "",
		symbols: card.symbols.map((row) => `${row.sym} | ${row.meaning}`).join("\n")
	};
}
function fromDraft(draft) {
	return {
		title: draft.title,
		why: draft.why,
		prior: draft.prior,
		see: draft.see,
		plain: draft.plain,
		situation: draft.situation,
		use: draft.use.split("\n"),
		precise: draft.precise,
		insight: draft.insight,
		formula: draft.formula,
		symbols: draft.symbols.split("\n").map((line) => {
			const cut = line.indexOf("|");
			if (cut < 0) return {
				sym: line,
				meaning: ""
			};
			return {
				sym: line.slice(0, cut),
				meaning: line.slice(cut + 1)
			};
		})
	};
}
var tabs = [
	{
		id: "idea",
		vi: "Ý",
		en: "Ideas"
	},
	{
		id: "course",
		vi: "Đầu khóa",
		en: "Courses"
	},
	{
		id: "module",
		vi: "Đầu phần",
		en: "Parts"
	},
	{
		id: "session",
		vi: "Đầu buổi",
		en: "Sessions"
	},
	{
		id: "lesson",
		vi: "Bài cũ",
		en: "Old lessons"
	}
];
function tabFromHash(hash) {
	const clean = decodeURIComponent(hash.replace(/^#/, ""));
	const cut = clean.indexOf(":");
	if (cut > 0) {
		const name = clean.slice(0, cut);
		if (name === "course" || name === "module" || name === "session" || name === "lesson") return {
			tab: name,
			id: clean.slice(cut + 1)
		};
	}
	return {
		tab: "idea",
		id: clean
	};
}
function exportWhole() {
	const ideas = JSON.parse(exportJson("both"));
	return JSON.stringify({
		"so-muc-cms": 1,
		note: "so-muc-cms v1. Sửa chữ. Giữ nguyên id và kind. Không thêm câu hỏi. Số chưa có nguồn ghi ví dụ minh họa. Trả lại đúng JSON này.",
		ideas: ideas.cards,
		...exportCms("both")
	}, null, 2);
}
function download(filename, text, type) {
	const blob = new Blob([text], { type });
	const url = URL.createObjectURL(blob);
	const anchor = document.createElement("a");
	anchor.href = url;
	anchor.download = filename;
	anchor.click();
	URL.revokeObjectURL(url);
}
function RawPage() {
	var _filtered$find;
	const progress = (0, import_react.useSyncExternalStore)(subscribeProgress, getProgress, getServerProgress);
	const version = (0, import_react.useSyncExternalStore)(subscribeRaw, getRawVersion, getServerRawVersion);
	(0, import_react.useSyncExternalStore)(subscribeCms, getCmsVersion, getServerCmsVersion);
	const hash = useRouterState({ select: (state) => state.location.hash });
	const lang = progress.lang;
	const [tab, setTab] = (0, import_react.useState)("idea");
	const [focusId, setFocusId] = (0, import_react.useState)("");
	const [courseId, setCourseId] = (0, import_react.useState)("");
	const [query, setQuery] = (0, import_react.useState)("");
	const [onlyEdited, setOnlyEdited] = (0, import_react.useState)(false);
	const [selected, setSelected] = (0, import_react.useState)("");
	const hashLock = (0, import_react.useRef)(false);
	const [draft, setDraft] = (0, import_react.useState)(null);
	const [paste, setPaste] = (0, import_react.useState)("");
	const [notice, setNotice] = (0, import_react.useState)("");
	const [armClear, setArmClear] = (0, import_react.useState)(false);
	const vi = lang !== "en";
	const cards = (0, import_react.useMemo)(() => listRaw(lang), [lang, version]);
	const filtered = (0, import_react.useMemo)(() => {
		const needle = query.trim().toLowerCase();
		return cards.filter((card) => {
			if (courseId && card.courseId !== courseId) return false;
			if (onlyEdited && !card.edited) return false;
			if (!needle) return true;
			return `${card.id} ${card.title} ${card.plain} ${card.sessionTitle}`.toLowerCase().includes(needle);
		});
	}, [
		cards,
		courseId,
		onlyEdited,
		query
	]);
	(0, import_react.useEffect)(() => {
		const next = tabFromHash(hash);
		setTab(next.tab);
		setFocusId(next.id);
		if (next.tab !== "idea") return;
		const id = next.id;
		if (!id) return;
		hashLock.current = true;
		setCourseId("");
		setOnlyEdited(false);
		setQuery("");
		setSelected(id);
	}, [hash]);
	(0, import_react.useEffect)(() => {
		if (hashLock.current) {
			hashLock.current = false;
			return;
		}
		if (filtered.some((card) => card.id === selected)) return;
		if (filtered[0]) setSelected(filtered[0].id);
	}, [filtered, selected]);
	const card = (_filtered$find = filtered.find((item) => item.id === selected)) !== null && _filtered$find !== void 0 ? _filtered$find : null;
	(0, import_react.useEffect)(() => {
		if (!card) {
			setDraft(null);
			return;
		}
		setDraft(toDraft(card));
	}, [card]);
	const dirty = card && draft ? JSON.stringify(fromDraft(draft)) !== JSON.stringify(fromDraft(toDraft(card))) : false;
	const edited = rawEditCount();
	async function copyOut(text, ok) {
		try {
			await navigator.clipboard.writeText(text);
			setNotice(ok);
		} catch {
			setPaste(text);
			setNotice(vi ? "Không chép được. Chữ đã nằm ở ô dán." : "Clipboard blocked. The text is in the paste box.");
		}
	}
	function applyPaste(source) {
		try {
			const parsed = JSON.parse(source);
			if (parsed["so-muc-cms"]) {
				const ideaResult = Array.isArray(parsed.ideas) && parsed.ideas.length > 0 ? importRaw(JSON.stringify({ cards: parsed.ideas }), lang) : {
					ok: true,
					applied: 0,
					skipped: 0,
					error: null
				};
				if (!ideaResult.ok) {
					var _ideaResult$error;
					setNotice((_ideaResult$error = ideaResult.error) !== null && _ideaResult$error !== void 0 ? _ideaResult$error : vi ? "Không áp được các ý." : "Could not apply the ideas.");
					return false;
				}
				const cms = importCms(parsed, lang);
				setNotice(vi ? `Đã áp ${ideaResult.applied} ý và ${cms.applied} mục khác${ideaResult.skipped + cms.skipped ? `. Bỏ ${ideaResult.skipped + cms.skipped}` : ""}.` : `Applied ${ideaResult.applied} ideas and ${cms.applied} other items.`);
				setPaste("");
				return true;
			}
		} catch {}
		const result = importRaw(source, lang);
		if (!result.ok) {
			setNotice(result.error);
			return false;
		}
		setNotice(vi ? `Đã áp ${result.applied} thẻ${result.skipped ? `. Bỏ ${result.skipped} id không có trong sổ` : ""}.` : `Applied ${result.applied}${result.skipped ? `. Skipped ${result.skipped} unknown ids` : ""}.`);
		setPaste("");
		return true;
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-widest text-muted",
				children: vi ? "Sửa mọi chữ trong sổ" : "Edit every line in the book"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl leading-tight",
				children: vi ? "Quản lý nội dung" : "Content desk"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl leading-relaxed",
				children: vi ? "Một chỗ cho cả sổ: đầu khóa, đầu phần, đầu buổi, từng ý, và bài cũ. Sửa xong là trang đọc đổi ngay. Tải file, đưa mô hình, dán bản sửa lại. Giữ nguyên id." : "One desk for the whole book: course openers, parts, sessions, ideas, and the older lessons. A save shows up on the reading page at once. Download, let a model edit, paste it back. Keep the ids."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: vi ? `${cards.length} ý · ${edited} ý đã sửa · ${cmsEditCount()} mục khác đã sửa` : `${cards.length} ideas · ${edited} idea edits · ${cmsEditCount()} other edits`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BridgePanel, {
				lang,
				onApply: applyPaste
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
				className: "mt-4 rounded-card border border-line p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
					className: "cursor-pointer text-sm",
					children: vi ? "Quy tắc ghi trong file" : "Rules written into the file"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
					className: "mt-3 whitespace-pre-wrap text-sm leading-relaxed text-muted",
					children: RAW_NOTE
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-11 rounded-full bg-ink px-4 text-sm text-paper",
						onClick: () => download("so-muc-toan-bo.json", exportWhole(), "application/json"),
						children: vi ? "Tải toàn bộ sổ" : "Download the whole book"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-11 rounded-full border border-line px-4 text-sm",
						onClick: () => download("so-muc-y.json", exportJson("both"), "application/json"),
						children: vi ? "Chỉ tải các ý" : "Ideas only"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-11 rounded-full border border-line px-4 text-sm",
						onClick: () => download("so-muc-raw.txt", exportBlocks("both"), "text/plain"),
						children: vi ? "Tải khối chữ" : "Download text blocks"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "min-h-11 cursor-pointer rounded-full border border-line px-4 py-3 text-sm",
						children: [vi ? "Nhập tệp" : "Import a file", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "sr-only",
							type: "file",
							accept: "application/json,text/plain,.json,.txt,.md",
							onChange: async (event) => {
								var _event$target$files;
								const file = (_event$target$files = event.target.files) === null || _event$target$files === void 0 ? void 0 : _event$target$files[0];
								event.target.value = "";
								if (!file) return;
								applyPaste(await file.text());
							}
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-11 rounded-full border border-line px-4 text-sm",
						onClick: () => {
							if (!armClear) {
								setArmClear(true);
								setNotice(vi ? "Bấm lần nữa để xóa mọi sửa trên máy này." : "Press again to drop every edit on this device.");
								return;
							}
							clearRaw();
							clearCms();
							setArmClear(false);
							setNotice(vi ? "Đã trở lại chữ in sẵn." : "Back to the printed text.");
						},
						children: vi ? "Xóa mọi sửa" : "Clear edits"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-4 block text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted",
					children: vi ? "Dán JSON hoặc khối CARD" : "Paste JSON or a CARD block"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					value: paste,
					onChange: (event) => setPaste(event.target.value),
					className: "mt-1 min-h-24 w-full rounded-card border border-line bg-card px-3 py-2 font-mono text-sm leading-relaxed outline-none",
					placeholder: "{\"so-muc-cms\":1,\"ideas\":[...],\"heads\":[...],\"lessons\":[...]}"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-2 min-h-11 rounded-full border border-line px-4 text-sm",
				onClick: () => applyPaste(paste),
				children: vi ? "Áp dụng chữ dán" : "Apply the paste"
			}),
			notice ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm",
				children: notice
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex flex-wrap gap-2",
				children: tabs.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: `min-h-11 rounded-full border px-4 text-sm ${tab === item.id ? "border-ink bg-ink text-paper" : "border-line"}`,
					onClick: () => {
						setTab(item.id);
						setFocusId("");
					},
					children: vi ? item.vi : item.en
				}, item.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: query,
					onChange: (event) => setQuery(event.target.value),
					placeholder: vi ? "Tìm id hoặc câu" : "Find an id or a sentence",
					className: "min-h-11 min-w-0 flex-1 rounded-full border border-line bg-card px-4 text-sm outline-none"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: `min-h-11 rounded-full border px-4 text-sm ${onlyEdited ? "border-ink bg-ink text-paper" : "border-line"}`,
					onClick: () => setOnlyEdited((value) => !value),
					children: vi ? "Chỉ chỗ đã sửa" : "Edits only"
				})]
			}),
			tab !== "idea" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CmsPanel, {
				kind: tab,
				lang,
				needle: query,
				onlyEdited,
				focusId
			}) : null,
			tab === "idea" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					value: courseId,
					onChange: (event) => setCourseId(event.target.value),
					className: "min-h-11 max-w-full rounded-full border border-line bg-card px-4 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: vi ? "Mọi khóa" : "All courses"
					}), courses.map((course) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: course.id,
						children: course.title
					}, course.id))]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-4 md:grid-cols-[16rem_minmax(0,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "max-h-80 overflow-auto rounded-card border border-line md:max-h-[70vh]",
					children: [filtered.map((item) => {
						const on = item.id === (card === null || card === void 0 ? void 0 : card.id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setSelected(item.id),
							className: `block w-full min-h-11 px-3 py-2 text-left ${on ? "bg-ink text-paper" : ""}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm font-medium",
								children: item.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: `block text-xs ${on ? "text-paper" : "text-muted"}`,
								children: [item.id, item.edited ? vi ? " · đã sửa" : " · edited" : ""]
							})]
						}) }, item.id);
					}), filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "p-3 text-sm text-muted",
						children: vi ? "Không có ý nào khớp." : "Nothing matches."
					}) : null]
				}), card && draft ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "min-w-0",
					onSubmit: (event) => {
						event.preventDefault();
						saveCard(card.id, lang, fromDraft(draft));
						setNotice(vi ? `Đã lưu ${card.id}.` : `Saved ${card.id}.`);
						setArmClear(false);
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: card.courseTitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: card.sessionTitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 font-mono text-sm",
							children: [
								card.id,
								" · ",
								lang
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/khai-niem/$conceptId",
									params: { conceptId: card.id },
									className: "inline-flex min-h-11 items-center text-sm text-accent underline",
									children: vi ? "Đọc thẻ" : "Read the card"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "min-h-11 rounded-full border border-line px-4 text-sm",
									onClick: () => {
										const text = cardsToBlocks([{
											...card,
											place: `${card.courseTitle} / ${card.sessionTitle}`
										}]);
										copyOut(text.slice(text.indexOf("===== CARD")).trim(), vi ? "Đã chép khối của ý này." : "Copied this idea.");
									},
									children: vi ? "Chép khối ý này" : "Copy this idea"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "min-h-11 rounded-full border border-line px-4 text-sm",
									onClick: () => {
										setRawPatch(card.id, lang, null);
										setNotice(vi ? "Ý này về chữ in sẵn." : "This idea is back to the printed text.");
									},
									children: vi ? "Bỏ sửa ý này" : "Revert this idea"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 space-y-4",
							children: fields.map((field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs tracking-widest text-muted",
									children: vi ? field.vi : field.en
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									value: draft[field.key],
									onChange: (event) => setDraft({
										...draft,
										[field.key]: event.target.value
									}),
									className: `mt-1 w-full rounded-card border border-line bg-card px-3 py-2 text-sm leading-relaxed outline-none ${field.tall ? "min-h-24" : "min-h-11"} ${field.mono ? "font-mono" : ""}`
								})]
							}, field.key))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-wrap items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "min-h-11 rounded-full bg-ink px-4 text-sm text-paper",
									children: vi ? "Lưu ý này" : "Save this idea"
								}),
								dirty ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-accent",
									children: vi ? "Chưa lưu" : "Not saved"
								}) : null,
								card.edited && !dirty ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-muted",
									children: vi ? "Đang dùng bản đã sửa" : "Overriding the printed card"
								}) : null
							]
						})
					]
				}) : null]
			})] }) : null
		]
	});
}
//#endregion
export { RawPage as component };
