import React from 'react'

/**
 * Art-directed product composition for each project.
 * HONEST LABELLING: these are designed UI compositions (posters), NOT
 * screenshots. If the owner supplies a real screenshot
 * (project.screenshot), it replaces this composition.
 */

function Frame({ label, children, dark = false }) {
  return (
    <div className={`visual-inner flex h-full flex-col border ${dark ? 'border-paper/20 bg-ink2' : 'border-ink/15 bg-parchment'}`}>
      <div className={`flex items-center gap-2 border-b px-4 py-2.5 ${dark ? 'border-paper/15' : 'border-ink/10'}`} aria-hidden="true">
        <span className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-clay/70" /><span className="h-2 w-2 rounded-full bg-gold/70" /><span className="h-2 w-2 rounded-full bg-moss/70" />
        </span>
        <span className={`ml-2 font-mono text-[10px] uppercase tracking-widest2 ${dark ? 'text-paper/50' : 'text-muted'}`}>{label}</span>
      </div>
      <div className="relative flex-1">{children}</div>
    </div>
  )
}

function PrintoraArt() {
  return (
    <Frame label="printora-alpha.vercel.app — live preview">
      <div className="rule-lines absolute inset-0 flex flex-col p-5 sm:p-7" aria-hidden="true">
        <div className="flex items-end justify-between border-b-2 border-ink/70 pb-3">
          <span className="font-display text-2xl font-semibold tracking-wide sm:text-3xl">PRINTORA</span>
          <span className="font-mono text-[10px] uppercase tracking-widest2 text-muted">Make It Yours.</span>
        </div>
        <div className="mt-5 grid flex-1 grid-cols-12 gap-3">
          <div className="col-span-8 grid grid-cols-2 gap-3">
            <div className="bg-sand/80" /><div className="bg-paper" />
            <div className="bg-paper" /><div className="bg-clay/25" />
          </div>
          <div className="col-span-4 flex flex-col gap-2 border border-ink/15 bg-paper p-3">
            <span className="font-mono text-[9px] uppercase tracking-widest2 text-clay">Design Studio</span>
            <div className="h-1.5 w-4/5 bg-ink/60" /><div className="h-1.5 w-3/5 bg-ink/30" /><div className="h-1.5 w-2/3 bg-ink/30" />
            <div className="mt-auto grid grid-cols-3 gap-1.5">
              <span className="h-5 bg-ink" /><span className="h-5 bg-clay" /><span className="h-5 bg-sand" />
            </div>
          </div>
        </div>
        <div className="mt-4 flex gap-5 font-mono text-[9px] uppercase tracking-widest2 text-muted">
          <span>Storefront</span><span>Studio</span><span>Admin</span><span className="ml-auto text-clay">PKR · Multi-currency</span>
        </div>
      </div>
    </Frame>
  )
}

function EduCoreArt() {
  return (
    <Frame label="EduCore — school management">
      <div className="absolute inset-0 flex" aria-hidden="true">
        <div className="hidden w-1/4 flex-col gap-2.5 border-r border-ink/10 bg-ink p-4 sm:flex">
          <span className="font-display text-base font-semibold text-paper">EduCore</span>
          <span className="mt-3 h-1.5 w-4/5 bg-paper/50" /><span className="h-1.5 w-3/5 bg-paper/30" /><span className="h-1.5 w-2/3 bg-paper/30" /><span className="h-1.5 w-1/2 bg-paper/30" />
          <span className="mt-auto font-mono text-[8px] uppercase tracking-widest2 text-gold">Dashboard</span>
        </div>
        <div className="flex flex-1 flex-col gap-2 p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[9px] uppercase tracking-widest2 text-muted">Student records</span>
            <span className="bg-moss/25 px-2 py-0.5 font-mono text-[8px] uppercase tracking-widest2 text-moss">Fees</span>
          </div>
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex items-center gap-3 border-b border-ink/10 pb-2">
              <span className={`h-6 w-6 shrink-0 ${i % 2 ? 'bg-sand' : 'bg-clay/30'}`} />
              <span className="h-1.5 flex-1 bg-ink/25" />
              <span className="hidden h-1.5 w-12 bg-ink/15 sm:block" />
              <span className={`h-1.5 w-8 ${i % 3 === 0 ? 'bg-clay/60' : 'bg-moss/50'}`} />
            </div>
          ))}
          <span className="mt-auto font-mono text-[8px] uppercase tracking-widest2 text-muted">Records · Timetable · Reports</span>
        </div>
      </div>
    </Frame>
  )
}

function PdfArt() {
  return (
    <Frame label="PDF Toolkit Pro — browser utility">
      <div className="rule-lines absolute inset-0 flex items-stretch justify-center gap-4 p-5 sm:p-7" aria-hidden="true">
        <div className="flex w-[38%] -rotate-2 flex-col gap-2 border border-ink/15 bg-paper p-3.5 shadow-sm">
          <span className="font-mono text-[8px] uppercase tracking-widest2 text-clay">Document — 01</span>
          <div className="h-2 w-3/4 bg-ink/70" /><div className="h-1.5 w-full bg-ink/20" /><div className="h-1.5 w-full bg-ink/20" /><div className="h-1.5 w-2/3 bg-ink/20" /><div className="h-1.5 w-5/6 bg-ink/20" />
          <span className="mt-auto font-display text-3xl font-semibold text-clay/80">PDF</span>
        </div>
        <div className="flex w-[38%] rotate-1 flex-col gap-2 border border-ink/15 bg-paper p-3.5 shadow-sm">
          <span className="font-mono text-[8px] uppercase tracking-widest2 text-clay">Toolkit</span>
          <div className="grid grid-cols-2 gap-1.5">
            <span className="h-7 bg-parchment" /><span className="h-7 bg-sand/80" /><span className="h-7 bg-sand/80" /><span className="h-7 bg-clay/25" />
          </div>
          <div className="h-1.5 w-full bg-ink/20" /><div className="h-1.5 w-4/5 bg-ink/20" />
          <span className="mt-auto h-6 bg-ink" />
        </div>
      </div>
    </Frame>
  )
}

export default function ProjectVisual({ project, large = false }) {
  if (project.screenshot) {
    return (
      <figure>
        <img src={project.screenshot} alt={`${project.title} — project screenshot`} loading="lazy" className="w-full border border-ink/15 object-cover" />
        <figcaption className="folio mt-3 text-muted">{project.title} — screenshot</figcaption>
      </figure>
    )
  }
  return (
    <figure aria-label={`${project.title} design composition (illustrative, not a screenshot)`}>
      <div className={`visual-zoom overflow-hidden ${large ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
        {project.slug === 'printora' && <PrintoraArt />}
        {project.slug === 'educore' && <EduCoreArt />}
        {project.slug === 'pdf-toolkit-pro' && <PdfArt />}
      </div>
      <figcaption className="folio mt-3 flex items-center gap-3 text-muted">
        <span aria-hidden="true" className="h-px w-8 bg-clay" />
        Design composition — real screenshot to be added by owner
      </figcaption>
    </figure>
  )
}
