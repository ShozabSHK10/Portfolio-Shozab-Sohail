import "./Carousel.css";

function Carousel() {
    return (
        <div className="carousel">
            <div className="carousel-track">
                  <div className="carousel-slide">
                      <span>Frontend Developer</span>
                      <span>UI/UX Designer</span>
                      <span>Systems Thinking</span>
                      <span>Product Design</span>
                      <span>Responsive UI</span>
                  </div>
                  <div aria-hidden="true" className="carousel-slide">
                      <span>Frontend Developer</span>
                      <span>UI/UX Designer</span>
                      <span>Systems Thinking</span>
                      <span>Product Design</span>
                      <span>Responsive UI</span>
                  </div>
            </div>
        </div>
    );
}

export default Carousel;