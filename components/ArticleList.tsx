import { css } from "@emotion/react";
import { HTMLAttributes, VoidFunctionComponent } from "react";

import { Article } from "../helpers/article";
import { size } from "../styles/size";
import { ArticleItem } from "./ArticleItem";
import { Typography } from "./Typography";

export type ArticleListProps = HTMLAttributes<HTMLDivElement> & {
  articles: Article[];
};

export const ArticleList: VoidFunctionComponent<ArticleListProps> = ({
  articles,
  ...props
}) => {
  return (
    <section css={styles.container} {...props}>
      <Typography as="h2" size="xl2">
        Articles
      </Typography>
      <ul css={styles.list}>
        {articles.map((_) => (
          <li key={_.url} css={styles.listItem}>
            <ArticleItem article={_} />
          </li>
        ))}
      </ul>
    </section>
  );
};

const styles = {
  container: css``,

  list: css`
    list-style-type: none;
    margin-top: ${size(4)};
  `,

  listItem: css`
    padding: ${size(4)} 0;
  `,
};
