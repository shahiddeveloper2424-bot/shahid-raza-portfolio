# Shahid Raza — Portfolio

Personal portfolio of **Shahid Raza**, a software developer specializing in modern web applications, custom business software, e-commerce solutions, and digital products built with **React, JavaScript, Node.js, and MongoDB**.

Live repository: https://github.com/shahiddeveloper2424-bot/shahid-raza-portfolio

## Design

Colorful premium identity (v3). Palette — documented tokens (tailwind.config.js):

| Token | Hex | Role |
| --- | --- | --- |
| cobalt | #635BFF | Primary brand · PRINTORA |
| coral | #FF6B6B | Secondary accent · EduCore |
| lime | #D9F75D | Highlight · PDF Toolkit Pro |
| ink | #171717 | Text + dark sections |
| paper | #F8F7F2 | Soft-white light base |

Display type is Space Grotesk; body Inter; labels IBM Plex Mono. Loud color sits on disciplined neutrals: a cobalt hero and contact bookend, one colour world per project (cobalt / coral / lime panels), an ink services section with rotating accent numerals, and a lime marquee strip. Signature devices are structural, not decorative noise: hard offset shadows, dot-grid textures on colour fields, fail-safe scroll reveal, and full `prefers-reduced-motion` support. No gradients-as-decoration, no glass cards, no fake screenshots — project visuals are labelled design compositions until the owner supplies real screenshots.

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
