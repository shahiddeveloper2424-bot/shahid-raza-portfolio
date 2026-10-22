import React, { useState } from 'react'
import { projects } from '../data/projects.js'

/*
 * Honest design compositions in the monochrome navy/blue system — NOT
 * screenshots. No real screenshots exist yet; each visual is captioned
 * "Design visual — real screenshot to be added by owner".
 */
function Frame({ label, children }) {
  return (
    <figure>
      <div className="overflow-hidden rounded-2xl border border-line bg-card">
        <div className="flex items-center gap-2 border-b border-line px-4 py-3" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-accent" />
          <span className="h-2.5 w-2.5 rounded-full bg-cyan" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="ml-3 font-mono text-[10px] uppercase tracking-widest2 text-muted">{label}</span>
        </div>
        <div aria-hidden="true">{children}</div>
      </div>
      <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-widest2 text-muted">
        Design visual — real screenshot to be added by owner
      </figcaption>
    </figure>
  )
}

const BAR = 'rounded bg-line/70'

export function PrintoraVisual() {
  return (
    <Frame label="printora-crfs.vercel.app">
      <div className="bg-surface p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <span className="font-display text-lg font-bold tracking-[0.18em] text-ink">PRINTORA</span>
          <span className="flex gap-2"><span className={`h-2 w-10 ${BAR}`} /><span className={`h-2 w-10 ${BAR}`} /><span className="h-2 w-10 rounded bg-accent" /></span>
        </div>
        <p className="mt-5 font-display text-3xl font-bold text-ink">Make It <span className="text-gradient">Yours.</span></p>
        <div className="mt-5 grid grid-cols-3 gap-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-xl border border-line bg-card p-3">
              <div className="flex h-16 items-center justify-center rounded-lg bg-surface font-display text-xl font-bold text-accent">Aa</div>
              <div className={`mt-3 h-2 w-4/5 ${BAR}`} />
              <div className="mt-2 h-2 w-3/5 rounded bg-accent/70" />
            </div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full border border-line px-3 py-1 font-mono text-[9px] uppercase tracking-widest2 text-soft">Design Studio</span>
          <span className="rounded-full border border-accent/60 px-3 py-1 font-mono text-[9px] uppercase tracking-widest2 text-cyan">Multi-currency</span>
          <span className="rounded-full border border-line px-3 py-1 font-mono text-[9px] uppercase tracking-widest2 text-soft">Admin</span>
        </div>
      </div>
    </Frame>
  )
}

export function EduCoreVisual() {
  return (
    <Frame label="educore — admin dashboard">
      <div className="flex bg-surface">
        <div className="w-[30%] space-y-2.5 border-r border-line p-4">
          <span className="font-display text-sm font-bold text-ink">EduCore</span>
          {['Students', 'Fees', 'Attendance', 'Exams'].map((t, i) => (
            <span key={t} className={`block rounded-md px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-widest2 ${i === 0 ? 'bg-accent/25 text-ink' : 'text-muted'}`}>{t}</span>
          ))}
        </div>
        <div className="flex-1 space-y-3 p-4">
          <div className="grid grid-cols-3 gap-2.5">
            {[0, 1, 2].map((i) => (<div key={i} className="rounded-lg border border-line bg-card p-2.5"><div className="h-4 w-8 rounded bg-accent/80" /><div className={`mt-2 h-1.5 w-full ${BAR}`} /></div>))}
          </div>
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-2.5">
              <span className="h-6 w-6 shrink-0 rounded-full bg-line" />
              <span className={`h-2 flex-1 ${BAR}`} />
              <span className={`h-2 w-10 ${i % 2 ? 'rounded bg-cyan/70' : 'rounded bg-accent/70'}`} />
            </div>
          ))}
        </div>
      </div>
    </Frame>
  )
}

export function PdfVisual() {
  return (
    <Frame label="pdf-toolkit-pro — live site">
      <div className="bg-surface p-5 sm:p-6">
        <p className="font-display text-xl font-bold text-ink">PDF Toolkit <span className="text-cyan">Pro</span></p>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-line bg-card p-3.5">
            <div className="rounded-lg bg-[#E8EEF7] p-2.5">
              {[0, 1, 2, 3].map((i) => (<div key={i} className={`mb-1.5 h-1.5 rounded bg-[#9DB4D4] ${i === 3 ? 'w-2/3' : ''}`} />))}
              <div className="mt-2.5 flex h-12 items-center justify-center rounded bg-[#C9D9F2] font-display text-sm font-bold text-[#3478F6]">PDF</div>
              {[0, 1].map((i) => (<div key={i} className="mb-1.5 mt-1.5 h-1.5 rounded bg-[#9DB4D4]" />))}
            </div>
            <p className="mt-2.5 font-mono text-[9px] uppercase tracking-widest2 text-muted">Merge · Split · Extract</p>
          </div>
          <div className="flex flex-col gap-3">
            {['Convert to PDF', 'Watermark', 'Reorder pages'].map((t, i) => (
              <div key={t} className={`flex flex-1 items-center justify-between rounded-xl border border-line bg-card px-3.5 ${i === 0 ? 'border-accent/60' : ''}`}>
                <span className="text-sm font-medium text-soft">{t}</span>
                <span className="font-display font-bold text-cyan">→</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  )
}


/*
 * Real project image — used when the project supplies one via its
 * `screenshot` data field (here: PDF Toolkit Pro's official preview
 * image, taken from its live website). If the file is missing, the
 * labelled design composition renders instead — never a broken image.
 */
function RealImage({ project, fallback }) {
  const [failed, setFailed] = useState(false)
  if (failed) return fallback
  return (
    <figure>
      <div className="overflow-hidden rounded-2xl border border-line bg-card">
        <img
          src={project.screenshot}
          alt={`${project.title} — official preview image from the live website`}
          width="1200"
          height="630"
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className="block aspect-[1200/630] w-full object-cover"
        />
      </div>
      <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-widest2 text-muted">
        Official preview image — from the live {project.title} website
      </figcaption>
    </figure>
  )
}

const VISUALS = { printora: PrintoraVisual, educore: EduCoreVisual, 'pdf-toolkit-pro': PdfVisual }

export default function ProjectVisual({ slug }) {
  const Visual = VISUALS[slug] || PrintoraVisual
  const project = projects.find((p) => p.slug === slug)
  if (project && project.screenshot) {
    return <RealImage project={project} fallback={<Visual />} />
  }
  return <Visual />
}
