/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0B',
        paper: '#F8F1E7',
        gold: '#C9A96E',
        terra: '#B66E4B',
        sage: '#929C7B',
      },
      fontFamily: {
        sans: ['Inter', 'Avenir Next', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['Instrument Serif', 'Iowan Old Style', 'Times New Roman', 'serif'],
        mono: ['JetBrains Mono', 'Cascadia Code', 'monospace'],
      },
      fontSize: {
        'fluid-h1': 'clamp(4.4rem, 8.5vw, 7rem)',
        'fluid-h2': 'clamp(2.8rem, 4.8vw, 4.4rem)',
        'fluid-body': 'clamp(1rem, 2vw, 1.375rem)',
      },
      maxWidth: {
        container: '1280px',
      },
      screens: {
        xs: '420px',
      },
    },
  },
  plugins: [],
};
