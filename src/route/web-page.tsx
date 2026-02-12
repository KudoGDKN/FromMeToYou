import { useState } from "react";
import "./style/webpage.css";
import box from "../assets/1.png";
import flower from "../assets/flower.png";

function Weppage() {
  const [showBox, setShowBox] = useState(true);
  const [showFlower, setShowFlower] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const handleClick = () => {
    setFadeOut(true); // start box fade out

    setTimeout(() => {
      setShowBox(false);     // hide box
      setShowFlower(true);   // show flower
      setFadeIn(true);       // start flower fade in
    }, 500); // match CSS duration
  };

  return (
    <div className="web-page">
      <div className="frame-page-title">
      </div>

      <div className="frame-page-content">
        <div className="content-frame">
          
          {showBox && (
            <img
              src={box}
              className={`box ${fadeOut ? "fade-out" : ""}`}
              alt="box"
              onClick={handleClick}
            />
          )}

          {showFlower && (
            <img
              src={flower}
              className={`flower ${fadeIn ? "fade-in" : ""}`}
              alt="flower"
            />
          )}

        </div>
      </div>

      <div className="frame-page-credit"></div>
    </div>
  );
}

export default Weppage;