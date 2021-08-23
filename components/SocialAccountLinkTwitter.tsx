import { css } from "@emotion/react";
import { VoidFunctionComponent } from "react";

import { SocialAccountLink } from "./SocialAccountLink";

export const SocialAccountLinkTwitter: VoidFunctionComponent = ({
  ...props
}) => {
  return (
    <SocialAccountLink
      css={style}
      href="https://twitter.com/aku11i"
      src="/twitter.svg"
      name="Twitter"
      {...props}
    />
  );
};

const style = css`
  fill: #1da1f2;
`;
