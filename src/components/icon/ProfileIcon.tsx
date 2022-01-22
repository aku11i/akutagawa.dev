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
    <div className="inline-block relative w-full h-full">
      <div className="inline-block absolute w-full h-full bg-gray-400 rounded-full opacity-10" />
      <Image
        src={profile}
        alt="profile icon"
        data-kimochii-pointer="lighter"
        width={size}
        height={size}
        layout="fill"
        className="rounded-full"
      />
    </div>
  );
};
