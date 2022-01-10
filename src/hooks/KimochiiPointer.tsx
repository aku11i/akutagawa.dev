import KimochiiPointer from "kimochii-pointer";
import { useEffect } from "react";

export const useKimochiiPointer = () => {
  useEffect(() => {
    if (!process.browser) return;

    const pointer = new KimochiiPointer();
    pointer.mount();

    return () => {
      pointer.unmount();
    };
  }, []);
};
