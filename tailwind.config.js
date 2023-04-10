module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray_303: "#e2e2ea",
        gray_700: "#666666",
        deep_orange_A200: "#f86338",
        gray_901: "#1a242d",
        gray_800: "#505050",
        gray_900: "#11142d",
        lime_900: "#7a6005",
        gray_300: "#e0e0e0",
        gray_100: "#f3f6f8",
        bluegray_900: "#333333",
        black_900: "#000000",
        bluegray_300: "#9a9ab0",
        deep_orange_A201: "#f3692e",
        white_A700: "#ffffff",
      },
      fontFamily: { dmsans: "DM Sans", merriweather: "Merriweather" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
