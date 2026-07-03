import { useRef } from "react";
import "./Works.css";
import WorkCard from "./WorkCard.jsx";
import works from "../../../data/works.js";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "../../../animations/gsap";
import Button from "../../button/Button.jsx";
import imageBA from "../../../assets/projectImages/imagesBA/imgSixBA.jpg";
import imageSDS from "../../../assets/projectImages/imagesSDS/imgOneSDS.jpg";
import imageHM from "../../../assets/projectImages/imagesHM/imgOneHM.png";
import imagePF from "../../../assets/projectImages/imagesPF/imgTwoPF.png";
import logoOne from "../../../assets/clientLogos/bhjfLogo.svg";
import logoTwo from "../../../assets/clientLogos/sihrLogo.svg";
import logoThree from "../../../assets/clientLogos/hmLogo.svg";
import logoFour from "../../../assets/clientLogos/pfLogo.svg";
import hoverImageBA from "../../../assets/projectImages/imagesBA/imgOneBA.png";
import hoverImageSDS from "../../../assets/projectImages/imagesSDS/imgTenSDS.png";
import hoverImageHM from "../../../assets/projectImages/imagesHM/imgTwoHM.png";
import hoverImagePF from "../../../assets/projectImages/imagesPF/imgOnePF.png";

const assetsById = {
  ba: { image: imageBA, logo: logoOne, hoverImage: hoverImageBA },
  sds: { image: imageSDS, logo: logoTwo, hoverImage: hoverImageSDS },
  hm: { image: imageHM, logo: logoThree, hoverImage: hoverImageHM },
  pf: { image: imagePF, logo: logoFour, hoverImage: hoverImagePF },
};

function Works() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".works-header span", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
        },
      });

      gsap.from(".workCard", {
        y: 40,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".works-content",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section className="works" id="works" ref={sectionRef}>
      <div className="works-header">
        <span>WORKS</span>
        <span>(4)</span>
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
      <div className="works-button">
        <Button text="All projects (coming soon)" />
      </div>
    </section>
  );
}

export default Works;
