import { o as __toESM } from "../_runtime.mjs";
import { c as lessons, o as getLesson, r as courses } from "./catalog-DhneT6we.mjs";
import { c as hydrateCms } from "./cms-store-DEQCGuiI.mjs";
import { a as liveCourse, c as liveSession, d as sessionHead, l as moduleHead, s as liveModule, t as courseHead } from "./cms-live-BOIfHz8S.mjs";
import { a as getProgress, g as toggleTheme, h as subscribeProgress, m as setLang, n as sessionOfConcept, o as getServerProgress, s as hydrateProgress, t as sessionConcepts, u as lessonStatus } from "./place-BaQa8e2N.mjs";
import { f as studyCopy, m as studyNeighbors, o as getStudy, p as studyListTitle, s as hydrateRaw, u as rawIsEdited } from "./study-DstPvIVW.mjs";
import { J as require_react, S as require_jsx_runtime, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, v as createFileRoute, x as useRouter, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Settings, c as Moon, d as ChevronRight, i as Sun, l as Map$1, n as TriangleAlert, o as Search, p as BookOpen, r as TableOfContents, s as Network, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DwcYq-o0.js
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
	if (!PATH_BASED_PREVIEW_HOSTS.has(hostname.toLowerCase())) return void 0;
	return PORT_ID_PREFIX.exec(pathname)?.[0];
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
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
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
		const paths = options.getRoutePaths?.() ?? [];
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
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
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
function SessionLinks({ course, modTitle, sessionId, lessonIds, lang, onNavigate }) {
	const t = words[lang];
	const ids = sessionConcepts[sessionId] ?? [];
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
			className: "flex min-h-11 items-center justify-between gap-3 rounded-lg px-2 text-sm hover:bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-medium",
				children: [studyListTitle(id, lang), rawIsEdited(id, lang) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-2 text-xs font-normal text-accent",
					children: t.edited
				}) : null]
			})
		}) }, id)), lessonRows.map((id) => {
			const lesson = getLesson(id);
			if (!lesson) return null;
			const st = lessonStatus(id);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/bai/$lessonId",
				params: { lessonId: id },
				onClick: onNavigate,
				className: "flex min-h-11 items-center justify-between gap-3 rounded-lg px-2 text-sm hover:bg-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium",
					children: lesson.title
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
	const [open, setOpen] = (0, import_react.useState)(() => new Set(openIds ?? []));
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
						const sk = `s:${s.id}`;
						const ids = (sessionConcepts[s.id] ?? []).length;
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
		const conceptId = decodeURIComponent(idea[1]);
		const sessionId = sessionOfConcept(conceptId);
		const found = findSession(sessionId);
		return {
			courseId: found?.courseId ?? null,
			moduleId: found?.moduleId ?? null,
			sessionId,
			conceptId
		};
	}
	if (bai) {
		const lesson = getLesson(decodeURIComponent(bai[1]));
		return {
			courseId: lesson?.courseId ?? null,
			moduleId: lesson?.moduleId ?? null,
			sessionId: lesson?.sessionId ?? null,
			conceptId: null
		};
	}
	if (khoa) {
		const courseId = decodeURIComponent(khoa[1]);
		if (clean.startsWith("ses-")) {
			const sessionId = clean.slice(4);
			return {
				courseId,
				moduleId: findSession(sessionId)?.moduleId ?? null,
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
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const hash = useRouterState({ select: (state) => state.location.hash });
	const lang = (0, import_react.useSyncExternalStore)(subscribeProgress, getProgress, getServerProgress).lang;
	const here = (0, import_react.useMemo)(() => locate(pathname, hash), [pathname, hash]);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [openedCourse, setOpenedCourse] = (0, import_react.useState)(null);
	const course = courses.find((item) => item.id === here.courseId) ?? null;
	const mod = course?.modules.find((item) => item.id === here.moduleId) ?? null;
	const session = mod?.sessions.find((item) => item.id === here.sessionId) ?? null;
	const near = here.conceptId ? studyNeighbors(here.conceptId) : null;
	const crumb = course ? [
		course.title,
		mod?.title,
		session?.title
	].filter(Boolean).join("  ·  ") : lang === "en" ? "All courses" : "Mọi khóa";
	const spot = near && near.index >= 0 ? `${near.index + 1}/${near.total}` : null;
	const shownCourse = openedCourse === null ? here.courseId : openedCourse || null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "sticky top-14 z-20 border-b border-line bg-paper/95 backdrop-blur md:top-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: "flex min-h-12 w-full items-center gap-3 px-4 text-left md:px-8",
			onClick: () => {
				setOpenedCourse(here.courseId);
				setOpen(true);
			},
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
						onToggle: () => setOpenedCourse(expanded ? "" : item.id),
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
	const label = (link) => lang === "en" ? link.en : link.vi;
	(0, import_react.useEffect)(() => {
		hydrateProgress();
		hydrateRaw();
		hydrateCms();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-paper text-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
							className: "font-display text-2xl",
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
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
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
		})]
	});
}
var styles_default = "/assets/styles-B-cDKLOk.css";
var Route$12 = createRootRoute({
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
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
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
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: "try{var r=localStorage.getItem('so-muc-v1');if(r){var t=JSON.parse(r).theme;if(t==='dark'||t==='light')document.documentElement.dataset.theme=t}}catch(e){}" } })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
var $$splitComponentImporter$9 = () => import("./routes-DKJYD1vY.mjs");
var Route$11 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./ban-do-D9LhZf8c.mjs");
var Route$10 = createFileRoute("/ban-do")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./cong-thuc-CPp_RNnM.mjs");
var Route$9 = createFileRoute("/cong-thuc")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./do-phu-kafhI8o9.mjs");
var Route$8 = createFileRoute("/do-phu")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./goc-Dz7khyo1.mjs");
var Route$7 = createFileRoute("/goc")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./tim-kiem-7KFEY_R2.mjs");
var Route$6 = createFileRoute("/tim-kiem")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./tu-dien-DKuSjcFZ.mjs");
var Route$5 = createFileRoute("/tu-dien")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
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
	const header = request.headers.get("authorization") ?? "";
	return /^Bearer\s+(\S+)/i.exec(header)?.[1] ?? null;
}
var cache = /* @__PURE__ */ new Map();
function publicIdeas(lang) {
	const hit = cache.get(lang);
	if (hit) return hit;
	const out = [];
	for (const course of courses) for (const mod of course.modules) for (const session of mod.sessions) for (const id of sessionConcepts[session.id] ?? []) {
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
			sessions: mod.sessions.map((session) => ({
				id: session.id,
				title: session.title,
				optional: session.optional,
				ideas: sessionConcepts[session.id] ?? []
			}))
		}))
	}));
}
function publicIdea(id, lang) {
	return publicIdeas(lang).find((card) => card.id === id) ?? null;
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
	return path.split("/").pop() ?? path;
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
	globalRef.__pgSqlPromise__ ??= (async () => {
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
	});
	return globalRef.__pgSqlPromise__;
}
async function createPgliteSql() {
	globalRef.__pgliteInstance__ ??= (async () => {
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
	});
	const pg = await globalRef.__pgliteInstance__;
	const migrate = async () => {
		const migrations = /* #__PURE__ */ Object.assign({ "/migrations/0002_bridge.sql": _0002_bridge_default });
		const done = (await pg.query("select name from _migrations")).rows.map((r) => r.name);
		for (const { name, path } of pendingMigrations(Object.keys(migrations), done)) await pg.transaction(async (tx) => {
			await tx.exec(migrations[path]);
			await tx.query("insert into _migrations (name) values ($1)", [name]);
		});
	};
	const pass = (globalRef.__pgliteMigrateChain__ ?? Promise.resolve()).catch(() => void 0).then(migrate);
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
	sqlPromise ??= createSql().catch((err) => {
		sqlPromise = null;
		throw err;
	});
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
if (typeof window === "undefined" && dbSource === "pglite") globalBoot.__pgBootstrapPromise__ ??= ensureDbReady().catch((err) => {
	globalBoot.__pgBootstrapPromise__ = void 0;
	console.error("[db] PGLite bootstrap failed:", err);
	throw err;
});
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
async function sha256(text) {
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
	return (await (await getSql()).query("select key_hash from so_muc_gate where id = $1", ["book"]))[0]?.key_hash ?? null;
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
	if (!sameHex(hash, await sha256(clean))) return fail(401, "Khóa không khớp.");
	return null;
}
async function claimKey(key) {
	const clean = cleanKey(key);
	if (!clean) return fail(400, "Khóa cần 16–128 ký tự, chỉ chữ, số, gạch.");
	const hash = await sha256(clean);
	if ((await (await getSql()).query("insert into so_muc_gate (id, key_hash) values ($1, $2) on conflict (id) do nothing returning id", ["book", hash])).length > 0) return {
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
	const denied = await allow(key);
	if (denied) return denied;
	const edit = normalizeEdit(value);
	if (!edit.ok) return edit;
	const line = typeof note === "string" ? note.trim().slice(0, 180) : "";
	const sql = await getSql();
	if (((await sql.query("select count(*)::int as n from so_muc_inbox"))[0]?.n ?? 0) >= MAX_INBOX) return fail(409, "Hộp thư đủ 30 bản. Áp hoặc bỏ bớt trên trang Quản lý.");
	return {
		ok: true,
		value: { id: (await sql.query("insert into so_muc_inbox (note, body) values ($1, $2::jsonb) returning id", [line, JSON.stringify(edit.value.body)]))[0]?.id ?? 0 }
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
		value: { items: (await (await getSql()).query("select id, note, created_at from so_muc_inbox order by id desc limit 30")).map((row) => ({
			id: Number(row.id),
			note: row.note,
			createdAt: iso(row.created_at)
		})) }
	};
}
async function readInbox(key, id) {
	const denied = await allow(key);
	if (denied) return denied;
	const row = (await (await getSql()).query("select id, note, body from so_muc_inbox where id = $1", [id]))[0];
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
		value: { removed: (await (await getSql()).query("delete from so_muc_inbox where id = $1 returning id", [id])).length }
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
		const key = bearer(request) ?? (typeof args.key === "string" ? args.key : null);
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
		id: id ?? null,
		result
	});
}
function rpcError(id, code, message) {
	return apiJson({
		jsonrpc: "2.0",
		id: id ?? null,
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
	return await oneRpc(message, request) ?? apiEmpty(202);
}
async function oneRpc(message, request) {
	const rpc = message && typeof message === "object" ? message : {};
	const id = rpc.id ?? null;
	const method = rpc.method ?? "";
	const isNote = method.startsWith("notifications/") || rpc.id === void 0;
	if (method === "initialize") {
		const asked = typeof rpc.params?.protocolVersion === "string" ? rpc.params.protocolVersion : "";
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
		const params = rpc.params ?? {};
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
var Route$4 = createFileRoute("/api/mcp")({ server: { handlers: {
	GET: handle,
	POST: handle,
	OPTIONS: handle
} } });
function langOf(value) {
	return value === "en" ? "en" : "vi";
}
function clamp(value, fallback, max) {
	const n = Number(value ?? fallback);
	if (!Number.isFinite(n) || n < 0) return fallback;
	return Math.min(max, Math.floor(n));
}
async function handleSoMucGet(request) {
	const url = new URL(request.url);
	const what = url.searchParams.get("what") ?? "meta";
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
			const lang = langOf(url.searchParams.get("lang"));
			const course = url.searchParams.get("course") ?? "";
			const offset = clamp(url.searchParams.get("offset"), 0, 1e4);
			const limit = clamp(url.searchParams.get("limit"), 30, 50);
			return apiJson(searchIdeas(url.searchParams.get("q") ?? "", lang, offset, limit, course || void 0));
		}
		if (what === "idea") {
			const id = url.searchParams.get("id") ?? "";
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
			const kind = url.searchParams.get("kind") ?? "course";
			if (kind !== "course" && kind !== "module" && kind !== "session") return apiJson({ error: "kind phải là course, module hoặc session." }, 400);
			return apiJson({ heads: publicHeads(kind, langOf(url.searchParams.get("lang")), url.searchParams.get("course") || void 0) });
		}
		if (what === "lesson") {
			const lesson = publicLesson(url.searchParams.get("id") ?? "");
			if (!lesson) return apiJson({ error: "Không thấy bài." }, 404);
			return apiJson(lesson);
		}
		if (what === "inbox") {
			const key = bearer(request);
			const id = Number(url.searchParams.get("id") ?? "");
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
	let body;
	try {
		body = await request.json();
	} catch {
		return apiJson({ error: "JSON không đọc được." }, 400);
	}
	const row = body && typeof body === "object" ? body : {};
	const key = bearer(request) ?? (typeof row.key === "string" ? row.key : null);
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
var Route$3 = createFileRoute("/api/so-muc")({ server: { handlers: {
	GET: ({ request }) => handleSoMucGet(request),
	POST: ({ request }) => handleSoMucPost(request),
	OPTIONS: () => apiEmpty(204)
} } });
var $$splitComponentImporter$2 = () => import("./bai._lessonId-B0UybyvN.mjs");
var Route$2 = createFileRoute("/bai/$lessonId")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./khai-niem._conceptId-CdWuBOPn.mjs");
var Route$1 = createFileRoute("/khai-niem/$conceptId")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./khoa._courseId-I3TlgrXC.mjs");
var Route = createFileRoute("/khoa/$courseId")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var rootRouteChildren = {
	IndexRoute: Route$11.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$12
	}),
	BanDoRoute: Route$10.update({
		id: "/ban-do",
		path: "/ban-do",
		getParentRoute: () => Route$12
	}),
	CongThucRoute: Route$9.update({
		id: "/cong-thuc",
		path: "/cong-thuc",
		getParentRoute: () => Route$12
	}),
	DoPhuRoute: Route$8.update({
		id: "/do-phu",
		path: "/do-phu",
		getParentRoute: () => Route$12
	}),
	GocRoute: Route$7.update({
		id: "/goc",
		path: "/goc",
		getParentRoute: () => Route$12
	}),
	TimKiemRoute: Route$6.update({
		id: "/tim-kiem",
		path: "/tim-kiem",
		getParentRoute: () => Route$12
	}),
	TuDienRoute: Route$5.update({
		id: "/tu-dien",
		path: "/tu-dien",
		getParentRoute: () => Route$12
	}),
	ApiMcpRoute: Route$4.update({
		id: "/api/mcp",
		path: "/api/mcp",
		getParentRoute: () => Route$12
	}),
	ApiSoMucRoute: Route$3.update({
		id: "/api/so-muc",
		path: "/api/so-muc",
		getParentRoute: () => Route$12
	}),
	BaiLessonIdRoute: Route$2.update({
		id: "/bai/$lessonId",
		path: "/bai/$lessonId",
		getParentRoute: () => Route$12
	}),
	KhaiNiemConceptIdRoute: Route$1.update({
		id: "/khai-niem/$conceptId",
		path: "/khai-niem/$conceptId",
		getParentRoute: () => Route$12
	}),
	KhoaCourseIdRoute: Route.update({
		id: "/khoa/$courseId",
		path: "/khoa/$courseId",
		getParentRoute: () => Route$12
	})
};
var routeTree = Route$12._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		rewrite: previewPathRewrite(),
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { ModuleTree as a, Route$2 as i, Route as n, Route$1 as r, router_exports as t };
