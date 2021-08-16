import { css, SerializedStyles } from "@emotion/react";

const BASE_SIZE = 0.25;

/**
 * 1 = 0.25rem
 */
export const size = (size: number): string => {
  return `${BASE_SIZE * size}rem`;
};

const textSize = (fontSize: number, lineHeihgt: number): SerializedStyles => {
  return css`
    font-size: ${fontSize}rem;
    line-height: ${lineHeihgt}rem;
  `;
};

export const TextSize = {
  xs: textSize(0.75, 1),
  sm: textSize(0.875, 1.25),
  base: textSize(1, 1.5),
  lg: textSize(1.125, 1.75),
  xl: textSize(1.25, 1.75),
  xl2: textSize(1.5, 2),
  xl3: textSize(1.875, 2.25),
  xl4: textSize(2.25, 2.5),
  xl5: textSize(3, 1),
  xl6: textSize(3.75, 1),
  xl7: textSize(4.5, 1),
  xl8: textSize(6, 1),
  xl9: textSize(8, 1),
} as const;
