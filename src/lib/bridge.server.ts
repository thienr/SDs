import { getSql } from "@/lib/db";

let tablesReady = false;
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

const MAX_BODY = 500_000;
const MAX_INBOX = 30;

export type BridgeFail = { ok: false; status: number; error: string };
export type BridgeOk<T> = { ok: true; value: T };

function fail(status: number, error: string): BridgeFail {
  return { ok: false, status, error };
}

export function cleanKey(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const key = value.trim();
  if (key.length < 16 || key.length > 128) return null;
  if (!/^[A-Za-z0-9_-]+$/.test(key)) return null;
  return key;
}

async function sha256(text: string) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function sameHex(a: string, b: string) {
  if (a.length !== b.length) return false;
  let out = 0;
  for (let i = 0; i < a.length; i += 1) out |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return out === 0;
}

async function gateHash() {
  const sql = await db();
  const rows = await sql.query<{ key_hash: string }>("select key_hash from so_muc_gate where id = $1", ["book"]);
  return rows[0]?.key_hash ?? null;
}

export async function gateStatus() {
  const hash = await gateHash();
  return { claimed: Boolean(hash) };
}

async function allow(key: string | null): Promise<BridgeFail | null> {
  const clean = cleanKey(key);
  if (!clean) return fail(401, "Thiếu khóa, hoặc khóa không đúng dạng.");
  const hash = await gateHash();
  if (!hash) return fail(409, "Chưa có khóa. Tạo khóa trên trang Quản lý trước.");
  if (!sameHex(hash, await sha256(clean))) return fail(401, "Khóa không khớp.");
  return null;
}

export async function claimKey(key: string | null): Promise<BridgeOk<{ claimed: true }> | BridgeFail> {
  const clean = cleanKey(key);
  if (!clean) return fail(400, "Khóa cần 16–128 ký tự, chỉ chữ, số, gạch.");
  const hash = await sha256(clean);
  const sql = await db();
  const inserted = await sql.query<{ id: string }>(
    "insert into so_muc_gate (id, key_hash) values ($1, $2) on conflict (id) do nothing returning id",
    ["book", hash],
  );
  if (inserted.length > 0) return { ok: true, value: { claimed: true } };
  const current = await gateHash();
  if (current && sameHex(current, hash)) return { ok: true, value: { claimed: true } };
  return fail(409, "Sổ đã có khóa khác. Dán đúng khóa đã tạo, không tạo khóa mới.");
}

export function normalizeEdit(value: unknown): BridgeOk<{ body: Record<string, unknown> }> | BridgeFail {
  let data = value;
  if (typeof data === "string") {
    const text = data.trim();
    if (!text) return fail(400, "Bản sửa trống.");
    if (text.length > MAX_BODY) return fail(413, "Bản sửa dài quá 500KB. Gửi từng phần.");
    try {
      data = JSON.parse(text) as unknown;
    } catch {
      return fail(400, "JSON không đọc được.");
    }
  }
  if (Array.isArray(data)) data = { ideas: data };
  if (!data || typeof data !== "object") return fail(400, "Bản sửa phải là JSON.");
  const row = data as Record<string, unknown>;
  const body: Record<string, unknown> = { ...row, "so-muc-cms": 1 };
  if (!("ideas" in body) && Array.isArray(row.cards)) body.ideas = row.cards;
  const packed = JSON.stringify(body);
  if (packed.length > MAX_BODY) return fail(413, "Bản sửa dài quá 500KB. Gửi từng phần.");
  return { ok: true, value: { body } };
}

export async function submitEdit(key: string | null, note: unknown, value: unknown): Promise<BridgeOk<{ id: number }> | BridgeFail> {
  const denied = await allow(key);
  if (denied) return denied;
  const edit = normalizeEdit(value);
  if (!edit.ok) return edit;
  const line = typeof note === "string" ? note.trim().slice(0, 180) : "";
  const sql = await db();
  const count = await sql.query<{ n: number }>("select count(*)::int as n from so_muc_inbox");
  if ((count[0]?.n ?? 0) >= MAX_INBOX) return fail(409, "Hộp thư đủ 30 bản. Áp hoặc bỏ bớt trên trang Quản lý.");
  const rows = await sql.query<{ id: number }>("insert into so_muc_inbox (note, body) values ($1, $2::jsonb) returning id", [
    line,
    JSON.stringify(edit.value.body),
  ]);
  return { ok: true, value: { id: rows[0]?.id ?? 0 } };
}

function iso(value: unknown) {
  const date = new Date(String(value));
  return Number.isNaN(date.getTime()) ? String(value) : date.toISOString();
}

export async function listInbox(key: string | null): Promise<BridgeOk<{ items: { id: number; note: string; createdAt: string }[] }> | BridgeFail> {
  const denied = await allow(key);
  if (denied) return denied;
  const sql = await db();
  const rows = await sql.query<{ id: number; note: string; created_at: unknown }>(
    "select id, note, created_at from so_muc_inbox order by id desc limit 30",
  );
  return {
    ok: true,
    value: {
      items: rows.map((row) => ({ id: Number(row.id), note: row.note, createdAt: iso(row.created_at) })),
    },
  };
}

export async function readInbox(key: string | null, id: number): Promise<BridgeOk<{ id: number; note: string; body: unknown }> | BridgeFail> {
  const denied = await allow(key);
  if (denied) return denied;
  const sql = await db();
  const rows = await sql.query<{ id: number; note: string; body: unknown }>("select id, note, body from so_muc_inbox where id = $1", [id]);
  const row = rows[0];
  if (!row) return fail(404, "Không thấy bản này.");
  let body = row.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body) as unknown;
    } catch {
      body = row.body;
    }
  }
  return { ok: true, value: { id: Number(row.id), note: row.note, body } };
}

export async function dropInbox(key: string | null, id: number): Promise<BridgeOk<{ removed: number }> | BridgeFail> {
  const denied = await allow(key);
  if (denied) return denied;
  if (!Number.isInteger(id) || id < 1) return fail(400, "Thiếu id.");
  const sql = await db();
  const rows = await sql.query<{ id: number }>("delete from so_muc_inbox where id = $1 returning id", [id]);
  return { ok: true, value: { removed: rows.length } };
}
