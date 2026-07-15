import { useRef, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import WorkImages from "../components/sections/Work/WorkImages.jsx";
import Footer from "../components/sections/Footer/Footer.jsx";

function WorkDetails({ preloaderDone }) {
  const { id } = useParams();
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    document.documentElement.style.scrollBehavior = "";
  }, [id]);

  return (
    <div
      ref={pageRef}
      style={{ background: "#262626"}}
    >
      <WorkImages />
      <Footer />
    </div>
  );
}

export default WorkDetails;