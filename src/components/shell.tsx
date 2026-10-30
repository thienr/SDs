import { Link, useRouterState } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useState, useSyncExternalStore, type ReactNode } from "react";
import { BookOpen, MessageCircle, Moon, Network, Search, Settings, Sun, TableOfContents } from "lucide-react";
import { MapBar } from "@/components/map-bar";
import { startAutoSync } from "@/lib/sync";
import { registerSw } from "@/lib/offline";
import { getProgress, getServerProgress, hydrateProgress, setLang, subscribeProgress, toggleTheme, type Lang } from "@/lib/progress";
import { hydrateRaw } from "@/lib/raw-store";
import { hydrateCms } from "@/lib/cms-store";

const AskAiPanel = lazy(() => import("@/components/ask-ai-panel"));

const links = [
  { to: "/", vi: "Học", en: "Study", icon: BookOpen },
  { to: "/ban-do", vi: "Sơ đồ", en: "Mind map", icon: Network },
  { to: "/tim-kiem", vi: "Tìm", en: "Search", icon: Search },
  { to: "/cong-thuc", vi: "Công thức", en: "Formulas", icon: TableOfContents },
  { to: "/do-phu", vi: "Độ phủ", en: "Coverage", icon: TableOfContents },
] as const;

function LangSwitch({ lang }: { lang: Lang }) {
  return (
    <div className="inline-flex rounded-full border border-line p-0.5 text-xs font-medium">
      <button type="button" className={`min-h-11 min-w-11 rounded-full px-2 ${lang === "vi" ? "bg-ink text-paper" : "text-muted"}`} onClick={() => setLang("vi")}>
        VI
      </button>
      <button type="button" className={`min-h-11 min-w-11 rounded-full px-2 ${lang === "en" ? "bg-ink text-paper" : "text-muted"}`} onClick={() => setLang("en")}>
        EN
      </button>
    </div>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const progress = useSyncExternalStore(subscribeProgress, getProgress, getServerProgress);
  const lang = progress.lang;
  const [ask, setAsk] = useState(false);
  const label = (link: (typeof links)[number]) => (lang === "en" ? link.en : link.vi);
  useEffect(() => {
    hydrateProgress();
    hydrateRaw();
    hydrateCms();
    startAutoSync();
    registerSw();
  }, []);

  return (
    <div className="min-h-dvh bg-paper text-ink">
      <div className="mx-auto grid max-w-6xl md:grid-cols-[220px_minmax(0,1fr)]">
        <aside className="sticky top-0 hidden h-dvh flex-col gap-6 border-r border-line px-4 py-6 md:flex">
          <Link to="/" className="font-display text-3xl leading-none">
            Sổ Mực
          </Link>
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`min-h-11 rounded-full px-3 py-2 text-sm ${pathname === link.to ? "bg-ink text-paper" : "text-muted"}`}
              >
                {label(link)}
              </Link>
            ))}
            <Link to="/tu-dien" className={`min-h-11 rounded-full px-3 py-2 text-sm ${pathname === "/tu-dien" ? "bg-ink text-paper" : "text-muted"}`}>
              {lang === "en" ? "Glossary" : "Từ điển"}
            </Link>
            <Link to="/goc" className={`min-h-11 rounded-full px-3 py-2 text-sm ${pathname === "/goc" ? "bg-ink text-paper" : "text-muted"}`}>
              {lang === "en" ? "Content" : "Quản lý"}
            </Link>
          </nav>
          <div className="mt-auto flex flex-col gap-3">
            <LangSwitch lang={lang} />
            <button type="button" className="inline-flex min-h-11 items-center gap-2 text-sm" onClick={() => toggleTheme()}>
              {progress.theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
              {progress.theme === "dark" ? (lang === "en" ? "Light" : "Nền sáng") : lang === "en" ? "Dark" : "Nền tối"}
            </button>
          </div>
        </aside>
        <div className="min-w-0">
          <header className="sticky top-0 z-20 flex items-center justify-between border-b border-line bg-paper/90 px-4 py-3 backdrop-blur md:hidden">
            <Link to="/" className="inline-flex min-h-11 items-center font-display text-2xl">
              Sổ Mực
            </Link>
            <div className="flex items-center gap-2">
              <Link to="/goc" className="inline-flex size-11 items-center justify-center" aria-label={lang === "en" ? "Content" : "Quản lý"}>
                <Settings className="size-5" />
              </Link>
              <LangSwitch lang={lang} />
              <button type="button" className="inline-flex size-11 items-center justify-center" onClick={() => toggleTheme()} aria-label={lang === "en" ? "Toggle theme" : "Đổi nền"}>
                {progress.theme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
              </button>
            </div>
          </header>
          <MapBar />
          <main className="px-4 pb-24 pt-4 md:px-8 md:pb-16 md:pt-8">{children}</main>
        </div>
      </div>
      <button
        type="button"
        onClick={() => setAsk(true)}
        aria-label={lang === "en" ? "Ask AI" : "Hỏi AI"}
        className="fixed bottom-[4.75rem] right-4 z-30 inline-flex size-14 items-center justify-center rounded-full bg-accent text-white shadow-lg md:bottom-6 md:right-6"
      >
        <MessageCircle className="size-6" aria-hidden />
      </button>
      {ask ? (
        <Suspense fallback={null}>
          <AskAiPanel lang={lang} path={pathname} onClose={() => setAsk(false)} />
        </Suspense>
      ) : null}
      <nav className="fixed inset-x-0 bottom-0 z-20 grid grid-cols-5 border-t border-line bg-card md:hidden">
        {links.map((link) => {
          const Icon = link.icon;
          const on = pathname === link.to;
          return (
            <Link key={link.to} to={link.to} className={`flex min-h-14 flex-col items-center justify-center gap-1 text-xs ${on ? "text-accent" : "text-muted"}`}>
              <Icon className="size-5" />
              {label(link)}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
