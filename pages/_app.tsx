import "../styles/global.css";
import "../styles/color.css";
import "../styles/font.css";

import { KimochiiPointer } from "kimochii-pointer";
import type { AppProps } from "next/app";
import { useEffect } from "react";

import { LayoutDefault } from "../components/layout/LayoutDefault";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    if (!process.browser) return;
    const pointer = new KimochiiPointer();
    pointer.mount();

    return () => {
      pointer.unmount();
    };
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
