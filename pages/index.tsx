import { css } from "@emotion/react";
import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

import { ArticleList } from "../components/ArticleList";
import { Profile } from "../components/Profile";
import { SocialAccountLinks } from "../components/SocialAccountLinks";
import { Article, getArticles } from "../helpers/article";
import { Screen } from "../styles/media";
import { size } from "../styles/size";

const Index: NextPage = () => {
  const [articles, setArticles] = useState<Article[]>();
  useEffect(() => {
    getArticles().then(setArticles);
  }, []);

  return (
    <div css={styles.container}>
      <Head>
        <title>akutagawa.dev</title>
        <meta name="description" content="" />
      </Head>

      <main css={styles.main}>
        <Profile />
        <SocialAccountLinks />

        <ArticleList articles={articles} />
      </main>
    </div>
  );
};

const styles = {
  container: [
    css`
      background-color: var(--color-background);
      height: 100vh;
    `,
  ],

  main: [
    css`
      padding: 0 ${size(4)};
    `,
    Screen.sm(css`
      padding: 0 ${size(12)};
    `),
    Screen.md(css`
      padding: 0 ${size(24)};
    `),
    Screen.lg(css`
      padding: 0 ${size(36)};
    `),
    Screen.xl(css`
      padding: 0 ${size(48)};
    `),
  ],
};

export default Index;
