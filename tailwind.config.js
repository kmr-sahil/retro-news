/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      fontFamily: {
        'play': ['Playfair Display', 'serif']
      },
    },
    screens: {
      'tablet': '474px',
      // => @media (min-width: 640px) { ... }

      'tabletlg': '767px',
      // => @media (min-width: 1024px) { ... }

      'laptop': '991px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}