import Carrousel from "../components/Carrousel";
import InformationSection from "../components/InformationSection";
import "../style/css/Apartment.css";

function Apartement({
  id,
  title,
  cover,
  description,
  host,
  rating,
  location,
  equipments,
  tags,
}) {
  return (
    <main className="apartment-container">
      <Carrousel cover={cover} title={title}></Carrousel>
      <InformationSection
        title={title}
        description={description}
        host={host}
        rating={rating}
        location={location}
        equipments={equipments}
        tags={tags}
      ></InformationSection>
    </main>
  );
}
export default Apartement;
