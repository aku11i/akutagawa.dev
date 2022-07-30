import Image from "next/image";
import { VoidFunctionComponent } from "react";

import profile from "../../../public/profile.jpg";

export type ProfileIconProps = {
  size: string | number;
};

export const ProfileIcon: VoidFunctionComponent<ProfileIconProps> = ({
  size,
}) => {
  return (
    <div className="relative inline-block h-full w-full">
      <div className="absolute inline-block h-full w-full rounded-full bg-gray-400 opacity-10" />
      <Image
        src={profile}
        alt="profile icon"
        data-kimochii-pointer="lighter"
        width={size}
        height={size}
        className="rounded-full"
      />
    </div>
  );
};
