import { useEffect } from "react";
import NavBar from "../components/sections/NavBar/NavBar.jsx";
import Hero from "../components/sections/Hero/Hero.jsx";
import About from "../components/sections/About/About.jsx";
import Work from "../components/sections/Work/Work.jsx";
import Carousel from "../components/sections/Carousel/Carousel.jsx";
import Services from "../components/sections/Services/Services.jsx";
import Footer from "../components/sections/Footer/Footer.jsx";

function Home( { preloaderDone } ) {
  
  useEffect(() => {
    document.body.classList.add("hide-scrollbar");
    return () => document.body.classList.remove("hide-scrollbar");
  }, []);

  return (
    <>
      <NavBar preloaderDone={preloaderDone} />
      <Hero preloaderDone={preloaderDone}/>
      <About />
      <Work />
      <Carousel />
      <Services />
      <Footer />
    </>
  );
}

export default Home;