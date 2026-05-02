import { RefObject, useEffect } from "react";

export const useClickOutside = (
  ref: RefObject<HTMLElement>,
  handler: () => void,
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const el = ref.current;

      // Do nothing if clicking inside element
      if (!el || el.contains(event.target as Node)) return;

      handler();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};
