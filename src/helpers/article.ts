import Parser from "rss-parser";

import { OTHER_ARTICLES, RSS_LIST } from "../../articles";
import { Article } from "../types/article";

const parser = new Parser();

export const getArticles = async (): Promise<Article[]> => {
  const articlesFromRss = (
    await Promise.all(RSS_LIST.map(getArticlesFromRss))
  ).flat();

  const otherArticles = OTHER_ARTICLES;

  return mergeArticles(articlesFromRss, otherArticles);
};

const getArticlesFromRss = async (url: string): Promise<Article[]> => {
  const feed = await parser.parseURL(url);

  return feed.items.map((item) => ({
    title: item.title!,
    url: item.link!,
    publishedDate: item.pubDate!,
  }));
};

const mergeArticles = (...articlesList: Article[][]): Article[] => {
  const articles = articlesList.flat();
  return articles.sort(
    (a, b) =>
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );
};
