import React from 'react'

export default function SectionHeading({ index, eyebrow, title, intro }) {
  return (
    <div className="reveal mb-12 max-w-3xl">
      <p className="font-mono text-xs uppercase tracking-widest2 text-clay">
        {index} — {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl">{title}</h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-soft">{intro}</p>}
    </div>
  )
}
