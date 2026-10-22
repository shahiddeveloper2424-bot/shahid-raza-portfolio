import React from 'react'
import { Link } from '../lib/router.jsx'
import { site } from '../data/site.js'
import { projects, getProject } from '../data/projects.js'
import { skillGroups, services, process } from '../data/skills.js'
import SectionHeading from '../components/SectionHeading.jsx'
import ProjectVisual from '../components/ProjectVisual.jsx'

/* Per-project colour worlds — one signature hue each. */
const WORLDS = {
  printora: {
    panel: 'bg-cobalt text-white',
    chip: 'bg-lime text-ink',
    cta: 'bg-lime text-ink hover:bg-white',
    note: 'border-white/30 bg-white/10',
    sub: 'text-white/75',
  },
  educore: {
    panel: 'bg-coral text-ink',
    chip: 'bg-ink text-white',
    cta: 'bg-ink text-white hover:bg-cobalt',
    note: 'border-ink/25 bg-white/25',
    sub: 'text-ink/70',
  },
  'pdf-toolkit-pro': {
    panel: 'bg-lime text-ink',
    chip: 'bg-ink text-white',
    cta: 'bg-ink text-white hover:bg-cobalt',
    note: 'border-ink/25 bg-white/40',
    sub: 'text-ink/70',
  },
}

/* ————————————————— HERO ————————————————— */
function Hero() {
  const featured = getProject('printora')
  const others = projects.filter((p) => p.slug !== 'printora')
  return (
    <section className="dotgrid relative overflow-hidden bg-cobalt text-white">
      <div className="mx-auto max-w-shell px-5 pb-16 pt-14 sm:px-10 sm:pt-20">
        <div className="grid items-start gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="reveal folio flex items-center gap-3 text-lime">
              <span aria-hidden="true" className="h-3 w-3 bg-coral" />
              {site.name} — {site.role}
            </p>
            <h1 className="reveal display-hero mt-7">
              I build <span className="text-lime">web software</span> businesses actually use.
            </h1>
            <p className="reveal lede mt-7 max-w-xl text-white/85">
              Websites, online stores and custom business applications — designed carefully, built with React, JavaScript, Node.js and MongoDB, and verified end-to-end before anything is called done.
            </p>
            <div className="reveal mt-10 flex flex-wrap items-center gap-5">
              <Link href="/#work" className="hard-sm lift bg-lime px-7 py-3.5 font-display text-sm font-semibold text-ink">
                Explore projects →
              </Link>
              <Link href="/#contact" className="border-2 border-white px-7 py-3.5 font-display text-sm font-semibold text-white transition-colors hover:bg-white hover:text-cobalt">
                Discuss a project
              </Link>
            </div>
            <dl className="reveal mt-14 grid grid-cols-3 gap-6 border-t border-white/25 pt-6">
              <div>
                <dt className="folio text-white/60">Focus</dt>
                <dd className="mt-2 font-display text-base font-semibold leading-snug sm:text-lg">Business · Commerce · Education</dd>
              </div>
              <div>
                <dt className="folio text-white/60">Core stack</dt>
                <dd className="mt-2 font-display text-base font-semibold leading-snug sm:text-lg">React · Node · MongoDB</dd>
              </div>
              <div>
                <dt className="folio text-white/60">Based</dt>
                <dd className="mt-2 font-display text-base font-semibold leading-snug sm:text-lg">{site.location || <span className="font-sans text-sm font-normal text-white/60">To be added</span>}</dd>
              </div>
            </dl>
          </div>

          {/* Project-led composition — the work is the face of the hero. */}
          <div className="reveal relative lg:col-span-5">
            <div aria-hidden="true" className="absolute -right-3 -top-3 h-full w-full rotate-2 bg-coral" />
            <div className="hard relative border-2 border-ink bg-paper p-4 text-ink sm:p-5">
              <ProjectVisual project={featured} />
              <div className="mt-4 flex items-start justify-between gap-4 border-t-2 border-ink pt-4">
                <div>
                  <p className="folio text-cobalt">Featured — {featured.status}</p>
                  <p className="mt-1.5 font-display text-lg font-semibold leading-snug">PRINTORA — print-on-demand platform, live preview available.</p>
                </div>
                <Link href="/projects/printora" className="arrow-link mt-1 shrink-0 font-display font-semibold text-cobalt" ariaLabel="Read the PRINTORA case study">
                  Case study <span className="arr" aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="relative mt-6 grid grid-cols-2 gap-4">
              {others.map((p) => (
                <Link key={p.slug} href={`/projects/${p.slug}`} className={`lift border-2 border-ink p-4 ${p.slug === 'educore' ? 'bg-coral text-ink' : 'bg-lime text-ink'}`}>
                  <p className="folio text-ink/60">{p.index} — {p.status}</p>
                  <p className="mt-1.5 font-display text-base font-bold leading-tight">{p.title} →</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ————————————————— MARQUEE ————————————————— */
function Marquee() {
  const items = ['Website Development', 'E-Commerce', 'Custom Business Software', 'Web Applications', 'Design Studio', 'Admin Dashboards', 'Multi-Currency Stores']
  const row = (hidden) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((s) => (
        <span key={s} className="flex items-center font-display text-sm font-semibold uppercase tracking-wide">
          <span className="px-5">{s}</span>
          <span aria-hidden="true" className="text-cobalt">✦</span>
        </span>
      ))}
    </div>
  )
  return (
    <div className="marquee overflow-hidden border-b-2 border-ink bg-lime py-3.5 text-ink" role="presentation">
      <div className="marquee-track">{row(false)}{row(true)}</div>
    </div>
  )
}

/* ————————————————— WORK ————————————————— */
function Work() {
  return (
    <section id="work" className="scroll-mt-24 border-b-2 border-ink">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-10 sm:py-24">
        <SectionHeading index="01" eyebrow="Selected Work" title={<>Real projects.<br />Real code.</>} intro="Three real projects, each in its own colour world — presented honestly: what is verified, what is in progress, and what is still a placeholder is stated on every page. No invented results, no fake screenshots." />

        <div className="flex flex-col gap-16">
          {projects.map((p, i) => {
            const w = WORLDS[p.slug]
            return (
              <article key={p.slug} className={`reveal hard border-2 border-ink ${w.panel}`}>
                <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-12 lg:gap-12">
                  <div className={`lg:col-span-7 ${i % 2 ? 'lg:order-2' : ''}`}>
                    <div className="border-2 border-ink bg-paper p-3 text-ink sm:p-4">
                      <ProjectVisual project={p} large />
                    </div>
                  </div>
                  <div className="flex flex-col lg:col-span-5">
                    <p><span className={`folio inline-block px-2.5 py-1.5 ${w.chip}`}>{p.index} — {p.status}</span></p>
                    <h3 className="display-1 mt-5">{p.title}</h3>
                    <p className={`mt-1.5 font-display text-xl font-medium ${w.sub}`}>{p.subtitle}</p>
                    <p className="mt-5 leading-relaxed">{p.summary}</p>
                    {p.slug === 'printora' && (
                      <ul className="mt-6 space-y-2.5 text-sm font-medium" aria-label="PRINTORA highlights">
                        <li>▸ Design studio with genuine print validation</li>
                        <li>▸ Full operations admin — 17 sections</li>
                        <li>▸ Multi-currency display, PKR base accounting</li>
                      </ul>
                    )}
                    {p.detailsPending && (
                      <p className={`mt-5 border-2 p-4 text-sm leading-relaxed ${w.note}`}>{p.statusNote}</p>
                    )}
                    <div className="mt-auto flex flex-wrap items-center gap-4 pt-8">
                      <Link href={`/projects/${p.slug}`} className={`px-6 py-3 font-display text-sm font-semibold transition-colors ${w.cta}`}>
                        {p.detailsPending ? 'View case study status' : 'Read case study'} →
                      </Link>
                      {p.links.live && <Link href={p.links.live} className="arrow-link font-display font-semibold underline decoration-2 underline-offset-4">Live preview <span className="arr" aria-hidden="true">↗</span></Link>}
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ————————————————— SERVICES (ink) ————————————————— */
const ACCENTS = ['text-cobaltlt', 'text-coral', 'text-lime', 'text-cobaltlt', 'text-coral']

function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-ink text-paper">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-10 sm:py-24">
        <SectionHeading dark index="02" eyebrow="Capabilities & Services" title={<>What I can build<br />for your business.</>} intro="Every engagement is scoped honestly: what it will do, what it will not, and what “finished” means — agreed before development starts." />
        <div>
          {services.map((s, i) => (
            <div key={s.title} className="service-row reveal grid gap-3 border-t border-paper/15 py-9 md:grid-cols-12 md:items-baseline md:gap-8">
              <p className={`font-display text-lg font-bold md:col-span-1 ${ACCENTS[i % ACCENTS.length]}`}>{s.index}</p>
              <h3 className="display-2 md:col-span-5">{s.title}</h3>
              <div className="md:col-span-6">
                <p className="font-display text-lg font-medium text-paper">{s.value}</p>
                <p className="mt-2.5 leading-relaxed text-paper/65">{s.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 border-t border-paper/15 pt-12">
          <p className="reveal folio flex items-center gap-3 text-lime">
            <span aria-hidden="true" className="h-3 w-3 bg-coral" /> How a project runs — Process
          </p>
          <ol className="mt-9 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((p, i) => (
              <li key={p.step} className="reveal">
                <p className={`font-display text-4xl font-bold ${ACCENTS[i % ACCENTS.length]}`}>0{i + 1}</p>
                <h3 className="mt-3 font-display text-xl font-semibold">{p.step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/60">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

/* ————————————————— ABOUT & SKILLS ————————————————— */
const GROUP_ACCENTS = ['bg-cobalt', 'bg-coral', 'bg-limedeep']

function About() {
  return (
    <section id="about" className="scroll-mt-24 border-b-2 border-ink">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-10 sm:py-24">
        <SectionHeading accent="bg-coral" index="03" eyebrow="About & Skills" title={<>A developer who verifies<br />before he claims.</>} />
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="dropcap reveal lede text-soft">
              I'm {site.name}, a software developer working with React, JavaScript, Node.js and MongoDB. My recent work is PRINTORA — a complete print-on-demand platform with a customer design studio, a multi-currency storefront and a full operations admin, built phase by phase and verified end-to-end at every step.
            </p>
            <p className="reveal mt-6 leading-relaxed text-soft">
              That project shaped how I work: design first, then build in stages; keep changes targeted so working features stay working; and never call something “done” or “live” until it has actually been tested. I'd rather show an honest placeholder than an invented result — which is exactly how this portfolio treats EduCore and PDF Toolkit Pro while their case studies are completed.
            </p>
            <div className="reveal mt-10 border-2 border-dashed border-cobalt bg-ice p-6 sm:p-7">
              <h3 className="folio text-cobalt">Education &amp; experience</h3>
              {site.education.length === 0 && site.experience.length === 0 ? (
                <p className="mt-3.5 text-sm leading-relaxed text-soft">
                  Formal details to be added by the owner. No education history, employer or years-of-experience figure is claimed here until it is supplied and verified — the project work above is the evidence offered in the meantime.
                </p>
              ) : (
                <ul className="mt-3.5 space-y-2 text-sm text-soft">{site.experience.map((e) => <li key={e}>{e}</li>)}{site.education.map((e) => <li key={e}>{e}</li>)}</ul>
              )}
            </div>
          </div>
          <div id="skills" className="scroll-mt-28 lg:col-span-5">
            {skillGroups.map((g, gi) => (
              <div key={g.title} className="reveal border-t-2 border-ink py-6 first:border-t-0 first:pt-0">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="flex items-center gap-3 font-display text-2xl font-semibold">
                    <span aria-hidden="true" className={`h-3.5 w-3.5 shrink-0 ${GROUP_ACCENTS[gi % 3]}`} />
                    {g.title}
                  </h3>
                  <p className="text-right text-xs italic text-muted">{g.note}</p>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <li key={s} className="border-2 border-ink bg-white px-3 py-1.5 font-mono text-[11px] uppercase tracking-wide transition-colors hover:bg-lime">{s}</li>
                  ))}
                </ul>
              </div>
            ))}
            <p className="reveal mt-2 text-sm italic leading-relaxed text-muted">Listed from shipped project work — no percentage bars, no inflated levels.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ————————————————— CONTACT ————————————————— */
export function ContactSection() {
  const { email, whatsapp, whatsappDisplay } = site.contact
  return (
    <section id="contact" className="dotgrid scroll-mt-24 bg-cobalt text-white">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-10 sm:py-24">
        <div className="reveal flex items-center gap-4 border-t-2 border-white pt-5">
          <span aria-hidden="true" className="h-3 w-3 bg-lime" />
          <p className="folio text-lime">04 — Contact</p>
          <span aria-hidden="true" className="h-px flex-1 bg-white/25" />
          <p className="folio hidden text-white/60 sm:block">No pressure, no obligation</p>
        </div>
        <div className="mt-10 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="reveal display-1">Have a project in mind? <span className="text-lime">Let's discuss it properly.</span></h2>
            <p className="reveal lede mt-6 max-w-lg text-white/85">
              Tell me what you're building. You'll get an honest reply — scope, approach, and what “done” will look like — before any commitment.
            </p>
            <div className="reveal mt-10 space-y-4">
              {email ? (
                <a href={`mailto:${email}`} className="group flex items-center justify-between border-2 border-ink bg-white px-6 py-5 text-ink transition-colors hover:bg-lime">
                  <span><span className="folio block text-cobalt">Email</span><span className="mt-1.5 block font-display text-xl font-semibold">{email}</span></span>
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              ) : (
                <div className="border-2 border-dashed border-white/50 px-6 py-5" role="note">
                  <span className="folio block text-lime">Email — placeholder</span>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/85">The owner's verified email will appear here. It is intentionally not shown yet, rather than guessed.</p>
                </div>
              )}
              {whatsapp ? (
                <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer" className="group flex items-center justify-between border-2 border-ink bg-white px-6 py-5 text-ink transition-colors hover:bg-lime">
                  <span><span className="folio block text-cobalt">WhatsApp</span><span className="mt-1.5 block font-display text-xl font-semibold">{whatsappDisplay || 'Chat on WhatsApp'}</span></span>
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">↗</span>
                </a>
              ) : (
                <div className="border-2 border-dashed border-white/50 px-6 py-5" role="note">
                  <span className="folio block text-lime">WhatsApp — placeholder</span>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/85">The owner's verified WhatsApp number will appear here once supplied.</p>
                </div>
              )}
              <Link href={site.socials.github} className="group flex items-center justify-between border-2 border-ink bg-white px-6 py-5 text-ink transition-colors hover:bg-lime">
                <span><span className="folio block text-cobalt">GitHub — verified</span><span className="mt-1.5 block font-display text-xl font-semibold">{site.socials.githubHandle}</span></span>
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">↗</span>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6">
            <form
              className="reveal hard border-2 border-ink bg-paper p-6 text-ink sm:p-8"
              onSubmit={(e) => {
                e.preventDefault()
                if (!email) return
                const fd = new FormData(e.currentTarget)
                const subject = encodeURIComponent(`Project enquiry — ${fd.get('name') || 'Website visitor'}`)
                const body = encodeURIComponent(`${fd.get('message') || ''}\n\n— ${fd.get('name') || ''} (${fd.get('replyEmail') || ''})`)
                window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
              }}
            >
              <p className="folio text-cobalt">Project enquiry</p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium">Your name
                  <input name="name" required autoComplete="name" className="mt-2 w-full border-2 border-ink bg-white px-3.5 py-3" placeholder="Your name" />
                </label>
                <label className="block text-sm font-medium">Your email
                  <input name="replyEmail" type="email" required autoComplete="email" className="mt-2 w-full border-2 border-ink bg-white px-3.5 py-3" placeholder="you@example.com" />
                </label>
              </div>
              <label className="mt-5 block text-sm font-medium">About your project
                <textarea name="message" required rows={5} className="mt-2 w-full border-2 border-ink bg-white px-3.5 py-3" placeholder="What are you building, and by when?" />
              </label>
              <button type="submit" disabled={!email} className="mt-7 w-full bg-cobalt px-6 py-3.5 font-display text-sm font-semibold text-white transition-colors hover:bg-ink disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto">
                {email ? 'Send via email' : 'Form activates when owner adds email'}
              </button>
              {!email && <p className="mt-3.5 text-xs leading-relaxed text-muted">This form opens your email app — it activates as soon as the owner's verified email is added. Until then, GitHub is the working contact route.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Work />
      <Services />
      <About />
      <ContactSection />
    </>
  )
}
