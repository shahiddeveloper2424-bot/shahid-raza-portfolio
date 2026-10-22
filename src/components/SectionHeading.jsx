import React from 'react'

export default function SectionHeading({ index, eyebrow, title, intro, dark = false, accent = 'bg-cobalt' }) {
  return (
    <div className="mb-14 sm:mb-16">
      <div className={`reveal flex items-center gap-4 border-t-2 pt-5 ${dark ? 'border-paper/70' : 'border-ink'}`}>
        <span aria-hidden="true" className={`h-3 w-3 shrink-0 ${accent}`} />
        <p className={`folio ${dark ? 'text-lime' : 'text-cobalt'}`}>{index} — {eyebrow}</p>
        <span aria-hidden="true" className={`h-px flex-1 ${dark ? 'bg-paper/25' : 'bg-line'}`} />
        <p className={`folio hidden sm:block ${dark ? 'text-paper/50' : 'text-muted'}`}>Shahid Raza</p>
      </div>
      <h2 className="reveal display-1 mt-8 max-w-3xl">{title}</h2>
      {intro && <p className={`reveal lede mt-5 max-w-2xl ${dark ? 'text-paper/70' : 'text-soft'}`}>{intro}</p>}
    </div>
  )
}
