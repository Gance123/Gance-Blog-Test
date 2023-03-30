import "../styles/main.scss";
import type { AppProps } from "next/app";
import { ChakraBaseProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#1A202C",
      },
    },
  },
  fonts: {
    heading: "Noto Sans JP, sans-serif",
    body: "Noto Sans JP, sans-serif",
  },
  colors: {
    grayColor: "rgb(248, 247, 245)",
    blackColor: "#1A202C",
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraBaseProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraBaseProvider>
  );
}
