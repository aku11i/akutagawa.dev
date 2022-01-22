import Head from "next/head";
import { useRef, VoidFunctionComponent } from "react";
import initTwitterScriptInner from "zenn-embed-elements/lib/init-twitter-script-inner";

import { useMounted } from "../../hooks/useMounted";

export type BlogArticleContentProps = {
  contentHtml: string;
};

export const BlogArticleContent: VoidFunctionComponent<
  BlogArticleContentProps
> = ({ contentHtml }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useMounted(() => {
    if (!process.browser) return;
    import("zenn-embed-elements");

    if (!contentRef.current) return;

    // apply text shape
    contentRef.current
      .querySelectorAll("p, span, div.code-block-container")
      .forEach((el) => {
        el.setAttribute("data-kimochii-pointer", "text");
      });

    // apply expanded shape
    contentRef.current.querySelectorAll("a, img").forEach((el) => {
      el.setAttribute("data-kimochii-pointer", "expanded");
    });

    // 見出しにアンカーリンクを表示する
    contentRef.current
      .querySelectorAll("a.header-anchor-link")
      .forEach((el) => {
        el.innerHTML = "#";
        (el as HTMLElement).style.color = "#7e7e7e";
      });
  });

  return (
    <>
      <Head>
        <script dangerouslySetInnerHTML={{ __html: initTwitterScriptInner }} />
      </Head>

      <div
        ref={contentRef}
        // eslint-disable-next-line tailwindcss/no-custom-classname
        className="znc"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </>
  );
};
