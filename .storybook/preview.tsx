import { ChakraProvider } from "@chakra-ui/react";
import theme from "@lucid/app1-ui-theme";
import * as React from "react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withChakra = (story: Function) => (
  <ChakraProvider theme={theme}>{story()}</ChakraProvider>
);

export const decorators = [withChakra];
