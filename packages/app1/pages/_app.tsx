import type { AppProps } from "next/app";
import { ChakraProvider, chakra } from "@chakra-ui/react";
import theme from "@lucid/app1-ui-theme";
import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastProvider } from "../features/toast/context";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <chakra.div position="relative" zIndex={0}>
          <ToastProvider>
            <Component {...pageProps} />
          </ToastProvider>
        </chakra.div>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
