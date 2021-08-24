import "ress/dist/ress.min.css";
import "../styles/color.css";
import "../styles/font.css";

import type { AppProps } from "next/app";

import { Layout } from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
