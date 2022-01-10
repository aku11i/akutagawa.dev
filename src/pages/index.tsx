import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { Articles } from "../components/display/Articles";
import { Profile } from "../components/display/Profile";
import { SocialAccountLinks } from "../components/display/SocialAccountLinks";
import { fetchArticles } from "../helpers/article";
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
    <>
      <Head>
        <title>akutagawa.dev</title>
        <meta name="description" content="A profile of software engineer." />
      </Head>

      <div className="flex justify-center">
        <main className="mb-36 w-11/12 max-w-3xl sm:w-10/12 md:w-9/12 lg:w-7/12 xl:w-6/12">
          <div className="mt-24">
            <Profile />
          </div>

          <div className="mt-12">
            <SocialAccountLinks />
          </div>

          <div className="mt-16">
            <Articles articles={articles} />
          </div>
        </main>
      </div>
    </>
  );
};

export default Index;
