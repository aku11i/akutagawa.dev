import Parser from "rss-parser";

import { Article } from "../types/article";

const RSS_URL = "https://feed.akutagawa.dev/articles.rss";

const parser = new Parser();

export const fetchArticles = async (): Promise<Article[]> => {
  const feed = await parser.parseURL(RSS_URL);

  return feed.items.map((item) => ({
    title: item.title!,
    url: item.link!,
    publishedDate: item.pubDate!,
  }));
};
