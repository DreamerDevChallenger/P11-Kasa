import BannerAbout from "../components/BannerAbout";
import DropdownAboutSection from "../components/DropdownAboutSection";

import "../style/css/About.css";

function About() {
  return (
    <main className="about-container">
      <BannerAbout></BannerAbout>
      <DropdownAboutSection></DropdownAboutSection>
    </main>
  );
}
export default About;
