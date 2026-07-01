import img1 from "../../assets/projectImages/imagesBABI/imgOneBABI.jpg";
import img2 from "../../assets/projectImages/imagesBABI/imgTwoBABI.jpg";
import img3 from "../../assets/projectImages/imagesBABI/imgThreeBABI.jpg";
import img4 from "../../assets/projectImages/imagesBABI/imgFourBABI.jpg";
import img5 from "../../assets/projectImages/imagesBABI/imgFiveBABI.jpg";
import img6 from "../../assets/projectImages/imagesBABI/imgSixBABI.jpg";


function imagesBABI() {
  return (
    <>
      <img className="img-full" src={img1} alt="BABI" />
      <div className="img-pair">
        <img src={img2} alt="BABI" />
        <img src={img3} alt="BABI" />
      </div>
      <img className="img-full" src={img4} alt="BABI" />
      <img className="img-full" src={img5} alt="BABI" />
    </>
  );
}

export default imagesBABI;