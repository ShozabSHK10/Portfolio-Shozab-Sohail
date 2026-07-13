import "./NavBar.css";
import { useState, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../../animations/gsap";
import logo from "/logo/SHK.svg";

function NavBar({ preloaderDone }) {
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
        .from(".nav-link", { y: -40, opacity: 0, clearProps: "all" }, "0",)
        .from(".navbar-hamburger", { x: 40, opacity: 0 }, "0");
    },
    { scope: navRef }, 
  );

  useEffect(() => {
    if (preloaderDone) {
      tlRef.current?.play();
    }
  }, [preloaderDone]);

  return (
    <>
      <nav className="navbar" ref={navRef}>
        <a href="/" className="navbar-left">
          <img src={logo} alt="MyLogo" className="brandLogo" />
        </a>

        <div className="navbar-right">
          <a href="/work" className="nav-link" data-text="Work">
            <span>Work</span>
          </a>
          <a href="/playground" className="nav-link" data-text="Playground">
            <span>Playground</span>
          </a>
          <a
            href="https://gumroad.com/products"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
            data-text="Resources"
          >
            <span>Resources</span>
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
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      <div className={`navbar-drawer ${menuOpen ? "drawer-open" : ""}`}>
        <div className="drawer-header">
          <a
            href="/work"
            className="drawer-link"
            onClick={() => toggleMenu(false)}
          >
            Work
          </a>
          <a
            href="/playground"
            className="drawer-link"
            onClick={() => toggleMenu(false)}
          >
            Playground
          </a>
          <a
            href="https://gumroad.com/products"
            target="_blank"
            rel="noopener noreferrer"
            className="drawer-link"
          >
            Resources
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="drawer-link"
          >
            Resume
          </a>
        </div>

        <div className="menu-copyright">
          &copy;2026 Shozab Sohail. All rights reserved.
        </div>
        
      </div>
    </>
  );
}

export default NavBar;
