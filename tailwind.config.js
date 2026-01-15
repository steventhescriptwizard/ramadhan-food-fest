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
        "primary": "#008a8a",
        "gold": "#D4AF37",
        "accent-gold": "#D4AF37",
        "background-light": "#ffffff",
        "background-dark": "#1a1d23",
        "surface-dark": "#242930",
        "deep-slate": "#2A2E36",
        "charcoal": "#1E2129",
      },
      fontFamily: {
        "display": ["Manrope", "sans-serif"],
        "serif": ["Noto Serif", "serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
