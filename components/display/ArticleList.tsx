import { VoidFunctionComponent } from "react";

import { Article } from "../../articles";
import { ArticleItem } from "./ArticleItem";

export type ArticleListProps = {
  articles: Article[];
};

export const ArticleList: VoidFunctionComponent<ArticleListProps> = ({
  articles,
}) => {
  return (
    <section>
      <h2 className="text-2xl">
        <span data-kimochii-pointer="text">Articles</span>
      </h2>
      <ul className="m-4 list-none">
        {articles.map((_) => (
          <li key={_.url} className="py-4">
            <ArticleItem article={_} />
          </li>
        ))}
      </ul>
    </section>
  );
};
