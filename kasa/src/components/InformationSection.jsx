import UserInformation from "./UserInformation";
import InformationTitle from "./InformationTitle";
import Tags from "./Tags";
import "../style/css/Information.css";
import Ratings from "./Ratings";
import Dropdown from "./Dropdown";

function InformationSection({
  title,
  description,
  location,
  equipments,
  host,
  tags,
  rating,
}) {
  return (
    <section className="information-container">
      <header className="information-header">
        <div className="first-columns-information">
          <InformationTitle
            title={title}
            location={location}
          ></InformationTitle>
          <Tags tags={tags}></Tags>
        </div>
        <div className="second-columns-information">
          <UserInformation host={host}></UserInformation>
          <Ratings rating={rating}></Ratings>
        </div>
      </header>
      <section className="information-section">
        <Dropdown title={"Description"} description={description}></Dropdown>
        <Dropdown title={"Equipements"} equipments={equipments}></Dropdown>
      </section>
    </section>
  );
}
export default InformationSection;
