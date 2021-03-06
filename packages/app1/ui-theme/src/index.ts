import { extendTheme } from "@chakra-ui/react";
import foundations from "./foundations";
import components from "./components";
import styles from "./styles";
import * as palette from "./palette";

// Highly inspired by awesome library https://github.com/chakra-ui/chakra-ui

const theme = extendTheme({
  ...foundations,
  styles,
  palette,
  components,
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
});

export * as colors from "./colors";

export default theme;
