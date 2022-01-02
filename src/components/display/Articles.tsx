import { format } from "date-fns";
import { useMemo, VoidFunctionComponent } from "react";

import { Article } from "../../types/article";
import { Link } from "../general/Link";

type ArticleItemProps = {
  article: Article;
};

const ArticleItem: VoidFunctionComponent<ArticleItemProps> = ({ article }) => {
  const date = useMemo(
    () => format(new Date(article.publishedDate), "yyyy-MM-dd"),
    [article.publishedDate]
  );

  const hostname = useMemo(() => new URL(article.url).hostname, [article.url]);

  return (
    <article>
      <Link href={article.url} block>
        <h3 className="text-lg">{article.title}</h3>
        <span className="text-sm">
          {date} {hostname}
        </span>
      </Link>
    </article>
  );
};

export type ArticlesProps = {
  articles: Article[];
};

export const Articles: VoidFunctionComponent<ArticlesProps> = ({
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
