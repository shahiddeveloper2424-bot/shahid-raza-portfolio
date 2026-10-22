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
    category: 'E-commerce',
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
    screenshot: '/images/printora-product-showcase.webp', // Product showcase artwork composed for this portfolio from AI-generated product photography in PRINTORA's branding; product names/prices are the real catalogue's.
    screenshotNote: 'Product showcase artwork — PRINTORA branding & real product range',
    screenshotSize: [1600, 1440],
    cardImage: '/images/projects/printora-original-collection.webp',
    cardImageNote: 'Original PRINTORA collection — custom product design concepts created for this portfolio',
    cardImageSize: [1920, 1280],
    gallery: [
      {
        src: '/images/projects/printora-original-collection.webp',
        alt: 'Original PRINTORA collection — flat-lay of a graphic tee, hoodie, tote, phone case and mug with original designs',
        caption: 'Original Printora Collection — custom product design concepts created for this portfolio showcase: a sun-and-mountain line design on the tee and mug, a geometric emblem on the hoodie, and a coordinated abstract pattern on the tote and phone case. These are design concepts for presentation — not products currently on sale.',
        size: [1920, 1280],
      },
      {
        src: '/images/printora-product-showcase.webp',
        alt: 'PRINTORA storefront showcase artwork — homepage with the featured product range',
        caption: 'The storefront concept — showcase artwork of the PRINTORA homepage (Make It Yours.) with the featured product range. The live demo link stays “Coming Soon” by the owner’s decision.',
        size: [1600, 1440],
      },
      {
        src: '/images/projects/printora-gallery-shop.webp',
        alt: 'PRINTORA shop page artwork — the six-product catalogue in a storefront grid',
        caption: 'The shop — representative artwork of the storefront grid with the real catalogue and PKR prices: tees, hoodie, mug, tote, phone case and poster, each with its own customisation entry point.',
        size: [1600, 1150],
      },
      {
        src: '/images/projects/printora-gallery-product.webp',
        alt: 'PRINTORA product page artwork — Essential Custom T-Shirt with colour and size options',
        caption: 'Product page — representative artwork: the Essential Custom T-Shirt (Rs 1,999) with colour and size selection, leading into the design studio or straight to the bag.',
        size: [1600, 1150],
      },
      {
        src: '/images/projects/printora-gallery-cart.webp',
        alt: 'PRINTORA shopping bag artwork — two items with PKR totals and Cash on Delivery',
        caption: 'The bag — representative artwork: items with their chosen options, PKR totals kept server-authoritative, and Cash on Delivery shown honestly as the available payment route.',
        size: [1600, 1150],
      },
    ],
    detailsPending: false,
  },
  {
    slug: 'educore',
    category: 'School Management Software',
    index: '02',
    title: 'EduCore',
    subtitle: 'School Management System',
    status: 'In development',
    statusNote: 'A working build exists and is in active development as the Small School Edition — every screenshot on this page is from the actual application, run locally with the project\'s own demo dataset (records are visibly marked “Demo” in the app). It is not yet publicly deployed, so no live-demo link is published.',
    year: '2026',
    role: 'Design & development',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Mongoose'], // Verified from the supplied project source (client + server package.json), 2026-10-22.
    summary:
      'EduCore is a practical school management system designed for small private schools that need a centralized way to manage essential day-to-day academic and administrative operations — student records, fees, attendance, examinations and staff, in one web application.',
    challenge:
      'Running a school on registers and spreadsheets means student records, attendance and fee collection live in different places: fee status is hard to track, attendance takes time to compile, and the administration never gets one current overview of the whole school.',
    approach:
      'EduCore is built as one modular admin system around how a school actually runs — academics (students, guardians, classes, sections, subjects, teacher assignments) and finance (fee structures, invoices, collections, reports) in a single dashboard, with today\'s attendance and the current billing period\'s fee position visible the moment an administrator signs in.',
    features: [
      'Admin dashboard with a live school overview — active students, staff, teacher logins, classes and sections, today\'s attendance and the current fee collection position at a glance',
      'Complete student admission records — guardians and emergency contacts, class/section enrollment, attendance and fee history per student',
      'Staff records with teacher login accounts, designations, subjects and teacher-to-section assignments',
      'Classes, sections and subjects management with safe-delete rules',
      'Attendance for students and staff — daily registers, same-day summaries (present / absent / late / leave), CSV export and printable registers',
      'Complete fee management — per-class fee structures, invoice generation, payments and receipts, a fee dashboard (invoiced / collected / outstanding / overdue) and defaulter reports',
      'Examinations & results — exam setup, marks entry and printable result cards',
      'Timetable, homework and school notices',
      'Private document storage for staff and student records — uploads are verified by file content and only ever served through role-authorized access',
      'Role-based access with privacy rules (for example, teachers never see student medical notes or identity numbers), school settings with logo and login-page branding, light/dark themes and a language selector',
    ],
    users:
      'School administrators who need one current view of their school, teaching staff whose classes and attendance are managed in the system, and the office staff handling student records and fee collection.',
    outcomes: [
      'A working application build exists today — every screenshot on this page was captured from the running system with its demo dataset, not drawn as a mockup',
      'The core school modules are implemented in one system: students, staff, attendance, classes, exams, homework, timetable and notices',
      'Fee operations are covered end to end in the admin: structures, invoices, collection tracking and reports',
      'Still in development: not yet publicly deployed — demo and source links will be published as the owner releases them',
    ],
    links: { live: null, liveLabel: null, github: null, githubNote: 'Demo and source links will be added here when the owner publishes them.' },
    screenshot: '/images/projects/educore-dashboard-real.webp', // Real screenshot captured 2026-10-22 from the running app (demo dataset).
    screenshotNote: 'Real screenshot — the EduCore admin dashboard, running locally with the project’s own demo dataset',
    screenshotSize: [1440, 900],
    edition: 'SMALL SCHOOL EDITION',
    gallery: [
      {
        src: '/images/projects/educore-students-real.webp',
        alt: 'EduCore student records — real screenshot',
        caption: 'Student records — a real screenshot of the running application: admission numbers, classes, guardians and record actions, with the demo dataset visibly marked “Demo”.',
        size: [1440, 900],
      },
      {
        src: '/images/projects/educore-fees-real.webp',
        alt: 'EduCore fee dashboard — real screenshot',
        caption: 'Fee dashboard — a real screenshot: the current billing period’s invoiced, collected, outstanding and overdue position, with paid / unpaid / overdue invoice counts.',
        size: [1440, 900],
      },
      {
        src: '/images/projects/educore-attendance-real.webp',
        alt: 'EduCore attendance register — real screenshot',
        caption: 'Attendance register — a real screenshot: a class register loaded by date, class and section, with the day’s present / absent / late / leave totals and print / CSV options.',
        size: [1440, 900],
      },
      {
        src: '/images/projects/educore-staff-real.webp',
        alt: 'EduCore staff management — real screenshot',
        caption: 'Staff management — a real screenshot: teacher and staff records with designations, categories, login status and “create login” actions for teacher accounts.',
        size: [1440, 900],
      },
      {
        src: '/images/projects/educore-exams-real.webp',
        alt: 'EduCore exams and results — real screenshot',
        caption: 'Exams & results — a real screenshot: exams by class and term with publish controls; marks entry and printable result cards sit behind each exam.',
        size: [1440, 900],
      },
      {
        src: '/images/projects/educore-login.webp',
        alt: 'EduCore branded sign-in page — real screenshot',
        caption: 'Sign-in — a real screenshot: the login page branding (panel text, theme and image) is editable by the school admin in Settings, without touching code.',
        size: [1440, 900],
      },
      {
        src: '/images/projects/educore-dashboard-mobile.webp',
        alt: 'EduCore dashboard on a mobile-width screen — real screenshot',
        caption: 'On mobile — a real screenshot at phone width: the admin dashboard stacks cleanly, with the same live counts and sections.',
        size: [390, 844],
      },
    ],
    roadmap: {
      heading: 'Built for Small Schools. More Coming Soon.',
      currentTitle: 'Small School Management System — Current Focus',
      currentText:
        'EduCore is focused on the essential needs of small private schools, including student records, fee management, attendance, examinations, report cards, and staff administration where these features are implemented.',
      futureTitle: 'Advanced & Large School Management System — Coming Soon',
      futureText:
        'We are planning a more advanced school management solution for larger schools with broader operational requirements, expanded administrative workflows, and additional capabilities.',
      futureBadge: 'ADVANCED & LARGE SCHOOL EDITION — COMING SOON',
    },
    detailsPending: false,
  },
  {
    slug: 'pdf-toolkit-pro',
    category: 'Web Applications',
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
    gallery: [
      {
        src: '/images/projects/pdf-gallery-tools.webp',
        alt: 'PDF Toolkit Pro tools home — representative artwork of the eight tools',
        caption: 'The tools home — representative artwork: all eight verified tools (Merge, PDF Maker, Convert, Split, Extract, Rotate, Reorder, Watermark) in one grid. Try the real thing from the live link above.',
        size: [1600, 1150],
      },
      {
        src: '/images/projects/pdf-gallery-merge.webp',
        alt: 'PDF Toolkit Pro merge workflow — representative artwork',
        caption: 'Merging — representative artwork of the workflow: add files, drag them into order, and the merged PDF is built locally with pdf-lib and downloaded — nothing is uploaded.',
        size: [1600, 1150],
      },
      {
        src: '/images/projects/pdf-gallery-pages.webp',
        alt: 'PDF Toolkit Pro page tools — representative artwork',
        caption: 'Page tools — representative artwork: pages rendered with PDF.js so you can see the real document while rotating or reordering it.',
        size: [1600, 1150],
      },
    ],
    detailsPending: false,
  },
  {
    slug: 'authentication-session-security',
    category: 'Security',
    index: '04',
    title: 'Authentication & Session Security',
    subtitle: 'Web Application Security / Backend Development',
    status: 'Security Case Study',
    statusNote: 'This is a dedicated case study, not a standalone product: the implementation lives inside PRINTORA\'s server (with role-based logins also implemented in EduCore). Every protection listed was verified in the actual source code and its automated tests. No PRINTORA link is published from this page.',
    year: '2026',
    role: 'Design & implementation',
    stack: ['Node.js', 'Express', 'MongoDB', 'JWT', 'bcrypt', 'Helmet', 'express-rate-limit'],
    summary:
      'The authentication and session-security system implemented inside PRINTORA, my print-on-demand store — a security-focused case study of how user access is protected, authenticated sessions are managed, and role-based permissions are enforced in that production MERN application.',
    challenge:
      'A store that handles customer accounts, orders and an admin panel cannot treat login as a formality: weak password storage, unlimited login attempts, or permissions enforced only by hiding buttons would put customer data and the whole business at risk.',
    approach:
      'The workflow, end to end: (1) Registration stores only a bcrypt hash of the password. (2) Login checks credentials against that hash — failures get one generic error and are throttled after repeated attempts. (3) A successful login issues a signed JWT (7-day expiry) carrying the user id and role. (4) Every protected request re-verifies the token on the server, loads the account, and rejects blocked users even with a valid token. (5) Role middleware then decides whether that user may perform the specific action. (6) Sensitive changes — password or email — require the current password again. (7) Recovery links are single-use, expire in one hour, and are stored only as SHA-256 hashes. (8) Logout discards the token; account blocking revokes access server-side.',
    features: [
      'bcrypt password hashing (cost factor 12) — passwords are never stored or logged in plain text',
      'Login responses that never reveal whether an email exists — the same generic error for unknown email and wrong password',
      'Failed-login throttling (HTTP 429 after repeated failures) plus API rate limiting via express-rate-limit',
      'Signed JWT sessions (7-day expiry) verified on every protected request, carrying the user id and role',
      'Server-side role-based access control — a requireRole middleware guards every admin route; hiding UI buttons is never the enforcement',
      'Blocked-account lockout: a blocked user is rejected (403) even with an otherwise valid token',
      'Password change and email change both require re-entering the current password',
      'Password recovery with single-use reset tokens — 32-byte random token, only its SHA-256 hash stored, 1-hour expiry',
      'Helmet security headers and a strict CORS allowlist on the API',
      'Automatic audit logging on admin mutations, reviewed in the admin Audit Log',
    ],
    users:
      'Store customers whose accounts and orders the system protects, and the owner/staff team whose admin roles decide exactly what each person can see and change.',
    challenges: [
      { title: 'Client-side checks are not security', text: 'Forms validate for usability, but every rule that matters — hashing, throttling, role checks, blocked accounts — is enforced again on the server, because anything running only in the browser can be bypassed.' },
      { title: 'Usability vs lockout', text: 'Throttling must stop brute force without punishing real customers: failed attempts are limited per account, errors stay generic, and legitimate users get a clear “try again in a few minutes” response instead of a silent failure.' },
    ],
    outcomes: [
      'The full authentication flow — register, login, throttling, role guards, password/email change, recovery — runs in production as part of PRINTORA',
      'Covered by the automated backend test chain (auth suites included in the 409-check run), not just manual clicking',
      'The same role-based login pattern (Administrator / Teacher) is implemented in EduCore',
      'Honest limits: tokens are Bearer JWTs (no cookie sessions), and there is no token blacklist — revocation works through account blocking and token expiry',
      'Two-factor authentication is NOT implemented — the 2FA panel in the cover artwork is a labelled design concept only',
      'CSRF tokens are not used: the API authenticates via Authorization headers rather than cookies, so classic cookie-based CSRF does not apply',
    ],
    links: { live: null, liveLabel: null, github: null, githubNote: 'Implemented inside PRINTORA (private repository) — code walkthrough available on request.' },
    screenshot: '/images/projects/authentication-session-security.webp', // Original representative security artwork created for this case study (navy interface; conceptual panels are labelled inside the image).
    screenshotNote: 'Representative security interface artwork — conceptual panels labelled inside the image',
    screenshotSize: [1600, 1200],
    gallery: [
      {
        src: '/images/projects/auth-gallery-settings.webp',
        alt: 'Account security settings — representative artwork',
        caption: 'Account security — representative artwork: changing a password or email always requires the current password first, so a hijacked session alone cannot take over the account.',
        size: [1600, 1150],
      },
      {
        src: '/images/projects/auth-gallery-reset.webp',
        alt: 'Password reset flow — representative artwork',
        caption: 'Password reset — representative artwork of the three steps: a response that never reveals whether an account exists, a single-use link whose token is stored only as a SHA-256 hash, and a one-hour expiry.',
        size: [1600, 1150],
      },
      {
        src: '/images/projects/auth-gallery-admin.webp',
        alt: 'Admin users, roles and audit log — representative artwork',
        caption: 'Access control & audit — representative artwork: roles are enforced on the server, blocked accounts get a 403 on every request, and security events land in the audit log.',
        size: [1600, 1150],
      },
    ],
    detailsPending: false,
  },
  {
    slug: 'taskflow',
    category: 'Productivity',
    index: '05',
    title: 'TaskFlow — To-Do List Manager',
    subtitle: 'Productivity / Task Management',
    status: 'Interactive Demo',
    statusNote: 'A small, genuinely working demo built into this portfolio — try it live in the demo section below. Tasks are stored only in your own browser (localStorage); there is no server and no account.',
    year: '2026',
    role: 'Design & development',
    stack: ['React', 'JavaScript', 'Vite', 'Tailwind CSS', 'localStorage'],
    summary:
      'A clean task manager that runs entirely in the browser: add, edit, complete and delete tasks, filter by state, and pick up where you left off — tasks persist on your device between visits.',
    challenge:
      'Plenty of to-do demos look right but do nothing. This one had to be genuinely functional — real state, real persistence, real validation — while staying small enough to live inside a portfolio without a backend.',
    approach:
      'TaskFlow is a single self-contained React component with its own localStorage persistence layer. State is the single source of truth: the list, filters and counts all derive from it, edits happen inline, and every destructive action is one deliberate click. Empty states are designed for each filter, not left blank.',
    features: [
      'Add tasks with validation — empty tasks are rejected with an inline message',
      'Edit any task inline and save or cancel',
      'Mark tasks complete / pending with one click',
      'Delete tasks, plus a clear-completed action',
      'Filter All / Pending / Completed with live counts',
      'Automatic persistence in localStorage — tasks survive a page refresh on the same device',
      'Designed empty states for an empty list and for each filter',
      'Responsive layout that works on mobile and desktop',
    ],
    users:
      'Anyone who wants a simple, private task list — and, in this portfolio, a way to test the work directly instead of reading claims about it.',
    outcomes: [
      'Fully working in this portfolio — every feature above can be tried in the demo section of this page',
      'No backend, no sign-up, no tracking: tasks never leave the visitor’s browser',
      'Ships inside the portfolio’s normal production build with no extra services',
    ],
    links: { live: null, liveLabel: null, github: null, githubNote: 'Built into this portfolio — the live demo below is the project.' },
    screenshot: '/images/projects/taskflow-cover.webp', // Real screenshot of the working demo on this page.
    screenshotNote: 'Screenshot — the actual interactive demo on this page',
    screenshotSize: [1600, 948],
    gallery: [
      {
        src: '/images/projects/taskflow-gallery-mobile.webp',
        alt: 'TaskFlow demo on a mobile-width screen — real screenshot',
        caption: 'The same demo on mobile — a real screenshot at phone width: the add form, filters and task list stack cleanly, and the data note stays visible.',
        size: [708, 1580],
      },
      {
        src: '/images/projects/taskflow-gallery-diagram.webp',
        alt: 'Diagram — how the TaskFlow demo stores and filters tasks',
        caption: 'How it works — a diagram of the demo above: actions update React state, tasks persist in localStorage, and the All / Active / Completed filters are views over one list.',
        size: [1600, 1150],
      },
    ],
    demo: 'taskflow',
    detailsPending: false,
  },
  {
    slug: 'learnflow-ai',
    category: 'AI & Learning',
    index: '06',
    title: 'LearnFlow AI',
    subtitle: 'AI-Powered Learning from YouTube Videos',
    status: 'In Development',
    statusNote:
      'A complete working application that runs locally (React frontend + Express API). It is deliberately not deployed and has no public URL — this page is its showcase. AI features need the user\'s own provider API key; the study workspace is stored in the browser (localStorage), with no accounts or database in this version.',
    year: '2026',
    role: 'Designer & Developer — frontend, backend API and AI integration',
    stack: [
      'React 19',
      'Vite',
      'Tailwind CSS v4',
      'React Router',
      'Node.js',
      'Express 5',
      'Multi-provider AI (Groq · Gemini · OpenRouter · Cerebras · Cloudflare)',
      'Google Translate API',
      'YouTube Innertube API',
      'localStorage',
    ],
    summary:
      'LearnFlow AI is a learning-focused web application that turns YouTube videos into study material: paste a video link and it extracts the real captions, then generates a summary, organized study notes and a quiz — and answers your questions from the transcript itself. A translation-first workflow lets you study in 13 languages, including Urdu, Roman Urdu (Urdulish), Hindi and Hinglish.',
    challenge:
      'Learning from video is passive and slow to revise: an hour-long lecture must be rewatched to find one idea, and for many students the language itself is a barrier — lectures are in English while they think and revise in Urdu or Hindi. Existing tools either fabricate content, lock everything behind accounts, or ignore the language problem entirely.',
    approach:
      'The workflow: (1) paste a YouTube URL — real caption segments are extracted through YouTube\'s Innertube API, never scraped or invented; if a video has no captions, the app says so clearly. (2) Pick a study language — the transcript is translated once and cached separately, so the original is never modified. (3) Summary, Notes, Quiz and Ask AI all work on the selected transcript and answer in its language, with a source badge always showing which transcript is active. (4) Everything — videos, notes with autosave, quiz scores — is kept in a versioned browser-local workspace, no sign-up needed.',
    features: [
      'Real YouTube transcript extraction — video metadata + timed caption segments via the Innertube API (no HTML scraping, nothing fabricated)',
      'AI summaries in three lengths (short / medium / detailed), generated from the actual transcript',
      'Structured study notes generated per video, editable in the workspace with autosave and Markdown export',
      'Validated quiz generation — chosen question count and difficulty, with real scored history',
      'Ask AI — questions answered from the transcript itself, not from general knowledge',
      'Translation-first workflow: 13 study languages (Urdu, Urdulish, Hindi, Hinglish, English, Arabic and more); translate once, cache, and every feature answers in that language',
      'Five AI providers behind one adapter (Groq, Gemini, OpenRouter, Cerebras, Cloudflare Workers AI) with automatic fallback on transient failures',
      'Browser-local study workspace: dashboard with real stats, per-video pages, recent activity — no database, no accounts',
    ],
    users:
      'Students and self-learners who study from YouTube lectures — especially those who understand better in Urdu, Roman Urdu, Hindi or Hinglish than in the lecture\'s original English.',
    challenges: [
      {
        title: 'Long transcripts vs free-tier AI limits',
        text: 'Full lectures far exceed free-tier tokens-per-minute limits, so transcripts are split into provider-aware chunks, requests are spaced, and a rate-limit response tells the user how long to wait instead of failing silently.',
      },
      {
        title: 'Honest transcripts, honest errors',
        text: 'The extractor never fabricates captions: unavailable, disabled or blocked captions produce a clear, coded error. The same honesty applies to translation — the response states which engine produced it.',
      },
      {
        title: 'Roman Urdu & Hindi have no Google Translate target',
        text: 'Google cannot output Roman Urdu or Roman Hindi, so Urdulish and Hinglish are routed through the LLM translation path while the other languages use Google Translate (official Cloud API with a key, free endpoint without).',
      },
    ],
    outcomes: [
      'Complete, working application: dashboard, YouTube learning workspace, notes, quiz & flashcards, study assistant and settings — verified in the supplied source code',
      'Runs locally with a free-tier AI key (e.g. Groq); transcript extraction itself needs no key',
      'Not deployed and no public URL — showcased here only, by the owner\'s decision',
      'Honest limits: no accounts or cross-device sync (the workspace is per-browser by design in this version), and AI quality depends on the provider and model the user configures',
    ],
    links: { live: null, liveLabel: null, github: null, githubNote: 'Source code supplied directly by the owner — not published on GitHub yet.' },
    screenshot: '/images/projects/learnflow-ai-cover.webp', // Representative interface artwork (the app is light-themed; the artwork follows the portfolio palette and the app's real layout).
    screenshotNote: 'Representative interface artwork — the app’s real workspace, redrawn in the portfolio palette',
    screenshotSize: [1600, 1200],
    gallery: [
      {
        src: '/images/projects/learnflow-gallery-notes.webp',
        alt: 'LearnFlow AI study notes workspace — representative artwork',
        caption: 'Study notes — representative artwork: the engine turns a transcript into structured notes (key ideas, formulas, examples) that can be edited, copied or exported as Markdown, and are saved in the local workspace.',
        size: [1600, 1150],
      },
      {
        src: '/images/projects/learnflow-gallery-quiz.webp',
        alt: 'LearnFlow AI quiz view — representative artwork',
        caption: 'Quiz — representative artwork: questions are generated from the video content with explanations tied to the transcript, and attempts are kept in the quiz history.',
        size: [1600, 1150],
      },
      {
        src: '/images/projects/learnflow-gallery-ask.webp',
        alt: 'LearnFlow AI Ask AI assistant — representative artwork',
        caption: 'Ask AI — representative artwork: questions are answered from the transcript with its source position; when the video does not cover something, the assistant says so instead of inventing an answer.',
        size: [1600, 1150],
      },
    ],
    detailsPending: false,
  },
  {
    slug: 'ai-personal-agent',
    category: 'AI Tools',
    index: '07',
    title: 'AI Personal Agent',
    subtitle: 'Working Project — Personal AI Assistant',
    status: 'Working Project',
    statusNote: 'A working project in active development and daily testing — not a finished product and not production-ready software for sale. It genuinely works today for the tasks listed as “Working” in this case study; anything beyond that is labelled In Development or Planned, exactly as it stands.',
    year: '2026',
    role: 'Design, configuration, development & daily testing',
    stack: ['AI agent platform (Muse)', 'Custom instructions & persistent memory', 'Tool use — browser, terminal, files', 'Connected services & scheduled automations'],
    summary:
      'A personal AI agent I am actively building, configuring and testing to help with my development work — writing and debugging code, building websites and applications, researching topics, and handling selected tasks on my computer. This portfolio itself was researched, built, tested and deployed with it.',
    challenge:
      'Development work is full of small, interrupt-driven tasks around the actual coding: checking deployments, verifying fixes on real pages, keeping track of decisions across projects, running repetitive checks, and documenting what was actually done. Doing all of that manually, across several projects at once, is slow and easy to get wrong — and an assistant that exaggerates what it did would be worse than none.',
    approach:
      'The agent works as a loop: I describe an outcome, it plans the steps, uses real tools (a browser, a terminal, the file system and connected services such as GitHub and Vercel) to do the work, verifies the result — a build that passes, a page that loads, a screenshot that shows the change — and only then reports it as done. Consequential actions (deployments, messages, changes to accounts) wait for my approval, and its memory keeps project decisions and my preferences across sessions. Its behaviour is governed by written instructions I maintain: verify before claiming, never invent results, and stop exactly where I said to stop.',
    features: [
      'Working — Coding assistance: writes, edits and refactors code in real projects, and runs their builds and test suites',
      'Working — Website & application development end-to-end: this portfolio (design, code, images, deployments) and hands-on testing of EduCore and PRINTORA were done with it',
      'Working — Debugging: reproduces problems, inspects logs and code, applies targeted fixes and verifies them',
      'Working — Research: searches the web and documents findings with sources',
      'Working — Files, documents & data: reads, writes and organises project files and documents',
      'Working — Scheduling: reminders and recurring checks (for example, watching a deployed site) that report back',
      'Working — Guardrails: approval prompts for consequential actions, and a hard rule that nothing is reported done until it is verified',
      'In development — Broader multi-step automations and deeper integration with more of my tools and accounts',
      'Planned — Local AI model integration (Ollama): not yet implemented — currently the agent runs on a hosted model',
    ],
    users:
      'Built for my own workflow as a developer and BSCS student — one user, tested daily on real projects, rather than a product released for the public.',
    challenges: [
      {
        title: 'Trust: an agent that exaggerates is useless',
        text: 'Early on, the failure mode that mattered most was confident-sounding but unverified claims. The fix is procedural, not cosmetic: every fix, deployment and test must be backed by the actual action and its observed result before it is reported — a rule the agent follows across all of my projects, and one I check.',
      },
      {
        title: 'Scope and safety boundaries',
        text: 'The agent can act on real accounts and files, so its authority is deliberately bounded: it works inside the task I gave it, asks before consequential or destructive actions, never handles my passwords or keys, and treats instructions found inside web pages or files as data, not commands.',
      },
      {
        title: 'It is not magic — and not finished',
        text: 'The agent cannot do everything: it has no local/offline model yet (Ollama integration is planned, not built), some websites block automated browsers, and it cannot physically test a phone. Those limits are stated wherever they matter instead of being hidden.',
      },
    ],
    outcomes: [
      'In daily use on real work: this portfolio’s research, build, image production, testing and deployments — and EduCore’s real-screenshot testing — were executed with the agent',
      'Working features are listed as Working only where they have been exercised repeatedly on actual projects',
      'Still in development: broader automations and tool integrations are being added and tested incrementally',
      'Planned, not present: local AI (Ollama) and wider autonomous task coverage — no completion date is claimed',
    ],
    links: { live: null, liveLabel: null, github: null, githubNote: 'A personal working project — there is no public demo or source release at this stage.' },
    screenshot: '/images/projects/ai-agent-cover.webp',
    screenshotNote: 'Representative artwork — the agent workspace (conversation, connected tools and guardrails) as configured for this project',
    screenshotSize: [1600, 1200],
    gallery: [
      {
        src: '/images/projects/ai-agent-gallery-workflow.webp',
        alt: 'Diagram — how a task flows through the AI Personal Agent',
        caption: 'The working loop — instruction, plan, tools at work, verification, report. The verification step is what separates this project from a plain chatbot: results are checked, not assumed.',
        size: [1600, 1200],
      },
      {
        src: '/images/projects/ai-agent-gallery-status.webp',
        alt: 'Capability status board — working, in development and planned features',
        caption: 'Capabilities, honestly labelled — what works today, what is in development, and what is only planned (including local AI via Ollama, which is not yet integrated).',
        size: [1600, 1200],
      },
    ],
    detailsPending: false,
  },
]

export function getProject(slug) {
  return projects.find((p) => p.slug === slug) || null
}
