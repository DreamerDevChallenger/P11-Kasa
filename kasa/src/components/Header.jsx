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
            <Link to="/">Accueil</Link>
          </li>

          <li>
            <Link to="/about">À Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
