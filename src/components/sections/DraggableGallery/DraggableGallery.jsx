import "./DraggableGallery.css";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useMotionValue } from "framer-motion";
import imgOne from "../../../assets/playgroundImages/homelanders.png"
import imgTwo from "../../../assets/playgroundImages/delight.png";
import imgThree from "../../../assets/playgroundImages/luna.png";
import imgFour from "../../../assets/playgroundImages/paot.png";
import imgFive from "../../../assets/playgroundImages/kia.png"
import imgSix from "../../../assets/playgroundImages/theVoidz.png";
import imgSeven from "../../../assets/playgroundImages/hyundaiAccent.jpg";
import imgEight from "../../../assets/playgroundImages/cardDesign.png";
import imgNine from "../../../assets/playgroundImages/taj.png";
import imgTen from "../../../assets/playgroundImages/africanMenu.png";
import imgEleven from "../../../assets/playgroundImages/lebaneseMenu.png";
import imgTwelve from "../../../assets/playgroundImages/omaniMenu.png";

const CANVAS_W = 4000;
const CANVAS_H = 3400;

const ITEMS = [
  {
    id: 1,
    x: 2300,
    y: 1150,
    w: 500,
    src: imgOne,
  },
  {
    id: 2,
    x: 400,
    y: 250,
    w: 500,
    src: imgTwo,
  },
  {
    id: 3,
    x: 2400,
    y: 300,
    w: 500,
    src:imgThree,
  },
  {
    id: 4,
    x: 3000,
    y: 200,
    w: 500,
    src: imgFour,
  },
  {
    id: 5,
    x: 2900,
    y: 1100,
    w: 500,
    src: imgFive,
  },
  {
    id: 6,
    x: 700,
    y: 1200,
    w: 400,
    src: imgSix,
  },
  {
    id: 7,
    x: 200,
    y: 1200,
    w: 400,
    src: imgSeven,
  },
  {
    id: 8,
    x: 250,
    y: 2400,
    w: 700,
    src: imgEight,
  },
  {
    id: 9,
    x: 2600,
    y: 1500,
    w: 700,
    src: imgNine,
  },
  {
    id: 10,
    x: 2000,
    y: 2125,
    w: 500,
    src: imgTen,
  },
  {
    id: 11,
    x: 2600,
    y: 2200,
    w: 500,
    src: imgEleven,
  },
  {
    id: 12,
    x: 3200,
    y: 2150,
    w: 500,
    src: imgTwelve,
  },
];

function DraggableGallery() {
  const viewportRef = useRef(null);
  const navigate = useNavigate();
  const [constraints, setConstraints] = useState({
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  });
  const [isDragging, setIsDragging] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const layout = () => {
      const vp = viewportRef.current;
      if (!vp) return;
      const vw = vp.clientWidth;
      const vh = vp.clientHeight;

      setConstraints({
        left: Math.min(0, vw - CANVAS_W),
        right: 0,
        top: Math.min(0, vh - CANVAS_H),
        bottom: 0,
      });

      x.set(Math.min(0, vw - CANVAS_W) / 2);
      y.set(Math.min(0, vh - CANVAS_H) / 2);
    };
    layout();
    window.addEventListener("resize", layout);
    return () => window.removeEventListener("resize", layout);
  }, [x, y]);

  return (
    <div
      ref={viewportRef}
      className={`gallery-viewport ${isDragging ? "is-dragging" : ""}`}
    >
      <a onClick={() => navigate("/")} className="back-home">
        <span>←</span>Back To Home
      </a>
      <div className="gallery-text">
        This is a collection of my other design works, showcasing my versatility
        and creativity. Many of em are personal projects, but they demonstrate
        my ability to think outside the box and create unique designs.
      </div>
      <div className="gallery-bgText">PLAYGROUND</div>
      <div className="gallery-scrollHint">
        <p>Click + hold to explore</p>
      </div>

      <motion.div
        className="gallery-canvas"
        style={{ width: CANVAS_W, height: CANVAS_H, x, y }}
        drag
        dragConstraints={constraints}
        dragElastic={0.05}
        dragTransition={{ power: 0.3, timeConstant: 200 }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
      >
        {ITEMS.map((item) => (
          <img
            key={item.id}
            src={item.src}
            alt=""
            draggable={false}
            className="gallery-item"
            style={{ left: item.x, top: item.y, width: item.w, height: item.h }}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default DraggableGallery;
