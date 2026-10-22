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
    // PLACEHOLDER — add the verified email address here, e.g. 'hello@example.com'.
    // Until then the Contact section shows a placeholder, not a fake address.
    email: null,
    // PLACEHOLDER — add the verified WhatsApp number in international format,
    // digits only, e.g. '923001234567'. Until then no WhatsApp number is shown.
    whatsapp: null,
    whatsappDisplay: null,
  },

  socials: {
    // Verified: this is the GitHub account that owns this repository.
    github: 'https://github.com/shahiddeveloper2424-bot',
    githubHandle: 'shahiddeveloper2424-bot',
    linkedin: null, // PLACEHOLDER — owner to supply verified profile URL
  },

  // PLACEHOLDER — education and formal experience have not been supplied yet.
  // The About section renders an explicit placeholder instead of invented history.
  education: [],
  experience: [],
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
