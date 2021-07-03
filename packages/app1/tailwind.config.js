module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        initial: "initial",
        gray: {
          700: "#313131",
          400: "#6e6e6e",
          50: "#f2f2f2",
        },
        purple: {
          500: "hsl(233, 60%, 63%)",
        },
        blue: {
          500: "#4669be",
          600: "#3356ab",
          700: "#27438e",
        },
        letterSpacing: {
          wide: "0.03125rem",
        },
        "brand-500": "var(--brand-500)",
      },
      zIndex: {
        2: 2,
      },
      textColor: {
        primary: "var(--text-primary)",
      },
      boxShadow: {
        mdEven: "0 1px 0 rgb(0 0 0 / 6%)",
      },
      transitionDuration: {
        350: "350ms",
      },
      transitionTimingFunction: {
        "symmetric-center-fast": "cubic-bezier(.77,0,.175,1)",
      },
    },
  },
  variants: {
    extend: {
      ringColor: ["focus-visible"],
      ringWidth: ["focus-visible"],
      outline: ["focus-visible"],
    },
  },
  plugins: [],
};
