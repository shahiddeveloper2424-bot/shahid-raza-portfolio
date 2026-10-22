/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // ——— Editorial Paper system (documented in README > Design) ———
        // Warm paper, warm ink, ONE accent (brick). Token names are kept
        // from the previous theme so components did not need renaming;
        // the values below are the whole palette — no other hues.
        paper: '#F4EEE1',    // primary background (warm paper)
        navy: '#F4EEE1',     // legacy alias of paper (section backgrounds)
        surface: '#EBE2CC',  // deeper paper (alternating sections)
        card: '#FDFBF4',     // plates & cards (near-white warm)
        line: '#D8CBAE',     // hairlines & borders
        ink: '#1E1811',      // main text (warm near-black)
        soft: '#514739',     // secondary text (warm brown-grey)
        muted: '#8B7D64',    // tertiary text / labels
        accent: '#9E2B1E',   // THE accent — editorial brick red
        cyan: '#9E2B1E',     // legacy alias of accent (single-accent discipline)
        violet: '#9E2B1E',   // legacy alias of accent (CTA is solid, no gradient)
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', '"Times New Roman"', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: { widest2: '0.22em' },
      maxWidth: { shell: '80rem' },
    },
  },
  plugins: [],
}
