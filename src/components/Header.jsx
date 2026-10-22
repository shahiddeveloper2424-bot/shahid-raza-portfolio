import React, { useEffect, useState } from 'react'
import { Link, usePath } from '../lib/router.jsx'
import { site, navLinks } from '../data/site.js'

const SECTION_IDS = ['about', 'skills', 'work', 'services', 'process', 'contact']

export default function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const pathname = usePath()

  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey) }
  }, [open ])

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

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-navy/95 pt-[env(safe-area-inset-top)] backdrop-blur">
        <div className="mx-auto flex max-w-shell items-center justify-between gap-4 px-5 py-3 sm:px-10 sm:py-3.5">
          <Link href="/" className="flex min-w-0 items-center gap-3" ariaLabel={`${site.name} — home`}>
            <img src="/images/shahid-raza-sr-logo.png" alt="" aria-hidden="true" className="h-10 w-auto shrink-0 sm:h-11" />
            <span className="min-w-0 leading-none">
              <span className="block whitespace-nowrap font-display text-[1.12rem] font-bold tracking-tight text-ink sm:text-[1.3rem]">{site.name}</span>
              <span className="folio mt-1 hidden whitespace-nowrap text-[0.58rem] text-muted sm:block">{site.role} — Portfolio</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-5 xl:gap-7 lg:flex" aria-label="Primary">
            {navLinks.map((l) => {
              const isActive = active && l.href === `/#${active}`
              return (
                <Link key={l.href} href={l.href} className={`link-line whitespace-nowrap text-[0.92rem] font-medium hover:text-ink ${isActive ? 'text-cyan' : 'text-soft'}`}>
                  {l.label}
                </Link>
              )
            })}
            <Link href="/#contact" className="btn-primary whitespace-nowrap rounded-lg px-5 py-2.5 font-display text-sm font-semibold text-white">
              Discuss your project
            </Link>
          </nav>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-surface lg:hidden"
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

      {/* Full-screen mobile menu (sibling of header: backdrop-blur on the
          header would trap a fixed child inside its box). */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-50 flex flex-col overflow-y-auto bg-surface text-ink lg:hidden ${open ? 'menu-panel' : 'hidden'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="flex items-center justify-between px-5 pb-3 pt-[max(0.75rem,env(safe-area-inset-top))]">
          <span className="flex min-w-0 items-center gap-3">
            <img src="/images/shahid-raza-sr-logo.png" alt="" aria-hidden="true" className="h-10 w-auto shrink-0" />
            <span className="whitespace-nowrap font-display text-lg font-bold">{site.name}</span>
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-line text-2xl leading-none"
          >×</button>
        </div>
        <nav className="flex flex-1 flex-col justify-center px-6" aria-label="Mobile">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-line py-4 sm:py-5">
              <span className="font-display text-3xl font-bold sm:text-4xl">{l.label}</span>
            </Link>
          ))}
          <Link href="/#contact" onClick={() => setOpen(false)} className="btn-primary mt-7 flex items-center justify-center rounded-xl px-6 py-4 font-display text-base font-semibold text-white">
            Discuss your project
          </Link>
          <Link href={site.socials.github} className="block py-5">
            <span className="font-display text-2xl font-semibold text-cyan">GitHub — {site.socials.githubHandle} ↗</span>
          </Link>
        </nav>
        <p className="px-6 pb-[max(2rem,env(safe-area-inset-bottom))] font-mono text-[10px] uppercase tracking-widest2 text-muted">{site.name} — {site.role}</p>
      </div>
    </>
  )
}
