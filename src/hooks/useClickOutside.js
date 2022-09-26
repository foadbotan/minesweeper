import { useEffect, useRef } from "react";

export default function useClickOutside(callback) {
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      const isClickOut = ref.current && !ref.current.contains(e.target);
      if (isClickOut) callback();
    }

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  return ref;
}
