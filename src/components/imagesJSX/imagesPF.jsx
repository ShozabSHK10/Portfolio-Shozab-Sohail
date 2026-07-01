import img1 from "../../assets/projectImages/imagesPF/imgOnePF.png";
import img2 from "../../assets/projectImages/imagesPF/imgTwoPF.png";
import img3 from "../../assets/projectImages/imagesPF/imgThreePF.png";
import img4 from "../../assets/projectImages/imagesPF/imgFourPF.png";
import img5 from "../../assets/projectImages/imagespf/imgFivePF.png";

function imagesPF() {
  return (
    <>
      <img className="img-full" src={img1} alt="PF" />
      <div className="img-pair">
        <img src={img2} alt="PF" />
        <img src={img3} alt="PF" />
      </div>
      <img className="img-full" src={img4} alt="PF" />
      <img className="img-full" src={img5} alt="PF" />
    </>
  );
}

export default imagesPF;