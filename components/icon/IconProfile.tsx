import { css } from "@emotion/react";
import Image from "next/image";
import { VoidFunctionComponent } from "react";

import profile from "../../public/profile.jpg";

export type ProfileIconProps = JSX.IntrinsicElements["div"];

export const IconProfile: VoidFunctionComponent<ProfileIconProps> = ({
  ...props
}) => {
  return (
    <div css={styles.imageContainer} {...props}>
      <Image
        src={profile.src}
        alt="profile icon"
        data-kimochii-pointer="lighter"
        css={styles.image}
        layout="fill"
      />
    </div>
  );
};

const styles = {
  imageContainer: css`
    position: relative;
  `,
  image: css`
    border-radius: 50%;
  `,
};
