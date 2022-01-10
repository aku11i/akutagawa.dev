import "../styles/global.css";
import "../styles/color.css";
import "../styles/font.css";

import type { AppProps } from "next/app";

import { DefaultLayout } from "../components/layout/DefaultLayout";
import { useKimochiiPointer } from "../hooks/KimochiiPointer";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useKimochiiPointer();

  return (
    <>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  );
}
export default MyApp;
