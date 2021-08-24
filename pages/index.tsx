import { css } from "@emotion/react";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { ArticleList } from "../components/ArticleList";
import { Profile } from "../components/Profile";
import { SocialAccountLinks } from "../components/SocialAccountLinks";
import { Article, getArticles } from "../helpers/article";
import { Screen } from "../styles/media";
import { size } from "../styles/size";

type StaticProps = {
  articles: Article[];
};

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  const articles = await getArticles();

  return {
    props: {
      articles,
    },
  };
};

const Index: NextPage<StaticProps> = ({ articles }) => {
  return (
    <>
      <Head>
        <title>akutagawa.dev</title>
        <meta name="description" content="A profile of software engineer." />
      </Head>

      <div css={styles.container}>
        <main css={styles.main}>
          <Profile css={styles.profile} />
          <SocialAccountLinks css={styles.accounts} />

          <ArticleList css={styles.articles} articles={articles} />
        </main>
      </div>
    </>
  );
};

const styles = {
  container: css`
    display: flex;
    justify-content: center;
  `,

  main: [
    css`
      margin-bottom: ${size(36)};
      width: 90%;
    `,
    Screen.sm(css`
      width: 80%;
    `),
    Screen.md(css`
      width: 70%;
    `),
    Screen.lg(css`
      width: 60%;
    `),
    Screen.xl(css`
      max-width: 800px;
      width: 50%;
    `),
  ],

  profile: css`
    margin-top: ${size(24)};
  `,

  accounts: css`
    margin-top: ${size(12)};
  `,

  articles: css`
    margin-top: ${size(18)};
  `,
};

export default Index;
