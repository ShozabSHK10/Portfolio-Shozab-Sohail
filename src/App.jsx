import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Work from "./pages/Work.jsx";
import WorkDetails from "./pages/WorkDetails.jsx";
import Playground from "./pages/Playground.jsx";
import Preloader from "./animations/Preloader.jsx";
import { ScrollTrigger } from "./animations/gsap";

function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();

    window.addEventListener("load", refresh);
    if (document.readyState === "complete") refresh();
    if (document.fonts?.ready) document.fonts.ready.then(refresh);

    const safety = setTimeout(refresh, 1500);
    return () => {
      window.removeEventListener("load", refresh);
      clearTimeout(safety);
    };
  }, []);

  return (
    <>
      <Preloader onComplete={() => setPreloaderDone(true)} />
      <div style={{ visibility: preloaderDone ? "visible" : "hidden" }}></div>
      <Routes>
        <Route path="/" element={<Home preloaderDone={preloaderDone} />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:id" element={<WorkDetails />} />
        <Route path="/playground" element={<Playground />} />
      </Routes>
    </>
  );
}

export default App;
