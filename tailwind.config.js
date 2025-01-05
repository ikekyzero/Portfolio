/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,md}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2eaadc',
        secondary: '#37352f',
        customGray: '#f7f6f3',
        notionGray: '#e6e6e6',
        notionDark: '#2f3437',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica', 'sans-serif'],
      },
      zIndex: {
        '-10': '-10',
      },
    },
  },
  plugins: [],
}