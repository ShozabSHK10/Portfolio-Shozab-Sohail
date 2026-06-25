import "./navbar.css";
import { useState, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../../animations/gsap";
import BHlogo from "/favicons/BAlogo.svg";
import AnimatedButton from "../../button/AnimatedButton.jsx";

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

  useGSAP(
    () => {
      tlRef.current = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.8 },
        paused: true,
      });

      tlRef.current
        .from(".navbar-brand", { x: -40, opacity: 0, ease: "power3.out" })
        .from(".nav-link", { y: -40, opacity: 0, stagger: 0.1 }, "<0.15")
        .from(
          [".navbar-cta", ".navbar-hamburger"],
          { x: 40, opacity: 0 },
          "<0.2",
        );
    },
    { scope: navRef },
  );

  useEffect(() => {
    const play = () => tlRef.current?.play();
    window.addEventListener("preloaderDone", play, { once: true });
    return () => window.removeEventListener("preloaderDone", play);
  }, []);

  return (
    <>
      <nav className="navbar" ref={navRef}>
        <div className="navbar-left">
          <div className="navbar-brand">
            <a href="/">
              <img src={BHlogo} alt="CompanyIcon" className="brandLogo" />
            </a>
          </div>
        </div>

        <div className="navbar-center">
          <a href="/about" className="nav-link">
            About
          </a>
          <a href="/projects" className="nav-link">
            Projects
          </a>
          <a href="/process" className="nav-link">
            Process
          </a>
          <a href="/gallery" className="nav-link">
            Gallery
          </a>
        </div>

        <div className="navbar-right">
          <div className="navbar-cta">
            <AnimatedButton text="Book a Call With Us" link="#contact" />
          </div>
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
          <a href="/" className="drawer-link" onClick={() => toggleMenu(false)}>
            HOME
          </a>
          <a
            href="/about"
            className="drawer-link"
            onClick={() => toggleMenu(false)}
          >
            ABOUT
          </a>
          <a
            href="/projects"
            className="drawer-link"
            onClick={() => toggleMenu(false)}
          >
            PROJECTS
          </a>
          <a
            href="/process"
            className="drawer-link"
            onClick={() => toggleMenu(false)}
          >
            PROCESS
          </a>
          <a
            href="/gallery"
            className="drawer-link"
            onClick={() => toggleMenu(false)}
          >
            GALLERY
          </a>
          <a
            href="#contact"
            className="drawer-link"
            onClick={() => toggleMenu(false)}
          >
            CONTACT
          </a>
        </div>
        <div className="drawer-contact">
          <a href="tel:+968 96461942" onClick={() => toggleMenu(false)}>
            Call Us
          </a>
          <a
            href="https://share.google/TtJQu0xLDNRZlCRsh"
            target="_blank"
            rel="noreferrer"
            onClick={() => toggleMenu(false)}
          >
            Visit Us
          </a>
          <a
            href="https://www.instagram.com/bahjat_al_afkar?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noreferrer"
            onClick={() => toggleMenu(false)}
          >
            Instagram
          </a>
        </div>
      </div>
    </>
  );
}

export default NavBar;