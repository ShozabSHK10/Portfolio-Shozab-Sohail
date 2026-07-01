import "./Footer.css";
import logo from "/logo/SHK.svg";
import useLiveTime from "../../../hooks/useLiveTime.js";

function Footer() {
  const { time, date } = useLiveTime();


  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <a href="/" className="logo-mark">
            <img src={logo} alt="MyLogo" className="MyLogo" />
          </a>
          <div className="socialLinks">
            <a
              href="https://www.linkedin.com/in/shozab-sohail5/"
              target="_blank"
              rel="noopener noreferrer"
              data-text="LinkedIn"
            >
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/ShozabSHK10"
              target="_blank"
              rel="noopener noreferrer"
              data-text="GitHub"
            >
              <span>GitHub</span>
            </a>
            <a
              href="https://www.behance.net/shozabshk"
              target="_blank"
              rel="noopener noreferrer"
              data-text="Behance"
            >
              <span>Behance</span>
            </a>
          </div>
        </div>

        <div className="footer-right">
          <span className="nav-title">(Navigation)</span>
          <a className="nav" href="/">
            Home <span className="nav-arrow">→</span>
          </a>
          <a className="nav" href="#about">
            About <span className="nav-arrow">→</span>
          </a>
          <a className="nav" href="#work">
            Work <span className="nav-arrow">→</span>
          </a>
          <a
            className="nav"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume <span className="nav-arrow">→</span>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-location">
          <p>Muscat {time}</p>
          <p>{date} (GMT +4)</p>
        </div>


        <div className="footer-meta">
          <a href="#hero" className="back-toTop">
            Back to top <span className="arrow-up">↑</span>
          </a>
          <p>Booking projects for Q3 ‘2026</p>
        </div>

        <p className="footer-copyright">
          &copy;2026 Shozab Sohail. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
