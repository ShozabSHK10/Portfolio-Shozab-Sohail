import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Work from "./pages/Work.jsx";
import WorkDetails from "./pages/WorkDetails.jsx";
import Playground from "./pages/Playground.jsx";
import Preloader from "./animations/Preloader.jsx";
import { ScrollTrigger } from "./animations/gsap";

function App() {
  const location = useLocation();
  const [preloaderDone, setPreloaderDone] = useState(false);

  // reset preloader on every route change
  useEffect(() => {
    setPreloaderDone(false);
  }, [location.pathname]);

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
  }, [location.pathname]);

  return (
    <>
      <Preloader key={location.pathname} onComplete={() => setPreloaderDone(true)} />
      <div style={{ visibility: preloaderDone ? "visible" : "hidden" }}></div>
      <Routes>
        <Route path="/" element={<Home preloaderDone={preloaderDone} />} />
        <Route path="/work" element={<Work preloaderDone={preloaderDone} />} />
        <Route path="/work/:id" element={<WorkDetails preloaderDone={preloaderDone} />} />
        <Route path="/playground" element={<Playground preloaderDone={preloaderDone} />} />
      </Routes>
    </>
  );
}

export default App;