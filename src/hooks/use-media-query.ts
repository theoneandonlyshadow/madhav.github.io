import { useEffect, useState } from "react";

export function useMediaQuery(query: string) {
  const [value, setValue] = useState(() => {
    if (typeof window !== "undefined") {
      return matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    const result = matchMedia(query);

    result.addEventListener(
      "change",
      (event: MediaQueryListEvent) => {
        setValue(event.matches);
      },
      { signal }
    );

    return () => {
      abortController.abort();
    };
  }, [query]);

  return value;
}
