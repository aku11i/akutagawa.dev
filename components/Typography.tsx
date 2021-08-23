import { css } from "@emotion/react";
import { ElementType, FunctionComponent, HTMLAttributes, useMemo } from "react";

import { TextSize } from "../styles/size";

export type TypographyProps = HTMLAttributes<HTMLElement> & {
  size?: number | keyof typeof TextSize;
  as?: ElementType;
};

export const Typography: FunctionComponent<TypographyProps> = ({
  children,
  size,
  as: CustomTag = "span",
  ...props
}) => {
  const style = useMemo(() => {
    if (typeof size === "string" && TextSize[size]) {
      return TextSize[size];
    }

    if (typeof size === "number") {
      return css`
        font-size: ${size}px;
      `;
    }

    return TextSize.base;
  }, [size]);

  return (
    <CustomTag css={style} {...props}>
      {children}
    </CustomTag>
  );
};
