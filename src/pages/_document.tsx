import { Head, Html, Main, NextScript } from "next/document";
import { VoidFunctionComponent } from "react";

const MyDocument: VoidFunctionComponent = () => (
  <Html lang="ja">
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="alternate"
        type="application/rss+xml"
        href="/articles.rss"
        title="aku11i's RSS feed"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
