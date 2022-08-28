import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Carrousel from "../components/Carrousel";
import InformationSection from "../components/InformationSection";
import "../style/css/Apartment.css";

import data from "../__mocks__/data.json";

function Apartement() {
  const navigate = useNavigate();
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

  const correctUrl =
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
      .join("-");

  useEffect(() => {
    if (urlLocation.pathname !== correctUrl) {
      navigate(correctUrl);
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
