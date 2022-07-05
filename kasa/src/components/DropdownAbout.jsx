import "../style/css/Dropdown.css";
import { useState } from "react";
import { ReactComponent as Icon } from "../assets/chevron-down-solid.svg";
function DropdownAbout({ title, description, id }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleTogle() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="dropdown-container" key={id}>
      <div className="dropdown-header">
        <p>{title}</p>

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

export default DropdownAbout;
