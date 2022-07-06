import React from "react";
import { AppProps } from "next/app";
import "@styles/global.scss";
import "@styles/reset.scss";
import 'react-credit-cards/lib/styles.scss';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApp;
