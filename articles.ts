export type Article = {
  title: string;
  url: string;
  publishedDate: string;
};

export const RSS_LIST: string[] = ["https://zenn.dev/aktriver/feed"];

export const OTHER_ARTICLES: Article[] = [
  {
    title: "Next.js のデータフェッチについて",
    url: "https://speakerdeck.com/aku11i/next-dot-js-falsedetahuetutinituite",
    publishedDate: "2021-11-24",
  },
];
