/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['var(--font-inter)'],
      },
      colors: {
        azul: "#009EFF",
        cinza: "#929BA6",
        butaohover: "#0383D2",
        azulEscuro: "#0C2047"
      }
    },
  },
    plugins: [],
};
