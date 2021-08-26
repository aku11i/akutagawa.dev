import "ress/dist/ress.min.css";
import "../styles/global.css";
import "../styles/color.css";
import "../styles/font.css";

import type { AppProps } from "next/app";
import { useEffect } from "react";

import { LayoutDefault } from "../components/layout/LayoutDefault";
import { variableCursor } from "../helpers/variableCursor";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    if (!process.browser) return;
    variableCursor().mount();
  }, []);

  return (
    <>
      <LayoutDefault>
        <Component {...pageProps} />
      </LayoutDefault>
    </>
  );
}
export default MyApp;
