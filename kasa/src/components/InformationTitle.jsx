import "../style/css/InformationTitle.css";
function InformationTitle({ title, location }) {
  return (
    <div className="information-name">
      <h1 className="information-title">{title}</h1>
      <p className="information-location">{location}</p>
    </div>
  );
}

export default InformationTitle;
