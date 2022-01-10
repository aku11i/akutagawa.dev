import "../styles/global.css";
import "../styles/color.css";
import "../styles/font.css";

import { KimochiiPointer } from "kimochii-pointer";
import type { AppProps } from "next/app";
import { useEffect } from "react";

import { DefaultLayout } from "../components/layout/DefaultLayout";

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
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  );
}
export default MyApp;
