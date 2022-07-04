import "../style/css/Dropdown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function DropdownAbout({ title, description, id }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleTogle() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="dropdown-container" key={id}>
      <div className="dropdown-header">
        <p>{title}</p>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={isOpen ? "toggle-icon open-icon" : "toggle-icon "}
          onClick={handleTogle}
        ></FontAwesomeIcon>
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
