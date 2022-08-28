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
            "/apartment/" +
            id +
            "/" +
            title
              .replace(/[ÀÁÂÃÄÅ]/g, "A")
              .replace(/[àáâãäå]/g, "a")
              .replace(/[ÈÉÊË]/g, "E")
              .replace(/[èéêë]/g, "e")
              .replace(/[Î]/g, "I")
              .replace(/[î]/g, "i")
              .replace(/[Ô]/g, "O")
              .replace(/[ô]/g, "o")
              .replace(/[Ù]/g, "U")
              .replace(/[ù]/g, "u")
              .replace(/[Ç]/g, "C")
              .replace(/[ç]/g, "c")
              .toLowerCase()
              .split(" ")
              .join("-")
              .split("---")
              .join("-")
          }
        >
          {title}
        </Link>
      </h2>
    </article>
  );
}

export default RentItems;
