import React from 'react'

/**
 * Art-directed product compositions, one colour world per project.
 * HONEST LABELLING: these are designed UI compositions (mockups), NOT
 * screenshots. If the owner supplies a real screenshot
 * (project.screenshot), it replaces the composition.
 */

function Frame({ label, dark = false, children }) {
  return (
    <div className={`visual-inner flex h-full flex-col border-2 ${dark ? 'border-ink bg-ink2' : 'border-ink bg-white'}`}>
      <div className="flex items-center gap-2 border-b-2 border-ink bg-paper px-4 py-2.5" aria-hidden="true">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-cobalt" /><span className="h-2.5 w-2.5 rounded-full bg-coral" /><span className="h-2.5 w-2.5 rounded-full bg-lime ring-1 ring-ink/20" />
        </span>
        <span className="ml-2 font-mono text-[10px] uppercase tracking-widest2 text-muted">{label}</span>
      </div>
      <div className="relative flex-1">{children}</div>
    </div>
  )
}

function PrintoraArt() {
  return (
    <Frame label="printora-alpha.vercel.app — live preview">
      <div className="dotgrid absolute inset-0 flex flex-col bg-cobalt p-5 sm:p-7" aria-hidden="true">
        <div className="flex items-end justify-between border-b-2 border-white/80 pb-3">
          <span className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">PRINTORA</span>
          <span className="font-mono text-[10px] uppercase tracking-widest2 text-lime">Make It Yours.</span>
        </div>
        <div className="mt-5 grid flex-1 grid-cols-12 gap-3">
          <div className="col-span-8 grid grid-cols-2 gap-3">
            <div className="bg-white" /><div className="bg-lime" />
            <div className="bg-coral" /><div className="bg-white/85" />
          </div>
          <div className="col-span-4 flex flex-col gap-2 border-2 border-ink bg-white p-3">
            <span className="font-mono text-[9px] uppercase tracking-widest2 text-cobalt">Design Studio</span>
            <div className="h-1.5 w-4/5 bg-ink/70" /><div className="h-1.5 w-3/5 bg-ink/30" /><div className="h-1.5 w-2/3 bg-ink/30" />
            <div className="mt-auto grid grid-cols-3 gap-1.5">
              <span className="h-5 bg-ink" /><span className="h-5 bg-cobalt" /><span className="h-5 bg-coral" />
            </div>
          </div>
        </div>
        <div className="mt-4 flex gap-5 font-mono text-[9px] uppercase tracking-widest2 text-white/85">
          <span>Storefront</span><span>Studio</span><span>Admin</span><span className="ml-auto text-lime">PKR · Multi-currency</span>
        </div>
      </div>
    </Frame>
  )
}

function EduCoreArt() {
  return (
    <Frame label="EduCore — school management">
      <div className="absolute inset-0 flex bg-blush" aria-hidden="true">
        <div className="hidden w-1/4 flex-col gap-2.5 border-r-2 border-ink bg-coral p-4 sm:flex">
          <span className="font-display text-base font-bold text-ink">EduCore</span>
          <span className="mt-3 h-1.5 w-4/5 bg-ink/60" /><span className="h-1.5 w-3/5 bg-ink/35" /><span className="h-1.5 w-2/3 bg-ink/35" /><span className="h-1.5 w-1/2 bg-ink/35" />
          <span className="mt-auto font-mono text-[8px] uppercase tracking-widest2 text-ink/70">Dashboard</span>
        </div>
        <div className="flex flex-1 flex-col gap-2 p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[9px] uppercase tracking-widest2 text-soft">Student records</span>
            <span className="bg-ink px-2 py-0.5 font-mono text-[8px] uppercase tracking-widest2 text-lime">Fees</span>
          </div>
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex items-center gap-3 border-b border-ink/10 pb-2">
              <span className={`h-6 w-6 shrink-0 ${i % 2 ? 'bg-cobalt' : 'bg-coral'}`} />
              <span className="h-1.5 flex-1 bg-ink/25" />
              <span className="hidden h-1.5 w-12 bg-ink/15 sm:block" />
              <span className={`h-1.5 w-8 ${i % 3 === 0 ? 'bg-cobalt' : 'bg-coraldeep/60'}`} />
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
      <div className="dotgrid-ink absolute inset-0 flex items-stretch justify-center gap-4 bg-lime p-5 sm:p-7" aria-hidden="true">
        <div className="flex w-[38%] -rotate-2 flex-col gap-2 border-2 border-ink bg-white p-3.5">
          <span className="font-mono text-[8px] uppercase tracking-widest2 text-coraldeep">Document — 01</span>
          <div className="h-2 w-3/4 bg-ink/80" /><div className="h-1.5 w-full bg-ink/20" /><div className="h-1.5 w-full bg-ink/20" /><div className="h-1.5 w-2/3 bg-ink/20" /><div className="h-1.5 w-5/6 bg-ink/20" />
          <span className="mt-auto font-display text-3xl font-bold text-cobalt">PDF</span>
        </div>
        <div className="flex w-[38%] rotate-1 flex-col gap-2 border-2 border-ink bg-white p-3.5">
          <span className="font-mono text-[8px] uppercase tracking-widest2 text-cobalt">Toolkit</span>
          <div className="grid grid-cols-2 gap-1.5">
            <span className="h-7 bg-ice" /><span className="h-7 bg-blush" /><span className="h-7 bg-limetint" /><span className="h-7 bg-coral" />
          </div>
          <div className="h-1.5 w-full bg-ink/20" /><div className="h-1.5 w-4/5 bg-ink/20" />
          <span className="mt-auto h-6 bg-ink" />
        </div>
      </div>
    </Frame>
  )
}

const CAPTIONS = {
  printora: 'text-cobalt',
  educore: 'text-coraldeep',
  'pdf-toolkit-pro': 'text-limedeep',
}

export default function ProjectVisual({ project, large = false }) {
  if (project.screenshot) {
    return (
      <figure>
        <img src={project.screenshot} alt={`${project.title} — project screenshot`} loading="lazy" className="w-full border-2 border-ink object-cover" />
        <figcaption className="folio mt-3 text-muted">{project.title} — screenshot</figcaption>
      </figure>
    )
  }
  return (
    <figure aria-label={`${project.title} design composition (illustrative mockup, not a screenshot)`}>
      <div className={`visual-zoom ${large ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
        {project.slug === 'printora' && <PrintoraArt />}
        {project.slug === 'educore' && <EduCoreArt />}
        {project.slug === 'pdf-toolkit-pro' && <PdfArt />}
      </div>
      <figcaption className={`folio mt-3 flex items-center gap-3 ${CAPTIONS[project.slug] || 'text-muted'}`}>
        <span aria-hidden="true" className="h-[3px] w-8 bg-current" />
        <span className="text-muted">Design composition — real screenshot to be added by owner</span>
      </figcaption>
    </figure>
  )
}
