import React from 'react'

/**
 * Editorial project visual.
 * HONEST LABELLING: these are CSS design compositions, NOT screenshots.
 * When the owner supplies a real screenshot (project.screenshot), it is
 * rendered instead and this placeholder disappears.
 */
export default function ProjectVisual({ project, large = false }) {
  if (project.screenshot) {
    return (
      <figure>
        <img src={project.screenshot} alt={`${project.title} — project screenshot`} loading="lazy" className="w-full border border-line object-cover" />
        <figcaption className="mt-2 font-mono text-[11px] uppercase tracking-widest2 text-muted">{project.title} — screenshot</figcaption>
      </figure>
    )
  }

  return (
    <figure aria-label={`${project.title} design visual (placeholder, not a screenshot)`}>
      <div className={`rule-lines relative overflow-hidden border border-line bg-parchment ${large ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
        {project.slug === 'printora' && (
          <div className="absolute inset-0 flex flex-col p-5 sm:p-7" aria-hidden="true">
            <div className="flex items-center justify-between border-b border-ink/15 pb-3">
              <span className="font-display text-lg font-semibold tracking-wide sm:text-2xl">PRINTORA</span>
              <span className="font-mono text-[10px] uppercase tracking-widest2 text-muted">Make It Yours.</span>
            </div>
            <div className="mt-5 grid flex-1 grid-cols-3 gap-3">
              <div className="bg-sand/70" /><div className="bg-paper" /><div className="bg-clay/25" />
              <div className="bg-paper" /><div className="bg-clay/15" /><div className="bg-sand/70" />
            </div>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-widest2 text-muted">Storefront · Studio · Admin</p>
          </div>
        )}
        {project.slug === 'educore' && (
          <div className="absolute inset-0 flex flex-col p-5 sm:p-7" aria-hidden="true">
            <div className="flex items-center justify-between border-b border-ink/15 pb-3">
              <span className="font-display text-lg font-semibold sm:text-2xl">EduCore</span>
              <span className="font-mono text-[10px] uppercase tracking-widest2 text-muted">School System</span>
            </div>
            <div className="mt-5 grid flex-1 grid-cols-4 gap-2">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className={i % 5 === 0 ? 'bg-moss/30' : 'bg-paper'} />
              ))}
            </div>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-widest2 text-muted">Records · Timetable · Reports</p>
          </div>
        )}
        {project.slug === 'pdf-toolkit-pro' && (
          <div className="absolute inset-0 flex items-center justify-center gap-3 p-5 sm:p-7" aria-hidden="true">
            <div className="flex h-full w-1/3 -rotate-2 flex-col gap-2 border border-line bg-paper p-3">
              <div className="h-2 w-3/4 bg-ink/70" /><div className="h-1.5 w-full bg-ink/20" /><div className="h-1.5 w-full bg-ink/20" /><div className="h-1.5 w-2/3 bg-ink/20" />
              <span className="mt-auto font-mono text-[9px] uppercase tracking-widest2 text-clay">PDF</span>
            </div>
            <div className="flex h-full w-1/3 rotate-1 flex-col gap-2 border border-line bg-paper p-3 shadow-sm">
              <div className="h-2 w-2/3 bg-ink/70" /><div className="h-1.5 w-full bg-ink/20" /><div className="h-1.5 w-5/6 bg-ink/20" /><div className="h-1.5 w-full bg-ink/20" />
              <span className="mt-auto font-mono text-[9px] uppercase tracking-widest2 text-clay">Toolkit</span>
            </div>
          </div>
        )}
      </div>
      <figcaption className="mt-2 font-mono text-[11px] uppercase tracking-widest2 text-muted">
        Design visual — real screenshot to be added by owner
      </figcaption>
    </figure>
  )
}
