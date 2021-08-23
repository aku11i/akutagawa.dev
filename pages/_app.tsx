import "ress/dist/ress.min.css";
import "../styles/color.css";
import "../styles/font.css";

import type { AppProps } from "next/app";
import Head from "next/head";

import { Layout } from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
