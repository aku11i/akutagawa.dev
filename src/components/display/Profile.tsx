import { VoidFunctionComponent } from "react";

import { ExternalLink } from "../general/ExternalLink";
import { Typography } from "../general/Typography";
import { IconProfile } from "../icon/IconProfile";

export type ProfileProps = {
  //
};

export const Profile: VoidFunctionComponent<ProfileProps> = () => {
  return (
    <section className="text-center">
      <div className="flex justify-center mb-8">
        <IconProfile size={192} />
      </div>

      <Typography as="h1" className="text-3xl">
        Shuhei Akutagawa
      </Typography>

      <ExternalLink className="p-1" href="https://twitter.com/aku11i">
        <Typography className="text-lg">@aku11i</Typography>
      </ExternalLink>
    </section>
  );
};
