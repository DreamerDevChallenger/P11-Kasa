import "../style/css/Rent.css";

function RentItems({ title, cover }) {
  return (
    <article className="rent-container">
      <div className="rent-banner-container">
        <img src={cover} alt="" className="rent-banner" />
      </div>
      <h2 className="rent-title">{title}</h2>
    </article>
  );
}

export default RentItems;
