import "../style/css/Home.css";
import BannerHome from "../components/BannerHome";
import RentSection from "../components/RentSection";

function Home() {
  return (
    <main className="home-container">
      <BannerHome></BannerHome>
      <RentSection></RentSection>
    </main>
  );
}

export default Home;
