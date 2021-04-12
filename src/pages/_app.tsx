import { Header } from "components";
import { StepsProvider } from "contexts/stepsContext";
import { AppProps } from "next/app";
import React from "react";
import { GlobalStyle } from "styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StepsProvider>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </StepsProvider>
  );
}

export default MyApp;
