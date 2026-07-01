import { useRef } from "react";
import "./WorkCard.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function WorkCard({ path, image, hoverImage, logo, name, type, year }) {
  const imgRef = useRef(null);
  const hoverImgRef = useRef(null);

  const { contextSafe } = useGSAP();

  useGSAP(() => {
    if (hoverImgRef.current) {
      gsap.set(hoverImgRef.current, {
        xPercent: -50,
        yPercent: -50,
        scale: 0.5,
      });
    }
  }, []);

  const handleEnter = contextSafe(() => {
    gsap.to(imgRef.current, {
      filter: "blur(2px)",
      duration: 0.5,
      ease: "power3.out",
    });
    if (hoverImgRef.current) {
      gsap.to(hoverImgRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
      });
    }
  });

  const handleLeave = contextSafe(() => {
    gsap.to(imgRef.current, {
      filter: "blur(0px)",
      duration: 0.4,
      ease: "power3.out",
    });
    if (hoverImgRef.current) {
      gsap.to(hoverImgRef.current, {
        opacity: 0,
        scale: 0.5,
        duration: 0.4,
        ease: "power3.out",
      });
    }
  });

  return (
    <Link
      to={path}
      className="workCard"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="workImage">
        <img ref={imgRef} src={image} alt="" />
        {hoverImage && (
          <img
            ref={hoverImgRef}
            className="hoverImage"
            src={hoverImage}
            alt=""
          />
        )}
      </div>

      <div className="workInfo">
        <div className="clientInfo">
          <span className="clientLogo">
            <img src={logo} alt="" />
          </span>
          <span className="clientName">{name}</span>
        </div>

        <div className="workDetail">
          <span className="workType">{type}</span>
          <span className="workYear">{year}</span>
        </div>
      </div>
    </Link>
  );
}

WorkCard.propTypes = {
  path: PropTypes.string.isRequired,
  image: PropTypes.string,
  hoverImage: PropTypes.string,
  logo: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default WorkCard;
