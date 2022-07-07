import { useState } from "react";
import { ReactComponent as Icon } from "../assets/chevron-down-solid.svg";
import "../style/css/Dropdown.css";

function Gear({ equipments }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleTogle() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="dropdown-container dropdown-information dropdown-gear">
      <div className="dropdown-header">
        <p>Equipements</p>
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
        <ul className="gear-list">
          {equipments.map((gear) => (
            <li className="gear-name" key={gear}>
              {gear}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Gear;
