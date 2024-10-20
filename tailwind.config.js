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
        cinza: "#868d96",
        butaohover: "#0383D2",
        azulEscuro: "#0C2047",
        azulGradiente: "#DCE4FF",
        preto: "#070707",
        line: "#cccccc",
        servicos: "#DCEDFF",
        input: "#E8E7E7"
      }
    },
  },
    plugins: [],
};
