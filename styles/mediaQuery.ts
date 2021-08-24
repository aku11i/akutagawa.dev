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

const colorScheme =
  (scheme: string): WithStyles =>
  (styles) => {
    return css`
      @media (prefers-color-scheme: ${scheme}) {
        ${styles}
      }
    `;
  };

const hover: WithStyles = (styles) => {
  return css`
    @media (hover: hover) and (pointer: fine) {
      :hover {
        ${styles}
      }
    }
  `;
};

export const MediaQuery = {
  // Responsive
  sm: minWidth("640px"),
  md: minWidth("768px"),
  lg: minWidth("1024px"),
  xl: minWidth("1280px"),
  xl2: minWidth("1536px"),
  // Color scheme
  light: colorScheme("light"),
  dark: colorScheme("dark"),
  // Other queries
  hover,
} as const;

export const Mq = MediaQuery;
