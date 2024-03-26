import { useLayoutEffect, useState } from "react";

export const useMatchMedia = (queries: string[]): boolean[] => {
  const mediaQueryLists = queries.map((q: string) => window.matchMedia(q));
  const getValue = (): boolean[] =>
    mediaQueryLists.map((mql: MediaQueryList) => mql.matches);

  const [value, setValue] = useState(getValue);
  console.log(`value`)
  useLayoutEffect(() => {
    const handler = (): void => setValue(getValue);

    mediaQueryLists.forEach((mql: MediaQueryList) =>
      mql.addEventListener("change", handler),
    );

    return (): void =>
      mediaQueryLists.forEach((mql: MediaQueryList) =>
        mql.removeEventListener("change", handler),
      );
  });

  return value;
};
