import React from 'react'
import { Link } from '../lib/router.jsx'
import { site } from '../data/site.js'
import { projects, getProject } from '../data/projects.js'
import { skillGroups, services, process } from '../data/skills.js'
import SectionHeading from '../components/SectionHeading.jsx'
import ProjectVisual from '../components/ProjectVisual.jsx'

/* ————————————————— HERO ————————————————— */
function Hero() {
  const featured = getProject('printora')
  return (
    <section className="relative overflow-hidden border-b border-ink/15">
      <div className="mx-auto max-w-shell px-5 pb-14 pt-12 sm:px-10 sm:pt-16">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="reveal folio flex items-center gap-3 text-clay">
              <span aria-hidden="true" className="h-px w-10 bg-clay" />
              {site.name} — {site.role}
            </p>
            <h1 className="reveal display-hero mt-7">
              I build the software<br className="hidden sm:block" /> your business<br className="hidden sm:block" /> <em className="text-clay">runs on.</em>
            </h1>
            <p className="reveal lede mt-7 max-w-xl text-soft">
              Websites, online stores and custom web applications — designed carefully, built in React and JavaScript, and verified end-to-end before anything is called done.
            </p>
            <div className="reveal mt-9 flex flex-wrap items-center gap-4">
              <Link href="/projects/printora" className="arrow-link bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-clay">
                See the featured project <span className="arr" aria-hidden="true">→</span>
              </Link>
              <Link href="/#contact" className="arrow-link border border-ink px-7 py-3.5 text-sm font-medium transition-colors hover:bg-parchment">
                Discuss your project <span className="arr" aria-hidden="true">→</span>
              </Link>
            </div>
            <dl className="reveal mt-12 grid grid-cols-3 gap-6 border-t border-ink/15 pt-6">
              <div>
                <dt className="folio text-muted">Focus</dt>
                <dd className="mt-2 font-display text-base leading-snug sm:text-lg">Business · Commerce · Education</dd>
              </div>
              <div>
                <dt className="folio text-muted">Core stack</dt>
                <dd className="mt-2 font-display text-base leading-snug sm:text-lg">React · Node · MongoDB</dd>
              </div>
              <div>
                <dt className="folio text-muted">Based</dt>
                <dd className="mt-2 font-display text-base leading-snug sm:text-lg">{site.location || <span className="text-muted">To be added</span>}</dd>
              </div>
            </dl>
          </div>

          {/* Project-led composition — no fake portrait, the work is the face. */}
          <div className="reveal lg:col-span-5 lg:pt-14">
            <ProjectVisual project={featured} />
            <div className="mt-5 flex items-start justify-between gap-4 border border-ink/15 bg-parchment px-5 py-4">
              <div>
                <p className="folio text-clay">Featured — In development</p>
                <p className="mt-1.5 font-display text-lg leading-snug">PRINTORA, a print-on-demand platform with a live preview.</p>
              </div>
              <Link href="/projects/printora" className="arrow-link mt-1 shrink-0 font-medium text-clay" ariaLabel="Read the PRINTORA case study">
                Case study <span className="arr" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Service index strip */}
      <div className="border-t border-ink/15 bg-parchment/70">
        <ul className="mx-auto flex max-w-shell flex-wrap items-center gap-x-8 gap-y-2 px-5 py-3.5 sm:px-10" aria-label="Services index">
          {['Website Development', 'Custom Business Software', 'E-Commerce', 'Web Applications & Tools'].map((s, i) => (
            <li key={s} className="folio flex items-center gap-3 text-soft">
              <span className="text-clay">0{i + 1}</span>{s}
            </li>
          ))}
          <li className="folio ml-auto hidden text-muted md:block">Scroll — Selected Work ↓</li>
        </ul>
      </div>
    </section>
  )
}

/* ————————————————— WORK ————————————————— */
function Work() {
  const [featured, ...rest] = projects
  return (
    <section id="work" className="scroll-mt-24 border-b border-ink/15">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-10 sm:py-24">
        <SectionHeading index="01" eyebrow="Selected Work" title={<>Work that speaks<br />before I do.</>} intro="Three real projects, presented honestly — what is verified, what is in progress, and what is still a placeholder is stated on every page. No invented results, no fake screenshots." />

        {/* Featured project — full-width art-directed presentation */}
        <article className="reveal">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
              <ProjectVisual project={featured} large />
            </div>
            <div className="flex flex-col lg:col-span-4">
              <p className="folio text-muted">{featured.index} — {featured.status}</p>
              <h3 className="display-2 mt-3">{featured.title}</h3>
              <p className="mt-1 font-display text-xl italic text-soft">{featured.subtitle}</p>
              <p className="mt-5 leading-relaxed text-soft">{featured.summary}</p>
              <ul className="mt-6 space-y-2.5 border-t border-ink/15 pt-5 text-sm text-soft" aria-label="PRINTORA highlights">
                <li>— Design studio with genuine print validation</li>
                <li>— Full operations admin, 17 sections</li>
                <li>— Multi-currency, PKR base accounting</li>
              </ul>
              <div className="mt-auto flex flex-wrap gap-x-6 gap-y-3 pt-8">
                <Link href={`/projects/${featured.slug}`} className="arrow-link font-medium text-clay">Read case study <span className="arr" aria-hidden="true">→</span></Link>
                {featured.links.live && <Link href={featured.links.live} className="arrow-link font-medium">Live preview <span className="arr" aria-hidden="true">↗</span></Link>}
              </div>
            </div>
          </div>
        </article>

        {/* Remaining projects — offset rows with ghost numerals */}
        <div className="mt-24 flex flex-col gap-24">
          {rest.map((p, i) => (
            <article key={p.slug} className="reveal relative">
              <span aria-hidden="true" className={`ghost-num pointer-events-none absolute -top-10 z-0 ${i % 2 ? 'right-0' : 'left-0'}`}>{p.index}</span>
              <div className={`relative z-10 grid items-center gap-8 md:grid-cols-12 md:gap-12 ${i % 2 ? '' : ''}`}>
                <div className={`md:col-span-7 ${i % 2 ? 'md:order-2' : ''}`}>
                  <ProjectVisual project={p} large />
                </div>
                <div className="md:col-span-5">
                  <p className="folio text-muted">{p.index} — {p.status}</p>
                  <h3 className="display-2 mt-3">{p.title}</h3>
                  <p className="mt-1 font-display text-xl italic text-soft">{p.subtitle}</p>
                  <p className="mt-5 leading-relaxed text-soft">{p.summary}</p>
                  <p className="mt-4 border-l-2 border-clay pl-4 text-sm leading-relaxed text-muted">{p.statusNote}</p>
                  <Link href={`/projects/${p.slug}`} className="arrow-link mt-7 inline-block font-medium text-clay">
                    {p.detailsPending ? 'View case study status' : 'Read case study'} <span className="arr" aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ————————————————— SERVICES (ink section) ————————————————— */
function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-ink text-paper">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-10 sm:py-24">
        <SectionHeading dark index="02" eyebrow="Capabilities & Services" title={<>What I can build<br />for your business.</>} intro="Every engagement is scoped honestly: what it will do, what it will not, and what “finished” means — agreed before development starts." />
        <div>
          {services.map((s) => (
            <div key={s.title} className="service-row reveal grid gap-3 border-t border-paper/15 py-9 md:grid-cols-12 md:items-baseline md:gap-8">
              <p className="font-mono text-sm text-gold md:col-span-1">{s.index}</p>
              <h3 className="display-2 md:col-span-5">{s.title}</h3>
              <div className="md:col-span-6">
                <p className="font-display text-lg italic text-paper/85">{s.value}</p>
                <p className="mt-2.5 leading-relaxed text-paper/65">{s.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Process — five steps */}
        <div className="mt-20 border-t border-paper/15 pt-12">
          <p className="reveal folio text-gold">How a project runs — Process</p>
          <ol className="mt-9 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((p, i) => (
              <li key={p.step} className="reveal">
                <p className="font-display text-4xl font-medium text-paper/30">0{i + 1}</p>
                <h3 className="mt-3 font-display text-xl font-medium">{p.step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/60">{p.text}</p>
                {i < process.length - 1 && <span aria-hidden="true" className="mt-4 hidden text-gold lg:block">→</span>}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

/* ————————————————— ABOUT & SKILLS ————————————————— */
function About() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-ink/15">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-10 sm:py-24">
        <SectionHeading index="03" eyebrow="About & Skills" title={<>A developer who verifies<br />before he claims.</>} />
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="dropcap reveal lede text-soft">
              I'm {site.name}, a software developer working with React, JavaScript, Node.js and MongoDB. My recent work is PRINTORA — a complete print-on-demand platform with a customer design studio, a multi-currency storefront and a full operations admin, built phase by phase and verified end-to-end at every step.
            </p>
            <p className="reveal mt-6 leading-relaxed text-soft">
              That project shaped how I work: design first, then build in stages; keep changes targeted so working features stay working; and never call something “done” or “live” until it has actually been tested. I'd rather show an honest placeholder than an invented result — which is exactly how this portfolio treats EduCore and PDF Toolkit Pro while their case studies are completed.
            </p>
            <div className="reveal mt-10 border border-ink/15 bg-parchment p-6 sm:p-7">
              <h3 className="folio text-clay">Education &amp; experience</h3>
              {site.education.length === 0 && site.experience.length === 0 ? (
                <p className="mt-3.5 text-sm leading-relaxed text-muted">
                  Formal details to be added by the owner. No education history, employer or years-of-experience figure is claimed here until it is supplied and verified — the project work above is the evidence offered in the meantime.
                </p>
              ) : (
                <ul className="mt-3.5 space-y-2 text-sm text-soft">{site.experience.map((e) => <li key={e}>{e}</li>)}{site.education.map((e) => <li key={e}>{e}</li>)}</ul>
              )}
            </div>
          </div>
          <div id="skills" className="scroll-mt-28 lg:col-span-5">
            {skillGroups.map((g) => (
              <div key={g.title} className="reveal border-t-2 border-ink py-6 first:border-t-0 first:pt-0">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl font-medium">{g.title}</h3>
                  <p className="text-right text-xs italic text-muted">{g.note}</p>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <li key={s} className="border border-ink/20 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wide text-soft">{s}</li>
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
    <section id="contact" className="scroll-mt-24 bg-parchment/60">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-10 sm:py-24">
        <div className="reveal flex items-center gap-4 border-t-2 border-ink pt-5">
          <p className="folio text-clay">04 — Contact</p>
          <span aria-hidden="true" className="h-px flex-1 bg-line" />
          <p className="folio hidden text-muted sm:block">No pressure, no obligation</p>
        </div>
        <div className="mt-10 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="reveal display-1">Have a project in mind? <em className="text-clay">Let's discuss it properly.</em></h2>
            <p className="reveal lede mt-6 max-w-lg text-soft">
              Tell me what you're building. You'll get an honest reply — scope, approach, and what “done” will look like — before any commitment.
            </p>
            <div className="reveal mt-10 space-y-4">
              {email ? (
                <a href={`mailto:${email}`} className="group flex items-center justify-between border border-ink/20 bg-paper px-6 py-5 transition-colors hover:border-clay">
                  <span><span className="folio block text-muted">Email</span><span className="mt-1.5 block font-display text-xl">{email}</span></span>
                  <span aria-hidden="true" className="text-clay transition-transform group-hover:translate-x-1">→</span>
                </a>
              ) : (
                <div className="border border-dashed border-ink/30 bg-paper/60 px-6 py-5" role="note">
                  <span className="folio block text-muted">Email — placeholder</span>
                  <p className="mt-1.5 text-sm leading-relaxed text-soft">The owner's verified email will appear here. It is intentionally not shown yet, rather than guessed.</p>
                </div>
              )}
              {whatsapp ? (
                <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer" className="group flex items-center justify-between border border-ink/20 bg-paper px-6 py-5 transition-colors hover:border-clay">
                  <span><span className="folio block text-muted">WhatsApp</span><span className="mt-1.5 block font-display text-xl">{whatsappDisplay || 'Chat on WhatsApp'}</span></span>
                  <span aria-hidden="true" className="text-clay transition-transform group-hover:translate-x-1">↗</span>
                </a>
              ) : (
                <div className="border border-dashed border-ink/30 bg-paper/60 px-6 py-5" role="note">
                  <span className="folio block text-muted">WhatsApp — placeholder</span>
                  <p className="mt-1.5 text-sm leading-relaxed text-soft">The owner's verified WhatsApp number will appear here once supplied.</p>
                </div>
              )}
              <Link href={site.socials.github} className="group flex items-center justify-between border border-ink/20 bg-paper px-6 py-5 transition-colors hover:border-clay">
                <span><span className="folio block text-moss">GitHub — verified</span><span className="mt-1.5 block font-display text-xl">{site.socials.githubHandle}</span></span>
                <span aria-hidden="true" className="text-clay transition-transform group-hover:translate-x-1">↗</span>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6">
            <form
              className="reveal border border-ink/20 bg-paper p-6 sm:p-8"
              onSubmit={(e) => {
                e.preventDefault()
                if (!email) return
                const fd = new FormData(e.currentTarget)
                const subject = encodeURIComponent(`Project enquiry — ${fd.get('name') || 'Website visitor'}`)
                const body = encodeURIComponent(`${fd.get('message') || ''}\n\n— ${fd.get('name') || ''} (${fd.get('replyEmail') || ''})`)
                window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
              }}
            >
              <p className="folio text-muted">Project enquiry</p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium">Your name
                  <input name="name" required autoComplete="name" className="mt-2 w-full border border-ink/20 bg-paper px-3.5 py-3" placeholder="Your name" />
                </label>
                <label className="block text-sm font-medium">Your email
                  <input name="replyEmail" type="email" required autoComplete="email" className="mt-2 w-full border border-ink/20 bg-paper px-3.5 py-3" placeholder="you@example.com" />
                </label>
              </div>
              <label className="mt-5 block text-sm font-medium">About your project
                <textarea name="message" required rows={5} className="mt-2 w-full border border-ink/20 bg-paper px-3.5 py-3" placeholder="What are you building, and by when?" />
              </label>
              <button type="submit" disabled={!email} className="mt-7 w-full bg-ink px-6 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-clay disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto">
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
      <Work />
      <Services />
      <About />
      <ContactSection />
    </>
  )
}
