import { useEffect } from "react";

const useFitText = (ref) => {
  useEffect(() => {
    const fit = () => {
      const container = ref.current;
      if (!container) return;

      const style = window.getComputedStyle(container);
      const paddingLeft = parseFloat(style.paddingLeft);
      const paddingRight = parseFloat(style.paddingRight);
      const available = container.clientWidth - paddingLeft - paddingRight;

      container.querySelectorAll(".fit-text").forEach((el) => {
        el.style.overflow = "visible";
        el.style.whiteSpace = "nowrap";

        let low = 8, high = 800, mid;
        el.style.fontSize = high + "px";
        while (high - low > 0.5) {
          mid = (low + high) / 2;
          el.style.fontSize = mid + "px";
          el.scrollWidth <= available ? (low = mid) : (high = mid);
        }
        el.style.fontSize = low + "px";

        el.style.overflow = "hidden";
      });
    };

    document.fonts.ready.then(() => {
      const ro = new ResizeObserver(fit);
      ro.observe(ref.current);
      fit();
    });

    return () => {};
  }, [ref]);
};

export default useFitText;