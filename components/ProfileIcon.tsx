import { css } from "@emotion/react";
import { VoidFunctionComponent } from "react";

import profile from "../public/profile.webp";

export type ProfileIconProps = JSX.IntrinsicElements["div"];

export const ProfileIcon: VoidFunctionComponent<ProfileIconProps> = ({
  ...props
}) => {
  return (
    <div {...props}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img css={styles.image} src={profile.src} alt="profile icon" />
    </div>
  );
};

const styles = {
  image: css`
    border-radius: 50%;

    width: 100%;
    height: 100%;
  `,
};
