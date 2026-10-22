# Deployment (free tiers)

This is a static Vite SPA. Build output is `dist/`. Every host below works on a free tier.

## Vercel (recommended — config included)

1. Import `shahiddeveloper2424-bot/shahid-raza-portfolio` at vercel.com/new
2. Framework preset: **Vite** · Build: `npm run build` · Output: `dist`
3. Deploy. `vercel.json` already provides the SPA rewrite (`/projects/*` → `index.html`) and immutable caching for `/assets/*`.

## Netlify

- Build command: `npm run build` · Publish directory: `dist`
- Add a redirect rule for SPA routing: `/*  /index.html  200` (Site settings → Redirects, or a `_redirects` file in `public/`).

## GitHub Pages

- Settings → Pages → Source: **GitHub Actions**, using the official "Static HTML" / Vite workflow with `dist/` as the artifact.
- Note: SPA deep links (`/projects/printora`) need a `404.html` copy of `index.html` — copy `dist/index.html` to `dist/404.html` in the workflow before upload.

## Cloudflare Pages

- Framework preset: **Vite (React)** · Build: `npm run build` · Output: `dist`
- SPA fallback is automatic for Pages when no matching asset exists.

## After connecting a domain

1. Replace `your-domain.example` in `public/sitemap.xml` and `public/robots.txt`.
2. Update the `url` / OG fields in `index.html` if you add absolute canonical URLs.
3. Optionally set `VITE_SITE_URL` (see `.env.example`) if you later wire it into meta tags.
