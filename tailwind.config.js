/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FAF6EF',
        parchment: '#F2ECDF',
        sand: '#E7DCC8',
        line: '#DDD1BD',
        ink: '#1B1611',
        ink2: '#241E17',
        soft: '#4A4237',
        muted: '#776C5B',
        clay: '#A34A24',
        claydark: '#843A1B',
        moss: '#5C6650',
        gold: '#B98A2F',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: { widest2: '0.22em' },
      maxWidth: { shell: '80rem' },
    },
  },
  plugins: [],
}
