import DropdownAbout from "./DropdownAbout";
import dataAbout from "../__mocks__/aboutData.json";

function DropdownAboutSection() {
  const data = dataAbout;
  return (
    <section className="dropdown-section">
      {data.map((about) => (
        <DropdownAbout
          title={about.title}
          description={about.description}
          id={about.id}
          key={about.id}
        ></DropdownAbout>
      ))}
    </section>
  );
}

export default DropdownAboutSection;
