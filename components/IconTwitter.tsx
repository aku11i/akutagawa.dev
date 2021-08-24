import { css } from "@emotion/react";
import { VoidFunctionComponent } from "react";

import Twitter from "../public/twitter.svg";

export const IconTwitter: VoidFunctionComponent = () => <Twitter css={style} />;

const style = css`
  fill: #1da1f2;
`;
