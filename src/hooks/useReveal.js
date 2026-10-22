import { useEffect } from 'react'

/**
 * Scroll-reveal, fail-safe by design:
 * - Content is visible by default. The hidden state is only ever applied
 *   by this hook, and only to elements below the viewport.
 * - Elements already in view are revealed immediately (no observer wait).
 * - A fallback timer reveals everything after 1.5s even if
 *   IntersectionObserver never fires — content can never stay hidden.
 * - prefers-reduced-motion: everything is simply shown, no animation.
 */
export function useReveal(deps = []) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal'))
    if (!els.length) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('reveal-in'))
      return
    }

    const inView = (el) => {
      const r = el.getBoundingClientRect()
      return r.top < window.innerHeight * 0.92 && r.bottom > 0
    }

    const pending = []
    els.forEach((el) => {
      if (inView(el)) el.classList.add('reveal-in')
      else {
        el.classList.add('reveal-init')
        pending.push(el)
      }
    })
    if (!pending.length) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('reveal-in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -30px 0px' }
    )
    pending.forEach((el) => io.observe(el))

    // Fail-safe: nothing stays hidden if the observer never delivers.
    const fallback = setTimeout(() => {
      pending.forEach((el) => el.classList.add('reveal-in'))
      io.disconnect()
    }, 1500)

    return () => {
      clearTimeout(fallback)
      io.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
