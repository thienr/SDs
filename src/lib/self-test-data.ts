export type Q = { q: [string, string]; o: [string, string][]; a: number; w: [string, string] };
let cache: Record<string, Q[]> | null = null;
let pending: Promise<Record<string, Q[]>> | null = null;
export function loadSelfTest() {
  if (cache) return Promise.resolve(cache);
  pending ??= import("@/data/self-test.json").then((m) => (cache = (m.default ?? m) as unknown as Record<string, Q[]>));
  return pending;
}
