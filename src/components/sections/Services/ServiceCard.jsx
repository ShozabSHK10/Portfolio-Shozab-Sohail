import { useRef } from "react";
import "./ServiceCard.css";
import PropTypes from "prop-types";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "../../../animations/gsap";

function ServiceCard({ number, title, subtitle, image, description }) {
  const cardRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(
        [
          ".service-number",
          ".service-headings > *",
          ".service-image",
          ".service-description",
        ],
        {
          opacity: 0,
          y: 20,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
          },
        },
      );
    },
    { scope: cardRef },
  );

  return (
    <div className="service-card" ref={cardRef}>
      <div className="service-number">{number}</div>

      <div className="service-headings">
        <div className="service-title">{title}</div>
        <div className="service-subtitle">{subtitle}</div>
      </div>

      <div className="service-image">
        <img src={image} alt="" />
      </div>

      <div className="service-description">{description}</div>
    </div>
  );
}

ServiceCard.propTypes = {
  number: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.node,
  image: PropTypes.string,
  description: PropTypes.string,
};

export default ServiceCard;
