/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FAF6EF',
        parchment: '#F3EDE1',
        sand: '#E7DCC8',
        line: '#DED2BE',
        ink: '#1C1710',
        soft: '#4A4237',
        muted: '#7A7060',
        clay: '#A34A24',
        claydark: '#843A1B',
        moss: '#5C6650',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: { widest2: '0.22em' },
      maxWidth: { shell: '76rem' },
    },
  },
  plugins: [],
}
