import React, { useCallback, useEffect, useState } from 'react'

/*
 * Project gallery with an accessible lightbox.
 * - Images keep their natural aspect ratio (never stretched).
 * - Below-the-fold images lazy-load.
 * - Lightbox: close button, backdrop click, Escape, arrow-key navigation,
 *   body scroll-lock while open.
 */
export default function Gallery({ items, projectTitle }) {
  const [open, setOpen] = useState(null) // index or null

  const close = useCallback(() => setOpen(null), [])
  const step = useCallback(
    (dir) => setOpen((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length]
  )

  useEffect(() => {
    if (open === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, close, step])

  if (!items || items.length === 0) return null
  const current = open !== null ? items[open] : null

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2">
        {items.map((item, i) => (
          <figure
            key={item.src}
            className={
              'rounded-2xl border border-line bg-card p-2.5 ' +
              (i === 0 && items.length % 2 === 1 ? 'sm:col-span-2' : '')
            }
          >
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="block w-full cursor-zoom-in overflow-hidden rounded-xl focus-visible:outline-none"
              aria-label={`View larger: ${item.alt}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                width={item.size ? item.size[0] : undefined}
                height={item.size ? item.size[1] : undefined}
                loading="lazy"
                decoding="async"
                className="h-auto w-full rounded-xl"
              />
            </button>
            <figcaption className="px-2 pb-1.5 pt-3 text-sm leading-relaxed text-soft">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${projectTitle} — image viewer`}
          className="fixed inset-0 z-[60] flex flex-col bg-navy/95 backdrop-blur-sm"
          onClick={close}
        >
          <div
            className="flex items-center justify-between gap-4 px-4 pb-2 pt-[max(1rem,env(safe-area-inset-top))] sm:px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="folio text-soft">
              {open + 1} / {items.length}
            </p>
            <button
              type="button"
              onClick={close}
              aria-label="Close image viewer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-card text-xl leading-none text-ink transition hover:border-accent"
            >
              ×
            </button>
          </div>
          <div
            className="flex min-h-0 flex-1 items-center justify-center gap-2 px-3 pb-3 sm:gap-4 sm:px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous image"
              className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-card text-ink transition hover:border-accent sm:flex"
            >
              ←
            </button>
            <figure className="min-w-0 text-center">
              <img
                src={current.src}
                alt={current.alt}
                className="mx-auto max-h-[74vh] w-auto max-w-full rounded-xl border border-line object-contain"
              />
              <figcaption className="mx-auto max-w-2xl px-2 pt-3 text-sm leading-relaxed text-soft">
                {current.caption}
              </figcaption>
            </figure>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next image"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-card text-ink transition hover:border-accent sm:flex"
            >
              →
            </button>
          </div>
        </div>
      )}
    </>
  )
}
