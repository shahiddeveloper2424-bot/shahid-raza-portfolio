import React from 'react'

/**
 * Shahid Raza monogram — a geometric SR ligature drawn as vector paths
 * (no typed text): a segment-style S in white sharing the baseline with
 * an R whose leg is the single cyan accent. Tile: deep blue-charcoal
 * with a muted navy border, matching the site palette.
 */
export default function LogoMark({ className = 'h-11 w-11' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Shahid Raza logo" focusable="false">
      <rect x="2" y="2" width="60" height="60" rx="15" fill="#111C2E" stroke="#29374E" strokeWidth="2" />
<path d="M28 24 C28 18.5, 15.5 18.5, 15.5 25 C15.5 31.5, 28.5 29.5, 28.5 36 C28.5 42.5, 15 42.5, 15 37" fill="none" stroke="#F7FAFF" strokeWidth="5.5" strokeLinecap="round" />
      <path d="M38 43 V19 H46 a6 6 0 0 1 0 12 H38" fill="none" stroke="#F7FAFF" strokeWidth="5.5" strokeLinecap="round" />
      <path d="M43 31 L50.5 43" fill="none" stroke="#38BDF8" strokeWidth="5.5" strokeLinecap="round" />
    </svg>
  )
}
