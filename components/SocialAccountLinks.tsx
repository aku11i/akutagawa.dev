import { css } from "@emotion/react";
import { HTMLAttributes, VoidFunctionComponent } from "react";

import { Screen } from "../styles/media";
import { size } from "../styles/size";
import { IconGitHub } from "./IconGitHub";
import { IconSpotify } from "./IconSpotify";
import { IconTwitter } from "./IconTwitter";
import { IconZenn } from "./IconZenn";
import { Link } from "./Link";

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
          <Link
            key={i}
            css={styles.link}
            href={_.url}
            title={_.name}
            {...props}
          >
            <_.icon />
          </Link>
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
      width: ${size(14)};
      height: ${size(14)};

      transition: all 0.3s ease;

      padding: ${size(2)};

      &:hover {
        transform: scale(1.2);
      }
    `,
    Screen.sm(css`
      width: ${size(18)};
      height: ${size(18)};
    `),
    Screen.md(css`
      width: ${size(24)};
      height: ${size(24)};
    `),
  ],
};
