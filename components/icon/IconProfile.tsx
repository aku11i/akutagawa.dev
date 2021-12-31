import Image from "next/image";
import { VoidFunctionComponent } from "react";

import profile from "../../public/profile.jpg";

export type ProfileIconProps = {
  //
};

export const IconProfile: VoidFunctionComponent<ProfileIconProps> = () => {
  return (
    <div className="relative w-full h-full">
      <Image
        src={profile}
        alt="profile icon"
        data-kimochii-pointer="lighter"
        layout="fill"
        className="rounded-full"
      />
    </div>
  );
};
