import "../style/css/NotFound.css";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <section className="notFound-container">
      <div className="error-code">404</div>
      <div className="error-message">
        Oups! La page que vous demandez n'existe pas.
      </div>
      <div className="link-to-home">
        <Link to="/">Retourner sur la page d’accueil</Link>
      </div>
    </section>
  );
}
export default NotFound;
