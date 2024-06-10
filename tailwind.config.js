/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neonGreen: "hsla(75, 94%, 57%, 1)",
        black: "hsla(0, 0%, 8%, 1)",
        darkGrey: "hsla(0, 0%, 12%, 1)",
        grey: "hsla(0, 0%, 20%, 1)",
        white: "hsla(0, 0%, 100%, 1)",
      },
      fontFamily: {
        custom: ["Inter", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
