import { css } from "@emotion/react";
import { HTMLAttributes, VoidFunctionComponent } from "react";

import { size } from "../../styles/size";
import { Link } from "../general/Link";
import { Typography } from "../general/Typography";
import { IconProfile } from "../icon/IconProfile";

export type ProfileProps = HTMLAttributes<HTMLDivElement>;

export const Profile: VoidFunctionComponent<ProfileProps> = ({ ...props }) => {
  return (
    <section css={styles.container} {...props}>
      <div css={styles.flexContainer}>
        <IconProfile css={styles.icon} />
      </div>

      <Typography as="h1" size="xl3">
        <span data-kimochii-pointer="text">Shuhei Akutagawa</span>
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
      height: ${size(48)};
      width: ${size(48)};
    `,
  ],
};
