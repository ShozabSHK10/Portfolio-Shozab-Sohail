import { useState, useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Work from "./pages/Work.jsx";
import WorkDetails from "./pages/WorkDetails.jsx";
import Playground from "./pages/Playground.jsx";
import Preloader from "./animations/Preloader.jsx";
import ScrollToTop from "./hooks/ScrollToTop.js";

function App() {
  const location = useLocation();
  const isWorkDetails = location.pathname.startsWith("/work/") && location.pathname !== "/work";
  const showPreloader =
    location.pathname === "/" || location.pathname === "/work" || isWorkDetails;
  const [preloaderDone, setPreloaderDone] = useState(!showPreloader);

  useLayoutEffect(() => {
    setPreloaderDone(!showPreloader);
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      {showPreloader && !preloaderDone && (
        <Preloader onComplete={() => setPreloaderDone(true)} />
      )}
      <div style={{ visibility: preloaderDone ? "visible" : "hidden" }}>
        <Routes>
          <Route path="/" element={<Home preloaderDone={preloaderDone} />} />
          <Route path="/work" element={<Work preloaderDone={preloaderDone} />} />
          <Route path="/work/:id" element={<WorkDetails preloaderDone={preloaderDone} />} />
          <Route path="/playground" element={<Playground preloaderDone={preloaderDone} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;