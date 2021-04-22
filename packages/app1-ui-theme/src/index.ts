import { extendTheme } from "@chakra-ui/react"
import foundations from "./foundations"
import components from "./components"
import styles from "./styles"
import * as palette from "./palette"

// Highly inspired by awesome library https://github.com/chakra-ui/chakra-ui

const theme = extendTheme({
  ...foundations,
  styles,
  palette,
  components,
})

export default theme
