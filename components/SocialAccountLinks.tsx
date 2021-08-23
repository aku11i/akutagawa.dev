import { css } from "@emotion/react";
import { VoidFunctionComponent } from "react";

import { Screen } from "../styles/media";
import { size } from "../styles/size";
import { SocialAccountLinkGitHub } from "./SocialAccountLinkGitHub";
import { SocialAccountLinkSpotify } from "./SocialAccountLinkSpotify";
import { SocialAccountLinkTwitter } from "./SocialAccountLinkTwitter";
import { SocialAccountLinkZenn } from "./SocialAccountLinkZenn";

export const SocialAccountLinks: VoidFunctionComponent = () => {
  return (
    <nav css={styles.container}>
      <SocialAccountLinkTwitter />
      <SocialAccountLinkZenn />
      <SocialAccountLinkGitHub />
      <SocialAccountLinkSpotify />
    </nav>
  );
};

const styles = {
  container: [
    css`
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;

      padding: ${size(0)} ${size(8)};
    `,
    Screen.md(css`
      padding: ${size(4)} ${size(12)};
    `),
    Screen.lg(css`
      padding: ${size(8)} ${size(24)};
    `),
  ],
};
