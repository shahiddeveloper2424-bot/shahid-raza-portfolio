import React, { useEffect } from 'react'
import { Link } from '../lib/router.jsx'
import ProjectVisual from '../components/ProjectVisual.jsx'
import { projects } from '../data/projects.js'
import { useReveal } from '../hooks/useReveal.js'

const META_DESC = {
  printora: 'PRINTORA case study — a print-on-demand e-commerce platform with a customer design studio, multi-currency storefront and full admin panel, built with the MERN stack by Shahid Raza.',
  educore: 'EduCore case study — a school management system in development by Shahid Raza. Honest project status; full details are published as they are verified.',
  'pdf-toolkit-pro': 'PDF Toolkit Pro case study — eight client-side PDF tools (merge, convert, split, extract, rotate, reorder, watermark) built with React and pdf-lib by Shahid Raza. Files never leave the device.',
}

function setMetaDescription(text) {
  let el = document.querySelector('meta[name="description"]')
  if (!el) { el = document.createElement('meta'); el.setAttribute('name', 'description'); document.head.appendChild(el) }
  el.setAttribute('content', text)
}

function SectionNum({ n }) {
  return <span className="folio text-cyan">{String(n).padStart(2, '0')}</span>
}

export default function ProjectCase({ slug }) {
  useReveal()
  const project = projects.find((p) => p.slug === slug) || projects[0]
  const next = projects[(projects.indexOf(project) + 1) % projects.length]

  useEffect(() => {
    document.title = `${project.title} — Case Study · Shahid Raza`
    setMetaDescription(META_DESC[project.slug] || META_DESC.printora)
    return () => {
      document.title = 'Shahid Raza — Software Developer | Web Applications & MERN Stack'
      setMetaDescription('Shahid Raza is a software developer building business websites, e-commerce stores, custom web applications and admin systems with React, JavaScript, Node.js and MongoDB.')
    }
  }, [project])

  // Build the section list dynamically so numbering always matches content.
  const sections = [{ id: 'problem', title: 'The problem' }]
  if (!project.detailsPending) {
    if (project.users) sections.push({ id: 'audience', title: "Who it's for" })
    sections.push({ id: 'features', title: 'Key features' })
    if (project.challenges) sections.push({ id: 'challenges', title: 'Challenges & solutions' })
    sections.push({ id: 'outcomes', title: 'Outcomes' }, { id: 'technology', title: 'Technology' })
  }
  const num = (id) => sections.findIndex((s) => s.id === id) + 1
  const live = project.status.startsWith('Live')

  return (
    <article>
      {/* ——— Case-study hero ——— */}
      <header className="border-b border-line bg-surface">
        <div className="mx-auto max-w-shell px-5 pb-14 pt-10 sm:px-10 lg:pb-16">
          <Link href="/#work" className="arrow-link font-display text-sm font-semibold text-soft hover:text-cyan"><span aria-hidden="true">←</span> All projects</Link>
          <div className="mt-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="folio flex flex-wrap items-center gap-3 text-cyan">
                <span>Case study</span>
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span className="text-soft">{project.subtitle}</span>
              </p>
              <h1 className="display-1 mt-5 text-ink">{project.title}</h1>
              <p className="mt-3 font-display text-2xl font-medium text-gradient">{project.subtitle}</p>
              <p className="lede mt-6 max-w-xl text-soft">{project.summary}</p>
              {(project.role || project.year) && (
                <p className="folio mt-7 text-muted">
                  {project.role && <>Role — <span className="text-soft">{project.role}</span></>}
                  {project.role && project.year && <span aria-hidden="true" className="mx-3 text-line">|</span>}
                  {project.year && <>Year — <span className="text-soft">{project.year}</span></>}
                </p>
              )}
              <div className="mt-8 flex flex-wrap gap-4">
                {project.links.live && (
                  <a href={project.links.live} target="_blank" rel="noreferrer" className="btn-primary rounded-lg px-6 py-3 font-display text-sm font-semibold text-white">{project.links.liveLabel || 'View live project'} ↗</a>
                )}
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noreferrer" className="rounded-lg border border-line px-6 py-3 font-display text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-cyan">View source code ↗</a>
                )}
              </div>
            </div>
            <div className="visual-zoom">
              <div className="visual-inner"><ProjectVisual slug={project.slug} /></div>
            </div>
          </div>
          <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
            {[
              ['Status', project.status],
              ['Project type', project.subtitle],
              ['Technology', project.stack.length ? project.stack.slice(0, 4).join(' · ') : 'To be confirmed'],
              ['Live demo', project.links.live ? 'Available — link above' : 'Not published yet'],
            ].map(([k, v]) => (
              <div key={k} className="bg-card p-5">
                <dt className="folio text-muted">{k}</dt>
                <dd className="mt-2 font-display font-semibold text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      {/* ——— Body with meta rail ——— */}
      <div className="bg-navy">
        <div className="mx-auto grid max-w-shell gap-12 px-5 py-16 sm:px-10 lg:grid-cols-[13rem_1fr] lg:py-20">
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="folio text-muted">On this page</p>
              <ol className="mt-5 space-y-3.5">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="group flex items-baseline gap-3 text-soft hover:text-ink">
                      <span className="folio text-cyan">{String(i + 1).padStart(2, '0')}</span>
                      <span className="font-medium">{s.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
              <div className="mt-9 rounded-2xl border border-line bg-card p-5">
                <p className="folio text-muted">Status</p>
                <p className="mt-2 flex items-center gap-2 font-display font-semibold text-ink">
                  <span aria-hidden="true" className={`h-2 w-2 rounded-full ${live ? 'bg-cyan' : 'bg-muted'}`} />
                  {project.status}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-soft">{project.statusNote || 'Stated exactly as it is — no project on this site is presented as more finished than it is.'}</p>
              </div>
            </div>
          </aside>

          <div className="max-w-3xl">
            <section id="problem" className="reveal scroll-mt-28">
              <div className="flex items-baseline gap-4">
                <SectionNum n={num('problem')} />
                <h2 className="display-2 text-ink">The problem</h2>
              </div>
              <p className="dropcap lede mt-6 text-soft">{project.challenge || project.statusNote}</p>
            </section>

            {project.detailsPending ? (
              <section className="reveal mt-14 rounded-3xl border border-line bg-card p-7 sm:p-9">
                <p className="folio text-cyan">Project details — being prepared</p>
                <h3 className="display-2 mt-4 text-ink">This project is in development.</h3>
                <p className="lede mt-4 text-soft">
                  Its full case study — verified features, technology and outcomes — will be published here as the work is completed and can be described accurately. No feature list is published before it exists, and this project is never presented as production-ready before it is.
                </p>
                <p className="mt-5 leading-relaxed text-soft">
                  Current confirmed status: <strong className="font-semibold text-ink">{project.status}</strong>. If you need a system like this for your school or organisation, you are welcome to discuss it — I will tell you honestly what exists today and what building yours would involve.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/#contact" className="btn-primary rounded-lg px-6 py-3 font-display text-sm font-semibold text-white">Discuss a similar project</Link>
                  <Link href="/#work" className="rounded-lg border border-line px-6 py-3 font-display text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-cyan">See live projects instead</Link>
                </div>
              </section>
            ) : (
              <>
                {project.users && (
                  <section id="audience" className="reveal mt-16 scroll-mt-28">
                    <div className="flex items-baseline gap-4">
                      <SectionNum n={num('audience')} />
                      <h2 className="display-2 text-ink">Who it&apos;s for</h2>
                    </div>
                    <p className="lede mt-6 text-soft">{project.users}</p>
                  </section>
                )}

                <section id="features" className="reveal mt-16 scroll-mt-28">
                  <div className="flex items-baseline gap-4">
                    <SectionNum n={num('features')} />
                    <h2 className="display-2 text-ink">Key features</h2>
                  </div>
                  <ul className="mt-7 grid gap-3.5 sm:grid-cols-2">
                    {project.features.map((h) => (
                      <li key={h} className="flex gap-3 rounded-2xl border border-line bg-card p-5">
                        <span aria-hidden="true" className="mt-0.5 font-bold text-accent">✓</span>
                        <span className="leading-relaxed text-soft">{h}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {project.challenges && (
                  <section id="challenges" className="reveal mt-16 scroll-mt-28">
                    <div className="flex items-baseline gap-4">
                      <SectionNum n={num('challenges')} />
                      <h2 className="display-2 text-ink">Challenges &amp; solutions</h2>
                    </div>
                    <div className="mt-7 space-y-5">
                      {project.challenges.map((c) => (
                        <article key={c.title} className="rounded-2xl border border-line bg-card p-6 sm:p-7">
                          <h3 className="font-display text-xl font-semibold text-ink">{c.title}</h3>
                          <p className="mt-3 leading-relaxed text-soft">{c.text}</p>
                        </article>
                      ))}
                    </div>
                  </section>
                )}

                <section id="outcomes" className="reveal mt-16 scroll-mt-28">
                  <div className="flex items-baseline gap-4">
                    <SectionNum n={num('outcomes')} />
                    <h2 className="display-2 text-ink">Outcomes</h2>
                  </div>
                  <div className="mt-7 rounded-3xl border border-line bg-surface p-7 sm:p-8">
                    <ul className="space-y-4">
                      {project.outcomes.map((o) => (
                        <li key={o} className="flex gap-3.5 leading-relaxed text-soft">
                          <span aria-hidden="true" className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-[11px] font-bold text-cyan">✓</span>
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                <section id="technology" className="reveal mt-16 scroll-mt-28">
                  <div className="flex items-baseline gap-4">
                    <SectionNum n={num('technology')} />
                    <h2 className="display-2 text-ink">Technology</h2>
                  </div>
                  {project.stack.length === 0 && (
                    <p className="mt-6 leading-relaxed text-soft">The technology stack for this project is being confirmed by the owner and will be listed here exactly — it is not guessed from a screenshot.</p>
                  )}
                  <ul className="mt-7 flex flex-wrap gap-2">
                    {project.stack.map((t) => (
                      <li key={t} className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-soft">{t}</li>
                    ))}
                  </ul>
                  {!project.links.github && project.links.githubNote && (
                    <p className="mt-6 leading-relaxed text-soft">Source code: {project.links.githubNote}</p>
                  )}
                </section>
              </>
            )}

            {/* CTA band */}
            <section className="reveal mt-16 rounded-3xl border border-line bg-card p-8 text-center sm:p-10">
              <h2 className="display-2 text-ink">Have a similar project in mind?</h2>
              <p className="mx-auto mt-3 max-w-lg leading-relaxed text-soft">Tell me what your business needs — I will reply with an honest scope, approach and next steps.</p>
              <div className="mt-7 flex flex-wrap justify-center gap-4">
                <Link href="/#contact" className="btn-primary rounded-lg px-7 py-3.5 font-display font-semibold text-white">Start a project →</Link>
                <Link href="/#services" className="rounded-lg border border-line px-7 py-3.5 font-display font-semibold text-ink transition-colors hover:border-accent hover:text-cyan">View services</Link>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* ——— Next project ——— */}
      <nav className="border-t border-line bg-surface" aria-label="Next project">
        <div className="mx-auto max-w-shell px-5 py-14 sm:px-10">
          <p className="folio text-muted">Next project</p>
          <Link href={`/projects/${next.slug}`} className="group mt-5 flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-line bg-card p-7 transition-colors hover:border-accent/60 sm:p-9">
            <span>
              <span className="block font-display text-3xl font-bold text-ink sm:text-4xl">{next.title}</span>
              <span className="mt-2 block text-lg text-soft">{next.subtitle}</span>
            </span>
            <span aria-hidden="true" className="font-display text-4xl font-bold text-accent transition-transform group-hover:translate-x-2">→</span>
          </Link>
        </div>
      </nav>
    </article>
  )
}
