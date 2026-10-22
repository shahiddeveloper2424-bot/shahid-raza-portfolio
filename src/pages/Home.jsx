import React from 'react'
import { Link } from '../lib/router.jsx'
import { site } from '../data/site.js'
import { projects } from '../data/projects.js'
import { skillGroups, services, process } from '../data/skills.js'
import SectionHeading from '../components/SectionHeading.jsx'
import ProjectVisual from '../components/ProjectVisual.jsx'

function Hero() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-shell px-5 pb-16 pt-14 sm:px-8 sm:pt-20">
        <p className="reveal font-mono text-xs uppercase tracking-widest2 text-clay">Portfolio — {site.name}</p>
        <h1 className="reveal mt-6 max-w-4xl font-display text-5xl font-medium leading-[1.02] tracking-tight sm:text-7xl">
          {site.tagline}
        </h1>
        <p className="reveal mt-7 max-w-2xl text-lg leading-relaxed text-soft">{site.intro}</p>
        <div className="reveal mt-9 flex flex-wrap items-center gap-4">
          <Link href="/#work" className="bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-claydark">View selected work</Link>
          <Link href="/#contact" className="border border-ink px-6 py-3 text-sm font-medium transition-colors hover:bg-parchment">Get in touch</Link>
          {site.availability && <span className="font-mono text-xs uppercase tracking-widest2 text-moss">{site.availability}</span>}
        </div>
        <dl className="reveal mt-14 grid grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4">
          <div><dt className="font-mono text-[11px] uppercase tracking-widest2 text-muted">Focus</dt><dd className="mt-2 font-display text-lg">Web · Business · Commerce</dd></div>
          <div><dt className="font-mono text-[11px] uppercase tracking-widest2 text-muted">Core stack</dt><dd className="mt-2 font-display text-lg">React · Node · MongoDB</dd></div>
          <div><dt className="font-mono text-[11px] uppercase tracking-widest2 text-muted">Selected projects</dt><dd className="mt-2 font-display text-lg">{projects.length} case studies</dd></div>
          <div><dt className="font-mono text-[11px] uppercase tracking-widest2 text-muted">Based</dt><dd className="mt-2 font-display text-lg">{site.location || <span className="text-base text-muted">To be added</span>}</dd></div>
        </dl>
      </div>
    </section>
  )
}

function Work() {
  return (
    <section id="work" className="scroll-mt-24 border-b border-line">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-8">
        <SectionHeading index="01" eyebrow="Selected Work" title="Projects, presented honestly." intro="Each case study states what is verified, what is still in progress, and what is a placeholder. No invented results, no fake screenshots." />
        <div className="flex flex-col">
          {projects.map((p, i) => (
            <article key={p.slug} className={`reveal grid gap-8 border-t border-line py-12 md:grid-cols-12 md:gap-10 ${i === 0 ? 'border-t-0 pt-2' : ''}`}>
              <div className={`md:col-span-7 ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <ProjectVisual project={p} />
              </div>
              <div className="md:col-span-5">
                <p className="font-mono text-xs uppercase tracking-widest2 text-muted">{p.index} — {p.status}</p>
                <h3 className="mt-3 font-display text-4xl font-medium tracking-tight">{p.title}</h3>
                <p className="mt-1 font-display text-lg italic text-soft">{p.subtitle}</p>
                <p className="mt-4 leading-relaxed text-soft">{p.summary}</p>
                {p.stack.length > 0 && (
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${p.title} technologies`}>
                    {p.stack.map((s) => <li key={s} className="border border-line bg-parchment px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide">{s}</li>)}
                  </ul>
                )}
                <div className="mt-6 flex flex-wrap gap-5">
                  <Link href={`/projects/${p.slug}`} className="link-line font-medium text-clay">Read case study →</Link>
                  {p.links.live && <Link href={p.links.live} className="link-line font-medium">Live preview ↗</Link>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-line bg-parchment/60">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-8">
        <SectionHeading index="02" eyebrow="About" title="A developer who verifies before he claims." />
        <div className="reveal grid gap-10 md:grid-cols-12">
          <div className="space-y-5 leading-relaxed text-soft md:col-span-7">
            <p>I'm {site.name}, a software developer working with React, JavaScript, Node.js and MongoDB. My recent work is PRINTORA — a complete print-on-demand platform with a customer design studio, multi-currency storefront and a full operations admin, built phase by phase and verified end-to-end at every step.</p>
            <p>That project shaped how I work: design first, then build in stages; keep changes targeted so working features stay working; and never call something “done” or “live” until it has actually been tested. I'd rather show an honest placeholder than an invented result.</p>
            <p>Alongside client-style product work, I'm documenting two further projects here — EduCore, a school management system, and PDF Toolkit Pro — with full case studies to follow as their details are confirmed.</p>
          </div>
          <div className="md:col-span-5">
            <div className="border border-line bg-paper p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest2 text-clay">Education &amp; experience</h3>
              {site.education.length === 0 && site.experience.length === 0 ? (
                <p className="mt-4 text-sm leading-relaxed text-muted">Details to be added by the owner. No education history or years-of-experience figure is claimed on this page until it is supplied and verified — see <span className="font-mono text-xs">src/data/site.js</span> to add it.</p>
              ) : (
                <ul className="mt-4 space-y-3 text-sm">{site.experience.map((e) => <li key={e}>{e}</li>)}{site.education.map((e) => <li key={e}>{e}</li>)}</ul>
              )}
              <h3 className="mt-8 font-mono text-xs uppercase tracking-widest2 text-clay">Working principles</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-soft">
                <li>Design reviewed before implementation</li>
                <li>Targeted changes — working features stay working</li>
                <li>Verified claims only: builds, tests and live checks</li>
                <li>Honest placeholders instead of invented data</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-b border-line">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-8">
        <SectionHeading index="03" eyebrow="Skills" title="The tools I actually build with." intro="Listed from shipped project work — no percentage bars, no inflated levels." />
        <div className="grid gap-px border border-line bg-line md:grid-cols-3">
          {skillGroups.map((g) => (
            <div key={g.title} className="reveal bg-paper p-7">
              <h3 className="font-display text-2xl font-medium">{g.title}</h3>
              <p className="mt-1 text-sm italic text-muted">{g.note}</p>
              <ul className="mt-6 space-y-3">
                {g.skills.map((s) => <li key={s} className="flex items-baseline gap-3 text-soft"><span aria-hidden="true" className="text-clay">—</span>{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="scroll-mt-24 border-b border-line">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-8">
        <SectionHeading index="04" eyebrow="Services" title="What I can build for you." />
        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="reveal border-t-2 border-ink pt-5">
              <p className="font-mono text-xs text-clay">{s.index}</p>
              <h3 className="mt-2 font-display text-3xl font-medium">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-soft">{s.text}</p>
            </div>
          ))}
        </div>
        <div className="reveal mt-16 border border-line bg-parchment/60 p-7">
          <h3 className="font-mono text-xs uppercase tracking-widest2 text-clay">How a project runs</h3>
          <ol className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <li key={p.step}><p className="font-display text-xl font-medium">{i + 1}. {p.step}</p><p className="mt-2 text-sm leading-relaxed text-soft">{p.text}</p></li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export function ContactSection() {
  const { email, whatsapp, whatsappDisplay } = site.contact
  const hasDirect = Boolean(email || whatsapp)
  return (
    <section id="contact" className="scroll-mt-24">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-8">
        <SectionHeading index="05" eyebrow="Contact" title="Let's talk about your project." intro="Tell me what you're building. I reply with honest next steps — scope, approach and what “done” will look like — before any commitment." />
        <div className="reveal grid gap-8 md:grid-cols-12">
          <div className="space-y-4 md:col-span-5">
            {email ? (
              <a href={`mailto:${email}`} className="block border border-line bg-paper p-6 transition-colors hover:border-clay">
                <p className="font-mono text-[11px] uppercase tracking-widest2 text-muted">Email</p>
                <p className="mt-2 font-display text-xl">{email}</p>
              </a>
            ) : (
              <div className="border border-dashed border-line bg-parchment/50 p-6" role="note">
                <p className="font-mono text-[11px] uppercase tracking-widest2 text-muted">Email — placeholder</p>
                <p className="mt-2 text-sm leading-relaxed text-soft">The owner's verified email will appear here. It is intentionally not shown yet rather than guessed.</p>
              </div>
            )}
            {whatsapp ? (
              <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer" className="block border border-line bg-paper p-6 transition-colors hover:border-clay">
                <p className="font-mono text-[11px] uppercase tracking-widest2 text-muted">WhatsApp</p>
                <p className="mt-2 font-display text-xl">{whatsappDisplay || 'Chat on WhatsApp'} ↗</p>
              </a>
            ) : (
              <div className="border border-dashed border-line bg-parchment/50 p-6" role="note">
                <p className="font-mono text-[11px] uppercase tracking-widest2 text-muted">WhatsApp — placeholder</p>
                <p className="mt-2 text-sm leading-relaxed text-soft">The owner's verified WhatsApp number will appear here once supplied.</p>
              </div>
            )}
            <Link href={site.socials.github} className="block border border-line bg-paper p-6 transition-colors hover:border-clay">
              <p className="font-mono text-[11px] uppercase tracking-widest2 text-muted">GitHub — verified</p>
              <p className="mt-2 font-display text-xl">{site.socials.githubHandle} ↗</p>
            </Link>
          </div>
          <div className="md:col-span-7">
            <form
              className="border border-line bg-paper p-6 sm:p-8"
              onSubmit={(e) => {
                e.preventDefault()
                if (!email) return
                const fd = new FormData(e.currentTarget)
                const subject = encodeURIComponent(`Project enquiry — ${fd.get('name') || 'Website visitor'}`)
                const body = encodeURIComponent(`${fd.get('message') || ''}\n\n— ${fd.get('name') || ''} (${fd.get('replyEmail') || ''})`)
                window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium">Your name
                  <input name="name" required autoComplete="name" className="mt-2 w-full border border-line bg-paper px-3 py-2.5" placeholder="Your name" />
                </label>
                <label className="block text-sm font-medium">Your email
                  <input name="replyEmail" type="email" required autoComplete="email" className="mt-2 w-full border border-line bg-paper px-3 py-2.5" placeholder="you@example.com" />
                </label>
              </div>
              <label className="mt-5 block text-sm font-medium">About your project
                <textarea name="message" required rows={5} className="mt-2 w-full border border-line bg-paper px-3 py-2.5" placeholder="What are you building, and by when?" />
              </label>
              <button type="submit" disabled={!hasDirect} className="mt-6 bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-claydark disabled:cursor-not-allowed disabled:opacity-40">
                {email ? 'Send via email' : 'Form activates when owner adds email'}
              </button>
              {!email && <p className="mt-3 text-xs text-muted">This form opens your email app — it activates as soon as the owner's verified email is added in <span className="font-mono">src/data/site.js</span>. Until then, GitHub is the working contact route.</p>}
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
      <About />
      <Skills />
      <Services />
      <ContactSection />
    </>
  )
}
