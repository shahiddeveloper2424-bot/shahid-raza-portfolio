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
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2 focus:text-paper">
        Skip to content
      </a>
      <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
        <div className="mx-auto flex max-w-shell items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" className="flex items-baseline gap-3" ariaLabel="Shahid Raza — home">
            <span className="font-display text-xl font-semibold tracking-tight">Shahid Raza</span>
            <span className="hidden font-mono text-[11px] uppercase tracking-widest2 text-muted md:inline">{site.role}</span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="link-line text-sm font-medium text-soft">
                {l.label}
              </Link>
            ))}
            <Link href={site.socials.github} className="border border-ink px-4 py-2 text-sm font-medium transition-colors hover:bg-ink hover:text-paper">
              GitHub ↗
            </Link>
          </nav>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-line md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden="true" className="text-lg leading-none">{open ? '✕' : '☰'}</span>
          </button>
        </div>
      </header>

      {/* Mobile menu — sibling of <header> so fixed/absolute positioning is never trapped by the header's backdrop-blur containing block. */}
      {open && (
        <div id="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu" className="fixed inset-0 top-[73px] z-40 bg-paper md:hidden">
          <nav aria-label="Mobile" className="flex flex-col gap-1 px-5 py-6">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="border-b border-line py-4 font-display text-2xl">
                {l.label}
              </Link>
            ))}
            <Link href={site.socials.github} className="py-5 font-display text-2xl text-clay">
              GitHub ↗
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}
