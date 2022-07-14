import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Carrousel from "../components/Carrousel";
import InformationSection from "../components/InformationSection";
import "../style/css/Apartment.css";

import data from "../__mocks__/data.json";

function Apartement() {
  let navigate = useNavigate();
  const urlLocation = useLocation();

  const rentIdData = data;
  const { id } = useParams();
  const apartId = rentIdData.find((apart) => apart.id === id);
  const {
    title,
    description,
    host,
    rating,
    location,
    equipments,
    pictures,
    tags,
  } = apartId;

  useEffect(() => {
    if (
      urlLocation.pathname !==
      "/apartment/" +
        id +
        "/" +
        title.toLowerCase().split(" ").join("-").split("---").join("-")
    ) {
      navigate(
        "./../" +
          title.toLowerCase().split(" ").join("-").split("---").join("-")
      );
    }
  });

  return (
    <main className="apartment-container">
      <Carrousel pictures={pictures}></Carrousel>
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
