import "ress/dist/ress.min.css";
import "../styles/global.css";
import "../styles/color.css";
import "../styles/font.css";

import type { AppProps } from "next/app";

import { LayoutDefault } from "../components/layout/LayoutDefault";
import { Pointer } from "../components/util/Pointer";
import { Stalker } from "../components/util/Stalker";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <LayoutDefault>
        <Component {...pageProps} />
      </LayoutDefault>

      <Stalker />
      <Pointer />
    </>
  );
}
export default MyApp;
