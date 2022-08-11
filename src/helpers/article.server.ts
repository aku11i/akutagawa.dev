import Parser from "rss-parser";

import { Article } from "../types/article";
import { assertIsDefined } from "./assert";

const parser = new Parser();

export const fetchArticles = async (): Promise<Article[]> => {
  assertIsDefined(process.env.RSS_URL);
  const feed = await parser.parseURL(process.env.RSS_URL);

  return feed.items.map((item) => ({
    title: item.title!,
    url: item.link!,
    publishedDate: item.pubDate!,
  }));
};
