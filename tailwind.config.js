/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#2c67ed',
          50: '#edf4ff',
          100: '#dbe7fe',
          200: '#bfd5fe',
          300: '#93bafd',
          400: '#6095fa',
          500: '#2c67ed',
          600: '#1d4ed8',
          700: '#1e40af',
          800: '#1e3a8a',
          900: '#0f172a',
          glow: 'rgba(44, 103, 237, 0.65)'
        },
        void: {
          950: '#03050a',
          900: '#060a14',
          850: '#090f1f',
          800: '#0d152c',
          700: '#121d3c'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Cinzel"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      animation: {
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'reverse-spin': 'reverseSpin 25s linear infinite',
        'mana-shimmer': 'manaShimmer 4s ease infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(44, 103, 237, 0.4), inset 0 0 15px rgba(44, 103, 237, 0.2)' 
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(44, 103, 237, 0.8), inset 0 0 25px rgba(44, 103, 237, 0.4)' 
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        reverseSpin: {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' }
        },
        manaShimmer: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.9' }
        }
      }
    },
  },
  plugins: [],
}
