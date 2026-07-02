import img1 from "../../assets/projectImages/imagesSDS/imgOneSDS.jpg";
import img2 from "../../assets/projectImages/imagesSDS/imgTwoSDS.jpg";
import img3 from "../../assets/projectImages/imagesSDS/imgThreeSDS.jpg";
import img4 from "../../assets/projectImages/imagesSDS/imgFourSDS.jpg";
import img5 from "../../assets/projectImages/imagesSDS/imgFiveSDS.jpg";
import img6 from "../../assets/projectImages/imagesSDS/imgSixSDS.jpg";
import img7 from "../../assets/projectImages/imagesSDS/imgSevenSDS.jpg";
import img8 from "../../assets/projectImages/imagesSDS/imgEightSDS.jpg";
import img9 from "../../assets/projectImages/imagesSDS/imgNineSDS.jpg";
import img10 from "../../assets/projectImages/imagesSDS/imgTenSDS.png";
import img11 from "../../assets/projectImages/imagesSDS/imgElevenSDS.png";

function imagesSDS() {
  return (
    <>
      <img className="img-full" src={img1} alt="SDS" />
      

      <div className="img-pair">
        <img src={img2} alt="SDS" />
        <img src={img3} alt="SDS" />
      </div>
      
      <img className="img-full" src={img4} alt="SDS" />
      <img className="img-full" src={img5} alt="SDS" />

      <div className="img-pair">
        <img src={img6} alt="SDS" />
        <img src={img7} alt="SDS" />
      </div>

      <div className="img-pair">
        <img src={img8} alt="SDS" />
        <img src={img9} alt="SDS" />
      </div>

      <img className="img-full" src={img10} alt="SDS" />
      <img className="img-full" src={img11} alt="SDS" />

    </>
  );
}

export default imagesSDS;