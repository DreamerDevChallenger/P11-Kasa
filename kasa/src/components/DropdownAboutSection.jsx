import Dropdown from "./Dropdown";
import dataAbout from "../__mocks__/aboutData.json";

function DropdownAboutSection() {
  const data = dataAbout;
  return (
    <section className="dropdown-section">
      {data.map((about) => (
        <Dropdown
          title={about.title}
          description={about.description}
          id={about.id}
          key={about.id}
          isAbout={true}
        ></Dropdown>
      ))}
    </section>
  );
}

export default DropdownAboutSection;
