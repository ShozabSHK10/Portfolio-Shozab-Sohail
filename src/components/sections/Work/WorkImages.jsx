import "./WorkImages.css";
import { useParams, useNavigate } from "react-router-dom";
import WorkDescription from "./WorkDescription.jsx";
import works from "../../../data/works.js";
import Button from "../../button/Button.jsx";
import ImagesBA from "../../imagesJSX/imagesBA.jsx";
import ImagesSDS from "../../imagesJSX/imagesSDS.jsx";
import ImagesPF from "../../imagesJSX/imagesPF.jsx";
import ImagesHM from "../../imagesJSX/imagesHM.jsx";

const imageComponents = {
  ba: <ImagesBA />,
  sds: <ImagesSDS />,
  pf: <ImagesPF />,
  hm: <ImagesHM />,
};

function WorkImages() {
  const { id } = useParams();
  const navigate = useNavigate();
  const workIndex = works.findIndex((p) => p.id === id);
  const work = works[workIndex];
  const nextWork = work[(workIndex + 1) % work.length];

  if (!work) return <div className="not-found">Work not found</div>;

  return (
    <section className="work-page">
      <section className="upper-navigation">
        <a onClick={() => navigate("/")} className="back-toHome">
          <span>←</span>Back To Home
        </a>
      </section>

      <section className="work-imagesContainer" key={id}>
        <WorkDescription {...work} />
        <div className="work-images">
          {imageComponents[id] ?? (
            <div className="image-placeholder-layout">
              <div className="img-fullPlaceholder" />

              <div className="img-pair">
                <div className="placeholder" />
                <div className="placeholder" />
              </div>

              <div className="img-fullPlaceholder" />

              <div className="img-pair">
                <div className="placeholder" />
                <div className="placeholder" />
              </div>
            </div>
          )}
        </div>
      </section>
    </section>
  );
}

export default WorkImages;
