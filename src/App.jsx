import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProjectDetails from "./pages/ProjectDetails.jsx";
import Preloader from "./animations/Preloader.jsx";

function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <>
      <Preloader onComplete={() => setPreloaderDone(true)} />
      <div style={{ visibility: preloaderDone ? "visible" : "hidden" }}></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projectDetails" element={<ProjectDetails />} />
      </Routes>
    </>
  );
}

export default App;
