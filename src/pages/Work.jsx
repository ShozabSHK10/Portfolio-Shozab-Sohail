import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import NavBar from "../components/sections/NavBar/NavBar.jsx";
import AllWork from "../components/sections/Work/AllWork.jsx";
import Footer from "../components/sections/Footer/Footer.jsx";

function Work({ preloaderDone }) {
  const pageRef = useRef(null);

  useEffect(() => {
    document.body.classList.add("hide-scrollbar");
    return () => document.body.classList.remove("hide-scrollbar");
  }, []);

  return (
      <>
      <NavBar preloaderDone={preloaderDone} />
      <AllWork />
      <Footer />
      </>
  );
}

export default Work;
