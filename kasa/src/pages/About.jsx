import BannerAbout from "../components/BannerAbout";
import DropdownAbout from "../components/DropdownAbout";
import dataAbout from "../data/aboutData.json";
import "../style/css/About.css";

function About() {
  const data = dataAbout;
  return (
    <main className="about-container">
      <BannerAbout></BannerAbout>
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
    </main>
  );
}
export default About;
