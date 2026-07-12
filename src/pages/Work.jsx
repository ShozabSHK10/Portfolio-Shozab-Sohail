import { useEffect } from "react";
import NavBar from "../components/sections/NavBar/NavBar.jsx";
import AllWork from "../components/sections/Work/AllWork.jsx";
import Footer from "../components/sections/Footer/Footer.jsx";

function Work({ preloaderDone }) { 

  useEffect(() => {
    document.body.classList.add("hide-scrollbar");
    return () => document.body.classList.remove("hide-scrollbar");
  }, []);

  return (
      <>
      <NavBar preloaderDone={preloaderDone} />
      <AllWork preloaderDone={preloaderDone}/>
      <Footer />
      </>
  );
}

export default Work;
