import React from 'react'
import { Link } from '../lib/router.jsx'
import { site, navLinks } from '../data/site.js'
import { projects } from '../data/projects.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-surface text-soft">
      <div className="mx-auto max-w-shell px-5 pb-10 pt-16 sm:px-10">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_auto]">
          <div>
            <p className="font-display text-3xl font-bold text-ink">{site.name}</p>
            <p className="mt-3 max-w-sm leading-relaxed">{site.tagline}</p>
            <p className="folio mt-6 text-muted">GitHub — verified</p>
            <a href={site.socials.github} target="_blank" rel="noreferrer" className="link-line mt-1 inline-block font-medium text-cyan">
              {site.socials.githubHandle} ↗
            </a>
          </div>
          <nav aria-label="Footer">
            <p className="folio text-muted">Explore</p>
            <ul className="mt-5 space-y-3 font-medium">
              {navLinks.map((l) => (
                <li key={l.href}><Link href={l.href} className="hover:text-ink">{l.label}</Link></li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Projects">
            <p className="folio text-muted">Projects</p>
            <ul className="mt-5 space-y-3 font-medium">
              {projects.map((p) => (
                <li key={p.slug}><Link href={`/projects/${p.slug}`} className="hover:text-ink">{p.title}</Link></li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="folio text-muted">Start a project</p>
            <Link href="/#contact" className="btn-primary mt-5 inline-block rounded-lg px-6 py-3.5 font-display text-sm font-semibold text-white">
              Start a project →
            </Link>
          </div>
        </div>

        <p aria-hidden="true" className="mt-16 select-none text-center font-display text-[17.5vw] font-bold leading-[0.8] tracking-tight text-ink/[0.045] sm:text-[11rem]">
          SHAHID
        </p>

        <div className="mt-4 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 text-sm sm:flex-row sm:items-center">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p className="font-mono text-[0.68rem] uppercase tracking-widest2 text-muted">React · Vite · Tailwind — JavaScript</p>
        </div>
      </div>
    </footer>
  )
}
