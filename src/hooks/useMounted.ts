import { useEffect, useRef } from "react";

export const useMounted = (callback: () => unknown): void => {
  const countRef = useRef(0);

  useEffect(() => {
    if (countRef.current++ !== 0) return;
    callback();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
};
