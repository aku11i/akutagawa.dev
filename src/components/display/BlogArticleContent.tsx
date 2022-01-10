import Head from "next/head";
import { VoidFunctionComponent } from "react";
import initTwitterScriptInner from "zenn-embed-elements/lib/init-twitter-script-inner";

import { useMounted } from "../../hooks/useMounted";

export type BlogArticleContentProps = {
  contentHtml: string;
};

export const BlogArticleContent: VoidFunctionComponent<
  BlogArticleContentProps
> = ({ contentHtml }) => {
  useMounted(() => {
    if (!process.browser) return;
    import("zenn-embed-elements");
  });

  return (
    <>
      <Head>
        <script dangerouslySetInnerHTML={{ __html: initTwitterScriptInner }} />
      </Head>

      <div
        // eslint-disable-next-line tailwindcss/no-custom-classname
        className="znc"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </>
  );
};
