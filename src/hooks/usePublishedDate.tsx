import { format } from "date-fns";
import { useMemo } from "react";

export const usePublishedDate = (publishedDate: string) => {
  return useMemo(
    () => format(new Date(publishedDate), "yyyy-MM-dd"),
    [publishedDate]
  );
};
