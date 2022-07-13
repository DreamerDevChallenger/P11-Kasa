import { useState } from "react";
import "../style/css/Carrousel.css";
import { ReactComponent as IconLeft } from "../assets/chevron-left-solid.svg";
import { ReactComponent as IconRight } from "../assets/chevron-right-solid.svg";

function Carrousel({ cover, title, pictures }) {
  const [currentImage, setCurrentImage] = useState(0);
  function previousSlide() {}
  function nextSlide() {}
  return (
    <div className="carrousel-container">
      {pictures.map((image, index) => (
        <img
          src={image}
          key={index + "carrousel image"}
          alt={"image " + index}
          className={
            index === currentImage ? "active-picture" : "inactive-picture"
          }
        />
      ))}
      <div>
        <button>
          <IconLeft onClick={previousSlide}></IconLeft>
        </button>
        <button onClick={nextSlide}>
          <IconRight></IconRight>
        </button>
      </div>
      <div className="carrousel-background"></div>
    </div>
  );
}

export default Carrousel;
