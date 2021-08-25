import "ress/dist/ress.min.css";
import "../styles/color.css";
import "../styles/font.css";

import type { AppProps } from "next/app";

import { LayoutDefault } from "../components/layout/LayoutDefault";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <LayoutDefault>
      <Component {...pageProps} />
    </LayoutDefault>
  );
}
export default MyApp;
