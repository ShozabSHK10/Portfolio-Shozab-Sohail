import { useRef } from "react";
import { useParams } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import WorkImages from "../components/sections/Work/WorkImages.jsx";
import Footer from "../components/sections/Footer/Footer.jsx";

function WorkDetails({ }) {
  const { id } = useParams();
  const pageRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        pageRef.current,
        { y: 600, opacity: 1 },
        { y: 0, opacity: 1, duration: 2, ease: "power3.out" }
      );
    },
    { scope: pageRef, dependencies: [id] }
  );
  return (
    <>
      <div ref={pageRef} style={{ background: "#262626" }}>
      <WorkImages/>
      <Footer />
      </div>
    </>
  );
}

export default WorkDetails;
