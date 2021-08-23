import { css } from "@emotion/react";
import { VoidFunctionComponent } from "react";

import { size } from "../styles/size";
import { Link } from "./Link";
import { Typography } from "./Typography";

export type ArticleItemProps = {
  title: string;
  url: string;
};

export const ArticleItem: VoidFunctionComponent<ArticleItemProps> = ({
  title,
  url,
  ...props
}) => {
  return (
    <article css={styles.container} {...props}>
      <Link href={url}>
        <Typography as="h3" size="xl">
          {title}
        </Typography>
        <Typography size="sm">2021/07/18 zenn.dev</Typography>
      </Link>
    </article>
  );
};

const styles = {
  container: css`
    padding: ${size(4)} 0;
  `,
};
