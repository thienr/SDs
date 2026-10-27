import { o as __toESM } from "../_runtime.mjs";
import { _ as sessionOfConcept, f as studyCopy, g as sessionConcepts, m as studyNeighbors, o as getStudy, p as studyListTitle, s as hydrateRaw, u as rawIsEdited } from "./study-BtAMXX88.mjs";
import { c as lessons, o as getLesson, r as courses } from "./catalog-DRaoKsF4.mjs";
import { J as require_react, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, q as require_jsx_runtime, v as createFileRoute, x as useRouter, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as subscribeDone, a as subscribeToc, d as subscribeReview, h as isDone, i as setOpenCourse, l as getReview, m as getDone, n as getToc, o as useTocMemory, p as applyRemoteDone, r as setLastRead, s as applyRemoteReview, t as applyRemoteToc, v as useDone } from "./toc-memory-Cwcczwc2.mjs";
import { c as hydrateCms } from "./cms-store-QsPjr5VR.mjs";
import { a as liveCourse, c as liveSession, d as sessionHead, l as moduleHead, s as liveModule, t as courseHead } from "./cms-live-BOSWGilr.mjs";
import { a as getServerProgress, h as toggleTheme, i as getProgress, l as lessonStatus, m as subscribeProgress, o as hydrateProgress, p as setLang, t as applyRemoteProgress } from "./progress-BbLCT1Se.mjs";
import { a as Settings, c as Moon, h as BookOpen, i as Sun, l as MessageCircle, m as Check, n as TriangleAlert, o as Search, p as ChevronRight, r as TableOfContents, s as Network, t as X, u as Map$1 } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CTnUCwzU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* Path-based preview hosts serve the dev server under `/{port_id}/` and strip
* that prefix before forwarding, so SSR sees `/` while the browser URL keeps the
* prefix. TanStack Start resets `basepath` on hydration, so a `rewrite` keeps
* client routing and generated links aligned with the public URL.
*/
var PATH_BASED_PREVIEW_HOSTS = /* @__PURE__ */ new Set([
	"preview.grok.genai.mil",
	"preview.grok.mil",
	"preview.grokgsac.com"
]);
var PORT_ID_PREFIX = /^\/hds-[a-z0-9]+-\d+-[a-z0-9]+(?=\/|$)/i;
function previewPathPrefix(hostname, pathname) {
	var _PORT_ID_PREFIX$exec;
	if (!PATH_BASED_PREVIEW_HOSTS.has(hostname.toLowerCase())) return void 0;
	return (_PORT_ID_PREFIX$exec = PORT_ID_PREFIX.exec(pathname)) === null || _PORT_ID_PREFIX$exec === void 0 ? void 0 : _PORT_ID_PREFIX$exec[0];
}
function prefixRewrite(prefix) {
	return {
		input: ({ url }) => {
			if (url.pathname === prefix) url.pathname = "/";
			else if (url.pathname.startsWith(`${prefix}/`)) url.pathname = url.pathname.slice(prefix.length);
			return url;
		},
		output: ({ url }) => {
			url.pathname = `${prefix}${url.pathname}`;
			return url;
		}
	};
}
function previewPathRewrite() {
	if (typeof window === "undefined") return void 0;
	const prefix = previewPathPrefix(window.location.hostname, window.location.pathname);
	return prefix ? prefixRewrite(prefix) : void 0;
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin !== null && ancestorOrigin !== void 0 ? ancestorOrigin : ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		var _options$getRoutePath, _options$getRoutePath2;
		const paths = (_options$getRoutePath = (_options$getRoutePath2 = options.getRoutePaths) === null || _options$getRoutePath2 === void 0 ? void 0 : _options$getRoutePath2.call(options)) !== null && _options$getRoutePath !== void 0 ? _options$getRoutePath : [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		var _hostMessageHandlers$;
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		(_hostMessageHandlers$ = hostMessageHandlers.get(envelope.data.type)) === null || _hostMessageHandlers$ === void 0 || _hostMessageHandlers$(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
/** Các khóa chỉ học qua thẻ khái niệm, không liệt kê bài giảng gốc. */
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
var words = {
	vi: {
		why: "Biết để làm gì",
		prior: "Nối với cái trước",
		editCourse: "Sửa đầu khóa",
		editPart: "Sửa đầu phần",
		page: "Mở trang khóa",
		last: "đọc dở ở đây",
		seen: "Đã xem",
		viewing: "Đang xem",
		not: "Chưa xem",
		edited: "đã sửa",
		none: "Buổi này chưa có thẻ riêng."
	},
	en: {
		why: "What you use it for",
		prior: "How it links",
		editCourse: "Edit this opener",
		editPart: "Edit this part",
		page: "Open the course page",
		last: "you stopped here",
		seen: "Seen",
		viewing: "Reading",
		not: "Not yet",
		edited: "edited",
		none: "No cards for this session yet."
	}
};
/** Nút có mũi tên bung xuống. */
function Disclosure({ id, open, onToggle, head, children, level = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id,
		className: "scroll-mt-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			"aria-expanded": open,
			onClick: onToggle,
			className: `flex min-h-11 w-full items-start gap-2 text-left ${level === 0 ? "py-2" : "py-1"}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
				className: `mt-1 size-4 shrink-0 text-accent transition-transform ${open ? "rotate-90" : ""}`,
				"aria-hidden": true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "min-w-0 flex-1",
				children: head
			})]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "ml-6",
			children
		}) : null]
	});
}
function CoverInfo({ plain, why, prior, lang, editHash, onNavigate }) {
	const t = words[lang];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-2 rounded-card border border-line bg-card p-3 text-sm leading-relaxed",
		children: [
			plain ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: plain }) : null,
			why ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-xs uppercase tracking-widest text-accent",
					children: [t.why, ". "]
				}), why]
			}) : null,
			prior ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-xs uppercase tracking-widest",
					children: [t.prior, ". "]
				}), prior]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/goc",
				hash: editHash,
				onClick: onNavigate,
				className: "mt-2 inline-block text-xs text-accent underline",
				children: editHash.startsWith("course:") ? t.editCourse : t.editPart
			})
		]
	});
}
function SessionLinks({ course, modTitle, sessionId, lessonIds, lang, onNavigate, lastItem }) {
	var _sessionConcepts$sess;
	const t = words[lang];
	const doneMap = useDone();
	const ids = (_sessionConcepts$sess = sessionConcepts[sessionId]) !== null && _sessionConcepts$sess !== void 0 ? _sessionConcepts$sess : [];
	const showLessons = ids.filter((id) => !id.startsWith("d-")).length === 0 && !trackOnly.has(modTitle);
	const mine = new Set(lessons.filter((l) => l.courseId === course.id).map((l) => l.id));
	const lessonRows = showLessons ? lessonIds.filter((id) => mine.has(id)) : [];
	if (!ids.length && !lessonRows.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "py-1 text-sm text-muted",
		children: t.none
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
		className: "mb-2 space-y-0.5",
		children: [ids.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/khai-niem/$conceptId",
			params: { conceptId: id },
			onClick: onNavigate,
			className: `flex min-h-11 items-center justify-between gap-3 rounded-lg px-2 text-sm hover:bg-card ${lastItem === id ? "bg-card ring-1 ring-accent" : ""}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-medium",
				children: [
					isDone(doneMap, id) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
						className: "mr-1 inline size-4 text-accent",
						"aria-label": lang === "en" ? "learned" : "đã học"
					}) : null,
					studyListTitle(id, lang),
					lastItem === id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-2 text-xs font-normal text-accent",
						children: t.last
					}) : null,
					rawIsEdited(id, lang) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-2 text-xs font-normal text-accent",
						children: t.edited
					}) : null
				]
			})
		}) }, id)), lessonRows.map((id) => {
			const lesson = getLesson(id);
			if (!lesson) return null;
			const st = lessonStatus(id);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/bai/$lessonId",
				params: { lessonId: id },
				onClick: onNavigate,
				className: `flex min-h-11 items-center justify-between gap-3 rounded-lg px-2 text-sm hover:bg-card ${lastItem === id ? "bg-card ring-1 ring-accent" : ""}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-medium",
					children: [lesson.title, lastItem === id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-2 text-xs font-normal text-accent",
						children: t.last
					}) : null]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "shrink-0 text-xs text-muted",
					children: st === "seen" ? t.seen : st === "viewing" ? t.viewing : t.not
				})]
			}) }, id);
		})]
	});
}
/**
* Mục lục của một khóa: phần → buổi → liên kết từng bài. Mỗi cấp có mũi tên bung xuống;
* phần «bìa» (giới thiệu) cũng bung ra ngay tại chỗ.
*/
function ModuleTree({ course, lang, openIds, onNavigate }) {
	const mem = useTocMemory();
	const last = mem.read && mem.read.course === course.id ? mem.read : null;
	const [open, setOpen] = (0, import_react.useState)(() => /* @__PURE__ */ new Set([
		...openIds !== null && openIds !== void 0 ? openIds : [],
		...(last === null || last === void 0 ? void 0 : last.mod) ? [`m:${last.mod}`] : [],
		...(last === null || last === void 0 ? void 0 : last.ses) ? [`s:${last.ses}`] : []
	]));
	(0, import_react.useEffect)(() => {
		const add = [...(last === null || last === void 0 ? void 0 : last.mod) ? [`m:${last.mod}`] : [], ...(last === null || last === void 0 ? void 0 : last.ses) ? [`s:${last.ses}`] : []];
		if (add.length) setOpen((prev) => add.every((k) => prev.has(k)) ? prev : /* @__PURE__ */ new Set([...prev, ...add]));
	}, [last === null || last === void 0 ? void 0 : last.mod, last === null || last === void 0 ? void 0 : last.ses]);
	const toggle = (k) => setOpen((prev) => {
		const n = new Set(prev);
		if (n.has(k)) n.delete(k);
		else n.add(k);
		return n;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "space-y-1",
		children: course.modules.map((mod, mi) => {
			const head = liveModule(course.id, mod.title, lang);
			const mk = `m:${mod.id}`;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "border-b border-line last:border-b-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Disclosure, {
					id: `mod-${mod.id}`,
					open: open.has(mk),
					onToggle: () => toggle(mk),
					head: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs tracking-widest text-muted",
							children: [mi + 1, mod.optional ? " · optional" : ""]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-medium",
							children: mod.title
						}),
						!open.has(mk) && head.why ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-0.5 block text-sm text-muted",
							children: head.why
						}) : null
					] }),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoverInfo, {
						plain: head.plain,
						why: head.why,
						prior: head.prior,
						lang,
						editHash: `module:${course.id}||${mod.title}`,
						onNavigate
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", { children: mod.sessions.map((s) => {
						var _sessionConcepts$s$id;
						const sk = `s:${s.id}`;
						const ids = ((_sessionConcepts$s$id = sessionConcepts[s.id]) !== null && _sessionConcepts$s$id !== void 0 ? _sessionConcepts$s$id : []).length;
						const blurb = liveSession(course.id, mod.title, s.title, lang);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Disclosure, {
							id: `ses-${s.id}`,
							level: 1,
							open: open.has(sk),
							onToggle: () => toggle(sk),
							head: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-baseline justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-sm",
									children: [s.title, s.optional ? " · optional" : ""]
								}), ids > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "shrink-0 text-xs text-muted",
									children: ids
								}) : null]
							}),
							children: [blurb ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-1 text-sm leading-relaxed text-muted",
								children: blurb
							}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SessionLinks, {
								lastItem: (last === null || last === void 0 ? void 0 : last.ses) === s.id ? last.item : null,
								course,
								modTitle: mod.title,
								sessionId: s.id,
								lessonIds: s.lessonIds,
								lang,
								onNavigate
							})]
						}) }, s.id);
					}) })]
				})
			}, mod.id);
		})
	});
}
function locate(pathname, hash) {
	const clean = hash.replace(/^#/, "");
	const khoa = pathname.match(/^\/khoa\/([^/]+)/);
	const idea = pathname.match(/^\/khai-niem\/([^/]+)/);
	const bai = pathname.match(/^\/bai\/([^/]+)/);
	if (idea) {
		var _found$courseId, _found$moduleId;
		const conceptId = decodeURIComponent(idea[1]);
		const sessionId = sessionOfConcept(conceptId);
		const found = findSession(sessionId);
		return {
			courseId: (_found$courseId = found === null || found === void 0 ? void 0 : found.courseId) !== null && _found$courseId !== void 0 ? _found$courseId : null,
			moduleId: (_found$moduleId = found === null || found === void 0 ? void 0 : found.moduleId) !== null && _found$moduleId !== void 0 ? _found$moduleId : null,
			sessionId,
			conceptId
		};
	}
	if (bai) {
		var _lesson$courseId, _lesson$moduleId, _lesson$sessionId;
		const lesson = getLesson(decodeURIComponent(bai[1]));
		return {
			courseId: (_lesson$courseId = lesson === null || lesson === void 0 ? void 0 : lesson.courseId) !== null && _lesson$courseId !== void 0 ? _lesson$courseId : null,
			moduleId: (_lesson$moduleId = lesson === null || lesson === void 0 ? void 0 : lesson.moduleId) !== null && _lesson$moduleId !== void 0 ? _lesson$moduleId : null,
			sessionId: (_lesson$sessionId = lesson === null || lesson === void 0 ? void 0 : lesson.sessionId) !== null && _lesson$sessionId !== void 0 ? _lesson$sessionId : null,
			conceptId: null
		};
	}
	if (khoa) {
		const courseId = decodeURIComponent(khoa[1]);
		if (clean.startsWith("ses-")) {
			var _found$moduleId2;
			const sessionId = clean.slice(4);
			const found = findSession(sessionId);
			return {
				courseId,
				moduleId: (_found$moduleId2 = found === null || found === void 0 ? void 0 : found.moduleId) !== null && _found$moduleId2 !== void 0 ? _found$moduleId2 : null,
				sessionId,
				conceptId: null
			};
		}
		if (clean.startsWith("mod-")) return {
			courseId,
			moduleId: clean.slice(4),
			sessionId: null,
			conceptId: null
		};
		return {
			courseId,
			moduleId: null,
			sessionId: null,
			conceptId: null
		};
	}
	return {
		courseId: null,
		moduleId: null,
		sessionId: null,
		conceptId: null
	};
}
function findSession(sessionId) {
	if (!sessionId) return null;
	for (const course of courses) for (const mod of course.modules) {
		const session = mod.sessions.find((item) => item.id === sessionId);
		if (session) return {
			courseId: course.id,
			moduleId: mod.id,
			session
		};
	}
	return null;
}
function MapBar() {
	var _courses$find, _course$modules$find, _mod$sessions$find, _mem$course, _exec;
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const hash = useRouterState({ select: (state) => state.location.hash });
	const lang = (0, import_react.useSyncExternalStore)(subscribeProgress, getProgress, getServerProgress).lang;
	const here = (0, import_react.useMemo)(() => locate(pathname, hash), [pathname, hash]);
	const [open, setOpen] = (0, import_react.useState)(false);
	const mem = useTocMemory();
	const course = (_courses$find = courses.find((item) => item.id === here.courseId)) !== null && _courses$find !== void 0 ? _courses$find : null;
	const mod = (_course$modules$find = course === null || course === void 0 ? void 0 : course.modules.find((item) => item.id === here.moduleId)) !== null && _course$modules$find !== void 0 ? _course$modules$find : null;
	const session = (_mod$sessions$find = mod === null || mod === void 0 ? void 0 : mod.sessions.find((item) => item.id === here.sessionId)) !== null && _mod$sessions$find !== void 0 ? _mod$sessions$find : null;
	const near = here.conceptId ? studyNeighbors(here.conceptId) : null;
	const crumb = course ? [
		course.title,
		mod === null || mod === void 0 ? void 0 : mod.title,
		session === null || session === void 0 ? void 0 : session.title
	].filter(Boolean).join("  ·  ") : lang === "en" ? "All courses" : "Mọi khóa";
	const spot = near && near.index >= 0 ? `${near.index + 1}/${near.total}` : null;
	const shownCourse = (_mem$course = mem.course) !== null && _mem$course !== void 0 ? _mem$course : here.courseId;
	const lessonId = (_exec = /^\/bai\/([^/]+)/.exec(pathname)) === null || _exec === void 0 ? void 0 : _exec[1];
	(0, import_react.useEffect)(() => {
		var _here$conceptId;
		if (!here.courseId) return;
		setLastRead({
			course: here.courseId,
			mod: here.moduleId,
			ses: here.sessionId,
			item: (_here$conceptId = here.conceptId) !== null && _here$conceptId !== void 0 ? _here$conceptId : lessonId ? decodeURIComponent(lessonId) : null
		});
	}, [
		here.courseId,
		here.moduleId,
		here.sessionId,
		here.conceptId,
		lessonId
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "sticky top-14 z-20 border-b border-line bg-paper/95 backdrop-blur md:top-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: "flex min-h-12 w-full items-center gap-3 px-4 text-left md:px-8",
			onClick: () => setOpen(true),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Map$1, { className: "size-4 shrink-0 text-accent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "min-w-0 flex-1 truncate text-sm",
					children: crumb
				}),
				spot ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "shrink-0 text-xs text-muted",
					children: spot
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "shrink-0 text-xs text-accent",
					children: lang === "en" ? "Jump" : "Đi"
				})
			]
		})
	}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-40 flex flex-col bg-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between border-b border-line px-4 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-2xl",
				children: lang === "en" ? "Where to" : "Đi tới"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "inline-flex size-11 items-center justify-center",
				onClick: () => setOpen(false),
				"aria-label": lang === "en" ? "Close" : "Đóng",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "min-h-0 flex-1 overflow-y-auto px-4 pb-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "divide-y divide-line",
				children: courses.map((item, index) => {
					const expanded = shownCourse === item.id;
					const head = liveCourse(item.id, lang);
					const openIds = [...here.courseId === item.id && here.moduleId ? [`m:${here.moduleId}`] : [], ...here.courseId === item.id && here.sessionId ? [`s:${here.sessionId}`] : []];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Disclosure, {
						open: expanded,
						onToggle: () => setOpenCourse(expanded ? "" : item.id),
						head: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: item.id === here.courseId ? "text-accent" : "",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-muted",
								children: [String(index + 1).padStart(2, "0"), item.optional ? " · optional" : ""]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-medium",
								children: item.title
							})]
						}),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoverInfo, {
								plain: head.plain,
								why: head.why,
								prior: head.prior,
								lang,
								editHash: `course:${item.id}`,
								onNavigate: () => setOpen(false)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/khoa/$courseId",
								params: { courseId: item.id },
								className: "mb-2 inline-flex min-h-11 items-center text-sm text-accent underline",
								onClick: () => setOpen(false),
								children: words[lang].page
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModuleTree, {
								course: item,
								lang,
								openIds,
								onNavigate: () => setOpen(false)
							})
						]
					}) }, item.id);
				})
			})
		})]
	}) : null] });
}
var RANK = {
	unseen: 0,
	viewing: 1,
	seen: 2
};
var emptySync = () => ({
	p: {
		items: {},
		last: null,
		at: 0
	},
	t: {
		course: null,
		read: null,
		at: 0
	},
	r: {},
	d: {}
});
var str = (v, max = 120) => typeof v === "string" && v.length <= max ? v : null;
var num = (v) => typeof v === "number" && Number.isFinite(v) ? v : 0;
/** Làm sạch dữ liệu nhận từ ngoài: bỏ mọi thứ sai dạng, giới hạn số mục. */
function cleanSync(raw) {
	var _o$p, _o$p2, _o$p3, _o$t, _o$t2, _o$t3;
	const out = emptySync();
	if (!raw || typeof raw !== "object") return out;
	const o = raw;
	const items = (_o$p = o.p) === null || _o$p === void 0 ? void 0 : _o$p.items;
	if (items && typeof items === "object") {
		let n = 0;
		for (const [k, v] of Object.entries(items)) {
			if (n >= 6e3) break;
			if (k.length <= 120 && (v === "seen" || v === "viewing" || v === "unseen")) {
				out.p.items[k] = v;
				n += 1;
			}
		}
	}
	out.p.last = str((_o$p2 = o.p) === null || _o$p2 === void 0 ? void 0 : _o$p2.last);
	out.p.at = num((_o$p3 = o.p) === null || _o$p3 === void 0 ? void 0 : _o$p3.at);
	out.t.course = str((_o$t = o.t) === null || _o$t === void 0 ? void 0 : _o$t.course);
	const rd = (_o$t2 = o.t) === null || _o$t2 === void 0 ? void 0 : _o$t2.read;
	if (rd && typeof rd === "object" && str(rd.course)) out.t.read = {
		course: rd.course,
		mod: str(rd.mod),
		ses: str(rd.ses),
		item: str(rd.item)
	};
	out.t.at = num((_o$t3 = o.t) === null || _o$t3 === void 0 ? void 0 : _o$t3.at);
	if (o.r && typeof o.r === "object") {
		let n = 0;
		for (const [k, v] of Object.entries(o.r)) {
			if (n >= 6e3) break;
			const d = str(v === null || v === void 0 ? void 0 : v.d, 10);
			if (k.length <= 120 && d && /^\d{4}-\d{2}-\d{2}$/.test(d) && Number.isInteger(v.b) && v.b >= 0 && v.b <= 5) {
				out.r[k] = {
					b: v.b,
					d,
					a: num(v.a)
				};
				n += 1;
			}
		}
	}
	if (o.d && typeof o.d === "object") {
		let n = 0;
		for (const [k, v] of Object.entries(o.d)) {
			if (n >= 6e3) break;
			if (k.length <= 120 && ((v === null || v === void 0 ? void 0 : v.x) === 0 || (v === null || v === void 0 ? void 0 : v.x) === 1)) {
				out.d[k] = {
					x: v.x,
					a: num(v.a)
				};
				n += 1;
			}
		}
	}
	return out;
}
function mergeSync(x, y) {
	const out = emptySync();
	const keys = /* @__PURE__ */ new Set([...Object.keys(x.p.items), ...Object.keys(y.p.items)]);
	for (const k of keys) {
		var _x$p$items$k, _y$p$items$k;
		const a = (_x$p$items$k = x.p.items[k]) !== null && _x$p$items$k !== void 0 ? _x$p$items$k : "unseen";
		const b = (_y$p$items$k = y.p.items[k]) !== null && _y$p$items$k !== void 0 ? _y$p$items$k : "unseen";
		out.p.items[k] = RANK[a] >= RANK[b] ? a : b;
	}
	const pw = y.p.at > x.p.at ? y.p : x.p;
	out.p.last = pw.last;
	out.p.at = pw.at;
	const tw = y.t.at > x.t.at ? y.t : x.t;
	out.t = {
		course: tw.course,
		read: tw.read,
		at: tw.at
	};
	for (const k of /* @__PURE__ */ new Set([...Object.keys(x.r), ...Object.keys(y.r)])) {
		const a = x.r[k];
		const b = y.r[k];
		out.r[k] = !a ? b : !b ? a : b.a > a.a ? b : a;
	}
	for (const k of /* @__PURE__ */ new Set([...Object.keys(x.d), ...Object.keys(y.d)])) {
		const a = x.d[k];
		const b = y.d[k];
		out.d[k] = !a ? b : !b ? a : b.a > a.a ? b : a;
	}
	return out;
}
var CODE_KEY = "so-muc:sync-code";
var status = {
	code: null,
	state: "off",
	at: 0,
	msg: ""
};
var OFF = status;
var subs = /* @__PURE__ */ new Set();
var applying = false;
var timer = null;
var started = false;
var inflight = false;
function set(next) {
	status = {
		...status,
		...next
	};
	subs.forEach((f) => f());
}
var useSync = () => (0, import_react.useSyncExternalStore)((f) => (subs.add(f), () => subs.delete(f)), () => status, () => OFF);
function readCode() {
	try {
		return localStorage.getItem(CODE_KEY);
	} catch {
		return null;
	}
}
function newCode() {
	const bytes = crypto.getRandomValues(/* @__PURE__ */ new Uint8Array(18));
	return btoa(String.fromCharCode(...bytes)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function local() {
	var _p$lastAt, _t$at;
	const p = getProgress();
	const t = getToc();
	return cleanSync({
		p: {
			items: p.items,
			last: p.lastLessonId,
			at: (_p$lastAt = p.lastAt) !== null && _p$lastAt !== void 0 ? _p$lastAt : 0
		},
		t: {
			course: t.course,
			read: t.read,
			at: (_t$at = t.at) !== null && _t$at !== void 0 ? _t$at : 0
		},
		r: getReview(),
		d: getDone()
	});
}
function apply(d) {
	applying = true;
	try {
		applyRemoteProgress(d.p.items, d.p.last, d.p.at);
		applyRemoteToc(d.t);
		applyRemoteReview(d.r);
		applyRemoteDone(d.d);
	} finally {
		applying = false;
	}
}
async function syncNow() {
	const code = readCode();
	if (!code) return false;
	if (inflight) return false;
	inflight = true;
	set({
		code,
		state: "busy",
		msg: ""
	});
	try {
		var _body$error;
		const res = await fetch("/api/sync", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({
				code,
				data: local()
			})
		});
		const body = await res.json();
		if (!res.ok) throw new Error((_body$error = body.error) !== null && _body$error !== void 0 ? _body$error : "Lỗi đồng bộ");
		apply(mergeSync(local(), cleanSync(body.data)));
		set({
			state: "idle",
			at: Date.now(),
			msg: ""
		});
		return true;
	} catch (e) {
		set({
			state: "error",
			msg: e instanceof Error ? e.message : "Lỗi đồng bộ"
		});
		return false;
	} finally {
		inflight = false;
	}
}
function schedule() {
	if (applying || !readCode()) return;
	if (timer) clearTimeout(timer);
	timer = setTimeout(() => void syncNow(), 4e3);
}
/** Gọi một lần khi app mở: đồng bộ ngay, rồi đồng bộ sau mỗi thay đổi và khi quay lại tab. */
function startAutoSync() {
	if (started || typeof window === "undefined") return;
	started = true;
	const code = readCode();
	set({
		code,
		state: code ? "idle" : "off"
	});
	subscribeProgress(schedule);
	subscribeToc(schedule);
	subscribeReview(schedule);
	subscribeDone(schedule);
	document.addEventListener("visibilitychange", () => {
		if (document.visibilityState === "visible") syncNow();
	});
	syncNow();
}
async function enableSync(code) {
	try {
		localStorage.setItem(CODE_KEY, code);
	} catch {
		set({
			state: "error",
			msg: "Trình duyệt không cho lưu mã."
		});
		return false;
	}
	set({
		code,
		state: "idle"
	});
	return syncNow();
}
function disableSync() {
	try {
		localStorage.removeItem(CODE_KEY);
	} catch {}
	set({
		code: null,
		state: "off",
		msg: ""
	});
}
var cache$1 = null;
var pending = null;
function loadSelfTest() {
	var _pending;
	if (cache$1) return Promise.resolve(cache$1);
	(_pending = pending) !== null && _pending !== void 0 || (pending = import("./self-test-FEfmWSGl.mjs").then((m) => {
		var _m$default;
		return cache$1 = (_m$default = m.default) !== null && _m$default !== void 0 ? _m$default : m;
	}));
	return pending;
}
function registerSw() {
	if (typeof navigator === "undefined" || !("serviceWorker" in navigator)) return;
	navigator.serviceWorker.register("/sw.js").catch(() => {});
}
var OFFLINE_KEY = "so-muc:offline";
/** Tải mọi trang thẻ + file JS/CSS để mở được khi không có mạng. */
async function downloadOffline(onProgress) {
	var _navigator$serviceWor;
	registerSw();
	await ((_navigator$serviceWor = navigator.serviceWorker) === null || _navigator$serviceWor === void 0 ? void 0 : _navigator$serviceWor.ready);
	const ids = [...new Set(Object.values(sessionConcepts).flat())];
	const urls = [
		"/",
		"/luyen-tap",
		...courses.map((c) => `/khoa/${c.id}`),
		...ids.map((id) => `/khai-niem/${id}`)
	];
	const assets = /* @__PURE__ */ new Set();
	let done = 0;
	const queue = [...urls];
	const worker = async () => {
		for (let u = queue.shift(); u; u = queue.shift()) {
			try {
				const res = await fetch(u);
				if (res.ok) for (const m of (await res.text()).matchAll(/(?:href|src)="(\/assets\/[^"]+)"/g)) assets.add(m[1]);
			} catch {}
			done += 1;
			onProgress(done, urls.length);
		}
	};
	await Promise.all([
		worker(),
		worker(),
		worker(),
		worker()
	]);
	await Promise.all([...assets].map((a) => fetch(a).catch(() => null)));
	await loadSelfTest().catch(() => null);
	try {
		localStorage.setItem(OFFLINE_KEY, String(Date.now()));
	} catch {}
}
var AskAiPanel = (0, import_react.lazy)(() => import("./ask-ai-panel-BgO9c3hB.mjs"));
var links = [
	{
		to: "/",
		vi: "Học",
		en: "Study",
		icon: BookOpen
	},
	{
		to: "/ban-do",
		vi: "Sơ đồ",
		en: "Mind map",
		icon: Network
	},
	{
		to: "/tim-kiem",
		vi: "Tìm",
		en: "Search",
		icon: Search
	},
	{
		to: "/cong-thuc",
		vi: "Công thức",
		en: "Formulas",
		icon: TableOfContents
	},
	{
		to: "/do-phu",
		vi: "Độ phủ",
		en: "Coverage",
		icon: TableOfContents
	}
];
function LangSwitch({ lang }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "inline-flex rounded-full border border-line p-0.5 text-xs font-medium",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: `min-h-11 min-w-11 rounded-full px-2 ${lang === "vi" ? "bg-ink text-paper" : "text-muted"}`,
			onClick: () => setLang("vi"),
			children: "VI"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: `min-h-11 min-w-11 rounded-full px-2 ${lang === "en" ? "bg-ink text-paper" : "text-muted"}`,
			onClick: () => setLang("en"),
			children: "EN"
		})]
	});
}
function AppShell({ children }) {
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const progress = (0, import_react.useSyncExternalStore)(subscribeProgress, getProgress, getServerProgress);
	const lang = progress.lang;
	const [ask, setAsk] = (0, import_react.useState)(false);
	const label = (link) => lang === "en" ? link.en : link.vi;
	(0, import_react.useEffect)(() => {
		hydrateProgress();
		hydrateRaw();
		hydrateCms();
		startAutoSync();
		registerSw();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl md:grid-cols-[220px_minmax(0,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "sticky top-0 hidden h-dvh flex-col gap-6 border-r border-line px-4 py-6 md:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "font-display text-3xl leading-none",
							children: "Sổ Mực"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "flex flex-col gap-1",
							children: [
								links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: link.to,
									className: `min-h-11 rounded-full px-3 py-2 text-sm ${pathname === link.to ? "bg-ink text-paper" : "text-muted"}`,
									children: label(link)
								}, link.to)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/tu-dien",
									className: `min-h-11 rounded-full px-3 py-2 text-sm ${pathname === "/tu-dien" ? "bg-ink text-paper" : "text-muted"}`,
									children: lang === "en" ? "Glossary" : "Từ điển"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/goc",
									className: `min-h-11 rounded-full px-3 py-2 text-sm ${pathname === "/goc" ? "bg-ink text-paper" : "text-muted"}`,
									children: lang === "en" ? "Content" : "Quản lý"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-auto flex flex-col gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangSwitch, { lang }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "inline-flex min-h-11 items-center gap-2 text-sm",
								onClick: () => toggleTheme(),
								children: [progress.theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "size-4" }), progress.theme === "dark" ? lang === "en" ? "Light" : "Nền sáng" : lang === "en" ? "Dark" : "Nền tối"]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
							className: "sticky top-0 z-20 flex items-center justify-between border-b border-line bg-paper/90 px-4 py-3 backdrop-blur md:hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "inline-flex min-h-11 items-center font-display text-2xl",
								children: "Sổ Mực"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/goc",
										className: "inline-flex size-11 items-center justify-center",
										"aria-label": lang === "en" ? "Content" : "Quản lý",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "size-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangSwitch, { lang }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "inline-flex size-11 items-center justify-center",
										onClick: () => toggleTheme(),
										"aria-label": lang === "en" ? "Toggle theme" : "Đổi nền",
										children: progress.theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "size-5" })
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapBar, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
							className: "px-4 pb-24 pt-4 md:px-8 md:pb-16 md:pt-8",
							children
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setAsk(true),
				"aria-label": lang === "en" ? "Ask AI" : "Hỏi AI",
				className: "fixed bottom-[4.75rem] right-4 z-30 inline-flex size-14 items-center justify-center rounded-full bg-accent text-white shadow-lg md:bottom-6 md:right-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
					className: "size-6",
					"aria-hidden": true
				})
			}),
			ask ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: null,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AskAiPanel, {
					lang,
					path: pathname,
					onClose: () => setAsk(false)
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "fixed inset-x-0 bottom-0 z-20 grid grid-cols-5 border-t border-line bg-card md:hidden",
				children: links.map((link) => {
					const Icon = link.icon;
					const on = pathname === link.to;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: link.to,
						className: `flex min-h-14 flex-col items-center justify-center gap-1 text-xs ${on ? "text-accent" : "text-muted"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" }), label(link)]
					}, link.to);
				})
			})
		]
	});
}
var styles_default = "/assets/styles-CCec4D-k.css";
var Route$17 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Sổ Mực" },
			{
				name: "theme-color",
				content: "#f3eee6"
			},
			{
				name: "apple-mobile-web-app-capable",
				content: "yes"
			},
			{
				name: "mobile-web-app-capable",
				content: "yes"
			},
			{
				name: "apple-mobile-web-app-title",
				content: "Sổ Mực"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/icon-180.png"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,560;9..144,640&family=Outfit:wght@400;500;600&display=swap"
			}
		]
	}),
	component: RootComponent
});
function RootComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "vi",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: "if(!Object.hasOwn)Object.hasOwn=function(o,k){return Object.prototype.hasOwnProperty.call(o,k)};if(!String.prototype.replaceAll)String.prototype.replaceAll=function(a,b){return a instanceof RegExp?this.replace(a,b):this.split(a).join(b)};if(!Array.prototype.at)Object.defineProperty(Array.prototype,'at',{value:function(n){n=Math.trunc(n)||0;if(n<0)n+=this.length;return this[n]},writable:true,configurable:true});if(!window.structuredClone)window.structuredClone=function(v){return JSON.parse(JSON.stringify(v))};" } }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: "try{var r=localStorage.getItem('so-muc-v1');if(r){var t=JSON.parse(r).theme;if(t==='dark'||t==='light')document.documentElement.dataset.theme=t}}catch(e){}" } })
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
var $$splitComponentImporter$13 = () => import("./routes--FU_0ZQc.mjs");
var Route$16 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$13, "component") });
var $$splitComponentImporter$12 = () => import("./ban-do-ZB8I3A76.mjs");
var Route$15 = createFileRoute("/ban-do")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("./bao-loi-DEdbHimQ.mjs");
var Route$14 = createFileRoute("/bao-loi")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./cong-thuc-BQYY-0JY.mjs");
var Route$13 = createFileRoute("/cong-thuc")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./do-phu-D55wbr3H.mjs");
var Route$12 = createFileRoute("/do-phu")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./dong-bo-CNW3B4hD.mjs");
var Route$11 = createFileRoute("/dong-bo")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./goc-Dquqge_R.mjs");
var Route$10 = createFileRoute("/goc")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./luyen-tap-ZtQNTPMA.mjs");
var Route$9 = createFileRoute("/luyen-tap")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./nghe-BFK7a7vH.mjs");
var Route$8 = createFileRoute("/nghe")({
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
	validateSearch: (s) => ({ c: typeof s.c === "string" ? s.c : void 0 })
});
var $$splitComponentImporter$4 = () => import("./tim-kiem-DD7NpIXU.mjs");
var Route$7 = createFileRoute("/tim-kiem")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./tu-dien-SOqTewh3.mjs");
var Route$6 = createFileRoute("/tu-dien")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var CORS = {
	"access-control-allow-origin": "*",
	"access-control-allow-methods": "GET, POST, OPTIONS",
	"access-control-allow-headers": "content-type, authorization, accept, mcp-protocol-version, mcp-session-id",
	"access-control-expose-headers": "mcp-session-id",
	"cache-control": "no-store"
};
function apiJson(body, status = 200) {
	return new Response(JSON.stringify(body), {
		status,
		headers: {
			"content-type": "application/json; charset=utf-8",
			...CORS
		}
	});
}
function apiEmpty(status = 204) {
	return new Response(null, {
		status,
		headers: CORS
	});
}
function bearer(request) {
	var _request$headers$get, _match$;
	const header = (_request$headers$get = request.headers.get("authorization")) !== null && _request$headers$get !== void 0 ? _request$headers$get : "";
	const match = /^Bearer\s+(\S+)/i.exec(header);
	return (_match$ = match === null || match === void 0 ? void 0 : match[1]) !== null && _match$ !== void 0 ? _match$ : null;
}
var cache = /* @__PURE__ */ new Map();
function publicIdeas(lang) {
	const hit = cache.get(lang);
	if (hit) return hit;
	const out = [];
	for (const course of courses) for (const mod of course.modules) for (const session of mod.sessions) {
		var _sessionConcepts$sess;
		for (const id of (_sessionConcepts$sess = sessionConcepts[session.id]) !== null && _sessionConcepts$sess !== void 0 ? _sessionConcepts$sess : []) {
			const concept = getStudy(id);
			if (!concept) continue;
			const text = studyCopy(concept, lang, true);
			out.push({
				id,
				lang,
				courseId: course.id,
				courseTitle: course.title,
				sessionId: session.id,
				sessionTitle: session.title,
				...text
			});
		}
	}
	cache.set(lang, out);
	return out;
}
function bookMeta() {
	return {
		name: "Sổ Mực",
		"so-muc-api": 1,
		read: "/api/so-muc",
		mcp: "/api/mcp",
		courses: courses.length,
		ideas: publicIdeas("vi").length,
		queries: [
			"meta",
			"outline",
			"ideas",
			"idea",
			"heads",
			"lesson",
			"gate",
			"inbox"
		],
		note: "GET đọc chữ in sẵn, không cần khóa. Bản sửa trên từng máy không nằm ở đây. Mô hình gửi bản sửa bằng MCP submit_edit hoặc POST /api/so-muc. Người mở Quản lý bấm Áp dụng thì trang đọc đổi. Giữ nguyên id. Không thêm câu hỏi."
	};
}
function publicOutline(courseId) {
	return (courseId ? courses.filter((course) => course.id === courseId) : courses).map((course) => ({
		id: course.id,
		title: course.title,
		modules: course.modules.map((mod) => ({
			id: mod.id,
			title: mod.title,
			optional: mod.optional,
			sessions: mod.sessions.map((session) => {
				var _sessionConcepts$sess2;
				return {
					id: session.id,
					title: session.title,
					optional: session.optional,
					ideas: (_sessionConcepts$sess2 = sessionConcepts[session.id]) !== null && _sessionConcepts$sess2 !== void 0 ? _sessionConcepts$sess2 : []
				};
			})
		}))
	}));
}
function publicIdea(id, lang) {
	var _publicIdeas$find;
	return (_publicIdeas$find = publicIdeas(lang).find((card) => card.id === id)) !== null && _publicIdeas$find !== void 0 ? _publicIdeas$find : null;
}
function searchIdeas(query, lang, offset, limit, courseId) {
	const needle = query.trim().toLowerCase();
	const rows = publicIdeas(lang).filter((card) => {
		if (courseId && card.courseId !== courseId) return false;
		if (!needle) return true;
		return `${card.id} ${card.title} ${card.plain} ${card.why} ${card.sessionTitle} ${card.courseTitle}`.toLowerCase().includes(needle);
	});
	return {
		total: rows.length,
		offset,
		ideas: rows.slice(offset, offset + limit).map(slim)
	};
}
function publicHeads(kind, lang, courseId) {
	const list = courseId ? courses.filter((course) => course.id === courseId) : courses;
	if (kind === "course") return list.map((course) => {
		const head = courseHead(course.id);
		return {
			kind,
			id: course.id,
			lang,
			title: course.title,
			why: head.why[lang],
			plain: head.plain[lang],
			prior: head.prior[lang]
		};
	});
	if (kind === "module") return list.flatMap((course) => course.modules.map((mod) => {
		const head = moduleHead(course.id, mod.title);
		return {
			kind,
			id: `${course.id}||${mod.title}`,
			lang,
			title: mod.title,
			place: course.title,
			why: head.why[lang],
			plain: head.plain[lang],
			prior: head.prior[lang]
		};
	}));
	return list.flatMap((course) => course.modules.flatMap((mod) => mod.sessions.map((session) => ({
		kind,
		id: `${course.id}||${mod.title}||${session.title}`,
		lang,
		title: session.title,
		place: `${course.title} / ${mod.title}`,
		text: sessionHead(course.id, mod.title, session.title)[lang]
	}))));
}
function publicLesson(id) {
	const lesson = getLesson(id);
	if (!lesson) return null;
	return {
		id: lesson.id,
		title: lesson.title,
		blurb: lesson.blurb,
		courseId: lesson.courseId,
		courseTitle: lesson.courseTitle,
		moduleTitle: lesson.moduleTitle,
		sessionId: lesson.sessionId,
		sessionTitle: lesson.sessionTitle,
		blocks: lesson.blocks,
		glossary: lesson.glossary
	};
}
function slim(card) {
	return {
		id: card.id,
		lang: card.lang,
		title: card.title,
		courseId: card.courseId,
		courseTitle: card.courseTitle,
		sessionTitle: card.sessionTitle,
		plain: card.plain.slice(0, 220)
	};
}
var _0002_bridge_default = "-- Inbox for edits sent in from an outside model. The printed book stays in the app.\n-- One shared gate (no accounts): a key hash, not the key itself. Rows are drafts, not the book.\ncreate table if not exists so_muc_gate (\n  id text primary key,\n  key_hash text not null,\n  created_at timestamptz not null default now()\n);\n\ncreate table if not exists so_muc_inbox (\n  id serial primary key,\n  created_at timestamptz not null default now(),\n  note text not null default '',\n  body jsonb not null\n);\n";
var _0003_sync_default = "-- Đồng bộ tiến độ học giữa các máy. Không có tài khoản: id là băm của mã đồng bộ, không lưu mã.\ncreate table if not exists so_muc_sync (\n  id text primary key,\n  data jsonb not null,\n  updated_at timestamptz not null default now()\n);\n";
var _0004_sync_google_default = "-- Gắn tài khoản Google với mã đồng bộ, để đăng nhập Google ở máy nào cũng ra cùng một sổ.\ncreate table if not exists so_muc_google (\n  sub text primary key,\n  code text not null,\n  created_at timestamptz not null default now()\n);\n";
/**
* Migration bookkeeping shared by the two appliers — `scripts/migrate.mjs`
* (deploy, `readdir`) and `src/lib/db.ts` (PGLite preview, `import.meta.glob`).
*
* Applied files are keyed by BASENAME, so the same file applies once no matter
* which directory it is globbed from. That is what makes the auth schema safe to
* copy from `migrations/auth/` into `migrations/` when an app turns sign-in on:
* a database that already has `0001_auth.sql` will not re-run it.
*
* Neither applier descends into subdirectories, so `migrations/auth/*.sql` is
* out of scope for both until it is copied up.
*/
/**
* The `_migrations` key for a migration path (or bare filename).
* @param {string} path
* @returns {string}
*/
function migrationName(path) {
	var _path$split$pop;
	return (_path$split$pop = path.split("/").pop()) !== null && _path$split$pop !== void 0 ? _path$split$pop : path;
}
/**
* @param {string} path
* @returns {boolean}
*/
function isMigrationFile(path) {
	return path.endsWith(".sql");
}
/**
* Migrations in `paths` that are not yet in `applied`, in apply order.
* Non-`.sql` entries (a `readdir` also yields `migrations/auth/`) are dropped.
* @param {Iterable<string>} paths
* @param {Iterable<string>} applied
* @returns {Array<{ name: string, path: string }>}
*/
function pendingMigrations(paths, applied) {
	const done = new Set(applied);
	return [...paths].filter(isMigrationFile).map((path) => ({
		name: migrationName(path),
		path
	})).sort((a, b) => a.name.localeCompare(b.name)).filter(({ name }) => !done.has(name));
}
var rawDatabaseUrl = typeof process !== "undefined" ? process.env.DATABASE_URL : void 0;
var databaseUrl = rawDatabaseUrl && rawDatabaseUrl.trim() ? rawDatabaseUrl : void 0;
/**
* Active backend: real **Neon** when `DATABASE_URL` is set (deployed / configured
* sandbox), otherwise a local embedded **PGLite** (Postgres compiled to WASM) so
* the app has a working database even with nothing configured — the live preview
* included. Swap in Neon later by just setting `DATABASE_URL`; no code changes.
*/
var dbSource = databaseUrl ? "neon" : "pglite";
/**
* Init state lives on globalThis as promises: dev HMR creates new instances of
* this module, and two instances racing module-level state would open a second
* pool or run two concurrent PGLite migration passes (whose duplicate
* `_migrations` insert rejects — and would get memoized, poisoning every later
* `getSql()`). A failed init clears its slot so the next call retries.
*/
var globalRef = globalThis;
/**
* Result-type parity: Postgres sends every value as text plus a type OID — the
* JS value is the DRIVER's parsing choice, and pg and PGLite disagree (pg:
* int8 -> string, date -> local-midnight Date; PGLite: int8 -> BigInt, which
* JSON.stringify rejects, date -> UTC Date). Normalize both so preview and
* production return identical, JSON-safe shapes:
*   int8/bigint (incl. count(*)) -> number (past 2^53 loses precision — cast
*                                   `::text` if you ever need huge integers)
*   date                         -> 'YYYY-MM-DD' string
*   interval                     -> Postgres interval text
* numeric already comes back as a string on both (arbitrary precision).
*/
var OID_INT8 = 20;
var OID_DATE = 1082;
var OID_INTERVAL = 1186;
var identity = (v) => v;
/** Wrap a query runner in the tagged-template + `.query()` `Sql` surface. */
function toSql(run) {
	const sql = (async (strings, ...values) => {
		let text = strings[0];
		for (let i = 0; i < values.length; i += 1) text += `$${i + 1}${strings[i + 1]}`;
		return run(text, values);
	});
	sql.query = (text, params = []) => run(text, params);
	return sql;
}
function createNeonSql() {
	var _globalRef$__pgSqlPro;
	(_globalRef$__pgSqlPro = globalRef.__pgSqlPromise__) !== null && _globalRef$__pgSqlPro !== void 0 || (globalRef.__pgSqlPromise__ = (async () => {
		const { Pool, types } = await import("../_libs/pg.mjs").then((n) => n.t);
		types.setTypeParser(OID_INT8, Number);
		types.setTypeParser(OID_DATE, identity);
		types.setTypeParser(OID_INTERVAL, identity);
		const pool = new Pool({ connectionString: databaseUrl });
		return toSql(async (text, params) => {
			return (await pool.query(text, params)).rows;
		});
	})().catch((err) => {
		globalRef.__pgSqlPromise__ = void 0;
		throw err;
	}));
	return globalRef.__pgSqlPromise__;
}
async function createPgliteSql() {
	var _globalRef$__pgliteIn, _globalRef$__pgliteMi;
	(_globalRef$__pgliteIn = globalRef.__pgliteInstance__) !== null && _globalRef$__pgliteIn !== void 0 || (globalRef.__pgliteInstance__ = (async () => {
		const { PGlite } = await import("../_libs/electric-sql__pglite.mjs").then((n) => n.t);
		const pg = new PGlite({ parsers: {
			[OID_INT8]: Number,
			[OID_DATE]: identity,
			[OID_INTERVAL]: identity
		} });
		await pg.waitReady;
		await pg.exec("create table if not exists _migrations (name text primary key, applied_at timestamptz not null default now())");
		return pg;
	})().catch((err) => {
		globalRef.__pgliteInstance__ = void 0;
		throw err;
	}));
	const pg = await globalRef.__pgliteInstance__;
	const migrate = async () => {
		const migrations = /* #__PURE__ */ Object.assign({
			"/migrations/0002_bridge.sql": _0002_bridge_default,
			"/migrations/0003_sync.sql": _0003_sync_default,
			"/migrations/0004_sync_google.sql": _0004_sync_google_default
		});
		const done = (await pg.query("select name from _migrations")).rows.map((r) => r.name);
		for (const { name, path } of pendingMigrations(Object.keys(migrations), done)) await pg.transaction(async (tx) => {
			await tx.exec(migrations[path]);
			await tx.query("insert into _migrations (name) values ($1)", [name]);
		});
	};
	const pass = ((_globalRef$__pgliteMi = globalRef.__pgliteMigrateChain__) !== null && _globalRef$__pgliteMi !== void 0 ? _globalRef$__pgliteMi : Promise.resolve()).catch(() => void 0).then(migrate);
	globalRef.__pgliteMigrateChain__ = pass;
	await pass;
	return toSql(async (text, params) => {
		return (await pg.query(text, params)).rows;
	});
}
var sqlPromise = null;
async function createSql() {
	if (typeof window !== "undefined") throw new Error("@/lib/db is server-only — call getSql() from a createServerFn handler or a server route loader, never from client code.");
	return dbSource === "neon" ? createNeonSql() : createPgliteSql();
}
/**
* Get the shared, **server-only** SQL client. Neon when `DATABASE_URL` is set,
* otherwise the local PGLite fallback. Memoized — safe to call per request.
*
* Schema comes from `migrations/*.sql`, auto-applied before the first query on
* both backends — define tables there, never inline in server functions.
*/
function getSql() {
	var _sqlPromise;
	(_sqlPromise = sqlPromise) !== null && _sqlPromise !== void 0 || (sqlPromise = createSql().catch((err) => {
		sqlPromise = null;
		throw err;
	}));
	return sqlPromise;
}
/**
* Finish DB bootstrap before the server handles traffic.
*
* - **PGLite** (preview / no `DATABASE_URL`): open the in-memory DB and apply
*   `migrations/*.sql`. Idempotent — concurrent callers share one promise.
* - **Neon**: no-op (pool is created lazily on first query).
*
* Vite `configureServer` awaits this at dev startup; production imports of this
* module kick it off immediately (see bottom of file).
*/
function ensureDbReady() {
	if (dbSource !== "pglite") return Promise.resolve();
	return getSql().then(() => void 0);
}
var globalBoot = globalThis;
if (typeof window === "undefined" && dbSource === "pglite") {
	var _globalBoot$__pgBoots;
	(_globalBoot$__pgBoots = globalBoot.__pgBootstrapPromise__) !== null && _globalBoot$__pgBoots !== void 0 || (globalBoot.__pgBootstrapPromise__ = ensureDbReady().catch((err) => {
		globalBoot.__pgBootstrapPromise__ = void 0;
		console.error("[db] PGLite bootstrap failed:", err);
		throw err;
	}));
}
var tablesReady = false;
/** Vercel dùng bản dựng sẵn nên migrations/ không chạy khi deploy: tự tạo bảng khi cần. */
async function db() {
	const sql = await getSql();
	if (!tablesReady) {
		await sql.query("create table if not exists so_muc_gate (id text primary key, key_hash text not null, created_at timestamptz not null default now())");
		await sql.query("create table if not exists so_muc_inbox (id serial primary key, created_at timestamptz not null default now(), note text not null default '', body jsonb not null)");
		tablesReady = true;
	}
	return sql;
}
var MAX_BODY = 5e5;
var MAX_INBOX = 30;
function fail(status, error) {
	return {
		ok: false,
		status,
		error
	};
}
function cleanKey(value) {
	if (typeof value !== "string") return null;
	const key = value.trim();
	if (key.length < 16 || key.length > 128) return null;
	if (!/^[A-Za-z0-9_-]+$/.test(key)) return null;
	return key;
}
async function sha256$1(text) {
	const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
	return [...new Uint8Array(buf)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}
function sameHex(a, b) {
	if (a.length !== b.length) return false;
	let out = 0;
	for (let i = 0; i < a.length; i += 1) out |= a.charCodeAt(i) ^ b.charCodeAt(i);
	return out === 0;
}
async function gateHash() {
	var _rows$0$key_hash, _rows$;
	return (_rows$0$key_hash = (_rows$ = (await (await db()).query("select key_hash from so_muc_gate where id = $1", ["book"]))[0]) === null || _rows$ === void 0 ? void 0 : _rows$.key_hash) !== null && _rows$0$key_hash !== void 0 ? _rows$0$key_hash : null;
}
async function gateStatus() {
	const hash = await gateHash();
	return { claimed: Boolean(hash) };
}
async function allow(key) {
	const clean = cleanKey(key);
	if (!clean) return fail(401, "Thiếu khóa, hoặc khóa không đúng dạng.");
	const hash = await gateHash();
	if (!hash) return fail(409, "Chưa có khóa. Tạo khóa trên trang Quản lý trước.");
	if (!sameHex(hash, await sha256$1(clean))) return fail(401, "Khóa không khớp.");
	return null;
}
async function claimKey(key) {
	const clean = cleanKey(key);
	if (!clean) return fail(400, "Khóa cần 16–128 ký tự, chỉ chữ, số, gạch.");
	const hash = await sha256$1(clean);
	if ((await (await db()).query("insert into so_muc_gate (id, key_hash) values ($1, $2) on conflict (id) do nothing returning id", ["book", hash])).length > 0) return {
		ok: true,
		value: { claimed: true }
	};
	const current = await gateHash();
	if (current && sameHex(current, hash)) return {
		ok: true,
		value: { claimed: true }
	};
	return fail(409, "Sổ đã có khóa khác. Dán đúng khóa đã tạo, không tạo khóa mới.");
}
function normalizeEdit(value) {
	let data = value;
	if (typeof data === "string") {
		const text = data.trim();
		if (!text) return fail(400, "Bản sửa trống.");
		if (text.length > MAX_BODY) return fail(413, "Bản sửa dài quá 500KB. Gửi từng phần.");
		try {
			data = JSON.parse(text);
		} catch {
			return fail(400, "JSON không đọc được.");
		}
	}
	if (Array.isArray(data)) data = { ideas: data };
	if (!data || typeof data !== "object") return fail(400, "Bản sửa phải là JSON.");
	const row = data;
	const body = {
		...row,
		"so-muc-cms": 1
	};
	if (!("ideas" in body) && Array.isArray(row.cards)) body.ideas = row.cards;
	if (JSON.stringify(body).length > MAX_BODY) return fail(413, "Bản sửa dài quá 500KB. Gửi từng phần.");
	return {
		ok: true,
		value: { body }
	};
}
async function submitEdit(key, note, value) {
	var _count$0$n, _count$, _rows$0$id, _rows$2;
	const denied = await allow(key);
	if (denied) return denied;
	const edit = normalizeEdit(value);
	if (!edit.ok) return edit;
	const line = typeof note === "string" ? note.trim().slice(0, 180) : "";
	const sql = await db();
	if (((_count$0$n = (_count$ = (await sql.query("select count(*)::int as n from so_muc_inbox"))[0]) === null || _count$ === void 0 ? void 0 : _count$.n) !== null && _count$0$n !== void 0 ? _count$0$n : 0) >= MAX_INBOX) return fail(409, "Hộp thư đủ 30 bản. Áp hoặc bỏ bớt trên trang Quản lý.");
	return {
		ok: true,
		value: { id: (_rows$0$id = (_rows$2 = (await sql.query("insert into so_muc_inbox (note, body) values ($1, $2::jsonb) returning id", [line, JSON.stringify(edit.value.body)]))[0]) === null || _rows$2 === void 0 ? void 0 : _rows$2.id) !== null && _rows$0$id !== void 0 ? _rows$0$id : 0 }
	};
}
function iso(value) {
	const date = new Date(String(value));
	return Number.isNaN(date.getTime()) ? String(value) : date.toISOString();
}
async function listInbox(key) {
	const denied = await allow(key);
	if (denied) return denied;
	return {
		ok: true,
		value: { items: (await (await db()).query("select id, note, created_at from so_muc_inbox order by id desc limit 30")).map((row) => ({
			id: Number(row.id),
			note: row.note,
			createdAt: iso(row.created_at)
		})) }
	};
}
async function readInbox(key, id) {
	const denied = await allow(key);
	if (denied) return denied;
	const row = (await (await db()).query("select id, note, body from so_muc_inbox where id = $1", [id]))[0];
	if (!row) return fail(404, "Không thấy bản này.");
	let body = row.body;
	if (typeof body === "string") try {
		body = JSON.parse(body);
	} catch {
		body = row.body;
	}
	return {
		ok: true,
		value: {
			id: Number(row.id),
			note: row.note,
			body
		}
	};
}
async function dropInbox(key, id) {
	const denied = await allow(key);
	if (denied) return denied;
	if (!Number.isInteger(id) || id < 1) return fail(400, "Thiếu id.");
	return {
		ok: true,
		value: { removed: (await (await db()).query("delete from so_muc_inbox where id = $1 returning id", [id])).length }
	};
}
var KNOWN = /* @__PURE__ */ new Set([
	"2024-11-05",
	"2025-03-26",
	"2025-06-18"
]);
var tools = [
	{
		name: "list_courses",
		description: "Các khóa trong Sổ Mực, đúng thứ tự mục lục. Không cần đối số.",
		inputSchema: {
			type: "object",
			properties: {}
		}
	},
	{
		name: "outline",
		description: "Mục lục một khóa hoặc cả sổ: phần, buổi, id từng ý.",
		inputSchema: {
			type: "object",
			properties: { courseId: {
				type: "string",
				description: "Bỏ trống để lấy mọi khóa."
			} }
		}
	},
	{
		name: "search_ideas",
		description: "Tìm ý theo câu hoặc id. Kết quả là đoạn ngắn. Gọi get_idea để lấy đủ chữ.",
		inputSchema: {
			type: "object",
			properties: {
				query: { type: "string" },
				lang: {
					type: "string",
					enum: ["vi", "en"]
				},
				courseId: { type: "string" },
				limit: { type: "number" }
			},
			required: ["query"]
		}
	},
	{
		name: "get_idea",
		description: "Đủ chữ của một ý: vì sao, nối với cái trước, định nghĩa, ví dụ, công thức. lang=both lấy cả hai thứ tiếng.",
		inputSchema: {
			type: "object",
			properties: {
				id: { type: "string" },
				lang: {
					type: "string",
					enum: [
						"vi",
						"en",
						"both"
					]
				}
			},
			required: ["id"]
		}
	},
	{
		name: "get_heads",
		description: "Lời mở đầu khóa, đầu phần, hoặc một câu đầu buổi.",
		inputSchema: {
			type: "object",
			properties: {
				kind: {
					type: "string",
					enum: [
						"course",
						"module",
						"session"
					]
				},
				lang: {
					type: "string",
					enum: ["vi", "en"]
				},
				courseId: { type: "string" }
			},
			required: ["kind"]
		}
	},
	{
		name: "get_lesson",
		description: "Một bài cũ (không phải thẻ ý): tiêu đề, blurb, khối nội dung.",
		inputSchema: {
			type: "object",
			properties: { id: { type: "string" } },
			required: ["id"]
		}
	},
	{
		name: "submit_edit",
		description: "Gửi bản sửa vào hộp thư của sổ. Không đổi trang đọc cho đến khi người dùng bấm Áp dụng. Giữ nguyên id. Chỉ gửi phần đổi. body là object so-muc-cms (ideas, heads, lessons) hoặc một ý có id.",
		inputSchema: {
			type: "object",
			properties: {
				body: { description: "Object JSON của bản sửa, hoặc chuỗi JSON." },
				note: { type: "string" },
				key: {
					type: "string",
					description: "Khóa sửa, nếu header Authorization chưa có."
				}
			},
			required: ["body"]
		}
	}
];
function langOf$1(value) {
	return value === "en" ? "en" : "vi";
}
function textResult(value, isError = false) {
	return {
		content: [{
			type: "text",
			text: (typeof value === "string" ? value : JSON.stringify(value, null, 2)).slice(0, 8e4)
		}],
		...isError ? { isError: true } : {}
	};
}
async function callTool(name, args, request) {
	if (name === "list_courses") return textResult(publicOutline().map((course) => ({
		id: course.id,
		title: course.title,
		modules: course.modules.length
	})));
	if (name === "outline") {
		const courseId = typeof args.courseId === "string" ? args.courseId : "";
		const outline = publicOutline(courseId || void 0);
		if (courseId && outline.length === 0) return textResult("Không thấy khóa.", true);
		return textResult({ courses: outline });
	}
	if (name === "search_ideas") {
		const query = typeof args.query === "string" ? args.query : "";
		const limit = Math.min(20, Math.max(1, Number(args.limit) || 8));
		const courseId = typeof args.courseId === "string" ? args.courseId : void 0;
		return textResult(searchIdeas(query, langOf$1(args.lang), 0, limit, courseId));
	}
	if (name === "get_idea") {
		const id = typeof args.id === "string" ? args.id : "";
		if (!id) return textResult("Thiếu id.", true);
		if (args.lang === "both") {
			const vi = publicIdea(id, "vi");
			const en = publicIdea(id, "en");
			if (!vi && !en) return textResult("Không thấy ý.", true);
			return textResult({
				vi,
				en
			});
		}
		const card = publicIdea(id, langOf$1(args.lang));
		if (!card) return textResult("Không thấy ý.", true);
		return textResult(card);
	}
	if (name === "get_heads") {
		const kind = args.kind;
		if (kind !== "course" && kind !== "module" && kind !== "session") return textResult("kind phải là course, module hoặc session.", true);
		const courseId = typeof args.courseId === "string" ? args.courseId : void 0;
		return textResult({ heads: publicHeads(kind, langOf$1(args.lang), courseId) });
	}
	if (name === "get_lesson") {
		const lesson = publicLesson(typeof args.id === "string" ? args.id : "");
		if (!lesson) return textResult("Không thấy bài.", true);
		return textResult(lesson);
	}
	if (name === "submit_edit") {
		var _bearer;
		const key = (_bearer = bearer(request)) !== null && _bearer !== void 0 ? _bearer : typeof args.key === "string" ? args.key : null;
		if (!cleanKey(key)) return textResult("Thiếu khóa sửa. Lấy khóa trên trang Quản lý, gửi header Authorization: Bearer <khóa> hoặc đối số key.", true);
		const result = await submitEdit(key, args.note, args.body);
		if (!result.ok) return textResult(result.error, true);
		return textResult({
			id: result.value.id,
			queued: true,
			note: "Đã vào hộp thư. Trang đọc đổi khi người dùng bấm Áp dụng."
		});
	}
	return textResult("Không có công cụ này.", true);
}
function rpcResult(id, result) {
	return apiJson({
		jsonrpc: "2.0",
		id: id !== null && id !== void 0 ? id : null,
		result
	});
}
function rpcError(id, code, message) {
	return apiJson({
		jsonrpc: "2.0",
		id: id !== null && id !== void 0 ? id : null,
		error: {
			code,
			message
		}
	});
}
async function handleMcp(request) {
	if (request.method === "OPTIONS") return apiEmpty(204);
	if (request.method === "GET") return apiJson({
		...bookMeta(),
		transport: "POST JSON-RPC tools/list, tools/call"
	}, 405);
	if (request.method !== "POST") return apiJson({ error: "method not allowed" }, 405);
	let message;
	try {
		message = await request.json();
	} catch {
		return rpcError(null, -32700, "JSON không đọc được.");
	}
	if (Array.isArray(message)) {
		const kept = (await Promise.all(message.map((item) => oneRpc(item, request)))).filter((part) => part !== null);
		if (kept.length === 0) return apiEmpty(202);
		if (kept.length === 1) return kept[0];
		return apiJson(await Promise.all(kept.map(async (part) => part.json())));
	}
	const single = await oneRpc(message, request);
	return single !== null && single !== void 0 ? single : apiEmpty(202);
}
async function oneRpc(message, request) {
	var _rpc$id, _rpc$method;
	const rpc = message && typeof message === "object" ? message : {};
	const id = (_rpc$id = rpc.id) !== null && _rpc$id !== void 0 ? _rpc$id : null;
	const method = (_rpc$method = rpc.method) !== null && _rpc$method !== void 0 ? _rpc$method : "";
	const isNote = method.startsWith("notifications/") || rpc.id === void 0;
	if (method === "initialize") {
		var _rpc$params;
		const asked = typeof ((_rpc$params = rpc.params) === null || _rpc$params === void 0 ? void 0 : _rpc$params.protocolVersion) === "string" ? rpc.params.protocolVersion : "";
		return rpcResult(id, {
			protocolVersion: KNOWN.has(asked) ? asked : "2025-03-26",
			capabilities: { tools: { listChanged: false } },
			serverInfo: {
				name: "so-muc",
				version: "1.0.0"
			},
			instructions: "Sổ Mực, sổ học tiếng Việt. Đọc bằng list_courses, outline, search_ideas, get_idea, get_heads, get_lesson. Đây là chữ in sẵn. Giữ nguyên id. Không thêm câu hỏi hay bịa số. Sửa chữ bằng submit_edit với body JSON; trang đọc chỉ đổi khi người dùng bấm Áp dụng. submit_edit cần khóa."
		});
	}
	if (method === "notifications/initialized" || method === "initialized") return null;
	if (isNote && method !== "ping") return null;
	if (method === "ping") return rpcResult(id, {});
	if (method === "tools/list") return rpcResult(id, { tools });
	if (method === "tools/call") {
		var _rpc$params2;
		const params = (_rpc$params2 = rpc.params) !== null && _rpc$params2 !== void 0 ? _rpc$params2 : {};
		const name = typeof params.name === "string" ? params.name : "";
		const args = params.arguments && typeof params.arguments === "object" ? params.arguments : {};
		try {
			return rpcResult(id, await callTool(name, args, request));
		} catch (error) {
			console.error("[mcp]", error);
			return rpcResult(id, textResult("Công cụ lỗi.", true));
		}
	}
	if (!method) return rpcError(id, -32600, "Thiếu method.");
	return rpcError(id, -32601, "Method không có.");
}
var handle = ({ request }) => handleMcp(request);
var Route$5 = createFileRoute("/api/mcp")({ server: { handlers: {
	GET: handle,
	POST: handle,
	OPTIONS: handle
} } });
function langOf(value) {
	return value === "en" ? "en" : "vi";
}
function clamp(value, fallback, max) {
	const n = Number(value !== null && value !== void 0 ? value : fallback);
	if (!Number.isFinite(n) || n < 0) return fallback;
	return Math.min(max, Math.floor(n));
}
async function handleSoMucGet(request) {
	var _url$searchParams$get;
	const url = new URL(request.url);
	const what = (_url$searchParams$get = url.searchParams.get("what")) !== null && _url$searchParams$get !== void 0 ? _url$searchParams$get : "meta";
	try {
		if (what === "meta") return apiJson(bookMeta());
		if (what === "gate") return apiJson(await gateStatus());
		if (what === "outline") {
			const courseId = url.searchParams.get("course") || void 0;
			const outline = publicOutline(courseId);
			if (courseId && outline.length === 0) return apiJson({ error: "Không thấy khóa." }, 404);
			return apiJson({ courses: outline });
		}
		if (what === "ideas" || what === "search") {
			var _url$searchParams$get2, _url$searchParams$get3;
			const lang = langOf(url.searchParams.get("lang"));
			const course = (_url$searchParams$get2 = url.searchParams.get("course")) !== null && _url$searchParams$get2 !== void 0 ? _url$searchParams$get2 : "";
			const offset = clamp(url.searchParams.get("offset"), 0, 1e4);
			const limit = clamp(url.searchParams.get("limit"), 30, 50);
			return apiJson(searchIdeas((_url$searchParams$get3 = url.searchParams.get("q")) !== null && _url$searchParams$get3 !== void 0 ? _url$searchParams$get3 : "", lang, offset, limit, course || void 0));
		}
		if (what === "idea") {
			var _url$searchParams$get4;
			const id = (_url$searchParams$get4 = url.searchParams.get("id")) !== null && _url$searchParams$get4 !== void 0 ? _url$searchParams$get4 : "";
			if (!id) return apiJson({ error: "Thiếu id." }, 400);
			const lang = url.searchParams.get("lang");
			if (lang === "both") {
				const vi = publicIdea(id, "vi");
				const en = publicIdea(id, "en");
				if (!vi && !en) return apiJson({ error: "Không thấy ý." }, 404);
				return apiJson({
					vi,
					en
				});
			}
			const card = publicIdea(id, langOf(lang));
			if (!card) return apiJson({ error: "Không thấy ý." }, 404);
			return apiJson(card);
		}
		if (what === "heads") {
			var _url$searchParams$get5;
			const kind = (_url$searchParams$get5 = url.searchParams.get("kind")) !== null && _url$searchParams$get5 !== void 0 ? _url$searchParams$get5 : "course";
			if (kind !== "course" && kind !== "module" && kind !== "session") return apiJson({ error: "kind phải là course, module hoặc session." }, 400);
			return apiJson({ heads: publicHeads(kind, langOf(url.searchParams.get("lang")), url.searchParams.get("course") || void 0) });
		}
		if (what === "lesson") {
			var _url$searchParams$get6;
			const lesson = publicLesson((_url$searchParams$get6 = url.searchParams.get("id")) !== null && _url$searchParams$get6 !== void 0 ? _url$searchParams$get6 : "");
			if (!lesson) return apiJson({ error: "Không thấy bài." }, 404);
			return apiJson(lesson);
		}
		if (what === "inbox") {
			var _url$searchParams$get7;
			const key = bearer(request);
			const id = Number((_url$searchParams$get7 = url.searchParams.get("id")) !== null && _url$searchParams$get7 !== void 0 ? _url$searchParams$get7 : "");
			if (url.searchParams.get("id")) {
				const one = await readInbox(key, id);
				if (!one.ok) return apiJson({ error: one.error }, one.status);
				return apiJson({ item: one.value });
			}
			const list = await listInbox(key);
			if (!list.ok) return apiJson({ error: list.error }, list.status);
			return apiJson(list.value);
		}
		return apiJson({ error: "what không hợp lệ." }, 400);
	} catch (error) {
		console.error("[so-muc]", error);
		return apiJson({ error: "Không đọc được sổ." }, 500);
	}
}
async function handleSoMucPost(request) {
	var _bearer;
	let body;
	try {
		body = await request.json();
	} catch {
		return apiJson({ error: "JSON không đọc được." }, 400);
	}
	const row = body && typeof body === "object" ? body : {};
	const key = (_bearer = bearer(request)) !== null && _bearer !== void 0 ? _bearer : typeof row.key === "string" ? row.key : null;
	const op = row.op;
	try {
		if (op === "claim") {
			const result = await claimKey(key);
			if (!result.ok) return apiJson({ error: result.error }, result.status);
			return apiJson(result.value);
		}
		if (op === "submit") {
			if (!("body" in row) && !("edit" in row)) return apiJson({ error: "Thiếu body." }, 400);
			const result = await submitEdit(key, row.note, "body" in row ? row.body : row.edit);
			if (!result.ok) return apiJson({ error: result.error }, result.status);
			return apiJson(result.value);
		}
		if (op === "drop") {
			const result = await dropInbox(key, Number(row.id));
			if (!result.ok) return apiJson({ error: result.error }, result.status);
			return apiJson(result.value);
		}
		return apiJson({ error: "op phải là claim, submit hoặc drop." }, 400);
	} catch (error) {
		console.error("[so-muc]", error);
		return apiJson({ error: "Không ghi được hộp thư." }, 500);
	}
}
var Route$4 = createFileRoute("/api/so-muc")({ server: { handlers: {
	GET: ({ request }) => handleSoMucGet(request),
	POST: ({ request }) => handleSoMucPost(request),
	OPTIONS: () => apiEmpty(204)
} } });
/** Mã khách hàng Google (công khai, không phải bí mật). Đặt trong biến môi trường GOOGLE_CLIENT_ID. */
function googleClientId() {
	const v = typeof process !== "undefined" ? process.env.GOOGLE_CLIENT_ID : void 0;
	return v && v.trim() ? v.trim() : null;
}
function randomCode() {
	const bytes = crypto.getRandomValues(/* @__PURE__ */ new Uint8Array(18));
	return btoa(String.fromCharCode(...bytes)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
var ready$1 = false;
/** Kiểm tra ID token của Google rồi trả mã đồng bộ gắn với tài khoản đó (tạo mới nếu lần đầu). */
async function codeForGoogle(credential) {
	var _rows$0$code, _rows$;
	const clientId = googleClientId();
	if (!clientId) return {
		ok: false,
		status: 501,
		error: "Máy chủ chưa cấu hình đăng nhập Google."
	};
	if (typeof credential !== "string" || credential.length < 20 || credential.length > 4e3) return {
		ok: false,
		status: 400,
		error: "Thiếu thông tin đăng nhập."
	};
	const res = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(credential)}`);
	if (!res.ok) return {
		ok: false,
		status: 401,
		error: "Google không xác nhận được đăng nhập."
	};
	const info = await res.json();
	const issOk = info.iss === "accounts.google.com" || info.iss === "https://accounts.google.com";
	if (info.aud !== clientId || !issOk || !info.sub || Number(info.exp) * 1e3 < Date.now()) return {
		ok: false,
		status: 401,
		error: "Đăng nhập Google không hợp lệ."
	};
	const sql = await getSql();
	if (!ready$1) {
		await sql.query("create table if not exists so_muc_google (sub text primary key, code text not null, created_at timestamptz not null default now())");
		ready$1 = true;
	}
	const fresh = randomCode();
	await sql.query("insert into so_muc_google (sub, code) values ($1, $2) on conflict (sub) do nothing", [info.sub, fresh]);
	return {
		ok: true,
		code: (_rows$0$code = (_rows$ = (await sql.query("select code from so_muc_google where sub = $1", [info.sub]))[0]) === null || _rows$ === void 0 ? void 0 : _rows$.code) !== null && _rows$0$code !== void 0 ? _rows$0$code : fresh
	};
}
async function sha256(text) {
	const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`so-muc-sync:${text}`));
	return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}
var ready = false;
async function table() {
	const sql = await getSql();
	if (!ready) {
		await sql.query("create table if not exists so_muc_sync (id text primary key, data jsonb not null, updated_at timestamptz not null default now())");
		ready = true;
	}
	return sql;
}
/** Nhận dữ liệu của một máy, gộp với bản đã lưu, lưu lại và trả bản gộp. */
async function syncExchange(code, incoming) {
	var _rows$;
	const clean = cleanKey(code);
	if (!clean) return {
		ok: false,
		status: 400,
		error: "Mã đồng bộ không đúng dạng."
	};
	const id = await sha256(clean);
	const sql = await table();
	const rows = await sql.query("select data from so_muc_sync where id = $1", [id]);
	const stored = cleanSync((_rows$ = rows[0]) === null || _rows$ === void 0 ? void 0 : _rows$.data);
	const merged = incoming == null ? stored : mergeSync(stored, cleanSync(incoming));
	if (incoming != null || !rows[0]) await sql.query("insert into so_muc_sync (id, data, updated_at) values ($1, $2::jsonb, now()) on conflict (id) do update set data = excluded.data, updated_at = now()", [id, JSON.stringify(merged)]);
	return {
		ok: true,
		data: merged
	};
}
var Route$3 = createFileRoute("/api/sync")({ server: { handlers: {
	GET: () => apiJson({ google: googleClientId() }),
	POST: async ({ request }) => {
		try {
			var _body$data;
			const text = await request.text();
			if (text.length > 4e5) return apiJson({ error: "Dữ liệu quá lớn." }, 413);
			const body = JSON.parse(text);
			if (body.credential !== void 0) {
				const g = await codeForGoogle(body.credential);
				return g.ok ? apiJson({ code: g.code }) : apiJson({ error: g.error }, g.status);
			}
			const res = await syncExchange(body.code, (_body$data = body.data) !== null && _body$data !== void 0 ? _body$data : null);
			if (!res.ok) return apiJson({ error: res.error }, res.status);
			return apiJson({ data: res.data });
		} catch {
			return apiJson({ error: "Chưa đồng bộ được. Kiểm tra database của máy chủ." }, 500);
		}
	},
	OPTIONS: () => apiEmpty(204)
} } });
var $$splitComponentImporter$2 = () => import("./bai._lessonId-COOr4sb7.mjs");
var Route$2 = createFileRoute("/bai/$lessonId")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./khai-niem._conceptId-9U66OguW.mjs");
var Route$1 = createFileRoute("/khai-niem/$conceptId")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./khoa._courseId-DJRvk2rE.mjs");
var Route = createFileRoute("/khoa/$courseId")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var rootRouteChildren = {
	IndexRoute: Route$16.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$17
	}),
	BanDoRoute: Route$15.update({
		id: "/ban-do",
		path: "/ban-do",
		getParentRoute: () => Route$17
	}),
	BaoLoiRoute: Route$14.update({
		id: "/bao-loi",
		path: "/bao-loi",
		getParentRoute: () => Route$17
	}),
	CongThucRoute: Route$13.update({
		id: "/cong-thuc",
		path: "/cong-thuc",
		getParentRoute: () => Route$17
	}),
	DoPhuRoute: Route$12.update({
		id: "/do-phu",
		path: "/do-phu",
		getParentRoute: () => Route$17
	}),
	DongBoRoute: Route$11.update({
		id: "/dong-bo",
		path: "/dong-bo",
		getParentRoute: () => Route$17
	}),
	GocRoute: Route$10.update({
		id: "/goc",
		path: "/goc",
		getParentRoute: () => Route$17
	}),
	LuyenTapRoute: Route$9.update({
		id: "/luyen-tap",
		path: "/luyen-tap",
		getParentRoute: () => Route$17
	}),
	NgheRoute: Route$8.update({
		id: "/nghe",
		path: "/nghe",
		getParentRoute: () => Route$17
	}),
	TimKiemRoute: Route$7.update({
		id: "/tim-kiem",
		path: "/tim-kiem",
		getParentRoute: () => Route$17
	}),
	TuDienRoute: Route$6.update({
		id: "/tu-dien",
		path: "/tu-dien",
		getParentRoute: () => Route$17
	}),
	ApiMcpRoute: Route$5.update({
		id: "/api/mcp",
		path: "/api/mcp",
		getParentRoute: () => Route$17
	}),
	ApiSoMucRoute: Route$4.update({
		id: "/api/so-muc",
		path: "/api/so-muc",
		getParentRoute: () => Route$17
	}),
	ApiSyncRoute: Route$3.update({
		id: "/api/sync",
		path: "/api/sync",
		getParentRoute: () => Route$17
	}),
	BaiLessonIdRoute: Route$2.update({
		id: "/bai/$lessonId",
		path: "/bai/$lessonId",
		getParentRoute: () => Route$17
	}),
	KhaiNiemConceptIdRoute: Route$1.update({
		id: "/khai-niem/$conceptId",
		path: "/khai-niem/$conceptId",
		getParentRoute: () => Route$17
	}),
	KhoaCourseIdRoute: Route.update({
		id: "/khoa/$courseId",
		path: "/khoa/$courseId",
		getParentRoute: () => Route$17
	})
};
var routeTree = Route$17._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		rewrite: previewPathRewrite(),
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { words as _, Route$8 as a, loadSelfTest as c, newCode as d, syncNow as f, ModuleTree as g, Disclosure as h, Route$2 as i, disableSync as l, CoverInfo as m, Route as n, OFFLINE_KEY as o, useSync as p, Route$1 as r, downloadOffline as s, router_exports as t, enableSync as u };
