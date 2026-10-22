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
 * - No real app screenshots were supplied; projects render labelled
 *   design compositions, except PDF Toolkit Pro whose cover is the
 *   owner's promotional concept artwork (labelled as artwork in the UI).
 */
export const projects = [
  {
    slug: 'printora',
    index: '01',
    title: 'PRINTORA',
    subtitle: 'Print-on-Demand E-Commerce Platform',
    status: 'Live Demo Coming Soon',
    statusNote: 'The storefront is built and running as a private preview; its public link is intentionally not published yet. A live demo will be linked here as soon as the owner releases it. Payment-method work and final launch steps are intentionally deferred by the owner.',
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
      live: null, // Owner instruction: do not publish the PRINTORA URL yet.
      liveLabel: null,
      github: null,
      githubNote: 'Source code lives in a private repository.',
    },
    screenshot: '/images/printora-project-preview.webp', // Representative preview built from real PRINTORA branding & catalogue data (a genuine screenshot was not obtainable — the store's product photos currently unavailable upstream).
    screenshotNote: 'Representative preview — real PRINTORA branding & product data',
    screenshotSize: [1400, 1050],
    detailsPending: false,
  },
  {
    slug: 'educore',
    index: '02',
    title: 'EduCore',
    subtitle: 'School Management System',
    status: 'In development',
    statusNote: 'A working build exists and is in active development — the dashboard screenshot on this page is from the running application, supplied by the owner (the figures shown are the app\'s working data). It is not yet publicly deployed, so no live-demo link is published.',
    year: '2026',
    role: 'Design & development',
    stack: [], // To be confirmed by the owner — not claimed from a screenshot alone.
    summary:
      'A school management system that brings a school\'s daily operations into one admin dashboard — student and staff records, attendance, classes, and complete fee management, from fee structures and invoices to collection reports.',
    challenge:
      'Running a school on registers and spreadsheets means student records, attendance and fee collection live in different places: fee status is hard to track, attendance takes time to compile, and the administration never gets one current overview of the whole school.',
    approach:
      'EduCore is built as one modular admin system around how a school actually runs — academics (students, guardians, classes, sections, subjects, teacher assignments) and finance (fee structures, invoices, collections, reports) in a single dashboard, with today\'s attendance and the current billing period\'s fee position visible the moment an administrator signs in.',
    features: [
      'Admin dashboard with a live school overview — active students, staff, teacher logins, classes and sections at a glance',
      'Student & guardian records, with classes, sections and subjects management and teacher assignments',
      'Attendance for students and staff, with a same-day summary (present / absent / late / leave) on the dashboard',
      'Complete fee management — fee structures, class fee setup, invoice generation, and a fee dashboard tracking invoiced, collected, outstanding and overdue amounts',
      'Examinations & results, assignments, homework and timetable management',
      'Notices for school-wide communication',
      'Role-based access (administrator and teacher logins), light/dark themes and a language selector',
    ],
    users:
      'School administrators who need one current view of their school, teaching staff whose classes and attendance are managed in the system, and the office staff handling student records and fee collection.',
    outcomes: [
      'A working application build exists today — the dashboard screenshot on this page is from the running system, not a mockup',
      'The core school modules are implemented in one system: students, staff, attendance, classes, exams, homework, timetable and notices',
      'Fee operations are covered end to end in the admin: structures, invoices, collection tracking and reports',
      'Still in development: not yet publicly deployed — demo and source links will be published as the owner releases them',
    ],
    links: { live: null, liveLabel: null, github: null, githubNote: 'Demo and source links will be added here when the owner publishes them.' },
    screenshot: '/images/educore-dashboard.jpg', // Real screenshot of the running app, supplied by the owner.
    screenshotNote: 'Real screenshot — EduCore admin dashboard, supplied by the owner',
    screenshotSize: [1400, 875],
    detailsPending: false,
  },
  {
    slug: 'pdf-toolkit-pro',
    index: '03',
    title: 'PDF Toolkit Pro',
    subtitle: 'Browser-Based PDF Tools',
    status: 'Live Project',
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
      live: 'https://pdf-toolkit-pro-shahiddeveloper2424-1108.vercel.app',
      liveLabel: 'View live project',
      github: 'https://github.com/shahiddeveloper2424-bot/pdf-toolkit-pro',
      githubNote: null,
    },
    screenshot: '/images/pdf-toolkit-pro-cover.jpg', // Owner-supplied promotional artwork (concept visual — NOT an app screenshot).
    screenshotNote: 'Promotional concept artwork — not an application screenshot',
    screenshotSize: [1400, 933],
    detailsPending: false,
  },
]

export const getProject = (slug) => projects.find((p) => p.slug === slug) || null
