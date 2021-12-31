import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { Article } from "../articles";
import { ArticleList } from "../components/display/ArticleList";
import { Profile } from "../components/display/Profile";
import { SocialAccountLinks } from "../components/display/SocialAccountLinks";
import { getArticles } from "../helpers/article";

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

      <div className="flex justify-center">
        <main className="mb-36 w-11/12 sm:w-10/12 md:w-9/12 lg:w-7/12 xl:w-6/12 max-w-3xl">
          <div className="mt-24">
            <Profile />
          </div>

          <div className="mt-12">
            <SocialAccountLinks />
          </div>

          <div className="mt-16">
            <ArticleList articles={articles} />
          </div>
        </main>
      </div>
    </>
  );
};

export default Index;
