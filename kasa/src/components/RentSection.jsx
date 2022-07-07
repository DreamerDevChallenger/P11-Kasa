import data from "../data/data.json";
import RentItems from "./RentItems";
import Aos from "aos";
import "aos/dist/aos.css";

function RentSection() {
  Aos.init({ duration: 1000 });
  const rentData = data;
  return (
    <section className="rent-section">
      {rentData.map((rent) => (
        <RentItems
          key={rent.id}
          title={rent.title}
          cover={rent.cover}
          id={rent.id}
        ></RentItems>
      ))}
    </section>
  );
}
export default RentSection;
