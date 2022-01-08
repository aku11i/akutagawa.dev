import { VoidFunctionComponent } from "react";

import { Article } from "../../types/article";
import { ArticleItem, ArticleItemSkeleton } from "./ArticleItem";

export type ArticleListProps = {
  articles: Article[];
};

export const ArticleList: VoidFunctionComponent<ArticleListProps> = ({
  articles,
}) => {
  return (
    <ul className="m-4 list-none">
      {articles.map((_) => (
        <ArticleItem key={_.url} article={_} />
      ))}
    </ul>
  );
};

export const ArticleListSkeleton: VoidFunctionComponent = () => {
  return (
    <ul>
      {Array(5)
        .fill(null)
        .map((_, i) => (
          <ArticleItemSkeleton key={i} />
        ))}
    </ul>
  );
};
