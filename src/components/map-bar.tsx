import { Link, useRouterState } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useSyncExternalStore } from "react";
import { Map as MapIcon, X } from "lucide-react";
import { sessionOfConcept } from "@/data/place";
import { CoverInfo, Disclosure, ModuleTree, tocWords } from "@/components/toc-tree";
import { liveCourse } from "@/lib/cms-live";
import { studyNeighbors } from "@/data/study";
import { courses, getLesson } from "@/lib/catalog";
import { getProgress, getServerProgress, subscribeProgress } from "@/lib/progress";

type Here = {
  courseId: string | null;
  moduleId: string | null;
  sessionId: string | null;
  conceptId: string | null;
};

function locate(pathname: string, hash: string): Here {
  const clean = hash.replace(/^#/, "");
  const khoa = pathname.match(/^\/khoa\/([^/]+)/);
  const idea = pathname.match(/^\/khai-niem\/([^/]+)/);
  const bai = pathname.match(/^\/bai\/([^/]+)/);
  if (idea) {
    const conceptId = decodeURIComponent(idea[1]);
    const sessionId = sessionOfConcept(conceptId);
    const found = findSession(sessionId);
    return { courseId: found?.courseId ?? null, moduleId: found?.moduleId ?? null, sessionId, conceptId };
  }
  if (bai) {
    const lesson = getLesson(decodeURIComponent(bai[1]));
    return {
      courseId: lesson?.courseId ?? null,
      moduleId: lesson?.moduleId ?? null,
      sessionId: lesson?.sessionId ?? null,
      conceptId: null,
    };
  }
  if (khoa) {
    const courseId = decodeURIComponent(khoa[1]);
    if (clean.startsWith("ses-")) {
      const sessionId = clean.slice(4);
      const found = findSession(sessionId);
      return { courseId, moduleId: found?.moduleId ?? null, sessionId, conceptId: null };
    }
    if (clean.startsWith("mod-")) {
      return { courseId, moduleId: clean.slice(4), sessionId: null, conceptId: null };
    }
    return { courseId, moduleId: null, sessionId: null, conceptId: null };
  }
  return { courseId: null, moduleId: null, sessionId: null, conceptId: null };
}

function findSession(sessionId: string | null) {
  if (!sessionId) return null;
  for (const course of courses) {
    for (const mod of course.modules) {
      const session = mod.sessions.find((item) => item.id === sessionId);
      if (session) return { courseId: course.id, moduleId: mod.id, session };
    }
  }
  return null;
}

export function MapBar() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const hash = useRouterState({ select: (state) => state.location.hash });
  const progress = useSyncExternalStore(subscribeProgress, getProgress, getServerProgress);
  const lang = progress.lang;
  const here = useMemo(() => locate(pathname, hash), [pathname, hash]);
  const [open, setOpen] = useState(false);
  const [openedCourse, setOpenedCourse] = useState<string | null>(null);
  const course = courses.find((item) => item.id === here.courseId) ?? null;
  const mod = course?.modules.find((item) => item.id === here.moduleId) ?? null;
  const session = mod?.sessions.find((item) => item.id === here.sessionId) ?? null;
  const near = here.conceptId ? studyNeighbors(here.conceptId) : null;
  const crumb = course
    ? [course.title, mod?.title, session?.title].filter(Boolean).join("  ·  ")
    : lang === "en"
      ? "All courses"
      : "Mọi khóa";
  const spot = near && near.index >= 0 ? `${near.index + 1}/${near.total}` : null;
  const shownCourse = openedCourse === null ? here.courseId : openedCourse || null;

  return (
    <>
      <div className="sticky top-14 z-20 border-b border-line bg-paper/95 backdrop-blur md:top-0">
        <button type="button" className="flex min-h-12 w-full items-center gap-3 px-4 text-left md:px-8" onClick={() => { setOpenedCourse(here.courseId); setOpen(true); }}>
          <MapIcon className="size-4 shrink-0 text-accent" />
          <span className="min-w-0 flex-1 truncate text-sm">{crumb}</span>
          {spot ? <span className="shrink-0 text-xs text-muted">{spot}</span> : null}
          <span className="shrink-0 text-xs text-accent">{lang === "en" ? "Jump" : "Đi"}</span>
        </button>
      </div>
      {open ? (
        <div className="fixed inset-0 z-40 flex flex-col bg-paper">
          <div className="flex items-center justify-between border-b border-line px-4 py-3">
            <p className="font-display text-2xl">{lang === "en" ? "Where to" : "Đi tới"}</p>
            <button type="button" className="inline-flex size-11 items-center justify-center" onClick={() => setOpen(false)} aria-label={lang === "en" ? "Close" : "Đóng"}>
              <X className="size-5" />
            </button>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto px-4 pb-28">
            <ol className="divide-y divide-line">
              {courses.map((item, index) => {
                const expanded = shownCourse === item.id;
                const head = liveCourse(item.id, lang);
                const openIds = [
                  ...(here.courseId === item.id && here.moduleId ? [`m:${here.moduleId}`] : []),
                  ...(here.courseId === item.id && here.sessionId ? [`s:${here.sessionId}`] : []),
                ];
                return (
                  <li key={item.id}>
                    <Disclosure
                      open={expanded}
                      onToggle={() => setOpenedCourse(expanded ? "" : item.id)}
                      head={
                        <span className={item.id === here.courseId ? "text-accent" : ""}>
                          <span className="text-xs text-muted">{String(index + 1).padStart(2, "0")}{item.optional ? " · optional" : ""}</span>
                          <span className="block font-medium">{item.title}</span>
                        </span>
                      }
                    >
                      <CoverInfo plain={head.plain} why={head.why} prior={head.prior} lang={lang} editHash={`course:${item.id}`} onNavigate={() => setOpen(false)} />
                      <Link to="/khoa/$courseId" params={{ courseId: item.id }} className="mb-2 inline-flex min-h-11 items-center text-sm text-accent underline" onClick={() => setOpen(false)}>
                        {tocWords[lang].page}
                      </Link>
                      <ModuleTree course={item} lang={lang} openIds={openIds} onNavigate={() => setOpen(false)} />
                    </Disclosure>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      ) : null}
    </>
  );
}
