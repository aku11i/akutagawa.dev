import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { Articles } from "../components/display/Articles";
import { Profile } from "../components/display/Profile";
import { SocialAccountLinks } from "../components/display/SocialAccountLinks";
import { SingleColmunLayout } from "../components/layout/SingleColmunLayout";
import { fetchArticles } from "../helpers/article.server";
import { Article } from "../types/article";

export type IndexProps = {
  articles: Article[];
};

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const articles = await fetchArticles();

  return {
    props: { articles },
    revalidate: 60 * 10, // In Seconds
  };
};

const Index: NextPage<IndexProps> = ({ articles }) => {
  return (
    <SingleColmunLayout>
      <Head>
        <title>akutagawa.dev</title>
        <meta name="description" content="A profile of software engineer." />
      </Head>

      <div className="mt-24 lg:mt-36">
        <Profile />
      </div>

      <div className="mt-12">
        <SocialAccountLinks />
      </div>

      <div className="mt-12">
        <Articles articles={articles} />
      </div>
    </SingleColmunLayout>
  );
};

export default Index;
