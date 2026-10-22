import React, { useState } from 'react'
import { Link } from '../lib/router.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ProjectVisual from '../components/ProjectVisual.jsx'
import Portrait from '../components/Portrait.jsx'
import { site } from '../data/site.js'
import { mailtoHref, whatsappHref, whatsappDisplay } from '../lib/contact.js'
import { MailIcon, WhatsAppIcon } from '../components/ContactIcons.jsx'
import { projects } from '../data/projects.js'
import { skillGroups, services, process } from '../data/skills.js'
import { useReveal } from '../hooks/useReveal.js'

const TECH_CHIPS = ['React', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS']

const projectTypes = [
  'Business website',
  'E-commerce website',
  'Custom management system (school / business)',
  'Admin dashboard or internal tool',
  'Web application or online tool',
  'Redesign or fix an existing website',
  'Something else',
]

const budgetRanges = [
  'Under PKR 50,000',
  'PKR 50,000 – 150,000',
  'PKR 150,000 – 300,000',
  'Above PKR 300,000',
]

const TRUST = [
  { title: 'Live, verifiable work', text: 'Real projects with live deployments and public source code are linked from this page wherever they are published — open them and judge the work yourself.', icon: 'M5 13l4 4L19 7' },
  { title: 'Honest scope & status', text: 'Every project page states what is finished, what is in development, and what is still planned. No inflated claims.', icon: 'M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3z' },
  { title: 'Real engineering evidence', text: 'PDF Toolkit Pro ships with 53 passing engine tests; PRINTORA includes a full admin panel, design studio and multi-currency checkout.', icon: 'M8 6l-6 6 6 6M16 6l6 6-6 6' },
  { title: 'Built for your business', text: 'Software shaped around how your business actually runs — customers, orders, students, documents — not generic templates.', icon: 'M4 19V5a2 2 0 012-2h13v16H6a2 2 0 00-2 2zm0 0a2 2 0 002 2h13' },
]

function Hero() {
  return (
    <section className="dotgrid relative overflow-hidden bg-navy">
      <div aria-hidden="true" className="glow pointer-events-none absolute -left-40 top-10 h-[560px] w-[560px]" />
      <div className="relative mx-auto grid max-w-shell gap-12 px-5 pb-20 pt-12 sm:px-10 lg:grid-cols-12 lg:gap-10 lg:pb-28 lg:pt-16">
        {/* Portrait — left (spec order); second on mobile after the intro */}
        <div className="order-2 lg:order-1 lg:col-span-5">
          <div className="reveal mx-auto max-w-[380px] lg:mx-0">
            <Portrait />
          </div>
          <div className="reveal mx-auto mt-5 max-w-[380px] rounded-2xl border border-line bg-card p-5 lg:mx-0">
            <p className="folio text-cyan">Featured project</p>
            <p className="mt-2.5 font-display text-lg font-semibold leading-snug text-ink">PRINTORA — print-on-demand e-commerce platform.</p>
            <div className="mt-3.5 flex flex-wrap items-center gap-x-6 gap-y-2.5">
              <Link href="/projects/printora" className="arrow-link font-display font-semibold text-accent hover:text-cyan">Case study <span className="arr" aria-hidden="true">→</span></Link>
              <span className="rounded-full border border-line px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest2 text-soft">Live Demo Coming Soon</span>
            </div>
          </div>
        </div>

        {/* Introduction — right */}
        <div className="order-1 lg:order-2 lg:col-span-7 lg:pl-4">
          <p className="reveal folio flex items-start gap-3 leading-relaxed text-cyan">
            <span aria-hidden="true" className="mt-[3px] h-2.5 w-2.5 shrink-0 rounded-[3px] bg-accent" />
            <span>{site.name} — Software Developer · Web Application Developer · MERN Stack Developer</span>
          </p>
          <h1 className="reveal display-hero mt-7 text-ink">
            Turning business ideas into <span className="text-gradient">powerful digital products.</span>
          </h1>
          <p className="reveal lede mt-7 max-w-xl text-soft">
            I build responsive websites, e-commerce experiences, custom business applications, and database-driven web solutions focused on practical business needs.
          </p>
          <div className="reveal mt-9 flex flex-wrap gap-4">
            <Link href="/#contact" className="btn-primary rounded-lg px-7 py-3.5 font-display font-semibold text-white">Start a project →</Link>
            <Link href="/#work" className="rounded-lg border border-line px-7 py-3.5 font-display font-semibold text-ink transition-colors hover:border-accent hover:text-cyan">Explore my work</Link>
            {whatsappHref() && (
              <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 rounded-lg border border-line px-7 py-3.5 font-display font-semibold text-ink transition-colors hover:border-accent hover:text-cyan">
                <WhatsAppIcon className="h-5 w-5 text-cyan" /> WhatsApp
              </a>
            )}
          </div>
          <ul className="reveal mt-9 flex flex-wrap gap-2" aria-label="Core technologies">
            {TECH_CHIPS.map((t) => (
              <li key={t} className="rounded-full border border-line bg-surface px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-widest2 text-soft">{t}</li>
            ))}
          </ul>
          <dl className="reveal mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-line pt-6">
            <div>
              <dt className="folio text-muted">Focus</dt>
              <dd className="mt-2 font-display font-semibold leading-snug text-ink">Business · Commerce · Education</dd>
            </div>
            <div>
              <dt className="folio text-muted">Live work</dt>
              <dd className="mt-2 font-display font-semibold leading-snug text-ink">2 projects live on Vercel</dd>
            </div>
            <div>
              <dt className="folio text-muted">Based</dt>
              <dd className="mt-2 font-display font-semibold leading-snug text-muted">To be added</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}

function Marquee() {
  const items = ['Website Development', 'E-Commerce', 'Custom Business Software', 'Web Applications', 'Admin Dashboards', 'Database-Driven Apps', 'Design Studio Tools', 'Multi-Currency Stores']
  const row = (ariaHidden) => (
    <div aria-hidden={ariaHidden || undefined} className="flex shrink-0 items-center">
      {items.map((t) => (
        <span key={t} className="flex items-center font-display text-sm font-semibold uppercase tracking-[0.14em] text-soft">
          <span className="px-6">{t}</span>
          <span aria-hidden="true" className="text-cyan">✦</span>
        </span>
      ))}
    </div>
  )
  return (
    <div className="marquee overflow-hidden border-y border-line bg-surface py-4" role="presentation">
      <div className="marquee-track">{row(false)}{row(true)}</div>
    </div>
  )
}

function Trust() {
  return (
    <section className="bg-navy" aria-label="Why work with me">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-10 sm:py-24">
        <SectionHeading index="01" eyebrow="Why work with me" title={<>Proof, <span className="text-gradient">not promises.</span></>} intro="Everything on this page can be checked — live deployments, public source code, and honest project statuses." />
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {TRUST.map((c) => (
            <article key={c.title} className="reveal lift rounded-2xl border border-line bg-card p-6 hover:border-accent/60">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={c.icon} /></svg>
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">{c.title}</h3>
              <p className="mt-2.5 leading-relaxed text-soft">{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-surface">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-10 sm:py-24">
        <SectionHeading index="02" eyebrow="About" title="A developer who builds for the business, not just the browser." />
        <div className="grid items-start gap-10 lg:grid-cols-[auto_1fr] lg:gap-14">
          <div className="reveal mx-auto w-full max-w-[240px] lg:mx-0">
            <Portrait />
          </div>
          <div className="reveal max-w-3xl">
            <p className="lede text-soft">
              I&apos;m <strong className="font-semibold text-ink">Shahid Raza</strong>, a software developer specialising in web applications built with React, JavaScript, Node.js, Express, MongoDB and Tailwind CSS. My work focuses on practical software for real operations: an e-commerce platform with a customer design studio and a full admin panel, and a browser-based PDF toolkit whose files never leave the user&apos;s device.
            </p>
            <p className="lede mt-5 text-soft">
              I work in verified stages — scope first, then build, test and deploy — and I present my work honestly: live projects are linked so you can try them, and anything still in development is labelled as such.
            </p>
            {site.education?.[0] && (
              <div className="mt-8 rounded-2xl border border-line bg-card p-6">
                <p className="folio text-cyan">Education</p>
                <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-ink">{site.education[0].degree}</h3>
                <p className="mt-1.5 leading-relaxed text-soft">{site.education[0].institution}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm font-medium text-soft">Session {site.education[0].session}</span>
                  <span className="rounded-full border border-accent/50 bg-surface px-3.5 py-1.5 text-sm font-medium text-cyan">{site.education[0].semester} — {site.education[0].status}</span>
                </div>
              </div>
            )}
            <div className="mt-6 rounded-2xl border border-line bg-card p-6">
              <p className="folio text-cyan">Practical development experience</p>
              <p className="mt-3 leading-relaxed text-soft">{site.experienceIntro}</p>
              <ul className="mt-5 divide-y divide-line">
                {site.experienceProjects.map((item) => {
                  const p = projects.find((x) => x.slug === item.slug)
                  if (!p) return null
                  return (
                    <li key={item.slug} className="flex flex-wrap items-baseline gap-x-4 gap-y-1 py-3.5">
                      <Link href={`/projects/${p.slug}`} className="font-display font-semibold text-ink transition-colors hover:text-cyan">{p.title}</Link>
                      <span className="font-mono text-[10px] uppercase tracking-widest2 text-muted">{p.status}</span>
                      <span className="w-full text-sm leading-relaxed text-soft">{item.focus}</span>
                    </li>
                  )
                })}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-muted">Independent project work as a BSCS student — no formal employment is claimed. Each project links to its case study with an honest status.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 bg-navy">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-10 sm:py-24">
        <SectionHeading index="03" eyebrow="Technical skills" title="The stack behind the work." intro="Grounded in the projects on this page and my degree coursework — grouped the way the work actually divides. No percentages, no inflated ratings." />
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((g, i) => (
            <article key={g.title} className="reveal lift rounded-2xl border border-line bg-card p-7 hover:border-accent/50">
              <div className="flex items-baseline gap-4">
                <span className="folio text-cyan">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-display text-xl font-semibold text-ink">{g.title}</h3>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <li key={s} className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm font-medium text-soft transition-colors hover:border-cyan/60 hover:text-ink">{s}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectPanel({ project, flip }) {
  const live = ['Live preview', 'Live', 'Live Project'].includes(project.status)
  return (
    <article className="reveal overflow-hidden rounded-3xl border border-line bg-card">
      <div className={`grid items-center gap-8 p-6 sm:p-9 lg:grid-cols-2 lg:gap-12 lg:p-11 ${flip ? '' : ''}`}>
        <div className={`visual-zoom ${flip ? 'lg:order-2' : ''}`}>
          <div className="visual-inner"><ProjectVisual slug={project.slug} /></div>
        </div>
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest2 ${live ? 'border-accent/50 text-cyan' : 'border-line text-soft'}`}>
              <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${live ? 'bg-cyan' : 'bg-muted'}`} />
              {project.status}
            </span>
            {project.edition && (
              <span className="inline-flex items-center rounded-full border border-cyan/40 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest2 text-cyan">{project.edition}</span>
            )}
            <span className="folio text-muted">{project.role || project.subtitle}</span>
          </div>
          <h3 className="display-2 mt-5 text-ink">{project.title}</h3>
          <p className="mt-2 font-display text-lg font-medium text-cyan">{project.subtitle}</p>
          <p className="mt-4 leading-relaxed text-soft">{project.summary}</p>
          <ul className="mt-6 space-y-2.5">
            {project.features.slice(0, 3).map((h) => (
              <li key={h} className="flex gap-3 text-soft">
                <span aria-hidden="true" className="mt-0.5 font-bold text-accent">✓</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-widest2 text-muted">{project.stack.length ? project.stack.join(' · ') : 'Technology stack — to be confirmed by the owner'}</p>
          <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3">
            <Link href={`/projects/${project.slug}`} className="arrow-link font-display font-semibold text-accent hover:text-cyan">View case study <span className="arr" aria-hidden="true">→</span></Link>
            {project.demo && (<Link href={`/projects/${project.slug}`} className="arrow-link font-display font-semibold text-accent hover:text-cyan">Try the demo <span className="arr" aria-hidden="true">→</span></Link>)}
            {project.links.live && (
              <a href={project.links.live} target="_blank" rel="noreferrer" className="arrow-link font-display font-semibold text-accent hover:text-cyan">View live project <span className="arr" aria-hidden="true">↗</span></a>
            )}
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noreferrer" className="arrow-link font-display font-semibold text-accent hover:text-cyan">View source code <span className="arr" aria-hidden="true">↗</span></a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

const PROJECT_FILTERS = ['All', ...Array.from(new Set(projects.map((p) => p.category).filter(Boolean)))]

function ProjectFilters({ active, onChange }) {
  return (
    <div className="reveal mb-10 flex flex-wrap items-center gap-2" role="group" aria-label="Filter projects by category">
      {PROJECT_FILTERS.map((f) => (
        <button
          key={f}
          type="button"
          onClick={() => onChange(f)}
          aria-pressed={active === f}
          className={`rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-widest2 transition-colors ${active === f ? 'border-accent bg-accent/15 text-ink' : 'border-line text-soft hover:border-accent/60 hover:text-ink'}`}
        >
          {f}
        </button>
      ))}
      <span className="ml-2 font-mono text-[11px] uppercase tracking-widest2 text-muted">
        {active === 'All' ? `${projects.length} projects` : `${projects.filter((p) => p.category === active).length} of ${projects.length}`}
      </span>
    </div>
  )
}

function Work() {
  const [filter, setFilter] = useState('All')
  return (
    <section id="work" className="scroll-mt-24 bg-surface">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-10 sm:py-24">
        <SectionHeading index="04" eyebrow="Featured projects" title="Real products, honestly presented." intro="Live links where they are published, public source where the code is open, and a clear, honest status on every project." />
        <ProjectFilters active={filter} onChange={setFilter} />
        <div className="space-y-8">
          {projects.map((p, i) => (<div key={p.slug} className={filter === 'All' || p.category === filter ? '' : 'hidden'}><ProjectPanel project={p} flip={i % 2 === 1} /></div>))}
        </div>
        <p className="reveal mx-auto mt-12 max-w-2xl text-center leading-relaxed text-soft">
          This portfolio itself is also my work — designed and built with React, Vite and Tailwind CSS, and deployed on Vercel.
          Its source is public: <a href={site.socials.github} target="_blank" rel="noreferrer" className="link-line font-medium text-cyan">github.com/{site.socials.githubHandle} ↗</a>
        </p>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-navy">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-10 sm:py-24">
        <SectionHeading index="05" eyebrow="Services" title="What I can build for your business." intro="Practical software, scoped honestly before any work begins. Choose a starting point — or describe your project and I will recommend one." />
        <div>
          {services.map((s, i) => (
            <article key={s.title} className="reveal service-row grid gap-5 border-t border-line py-9 lg:grid-cols-[3.5rem_1.2fr_1fr_auto] lg:gap-8">
              <span className="folio pt-1.5 text-cyan">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="display-2 text-ink">{s.title}</h3>
                <p className="mt-3 max-w-md leading-relaxed text-soft">{s.text}</p>
              </div>
              <dl className="space-y-4">
                <div>
                  <dt className="folio text-muted">You receive</dt>
                  <dd className="mt-1.5 leading-relaxed text-soft">{s.deliver}</dd>
                </div>
                <div>
                  <dt className="folio text-muted">Best for</dt>
                  <dd className="mt-1.5 leading-relaxed text-soft">{s.forWho}</dd>
                </div>
              </dl>
              <Link href="/#contact" className="arrow-link self-start font-display font-semibold text-accent hover:text-cyan lg:pt-2">Request a quote <span className="arr" aria-hidden="true">→</span></Link>
            </article>
          ))}
        </div>
        <div className="reveal mt-4 flex flex-col items-start justify-between gap-5 rounded-2xl border border-line bg-card p-7 sm:flex-row sm:items-center">
          <p className="max-w-xl leading-relaxed text-soft"><strong className="font-semibold text-ink">Not sure which fits?</strong> Describe your project in the contact form — I will recommend the right approach and a clear scope before any commitment.</p>
          <Link href="/#contact" className="btn-primary shrink-0 rounded-lg px-6 py-3 font-display text-sm font-semibold text-white">Discuss your project</Link>
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-surface">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-10 sm:py-24">
        <SectionHeading index="06" eyebrow="Working process" title="How your project gets built." intro="A clear sequence from first conversation to handover — scope, cost and delivery expectations are discussed and agreed before work begins." />
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((p, i) => (
            <li key={p.step} className="reveal lift rounded-2xl border border-line bg-card p-7 hover:border-accent/50">
              <p className="font-display text-4xl font-bold text-accent">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="mt-4 font-display text-xl font-semibold text-ink">{p.step}</h3>
              <p className="mt-2.5 leading-relaxed text-soft">{p.text}</p>
            </li>
          ))}
        </ol>
        <ul className="reveal mt-8 flex flex-wrap gap-x-10 gap-y-3" aria-label="Commitments">
          {['Written scope before work begins', 'Cost agreed upfront', 'Progress updates at every stage'].map((t) => (
            <li key={t} className="flex items-center gap-2.5 font-medium text-soft">
              <span aria-hidden="true" className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/20 text-[11px] font-bold text-cyan">✓</span>{t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function ContactCard({ label, children, placeholder }) {
  return (
    <div className={`rounded-2xl p-6 ${placeholder ? 'border border-dashed border-line bg-navy/60' : 'border border-line bg-card'}`}>
      <p className="folio text-muted">{label}</p>
      <div className="mt-2.5">{children}</div>
    </div>
  )
}

function Contact() {
  const emailReady = Boolean(site.contact.email)
  return (
    <section id="contact" className="scroll-mt-24 bg-navy">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-10 sm:py-24">
        <SectionHeading index="07" eyebrow="Contact" title={<>Let&apos;s build something <span className="text-gradient">useful.</span></>} intro="Tell me about your project — what it should do, who it is for, and when you need it. You will get a clear, honest reply about scope, approach and next steps." />
        <div className="grid gap-6 lg:grid-cols-[1fr_1.15fr]">
          <div className="reveal space-y-5">
            {emailReady ? (
              <ContactCard label="Email — direct">
                <a href={`mailto:${site.contact.email}`} className="link-line break-all font-display text-xl font-semibold text-ink">{site.contact.email}</a>
                <div className="mt-4">
                  <a href={mailtoHref()} className="btn-primary inline-flex items-center gap-2.5 rounded-lg px-5 py-3 font-display text-sm font-semibold text-white">
                    <MailIcon className="h-[18px] w-[18px]" /> Email Me
                  </a>
                </div>
              </ContactCard>
            ) : (
              <ContactCard label="Email" placeholder>
                <p className="leading-relaxed text-soft">The owner&apos;s verified email will be published here — it is being added, and this form activates with it.</p>
              </ContactCard>
            )}
            <ContactCard label="GitHub — verified">
              <a href={site.socials.github} target="_blank" rel="noreferrer" className="link-line font-display text-xl font-semibold text-cyan">{site.socials.githubHandle} ↗</a>
              <p className="mt-1.5 text-soft">Source code and project history, publicly verifiable.</p>
            </ContactCard>
            {site.contact.whatsapp ? (
              <ContactCard label="WhatsApp — direct">
                <p className="font-display text-xl font-semibold text-ink">{whatsappDisplay()}</p>
                <div className="mt-4">
                  <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 rounded-lg border border-line px-5 py-3 font-display text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-cyan">
                    <WhatsAppIcon className="h-[18px] w-[18px] text-cyan" /> Contact on WhatsApp
                  </a>
                </div>
              </ContactCard>
            ) : (
              <ContactCard label="WhatsApp" placeholder>
                <p className="leading-relaxed text-soft">A WhatsApp number will be added here by the owner — only a verified number will ever be shown.</p>
              </ContactCard>
            )}
            {site.socials.linkedin ? (
              <ContactCard label="LinkedIn">
                <a href={site.socials.linkedin} target="_blank" rel="noreferrer" className="link-line font-display text-xl font-semibold text-cyan">View profile ↗</a>
              </ContactCard>
            ) : (
              <ContactCard label="LinkedIn" placeholder>
                <p className="leading-relaxed text-soft">LinkedIn profile link to be added by the owner.</p>
              </ContactCard>
            )}
            <div className="rounded-2xl border border-line bg-card p-6">
              <p className="folio text-muted">What happens next</p>
              <p className="mt-2.5 leading-relaxed text-soft">Your message opens in your own email app, addressed to me — nothing is sent silently. We discuss scope first; you approve the plan and cost before any work begins.</p>
              <p className="folio mt-5 text-muted">Location & availability</p>
              <p className="mt-2 text-soft">{site.location || 'To be added by the owner.'} {site.availability || ''}</p>
            </div>
          </div>

          <form
            className="reveal h-fit rounded-3xl border border-line bg-card p-6 sm:p-8"
            onSubmit={(e) => {
              e.preventDefault()
              if (!emailReady) return
              const fd = new FormData(e.currentTarget)
              const subject = encodeURIComponent(`Project enquiry — ${fd.get('type') || 'New project'}`)
              const body = encodeURIComponent(
                `Name: ${fd.get('name')}\nPreferred contact: ${fd.get('contact')}\nProject type: ${fd.get('type')}\nBudget (optional): ${fd.get('budget') || '—'}\n\nRequirements:\n${fd.get('message')}`,
              )
              window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`
            }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="cf-name" className="folio block text-muted">Your name *</label>
                <input id="cf-name" name="name" required autoComplete="name" placeholder="Your full name"
                  className="mt-2.5 w-full rounded-lg border border-line bg-surface px-4 py-3 text-ink placeholder:text-muted focus:border-accent focus:outline-none" />
              </div>
              <div>
                <label htmlFor="cf-contact" className="folio block text-muted">Email or preferred contact *</label>
                <input id="cf-contact" name="contact" required autoComplete="email" placeholder="you@example.com"
                  className="mt-2.5 w-full rounded-lg border border-line bg-surface px-4 py-3 text-ink placeholder:text-muted focus:border-accent focus:outline-none" />
              </div>
            </div>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="cf-type" className="folio block text-muted">Project type *</label>
                <select id="cf-type" name="type" required defaultValue=""
                  className="mt-2.5 w-full rounded-lg border border-line bg-surface px-4 py-3 text-ink focus:border-accent focus:outline-none">
                  <option value="" disabled>Select a project type…</option>
                  {projectTypes.map((t) => (<option key={t} value={t}>{t}</option>))}
                </select>
              </div>
              <div>
                <label htmlFor="cf-budget" className="folio block text-muted">Budget (optional, PKR)</label>
                <select id="cf-budget" name="budget" defaultValue=""
                  className="mt-2.5 w-full rounded-lg border border-line bg-surface px-4 py-3 text-ink focus:border-accent focus:outline-none">
                  <option value="">Prefer to discuss</option>
                  {budgetRanges.map((b) => (<option key={b} value={b}>{b}</option>))}
                </select>
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="cf-message" className="folio block text-muted">Your requirements *</label>
              <textarea id="cf-message" name="message" required rows="6" placeholder="What should the project do? Who is it for? Any deadline?"
                className="mt-2.5 w-full rounded-lg border border-line bg-surface px-4 py-3 text-ink placeholder:text-muted focus:border-accent focus:outline-none" />
            </div>
            <button type="submit" disabled={!emailReady} className="btn-primary mt-7 w-full rounded-lg px-7 py-4 font-display font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto">
              {emailReady ? 'Send project enquiry →' : 'Form activates when the owner adds an email'}
            </button>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {emailReady
                ? 'Submitting opens your email app with everything pre-filled — you review and send it yourself.'
                : 'This form never shows a fake success message: it will send through your own email app as soon as the owner publishes a verified email address.'}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  useReveal()
  return (
    <>
      <Hero />
      <Marquee />
      <Trust />
      <About />
      <Skills />
      <Work />
      <Services />
      <Process />
      <Contact />
    </>
  )
}
