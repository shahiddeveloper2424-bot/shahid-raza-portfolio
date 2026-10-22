import React, { useEffect } from 'react'
import { Link } from '../lib/router.jsx'

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page not found — Shahid Raza'
    return () => { document.title = 'Shahid Raza — Software Developer | Web Applications & MERN Stack' }
  }, [])

  return (
    <section className="dotgrid bg-navy">
      <div className="mx-auto flex max-w-shell flex-col items-start px-5 py-24 sm:px-10 sm:py-32">
        <p className="folio text-cyan">Error — 404</p>
        <h1 className="display-hero mt-6 text-ink">This page <span className="text-gradient">doesn&apos;t exist.</span></h1>
        <p className="lede mt-6 max-w-xl text-soft">
          The address may be wrong, or the page may have moved. Everything real is one click away:
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/" className="btn-primary rounded-lg px-7 py-3.5 font-display font-semibold text-white">Back to home →</Link>
          <Link href="/#work" className="rounded-lg border border-line px-7 py-3.5 font-display font-semibold text-ink transition-colors hover:border-accent hover:text-cyan">See the projects</Link>
          <Link href="/#contact" className="rounded-lg border border-line px-7 py-3.5 font-display font-semibold text-ink transition-colors hover:border-accent hover:text-cyan">Contact</Link>
        </div>
      </div>
    </section>
  )
}
