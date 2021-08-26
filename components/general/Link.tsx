import { css } from "@emotion/react";
import classnames from "classnames";
import { AnchorHTMLAttributes, FunctionComponent, useMemo } from "react";

import {
  DEFAULT_EXPAND_CLASS,
  DEFAULT_STICK_CLASS,
} from "../../helpers/variableCursor";
import { Mq } from "../../styles/mediaQuery";

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  openInNewTab?: boolean;
  stick?: boolean;
};

export const Link: FunctionComponent<LinkProps> = ({
  openInNewTab,
  stick,
  className,
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
    <a
      css={style}
      className={classnames(
        className,
        stick ? DEFAULT_STICK_CLASS : DEFAULT_EXPAND_CLASS
      )}
      {...props}
      {...additionalProps}
    >
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
