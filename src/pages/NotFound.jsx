import React from 'react'
import { Link, useDocumentTitle } from '../lib/router.jsx'

export default function NotFound() {
  useDocumentTitle('Page not found | Shahid Raza')
  return (
    <section className="dotgrid bg-cobalt text-white">
      <div className="mx-auto max-w-shell px-5 py-24 sm:px-10 sm:py-32">
        <p className="folio flex items-center gap-3 text-lime">
          <span aria-hidden="true" className="h-3 w-3 bg-coral" /> Error 404
        </p>
        <h1 className="display-hero mt-7 max-w-3xl">This page doesn't <span className="text-lime">exist.</span></h1>
        <p className="lede mt-6 max-w-xl text-white/85">The link may be old, or the page may have moved. Everything real is one click away:</p>
        <div className="mt-10 flex flex-wrap gap-5">
          <Link href="/" className="hard-sm lift bg-lime px-7 py-3.5 font-display text-sm font-semibold text-ink">Back to home →</Link>
          <Link href="/#work" className="border-2 border-white px-7 py-3.5 font-display text-sm font-semibold text-white transition-colors hover:bg-white hover:text-cobalt">View selected work</Link>
        </div>
      </div>
    </section>
  )
}
