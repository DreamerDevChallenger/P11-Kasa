import { useState } from "react";
import { ReactComponent as Icon } from "../assets/chevron-down-solid.svg";
import "../style/css/Dropdown.css";

function Description({ description }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleTogle() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="dropdown-container dropdown-information dropdown-description">
      <div className="dropdown-header">
        <p>Description</p>
        <Icon
          className={isOpen ? "toggle-icon open-icon" : "toggle-icon "}
          onClick={handleTogle}
        ></Icon>
      </div>
      <div
        className={
          isOpen
            ? "dropdown-contain open-dropdown"
            : "dropdown-contain close-dropdown"
        }
      >
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Description;
