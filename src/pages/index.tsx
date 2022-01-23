import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { Articles } from "../components/display/Articles";
import { Profile } from "../components/display/Profile";
import { SocialAccountLinks } from "../components/display/SocialAccountLinks";
import { SingleColmunLayout } from "../components/layout/SingleColmunLayout";
import { getAllArticles } from "../helpers/article";
import { Article } from "../types/article";

export type IndexPageProps = {
  articles: Article[];
};

export const getStaticProps: GetStaticProps<IndexPageProps> = async () => {
  const articles = await getAllArticles();

  return {
    props: { articles },
    revalidate: 60 * 10, // In Seconds
  };
};

const IndexPage: NextPage<IndexPageProps> = ({ articles }) => {
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

export default IndexPage;
