import { useRef } from "react";
import "./Works.css";
import WorkCard from "./WorkCard.jsx";
import works from "../../../data/works.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import imageBA from "../../../assets/projectImages/imagesBA/imgOneBA.png";
import imageSDS from "../../../assets/projectImages/imagesSDS/imgOneSDS.jpg";
import imageHM from "../../../assets/projectImages/imagesHM/imgOneHM.png";
import imageBABI from "../../../assets/projectImages/imagesBABI/imgOneBABI.jpg";
import logoOne from "../../../assets/clientLogos/bhjfLogo.svg";
import logoTwo from "../../../assets/clientLogos/sihrLogo.svg";
import hoverImageBA from "../../../assets/projectImages/imagesBA/imgTwoBA.png";
import hoverImageSDS from "../../../assets/projectImages/imagesSDS/imgFiveSDS.jpg";
import hoverImageHM from "../../../assets/projectImages/imagesHM/imgTwoHM.png";
import hoverImageBABI from "../../../assets/projectImages/imagesBABI/imgFourBABI.jpg";

gsap.registerPlugin(ScrollTrigger);

const assetsById = {
  ba: { image: imageBA, logo: logoOne, hoverImage: hoverImageBA },
  sds: { image: imageSDS, logo: logoTwo, hoverImage: hoverImageSDS },
  hm: { image: imageHM, logo: logoOne, hoverImage: hoverImageHM },
  babi: { image: imageBABI, logo: logoOne, hoverImage: hoverImageBABI },
};

function Works() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".works-header span", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".workCard", {
        y: 40,
        opacity: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".works-content",
          start: "top 85%",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section className="works" id="works" ref={sectionRef}>
      <div className="works-header">
        <span>WORKS</span>
        <span>'26</span>
      </div>
      <div className="works-content">
        {works
          .filter((w) => assetsById[w.id])
          .map((w) => (
            <WorkCard
              key={w.id}
              path={w.path}
              name={w.label}
              type={w.deliverables?.[0]}
              year={w.year}
              image={assetsById[w.id].image}
              hoverImage={assetsById[w.id].hoverImage || null}
              logo={assetsById[w.id].logo}
            />
          ))}
      </div>
    </section>
  );
}

export default Works;
