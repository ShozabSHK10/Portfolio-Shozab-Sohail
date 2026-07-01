import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./hooks/scrollToTop.jsx";
import Home from "./pages/Home.jsx";
import WorkDetails from "./pages/WorkDetails.jsx";
import Preloader from "./animations/Preloader.jsx";

function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <>
      <Preloader onComplete={() => setPreloaderDone(true)} />
      <div style={{ visibility: preloaderDone ? "visible" : "hidden" }}></div>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works/:id" element={<WorkDetails />} />
        </Routes>
    </>
  );
}

export default App;