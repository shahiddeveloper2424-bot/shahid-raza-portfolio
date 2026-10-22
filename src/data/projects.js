/**
 * PROJECTS — honest presentations only.
 *
 * - PRINTORA facts below were verified during its actual build
 *   (MERN stack, live storefront on Vercel, private source repository).
 *   NOTE: the storefront is printora-crfs.vercel.app — the older
 *   printora-alpha.vercel.app domain serves the backend API (JSON), not
 *   the shop, and must not be linked as the live site.
 * - PDF Toolkit Pro was verified 2026-10-22 from its public GitHub repo
 *   README + its live deployment (8 client-side tools, 53/53 tests).
 * - EduCore: no repository or demo evidence is available yet, so its
 *   fields stay explicit placeholders (`detailsPending: true`).
 * - No screenshots are included because no real screenshots were supplied.
 *   Each project renders a labelled visual placeholder instead.
 */
export const projects = [
  {
    slug: 'printora',
    index: '01',
    title: 'PRINTORA',
    subtitle: 'Print-on-Demand E-Commerce Platform',
    status: 'Live preview',
    statusNote: 'The storefront is live on Vercel (link below). Payment-method work and final launch steps are intentionally deferred by the owner.',
    year: '2026',
    role: 'Design & full-stack development',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Mongoose'],
    summary:
      'A print-on-demand storefront where customers in Pakistan and worldwide can browse products, customise designs in an interactive studio, and order in PKR with multi-currency display.',
    challenge:
      'Print-on-demand needs more than a shop: customers design the product themselves, so the storefront, a real design studio, print-area validation and a full operations admin all have to work as one system — without weakening checkout, permissions or pricing rules.',
    approach:
      'Built phase by phase on a MERN stack, with a strict rule carried through the whole project: targeted, verified changes only. Server stays authoritative for totals, discounts, shipping and currency conversion; orders store the PKR amount together with the FX snapshot used at purchase time.',
    features: [
      'Storefront with dynamic homepage — collections, banners and best sellers ranked from real order data',
      'Design Studio: text & image layers, front/back views, transforms, undo/redo and saved designs',
      'Genuine print validation — printable bounds and DPI checks in the studio and admin print-area editor',
      'Multi-currency display (PKR base) with country detection and a manual override that is never silently reset',
      'Full admin: products, orders, fulfillment, inventory, customers, reviews, discounts, content, finance, reports, staff & permissions, audit log',
      'Honest payments: Cash on Delivery live; card payments shown as unavailable until a real provider is configured — no fake integrations',
      'Isolated preview database, so sandbox work never touches production data',
    ],
    users:
      'Online shoppers in Pakistan and worldwide who want custom-printed products — and the store operator running products, orders and fulfillment from the admin.',
    challenges: [
      { title: 'Multi-currency display without fake pricing', text: 'Prices display in the visitor’s currency, but accounting stays in PKR. The server — never the browser — is authoritative for totals, and every order stores the exchange-rate snapshot used at purchase time.' },
      { title: 'Preview work must never touch production data', text: 'Early preview deployments shared the production database. The database layer now selects its connection strictly by environment and fails safe, so sandbox work runs on an isolated preview database.' },
      { title: 'A design studio that respects print reality', text: 'Free-form design tools happily produce unprintable files. The studio validates printable bounds and DPI live, and the admin defines each product’s print area with a visual editor.' },
    ],
    outcomes: [
      'Backend test chain passing across 17 suites at last verified check',
      'Preview catalog, collections and banners verified end-to-end against live endpoints',
      'Currency pipeline verified in production — real rates with timestamps, PKR as base accounting currency',
    ],
    links: {
      live: 'https://printora-crfs.vercel.app',
      liveLabel: 'View live project',
      github: null,
      githubNote: 'Source code lives in a private repository.',
    },
    screenshot: null, // No real screenshot supplied — labelled placeholder is rendered.
    detailsPending: false,
  },
  {
    slug: 'educore',
    index: '02',
    title: 'EduCore',
    subtitle: 'School Management System',
    status: 'In development',
    statusNote: 'Full project details have not been supplied yet. This page is an honest placeholder case study — no features, stack or results are claimed until the owner confirms them.',
    year: null, // PLACEHOLDER
    role: null, // PLACEHOLDER — owner to confirm role
    stack: [], // PLACEHOLDER — owner to confirm stack
    summary:
      'A school management system project by Shahid Raza. The detailed scope of this system is being documented by the owner.',
    challenge: null, // PLACEHOLDER
    approach: null, // PLACEHOLDER
    features: [], // PLACEHOLDER — no features claimed until verified
    outcomes: [],
    links: { live: null, liveLabel: null, github: null, githubNote: 'Demo and source links will be added here when available.' },
    screenshot: null,
    detailsPending: true,
  },
  {
    slug: 'pdf-toolkit-pro',
    index: '03',
    title: 'PDF Toolkit Pro',
    subtitle: 'Browser-Based PDF Tools',
    status: 'Live',
    statusNote: 'Live and fully client-side. Stated limitations, from the project itself: files over ~50 MB trigger a warning and may be slow on low-RAM devices; password-protected PDFs must be unlocked first; .docx conversion is content-faithful, not pixel-faithful.',
    year: '2026',
    role: 'Design & development',
    stack: ['React', 'JavaScript', 'Vite', 'Tailwind CSS', 'pdf-lib', 'PDF.js', 'JSZip', 'Mammoth'],
    summary:
      'Eight professional PDF tools that run entirely in the browser — with real visual page previews and no uploads. Files never leave the user’s device.',
    challenge:
      'Most PDF tools make you upload private documents to a stranger’s server. The goal was the opposite: full PDF power — merging, splitting, converting, watermarking — with zero uploads, plus honest behaviour for the formats a browser genuinely cannot handle.',
    approach:
      'Everything runs client-side: pdf-lib is the engine, PDF.js renders true page thumbnails so users select real pages visually instead of guessing page numbers, and heavy pieces (like the Word converter) lazy-load only when needed. Unsupported formats are refused with a named, honest error instead of a broken download.',
    users:
      'Students, office staff and freelancers who handle PDFs daily and want the job done privately — no accounts, no uploads, no waiting on a server.',
    features: [
      'Merge PDF & Images — combine PDFs and JPG/PNG/WebP images in one ordered queue, with page size, orientation and margin controls',
      'PDF Maker — build a PDF from images, with preview and reordering',
      'Convert to PDF — images, .txt, .html and .docx files converted in-browser',
      'Split — visually select pages into individual PDFs or one combined file (ZIP download)',
      'Extract — click pages in any order to build a new PDF from just those pages',
      'Rotate — rotate selected pages 90°/180°/270° with a live thumbnail preview',
      'Reorder — move pages as a block, with undo and reset-to-original',
      'Watermark — live-preview watermark with text, size, opacity, rotation, colour and position controls',
    ],
    challenges: [
      { title: 'Real page previews, not blind page numbers', text: 'Most tools make users type page ranges blind. PDF.js renders an actual thumbnail of every page, so splitting, rotating and reordering are visual and verifiable before anything is downloaded.' },
      { title: 'Honest format limits', text: 'A browser cannot convert everything. Unsupported files (.doc, .xlsx, .pptx) are refused with a named error, and .docx conversion is labelled content-faithful rather than pixel-faithful — in the UI as well as here.' },
      { title: 'Fast first load despite a heavy engine', text: 'Tool pages lazy-load, and the ~305 KB Word-conversion library loads only when a .docx file is actually converted — the landing page stays light.' },
    ],
    outcomes: [
      'Live on Vercel — the deployment was re-verified for this portfolio (October 2026)',
      '53/53 engine tests passing in the project repository, including byte-verified merge order and honest refusal of unsupported formats',
      'Browser end-to-end checks 20/20 in the project repository, including mobile layout with no horizontal overflow',
      'Zero uploads by design — all processing happens on the user’s own device',
    ],
    links: {
      live: 'https://pdf-toolkit-pro.vercel.app',
      liveLabel: 'View live project',
      github: 'https://github.com/shahiddeveloper2424-bot/pdf-toolkit-pro',
      githubNote: null,
    },
    screenshot: null, // No real screenshot supplied — labelled placeholder is rendered.
    detailsPending: false,
  },
]

export const getProject = (slug) => projects.find((p) => p.slug === slug) || null
