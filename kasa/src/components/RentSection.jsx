import data from "../__mocks__/data.json";
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
          id={rent.id}
        ></RentItems>
      ))}
    </section>
  );
}
export default RentSection;
