import { sessionConcepts } from "@/data/place";
import { courses } from "@/lib/catalog";

/** Các thẻ khái niệm thật (bỏ thẻ «d-» sinh từ bài giảng) của một khóa, theo thứ tự mục lục. */
export function courseCardIds(courseId: string): string[] {
  const c = courses.find((x) => x.id === courseId);
  if (!c) return [];
  return c.modules.flatMap((m) => m.sessions.flatMap((s) => (sessionConcepts[s.id] ?? []).filter((id) => !id.startsWith("d-"))));
}
export const allCardIds = () => courses.flatMap((c) => courseCardIds(c.id));
