import "../style/css/Header.css";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";
function Header() {
  return (
    <header>
      <Logo></Logo>
      <nav>
        <ul>
          <li>
            <Link to="/">Acceuil</Link>
          </li>
          <li>
            <Link to="/about">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
