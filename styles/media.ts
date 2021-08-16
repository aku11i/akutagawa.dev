import { css, SerializedStyles } from "@emotion/react";

export type WithStyles = (styles: SerializedStyles) => SerializedStyles;

const minWidth =
  (size: string): WithStyles =>
  (styles) => {
    return css`
      @media (min-width: ${size}) {
        ${styles}
      }
    `;
  };

export const Screen = {
  sm: minWidth("640px"),
  md: minWidth("768px"),
  lg: minWidth("1024px"),
  xl: minWidth("1280px"),
  xl2: minWidth("1536px"),
} as const;

const colorScheme =
  (scheme: string): WithStyles =>
  (styles) => {
    return css`
      @media (prefers-color-scheme: ${scheme}) {
        ${styles}
      }
    `;
  };

export const ColorScheme = {
  light: colorScheme("light"),
  dark: colorScheme("dark"),
} as const;
