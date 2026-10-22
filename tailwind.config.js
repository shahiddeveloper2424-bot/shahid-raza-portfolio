/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // ——— Midnight navy system (strict — documented in README > Design) ———
        paper: '#0B1220',    // primary background (midnight navy)
        navy: '#0B1220',
        surface: '#111C2E',  // secondary surface
        card: '#162238',     // elevated cards
        line: '#29374E',     // borders & dividers
        ink: '#F7FAFF',      // main text (clean white)
        soft: '#AAB7CC',     // secondary text (cool slate)
        muted: '#8296B1',    // tertiary text / labels on navy
        accent: '#3478F6',   // primary accent (electric blue)
        cyan: '#38BDF8',     // supporting accent (soft cyan, sparing)
        violet: '#7465F5',   // CTA gradient end only
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: { widest2: '0.22em' },
      maxWidth: { shell: '80rem' },
    },
  },
  plugins: [],
}
