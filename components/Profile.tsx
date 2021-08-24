import { css } from "@emotion/react";
import { HTMLAttributes, VoidFunctionComponent } from "react";

import { size } from "../styles/size";
import { Link } from "./Link";
import { ProfileIcon } from "./ProfileIcon";
import { Typography } from "./Typography";

export type ProfileProps = HTMLAttributes<HTMLDivElement>;

export const Profile: VoidFunctionComponent<ProfileProps> = ({ ...props }) => {
  return (
    <section css={styles.container} {...props}>
      <div css={styles.flexContainer}>
        <ProfileIcon css={styles.icon} />
      </div>

      <Typography as="h1" size="xl3">
        Shuhei Akutagawa
      </Typography>

      <Typography size="lg">
        <Link href="https://twitter.com/aku11i">@aku11i</Link>
      </Typography>
    </section>
  );
};

const styles = {
  container: css`
    text-align: center;
  `,

  flexContainer: css`
    display: flex;
    justify-content: center;

    margin-bottom: ${size(8)};
  `,

  icon: [
    css`
      width: ${size(48)};
      height: ${size(48)};
    `,
  ],
};
