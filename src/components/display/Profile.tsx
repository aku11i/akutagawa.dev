import { VoidFunctionComponent } from "react";

import { ExternalLink } from "../general/ExternalLink";
import { Typography } from "../general/Typography";
import { ProfileIcon } from "../icon/ProfileIcon";

export type ProfileProps = {
  //
};

export const Profile: VoidFunctionComponent<ProfileProps> = () => {
  return (
    <section className="text-center">
      <div className="flex justify-center">
        <ProfileIcon size={192} />
      </div>

      <div className="mt-8">
        <Typography as="h1" className="text-3xl">
          <Typography inlineBlock>芥川 周平 /&nbsp;</Typography>
          <Typography inlineBlock>Shuhei Akutagawa</Typography>
        </Typography>
      </div>

      <div className="mt-2">
        <ExternalLink className="p-1" href="https://twitter.com/aku11i">
          <Typography className="text-lg">@aku11i</Typography>
        </ExternalLink>
      </div>
    </section>
  );
};
