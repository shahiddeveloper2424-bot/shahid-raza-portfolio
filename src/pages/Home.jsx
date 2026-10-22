import React from 'react'
import { Link } from '../lib/router.jsx'
import { site } from '../data/site.js'
import { projects, getProject } from '../data/projects.js'
import { skillGroups, services, process } from '../data/skills.js'
import SectionHeading from '../components/SectionHeading.jsx'
import ProjectVisual from '../components/ProjectVisual.jsx'
import Portrait from '../components/Portrait.jsx'

/* Per-project colour worlds — one signature hue each. */
const WORLDS = {
  printora: { panel: 'bg-cobalt text-white', chip: 'bg-lime text-ink', cta: 'bg-lime text-ink hover:bg-white', note: 'border-white/30 bg-white/10', sub: 'text-white/75' },
  educore: { panel: 'bg-coral text-ink', chip: 'bg-ink text-white', cta: 'bg-ink text-white hover:bg-cobalt', note: 'border-ink/25 bg-white/25', sub: 'text-ink/70' },
  'pdf-toolkit-pro': { panel: 'bg-lime text-ink', chip: 'bg-ink text-white', cta: 'bg-ink text-white hover:bg-cobalt', note: 'border-ink/25 bg-white/40', sub: 'text-ink/70' },
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
              {site.name} — {site.positioning}
            </p>
            <h1 className="reveal display-hero mt-7">
              Turning business ideas into <span className="text-lime">powerful web software.</span>
            </h1>
            <p className="reveal lede mt-7 max-w-xl text-white/85">
              I design and build custom websites, e-commerce stores, dashboards and business management systems with React, JavaScript, Node.js and MongoDB — scoped honestly, built in verified stages, and handed over with documentation.
            </p>
            <div className="reveal mt-10 flex flex-wrap items-center gap-5">
              <Link href="/#contact" className="hard-sm lift bg-lime px-7 py-3.5 font-display text-sm font-semibold text-ink">
                Start a project →
              </Link>
              <Link href="/#work" className="border-2 border-white px-7 py-3.5 font-display text-sm font-semibold text-white transition-colors hover:bg-white hover:text-cobalt">
                Explore my work
              </Link>
            </div>
            <ul className="reveal mt-10 flex flex-wrap gap-2" aria-label="Core technologies">
              {['React', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'].map((t) => (
                <li key={t} className="border border-white/40 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wide text-white/90">{t}</li>
              ))}
            </ul>
            <dl className="reveal mt-12 grid grid-cols-3 gap-6 border-t border-white/25 pt-6">
              <div>
                <dt className="folio text-white/60">Focus</dt>
                <dd className="mt-2 font-display text-base font-semibold leading-snug sm:text-lg">Business · Commerce · Education</dd>
              </div>
              <div>
                <dt className="folio text-white/60">Live work</dt>
                <dd className="mt-2 font-display text-base font-semibold leading-snug sm:text-lg">2 projects live on Vercel</dd>
              </div>
              <div>
                <dt className="folio text-white/60">Based</dt>
                <dd className="mt-2 font-display text-base font-semibold leading-snug sm:text-lg">{site.location || <span className="font-sans text-sm font-normal text-white/60">To be added</span>}</dd>
              </div>
            </dl>
          </div>

          {/* Portrait + featured-work composition. */}
          <div className="reveal relative lg:col-span-5">
            <div aria-hidden="true" className="absolute -right-3 -top-3 h-full w-full rotate-2 bg-coral" />
            <div className="hard relative border-2 border-ink bg-paper p-4 text-ink sm:p-5">
              <div className="mx-auto max-w-[320px]">
                <Portrait />
              </div>
              <div className="mt-4 border-t-2 border-ink pt-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="folio text-cobalt">Featured project — {featured.status}</p>
                    <p className="mt-1.5 font-display text-lg font-semibold leading-snug">PRINTORA — print-on-demand e-commerce platform.</p>
                  </div>
                </div>
                <div className="mt-3.5 flex flex-wrap gap-x-6 gap-y-2">
                  <Link href="/projects/printora" className="arrow-link font-display font-semibold text-cobalt">Case study <span className="arr" aria-hidden="true">→</span></Link>
                  <Link href={featured.links.live} className="arrow-link font-display font-semibold text-cobalt">View live project <span className="arr" aria-hidden="true">↗</span></Link>
                </div>
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

/* ————————————————— TRUST / CREDIBILITY ————————————————— */
function Trust() {
  const printora = getProject('printora')
  const pdf = getProject('pdf-toolkit-pro')
  const cards = [
    { accent: 'bg-cobalt', title: 'A live store, not a mockup', text: 'PRINTORA — a full print-on-demand storefront with a design studio and operations admin — is deployed and publicly reachable right now.', link: { href: printora.links.live, label: 'Visit the live store' } },
    { accent: 'bg-lime', title: 'A live tool with public source', text: 'PDF Toolkit Pro runs eight PDF tools entirely in the browser. It is live, and its complete source is public on GitHub for anyone to inspect.', link: { href: pdf.links.live, label: 'Open PDF Toolkit Pro' } },
    { accent: 'bg-coral', title: 'Real code, real history', text: 'My GitHub holds the actual repositories behind this work — commit history, tests and documentation included. Nothing here is a screenshot of someone else’s project.', link: { href: site.socials.github, label: 'Browse GitHub' } },
    { accent: 'bg-cobalt', title: 'Verified, or labelled honestly', text: 'Every claim on this site was checked against the real project. Anything unfinished is labelled “in development” or “in preparation” — never dressed up as done.', link: { href: '/#process', label: 'See how I work' } },
  ]
  return (
    <section aria-label="Credibility" className="border-b-2 border-ink bg-paper">
      <div className="mx-auto max-w-shell px-5 py-16 sm:px-10 sm:py-20">
        <div className="reveal flex items-center gap-4">
          <span aria-hidden="true" className="h-3 w-3 bg-coral" />
          <p className="folio text-cobalt">Proof, not promises</p>
          <span aria-hidden="true" className="h-px flex-1 bg-line" />
        </div>
        <h2 className="reveal display-1 mt-7 max-w-3xl">Credibility, the verifiable kind.</h2>
        <p className="reveal lede mt-4 max-w-2xl text-soft">No invented client counts, logos or revenue figures. The evidence offered instead is work you can open, run and read — today.</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((c) => (
            <article key={c.title} className="reveal lift flex flex-col border-2 border-ink bg-white p-6">
              <span aria-hidden="true" className={`h-3.5 w-3.5 ${c.accent}`} />
              <h3 className="mt-4 font-display text-xl font-semibold leading-snug">{c.title}</h3>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-soft">{c.text}</p>
              <Link href={c.link.href} className="arrow-link mt-5 font-display text-sm font-semibold text-cobalt">{c.link.label} <span className="arr" aria-hidden="true">↗</span></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
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
                    {!p.detailsPending && p.slug !== 'printora' && (
                      <ul className="mt-6 space-y-2.5 text-sm font-medium" aria-label={`${p.title} highlights`}>
                        {p.features.slice(0, 4).map((f) => <li key={f}>▸ {f.split(' — ')[0]}</li>)}
                      </ul>
                    )}
                    {p.detailsPending && (
                      <p className={`mt-5 border-2 p-4 text-sm leading-relaxed ${w.note}`}>{p.statusNote}</p>
                    )}
                    <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-8">
                      <Link href={`/projects/${p.slug}`} className={`px-6 py-3 font-display text-sm font-semibold transition-colors ${w.cta}`}>
                        {p.detailsPending ? 'View case study status' : 'Read case study'} →
                      </Link>
                      {p.links.live && <Link href={p.links.live} className="arrow-link font-display font-semibold underline decoration-2 underline-offset-4">Live project <span className="arr" aria-hidden="true">↗</span></Link>}
                      {p.links.github && <Link href={p.links.github} className="arrow-link font-display font-semibold underline decoration-2 underline-offset-4">Source code <span className="arr" aria-hidden="true">↗</span></Link>}
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

/* ————————————————— SERVICES ————————————————— */
const ACCENTS = ['text-cobalt', 'text-coraldeep', 'text-limedeep']

function Services() {
  return (
    <section id="services" className="scroll-mt-24 border-b-2 border-ink bg-paper">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-10 sm:py-24">
        <SectionHeading accent="bg-coral" index="02" eyebrow="Services" title={<>What I can build<br />for your business.</>} intro="No made-up pricing — every project is scoped first, and you approve the scope and cost before any work begins. Each service below states plainly what you receive and who it is for." />
        <div>
          {services.map((s, i) => (
            <div key={s.title} className="reveal grid gap-4 border-t-2 border-ink py-10 md:grid-cols-12 md:gap-8">
              <p className={`font-display text-2xl font-bold md:col-span-1 ${ACCENTS[i % 3]}`}>{s.index}</p>
              <div className="md:col-span-5">
                <h3 className="display-2">{s.title}</h3>
                <p className="mt-2 font-display text-lg font-medium text-cobalt">{s.value}</p>
              </div>
              <div className="md:col-span-6">
                <p className="leading-relaxed text-soft">{s.text}</p>
                <dl className="mt-4 space-y-2 text-sm leading-relaxed">
                  <div className="flex gap-3"><dt className="folio shrink-0 pt-0.5 text-cobalt">You receive</dt><dd className="text-soft">{s.deliver}</dd></div>
                  <div className="flex gap-3"><dt className="folio shrink-0 pt-0.5 text-cobalt">Best for</dt><dd className="text-soft">{s.forWho}</dd></div>
                </dl>
                <Link href="/#contact" className="arrow-link mt-5 inline-block font-display text-sm font-semibold text-cobalt">Request a quote <span className="arr" aria-hidden="true">→</span></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ————————————————— PROCESS ————————————————— */
const P_ACCENTS = ['text-cobaltlt', 'text-coral', 'text-lime', 'text-cobaltlt', 'text-coral', 'text-lime', 'text-cobaltlt']

function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-ink text-paper">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-10 sm:py-24">
        <SectionHeading dark accent="bg-lime" index="03" eyebrow="Working Process" title={<>How your project<br />actually runs.</>} intro="A clear, staged process — scope, delivery dates and cost are confirmed with you before development begins, and every stage ends with something you can see and verify." />
        <ol className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <li key={p.step} className="reveal border-t-2 border-paper/25 pt-6">
              <p className={`font-display text-4xl font-bold ${P_ACCENTS[i]}`}>0{i + 1}</p>
              <h3 className="mt-3 font-display text-xl font-semibold leading-snug">{p.step}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/60">{p.text}</p>
            </li>
          ))}
          <li className="reveal flex items-center border-2 border-dashed border-paper/30 p-6">
            <p className="text-sm leading-relaxed text-paper/70">Every stage is verified before the next begins — the same rule behind every project on this site.</p>
          </li>
        </ol>
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
        <SectionHeading accent="bg-coral" index="04" eyebrow="About & Skills" title={<>A developer who verifies<br />before he claims.</>} />
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="reveal max-w-[280px]">
              <Portrait />
            </div>
            <p className="dropcap reveal lede mt-10 text-soft">
              I'm {site.name}, a software developer working with React, JavaScript, Node.js and MongoDB. My recent work is PRINTORA — a complete print-on-demand platform with a customer design studio, a multi-currency storefront and a full operations admin, built phase by phase and verified end-to-end at every step. I work with clients in Pakistan and worldwide.
            </p>
            <p className="reveal mt-6 leading-relaxed text-soft">
              That project shaped how I work: design first, then build in stages; keep changes targeted so working features stay working; and never call something “done” or “live” until it has actually been tested. I focus on practical business problems — stores that need to sell, schools and teams still running on spreadsheets, tools that should just work — and I'd rather show an honest placeholder than an invented result, which is exactly how this portfolio treats EduCore while its case study is completed.
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
          <p className="folio text-lime">05 — Contact</p>
          <span aria-hidden="true" className="h-px flex-1 bg-white/25" />
          <p className="folio hidden text-white/60 sm:block">No pressure, no obligation</p>
        </div>
        <div className="mt-10 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="reveal display-1">Have a project in mind? <span className="text-lime">Let's discuss it properly.</span></h2>
            <p className="reveal lede mt-6 max-w-lg text-white/85">
              Tell me what you're building. You'll get an honest reply — scope, approach, timeline and cost — before any commitment.
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
                const subject = encodeURIComponent(`Project enquiry (${fd.get('projectType') || 'General'}) — ${fd.get('name') || 'Website visitor'}`)
                const body = encodeURIComponent(
                  `Project type: ${fd.get('projectType') || '—'}\nBudget range: ${fd.get('budget') || 'Not specified'}\n\n${fd.get('message') || ''}\n\n— ${fd.get('name') || ''} (${fd.get('replyEmail') || ''})`,
                )
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
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium">Project type
                  <select name="projectType" required defaultValue="Business website" className="mt-2 w-full border-2 border-ink bg-white px-3.5 py-3">
                    {services.map((s) => <option key={s.title} value={s.title}>{s.title}</option>)}
                    <option value="Something else">Something else</option>
                  </select>
                </label>
                <label className="block text-sm font-medium">Budget range <span className="font-normal text-muted">(optional)</span>
                  <select name="budget" defaultValue="" className="mt-2 w-full border-2 border-ink bg-white px-3.5 py-3">
                    <option value="">Prefer not to say yet</option>
                    <option>Under PKR 50,000</option>
                    <option>PKR 50,000 – 150,000</option>
                    <option>PKR 150,000 – 500,000</option>
                    <option>Over PKR 500,000</option>
                    <option>Not sure — need guidance</option>
                  </select>
                </label>
              </div>
              <label className="mt-5 block text-sm font-medium">About your project
                <textarea name="message" required rows={5} className="mt-2 w-full border-2 border-ink bg-white px-3.5 py-3" placeholder="What are you building, who is it for, and by when?" />
              </label>
              <button type="submit" disabled={!email} className="mt-7 w-full bg-cobalt px-6 py-3.5 font-display text-sm font-semibold text-white transition-colors hover:bg-ink disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto">
                {email ? 'Send via email' : 'Form activates when owner adds email'}
              </button>
              {!email && <p className="mt-3.5 text-xs leading-relaxed text-muted">Honest note: no email service is configured yet, so this form cannot send anything today. It activates — with your project type and budget included — as soon as the owner's verified email is added. Until then, GitHub is the working contact route.</p>}
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
      <Trust />
      <Work />
      <Services />
      <Process />
      <About />
      <ContactSection />
    </>
  )
}
