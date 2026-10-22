import React, { useEffect, useState } from 'react'
import { Link, usePath } from '../lib/router.jsx'
import { site, navLinks } from '../data/site.js'

export default function Header() {
  const [open, setOpen] = useState(false)
  const path = usePath()

  useEffect(() => { setOpen(false) }, [path])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open ])

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-ink focus:px-4 focus:py-2 focus:text-paper">
        Skip to content
      </a>
      <header className="sticky top-0 z-50 border-b border-ink/15 bg-paper/95 backdrop-blur">
        <div className="mx-auto flex max-w-shell items-center justify-between px-5 py-3.5 sm:px-10">
          <Link href="/" className="group flex items-center gap-3" ariaLabel="Shahid Raza — home">
            <span className="flex h-10 w-10 items-center justify-center bg-ink font-display text-sm font-semibold text-paper transition-colors group-hover:bg-clay" aria-hidden="true">SR</span>
            <span className="leading-none">
              <span className="block font-display text-[1.35rem] font-semibold tracking-tight">Shahid Raza</span>
              <span className="mt-1 block font-mono text-[10px] uppercase tracking-widest2 text-muted">Software Developer — Portfolio</span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="link-line text-[0.95rem] font-medium text-soft">
                {l.label}
              </Link>
            ))}
            <Link href="/#contact" className="bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-clay">
              Start a project
            </Link>
          </nav>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-ink/25 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden="true" className="text-lg leading-none">{open ? '✕' : '☰'}</span>
          </button>
        </div>
      </header>

      {/* Mobile menu — sibling of <header> so the header's backdrop-blur containing block can never trap it. */}
      {open && (
        <div id="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu" className="fixed inset-0 top-[69px] z-40 flex flex-col bg-ink text-paper lg:hidden">
          <nav aria-label="Mobile" className="flex flex-1 flex-col px-6 py-8">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-paper/15 py-5">
                <span className="font-display text-3xl font-medium">{l.label}</span>
              </Link>
            ))}
            <Link href={site.socials.github} className="mt-auto flex items-baseline gap-4 py-5">
              <span className="font-display text-2xl text-paper/85">GitHub — {site.socials.githubHandle} ↗</span>
            </Link>
          </nav>
          <p className="px-6 pb-8 font-mono text-[10px] uppercase tracking-widest2 text-paper/50">{site.name} — {site.role}</p>
        </div>
      )}
    </>
  )
}
