import { format } from "date-fns";
import { useMemo, VoidFunctionComponent } from "react";

import { Article } from "../../types/article";
import { ExternalLink } from "../general/ExternalLink";
import { Typography } from "../general/Typography";

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
      <ExternalLink href={article.url} block>
        <Typography as="h3" className="text-lg">
          {article.title}
        </Typography>
        <Typography className="text-sm">
          {date} {hostname}
        </Typography>
      </ExternalLink>
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
      <Typography as="h2" className="text-2xl">
        Articles
      </Typography>
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
