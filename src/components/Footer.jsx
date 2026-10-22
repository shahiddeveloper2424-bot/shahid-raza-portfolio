import React from 'react'
import { Link } from '../lib/router.jsx'
import { site, navLinks } from '../data/site.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-shell px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-3xl font-medium">Shahid Raza</p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-paper/70">{site.intro}</p>
          </div>
          <nav aria-label="Footer" className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm text-paper/80 hover:text-paper">{l.label}</Link>
            ))}
          </nav>
          <div className="flex flex-col gap-3 text-sm">
            <Link href={site.socials.github} className="text-paper/80 hover:text-paper">GitHub — {site.socials.githubHandle} ↗</Link>
            {site.contact.email ? (
              <a href={`mailto:${site.contact.email}`} className="text-paper/80 hover:text-paper">{site.contact.email}</a>
            ) : (
              <span className="text-paper/50">Email — to be added by owner</span>
            )}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-paper/15 pt-6 text-xs text-paper/50 sm:flex-row sm:justify-between">
          <p>© {year} {site.name}. Built with React, Vite &amp; Tailwind CSS.</p>
          <p>No testimonials or statistics are shown — only verified project work.</p>
        </div>
      </div>
    </footer>
  )
}
