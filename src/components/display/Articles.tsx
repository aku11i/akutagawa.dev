import { format } from "date-fns";
import { useMemo, VoidFunctionComponent } from "react";

import { Article } from "../../types/article";
import { ExternalLink } from "../general/ExternalLink";
import { Skeleton } from "../general/Skeleton";
import { Typography } from "../general/Typography";

type ArticleItemProps = {
  article: Article | undefined;
};

const ArticleItem: VoidFunctionComponent<ArticleItemProps> = ({ article }) => {
  const date = useMemo(
    () => article && format(new Date(article.publishedDate), "yyyy-MM-dd"),
    [article]
  );

  const hostname = useMemo(
    () => article && new URL(article.url).hostname,
    [article]
  );

  return (
    <li className="py-4">
      {article ? (
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
      ) : (
        <div>
          <div className="py-px h-7">
            <Skeleton />
          </div>
          <div className="py-px my-[2px] w-4/12 h-5">
            <Skeleton />
          </div>
        </div>
      )}
    </li>
  );
};

export type ArticlesProps = {
  articles: Article[] | undefined;
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
        {articles
          ? articles.map((_) => <ArticleItem key={_.url} article={_} />)
          : Array(5)
              .fill(null)
              .map((_, i) => <ArticleItem key={i} article={undefined} />)}
      </ul>
    </section>
  );
};
