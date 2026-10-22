/**
 * PROJECTS — honest presentations only.
 *
 * - PRINTORA facts below were verified during its actual build
 *   (MERN stack, live preview on Vercel, private source repository).
 * - EduCore and PDF Toolkit Pro: detailed scope, stack and links have not
 *   been supplied yet, so those fields are explicit placeholders
 *   (`detailsPending: true`) rather than invented features.
 * - No screenshots are included because no real screenshots were supplied.
 *   Each project renders a labelled visual placeholder instead.
 */
export const projects = [
  {
    slug: 'printora',
    index: '01',
    title: 'PRINTORA',
    subtitle: 'Print-on-Demand E-Commerce Platform',
    status: 'In development',
    statusNote: 'Preview deployed on Vercel. Payment-method work and final launch steps are intentionally deferred by the owner.',
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
    outcomes: [
      'Backend test chain passing across 17 suites at last verified check',
      'Preview catalog, collections and banners verified end-to-end against live endpoints',
      'Currency pipeline verified in production — real rates with timestamps, PKR as base accounting currency',
    ],
    links: {
      live: 'https://printora-alpha.vercel.app',
      liveLabel: 'View live preview',
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
    status: 'Case study in preparation',
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
    subtitle: 'PDF Tools & Digital Product',
    status: 'Case study in preparation',
    statusNote: 'Full project details have not been supplied yet. This page is an honest placeholder case study — no features, stack or results are claimed until the owner confirms them.',
    year: null,
    role: null,
    stack: [],
    summary:
      'A PDF toolkit product by Shahid Raza. The detailed feature set of this product is being documented by the owner.',
    challenge: null,
    approach: null,
    features: [],
    outcomes: [],
    links: { live: null, liveLabel: null, github: null, githubNote: 'Demo and source links will be added here when available.' },
    screenshot: null,
    detailsPending: true,
  },
]

export const getProject = (slug) => projects.find((p) => p.slug === slug) || null
