/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#FCE7BD",
      secondary: {
        pink: "#FF99C8",
        green: "#D0F4DE",
        blue: "#A2D2FF",
        yellow: "#FCF6BD",
      },
    },
    screens: {
      mb: "360px",
      tb: "640px",
      // => @media (min-width: 640px) { ... }

      lp: "1024px",
      // => @media (min-width: 1024px) { ... }

      dp: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      serif: "Ibarra Real Nova",
      sans: "Montserrat",
    },
    boxShadow: {
      "2xl": "0 -20px 70px -12px rgba(0, 0, 0, 0.15)",
      xl: "0 0px 50px -5px rgba(0,0,0,0.4)",
      "3xl": "0 25px 50px 0px rgba(0, 0, 0, 0.15)",
      md: "0 8px 25px -7px rgba(0, 0, 0, 0.4)",
      inner: "inset 0 0 20px 2px rgba(0, 0, 0, 0.3)",
      pn: "0 10px 15px 5px rgba(0, 0, 0, 0.2)",
      sm: "0 5px 10px 0px rgba(0, 0, 0, 0.1)",
    },
  },
  variants: {
    extend: {
      backgroundImage: {
        bgimage: 'url("./src/assets/images/bgimage.png")',
      },
    },
  },
  plugins: [],
};
