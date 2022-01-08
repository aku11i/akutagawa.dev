import Parser from "rss-parser";

import { Article } from "../types/article";

const parser = new Parser();

export const fetchArticles = async (): Promise<Article[]> => {
  const feed = await parser.parseURL("/articles.rss");

  return feed.items.map((item) => ({
    title: item.title!,
    url: item.link!,
    publishedDate: item.pubDate!,
  }));
};
