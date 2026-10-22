import React, { useEffect, useState } from 'react'
import { Link, usePath } from '../lib/router.jsx'
import { site, navLinks } from '../data/site.js'

const SECTION_IDS = ['about', 'skills', 'work', 'services', 'process', 'contact']

export default function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const pathname = usePath()

  /* Scrollspy: highlight the nav link for the section in view (home only). */
  useEffect(() => {
    if (pathname !== '/') { setActive(''); return undefined }
    if (typeof IntersectionObserver === 'undefined') return undefined
    const obs = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) }) },
      { rootMargin: '-35% 0px -55% 0px' },
    )
    SECTION_IDS.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [pathname])

  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey) }
  }, [open ])

  return (
    <>
      <header className="sticky top-0 z-40 border-b-2 border-ink bg-paper/95 backdrop-blur">
        <div className="mx-auto flex max-w-shell items-center justify-between gap-4 px-5 py-3.5 sm:px-10">
          <Link href="/" className="flex items-center gap-3" ariaLabel={`${site.name} — home`}>
            <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center bg-cobalt font-display text-base font-bold text-white">SR</span>
            <span className="leading-none">
              <span className="block font-display text-[1.3rem] font-bold tracking-tight">{site.name}</span>
              <span className="folio mt-1 block text-[0.58rem] text-muted">{site.role} — Portfolio</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 xl:gap-7 lg:flex" aria-label="Primary">
            {navLinks.map((l) => {
              const isActive = active && l.href === `/#${active}`
              return (
                <Link key={l.href} href={l.href} className={`link-line text-[0.92rem] font-semibold hover:text-cobalt ${isActive ? 'text-cobalt underline decoration-cobalt decoration-2 underline-offset-4' : 'text-ink'}`}>
                  {l.label}
                </Link>
              )
            })}
            <Link href="/#contact" className="hard-sm bg-lime px-5 py-2.5 font-display text-sm font-semibold text-ink transition-colors hover:bg-cobalt hover:text-white">
              Discuss your project
            </Link>
          </nav>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center border-2 border-ink bg-paper lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden="true" className="relative block h-3 w-5">
              <span className={`absolute left-0 top-0 h-0.5 w-full bg-ink transition-transform ${open ? 'translate-y-[5px] rotate-45' : ''}`} />
              <span className={`absolute left-0 top-[5px] h-0.5 w-full bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
              <span className={`absolute left-0 top-[10px] h-0.5 w-full bg-ink transition-transform ${open ? '-translate-y-[5px] -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </header>

      {/* Full-screen cobalt mobile menu (sibling of header: backdrop-blur on
          the header would trap a fixed child inside its box). */}
      <div
        id="mobile-menu"
        className={`dotgrid fixed inset-0 z-50 flex flex-col bg-cobalt text-white lg:hidden ${open ? '' : 'hidden'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="flex items-center justify-between px-5 py-3.5">
          <span className="flex items-center gap-3">
            <span aria-hidden="true" className="flex h-11 w-11 items-center justify-center bg-white font-display text-base font-bold text-cobalt">SR</span>
            <span className="font-display text-xl font-bold">{site.name}</span>
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center border-2 border-white text-2xl leading-none"
          >×</button>
        </div>
        <nav className="flex flex-1 flex-col justify-center px-6" aria-label="Mobile">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-white/25 py-5">
              <span className="font-display text-4xl font-bold">{l.label}</span>
            </Link>
          ))}
          <Link href={site.socials.github} className="block py-5">
            <span className="font-display text-2xl font-semibold text-lime">GitHub — {site.socials.githubHandle} ↗</span>
          </Link>
        </nav>
        <p className="px-6 pb-8 font-mono text-[10px] uppercase tracking-widest2 text-white/70">{site.name} — {site.role}</p>
      </div>
    </>
  )
}
