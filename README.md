# Best Football Betting Sites UK 2025

Next.js 15 + TypeScript + Tailwind. CMS for editing top hero links and betting sites. Hosted on Vercel with `@vercel/postgres`.

## Quick start

1. Environment

```bash
cp .env.local.example .env.local
# Fill POSTGRES_URL, ADMIN_USER, ADMIN_PASS
```

2. Database

```bash
npm run db:setup
npm run db:seed
```

3. Dev server

```bash
npm run dev
```

- Admin at `/admin` protected by Basic Auth using `ADMIN_USER`/`ADMIN_PASS`.
- API endpoints: `/api/sites`, `/api/hero`, `/api/admin/reseed`.

## Deploy

- Connect GitHub repo to Vercel.
- Add env vars in Vercel Project Settings: `POSTGRES_URL`, `ADMIN_USER`, `ADMIN_PASS`.
- Redeploy.
