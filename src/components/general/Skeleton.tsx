import classNames from "classnames";
import { VoidFunctionComponent } from "react";

export type SkeletonProps = {
  className?: string;
};

export const Skeleton: VoidFunctionComponent<SkeletonProps> = ({
  className,
}) => {
  return (
    <div
      className={classNames(
        "w-full h-full bg-gray-400 rounded-md opacity-10",
        className
      )}
    />
  );
};
