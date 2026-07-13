import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "../../../animations/gsap";
import "./About.css";
import image from "../../../assets/projectImages/imagesSDS/imgNineSDS.png";

function About() {
  const aboutRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        },
      });

      tl.from(".about-header", {
        y: 50,
        opacity: 0,
        duration: 1,
      })
        .from(
          ".about-description",
          {
            y: 40,
            opacity: 0,
            duration: 1,
          },
          "-=0.4",
        )
        .from(
          ".stat",
          {
            y: 30,
            opacity: 0,
            stagger: 0.15,
            duration: 0.6,
          },
          "-=0.3",
        )
        .from(
          ".about-image",
          {
            y: 100,
            opacity: 0,
            duration: 1,
          },
          "-=1",
        );
    },
    { scope: aboutRef },
  );

  return (
    <section className="about" id="about" ref={aboutRef}>
      <div className="about-content">
        <div className="about-header">MYSELF</div>
        <div className="about-description">
          <span>
            Frontend Engineer and UI/UX Designer with a focus on building
            products that are as thoughtful as they are functional. I care just
            as much about how something works as how it looks. From web
            platforms to mobile apps to brand identities, I like solving
            problems with clean, thoughtful design.
          </span>
          <span>
            My experience spans early-stage startups and independent clients,
            where I've taken ownership across multiple disciplines to drive
            projects from concept to completion.
          </span>

          <div className="about-stats">
            <div className="stat">
              <p>Years Experience</p>
              <span className="stat-number">3</span>
            </div>
            <div className="stat">
              <p>Projects Shipped</p>
              <span className="stat-number">6</span>
            </div>
          </div>
        </div>
      </div>

      <div className="about-image">
        <img src={image} alt="Myself" />
      </div>
    </section>
  );
}

export default About;
