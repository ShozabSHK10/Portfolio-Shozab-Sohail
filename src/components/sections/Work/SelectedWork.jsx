import { useRef, useEffect } from "react";
import "./SelectedWork.css";
import WorkCard from "./WorkCard.jsx";
import work from "../../../data/works.js";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "../../../animations/gsap.js";
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

function SelectedWork({ preloaderDone }) {
  const selectedWorkRef = useRef(null);
  const tlRef = useRef(null);

  useGSAP(
  () => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 0.8 },
      scrollTrigger: {
        trigger: selectedWorkRef.current,
      },
    });

    tl.from(".work-header span", { y: 30, opacity: 0 }, "0")
      .from(".work-content", { y: 40, opacity: 0, duration: 1.5 }, "0");
  },
  { scope: selectedWorkRef },
);

  //preloader

  useEffect(() => {
    if (preloaderDone) {
      tlRef.current?.play();
    }
  }, [preloaderDone]);

  // safety net: if preloaderDone never fires (race/prop issue), play on load anyway
  useEffect(() => {
    const fallback = setTimeout(() => {
      if (tlRef.current && tlRef.current.paused()) {
        tlRef.current.play();
      }
    }, 3000); // adjust to your real preloader max duration
    return () => clearTimeout(fallback);
  }, []);


  return (
    <section className="selectedWork" id="selectedWork" ref={selectedWorkRef}>
      <div className="work-header">
        <span>SELECTED WORK</span>
        <span>(2)</span>
      </div>
      <div className="work-content">
        {work
          .filter((w) => assetsById[w.id])
          .slice(0, 2)
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
      <div className="work-button">
        <Button link="/work" text="All Works" />
      </div>
    </section>
  );
}

export default SelectedWork;
