import img1 from "../../assets/projectImages/imagesHM/imgOneHM.png";
import img2 from "../../assets/projectImages/imagesHM/imgTwoHM.png";
import img3 from "../../assets/projectImages/imagesHM/imgThreeHM.png";
import img4 from "../../assets/projectImages/imagesHM/imgFourHM.png";
import img5 from "../../assets/projectImages/imagesHM/imgFiveHM.png";

function imagesHM() {
  return (
    <>
      <img className="img-full" src={img1} alt="HM" />
      <div className="img-pair">
        <img src={img2} alt="HM" />
        <img src={img3} alt="HM" />
      </div>
      <img className="img-full" src={img4} alt="HM" />
      <img className="img-full" src={img5} alt="HM" />
    </>
  );
}

export default imagesHM;