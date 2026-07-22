import "./DraggableGallery.css";
import { useRef, useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useMotionValue } from "framer-motion";
import imgOne from "../../../assets/playgroundImages/homelanders.png";
import imgTwo from "../../../assets/playgroundImages/delight.png";
import imgThree from "../../../assets/playgroundImages/luna.png";
import imgFour from "../../../assets/playgroundImages/paot.png";
import imgFive from "../../../assets/playgroundImages/kia.png";
import imgSix from "../../../assets/playgroundImages/theVoidz.png";
import imgSeven from "../../../assets/playgroundImages/hyundaiAccent.jpg";
import imgEight from "../../../assets/playgroundImages/cardDesign.png";
import imgNine from "../../../assets/playgroundImages/taj.png";
import imgTen from "../../../assets/playgroundImages/africanMenu.png";
import imgEleven from "../../../assets/playgroundImages/lebaneseMenu.png";
import imgTwelve from "../../../assets/playgroundImages/omaniMenu.png";
import imgThirteen from "../../../assets/playgroundImages/greenOlive.png";
import imgFourteen from "../../../assets/playgroundImages/cardDesignTwo.png";
import imgFifteen from "../../../assets/playgroundImages/EnvelopeSDS.png";
import imgSixteen from "../../../assets/playgroundImages/LandingPageSDS.png";
import imgSeventeen from "../../../assets/playgroundImages/neonScorpion.png";

const BASE_CANVAS_W = 4000;
const BASE_CANVAS_H = 3200;
const BASE_REFERENCE_VIEWPORT = 1600;

const ITEMS = [
  { id: 1, x: 2650, y: 1150, w: 500, src: imgOne },
  { id: 2, x: 3000, y: 250, w: 500, src: imgTwo },
  { id: 3, x: 250, y: 300, w: 500, src: imgThree },
  { id: 4, x: 800, y: 200, w: 500, src: imgFour },
  { id: 5, x: 3200, y: 1100, w: 700, src: imgFive },
  { id: 6, x: 2000, y: 1100, w: 400, src: imgSix },
  { id: 7, x: 1550, y: 1300, w: 400, src: imgSeven },
  { id: 8, x: 250, y: 2400, w: 700, src: imgEight },
  { id: 9, x: 2900, y: 1450, w: 700, src: imgNine },
  { id: 10, x: 2100, y: 2125, w: 500, src: imgTen },
  { id: 11, x: 2650, y: 2200, w: 500, src: imgEleven },
  { id: 12, x: 3200, y: 2150, w: 500, src: imgTwelve },
  { id: 13, x: 900, y: 600, w: 500, src: imgThirteen },
  { id: 14, x: 250, y: 2650, w: 700, src: imgFourteen },
  { id: 15, x: 800, y: 1200, w: 450, src: imgFifteen },
  { id: 16, x: 200, y: 1200, w: 550, src: imgSixteen },
  { id: 17, x: 2000, y: 1450, w: 400, src: imgSeventeen },
];

function getScaleForViewport(vw) {
  const raw = vw / BASE_REFERENCE_VIEWPORT;
  return Math.min(1, Math.max(0.32, raw));
}

function DraggableGallery() {
  const viewportRef = useRef(null);
  const navigate = useNavigate();
  const [scale, setScale] = useState(1);
  const [constraints, setConstraints] = useState({
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  });
  const [isDragging, setIsDragging] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const canvasW = BASE_CANVAS_W * scale;
  const canvasH = BASE_CANVAS_H * scale;

  const scaledItems = useMemo(
    () =>
      ITEMS.map((item) => ({
        ...item,
        x: item.x * scale,
        y: item.y * scale,
        w: item.w * scale,
      })),
    [scale],
  );

  useEffect(() => {
    const layout = () => {
      const vp = viewportRef.current;
      if (!vp) return;
      const vw = vp.clientWidth;
      const vh = vp.clientHeight;

      const nextScale = getScaleForViewport(vw);
      setScale(nextScale);

      const cw = BASE_CANVAS_W * nextScale;
      const ch = BASE_CANVAS_H * nextScale;

      const nextConstraints = {
        left: Math.min(0, vw - cw),
        right: 0,
        top: Math.min(0, vh - ch),
        bottom: 0,
      };
      setConstraints(nextConstraints);

      x.set(nextConstraints.left / 2);
      y.set(nextConstraints.top / 2);
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
        This is a collection of my design works, Not all of this had a
        client behind it. Half was paid work, half was me just wanting to see if
        an idea would hold up.
      </div>
      <div className="gallery-bgText">PLAYGROUND</div>
      <div className="gallery-scrollHint">
        <p>(Click + hold to explore)</p>
      </div>

      <motion.div
        className="gallery-canvas"
        style={{ width: canvasW, height: canvasH, x, y }}
        drag
        dragConstraints={constraints}
        dragElastic={0.05}
        dragTransition={{ power: 0.3, timeConstant: 200 }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
      >
        {scaledItems.map((item) => (
          <img
            key={item.id}
            src={item.src}
            alt=""
            draggable={false}
            className="gallery-item"
            style={{ left: item.x, top: item.y, width: item.w, height: "auto" }}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default DraggableGallery;
