/**
 * SKILLS — only technologies evidenced by the owner's shipped project work
 * (PRINTORA: MERN stack on Vercel/GitHub) and this portfolio itself.
 * No percentages, no invented years of experience.
 */
export const skillGroups = [
  {
    title: 'Frontend',
    note: 'Interfaces that stay fast and readable.',
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
    title: 'Web Applications',
    text: 'Modern, responsive web applications in React and JavaScript — from a focused landing experience to a full product with accounts, roles and workflows.',
  },
  {
    index: '02',
    title: 'Custom Business Software',
    text: 'Internal tools and management systems shaped around how a business actually runs — dashboards, records, reporting and day-to-day operations.',
  },
  {
    index: '03',
    title: 'E-Commerce Solutions',
    text: 'Storefronts and checkout flows with honest payment states, multi-currency display and a complete admin for products, orders and fulfillment.',
  },
  {
    index: '04',
    title: 'Digital Products',
    text: 'Standalone digital tools and products — designed, built and documented so they can be deployed on a free hosting tier and maintained easily.',
  },
]

export const process = [
  { step: 'Listen', text: 'Understand the problem, the users and what “done” honestly means before any code.' },
  { step: 'Design', text: 'A reviewed design first — layout, typography and flows agreed before implementation.' },
  { step: 'Build', text: 'Phase-by-phase implementation with working features preserved and changes kept targeted.' },
  { step: 'Verify', text: 'Builds, tests and real end-to-end checks. Nothing is called “live” until it has actually been verified.' },
]
