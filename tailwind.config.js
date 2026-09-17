/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        mono: ['var(--font-fira-code)', '"Fira Code"', 'monospace'],
        poppins: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#2563EB',
          blueDark: '#1E40AF',
          blueSoft: '#EFF6FF',
          green: '#22C55E',
          greenDark: '#16A34A',
          greenSoft: '#F0FDF4',
          navy: '#0F172A',
          slate: '#64748B',
          border: '#E2E8F0',
          canvas: '#F8FAFC'
        }
      },
      boxShadow: {
        'glow-blue': '0 10px 30px -10px rgba(37, 99, 235, 0.35)',
        'pill': '0 20px 45px -15px rgba(15, 23, 42, 0.08), 0 4px 12px rgba(15, 23, 42, 0.04)',
        'card-hover': '0 25px 50px -12px rgba(37, 99, 235, 0.12)'
      }
    },
  },
  plugins: [],
};
