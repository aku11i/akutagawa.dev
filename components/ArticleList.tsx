import { css } from "@emotion/react";
import { HTMLAttributes, VoidFunctionComponent } from "react";

import { Article } from "../helpers/article";
import { size } from "../styles/size";
import { ArticleItem } from "./ArticleItem";
import { Typography } from "./Typography";

export type ArticleListProps = HTMLAttributes<HTMLDivElement> & {
  articles?: Article[];
};

export const ArticleList: VoidFunctionComponent<ArticleListProps> = ({
  articles,
}) => {
  return (
    <section css={styles.container}>
      <Typography as="h2" size="xl2">
        Articles
      </Typography>

      {articles && (
        <ul css={styles.list}>
          {articles.map((_) => (
            <li key={_.url}>
              <ArticleItem article={_} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

const styles = {
  container: css`
    padding: ${size(8)} 0;
  `,
  list: css`
    list-style-type: none;
  `,
};
