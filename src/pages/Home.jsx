import "./Home.css" 
import Hero from "../components/sections/Hero/Hero.jsx";
import About from "../components/sections/About/About.jsx";
import Works from "../components/sections/Works/Works.jsx";
import Services from "../components/sections/Services/Services.jsx";
import Footer from "../components/sections/Footer/Footer.jsx";


function Home() {
  return (
    <>
      <Hero />
      <About />
      <Works />
      <Services />
      <div className="footerWrapper">
      <Footer />
      </div>
    </>
  );
}

export default Home;