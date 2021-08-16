import { css } from "@emotion/react";
import { NextPage } from "next";
import Head from "next/head";

const Index: NextPage = () => {
  return (
    <div css={styles.container}>
      <Head>
        <title>akutagawa.dev</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main css={styles.main}></main>
    </div>
  );
};

const styles = {
  container: css`
    min-height: 100vh;
    height: 100vh;

    background-color: var(--color-background);
  `,

  main: css``,
};

export default Index;
