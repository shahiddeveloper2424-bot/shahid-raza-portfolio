import React from 'react'
import { Link } from '../lib/router.jsx'
import { site, navLinks } from '../data/site.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-shell px-5 pb-10 pt-16 sm:px-10">
        <div className="grid gap-12 border-b border-paper/15 pb-14 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="folio text-gold">Shahid Raza — Portfolio</p>
            <p className="mt-5 max-w-md font-display text-3xl font-medium leading-snug">Software and websites, built carefully — and verified honestly.</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-paper/60">{site.intro}</p>
          </div>
          <nav aria-label="Footer" className="md:col-span-3">
            <p className="folio text-paper/50">Navigate</p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}><Link href={l.href} className="link-line text-paper/85">{l.label}</Link></li>
              ))}
              <li><Link href="/projects/printora" className="link-line text-paper/85">PRINTORA case study</Link></li>
              <li><Link href="/projects/educore" className="link-line text-paper/85">EduCore case study</Link></li>
              <li><Link href="/projects/pdf-toolkit-pro" className="link-line text-paper/85">PDF Toolkit Pro case study</Link></li>
            </ul>
          </nav>
          <div className="md:col-span-3">
            <p className="folio text-paper/50">Connect</p>
            <ul className="mt-5 space-y-3 text-paper/85">
              <li><Link href={site.socials.github} className="link-line">GitHub — {site.socials.githubHandle} ↗</Link></li>
              <li>{site.contact.email
                ? <a href={`mailto:${site.contact.email}`} className="link-line">{site.contact.email}</a>
                : <span className="text-paper/50">Email — to be added by owner</span>}</li>
              <li>{site.contact.whatsapp
                ? <a href={`https://wa.me/${site.contact.whatsapp}`} target="_blank" rel="noreferrer" className="link-line">WhatsApp ↗</a>
                : <span className="text-paper/50">WhatsApp — to be added by owner</span>}</li>
            </ul>
          </div>
        </div>

        <p aria-hidden="true" className="mt-10 select-none text-center font-display text-[13.5vw] font-semibold leading-none tracking-tight text-paper/[0.07] lg:text-[10.5rem]">SHAHID RAZA</p>

        <div className="mt-6 flex flex-col gap-2 border-t border-paper/15 pt-6 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p>Built with React, Vite &amp; Tailwind CSS — no testimonials or statistics are shown, only verified project work.</p>
        </div>
      </div>
    </footer>
  )
}
