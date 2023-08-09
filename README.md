# NextJS Supabase Auth

<img width="1091" alt="Screenshot 2023-08-09 at 12 50 59 AM" src="https://github.com/leon-do/nextjs-supabase-auth/assets/19412160/ee5d74f4-0fb7-481f-b403-46dbe569dfeb">

## Create .env.local

<img width="1391" alt="Screenshot 2023-08-09 at 1 04 58 AM" src="https://github.com/leon-do/nextjs-supabase-auth/assets/19412160/ae904860-40dd-4d2d-962b-2070b4bd896a">

```
NEXT_PUBLIC_SUPABASE_URL=https://falpiwjvcgbiiuqjqdvx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...
SUPABASE_SERVICE_ROLE=eyJhbGc...
```

## Supabase Query

<img width="1386" alt="Screenshot 2023-08-09 at 1 07 32 AM" src="https://github.com/leon-do/nextjs-supabase-auth/assets/19412160/c892e18d-5372-4353-aaed-9449fccd5f9a">

```sql
create view public.users as select * from auth.users;
revoke all on public.users from anon, authenticated;
```

## Start

```bash
npm install
npm run dev
```

## Paths

`/admin/update` will update user's metadata

