/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#0f172a',
      }
    },
  },
  plugins: [],
  extend: {
    backgroundImage: {
      'grid-dark': "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%230f172a'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
      'grid-light': "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23e2e8f0'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")"
    }
  }
}