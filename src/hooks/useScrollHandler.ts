import { useEffect, useState } from "react";

export const useScrollHandler = () => {
  const [isScrollOnTop, setIsScrollOnTop] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY < 10;
      setScrollPos(window.scrollY);
      if (scrollCheck !== isScrollOnTop) {
        setIsScrollOnTop(scrollCheck);
      }
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [isScrollOnTop, scrollPos, setIsScrollOnTop, setScrollPos]);

  return { isScrollOnTop, scrollPos };
};
