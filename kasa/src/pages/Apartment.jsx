import { useParams } from "react-router-dom";
import Carrousel from "../components/Carrousel";
import InformationSection from "../components/InformationSection";
import "../style/css/Apartment.css";
import data from "../__mocks__/data.json";

function Apartement() {
  const rentIdData = data;
  const { id } = useParams();
  const apartId = rentIdData.find((apart) => apart.id === id);
  const {
    title,
    cover,
    description,
    host,
    rating,
    location,
    equipments,
    pictures,
    tags,
  } = apartId;

  return (
    <main className="apartment-container">
      <Carrousel cover={cover} title={title} pictures={pictures}></Carrousel>
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
