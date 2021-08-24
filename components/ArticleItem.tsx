import { css } from "@emotion/react";
import { useMemo, VoidFunctionComponent } from "react";

import { Article } from "../helpers/article";
import { size } from "../styles/size";
import { Link } from "./Link";
import { Typography } from "./Typography";

export type ArticleItemProps = {
  article: Article;
};

export const ArticleItem: VoidFunctionComponent<ArticleItemProps> = ({
  article,
  ...props
}) => {
  const date = useMemo(
    () => article.publishedDate.toLocaleString(),
    [article.publishedDate]
  );

  return (
    <article css={styles.container} {...props}>
      <Link href={article.url}>
        <Typography as="h3" size="xl">
          {article.title}
        </Typography>
        <Typography size="sm">{date} zenn.dev</Typography>
      </Link>
    </article>
  );
};

const styles = {
  container: css`
    padding: ${size(4)} 0;
  `,
};
