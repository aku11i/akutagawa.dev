import classnames from "classnames";
import { FunctionComponent } from "react";

import { STICKY_CLASS } from "../util/Stalker";
import { Link, LinkProps } from "./Link";

export type StickyLinkProps = LinkProps;

export const StickyLink: FunctionComponent<StickyLinkProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <Link className={classnames(className, STICKY_CLASS)} {...props}>
      {children}
    </Link>
  );
};
