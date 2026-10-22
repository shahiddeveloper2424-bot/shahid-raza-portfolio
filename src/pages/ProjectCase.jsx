import React from 'react'
import { Link, useDocumentTitle } from '../lib/router.jsx'
import { getProject, projects } from '../data/projects.js'
import ProjectVisual from '../components/ProjectVisual.jsx'
import { ContactSection } from './Home.jsx'

function CaseSection({ index, title, children, narrow = false }) {
  return (
    <section className="reveal grid gap-6 border-t border-ink/15 py-12 md:grid-cols-12 md:gap-10">
      <div className="md:col-span-4">
        <p className="folio text-clay">{index}</p>
        <h2 className="display-2 mt-3">{title}</h2>
      </div>
      <div className={`md:col-span-8 ${narrow ? 'max-w-2xl' : ''}`}>{children}</div>
    </section>
  )
}

export default function ProjectCase({ slug }) {
  const project = getProject(slug)
  useDocumentTitle(project ? `${project.title} — ${project.subtitle} | Shahid Raza` : 'Project not found | Shahid Raza')
  if (!project) return null

  const others = projects.filter((p) => p.slug !== slug)

  return (
    <>
      <article className="border-b border-ink/15">
        <div className="mx-auto max-w-shell px-5 pt-12 sm:px-10">
          <Link href="/#work" className="arrow-link folio text-clay"><span className="arr inline-block rotate-180" aria-hidden="true">→</span> All work</Link>

          {/* Case hero */}
          <div className="mt-12 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="folio text-muted">Case study {project.index} — {project.status}</p>
              <h1 className="display-hero mt-5">{project.title}</h1>
              <p className="mt-4 font-display text-2xl italic text-soft sm:text-3xl">{project.subtitle}</p>
            </div>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-7 self-end lg:col-span-4">
              <div>
                <dt className="folio text-muted">Role</dt>
                <dd className="mt-1.5 font-display text-lg leading-snug">{project.role || <span className="text-base text-muted">To be added by owner</span>}</dd>
              </div>
              <div>
                <dt className="folio text-muted">Year</dt>
                <dd className="mt-1.5 font-display text-lg leading-snug">{project.year || <span className="text-base text-muted">To be added</span>}</dd>
              </div>
              <div>
                <dt className="folio text-muted">Status</dt>
                <dd className="mt-1.5 font-display text-lg leading-snug">{project.status}</dd>
              </div>
              <div>
                <dt className="folio text-muted">Links</dt>
                <dd className="mt-1.5 flex flex-col items-start gap-1.5">
                  {project.links.live
                    ? <Link href={project.links.live} className="arrow-link font-medium text-clay">{project.links.liveLabel} <span className="arr" aria-hidden="true">↗</span></Link>
                    : <span className="text-muted">No demo link yet</span>}
                  {project.links.github
                    ? <Link href={project.links.github} className="arrow-link font-medium text-clay">Source on GitHub <span className="arr" aria-hidden="true">↗</span></Link>
                    : <span className="text-sm leading-snug text-muted">{project.links.githubNote}</span>}
                </dd>
              </div>
            </dl>
          </div>

          <p className="dropcap lede mt-12 max-w-3xl text-soft">{project.summary}</p>

          <div className="mt-10">
            <ProjectVisual project={project} large />
          </div>

          {project.detailsPending ? (
            <div className="mt-4">
              <CaseSection index="—" title="Full case study, in preparation">
                <div className="border border-dashed border-ink/30 bg-parchment/60 p-7" role="note">
                  <p className="leading-relaxed text-soft">{project.statusNote}</p>
                  <p className="mt-3 leading-relaxed text-soft">
                    When the owner supplies the confirmed scope, this page will document the problem, the approach, the implemented functionality, the technology and the honest outcomes — in the same format as the PRINTORA case study. Nothing is claimed here in the meantime.
                  </p>
                </div>
              </CaseSection>
            </div>
          ) : (
            <div className="mt-4">
              <CaseSection index="01" title="The problem" narrow>
                <p className="lede text-soft">{project.challenge}</p>
              </CaseSection>

              <CaseSection index="02" title="The approach" narrow>
                <p className="lede text-soft">{project.approach}</p>
              </CaseSection>

              <CaseSection index="03" title="What was built">
                <ul className="grid gap-x-10 gap-y-5 md:grid-cols-2">
                  {project.features.map((f, i) => (
                    <li key={f} className="flex gap-4 leading-relaxed text-soft">
                      <span className="font-mono text-xs text-clay" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </CaseSection>

              <CaseSection index="04" title="Verified outcomes">
                <div className="border border-ink/20 bg-parchment/70 p-7">
                  <ul className="space-y-3.5">
                    {project.outcomes.map((o) => (
                      <li key={o} className="flex gap-3.5 leading-relaxed text-soft">
                        <span aria-hidden="true" className="mt-0.5 text-clay">✓</span><span>{o}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 border-t border-ink/15 pt-4 text-sm leading-relaxed text-muted">{project.statusNote}</p>
                </div>
              </CaseSection>

              {project.stack.length > 0 && (
                <CaseSection index="05" title="Technology">
                  <ul className="flex flex-wrap gap-2.5">
                    {project.stack.map((s) => (
                      <li key={s} className="border border-ink/20 bg-parchment px-4 py-2 font-mono text-xs uppercase tracking-wide">{s}</li>
                    ))}
                  </ul>
                </CaseSection>
              )}
            </div>
          )}
        </div>
      </article>

      {/* Next projects */}
      <nav aria-label="More projects" className="border-b border-ink/15 bg-parchment/50">
        <div className="mx-auto grid max-w-shell gap-10 px-5 py-14 sm:px-10 md:grid-cols-2">
          {others.map((p) => (
            <Link key={p.slug} href={`/projects/${p.slug}`} className="group block">
              <p className="folio text-muted">Next case study — {p.index} · {p.status}</p>
              <p className="display-2 mt-3 transition-colors group-hover:text-clay">{p.title} <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1.5">→</span></p>
              <p className="mt-1.5 font-display text-lg italic text-soft">{p.subtitle}</p>
            </Link>
          ))}
        </div>
      </nav>

      <ContactSection />
    </>
  )
}
