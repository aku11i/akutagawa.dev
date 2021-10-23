import { css } from "@emotion/react";
import { HTMLAttributes, VoidFunctionComponent } from "react";

import { Article } from "../../articles";
import { size } from "../../styles/size";
import { Typography } from "../general/Typography";
import { ArticleItem } from "./ArticleItem";

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
        <span data-kimochii-pointer="text">Articles</span>
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
