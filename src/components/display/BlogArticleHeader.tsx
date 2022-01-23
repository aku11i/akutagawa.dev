import { VoidFunctionComponent } from "react";

import { usePublishedDate } from "../../hooks/usePublishedDate";
import { BlogArticleMetaData } from "../../types/blogArticle";
import { Typography } from "../general/Typography";
import { Tag } from "./Tag";

export type BlogArticleHeaderProps = {
  metadata: BlogArticleMetaData;
};

export const BlogArticleHeader: VoidFunctionComponent<
  BlogArticleHeaderProps
> = ({ metadata }) => {
  const date = usePublishedDate(metadata.publishedAt);

  return (
    <header className="py-2">
      <Typography className="text-2xl sm:text-3xl" as="h1">
        {metadata.title}
      </Typography>
      <div className="mt-2">
        <Typography className="text-sm">{date}</Typography>
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
