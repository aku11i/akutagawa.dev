import { VoidFunctionComponent } from "react";

import { Article } from "../../types/article";
import { ArticleList, ArticleListSkeleton } from "./ArticleList";

export type ArticlesProps = {
  articles: Article[] | undefined;
};

export const Articles: VoidFunctionComponent<ArticlesProps> = ({
  articles,
}) => {
  if (!articles) {
    return <ArticleListSkeleton />;
  }

  return <ArticleList articles={articles} />;
};
