import { FunctionComponent, ReactNode } from "react";

export type DefaultLayoutProps = {
  children: ReactNode;
};

export const DefaultLayout: FunctionComponent<DefaultLayoutProps> = ({
  children,
}) => {
  return <div>{children}</div>;
};
