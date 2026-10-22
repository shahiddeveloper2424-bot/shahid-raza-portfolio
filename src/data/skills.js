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
    title: 'Website Development',
    value: 'A website a client can trust in the first ten seconds.',
    text: 'Professional business websites that present your work clearly, load fast on real phones, and turn visitors into enquiries — designed first, then built to be easy to update.',
  },
  {
    index: '02',
    title: 'Custom Business Software',
    value: 'Software shaped around how your business actually runs.',
    text: 'Management systems, dashboards and internal tools — like a school management system — that replace scattered spreadsheets and manual records with one reliable place to work.',
  },
  {
    index: '03',
    title: 'E-Commerce Development',
    value: 'A store you can actually operate, not just launch.',
    text: 'Storefronts with a complete admin for products, orders and fulfillment, honest payment states, and multi-currency display — built on the same foundation as PRINTORA.',
  },
  {
    index: '04',
    title: 'Web Applications & Tools',
    value: 'Focused tools that do one job properly.',
    text: 'Browser-based applications and utilities — like PDF Toolkit Pro — designed around a single clear job, deployable on a free hosting tier and simple to maintain.',
  },
]

export const process = [
  { step: 'Discovery', text: 'We define the problem, the users and what “done” honestly means — scope before code.' },
  { step: 'Planning', text: 'Design and structure are reviewed and agreed, so there are no surprises mid-build.' },
  { step: 'Development', text: 'Built phase by phase in JavaScript and React, with working features kept working.' },
  { step: 'Testing', text: 'Builds, tests and real end-to-end checks. Nothing is called “live” until it is verified.' },
  { step: 'Delivery', text: 'Deployed, documented and handed over with a clear record of what is done and what remains.' },
]
