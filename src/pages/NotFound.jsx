import React from 'react'
import { Link, useDocumentTitle } from '../lib/router.jsx'

export default function NotFound() {
  useDocumentTitle('Page not found | Shahid Raza')
  return (
    <section className="mx-auto max-w-shell px-5 py-24 sm:px-8">
      <p className="font-mono text-xs uppercase tracking-widest2 text-clay">404</p>
      <h1 className="mt-4 font-display text-5xl font-medium tracking-tight">This page doesn't exist.</h1>
      <p className="mt-4 max-w-xl leading-relaxed text-soft">The link may be old, or the page may have moved. Everything real is one click away:</p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/" className="bg-ink px-6 py-3 text-sm font-medium text-paper hover:bg-claydark">Back to home</Link>
        <Link href="/#work" className="border border-ink px-6 py-3 text-sm font-medium hover:bg-parchment">View selected work</Link>
      </div>
    </section>
  )
}
