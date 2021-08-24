import { css } from "@emotion/react";
import { VoidFunctionComponent } from "react";

import Zenn from "../public/zenn.svg";

export const IconZenn: VoidFunctionComponent = () => <Zenn css={style} />;

const style = css`
  fill: #3ea8ff;
`;
