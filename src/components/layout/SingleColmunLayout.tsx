import { ReactNode, VoidFunctionComponent } from "react";

export type SingleColmunLayoutProps = {
  children: ReactNode;
};

export const SingleColmunLayout: VoidFunctionComponent<
  SingleColmunLayoutProps
> = ({ children }) => (
  <div className="flex justify-center">
    <main className="mb-36 w-11/12 max-w-3xl sm:w-10/12 md:w-9/12 lg:w-7/12 xl:w-6/12">
      {children}
    </main>
  </div>
);
