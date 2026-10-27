/** Gộp tiến độ giữa các máy. Dùng chung cho máy chủ và trình duyệt. Phép gộp giao hoán, nên hai máy đẩy cùng lúc không làm mất dữ liệu. */
export type Status = "unseen" | "viewing" | "seen";
export type ReviewEntry = { b: number; d: string; a: number };
export type SyncData = {
  p: { items: Record<string, Status>; last: string | null; at: number };
  t: { course: string | null; read: { course: string; mod: string | null; ses: string | null; item: string | null } | null; at: number };
  r: Record<string, ReviewEntry>;
};

const RANK: Record<Status, number> = { unseen: 0, viewing: 1, seen: 2 };
export const MAX_ITEMS = 6000;

export const emptySync = (): SyncData => ({ p: { items: {}, last: null, at: 0 }, t: { course: null, read: null, at: 0 }, r: {} });

const str = (v: unknown, max = 120): string | null => (typeof v === "string" && v.length <= max ? v : null);
const num = (v: unknown) => (typeof v === "number" && Number.isFinite(v) ? v : 0);

/** Làm sạch dữ liệu nhận từ ngoài: bỏ mọi thứ sai dạng, giới hạn số mục. */
export function cleanSync(raw: unknown): SyncData {
  const out = emptySync();
  if (!raw || typeof raw !== "object") return out;
  const o = raw as Record<string, any>;
  const items = o.p?.items;
  if (items && typeof items === "object") {
    let n = 0;
    for (const [k, v] of Object.entries(items)) {
      if (n >= MAX_ITEMS) break;
      if (k.length <= 120 && (v === "seen" || v === "viewing" || v === "unseen")) {
        out.p.items[k] = v;
        n += 1;
      }
    }
  }
  out.p.last = str(o.p?.last);
  out.p.at = num(o.p?.at);
  out.t.course = str(o.t?.course);
  const rd = o.t?.read;
  if (rd && typeof rd === "object" && str(rd.course)) {
    out.t.read = { course: rd.course, mod: str(rd.mod), ses: str(rd.ses), item: str(rd.item) };
  }
  out.t.at = num(o.t?.at);
  if (o.r && typeof o.r === "object") {
    let n = 0;
    for (const [k, v] of Object.entries(o.r as Record<string, any>)) {
      if (n >= MAX_ITEMS) break;
      const d = str(v?.d, 10);
      if (k.length <= 120 && d && /^\d{4}-\d{2}-\d{2}$/.test(d) && Number.isInteger(v.b) && v.b >= 0 && v.b <= 5) {
        out.r[k] = { b: v.b, d, a: num(v.a) };
        n += 1;
      }
    }
  }
  return out;
}

export function mergeSync(x: SyncData, y: SyncData): SyncData {
  const out = emptySync();
  const keys = new Set([...Object.keys(x.p.items), ...Object.keys(y.p.items)]);
  for (const k of keys) {
    const a = x.p.items[k] ?? "unseen";
    const b = y.p.items[k] ?? "unseen";
    out.p.items[k] = RANK[a] >= RANK[b] ? a : b;
  }
  const pw = y.p.at > x.p.at ? y.p : x.p;
  out.p.last = pw.last;
  out.p.at = pw.at;
  const tw = y.t.at > x.t.at ? y.t : x.t;
  out.t = { course: tw.course, read: tw.read, at: tw.at };
  for (const k of new Set([...Object.keys(x.r), ...Object.keys(y.r)])) {
    const a = x.r[k];
    const b = y.r[k];
    out.r[k] = !a ? b : !b ? a : b.a > a.a ? b : a;
  }
  return out;
}

export function sameSync(x: SyncData, y: SyncData) {
  return JSON.stringify(x) === JSON.stringify(y);
}
