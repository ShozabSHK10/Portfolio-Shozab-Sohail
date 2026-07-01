import "./NavBar.css";
import { useState, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../../animations/gsap";
import logo from "/logo/SHK.svg";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const tlRef = useRef(null);

  const toggleMenu = (value) => {
    const next = value ?? !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900) {
        setMenuOpen(false);
        document.body.style.overflow = "";
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "";
    };
  }, []);

  //gsap animation

  useGSAP(
    () => {
      tlRef.current = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.8 },
        paused: true,
      });

      tlRef.current
        .from(".navbar-left", { x: -40, opacity: 0 }, "0")
        .from(".nav-link", { y: -40, opacity: 0, stagger: 0.1, clearProps: "all" }, "0")
        .from(".navbar-hamburger", { x: 40, opacity: 0 }, "0");
    },
    { scope: navRef },
  );

  // preloader event listener

  useEffect(() => {
    const play = () => tlRef.current?.play();
    window.addEventListener("preloaderDone", play, { once: true });
    return () => window.removeEventListener("preloaderDone", play);
  }, []);

  return (
    <>
      <nav className="navbar" ref={navRef}>
        <a href="/" className="navbar-left">
          <img src={logo} alt="MyLogo" className="brandLogo" />
        </a>

        <div className="navbar-right">
          <a href="#about" className="nav-link"  data-text="About">
            <span>About</span>
          </a>
          <a href="#works" className="nav-link"  data-text="Works">
            <span>Works</span>
          </a>
          <a href="#services" className="nav-link" data-text="Services">
           <span>Services</span>
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
            data-text="Resume"
          >
            <span>Resume</span>
          </a>
          <button
            className="navbar-hamburger"
            onClick={() => toggleMenu()}
            aria-label="Toggle menu"
          >
            {menuOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </nav>

      <div className={`navbar-drawer ${menuOpen ? "drawer-open" : ""}`}>
        <div className="drawer-header">
          <a
            href="#about"
            className="drawer-link"
            onClick={() => toggleMenu(false)}
          >
            About
          </a>
          <a
            href="#works"
            className="drawer-link"
            onClick={() => toggleMenu(false)}
          >
            Works
          </a>
          <a
            href="#services"
            className="drawer-link"
            onClick={() => toggleMenu(false)}
          >
            Services
          </a>
          <a
            href="#contact"
            className="drawer-link"
            onClick={() => toggleMenu(false)}
          >
            Contact
          </a>
        </div>
        <div className="drawer-contact">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            Resume
          </a>
        </div>
      </div>
    </>
  );
}

export default NavBar;
