import { VoidFunctionComponent } from "react";

import { Typography } from "../general/Typography";

export type TagProps = {
  name: string;
};

export const Tag: VoidFunctionComponent<TagProps> = ({ name }) => {
  return (
    <Typography
      className="inline-block py-px px-2 text-sm rounded-full border border-gray-500"
      pointerStyle="text"
    >
      {name}
    </Typography>
  );
};
