-- Đồng bộ tiến độ học giữa các máy. Không có tài khoản: id là băm của mã đồng bộ, không lưu mã.
create table if not exists so_muc_sync (
  id text primary key,
  data jsonb not null,
  updated_at timestamptz not null default now()
);
