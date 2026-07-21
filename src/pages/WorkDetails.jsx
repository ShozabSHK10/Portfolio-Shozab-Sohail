import { useRef, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import WorkImages from "../components/sections/Work/WorkImages.jsx";
import Footer from "../components/sections/Footer/Footer.jsx";

function WorkDetails( {preloaderDone} ) {
  // const { id } = useParams();

  // useLayoutEffect(() => {
  //   document.body.scrollTop = 0;
  // }, [id]);

  return (
    <div
      style={{ background: "#262626"}}
    >
      <WorkImages />
      <Footer />
    </div>
  );
}

export default WorkDetails;