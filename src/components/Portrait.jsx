import React, { useState } from 'react'
import { site } from '../data/site.js'

/*
 * The owner's real photo as an editorial plate: shown COMPLETE as a
 * circle inside a warm paper-toned frame with a hairline border. The
 * photo's own subject is a circular portrait;
 * the circular mask (object-cover, aspect preserved — never stretched)
 * removes the photo's square white canvas, per the owner's instruction.
 * Until site.photo resolves, a labelled monogram placeholder renders —
 * never a fake face or stock photo.
 */
export default function Portrait() {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)
  const showPhoto = site.photo && !failed

  return (
    <figure>
      <div className="relative rounded-[3px] border border-line bg-card p-4 sm:p-5">
        <div className="relative overflow-hidden rounded-full border border-line bg-surface">
          {/* Fallback art — labelled placeholder (never a fake face) */}
          <div aria-hidden="true" className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-surface p-6 text-center">
            <span className="font-display text-6xl font-bold text-accent">SR</span>
            <span className="font-mono text-[9px] uppercase tracking-widest2 text-muted">{site.name}</span>
          </div>
          {showPhoto && (
            <img
              src={site.photo}
              alt={`${site.name} — ${site.role}`}
              width="1200"
              height="1200"
              loading="eager"
              decoding="async"
              onLoad={() => setLoaded(true)}
              onError={() => setFailed(true)}
              className={`relative aspect-square w-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
            />
          )}
        </div>
        <figcaption className="flex items-center gap-3 px-1 pb-1 pt-4">
          <span aria-hidden="true" className="h-px w-8 bg-accent" />
          <span className="font-mono text-[10px] uppercase tracking-widest2 text-soft">
            {showPhoto && loaded ? `${site.name} — ${site.role}` : 'Portrait — photo by owner'}
          </span>
        </figcaption>
      </div>
    </figure>
  )
}
