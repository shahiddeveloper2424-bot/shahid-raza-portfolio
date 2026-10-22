import React, { useState } from 'react'
import { site } from '../data/site.js'

/**
 * The owner's real portrait.
 * Source path lives in site.photo (public/images/shahid-raza.jpg).
 * HONESTY RULE: until that real file exists, this renders a designed,
 * clearly labelled placeholder — never a stock photo or a fake face.
 * The moment the owner drops the real JPG in, it appears automatically.
 */
export default function Portrait({ caption = true }) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)
  const showPhoto = Boolean(site.photo) && !failed

  return (
    <figure>
      <div className="dotgrid relative aspect-[4/3] overflow-hidden border-2 border-ink bg-cobalt">
        {showPhoto && (
          <img
            src={site.photo}
            alt={`${site.name} — ${site.role}`}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          />
        )}
        {!loaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white" aria-hidden={showPhoto}>
            <span className="font-display text-7xl font-bold tracking-tight sm:text-8xl">SR</span>
            <span className="folio mt-4 text-lime">{site.name}</span>
            <span className="folio mt-1.5 text-white/60">{site.role}</span>
            <span className="absolute bottom-3 left-3 bg-ink px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-widest2 text-white">
              Real photo here soon — public/images/shahid-raza.jpg
            </span>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="folio mt-3 flex items-center gap-3 text-muted">
          <span aria-hidden="true" className="h-[3px] w-8 bg-cobalt" />
          {loaded ? `${site.name} — ${site.role}` : 'Portrait placeholder — the owner’s real photo will appear here'}
        </figcaption>
      )}
    </figure>
  )
}
