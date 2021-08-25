import { css } from "@emotion/react";
import { VoidFunctionComponent } from "react";

import Spotify from "../../public/spotify.svg";

export const IconSpotify: VoidFunctionComponent = () => <Spotify css={style} />;

const style = css`
  fill: #1db954;
`;
