/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#1E2E5C",
      },
      screens: {
        "max-rp": { max: "900px" }, // custom media query for registerPatient.
        "between-rp": { max: "900px", min: "650px" },
      },
    },
  },
  plugins: [],
};
