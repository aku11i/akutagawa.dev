import { VoidFunctionComponent } from "react";

import { Link } from "../general/Link";
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

      <h1 className="text-3xl">
        <span data-kimochii-pointer="text">Shuhei Akutagawa</span>
      </h1>

      <span className="text-lg">
        <Link href="https://twitter.com/aku11i">@aku11i</Link>
      </span>
    </section>
  );
};
