import data from "../data/data.json";
import RentItems from "./RentItems";
function RentSection() {
  const rentData = data;
  return (
    <section className="rent-section">
      {rentData.map((rent) => (
        <RentItems
          key={rent.id}
          title={rent.title}
          cover={rent.cover}
        ></RentItems>
      ))}
    </section>
  );
}
export default RentSection;
