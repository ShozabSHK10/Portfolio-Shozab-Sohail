import { useRef } from "react";
import "./Services.css";
import ServiceCard from "./ServiceCard.jsx";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "../../../animations/gsap";
import imageOne from "../../../assets/servicesImages/one.jpg";
import imageTwo from "../../../assets/servicesImages/two.jpg";
import imageThree from "../../../assets/servicesImages/three.jpg";

const services = [
  {
    number: "01",
    title: "Web Design & Build",
    subtitle: "Custom/bespoke",
    image: imageOne,
    description:
      "I craft custom-coded websites tailored to your needs — combining pixel-perfect design with clean code and scalable performance to help your brand stand out online.",
  },
  {
    number: "02",
    title: "Product Design & Build",
    subtitle: (
      <>
        <span>Web apps</span> & <span>Mobile apps</span>
      </>
    ),
    image: imageTwo,
    description:
      "Have an app idea? I design and build web and mobile apps that are intuitive, performant, and tailored to your needs — so your vision ships as a product that looks great and works flawlessly.",
  },
  {
    number: "03",
    title: "Brand & Visual Identity",
    subtitle: (
      <>
        <span>Logos</span> & <span>Visual systems</span>
      </>
    ),
    image: imageThree,
    description:
      "I build brand identities that are distinct and deliberate — from logo and typography to colour and visual language, everything designed to communicate who you are at a glance.",
  },
];

function Services() {
  const servicesRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".services-header span", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: servicesRef.current,
        },
      });
    },
    { scope: servicesRef },
  );

  return (
    <section className="services" id="services" ref={servicesRef}>
      <div className="services-container">
        <div className="services-header">
          <span>SERVICES</span>
          <span>(3)</span>
        </div>
        <div className="services-content">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
