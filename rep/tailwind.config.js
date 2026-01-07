/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'oxford': '#0A231F',
        'bone': '#F9F6EE', // Corrected hex code
        'signal': '#D65A31',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['\'Playfair Display\'', 'serif'],
        'mono': ['\'JetBrains Mono\'', 'monospace'],
      },
    },
  },
  plugins: [],
}
