import React from 'react'
import { Link } from '../lib/router.jsx'
import { site, navLinks } from '../data/site.js'
import { projects } from '../data/projects.js'

export default function Footer() {
  const year = new Date().getFullYear()
  const { email, whatsapp, whatsappDisplay } = site.contact
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-shell px-5 pb-10 pt-16 sm:px-10 sm:pt-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="folio flex items-center gap-3 text-lime">
              <span aria-hidden="true" className="h-3 w-3 bg-coral" />
              {site.name} — Portfolio
            </p>
            <p className="mt-5 max-w-md font-display text-3xl font-semibold leading-snug">
              Software and websites, built carefully — <span className="text-cobaltlt">and verified honestly.</span>
            </p>
            <p className="mt-4 max-w-md leading-relaxed text-paper/60">
              {site.tagline} — built with React, JavaScript, Node.js and MongoDB. This portfolio lists no testimonials or statistics, because none have been supplied to publish.
            </p>
          </div>
          <nav className="md:col-span-3" aria-label="Footer">
            <p className="folio text-paper/50">Navigate</p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}><Link href={l.href} className="link-line text-paper/85 hover:text-white">{l.label}</Link></li>
              ))}
              {projects.map((p) => (
                <li key={p.slug}><Link href={`/projects/${p.slug}`} className="link-line text-paper/85 hover:text-white">{p.title} case study</Link></li>
              ))}
            </ul>
          </nav>
          <div className="md:col-span-3">
            <p className="folio text-paper/50">Connect</p>
            <ul className="mt-5 space-y-3 text-paper/85">
              <li><Link href={site.socials.github} className="link-line hover:text-white">GitHub — {site.socials.githubHandle} ↗</Link></li>
              <li>{email
                ? <a className="link-line hover:text-white" href={`mailto:${email}`}>Email — {email}</a>
                : <span className="text-paper/50">Email — to be added by owner</span>}</li>
              <li>{whatsapp
                ? <a className="link-line hover:text-white" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">WhatsApp — {whatsappDisplay || 'chat'} ↗</a>
                : <span className="text-paper/50">WhatsApp — to be added by owner</span>}</li>
              <li>{site.socials.linkedin
                ? <Link href={site.socials.linkedin} className="link-line hover:text-white">LinkedIn ↗</Link>
                : <span className="text-paper/50">LinkedIn — to be added by owner</span>}</li>
            </ul>
          </div>
        </div>

        <p aria-hidden="true" className="mt-16 select-none whitespace-nowrap text-center font-display text-[13.5vw] font-bold leading-[0.85] tracking-tight text-cobalt/40 lg:text-[10.5rem]">SHAHID RAZA</p>

        <div className="mt-4 flex flex-col gap-3 border-t border-paper/15 pt-6 text-sm text-paper/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span aria-hidden="true" className="inline-block h-2.5 w-2.5 bg-lime" />
            Designed &amp; built by {site.name} — React · JavaScript · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
