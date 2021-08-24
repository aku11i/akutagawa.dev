import { css } from "@emotion/react";
import { FunctionComponent } from "react";

export const Layout: FunctionComponent = ({ children }) => {
  return <div css={styles.container}>{children}</div>;
};

const styles = {
  container: css`
    min-height: 100vh;
    height: 100vh;

    overflow-y: scroll;
  `,
};