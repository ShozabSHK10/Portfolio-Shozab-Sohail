import "./Carousel.css";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../../animations/gsap";

const items = [
  "Frontend Developer",
  "UI/UX Designer",
  "Systems Thinking",
  "Product Design",
  "Responsive UI",
];

function Carousel() {
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  useGSAP(() => {
    const track = trackRef.current;
    const distance = track.scrollWidth / 2;

    tweenRef.current = gsap.to(track, {
      x: -distance,
      duration: 20,
      ease: "none",
      repeat: -1,
    });

    let lastScroll = window.scrollY;

    const onScroll = () => {
      const delta = window.scrollY - lastScroll;
      lastScroll = window.scrollY;

      gsap.to(tweenRef.current, {
        timeScale: gsap.utils.clamp(1, 8, 1 + Math.abs(delta) * 0.5),
        duration: 0.3,
        overwrite: true,
        onComplete: () => {
          gsap.to(tweenRef.current, { timeScale: 1, duration: 1 });
        },
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="carousel"
      onMouseEnter={() => tweenRef.current?.timeScale(0.15)}
      onMouseLeave={() => tweenRef.current?.timeScale(1)}
    >
      <div className="carousel-track" ref={trackRef}>
        {[...items, ...items].map((text, i) => (
          <div className="carousel-slide" key={i}>
            <span>{text}</span>
            <span className="carousel-dot">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;