import classNames from "classnames";
import {
  ElementType,
  HTMLAttributes,
  ReactNode,
  VoidFunctionComponent,
} from "react";

import { PointerStyle } from "../../types/pointerStyle";

export type TypographyProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  children?: ReactNode;
  pointerStyle?: PointerStyle;
};

export const Typography: VoidFunctionComponent<TypographyProps> = ({
  as: CustomTag = "span",
  className,
  pointerStyle = "text",
  children,
  ...props
}) => {
  return (
    <CustomTag className={classNames(className)} {...props}>
      <span data-kimochii-pointer={pointerStyle}>{children}</span>
    </CustomTag>
  );
};
