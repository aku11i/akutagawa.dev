import { format } from "date-fns";
import { useMemo, VoidFunctionComponent } from "react";

import { Article } from "../../types/article";
import { Link } from "../general/Link";

export type ArticleItemProps = {
  article: Article;
};

export const ArticleItem: VoidFunctionComponent<ArticleItemProps> = ({
  article,
}) => {
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
