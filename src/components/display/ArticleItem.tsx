import { useMemo, VoidFunctionComponent } from "react";

import { Article } from "../../types/article";
import { ExternalLink } from "../general/ExternalLink";
import { Typography } from "../general/Typography";

export type ArticleItemProps = {
  article: Article;
};

export const ArticleItem: VoidFunctionComponent<ArticleItemProps> = ({
  article,
}) => {
  const hostname = useMemo(() => new URL(article.url).hostname, [article]);

  return (
    <li className="py-4">
      <article>
        <ExternalLink href={article.url} block>
          <Typography as="h3" className="text-lg">
            {article.title}
          </Typography>

          <Typography className="text-sm">{hostname}</Typography>
        </ExternalLink>
      </article>
    </li>
  );
};
