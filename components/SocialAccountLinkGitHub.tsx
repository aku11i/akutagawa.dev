import { css } from "@emotion/react";
import { VoidFunctionComponent } from "react";

import { ColorScheme } from "../styles/media";
import { SocialAccountLink } from "./SocialAccountLink";

export const SocialAccountLinkGitHub: VoidFunctionComponent = ({
  ...props
}) => {
  return (
    <SocialAccountLink
      css={style}
      href="https://github.com/aku11i"
      src="/github.svg"
      name="GitHub"
      {...props}
    />
  );
};

const style = [
  css`
    fill: #181717;
  `,
  ColorScheme.dark(css`
    fill: #e7e8e8;
  `),
];
