/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "375px",
      // => @media (min-width: 375px) { ... }

      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "960px",
      // => @media (min-width: 960px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    colors: {
      red: "#EB212E",
      blue: "#003DA5",
      marine: "#1d355e",
      gray: "#7e868c",
      white: "#f8fafc",
    },
    extend: {},
  },
  plugins: [],
};
