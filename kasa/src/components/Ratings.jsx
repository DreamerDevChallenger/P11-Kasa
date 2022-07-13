import "../style/css/Ratings.css";
import { ReactComponent as Icon } from "../assets/Star.svg";
function Ratings({ rating }) {
  const range = [1, 2, 3, 4, 5];
  return (
    <div className="rating-container">
      {range.map((ratingElement) =>
        rating >= ratingElement ? (
          <Icon className="rate-icon rated" key={ratingElement}></Icon>
        ) : (
          <Icon className="rate-icon not-rated" key={ratingElement}></Icon>
        )
      )}
    </div>
  );
}

export default Ratings;
