import { Feed, FeedOptions } from "feed";
import Parser from "rss-parser";

import { extraArticles, feeds } from "../../feed.json";
import type { Article } from "../types/article";
import { getBlogArticles, getUrl } from "./blogArticle";

const parser = new Parser();

export const getAllArticles = async () => {
  const articlesFromFeed = await Promise.all(
    feeds.map((feed) => fetchArticlesFromRss(feed))
  );

  const blogArticles = (await getBlogArticles()).map(
    (_): Article => ({
      url: getUrl(_.slug),
      publishedDate: _.metadata.publishedAt,
      title: _.metadata.title,
      description: _.metadata.description,
    })
  );

  return mergeArticles(...articlesFromFeed, extraArticles, blogArticles);
};

const fetchArticlesFromRss = async (url: string): Promise<Article[]> => {
  const { items } = await parser.parseURL(url);
  return items.map((item) => ({
    title: item.title!,
    description: item.summary || item.content || "",
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

export const generateRss = (
  feedOptions: FeedOptions,
  articles: Article[]
): string => {
  const feed = new Feed(feedOptions);
  articles.forEach((article) => {
    feed.addItem({
      title: article.title,
      description: article.description,
      link: article.url,
      published: new Date(article.publishedDate),
      date: new Date(article.publishedDate),
      id: article.url,
    });
  });

  return feed.rss2();
};
