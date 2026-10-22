# Shahid Raza — Portfolio

Personal portfolio of **Shahid Raza**, a software developer specializing in modern web applications, custom business software, e-commerce solutions, and digital products built with **React, JavaScript, Node.js, and MongoDB**.

Live repository: https://github.com/shahiddeveloper2424-bot/shahid-raza-portfolio

## Owner content — what to supply

Everything personal is configured in ONE place: `src/data/site.js`. Items still missing (the site shows honest placeholders for them):

1. **Your real photo** → save it as `public/images/profilephoto.jpeg` (see `public/images/README.txt`). It appears in the hero and About automatically.
2. **Verified email** → `site.contact.email` (activates the contact cards AND the enquiry form).
3. **WhatsApp number** → `site.contact.whatsapp` (international format, digits only).
4. **LinkedIn URL** → `site.socials.linkedin`.
5. **Location** → `site.location` (hero "Based" field).
6. **Education / experience** → `site.education`, `site.experience` (About section).
7. **EduCore stack & links** → its features and a real dashboard screenshot were supplied by the owner (Oct 2026) and are published; the technology stack confirmation and any demo/source links are still owner-pending in `src/data/projects.js`.
8. **Real project screenshots** → set `screenshot` per project in `src/data/projects.js`; labelled design compositions are shown until then.

Verified project links (re-checked October 2026): PRINTORA storefront https://printora-crfs.vercel.app · PDF Toolkit Pro https://pdf-toolkit-pro-shahiddeveloper2424-1108.vercel.app (source: https://github.com/shahiddeveloper2424-bot/pdf-toolkit-pro). Note: `printora-alpha.vercel.app` is the PRINTORA backend API, not the storefront — do not link it as the live site. Likewise, `pdf-toolkit-pro.vercel.app` (no team suffix) now serves a DIFFERENT, unrelated site — always use the team domain above for PDF Toolkit Pro.

## Design

**Midnight Navy system (v5, strict — one brand).** Palette, also defined
as tokens in `tailwind.config.js`:

| Token | Hex | Role |
| --- | --- | --- |
| paper / navy | #0B1220 | Primary background (midnight navy) |
| surface | #111C2E | Secondary surface |
| card | #162238 | Elevated cards |
| accent | #3478F6 | Primary accent (electric blue) |
| cyan | #38BDF8 | Supporting accent, sparing |
| ink | #F7FAFF | Main text |
| soft | #AAB7CC | Secondary text |
| line | #29374E | Borders & dividers |

A blue→violet gradient (`#3478F6` → `#7465F5`) is used for the primary
CTA only. Design rule: roughly 70% dark neutral surfaces, 25% light
text, 5% accents — one consistent system across every section and
project; no per-project colour worlds and no extra hues. Display type
is Space Grotesk; body Inter; labels IBM Plex Mono. Premium framed
portrait (owner's real photo as a circle inside an elegant navy panel),
rounded cards with thin borders, restrained blue highlights, subtle
motion with full `prefers-reduced-motion` support, and a fail-safe
scroll reveal. No fake screenshots — project visuals are labelled
design compositions until the owner supplies real screenshots.

## What's inside

- **Home** — hero, selected work, about, skills, services, process and contact sections
- **Case studies** — `/projects/printora`, `/projects/educore`, `/projects/pdf-toolkit-pro`
- **Honest content policy** — no fake testimonials, no invented statistics, no fake screenshots. Anything not yet supplied by the owner (email, WhatsApp, education, some project details) renders as a clearly labelled placeholder. See `docs/CONTENT.md`.

## Tech stack

| Layer | Choice |
|---|---|
| Framework | React 18 |
| Build tool | Vite 5 |
| Language | JavaScript only — **no TypeScript** (guarded by `npm run lint:files`) |
| Styling | Tailwind CSS 3 + custom CSS |
| Routing | Lightweight history router (`src/lib/router.jsx`) — no router dependency |
| Hosting | Any static host / free tier (Vercel config included) |

## Local setup

```bash
# Prerequisites: Node.js 18+ and npm
git clone https://github.com/shahiddeveloper2424-bot/shahid-raza-portfolio.git
cd shahid-raza-portfolio
npm install
npm run dev        # http://localhost:5173
```

## Scripts

```bash
npm run dev         # dev server with HMR
npm run build       # production build -> dist/
npm run preview     # preview the production build locally
npm run lint:files  # fail if any TypeScript file sneaks in
```

## Project structure

```
index.html            SEO meta, Open Graph, JSON-LD, font loading
public/               favicon, OG image, robots.txt, sitemap.xml (placeholder domain)
src/
  main.jsx            entry point
  App.jsx             route resolution (/, /projects/:slug, 404)
  lib/router.jsx      tiny history router + Link + document-title hook
  hooks/useReveal.js  scroll-reveal (respects prefers-reduced-motion)
  data/site.js        OWNER CONFIG: name, contact, socials, education — placeholders = null
  data/projects.js    project case-study content (verified facts only)
  data/skills.js      skills, services, process
  components/         Header, Footer, SectionHeading, ProjectVisual
  pages/              Home, ProjectCase, NotFound
docs/                 CONTENT.md (honesty/placeholder policy), DEPLOYMENT.md
vercel.json           SPA rewrite + immutable asset caching
```

## Adding real details (owner)

Edit **one file**: `src/data/site.js`.

- Verified email → `contact.email` (contact cards + form activate automatically)
- Verified WhatsApp → `contact.whatsapp` (digits only, international format) + `contact.whatsappDisplay`
- Location, availability, LinkedIn, education, experience → same file
- Project details/screenshots/links → `src/data/projects.js` (set `screenshot` to a real image path and it replaces the labelled design visual)

No `.env` file is needed and none must ever be committed. `.env.example` documents the single optional variable.

## Deployment

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) — Vercel, Netlify, GitHub Pages and Cloudflare Pages, all on free tiers.

## Accessibility & performance

Semantic landmarks, skip link, visible focus states, labelled controls, keyboard-dismissible mobile menu, `prefers-reduced-motion` support in CSS and JS, lazy-loaded images, no heavy dependencies (React + Vite + Tailwind only), immutable caching for hashed assets.
