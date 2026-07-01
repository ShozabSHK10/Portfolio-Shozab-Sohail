import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./About.css";
import image from "../../../assets/servicesImages/two.jpg";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-header", {
        y: -30,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".about-description span", {
        opacity: 0,
        y: 30,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-description",
          start: "top 80%",
        },
      });

      gsap.from(".about-image img", {
        clipPath: "inset(100% 0% 0% 0%)",
        scale: 1.15,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".about-image",
          start: "top 80%",
        },
      });

      // stat counters
      gsap.utils.toArray(".stat-number").forEach((el) => {
        const target = +el.dataset.value;
        gsap.fromTo(
          el,
          { textContent: 0 },
          {
            textContent: target,
            duration: 1,
            ease: "power1.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },            
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about" id="about" ref={sectionRef}>
        <div className="about-header">ABOUT ME</div>

        <div className="about-content">
          <div className="about-description">
            <span>
              Frontend Engineer and UI/UX Designer with a focus on building
              products that are as thoughtful as they are functional. I care
              just as much about how something works as how it looks. From
              web platforms to mobile apps to brand identities, I like
              solving problems with clean, thoughtful design.
            </span>
            <span>
              My experience spans early-stage startups and independent
              clients, where I've taken ownership across multiple
              disciplines to drive projects from concept to completion.
            </span>

            <div className="about-stats">
              <div className="stat">
                <p>Years Experience</p>
                <span className="stat-number" data-value="3">
                  0
                </span>
              </div>
              <div className="stat">
                <p>Projects Shipped</p>
                <span className="stat-number" data-value="6">
                  0
                </span>
              </div>
            </div>
          </div>

          <div className="about-image">
            <img src={image} alt="Myself" />
          </div>
        </div>
    </section>
  );
}

export default About;