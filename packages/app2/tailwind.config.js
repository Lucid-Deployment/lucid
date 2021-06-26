const blue = {
  600: "#0263e0",
}

const gray = {
  200: "#e1e3ea",
}

module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue,
        brand: blue,
        gray,
      },
      textColor: {
        primary: "#1f304c",
      },
      transitionDuration: {
        250: "250ms",
      },
      zIndex: {
        5: "5",
      },
      transitionTimingFunction: {
        "xs-slow-acceleration": "cubic-bezier(0.4, 0, 1, 1)",
        "xs-slow-acceleration-md-slower-deceleration":
          "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      boxShadow: {
        xl: "0 8px 32px rgb(18 28 45 / 10%)",
        "gray-200-hr-1": `0 1px 0 0 ${gray["200"]}`,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
