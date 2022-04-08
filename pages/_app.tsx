import React from "react";
import { AppProps } from "next/app";
import "@styles/global.scss";
import "@styles/reset.scss";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApp;
