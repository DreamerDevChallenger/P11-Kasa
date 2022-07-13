import { useParams } from "react-router-dom";
import data from "../__mocks__/data.json";
import Apartement from "../pages/Apartment";
import ErrorPage from "../pages/ErrorPage";

function CheckingId() {
  const rentIdData = data;
  const { id } = useParams();
  const apartId = rentIdData.find((apart) => apart.id === id);

  if (apartId === undefined) {
    return <ErrorPage></ErrorPage>;
  } else {
    return <Apartement></Apartement>;
  }
}

export default CheckingId;
