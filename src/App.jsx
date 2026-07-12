import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Work from "./pages/Work.jsx";
import WorkDetails from "./pages/WorkDetails.jsx";
import Playground from "./pages/Playground.jsx";
import Preloader from "./animations/Preloader.jsx";

function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
      <BrowserRouter>
      <Preloader onComplete={() => setPreloaderDone(true)} />
      <div style={{ visibility: preloaderDone ? "visible" : "hidden" }}></div>
      <Routes>
        <Route path="/" element={<Home preloaderDone={preloaderDone} />} />
        <Route path="/work" element={<Work preloaderDone={preloaderDone} />} />
        <Route path="/work/:id" element={<WorkDetails/>} />
        <Route path="/playground" element={<Playground/>} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;