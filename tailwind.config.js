/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        register: "url('./assets/images/login/Register.jpg')",
      },
      fontFamily: {
        BasicSans: ["BasicSans", "sans-serif"],
        BasicSansLight: ["BasicSansLight", "sans-serif"],
        BasicSansBold: ["BasicSansBold", "sans-serif"],
      },
      colors: {
        codGray: "#292F33",
        codGrayLight: "#292f33d6",
        eastBay: "#545871",
        eastBayLight: "#5458719e",
        lightGray: "#757993",
        placeholderGray: "#9FA1AF",
        shadeGray: "#00828247",
        shadeBlue: "#008282",
        shadesofGray: "#757993ad",
        lightBlue: "#008282b3",
      },
    },
  },
  plugins: [],
};

