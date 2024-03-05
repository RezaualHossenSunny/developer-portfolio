/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1320px',
      },
      fontFamily: {
        'sans': [ "Open Sans", "sans-serif"]
        
      },
      colors: {
        'orange': '#FD6E0A',
      },
    },
  },
  plugins: [],
}