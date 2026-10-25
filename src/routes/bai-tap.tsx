import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { useSyncExternalStore } from "react";
import { assignments } from "@/data/assign";
import { getProgress, getServerProgress, subscribeProgress } from "@/lib/progress";

export const Route = createFileRoute("/bai-tap")({
  component: AssignLayout,
});

function AssignLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const progress = useSyncExternalStore(subscribeProgress, getProgress, getServerProgress);
  const lang = progress.lang;
  if (pathname !== "/bai-tap" && pathname !== "/bai-tap/") return <Outlet />;
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="font-display text-4xl">{lang === "en" ? "Assignment guides" : "Hướng dẫn assignment"}</h1>
      <p className="mt-3 text-muted">
        {lang === "en"
          ? "Each page follows the starter file cell by cell, unchanged, with a companion guide under every task."
          : "Mỗi trang đi theo file starter từng ô, không đổi, kèm hướng dẫn dưới mỗi mục."}
      </p>
      <ul className="mt-6 space-y-3">
        {assignments.map((a) => (
          <li key={a.id}>
            <Link to="/bai-tap/$id" params={{ id: a.id }} className="block min-h-11 rounded-card border border-line px-4 py-3">
              <span className="text-xs tracking-widest text-muted">{a.course}</span>
              <span className="mt-1 block font-medium">{a.title[lang === "en" ? 1 : 0]}</span>
              <span className="mt-1 block text-sm text-muted">{a.file}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
