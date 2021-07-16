import { mode, Styles } from "@chakra-ui/theme-tools";
import { textPrimary } from "./colors";

const styles: Styles = {
  global: (props) => ({
    body: {
      fontFamily: "body",
      color: textPrimary(props),
      bg: mode("white", "gray.800")(props),
      transition: "background-color 0.2s",
      overflowX: "hidden",
      lineHeight: "base",
      "-webkit-font-smoothing": "antialiased",
      "-moz-osx-font-smoothing": "grayscale",
    },
    "*::placeholder": {
      color: mode("gray.400", "whiteAlpha.400")(props),
    },
    "*, *::before, &::after": {
      borderColor: mode("gray.200", "whiteAlpha.300")(props),
      wordWrap: "break-word",
    },
    // TODO: check
    "@media (prefers-reduced-motion: reduce)": {
      "*, *::before, &::after": {
        transition: "none !important",
      },
    },
  }),
};

export default styles;
