import "./WorkDetails.css";
import { useParams, useNavigate } from "react-router-dom";
import WorkDescription from "../components/sections/Works/WorkDescription";
import works from "../data/works.js";
import Footer from "../components/sections/Footer/Footer.jsx";
import Button from "../components/button/Button.jsx";
import ImagesBA from "../components/imagesJSX/imagesBA.jsx";
import ImagesSDS from "../components/imagesJSX/imagesSDS.jsx";
import ImagesPF from "../components/imagesJSX/imagesPF.jsx";
import ImagesHM from "../components/imagesJSX/imagesHM.jsx";
import ImagesBABI from "../components/imagesJSX/imagesBABI.jsx";

const imageComponents = {
  ba: <ImagesBA />,
  sds: <ImagesSDS />,
  pf: <ImagesPF />,
  hm: <ImagesHM />,
  babi: <ImagesBABI />,
};

function WorkDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const workIndex = works.findIndex((p) => p.id === id);
  const work = works[workIndex];
  const nextWork = works[(workIndex + 1) % works.length];

  if (!work) return <div className="not-found">Work not found</div>;

  return (
    <section className="work-page">
      <section>
        <WorkDescription {...work} />
      </section>

      <section className="work-imagesContainer">
        <div className="work-images">
          {imageComponents[id] ?? (
            <div className="image-placeholder-layout">
              <div className="img-full placeholder" />
              <div className="img-pair">
                <div className="placeholder" />
                <div className="placeholder" />
              </div>
              <div className="img-full placeholder" />
              <div className="img-pair">
                <div className="placeholder" />
                <div className="placeholder" />
              </div>
            </div>
          )}
        </div>
      </section>

      {nextWork && (
        <section className="bottom-navigation">
          <a onClick={() => navigate(nextWork.path)} className="next-project">
            Next Project <span>→</span>
          </a>
        </section>
      )}
      <Footer />
    </section>
  );
}

export default WorkDetails;
