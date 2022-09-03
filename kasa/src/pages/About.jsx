import Banner from "../components/Banner";
import DropdownAboutSection from "../components/DropdownAboutSection";

import "../style/css/About.css";

function About() {
  return (
    <main className="about-container">
      <Banner Home={false}></Banner>
      <DropdownAboutSection></DropdownAboutSection>
    </main>
  );
}
export default About;
