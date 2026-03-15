import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    // If there's a hash, let the browser handle native anchor scrolling
    if (hash) return;
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);
  return null;
};

export default ScrollToTop;
