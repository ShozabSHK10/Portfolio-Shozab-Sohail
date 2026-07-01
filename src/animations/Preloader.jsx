import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./Preloader.css";

function Preloader({ onComplete }) {
  const wrapperRef = useRef(null);
  const NUM_LINES = 10;

  useGSAP(
  () => {
    const lines = wrapperRef.current.querySelectorAll(".preloader__line");
    const counter = wrapperRef.current.querySelector(".preloader__counter");
    const bar = wrapperRef.current.querySelector(".preloader__bar");

    const tl = gsap.timeline();
    const obj = { val: 0 };

    // 1. count up
    tl.to(obj, {
      val: 100,
      duration: 2.2,
      ease: "power2.inOut",
      onUpdate() {
        const v = Math.round(obj.val);
        counter.textContent = String(v).padStart(2, "0") + "%";
        bar.style.width = v + "%";
      },
    }, 0);

    // 2. lines wipe IN left→right
    tl.to(lines, {
      scaleX: 1,
      duration: 0.06,
      stagger: { each: 0.045, from: "start", ease: "none" },
      ease: "none",
    }, 0.3);

    // 3. counter fades out
    tl.to(counter, {
      scale: 0.85,
      opacity: 0,
      y: -20,
      duration: 0.5,
      ease: "power2.in",
    }, "+=0.15");

    // 4. lines retract right→left, then done
    tl.to(lines, {
      scaleX: 0,
      transformOrigin: "right",
      duration: 0.05,
      stagger: { each: 0.03, from: "end", ease: "none" },
      ease: "none",
      onComplete: () => {
        wrapperRef.current.style.display = "none";
        window.dispatchEvent(new Event("preloaderDone"));
        onComplete?.();
      },
    }, "-=0.2");
  },
  { scope: wrapperRef },
);

  return (
    <div className="preloader" ref={wrapperRef}>
      <div className="preloader__lines">
        {Array.from({ length: NUM_LINES }).map((_, i) => (
          <div key={i} className="preloader__line" />
        ))}
      </div>
      <div className="preloader__counter">000</div>
      <div className="preloader__bar" />
    </div>
  );
}

export default Preloader;
