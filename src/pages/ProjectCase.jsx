import React from 'react'
import { Link, useDocumentTitle } from '../lib/router.jsx'
import { getProject, projects } from '../data/projects.js'
import ProjectVisual from '../components/ProjectVisual.jsx'
import { ContactSection } from './Home.jsx'

/* Per-project colour worlds (mirrors the homepage panels). */
const WORLDS = {
  printora: { band: 'bg-cobalt text-white', sub: 'text-white/75', folio: 'text-lime', num: 'text-cobalt', tint: 'bg-ice', chip: 'bg-lime text-ink' },
  educore: { band: 'bg-coral text-ink', sub: 'text-ink/70', folio: 'text-ink/60', num: 'text-coraldeep', tint: 'bg-blush', chip: 'bg-ink text-white' },
  'pdf-toolkit-pro': { band: 'bg-lime text-ink', sub: 'text-ink/70', folio: 'text-ink/60', num: 'text-limedeep', tint: 'bg-limetint', chip: 'bg-ink text-white' },
}

function CaseSection({ index, title, accent, children, narrow = false }) {
  return (
    <section className="reveal grid gap-6 border-t-2 border-ink py-12 md:grid-cols-12 md:gap-10">
      <div className="md:col-span-4">
        <p className={`font-display text-3xl font-bold ${accent}`}>{index}</p>
        <h2 className="display-2 mt-2">{title}</h2>
      </div>
      <div className={`md:col-span-8 ${narrow ? 'max-w-2xl' : ''}`}>{children}</div>
    </section>
  )
}

export default function ProjectCase({ slug }) {
  const project = getProject(slug)
  useDocumentTitle(project ? `${project.title} — ${project.subtitle} | Shahid Raza` : 'Project not found | Shahid Raza')

  /* Per-page meta description (restored on unmount). */
  React.useEffect(() => {
    if (!project) return undefined
    const tag = document.querySelector('meta[name="description"]')
    if (!tag) return undefined
    const original = tag.getAttribute('content')
    tag.setAttribute('content', `${project.title} (${project.subtitle}) by Shahid Raza — ${project.summary}`)
    return () => { tag.setAttribute('content', original) }
  }, [project])

  if (!project) return null

  const w = WORLDS[slug] || WORLDS.printora
  const others = projects.filter((p) => p.slug !== slug)

  return (
    <>
      <article>
        {/* Colour band hero */}
        <div className={`dotgrid ${w.band} ${slug === 'printora' ? '' : 'dotgrid-ink'}`}>
          <div className="mx-auto max-w-shell px-5 pb-14 pt-12 sm:px-10">
            <Link href="/#work" className="arrow-link folio"><span className="arr inline-block rotate-180" aria-hidden="true">→</span> All work</Link>
            <div className="mt-10 grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <p className={`folio ${w.folio}`}>Case study {project.index} — {project.status}</p>
                <h1 className="display-hero mt-5">{project.title}</h1>
                <p className={`mt-4 font-display text-2xl font-medium sm:text-3xl ${w.sub}`}>{project.subtitle}</p>
              </div>
              <dl className="grid grid-cols-2 gap-x-6 gap-y-7 self-end lg:col-span-4">
                <div>
                  <dt className={`folio ${w.folio}`}>Role</dt>
                  <dd className="mt-1.5 font-display text-lg font-semibold leading-snug">{project.role || <span className="font-sans text-base font-normal opacity-70">To be added by owner</span>}</dd>
                </div>
                <div>
                  <dt className={`folio ${w.folio}`}>Year</dt>
                  <dd className="mt-1.5 font-display text-lg font-semibold leading-snug">{project.year || <span className="font-sans text-base font-normal opacity-70">To be added</span>}</dd>
                </div>
                <div>
                  <dt className={`folio ${w.folio}`}>Status</dt>
                  <dd className="mt-1.5 font-display text-lg font-semibold leading-snug">{project.status}</dd>
                </div>
                <div>
                  <dt className={`folio ${w.folio}`}>Links</dt>
                  <dd className="mt-1.5 flex flex-col items-start gap-1.5">
                    {project.links.live
                      ? <Link href={project.links.live} className="arrow-link font-display font-semibold underline decoration-2 underline-offset-4">{project.links.liveLabel} <span className="arr" aria-hidden="true">↗</span></Link>
                      : <span className="opacity-70">No demo link yet</span>}
                    {project.links.github
                      ? <Link href={project.links.github} className="arrow-link font-display font-semibold underline decoration-2 underline-offset-4">Source on GitHub <span className="arr" aria-hidden="true">↗</span></Link>
                      : <span className="text-sm leading-snug opacity-75">{project.links.githubNote}</span>}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-shell px-5 sm:px-10">
          <p className="dropcap lede mt-12 max-w-3xl text-soft">{project.summary}</p>

          <div className="mt-10 border-2 border-ink bg-paper p-3 sm:p-4">
            <ProjectVisual project={project} large />
          </div>

          {project.detailsPending ? (
            <div className="mt-4">
              <CaseSection index="—" title="Full case study, in preparation" accent={w.num}>
                <div className={`border-2 border-dashed border-ink/40 p-7 ${w.tint}`} role="note">
                  <p className="leading-relaxed text-soft">{project.statusNote}</p>
                  <p className="mt-3 leading-relaxed text-soft">
                    When the owner supplies the confirmed scope, this page will document the problem, the approach, the implemented functionality, the technology and the honest outcomes — in the same format as the PRINTORA case study. Nothing is claimed here in the meantime.
                  </p>
                </div>
              </CaseSection>
            </div>
          ) : (
            <div className="mt-4">
              {(() => {
                let n = 0
                const num = () => String(++n).padStart(2, '0')
                return (
                  <>
                    <CaseSection index={num()} title="The problem" accent={w.num} narrow>
                      <p className="lede text-soft">{project.challenge}</p>
                    </CaseSection>

                    {project.users && (
                      <CaseSection index={num()} title="Who it’s for" accent={w.num} narrow>
                        <p className="lede text-soft">{project.users}</p>
                      </CaseSection>
                    )}

                    <CaseSection index={num()} title="The approach" accent={w.num} narrow>
                      <p className="lede text-soft">{project.approach}</p>
                    </CaseSection>

                    <CaseSection index={num()} title="What was built" accent={w.num}>
                      <ul className="grid gap-x-10 gap-y-5 md:grid-cols-2">
                        {project.features.map((f, i) => (
                          <li key={f} className="flex gap-4 leading-relaxed text-soft">
                            <span className={`font-display text-sm font-bold ${w.num}`} aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </CaseSection>

                    {project.challenges && project.challenges.length > 0 && (
                      <CaseSection index={num()} title="Challenges & solutions" accent={w.num}>
                        <div className="grid gap-6 md:grid-cols-3">
                          {project.challenges.map((ch) => (
                            <div key={ch.title} className={`border-2 border-ink p-6 ${w.tint}`}>
                              <h3 className="font-display text-lg font-semibold leading-snug">{ch.title}</h3>
                              <p className="mt-2.5 text-sm leading-relaxed text-soft">{ch.text}</p>
                            </div>
                          ))}
                        </div>
                      </CaseSection>
                    )}

                    <CaseSection index={num()} title="Verified outcomes" accent={w.num}>
                      <div className={`border-2 border-ink p-7 ${w.tint}`}>
                        <ul className="space-y-3.5">
                          {project.outcomes.map((o) => (
                            <li key={o} className="flex gap-3.5 leading-relaxed text-soft">
                              <span aria-hidden="true" className={`font-bold ${w.num}`}>✓</span><span>{o}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="mt-6 border-t border-ink/15 pt-4 text-sm leading-relaxed text-muted">{project.statusNote}</p>
                      </div>
                    </CaseSection>

                    {project.stack.length > 0 && (
                      <CaseSection index={num()} title="Technology" accent={w.num}>
                        <ul className="flex flex-wrap gap-2.5">
                          {project.stack.map((s) => (
                            <li key={s} className="border-2 border-ink bg-white px-4 py-2 font-mono text-xs uppercase tracking-wide transition-colors hover:bg-lime">{s}</li>
                          ))}
                        </ul>
                      </CaseSection>
                    )}
                  </>
                )
              })()}
            </div>
          )}
        </div>
      </article>

      {/* Next projects — in their own colour worlds */}
      <nav aria-label="More projects" className="grid border-t-2 border-ink md:grid-cols-2">
        {others.map((p) => {
          const ow = WORLDS[p.slug]
          return (
            <Link key={p.slug} href={`/projects/${p.slug}`} className={`group block px-6 py-12 sm:px-10 ${ow.band} border-ink max-md:border-b-2 md:odd:border-r-2`}>
              <p className={`folio ${ow.folio}`}>Next case study — {p.index} · {p.status}</p>
              <p className="display-2 mt-3">{p.title} <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1.5">→</span></p>
              <p className={`mt-1.5 font-display text-lg font-medium ${ow.sub}`}>{p.subtitle}</p>
            </Link>
          )
        })}
      </nav>

      <ContactSection />
    </>
  )
}
