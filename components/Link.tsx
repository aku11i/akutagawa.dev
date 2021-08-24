import { css } from "@emotion/react";
import { AnchorHTMLAttributes, FunctionComponent, useMemo } from "react";

import { Mq } from "../styles/mediaQuery";

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
  `,

  Mq.hover(css`
    text-decoration: underline;
  `),

  Mq.dark(css`
    color: dodgerblue;
  `),
];
