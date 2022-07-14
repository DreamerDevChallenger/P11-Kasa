import "../style/css/Header.css";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";
function Header() {
  return (
    <header className="header-container">
      <Logo></Logo>
      <nav>
        <ul>
          <li>
            <Link to="/P11-Kasa/">Acceuil</Link>
          </li>
          <li>
            <Link to="/P11-Kasa/about">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
