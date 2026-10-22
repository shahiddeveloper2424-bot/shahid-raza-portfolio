/**
 * SITE CONFIG — single source of truth for personal / contact details.
 *
 * HONESTY RULE: only verified details belong here.
 * Anything still set to `null` renders as a clearly labelled placeholder
 * in the UI. Do NOT invent an email, phone number, location or social
 * profile — add it here only when the owner has supplied and verified it.
 */
export const site = {
  name: 'Shahid Raza',
  firstName: 'Shahid',
  role: 'Software Developer',
  positioning: 'Software Developer · Web Application Developer · MERN Stack Developer',
  // PORTRAIT PHOTO — the owner's real photo belongs at this exact path:
  //   public/images/profilephoto.jpeg
  // The file does NOT exist yet. Until the owner adds it, the Portrait
  // component renders a clearly labelled designed placeholder instead.
  // Never substitute a stock photo or a fabricated face.
  photo: '/images/profilephoto.jpeg',
  tagline: 'I build considered software for the web.',
  // One honest sentence, taken from the owner's own project description.
  intro:
    'Software developer specializing in modern web applications, custom business software, e-commerce solutions, and digital products — built with React, JavaScript, Node.js, and MongoDB.',
  location: null, // PLACEHOLDER — owner to supply (e.g. "Pakistan")
  availability: null, // PLACEHOLDER — owner to supply (e.g. "Available for new projects")

  contact: {
    // Verified — supplied by the owner 2026-10-22.
    email: 'shahiddeveloper2424@gmail.com',
    // Verified — supplied by the owner 2026-10-22 (international format, digits only for wa.me).
    whatsapp: '923288985191',
    whatsappDisplay: '+92 328 8985191',
  },

  socials: {
    // Verified: this is the GitHub account that owns this repository.
    github: 'https://github.com/shahiddeveloper2424-bot',
    githubHandle: 'shahiddeveloper2424-bot',
    linkedin: null, // PLACEHOLDER — owner to supply verified profile URL
  },

  // Verified — supplied by the owner 2026-10-22. No CGPA, awards or
  // certifications are claimed: none were provided or verified.
  education: [
    {
      degree: 'Bachelor of Science in Computer Science (BSCS)',
      institution: 'Government College University Faisalabad (GCUF)',
      session: '2023–2027',
      semester: '7th Semester',
      status: 'Currently enrolled',
    },
  ],
  // Practical experience = independent project work (no formal employment
  // is claimed). Focus lines are verified against each project's case study.
  experienceIntro:
    'I build web applications and software projects to develop practical skills in frontend and backend development, database integration, authentication, responsive interfaces, and application problem-solving. I focus on turning ideas into usable software while continuously improving functionality, code quality, and user experience.',
  experienceProjects: [
    { slug: 'educore', focus: 'Small-school management system — student records, fees, attendance, exams and staff, with a working admin build' },
    { slug: 'printora', focus: 'Print-on-demand e-commerce — storefront, product customisation studio and a full admin panel' },
    { slug: 'pdf-toolkit-pro', focus: 'Browser-based PDF tools — eight utilities that process files entirely on the user’s device' },
    { slug: 'ai-personal-agent', focus: 'A personal AI agent for development work — coding help, debugging, research and scheduled tasks; actively developed and tested' },
    { slug: 'learnflow-ai', focus: 'AI-assisted learning from YouTube videos — transcripts, summaries, notes, quizzes and an assistant' },
    { slug: 'authentication-session-security', focus: 'Authentication and session security implemented inside PRINTORA — hashing, throttling, JWT sessions and role-based access' },
  ],
}

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#work' },
  { label: 'Services', href: '/#services' },
  { label: 'Process', href: '/#process' },
  { label: 'Contact', href: '/#contact' },
]
