import "../style/css/Rent.css";
import { Link } from "react-router-dom";
function RentItems({ title, cover, id }) {
  return (
    <article className="rent-container">
      <Link to={`/apartment/${id}`} className="link-rent">
        <div className="rent-banner-container">
          <img src={cover} alt="" className="rent-banner" />
        </div>
        <h2 className="rent-title">{title}</h2>
      </Link>
    </article>
  );
}

export default RentItems;
