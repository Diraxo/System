/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0E14',
        inkalt: '#0F131C',
        panel: '#121722',
        line: '#1C2230',
        muted: '#7A8699',
        paper: '#E8ECF1',
        teal: '#00E5C7',
        violet: '#7C5CFF',
        amber: '#FFB84D',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        grid: 'linear-gradient(#1C2230 1px, transparent 1px), linear-gradient(90deg, #1C2230 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
