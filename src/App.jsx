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
  const isWorkDetails =
    location.pathname.startsWith("/work/") && location.pathname !== "/work";
  const [preloaderDone, setPreloaderDone] = useState(isWorkDetails);

  useEffect(() => {
    let rafId = null;
    const refresh = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => ScrollTrigger.refresh());
    };

    const observer = new ResizeObserver(refresh);
    observer.observe(document.body);

    window.addEventListener("load", refresh);
    if (document.fonts?.ready) document.fonts.ready.then(refresh);

    return () => {
      observer.disconnect();
      window.removeEventListener("load", refresh);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {!isWorkDetails && !preloaderDone && (
        <Preloader onComplete={() => setPreloaderDone(true)} />
      )}
      <div style={{ visibility: preloaderDone ? "visible" : "hidden" }}>
        <Routes>
          <Route path="/" element={<Home preloaderDone={preloaderDone} />} />
          <Route
            path="/work"
            element={<Work preloaderDone={preloaderDone} />}
          />
          <Route
            path="/work/:id"
            element={<WorkDetails preloaderDone={preloaderDone} />}
          />
          <Route
            path="/playground"
            element={<Playground preloaderDone={preloaderDone} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;