import { useState } from "react";

import { useMounted } from "./useMounted";

export type UseSessionStorage<T> = [T, (newValue: T) => void];
export const useSessionStorage = <T>(
  key: string,
  defaultValue: T
): UseSessionStorage<T> => {
  /* eslint-disable react-hooks/rules-of-hooks */
  if (!process.browser) {
    return [
      defaultValue,
      () => console.warn("useSessionStorage is can only be used in browser."),
    ];
  }

  const [value, setValue] = useState<T>(defaultValue);

  useMounted(() => {
    const savedValue = window.sessionStorage.getItem(key);

    if (typeof savedValue !== "string") return;

    setValue(JSON.parse(savedValue));
  });

  const set = (newValue: T) => {
    if (newValue === undefined || newValue === null) {
      window.sessionStorage.removeItem(key);
      return;
    }

    setValue(newValue);

    window.sessionStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, set];
};
