import "zenn-content-css";

import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { BlogArticle } from "../../components/display/BlogArticle";
import {
  getBlogArticle,
  getBlogArticlePaths,
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
  const blogArticlePaths = await getBlogArticlePaths();
  const paths = blogArticlePaths.map((blogArticlePath) => ({
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
    <div>
      <BlogArticle blogArticle={blogArticle} />
    </div>
  );
};

export default ArticlePage;
