import { useState } from "react";
import "../style/css/Carrousel.css";
import { ReactComponent as IconLeft } from "../assets/chevron-left-solid.svg";
import { ReactComponent as IconRight } from "../assets/chevron-right-solid.svg";
import { useEffect } from "react";

function Carrousel({ pictures }) {
  const [currentImage, setCurrentImage] = useState(0);

  function previousSlide() {
    setCurrentImage(currentImage < 1 ? pictures.length - 1 : currentImage - 1);
  }
  function nextSlide() {
    setCurrentImage(
      currentImage === pictures.length - 1 ? 0 : currentImage + 1
    );
  }
  useEffect(() => {
    function keyPress(e) {
      if (e.keyCode === 37) {
        previousSlide();
      } else if (e.keyCode === 39) {
        nextSlide();
      }
    }
    window.addEventListener("keydown", keyPress);
    return () => window.removeEventListener("keydown", keyPress);
  });

  return (
    <div className="carrousel-container">
      {pictures.map((image, index) => (
        <img
          src={image}
          key={index + "carrousel image"}
          alt={"image " + index}
          className={
            index === currentImage
              ? "picture active-picture"
              : "picture inactive-picture"
          }
        />
      ))}
      <div className="carrousel-button-container">
        <button onClick={previousSlide} className="btn-slider">
          <IconLeft></IconLeft>
        </button>
        <button onClick={nextSlide} className="btn-slider">
          <IconRight></IconRight>
        </button>
      </div>
      <div className="carrousel-background"></div>
    </div>
  );
}

export default Carrousel;
