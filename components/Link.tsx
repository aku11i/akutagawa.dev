import { css } from "@emotion/react";
import { AnchorHTMLAttributes, FunctionComponent, useMemo } from "react";

import { ColorScheme } from "../styles/media";

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  openInNewTab?: boolean;
};

export const Link: FunctionComponent<LinkProps> = ({
  openInNewTab,
  children,
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
    <a css={style} {...props} {...additionalProps}>
      {children}
    </a>
  );
};

const style = [
  css`
    color: mediumblue;

    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  `,
  ColorScheme.dark(css`
    color: dodgerblue;
  `),
];
