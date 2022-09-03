import { useState } from "react";
import { ReactComponent as Icon } from "../assets/chevron-down-solid.svg";
import "../style/css/Dropdown.css";

function Gear({ title, equipments, description, isAbout, id }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleTogle() {
    setIsOpen(!isOpen);
  }
  return (
    <div
      className={`dropdown-container ${
        !isAbout ? "dropdown-information dropdown-gear" : ""
      }`}
      key={id}
    >
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
        {equipments ? (
          <ul className="gear-list">
            {equipments.map((gear) => (
              <li className="gear-name" key={gear}>
                {gear}
              </li>
            ))}
          </ul>
        ) : (
          <p>{description}</p>
        )}
      </div>
    </div>
  );
}

export default Gear;
