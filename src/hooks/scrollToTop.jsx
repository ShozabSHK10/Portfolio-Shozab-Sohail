import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function scrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("=== ScrollToTop fired ===");
    console.log("pathname:", pathname);
    console.log("scrollY before:", window.scrollY);
    window.scrollTo(0, 0);
    console.log("scrollY immediately after:", window.scrollY);

    setTimeout(() => {
      console.log("scrollY 500ms later:", window.scrollY);
    }, 500);
  }, [pathname]);

  return null;
}

export default scrollToTop;