import { css } from "@emotion/react";
import { AnchorHTMLAttributes, VoidFunctionComponent } from "react";
import { ReactSVG } from "react-svg";

import { Screen } from "../styles/media";
import { size } from "../styles/size";
import { Link } from "./Link";

export type SocialAccountLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: HTMLAnchorElement["href"];
  src: string;
  name: string;
};

export const SocialAccountLink: VoidFunctionComponent<SocialAccountLinkProps> =
  ({ href, src, name, ...props }) => {
    return (
      <Link css={styles.container} href={href} {...props}>
        <ReactSVG css={styles.svg} src={src} role="img" title={name} />
      </Link>
    );
  };

const styles = {
  container: [
    css`
      width: ${size(14)};
      height: ${size(14)};

      transition: all 0.3s ease;

      &:hover {
        transform: scale(1.2);
      }
    `,
    Screen.sm(css`
      width: ${size(18)};
      height: ${size(18)};
    `),
    Screen.md(css`
      width: ${size(24)};
      height: ${size(24)};
    `),
  ],
  svg: css`
    width: 100%;
    height: 100%;

    padding: ${size(2)};
  `,
};
