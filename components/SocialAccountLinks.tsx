import { css } from "@emotion/react";
import { HTMLAttributes, VoidFunctionComponent } from "react";

import { size } from "../styles/size";
import { SocialAccountLinkGitHub } from "./SocialAccountLinkGitHub";
import { SocialAccountLinkSpotify } from "./SocialAccountLinkSpotify";
import { SocialAccountLinkTwitter } from "./SocialAccountLinkTwitter";
import { SocialAccountLinkZenn } from "./SocialAccountLinkZenn";

export type SocialAccountLinksProps = HTMLAttributes<HTMLElement>;

export const SocialAccountLinks: VoidFunctionComponent<SocialAccountLinksProps> =
  ({ ...props }) => {
    return (
      <nav css={styles.container} {...props}>
        <SocialAccountLinkTwitter />
        <SocialAccountLinkZenn />
        <SocialAccountLinkGitHub />
        <SocialAccountLinkSpotify />
      </nav>
    );
  };

const styles = {
  container: css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  `,
};
