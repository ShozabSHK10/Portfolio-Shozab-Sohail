import img1 from "../../assets/projectImages/imagesBA/imgOneBA.png";
import img2 from "../../assets/projectImages/imagesBA/imgTwoBA.png";
import img3 from "../../assets/projectImages/imagesBA/imgThreeBA.png";
import img4 from "../../assets/projectImages/imagesBA/imgFourBA.png";
import img5 from "../../assets/projectImages/imagesBA/imgFiveBA.png";

function imagesBA() {
  return (
    <>
      <img className="img-full" src={img1} alt="BA" />
      <div className="img-pair">
        <img src={img2} alt="BA" />
        <img src={img3} alt="BA" />
      </div>
      <img className="img-full" src={img4} alt="BA" />
      <img className="img-full" src={img5} alt="BA" />
    </>
  );
}

export default imagesBA;