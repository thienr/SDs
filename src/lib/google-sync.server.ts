import { getSql } from "@/lib/db";

/** Mã khách hàng Google (công khai, không phải bí mật). Đặt trong biến môi trường GOOGLE_CLIENT_ID. */
export function googleClientId(): string | null {
  const v = typeof process !== "undefined" ? process.env.GOOGLE_CLIENT_ID : undefined;
  return v && v.trim() ? v.trim() : null;
}

function randomCode() {
  const bytes = crypto.getRandomValues(new Uint8Array(18));
  return btoa(String.fromCharCode(...bytes)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

let ready = false;

/** Kiểm tra ID token của Google rồi trả mã đồng bộ gắn với tài khoản đó (tạo mới nếu lần đầu). */
export async function codeForGoogle(credential: unknown): Promise<{ ok: true; code: string } | { ok: false; status: number; error: string }> {
  const clientId = googleClientId();
  if (!clientId) return { ok: false, status: 501, error: "Máy chủ chưa cấu hình đăng nhập Google." };
  if (typeof credential !== "string" || credential.length < 20 || credential.length > 4000) return { ok: false, status: 400, error: "Thiếu thông tin đăng nhập." };
  const res = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(credential)}`);
  if (!res.ok) return { ok: false, status: 401, error: "Google không xác nhận được đăng nhập." };
  const info = (await res.json()) as { aud?: string; sub?: string; exp?: string; iss?: string };
  const issOk = info.iss === "accounts.google.com" || info.iss === "https://accounts.google.com";
  if (info.aud !== clientId || !issOk || !info.sub || Number(info.exp) * 1000 < Date.now()) {
    return { ok: false, status: 401, error: "Đăng nhập Google không hợp lệ." };
  }
  const sql = await getSql();
  if (!ready) {
    await sql.query("create table if not exists so_muc_google (sub text primary key, code text not null, created_at timestamptz not null default now())");
    ready = true;
  }
  const fresh = randomCode();
  await sql.query("insert into so_muc_google (sub, code) values ($1, $2) on conflict (sub) do nothing", [info.sub, fresh]);
  const rows = await sql.query<{ code: string }>("select code from so_muc_google where sub = $1", [info.sub]);
  return { ok: true, code: rows[0]?.code ?? fresh };
}
