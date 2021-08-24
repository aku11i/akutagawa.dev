import Parser from "rss-parser";

export type Article = {
  title: string;
  url: string;
  publishedDate: string;
};

const RSS_URL = "https://zenn.dev/aktriver/feed";

const parser = new Parser();

export const getArticles = async (): Promise<Article[]> => {
  const feed = await parser.parseURL(RSS_URL);

  const data: Article[] = feed.items.map((item) => ({
    title: item.title!,
    url: item.link!,
    publishedDate: item.pubDate!,
  }));

  return data;
};
