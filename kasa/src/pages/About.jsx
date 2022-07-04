import BackgroundAbout from "../components/BackgroundAboutPicture";
import DropdownAbout from "../components/DropdownAbout";
import dataAbout from "../data/aboutData.json";
import "../style/css/About.css";

function About() {
  const data = dataAbout;
  return (
    <section className="about-container">
      <BackgroundAbout></BackgroundAbout>
      <div className="dropdown-section">
        {data.map((about) => (
          <DropdownAbout
            title={about.title}
            description={about.description}
            id={about.id}
            key={about.id}
          ></DropdownAbout>
        ))}
      </div>
    </section>
  );
}
export default About;
