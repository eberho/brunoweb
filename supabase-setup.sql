-- ============================================================
--  Piñon — Configuración de base de datos en Supabase
--  Pega TODO este contenido en Supabase → SQL Editor → Run
-- ============================================================

-- Tabla de productos
create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  name text not null default '',
  price text default '',
  description text default '',
  category text default 'Ropa',
  photos jsonb default '[]'::jsonb,
  created_at timestamptz default now()
);

-- Tabla de ajustes (guarda el número de WhatsApp)
create table if not exists settings (
  key text primary key,
  value text
);

-- Activar seguridad por filas
alter table products enable row level security;
alter table settings enable row level security;

-- Políticas: cualquiera puede LEER y ESCRIBIR.
-- (Para una tienda pequeña esto es suficiente; la contraseña de admin vive en la
--  app. Si más adelante quieres seguridad estricta, se puede añadir login real.)
create policy "lectura publica productos"  on products for select using (true);
create policy "escritura publica productos" on products for all    using (true) with check (true);
create policy "lectura publica settings"   on settings for select using (true);
create policy "escritura publica settings"  on settings for all    using (true) with check (true);
