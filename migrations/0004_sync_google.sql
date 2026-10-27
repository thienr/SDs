-- Gắn tài khoản Google với mã đồng bộ, để đăng nhập Google ở máy nào cũng ra cùng một sổ.
create table if not exists so_muc_google (
  sub text primary key,
  code text not null,
  created_at timestamptz not null default now()
);
