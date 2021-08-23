import { css } from "@emotion/react";
import { VoidFunctionComponent } from "react";

import { SocialAccountLink } from "./SocialAccountLink";

export const SocialAccountLinkSpotify: VoidFunctionComponent = ({
  ...props
}) => {
  return (
    <SocialAccountLink
      css={style}
      href="https://open.spotify.com/user/31l6xck4kv7ns4a6iggrndhckj24?si=b66d156d88c84157"
      src="/spotify.svg"
      name="Spotify"
      {...props}
    />
  );
};

const style = css`
  fill: #1db954;
`;
