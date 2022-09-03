import "../style/css/BannerHome.css";
import "../style/css/BannerAbout.css";
function BannerHome({ Home }) {
  return (
    <div className={Home ? "banner-home" : "banner-about"}>
      <div className="banner-background">
        {Home ? (
          <h1 className="banner-title">Chez vous, partout et ailleurs</h1>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default BannerHome;
