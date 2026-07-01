import img1 from "../../assets/projectImages/imagesSDS/imgOneSDS.jpg";
import img2 from "../../assets/projectImages/imagesSDS/imgTwoSDS.jpg";
import img3 from "../../assets/projectImages/imagesSDS/imgThreeSDS.jpg";
import img4 from "../../assets/projectImages/imagesSDS/imgFourSDS.jpg";
import img5 from "../../assets/projectImages/imagesSDS/imgFiveSDS.jpg";

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
    </>
  );
}

export default imagesSDS;