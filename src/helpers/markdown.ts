// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore FIXME markdown-yaml-metadata-parser は型定義がない
import metadataParser from "markdown-yaml-metadata-parser";
import * as fs from "node:fs/promises";
import markdownHtml from "zenn-markdown-html";

export type Markdown<T = unknown> = {
  metadata: T;
  content: string;
};

export const readMarkdownFile = async <T>(
  filePath: string
): Promise<Markdown<T>> => {
  const markdown = await fs.readFile(filePath, { encoding: "utf-8" });

  const { metadata, content } = metadataParser(markdown);

  return { metadata, content };
};

export const markdownToHtml = (content: string) => {
  const html = markdownHtml(content);

  return html;
};
