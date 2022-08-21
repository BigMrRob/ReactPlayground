import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Layout from "../components/Layout";
import variables from "../styles/abstracts/_variables.module.scss";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={extendTheme({ brand: variables })}>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
