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
    <div className="relative">
      <div
        className="absolute bg-gray-400 rounded-full opacity-10"
        style={{ width: size, height: size }}
      />
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
