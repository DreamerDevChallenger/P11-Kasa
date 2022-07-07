import "./style/css/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes as Navigation,
} from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";
import ScrollToTop from "./utils/ScrollToTop";
import Appartement from "./pages/Apartment";
import data from "./data/data.json";

function App() {
  const rentIdData = data;
  console.log("test");
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Header></Header>
          <Navigation>
            <Route exact path="/" element={<Home></Home>}></Route>
            <Route exact path="/about" element={<About></About>}></Route>
            {rentIdData.map((rent) => (
              <Route
                exact
                path={"/apartment/" + rent.id + "/:title"}
                key={rent.id}
                element={
                  <Appartement
                    id={rent.id}
                    title={rent.title}
                    cover={rent.cover}
                    pictures={rent.pictures}
                    description={rent.description}
                    host={rent.host}
                    rating={rent.rating}
                    location={rent.location}
                    equipments={rent.equipments}
                    tags={rent.tags}
                  ></Appartement>
                }
              ></Route>
            ))}
            <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
          </Navigation>
          <Footer></Footer>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
