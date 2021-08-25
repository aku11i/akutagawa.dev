import { css } from "@emotion/react";
import { HTMLAttributes, VoidFunctionComponent } from "react";

import { Mq } from "../../styles/mediaQuery";
import { size } from "../../styles/size";
import { StickyLink } from "../general/StickyLink";
import { IconGitHub } from "../icon/IconGitHub";
import { IconSpotify } from "../icon/IconSpotify";
import { IconTwitter } from "../icon/IconTwitter";
import { IconZenn } from "../icon/IconZenn";

const accounts = [
  {
    name: "Twitter",
    url: "https://twitter.com/aku11i",
    icon: IconTwitter,
  },
  {
    name: "Zenn",
    url: "https://zenn.dev/aktriver",
    icon: IconZenn,
  },
  {
    name: "GitHub",
    url: "https://github.com/aku11i",
    icon: IconGitHub,
  },
  {
    name: "Spotify",
    url: "https://open.spotify.com/user/31l6xck4kv7ns4a6iggrndhckj24?si=b66d156d88c84157",
    icon: IconSpotify,
  },
];

export type SocialAccountLinksProps = HTMLAttributes<HTMLElement>;

export const SocialAccountLinks: VoidFunctionComponent<SocialAccountLinksProps> =
  ({ ...props }) => {
    return (
      <nav css={styles.container} {...props}>
        {accounts.map((_, i) => (
          <StickyLink
            key={i}
            css={styles.link}
            href={_.url}
            title={_.name}
            {...props}
          >
            <_.icon />
          </StickyLink>
        ))}
      </nav>
    );
  };

const styles = {
  container: css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  `,

  link: [
    css`
      height: ${size(14)};
      padding: ${size(2)};
      transition: all 0.3s ease;
      width: ${size(14)};
    `,
    Mq.sm(css`
      height: ${size(18)};
      width: ${size(18)};
    `),
    Mq.md(css`
      height: ${size(24)};
      width: ${size(24)};
    `),
  ],
};
