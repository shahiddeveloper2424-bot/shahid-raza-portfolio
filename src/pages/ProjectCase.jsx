import React from 'react'
import { Link, useDocumentTitle } from '../lib/router.jsx'
import { getProject, projects } from '../data/projects.js'
import ProjectVisual from '../components/ProjectVisual.jsx'
import { ContactSection } from './Home.jsx'

function MetaItem({ label, value }) {
  return (
    <div>
      <dt className="font-mono text-[11px] uppercase tracking-widest2 text-muted">{label}</dt>
      <dd className="mt-1.5 text-soft">{value || <span className="text-muted">To be added by owner</span>}</dd>
    </div>
  )
}

export default function ProjectCase({ slug }) {
  const project = getProject(slug)
  useDocumentTitle(project ? `${project.title} — ${project.subtitle} | Shahid Raza` : 'Project not found | Shahid Raza')
  if (!project) return null

  const others = projects.filter((p) => p.slug !== slug)

  return (
    <>
      <article className="border-b border-line">
        <div className="mx-auto max-w-shell px-5 py-14 sm:px-8">
          <Link href="/#work" className="link-line font-mono text-xs uppercase tracking-widest2 text-clay">← All work</Link>
          <p className="mt-10 font-mono text-xs uppercase tracking-widest2 text-muted">Case study {project.index} — {project.status}</p>
          <h1 className="mt-4 font-display text-5xl font-medium leading-[1.02] tracking-tight sm:text-6xl">{project.title}</h1>
          <p className="mt-3 font-display text-2xl italic text-soft">{project.subtitle}</p>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-soft">{project.summary}</p>

          <div className="mt-10"><ProjectVisual project={project} large /></div>

          <dl className="mt-10 grid grid-cols-2 gap-6 border-y border-line py-7 lg:grid-cols-4">
            <MetaItem label="Role" value={project.role} />
            <MetaItem label="Year" value={project.year} />
            <MetaItem label="Status" value={project.status} />
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-widest2 text-muted">Links</dt>
              <dd className="mt-1.5 flex flex-col gap-1">
                {project.links.live
                  ? <Link href={project.links.live} className="link-line w-fit text-clay">{project.links.liveLabel} ↗</Link>
                  : <span className="text-muted">No demo link yet</span>}
                {project.links.github
                  ? <Link href={project.links.github} className="link-line w-fit text-clay">Source on GitHub ↗</Link>
                  : <span className="text-sm text-muted">{project.links.githubNote}</span>}
              </dd>
            </div>
          </dl>

          {project.detailsPending ? (
            <div className="mt-12 border border-dashed border-line bg-parchment/50 p-7" role="note">
              <h2 className="font-display text-2xl font-medium">Full case study — in preparation</h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-soft">{project.statusNote}</p>
              <p className="mt-3 max-w-2xl leading-relaxed text-soft">When the owner supplies the confirmed scope, this page will document the challenge, the approach, the verified feature set and the outcomes — in the same format as the PRINTORA case study. Nothing is claimed here in the meantime.</p>
            </div>
          ) : (
            <>
              <div className="mt-12 grid gap-10 md:grid-cols-2">
                <div>
                  <h2 className="font-mono text-xs uppercase tracking-widest2 text-clay">The challenge</h2>
                  <p className="mt-4 leading-relaxed text-soft">{project.challenge}</p>
                </div>
                <div>
                  <h2 className="font-mono text-xs uppercase tracking-widest2 text-clay">The approach</h2>
                  <p className="mt-4 leading-relaxed text-soft">{project.approach}</p>
                </div>
              </div>

              <div className="mt-12">
                <h2 className="font-mono text-xs uppercase tracking-widest2 text-clay">What was built</h2>
                <ul className="mt-5 grid gap-x-10 gap-y-4 md:grid-cols-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex gap-3 leading-relaxed text-soft"><span aria-hidden="true" className="mt-1 text-clay">—</span><span>{f}</span></li>
                  ))}
                </ul>
              </div>

              {project.outcomes.length > 0 && (
                <div className="mt-12 border border-line bg-parchment/60 p-7">
                  <h2 className="font-mono text-xs uppercase tracking-widest2 text-clay">Verified outcomes</h2>
                  <ul className="mt-4 space-y-2.5 leading-relaxed text-soft">
                    {project.outcomes.map((o) => <li key={o}>• {o}</li>)}
                  </ul>
                  <p className="mt-4 text-sm text-muted">{project.statusNote}</p>
                </div>
              )}

              {project.stack.length > 0 && (
                <div className="mt-12">
                  <h2 className="font-mono text-xs uppercase tracking-widest2 text-clay">Technology</h2>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((s) => <li key={s} className="border border-line bg-parchment px-3 py-1.5 font-mono text-xs uppercase tracking-wide">{s}</li>)}
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
      </article>

      <nav aria-label="More projects" className="border-b border-line">
        <div className="mx-auto grid max-w-shell gap-px px-5 py-12 sm:px-8 md:grid-cols-2">
          {others.map((p) => (
            <Link key={p.slug} href={`/projects/${p.slug}`} className="group block pr-6">
              <p className="font-mono text-[11px] uppercase tracking-widest2 text-muted">Next case study — {p.index}</p>
              <p className="mt-2 font-display text-3xl font-medium group-hover:text-clay">{p.title} →</p>
              <p className="mt-1 italic text-soft">{p.subtitle}</p>
            </Link>
          ))}
        </div>
      </nav>

      <ContactSection />
    </>
  )
}
