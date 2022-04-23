import { VoidFunctionComponent } from "react";

import { ExternalLink } from "../general/ExternalLink";
import { GitHubIcon } from "../icon/GitHubIcon";
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
          className="flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20"
          href={_.url}
          title={_.name}
          pointerStyle="sticky"
        >
          <span className="inline-block w-10 h-10 sm:w-12 sm:h-12">
            <_.icon />
          </span>
        </ExternalLink>
      ))}
    </nav>
  );
};
