import { useRef, useState, useEffect } from "react";
import "./SelectedWork.css";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../../animations/gsap";
import WorkCard from "./WorkCard.jsx";
import work from "../../../data/works.js";
import Button from "../../button/Button.jsx";
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

const selectedIds = work
  .filter((w) => assetsById[w.id])
  .slice(0, 2)
  .map((w) => w.id);

function SelectedWork() {
  const selectedWorkRef = useRef(null);
  const [imagesReady, setImagesReady] = useState(false);

  // decode the actual images used in this section before letting
  // ScrollTrigger measure anything
  useEffect(() => {
    const srcs = selectedIds.map((id) => assetsById[id].image);
    Promise.all(
      srcs.map(
        (src) =>
          new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.decode ? img.decode().then(resolve).catch(resolve) : (img.onload = resolve);
          }),
      ),
    ).then(() => setImagesReady(true));
  }, []);

  useGSAP(
    () => {
      if (!imagesReady) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: selectedWorkRef.current,
          start: "top 80%",
        },
      });

      tl.from(".work-header", { y: 50, opacity: 0, duration: 1 })
        .from(".work-content", { y: 100, opacity: 0, duration: 1 }, "-=0.4")
        .from(".work-button", { y: 50, opacity: 0, duration: 1 }, "-=0.4");
    },
    { scope: selectedWorkRef, dependencies: [imagesReady] },
  );

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