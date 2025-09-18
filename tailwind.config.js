/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'montserrat': ['Montserrat', 'sans-serif'],
          'ubuntu': ['Ubuntu', 'sans-serif'],
        },
        animation: {
          'marquee': 'marquee 30s linear infinite',
          'marquee-reverse': 'marquee-reverse 30s linear infinite',
          'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        },
        keyframes: {
          marquee: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-50%)' },
          },
          'marquee-reverse': {
            '0%': { transform: 'translateX(-50%)' },
            '100%': { transform: 'translateX(0)' },
          },
        },
        screens: {
          'xs': '480px',
          'sm': '640px',
          'md': '768px', 
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1536px',
          '3xl': '1920px',
        },
      },
    },
    plugins: [],
  }