import "./Hero.css";
import Button from "../../button/Button.jsx";
import image from "/logo/STACK.svg";
import useFitText from "../../../hooks/useFitText.js";
import { useState, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../../animations/gsap";

const EMAIL = "shozabshk5@gmail.com";

function Hero({ preloaderDone }) {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const tlRef = useRef(null);
  const [copied, setCopied] = useState(false);

  useFitText(containerRef);

  //gsap animation

  useGSAP(
    () => {
      tlRef.current = gsap.timeline({
        defaults: { ease: "power3.out", duration: 3 },
        paused: true,
      });

      tlRef.current.from(
        ".hero-content",
        {
          y: -40,
          opacity: 0,
          ease: "power3.out",
        },
        "0",
      );

      tlRef.current.from(
        ".hero-role",
        {
          y: 40,
          opacity: 0,
          ease: "power3.out",
        },
        "0",
      );
    },
    { scope: heroRef },
  );

  //preloader

  useEffect(() => {
    if (preloaderDone) {
      tlRef.current?.play();
    }
  }, [preloaderDone]);

  //my email copy logic

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="hero-content">
        <div className="hero-image">
          <img src={image} alt="Hero Image" />
        </div>
        <div className="hero-info">
          I make websites and apps <br /> designed and coded, start to finish.{" "}
          <br />
        </div>
        <div className="hero-button">
          <Button text="Work with me" onClick={handleCopyEmail} />
          <span className={`hero-copied-hint ${copied ? "show" : ""}`}>
            Email copied!
          </span>
        </div>
      </div>

      <div className="hero-role" ref={containerRef}>
        <span className="fit-text my-role">DESIGN ENGINEER</span>
      </div>
    </section>
  );
}

export default Hero;
