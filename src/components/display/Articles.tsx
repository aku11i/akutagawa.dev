import { VoidFunctionComponent } from "react";

import { Article } from "../../types/article";
import { ExternalLink } from "../general/ExternalLink";
import { Typography } from "../general/Typography";
import { RssIcon } from "../icon/RssIcon";
import { ArticleList } from "./ArticleList";

export type ArticlesProps = {
  articles: Article[];
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
          className="ml-2 flex h-10 w-10 items-center justify-center"
          href="/articles.rss"
          pointerStyle="sticky"
        >
          <span className="inline-block h-7 w-7">
            <RssIcon />
          </span>
        </ExternalLink>
      </div>

      <div className="mt-4">
        <ArticleList articles={articles} />
      </div>
    </section>
  );
};
