import "../style/css/Carrousel.css";

function Carrousel({ cover, title }) {
  return (
    <div className="carrousel-container">
      <img src={cover} alt={title + " picture"} className="carrousel-picture" />
      <div className="carrousel-background"></div>
    </div>
  );
}

export default Carrousel;
