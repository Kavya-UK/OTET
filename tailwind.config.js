/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        register: "url('./assets/images/login/Register.jpg')",
        aboutusBg: "url('./assets/images/about/aboutUsBg.png')",
      },
      fontFamily: {
        BasicSans: ["BasicSans", "sans-serif"],
        BasicSansLight: ["BasicSansLight", "sans-serif"],
        BasicSansBold: ["BasicSansBold", "sans-serif"],
        PoppinsRegular: ["PoppinsRegular"],
        PoppinsItalic: ["PoppinsItalic"],
        HenrietteBold: ["HenrietteBold"],
        BahnschriftRegular: ["BahnschriftRegular"],
        PoppinsMedium: ["PoppinsMedium"],
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
        darkBlack: " #252525",
        hexGray: "#E5E5E5",
        cyanBlue: "#E2F6F3",
        titleBlack: "#0C0B0B",
        mustardYellow: "#CF8B15",
        blackShade: "#030303",
        Grayish: "#F0F0F0",
        darkGrayish: "#70707091",
        mustardShade: "#C58B36",
      },
    },
  },
  plugins: [],
};

