import "zenn-content-css";

import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { BlogArticle } from "../../components/display/BlogArticle";
import { Typography } from "../../components/general/Typography";
import { SingleColmunLayout } from "../../components/layout/SingleColmunLayout";
import {
  getBlogArticle,
  getBlogArticleSlugs,
  getFilePath,
} from "../../helpers/blogArticle";
import type { BlogArticle as BlogArticleType } from "../../types/blogArticle";

export type ArticlePageProps = {
  blogArticle: BlogArticleType;
};

export type ArticlePageParams = {
  slug: string;
};

export const getStaticPaths: GetStaticPaths<ArticlePageParams> = async () => {
  const slugs = await getBlogArticleSlugs();
  const paths = slugs.map((blogArticlePath) => ({
    params: { slug: blogArticlePath },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<
  ArticlePageProps,
  ArticlePageParams
> = async ({ params }) => {
  const slug = params?.slug;

  if (!slug) {
    return { notFound: true };
  }

  const blogArticle = await getBlogArticle(getFilePath(slug));

  return { props: { blogArticle } };
};

const ArticlePage: NextPage<ArticlePageProps> = ({ blogArticle }) => {
  return (
    <SingleColmunLayout>
      <Head>
        <title>{blogArticle.metadata.title} | akutagawa.dev</title>
        <meta name="description" content={blogArticle.metadata.description} />
      </Head>

      <div className="mt-24">
        <div className="">
          <Link href="/">
            <a
              className="py-2 px-px hover:underline"
              data-kimochii-pointer="expanded"
            >
              <Typography className="text-lg">{"<< home"}</Typography>
            </a>
          </Link>
        </div>
        <div className="mt-4">
          <BlogArticle blogArticle={blogArticle} />
        </div>
      </div>
    </SingleColmunLayout>
  );
};

export default ArticlePage;
