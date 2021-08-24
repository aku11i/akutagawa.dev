export type Article = {
  title: string;
  url: string;
  publishedDate: Date;
};

export const getArticles = async (): Promise<Article[]> => {
  const data: Article[] = [
    {
      title:
        "社員の技術インプットを向上させるためにRSSチャンネルを導入して1年運用した話",
      url: "https://zenn.dev/aktriver/articles/2021-07-rss-channel",
      publishedDate: new Date(),
    },
  ];

  await new Promise((r) => setTimeout(r, 2000));

  return data;
};
