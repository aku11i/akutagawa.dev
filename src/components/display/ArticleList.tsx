import { VoidFunctionComponent } from "react";

import { Article } from "../../types/article";
import { ArticleItem } from "./ArticleItem";

export type ArticleListProps = {
  articles: Article[];
};

export const ArticleList: VoidFunctionComponent<ArticleListProps> = ({
  articles,
}) => {
  return (
    <ul className="list-none">
      {articles.map((_) => (
        <ArticleItem key={_.url} article={_} />
      ))}
    </ul>
  );
};
