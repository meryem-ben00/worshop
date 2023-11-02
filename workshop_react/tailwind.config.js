/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      evnavmd: { max: "950px" },
      evnavsm: { max: "815px" },
      evmd: { max: "1300px" },
      evsm: { max: "810px" },
      maxrp: { max: "900px" },
      betweenrp: { max: "900px", min: "650px" },
    },
    extend: {
      colors: {
        bgColor: "#1E2E5C",
      },
    },
  },
  plugins: [],
};
