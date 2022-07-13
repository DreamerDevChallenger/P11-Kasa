import "../style/css/Footer.css";
import { ReactComponent as Logo } from "../assets/logo.svg";
function Footer() {
  return (
    <footer>
      <Logo></Logo>
      <p className="reserved-right">© 2022 Kasa. All rights reserved</p>
    </footer>
  );
}
export default Footer;
