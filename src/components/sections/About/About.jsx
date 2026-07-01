import "./About.css";
import image from "../../../assets/servicesImages/two.jpg";

function About() {
    return (
  <section className="about" id="about">
    <div className="about-section">
    <div className="about-header">ABOUT ME</div>

    <div className="about-content">
      <div className="about-description">
        <span>Frontend Engineer and UI/UX Designer with a focus on building products
        that are as thoughtful as they are functional. I care just as much about
        how something works as how it looks. From mobile apps to web platforms
        to brand identities, I like solving problems with clean, thoughtful
        design. 
        </span>
        <span>
        My experience spans early-stage startups and independent
        clients, where I’ve taken ownership across multiple disciplines to drive
        projects from concept to completion.
        </span>
      </div>

      <div className="about-image">
        <img src={image} alt="Myself" />
      </div>
    </div>
    </div>
  </section>
    );
}

export default About;
