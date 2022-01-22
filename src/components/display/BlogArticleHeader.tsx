import { VoidFunctionComponent } from "react";

import { BlogArticleMetaData } from "../../types/blogArticle";
import { Typography } from "../general/Typography";
import { Tag } from "./Tag";

export type BlogArticleHeaderProps = {
  metadata: BlogArticleMetaData;
};

export const BlogArticleHeader: VoidFunctionComponent<
  BlogArticleHeaderProps
> = ({ metadata }) => {
  return (
    <header className="py-2">
      <Typography className="text-3xl" as="h1">
        {metadata.title}
      </Typography>
      <div className="mt-2">
        <Typography className="text-sm">{metadata.publishedAt}</Typography>
      </div>
      <div className="mt-2">
        {metadata.tags.map((_, i) => (
          <>
            {i !== 0 && <div className="inline-block ml-1" />}
            <Tag key={_} name={_} />
          </>
        ))}
      </div>
    </header>
  );
};
