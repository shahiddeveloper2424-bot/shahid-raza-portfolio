import { site } from '../data/site.js'

/**
 * CONTACT LINKS — built only from the central config in src/data/site.js.
 * Every builder returns null while its detail is unconfigured, so the UI
 * can show an honest placeholder instead of a dead link. To activate a
 * channel, the owner only has to fill in site.contact (one place).
 */

export const EMAIL_SUBJECT = 'Project Inquiry — Shahid Raza Portfolio'

export const EMAIL_BODY = [
  'Assalam-o-Alaikum Shahid,',
  '',
  'I visited your portfolio and would like to discuss a website or software development project.',
  '',
  'Project details:',
  '- Type of project:',
  '- Timeline:',
  '- Budget (optional):',
  '',
  'Thank you.',
].join('\n')

export const WHATSAPP_MESSAGE =
  'Assalam-o-Alaikum Shahid! I visited your portfolio and would like to discuss a website or software development project. Please share the details.'

export function mailtoHref() {
  const email = site.contact.email
  if (!email) return null
  return `mailto:${email}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`
}

export function whatsappHref() {
  const raw = site.contact.whatsapp
  if (!raw) return null
  const digits = String(raw).replace(/\D/g, '')
  if (!digits) return null
  return `https://wa.me/${digits}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
}

export function whatsappDisplay() {
  if (!site.contact.whatsapp) return null
  return site.contact.whatsappDisplay || `+${String(site.contact.whatsapp).replace(/\D/g, '')}`
}
