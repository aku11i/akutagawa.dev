export type BlogArticleMetaData = {
  title: string;
  published: boolean;
  publishedAt: string;
};

export type BlogArticle = {
  metadata: BlogArticleMetaData;
  content: string;
  contentHtml: string;
  slug: string;
};
