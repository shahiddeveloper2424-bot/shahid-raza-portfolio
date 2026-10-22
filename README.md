# Shahid Raza — Portfolio

Personal portfolio of **Shahid Raza**, a software developer specializing in modern web applications, custom business software, e-commerce solutions, and digital products built with **React, JavaScript, Node.js, and MongoDB**.

Live repository: https://github.com/shahiddeveloper2424-bot/shahid-raza-portfolio

## Owner content — what to supply

Everything personal is configured in ONE place: `src/data/site.js`. Items still missing (the site shows honest placeholders for them):

1. **Your real photo** → supplied and live as `public/images/profilephoto.jpeg`. It appears in the hero and About automatically.
2. **Verified email** → `site.contact.email` (activates the contact cards AND the enquiry form).
3. **WhatsApp number** → `site.contact.whatsapp` (international format, digits only).
4. **LinkedIn URL** → `site.socials.linkedin`.
5. **Location** → `site.location` (hero "Based" field).
6. **Education / experience** → `site.education`, `site.experience` (About section).
7. **EduCore** → features, verified stack and real screenshots were supplied by the owner (Oct 2026) and are published; demo/source links remain owner-pending in `src/data/projects.js`.
8. **Real project screenshots** → every project now supplies its own image via `screenshot`/`cardImage` in `src/data/projects.js`; the labelled design compositions in `ProjectVisual.jsx` remain only as fallbacks if an image ever fails to load.

Verified live links published on the site (re-checked October 2026): Shahid Fashion Store https://shahid-fashion-store.vercel.app · PDF Toolkit Pro https://pdf-toolkit-pro-shahiddeveloper2424-1108.vercel.app (source: https://github.com/shahiddeveloper2424-bot/pdf-toolkit-pro). PRINTORA's storefront is deliberately NOT linked from the portfolio (status: Live Demo Coming Soon, per the owner). Note: `pdf-toolkit-pro.vercel.app` (no team suffix) serves a DIFFERENT, unrelated site — always use the team domain above for PDF Toolkit Pro.

## Design

**Editorial Paper system.** The portfolio is art-directed as a small
digital publication: warm paper, warm ink, hairline rules, and ONE
accent — brick red. Palette, also defined as tokens in
`tailwind.config.js` (token names were kept from the earlier theme;
their values are the whole palette — no other hues, no gradients):

| Token | Hex | Role |
| --- | --- | --- |
| paper / navy | #F4EEE1 | Primary background (warm paper) |
| surface | #EBE2CC | Deeper paper (alternating sections) |
| card | #FDFBF4 | Plates & cards |
| line | #D8CBAE | Hairlines & borders |
| ink | #1E1811 | Main text (warm near-black) |
| soft | #514739 | Secondary text |
| muted | #8B7D64 | Labels & captions |
| accent / cyan / violet | #9E2B1E | The single accent — editorial brick |

Composition: a masthead header with a newspaper double rule; an
editorial hero with an edition line, a contents strip and a featured
live project; case studies presented as magazine features with
bylines, meta tables and captioned figures; skills set as ruled
type, not pill badges. Display type is **Fraunces** (serif); body
**Inter**; folios and labels **IBM Plex Mono**. The owner's own SR
logo is used exactly as supplied, presented on an ink stamp in the
masthead. Motion is restrained, with full `prefers-reduced-motion`
support. No fake screenshots and no invented claims — project
visuals are genuine images with honest captions, and anything not
yet supplied by the owner renders as a clearly labelled placeholder.

## What's inside

- **Home** — editorial hero, selected work (with Load More), about, skills, services, process and contact sections
- **Case studies** — eight routes: `/projects/shahid-fashion-store`, `/projects/pdf-toolkit-pro`, `/projects/educore`, `/projects/printora`, `/projects/learnflow-ai`, `/projects/authentication-session-security`, `/projects/taskflow` (with a working in-page demo), `/projects/ai-personal-agent`
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
