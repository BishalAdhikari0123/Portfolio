-- Blog posts table + storage bucket setup for Supabase
-- Run this in Supabase SQL Editor.

create extension if not exists pgcrypto;

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  category text not null check (category in ('blog', 'tutorial')),
  title text not null,
  excerpt text not null,
  published_at timestamptz not null default now(),
  read_time text not null default '10 min read',
  tags text[] not null default '{}',
  intro text not null,
  sections jsonb not null default '[]'::jsonb,
  key_takeaways text[] not null default '{}',
  cover_image_url text,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists blog_posts_published_idx
  on public.blog_posts (is_published, published_at desc);

create index if not exists blog_posts_category_idx
  on public.blog_posts (category, published_at desc);

create or replace function public.set_blog_posts_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_blog_posts_updated_at on public.blog_posts;
create trigger trg_blog_posts_updated_at
before update on public.blog_posts
for each row
execute function public.set_blog_posts_updated_at();

-- Optional but recommended: enforce RLS for direct client access patterns.
alter table public.blog_posts enable row level security;

-- Allow public read of published posts if you ever query directly from client.
drop policy if exists "public_can_read_published_blog_posts" on public.blog_posts;
create policy "public_can_read_published_blog_posts"
on public.blog_posts
for select
to public
using (is_published = true);

-- Create a public storage bucket for optional blog cover images.
insert into storage.buckets (id, name, public)
values ('blog-images', 'blog-images', true)
on conflict (id) do update
set public = excluded.public;

-- Force PostgREST schema cache refresh (helps resolve PGRST205 immediately).
select pg_notify('pgrst', 'reload schema');
