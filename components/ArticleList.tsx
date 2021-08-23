import { css } from "@emotion/react";
import { HTMLAttributes, VoidFunctionComponent } from "react";

import { size } from "../styles/size";
import { ArticleItem } from "./ArticleItem";
import { Typography } from "./Typography";

export type ArticleListProps = HTMLAttributes<HTMLDivElement>;

export const ArticleList: VoidFunctionComponent = () => {
  return (
    <section css={styles.container}>
      <Typography as="h2" size="xl2">
        Articles
      </Typography>
      <ul css={styles.list}>
        <li>
          <ArticleItem
            title="社員の技術インプットを向上させるためにRSSチャンネルを導入して1年運用した話"
            url="https://zenn.dev/aktriver/articles/2021-07-rss-channel"
          />
        </li>
      </ul>
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
