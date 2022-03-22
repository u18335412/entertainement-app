module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ["0.813rem", "1rem"],
      sm: ["0.938rem", "1.188rem"],
      base: ["1.125rem", "1.438rem"],
      md: ["1.438rem", "1.875rem"],
      lg: ["2rem", "2.5rem"],
    },
    extend: {
      colors: {
        "Pure-White": "#FFFFFF",
        Red: "#FC4747",
        "Dark-Blue": "#10141E",
        "Greyish-Blue": "#5A698F",
        "Semi-Dark-Blue": "#161D2F",
      },
    },
  },
  plugins: [],
};
