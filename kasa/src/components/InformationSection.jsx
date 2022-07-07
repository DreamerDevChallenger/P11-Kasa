import UserInformation from "./UserInformation";
import InformationTitle from "./InformationTitle";
import Tags from "./Tags";
import "../style/css/Information.css";
import Ratings from "./Ratings";
import Gear from "./Gear";
import Description from "./Description";

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
        <InformationTitle title={title} location={location}></InformationTitle>
        <UserInformation host={host}></UserInformation>
        <Tags tags={tags}></Tags>
        <Ratings rating={rating}></Ratings>
      </header>
      <section className="information-section">
        <Description description={description}></Description>
        <Gear equipments={equipments}></Gear>
      </section>
    </section>
  );
}
export default InformationSection;
