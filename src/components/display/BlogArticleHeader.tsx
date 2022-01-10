import { VoidFunctionComponent } from "react";

import { BlogArticleMetaData } from "../../types/blogArticle";
import { Typography } from "../general/Typography";

export type BlogArticleHeaderProps = {
  metadata: BlogArticleMetaData;
};

export const BlogArticleHeader: VoidFunctionComponent<
  BlogArticleHeaderProps
> = ({ metadata }) => {
  return (
    <header className="py-2">
      <Typography className="text-2xl" as="h1">
        {metadata.title}
      </Typography>
      <Typography className="text-sm">{metadata.publishedAt}</Typography>
    </header>
  );
};
