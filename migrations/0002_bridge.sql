-- Inbox for edits sent in from an outside model. The printed book stays in the app.
-- One shared gate (no accounts): a key hash, not the key itself. Rows are drafts, not the book.
create table if not exists so_muc_gate (
  id text primary key,
  key_hash text not null,
  created_at timestamptz not null default now()
);

create table if not exists so_muc_inbox (
  id serial primary key,
  created_at timestamptz not null default now(),
  note text not null default '',
  body jsonb not null
);
