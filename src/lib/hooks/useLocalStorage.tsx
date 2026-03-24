import { useState } from "react";

export function useLocalStorage(key: string, initial: any = "") {
  const stored = localStorage.getItem(key);
  const [value, setValue] = useState(stored ? JSON.parse(stored) : initial);

  const set = (val: any) => {
    localStorage.setItem(key, JSON.stringify(val));
    setValue(val);
  };

  return [value, set];
}
