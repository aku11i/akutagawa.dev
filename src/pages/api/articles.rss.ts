import { FeedOptions } from "feed";
import { NextApiHandler } from "next";

import { BASE_URL } from "../../env";
import { generateRss, getAllArticles } from "../../helpers/article";

const feedOptions: FeedOptions = {
  title: "aku11i's RSS",
  description: "",
  author: {
    name: "aku11i",
    link: BASE_URL,
  },
  link: BASE_URL,
  language: "ja",
  id: BASE_URL,
  copyright: "",
} as const;

const api: NextApiHandler = async (_req, res) => {
  const articles = await getAllArticles();

  const rss = generateRss(feedOptions, articles);

  res.write(rss);
  res.end();
};

export default api;
