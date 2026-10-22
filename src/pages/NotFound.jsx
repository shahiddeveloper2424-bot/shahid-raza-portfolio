import React from 'react'
import { Link, useDocumentTitle } from '../lib/router.jsx'

export default function NotFound() {
  useDocumentTitle('Page not found | Shahid Raza')
  return (
    <section className="mx-auto max-w-shell px-5 py-24 sm:px-10 sm:py-32">
      <p className="folio flex items-center gap-3 text-clay">
        <span aria-hidden="true" className="h-px w-10 bg-clay" /> Error 404
      </p>
      <h1 className="display-hero mt-7 max-w-3xl">This page doesn't <em className="text-clay">exist.</em></h1>
      <p className="lede mt-6 max-w-xl text-soft">The link may be old, or the page may have moved. Everything real is one click away:</p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link href="/" className="arrow-link bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-clay">Back to home <span className="arr" aria-hidden="true">→</span></Link>
        <Link href="/#work" className="arrow-link border border-ink px-7 py-3.5 text-sm font-medium transition-colors hover:bg-parchment">View selected work <span className="arr" aria-hidden="true">→</span></Link>
      </div>
    </section>
  )
}
