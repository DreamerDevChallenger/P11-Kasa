import "../style/css/Rent.css";
import { Link } from "react-router-dom";
function RentItems({ title, cover, id }) {
  return (
    <article className="rent-container" data-aos="zoom-on">
      <div className="rent-banner-container">
        <img src={cover} alt="" className="rent-banner" />
      </div>
      <h2 className="rent-title">
        <Link
          to={
            "apartment/" +
            id +
            "/" +
            title.toLowerCase().split(" ").join("-").split("---").join("-")
          }
        >
          {title}
        </Link>
      </h2>
    </article>
  );
}

export default RentItems;
