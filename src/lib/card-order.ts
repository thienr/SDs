import { sessionConcepts } from "@/data/place";
import { getStudy, type StudyConcept } from "@/data/study";
import { courses } from "@/lib/catalog";

let flat: string[] | null = null;
function order(): string[] {
  if (flat) return flat;
  const seen = new Set<string>();
  flat = courses.flatMap((c) => c.modules.flatMap((m) => m.sessions.flatMap((s) => sessionConcepts[s.id] ?? []))).filter((id) => (seen.has(id) ? false : (seen.add(id), true)));
  return flat;
}

/** Thẻ liền trước/sau theo thứ tự mục lục, dùng khi chuỗi riêng của thẻ đã hết. */
export function catalogNeighbor(id: string, dir: 1 | -1): StudyConcept | null {
  const list = order();
  for (let i = list.indexOf(id) + dir; i >= 0 && i < list.length; i += dir) {
    const c = getStudy(list[i]);
    if (c) return c;
  }
  return null;
}
