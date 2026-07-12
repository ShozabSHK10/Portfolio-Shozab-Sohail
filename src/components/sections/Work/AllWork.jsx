import { useRef, useEffect } from "react";
import "./AllWork.css";
import WorkCard from "./WorkCard.jsx";
import work from "../../../data/works.js";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../../animations/gsap.js";
import imageBA from "../../../assets/projectImages/imagesBA/imgSixBA.jpg";
import imageSDS from "../../../assets/projectImages/imagesSDS/imgOneSDS.png";
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

function AllWork({ preloaderDone }) {
  const sectionRef = useRef(null);
  const tlRef = useRef(null);

  useGSAP(
    () => {
      tlRef.current = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.8 },
        paused: true,
      });
      
      tlRef.current
        .from(".all-workHeader", { y: 100, opacity: 0 }, "0")
        .from(
          ".all-workContent",
          { y: 100, opacity: 0, clearProps: "all" },
          "0",
        );
    },
    { scope: sectionRef },
  );

  useEffect(() => {
      if (preloaderDone) {
        tlRef.current?.play();
      }
    }, [preloaderDone]);

  return (
    <section className="allWork" id="allWork" ref={sectionRef}>
      <div className="all-workHeader">
        <span>WORK</span>
        <span>(4)</span>
      </div>
      <div className="all-workContent">
        {work
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

export default AllWork;
