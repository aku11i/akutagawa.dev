import { VoidFunctionComponent } from "react";

import { Article } from "../../types/article";
import { ExternalLink } from "../general/ExternalLink";
import { Typography } from "../general/Typography";
import { IconRss } from "../icon/IconRss";
import { ArticleList, ArticleListSkeleton } from "./ArticleList";

export type ArticlesProps = {
  articles: Article[] | undefined;
};

export const Articles: VoidFunctionComponent<ArticlesProps> = ({
  articles,
}) => {
  return (
    <section>
      <div className="flex items-center">
        <Typography as="h2" className="inline-block text-2xl">
          Articles
        </Typography>

        <ExternalLink
          openInNewTab
          className="inline-block mb-1 ml-3 w-5 h-5"
          href="https://akutagawa.dev/articles.rss"
        >
          <IconRss />
        </ExternalLink>
      </div>

      <div className="mt-4">
        {articles ? (
          <ArticleList articles={articles} />
        ) : (
          <ArticleListSkeleton />
        )}
      </div>
    </section>
  );
};
