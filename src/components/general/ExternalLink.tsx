import classNames from "classnames";
import { AnchorHTMLAttributes, FunctionComponent, useMemo } from "react";

import { PointerStyle } from "../../types/pointerStyle";

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  openInNewTab?: boolean;
  block?: boolean;
  href: string;
  pointerStyle?: PointerStyle;
};

export const ExternalLink: FunctionComponent<LinkProps> = ({
  openInNewTab,
  children,
  block,
  href,
  pointerStyle = "expanded",
  className,
  ...props
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
        className,
        block && "block",
        "text-blue-700 no-underline hover:underline dark:text-blue-400"
      )}
      href={href}
      data-kimochii-pointer={pointerStyle}
      {...props}
      {...additionalProps}
    >
      {children}
    </a>
  );
};
