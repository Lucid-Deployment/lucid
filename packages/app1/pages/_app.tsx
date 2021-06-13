import type { AppProps } from "next/app"
import { ChakraProvider, chakra } from "@chakra-ui/react"
import theme from "@lucid/app1-ui-theme"
import * as React from "react"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <chakra.div position="relative" zIndex={0}>
        <Component {...pageProps} />
      </chakra.div>
    </ChakraProvider>
  )
}

export default MyApp
