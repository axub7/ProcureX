/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0b1020', bgsoft: '#11182e', card: '#151d36', card2: '#1b2545',
        line: '#26314f', txt: '#e8ecf6', muted: '#9aa6c4',
        brand: '#5b7cfa', brand2: '#22d3ee', accent: '#a78bfa',
        good: '#34d399', bad: '#f87171',
      },
      boxShadow: { glow: '0 10px 30px rgba(0,0,0,.35)' },
      keyframes: {
        fade: { '0%': { opacity: 0, transform: 'translateY(8px)' }, '100%': { opacity: 1, transform: 'none' } },
      },
      animation: { fade: 'fade .4s ease' },
    },
  },
  plugins: [],
}