/**
 * SKILLS & SERVICES — only technologies evidenced by the owner's shipped
 * project work (PRINTORA: MERN stack on Vercel/GitHub) and this portfolio.
 * No percentages, no invented years of experience, no unsupported promises.
 */
export const skillGroups = [
  {
    title: 'Frontend',
    note: 'Interfaces that stay fast, readable and responsive.',
    skills: ['React', 'JavaScript (ES6+)', 'Vite', 'Tailwind CSS', 'HTML5', 'CSS3', 'Responsive design'],
  },
  {
    title: 'Backend',
    note: 'Server logic that stays authoritative.',
    skills: ['Node.js', 'Express', 'REST APIs', 'MongoDB', 'Mongoose', 'Authentication & RBAC'],
  },
  {
    title: 'Product & Platform',
    note: 'The work around the code.',
    skills: ['E-commerce systems', 'Admin dashboards', 'Multi-currency pricing', 'Git & GitHub', 'Vercel deployment', 'Testing & verification'],
  },
]

export const services = [
  {
    index: '01',
    title: 'Business Websites & Landing Pages',
    value: 'A website a client can trust in the first ten seconds.',
    text: 'Professional business websites that present your work clearly, load fast on real phones, and turn visitors into enquiries.',
    deliver: 'A complete responsive website — design, build, working contact routes and deployment, ready to share.',
    forWho: 'Local businesses, professionals and startups that need to look credible online.',
  },
  {
    index: '02',
    title: 'E-Commerce Development',
    value: 'A store you can actually operate, not just launch.',
    text: 'Storefronts with a complete admin for products, orders and fulfillment, honest payment states, and multi-currency display — built on the same foundation as PRINTORA.',
    deliver: 'Storefront + operations admin, product/order management and a checkout that never pretends a payment method exists when it does not.',
    forWho: 'Shops and brands selling physical or custom products online.',
  },
  {
    index: '03',
    title: 'Management Systems',
    value: 'Software shaped around how your organisation actually runs.',
    text: 'Database-driven management systems — like a school management system — that replace scattered spreadsheets and paper registers with one reliable place to work.',
    deliver: 'A records and workflow system with user roles, designed around your real day-to-day process.',
    forWho: 'Schools and organisations still running on spreadsheets and manual records.',
  },
  {
    index: '04',
    title: 'Admin Dashboards & Internal Tools',
    value: 'Your team’s work, in one place.',
    text: 'Dashboards, CRUD panels, reporting and role-based access — the internal tools that keep operations visible and under control.',
    deliver: 'A secure admin panel with the views, forms and reports your team actually uses.',
    forWho: 'Businesses whose team wastes time juggling files, chats and registers.',
  },
  {
    index: '05',
    title: 'Web Applications & Tools',
    value: 'Focused tools that do one job properly.',
    text: 'Browser-based applications and utilities — like PDF Toolkit Pro — designed around a single clear job, deployable on a free hosting tier and simple to maintain.',
    deliver: 'A working web application or tool, deployed, documented and handed over.',
    forWho: 'Founders and teams with one clear job to automate.',
  },
  {
    index: '06',
    title: 'Redesign, Fixes & Maintenance',
    value: 'Improve what exists — without breaking what works.',
    text: 'Targeted improvements to an existing website: responsive fixes, new features, bug fixing and performance care, done in verified steps.',
    deliver: 'The specific fixes or features agreed in scope, tested against your live site’s existing behaviour.',
    forWho: 'Anyone with an existing website that needs care, not a rebuild.',
  },
]

export const process = [
  { step: 'Discovery & Requirements', text: 'We define the problem, the users and what “done” honestly means — before any code.' },
  { step: 'Scope & Proposal', text: 'Scope, delivery dates and cost are confirmed with you in writing before work begins. No surprises later.' },
  { step: 'UI/UX Planning', text: 'Design and structure are reviewed and agreed, so the build follows an approved plan.' },
  { step: 'Development', text: 'Built phase by phase in JavaScript and React, with working features kept working throughout.' },
  { step: 'Testing & Revisions', text: 'Builds, tests and real end-to-end checks — plus the agreed revision round. Nothing is called “live” until it is verified.' },
  { step: 'Deployment & Handover', text: 'Deployed, documented and handed over with a clear record of what is done and what remains.' },
  { step: 'Maintenance', text: 'Where agreed: fixes, small features and care after launch, scoped the same honest way.' },
]
