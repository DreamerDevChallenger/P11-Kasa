import logo from "../assets/logo.svg";
import "../style/css/Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <img src={logo} alt="kasa-logo" />
      <nav>
        <ul>
          <li>
            <Link to="/">Acceuil</Link>
          </li>
          <li>A Propos</li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
