import "../style/css/Home.css";
import Banner from "../components/Banner";
import RentSection from "../components/RentSection";

function Home() {
  return (
    <main className="home-container">
      <Banner Home={true}></Banner>
      <RentSection></RentSection>
    </main>
  );
}

export default Home;
