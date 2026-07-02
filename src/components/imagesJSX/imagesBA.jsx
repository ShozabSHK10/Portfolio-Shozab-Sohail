import img1 from "../../assets/projectImages/imagesBA/imgOneBA.png";
import img2 from "../../assets/projectImages/imagesBA/imgTwoBA.png";
import img3 from "../../assets/projectImages/imagesBA/imgThreeBA.png";
import img4 from "../../assets/projectImages/imagesBA/imgFourBA.png";
import img5 from "../../assets/projectImages/imagesBA/imgFiveBA.png";
import img6 from "../../assets/projectImages/imagesBA/imgSixBA.jpg";
import img7 from "../../assets/projectImages/imagesBA/imgSevenBA.jpg";
import img8 from "../../assets/projectImages/imagesBA/imgEightBA.jpg";
import img9 from "../../assets/projectImages/imagesBA/imgNineBA.jpg";
import img10 from "../../assets/projectImages/imagesBA/imgTenBA.jpg";
import img11 from "../../assets/projectImages/imagesBA/imgElevenBA.jpg";
import img12 from "../../assets/projectImages/imagesBA/imgTwelveBA.jpg";
import img13 from "../../assets/projectImages/imagesBA/imgThirteenBA.jpg";
import img14 from "../../assets/projectImages/imagesBA/imgFourteenBA.jpg";

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
      <img className="img-full" src={img6} alt="BA" />
      
      <div className="img-pair">
        <img src={img7} alt="BA" />
        <img src={img8} alt="BA" />
      </div>
      
      <img className="img-full" src={img9} alt="BA" />
      <img className="img-full" src={img10} alt="BA" />
      <img className="img-full" src={img11} alt="BA" />

      <div className="img-pair">
        <img src={img12} alt="BA" />
        <img src={img13} alt="BA" />
      </div>

      <img className="img-full" src={img14} alt="BA" />
    </>
  );
}

export default imagesBA;
