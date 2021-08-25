import { css } from "@emotion/react";
import { format } from "date-fns";
import { useMemo, VoidFunctionComponent } from "react";

import { Article } from "../../helpers/article";
import { Link } from "../general/Link";
import { Typography } from "../general/Typography";

export type ArticleItemProps = {
  article: Article;
};

export const ArticleItem: VoidFunctionComponent<ArticleItemProps> = ({
  article,
  ...props
}) => {
  const date = useMemo(
    () => format(new Date(article.publishedDate), "yyyy-MM-dd"),
    [article.publishedDate]
  );

  const hostname = useMemo(() => new URL(article.url).hostname, [article.url]);

  return (
    <article css={styles.container} {...props}>
      <Link href={article.url}>
        <Typography as="h3" size="lg">
          {article.title}
        </Typography>
        <Typography size="sm">
          {date} {hostname}
        </Typography>
      </Link>
    </article>
  );
};

const styles = {
  container: css``,
};
