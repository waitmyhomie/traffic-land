/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        animation: {
          'marquee': 'marquee 30s linear infinite',
          'marquee-reverse': 'marquee-reverse 30s linear infinite',
        },
        keyframes: {
          marquee: {
            '0%': { transform: 'translateX(0) translateY(-50%)' },
            '100%': { transform: 'translateX(-50%) translateY(-50%)' },
          },
          'marquee-reverse': {
            '0%': { transform: 'translateX(-50%) translateY(-50%)' },
            '100%': { transform: 'translateX(0) translateY(-50%)' },
          },
        },
      },
    },
    plugins: [],
  }