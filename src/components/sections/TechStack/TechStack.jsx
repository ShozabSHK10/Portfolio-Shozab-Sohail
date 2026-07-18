import { useState } from "react";
import "./TechStack.css";
import image1 from "../../../assets/techStackImages/figmaGreyLogo.svg";
import image2 from "../../../assets/techStackImages/javaScriptGreyLogo.svg";
import image3 from "../../../assets/techStackImages/reactGreyLogo.svg";
import image4 from "../../../assets/techStackImages/gsapGreyLogo.svg";
import image5 from "../../../assets/techStackImages/firebaseGreyLogo.svg";
import image6 from "../../../assets/techStackImages/vercelGreyLogo.svg";
import image7 from "../../../assets/techStackImages/affinityGreyLogo.svg";
import image8 from "../../../assets/techStackImages/motionGreyLogo.svg";
import hoverImage1 from "../../../assets/techStackImages/figmaLogo.svg";
import hoverImage2 from "../../../assets/techStackImages/javaScriptLogo.svg";
import hoverImage3 from "../../../assets/techStackImages/reactLogo.svg";
import hoverImage4 from "../../../assets/techStackImages/gsapLogo.svg";
import hoverImage5 from "../../../assets/techStackImages/firebaseLogo.svg";
import hoverImage6 from "../../../assets/techStackImages/vercelLogo.svg";
import hoverImage7 from "../../../assets/techStackImages/affinityLogo.svg";
import hoverImage8 from "../../../assets/techStackImages/motionLogo.svg";

const items = [
  {
    id: 1,
    default: image1,
    hover: hoverImage1,
    alt: "Figma",
    link: "https://www.figma.com",
  },
  {
    id: 2,
    default: image2,
    hover: hoverImage2,
    alt: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    id: 3,
    default: image3,
    hover: hoverImage3,
    alt: "React",
    link: "https://react.dev",
  },
  {
    id: 4,
    default: image4,
    hover: hoverImage4,
    alt: "GSAP",
    link: "https://gsap.com",
  },
  {
    id: 5,
    default: image5,
    hover: hoverImage5,
    alt: "Firebase",
    link: "https://firebase.google.com",
  },
  {
    id: 6,
    default: image6,
    hover: hoverImage6,
    alt: "Vercel",
    link: "https://vercel.com",
  },
  {
    id: 7,
    default: image7,
    hover: hoverImage7,
    alt: "Affinity",
    link: "https://www.affinity.studio/",
  },
  {
    id: 8,
    default: image8,
    hover: hoverImage8,
    alt: "Motion",
    link: "https://motion.dev/",
  },
];

function TechStack() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="tech-stack" id="techStack">
      <div className="tech-stackContainer">
        <div className="stack-title">
          TECH STACK <span>(8)</span>
        </div>

        <div className="stack-section">
          <div className="stack-header">(Languages, Frameworks & Tools)</div>

          <div className="stack-tools">
            {items.map((item, i) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="grid-item"
                style={{ gridArea: `box-${i + 1}` }}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <img
                  className="default-img"
                  src={item.default}
                  alt={item.alt}
                />
                <img
                  className={`hover-img ${hoveredId === item.id ? "is-visible" : ""}`}
                  src={item.hover}
                  alt={`${item.alt} hover`}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
