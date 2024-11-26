/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fira: ["Fira Code", "monospace"],
        rale: ["Raleway", "sans-serif"],
      },
      colors: {
        primary: "var(--primary)",
        secondary: " var(--secondary)",
        midwhite: "var(--midwhite)",

        background: "var(--background)",
      },
    },
  },
  plugins: [],
};
