import classNames from "classnames";
import { FunctionComponent, useMemo } from "react";

export type LinkProps = {
  openInNewTab?: boolean;
  block?: boolean;
  href: string;
  title?: string;
  pointerStyle?: "expanded" | "sticky";
};

export const Link: FunctionComponent<LinkProps> = ({
  openInNewTab,
  children,
  block,
  href,
  title,
  pointerStyle = "expanded",
}) => {
  const additionalProps = useMemo(() => {
    if (openInNewTab) {
      return {
        target: "_blank",
        rel: "noreferrer",
      };
    }

    return {};
  }, [openInNewTab]);

  return (
    <a
      className={classNames(
        block && "block",
        "text-blue-700 no-underline hover:underline dark:text-blue-400"
      )}
      href={href}
      title={title}
      data-kimochii-pointer={pointerStyle}
      {...additionalProps}
    >
      {children}
    </a>
  );
};
