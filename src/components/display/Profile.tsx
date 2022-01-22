import { VoidFunctionComponent } from "react";

import { Typography } from "../general/Typography";
import { ProfileIcon } from "../icon/ProfileIcon";

export type ProfileProps = {
  //
};

export const Profile: VoidFunctionComponent<ProfileProps> = () => {
  return (
    <section className="text-left">
      <div className="flex items-center">
        <div className="w-16 h-16 sm:w-24 sm:h-24">
          <ProfileIcon size={128} />
        </div>

        <div className="ml-4">
          <Typography as="h1" className="text-2xl sm:text-3xl">
            <Typography>芥川 周平 /</Typography>
            <br />
            <Typography>Shuhei Akutagawa</Typography>
          </Typography>
        </div>
      </div>
    </section>
  );
};
