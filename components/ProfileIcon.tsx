import { css } from "@emotion/react";
import Image from "next/image";
import { VoidFunctionComponent } from "react";

import profile from "../public/profile.jpeg";

export type ProfileIconProps = JSX.IntrinsicElements["div"];

export const ProfileIcon: VoidFunctionComponent<ProfileIconProps> = ({
  ...props
}) => {
  return (
    <div {...props}>
      <Image css={styles.image} src={profile} alt="profile icon" />
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
