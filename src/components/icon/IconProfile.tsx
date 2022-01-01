import Image from "next/image";
import { VoidFunctionComponent } from "react";

import profile from "../../../public/profile.jpg";

export type ProfileIconProps = {
  size: string | number;
};

export const IconProfile: VoidFunctionComponent<ProfileIconProps> = ({
  size,
}) => {
  return (
    <div className="relative w-full h-full">
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
