import * as fs from "node:fs/promises";
import * as path from "node:path";

import { BlogArticle, BlogArticleMetaData } from "../types/blogArticle";
import { markdownToHtml, readMarkdownFile } from "./markdown";

const BLOG_ARTICLES_PATH = path.join(process.cwd(), "articles");
const BLOG_ARTICLE_EXTENSION = ".md";

export const getBlogArticlePaths = async (): Promise<string[]> => {
  const files = (await fs.readdir(BLOG_ARTICLES_PATH))
    .filter((file) => file.endsWith(BLOG_ARTICLE_EXTENSION))
    .map((file) => path.join(BLOG_ARTICLES_PATH, file));

  const articles = await Promise.all(files.map((file) => getBlogArticle(file)));

  return articles
    .filter((article) => article.metadata.published)
    .map((article) => article.slug);
};

export const getBlogArticle = async (
  filePath: string
): Promise<BlogArticle> => {
  const { metadata, content } = await readMarkdownFile<BlogArticleMetaData>(
    filePath
  );

  const contentHtml = markdownToHtml(content);

  return { metadata, content, contentHtml, slug: getSlug(filePath) };
};

export const getFilePath = (slug: string): string => {
  return path.join(BLOG_ARTICLES_PATH, `${slug}${BLOG_ARTICLE_EXTENSION}`);
};

export const getSlug = (filePath: string): string => {
  return path.basename(filePath, path.extname(filePath));
};
