# Content & honesty policy

This portfolio follows a strict rule: **only verified information is presented as fact.**

## Verified at launch

- Owner name and role, and the one-line specialisation (from the repository description written by the owner).
- GitHub account: `shahiddeveloper2424-bot` (owns this repository).
- PRINTORA: MERN stack, feature set, preview deployment on Vercel, private source repository, project status — all verified during its actual build.

## Explicit placeholders (intentionally not invented)

| Item | Where | How to complete |
|---|---|---|
| Email address | `src/data/site.js` → `contact.email` | Set the verified address; UI activates automatically |
| WhatsApp number | `src/data/site.js` → `contact.whatsapp` | Digits only, international format |
| Location / availability | `src/data/site.js` | Plain text |
| LinkedIn | `src/data/site.js` → `socials.linkedin` | Verified profile URL |
| Education & experience | `src/data/site.js` | Owner-supplied entries only |
| EduCore details (scope, stack, role, links) | `src/data/projects.js` | Set fields + `detailsPending: false` when confirmed |
| PDF Toolkit Pro details | `src/data/projects.js` | Same as above |
| Real screenshots (all projects) | `src/data/projects.js` → `screenshot` | Add image to `public/` and set the path |
| Production domain | `public/sitemap.xml`, `public/robots.txt`, `index.html` canonical/OG | Replace `your-domain.example` |

## Never added

- Fake testimonials or client logos
- Invented statistics (clients served, years, project counts beyond the real case studies)
- Stock "team" photos or AI-generated screenshots passed off as real product captures
