/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // ——— Colorful premium system (documented in README > Design) ———
        paper: '#F8F7F2',      // soft white — light base
        ink: '#171717',        // deep ink — text + dark sections
        ink2: '#212121',
        soft: '#45453F',       // body text on light
        muted: '#6F6F66',      // secondary text on light
        line: '#E2E0D5',       // borders on light
        cobalt: '#635BFF',     // primary brand — PRINTORA
        cobaltdeep: '#4A43D6', // cobalt hover/depth
        cobaltlt: '#A5A1FF',   // cobalt tint for dark backgrounds
        ice: '#ECEAFF',        // cobalt tint surface
        coral: '#FF6B6B',      // secondary — EduCore
        coraldeep: '#D94343',  // coral for text on light
        blush: '#FFEDED',      // coral tint surface
        lime: '#D9F75D',       // highlight — PDF Toolkit Pro
        limedeep: '#7C9A16',   // lime for text on light
        limetint: '#F6FCD9',   // lime tint surface
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
