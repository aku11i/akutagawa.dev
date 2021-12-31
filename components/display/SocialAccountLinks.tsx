import { VoidFunctionComponent } from "react";

import { Link } from "../general/Link";
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

export type SocialAccountLinksProps = {
  //
};

export const SocialAccountLinks: VoidFunctionComponent<SocialAccountLinksProps> =
  () => {
    return (
      <nav className="flex flex-wrap justify-around">
        {accounts.map((_, i) => (
          <Link key={i} href={_.url} title={_.name} pointerStyle="sticky">
            <span className="inline-block h-14 p-2 w-14 sm:h-16 sm:w-16 md:h-24 md:w-24">
              <_.icon />
            </span>
          </Link>
        ))}
      </nav>
    );
  };
