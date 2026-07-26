# Deployment Guide

## Before every release

```bash
npm ci
npm run format:check
npm run lint
npm run typecheck
npm test
```

Set the canonical origin:

```text
NEXT_PUBLIC_SITE_URL=https://your-production-domain.example
```

## GitHub

1. Create an empty repository.
2. Add it as the remote.
3. Push the default branch.
4. Enable branch protection, secret scanning, dependency alerts, and pull
   request checks.
5. Add production values through the deployment provider, never the repository.

Suggested repository topics:

```text
healthcare-ai nextjs typescript tailwindcss responsible-ai nursing-education
```

## Vercel

Vercel is the preferred external host for the native Next.js edition.

1. Import the GitHub repository into Vercel.
2. Framework preset: **Next.js**.
3. Build command: `npm run build:next`.
4. Keep the default output directory.
5. Add `NEXT_PUBLIC_SITE_URL` for Production and Preview environments.
6. Assign the production domain and verify Open Graph, robots, sitemap, and all
   route smoke tests after deployment.

The repository’s default `build` command produces the validated hosted Worker
edition. Vercel must use `build:next`.

## Netlify

1. Import the GitHub repository.
2. Build command: `npm run build:next`.
3. Use Netlify’s maintained Next.js/OpenNext integration.
4. Add `NEXT_PUBLIC_SITE_URL`.
5. Keep contact behavior as the current email handoff or connect a validated
   server endpoint. Do not imply Netlify Forms support without adding and testing
   its required integration.

## GitHub Pages

GitHub Pages is a static edition. This project is designed so current routes can
be exported, but future server-only features will not be compatible.

For a project repository named `digital-gigz-ai-lab`:

```bash
NEXT_PUBLIC_BASE_PATH=/digital-gigz-ai-lab npm run build:github-pages
```

Deploy the generated `out/` directory through GitHub Actions.

Limitations:

- no server route handlers, authentication, ISR, or server-side persistence;
- contact remains a user-reviewed email handoff;
- favorites and dashboard data remain local to the browser;
- future image optimization must use an external service or stay unoptimized.

For a user/organization site at the domain root, leave
`NEXT_PUBLIC_BASE_PATH` empty.

## Post-deployment checks

- Every navigation and footer link returns the expected page.
- The mobile menu opens, closes, and restores body scrolling.
- Search, filters, favorites, copy, modal, toast, and pagination work.
- Both themes meet contrast expectations.
- Keyboard focus is visible and modal focus is contained.
- `/robots.txt`, `/sitemap.xml`, and `/manifest.webmanifest` resolve.
- `/dashboard` is `noindex` and excluded from the sitemap.
- The canonical origin matches the real production domain.
- No form asks for or stores health or confidential information.

## Rollback

Keep each release immutable at the hosting provider. If a release fails a smoke
test, restore the previous known-good deployment, record the incident, fix the
source on a branch, and rerun the complete release checks.
