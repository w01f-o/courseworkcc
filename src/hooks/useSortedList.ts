import { useMemo } from "react";

export function useSortedList<T extends Record<string, unknown>>(
  list: T[],
  sort: string
) {
  return useMemo(() => {
    if (sort) {
      return [...list].sort((a, b) =>
        String(a[sort]).localeCompare(String(b[sort]))
      );
    } else {
      return list;
    }
  }, [list, sort]);
}
