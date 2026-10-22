import React from 'react'

export default function SectionHeading({ index, eyebrow, title, intro, accent = 'bg-accent' }) {
  return (
    <div className="mb-14 sm:mb-16">
      <div className="reveal flex items-center gap-4 border-t border-line pt-5">
        <span aria-hidden="true" className={`h-[3px] w-10 shrink-0 ${accent}`} />
        <p className="folio text-cyan">{index} — {eyebrow}</p>
        <span aria-hidden="true" className="h-px flex-1 bg-line" />
        <p className="folio hidden text-muted sm:block">Shahid Raza</p>
      </div>
      <h2 className="reveal display-1 mt-8 max-w-3xl text-ink">{title}</h2>
      {intro && <p className="reveal lede mt-5 max-w-2xl text-soft">{intro}</p>}
    </div>
  )
}
