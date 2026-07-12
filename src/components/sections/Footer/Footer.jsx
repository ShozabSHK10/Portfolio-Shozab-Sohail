import "./Footer.css";
import logo from "/logo/SHK.svg";
import { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "../../../animations/gsap";
import useLiveTime from "../../../hooks/useLiveTime.js";

function Footer({preloaderDone}) {
  const { time, date } = useLiveTime();
  const footerRef = useRef(null);
  const tlRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("shozabshk5@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.8 },
        scrollTrigger: {
          trigger: footerRef.current,
        },
      });

      tl.from(".footer-left", { y: 30, opacity: 0 }, "0")
        .from(".footer-right", { y: 30, opacity: 0, },"0",);
    },
    { scope: footerRef },
  );

  useEffect(() => {
      if (preloaderDone) {
        tlRef.current?.play();
      }
    }, [preloaderDone]);
  
    // safety net: if preloaderDone never fires (race/prop issue), play on load anyway
    useEffect(() => {
      const fallback = setTimeout(() => {
        if (tlRef.current && tlRef.current.paused()) {
          tlRef.current.play();
        }
      }, 3000); 
      return () => clearTimeout(fallback);
    }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <a href="/" className="logo-mark">
              <img src={logo} alt="MyLogo" className="MyLogo" />
            </a>
            <div className="socialLinks">
              <a
                href="https://github.com/ShozabSHK10"
                target="_blank"
                rel="noopener noreferrer"
                data-text="GitHub"
              >
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/shozab-sohail5/"
                target="_blank"
                rel="noopener noreferrer"
                data-text="LinkedIn"
              >
                <span>LinkedIn</span>
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
            <a className="nav" href="/work">
              Work <span className="nav-arrow">→</span>
            </a>
            <a className="nav" href="/playground">
              Playground <span className="nav-arrow">→</span>
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
            <button
              className="email-link"
              onClick={handleCopyEmail}
              style={{ position: "relative", cursor: "pointer" }}
            >
              shozabshk5@gmail.com
              {copied && <span className="copy-tooltip">email copied</span>}
            </button>
            <p>Booking projects for Q3 ‘2026</p>
          </div>

          <p className="footer-copyright">
            &copy;2026 Shozab Sohail. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
