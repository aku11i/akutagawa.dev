import { css } from "@emotion/react";
import { VoidFunctionComponent } from "react";

import GitHub from "../public/github.svg";
import { ColorScheme } from "../styles/media";

export const IconGitHub: VoidFunctionComponent = () => <GitHub css={style} />;

const style = [
  css`
    fill: #181717;
  `,
  ColorScheme.dark(css`
    fill: #e7e8e8;
  `),
];
