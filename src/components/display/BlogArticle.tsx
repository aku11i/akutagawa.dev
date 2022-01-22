import { VoidFunctionComponent } from "react";

import type { BlogArticle as BlogArticleType } from "../../types/blogArticle";
import { BlogArticleContent } from "./BlogArticleContent";
import { BlogArticleHeader } from "./BlogArticleHeader";

export type BlogArticleProps = {
  blogArticle: BlogArticleType;
};

export const BlogArticle: VoidFunctionComponent<BlogArticleProps> = ({
  blogArticle,
}) => {
  return (
    <article>
      <div className="">
        <BlogArticleHeader metadata={blogArticle.metadata} />
      </div>
      <div className="mt-4">
        <BlogArticleContent contentHtml={blogArticle.contentHtml} />
      </div>
    </article>
  );
};
