import "./Hero.css";
import Navbar from "../NavBar/Navbar.jsx";
import Button from "../../button/Button.jsx";
import image from "/logo/GLOBE.svg";
import useFitText from "../../../hooks/useFitText.js";
import { useRef } from "react";

function Hero() {
  const containerRef = useRef(null);
  useFitText(containerRef);

  return (
    <section className="hero" id="hero">
      <Navbar />
      <div className="hero-content">
        <div className="hero-image">
          <img src={image} alt="Hero Image" />
        </div>
        <div className="hero-info">
          I make websites and apps — <br/> designed and coded, start to finish. <br/>
        </div>
        <div className="hero-button">
          <Button text="Work with me" />
        </div>
      </div>

      <div className="hero-name" ref={containerRef}>
        <span className="fit-text my-name">DESIGN ENGINEER</span>
      </div>
    </section>
  );
}

export default Hero;
