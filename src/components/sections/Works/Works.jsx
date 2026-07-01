import "./Works.css";
import WorkCard from "./WorkCard.jsx";
import works from "../../../data/works.js";
import imageBA from "../../../assets/projectImages/imagesBA/imgOneBA.png";
import imageSDS from "../../../assets/projectImages/imagesSDS/imgOneSDS.jpg";
import imageHM from "../../../assets/projectImages/imagesHM/imgOneHM.png";
import imageBABI from "../../../assets/projectImages/imagesBABI/imgOneBABI.jpg";
import logoOne from "../../../assets/clientLogos/bhjfLogo.svg";
import logoTwo from "../../../assets/clientLogos/sihrLogo.svg";

const assetsById = {
  ba: { image: imageBA, logo: logoOne },
  sds: { image: imageSDS, logo: logoTwo },
  hm: {image: imageHM, logo: logoOne},
  babi: {image: imageBABI, logo: logoOne}
};

function Works() {
  return (
    <section className="works" id="works">
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
              logo={assetsById[w.id].logo}
            />
          ))}
      </div>
    </section>
  );
}

export default Works;