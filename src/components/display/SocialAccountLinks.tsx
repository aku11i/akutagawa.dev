import { VoidFunctionComponent } from "react";

import { ExternalLink } from "../general/ExternalLink";
import { GitHubIcon } from "../icon/GitHubIcon";
import { RaindropIcon } from "../icon/RaindropIcon";
import { SpotifyIcon } from "../icon/SpotifyIcon";
import { TwitterIcon } from "../icon/TwitterIcon";
import { ZennIcon } from "../icon/ZennIcon";

const accounts = [
  {
    name: "Twitter",
    url: "https://twitter.com/aku11i",
    icon: TwitterIcon,
  },
  {
    name: "Raindrop.io",
    url: "https://raindrop.io/aku11i",
    icon: RaindropIcon,
  },
  {
    name: "Zenn",
    url: "https://zenn.dev/aktriver",
    icon: ZennIcon,
  },
  {
    name: "GitHub",
    url: "https://github.com/aku11i",
    icon: GitHubIcon,
  },
  {
    name: "Spotify",
    url: "https://open.spotify.com/user/31l6xck4kv7ns4a6iggrndhckj24?si=b66d156d88c84157",
    icon: SpotifyIcon,
  },
];

export type SocialAccountLinksProps = {
  //
};

export const SocialAccountLinks: VoidFunctionComponent<
  SocialAccountLinksProps
> = () => {
  return (
    <nav className="flex">
      {accounts.map((_, i) => (
        <ExternalLink
          key={i}
          className="flex h-16 w-16 items-center justify-center sm:h-20 sm:w-20"
          href={_.url}
          title={_.name}
          pointerStyle="sticky"
        >
          <span className="inline-block h-10 w-10 sm:h-12 sm:w-12">
            <_.icon />
          </span>
        </ExternalLink>
      ))}
    </nav>
  );
};
