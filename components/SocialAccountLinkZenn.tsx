import { css } from "@emotion/react";
import { VoidFunctionComponent } from "react";

import { SocialAccountLink } from "./SocialAccountLink";

export const SocialAccountLinkZenn: VoidFunctionComponent = ({ ...props }) => {
  return (
    <SocialAccountLink
      css={style}
      href="https://zenn.dev/aktriver"
      src="/zenn.svg"
      name="Zenn"
      {...props}
    />
  );
};

const style = css`
  fill: #3ea8ff;
`;
