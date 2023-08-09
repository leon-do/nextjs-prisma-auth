# NextJS Supabase

## Create .env.local

```
NEXT_PUBLIC_SUPABASE_URL=https://falpiwjvcgbiiuqjqdvx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...
SUPABASE_SERVICE_ROLE=eyJhbGc...
```

## Supabase Query

```sql
create view public.users as select * from auth.users;
revoke all on public.users from anon, authenticated;
```

## Start

```bash
npm install
npm run dev
```