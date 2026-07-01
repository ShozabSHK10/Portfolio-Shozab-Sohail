import NavBar from "../components/sections/NavBar/NavBar.jsx";
import Hero from "../components/sections/Hero/Hero.jsx";
import About from "../components/sections/About/About.jsx";
import Works from "../components/sections/Works/Works.jsx";
import Services from "../components/sections/Services/Services.jsx";
import Footer from "../components/sections/Footer/Footer.jsx";


function Home( { preloaderDone } ) {
  return (
    <>
      <NavBar preloaderDone={preloaderDone} />
      <Hero />
      <About />
      <Works />
      <Services />
      <Footer />
    </>
  );
}

export default Home;