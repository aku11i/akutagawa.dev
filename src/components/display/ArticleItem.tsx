import { format } from "date-fns";
import { useMemo, VoidFunctionComponent } from "react";

import { Article } from "../../types/article";
import { ExternalLink } from "../general/ExternalLink";
import { Skeleton } from "../general/Skeleton";
import { Typography } from "../general/Typography";

export type ArticleItemProps = {
  article: Article;
};

export const ArticleItem: VoidFunctionComponent<ArticleItemProps> = ({
  article,
}) => {
  const date = useMemo(
    () => format(new Date(article.publishedDate), "yyyy-MM-dd"),
    [article]
  );

  const hostname = useMemo(() => new URL(article.url).hostname, [article]);

  return (
    <li className="py-4">
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
    </li>
  );
};

export const ArticleItemSkeleton: VoidFunctionComponent = () => (
  <li className="py-4">
    <div className="py-px h-7">
      <Skeleton />
    </div>
    <div className="py-px mt-1 w-4/12 h-5">
      <Skeleton />
    </div>
  </li>
);
