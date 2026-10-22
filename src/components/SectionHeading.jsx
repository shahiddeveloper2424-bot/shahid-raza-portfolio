import React from 'react'

/** Editorial section heading: folio label, oversized title, ruled intro. */
export default function SectionHeading({ index, eyebrow, title, intro, dark = false }) {
  return (
    <div className="reveal mb-14 sm:mb-16">
      <div className={`flex items-center gap-4 border-t-2 pt-5 ${dark ? 'border-paper/70' : 'border-ink'}`}>
        <p className={`folio ${dark ? 'text-gold' : 'text-clay'}`}>{index} — {eyebrow}</p>
        <span aria-hidden="true" className={`h-px flex-1 ${dark ? 'bg-paper/20' : 'bg-line'}`} />
        <p className={`folio hidden sm:block ${dark ? 'text-paper/40' : 'text-muted'}`}>Shahid Raza</p>
      </div>
      <h2 className="display-1 mt-7 max-w-4xl">{title}</h2>
      {intro && <p className={`lede mt-5 max-w-2xl ${dark ? 'text-paper/70' : 'text-soft'}`}>{intro}</p>}
    </div>
  )
}
