import { css } from "@emotion/react";
import { VoidFunctionComponent } from "react";

import GitHub from "../public/github.svg";
import { Mq } from "../styles/mediaQuery";

export const IconGitHub: VoidFunctionComponent = () => <GitHub css={style} />;

const style = [
  css`
    fill: #181717;
  `,
  Mq.dark(css`
    fill: #e7e8e8;
  `),
];
