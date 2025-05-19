/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        stars: "url('/stars.png')",
      },
      keyframes: {
        sparkle: {
          '0%, 100%': { opacity: 0.3 },
          '50%': { opacity: 0.7 },
        }
      },
      animation: {
        sparkle: 'sparkle 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
