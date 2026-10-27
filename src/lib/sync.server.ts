import { getSql } from "@/lib/db";
import { cleanKey } from "@/lib/bridge.server";
import { cleanSync, emptySync, mergeSync } from "@/lib/sync-merge";

async function sha256(text: string) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`so-muc-sync:${text}`));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

let ready = false;
async function table() {
  const sql = await getSql();
  if (!ready) {
    await sql.query("create table if not exists so_muc_sync (id text primary key, data jsonb not null, updated_at timestamptz not null default now())");
    ready = true;
  }
  return sql;
}

/** Nhận dữ liệu của một máy, gộp với bản đã lưu, lưu lại và trả bản gộp. */
export async function syncExchange(code: unknown, incoming: unknown): Promise<{ ok: true; data: ReturnType<typeof emptySync> } | { ok: false; status: number; error: string }> {
  const clean = cleanKey(code);
  if (!clean) return { ok: false, status: 400, error: "Mã đồng bộ không đúng dạng." };
  const id = await sha256(clean);
  const sql = await table();
  const rows = await sql.query<{ data: unknown }>("select data from so_muc_sync where id = $1", [id]);
  const stored = cleanSync(rows[0]?.data);
  const merged = incoming == null ? stored : mergeSync(stored, cleanSync(incoming));
  if (incoming != null || !rows[0]) {
    await sql.query(
      "insert into so_muc_sync (id, data, updated_at) values ($1, $2::jsonb, now()) on conflict (id) do update set data = excluded.data, updated_at = now()",
      [id, JSON.stringify(merged)],
    );
  }
  return { ok: true, data: merged };
}
